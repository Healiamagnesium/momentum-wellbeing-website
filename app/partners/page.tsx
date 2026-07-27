import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Eyebrow } from '@/components/ui/index'

export const metadata: Metadata = { title: 'Our Partners | Momentum Wellbeing CIC', description: 'Partnership opportunities with Momentum Wellbeing CIC.' }

export default function PartnersPage() {
  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Our partners</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5">Stronger together</h1>
          <p className="text-xl text-white/80 max-w-[560px] leading-relaxed">We are preparing this section as our partnership network develops.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[440px] rounded-3xl overflow-hidden">
            <Image src="/images/community/community-outreach.webp" alt="Momentum Wellbeing CIC community outreach" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Partner information coming soon</p>
            <h2 className="font-display font-extrabold text-3xl text-slate-800 mb-5">Interested in working with us?</h2>
            <p className="text-slate-600 leading-relaxed mb-7">We welcome conversations with community groups, funders, health organisations, local businesses and other organisations whose values align with ours.</p>
            <Link href="/contact" className="inline-flex bg-teal-primary text-white font-display font-semibold px-8 py-4 rounded-full hover:bg-teal-700 transition-all">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
