# victoribironke.com

My corner of the internet: projects, writing, and a few live windows into what I'm up to (Spotify and chess.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) and React 19
- [Tailwind CSS 4](https://tailwindcss.com), with design tokens in `src/app/globals.css`
- [Sanity](https://www.sanity.io) for projects and posts. The Studio lives at `/studio` (or type `studio` anywhere on the site)
- [Upstash Redis](https://upstash.com) to store Spotify tokens

## Structure

```
src/
  app/
    (site)/
      page.tsx         # home: dark poster with nav, live meta, bio and wordmark
      (inner)/         # light pages under the wordmark: projects, blog, interests
    (studio)/studio/   # embedded Sanity Studio
    api/now-playing/   # Spotify "now playing" endpoint
    sitemap.ts, robots.ts, not-found.tsx
  components/          # kebab-case files, arrow-function components
  hooks/               # client hooks (Spotify polling)
  lib/                 # constants, utils, and server-only data (chess, spotify, redis)
  sanity/              # client, queries, schema types
```

## Getting started

```bash
npm install
npm run dev
```

Environment variables (`.env.local`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=   # optional
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

`spotify-auth.html` is a one-off helper for getting the initial Spotify refresh token.

## Scripts

| Script               | What it does                  |
| -------------------- | ----------------------------- |
| `npm run dev`        | Start the dev server          |
| `npm run build`      | Production build              |
| `npm run lint`       | ESLint                        |
| `npm run type-check` | TypeScript                    |
| `npm run format`     | Prettier (with class sorting) |
| `npm run check`      | Lint + type-check             |
