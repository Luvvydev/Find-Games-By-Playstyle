# Find Games By Playstyle

Find Games By Playstyle is a small game recommendation app.

It helps you find games based on how you like to play

## What it does

* Quiz based recommendations
* Browseable game database
* Filters for playstyle, pacing, stress, friction, team reliance, and more
* Micro, meso, and macro scoring for each game
* Optional Steam login to hide games you already own

## The scoring idea

Micro means execution, aim, timing, movement, and inputs.

Meso means reads, adaptation, hidden information, and opponent behavior.

Macro means planning, routing, economy, systems, and long term decisions.


## Run locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:3002
```

## Steam login

Steam login is optional.

Local Steam login works through `server.js`:

```bash
cp .env.example .env
npm install
npm start
```

For GitHub Pages, the frontend is static and the Steam login needs a separate Node backend. This repo includes `render.yaml` for deploying the backend to Render at:

```text
https://find-games-by-playstyle.onrender.com
```

If your backend URL is different, update `SKILLMAP_STEAM_BACKEND_URL` in `index.html`. More details are in `README_STEAM_BACKEND.md`.

Do not commit `.env`.

## Edit games

Game data lives in:

```text
src/games.js
```
