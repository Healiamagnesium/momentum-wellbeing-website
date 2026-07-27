'use client'
// components/forms/VolunteerForm.tsx
import { useState } from 'react'
import { Send } from 'lucide-react'

async function submitNetlifyForm(formName: string, values: Record<string, string | boolean>) {
  const body = new URLSearchParams({ 'form-name': formName })
  Object.entries(values).forEach(([key, value]) => body.append(key, String(value)))
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  if (!response.ok) throw new Error('Submission failed')
}


const interestOptions = [
  'Running walking groups',
  'Supporting fitness sessions',
  'Peer support facilitation',
  'Admin and communications',
  'Community events',
  'Health education support',
  'Other',
]

export function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitNetlifyForm('volunteer', form)
      setStatus('success')
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="bg-white/6 border border-white/10 rounded-3xl p-10 text-center text-white">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-display font-bold text-xl mb-2">Enquiry received!</h3>
        <p className="text-white/60">We'll be in touch within 48 hours. Thank you for wanting to volunteer with us.</p>
      </div>
    )
  }

  return (
    <div className="bg-white/6 border border-white/10 rounded-3xl p-10">
      <h3 className="font-display font-bold text-xl text-white mb-2">Quick enquiry</h3>
      <p className="text-sm text-white/60 mb-7">Tell us a little about yourself and we'll be in touch within 48 hours.</p>
      <form name="volunteer" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate aria-label="Volunteer enquiry form"><input type="hidden" name="form-name" value="volunteer" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="vol-name" className="block text-xs font-semibold text-white/70 mb-2">Full name <span aria-label="required">*</span></label>
            <input
              id="vol-name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={e => update('name', e.target.value)}
              placeholder="Your name"
              className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:border-teal-secondary focus:bg-white/12 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="vol-email" className="block text-xs font-semibold text-white/70 mb-2">Email <span aria-label="required">*</span></label>
            <input
              id="vol-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={e => update('email', e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:border-teal-secondary focus:bg-white/12 outline-none transition-all"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="vol-phone" className="block text-xs font-semibold text-white/70 mb-2">Phone number (optional)</label>
          <input
            id="vol-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
            placeholder="+44 7..."
            className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:border-teal-secondary focus:bg-white/12 outline-none transition-all"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vol-interest" className="block text-xs font-semibold text-white/70 mb-2">I'm interested in… <span aria-label="required">*</span></label>
          <select
            id="vol-interest"
            required
            value={form.interest}
            onChange={e => update('interest', e.target.value)}
            className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:border-teal-secondary focus:bg-white/12 outline-none transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-slate-800">Select an area</option>
            {interestOptions.map(o => <option key={o} value={o} className="bg-slate-800">{o}</option>)}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="vol-message" className="block text-xs font-semibold text-white/70 mb-2">Anything else to share?</label>
          <textarea
            id="vol-message"
            rows={3}
            value={form.message}
            onChange={e => update('message', e.target.value)}
            placeholder="Tell us about your availability, skills or motivation…"
            className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/35 focus:border-teal-secondary focus:bg-white/12 outline-none transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-teal-primary text-white font-display font-semibold px-6 py-3.5 rounded-full hover:bg-teal-700 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
          <Send className="w-4 h-4" aria-hidden="true" />
        </button>
        <p className="text-center text-xs text-white/40 mt-3">
          We'll never share your details. <a href="/privacy" className="text-white/55 underline">Privacy policy</a>
        </p>
      </form>
    </div>
  )
}

// components/forms/ContactForm.tsx
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitNetlifyForm('contact', form)
      setStatus('success')
    } catch { setStatus('error') }
  }

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/10 outline-none transition-all"

  if (status === 'success') {
    return (
      <div className="bg-teal-pale border border-teal-light rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-display font-bold text-xl text-teal-primary mb-2">Message received!</h3>
        <p className="text-slate-500">We'll respond within 2 working days. Thank you for getting in touch.</p>
      </div>
    )
  }

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4"><input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-600 mb-2">Full name <span aria-label="required" className="text-red-400">*</span></label>
          <input id="contact-name" type="text" required autoComplete="name" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-600 mb-2">Email <span aria-label="required" className="text-red-400">*</span></label>
          <input id="contact-email" type="email" required autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="your@email.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-600 mb-2">Phone (optional)</label>
        <input id="contact-phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+44 7..." className={inputClass} />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-600 mb-2">Subject <span aria-label="required" className="text-red-400">*</span></label>
        <select id="contact-subject" required value={form.subject} onChange={e => update('subject', e.target.value)} className={`${inputClass} cursor-pointer appearance-none`}>
          <option value="">Select a subject</option>
          <option>General enquiry</option>
          <option>Joining a programme</option>
          <option>Making a referral</option>
          <option>Volunteering</option>
          <option>Partnership enquiry</option>
          <option>Press / media</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-600 mb-2">Message <span aria-label="required" className="text-red-400">*</span></label>
        <textarea id="contact-message" rows={5} required value={form.message} onChange={e => update('message', e.target.value)} placeholder="How can we help you?" className={`${inputClass} resize-none`} />
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-teal-primary text-white font-display font-semibold px-6 py-3.5 rounded-full hover:bg-teal-700 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
        <Send className="w-4 h-4" aria-hidden="true" />
      </button>
      <p className="text-center text-xs text-slate-400">We aim to respond within 2 working days. <a href="/privacy" className="text-teal-primary underline">Privacy policy</a></p>
    </form>
  )
}

