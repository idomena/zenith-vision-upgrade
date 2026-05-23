# Zenith Vision Upgrade — Imagine Landing Page

> A serene, AI-native workspace to design, build and ship beautiful apps.

## Overview

**Imagine** is a calm, AI-native workspace where ideas become products — designed for clarity, tuned for speed, and beautiful by default. This repo is the marketing landing page and frontend shell for the Imagine platform.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TanStack Start 1.x (SSR) |
| Routing | TanStack Router |
| Build Tool | Vite 7 |
| Package Manager | Bun |
| Styling | Tailwind CSS 4 + custom design tokens |
| State/Data | TanStack Query (React Query 5) |
| Forms | React Hook Form + Zod |
| UI Components | Radix UI primitives |
| Icons | Lucide React |
| Charts | Recharts |
| Notifications | Sonner |
| Deployment | Cloudflare Workers (via Wrangler) |
| Code Quality | ESLint 9 + Prettier |

## Project Structure

```
src/
├── assets/              # Images, cloud photos, decorative assets
├── components/
│   ├── ui/              # Radix-based reusable UI primitives
│   ├── CloudBackdrop.tsx  # Animated atmospheric background
│   └── PasteLinkBar.tsx   # Smart URL paste-and-submit bar
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── routes/
│   ├── __root.tsx       # Root layout (SSR shell, QueryClient, SEO meta)
│   └── index.tsx        # Main landing page
├── routeTree.gen.ts     # Auto-generated route tree
├── router.tsx           # Router configuration
├── server.ts            # Cloudflare Worker entry
├── start.ts             # TanStack Start entry
└── styles.css           # Design tokens, gradients, animations
```

## Landing Page Sections

1. **Nav** — Sticky glassmorphic header with logo, links (Features, Platform, Pricing, Docs), Sign in + Get Started CTAs
2. **Hero** — "Build apps as easily as describing the sky" headline, dual CTAs, PasteLinkBar for instant URL import, workspace mockup
3. **Bento Grid** — Five platform feature cards:
   - Bento workspace — Modular drag-resize cards
   - Instant deploys — Prompt to production in seconds
   - Private by default — E2E encryption, your keys
   - Global edge — 300+ cities
   - AI everywhere — Composable models, one surface
4. **CTA** — "Step into the clouds" conversion section
5. **Footer** — Privacy, Terms, Contact

## Design System

- **Colors**: oklch color space with sky, peach, lavender soft palette
- **Typography**: Inter (weights 400–800)
- **Glass morphism**: `glass` and `glass-strong` utility classes with backdrop blur + saturation
- **Shadows**: soft-shadow and glow-shadow for depth
- **Animations**: `float` (14s/22s) and `drift` (60s) for the cloud backdrop
- **Border radius**: 1rem base scale (sm → 4xl)

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Deploy to Cloudflare Workers
bun run wrangler deploy
```

## Key Components

### `CloudBackdrop`
Decorative fixed background with layered sky gradient, cloud photography, aurora overlay, and three animated floating cloud puffs. Fully `aria-hidden` and `pointer-events-none`.

### `PasteLinkBar`
Smart URL input bar with three states (`idle` → `submitting` → `done`). Auto-submits on paste via clipboard API. Validates `http://`, `https://`, and `www.` URLs. Glassmorphic styling with animated state transitions.

## Deployment

Deployed on **Cloudflare Workers** via `wrangler.jsonc`. TanStack Start handles SSR on the edge.

```bash
bun run build && npx wrangler deploy
```

## License

Private — © Imagine. All rights reserved.
