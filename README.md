# Character Sheet: Defenders of Tokyo 3ª Edição - 3D&T

A web character sheet and 1-vs-1 battle simulator for **3D&T** ("Defensores de Tóquio"), a
Brazilian tabletop RPG loosely inspired by Dungeon & Dragons. It started as a CS50 final project
(Python + SQL), was later rewritten in React, and now runs on Next.js.

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

- [Next.js](https://nextjs.org/) (App Router) — dev server, build, and routing (file-based, under
  `src/app`)
- [React 19](https://react.dev/) with hooks-based function components
- [styled-components v6](https://styled-components.com/) for component styling (wired up for App
  Router SSR via `src/lib/StyledComponentsRegistry.jsx`), plus Bootstrap 4 for base layout/utility
  classes
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react/) for
  unit tests (independent of Next's own build — see `vitest.config.js`)

## Data

There's no backend. Characters (the seed roster — Goku, Vegeta, etc. — plus anything you add) live
in the browser's `localStorage`, seeded from a constant in `src/services/api.js` the first time
the app runs. That's per-browser/per-device storage: nothing is shared between visitors, and nothing
is lost by not having a server, deploy target, or database to manage.

## Project structure

```
src/app/          Routes (Next.js file-based routing) — one folder per URL, page.jsx per route
src/components/   Shared, cross-route components (Navbar, form inputs, etc.)
src/services/     The localStorage-backed character store + static rule data
src/styles/       Global styled-components styles (fonts, base CSS)
src/lib/          Framework plumbing (styled-components SSR registry)
public/           Static assets served as-is (favicon, manifest, fonts, logo)
```

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (or whatever port `next dev` prints).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally (run `build` first) |
| `npm test` | Run the Vitest test suite once |
| `npm run test:watch` | Run the test suite in watch mode |

## Deployment

Deploys to [Vercel](https://vercel.com/) with zero configuration — it's a standard Next.js app, so
`vercel` (or the Vercel GitHub integration) detects the framework and handles the build
automatically. Since there's no backend, there's nothing else to provision.