// components/forms/ReferralForm.tsx
export function ReferralForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [form, setForm] = useState({
    referrerName: '', referrerOrg: '', referrerEmail: '', referrerPhone: '',
    clientName: '', clientDob: '', clientPhone: '', clientEmail: '',
    consent: false, reason: '', services: '', urgency: 'routine', notes: '',
  })

  function update(field: string, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitNetlifyForm('referral', form)
      setStatus('success')
    } catch { setStatus('idle') }
  }

  const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/10 outline-none transition-all"
  const labelClass = "block text-sm font-semibold text-slate-600 mb-2"

  if (status === 'success') {
    return (
      <div className="bg-teal-pale border border-teal-light rounded-2xl p-10 text-center max-w-xl mx-auto">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-display font-bold text-xl text-teal-primary mb-3">Referral submitted successfully</h3>
        <p className="text-slate-600 leading-relaxed">Thank you for making this referral. Our team will be in touch with you and the client within 5 working days to confirm next steps.</p>
        <p className="text-sm text-slate-400 mt-4">A confirmation email has been sent to your registered email address.</p>
      </div>
    )
  }

  return (
    <form name="referral" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate aria-label="Client referral form" className="space-y-8"><input type="hidden" name="form-name" value="referral" />
      {/* Referrer section */}
      <fieldset className="border border-slate-100 rounded-2xl p-6">
        <legend className="font-display font-bold text-[15px] text-slate-700 px-2">Your details (referrer)</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="ref-name" className={labelClass}>Your full name <span className="text-red-400">*</span></label>
            <input id="ref-name" type="text" required autoComplete="name" value={form.referrerName} onChange={e => update('referrerName', e.target.value)} placeholder="Dr / Name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ref-org" className={labelClass}>Organisation <span className="text-red-400">*</span></label>
            <input id="ref-org" type="text" required value={form.referrerOrg} onChange={e => update('referrerOrg', e.target.value)} placeholder="GP Surgery / Trust / Service" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ref-email" className={labelClass}>Email <span className="text-red-400">*</span></label>
            <input id="ref-email" type="email" required autoComplete="email" value={form.referrerEmail} onChange={e => update('referrerEmail', e.target.value)} placeholder="your@nhs.net" className={inputClass} />
          </div>
          <div>
            <label htmlFor="ref-phone" className={labelClass}>Phone</label>
            <input id="ref-phone" type="tel" autoComplete="tel" value={form.referrerPhone} onChange={e => update('referrerPhone', e.target.value)} placeholder="Direct number" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Client section */}
      <fieldset className="border border-slate-100 rounded-2xl p-6">
        <legend className="font-display font-bold text-[15px] text-slate-700 px-2">Client details</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="client-name" className={labelClass}>Client full name <span className="text-red-400">*</span></label>
            <input id="client-name" type="text" required value={form.clientName} onChange={e => update('clientName', e.target.value)} placeholder="Full name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="client-dob" className={labelClass}>Date of birth</label>
            <input id="client-dob" type="date" value={form.clientDob} onChange={e => update('clientDob', e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="client-phone" className={labelClass}>Client phone</label>
            <input id="client-phone" type="tel" value={form.clientPhone} onChange={e => update('clientPhone', e.target.value)} placeholder="Client contact number" className={inputClass} />
          </div>
          <div>
            <label htmlFor="client-email" className={labelClass}>Client email</label>
            <input id="client-email" type="email" value={form.clientEmail} onChange={e => update('clientEmail', e.target.value)} placeholder="Client email address" className={inputClass} />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="ref-services" className={labelClass}>Recommended services</label>
          <select id="ref-services" value={form.services} onChange={e => update('services', e.target.value)} className={`${inputClass} cursor-pointer appearance-none`}>
            <option value="">Select a service (or leave for our team to advise)</option>
            <option>Walking Groups</option>
            <option>Community Fitness Sessions</option>
            <option>Mental Wellbeing Support</option>
            <option>Peer Support Groups</option>
            <option>Wellbeing Workshops</option>
            <option>Healthy Lifestyle Coaching</option>
            <option>Mobility & Stretching</option>
            <option>Social Prescribing</option>
            <option>Health Education</option>
            <option>Not sure — please advise</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="ref-reason" className={labelClass}>Reason for referral <span className="text-red-400">*</span></label>
          <textarea id="ref-reason" rows={4} required value={form.reason} onChange={e => update('reason', e.target.value)} placeholder="Briefly describe the client's needs, relevant health background and what you hope they'll gain from our services…" className={`${inputClass} resize-none`} />
        </div>
        <div className="mt-4">
          <fieldset>
            <legend className={labelClass}>Urgency</legend>
            <div className="flex gap-6 mt-1">
              {['routine', 'soon', 'urgent'].map(u => (
                <label key={u} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="radio" name="urgency" value={u} checked={form.urgency === u} onChange={() => update('urgency', u)} className="accent-teal-primary" />
                  {u.charAt(0).toUpperCase() + u.slice(1)}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="mt-4">
          <label htmlFor="ref-notes" className={labelClass}>Additional notes</label>
          <textarea id="ref-notes" rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Anything else we should know (language needs, accessibility requirements, preferred contact times)…" className={`${inputClass} resize-none`} />
        </div>
      </fieldset>

      {/* Consent */}
      <div className="bg-slate-50 rounded-xl p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.consent}
            onChange={e => update('consent', e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-teal-primary flex-shrink-0"
          />
          <span className="text-sm text-slate-600 leading-relaxed">
            I confirm that the client has given their consent for this referral to be made and for their information to be shared with Momentum Wellbeing CIC for the purpose of receiving wellbeing support. <a href="/privacy" className="text-teal-primary underline">Privacy policy</a>
          </span>
        </label>
      </div>

      <button type="submit" disabled={status === 'submitting' || !form.consent} className="w-full bg-teal-primary text-white font-display font-semibold px-6 py-4 rounded-full hover:bg-teal-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-base">
        {status === 'submitting' ? 'Submitting referral…' : 'Submit Referral'}
        <Send className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  )
}
