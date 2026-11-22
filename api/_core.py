"""Core logic for War Planner MCOC API (shared by Vercel Serverless & local server.py)."""
from urllib.parse import urlparse, urlencode
from urllib.request import Request, urlopen
from html.parser import HTMLParser
from pathlib import Path
import os, json, re, time, hashlib, hmac, gzip, zlib, threading, tempfile

IS_VERCEL = bool(os.environ.get('VERCEL') or os.environ.get('VERCEL_ENV'))
ROOT = Path(__file__).resolve().parent.parent

if IS_VERCEL:
    CACHE = Path(tempfile.gettempdir()) / 'war_planner_cache'
else:
    CACHE = ROOT / '.cache'

CACHE.mkdir(parents=True, exist_ok=True)
IMG_CACHE = CACHE / 'img'
IMG_CACHE.mkdir(parents=True, exist_ok=True)

_raw_codes = os.environ.get('WAR_PLANNER_CODES') or os.environ.get('WAR_PLANNER_CODE') or 'theboys'
AUTH_CODES = [c.strip().lower() for c in _raw_codes.split(',') if c.strip()] or ['theboys']
AUTH_CODE = AUTH_CODES[0]
AUTH_SECRET = os.environ.get('WAR_PLANNER_SECRET', f"war-planner-hmac-v1-{','.join(AUTH_CODES)}").encode('utf-8')
TOKEN_TTL_SECONDS = 2592000  # 30 days
CEREBRO_SEMAPHORE = threading.Semaphore(8)


def verify_access_code(code):
    """Validates an access code against configured WAR_PLANNER_CODES / WAR_PLANNER_CODE."""
    if not code:
        return False
    candidate = str(code).strip().lower()
    return any(hmac.compare_digest(candidate, valid) for valid in AUTH_CODES)

MAP_URLS = {
    'STANDARD': 'https://cerebro-bot.com/war-videos?map=STANDARD',
    'BIG_THING': 'https://cerebro-bot.com/war-videos?map=BIG_THING',
}

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Encoding': 'gzip, deflate',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}


def create_auth_token():
    """Creates a stateless HMAC-SHA256 signed session token (works on Vercel & local)."""
    exp = str(int(time.time()) + TOKEN_TTL_SECONDS)
    sig = hmac.new(AUTH_SECRET, exp.encode('utf-8'), hashlib.sha256).hexdigest()
    return f'{exp}.{sig}'


def verify_auth_token(token):
    """Verifies a stateless HMAC-SHA256 session token."""
    if not token or '.' not in token:
        return False
    try:
        exp_str, sig = token.split('.', 1)
        if int(exp_str) < int(time.time()):
            return False
        expected = hmac.new(AUTH_SECRET, exp_str.encode('utf-8'), hashlib.sha256).hexdigest()
        return hmac.compare_digest(sig, expected)
    except Exception:
        return False


def fetch_until_marker(url, stop_marker='</tbody>', retries=1, timeout=14):
    """Streaming HTTP fetch with incremental gzip/deflate decompression.
    Stops reading as soon as `stop_marker` appears, skipping ~15MB of trailing Next.js payload.
    """
    for attempt in range(retries + 1):
        try:
            req = Request(url, headers=HEADERS)
            with urlopen(req, timeout=timeout) as resp:
                enc = (resp.headers.get('Content-Encoding') or '').lower()
                dec = None
                if 'gzip' in enc:
                    dec = zlib.decompressobj(16 + zlib.MAX_WBITS)
                elif 'deflate' in enc:
                    dec = zlib.decompressobj()

                parts = []
                tail = ''
                first_chunk = True
                while True:
                    chunk = resp.read(16384)
                    if not chunk:
                        break
                    if first_chunk:
                        first_chunk = False
                        if dec is None and len(chunk) > 2 and chunk[:2] == b'\x1f\x8b':
                            dec = zlib.decompressobj(16 + zlib.MAX_WBITS)
                    data_bytes = dec.decompress(chunk) if dec is not None else chunk
                    if not data_bytes:
                        continue
                    text = data_bytes.decode('utf-8', errors='replace')
                    parts.append(text)
                    window = tail + text
                    if stop_marker and stop_marker in window:
                        break
                    tail = text[-64:]
                return ''.join(parts)
        except Exception as e:
            if attempt == retries:
                raise e
            time.sleep(0.25)


