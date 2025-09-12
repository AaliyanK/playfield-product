# PlayField Marketing Site

A production-quality marketing site for PlayField, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Clean, Modern Design**: White background with black text and #88B772 accent color
- **Mobile Optimized**: Responsive design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **Custom Typography**: Instrument Sans font family throughout
- **Hero Section**: Beautiful field background image with overlay text
- **Interactive Value Scroller**: Pills navigation with smooth transitions
- **Accessibility**: Full keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **Fonts**: Instrument Sans (local files)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── DotsLogo.tsx         # Animated PlayField logo
│   ├── DemoButton.tsx       # CTA button component
│   ├── Hero.tsx             # Hero section with field background
│   ├── ValueCard.tsx        # Individual value proposition cards
│   ├── ValueScroller.tsx    # Interactive value scroller
│   ├── SiteHeader.tsx       # Sticky header with backdrop blur
│   ├── Footer.tsx           # Site footer
│   └── SmoothScrollProvider.tsx # Lenis smooth scrolling
└── hooks/
    ├── useSectionHash.ts    # URL hash synchronization
    └── useReducedMotion.ts  # Reduced motion detection
```

## Design System

- **Colors**:
  - Background: #FFFFFF (white)
  - Text: #000000 (black)
  - Accent: #88B772 (green)
- **Typography**: Instrument Sans Regular (400), Medium (500), SemiBold (600)
- **Spacing**: Tailwind's default spacing scale
- **Breakpoints**: Tailwind's default breakpoints (sm, md, lg, xl)

## Accessibility

- Full keyboard navigation support
- Screen reader friendly
- Reduced motion support
- High contrast mode support
- Focus indicators on all interactive elements

## Performance

- Optimized images with Next.js Image component
- Font display swap for better loading
- Smooth scrolling with Lenis
- Reduced motion animations
- Mobile-first responsive design

## Deployment

The site is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
npm start
```
