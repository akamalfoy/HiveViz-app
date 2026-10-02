# HiveViz Design Specification

## Project: Next.js 14 App Router + Tailwind CSS + TypeScript

### Directory Structure
```
hiveviz/
├── public/
│   ├── images/          (all Unsplash images)
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/inquiry/route.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── ProcessOverview.tsx
│       ├── ProcessSteps.tsx
│       ├── Experience.tsx
│       ├── Services.tsx
│       ├── Benefits.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

### Color Palette (Tailwind custom)
- cream: #f5f0e8
- cream-light: #faf7f2  
- dark: #1c1c1c
- dark-card: #2a2a2a
- gold: #c9a96e
- olive: #3d4a3c
- olive-dark: #2d3a2c
- border-cream: #d4cfc6
- border-dark: #3a3a3a

### Typography
- Headings: Playfair Display (Google Font, serif) → CSS var --font-playfair
- Body: Inter (Google Font, sans) → CSS var --font-inter → default sans
- Labels: Inter, uppercase, tracking-[0.2em], text-xs or text-[11px]

### Images (in public/images/)
- hero-bg.jpg — modern glass architecture at dusk
- modern-house.jpg — modern house exterior daytime  
- vr-team.jpg — people using VR headsets
- living-room.jpg — luxury modern living room
- kitchen.jpg — modern kitchen
- master-bedroom.jpg — master bedroom
- bathroom.jpg — modern bathroom
- dining-area.jpg — dining area
- balcony.jpg — balcony/terrace
- modern-office.jpg — modern office with floor-to-ceiling windows
- residential.jpg — luxury residential interior
- arch-viz-house.jpg — another modern house angle

### Component Conventions
- All components are React client components using 'use client'
- Default exports
- Use Image from next/image for all images
- Scroll animations via IntersectionObserver in useEffect
- Section IDs: hero, experience, process, services, contact
