# Character Sheet: Defenders of Tokyo 3ª Edição - 3D&T

A web character sheet and 1-vs-1 battle simulator for **3D&T** ("Defensores de Tóquio"), a
Brazilian tabletop RPG loosely inspired by Dungeon & Dragons. It started as a CS50 final project
(Python + SQL) and was later rewritten in React.

If you want to know more about 3D&T, see the English overview on Wikipedia:
https://en.wikipedia.org/wiki/3D%26T

The character sheet UI itself is in Portuguese, matching the original game material; this README
is in English.

## What's here

| Folder | What it is |
| --- | --- |
| [`frontend/`](frontend) | The React app: character sheet, character creation, and the battle simulator |
| [`backend/`](backend) | A [json-server](https://github.com/typicode/json-server) mock API that persists characters to `db.json` |
| [`mobile/`](mobile) | Empty placeholder for a future mobile client — not implemented yet |

## Features

- **Home / Battle** (`/`) — pick two saved characters and run an automated fight between them,
  following the game's combat rules (initiative, attack/defense force, dodging, critical hits).
- **Add character** (`/add-character`) — create a new character by spending points across
  Strength, Skills, Constitution, Armor and Firepower.
- **Character sheet** (`/character-sheet`) — the full sheet: characteristics, life/magic points,
  damage types, known spells, advantages/disadvantages, races, kits, and character history.
- **Rules** (`/rules`) — an in-app explanation of the 3D&T system (characteristics, dice, combat
  turns, dodging, critical hits).
- **Edit character**, **Delete character**, standalone **Advantages** page — routes exist in the
  nav but are still stubs ("under construction").

## Tech stack

- [React 19](https://react.dev/) with hooks-based function components
- [Vite](https://vitejs.dev/) for the dev server and production build (frontend only — the app
  used to run on Create React App, which is now deprecated)
- [react-router-dom v7](https://reactrouter.com/) (`HashRouter`, so the built app works as static
  files on GitHub Pages without server-side routing)
- [styled-components v6](https://styled-components.com/) for component styling, plus Bootstrap 4
  for base layout/utility classes
- [json-server](https://github.com/typicode/json-server) as a zero-code mock REST API for the
  backend
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react/) for
  unit tests

## Running locally

You need two terminals — the frontend expects the backend on `http://localhost:3004`.

```bash
# 1. backend (mock API), from backend/
npm install
npm start          # json-server on http://localhost:3004

# 2. frontend, from frontend/
npm install
npm run dev         # vite dev server on http://localhost:3040
```

Then open http://localhost:3040. Characters you add are written to `backend/db.json`.

## Frontend scripts

Run from `frontend/`:

| Script | What it does |
| --- | --- |
| `npm run dev` / `npm start` | Start the Vite dev server with hot reload |
| `npm run build` | Production build, output to `frontend/build` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest test suite once |
| `npm run test:watch` | Run the test suite in watch mode |
| `npm run deploy` | Build and publish `frontend/build` to GitHub Pages (`gh-pages`) |

## Backend

`backend/db.json` is the database json-server reads/writes directly — it ships with a handful of
sample characters. `npm start` in `backend/` runs `json-server --watch db.json --port 3004`,
exposing a REST API at `/characters` (`GET`/`POST`, etc.) that the frontend's
[`services/api.js`](frontend/src/services/api.js) talks to.

## Deployment

The frontend is configured to deploy to GitHub Pages via `npm run deploy` (see the `homepage`
field in `frontend/package.json`). Because it uses `HashRouter`, the built static files work
correctly on GitHub Pages without any server-side rewrite rules. The mock backend is local-only
and isn't part of that deployment — swap `services/api.js`'s `url` for a real API if you need the
deployed app to persist characters somewhere.
