// app/cookies/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Momentum Wellbeing CIC',
}

export default function CookiesPage() {
  return (
    <>
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="font-display font-extrabold text-4xl mb-3">Cookie Policy</h1>
          <p className="text-white/70">Last updated: 1 June 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6 space-y-8">
          {[
            { title: 'What are cookies?', content: 'Cookies are small text files stored on your device when you visit a website. They help websites work efficiently and provide information to site owners.' },
            { title: 'How we use cookies', content: 'We use cookies to: remember your preferences; understand how visitors use our site (analytics); and ensure the website works correctly (essential cookies). We do not use cookies for advertising.' },
            {
              title: 'Types of cookies we use', content: `
Essential cookies: Required for the website to function. These cannot be disabled.
Analytics cookies: We use Google Analytics (with anonymised IP addresses) to understand site usage. You can opt out below.
Preference cookies: Remember your settings and choices on the site.`,
            },
            { title: 'Managing cookies', content: 'You can control and delete cookies through your browser settings. Please note that disabling some cookies may affect your experience of the site. You can also opt out of Google Analytics by using the Google Analytics Opt-out Browser Add-on.' },
            { title: 'Third-party cookies', content: 'We may embed content from third-party platforms (such as social media). These platforms may set their own cookies. We have no control over these and recommend checking their cookie policies.' },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-[18px] text-slate-800 mb-3">{title}</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed whitespace-pre-line">{content}</p>
            </div>
          ))}

          <div className="bg-teal-pale border border-teal-light rounded-2xl p-5">
            <h3 className="font-display font-bold text-[15px] text-slate-800 mb-3">Cookie preferences</h3>
            <div className="space-y-3">
              {[
                { label: 'Essential cookies', desc: 'Required for the site to work', locked: true },
                { label: 'Analytics cookies', desc: 'Help us improve our website', locked: false },
                { label: 'Preference cookies', desc: 'Remember your settings', locked: false },
              ].map(({ label, desc, locked }) => (
                <div key={label} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-700">{label}</div>
                    <div className="text-xs text-slate-400">{desc}</div>
                  </div>
                  <input type="checkbox" defaultChecked disabled={locked} className="accent-teal-primary w-4 h-4" aria-label={`Toggle ${label}`} />
                </div>
              ))}
            </div>
            <button className="mt-4 bg-teal-primary text-white font-display font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-teal-700 transition-all">
              Save preferences
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
