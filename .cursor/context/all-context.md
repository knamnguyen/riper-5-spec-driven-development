Repository Context

- Scanned at: 2025-11-06T00:00:00Z
- Repo HEAD: 8835d1809eaa21e3822ec4ea8536f218ab0da099
- Mode: Full Scan

Product & PRD Context

- Overview: Gifavatr lets users upload a personal photo and generate animated GIF avatars they can use on Google account profiles and platforms like Linktree, Beacons, Pixiv, dev.to, Fandom, MyAnimeList, Medium, Substack, VGen, Discord, and Patreon. Emphasis on built‑in virality: users can generate shareable assets and verify social referrals (via X/Twitter/Threads/Facebook/LinkedIn keyword checks) to encourage organic growth.
- Goals & Success Metrics:
  - Increase completed GIF generations per active user
  - Successful background removals (Replicate) without retries
  - Asset shares/uses across external profiles
  - Verified referral posts (keywords matched) and referral conversions
- Scope:
  - In-scope: Clerk auth, image upload and re‑encode, background removal with Replicate, GIF generation and storage on Supabase, recent-asset listing, social referral keyword verification (X/Twitter/Threads/Facebook/LinkedIn via Apify and other providers).
  - Out-of-scope (now): Stripe billing and Loops marketing flows (present in codebase, not needed by product now).
- Features Catalog (MoSCoW):
  - Must
    - GIF-001: Upload avatar (re-encode/compress)
    - GIF-002: Background removal (Replicate rembg)
    - GIF-003: GIF generation (rise-bottom | rise-left | rise-right)
    - GIF-004: Asset listing (uploads, background-removed, results)
    - AUTH-001: Clerk auth and protected routes
    - STORE-001: Supabase storage with public URLs
    - REF-001: Verify social post keywords (X via Apify; Threads/Facebook/LinkedIn planned)
  - Should: Basic UI previews, theme, simple share UX
  - Could: Additional animation styles, quotas/limits
  - Won’t (now): Subscriptions/portal (Stripe)
- User Journeys & Data Flow:

```text
1) Upload
Client -> tRPC editor.uploadStart
  - Data URL (png/jpeg/webp) -> re-encode (Jimp)
  - Supabase storage upload (server key) -> public URL
  - DB: UserUpload { userId, path, mime }

2) Background removal
Client -> tRPC editor.removeBackground(uploadPath)
  - Resolve public URL
  - Replicate: fetch model meta -> create prediction -> poll -> download PNG
  - Supabase storage upload (png) -> public URL
  - DB: BackgroundRemoved { userId, sourceUploadId, path }

3) GIF generation
Client -> tRPC editor.generateGif(bgRemovedPath, style, bgColor)
  - Load cutout -> per-frame Jimp composites using sampleTransform
  - Encode with gif-encoder-2
  - Supabase storage upload (gif) -> public URL
  - DB: UserResult { userId, path }

4) Listing assets
Client -> tRPC editor.listAssets
  - Return last N of uploads, backgroundRemoved, results

5) Referral verification
Client -> tRPC social.verifyTweetKeywords(url, keywords)
  - Platform: X/Twitter (Apify actor) -> dataset -> extract post text -> keyword match
  - Future: Threads, Facebook, LinkedIn (providers TBD)
```

- Architecture Decisions (highlights):
  - API via tRPC v11 with Clerk auth middleware; supports Next.js and chrome-extension via x-trpc-source + Clerk backend verification
  - PostgreSQL (Supabase) with Prisma 6; node and edge clients generated; zod-prisma-types produces validators
  - Domain services co-located as packages: `@sassy/supabase-bucket`, `@sassy/social-referral` (and `@sassy/stripe` currently unused)
  - Next.js 15 (App Router), React 19, Tailwind v4 with shared presets (`@sassy/tailwind-config`)
  - Monorepo env pattern via `with-env` (dotenv-cli) to load root .env from packages
  - Legacy branding: some files reference "EngageKit"; product name is Gifavatr
- API Surface (tRPC):
  - editor (packages/api/src/router/editor.ts): uploadStart, removeBackground, generateGif, listAssets
  - user (packages/api/src/router/user.ts): checkAccess, getDailyCommentCount, create, update, delete, me
  - social (packages/api/src/router/social.ts): verifyTweetKeywords
  - stripe (packages/api/src/router/stripe.ts): createCheckout, createCustomerPortal, checkAccess [present, not used now]
- Schemas Snapshot (Prisma: packages/db/prisma/schema.prisma):
  - User { id, firstName?, lastName?, username?, primaryEmailAddress, imageUrl?, clerkUserProperties?, stripeCustomerId?, accessType, stripeUserProperties?, dailyAIcomments, createdAt, updatedAt }
  - UserUpload { id (cuid), userId, path, mime, createdAt }
  - BackgroundRemoved { id (cuid), userId, sourceUploadId, path, createdAt }
  - UserResult { id (cuid), userId, path, createdAt }