def fetch(url, retries=2, timeout=14):
    """Realiza peticion HTTP con soporte gzip y reintentos automaticos."""
    for attempt in range(retries + 1):
        try:
            req = Request(url, headers=HEADERS)
            with urlopen(req, timeout=timeout) as resp:
                content = resp.read()
                if resp.headers.get('Content-Encoding') == 'gzip' or (len(content) > 2 and content[:2] == b'\x1f\x8b'):
                    content = gzip.decompress(content)
                return content.decode('utf-8', errors='replace')
        except Exception as e:
            if attempt == retries:
                raise e
            time.sleep(0.35)


def fetch_bytes(url, retries=1, timeout=12):
    """Descarga binarios (imagenes) con reintentos."""
    for attempt in range(retries + 1):
        try:
            req = Request(url, headers=HEADERS)
            with urlopen(req, timeout=timeout) as resp:
                content = resp.read()
                if resp.headers.get('Content-Encoding') == 'gzip' or (len(content) > 2 and content[:2] == b'\x1f\x8b'):
                    content = gzip.decompress(content)
                return content
        except Exception as e:
            if attempt == retries:
                raise e
            time.sleep(0.25)


def champions():
    """Obtiene la lista completa de campeones MCOC desde CereBro."""
    cache = CACHE / 'champions.json'
    if cache.exists() and time.time() - cache.stat().st_mtime < 86400:
        try:
            data = json.loads(cache.read_text(encoding='utf-8'))
            if data and len(data) > 0 and 'class' in data[0]:
                return data, True
        except Exception:
            pass

    pattern = r'\{\\\"id\\\":(\d+),(?:\\\"gameId\\\":\\\"[^\\]+\\\",)?\\\"name\\\":\\\"([^\\]+)\\\",\\\"slug\\\":\\\"([^\\]+)\\\",\\\"images\\\":\{.*?\\\"p_64\\\":\\\"([^\\]+)\\\".*?\\\"class\\\":\\\"([^\\]+)\\\"'
    try:
        with CEREBRO_SEMAPHORE:
            raw = fetch(MAP_URLS['STANDARD'])
        rows = [
            {'id': int(i), 'name': n, 'slug': s, 'image': img, 'class': c}
            for i, n, s, img, c in re.findall(pattern, raw)
        ]
        rows = list({x['id']: x for x in rows}.values())
        if rows:
            try:
                cache.write_text(json.dumps(rows, ensure_ascii=False), encoding='utf-8')
            except Exception:
                pass
            return rows, True
    except Exception as e:
        print(f"[WARN] Error consultando campeones de CereBro: {e}")
        if cache.exists():
            try:
                return json.loads(cache.read_text(encoding='utf-8')), False
            except Exception:
                pass
    return [], False


class Rows(HTMLParser):
    """Parseador HTML para la tabla de peleas de CereBro: TD4=atacante, TD5=defensor, TD6=preluchas."""
    def __init__(self):
        super().__init__()
        self.in_tr = 0
        self.in_td = 0
        self.td_index = 0
        self.td_images = {}
        self.rows = []

    def handle_starttag(self, t, a):
        attrs = dict(a)
        if t == 'tr':
            self.in_tr += 1
            self.td_index = 0
            self.td_images = {}
        elif t == 'td' and self.in_tr:
            self.in_td += 1
            self.td_index += 1
            self.td_images.setdefault(self.td_index, [])
        elif t == 'img' and self.in_tr and self.in_td:
            alt = attrs.get('alt', '')
            if alt and alt != 'CereBro Logo':
                self.td_images[self.td_index].append(alt)

    def handle_endtag(self, t):
        if t == 'td' and self.in_td:
            self.in_td -= 1
        elif t == 'tr' and self.in_tr:
            if self.td_images:
                self.rows.append(dict(self.td_images))
            self.in_tr -= 1


