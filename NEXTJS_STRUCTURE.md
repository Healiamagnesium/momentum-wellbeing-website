# Momentum Wellbeing CIC — Next.js Project Structure

## Complete File Structure

```
momentum-wellbeing/
├── app/
│   ├── layout.tsx                    # Root layout with nav + footer
│   ├── page.tsx                      # Homepage
│   ├── about/
│   │   ├── page.tsx                  # About overview
│   │   ├── mission/page.tsx          # Mission & Vision
│   │   ├── team/page.tsx             # Meet the Team
│   │   └── story/page.tsx            # Our Story
│   ├── services/
│   │   ├── page.tsx                  # Services overview
│   │   ├── community-fitness/page.tsx
│   │   ├── walking-groups/page.tsx
│   │   ├── mobility-stretching/page.tsx
│   │   ├── lifestyle-coaching/page.tsx
│   │   ├── mental-wellbeing/page.tsx
│   │   ├── peer-support/page.tsx
│   │   ├── wellbeing-workshops/page.tsx
│   │   ├── community-events/page.tsx
│   │   ├── community-engagement/page.tsx
│   │   ├── social-prescribing/page.tsx
│   │   ├── preventative-health/page.tsx
│   │   └── health-education/page.tsx
│   ├── impact/
│   │   ├── page.tsx                  # Impact overview
│   │   ├── case-studies/page.tsx
│   │   └── testimonials/page.tsx
│   ├── events/
│   │   ├── page.tsx                  # Events listing
│   │   └── [slug]/page.tsx           # Individual event
│   ├── news/
│   │   ├── page.tsx                  # News listing
│   │   └── [slug]/page.tsx           # Individual article
│   ├── partners/page.tsx
│   ├── volunteer/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── refer/page.tsx                # Referral form
│   ├── donate/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── accessibility/page.tsx
│   ├── cookies/page.tsx
│   └── not-found.tsx                 # 404 page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Eyebrow.tsx
│   │   └── SectionHeader.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ImpactNumbers.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── UpcomingEvents.tsx
│   │   ├── LatestNews.tsx
│   │   ├── VolunteerCTA.tsx
│   │   ├── DonateCTA.tsx
│   │   ├── Partners.tsx
│   │   ├── Newsletter.tsx
│   │   └── ContactCTA.tsx
│   ├── forms/
│   │   ├── VolunteerForm.tsx
│   │   ├── ReferralForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   └── animations/
│       ├── RevealOnScroll.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   ├── constants.ts                  # Site config, colours, nav items
│   ├── types.ts                      # TypeScript interfaces
│   └── utils.ts                      # Helper functions
├── public/
│   ├── images/                       # Photography
│   ├── logos/                        # Partner logos
│   └── icons/                        # Favicons
├── styles/
│   └── globals.css                   # Global styles + CSS variables
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## package.json

```json
{
  "name": "momentum-wellbeing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3.4.0",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "^15"
  }
}
```

---

## tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0F766E',
          secondary: '#14B8A6',
          light: '#CCFBF1',
          pale: '#F0FDFA',
        },
        brand: {
          dark: '#1E293B',
          mid: '#334155',
          bg: '#F8FAFC',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        float: '0 4px 16px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
      },
      animation: {
        'float-up': 'floatUp 4s ease-in-out infinite',
        'float-down': 'floatDown 4s ease-in-out infinite 1s',
        'pulse-dot': 'pulseDot 2s infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

## next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
}
export default nextConfig
```

---

## styles/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --teal-primary: #0F766E;
  --teal-secondary: #14B8A6;
  --dark: #1E293B;
  --bg: #F8FAFC;
}

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply antialiased; }
  h1, h2, h3, h4, h5, h6 { font-family: 'Manrope', sans-serif; }
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(90deg, #F59E0B, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bg-teal-gradient {
    background: linear-gradient(135deg, #0F766E 0%, #0d6460 40%, #064e4a 100%);
  }
  .bg-dark-gradient {
    background: linear-gradient(135deg, #1E293B 0%, #0d1929 100%);
  }
}
```

---

## lib/constants.ts

```typescript
export const SITE_CONFIG = {
  name: 'Momentum Wellbeing CIC',
  tagline: 'Healthier Lives. Stronger Communities.',
  description: 'Momentum Wellbeing CIC supports adults to live healthier, more connected lives through inclusive wellbeing programmes across the UK.',
  url: 'https://momentumwellbeing.co.uk',
  email: 'hello@momentumwellbeing.co.uk',
  phone: '01234 567 890',
  address: 'Harlow, Essex',
  social: {
    facebook: 'https://facebook.com/momentumwellbeing',
    twitter: 'https://twitter.com/momentumwellbeing',
    instagram: 'https://instagram.com/momentumwellbeing',
    linkedin: 'https://linkedin.com/company/momentumwellbeing',
  },
  companyNumber: '12345678',
}

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Impact', href: '/impact' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    slug: 'community-fitness',
    name: 'Community Fitness Sessions',
    description: 'Inclusive group fitness classes for all abilities.',
    icon: 'Users',
    category: 'Physical',
  },
  {
    slug: 'walking-groups',
    name: 'Walking Groups',
    description: 'Friendly group walks combining activity with social connection.',
    icon: 'Clock',
    category: 'Physical',
  },
  // ... extend for all 15 services
]

