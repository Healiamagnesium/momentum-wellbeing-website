'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const footerNav = {
  services: [
    { label: 'Community Fitness', href: '/services/community-fitness' },
    { label: 'Walking Groups', href: '/services/walking-groups' },
    { label: 'Mental Wellbeing', href: '/services/mental-wellbeing' },
    { label: 'Peer Support', href: '/services/peer-support' },
    { label: 'Social Prescribing', href: '/services/social-prescribing' },
    { label: 'Lifestyle Coaching', href: '/services/lifestyle-coaching' },
    { label: 'All Services', href: '/services' },
  ],
  about: [
    { label: 'Our Story', href: '/about/story' },
    { label: 'Mission & Vision', href: '/about/mission' },
    { label: 'Company Directors', href: '/about/team' },
    { label: 'Our Impact', href: '/impact' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Volunteer', href: '/volunteer' },
  ],
  help: [
    { label: 'Events', href: '/events' },
    { label: 'Community Updates', href: '/news' },
    { label: 'Make a Referral', href: '/refer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 pt-16 pb-8" role="contentinfo">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Momentum Wellbeing CIC — Home">
              <span className="bg-white rounded-xl p-2 inline-flex"><Image src="/images/brand/momentum-logo.png" alt="Momentum Wellbeing CIC" width={180} height={80} className="h-16 w-auto object-contain" /></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-[290px]">
              Empowering communities to create healthier, stronger minds and better lives through wellbeing.
            </p>
            <p className="text-xs leading-relaxed text-slate-500 mt-3">{SITE_CONFIG.address}<br /><a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-teal-secondary">{SITE_CONFIG.email}</a></p>
            <div className="inline-flex items-center gap-1.5 bg-teal-primary/10 border border-teal-primary/20 text-teal-secondary text-xs font-semibold px-3 py-1.5 rounded-full mt-4">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Registered CIC · Co. No. {SITE_CONFIG.companyNumber}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer — Services">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-5">Services</div>
            <ul className="space-y-2.5">
              {footerNav.services.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-500 hover:text-teal-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About */}
          <nav aria-label="Footer — About">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-5">About</div>
            <ul className="space-y-2.5">
              {footerNav.about.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-500 hover:text-teal-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help */}
          <nav aria-label="Footer — Help">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-5">Help</div>
            <ul className="space-y-2.5">
              {footerNav.help.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-500 hover:text-teal-secondary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm">
              © {new Date().getFullYear()} Momentum Wellbeing CIC. Registered in England & Wales. Company No. {SITE_CONFIG.companyNumber}.
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Website built to WCAG 2.1 AA accessibility standards. ·{' '}
              <Link href="/cookies" className="hover:text-teal-secondary transition-colors">Cookie settings</Link>
            </p>
          </div>
          <div className="flex gap-2.5" aria-label="Social media links">
            {[
              { Icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
              { Icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'X / Twitter' },
              { Icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
              { Icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
            ].filter(item => item.href).map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={`Follow Momentum Wellbeing on ${label}`}
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-teal-primary/15 hover:border-teal-primary/30 transition-all"
              >
                <Icon className="w-4 h-4 text-slate-500 hover:text-teal-secondary" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
