// app/news/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'
import { NEWS_ARTICLES } from '@/lib/constants'
import { Badge } from '@/components/ui/index'
import { formatDate } from '@/lib/utils'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return NEWS_ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find(a => a.slug === slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} | Momentum Wellbeing CIC`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'Momentum Wellbeing CIC'],
    },
  }
}

// Generates rich article body content from the article data
function ArticleBody({ article }: { article: typeof NEWS_ARTICLES[0] }) {
  // In production this would come from a CMS (Sanity, Contentful etc.)
  // Here we generate realistic placeholder content based on the article
  const paragraphs: Record<string, string[]> = {
    'social-prescribing-expansion': [
      "We are delighted to announce that Momentum Wellbeing CIC's social prescribing Link Worker programme has expanded into three new GP practices across our area, bringing our total number of partner practices to five.",
      "Social prescribing connects people with non-clinical community support — wellbeing groups, physical activity, arts, volunteering and more — to address the wider social and emotional factors that affect health. Our Link Workers are embedded directly within GP practices, working alongside clinical staff to identify patients who would benefit from community-based support rather than — or in addition to — medical intervention.",
      "The three new partner practices — Harlow North Surgery, Gilden Park Medical Practice, and River Way Health Centre — will each have a dedicated Momentum Wellbeing Link Worker available for patient appointments from September 2025.",
      "This expansion has been made possible through a combination of NHS England Social Prescribing Grant funding and our long-standing partnership with West Essex Integrated Care Board.",
      "Rachel Hughes, Director of Momentum Wellbeing CIC, said: \"Social prescribing is one of the most powerful tools we have to address health inequalities in our community. We know that loneliness, inactivity and lack of purpose are as damaging to health as many clinical conditions — and they can't be solved with a prescription. We're proud to be working with more GP practices than ever to offer a genuine alternative.\"",
      "Patients can be referred to the social prescribing service by their GP, practice nurse or any member of the clinical team. Self-referrals are also accepted. If you'd like to find out more or make a referral, please contact us.",
    ],
    'grant-mental-wellbeing': [
      "Momentum Wellbeing CIC has been awarded an £85,000 grant from the National Lottery Community Fund to launch a new dedicated mental wellbeing programme for adults aged 50 and over across our area.",
      "The programme — called 'Later Life, Full Life' — will run for 18 months from October 2025 and is designed to address the significant and often overlooked wellbeing challenges faced by people in later life, including loneliness, low mood, loss of purpose following retirement, and the mental health impact of bereavement and caring responsibilities.",
      "The programme will include weekly peer support groups, monthly wellbeing workshops, one-to-one wellbeing coaching, a befriending telephone service, and social activities designed to build lasting friendships and community connections.",
      "All sessions will be delivered in accessible community venues across the area, with transport assistance available for those who cannot travel independently. The programme is entirely free to participants.",
      "We are incredibly grateful to the National Lottery Community Fund for believing in this programme. Later life mental health is an area that receives far too little attention, and we are determined to change that — one connection at a time.",
      "Applications to join the programme will open in September 2025. If you'd like to express interest or refer someone, please contact our team.",
    ],
    'summer-wellbeing-festival': [
      "Mark your calendars — Momentum Wellbeing CIC's annual Summer Wellbeing Festival is returning to Town Park on Saturday 9th August 2025, from 11am to 4pm.",
      "Now in its third year, the Summer Wellbeing Festival is our biggest community event of the year — a free, all-day celebration of health, wellbeing and community spirit. Last year, over 600 people attended across the day, and this year we're expecting even more.",
      "The festival will feature taster sessions from all of our regular programmes — so whether you've been curious about our walking groups, community fitness classes, peer support groups or wellbeing workshops, this is your chance to try before you commit. No booking, no pressure, just come along.",
      "There will also be live music from local musicians throughout the day, healthy food from local vendors, stalls from our partner organisations, and activities for all ages. Dogs on leads are welcome.",
      "The festival is completely free to attend, thanks to the generous support of our funders and volunteer team. We are also looking for volunteers to help on the day — if you'd like to get involved, please get in touch.",
      "Town Park has step-free access throughout, accessible toilets, and designated quiet areas for those who find busy events overwhelming. If you have specific accessibility requirements, please contact us in advance and we'll ensure you're fully supported.",
    ],
  }

  const content = paragraphs[article.slug] || [
    `${article.excerpt} We're proud to share this update with our community and remain committed to our mission of building healthier, more connected lives for everyone we serve.`,
    "This development reflects months of hard work from our dedicated team and the ongoing support of our partner organisations. We look forward to sharing more updates as this work progresses.",
    "If you have any questions or would like to find out more about getting involved with Momentum Wellbeing CIC — as a participant, volunteer, donor or partner — please don't hesitate to get in touch with our friendly team.",
  ]

  return (
    <div className="prose prose-slate max-w-none text-[16px] leading-relaxed">
      {content.map((para, i) => (
        <p key={i} className="text-slate-600 mb-5 leading-[1.8]">{para}</p>
      ))}
    </div>
  )
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find(a => a.slug === slug)
  if (!article) notFound()

  const related = NEWS_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-teal-gradient py-16 text-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/80 truncate max-w-[200px]">{article.title}</span>
          </nav>
          <Badge variant="accent" className="mb-4">{article.category}</Badge>
          <h1 className="font-display font-extrabold text-[clamp(26px,4vw,44px)] leading-tight mb-5 max-w-[740px]">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/65 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" aria-hidden="true" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" aria-hidden="true" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Link href="/news" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to all news
              </Link>

              {/* Article image placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-teal-pale to-teal-light rounded-2xl flex items-center justify-center mb-8 text-[80px] opacity-20 select-none" aria-hidden="true">
                {article.emoji}
              </div>

              <article aria-label={article.title}>
                <ArticleBody article={article} />
              </article>

              {/* Share */}
              <div className="border-t border-slate-100 mt-10 pt-8">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Share this article</p>
                <div className="flex gap-2 flex-wrap">
                  {['Share on Facebook', 'Share on Twitter', 'Share on LinkedIn', 'Copy link'].map(action => (
                    <button key={action} className="px-4 py-2 border border-slate-200 rounded-full text-sm text-slate-500 hover:border-teal-primary hover:text-teal-primary transition-all font-medium">
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Related content and actions">
              <div className="sticky top-24 space-y-5">
                {/* About CIC */}
                <div className="bg-teal-pale border border-teal-light rounded-2xl p-6">
                  <h3 className="font-display font-bold text-[15px] text-slate-800 mb-3">About Momentum Wellbeing</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Momentum Wellbeing CIC is a Community Interest Company dedicated to improving health, wellbeing and social connectedness in local communities.
                  </p>
                  <Link href="/about" className="text-sm font-semibold text-teal-primary hover:underline">
                    Learn more about us →
                  </Link>
                </div>

                {/* CTA */}
                <Link href="/services" className="block bg-teal-primary text-white font-display font-semibold px-6 py-4 rounded-full hover:bg-teal-700 transition-all text-center">
                  Explore Our Services
                </Link>
                <Link href="/refer" className="block border-2 border-teal-primary text-teal-primary font-display font-semibold px-6 py-3.5 rounded-full hover:bg-teal-pale transition-all text-center">
                  Make a Referral
                </Link>

                {/* Newsletter */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                  <h3 className="font-display font-bold text-[14px] text-slate-700 mb-2">Stay informed</h3>
                  <p className="text-xs text-slate-500 mb-3">Get news and updates from Momentum Wellbeing direct to your inbox.</p>
                  <form className="space-y-2" noValidate>
                    <label htmlFor="sidebar-email" className="sr-only">Email address</label>
                    <input id="sidebar-email" type="email" placeholder="your@email.com" className="w-full border border-amber-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-teal-primary transition-colors bg-white" />
                    <button type="submit" className="w-full bg-teal-primary text-white font-semibold py-2.5 rounded-full text-sm hover:bg-teal-700 transition-all">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display font-bold text-2xl text-slate-800">More from Momentum Wellbeing</h2>
            <Link href="/news" className="text-sm font-semibold text-teal-primary hover:underline">All news →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(a => (
              <Link key={a.id} href={`/news/${a.slug}`} className="block group">
                <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                  <Badge variant="accent" className="mb-3">{a.category}</Badge>
                  <h3 className="font-display font-bold text-[15px] text-slate-800 leading-snug mb-2 group-hover:text-teal-primary transition-colors">{a.title}</h3>
                  <p className="text-xs text-slate-400">{formatDate(a.date)} · {a.readTime}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
