# Repository Context

**Scanned at:** 2025-11-26  
**Repo HEAD:** 749cb26ec7063251c9ccfdb601c3b1f488219c67  
**Mode:** Full Scan

---

## Changes since last update

- **Initial context generation**: First scan of repository
- **New project planned**: Duma neobrutalism rebuild (see plan: `duma-neobrutalism-rebuild_PLAN_26-11-25.md`)
- **Sample project reference**: `0-sample-duma/` contains original Vite/React app to be rebuilt

---

## Product & PRD Context

### Overview

**RIPER-5 Spec-Driven Development System**: A systematic approach to AI-assisted development that prevents premature implementation and ensures quality. This repository contains the RIPER-5 system itself (rules, commands, templates) and a sample project (`0-sample-duma`) that will be rebuilt with a new tech stack and design system.

**Planned Project: Duma Neobrutalism Rebuild**
- **Type**: Social activity discovery app (Tinder-style swipe interface)
- **Status**: Planning complete, execution pending
- **Goal**: Rebuild exact same features with neobrutalism + Gumroad aesthetic and modern tech stack
- **Plan File**: `.cursor/plans/duma-neobrutalism-rebuild_PLAN_26-11-25.md`

### Goals & Success Metrics

**RIPER-5 System Goals:**
- Provide systematic development workflow
- Auto-detect feature requests
- Generate comprehensive plans
- Maintain context across sessions

**Duma Rebuild Goals:**
- Feature parity with original app (9 core features)
- Neobrutalism + Gumroad design aesthetic
- Modern tech stack (Next.js App Router, Tailwind CSS 4, React Router v7, React Query v5)
- Fully functional prototype on localhost

### Scope (In/Out)

**In Scope:**
- Rebuild all 9 core features from original app
- Apply neobrutalism design system
- Use modern tech stack (Next.js, Tailwind CSS 4, etc.)
- Mock data only (no real backend)
- Localhost prototype

**Out of Scope:**
- Production deployment
- Real authentication
- Backend integration
- Mobile app
- Future features (filters, bookmarks, map view)

### Features Catalog

**Core Features (Must Have):**
- M1: Swipe Feed (Home/Discover) - Tinder-style card swipe
- M2: Activity Cards - Cover photo, badges, host info, participants
- M3: Activity Detail Drawer - Full activity information
- M4: User Profile Drawer - Profile photo, bio, interests, events
- M5: My Activities Tab - Upcoming and past activities
- M6: Hosted Activities Tab - User's created activities
- M7: Profile Tab - User profile and stats
- M8: Chat Tab - Conversations and messages
- M9: Bottom Navigation - Fixed nav with 5 tabs

**Future Features (Should Have - Deferred):**
- S1: Activity Filters
- S2: Bookmarks Feature
- S3: Map View

### User Journeys & Data Flow

```
User opens app
    ↓
Swipe Feed displays activities
    ↓
User swipes left/right or clicks like/dislike
    ↓
Next activity loads
    ↓
User clicks activity card
    ↓
Activity Detail Drawer opens
    ↓
User clicks participant avatar
    ↓
User Profile Drawer opens
    ↓
User navigates via bottom nav
    ↓
Different tab content displays (Activities, Chat, Profile, etc.)
```

**Data Flow:**
```
Component → React Query Hook → Mock API Route → Mock Data → UI Update
```

### Architecture Decisions

1. **Next.js App Router**: Latest Next.js pattern, Server Components by default
2. **Tailwind CSS 4**: Latest version with CSS variables for design tokens
3. **React Router v7**: Latest client-side routing
4. **React Query v5**: Latest data fetching and caching
5. **pnpm**: Package manager (not npm)
6. **Neobrutalism Design**: Bold colors, thick borders, offset shadows, rounded corners

### API Surface

**Mock API Routes (Planned):**
- `GET /api/activities` - Returns all activities
- `GET /api/users` - Returns all users
- `GET /api/users/[id]` - Returns user by ID
- `GET /api/conversations` - Returns all conversations
- `GET /api/messages?conversationId=...` - Returns messages for conversation

**React Query Hooks (Planned):**
- `useActivities()` - Fetch all activities (in `duma-complex/app/hooks/`)
- `useUsers()` - Fetch all users (in `duma-complex/app/hooks/`)
- `useUser(id)` - Fetch user by ID (in `duma-complex/app/hooks/`)
- `useConversations()` - Fetch all conversations (in `duma-complex/app/hooks/`)
- `useMessages(conversationId)` - Fetch messages (in `duma-complex/app/hooks/`)
- `useCurrentUser()` - Get current user (in `duma-complex/app/hooks/`)

### Schemas Snapshot

**User Object:**
```typescript
{
  id: string;
  name: string;
  age: number;
  profession: string;
  profilePhoto: string;
  interests: string[];
  locationCity: string;
  bio?: string;
  activityPhotos?: string[];
  pastEvents?: Array<{ title: string; type: string; attendees: number }>;
}
```

