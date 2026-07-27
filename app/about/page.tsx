import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Shield, Target } from 'lucide-react'
import { Eyebrow } from '@/components/ui/index'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = { title: 'About Momentum Wellbeing CIC', description: 'Learn about Momentum Wellbeing CIC, our mission and our community-focused approach to wellbeing.' }
const values=[
 {Icon:Heart,title:'Compassion',desc:'We treat people with warmth, dignity and genuine care.'},
 {Icon:Users,title:'Inclusion',desc:'We aim to create welcoming activities that reflect the communities we serve.'},
 {Icon:Shield,title:'Integrity',desc:'As a CIC, we are accountable to our community and our social purpose.'},
 {Icon:Target,title:'Purpose',desc:'We focus on practical wellbeing support and meaningful community connection.'},
]
export default function AboutPage(){return <>
<section className="bg-teal-gradient py-20 text-white"><div className="max-w-[1180px] mx-auto px-6"><Eyebrow light>About us</Eyebrow><h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-tight mb-6 max-w-[720px]">Creating healthier, stronger communities through wellbeing</h1><p className="text-xl text-white/80 max-w-[600px] leading-relaxed">Momentum Wellbeing CIC is a newly incorporated Community Interest Company based in Harlow.</p></div></section>
<section className="py-24 bg-white"><div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Our mission</p><h2 className="font-display font-extrabold text-4xl text-slate-800 mb-5">Stronger minds. Stronger communities.</h2><p className="text-lg text-slate-600 leading-relaxed mb-5">Our mission is to empower communities to create healthier, stronger minds and better lives through wellbeing.</p><p className="text-slate-600 leading-relaxed">Our developing work includes mental wellbeing, community support, health and fitness, mindfulness and workshops. We will continue updating this website as programmes and activities are confirmed.</p><div className="mt-8 text-sm text-slate-500 bg-slate-50 rounded-2xl p-6"><strong className="text-slate-700">Registered details</strong><br/>{SITE_CONFIG.name}<br/>Company number {SITE_CONFIG.companyNumber}<br/>Incorporated {SITE_CONFIG.incorporatedOn}<br/>{SITE_CONFIG.address}</div></div><div className="relative min-h-[560px] rounded-3xl overflow-hidden"><Image src="/images/community/wellbeing-workshop.webp" alt="Momentum Wellbeing CIC community workshop" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw"/></div></div></section>
<section className="py-24 bg-slate-50"><div className="max-w-[1180px] mx-auto px-6"><div className="text-center mb-12"><p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Our values</p><h2 className="font-display font-extrabold text-4xl text-slate-800">How we want to work</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{values.map(({Icon,title,desc})=><div key={title} className="bg-white rounded-2xl p-7 border border-slate-100"><div className="w-12 h-12 bg-teal-pale rounded-xl flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-teal-primary"/></div><h3 className="font-display font-bold text-slate-800 mb-2">{title}</h3><p className="text-sm text-slate-500 leading-relaxed">{desc}</p></div>)}</div></div></section>
<section className="py-20 bg-teal-primary text-white text-center"><div className="max-w-[650px] mx-auto px-6"><h2 className="font-display font-extrabold text-3xl mb-4">Meet our leadership</h2><p className="text-white/75 mb-8">Our company directors page is being prepared with verified information.</p><Link href="/about/team" className="inline-flex bg-amber-400 px-8 py-4 rounded-full font-semibold">Company directors</Link></div></section>
</>}
