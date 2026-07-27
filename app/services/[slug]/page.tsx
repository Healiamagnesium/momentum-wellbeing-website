// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { SERVICES, TESTIMONIALS, EVENTS } from '@/lib/constants'
import { Eyebrow, Badge, SectionHeader } from '@/components/ui/index'
import { Star } from 'lucide-react'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.name} | Momentum Wellbeing CIC`,
    description: service.description.slice(0, 160),
    keywords: service.seoKeywords,
  }
}

const whatToExpect = [
  'A warm, non-judgemental welcome from our trained team',
  'Sessions adapted to your needs and current ability',
  'A safe and inclusive environment for all backgrounds',
  'Ongoing support between sessions if needed',
  'Connection with others in your community',
  'Regular check-ins to track your progress and wellbeing',
]

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)
  if (!service) notFound()

  const relatedEvents = EVENTS.filter(e =>
    e.category.toLowerCase().includes(service.category.toLowerCase()) ||
    e.title.toLowerCase().includes(service.name.split(' ')[0].toLowerCase())
  ).slice(0, 2)

  const relatedTestimonials = TESTIMONIALS.filter(t =>
    t.programme?.toLowerCase().includes(service.name.split(' ')[0].toLowerCase())
  ).slice(0, 2)

  const otherServices = SERVICES.filter(s => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">{service.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            {service.isFree && <Badge variant="teal">Free</Badge>}
            <Badge variant="slate">{service.category}</Badge>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[680px]">
            {service.name}
          </h1>
          <p className="text-xl text-white/80 max-w-[560px] leading-relaxed mb-8">
            {service.shortDesc}
          </p>
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/65">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {service.frequency}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Various community venues
            </span>
            <span className="font-semibold text-white/85">{service.price}</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/refer" className="bg-amber-400 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-amber-500 transition-all">Get Referred</Link>
            <Link href="/contact" className="bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all">Ask a Question</Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Content */}
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="About this programme" title={`What is ${service.name}?`} id="about-programme" />
              <div className="prose prose-slate max-w-none text-[16px] leading-relaxed text-slate-600 mb-12">
                <p>{service.description}</p>
              </div>

              <h2 className="font-display font-bold text-2xl text-slate-800 mb-6">What to expect</h2>
              <ul className="space-y-3 mb-12" role="list">
                {whatToExpect.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-slate-600" role="listitem">
                    <CheckCircle className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display font-bold text-2xl text-slate-800 mb-6">Who is this for?</h2>
              <div className="bg-teal-pale rounded-2xl p-7 mb-12">
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  This programme is open to all adults aged 18 and over. No previous experience is required and there are no fitness prerequisites. We welcome people of all abilities, backgrounds and health circumstances. If you have specific health conditions or accessibility requirements, please contact us before attending and we'll make sure your first session is set up for success.
                </p>
              </div>

              {relatedTestimonials.length > 0 && (
                <>
                  <h2 className="font-display font-bold text-2xl text-slate-800 mb-6">What people say</h2>
                  <div className="space-y-5 mb-12">
                    {relatedTestimonials.map(t => (
                      <article key={t.id} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-card">
                        <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} stars`}>
                          {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" aria-hidden="true" />)}
                        </div>
                        <blockquote className="text-[15px] text-slate-600 italic leading-relaxed mb-4">"{t.quote}"</blockquote>
                        <div className="text-sm font-semibold text-slate-700">{t.name} <span className="font-normal text-slate-400">— {t.role}</span></div>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside aria-label="Programme details and actions">
              <div className="sticky top-24 space-y-5">
                {/* Quick info */}
                <div className="bg-teal-pale rounded-2xl p-6 border border-teal-light">
                  <h3 className="font-display font-bold text-[15px] text-slate-800 mb-4">Programme details</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Cost</dt>
                      <dd className="font-semibold text-teal-primary">{service.price}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Frequency</dt>
                      <dd className="font-semibold text-slate-700">{service.frequency}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Category</dt>
                      <dd className="font-semibold text-slate-700">{service.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Booking</dt>
                      <dd className="font-semibold text-slate-700">Drop-in or by referral</dd>
                    </div>
                  </dl>
                </div>

                {/* Actions */}
                <Link href="/refer" className="block bg-teal-primary text-white font-display font-semibold px-6 py-4 rounded-full hover:bg-teal-700 transition-all text-center">
                  Get Referred
                </Link>
                <Link href="/contact" className="block border-2 border-teal-primary text-teal-primary font-display font-semibold px-6 py-4 rounded-full hover:bg-teal-pale transition-all text-center">
                  Ask a Question
                </Link>

                {/* Upcoming sessions for this service */}
                {relatedEvents.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-100 p-5">
                    <h3 className="font-display font-bold text-[14px] text-slate-700 mb-3">Upcoming sessions</h3>
                    {relatedEvents.map(event => (
                      <Link key={event.id} href={`/events/${event.slug}`} className="flex gap-3 py-3 border-b border-slate-50 last:border-0 hover:text-teal-primary transition-colors group">
                        <div className="w-10 h-10 bg-teal-primary rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-white">
                          <span className="font-display font-bold text-sm leading-none">{event.day}</span>
                          <span className="text-[9px] uppercase tracking-wide opacity-80">{event.month}</span>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-700 group-hover:text-teal-primary leading-snug">{event.title}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{event.time}</div>
                        </div>
                      </Link>
                    ))}
                    <Link href="/events" className="text-xs font-semibold text-teal-primary hover:underline mt-2 block">View all events →</Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display font-bold text-2xl text-slate-800">You might also be interested in</h2>
            <Link href="/services" className="text-sm font-semibold text-teal-primary hover:underline flex items-center gap-1">
              All services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="block bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-[15px] text-slate-800 group-hover:text-teal-primary transition-colors">{s.name}</h3>
                  {s.isFree && <Badge variant="teal">Free</Badge>}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
