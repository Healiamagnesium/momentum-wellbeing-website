// lib/types.ts

export interface Service {
  slug: string
  name: string
  shortDesc: string
  description: string
  icon: string
  category: 'Physical' | 'Mental' | 'Social' | 'Education' | 'Engagement'
  isFree: boolean
  price: string
  frequency: string
  seoKeywords: string[]
}

export interface ImpactStat {
  number: number
  suffix: string
  label: string
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
  day: string
  month: string
  time: string
  location: string
  category: string
  cost: string
  slug: string
  description?: string
  bookingRequired: boolean
  capacity: number | null
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  readTime: string
  author: string
  emoji: string
}

export interface TeamMember {
  id: string
  name: string
  initials: string
  role: string
  bio: string
  linkedIn?: string
}

export interface Partner {
  id: string
  name: string
  type: 'NHS' | 'Council' | 'Sport' | 'Charity' | 'Funder'
  logo?: string
}

export interface VolunteerRole {
  id: string
  title: string
  commitment: string
  description: string
  requirements: string[]
}

export interface CaseStudy {
  id: string
  name: string
  title: string
  summary: string
  outcomes: string[]
  programme: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface DonationAmount {
  value: number
  label: string
  impact: string
}

export interface FormStatus {
  state: 'idle' | 'submitting' | 'success' | 'error'
  message?: string
}

// API route types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface VolunteerFormData {
  name: string
  email: string
  phone?: string
  interest: string
  message?: string
}

export interface ReferralFormData {
  referrerName: string
  referrerOrg: string
  referrerEmail: string
  referrerPhone?: string
  clientName: string
  clientDob?: string
  clientPhone?: string
  clientEmail?: string
  consent: boolean
  reason: string
  services?: string
  urgency: 'routine' | 'soon' | 'urgent'
  notes?: string
}

export interface NewsletterFormData {
  email: string
}
