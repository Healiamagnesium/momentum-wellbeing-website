import type { NewsArticle, TeamMember, Partner, Event, ImpactStat, Testimonial, CaseStudy } from './types'
// lib/constants.ts

export const SITE_CONFIG = {
  name: 'Momentum Wellbeing CIC',
  tagline: 'Healthier Lives. Stronger Communities.',
  description:
    'Momentum Wellbeing CIC supports adults to live healthier, more connected lives through inclusive wellbeing programmes across the UK.',
  url: 'https://momentumwellbeing.co.uk',
  email: 'momentumwellbeing@hotmail.com',
  phone: '',
  address: '174 Church Leys, Harlow, England, CM18 6DB',
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
  companyNumber: '17298212',
  incorporatedOn: '24 June 2026',
  companyType: 'Community Interest Company limited by guarantee',
  sic: '85510 — Sports and recreation education',
}

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Creative Futures', href: '/creative-futures' },
  { label: 'Impact', href: '/impact' },
  { label: 'Events', href: '/events' },
  { label: 'Updates', href: '/news' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    slug: 'community-fitness',
    name: 'Community Fitness Sessions',
    shortDesc: 'Inclusive group fitness classes designed for all abilities.',
    description:
      'Our community fitness sessions are warm, welcoming and designed for everyone — from beginners to those returning to exercise after illness, injury or a long break. Led by qualified fitness professionals, every session adapts to the group, ensuring no one is left behind or feels out of place.',
    icon: 'Users',
    category: 'Physical',
    isFree: false,
    price: '£3 suggested donation',
    frequency: 'Multiple times weekly',
    seoKeywords: ['community fitness', 'group exercise', 'inclusive fitness', 'affordable fitness classes'],
  },
  {
    slug: 'walking-groups',
    name: 'Walking Groups',
    shortDesc: 'Friendly group walks combining gentle activity with social connection.',
    description:
      "Walking is one of the most accessible and effective forms of exercise — and it's even better with company. Our walking groups meet regularly for structured, sociable walks across local parks, nature reserves and town routes. Pace is always gentle and no one walks alone.",
    icon: 'Navigation',
    category: 'Physical',
    isFree: true,
    price: 'Free',
    frequency: 'Weekly',
    seoKeywords: ['walking groups', 'community walks', 'free walking groups', 'social walking'],
  },
  {
    slug: 'mobility-stretching',
    name: 'Mobility & Stretching',
    shortDesc: 'Gentle movement classes for older adults and those with limited mobility.',
    description:
      'Designed specifically for older adults and anyone managing chronic pain, arthritis or limited movement, our mobility and stretching classes focus on improving flexibility, balance and joint health in a safe, supported environment.',
    icon: 'Activity',
    category: 'Physical',
    isFree: false,
    price: '£2 per session',
    frequency: 'Weekly',
    seoKeywords: ['mobility classes', 'gentle exercise', 'stretching for seniors', 'balance classes'],
  },
  {
    slug: 'lifestyle-coaching',
    name: 'Healthy Lifestyle Coaching',
    shortDesc: 'Personalised guidance on nutrition, sleep, activity and stress.',
    description:
      'Our qualified health coaches work one-to-one with participants to help them understand their current lifestyle, set realistic goals and make sustainable changes. Sessions cover nutrition, physical activity, sleep, stress management and more — always in a non-judgemental, supportive way.',
    icon: 'Target',
    category: 'Physical',
    isFree: false,
    price: 'Free for eligible participants',
    frequency: 'By appointment',
    seoKeywords: ['lifestyle coaching', 'health coaching', 'healthy living support', 'wellbeing coaching'],
  },
  {
    slug: 'mental-wellbeing',
    name: 'Mental Wellbeing Support',
    shortDesc: 'A compassionate space for those experiencing stress, anxiety or low mood.',
    description:
      'We provide accessible, non-clinical mental wellbeing support for adults experiencing common challenges like stress, anxiety, low mood and overwhelm. Our offer includes one-to-one wellbeing conversations, workshops and ongoing peer support — providing a safe first step when things feel difficult.',
    icon: 'Heart',
    category: 'Mental',
    isFree: true,
    price: 'Free',
    frequency: 'Ongoing',
    seoKeywords: ['mental wellbeing support', 'anxiety support', 'mental health community', 'wellbeing support'],
  },
  {
    slug: 'peer-support',
    name: 'Peer Support Groups',
    shortDesc: 'Safe, facilitated groups where shared experience reduces isolation.',
    description:
      'There is something uniquely powerful about being in a room with people who truly understand. Our peer support groups bring together adults with shared experiences — loneliness, low mood, caring responsibilities and more — in a safe, facilitated space where everyone belongs.',
    icon: 'Users',
    category: 'Social',
    isFree: true,
    price: 'Free',
    frequency: 'Weekly',
    seoKeywords: ['peer support groups', 'community support', 'loneliness support', 'social isolation help'],
  },
  {
    slug: 'wellbeing-workshops',
    name: 'Wellbeing Workshops',
    shortDesc: 'Interactive workshops covering stress, sleep, mindfulness and resilience.',
    description:
      'Our wellbeing workshops are practical, evidence-based and immediately useful. Delivered in community venues across the area, topics include stress and resilience, sleep health, mindfulness techniques, financial wellbeing and building healthy habits. All sessions are interactive, accessible and jargon-free.',
    icon: 'BookOpen',
    category: 'Mental',
    isFree: true,
    price: 'Free',
    frequency: 'Monthly',
    seoKeywords: ['wellbeing workshops', 'mindfulness workshop', 'stress management', 'resilience training'],
  },
  {
    slug: 'community-events',
    name: 'Community Events',
    shortDesc: 'Regular social events that bring people together and build community bonds.',
    description:
      'From summer festivals to seasonal celebrations, quiz nights to community clean-ups — our events programme creates regular opportunities for people to come together, make friends and feel part of something bigger. All events are inclusive, accessible and designed around what our community tells us they want.',
    icon: 'Calendar',
    category: 'Social',
    isFree: true,
    price: 'Free or low cost',
    frequency: 'Monthly+',
    seoKeywords: ['community events', 'local events', 'community activities', 'social events'],
  },
  {
    slug: 'community-engagement',
    name: 'Community Engagement Projects',
    shortDesc: 'Long-term projects that give communities a voice in their own health.',
    description:
      'We believe communities know best what they need. Our community engagement projects work with local people to co-design health initiatives, gather feedback on existing services and ensure that our programmes genuinely respond to real lived experiences — not assumptions.',
    icon: 'MessageCircle',
    category: 'Engagement',
    isFree: true,
    price: 'Free',
    frequency: 'Ongoing',
    seoKeywords: ['community engagement', 'health engagement', 'community participation', 'co-design'],
  },
  {
    slug: 'social-prescribing',
    name: 'Social Prescribing Support',
    shortDesc: 'Connecting patients with community support that addresses root causes.',
    description:
      'Loneliness, inactivity and lack of purpose are as damaging to health as many clinical conditions. We work in partnership with GP practices and Primary Care Networks to deliver social prescribing — connecting patients to the right community activities and support at the right time, reducing pressure on the NHS.',
    icon: 'ClipboardList',
    category: 'Engagement',
    isFree: true,
    price: 'Free',
    frequency: 'By referral',
    seoKeywords: ['social prescribing', 'link worker', 'NHS social prescribing', 'community referral'],
  },
  {
    slug: 'preventative-health',
    name: 'Preventative Health Programmes',
    shortDesc: 'Structured programmes tackling the root causes of long-term ill health.',
    description:
      'Prevention is at the heart of everything we do. Our preventative health programmes address the upstream determinants of ill health — inactivity, poor nutrition, social isolation, low health literacy — through structured, time-limited courses that deliver lasting behavioural change.',
    icon: 'Shield',
    category: 'Education',
    isFree: true,
    price: 'Free for eligible participants',
    frequency: 'Cohort-based',
    seoKeywords: ['preventative health', 'prevention programmes', 'health prevention', 'lifestyle intervention'],
  },
  {
    slug: 'health-education',
    name: 'Health Education',
    shortDesc: 'Community sessions demystifying health so people can take charge.',
    description:
      'Low health literacy is a significant barrier to better outcomes. Our health education sessions — delivered in libraries, community centres and faith settings — cover topics like managing long-term conditions, understanding prescriptions, navigating the NHS and making sense of health information.',
    icon: 'BookOpen',
    category: 'Education',
    isFree: true,
    price: 'Free',
    frequency: 'Monthly',
    seoKeywords: ['health education', 'health literacy', 'community health education', 'NHS navigation'],
  },
]

