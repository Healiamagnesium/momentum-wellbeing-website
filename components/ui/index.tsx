// components/ui/Button.tsx
import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'ghost-dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

const variants = {
  primary: 'bg-teal-primary text-white hover:bg-teal-700 hover:-translate-y-px hover:shadow-float',
  secondary: 'bg-white text-teal-primary border-2 border-teal-primary hover:bg-teal-pale',
  accent: 'bg-amber-400 text-white hover:bg-amber-600 hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(245,158,11,0.3)]',
  ghost: 'bg-white/15 text-white border border-white/40 hover:bg-white/25',
  'ghost-dark': 'bg-transparent text-slate-600 border border-slate-200 hover:bg-slate-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-7 py-3.5 text-[15px] gap-2',
  lg: 'px-9 py-4 text-base gap-2',
}

export function Button({ children, href, variant = 'primary', size = 'md', className, onClick, type = 'button', disabled, ariaLabel }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return <Link href={href} className={classes} aria-label={ariaLabel}>{children}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

// components/ui/Card.tsx

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: 'div' | 'article' | 'section'
}

export function Card({ children, className, hover = true, as: Tag = 'div' }: CardProps) {
  return (
    <Tag className={cn(
      'bg-white rounded-2xl border border-slate-100 p-7 shadow-card',
      hover && 'transition-all duration-250 hover:shadow-card-hover hover:-translate-y-0.5 hover:border-slate-200',
      className
    )}>
      {children}
    </Tag>
  )
}

// components/ui/Badge.tsx

interface BadgeProps {
  children: ReactNode
  variant?: 'teal' | 'accent' | 'slate' | 'green'
  className?: string
}

const badgeVariants = {
  teal: 'bg-teal-light text-teal-primary',
  accent: 'bg-amber-100 text-amber-700',
  slate: 'bg-slate-100 text-slate-600',
  green: 'bg-green-100 text-green-700',
}

export function Badge({ children, variant = 'teal', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-block text-xs font-bold px-2.5 py-1 rounded-full',
      badgeVariants[variant],
      className
    )}>
      {children}
    </span>
  )
}

// components/ui/Eyebrow.tsx

interface EyebrowProps {
  children: string
  light?: boolean
  className?: string
}

export function Eyebrow({ children, light = false, className }: EyebrowProps) {
  return (
    <div className={cn(
      'inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] mb-4',
      light ? 'text-teal-secondary' : 'text-teal-primary',
      className
    )}>
      <span className={cn('w-6 h-0.5 rounded-full', light ? 'bg-teal-secondary' : 'bg-teal-secondary')} aria-hidden="true" />
      {children}
    </div>
  )
}

// components/ui/SectionHeader.tsx

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  id?: string
  children?: ReactNode
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, light = false, id, children }: SectionHeaderProps) {
  return (
    <div className={cn('mb-14', centered && 'text-center')}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          'font-display font-extrabold leading-[1.15] mb-4',
          'text-[clamp(28px,4vw,40px)]',
          light ? 'text-white' : 'text-slate-800'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg leading-relaxed',
          light ? 'text-white/60' : 'text-slate-500',
          centered && 'max-w-[560px] mx-auto'
        )}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
