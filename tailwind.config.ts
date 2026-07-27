// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-primary':    '#0F766E',
        'teal-secondary':  '#14B8A6',
        'teal-light':      '#CCFBF1',
        'teal-pale':       '#F0FDFA',
        accent: {
          DEFAULT: '#F59E0B',
          light:   '#FEF3C7',
          dark:    '#B45309',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        card:       '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        float:      '0 4px 16px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
        teal:       '0 4px 16px rgba(15,118,110,0.25)',
        accent:     '0 4px 16px rgba(245,158,11,0.30)',
      },
      animation: {
        'float-up':   'floatUp 4s ease-in-out infinite',
        'float-down': 'floatDown 4s ease-in-out 1s infinite',
        'pulse-dot':  'pulseDot 2s ease-in-out infinite',
        'slide-up':   'slideInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'scale-in':   'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(8px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.6', transform: 'scale(1.2)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      maxWidth: {
        site: '1180px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#475569',
            maxWidth: 'none',
            a: { color: '#0F766E', '&:hover': { textDecoration: 'none' } },
            h2: { fontFamily: 'Manrope, sans-serif', fontWeight: '800', color: '#1E293B' },
            h3: { fontFamily: 'Manrope, sans-serif', fontWeight: '700', color: '#1E293B' },
          },
        },
      },
    },
  },
  plugins: [
    // Uncomment if you install @tailwindcss/typography:
    // require('@tailwindcss/typography'),
  ],
}

export default config
