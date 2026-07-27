import type { Metadata } from 'next'
import Image from 'next/image'
import { Eyebrow } from '@/components/ui/index'

export const metadata: Metadata = { title: 'Events | Momentum Wellbeing CIC', description: 'Upcoming Momentum Wellbeing CIC events.' }
export default function EventsPage() {
  return <>
    <section className="bg-teal-gradient py-20 text-white"><div className="max-w-[1180px] mx-auto px-6"><Eyebrow light>Events</Eyebrow><h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] mb-5">Come and connect with us</h1><p className="text-xl text-white/80 max-w-[560px]">Accurate details of our upcoming activities will be added here as soon as dates are confirmed.</p></div></section>
    <section className="py-24 bg-white"><div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div className="relative min-h-[480px] rounded-3xl overflow-hidden"><Image src="/images/community/community-walk-team.webp" alt="Momentum Wellbeing CIC community activity" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" /></div><div><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Upcoming events</p><h2 className="font-display font-extrabold text-3xl text-slate-800 mb-5">New dates coming soon</h2><p className="text-slate-600 leading-relaxed mb-6">We have removed the placeholder event listings so nobody books an activity that has not been confirmed. For current information, email us directly.</p><a href="mailto:momentumwellbeing@hotmail.com?subject=Momentum%20Wellbeing%20events" className="inline-flex bg-teal-primary text-white font-display font-semibold px-8 py-4 rounded-full">Ask about upcoming events</a></div></div></section>
  </>
}
