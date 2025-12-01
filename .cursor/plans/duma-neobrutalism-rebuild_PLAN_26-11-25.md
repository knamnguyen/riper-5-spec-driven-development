# Duma Neobrutalism Rebuild: Complete App Recreation with Modern Stack

**Date:** 26-11-25  
**Complexity:** Complex (multi-phase project)  
**Status:** ✅ Phase 1: COMPLETE | ✅ Phase 2: COMPLETE | ⏳ Phase 3: PLANNED | ⏳ Phase 4: PLANNED

## Quick Links

- [Context and Goals](#1-context-and-goals)
- [Non-Goals and Constraints](#2-non-goals-and-constraints)
- [Architecture Decisions](#3-architecture-decisions)
- [Design System: Neobrutalism + Gumroad Aesthetic](#4-design-system-neobrutalism--gumroad-aesthetic)
- [High-level Data Flow](#5-high-level-data-flow)
- [Security Posture](#6-security-posture)
- [Component Details](#7-component-details)
- [Phased Delivery Plan](#8-phased-delivery-plan)
- [Features List](#9-features-list)
- [RFCs](#10-rfcs)
- [Rules](#11-rules)
- [Verification](#12-verification)
- [Change Management](#13-change-management)
- [Acceptance Criteria](#14-acceptance-criteria)
- [Future Work](#15-future-work)

---

## 1. Context and Goals

### Context

Rebuild the Duma social activity discovery app (Tinder-style swipe interface for finding group activities) with:
- **Exact same features and functionality** as the sample project (`0-sample-duma`)
- **Same mock data** (30+ users, 55+ activities)
- **New design system**: Neobrutalism aesthetic combined with Gumroad's minimalist, rounded, modern, friendly, creative aesthetic
- **Updated tech stack**: Next.js App Router (latest), Tailwind CSS 4, React Router v7, React Query v5, pnpm

### Goals

1. **Feature Parity**: Replicate all 9 core features from the original app
2. **Design Transformation**: Apply neobrutalism design principles (bold colors, high contrast, thick borders, playful typography) with Gumroad's friendly, rounded, minimalist approach
3. **Modern Stack**: Migrate from Vite/React Router v6 to Next.js App Router with latest patterns
4. **Functional Prototype**: Fully working app with mock data, testable on localhost
5. **Code Quality**: Clean, maintainable code following Next.js 15+ and React 19+ best practices

### Success Metrics

- ✅ All 9 core features functional and visually matching neobrutalism aesthetic
- ✅ App runs on `localhost:3000` with `pnpm dev` (from `duma-complex/` directory)
- ✅ All mock data displays correctly (users, activities, conversations)
- ✅ Swipe animations work smoothly
- ✅ Drawers open/close correctly
- ✅ Navigation between tabs works
- ✅ Design system consistent across all components
- ✅ Responsive on mobile and desktop viewports

---

## 2. Non-Goals and Constraints

### Non-Goals (Out of Scope)

- **Production deployment** (localhost prototype only)
- **Real backend integration** (mock data only)
- **Authentication system** (no real auth needed for prototype)
- **Payment processing** (not in original app)
- **Real-time features** (mock data is static)
- **Mobile app** (web-only prototype)
- **Accessibility audit** (focus on visual design first)
- **Performance optimization** (prototype prioritizes features over optimization)

### Constraints

- **Design System**: Must strictly follow neobrutalism + Gumroad aesthetic (see Section 4)
- **Tech Stack**: Must use Next.js App Router, Tailwind CSS 4, React Router v7, React Query v5, pnpm
- **Data**: Must use exact same mock data structure from `0-sample-duma/src/lib/mockData.ts`
- **Feature Parity**: Cannot remove or simplify any existing features
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari latest)

---

## 3. Architecture Decisions

### Decision 1: Next.js App Router (Not Pages Router)

**Rationale:**
- Latest Next.js pattern (15+)
- Server Components by default improve performance
- Better TypeScript integration
- File-based routing with layouts
- Built-in data fetching patterns

**Implications:**
- Use `duma-complex/app/` directory structure
- Server Components for static content, Client Components for interactivity
- Route handlers for mock API endpoints (`duma-complex/app/api/`)
- Layouts for shared UI (header, bottom nav)

### Decision 2: Tailwind CSS 4 with CSS Variables

**Rationale:**
- Latest Tailwind version with improved performance
- CSS variables for design tokens (neobrutalism colors)
- Better PostCSS integration
- Native CSS features (container queries, etc.)

**Implications:**
- Use `@import "tailwindcss"` in global CSS
- Define neobrutalism color palette as CSS variables
- Custom utilities for neobrutalism effects (thick borders, shadows)

### Decision 3: React Router v7 for Client-Side Navigation

**Rationale:**
- Latest version with improved performance
- Better integration with React 19
- Future-proof routing patterns
- Supports both client and server routing

**Implications:**
- Use `createBrowserRouter` for client-side routing
- Route definitions in `app/routes/` or inline with components
- Navigation via `useNavigate` and `Link` components

### Decision 4: React Query v5 for Data Management

**Rationale:**
- Latest version with improved caching
- Better TypeScript support
- Simplified API surface
- Works seamlessly with Next.js App Router

**Implications:**
- Use `QueryClientProvider` in root layout
- Custom hooks for data fetching (`useActivities`, `useUsers`, etc.)
- Mock API routes in `duma-complex/app/api/` for React Query to consume

### Decision 5: pnpm for Package Management

**Rationale:**
- Faster installs and better disk efficiency
- Strict dependency resolution
- Workspace support (if needed later)
- Industry standard for monorepos

**Implications:**
- Use `pnpm install` for dependencies
- Lock file: `pnpm-lock.yaml`
- Scripts in `package.json` use `pnpm` commands

### Decision 6: Neobrutalism Design System

**Rationale:**
- Bold, playful aesthetic matches social discovery app vibe
- High contrast improves readability
- Thick borders and shadows create depth
- Gumroad's friendly, rounded approach softens neobrutalism's harshness

**Implications:**
- Custom color palette (bright, saturated colors)
- Thick borders (3-4px) on cards and buttons
- Rounded corners (12-16px border radius)
- Bold typography (600-700 font weight)
- Playful shadows (offset, not blur-heavy)

---

## 4. Design System: Neobrutalism + Gumroad Aesthetic

### Color Palette (HSL Format)

**Primary Colors:**
- `--primary`: Bright, saturated color (e.g., `240 100% 60%` - vibrant blue)
- `--primary-foreground`: High contrast text (`0 0% 100%` - white)
- `--secondary`: Complementary bright color (e.g., `340 100% 65%` - vibrant pink)
- `--accent`: Playful accent color (e.g., `45 100% 60%` - vibrant yellow)

**Neutral Colors:**
- `--background`: Light, clean background (`0 0% 98%` - off-white)
- `--foreground`: Dark text (`0 0% 10%` - near-black)
- `--muted`: Soft gray (`0 0% 85%`)
- `--border`: Bold border color (`0 0% 20%` - dark gray)

**Semantic Colors:**
- `--success`: Green (`142 76% 50%`)
- `--destructive`: Red (`0 84% 60%`)
- `--warning`: Yellow (`45 100% 60%`)

### Typography

- **Font Family**: System font stack with rounded, friendly feel
  - Primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - Monospace: `"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace`
- **Font Weights**: Bold (600-700) for headings, medium (500) for body
- **Font Sizes**: Generous sizing (16px base, scale up for headings)
- **Line Height**: Comfortable (1.6-1.8 for body text)

### Spacing

- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- **Generous Padding**: Cards use 24-32px padding
- **Comfortable Gaps**: 16-24px between elements

### Borders & Shadows

- **Border Width**: 3-4px (thick, bold)
- **Border Radius**: 12-16px (rounded, friendly)
- **Shadows**: 
  - Card shadow: `4px 4px 0px 0px rgba(0,0,0,0.2)` (offset, not blur)
  - Button hover: `6px 6px 0px 0px rgba(0,0,0,0.2)`
  - No soft/blurred shadows (neobrutalism principle)

### Components Styling

**Cards:**
- Thick border (3-4px)
- Rounded corners (12-16px)
- Offset shadow
- Generous padding (24-32px)
- Bright background (white or light color)

**Buttons:**
- Bold, chunky appearance
- Thick border
- Rounded corners
- Offset shadow on hover
- Bright, saturated colors

**Badges:**
- Rounded pill shape
- Bold background color
- High contrast text
- Thick border optional

**Inputs:**
- Thick border
- Rounded corners
- Focus state: brighter border, offset shadow
- Generous padding

### Animation Principles

- **Playful, Bouncy**: Use spring animations, not linear
- **Quick Transitions**: 200-300ms for interactions
- **Swipe Animations**: Smooth, with rotation and opacity
- **Hover Effects**: Lift with offset shadow increase
- **No Blur Effects**: Keep neobrutalism aesthetic (sharp, bold)

---

## 5. High-level Data Flow

```
User Interaction (Client Component)
    ↓
React Router Navigation / State Update
    ↓
React Query Hook (useActivities, useUsers, etc.)
    ↓
Mock API Route (duma-complex/app/api/activities/route.ts)
    ↓
Return Mock Data (from lib/mockData.ts)
    ↓
React Query Cache & Update UI
    ↓
Component Re-render with New Data
```

**Key Flows:**

1. **Swipe Feed**: User swipes → state update → next activity loads from mock data
2. **Activity Details**: Click card → drawer opens → fetch activity + host + participants
3. **Profile View**: Click avatar → drawer opens → fetch user data + past events
4. **Chat**: Click conversation → drawer opens → fetch messages
5. **Tab Navigation**: Click nav item → React Router updates → component renders

---

## 6. Security Posture

**Prototype-Level Security:**
- No authentication required (mock data only)
- No sensitive data handling
- No API keys or secrets
- No user input validation (mock data is static)
- No CSRF protection needed (no real backend)

**Future Considerations (Out of Scope):**
- Authentication via Clerk or similar
- Input validation with Zod
- Rate limiting on API routes
- CORS configuration for production
- Environment variable management

---

## 7. Component Details

### 7.1 Core Components

#### SwipeFeed Component
- **Location**: `duma-complex/app/components/SwipeFeed.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display activity cards in swipeable stack
  - Handle drag gestures (touch and mouse)
  - Animate card transitions (rotation, opacity, translation)
  - Show next card preview
  - Handle like/dislike actions
  - Display empty state when no more activities
- **Data**: Uses `useActivities()` hook (React Query)
- **Styling**: Neobrutalism card design with thick borders, offset shadows

#### ActivityCard Component
- **Location**: `duma-complex/app/components/ActivityCard.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display activity cover photo
  - Show activity type badge
  - Display host information with avatar
  - Show participant count and progress bar
  - Display activity details (location, date, time, description)
  - Show host bio section
  - Display previous activity photos grid
  - Show past events list
  - Display interests badges
  - Handle click to open detail drawer
- **Data**: Receives `ActivityPost` and `User` (host) as props
- **Styling**: Neobrutalism card with rounded corners, bold typography

#### ActivityDetailDrawer Component
- **Location**: `duma-complex/app/components/ActivityDetailDrawer.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Full-screen drawer (75vh height)
  - Display complete activity information
  - Show host profile preview
  - Display all participants with avatars (clickable)
  - Show location with map pin icon
  - Display date and time with icons
  - Show notes from host
  - Handle close action
- **Data**: Receives `ActivityPost` and related `User` objects as props
- **Styling**: Neobrutalism drawer with thick border, rounded top corners

#### UserProfileDrawer Component
- **Location**: `duma-complex/app/components/UserProfileDrawer.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Full-screen drawer (75vh height)
  - Display profile photo, name, age
  - Show profession and location
  - Display bio section
  - Show interests as badges
  - Display past events list
  - Show activity photos grid (3-column)
  - Handle close action
- **Data**: Receives `User` object as prop
- **Styling**: Neobrutalism drawer with bold typography, rounded design

#### BottomNav Component
- **Location**: `duma-complex/app/components/BottomNav.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Fixed bottom navigation bar
  - 5 tabs: Profile, Create, Discover (Home), Activities, Chat
  - Active state highlighting with filled icons
  - Smooth transitions between tabs
  - Handle tab change via callback
- **Data**: Receives `currentTab` and `onTabChange` as props
- **Styling**: Neobrutalism nav bar with thick top border, rounded top corners

#### MyActivities Component
- **Location**: `duma-complex/app/components/MyActivities.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display upcoming activities section
  - Display past activities section
  - Show activity cards with cover photo, title, type, date, location
  - Display participant avatars
  - Handle click to view details
- **Data**: Uses `useActivities()` hook filtered by current user
- **Styling**: Neobrutalism card grid layout

#### HostedActivities Component
- **Location**: `duma-complex/app/components/HostedActivities.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display list of user's created activities
  - Same card layout as My Activities
  - Show activities user is hosting
- **Data**: Uses `useActivities()` hook filtered by host ID
- **Styling**: Neobrutalism card grid layout

#### Profile Component
- **Location**: `duma-complex/app/components/Profile.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display user profile information
  - Show stats and preferences
  - Settings access (placeholder)
- **Data**: Uses `useCurrentUser()` hook
- **Styling**: Neobrutalism profile card layout

#### Chat Component
- **Location**: `duma-complex/app/components/Chat.tsx`
- **Type**: Client Component
- **Responsibilities**:
  - Display conversation list with avatars
  - Show unread message badges
  - Display last message preview
  - Format timestamps
  - Handle conversation click to open drawer
  - Conversation drawer with message history
  - Message bubbles (left/right alignment)
  - Input field with send button
- **Data**: Uses `useConversations()` and `useMessages()` hooks
- **Styling**: Neobrutalism chat interface with rounded message bubbles

### 7.2 UI Components (shadcn/ui)

All shadcn/ui components need neobrutalism styling:
- `Button`: Thick border, rounded, offset shadow
- `Card`: Thick border, rounded, offset shadow
- `Badge`: Rounded pill, bold colors
- `Avatar`: Rounded, thick border
- `Drawer`: Thick border, rounded top corners
- `Progress`: Bold, chunky appearance
- `ScrollArea`: Rounded corners
- `Separator`: Thick line
- `Input`: Thick border, rounded
- `Toast`: Bold, rounded, offset shadow

### 7.3 Layout Components

#### Root Layout
- **Location**: `duma-complex/app/layout.tsx`
- **Type**: Server Component
- **Responsibilities**:
  - Provide HTML structure
  - Include global CSS
  - Setup React Query provider
  - Setup React Router provider
  - Include toast notifications

#### Main Layout
- **Location**: `duma-complex/app/(main)/layout.tsx`
- **Type**: Server Component
- **Responsibilities**:
  - Shared header with logo
  - Bottom navigation
  - Content area with padding

---

## 8. Phased Delivery Plan

### Phase 1: Project Setup & Foundation ✅ COMPLETE

**Overview:**
Initialize Next.js project with App Router, configure Tailwind CSS 4, set up React Router v7 and React Query v5, create base design system.

**Implementation Summary:**
- Create `duma-complex/` directory
- Initialize Next.js 15+ project with App Router inside `duma-complex/`
- Configure pnpm workspace
- Install and configure Tailwind CSS 4
- Set up React Router v7
- Set up React Query v5
- Create neobrutalism design system (colors, typography, spacing)
- Create base layout structure
- Set up mock data structure

**Files/Modules Touched:**
- `duma-complex/package.json`
- `duma-complex/pnpm-lock.yaml`
- `duma-complex/next.config.js` / `duma-complex/next.config.ts`
- `duma-complex/tailwind.config.ts`
- `duma-complex/postcss.config.js`
- `duma-complex/app/globals.css` (design system)
- `duma-complex/app/layout.tsx` (root layout)
- `duma-complex/app/(main)/layout.tsx` (main layout)
- `duma-complex/app/lib/mockData.ts` (copy from sample project)

**What's Functional Now:**
- ✅ Next.js app runs on localhost:3000
- ✅ Tailwind CSS 4 working
- ✅ Design system CSS variables defined
- ✅ Base layout structure in place
- ✅ Mock data available
- ✅ React Query v5 configured
- ✅ React Router v7 installed
- ✅ Neobrutalism design system implemented with animations

**Ready For Next:**
- Begin implementing core components with neobrutalism styling

---

### Phase 2: Core Components & Design System ✅ COMPLETE

**Overview:**
Build all core components with neobrutalism styling, implement shadcn/ui components with custom neobrutalism theme, create reusable design tokens.

**Implementation Summary:**
- Create neobrutalism-styled shadcn/ui components
- Build SwipeFeed component with swipe animations
- Build ActivityCard component
- Build ActivityDetailDrawer component
- Build UserProfileDrawer component
- Build BottomNav component
- Build MyActivities component
- Build HostedActivities component
- Build Profile component
- Build Chat component
- Implement all animations (swipe, drawer, transitions)

**Files/Modules Touched:**
- `duma-complex/app/components/ui/*` (all shadcn components with neobrutalism styling)
- `duma-complex/app/components/SwipeFeed.tsx`
- `duma-complex/app/components/ActivityCard.tsx`
- `duma-complex/app/components/ActivityDetailDrawer.tsx`
- `duma-complex/app/components/UserProfileDrawer.tsx`
- `duma-complex/app/components/BottomNav.tsx`
- `duma-complex/app/components/MyActivities.tsx`
- `duma-complex/app/components/HostedActivities.tsx`
- `duma-complex/app/components/Profile.tsx`
- `duma-complex/app/components/Chat.tsx`
- `duma-complex/app/globals.css` (animation keyframes)

**What's Functional Now:**
- ✅ All shadcn/ui components styled with neobrutalism (thick borders, offset shadows, rounded corners)
- ✅ SwipeFeed component renders with swipe animations
- ✅ ActivityCard component displays all activity information
- ✅ ActivityDetailDrawer and UserProfileDrawer components open/close smoothly
- ✅ BottomNav component works with tab switching
- ✅ All tab components render (MyActivities, HostedActivities, Profile, Chat)
- ✅ All UI elements styled consistently with neobrutalism design system
- ✅ Sonner toast notifications integrated
- ✅ Build compiles successfully with no TypeScript errors

**Ready For Next:**
- Integrate React Query for data fetching
- Connect components to mock API routes

---

### Phase 3: Data Integration & Routing ⏳ PLANNED

**Overview:**
Set up React Query hooks, create mock API routes, implement React Router v7 routing, connect all components to data.

**Implementation Summary:**
- Create React Query hooks (`useActivities`, `useUsers`, `useConversations`, etc.)
- Create mock API routes (`duma-complex/app/api/activities/route.ts`, `duma-complex/app/api/users/route.ts`, etc.)
- Set up React Router v7 routing structure
- Connect SwipeFeed to data
- Connect ActivityCard to data
- Connect all drawers to data
- Connect Chat to conversation data
- Connect MyActivities and HostedActivities to filtered data
- Implement tab-based navigation with React Router

**Files/Modules Touched:**
- `duma-complex/app/api/activities/route.ts`
- `duma-complex/app/api/users/route.ts`
- `duma-complex/app/api/conversations/route.ts`
- `duma-complex/app/api/messages/route.ts`
- `duma-complex/app/hooks/useActivities.ts`
- `duma-complex/app/hooks/useUsers.ts`
- `duma-complex/app/hooks/useConversations.ts`
- `duma-complex/app/hooks/useMessages.ts`
- `duma-complex/app/(main)/page.tsx` (home/discover route)
- `duma-complex/app/(main)/activities/page.tsx`
- `duma-complex/app/(main)/hosted/page.tsx`
- `duma-complex/app/(main)/profile/page.tsx`
- `duma-complex/app/(main)/chat/page.tsx`
- All component files (connect to hooks)

**What's Functional Now:**
- All components display real mock data
- Swipe feed shows all activities
- Drawers show correct activity/user data
- Chat shows conversations and messages
- Tab navigation works with React Router
- Data fetching works via React Query

**Ready For Next:**
- Final testing and polish
- Fix any bugs or styling issues

---

### Phase 4: Testing, Polish & Documentation ⏳ PLANNED

**Overview:**
Test all features, fix bugs, polish animations and styling, create README with setup instructions.

**Implementation Summary:**
- Test all 9 core features
- Test swipe animations on touch and mouse
- Test drawer open/close animations
- Test tab navigation
- Test responsive design (mobile and desktop)
- Fix any styling inconsistencies
- Polish animations and transitions
- Create comprehensive README
- Add inline code comments
- Verify all mock data displays correctly

**Files/Modules Touched:**
- All component files (bug fixes, polish)
- `duma-complex/README.md` (setup instructions)
- `duma-complex/app/globals.css` (final styling tweaks)

**What's Functional Now:**
- Fully functional prototype
- All features working
- Consistent neobrutalism design
- Responsive on all screen sizes
- Smooth animations
- Well-documented code

**Ready For Next:**
- Project complete! Ready for user testing and feedback.

---

## 9. Features List

### Must Have (M1-M9)

- **M1**: Swipe Feed (Home/Discover) - Tinder-style card swipe interface
- **M2**: Activity Cards - Cover photo, badges, host info, participant count, details
- **M3**: Activity Detail Drawer - Full activity information, host preview, participants
- **M4**: User Profile Drawer - Profile photo, bio, interests, past events, photos
- **M5**: My Activities Tab - Upcoming and past activities
- **M6**: Hosted Activities Tab - User's created activities
- **M7**: Profile Tab - User profile information and stats
- **M8**: Chat Tab - Conversation list and message drawer
- **M9**: Bottom Navigation - Fixed nav with 5 tabs

### Should Have (S1-S3)

- **S1**: Activity Filters (mentioned in context, but not in original app - defer to future)
- **S2**: Bookmarks Feature (mentioned in context, but not in original app - defer to future)
- **S3**: Map View (mentioned in context, but not in original app - defer to future)

---

## 10. RFCs

### RFC-001: Neobrutalism Design System Implementation

**Summary:**
Define and implement the complete neobrutalism + Gumroad design system with color palette, typography, spacing, borders, shadows, and component styling guidelines.

**Dependencies:**
- Phase 1 complete (project setup)

**Stages:**

1. **Design Token Definition**
   - Define HSL color palette in `duma-complex/app/globals.css`
   - Define typography scale
   - Define spacing scale
   - Define border and shadow utilities

2. **Tailwind Configuration**
   - Configure Tailwind CSS 4 with custom theme
   - Add custom utilities for neobrutalism effects
   - Configure PostCSS

3. **Component Base Styles**
   - Style base HTML elements (buttons, inputs, etc.)
   - Create utility classes for common patterns
   - Define animation keyframes

**Acceptance Criteria:**
- ✅ All design tokens defined as CSS variables
- ✅ Tailwind config includes neobrutalism theme
- ✅ Base styles applied globally
- ✅ Design system documented in code comments

**Implementation Checklist:**
1. Create `duma-complex/app/globals.css` with CSS variable definitions
2. Configure `duma-complex/tailwind.config.ts` with custom theme
3. Add neobrutalism utilities (thick borders, offset shadows)
4. Define animation keyframes (bounce, swipe, drawer)
5. Test design tokens in a sample component

---

### RFC-002: Core Component Architecture

**Summary:**
Build all core components (SwipeFeed, ActivityCard, Drawers, Navigation, etc.) with neobrutalism styling and proper TypeScript types.

**Dependencies:**
- RFC-001 complete (design system)

**Stages:**

1. **shadcn/ui Component Styling**
   - Install shadcn/ui components
   - Apply neobrutalism styling to all components
   - Test each component in isolation

2. **SwipeFeed Component**
   - Implement card stack with drag gestures
   - Add swipe animations (rotation, opacity, translation)
   - Implement like/dislike actions
   - Add next card preview

3. **ActivityCard Component**
   - Build card layout with cover photo
   - Add badges, host info, participant count
   - Implement scrollable content area
   - Add click handler for drawer

4. **Drawer Components**
   - Build ActivityDetailDrawer
   - Build UserProfileDrawer
   - Implement open/close animations
   - Add scrollable content areas

5. **Navigation Components**
   - Build BottomNav with 5 tabs
   - Implement active state styling
   - Add smooth transitions

6. **Tab Components**
   - Build MyActivities component
   - Build HostedActivities component
   - Build Profile component
   - Build Chat component

**Acceptance Criteria:**
- ✅ All components render with neobrutalism styling
- ✅ Swipe animations work smoothly
- ✅ Drawers open/close correctly
- ✅ Navigation works
- ✅ All components are TypeScript typed

**Implementation Checklist:**
1. Navigate to `duma-complex/` directory
2. Install shadcn/ui: `pnpm dlx shadcn@latest init`
3. Install required shadcn components (button, card, badge, avatar, drawer, etc.)
4. Apply neobrutalism styling to each shadcn component
5. Create `duma-complex/app/components/SwipeFeed.tsx` with swipe logic
6. Create `duma-complex/app/components/ActivityCard.tsx` with all sections
7. Create `duma-complex/app/components/ActivityDetailDrawer.tsx`
8. Create `duma-complex/app/components/UserProfileDrawer.tsx`
9. Create `duma-complex/app/components/BottomNav.tsx`
10. Create `duma-complex/app/components/MyActivities.tsx`
11. Create `duma-complex/app/components/HostedActivities.tsx`
12. Create `duma-complex/app/components/Profile.tsx`
13. Create `duma-complex/app/components/Chat.tsx`
14. Test each component in isolation

---

### RFC-003: Data Integration with React Query

**Summary:**
Set up React Query v5, create custom hooks for data fetching, create mock API routes, and connect all components to data.

**Dependencies:**
- RFC-002 complete (components built)
- Phase 1 complete (mock data available)

**Stages:**

1. **React Query Setup**
   - Configure QueryClient in root layout
   - Set up QueryClientProvider
   - Configure default options (staleTime, cacheTime)

2. **Mock API Routes**
   - Create `duma-complex/app/api/activities/route.ts` (GET all activities)
   - Create `duma-complex/app/api/users/route.ts` (GET all users, GET user by ID)
   - Create `duma-complex/app/api/conversations/route.ts` (GET all conversations)
   - Create `duma-complex/app/api/messages/route.ts` (GET messages by conversation ID)

3. **Custom Hooks**
   - Create `useActivities()` hook
   - Create `useUsers()` hook
   - Create `useUser(id)` hook
   - Create `useConversations()` hook
   - Create `useMessages(conversationId)` hook
   - Create `useCurrentUser()` hook

4. **Component Integration**
   - Connect SwipeFeed to `useActivities()`
   - Connect ActivityCard to user data
   - Connect drawers to hooks
   - Connect Chat to conversation hooks
   - Connect MyActivities to filtered activities
   - Connect HostedActivities to filtered activities

**Acceptance Criteria:**
- ✅ React Query configured and working
- ✅ All mock API routes return correct data
- ✅ All custom hooks work correctly
- ✅ All components display real data
- ✅ Data fetching is optimized (no unnecessary refetches)

**Implementation Checklist:**
1. Set up QueryClient in `duma-complex/app/layout.tsx`
2. Create `duma-complex/app/api/activities/route.ts` returning mock activities
3. Create `duma-complex/app/api/users/route.ts` returning mock users
4. Create `duma-complex/app/api/conversations/route.ts` returning mock conversations
5. Create `duma-complex/app/api/messages/route.ts` returning mock messages
6. Create `duma-complex/app/hooks/useActivities.ts`
7. Create `duma-complex/app/hooks/useUsers.ts`
8. Create `duma-complex/app/hooks/useUser.ts`
9. Create `duma-complex/app/hooks/useConversations.ts`
10. Create `duma-complex/app/hooks/useMessages.ts`
11. Create `duma-complex/app/hooks/useCurrentUser.ts`
12. Update SwipeFeed to use `useActivities()`
13. Update ActivityCard to use user data
14. Update all drawers to use hooks
15. Update Chat to use conversation hooks
16. Update MyActivities and HostedActivities to use filtered data
17. Test data flow end-to-end

---

### RFC-004: React Router v7 Integration

**Summary:**
Set up React Router v7 for client-side navigation, implement tab-based routing, and connect navigation to components.

**Dependencies:**
- RFC-002 complete (components built)
- RFC-003 complete (data integration)

**Stages:**

1. **Router Setup**
   - Install React Router v7
   - Configure `createBrowserRouter`
   - Set up route definitions

2. **Route Structure**
   - Create `duma-complex/app/(main)/page.tsx` (home/discover)
   - Create `duma-complex/app/(main)/activities/page.tsx` (my activities)
   - Create `duma-complex/app/(main)/hosted/page.tsx` (hosted activities)
   - Create `duma-complex/app/(main)/profile/page.tsx` (profile)
   - Create `duma-complex/app/(main)/chat/page.tsx` (chat)

3. **Navigation Integration**
   - Connect BottomNav to React Router
   - Update active state based on route
   - Implement smooth transitions

4. **Layout Integration**
   - Move header and BottomNav to layout
   - Ensure layout persists across routes

**Acceptance Criteria:**
- ✅ React Router v7 configured
- ✅ All routes work correctly
- ✅ Navigation updates URL
- ✅ Active state matches current route
- ✅ Layout persists across navigation

**Implementation Checklist:**
1. Navigate to `duma-complex/` directory
2. Install React Router v7: `pnpm add react-router@latest react-router-dom@latest`
3. Create `duma-complex/app/(main)/layout.tsx` with header and BottomNav
4. Create `duma-complex/app/(main)/page.tsx` rendering SwipeFeed
5. Create `duma-complex/app/(main)/activities/page.tsx` rendering MyActivities
6. Create `duma-complex/app/(main)/hosted/page.tsx` rendering HostedActivities
7. Create `duma-complex/app/(main)/profile/page.tsx` rendering Profile
8. Create `duma-complex/app/(main)/chat/page.tsx` rendering Chat
9. Update BottomNav to use React Router `Link` or `useNavigate`
10. Update active state logic to match current route
11. Test navigation between all routes
12. Verify URL updates correctly
13. Test browser back/forward buttons

---

## 11. Rules

### Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Package Manager**: pnpm (not npm or yarn)
- **Styling**: Tailwind CSS 4 with CSS variables
- **Routing**: React Router v7 (client-side)
- **Data Fetching**: React Query v5
- **UI Components**: shadcn/ui with neobrutalism styling
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Code Standards

- **File Naming**: kebab-case for files, PascalCase for components
- **Component Structure**: Server Components by default, Client Components only when needed (`"use client"`)
- **TypeScript**: Explicit types for all props, no `any`
- **Imports**: Use `@/` alias for app directory
- **Styling**: Use Tailwind utility classes, CSS variables for design tokens
- **Data**: All data fetching via React Query hooks
- **Routing**: File-based routing in `duma-complex/app/` directory

### Design System Rules

- **Colors**: Always use CSS variables (HSL format), never hardcoded colors
- **Borders**: 3-4px thick, rounded (12-16px radius)
- **Shadows**: Offset shadows (4px 4px 0px), no blur
- **Typography**: Bold weights (600-700) for headings, medium (500) for body
- **Spacing**: Use design system scale (4px base unit)
- **Animations**: Spring-like, 200-300ms duration
- **No Blur**: Avoid backdrop-blur, box-shadow blur (keep neobrutalism sharp)

### Architecture Patterns

- **Server Components First**: Use Server Components unless interactivity needed
- **Client Components**: Mark with `"use client"` directive
- **Data Fetching**: React Query hooks in Client Components, or Server Components with direct data access
- **API Routes**: Mock API routes in `duma-complex/app/api/` for React Query to consume
- **Layouts**: Shared UI (header, nav) in layout files within `duma-complex/app/`
- **Components**: Reusable components in `duma-complex/app/components/`

### Performance

- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Use Next.js `Image` component for photos
- **Lazy Loading**: Use dynamic imports for heavy components if needed
- **Caching**: React Query handles data caching

### Security

- **Prototype Only**: No real authentication or sensitive data
- **Input Validation**: Not needed for prototype (mock data only)
- **Environment Variables**: Use `.env.local` for any config (not needed for prototype)

---

## 12. Verification

### Gap Analysis

**Design System:**
- ✅ Neobrutalism color palette defined
- ✅ Typography scale defined
- ✅ Spacing scale defined
- ✅ Border and shadow utilities defined
- ⏳ Component styling needs implementation (Phase 2)

**Components:**
- ⏳ All 9 core components need to be built (Phase 2)
- ⏳ shadcn/ui components need neobrutalism styling (Phase 2)
- ⏳ Animations need implementation (Phase 2)

**Data Integration:**
- ✅ Mock data structure defined (from sample project)
- ⏳ React Query hooks need creation (Phase 3)
- ⏳ Mock API routes need creation (Phase 3)
- ⏳ Component-data connections need implementation (Phase 3)

**Routing:**
- ⏳ React Router v7 needs setup (Phase 3)
- ⏳ Route structure needs creation (Phase 3)
- ⏳ Navigation integration needs implementation (Phase 3)

### Improvement Recommendations

1. **Design System Documentation**: Create a design system documentation file with examples
2. **Component Storybook**: Consider adding Storybook for component development (future)
3. **Accessibility**: Add ARIA labels and keyboard navigation (future)
4. **Performance Monitoring**: Add React Query DevTools for development (Phase 3)

### Quality Assessment

**Current Status**: Planning phase complete, ready for execution

**Completeness**: 100% (all features planned, all phases defined)

**Clarity**: High (detailed RFCs, clear acceptance criteria, step-by-step checklists)

**Feasibility**: High (all technologies are proven, design system is well-defined)

**Risk Level**: Low (prototype scope, mock data, no external dependencies)

---

## 13. Change Management

### Change Classification

**New**: Adding new features not in original app (filters, bookmarks, map) - defer to future
**Modify**: Updating design system and tech stack - in scope
**Remove**: Cannot remove any existing features - out of scope
**Scope**: Prototype only, no production deployment - constraint
**Technical**: Next.js App Router instead of Vite - architectural decision
**Timeline**: 4 phases, sequential execution - planned

### Impact Analysis

**Components**: All components need rebuild with neobrutalism styling
**Data**: Mock data structure remains the same (copy from sample)
**Routing**: Complete routing restructure (Vite → Next.js App Router)
**Styling**: Complete design system rebuild (neobrutalism)
**Dependencies**: New dependencies (Next.js, React Router v7, React Query v5)

### Implementation Strategy

**Immediate**: Phase 1 (project setup) - foundation for everything
**Schedule**: Phases 2-4 sequential (components → data → routing → polish)
**Defer**: Future features (filters, bookmarks, map) - not in original app

### Documentation Updates

- Update README with setup instructions (Phase 4)
- Document design system in code comments (Phase 1-2)
- Document component props with JSDoc (Phase 2)

### Communication Plan

- Document all architectural decisions in this plan
- Update plan file as phases complete (status markers)
- Note any deviations in Change Management section

### Added Risks and Mitigations

**Risk 1**: Neobrutalism design may not match Gumroad aesthetic perfectly
- **Mitigation**: Iterate on design system in Phase 1, test with sample components

**Risk 2**: React Router v7 may have breaking changes from v6
- **Mitigation**: Review React Router v7 migration guide, test routing early

**Risk 3**: Tailwind CSS 4 may have different API than v3
- **Mitigation**: Review Tailwind CSS 4 docs, test configuration early

**Risk 4**: Swipe animations may not work smoothly on all devices
- **Mitigation**: Test on multiple devices, use CSS transforms for performance

---

## 14. Acceptance Criteria

### Phase 1 Acceptance

- ✅ Next.js app initializes and runs on localhost:3000
- ✅ pnpm installs all dependencies correctly
- ✅ Tailwind CSS 4 compiles and applies styles
- ✅ Design system CSS variables defined and accessible
- ✅ Base layout structure in place
- ✅ Mock data file copied and TypeScript types work

### Phase 2 Acceptance

- ✅ All shadcn/ui components styled with neobrutalism
- ✅ SwipeFeed component renders and swipes work
- ✅ ActivityCard component displays all information correctly
- ✅ All drawer components open/close smoothly
- ✅ BottomNav component works and highlights active tab
- ✅ All tab components render correctly
- ✅ All animations work smoothly (swipe, drawer, transitions)

### Phase 3 Acceptance

- ✅ React Query configured and working
- ✅ All mock API routes return correct data
- ✅ All custom hooks work correctly
- ✅ SwipeFeed displays all activities from mock data
- ✅ ActivityCard shows correct host and participant data
- ✅ Drawers show correct activity/user data
- ✅ Chat shows conversations and messages
- ✅ MyActivities and HostedActivities show filtered data
- ✅ React Router v7 navigation works between all routes
- ✅ URL updates correctly on navigation
- ✅ Active state matches current route

### Phase 4 Acceptance

- ✅ All 9 core features functional
- ✅ Swipe animations work on touch and mouse
- ✅ Drawer animations work smoothly
- ✅ Tab navigation works correctly
- ✅ Responsive design works on mobile and desktop
- ✅ All mock data displays correctly
- ✅ No console errors or warnings
- ✅ README includes setup instructions
- ✅ Code is well-commented
- ✅ Design system is consistent across all components

### Overall Acceptance

- ✅ App runs on localhost:3000 with `pnpm dev`
- ✅ All features from original app are present
- ✅ Design matches neobrutalism + Gumroad aesthetic
- ✅ Tech stack is Next.js App Router, Tailwind CSS 4, React Router v7, React Query v5
- ✅ Code is clean, typed, and maintainable
- ✅ Prototype is ready for user testing

---

## 15. Future Work

### Design Enhancements

- **Dark Mode**: Add dark mode variant of neobrutalism design
- **Accessibility**: Add ARIA labels, keyboard navigation, screen reader support
- **Animations**: Add more playful micro-interactions
- **Responsive**: Optimize for tablet and large desktop screens

### Feature Additions (Not in Original)

- **Activity Filters**: Filter activities by type, location, date
- **Bookmarks**: Save favorite activities
- **Map View**: Show activities on a map
- **Search**: Search activities by keyword
- **Notifications**: In-app notifications for activity updates

### Technical Improvements

- **Storybook**: Add component library documentation
- **Testing**: Add unit tests for components and hooks
- **Performance**: Optimize bundle size, add code splitting
- **SEO**: Add meta tags, structured data for production
- **Analytics**: Add user interaction tracking (future)

### Production Readiness

- **Authentication**: Integrate Clerk or similar
- **Backend**: Replace mock API with real backend
- **Database**: Set up Prisma with PostgreSQL
- **Deployment**: Deploy to Vercel or similar
- **Monitoring**: Add error tracking (Sentry) and analytics

---

## Cursor Plan + RIPER-5 Integration

### Cursor Plan Mode

1. Import "Implementation Checklist" from each RFC into Cursor Plan mode
2. Execute phases sequentially (Phase 1 → 2 → 3 → 4)
3. After each phase, update status markers (⏳ → 🚧 → ✅)
4. Update "What's Functional Now" section after each phase
5. Reattach this plan file to future sessions for context

### RIPER-5 Mode

**RESEARCH**: 
- Understand original app structure and features
- Review mock data structure
- Research neobrutalism design principles
- Review Next.js App Router, Tailwind CSS 4, React Router v7, React Query v5 docs

**INNOVATE**: 
- Explore neobrutalism + Gumroad design combinations
- Consider animation approaches for swipe gestures
- Evaluate component architecture patterns

**PLAN**: 
- This document is the comprehensive plan
- Review and approve before execution
- Request "ENTER EXECUTE MODE" when ready

**EXECUTE**: 
- Follow RFCs sequentially
- Implement exactly as specified
- Update plan file status as phases complete
- Flag any deviations immediately

**REVIEW**: 
- Validate implementation matches plan
- Test all acceptance criteria
- Document any deviations

**UPDATE PROCESS**: 
- If scope changes or deviations found, update this plan
- Document lessons learned
- Update rules if patterns emerge

---

**Next Step**: Review this plan and approve. Then say "ENTER EXECUTE MODE" to begin Phase 1 implementation.

