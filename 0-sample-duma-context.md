# Duma - Social Activity Discovery App

## Project Overview
A Tinder-style social discovery app for finding and joining small group activities. Users swipe through activity cards, view detailed activity information, see host and participant profiles, manage their activities, chat with others, and create their own events.

## Tech Stack
- **Framework**: React 18.3.1 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Routing**: React Router DOM v6
- **State Management**: React Query (@tanstack/react-query)
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations + custom keyframes
- **Notifications**: Sonner toasts

## Core Features

### 1. **Swipe Feed (Home/Discover)**
- Tinder-style card swipe interface for discovering activities
- Like/Dislike buttons with drag animations
- Card stack with next card preview
- Drag offset with rotation and opacity effects
- Empty state when no more activities

### 2. **Activity Cards**
- Cover photo with activity type badge and spots remaining
- Host information with avatar
- Participant count progress bar
- Participant avatars (clickable to view profiles)
- Activity details: location, date/time, description
- Host bio section
- Previous activity photos grid (2-column)
- Past events list
- Interests badges
- Click-to-view full details in drawer

### 3. **Activity Detail Drawer**
- Full-screen drawer (75vh height)
- Complete activity information
- Host profile preview
- All participants with avatars
- Location with map pin icon
- Date and time with calendar/clock icons
- Notes from host
- Click participant avatars to view profiles

### 4. **User Profile Drawer**
- Full-screen drawer (75vh height)
- Profile photo, name, age
- Profession and location
- Bio section
- Interests as badges
- Past events list
- Activity photos grid (3-column)

### 5. **My Activities Tab**
- Upcoming activities section
- Past activities section
- Activity cards with:
  - Cover photo
  - Title, type, date, location
  - Participant avatars
  - Click to view details

### 6. **Create/Hosted Activities Tab**
- List of user's created activities
- Same card layout as My Activities
- Shows activities user is hosting

### 7. **Profile Tab**
- User profile information
- Stats and preferences
- Settings access

### 8. **Chat Tab**
- Conversation list with avatars
- Unread message badges
- Last message preview
- Timestamp formatting
- Conversation drawer with:
  - Message history in scroll area
  - Message bubbles (left/right alignment)
  - Timestamp for each message
  - Input field with send button

### 9. **Bottom Navigation**
- Fixed bottom nav with 5 tabs
- Icons: Profile, Create, Discover (Home), Activities, Chat
- Active state highlighting with filled icons
- Smooth transitions

## Design System

### Colors (HSL format)
- Background/Foreground semantic tokens
- Primary/Secondary color system
- Muted, accent, destructive variants
- Card, popover, sidebar surfaces
- Border colors
- All colors use CSS variables from index.css

### Typography
- Custom font setup via Tailwind config
- Consistent sizing scale
- Font weight variants

### Animations
- Accordion expand/collapse
- Fade in/out with translateY
- Scale in/out
- Slide in/out (right)
- Combined enter/exit animations
- Hover effects and transitions

### Layout
- Responsive max-width containers
- Sticky header with backdrop blur
- Fixed bottom navigation (pb-16 on content)
- Card-based design
- Drawer overlays at 75vh height

## Data Structure

### User Object
```typescript
{
  id, name, age, profession, location, bio,
  interests: string[],
  profilePhoto: string,
  activityPhotos: string[],
  pastEvents: string[]
}
```

### Activity Object
```typescript
{
  id, title, type (workdate|studydate|sports|event|hangout),
  description, coverPhoto, hostId, location,
  date, time, spotsAvailable, participants: string[],
  notes, hostBio, previousActivityPhotos: string[]
}
```

### Mock Data (30+ users, 55+ activities)
Diverse activities including:
- Sports: pickleball, hiking, swimming, basketball, volleyball, tennis, cycling
- Events: concerts, jazz nights, salsa dancing, cooking classes, anime conventions, comedy shows
- Workdates: coworking, coffee shop work sessions
- Hangouts: ramen crawls, wine tasting, board games, karaoke, meditation, photography
- Arts: painting, pottery, drawing, street art tours
- Tech: web3 meetups, startup networking
- Food: cafe hopping, matcha tasting, cooking classes

## File Structure
```
src/
├── components/
│   ├── BottomNav.tsx
│   ├── SwipeFeed.tsx
│   ├── ActivityCard.tsx
│   ├── ActivityDetailDrawer.tsx
│   ├── UserProfileDrawer.tsx
│   ├── MyActivities.tsx
│   ├── HostedActivities.tsx
│   ├── Profile.tsx
│   ├── Chat.tsx
│   └── ui/ (shadcn components)
├── lib/
│   ├── mockData.ts
│   └── utils.ts
├── pages/
│   ├── Index.tsx (main app with tab routing)
│   └── NotFound.tsx
├── assets/
│   └── logo.png
└── index.css (design system tokens)
```

## Key Implementation Details
- Tab-based navigation using state in Index.tsx
- Drawer components with max-h-[75vh] for consistent heights
- Avatar components with fallbacks
- Badge components for types, interests
- Progress bars for participant counts
- ScrollArea for long content
- Separator components for visual sections
- Responsive grid layouts (grid-cols-2, grid-cols-3)
- Mock conversations data with timestamps
- Activity type icons mapping (Coffee, BookOpen, Dumbbell, Music, Users)

## Styling Approach
- Semantic color tokens (never direct colors)
- HSL color format exclusively
- Tailwind utility classes
- Custom design system in index.css + tailwind.config.ts
- Backdrop blur effects
- Border styling with semantic tokens
- Consistent spacing scale
- Mobile-first responsive design

Add Activity Filters
Add Bookmarks Feature
Add Map View