export const IMPACT_STATS: ImpactStat[] = []

export const TESTIMONIALS: Testimonial[] = []

export const EVENTS: Event[] = []

export const NEWS_ARTICLES: NewsArticle[] = []

export const TEAM_MEMBERS: TeamMember[] = []

export const PARTNERS: Partner[] = []

export const VOLUNTEER_ROLES = [
  {
    id: '1',
    title: 'Walking Group Leader',
    commitment: '2–3 hrs/week',
    description: 'Lead a friendly group walk each week, ensuring everyone feels welcome and no one walks alone. Full walk leader training provided.',
    requirements: ['Enjoy walking', 'Friendly and patient', 'Reliable'],
  },
  {
    id: '2',
    title: 'Wellbeing Workshop Assistant',
    commitment: '1 session/month',
    description: 'Support the delivery of our wellbeing workshops — helping with setup, welcoming participants and facilitating small group discussions.',
    requirements: ['Good listener', 'Comfortable in group settings'],
  },
  {
    id: '3',
    title: 'Community Fitness Assistant',
    commitment: '2–4 hrs/week',
    description: 'Assist qualified fitness instructors at our community sessions — welcoming participants, supporting people with exercises and helping create an inclusive atmosphere.',
    requirements: ['Interest in fitness and health', 'Enthusiasm and warmth'],
  },
  {
    id: '4',
    title: 'Peer Support Facilitator',
    commitment: '2 hrs/week',
    description: 'Facilitate our weekly peer support groups — creating a safe, structured space where participants feel heard and supported. Full accredited facilitation training provided.',
    requirements: ['Lived experience of challenges we address', 'Empathy and confidentiality'],
  },
  {
    id: '5',
    title: 'Admin & Communications Volunteer',
    commitment: 'Flexible',
    description: 'Support our small team with administration, social media content, newsletter writing or event coordination — perfect for those with office or digital skills.',
    requirements: ['Organisational skills', 'Can work from home or office'],
  },
  {
    id: '6',
    title: 'Community Events Helper',
    commitment: 'Ad hoc',
    description: 'Help us run community events throughout the year — setting up, welcoming people, running stalls and generally ensuring everyone has a great time.',
    requirements: ['Friendly and approachable', 'Happy to be on your feet'],
  },
]

