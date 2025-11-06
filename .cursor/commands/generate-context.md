# generate-context

You are an experienced Codebase Analyst and Tech Lead. Your job is to generate and maintain a single authoritative repository context file at `.cursor/context/all-context.md`.

Behavior modes

- First run (no `.cursor/context/all-context.md`): Full Scan Mode
- Subsequent runs (file exists): Delta Update Mode

General requirements

- Always produce exactly one file: `.cursor/context/all-context.md`
- Be accurate, specific, and actionable
- Use concise language and structured sections with tables/bullets where helpful
- Include a “Scanned at” timestamp and, if accessible, the last scanned commit (e.g., `git rev-parse HEAD`)
- Include “Open Questions” if anything is ambiguous
- Respect monorepo conventions and workspace isolation; prefer pnpm terminology

Data sources (typical)

- `pnpm-workspace.yaml`
- `package.json` files at root and each workspace
- `tsconfig*.json` and `tooling/typescript` configs
- Tailwind config and CSS entry files (v4) under `tooling/tailwind` and apps
- ESLint/Prettier configs under `tooling/`
- App/package directories under `apps/` and `packages/`
- tRPC, Prisma, Clerk, Stripe, Tailwind, shadcn/ui, and other domain-specific packages
- `.env` usage via scripts (dotenv-cli with `with-env`)
- Repo rule files under `.cursor/rules/`
- `.cursor/*_PLAN.md` (feature/system plans)
- `context/**/*PRD*.md` (product requirement docs) if present
- `.cursor/context/example-complex-prd.md` (depth/structure reference)
- `.cursor/commands/generate-plan.md` (prompt reference for plan structure)

Full Scan Mode (no `.cursor/context/all-context.md`) 0) PRD aggregation

- Locate PRD/plan sources: `.cursor/*_PLAN.md`, `context/**/*PRD*.md`
- Use `.cursor/context/example-complex-prd.md` to calibrate structure/depth for product context
- Extract and summarize:
  - Product overview and value proposition
  - Goals and success metrics
  - In-scope / Out-of-scope
  - Features catalog (MoSCoW) with IDs
  - User journeys and data flows (ASCII diagrams)
  - Architecture decisions summary (titles + rationale pointers)
  - API surface (tRPC queries/mutations, REST endpoints, WS events)
  - Schemas snapshot (key DB models and important fields; link to Prisma)
  - Acceptance criteria (versioned snapshot)
  - Phases and current status (if present)

1. Inventory and topology

- Monorepo layout (apps/, packages/, tooling/, turbo config)
- List each app/package: name, path, role (UI, API, DB, service, validators, UI lib, etc.)
- Workspace references (scope like `@sassy/*`)

2. Package manager and scripts

- Confirm pnpm usage
- Identify `with-env` and dotenv-cli patterns
- Identify bun/tsup/tsx usage and script conventions
- Note build, dev, typecheck, lint, format scripts

3. TypeScript and module resolution

- Global tsconfig base and package-level tsconfigs
- Path aliases (tsconfig paths) in a table: alias → resolved path(s)
- Export maps in package.json (JIT compilation and direct source exports)

4. API and backend

- tRPC presence and router layout (e.g., `packages/api/src/router`)
- Context patterns and auth middleware
- Hono/Express presence and service responsibilities
- Real-time channels (WS/SSE) and usage patterns

5. Database and data layer

- Prisma schema location and generation outputs
- Migration status (if accessible)
- Generated clients and Zod validators location
- DB provider and pooling specifics (Supabase notes)

6. Auth and payments

- Clerk integration points (web, backend)
- Stripe usage (if any) with package location

7. UI and styling

- Next.js version and App Router usage
- Tailwind v4 setup: `@import "tailwindcss"`, shared configs, `@config` usage
- shadcn/ui presence and components location
- Global CSS entry patterns

8. Environment variable management (monorepo)

- dotenv-cli with `with-env` script usage
- Which packages depend on root `.env`
- Required envs for services (DB, Clerk, Stripe, etc.)

9. Linting, formatting, quality

- ESLint and Prettier configs (centralized in tooling/)
- Any typecheck/test strategies

10. Conventions and rules

- Naming (kebab-case files/dirs, PascalCase classes, etc.)
- Barrel file stance, service co-location principle
- Error handling, comments, code style
- Tailwind v4 critical rules and CSS var approach

11. Security posture

- Sensitive data handling, secrets, access control
- Auth boundaries, rate limiting (if defined), CSP notes

12. Monitoring and operations (if any)

- Metrics/logging patterns, health endpoints
- Deployment patterns (Vercel/EC2/Docker/PM2), DNS/TLS references

13. References

- Important file paths and pointers to `.cursor/rules/*`
- Example complex PRD reference: `.cursor/context/example-complex-prd.md` (for depth expectations)

14. Open Questions

15. Scanned at / metadata

- Timestamp
- Repo HEAD (if accessible)
- Scan scope

Delta Update Mode (file exists)

- Steps:
  1. Parse `.cursor/context/all-context.md` and extract prior state
  2. Perform targeted verification on areas likely to drift: dependencies, tsconfig paths, scripts, tooling configs, new packages/apps, rule files, and product-level artifacts (PRD/plan files)
  3. Integrate new inputs from the current conversation (including RIPER-5 update process outcomes)
  4. Update sections that have changed; preserve unchanged sections
  5. Add a “Changes since last update” section near the top with bullets:
     - What changed (short)
     - Why (source: code scan / conversation decision)
     - Impact (who/what must adjust)
     - Tag `[Product]` when changes affect features/scope/goals/flows/API contracts/schemas/phases
  6. Maintain “Open Questions” if new ambiguity is discovered

Output format: `.cursor/context/all-context.md`

1. Title: "Repository Context"
2. Status strip:
   - Scanned at: <date/time>
   - Repo HEAD: <hash or unknown>
   - Mode: Full Scan | Delta Update
3. Changes since last update (Delta only)
4. Product & PRD Context
   - Overview
   - Goals & Success Metrics
   - Scope (In/Out)
   - Features Catalog (MoSCoW with IDs)
   - User Journeys & Data Flow (ASCII)
   - Architecture Decisions (summary list with references)
   - API Surface (queries/mutations/endpoints/WS events)
   - Schemas Snapshot (key models with brief fields; reference to Prisma files)
   - Acceptance Criteria (versioned)
   - Phases & Current Status (if applicable)
5. Tech Stack Overview (table: area → technology → version/source)
6. Monorepo Layout (apps/packages list)
7. Package Manager & Scripts (summary + conventions)
8. TypeScript & Module Resolution (paths table)
9. API & Backend
10. Database & Data Layer
11. Auth & Payments
12. UI & Styling
13. Environment Variables
14. Linting & Formatting
15. Conventions & Rules
16. Security Posture
17. Monitoring & Operations
18. References & Key Files (include PRD/plan sources used for this context)
19. Open Questions
20. Appendices (optional detailed inventories)

Cursor Plan + RIPER-5 integration

- Use this file for:
  - Rapid onboarding/context for agents and humans
  - Validating assumptions during RESEARCH
  - Enforcing conventions during PLAN/EXECUTE
- UPDATE PROCESS:
  - When conventions or stack choices change, update `.cursor/context/all-context.md` as part of the plan/rule updates
- EXECUTE (Self-Review):
  - Verify implementation matches conventions and alias paths recorded here before concluding
