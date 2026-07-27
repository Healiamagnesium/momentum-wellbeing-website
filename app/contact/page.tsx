// app/contact/page.tsx
import type { Metadata } from 'next'
import { Mail, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { Eyebrow, SectionHeader } from '@/components/ui/index'
import { ContactForm } from '@/components/forms/Forms'

export const metadata: Metadata = {
  title: 'Contact Us | Momentum Wellbeing CIC',
  description: 'Get in touch with Momentum Wellbeing CIC — whether you have a question about our services, want to make a referral, or are interested in partnering with us.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Get in touch</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[600px]">
            We'd love to hear from you
          </h1>
          <p className="text-xl text-white/80 max-w-[500px] leading-relaxed">
            Whether you want to join a programme, make a referral, volunteer, donate or partner with us — our team is here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="Send a message" title="How can we help?" id="contact-form-heading" />
              <ContactForm />
            </div>

            {/* Contact details */}
            <aside aria-label="Contact information">
              <div className="sticky top-24 space-y-5">
                <div className="bg-teal-pale rounded-2xl border border-teal-light p-6">
                  <h2 className="font-display font-bold text-[15px] text-slate-800 mb-5">Contact details</h2>
                  <dl className="space-y-5">
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Email</dt>
                        <dd><a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-teal-primary hover:underline">{SITE_CONFIG.email}</a></dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Address</dt>
                        <dd className="text-sm text-slate-600">{SITE_CONFIG.address}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Office hours</dt>
                        <dd className="text-sm text-slate-600">Monday – Friday<br />9:00am – 5:00pm</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-[14px] text-slate-700 mb-2">Making a referral?</h3>
                  <p className="text-sm text-slate-500 mb-3">Use our dedicated referral form for clinical and professional referrals.</p>
                  <a href="/refer" className="block bg-teal-primary text-white font-display font-semibold px-5 py-3 rounded-full text-sm text-center hover:bg-teal-700 transition-all">
                    Go to Referral Form
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-[14px] text-slate-700 mb-1">Response time</h3>
                  <p className="text-sm text-slate-500">We aim to respond to all enquiries within 2 working days.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