Tech Stack Overview

| Area     | Technology                  | Version/Source                    |
| -------- | --------------------------- | --------------------------------- |
| App      | Next.js                     | ^15.2.x (apps/nextjs)             |
| UI       | React                       | 19.x                              |
| Styling  | Tailwind CSS                | ^4.1.8 with shared presets        |
| API      | tRPC                        | v11 (server), SuperJSON           |
| Auth     | Clerk                       | @clerk/nextjs                     |
| DB       | Prisma                      | ^6.8.x + PostgreSQL (Supabase)    |
| Storage  | Supabase Storage            | @supabase/supabase-js ^2.45.x     |
| Media    | Jimp, gif-encoder-2         | ^0.22.x, ^1.0.x                   |
| AI       | Replicate                   | REST API                          |
| Referral | Apify Client                | ^2.10.x                           |
| Tooling  | Turborepo, pnpm, TypeScript | turbo ^2.3.x, pnpm 10.x, TS 5.7.x |

Monorepo Layout

- apps/nextjs: Next.js 15 App Router application (UI + API routes integration)
- packages/
  - @sassy/api: tRPC routers, context, server caller
  - @sassy/db: Prisma schema, generated node/edge clients, zod validators, db exports
  - @sassy/ui: UI components (shadcn-derived), theme, utils
  - @sassy/validators: shared Zod validators
  - @sassy/supabase-bucket: Supabase helpers (server/public clients, upload/getPublicUrl)
  - @sassy/social-referral: Apify/X keyword verification
  - @sassy/stripe: Stripe service and scripts (present, out-of-scope now)
- tooling/: eslint, prettier, tailwind, typescript, sync-template

Package Manager & Scripts

- Root uses pnpm + turbo. Notable scripts: build (turbo run), dev (turbo watch), postinstall (prisma generate + copy query engine to .next/server), db:\* scoped to @sassy/db
- with-env pattern (dotenv-cli) in packages needing env: loads ../../.env before running commands
- bun used for some scripts (e.g., social verification, stripe utilities)

TypeScript & Module Resolution

- Shared TS configs: tooling/typescript/base.json and internal-package.json
- Next alias: `~/*` → `apps/nextjs/src/*`
- Packages use export maps to source (JIT):
  - @sassy/api: "." → src/index.ts
  - @sassy/db: "." → src/index.ts; subpaths for generated/\* and schema-validators
  - @sassy/ui: subpaths `./ui/*`, `./components/*`, `./hooks/*`, `./utils`, `./schema-validators`, `./theme`
- Next `transpilePackages`: `@sassy/api`, `@sassy/db`, `@sassy/ui`, `@sassy/validators`

API & Backend

- tRPC server (`packages/api/src/trpc.ts`):
  - Context: { db, headers, user? }
  - Auth middleware supports Next.js (currentUser) and chrome-extension (Authorization Bearer token via Clerk backend/verifyToken)
  - `publicProcedure` and `protectedProcedure` exported
- Routers (`packages/api/src/router`): editor, user, social, stripe consolidated in root.ts as `appRouter`
- Next client/server integration (`apps/nextjs/src/trpc/*`):
  - react.tsx: TRPCProvider, batch streaming link, SuperJSON, client singleton
  - server.tsx: create server ctx with headers, options proxy, `HydrateClient`, `prefetch`

Database & Data Layer

- Prisma schema in `packages/db/prisma/schema.prisma`; generators for node, edge, and zod validators
- Datasource uses `DATABASE_URL` and `DIRECT_URL`; PostgreSQL extensions: uuid-ossp, vector
- `@sassy/db/src/index.ts` re-exports generated client, Prisma, and db helpers

Auth & Payments

- Clerk: `apps/nextjs/src/middleware.ts` protects non-public routes; `ClerkProvider` in layout
- Payments: Stripe package and router exist but are not required for Gifavatr currently

UI & Styling

- Tailwind v4 with shared config (`@sassy/tailwind-config`): `apps/nextjs/tailwind.config.ts` extends content with `../../packages/ui/src/**/*.{ts,tsx}`
- Global CSS (`apps/nextjs/src/app/globals.css`): `@import "tailwindcss"` and `@config '../../tailwind.config.ts'`; defines gif-rise animations and CSS variable theme
- shadcn/ui components in `@sassy/ui`; Theme and Toaster wired in app layout

Environment Variables

- Monorepo pattern: Packages use `with-env` (dotenv-cli) to load `../../.env`. Turbo `globalEnv` passes common keys.
- Required for current product:
  - Database: `DATABASE_URL`, `DIRECT_URL` (Prisma)
  - Clerk: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (client), `CLERK_SECRET_KEY` (server)
  - Supabase: `SUPABASE_URL`, `SUPABASE_SECRET_KEY` (server); `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` (client)
  - Replicate: `REPLICATE_API_TOKEN`
  - Apify: `APIFY_API_TOKEN`
