'use client'
// components/layout/CookieBanner.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('mw-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('mw-cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('mw-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-800 text-white border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-[1180px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-white/80 leading-relaxed">
            We use cookies to improve your experience and understand how our website is used. By clicking "Accept", you consent to our use of analytics cookies.{' '}
            <Link href="/cookies" className="text-teal-secondary underline hover:no-underline">
              Cookie policy
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 border border-white/30 text-white/70 font-semibold rounded-full text-sm hover:bg-white/10 transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-teal-primary text-white font-semibold rounded-full text-sm hover:bg-teal-700 transition-all"
          >
            Accept cookies
          </button>
        </div>
        <button
          onClick={decline}
          aria-label="Close cookie banner"
          className="absolute top-3 right-4 text-white/40 hover:text-white/80 transition-colors sm:relative sm:top-auto sm:right-auto"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// components/layout/JsonLd.tsx
// Structured data for SEO (JSON-LD)
// ─────────────────────────────────────────────
import { SITE_CONFIG } from '@/lib/constants'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harlow Community Hub',
      addressLocality: 'Harlow',
      addressRegion: 'Essex',
      addressCountry: 'GB',
    },
    sameAs: Object.values(SITE_CONFIG.social),
    foundingDate: '2020',
    areaServed: {
      '@type': 'Place',
      name: 'Harlow, Essex, UK',
    },
    knowsAbout: [
      'Community Wellbeing',
      'Social Prescribing',
      'Mental Health Support',
      'Community Fitness',
      'Peer Support',
      'Health Education',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ service }: { service: { name: string; description: string; url: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: { '@type': 'Place', name: 'Harlow and surrounding communities, UK' },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function EventSchema({ event }: {
  event: {
    title: string
    description?: string
    date: string
    time: string
    location: string
    cost: string
    slug: string
  }
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.location,
      address: { '@type': 'PostalAddress', addressLocality: 'Harlow', addressCountry: 'GB' },
    },
    organizer: { '@type': 'Organization', name: SITE_CONFIG.name, url: SITE_CONFIG.url },
    offers: {
      '@type': 'Offer',
      price: event.cost.includes('Free') ? '0' : event.cost.replace(/[^0-9.]/g, ''),
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    url: `${SITE_CONFIG.url}/events/${event.slug}`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.href}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ questions }: { questions: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