export const CASE_STUDIES = [
  {
    id: '1',
    name: 'Alan, 67',
    title: 'From isolation to community leader',
    summary:
      'After losing his wife, Alan withdrew completely from social life. Referred through social prescribing, he joined our walking group and peer support sessions. Eighteen months later, he now volunteers as a walking group leader.',
    outcomes: ['Attends 3 sessions per week', 'Reports 80% improvement in mood', 'Now a walking group volunteer leader', 'Made 12+ new social connections'],
    programme: 'Walking Groups + Social Prescribing',
  },
  {
    id: '2',
    name: 'Fatima, 45',
    title: 'Managing anxiety without medication',
    summary:
      'Fatima was struggling with anxiety and had been prescribed medication. Her GP referred her to our mental wellbeing workshops. She credits the stress management techniques and peer group with enabling her to reduce her medication under medical supervision.',
    outcomes: ['Completed our 8-week wellbeing programme', 'Reports significant reduction in anxiety symptoms', 'Joined our community fitness sessions', 'Now training as a volunteer facilitator'],
    programme: 'Mental Wellbeing + Wellbeing Workshops',
  },
  {
    id: '3',
    name: 'Harlow North GP Practice',
    title: 'Reducing GP appointment demand through social prescribing',
    summary:
      'Following a pilot social prescribing partnership with Harlow North GP Practice, the practice reported a measurable reduction in non-clinical GP appointments among participants referred to Momentum Wellbeing programmes.',
    outcomes: ['42 patients referred in Year 1', '31% reduction in non-clinical GP appointments', '89% of participants reported improved wellbeing', 'Programme extended for a further 2 years'],
    programme: 'Social Prescribing Partnership',
  },
]