**ActivityPost Object:**
```typescript
{
  id: string;
  hostUserId: string;
  activityType: 'workdate' | 'studydate' | 'hangout' | 'sports' | 'event' | 'other';
  dateTime: Date;
  description: string;
  maxParticipants: number;
  locationHiddenAddress: string;
  locationHint: string;
  participationCount: number;
  meetupNotes?: string;
  activityPhoto?: string;
  coverPhoto: string;
  activityPhotos: string[];
  participants: string[];
}
```

**Conversation Object:**
```typescript
{
  id: string;
  participantId: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
}
```

**Message Object:**
```typescript
{
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}
```

### Acceptance Criteria

See `.cursor/plans/duma-neobrutalism-rebuild_PLAN_26-11-25.md` Section 14 for detailed acceptance criteria per phase.

### Phases & Current Status

**Phase 1: Project Setup & Foundation** - ⏳ PLANNED
- Initialize Next.js with App Router
- Configure Tailwind CSS 4
- Set up React Router v7 and React Query v5
- Create neobrutalism design system

**Phase 2: Core Components & Design System** - ⏳ PLANNED
- Build all core components with neobrutalism styling
- Implement animations

**Phase 3: Data Integration & Routing** - ⏳ PLANNED
- Set up React Query hooks
- Create mock API routes
- Implement React Router v7 routing

**Phase 4: Testing, Polish & Documentation** - ⏳ PLANNED
- Test all features
- Polish animations
- Create README

---

## Tech Stack Overview

| Area | Technology | Version/Source |
|------|-----------|----------------|
| **Framework** | Next.js | 15+ (App Router) |
| **Language** | TypeScript | Latest |
| **Package Manager** | pnpm | Latest |
| **Styling** | Tailwind CSS | 4.x |
| **UI Components** | shadcn/ui | Latest |
| **Routing** | React Router | v7 |
| **Data Fetching** | React Query | v5 |
| **Icons** | Lucide React | Latest |
| **Animations** | Tailwind CSS + CSS | Custom keyframes |

---

## Monorepo Layout

**Current Structure:**
```
riper-5-spec-driven-development/
├── .cursor/                    # RIPER-5 system files
│   ├── commands/              # Command templates
│   ├── context/                # Context files
│   ├── plans/                  # Feature plans
│   └── rules/                  # Coding rules
├── 0-sample-duma/             # Original Vite/React app (reference)
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── lib/               # Mock data and utils
│   │   └── pages/             # Page components
│   └── package.json
└── README.md                   # System documentation
```

**Planned New Project Structure:**
```
duma-complex/                   # New Next.js app (to be created)
├── app/                        # Next.js App Router
│   ├── (main)/                # Main route group
│   │   ├── layout.tsx         # Main layout
│   │   ├── page.tsx           # Home/Discover
│   │   ├── activities/        # My Activities
│   │   ├── hosted/            # Hosted Activities
│   │   ├── profile/           # Profile
│   │   └── chat/              # Chat
│   ├── api/                   # Mock API routes
│   ├── components/            # React components
│   ├── hooks/                 # React Query hooks
│   ├── lib/                   # Utilities and mock data
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Design system
├── public/                    # Static assets
└── package.json
```

---

## Package Manager & Scripts

**Package Manager:** pnpm

**Planned Scripts (for new project):**
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

**Installation:**
```bash
pnpm install
```

---

## TypeScript & Module Resolution

**TypeScript Config:**
- Strict mode enabled
- Path alias: `@/` → `./app/`
- Next.js TypeScript preset

**Module Resolution:**
- Path aliases configured in `tsconfig.json`
- Import pattern: `import { Component } from '@/components/Component'`

---

## API & Backend

**Backend Type:** Mock API routes only (no real backend)

**API Routes (Planned):**
- `duma-complex/app/api/activities/route.ts` - GET all activities
- `duma-complex/app/api/users/route.ts` - GET all users, GET user by ID
- `duma-complex/app/api/conversations/route.ts` - GET all conversations
- `duma-complex/app/api/messages/route.ts` - GET messages by conversation ID

**Data Source:** Mock data from `duma-complex/app/lib/mockData.ts` (copied from sample project)

---

## Database & Data Layer

**Database:** None (prototype uses mock data only)

**Data Management:**
- React Query v5 for client-side data fetching and caching
- Mock data stored in `duma-complex/app/lib/mockData.ts`
- No persistence (data resets on page refresh)

---

## Auth & Payments

**Authentication:** None (prototype only, no real auth needed)

**Payments:** None (not in scope)

---

## UI & Styling

### Next.js Setup
- **Version**: 15+ with App Router
- **Routing**: File-based routing in `app/` directory
- **Server Components**: Default (use Client Components only when needed)

### Tailwind CSS 4
- **Setup**: `@import "tailwindcss"` in `globals.css`
- **Config**: `tailwind.config.ts` with custom neobrutalism theme
- **CSS Variables**: Design tokens defined in `globals.css`

### shadcn/ui
- **Location**: `duma-complex/app/components/ui/`
- **Styling**: Custom neobrutalism theme applied to all components
- **Components**: Button, Card, Badge, Avatar, Drawer, Progress, ScrollArea, etc.

### Design System: Neobrutalism + Gumroad