export const IMPACT_STATS = [
  { number: 2400, suffix: '+', label: 'Adults supported through our wellbeing programmes' },
  { number: 18, suffix: '', label: 'Weekly community sessions running right now' },
  { number: 96, suffix: '%', label: 'Of participants report improved mental wellbeing' },
  { number: 15, suffix: '', label: 'Partner organisations supporting our mission' },
]
```

---

## lib/types.ts

```typescript
export interface Service {
  slug: string
  name: string
  description: string
  longDescription?: string
  icon: string
  category: 'Physical' | 'Mental' | 'Social' | 'Education' | 'Engagement'
  isFree?: boolean
  bookingRequired?: boolean
}

export interface Testimonial {
  id: string
  name: string
  initials: string
  role: string
  quote: string
  rating: number
  programme?: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  cost: string
  slug: string
  description?: string
  bookingRequired?: boolean
  capacity?: number
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  readTime?: string
  author?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  linkedIn?: string
}

export interface Partner {
  id: string
  name: string
  type: 'NHS' | 'Council' | 'Sport' | 'Charity' | 'Funder'
  logo?: string
}
```

---

## components/layout/Navigation.tsx

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constants'
import { Menu, X, Heart } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white border-b border-slate-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-display font-extrabold text-[17px] text-slate-800">
            <div className="w-[38px] h-[38px] bg-teal-primary rounded-[10px] flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white stroke-2" aria-hidden="true" />
            </div>
            <span>
              Momentum<br />
              <span className="font-medium text-[13px] text-slate-400">Wellbeing CIC</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="text-sm font-medium text-slate-600 px-3.5 py-2 rounded-lg hover:text-teal-primary hover:bg-teal-pale transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link href="/refer" className="btn-secondary text-sm px-5 py-2.5 rounded-full border-2 border-teal-primary text-teal-primary font-semibold hover:bg-teal-pale transition-all">
              Make a Referral
            </Link>
            <Link href="/donate" className="btn-accent text-sm px-5 py-2.5 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-all">
              Donate
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 stroke-slate-700" /> : <Menu className="w-6 h-6 stroke-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100" role="menu">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-6 py-3.5 text-[15px] font-medium text-slate-600 border-b border-slate-50 hover:text-teal-primary hover:bg-teal-pale/50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/donate" role="menuitem" className="block px-6 py-3.5 text-[15px] font-bold text-accent-dark border-b border-slate-50">
            Donate
          </Link>
        </div>
      )}
    </nav>
  )
}
```

---

## components/animations/RevealOnScroll.tsx

```tsx
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export default function RevealOnScroll({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
```

---

