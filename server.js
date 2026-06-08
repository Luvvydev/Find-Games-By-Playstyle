import 'dotenv/config';
import crypto from 'node:crypto';
import express from 'express';
import session from 'express-session';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3002);
const PUBLIC_URL = (process.env.PUBLIC_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
const STEAM_OPENID_ENDPOINT = 'https://steamcommunity.com/openid/login';

app.set('trust proxy', 1);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  name: 'skillmap.sid',
  secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: PUBLIC_URL.startsWith('https://'),
    maxAge: 1000 * 60 * 60 * 24 * 14,
  },
}));

function steamReturnUrl() {
  return `${PUBLIC_URL}/auth/steam/return`;
}

function extractSteamId(claimedId = '') {
  const match = String(claimedId).match(/\/openid\/id\/(\d+)$/);
  return match ? match[1] : '';
}

function requireSteam(req, res, next) {
  if (!req.session.steamid) {
    res.status(401).json({ error: 'Steam is not connected.' });
    return;
  }
  next();
}

app.get('/api/steam/config', (_req, res) => {
  res.json({ ready: Boolean(process.env.STEAM_API_KEY), publicUrl: PUBLIC_URL });
});

app.get('/api/me/steam', (req, res) => {
  res.json({ connected: Boolean(req.session.steamid), steamid: req.session.steamid || '' });
});

app.get('/auth/steam', (_req, res) => {
  const params = new URLSearchParams({
    'openid.ns': 'http://specs.openid.net/auth/2.0',
    'openid.mode': 'checkid_setup',
    'openid.return_to': steamReturnUrl(),
    'openid.realm': `${PUBLIC_URL}/`,
    'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
  });

  res.redirect(`${STEAM_OPENID_ENDPOINT}?${params.toString()}`);
});

app.get('/auth/steam/return', async (req, res) => {
  try {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(req.query)) {
      if (Array.isArray(value)) params.set(key, value[0]);
      else if (value != null) params.set(key, String(value));
    }
    params.set('openid.mode', 'check_authentication');

    const verification = await fetch(STEAM_OPENID_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const body = await verification.text();

    if (!body.includes('is_valid:true')) {
      throw new Error('Steam OpenID verification failed.');
    }

    const steamid = extractSteamId(req.query['openid.claimed_id']);
    if (!steamid) throw new Error('SteamID missing from claimed ID.');

    req.session.steamid = steamid;
    res.redirect('/?steam=connected');
  } catch (error) {
    console.error('[steam auth]', error);
    res.redirect('/?steam=error');
  }
});

app.post('/auth/steam/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

app.get('/api/steam/library', requireSteam, async (req, res) => {
  try {
    if (!process.env.STEAM_API_KEY) {
      res.status(500).json({ error: 'STEAM_API_KEY is missing on the backend.' });
      return;
    }

    const params = new URLSearchParams({
      key: process.env.STEAM_API_KEY,
      steamid: req.session.steamid,
      include_appinfo: 'true',
      include_played_free_games: 'true',
      format: 'json',
    });

    const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?${params.toString()}`);
    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: 'Steam library request failed.' });
      return;
    }

    const games = data?.response?.games || [];
    res.json({ steamid: req.session.steamid, game_count: data?.response?.game_count || games.length, games });
  } catch (error) {
    console.error('[steam library]', error);
    res.status(500).json({ error: 'Could not load Steam library.' });
  }
});

app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  },
}));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SkillMap running at http://localhost:${PORT}`);
  console.log(`Steam callback: ${steamReturnUrl()}`);
});
