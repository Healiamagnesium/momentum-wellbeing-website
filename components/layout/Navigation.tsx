'use client'
// components/layout/Navigation.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="flex items-center justify-between h-[76px] sm:h-[82px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label={`${SITE_CONFIG.name} — Home`}
          >
            <Image src="/images/brand/momentum-logo.png" alt="Momentum Wellbeing CIC" width={210} height={92} className="h-14 sm:h-16 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'text-teal-primary bg-teal-pale'
                      : 'text-slate-600 hover:text-teal-primary hover:bg-teal-pale'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="/refer"
              className="border-2 border-teal-primary text-teal-primary font-display font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-teal-pale transition-all"
            >
              Make a Referral
            </Link>
            <Link
              href="/donate"
              className="bg-amber-400 text-white font-display font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-amber-500 transition-all"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen
              ? <X className="w-7 h-7 stroke-slate-700" aria-hidden="true" />
              : <Menu className="w-7 h-7 stroke-slate-700" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-100 bg-white"
          role="menu"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                className={`block px-6 py-4 text-[15px] font-medium border-b border-slate-50 transition-colors ${
                  isActive
                    ? 'text-teal-primary bg-teal-pale'
                    : 'text-slate-600 hover:text-teal-primary hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          {/* Mobile CTAs */}
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link
              href="/refer"
              className="block border-2 border-teal-primary text-teal-primary font-display font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-teal-pale transition-all"
            >
              Make a Referral
            </Link>
            <Link
              href="/donate"
              className="block bg-amber-400 text-white font-display font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-amber-500 transition-all"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
