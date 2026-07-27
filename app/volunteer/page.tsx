// app/volunteer/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Clock, Heart } from 'lucide-react'
import { VOLUNTEER_ROLES } from '@/lib/constants'
import { Eyebrow, SectionHeader, Badge } from '@/components/ui/index'
import { VolunteerForm } from '@/components/forms/Forms'

export const metadata: Metadata = {
  title: 'Volunteer With Us | Momentum Wellbeing CIC',
  description: 'Join the Momentum Wellbeing volunteer team. Make a difference in your community — walking group leaders, peer support facilitators, fitness assistants and more.',
}

const perks = [
  'Full induction and role-specific training provided',
  'Ongoing support from our dedicated volunteer coordinator',
  'Invitation to volunteer socials and appreciation events',
  'References provided after 3 months of volunteering',
  'Opportunity to gain nationally recognised qualifications',
  'Access to our wellbeing programmes free of charge',
  'Travel expenses reimbursed',
  'A genuinely warm and supportive team culture',
]

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Get involved</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,54px)] leading-tight mb-6 max-w-[660px]">
            Volunteer with us and change lives — including your own
          </h1>
          <p className="text-xl text-white/75 max-w-[540px] leading-relaxed mb-8">
            Our volunteers are the heartbeat of Momentum Wellbeing. Every session we run, every person we support — none of it would be possible without our incredible volunteer team.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#roles" className="bg-amber-400 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-amber-500 transition-all">
              See Available Roles
            </a>
            <a href="#enquiry-form" className="bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all">
              Quick Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Why volunteer */}
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader eyebrow="Why volunteer" title="What you'll get from volunteering with us" id="why-volunteer" />
              <ul className="space-y-3" role="list">
                {perks.map(perk => (
                  <li key={perk} className="flex items-start gap-3 text-[15px] text-slate-600" role="listitem">
                    <CheckCircle className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-pale rounded-3xl p-10">
              <div className="text-5xl mb-5" aria-hidden="true">❤️</div>
              <blockquote className="font-display font-bold text-xl text-slate-800 leading-snug mb-4">
                "I started volunteering to give something back after Momentum helped me through a difficult time. Now I lead a walking group every Tuesday and it's the highlight of my week."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-primary rounded-full flex items-center justify-center font-display font-bold text-sm text-white" aria-hidden="true">SJ</div>
                <div>
                  <div className="font-semibold text-sm text-slate-800">Sarah J.</div>
                  <div className="text-xs text-slate-500">Walking Group Volunteer Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-24 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeader eyebrow="Available roles" title="Find the right role for you" centered id="roles-heading"
            subtitle="We have volunteering opportunities for all skills, schedules and experience levels." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {VOLUNTEER_ROLES.map(role => (
              <article key={role.id} className="bg-white rounded-2xl border border-slate-100 p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all" role="listitem">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-[17px] text-slate-800">{role.title}</h3>
                  <Badge variant="teal">
                    <Clock className="w-3 h-3 inline mr-1" aria-hidden="true" />
                    {role.commitment}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{role.description}</p>
                <div className="border-t border-slate-50 pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Ideal if you…</p>
                  <ul className="space-y-1.5" role="list">
                    {role.requirements.map(req => (
                      <li key={req} className="flex items-center gap-2 text-sm text-slate-600" role="listitem">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-secondary flex-shrink-0" aria-hidden="true" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry-form" className="py-24 bg-dark-gradient">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <Eyebrow light>Apply now</Eyebrow>
            <h2 className="font-display font-extrabold text-3xl text-white mb-3">Ready to get started?</h2>
            <p className="text-white/65 text-lg">Send us a quick enquiry and we'll be in touch within 48 hours to tell you more.</p>
          </div>
          <VolunteerForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-[760px] mx-auto px-6">
          <SectionHeader eyebrow="FAQ" title="Volunteering questions answered" centered id="vol-faq" />
          <div className="space-y-5">
            {[
              {
                q: 'Do I need any qualifications or experience?',
                a: 'Not at all. We welcome volunteers from all backgrounds and provide all the training you need. What matters most is your enthusiasm and commitment to our community.',
              },
              {
                q: 'How much time do I need to commit?',
                a: "It depends on the role. Some positions require as little as 2 hours per month, while others involve more regular weekly commitments. We'll always discuss your availability before matching you to a role.",
              },
              {
                q: 'Will I be DBS checked?',
                a: 'Some roles that involve working with vulnerable adults will require a DBS (Disclosure and Barring Service) check. We cover the cost of this for all volunteers.',
              },
              {
                q: 'What training will I receive?',
                a: 'All volunteers receive an induction covering our values, policies and safeguarding. Role-specific training is provided depending on your position — for example, walk leader training for walking group volunteers.',
              },
              {
                q: 'Can volunteering lead to paid work?',
                a: 'We advertise all paid positions internally first and actively encourage volunteers to apply. Several members of our paid team started as volunteers.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-slate-50 rounded-2xl border border-slate-100 p-6 cursor-pointer">
                <summary className="font-display font-bold text-[15px] text-slate-800 list-none flex items-center justify-between">
                  {q}
                  <span className="text-teal-primary text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="text-sm text-slate-500 leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
