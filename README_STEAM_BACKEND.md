# Steam backend setup

This app needs a Node backend for Steam login because the Steam API key must stay private. GitHub Pages only hosts the static frontend.

## Local setup

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env`:

```bash
STEAM_API_KEY=your_real_key_here
SESSION_SECRET=make_this_a_long_random_string
PUBLIC_URL=http://localhost:3002
FRONTEND_URL=http://localhost:3002
ALLOWED_ORIGINS=http://localhost:3002
PORT=3002
```

Run the app through Node:

```bash
npm install
npm start
```

Open:

```text
http://localhost:3002
```

## GitHub Pages setup

The static site now points Steam requests to:

```text
https://find-games-by-playstyle.onrender.com
```

That URL is set in `index.html`:

```js
window.SKILLMAP_STEAM_BACKEND_URL = window.location.hostname.endsWith("github.io")
  ? "https://find-games-by-playstyle.onrender.com"
  : "";
```

Deploy `server.js` separately on Render or another Node host. The included `render.yaml` is configured for Render with this backend URL.

Required backend environment values:

```env
STEAM_API_KEY=your_real_key_here
SESSION_SECRET=generated_or_long_random_string
PUBLIC_URL=https://find-games-by-playstyle.onrender.com
FRONTEND_URL=https://luvvydev.github.io/Find-Games-By-Playstyle
ALLOWED_ORIGINS=https://luvvydev.github.io
```

If Render gives the service a different URL, update both `PUBLIC_URL` on the backend and `SKILLMAP_STEAM_BACKEND_URL` in `index.html` to match that real HTTPS backend URL.

## Steam API key page

Go to:

```text
https://steamcommunity.com/dev/apikey
```

For local testing, use:

```text
localhost
```

For the deployed backend, use the backend host domain, for example:

```text
find-games-by-playstyle.onrender.com
```

Do not commit `.env` or your real API key.

## Notes

If Steam returns zero games, the user's Steam profile game details may be private.
