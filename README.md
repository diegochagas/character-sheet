# Character Sheet: Defenders of Tokyo 3ª Edição - 3D&T

A web character sheet and 1-vs-1 battle simulator for **3D&T** ("Defensores de Tóquio"), a
Brazilian tabletop RPG loosely inspired by Dungeon & Dragons. It started as a CS50 final project
(Python + SQL) and was later rewritten in React.

If you want to know more about 3D&T, see the English overview on Wikipedia:
https://en.wikipedia.org/wiki/3D%26T

The character sheet UI itself is in Portuguese, matching the original game material; this README
is in English.

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
- [Vite](https://vitejs.dev/) for the dev server and production build (the app used to run on
  Create React App, which is now deprecated)
- [react-router-dom v7](https://reactrouter.com/) (`HashRouter`, so the built app works as static
  files on GitHub Pages without server-side routing)
- [styled-components v6](https://styled-components.com/) for component styling, plus Bootstrap 4
  for base layout/utility classes
- [json-server](https://github.com/typicode/json-server) as a zero-code mock REST API, backed by
  `db.json`
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react/) for
  unit tests

## Project structure

A single, standard frontend project layout at the repo root — no `frontend`/`backend`/`mobile`
split:

```
src/            React app (components, pages, routes, styles, services)
public/         Static assets served as-is (favicon, manifest, logo)
index.html      Vite entry HTML
db.json         json-server's database file (the mock API)
vite.config.js  Vite + Vitest config
```

## Running locally

Two terminals — the app expects the mock API on `http://localhost:3004`.

```bash
npm install

npm run mock-api    # terminal 1: json-server on http://localhost:3004
npm run dev          # terminal 2: vite dev server on http://localhost:3040
```

Then open http://localhost:3040. Characters you add are written to `db.json`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` / `npm start` | Start the Vite dev server with hot reload |
| `npm run mock-api` | Start the json-server mock API on port 3004 (reads/writes `db.json`) |
| `npm run build` | Production build, output to `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest test suite once |
| `npm run test:watch` | Run the test suite in watch mode |
| `npm run deploy` | Build and publish `build/` to GitHub Pages (`gh-pages`) |

## Deployment

The app is configured to deploy to GitHub Pages via `npm run deploy` (see the `homepage` field in
`package.json`). Because it uses `HashRouter`, the built static files work correctly on GitHub
Pages without any server-side rewrite rules. The mock API is local-only and isn't part of that
deployment — swap `src/services/api.js`'s `url` for a real API if you need the deployed app to
persist characters somewhere.
