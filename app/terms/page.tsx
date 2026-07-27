// app/terms/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Momentum Wellbeing CIC',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="font-display font-extrabold text-4xl mb-3">Terms of Use</h1>
          <p className="text-white/70">Last updated: 1 June 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6 space-y-8">
          {[
            { title: '1. Acceptance of terms', content: 'By accessing and using momentumwellbeing.co.uk, you accept and agree to be bound by these terms. If you do not agree, please do not use this website.' },
            { title: '2. Use of this website', content: 'This website is provided for information about Momentum Wellbeing CIC and its services. You agree not to misuse the website, attempt to gain unauthorised access, or use it for unlawful purposes.' },
            { title: '3. Accuracy of information', content: 'We strive to keep information accurate and up to date. However, we do not guarantee the completeness or accuracy of any content. Nothing on this website constitutes medical, legal or financial advice.' },
            { title: '4. Intellectual property', content: 'All content on this website — including text, images, logos and design — is the property of Momentum Wellbeing CIC or its licensors and is protected by copyright. You may not reproduce or redistribute it without permission.' },
            { title: '5. External links', content: 'Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites and encourage you to read their policies.' },
            { title: '6. Limitation of liability', content: 'Momentum Wellbeing CIC shall not be liable for any loss or damage arising from use of this website or reliance on its content, to the extent permitted by law.' },
            { title: '7. Changes to terms', content: 'We may update these terms at any time. Continued use of the website constitutes acceptance of any changes.' },
            { title: '8. Governing law', content: 'These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.' },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-[18px] text-slate-800 mb-3">{title}</h2>
              <p className="text-[15px] text-slate-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
