// app/donate/page.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Shield, Heart, Users, Clock, CheckCircle } from 'lucide-react'
import { Eyebrow, SectionHeader } from '@/components/ui/index'

const monthlyAmounts = [
  { value: 5, impact: 'Covers the cost of one person attending a month of walking groups' },
  { value: 10, impact: 'Funds one mental wellbeing workshop session and all its materials' },
  { value: 25, impact: 'Supports a full week of free community fitness sessions' },
  { value: 50, impact: 'Funds a peer support group for a month, including facilitation and venue costs' },
]

const singleAmounts = [
  { value: 10, impact: 'Covers resources for a wellbeing workshop' },
  { value: 25, impact: 'Funds a month of walking groups for one participant' },
  { value: 50, impact: 'Funds a full community fitness session for all attendees' },
  { value: 100, impact: 'Supports a social prescribing referral journey end-to-end' },
]

const impactItems = [
  { Icon: Users, title: 'Community', desc: 'support shaped around local people' },
  { Icon: Heart, title: '96%', desc: 'report improved wellbeing' },
  { Icon: Clock, title: '18', desc: 'weekly sessions running' },
  { Icon: Shield, title: '100%', desc: 'surplus reinvested in community' },
]

export default function DonatePage() {
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly')
  const [selected, setSelected] = useState(10)
  const [custom, setCustom] = useState('')

  const amounts = frequency === 'monthly' ? monthlyAmounts : singleAmounts
  const currentImpact = amounts.find(a => a.value === selected)?.impact

  return (
    <>
      <section className="bg-teal-gradient py-20 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <Eyebrow light>Support us</Eyebrow>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,52px)] leading-tight mb-5 max-w-[640px]">
            Every donation helps a community member thrive
          </h1>
          <p className="text-xl text-white/80 max-w-[520px] leading-relaxed">
            As a Community Interest Company, all surplus from donations is reinvested directly into our programmes. You are funding real change in real lives.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Donation form */}
            <div>
              <SectionHeader eyebrow="Make a donation" title="Choose your giving level" id="donation-form" />

              {/* Frequency toggle */}
              <div className="flex bg-slate-100 rounded-full p-1 mb-6 w-fit">
                {(['monthly', 'once'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => { setFrequency(f); setSelected(f === 'monthly' ? 10 : 25) }}
                    className={`px-6 py-2.5 rounded-full text-sm font-display font-semibold transition-all ${frequency === f ? 'bg-white text-teal-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    aria-pressed={frequency === f}
                  >
                    {f === 'monthly' ? 'Monthly' : 'One-off'}
                  </button>
                ))}
              </div>

              {/* Amount grid */}
              <fieldset className="grid grid-cols-2 gap-3 mb-5" aria-label={`Choose a ${frequency} donation amount`}>
                <legend className="sr-only">Donation amount</legend>
                {amounts.map(a => (
                  <button
                    key={a.value}
                    type="button"
                    onClick={() => { setSelected(a.value); setCustom('') }}
                    aria-pressed={selected === a.value && !custom}
                    className={`border-2 rounded-xl p-5 text-left cursor-pointer transition-all ${selected === a.value && !custom ? 'border-teal-primary bg-teal-pale' : 'border-slate-200 hover:border-teal-primary/50'}`}
                  >
                    <div className="font-display font-extrabold text-2xl text-teal-primary mb-1">£{a.value}</div>
                    <div className="text-xs text-slate-500">{frequency === 'monthly' ? 'per month' : 'one-off'}</div>
                  </button>
                ))}
              </fieldset>

              {/* Custom amount */}
              <div className="mb-6">
                <label htmlFor="custom-amount" className="block text-sm font-semibold text-slate-600 mb-2">Or enter your own amount (£)</label>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setSelected(0) }}
                  placeholder="e.g. 15"
                  className="border-2 border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-primary transition-colors w-40"
                />
              </div>

              {/* Impact statement */}
              {(currentImpact || custom) && (
                <div className="bg-teal-pale border border-teal-light rounded-xl p-4 mb-6 flex items-start gap-3">
                  <Heart className="w-5 h-5 stroke-teal-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-teal-primary font-medium leading-relaxed">
                    {custom ? `Your gift of £${custom} will go directly into our community programmes.` : currentImpact}
                  </p>
                </div>
              )}

              {/* Gift Aid */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-teal-primary" defaultChecked />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Add Gift Aid</strong> — I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax in the current tax year than the amount of Gift Aid claimed on all my donations it is my responsibility to pay any difference.
                    <span className="text-teal-primary font-semibold"> This increases your donation by 25% at no extra cost to you.</span>
                  </span>
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-amber-400 text-white font-display font-semibold py-4 rounded-full hover:bg-amber-500 transition-all text-base mb-3"
              >
                Donate £{custom || selected} {frequency === 'monthly' ? 'per month' : 'now'}
              </button>
              <p className="text-center text-xs text-slate-400">🔒 Secure payment · Gift Aid eligible · Cancel monthly donations anytime</p>
            </div>

            {/* Why donate */}
            <div>
              <SectionHeader eyebrow="Why donate" title="Where your money goes" id="where-it-goes" />
              <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
                As a CIC, we are legally required to use all surplus for community benefit. There are no shareholders, no profit extraction — just more support for more people.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {impactItems.map(({ Icon, title, desc }) => (
                  <div key={title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <Icon className="w-6 h-6 stroke-teal-primary mb-2" aria-hidden="true" />
                    <div className="font-display font-extrabold text-2xl text-slate-800 mb-0.5">{title}</div>
                    <div className="text-xs text-slate-500">{desc}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3" role="list">
                {[
                  'All donations used for direct community benefit',
                  'Annual impact report published publicly',
                  'Gift Aid increases your donation by 25%',
                  'Monthly donors can cancel any time',
                  'Registered CIC — legally accountable',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600" role="listitem">
                    <CheckCircle className="w-4 h-4 stroke-teal-primary flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-slate-800 rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-[15px] mb-2">Corporate giving & grants</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4">
                  If you're a business or grant-making body interested in supporting Momentum Wellbeing, we'd love to talk about how we can work together.
                </p>
                <Link href="/partners" className="text-teal-secondary text-sm font-semibold hover:underline">
                  Explore partnership opportunities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