**Color Palette (HSL):**
- Primary: Bright, saturated colors (e.g., `240 100% 60%` - vibrant blue)
- Background: Light, clean (`0 0% 98%` - off-white)
- Foreground: Dark text (`0 0% 10%` - near-black)
- Borders: Bold (`0 0% 20%` - dark gray)

**Typography:**
- Font: System font stack
- Weights: Bold (600-700) for headings, medium (500) for body
- Sizes: Generous (16px base)

**Borders & Shadows:**
- Border Width: 3-4px (thick, bold)
- Border Radius: 12-16px (rounded, friendly)
- Shadows: Offset shadows (`4px 4px 0px 0px`), no blur

**Animations:**
- Spring-like, 200-300ms duration
- Swipe animations with rotation and opacity
- Drawer open/close transitions

---

## Environment Variables

**Prototype:** No environment variables needed (mock data only)

**Future (Production):**
- `DATABASE_URL` (if adding real backend)
- `NEXT_PUBLIC_API_URL` (if adding real API)
- Auth provider keys (if adding authentication)

---

## Linting & Formatting

**Linting:**
- ESLint with Next.js config
- TypeScript strict mode

**Formatting:**
- Prettier (if configured)
- Consistent code style

---

## Conventions & Rules

### File Naming
- **Files**: kebab-case (`activity-card.tsx`)
- **Components**: PascalCase (`ActivityCard`)
- **Hooks**: camelCase with `use` prefix (`useActivities`)

### Code Style
- **TypeScript**: Explicit types, no `any`
- **Components**: Server Components by default, Client Components with `"use client"`
- **Imports**: Use `@/` alias for app directory
- **Styling**: Tailwind utility classes, CSS variables for design tokens

### Design System Rules
- **Colors**: Always use CSS variables (HSL format)
- **Borders**: 3-4px thick, 12-16px radius
- **Shadows**: Offset shadows, no blur
- **Typography**: Bold weights for headings
- **No Blur**: Avoid backdrop-blur, box-shadow blur

### Architecture Patterns
- **Server Components First**: Use unless interactivity needed
- **Data Fetching**: React Query hooks in Client Components
- **API Routes**: Mock routes in `duma-complex/app/api/` for React Query
- **Layouts**: Shared UI in layout files

---

## Security Posture

**Prototype-Level:**
- No authentication required
- No sensitive data handling
- No API keys or secrets
- No input validation (mock data only)
- No CSRF protection needed

**Future Considerations:**
- Authentication via Clerk or similar
- Input validation with Zod
- Rate limiting on API routes
- CORS configuration
- Environment variable management

---

## Monitoring & Operations

**Development:**
- Next.js dev server on `localhost:3000`
- React Query DevTools (optional, for development)
- Browser DevTools for debugging

**Production (Future):**
- Vercel deployment (recommended for Next.js)
- Error tracking (Sentry, if needed)
- Analytics (if needed)

---

## References & Key Files

### RIPER-5 System Files
- `.cursor/commands/generate-plan.md` - Plan generation command
- `.cursor/commands/generate-context.md` - Context generation command
- `.cursor/rules/riper-5-mode.mdc` - RIPER-5 protocol
- `.cursor/context/example-complex-prd.md` - Complex plan reference

### Project Plans
- `.cursor/plans/duma-neobrutalism-rebuild_PLAN_26-11-25.md` - Main project plan

### Sample Project Reference
- `0-sample-duma/` - Original Vite/React app
- `0-sample-duma/src/lib/mockData.ts` - Mock data to copy
- `0-sample-duma-context.md` - Sample project context

### Design References
- Neobrutalism design principles (bold, high contrast, thick borders)
- Gumroad aesthetic (minimalist, rounded, friendly, modern)

---

## Open Questions

1. **Project Location**: ✅ Resolved - New Next.js app will be created in `duma-complex/` directory
2. **Deployment**: Future deployment target? (Vercel recommended for Next.js)
3. **Testing**: Add unit tests? (Out of scope for prototype, but consider for future)

---

## Appendices

### Mock Data Structure

**Source:** `0-sample-duma/src/lib/mockData.ts`

**Contents:**
- 30+ users with profiles, photos, interests, past events
- 55+ activities across types: workdate, studydate, hangout, sports, event
- Conversations and messages for chat feature
- Current user (Marc - indie hacker style)

**Data Types:**
- `User` - User profile information
- `ActivityPost` - Activity details
- `Conversation` - Chat conversations
- `Message` - Chat messages
- `JoinRequest` - Activity join requests (not used in prototype)

### Component Inventory (Planned)

**Core Components:**
- `SwipeFeed` - Main swipe interface
- `ActivityCard` - Activity card display
- `ActivityDetailDrawer` - Activity details drawer
- `UserProfileDrawer` - User profile drawer
- `BottomNav` - Bottom navigation
- `MyActivities` - My activities tab
- `HostedActivities` - Hosted activities tab
- `Profile` - Profile tab
- `Chat` - Chat tab

**UI Components (shadcn/ui):**
- Button, Card, Badge, Avatar, Drawer, Progress, ScrollArea, Separator, Input, Toast, etc.

---

**End of Context**

