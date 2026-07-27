// app/accessibility/page.tsx
import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Accessibility Statement | Momentum Wellbeing CIC',
  description: 'Momentum Wellbeing CIC is committed to making its website accessible. Read our accessibility statement.',
}

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="font-display font-extrabold text-4xl mb-3">Accessibility Statement</h1>
          <p className="text-white/70">Last reviewed: 1 June 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6 space-y-8">
          <div className="bg-teal-pale border border-teal-light rounded-2xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Momentum Wellbeing CIC is committed to ensuring this website is accessible to as many people as possible. This statement applies to <strong>momentumwellbeing.co.uk</strong>.
            </p>
          </div>

          {[
            {
              title: 'Our commitment',
              content: 'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard. This means our website should be perceivable, operable, understandable and robust for all users, including those using assistive technologies such as screen readers, keyboard navigation and voice control software.',
            },
            {
              title: 'How accessible this website is',
              content: 'We have taken the following steps to make this website accessible: all images have descriptive alt text; colour contrast meets WCAG AA standards throughout; the website can be navigated using a keyboard alone; form inputs are labelled correctly; headings are used to create a logical page structure; the language of the page is declared; all interactive elements have visible focus states; and error messages are associated with their respective form fields.',
            },
            {
              title: 'Known issues',
              content: 'We are continuously working to improve accessibility. If you encounter any issues, please let us know. We aim to address reported accessibility issues within 10 working days.',
            },
            {
              title: 'What to do if you cannot access part of this website',
              content: `If you need information in a different format — such as accessible PDF, large print, easy read, audio recording or braille — please contact us at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}. We aim to respond within 5 working days.`,
            },
            {
              title: 'Reporting accessibility problems',
              content: `We are always looking to improve accessibility. If you find any problems not listed here, or think we're not meeting accessibility requirements, please contact: ${SITE_CONFIG.email}. We will consider your request and get back to you within 10 working days.`,
            },
            {
              title: 'Enforcement procedure',
              content: 'If you contact us about an accessibility issue and are not satisfied with our response, you can contact the Equality Advisory and Support Service (EASS) at equalityadvisoryservice.com.',
            },
            {
              title: 'Technical information',
              content: 'This website is built with Next.js and uses semantic HTML5, ARIA attributes where needed, and meets WCAG 2.1 Level AA. It has been tested with keyboard navigation and automated accessibility tools including axe DevTools.',
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-[18px] text-slate-800 mb-3">{title}</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">{content}</p>
            </div>
          ))}

          <div className="border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-400">This statement was prepared on 1 June 2025.</p>
          </div>
        </div>
      </section>
    </>
  )
}
