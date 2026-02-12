# Wellness & Consultancy

A modern, animated wellness consultancy platform built with React, TypeScript, and Framer Motion. The site showcases wellness coaching services, consultant profiles, and upcoming service expansions — all with premium, cinematic animations.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.33-FF0055?logo=framer)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)

## Features

- **Premium Animations** — Scroll-triggered reveals, staggered grids, hero blur-in text, 3D image perspectives, elastic badge pop-ins, and smooth page transitions
- **Responsive Design** — Mobile-first layout using Tailwind CSS breakpoints
- **shadcn/ui Components** — Consistent design system with Button, Badge, Card, Input, Label, and Textarea primitives
- **Animated Forms** — Staggered field slide-ins, animated error messages, radio card selectors, hover-lift submit buttons with spinning loaders
- **Page Transitions** — Smooth enter/exit animations between routes via `AnimatePresence`
- **Centralized Data** — All content managed from a single `data/` directory
- **Type Safety** — Full TypeScript coverage with shared interfaces

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18.3 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5.4 |
| Styling | Tailwind CSS 3.4 + tailwindcss-animate |
| Animations | Framer Motion 12 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Routing | React Router 7 |
| Icons | Lucide React |
| Deployment | Netlify (with SPA redirects) |

## Project Structure

```
src/
├── types/              # TypeScript interfaces (Service, Consultant, FAQ, etc.)
├── data/               # Centralized static data (single source of truth)
│   ├── services.ts     # Service card data
│   ├── serviceInfo.ts  # Detailed service info for coming-soon pages
│   ├── consultants.ts  # Consultant profiles and booking options
│   ├── features.ts     # Feature card data
│   ├── benefits.ts     # Benefit items
│   ├── faqs.ts         # FAQ questions and answers
│   ├── navigation.ts   # Nav menu items
│   └── contact.ts      # Contact information
├── lib/                # Shared utilities and config
│   ├── utils.ts        # cn() class merging utility
│   └── animations.ts   # 30+ reusable Framer Motion variants and easings
├── components/
│   ├── ui/             # Generic UI primitives (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── layout/         # Structural wrappers
│   │   └── PageTransition.tsx
│   ├── features/       # Domain-specific reusable components
│   │   ├── FeatureCard.tsx
│   │   ├── FAQItem.tsx
│   │   └── WaitlistForm.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ServiceCard.tsx
│   └── ConsultantCard.tsx
├── pages/              # One file per route
│   ├── HomePage.tsx
│   ├── WellnessPage.tsx
│   ├── BookingPage.tsx
│   ├── ThankYouPage.tsx
│   └── ComingSoonPage.tsx
├── assets/images/      # Organized by category
└── App.tsx             # Routes + AnimatePresence page transitions
```

### Architecture Principles

- **Layer hierarchy**: `pages/` → `components/features/` → `components/ui/` → `lib/` → `data/` + `types/`
- **Information flows down** — UI primitives know nothing about business logic; pages compose everything
- **Single source of truth** — Data defined once in `data/`, imported everywhere
- **Centralized animations** — All motion variants live in `lib/animations.ts`

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Hero section, service cards, features, CTA |
| `/wellness` | WellnessPage | Consultant profiles, FAQs, benefits |
| `/booking` | BookingPage | Multi-section booking form with validation |
| `/thank-you` | ThankYouPage | Booking confirmation with next steps |
| `/nursery` | ComingSoonPage | Nursery/Playground — waitlist with ETA |
| `/salon` | ComingSoonPage | Beauty Salon — waitlist with ETA |
| `/laundromart` | ComingSoonPage | Laundromart — waitlist with ETA |
| `/supermart` | ComingSoonPage | Supermart — waitlist with ETA |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/wellness-consultancy.git
cd wellness-consultancy
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` (or next available port).

### Production Build

```bash
npm run build
npm run preview    # Preview the build locally
```

## Deployment

Configured for **Netlify** with client-side routing support.

1. Push to GitHub
2. Connect repo on [app.netlify.com](https://app.netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

The `public/_redirects` file handles SPA routing automatically.

## Animation System

All animations are centralized in `src/lib/animations.ts`:

- **5 custom easing curves** — smooth, snappy, bouncy, elastic, decelerate
- **Scroll-triggered variants** — `scrollStaggerContainer`, `scrollStaggerItem`
- **Hero animations** — `heroTextVariants`, `heroImageVariants`, `heroBadgeVariants`, `heroCtaVariants`
- **Section reveals** — `sectionHeaderVariants`, `sectionSubtitleVariants`
- **Card interactions** — Hover lift, tap scale, image zoom
- **FAQ accordion** — `faqContentVariants` with height animation
- **Page transitions** — `pageVariants` with fade + slide
- **Viewport settings** — `viewportSettings` (once: true, margin: -80px, amount: 0.15)

Usage pattern:
```tsx
<motion.div
  variants={scrollStaggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportSettings}
>
  <motion.div variants={scrollStaggerItem}>
    {/* Content animates in on scroll */}
  </motion.div>
</motion.div>
```

## License

This project is for portfolio and educational purposes.