- Present but not required now: Stripe keys, Loops key

Linting & Formatting

- ESLint presets under tooling/eslint with `restrictEnvAccess` to encourage using validated `env` imports
- App ESLint composes base + react + nextjs presets
- Prettier with Tailwind plugin and import sorting; tailwind config path references tooling `tailwind/web.ts`

Conventions & Rules

- Service co-location in domain packages for reuse across API and scripts
- TypeScript-only codebase with explicit types; subpath export maps for JIT
- Tailwind v4 practices: `@import`, `@config`, CSS variables for colors; shared presets
- Error handling: TRPCError for API; Zod validators generated from Prisma

Security Posture

- Clerk middleware enforces auth for protected routes; public matcher enumerates safe paths
- Secrets used server-side only via `with-env`; client receives only NEXT*PUBLIC*\* values
- No sensitive data persisted client-side

Monitoring & Operations

- Vercel Analytics and Speed Insights enabled only in production
- Prisma Next.js monorepo plugin used at build to ensure Prisma works with deployments

References & Key Files

- Root: pnpm-workspace.yaml, turbo.json, package.json
- App: `apps/nextjs/next.config.js`, `src/app/layout.tsx`, `src/app/globals.css`, `src/env.ts`, `src/middleware.ts`, `src/trpc/*`
- API: `packages/api/src/trpc.ts`, `packages/api/src/router/*`, `packages/api/src/index.ts`
- DB: `packages/db/prisma/schema.prisma`, `packages/db/src/index.ts`, `packages/db/generated/*`
- Storage: `packages/supabase-bucket/src/index.ts`
- Referral: `packages/social-referral/src/social-referral-service.ts`, `platforms/x-verifier.ts`
- Tooling: `tooling/eslint/*`, `tooling/prettier/index.js`, `tooling/tailwind/*`, `tooling/typescript/*`
- Product reference: `.cursor/context/example-complex-prd.md` (structure/depth reference)

Open Questions

- Implement referral verification for Threads, Facebook, LinkedIn: using apify apis with other actor ids to be implemented later
- Timeline for cleaning legacy "EngageKit" branding in assets/metadata?

Appendices

A) tRPC Procedures by Router

- editor
  - uploadStart(input: { dataUrl: string; mime: "image/png"|"image/jpeg"|"image/webp" }) → { path, url }
  - removeBackground(input: { uploadPath: string }) → { path, url }
  - generateGif(input: { bgRemovedPath: string; style: "rise-bottom"|"rise-left"|"rise-right"; bgColor: string }) → { path, url }
  - listAssets() → { uploads, backgroundRemoved, results }
- user
  - checkAccess() → AccessType | undefined
  - getDailyCommentCount() → number
  - create(input: UserCreateInputSchema) → User
  - update(input: { id: string; data: UserUpdateInputSchema }) → User
  - delete(input: { id: string }) → User
  - me() → User | null
- social
  - verifyTweetKeywords(input: { platform: "x"; url: string; keywords: string[] }) → { containsAll, matchedKeywords, missingKeywords, text }
- stripe (present; not required now)
  - createCheckout(input: purchaseType) → checkoutUrl
  - createCustomerPortal(input: { returnUrl? }) → { url }
  - checkAccess() → { hasAccess, accessType }

B) Package Scripts (selected)

- Root package.json: build (turbo), dev (turbo watch), postinstall (prisma generate + copy engine), lint/format/typecheck
- apps/nextjs: dev/build/start with `with-env`, typecheck, lint, format
- packages/api: typecheck, lint, social:verify-tweet (bun + with-env)
- packages/db: db:generate/push/migrate/studio/zod with `with-env`
- packages/stripe: stripe:prices / stripe:portal (bun + with-env)
- packages/social-referral: with-env present

C) Prisma Models (key fields)

- User(id, username?, primaryEmailAddress, accessType, dailyAIcomments, createdAt, updatedAt)
- UserUpload(id, userId, path, mime, createdAt)
- BackgroundRemoved(id, userId, sourceUploadId, path, createdAt)
- UserResult(id, userId, path, createdAt)

D) TS Paths & Exports

- apps/nextjs tsconfig: `~/*` → `src/*`
- Export maps: `@sassy/api` (index.ts); `@sassy/db` (index.ts, generated/\*, schema-validators); `@sassy/ui` (subpaths); `@sassy/validators` (index.ts)
- Notice that we are all using Just In Time exports directly from the files, try to limit exporting from a barrel index.ts file at the root package because it doesn't give un context of the name of the file where the definition happend. You need to check package.json because JIT exports are defined in there
