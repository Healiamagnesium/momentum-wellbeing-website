// app/events/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, MapPin, Calendar, Users, CheckCircle, ArrowLeft } from 'lucide-react'
import { EVENTS } from '@/lib/constants'
import { Badge, Eyebrow } from '@/components/ui/index'
import { formatDate } from '@/lib/utils'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return EVENTS.map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = EVENTS.find(e => e.slug === slug)
  if (!event) return { title: 'Event Not Found' }
  return {
    title: `${event.title} | Momentum Wellbeing CIC`,
    description: event.description,
  }
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params
  const event = EVENTS.find(e => e.slug === slug)
  if (!event) notFound()

  const otherEvents = EVENTS.filter(e => e.slug !== event.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80 truncate max-w-[200px]">{event.title}</span>
          </nav>
          <Badge variant="teal" className="mb-4">{event.category}</Badge>
          <h1 className="font-display font-extrabold text-[clamp(28px,4vw,48px)] leading-tight mb-6 max-w-[680px]">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-5 text-white/75 text-[15px]">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {event.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              {event.location}
            </span>
            {event.capacity && (
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                Limited to {event.capacity} places
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Content */}
            <div className="lg:col-span-2">
              <Link href="/events" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to all events
              </Link>

              <h2 className="font-display font-bold text-2xl text-slate-800 mb-4">About this event</h2>
              <p className="text-[16px] text-slate-600 leading-relaxed mb-8">{event.description}</p>

              <h2 className="font-display font-bold text-2xl text-slate-800 mb-4">What to bring</h2>
              <ul className="space-y-3 mb-10" role="list">
                {[
                  'Comfortable clothing suitable for movement',
                  'A bottle of water',
                  'Any mobility aids you usually use',
                  'A friend if you like — all welcome',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-slate-600" role="listitem">
                    <CheckCircle className="w-5 h-5 stroke-teal-primary flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <h3 className="font-display font-bold text-[15px] text-amber-800 mb-2">Accessibility</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  This event is designed to be accessible to all. The venue has step-free access and accessible toilets. If you have specific access requirements or health conditions, please contact us before attending and we'll ensure you're fully supported.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Event booking and details">
              <div className="sticky top-24 space-y-5">
                {/* Details card */}
                <div className="bg-teal-pale border border-teal-light rounded-2xl p-6">
                  <h3 className="font-display font-bold text-[15px] text-slate-800 mb-4">Event details</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-slate-500 mb-0.5">Date</dt>
                      <dd className="font-semibold text-slate-800">{formatDate(event.date)}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 mb-0.5">Time</dt>
                      <dd className="font-semibold text-slate-800">{event.time}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 mb-0.5">Location</dt>
                      <dd className="font-semibold text-slate-800">{event.location}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-500 mb-0.5">Cost</dt>
                      <dd className="font-semibold text-teal-primary">{event.cost}</dd>
                    </div>
                    {event.bookingRequired && (
                      <div>
                        <dt className="text-slate-500 mb-0.5">Booking</dt>
                        <dd className="font-semibold text-amber-700">Required — limited spaces</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* CTA */}
                {event.bookingRequired ? (
                  <Link
                    href="/contact"
                    className="block bg-teal-primary text-white font-display font-semibold px-6 py-4 rounded-full hover:bg-teal-700 transition-all text-center"
                  >
                    Book Your Place
                  </Link>
                ) : (
                  <div className="bg-teal-pale border border-teal-light rounded-2xl p-5 text-center">
                    <div className="font-display font-bold text-teal-primary mb-1">No booking required</div>
                    <p className="text-sm text-slate-500">Just turn up on the day — everyone is welcome.</p>
                  </div>
                )}

                <Link href="/contact" className="block border-2 border-teal-primary text-teal-primary font-display font-semibold px-6 py-3.5 rounded-full hover:bg-teal-pale transition-all text-center">
                  Ask a Question
                </Link>

                {/* Share */}
                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Share this event</p>
                  <div className="flex gap-2">
                    {['Facebook', 'Twitter', 'WhatsApp', 'Email'].map(platform => (
                      <button key={platform} className="flex-1 bg-white border border-slate-200 rounded-lg py-2 text-xs font-semibold text-slate-500 hover:border-teal-primary hover:text-teal-primary transition-all" aria-label={`Share on ${platform}`}>
                        {platform.slice(0, 2)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other events */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display font-bold text-2xl text-slate-800">More upcoming events</h2>
            <Link href="/events" className="text-sm font-semibold text-teal-primary hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherEvents.map(e => (
              <Link key={e.id} href={`/events/${e.slug}`} className="block group">
                <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-12 h-12 bg-teal-primary rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="font-display font-extrabold text-lg leading-none">{e.day}</span>
                      <span className="text-[9px] uppercase tracking-wide opacity-80">{e.month}</span>
                    </div>
                    <Badge variant="teal">{e.category}</Badge>
                  </div>
                  <h3 className="font-display font-bold text-[15px] text-slate-800 group-hover:text-teal-primary transition-colors mb-1">{e.title}</h3>
                  <p className="text-xs text-slate-400">{e.time} · {e.cost}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
