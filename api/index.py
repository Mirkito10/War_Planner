"""Vercel Serverless Function entrypoint for War Planner MCOC (/api/*)."""
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from pathlib import Path
import json, sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
import _core as core


class handler(BaseHTTPRequestHandler):
    def _extract_route(self):
        parsed = urlparse(self.path)
        query = parse_qs(parsed.query)
        path = parsed.path.rstrip('/')
        if path.startswith('/api/') and path not in ('/api', '/api/index', '/api/index.py'):
            route = path[5:].lstrip('/')
        else:
            route = (query.get('__route', [''])[0] or '').strip('/')
        return route, query

    def _get_auth_token(self, query):
        auth_header = self.headers.get('Authorization', '')
        if auth_header.startswith('Bearer '):
            return auth_header[7:].strip()
        cookie_header = self.headers.get('Cookie', '')
        for part in cookie_header.split(';'):
            part = part.strip()
            if part.startswith('war_session='):
                return part.split('=', 1)[1].strip()
        if 'token' in query:
            return query['token'][0].strip()
        return None

    def _is_https(self):
        proto = self.headers.get('X-Forwarded-Proto', '')
        return proto.lower() == 'https' or core.IS_VERCEL

    def _send_json(self, payload, status=200, cache_control='no-store', extra_headers=None):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', cache_control)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        if extra_headers:
            items = extra_headers.items() if isinstance(extra_headers, dict) else extra_headers
            for k, v in items:
                self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def do_POST(self):
        route, query = self._extract_route()
        try:
            length = int(self.headers.get('Content-Length', 0))
            raw = self.rfile.read(length) if length > 0 else b'{}'
            try:
                body = json.loads(raw.decode('utf-8'))
            except Exception:
                body = {}

            if route == 'auth/login':
                code = str(body.get('code', '')).strip().lower()
                if code != core.AUTH_CODE.lower():
                    return self._send_json({'error': 'Código de acceso incorrecto.'}, 401)
                token = core.create_auth_token()
                secure_flag = '; Secure' if self._is_https() else ''
                # Scope cookie strictly to /api/auth so Vercel Edge CDN caches /api/counters & /api/champions
                auth_cookie = f'war_session={token}; Path=/api/auth; SameSite=Lax; Max-Age={core.TOKEN_TTL_SECONDS}{secure_flag}'
                clear_root = f'war_session=; Path=/; Max-Age=0; SameSite=Lax{secure_flag}'
                return self._send_json(
                    {'success': True, 'token': token},
                    status=200,
                    cache_control='no-store',
                    extra_headers=[('Set-Cookie', clear_root), ('Set-Cookie', auth_cookie)]
                )

            if route == 'auth/logout':
                secure_flag = '; Secure' if self._is_https() else ''
                clear_auth = f'war_session=; Path=/api/auth; Max-Age=0; SameSite=Lax{secure_flag}'
                clear_root = f'war_session=; Path=/; Max-Age=0; SameSite=Lax{secure_flag}'
                return self._send_json(
                    {'success': True},
                    status=200,
                    cache_control='no-store',
                    extra_headers=[('Set-Cookie', clear_root), ('Set-Cookie', clear_auth)]
                )

            return self._send_json({'error': f'Unknown endpoint: /api/{route}'}, 404)
        except Exception as e:
            return self._send_json({'error': str(e)}, 500)

    def do_GET(self):
        route, query = self._extract_route()
        try:
            if route == 'auth/status':
                token = self._get_auth_token(query)
                return self._send_json({'authenticated': core.verify_auth_token(token)}, 200, 'no-store')

            if route == 'info':
                return self._send_json({
                    'mode': 'vercel' if core.IS_VERCEL else 'local',
                    'local_ip': None,
                    'port': None,
                    'lan_url': None,
                    'cloudflare_url': None
                }, 200, 'no-store')

            if route == 'champions':
                rows, ok = core.champions()
                if ok and rows:
                    cc = 'public, max-age=3600, s-maxage=43200, stale-while-revalidate=86400'
                    return self._send_json(rows, 200, cc, {'Vercel-CDN-Cache-Control': 'public, s-maxage=43200, stale-while-revalidate=86400'})
                return self._send_json(rows, 200, 'no-store')

            if route == 'counters':
                if 'node' not in query or 'defender' not in query:
                    return self._send_json({'error': 'Missing node or defender parameter'}, 400)
                node = int(query['node'][0])
                defender = query['defender'][0]
                map_type = query.get('map', ['STANDARD'])[0].upper()
                res, ok = core.counters(node, defender, map_type)
                if ok:
                    cc = 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
                    return self._send_json(res, 200, cc, {'Vercel-CDN-Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800'})
                return self._send_json(res, 200, 'no-store')

            if route == 'img':
                if 'url' not in query:
                    return self._send_json({'error': 'Missing url parameter'}, 400)
                img_data, content_type = core.fetch_cached_image(query['url'][0])
                self.send_response(200)
                self.send_header('Content-Type', content_type)
                self.send_header('Content-Length', str(len(img_data)))
                self.send_header('Cache-Control', 'public, max-age=604800, s-maxage=604800')
                self.send_header('Vercel-CDN-Cache-Control', 'public, s-maxage=604800')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(img_data)
                return

            return self._send_json({'error': f'Unknown endpoint: /api/{route}'}, 404)
        except Exception as e:
            return self._send_json({'error': str(e)}, 502)
