// app/not-found.tsx
import Link from 'next/link'
import { Home, Search, ArrowRight } from 'lucide-react'

export default function NotFound() {
  const quickLinks = [
    { label: 'Our Services', href: '/services' },
    { label: 'Upcoming Events', href: '/events' },
    { label: 'Make a Referral', href: '/refer' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'Volunteer', href: '/volunteer' },
  ]

  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center py-20">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        {/* 404 visual */}
        <div className="relative mb-8 inline-block">
          <div className="font-display font-extrabold text-[120px] leading-none text-slate-100 select-none" aria-hidden="true">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-teal-primary rounded-full flex items-center justify-center">
              <Search className="w-9 h-9 stroke-white" aria-hidden="true" />
            </div>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl text-slate-800 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track — try one of the links below or head back to our homepage.
        </p>

        {/* Primary actions */}
        <div className="flex gap-4 justify-center mb-10 flex-wrap">
          <Link href="/" className="inline-flex items-center gap-2 bg-teal-primary text-white font-display font-semibold px-7 py-3.5 rounded-full hover:bg-teal-700 transition-all">
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Homepage
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-teal-primary text-teal-primary font-display font-semibold px-7 py-3.5 rounded-full hover:bg-teal-pale transition-all">
            Get Help
          </Link>
        </div>

        {/* Quick links */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-card text-left">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Popular pages</p>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-teal-pale hover:text-teal-primary transition-all group"
              >
                {link.label}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
