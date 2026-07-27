// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import { OrganizationSchema } from '@/components/layout/CookieBanner'
import { SITE_CONFIG } from '@/lib/constants'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0F766E',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Momentum Wellbeing CIC — Healthier Lives. Stronger Communities.',
    template: '%s | Momentum Wellbeing CIC',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'community wellbeing', 'mental wellbeing', 'physical wellbeing', 'health and wellbeing',
    'community fitness', 'social prescribing', 'community support', 'wellbeing programmes',
    'mental health support', 'community activities', 'UK CIC', 'community interest company',
    'Harlow', 'Essex', 'walking groups', 'peer support',
  ],
  authors: [{ name: 'Momentum Wellbeing CIC', url: SITE_CONFIG.url }],
  creator: 'Momentum Wellbeing CIC',
  publisher: 'Momentum Wellbeing CIC',
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Momentum Wellbeing CIC — Healthier Lives. Stronger Communities.',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Momentum Wellbeing CIC — Community Wellbeing for Everyone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@momentumwellbeing',
    creator: '@momentumwellbeing',
    title: 'Momentum Wellbeing CIC — Healthier Lives. Stronger Communities.',
    description: SITE_CONFIG.description,
    images: ['/images/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#0F766E' }],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans bg-slate-50 text-slate-800 antialiased">
        {/* Skip navigation link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] bg-teal-primary text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
        >
          Skip to main content
        </a>

        <Navigation />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
