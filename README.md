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

Create a `.env` file if you want it enabled:

```env
STEAM_API_KEY=your_steam_api_key
SESSION_SECRET=your_session_secret
PUBLIC_URL=http://localhost:3002
PORT=3002
```

Do not commit `.env`.

## Edit games

Game data lives in:

```text
src/games.js
```
