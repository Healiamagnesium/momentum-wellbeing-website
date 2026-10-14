import type { Metadata } from 'next'
import Link from 'next/link'
import { Activity, Users, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Our Programmes | Momentum Wellbeing CIC',
  description: 'Move • Connect • Thrive is Momentum Wellbeing CIC’s core community wellbeing programme for adults aged 18+.',
}

const pillars = [
  { Icon: Activity, name: 'MOVE', subtitle: 'Physical activity & outdoor wellbeing', text: 'Accessible, gentle movement, guided wellbeing walks and outdoor activities that help people build confidence, healthier habits and enjoyment of being active — without the pressure of competitive sport.' },
  { Icon: Users, name: 'CONNECT', subtitle: 'Friendship, belonging & peer support', text: 'Welcoming spaces where people can meet others, form friendships, share experiences and feel less alone through creative workshops, group activities and peer connection.' },
  { Icon: Sparkles, name: 'THRIVE', subtitle: 'Practical wellbeing skills & confidence', text: 'Practical ways to support mental wellbeing, manage everyday stress, build resilience and maintain positive routines through wellbeing education, reflection, creativity and self-expression.' },
]

export default function ProgrammesPage() {
  return <>
    <section className="bg-teal-gradient py-20 text-white"><div className="max-w-[1180px] mx-auto px-6"><p className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-3">Our programmes</p><h1 className="font-display font-extrabold text-[clamp(38px,7vw,64px)] leading-tight mb-5">Move • Connect • Thrive</h1><p className="text-xl text-white/80 max-w-[760px] leading-relaxed">Our core community wellbeing programme, designed to help adults improve their mental wellbeing, become more physically active and build meaningful relationships in their community.</p></div></section>

    <section className="py-20 bg-white"><div className="max-w-[1180px] mx-auto px-6">
      <RevealOnScroll className="max-w-[800px] mx-auto text-center mb-14"><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">The solution</p><h2 className="font-display font-extrabold text-4xl text-slate-800 mb-5">Wellbeing works better when it connects the whole person</h2><p className="text-lg text-slate-600 leading-relaxed">The idea is simple: people are more likely to improve their wellbeing when they have opportunities to move their bodies, connect with others and develop practical skills to look after themselves.</p></RevealOnScroll>
      <div className="grid md:grid-cols-3 gap-6">{pillars.map(({Icon,name,subtitle,text},i)=><RevealOnScroll key={name} delay={i*.08}><div className="h-full rounded-3xl border border-slate-100 bg-slate-50 p-7"><div className="w-12 h-12 rounded-2xl bg-teal-pale flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-teal-primary" /></div><h3 className="font-display font-extrabold text-2xl text-slate-800 mb-1">{name}</h3><p className="font-semibold text-teal-primary mb-4">{subtitle}</p><p className="text-slate-600 leading-relaxed">{text}</p></div></RevealOnScroll>)}</div>
    </div></section>

    <section className="py-20 bg-slate-50"><div className="max-w-[980px] mx-auto px-6 grid lg:grid-cols-2 gap-10">
      <RevealOnScroll><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">The problem</p><h2 className="font-display font-extrabold text-3xl text-slate-800 mb-5">Barriers can reinforce one another</h2><p className="text-slate-600 leading-relaxed mb-5">Move • Connect • Thrive is intended for adults aged 18+ who may be experiencing poor mental wellbeing, stress or low mood, loneliness or social isolation, physical inactivity, low confidence, financial barriers or limited opportunities to participate in community life.</p><p className="text-slate-600 leading-relaxed">Our aim is to make participation accessible, welcoming and affordable, particularly for people who might otherwise struggle to access wellbeing opportunities.</p></RevealOnScroll>
      <RevealOnScroll delay={.08}><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Planned impact</p><h2 className="font-display font-extrabold text-3xl text-slate-800 mb-5">Sustained engagement, not a one-off intervention</h2><div className="space-y-3">{['Six structured 12-week programmes planned over two years','Around 20 participants per cohort','Approximately 120 unique participants across the planned delivery model','Impact measured through attendance, feedback, wellbeing questionnaires, confidence measures and social connection'].map(x=><div key={x} className="flex gap-3 text-slate-600"><CheckCircle className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />{x}</div>)}</div><p className="text-xs text-slate-500 mt-5">These are planned delivery targets, not results already achieved.</p></RevealOnScroll>
    </div></section>

    <section className="py-16 bg-slate-900 text-white text-center"><div className="max-w-[760px] mx-auto px-6"><h2 className="font-display font-extrabold text-3xl mb-4">Move from isolation towards connection</h2><p className="text-white/70 text-lg mb-7">From inactivity towards participation, and from low confidence towards greater resilience and independence.</p><Link href="/contact" className="inline-flex items-center gap-2 bg-amber-400 px-7 py-3.5 rounded-full font-semibold">Ask about the programme <ArrowRight className="w-4 h-4" /></Link></div></section>
  </>
}
