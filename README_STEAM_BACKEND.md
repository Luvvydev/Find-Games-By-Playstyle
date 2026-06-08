# Steam backend setup

This app needs a backend for Steam login because the Steam API key must stay private.

## 1. Get a Steam Web API key

Go to the Steam Web API key page while logged into Steam:

https://steamcommunity.com/dev/apikey

Use this local domain while developing:

localhost

Do not commit your real API key.

## 2. Create `.env`

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env`:

```bash
STEAM_API_KEY=your_real_key_here
SESSION_SECRET=make_this_a_long_random_string
PUBLIC_URL=http://localhost:3002
PORT=3002
```

## 3. Run the site through Node, not Python

```bash
npm install
npm start
```

Open:

```bash
http://localhost:3002
```

Now Connect Steam redirects through the backend, verifies Steam OpenID, loads owned games, and hides owned games from recommendations.

## Notes

If Steam returns zero games, the user's Steam profile game details may be private.
For deployment, set `PUBLIC_URL` to the deployed HTTPS domain and add that domain to the Steam API key page.
