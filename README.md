# Momentum Wellbeing CIC — Website Handover

## Project Overview
A complete Next.js 15 website for Momentum Wellbeing CIC, a UK Community Interest Company focused on community health and wellbeing.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Manrope (Google Fonts)

## What's Included
- Complete homepage with all sections
- 20+ pages (About, Services x12, Impact, Events, News, Volunteer, Contact, Referral, Donate, Partners, Careers, Privacy, Accessibility, 404)
- All components (Navigation, Footer, Forms, UI components)
- All data in lib/constants.ts (no database needed — everything is static)
- SEO metadata on every page
- Sitemap and robots.txt
- Cookie consent banner
- JSON-LD structured data
- WCAG 2.1 AA accessible
- Fully responsive (mobile, tablet, desktop)

## What the Developer Needs to Do

### 1. Install dependencies
```bash
npm install
```

### 2. Test locally
```bash
npm run dev
```
Visit http://localhost:3000 to confirm it works.

### 3. Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Follow the prompts. Select "Next.js" if asked for framework.

### 4. Connect domain (if provided)
- Go to Vercel dashboard → Project → Domains
- Add the domain
- Update DNS records at the domain registrar

### 5. Set up contact forms (optional but recommended)
The forms are built and styled but need a submission endpoint.
Easiest option: Sign up for **Formspree** (formspree.io, free tier)
- Create a form for each of: Contact, Volunteer, Referral, Newsletter
- Replace the form `onSubmit` handlers in `components/forms/Forms.tsx`
  with the Formspree fetch call:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### 6. Add Google Analytics (optional)
- Create a GA4 property at analytics.google.com
- Add the Measurement ID to next.config.ts or use next/script in layout.tsx

## File Structure
```
momentum-wellbeing/
├── app/                        # All pages
│   ├── layout.tsx              # Root layout (nav + footer)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx     # Dynamic — all 12 service pages
│   ├── impact/page.tsx
│   ├── events/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── news/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── volunteer/page.tsx
│   ├── contact/page.tsx
│   ├── refer/page.tsx
│   ├── donate/page.tsx
│   ├── partners/page.tsx
│   ├── careers/page.tsx
│   ├── privacy/page.tsx
│   ├── accessibility/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky nav with mobile menu
│   │   ├── Footer.tsx
│   │   └── CookieBanner.tsx    # GDPR cookie consent
│   ├── ui/
│   │   └── index.tsx           # Button, Card, Badge, Eyebrow, SectionHeader
│   ├── forms/
│   │   └── Forms.tsx           # VolunteerForm, ContactForm, ReferralForm
│   ├── sections/
│   │   └── HomeSections.tsx    # All homepage section components
│   └── animations/             # RevealOnScroll, AnimatedCounter
├── lib/
│   ├── constants.ts            # ALL site data (services, events, news, team etc.)
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Helper functions
├── styles/
│   └── globals.css             # Global styles + Tailwind + animations
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Important Notes
- **No database required.** All content lives in `lib/constants.ts`
- **No environment variables required** for basic deployment
- All 12 service pages are generated automatically from the SERVICES array in constants.ts
- The site is fully static-export compatible if needed
- Images: The site uses CSS gradients and emoji placeholders — replace with real photography by adding images to `/public/images/` and using Next.js `<Image>` components

## Colour Palette
| Token | Hex |
|-------|-----|
| Primary teal | #0F766E |
| Secondary teal | #14B8A6 |
| Accent amber | #F59E0B |
| Dark | #1E293B |
| Background | #F8FAFC |

## Contact
This project was designed and built for Momentum Wellbeing CIC.
For questions about the code, refer back to the original build conversation.
