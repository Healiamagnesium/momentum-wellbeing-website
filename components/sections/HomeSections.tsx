'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Activity,
  BookOpen,
  Calendar,
  CheckCircle,
  ClipboardList,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Star,
  Target,
  Users,
} from 'lucide-react'
import {
  EVENTS,
  IMPACT_STATS,
  NEWS_ARTICLES,
  PARTNERS,
  SERVICES,
  SITE_CONFIG,
  TESTIMONIALS,
} from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import { VolunteerForm } from '@/components/forms/Forms'
import { Badge, SectionHeader } from '@/components/ui/index'
// components/sections/ImpactNumbers.tsx

export function ImpactNumbers() {
  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden" aria-labelledby="impact-heading">
      <div className="absolute top-[-50%] left-[-10%] w-[600px] h-[600px] rounded-full bg-teal-secondary/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400/6 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1180px] mx-auto px-6 relative">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our impact"
            title="Making a measurable difference"
            subtitle="Every number represents a person whose life has changed. Here's what we've achieved together."
            centered
            light
            id="impact-heading"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {IMPACT_STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-9 text-center transition-all hover:bg-white/8 hover:border-teal-secondary/30 hover:-translate-y-0.5" role="listitem">
                <span className="font-display text-[52px] font-extrabold leading-none text-teal-secondary block">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </span>
                <p className="text-white/65 text-[15px] mt-3 leading-relaxed">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/sections/ServicesGrid.tsx

const iconMap: Record<string, any> = {
  Users, Navigation, Activity, Target, Heart, BookOpen, Calendar, MessageCircle, ClipboardList, Shield,
}

export function ServicesGrid() {
  const displayServices = SERVICES.slice(0, 9)

  return (
    <section className="py-24 bg-slate-50" id="services" aria-labelledby="services-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="What we offer"
            title="Programmes built around your community"
            subtitle="From gentle movement to peer support, our services meet people where they are — and help them move forward."
            centered
            id="services-heading"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {displayServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart
            return (
              <RevealOnScroll key={service.slug} delay={(i % 3) * 0.1}>
                <article
                  className="bg-white rounded-2xl border border-slate-100 p-7 shadow-card transition-all duration-250 hover:shadow-card-hover hover:-translate-y-1 hover:border-teal-light group relative overflow-hidden cursor-pointer"
                  role="listitem"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" aria-hidden="true" />
                  <div className="w-[52px] h-[52px] bg-teal-pale rounded-xl flex items-center justify-center mb-5 transition-all duration-250 group-hover:bg-teal-primary">
                    <Icon className="w-6 h-6 stroke-teal-primary group-hover:stroke-white transition-all duration-250" aria-hidden="true" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-[16px] font-bold text-slate-800">{service.name}</h3>
                    {service.isFree && <Badge variant="teal">Free</Badge>}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.shortDesc}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-teal-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn more
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                  </Link>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>
        <RevealOnScroll>
          <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
            <Link href="/services" className="inline-flex items-center gap-2 bg-teal-primary text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-teal-700 transition-all hover:-translate-y-px">
              View All Services
            </Link>
            <Link href="/refer" className="inline-flex items-center gap-2 bg-white text-teal-primary border-2 border-teal-primary font-display font-semibold px-9 py-4 rounded-full hover:bg-teal-pale transition-all">
              Make a Referral
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// components/sections/Testimonials.tsx

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" aria-labelledby="testimonials-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Success stories"
            title="Hear from our community"
            subtitle="Real stories from real people whose lives have been shaped by Momentum Wellbeing programmes."
            centered
            id="testimonials-heading"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 0.1}>
              <article className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card relative overflow-hidden" role="listitem">
                <span className="absolute top-4 right-6 font-serif text-[80px] text-teal-light leading-none select-none" aria-hidden="true">"</span>
                <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 stroke-none" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-[15px] text-slate-600 leading-relaxed mb-6 italic">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-teal-pale flex items-center justify-center font-display font-bold text-sm text-teal-primary flex-shrink-0" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll>
          <div className="text-center mt-10">
            <Link href="/impact/testimonials" className="inline-flex items-center gap-2 bg-white text-teal-primary border-2 border-teal-primary font-display font-semibold px-7 py-3.5 rounded-full hover:bg-teal-pale transition-all">
              Read More Stories
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// components/sections/UpcomingEvents.tsx

export function UpcomingEvents() {
  return (
    <section className="py-24 bg-white" aria-labelledby="events-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-teal-primary mb-4">
                <span className="w-6 h-0.5 bg-teal-secondary rounded-full" aria-hidden="true" />
                What's on
              </div>
              <h2 className="font-display font-extrabold text-[clamp(28px,4vw,40px)] text-slate-800 leading-tight" id="events-heading">
                Upcoming events & sessions
              </h2>
            </RevealOnScroll>
          </div>
          <Link href="/events" className="bg-white text-teal-primary border-2 border-teal-primary font-display font-semibold px-6 py-3 rounded-full hover:bg-teal-pale transition-all text-sm">
            View all events
          </Link>
        </div>
        <div className="flex flex-col gap-4" role="list">
          {EVENTS.slice(0, 4).map((event, i) => (
            <RevealOnScroll key={event.id} delay={i * 0.05}>
              <Link href={`/events/${event.slug}`} className="block group">
                <article className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all hover:border-teal-light hover:shadow-float hover:bg-teal-pale/40" role="listitem">
                  <div className="flex-shrink-0 w-16 h-[70px] bg-teal-primary rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="font-display text-[28px] font-extrabold leading-none">{event.day}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider opacity-80">{event.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-[16px] text-slate-800 mb-1.5 group-hover:text-teal-primary transition-colors">{event.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 stroke-slate-300" aria-hidden="true" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 stroke-slate-300" aria-hidden="true" />
                        {event.location}
                      </span>
                      <span className="text-slate-400">{event.cost}</span>
                    </div>
                    <Badge variant="teal" className="mt-2">{event.category}</Badge>
                  </div>
                </article>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/sections/LatestNews.tsx

export function LatestNews() {
  return (
    <section className="py-24 bg-slate-50" aria-labelledby="news-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-teal-primary mb-4">
                <span className="w-6 h-0.5 bg-teal-secondary rounded-full" aria-hidden="true" />
                Latest news
              </div>
              <h2 className="font-display font-extrabold text-[clamp(28px,4vw,40px)] text-slate-800 leading-tight" id="news-heading">
                From the community
              </h2>
            </RevealOnScroll>
          </div>
          <Link href="/news" className="bg-white text-teal-primary border-2 border-teal-primary font-display font-semibold px-6 py-3 rounded-full hover:bg-teal-pale transition-all text-sm">
            All news
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {NEWS_ARTICLES.slice(0, 3).map((article, i) => (
            <RevealOnScroll key={article.id} delay={i * 0.1}>
              <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all" role="listitem">
                <div className="h-[200px] bg-gradient-to-br from-teal-pale to-teal-light flex items-center justify-center text-[64px] opacity-[0.18] select-none" aria-hidden="true">
                  {article.emoji}
                </div>
                <div className="p-6">
                  <Badge variant="accent" className="mb-3">{article.category}</Badge>
                  <h3 className="font-display font-bold text-[17px] text-slate-800 leading-snug mb-2.5">{article.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{formatDate(article.date)}</span>
                    <Link href={`/news/${article.slug}`} className="flex items-center gap-1 text-teal-primary font-semibold text-sm hover:underline" aria-label={`Read: ${article.title}`}>
                      Read more
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

// components/sections/Partners.tsx

export function Partners() {
  return (
    <section className="py-16 bg-slate-50" aria-labelledby="partners-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Our partners"
            title="Working together for healthier communities"
            subtitle="We collaborate with NHS, local authorities, sport organisations and the voluntary sector to maximise our reach and impact."
            centered
            id="partners-heading"
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" role="list">
            {PARTNERS.map(p => (
              <div key={p.id} role="listitem" className="bg-white border border-slate-100 rounded-xl px-6 py-5 flex items-center justify-center min-h-[80px] text-center font-display text-sm font-bold text-slate-400 hover:border-teal-light hover:text-teal-primary hover:shadow-float transition-all cursor-default">
                {p.name}
              </div>
            ))}
          </div>
          <div className="text-center mt-9">
            <p className="text-slate-500 text-[15px] mb-5">Interested in partnering with us?</p>
            <Link href="/partners" className="bg-white text-teal-primary border-2 border-teal-primary font-display font-semibold px-7 py-3.5 rounded-full hover:bg-teal-pale transition-all inline-flex">
              Explore Partnerships
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// components/sections/ContactCTA.tsx

export function ContactCTA() {
  return (
    <section className="py-20 bg-teal-gradient" aria-labelledby="contact-cta-heading">
      <div className="max-w-[1180px] mx-auto px-6 text-center text-white">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/60 mb-6 justify-center">
            <span className="w-6 h-0.5 bg-white/40 rounded-full" aria-hidden="true" />
            Get in touch
          </div>
          <h2 className="font-display font-extrabold text-[clamp(28px,4vw,44px)] mb-4" id="contact-cta-heading">
            Ready to take the first step?
          </h2>
          <p className="text-xl text-white/80 max-w-[520px] mx-auto mb-10 leading-relaxed">
            Whether you're looking for support, want to make a referral, or are interested in partnering with us — we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <Link href="/contact" className="bg-amber-400 text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-amber-500 transition-all text-base">
              Contact Us
            </Link>
            <Link href="/refer" className="bg-white/15 border border-white/40 text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-white/25 transition-all text-base">
              Make a Referral
            </Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="bg-white/15 border border-white/40 text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-white/25 transition-all text-base flex items-center gap-2">
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[800px] mx-auto">
            {[
              { Icon: Mail, title: 'Email us', detail: SITE_CONFIG.email },
              { Icon: Phone, title: 'Call us', detail: `${SITE_CONFIG.phone} · Mon–Fri 9am–5pm` },
              { Icon: MapPin, title: 'Find us', detail: 'Serving Harlow, Essex and beyond' },
            ].map(({ Icon, title, detail }) => (
              <div key={title} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/18 transition-all">
                <Icon className="w-7 h-7 stroke-white/80 mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-display font-bold text-sm mb-1.5">{title}</h3>
                <p className="text-white/65 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

// components/sections/Newsletter.tsx

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <div className="bg-amber-50 border-t border-amber-100 border-b py-8">
      <div className="max-w-[1180px] mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-shrink-0">
              <h3 className="font-display font-bold text-lg text-slate-800">Stay connected to your community</h3>
              <p className="text-sm text-slate-500 mt-1">Monthly updates on sessions, events and wellbeing tips — straight to your inbox.</p>
            </div>
            {submitted ? (
              <div className="flex-1 bg-teal-pale text-teal-primary font-semibold px-6 py-3 rounded-full text-sm">
                ✓ You're subscribed! Welcome to the Momentum community.
              </div>
            ) : (
              <form className="flex gap-3 flex-1 min-w-[280px] max-w-[480px]" onSubmit={handleSubmit} noValidate>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 border-2 border-slate-200 rounded-full px-5 py-3 text-sm outline-none focus:border-teal-primary transition-colors"
                  required
                  autoComplete="email"
                />
                <button type="submit" className="bg-teal-primary text-white font-display font-semibold px-6 py-3 rounded-full hover:bg-teal-700 transition-all text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}

// components/sections/VolunteerCTA.tsx

const reasons = [
  'Give back to your local community',
  'Build skills in health, fitness and community support',
  'Full training and ongoing support provided',
  'Join a warm, welcoming and passionate team',
  'Enhance your own wellbeing through purposeful connection',
]

export function VolunteerCTA() {
  return (
    <section className="py-24 bg-dark-gradient" aria-labelledby="volunteer-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-teal-secondary mb-5">
              <span className="w-6 h-0.5 bg-teal-secondary rounded-full" aria-hidden="true" />
              Get involved
            </div>
            <h2 className="font-display font-extrabold text-[clamp(28px,4vw,40px)] text-white leading-tight mb-5" id="volunteer-heading">
              Volunteer with us and change lives — including your own
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Our volunteers are the heartbeat of Momentum Wellbeing. Whether you have a few hours a month or a few days a week, there's a role that fits your life and skills.
            </p>
            <ul className="space-y-3.5 mb-10" role="list">
              {reasons.map(r => (
                <li key={r} className="flex items-center gap-3 text-[15px] text-white/85" role="listitem">
                  <CheckCircle className="w-[18px] h-[18px] stroke-teal-secondary flex-shrink-0" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
            <Link href="/volunteer" className="inline-flex items-center gap-2 bg-amber-400 text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-amber-500 transition-all">
              Find Your Role
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <VolunteerForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

// components/sections/DonateCTA.tsx

const amounts = [
  { value: 5, label: '£5', impact: 'Covers one person attending a month of walking groups' },
  { value: 10, label: '£10', impact: 'Funds one mental wellbeing workshop and all its materials' },
  { value: 25, label: '£25', impact: 'Supports a full week of community fitness sessions, free for all' },
]

const impactItems = [
  { Icon: Users, amount: '£5/month', desc: 'Covers one person attending a month of walking groups' },
  { Icon: Shield, amount: '£10/month', desc: 'Funds one mental wellbeing workshop session' },
  { Icon: Clock, amount: '£25/month', desc: 'Supports a full week of free community fitness sessions' },
]

export function DonateCTA() {
  const [selected, setSelected] = useState(5)

  return (
    <section className="py-24 bg-white" aria-labelledby="donate-heading">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-teal-primary mb-5">
              <span className="w-6 h-0.5 bg-teal-secondary rounded-full" aria-hidden="true" />
              Support us
            </div>
            <h2 className="font-display font-extrabold text-[clamp(28px,4vw,40px)] text-slate-800 leading-tight mb-4" id="donate-heading">
              Every donation helps a community member thrive
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              As a CIC, we rely on grants, partnerships and generous donations to keep our programmes free and accessible. Your support goes directly to the people who need it most.
            </p>
            <fieldset className="grid grid-cols-3 gap-3 mb-8" aria-label="Choose a donation amount">
              <legend className="sr-only">Choose a monthly donation amount</legend>
              {amounts.map(a => (
                <button
                  key={a.value}
                  onClick={() => setSelected(a.value)}
                  aria-pressed={selected === a.value}
                  className={`border-2 rounded-xl p-5 text-center cursor-pointer transition-all ${selected === a.value ? 'border-teal-primary bg-teal-pale' : 'border-slate-200 bg-slate-50 hover:border-teal-primary/40'}`}
                >
                  <div className="font-display text-[22px] font-extrabold text-teal-primary">{a.label}</div>
                  <div className="text-xs text-slate-500 mt-1">per month</div>
                </button>
              ))}
            </fieldset>
            <Link href="/donate" className="inline-flex items-center gap-2 bg-amber-400 text-white font-display font-semibold px-9 py-4 rounded-full hover:bg-amber-500 transition-all mb-3">
              Donate Now
            </Link>
            <p className="text-sm text-slate-400 mt-3">🔒 Secure payment · Gift Aid eligible · Cancel anytime</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Your impact</p>
              <div className="flex flex-col gap-4">
                {impactItems.map(({ Icon, amount, desc }) => (
                  <div key={amount} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-11 h-11 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-[22px] h-[22px] stroke-amber-700" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-[16px] text-slate-800">{amount}</div>
                      <div className="text-sm text-slate-500 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
