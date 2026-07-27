import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Mail } from 'lucide-react'
import { SERVICES, SITE_CONFIG } from '@/lib/constants'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Momentum Wellbeing CIC — Healthier Lives. Stronger Communities.',
  description: 'Momentum Wellbeing CIC empowers communities through mental wellbeing, community support, health and fitness, mindfulness and workshops.',
}

const gallery = [
  ['/images/community/community-event-banner.webp', 'Momentum Wellbeing CIC at a community event'],
  ['/images/community/community-walk-team.webp', 'Momentum Wellbeing team at an outdoor activity'],
  ['/images/community/community-runner.webp', 'Momentum Wellbeing participant running outdoors'],
  ['/images/community/wellbeing-workshop.webp', 'Momentum Wellbeing workshop'],
  ['/images/community/community-outreach.webp', 'Momentum Wellbeing community outreach'],
]

export default function HomePage() {
  return (
    <>
      <section className="hero-shell relative min-h-[560px] sm:min-h-[680px] flex items-end sm:items-center overflow-hidden text-white">
        <Image
          src="/images/community/community-walk-team.webp"
          alt="Momentum Wellbeing community activity"
          fill
          priority
          className="hero-image object-cover object-[52%_38%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-900/15 sm:bg-gradient-to-r sm:from-slate-900/90 sm:via-slate-900/70 sm:to-slate-900/20" />
        <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 pb-12 pt-32 sm:py-24 w-full">
          <RevealOnScroll className="max-w-[650px]" distance={18}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-7 backdrop-blur-sm">
              Community Interest Company · No. {SITE_CONFIG.companyNumber}
            </div>
            <h1 className="font-display font-extrabold text-[clamp(38px,11vw,68px)] leading-[1.02] mb-5 sm:mb-6">
              Stronger minds.<br />
              <span className="text-amber-300">Stronger communities.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-7 sm:mb-9 max-w-[590px]">
              Empowering communities to create healthier, stronger minds and better lives through wellbeing.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3">
              <Link href="/services" className="button-lift inline-flex justify-center items-center gap-2 bg-amber-400 text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full">
                Explore our services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/refer" className="button-lift text-center bg-white/15 border border-white/40 font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full backdrop-blur-sm">
                Make a referral
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="image-hover relative h-[360px] sm:h-[520px] lg:min-h-[560px] rounded-[28px] overflow-hidden shadow-float">
              <Image src="/images/community/community-event-banner.webp" alt="Momentum Wellbeing CIC community event" fill className="object-cover object-[50%_42%]" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={0.08}>
            <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Who we are</p>
            <h2 className="font-display font-extrabold text-[clamp(32px,8vw,44px)] leading-tight text-slate-800 mb-5">Wellbeing rooted in community</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">Momentum Wellbeing CIC exists to create welcoming opportunities for people to support their mental, physical and social wellbeing.</p>
            <div className="space-y-3">
              {['Mental wellbeing', 'Community support', 'Health and fitness', 'Mindfulness', 'Workshops'].map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 animate-list-item" style={{ animationDelay: `${index * 80}ms` }}>
                  <CheckCircle className="w-5 h-5 text-teal-primary shrink-0" />{item}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <RevealOnScroll className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">What we do</p>
            <h2 className="font-display font-extrabold text-[clamp(32px,8vw,40px)] text-slate-800 mb-4">Support designed around people</h2>
            <p className="text-slate-600">Explore our developing range of community wellbeing activities and support.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.slice(0, 6).map((service, index) => (
              <RevealOnScroll key={service.slug} delay={(index % 3) * 0.08}>
                <Link href={`/services/${service.slug}`} className="service-card group block h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-card">
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-2 group-hover:text-teal-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-teal-primary font-semibold text-sm">Learn more <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <RevealOnScroll className="max-w-[650px] mb-8 sm:mb-10">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Community in action</p>
            <h2 className="font-display font-extrabold text-[clamp(32px,8vw,40px)] text-slate-800 mb-4">Real moments from Momentum</h2>
            <p className="text-slate-600">A glimpse of the people, activities and community connections behind our work.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {gallery.map(([src, alt], index) => (
              <RevealOnScroll key={src} delay={index * 0.06} className={index === 0 ? 'col-span-2 lg:col-span-2' : ''}>
                <div className={`gallery-tile relative rounded-2xl overflow-hidden ${index === 0 ? 'h-[340px] sm:h-[440px]' : 'h-[220px] sm:h-[300px] lg:h-[440px]'}`}>
                  <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 ease-out hover:scale-[1.045]" sizes="(max-width:1024px) 50vw, 20vw" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <RevealOnScroll className="max-w-[1180px] mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-primary mb-3">Our partners</p>
          <h2 className="font-display font-extrabold text-3xl text-slate-800 mb-4">Partnerships coming soon</h2>
          <p className="text-slate-600 max-w-[600px] mx-auto mb-7">We are preparing this section as our partnership network develops.</p>
          <Link href="/partners" className="inline-flex items-center gap-1 text-teal-primary font-semibold hover:gap-2 transition-all">Explore partnership opportunities →</Link>
        </RevealOnScroll>
      </section>

      <section className="py-16 sm:py-20 bg-teal-primary text-white">
        <RevealOnScroll className="max-w-[900px] mx-auto px-5 sm:px-6 text-center">
          <Mail className="w-9 h-9 mx-auto mb-4 animate-float-up" />
          <h2 className="font-display font-extrabold text-3xl mb-3">Stay connected</h2>
          <p className="text-white/75 mb-7">Subscribe for genuine Momentum Wellbeing updates as they are published.</p>
          <form name="newsletter" method="POST" action="/?submitted=newsletter" data-netlify="true" className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto">
            <input type="hidden" name="form-name" value="newsletter" />
            <label htmlFor="home-email" className="sr-only">Email address</label>
            <input id="home-email" name="email" type="email" required placeholder="Your email address" className="flex-1 rounded-full px-5 py-3.5 text-slate-800 shadow-inner" />
            <button className="button-lift bg-amber-400 px-7 py-3.5 rounded-full font-semibold">Subscribe</button>
          </form>
        </RevealOnScroll>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900 text-white text-center">
        <RevealOnScroll className="max-w-[760px] mx-auto px-5 sm:px-6">
          <h2 className="font-display font-extrabold text-[clamp(32px,8vw,40px)] mb-4">Ready to connect?</h2>
          <p className="text-white/70 text-lg mb-8">Contact us, make a referral or ask about upcoming activities.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link href="/contact" className="button-lift bg-amber-400 px-8 py-4 rounded-full font-semibold">Contact us</Link>
            <Link href="/refer" className="button-lift border border-white/40 px-8 py-4 rounded-full font-semibold">Make a referral</Link>
            <a href={`mailto:${SITE_CONFIG.email}`} className="button-lift border border-white/40 px-8 py-4 rounded-full font-semibold">Email us</a>
          </div>
          <p className="mt-8 text-sm sm:text-base text-white/55 break-words">{SITE_CONFIG.email}<br />{SITE_CONFIG.address}</p>
        </RevealOnScroll>
      </section>
    </>
  )
}
