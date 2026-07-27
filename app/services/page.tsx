// app/services/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Navigation, Activity, Target, Heart, BookOpen, Calendar, MessageCircle, ClipboardList, Shield } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { Eyebrow, SectionHeader, Badge } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'Our Services | Momentum Wellbeing CIC',
  description: 'Explore all Momentum Wellbeing CIC programmes — community fitness, walking groups, mental wellbeing support, social prescribing, peer groups, health education and more.',
}

const iconMap: Record<string, any> = {
  Users, Navigation, Activity, Target, Heart, BookOpen, Calendar, MessageCircle, ClipboardList, Shield,
}

const categories = ['All', 'Physical', 'Mental', 'Social', 'Education', 'Engagement'] as const
type Category = typeof categories[number]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>What we offer</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-tight mb-6 max-w-[700px]">
            Programmes designed for real people, real lives
          </h1>
          <p className="text-xl text-white/80 max-w-[560px] leading-relaxed mb-10">
            Every programme we offer has been shaped by the community it serves. Free or low-cost, inclusive, and designed to make a genuine difference.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/refer" className="bg-amber-400 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-amber-500 transition-all">Make a Referral</Link>
            <Link href="/contact" className="bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all">Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeader eyebrow="All services" title="Find the right programme for you" centered id="services-list" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {SERVICES.map(service => {
              const Icon = iconMap[service.icon] || Heart
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block group">
                  <article className="bg-white rounded-2xl border border-slate-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-teal-light transition-all h-full relative overflow-hidden" role="listitem">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" aria-hidden="true" />
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center group-hover:bg-teal-primary transition-all">
                        <Icon className="w-6 h-6 stroke-teal-primary group-hover:stroke-white transition-all" aria-hidden="true" />
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {service.isFree && <Badge variant="teal">Free</Badge>}
                        <Badge variant="slate">{service.category}</Badge>
                      </div>
                    </div>
                    <h2 className="font-display font-bold text-[16px] text-slate-800 mb-2 group-hover:text-teal-primary transition-colors">{service.name}</h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.shortDesc}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-50 pt-4 mt-auto">
                      <span className="font-medium">{service.price}</span>
                      <span>{service.frequency}</span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-20 bg-slate-800 text-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-display font-extrabold text-3xl mb-4">Not sure which service is right?</h2>
          <p className="text-white/65 text-lg leading-relaxed mb-8">
            Our team is happy to talk through the options and help match you or your client to the most appropriate support. No referral is too complex — we'll find a way to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/refer" className="bg-teal-secondary text-slate-800 font-display font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-all">Make a Referral</Link>
            <Link href="/contact" className="bg-white/15 border border-white/30 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all">Contact the Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
