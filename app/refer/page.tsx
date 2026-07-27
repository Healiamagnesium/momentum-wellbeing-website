// app/refer/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ClipboardList, CheckCircle, Clock, Users } from 'lucide-react'
import { Eyebrow, SectionHeader } from '@/components/ui/index'
import { ReferralForm } from '@/components/forms/Forms'

export const metadata: Metadata = {
  title: 'Make a Referral | Momentum Wellbeing CIC',
  description: 'Refer a patient or client to Momentum Wellbeing CIC. Our professional referral form is designed for GPs, link workers, social workers and other health and care professionals.',
}

const steps = [
  { step: '01', title: 'Complete the form', desc: 'Fill in the referral form below with details about you and your client.' },
  { step: '02', title: 'We review it', desc: 'Our team reviews every referral within 5 working days and identifies the most suitable support.' },
  { step: '03', title: 'We make contact', desc: 'We contact the client directly (with their consent) to discuss their needs and next steps.' },
  { step: '04', title: 'They get started', desc: 'The client is onboarded into their chosen programme with full support from our team.' },
]

export default function ReferralPage() {
  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Professional referrals</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[660px]">
            Refer a patient or client to Momentum Wellbeing
          </h1>
          <p className="text-xl text-white/80 max-w-[540px] leading-relaxed">
            For GPs, link workers, social workers, district nurses and other health and care professionals who want to connect their clients with community wellbeing support.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeader eyebrow="How it works" title="The referral process" centered id="referral-process" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-teal-primary rounded-2xl flex items-center justify-center font-display font-extrabold text-[17px] text-white mx-auto mb-4">{step}</div>
                <h3 className="font-display font-bold text-[15px] text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Eligibility */}
          <div className="bg-teal-pale border border-teal-light rounded-2xl p-8 mb-16">
            <h2 className="font-display font-bold text-xl text-slate-800 mb-4">Who can be referred?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              {[
                'Adults aged 18 and over',
                'Residents of our service area',
                'People experiencing social isolation or loneliness',
                'Adults with low-level mental health needs',
                'People who are physically inactive',
                'Those managing long-term conditions',
                'Individuals with low health literacy',
                'People referred through social prescribing pathways',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 stroke-teal-primary flex-shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="referral-form">
            <SectionHeader eyebrow="Referral form" title="Complete a referral" id="form-heading" />
            <ReferralForm />
          </div>

          {/* Self-referral note */}
          <div className="mt-10 bg-slate-50 rounded-2xl p-6 flex gap-4 items-start">
            <Users className="w-6 h-6 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-display font-bold text-[15px] text-slate-800 mb-1">Self-referrals are also welcome</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                You don't need a professional referral to access most of our programmes. Members of the public can contact us directly to find out what's available and how to get started.{' '}
                <Link href="/contact" className="text-teal-primary font-semibold hover:underline">Contact us</Link>. You can also email <a href="mailto:momentumwellbeing@hotmail.com" className="text-teal-primary font-semibold hover:underline">momentumwellbeing@hotmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
