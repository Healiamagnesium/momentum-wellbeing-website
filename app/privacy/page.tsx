// app/privacy/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Momentum Wellbeing CIC',
  description: 'Read the Momentum Wellbeing CIC Privacy Policy — how we collect, use and protect your personal data.',
}

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Who we are',
      content: `Momentum Wellbeing CIC is a Community Interest Company registered in England and Wales (Company Number ${SITE_CONFIG.companyNumber}). Our registered address is ${SITE_CONFIG.address}. We are the data controller for personal information collected through this website and our services. You can contact us at ${SITE_CONFIG.email}.`,
    },
    {
      title: '2. What personal data we collect',
      content: `We may collect the following types of personal data: your name, email address, phone number, date of birth, and health information where provided (e.g. for referral purposes). We also collect information about how you use our website through cookies and analytics tools. We only collect the data necessary to provide our services and fulfil our legitimate purposes.`,
    },
    {
      title: '3. How we use your data',
      content: `We use your data to: respond to enquiries and contact form submissions; process volunteer applications and referrals; deliver and improve our wellbeing programmes; send newsletters where you have subscribed; comply with our legal obligations; and measure and report on our community impact. We will never sell your data to third parties.`,
    },
    {
      title: '4. Our legal basis for processing',
      content: `We process your data on the following legal bases under UK GDPR: Consent — where you have given explicit permission (e.g. newsletter signup, referral consent). Legitimate interests — where processing is necessary for our activities and does not unduly impact your rights. Contract — where processing is necessary to fulfil a service you have requested. Legal obligation — where we are required to process data by law.`,
    },
    {
      title: '5. How long we keep your data',
      content: `We retain data only for as long as necessary. Contact enquiries are kept for 24 months. Referral information is retained for 3 years from the end of a participant's engagement with our services. Volunteer records are kept for 6 years in line with employment legislation. Transactional records are kept for 7 years for financial compliance purposes.`,
    },
    {
      title: '6. Sharing your data',
      content: `We may share your data with: our partner GP practices and NHS services where relevant and with your consent; third-party services that help us operate (e.g. our secure CRM system, email platform); statutory bodies where legally required. All third-party processors are bound by data processing agreements and may not use your data for any other purpose.`,
    },
    {
      title: '7. Your rights',
      content: `Under UK GDPR, you have the right to: access the personal data we hold about you; have inaccurate data corrected; have your data deleted ('right to be forgotten'); object to processing; restrict processing; data portability. To exercise any of these rights, please contact us at ${SITE_CONFIG.email}. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk.`,
    },
    {
      title: '8. Cookies',
      content: `Our website uses cookies to improve your experience and analyse site traffic. Please see our Cookie Policy for full details and to manage your preferences. We use Google Analytics to understand how visitors use our site — this is configured to anonymise IP addresses and we do not permit Google to use your data for its own purposes.`,
    },
    {
      title: '9. Changes to this policy',
      content: `We may update this Privacy Policy from time to time. Material changes will be communicated via our website. The date at the top of this page shows when the policy was last updated. Continued use of our services following an update constitutes acceptance of the revised policy.`,
    },
  ]

  return (
    <>
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="font-display font-extrabold text-4xl mb-3">Privacy Policy</h1>
          <p className="text-white/70 text-[15px]">Last updated: 1 June 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="bg-teal-pale border border-teal-light rounded-2xl p-6 mb-10">
            <p className="text-sm text-slate-600 leading-relaxed">
              Momentum Wellbeing CIC takes your privacy seriously. This policy explains how we collect, use and protect your personal data. If you have any questions, please contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-primary underline">{SITE_CONFIG.email}</a>.
            </p>
          </div>
          <div className="space-y-8">
            {sections.map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-display font-bold text-[18px] text-slate-800 mb-3">{title}</h2>
                <p className="text-[15px] text-slate-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-400">For any data-related enquiries, contact: <a href={`mailto:${SITE_CONFIG.email}`} className="text-teal-primary">{SITE_CONFIG.email}</a></p>
            <div className="flex gap-4 mt-4">
              <Link href="/cookies" className="text-sm text-teal-primary hover:underline">Cookie Policy</Link>
              <Link href="/accessibility" className="text-sm text-teal-primary hover:underline">Accessibility Statement</Link>
              <Link href="/terms" className="text-sm text-teal-primary hover:underline">Terms of Use</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
