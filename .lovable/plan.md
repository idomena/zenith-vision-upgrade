
# Plan: Port this Imagine landing page into your Fastify backend

Your backend (Fastify + Prisma + BullMQ + Postgres/Redis on Railway) is a Node API service — it isn't a React renderer. So "adding the design" really means **building this Lovable app to static assets and letting Fastify serve them**, while keeping all API/queue logic untouched. Claude Code will do the wiring in your repo.

## Architecture choice

```text
┌─────────────────────────────────────────────────┐
│  Your Fastify repo (Railway)                    │
│                                                 │
│   /src/...           ← Fastify, Prisma, BullMQ  │
│   /web/              ← THIS Lovable project     │
│      ├─ src/                                    │
│      ├─ package.json                            │
│      └─ dist/        ← built static output      │
│                                                 │
│   Fastify serves /web/dist via @fastify/static  │
│   API routes live under /api/*                  │
└─────────────────────────────────────────────────┘
```

Two clean separations:
- `/api/*` → Fastify handlers (unchanged)
- everything else → static landing page from `web/dist`

## Step-by-step

### 1. Get this design into GitHub
In Lovable: **+ menu → GitHub → Connect project → Create Repository**. This pushes the full TanStack Start project (the landing page, components, tokens, assets) to a new repo. Two-way sync stays active so future tweaks in Lovable flow to GitHub automatically.

### 2. Bring the design into your backend repo
Open your Fastify repo in Claude Code and ask it to:

1. `git clone <lovable-repo-url> tmp-design`
2. Move the relevant files into a `web/` folder in the Fastify repo:
   - `src/` (routes, components, styles)
   - `public/`, `index.html` if present
   - `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind`-related configs
   - `src/styles.css` (design tokens — colors, fonts, glass/aurora utilities)
   - `src/assets/clouds-hero.jpg` and `src/assets/cloud-puff.png`
3. Delete `tmp-design`.

### 3. Decide what to keep from the TanStack shell
This project uses **TanStack Start** (SSR + Cloudflare Worker). For a Fastify backend you have two options — pick one:

- **Option A — Static build (recommended).** Strip out the Worker pieces (`src/server.ts`, `wrangler.jsonc`, server functions) and build to a plain SPA with Vite. Fastify just serves `web/dist`. Simplest, no SSR runtime to manage.
- **Option B — Keep SSR.** Run the TanStack Start Node server alongside Fastify and reverse-proxy non-`/api` traffic to it. More moving parts; only worth it if you need SSR/SEO beyond meta tags.

Default to Option A unless you say otherwise.

### 4. Wire Fastify to serve the built site
Have Claude Code:
- `npm i @fastify/static`
- Register it in your Fastify bootstrap to serve `web/dist` as the root
- Make sure `/api/*` routes register **before** the static handler's SPA fallback so they aren't shadowed
- Add a catch-all that returns `index.html` for unknown non-`/api` paths (SPA routing)

### 5. Build pipeline
- Root `package.json` scripts:
  - `"build:web": "cd web && npm install && npm run build"`
  - `"build": "npm run build:web && tsc"` (or your existing backend build)
- Railway: set the build command to `npm run build` and start command unchanged. `web/dist` ships with the deploy.

### 6. Keep design tokens portable
`src/styles.css` is the single source of truth for the look (palette, glass utilities, gradients, animations). If you later add backend-rendered pages (e.g., email templates, admin views), import the same CSS file so the brand stays consistent.

### 7. What stays untouched
- Prisma schema and migrations
- BullMQ workers and queues
- Postgres/Redis connections
- All `/api/*` route handlers
- Auth (Google Login) flow

## Claude Code prompt you can paste

> I have a Fastify + Prisma + BullMQ backend. I just cloned a separate repo (a TanStack Start landing page from Lovable) into `tmp-design/`. Please:
> 1. Move it into `web/` in this repo and delete `tmp-design`.
> 2. Convert it from TanStack Start (Cloudflare Worker) to a plain Vite SPA build — remove `src/server.ts`, `wrangler.jsonc`, server-fn usage; keep all routes/components/styles/assets.
> 3. Install `@fastify/static` and register it to serve `web/dist` at `/`, with a SPA fallback to `index.html`, ensuring `/api/*` routes register first.
> 4. Add `build:web` and update `build` scripts so Railway builds both.
> 5. Do not touch Prisma, BullMQ, queue, or `/api/*` code.

## Open questions before I switch to build mode

I'm not editing your Fastify repo from here — that happens in Claude Code. But for this Lovable project, do you want me to:
- (a) Just connect GitHub and leave the design as-is, **or**
- (b) First strip the TanStack Start / Worker pieces here so the GitHub export is already a clean Vite SPA ready to drop into `web/`?

Option (b) makes the Claude Code step much shorter.