## components/animations/AnimatedCounter.tsx

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Props {
  target: number
  suffix?: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', duration = 1800 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}
```

---

## components/sections/Hero.tsx

```tsx
import Link from 'next/link'
import { ShieldCheck, Users, CheckCircle } from 'lucide-react'
import AnimatedCounter from '@/components/animations/AnimatedCounter'

export default function Hero() {
  return (
    <section className="bg-teal-gradient py-24 overflow-hidden relative" aria-label="Hero">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,...\")" }} />

      <div className="max-w-[1180px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-dot" />
              Serving communities across the UK
            </div>
            <h1 className="font-display text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Healthier Lives.<br />
              <span className="text-gradient">Stronger Communities.</span>
            </h1>
            <p className="text-lg text-white/85 max-w-[500px] leading-relaxed mb-10">
              Momentum Wellbeing CIC supports adults to live healthier, more connected lives through inclusive wellbeing programmes — because everyone deserves access to support.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/services" className="btn-accent inline-flex items-center gap-2 bg-amber-400 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-amber-500 transition-all hover:-translate-y-0.5">
                Explore Our Services
              </Link>
              <Link href="/refer" className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all">
                Make a Referral
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              {[
                'Free programmes available',
                'CIC — surplus reinvested',
                'Open to all adults',
              ].map(item => (
                <span key={item} className="flex items-center gap-1.5 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 stroke-teal-secondary stroke-2" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:block relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 stroke-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold">Community Update</div>
                  <div className="text-sm text-white/65">This week's impact</div>
                </div>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full mb-2">
                <div className="h-full w-[78%] bg-teal-secondary rounded-full" />
              </div>
              <p className="text-xs text-white/65 mb-6">78 people reached this week</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: 340, suffix: '+', label: 'Active members' },
                  { num: 18, suffix: '', label: 'Weekly sessions' },
                  { num: 96, suffix: '%', label: 'Satisfaction' },
                  { num: 0, suffix: '', label: 'Barriers to access' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-5 text-center">
                    <span className="font-display text-3xl font-extrabold block">
                      <AnimatedCounter target={stat.num} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs text-white/65 mt-1 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-5 -right-5 bg-white rounded-xl px-4 py-3 shadow-float flex items-center gap-3 animate-float-up">
              <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-amber-600" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Safe & Inclusive</div>
                <div className="text-xs text-slate-500">Welcoming space for all</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## app/layout.tsx

```tsx
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: {
    default: 'Momentum Wellbeing CIC — Community Wellbeing for Everyone',
    template: '%s | Momentum Wellbeing CIC',
  },
  description: 'Momentum Wellbeing CIC supports adults to live healthier, more connected lives through inclusive wellbeing programmes across the UK.',
  keywords: ['community wellbeing', 'mental wellbeing', 'physical wellbeing', 'social prescribing', 'community fitness', 'UK CIC'],
  authors: [{ name: 'Momentum Wellbeing CIC' }],
  metadataBase: new URL('https://momentumwellbeing.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://momentumwellbeing.co.uk',
    siteName: 'Momentum Wellbeing CIC',
    title: 'Momentum Wellbeing CIC — Healthier Lives. Stronger Communities.',
    description: 'Inclusive wellbeing programmes, community fitness, social prescribing and mental health support.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@momentumwellbeing',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} bg-brand-bg text-brand-dark antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-teal-primary text-white px-4 py-2 rounded-lg z-[9999] font-semibold">
          Skip to main content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## app/page.tsx (Homepage)

```tsx
import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import LogosBand from '@/components/sections/LogosBand'
import AboutSection from '@/components/sections/AboutSection'
import ImpactNumbers from '@/components/sections/ImpactNumbers'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChoose from '@/components/sections/WhyChoose'
import Testimonials from '@/components/sections/Testimonials'
import UpcomingEvents from '@/components/sections/UpcomingEvents'
import LatestNews from '@/components/sections/LatestNews'
import VolunteerCTA from '@/components/sections/VolunteerCTA'
import DonateCTA from '@/components/sections/DonateCTA'
import Partners from '@/components/sections/Partners'
import Newsletter from '@/components/sections/Newsletter'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Momentum Wellbeing CIC — Community Wellbeing for Everyone',
  description: 'Building healthier, better-connected communities through inclusive wellbeing programmes, community fitness, social prescribing and mental health support.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosBand />
      <AboutSection />
      <ImpactNumbers />
      <ServicesGrid />
      <WhyChoose />
      <Testimonials />
      <UpcomingEvents />
      <LatestNews />
      <VolunteerCTA />
      <DonateCTA />
      <Partners />
      <Newsletter />
      <ContactCTA />
    </>
  )
}
```

---

## Deployment Guide

### Option 1: Vercel (Recommended)

```bash
# Install dependencies
npm install

# Build and test locally
npm run dev        # http://localhost:3000
npm run build      # Production build check

# Deploy to Vercel
npx vercel         # First deploy
npx vercel --prod  # Production deploy
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` = `https://momentumwellbeing.co.uk`
- `RESEND_API_KEY` (for contact/volunteer forms)
- `NEXT_PUBLIC_GA_ID` (Google Analytics)

### Option 2: Netlify

```bash
# Build command: npm run build
# Publish directory: .next
# Add netlify.toml for redirects
```

### Option 3: Self-hosted (VPS)

```bash
npm run build
npm run start      # Production server on port 3000
# Use nginx as reverse proxy to port 3000
```

### Custom Domain
1. Add `momentumwellbeing.co.uk` in hosting dashboard
2. Update DNS: CNAME `www` → `cname.vercel-dns.com`
3. Add `A` record for apex domain

### Performance Checklist
- [ ] Enable Next.js Image Optimization
- [ ] Configure ISR (Incremental Static Regeneration) for events/news
- [ ] Add sitemap.xml via `next-sitemap`
- [ ] Enable Vercel Analytics
- [ ] Set up Google Analytics / Plausible
- [ ] Configure GDPR-compliant cookie consent

### Accessibility Checklist
- [ ] Test with axe DevTools browser extension
- [ ] Keyboard navigation through all interactive elements
- [ ] Screen reader test with NVDA / VoiceOver
- [ ] Colour contrast: all text passes WCAG AA
- [ ] All images have meaningful alt text
- [ ] Focus indicators visible on all interactive elements
- [ ] Form labels associated with inputs
- [ ] Error messages programmatically associated

---

## SEO Implementation

Each page uses Next.js `generateMetadata()`:

```tsx
// app/services/walking-groups/page.tsx
export const metadata: Metadata = {
  title: 'Walking Groups — Free Community Walks Near You',
  description: 'Join our friendly community walking groups. Gentle physical activity, fresh air and social connection — free and open to all abilities.',
  keywords: ['walking groups', 'community walks', 'free walking groups', 'social walking'],
  openGraph: {
    title: 'Walking Groups | Momentum Wellbeing CIC',
    description: 'Join our friendly community walking groups.',
    images: [{ url: '/images/og/walking-groups.jpg', width: 1200, height: 630 }],
  },
}
```

Add `app/sitemap.ts` for automatic sitemap generation and `app/robots.ts` for robots.txt.
