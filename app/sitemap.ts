import type { MetadataRoute } from 'next'
import { SERVICES, EVENTS, NEWS_ARTICLES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://momentumwellbeing.co.uk'
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about/mission`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/team`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about/story`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/impact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/impact/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/impact/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/events`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/news`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/volunteer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/refer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/donate`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const eventRoutes: MetadataRoute.Sitemap = EVENTS.map(e => ({
    url: `${base}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const newsRoutes: MetadataRoute.Sitemap = NEWS_ARTICLES.map(a => ({
    url: `${base}/news/${a.slug}`,
    lastModified: a.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...eventRoutes, ...newsRoutes]
}
