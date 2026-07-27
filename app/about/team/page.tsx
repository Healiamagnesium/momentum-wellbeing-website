import type { Metadata } from 'next'
import { Eyebrow } from '@/components/ui/index'
import RevealOnScroll from '@/components/animations/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Company Directors | Momentum Wellbeing CIC',
  description: 'Meet the company directors of Momentum Wellbeing CIC.',
}

const directors = [
  {
    name: 'Jeffrey Agyeman',
    role: 'Co-Founder & Director',
    bio: 'Jeffrey helps lead Momentum Wellbeing CIC’s vision, strategy and community initiatives, with a focus on creating accessible wellbeing opportunities for everyone.',
  },
  {
    name: 'Lennox Agyeman',
    role: 'Co-Founder & Director',
    bio: 'Lennox supports the development and growth of Momentum Wellbeing CIC, helping to build programmes that encourage healthier and stronger communities.',
  },
  {
    name: 'Kyle Man',
    role: 'Co-Founder & Director',
    bio: 'Kyle works alongside the leadership team to develop partnerships, community engagement and the long-term direction of Momentum Wellbeing CIC.',
  },
  {
    name: 'Mackenzie Tweddell',
    role: 'Co-Founder & Director',
    bio: 'Mackenzie helps oversee the organisation’s operations and supports the delivery of community wellbeing initiatives.',
  },
]

export default function TeamPage() {
  return (
    <>
      <section className="bg-teal-gradient py-16 sm:py-20 text-white overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <RevealOnScroll>
            <Eyebrow light>Leadership</Eyebrow>
            <h1 className="font-display font-extrabold text-[clamp(34px,7vw,52px)] leading-tight mb-5">Company directors</h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-[620px] leading-relaxed">Meet the people helping to shape Momentum Wellbeing CIC and guide our work in the community.</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {directors.map((director, index) => (
              <RevealOnScroll key={director.name} delay={index * 0.08}>
                <article className="director-card group h-full rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-card">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-pale text-lg font-display font-extrabold text-teal-primary transition-transform duration-300 group-hover:scale-105">
                      {director.name.split(' ').map(part => part[0]).join('')}
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800">{director.name}</h2>
                      <p className="text-sm font-semibold text-teal-primary">{director.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{director.bio}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">Momentum Wellbeing CIC · Company number 17298212</p>
        </div>
      </section>
    </>
  )
}
