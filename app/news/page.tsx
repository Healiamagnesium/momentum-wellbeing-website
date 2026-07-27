import type { Metadata } from 'next'
import Image from 'next/image'
import { Eyebrow } from '@/components/ui/index'

export const metadata: Metadata = {
  title: 'Community Updates | Momentum Wellbeing CIC',
  description: 'Community updates and activities from Momentum Wellbeing CIC.',
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Community updates</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[680px]">Our community in action</h1>
          <p className="text-xl text-white/80 max-w-[560px] leading-relaxed">We are building this space to share genuine updates, events and stories from Momentum Wellbeing CIC.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative min-h-[460px] rounded-3xl overflow-hidden">
              <Image src="/images/community/community-event-banner.webp" alt="Momentum Wellbeing CIC at a community event" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Updates coming soon</p>
              <h2 className="font-display font-extrabold text-3xl text-slate-800 mb-5">Real activities. Real people. Real community.</h2>
              <p className="text-slate-600 leading-relaxed mb-4">We have removed the placeholder news stories while we prepare accurate updates from our own events and programmes.</p>
              <p className="text-slate-600 leading-relaxed">Please check back soon, or email <a className="text-teal-primary underline" href="mailto:momentumwellbeing@hotmail.com">momentumwellbeing@hotmail.com</a> to hear about upcoming activities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
