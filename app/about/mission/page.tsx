// app/about/mission/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Heart, Shield, Users, Target, ArrowRight } from 'lucide-react'
import { Eyebrow, SectionHeader } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'Our Mission & Vision | Momentum Wellbeing CIC',
  description:
    'Learn about the mission and vision of Momentum Wellbeing CIC — why we exist, what we believe, and where we are headed as a community interest company.',
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'We treat every person who comes to us with warmth, dignity and genuine care — never judgement. Everyone who walks through our door matters.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    desc: 'We design everything to be accessible to everyone, removing barriers of cost, ability, language and confidence so no one is left behind.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'As a CIC, we are legally accountable to our community. Every penny of surplus is reinvested — always. We say what we do, and do what we say.',
  },
  {
    icon: Target,
    title: 'Impact',
    desc: 'We measure what matters. Outcomes over outputs, sustained change over short-term fixes, and honest reporting of both our successes and our learnings.',
  },
  {
    icon: CheckCircle,
    title: 'Community',
    desc: 'We believe communities have the answers to their own health challenges. We listen, co-design and respond to what local people tell us they need.',
  },
  {
    icon: ArrowRight,
    title: 'Prevention',
    desc: 'We focus upstream — addressing the social, environmental and lifestyle factors that shape health long before illness takes hold.',
  },
]

const commitments = [
  'Keep at least 70% of our programme places free or subsidised',
  'Publish a full impact report every year, publicly available',
  'Consult our community before launching any new programme',
  'Reinvest 100% of any surplus back into our services',
  'Never sell personal data or profit from participant information',
  'Maintain WCAG 2.1 AA accessibility across all our digital presence',
]

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80">Mission & Vision</span>
          </nav>
          <Eyebrow light>Mission & Vision</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,54px)] leading-tight mb-5 max-w-[680px]">
            Why we exist and where we're headed
          </h1>
          <p className="text-xl text-white/80 max-w-[560px] leading-relaxed">
            Everything we do flows from a simple belief: every person deserves the support to live a healthier, more connected life — regardless of their background or circumstances.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-teal-primary rounded-3xl p-10 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-teal-secondary mb-4">
                Our Mission
              </div>
              <p className="font-display font-bold text-2xl leading-snug mb-5">
                To help adults build healthier lives through inclusive community wellbeing programmes that improve physical health, mental wellbeing and social connection.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                We do this by removing barriers to access, partnering with health services, and designing programmes that people actually want to attend — and keep coming back to.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800 rounded-3xl p-10 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
                Our Vision
              </div>
              <p className="font-display font-bold text-2xl leading-snug mb-5">
                A future where every person in our community has the support, connection and confidence to live a full and healthy life — regardless of their background or circumstances.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                We believe that health is not a privilege. It is a right — and community is the foundation on which it is built.
              </p>
            </div>
          </div>

          {/* What drives us */}
          <div className="max-w-[760px] mx-auto mb-20">
            <SectionHeader
              eyebrow="What drives us"
              title="The problems we exist to solve"
              centered
              id="problems"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: '🚶', issue: 'Physical inactivity', detail: 'Too many adults are not meeting basic activity guidelines, increasing risk of chronic illness.' },
                { emoji: '😔', issue: 'Poor mental wellbeing', detail: 'Anxiety, low mood and stress are widespread — yet community-based support remains hard to find.' },
                { emoji: '🏠', issue: 'Social isolation', detail: 'Loneliness is now recognised as a major public health issue, particularly among older adults.' },
                { emoji: '💷', issue: 'Cost barriers', detail: 'Gym memberships, classes and coaching are unaffordable for many of the people who need them most.' },
                { emoji: '🏥', issue: 'NHS pressure', detail: 'Non-clinical needs are filling GP appointments — social prescribing is part of the solution.' },
                { emoji: '📚', issue: 'Low health literacy', detail: 'Many people lack the knowledge to navigate health services or make informed lifestyle changes.' },
              ].map(({ emoji, issue, detail }) => (
                <div key={issue} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <div className="text-2xl mb-2" aria-hidden="true">{emoji}</div>
                  <div className="font-display font-bold text-[15px] text-slate-800 mb-1">{issue}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <SectionHeader
            eyebrow="Our values"
            title="The principles that guide everything we do"
            centered
            id="values"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
                role="listitem"
              >
                <div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-teal-primary stroke-[1.8]" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[16px] text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-white">
        <div className="max-w-[760px] mx-auto px-6">
          <SectionHeader
            eyebrow="Our commitments"
            title="What we promise our community"
            centered
            id="commitments"
          />
          <ul className="space-y-4" role="list">
            {commitments.map(commitment => (
              <li
                key={commitment}
                className="flex items-start gap-3 text-[15px] text-slate-600 bg-teal-pale border border-teal-light rounded-xl p-4"
                role="listitem"
              >
                <CheckCircle className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-gradient text-white text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-display font-extrabold text-3xl mb-4">
            Want to be part of our mission?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            Whether you want to access our services, volunteer, donate or partner with us — there's a place for you in the Momentum Wellbeing community.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services"
              className="bg-amber-400 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-amber-500 transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/volunteer"
              className="bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all"
            >
              Volunteer With Us
            </Link>
            <Link
              href="/contact"
              className="bg-white/15 border border-white/40 text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
