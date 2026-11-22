"""Servidor local para War Planner MCOC.
Ejecuta: python server.py; abre http://localhost:8787.
Comparte toda la logica de API con api/_core.py (compatible con Vercel).
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from pathlib import Path
import json, os, socket, sys

ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'api'))
import _core as core


def get_cloudflare_url():
    cf_file = core.CACHE / 'cloudflare_url.txt'
    if cf_file.exists():
        try:
            u = cf_file.read_text(encoding='utf-8').strip()
            if u.startswith('http'):
                return u
        except Exception:
            pass
    return None


def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(0.5)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        try:
            return socket.gethostbyname(socket.gethostname())
        except Exception:
            return '127.0.0.1'


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        p = urlparse(self.path).path
        if p.endswith('.html') or p.endswith('.js') or p.endswith('.css') or p == '/' or p.endswith('sw.js'):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def get_auth_token(self, parsed_path=None):
        auth_header = self.headers.get('Authorization', '')
        if auth_header.startswith('Bearer '):
            return auth_header[7:].strip()
        cookie_header = self.headers.get('Cookie', '')
        for part in cookie_header.split(';'):
            part = part.strip()
            if part.startswith('war_session='):
                return part.split('=', 1)[1].strip()
        if parsed_path:
            q = parse_qs(parsed_path.query)
            if 'token' in q:
                return q['token'][0].strip()
        return None

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def do_POST(self):
        p = urlparse(self.path)
        try:
            length = int(self.headers.get('Content-Length', 0))
            body_bytes = self.rfile.read(length) if length > 0 else b'{}'
            try:
                body = json.loads(body_bytes.decode('utf-8'))
            except Exception:
                body = {}

            if p.path == '/api/auth/login':
                code = str(body.get('code', '')).strip()
                if not core.verify_access_code(code):
                    return self.api({'error': 'Invalid access code.'}, 401)

                token = core.create_auth_token()
                res_data = {'success': True, 'token': token}
                b = json.dumps(res_data, ensure_ascii=False).encode()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(b)))
                self.send_header('Set-Cookie', f'war_session={token}; Path=/; SameSite=Lax; Max-Age={core.TOKEN_TTL_SECONDS}')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b)
                return

            if p.path == '/api/auth/logout':
                res_data = {'success': True}
                b = json.dumps(res_data, ensure_ascii=False).encode()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(b)))
                self.send_header('Set-Cookie', 'war_session=; Path=/; Max-Age=0')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(b)
                return

        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            return
        except Exception as e:
            return self.api({'error': str(e)}, 500)

        try:
            self.send_error(404, "Endpoint not found")
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass

    def do_GET(self):
        p = urlparse(self.path)
        if p.path == '/favicon.ico':
            try:
                self.send_response(204)
                self.end_headers()
            except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
                pass
            return

        try:
            if p.path == '/api/auth/status':
                token = self.get_auth_token(p)
                return self.api({'authenticated': core.verify_auth_token(token)})
            if p.path == '/api/info':
                lip = get_local_ip()
                cf_url = get_cloudflare_url()
                return self.api({
                    'mode': 'local',
                    'local_ip': lip,
                    'port': 8787,
                    'lan_url': f'http://{lip}:8787',
                    'cloudflare_url': cf_url
                })
            if p.path == '/api/champions':
                rows, _ = core.champions()
                return self.api(rows)
            if p.path == '/api/counters':
                q = parse_qs(p.query)
                node = int(q['node'][0])
                defender = q['defender'][0]
                map_type = q.get('map', ['STANDARD'])[0].upper()
                res, _ = core.counters(node, defender, map_type)
                return self.api(res)
            if p.path == '/api/img':
                q = parse_qs(p.query)
                img_url = q['url'][0]
                return self.proxy_image(img_url)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            return
        except Exception as e:
            return self.api({'error': str(e)}, 502)

        try:
            return super().do_GET()
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass

    def api(self, x, status=200):
        try:
            b = json.dumps(x, ensure_ascii=False).encode()
            self.send_response(status)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(b)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass

    def proxy_image(self, url):
        try:
            img_data, content_type = core.fetch_cached_image(url)
            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', str(len(img_data)))
            self.send_header('Cache-Control', 'public, max-age=604800')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(img_data)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            pass
        except Exception as e:
            self.api({'error': f'Image proxy failed: {e}'}, 502)

    def log_message(self, fmt, *args):
        try:
            msg_str = str(args[0]) if args else ''
            if any(ext in msg_str for ext in ['.css', '.js', '.ico', '/api/img']):
                return
        except Exception:
            pass
        super().log_message(fmt, *args)


class ReusableServer(ThreadingHTTPServer):
    allow_reuse_address = (os.name != 'nt')
    daemon_threads = True

    def handle_error(self, request, client_address):
        exc_type, exc_val, exc_tb = sys.exc_info()
        if exc_type in (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            return
        super().handle_error(request, client_address)


if __name__ == '__main__':
    import webbrowser
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

    PORT = 8787
    local_ip = get_local_ip()
    local_url = f'http://localhost:{PORT}'
    lan_url = f'http://{local_ip}:{PORT}'

    print('', flush=True)
    print('=' * 62, flush=True)
    print('  WAR PLANNER - MCOC TACTICAL SUITE (MODO RED LOCAL)', flush=True)
    print(f'  En esta PC:    {local_url}', flush=True)
    print(f'  En tu Red/LAN: {lan_url}', flush=True)
    print('=' * 62, flush=True)
    print('  Mapas: Estandar (50 nodos) | Big Thing (10 nodos)', flush=True)
    print('  Para detener el servidor presiona Ctrl + C', flush=True)
    print('=' * 62, flush=True)

    try:
        webbrowser.open(local_url)
    except Exception:
        pass

    try:
        server = ReusableServer(('0.0.0.0', PORT), Handler)
        server.serve_forever()
    except OSError as e:
        if '10048' in str(e) or 'Address already in use' in str(e):
            print(f'\n[INFO] El puerto {PORT} ya esta en uso por otra instancia.', flush=True)
        else:
            print(f'\n[ERROR] al iniciar servidor: {e}', flush=True)
    except KeyboardInterrupt:
        print('\nServidor detenido correctamente.', flush=True)