def parse_fight_rows(raw_html, target_defender):
    """Parsea el HTML de CereBro (solo <tbody>) y extrae conteos de atacantes y preluchas."""
    start = raw_html.find('<tbody')
    if start != -1:
        end = raw_html.find('</tbody>', start)
        snippet = raw_html[start:end + 8] if end != -1 else raw_html[start:]
    else:
        snippet = raw_html

    parser = Rows()
    parser.feed(snippet)
    counts = {}
    prefights = {}
    for row in parser.rows:
        atk_list = row.get(4, [])
        def_list = row.get(5, [])
        pre_list = row.get(6, [])
        if not atk_list or not def_list:
            continue
        attacker = atk_list[0]
        found_def = def_list[0]
        if found_def.lower() != target_defender.lower():
            continue
        counts[attacker] = counts.get(attacker, 0) + 1
        if pre_list:
            if attacker not in prefights:
                prefights[attacker] = {}
            for pf in pre_list:
                prefights[attacker][pf] = prefights[attacker].get(pf, 0) + 1
    return counts, prefights


def counters(node, defender, map_type='STANDARD'):
    """Busca counters para un defensor en un nodo especifico en CereBro.
    Usa streaming hasta </tbody> en 1 sola peticion para maxima velocidad.
    Retorna (result_list, fetch_success).
    """
    key = re.sub(r'[^a-z0-9]+', '_', defender.lower()).strip('_')
    map_prefix = 'bt' if map_type == 'BIG_THING' else 'std'
    cache_file = CACHE / f'v2_{map_prefix}_n{node}_{key}.json'
    if cache_file.exists() and time.time() - cache_file.stat().st_mtime < 604800:
        try:
            data = json.loads(cache_file.read_text(encoding='utf-8'))
            if data is not None:
                return data, True
        except Exception:
            pass

    base_url = MAP_URLS.get(map_type, MAP_URLS['STANDARD'])
    query = {'node': node, 'defender': defender, 'outcome': 'solo'}
    url = base_url + '&' + urlencode(query)

    counts, prefights = {}, {}
    fetch_success = False
    try:
        with CEREBRO_SEMAPHORE:
            raw = fetch_until_marker(url, stop_marker='</tbody>', retries=1, timeout=14)
        counts, prefights = parse_fight_rows(raw, defender)
        fetch_success = True
    except Exception as e:
        print(f"[WARN] Error consultando counters para nodo {node} {defender}: {e}")

    result = []
    for name, fight_count in sorted(counts.items(), key=lambda x: (-x[1], x[0])):
        entry = {'name': name, 'fights': fight_count}
        if name in prefights:
            pf_sorted = sorted(prefights[name].items(), key=lambda x: -x[1])
            entry['prefights'] = [{'name': pn, 'count': pc} for pn, pc in pf_sorted]
        result.append(entry)

    if fetch_success:
        try:
            cache_file.write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')
        except Exception:
            pass
    elif cache_file.exists():
        try:
            return json.loads(cache_file.read_text(encoding='utf-8')), False
        except Exception:
            pass

    return result, fetch_success


def fetch_cached_image(url):
    """Descarga y cachea una imagen remota de forma segura."""
    parsed = urlparse(url)
    if parsed.scheme not in ('http', 'https') or not parsed.netloc:
        raise ValueError('Invalid image URL')
    url_hash = hashlib.md5(url.encode('utf-8')).hexdigest()
    lower = parsed.path.lower()
    ext = '.png' if lower.endswith('.png') else '.webp' if lower.endswith('.webp') else '.jpg'
    cached = IMG_CACHE / (url_hash + ext)
    if cached.exists() and time.time() - cached.stat().st_mtime < 604800:
        img_data = cached.read_bytes()
    else:
        img_data = fetch_bytes(url)
        try:
            cached.write_bytes(img_data)
        except Exception:
            pass
    ct = {'png': 'image/png', 'webp': 'image/webp', 'jpg': 'image/jpeg'}
    content_type = ct.get(ext.lstrip('.'), 'image/png')
    return img_data, content_type
