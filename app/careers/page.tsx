// app/careers/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Briefcase, Heart, CheckCircle } from 'lucide-react'
import { Eyebrow, SectionHeader, Badge } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'Careers | Momentum Wellbeing CIC',
  description: 'Join the Momentum Wellbeing CIC team. View current vacancies and find out about working for a purpose-driven community interest company in health and wellbeing.',
}

const benefits = [
  'Flexible and hybrid working where roles allow',
  'Generous annual leave entitlement (28 days + bank holidays)',
  'Access to all Momentum Wellbeing programmes free of charge',
  'Professional development budget and funded training',
  'Genuine commitment to work-life balance and wellbeing',
  'Supportive, purpose-driven team culture',
  'Regular reflective practice and clinical supervision where appropriate',
  'Opportunity to shape a growing organisation',
]

// In a real build, vacancies would come from a CMS or API
const vacancies = [
  {
    id: '1',
    title: 'Community Wellbeing Coordinator',
    type: 'Full-time',
    salary: '£26,000 – £29,000',
    location: 'Harlow, Essex (hybrid)',
    closing: '4 July 2025',
    description: 'We are looking for an enthusiastic and organised Community Wellbeing Coordinator to support the day-to-day delivery of our wellbeing programmes across Harlow and the surrounding area.',
  },
  {
    id: '2',
    title: 'Social Prescribing Link Worker',
    type: 'Part-time (0.6 FTE)',
    salary: '£24,000 pro rata',
    location: 'Harlow GP Practices',
    closing: '11 July 2025',
    description: 'An exciting opportunity to join our growing social prescribing team, working directly within GP practices to connect patients with community wellbeing support.',
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Join our team</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[640px]">
            Build a career that makes a real difference
          </h1>
          <p className="text-xl text-white/80 max-w-[520px] leading-relaxed">
            Working at Momentum Wellbeing means being part of a team that genuinely cares — about the community it serves and about the people who make the work possible.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader eyebrow="Why work with us" title="Benefits of working at Momentum Wellbeing" id="benefits" />
              <ul className="space-y-3" role="list">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-slate-600" role="listitem">
                    <CheckCircle className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl p-10">
              <div className="text-4xl mb-5" aria-hidden="true">💬</div>
              <blockquote className="font-display font-bold text-xl text-slate-800 leading-snug mb-4">
                "I've worked in health and social care for 12 years and this is the most supported, valued and purposeful I've ever felt in a job."
              </blockquote>
              <div>
                <div className="font-semibold text-sm text-slate-700">Aisha P.</div>
                <div className="text-xs text-slate-400">Social Prescribing Lead, Momentum Wellbeing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current vacancies */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeader eyebrow="Current vacancies" title="Open positions" id="vacancies"
            subtitle="We advertise all vacancies here and share them on our social media channels." />
          {vacancies.length > 0 ? (
            <div className="flex flex-col gap-5">
              {vacancies.map(v => (
                <article key={v.id} className="bg-white rounded-2xl border border-slate-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-[18px] text-slate-800 mb-2">{v.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="teal">
                          <Briefcase className="w-3 h-3 inline mr-1" aria-hidden="true" />{v.type}
                        </Badge>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 stroke-slate-300" aria-hidden="true" />{v.location}
                        </span>
                        <span className="text-sm font-semibold text-teal-primary">{v.salary}</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-slate-400 flex items-center gap-1 justify-end mb-3">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        Closes {v.closing}
                      </div>
                      <Link href={`/contact?re=${encodeURIComponent(v.title)}`} className="bg-teal-primary text-white font-display font-semibold px-5 py-2.5 rounded-full hover:bg-teal-700 transition-all text-sm inline-flex">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center">
              <Heart className="w-10 h-10 stroke-slate-200 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-display font-bold text-lg text-slate-600 mb-2">No vacancies right now</h3>
              <p className="text-slate-400 text-sm mb-5">We don't have any paid positions available at the moment, but we are always looking for volunteers.</p>
              <Link href="/volunteer" className="bg-teal-primary text-white font-display font-semibold px-7 py-3.5 rounded-full hover:bg-teal-700 transition-all inline-flex">
                Explore Volunteering
              </Link>
            </div>
          )}

          {/* Speculative */}
          <div className="mt-10 bg-teal-pale border border-teal-light rounded-2xl p-7 flex gap-5 items-start">
            <Briefcase className="w-6 h-6 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-display font-bold text-[15px] text-slate-800 mb-1">Speculative applications</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">
                Don't see the right role? We welcome speculative applications from people who share our values and have skills in health coaching, community development, administration or social prescribing.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-teal-primary hover:underline">Send a speculative application →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
