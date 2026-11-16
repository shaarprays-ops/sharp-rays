 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Target, Search, Megaphone, Users, Palette,
  MousePointerClick, BarChart3, LineChart, Check, MessageCircle, Store,
  HeartPulse, GraduationCap, Utensils, Home, BriefcaseBusiness, ShoppingBag,
  Factory, Lightbulb, Plane, Flower2, Globe2, MonitorPlay,
  ClipboardList, Settings2, FileText, Eye, MousePointer, TrendingUp, Wallet,
  Layers3, ShieldCheck, Sparkles, Building2, ChartNoAxesCombined
} from "lucide-react";

type IconType = React.ElementType;

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#A1845F] sm:text-[10px]">
    <span className="h-px w-5 bg-[#C6A77A]" />{children}
  </span>
);

const Heading = ({ eyebrow, title, copy, center = false }: {
  eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean;
}) => (
  <Reveal>
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[850px]`}>
      <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4.2vw,52px)] leading-[1.12] tracking-[-.045em] text-[#0B2A52]">{title}</h2>
      {copy && <p className={`mt-5 text-[13px] leading-[2] text-[#657889] sm:text-[14px] ${center ? "mx-auto max-w-[730px]" : ""}`}>{copy}</p>}
    </div>
  </Reveal>
);

const services: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "Google Ads Management", copy: "Plan search and other suitable Google advertising campaigns around relevant keywords, audience intent and business objectives.", icon: Search, tint: "from-[#EAF0F2] to-[#FAFBFA]" },
  { title: "Meta Ads Management", copy: "Develop and manage suitable advertising campaigns across Facebook and Instagram, with audience, creative and objective planning.", icon: Megaphone, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
  { title: "Campaign Strategy", copy: "Define campaign objectives, audience segments, messaging, budget allocation and measurement requirements before launch.", icon: Target, tint: "from-[#EEEAF2] to-[#FAF8FB]" },
  { title: "Audience Research and Targeting", copy: "Identify relevant audience groups and use available platform targeting options to structure campaigns.", icon: Users, tint: "from-[#F3EAE9] to-[#FCF8F6]" },
  { title: "Ad Creative and Copy Direction", copy: "Develop campaign messages, creative concepts, headlines and calls to action that communicate the offer clearly.", icon: Palette, tint: "from-[#EAF0EB] to-[#F8FAF7]" },
  { title: "Landing Page and Conversion Journey Review", copy: "Review the destination experience, page messaging, enquiry path and other relevant conversion elements.", icon: MousePointerClick, tint: "from-[#F1EDE2] to-[#FBF9F3]" },
  { title: "Campaign Monitoring and Optimisation", copy: "Review available campaign data and identify opportunities to improve targeting, creative, budget distribution or campaign structure.", icon: LineChart, tint: "from-[#EAF0F3] to-[#FAFBFA]" },
  { title: "Performance Reporting", copy: "Organise relevant campaign metrics so business owners can understand campaign activity and performance.", icon: BarChart3, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
];

const campaignIdeas: { title: string; points: string[]; icon: IconType; tint: string }[] = [
  { title: "Jewellers and Retail Businesses", points: ["Promote selected collections and product categories", "Communicate seasonal and festive offers", "Drive relevant visitors to product or catalogue pages", "Test different creative messages and audience groups"], icon: Store, tint: "bg-[#F5EBDD]" },
  { title: "Clinics and Healthcare Businesses", points: ["Communicate available services and appointment information", "Promote educational or awareness-led campaigns", "Direct relevant audiences to service information", "Follow applicable platform policies and regulations"], icon: HeartPulse, tint: "bg-[#EAF0F2]" },
  { title: "Coaching Classes and Education", points: ["Promote courses and admission-related information", "Direct prospective students or parents to enquiry pages", "Communicate programme details and important dates", "Review enquiry quality alongside campaign activity"], icon: GraduationCap, tint: "bg-[#F0EAF1]" },
  { title: "Restaurants and Cafes", points: ["Promote menus, new launches and seasonal offers", "Drive relevant visits to menu or enquiry pages", "Test local audience and creative approaches"], icon: Utensils, tint: "bg-[#F4E9E3]" },
  { title: "Real Estate Businesses", points: ["Promote property or project information", "Direct interested audiences to relevant landing pages", "Structure enquiry campaigns around suitable qualification requirements"], icon: Home, tint: "bg-[#E9EFE9]" },
  { title: "Professional Services", points: ["Promote specific services and consultation opportunities", "Reach relevant audience segments", "Use clear service pages and enquiry journeys"], icon: BriefcaseBusiness, tint: "bg-[#ECECF3]" },
];

const platforms = [
  ["Google Ads", "Useful when potential customers are actively searching for products or services. Campaign types should be selected according to the objective and available landing pages.", Search],
  ["Meta Ads — Facebook and Instagram", "Suitable for visual campaigns, product promotion, audience discovery, retargeting where eligible and enquiry-focused advertising.", Megaphone],
  ["YouTube Advertising", "Can support video-led awareness and campaign communication when the audience and objectives justify the format.", MonitorPlay],
] as const;

const process = [
  ["Business Discovery", "Understand your services, audience, offer, competition and campaign objectives.", MessageCircle],
  ["Campaign Audit and Research", "Review existing campaigns, available account data, audience information and relevant competitors where access is provided.", Search],
  ["Strategy and Campaign Planning", "Select suitable platforms, campaign objectives, audience groups, budgets and measurement requirements.", ClipboardList],
  ["Creative and Landing Page Preparation", "Develop campaign messages and review the destination experience before launch.", Palette],
  ["Campaign Setup and Launch", "Configure campaigns, tracking requirements and relevant platform settings.", Settings2],
  ["Monitoring and Optimisation", "Review available data and make informed adjustments to campaign structure, audience, creative and budget.", TrendingUp],
  ["Reporting and Recommendations", "Summarise campaign activity, relevant performance indicators and next-step recommendations.", FileText],
] as const;

const metrics = [
  ["Impressions and reach", "How often ads are shown and the audience exposed to them.", Eye],
  ["Clicks and click-through rate", "How people interact with the campaign creative and message.", MousePointer],
  ["Cost per click", "The average cost associated with an ad click.", Wallet],
  ["Landing page visits", "Visits reaching the campaign's intended destination.", Globe2],
  ["Leads and enquiry volume", "Enquiries recorded through the agreed tracking setup.", Users],
  ["Cost per lead", "Campaign spend in relation to tracked leads.", Target],
  ["Conversion rate", "The share of measured visits or interactions that complete the defined action.", ChartNoAxesCombined],
  ["Campaign spend", "The advertising amount used over the reporting period.", BarChart3],
  ["Lead quality", "Business feedback about the relevance of enquiries, where available.", Check],
] as const;

const industries: { name: string; href: string; copy: string; icon: IconType }[] = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", copy: "Promote relevant services, consultations and seasonal campaigns.", icon: Flower2 },
  { name: "Ecommerce", href: "/industries/ecommerce", copy: "Support product promotion, catalogue campaigns and online purchase journeys.", icon: ShoppingBag },
  { name: "Education", href: "/industries/education", copy: "Promote courses, admissions and programme enquiries.", icon: GraduationCap },
  { name: "Healthcare", href: "/industries/healthcare", copy: "Communicate services and awareness information within applicable advertising rules.", icon: HeartPulse },
  { name: "Manufacturing", href: "/industries/manufacturing", copy: "Support business-focused campaigns and product enquiry journeys.", icon: Factory },
  { name: "Professional Services", href: "/industries/professional-services", copy: "Promote specialist services and consultation opportunities.", icon: BriefcaseBusiness },
  { name: "Real Estate", href: "/industries/real-estate", copy: "Advertise relevant property information and enquiry opportunities.", icon: Home },
  { name: "Restaurants", href: "/industries/restaurants", copy: "Promote menus, offers, launches and dining experiences.", icon: Utensils },
  { name: "Startups", href: "/industries/startup", copy: "Test campaign messages, audience segments and product awareness.", icon: Lightbulb },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", copy: "Promote experiences, packages and seasonal offerings.", icon: Plane },
];

const digitalServices = [
  ["Social Media Marketing", "Social media strategy, content planning, creative communication and account management.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve organic search visibility through technical, on-page and content optimisation.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Plan, manage and review paid advertising campaigns.", "/services/performance-marketing"],
  ["Website Development & Management", "Build and maintain websites that communicate your offer and support enquiry journeys.", "/services/website-development"],
  ["Digital PR & Media Relations", "Plan digital communication and media outreach for brand visibility.", "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Explore AI-assisted video concepts and creative production for digital campaigns.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Edit video content for advertisements, social media and other digital channels.", "/services/video-editing"],
  ["Content Marketing", "Create useful content that supports audience education and brand communication.", "/services/content-marketing"],
  ["AI Automation", "Explore automation opportunities for suitable repetitive business workflows.", "/services/ai-automation"],
] as const;

const faqs = [
  ["What is performance marketing?", "Performance marketing is a digital advertising approach that uses defined campaign objectives and measurable indicators to review advertising activity and outcomes."],
  ["Does Sharp Rays provide performance marketing in Borivali?", "Sharp Rays offers performance marketing and paid media services, including campaign planning, advertising management, creative direction and performance reviews."],
  ["Do you manage Google Ads campaigns?", "Yes. Google Ads management can include campaign planning, keyword and audience research, campaign setup, monitoring and optimisation, depending on the agreed scope."],
  ["Do you provide Facebook and Instagram advertising?", "Yes. Meta advertising campaigns can be planned and managed across Facebook and Instagram according to the business objective and suitable platform formats."],
  ["Is the advertising budget included in your service fee?", "No. Advertising spend paid to platforms such as Google and Meta is separate from the performance marketing service fee."],
  ["How much should a business spend on ads?", "The suitable budget depends on the business objective, competition, audience, offer and campaign requirements. It should be discussed before launching a campaign rather than assumed to be the same for every business."],
  ["Can performance marketing generate enquiries?", "Campaigns can be designed to encourage enquiries, but actual results depend on audience relevance, offer, creative, landing page experience, competition and other factors. Enquiries or sales are not guaranteed."],
  ["Do you create advertising creatives?", "Creative direction, ad copy and campaign creative requirements can be included depending on the agreed scope. Video production and editing requirements should be clarified separately."],
  ["Do I need a website to run paid campaigns?", "Not for every campaign, but a suitable landing page or destination can help communicate the offer and support the conversion journey. The right destination depends on the campaign objective."],
  ["Can you advertise festive offers for Borivali retailers and jewellers?", "Festive and seasonal campaigns can be planned around suitable products, offers, audience groups and creative formats, subject to advertising policies."],
  ["Do you provide campaign reports?", "Reporting can cover relevant campaign metrics such as impressions, clicks, spend, leads and conversion indicators, depending on the available platform data and tracking setup."],
  ["How long does it take to see advertising results?", "There is no universal timeline. Results depend on campaign setup, budget, competition, audience response, tracking and the time required to gather useful data."],
];

export default function BorivaliPerformanceMarketingPageClient() {
  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#FAF8F4] px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 82% 12%, rgba(198,167,122,.20), transparent 30%),radial-gradient(circle at 8% 90%, rgba(11,42,82,.06), transparent 28%)" }} />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <Eyebrow>Performance Marketing in Borivali</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-[var(--font-new-york),Georgia,serif] text-[clamp(42px,6vw,72px)] leading-[1.04] tracking-[-.055em]">Make Every Campaign <i className="text-[#A1845F]">More Accountable.</i></h1>
            <p className="mt-7 max-w-[650px] text-[14px] leading-[2] text-[#657889] sm:text-[15px]">Reach relevant audiences, communicate your offer clearly and understand how your advertising campaigns perform. Sharp Rays brings together campaign planning, paid media, creative direction and performance analysis to support more structured digital advertising.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact?source=borivali-performance-marketing" title="Discuss Your Advertising Goals" className="inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-7 py-4 text-[11px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Advertising Goals <ArrowUpRight size={15}/></Link>
              <Link href="/services/performance-marketing" className="inline-flex items-center gap-3 rounded-[9px] border border-[#C6A77A] bg-white/70 px-7 py-4 text-[11px] font-semibold transition hover:bg-white">Explore Our Digital Services <ArrowRight size={15}/></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DCCE] pt-6 text-[10px] font-semibold tracking-[.08em] text-[#718093]">
              <span className="flex items-center gap-2"><Target size={14} className="text-[#A1845F]"/>Objective-led campaigns</span>
              <span className="flex items-center gap-2"><Palette size={14} className="text-[#A1845F]"/>Creative direction</span>
              <span className="flex items-center gap-2"><BarChart3 size={14} className="text-[#A1845F]"/>Performance reviews</span>
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C6A77A]/35"/>
              <div className="relative overflow-hidden rounded-[30px] border border-[#E7DED2] bg-gradient-to-br from-[#F0E6D8] via-[#FBF9F5] to-[#EAF0F2] p-5 shadow-[0_25px_70px_rgba(11,42,82,.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DCD3C8] pb-4"><div><p className="text-[9px] font-bold tracking-[.2em] text-[#A1845F]">CAMPAIGN PLANNING BOARD</p><p className="mt-1 font-serif text-[20px]">From objective to insight</p></div><span className="rounded-full border border-[#DCCBB2] bg-white/70 px-3 py-1.5 text-[9px] text-[#8B765C]">BORIVALI · MUMBAI</span></div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F0E5D7] text-[#A1845F]"><Target size={17}/></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#A1845F]">OBJECTIVE</p><p className="mt-1 font-serif text-[17px]">Clear goal</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Define the action that matters</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8EEF0] text-[#496D83]"><Users size={17}/></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#496D83]">AUDIENCE</p><p className="mt-1 font-serif text-[17px]">Relevant reach</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Plan who should see it</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAE5EF] text-[#80658D]"><Palette size={17}/></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#80658D]">CREATIVE</p><p className="mt-1 font-serif text-[17px]">Strong message</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Communicate the offer</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E9EFE9] text-[#66836D]"><LineChart size={17}/></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#66836D]">REVIEW</p><p className="mt-1 font-serif text-[17px]">Useful insight</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Learn from campaign data</p></div>
                </div>
                <div className="mt-4 rounded-xl border border-[#E4D8C8] bg-white/65 p-4"><p className="text-[9px] font-bold tracking-[.15em] text-[#A1845F]">THE PRINCIPLE</p><p className="mt-2 font-serif text-[18px] leading-[1.4]">Make decisions with context, not clicks alone.</p></div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#E7DED2] bg-white px-5 py-4 shadow-lg sm:block"><p className="text-[9px] font-bold tracking-[.16em] text-[#A1845F]">SHARP RAYS</p><p className="mt-1 font-serif text-[18px]">We Create the “Oh, Wow.”!</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <Reveal><Eyebrow>Performance Marketing Agency in Borivali</Eyebrow></Reveal>
          <Reveal><h2 className="font-[var(--font-new-york),Georgia,serif] text-[clamp(28px,3.5vw,42px)] leading-[1.2] tracking-[-.035em]">What does a performance marketing agency in Borivali <i className="text-[#A1845F]">do?</i></h2><p className="mt-5 text-[13px] leading-[2] text-[#657889]">A performance marketing agency in Borivali plans and manages digital advertising campaigns across platforms such as Google and Meta. Sharp Rays helps businesses structure campaigns, define audiences, develop ad creatives, monitor campaign performance and identify opportunities for optimisation based on available data and business objectives.</p></Reveal>
        </div>
      </section>

      {/* CLEAR DIRECTION */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Heading eyebrow="Paid Campaigns With a Clearer Direction" title={<>Advertising should begin with a <i className="text-[#A1845F]">business objective.</i></>} copy="Running advertisements without a defined audience, relevant offer or measurement plan can make it difficult to understand campaign performance. A structured approach connects your business objective with the right advertising platform, campaign message, audience and destination."/>
          <Reveal><div className="rounded-[24px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FBF8F2] to-[#EEF1F2] p-7 sm:p-9"><p className="font-serif text-[23px]">Campaign planning may involve</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Promoting a product, service or seasonal offer","Reaching audiences using relevant targeting options","Driving visits to a website or landing page","Encouraging calls, enquiries or meaningful actions","Reviewing campaign data to understand improvements"].map(item=><div key={item} className="flex gap-3 rounded-xl border border-white/80 bg-white/65 p-4 text-[11px] leading-[1.7] text-[#526779]"><Check size={14} className="mt-0.5 shrink-0 text-[#A1845F]"/>{item}</div>)}</div><p className="mt-6 border-t border-[#DCD3C8] pt-5 text-[11px] leading-[1.9] text-[#718093]">The right campaign depends on your audience, offer, budget, competition and conversion journey.</p></div></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FFFEFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Performance Marketing Services" title={<>From campaign setup to ongoing <i className="text-[#A1845F]">optimisation.</i></>} copy="Campaign planning, creative direction and performance reviews should work together around a clear business objective."/>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.title} delay={(i%4)*.035}><article className={`group relative h-full overflow-hidden rounded-[20px] border border-[#EAE2D7] bg-gradient-to-br ${s.tint} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_14px_35px_rgba(11,42,82,.07)]`}><span className="absolute -right-7 -top-7 h-20 w-20 rounded-full border border-[#C6A77A]/30 transition-transform duration-700 group-hover:scale-150"/><span className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.5}/></span><h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.3]">{s.title}</h3><p className="relative mt-3 text-[11px] leading-[1.95] text-[#718093]">{s.copy}</p></article></Reveal>})}</div>
        </div>
      </section>

      {/* CAMPAIGN IDEAS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Campaign Ideas for Borivali Businesses" title={<>Different business goals need different advertising <i className="text-[#A1845F]">approaches.</i></>} copy="Campaign planning should reflect the business category, audience, offer and the action the campaign is intended to encourage."/>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{campaignIdeas.map((item)=>{const Icon=item.icon;return <Reveal key={item.title}><article className="h-full rounded-[20px] border border-[#E7DED2] bg-white/75 p-6 sm:p-7"><div className="flex items-center gap-4"><span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${item.tint} text-[#A1845F]`}><Icon size={21} strokeWidth={1.5}/></span><h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.25]">{item.title}</h3></div><ul className="mt-6 space-y-3">{item.points.map(point=><li key={point} className="flex gap-2 text-[11px] leading-[1.75] text-[#657889]"><span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#C6A77A]"/>{point}</li>)}</ul></article></Reveal>})}</div>
          <p className="mt-6 rounded-xl border border-[#E4D8C8] bg-[#FBF9F5] px-5 py-4 text-[11px] leading-[1.9] text-[#718093]">Healthcare campaigns must follow applicable platform policies and regulations. Campaign suitability depends on the business category, advertising policies and available budget.</p>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Advertising Platforms" title={<>Choose platforms according to <i className="text-[#A1845F]">audience intent.</i></>} copy="Platform selection should follow the audience, campaign objective, creative format and available destination."/>
          <div className="mt-11 grid gap-4 md:grid-cols-3">{platforms.map(([title,copy,Icon])=><Reveal key={title}><article className="h-full rounded-[20px] border border-[#EAE2D7] bg-[#FCFAF7] p-7"><span className="flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#F0E6D8] text-[#A1845F]"><Icon size={21}/></span><h3 className="mt-6 font-serif text-[22px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{copy}</p></article></Reveal>)}</div>
          <p className="mt-6 text-[11px] leading-[1.9] text-[#718093]">Platform availability, targeting options and advertising policies may change. Campaign selection should be reviewed before launch.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Our Performance Marketing Process" title={<>A structured process with measurable <i className="text-[#A1845F]">checkpoints.</i></>} copy="A clear campaign process makes objectives, responsibilities, tracking and review points easier to understand."/>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{process.map(([title,copy,Icon])=><Reveal key={title}><div className="h-full rounded-[18px] border border-[#E7DED2] bg-white/80 p-6"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D8] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-5 font-serif text-[20px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="What We Measure" title={<>Look beyond clicks. Understand the campaign <i className="text-[#A1845F]">journey.</i></>} copy="Depending on the campaign objective and tracking setup, relevant indicators may include:"/>
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{metrics.map(([title,copy,Icon])=><Reveal key={title}><div className="h-full rounded-[17px] border border-[#EAE2D7] bg-[#FCFAF7] p-5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]"><Icon size={17}/></span><h3 className="mt-4 font-serif text-[18px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{copy}</p></div></Reveal>)}</div>
          <p className="mt-6 rounded-xl border border-[#E4D8C8] bg-[#FBF9F5] px-5 py-4 text-[11px] leading-[1.9] text-[#718093]">Metrics should be interpreted in context. A low cost per click alone does not establish business success, and advertising performance cannot be guaranteed.</p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Performance Marketing for Different Industries" title={<>Advertising approaches across <i className="text-[#A1845F]">ten business categories.</i></>} copy="Explore how campaign objectives and creative approaches can differ across business types."/>
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((item)=>{const Icon=item.icon;return <Reveal key={item.name}><Link href={item.href} title={`Explore ${item.name} industry solutions by Sharp Rays`} className="group block h-full rounded-[17px] border border-[#E7DED2] bg-white/80 p-5 transition hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-md"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-4 font-serif text-[18px]">{item.name}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{item.copy}</p><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-[#A1845F]">Explore industry <ArrowUpRight size={12}/></span></Link></Reveal>})}</div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="All Nine Digital Services" title={<>Campaigns work better when your digital presence is <i className="text-[#A1845F]">connected.</i></>} copy="Explore the wider services that can support your website, content, brand visibility and customer journey."/>
          <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{digitalServices.map(([title,copy,href])=><Reveal key={title}><Link href={href} title={`Explore ${title} by Sharp Rays`} className="group flex h-full items-start justify-between gap-4 rounded-[16px] border border-[#EAE2D7] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-[#FAF6F0]"><div><h3 className="font-serif text-[19px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{copy}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></Link></Reveal>)}</div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-16"><Heading eyebrow="Why Choose Sharp Rays" title={<>Creative campaigns. Structured execution. <i className="text-[#A1845F]">Clearer reporting.</i></>} copy="Paid campaigns should connect business objectives, audience understanding, creative direction and performance review."/>
          <div className="grid gap-3 sm:grid-cols-2">{[["Objective-Led Planning","Campaigns begin with a defined business objective rather than an arbitrary advertising format."],["Creative and Strategy Together","Ad messaging and visuals are considered alongside audience and campaign structure."],["Connected Digital Services","Advertising can be aligned with your website, SEO and social media presence."],["Performance Visibility","Relevant metrics and available campaign data help inform optimisation decisions."],["Transparent Scope","Campaign management requirements, responsibilities and service fees should be discussed before starting."]].map(([title,copy])=><div key={title} className="rounded-[16px] border border-[#E7DED2] bg-white/80 p-5"><h3 className="font-serif text-[18px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.9] text-[#718093]">{copy}</p></div>)}</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1120px]"><div className="rounded-[26px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FCFAF7] to-[#EEF2F2] p-7 sm:p-10 lg:p-12"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><Eyebrow>Performance Marketing Pricing</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">Campaign management and advertising spend are <i className="text-[#A1845F]">separate.</i></h2><p className="mt-5 text-[12px] leading-[2] text-[#657889]">Performance marketing costs depend on the advertising platforms, campaign complexity, number of campaigns, creative requirements, tracking setup and ongoing management scope.</p><p className="mt-4 text-[12px] leading-[2] text-[#657889]">Advertising spend paid to Google, Meta or another platform is separate from Sharp Rays' performance marketing service fee.</p><Link href="/contact?source=borivali-performance-marketing" className="mt-7 inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Advertising Requirements <ArrowUpRight size={14}/></Link></div>
          <div className="rounded-[19px] border border-white/90 bg-white/75 p-6"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#A1845F]">Website Development Starting Prices</p><p className="mt-3 font-serif text-[19px]">Published website packages</p><div className="mt-5 space-y-3">{[["Starter Website","₹14,999"],["Business Website","₹24,999"],["Advanced Website","₹39,999"]].map(([name,price])=><div key={name} className="flex items-center justify-between border-b border-[#E9E1D6] pb-3"><span className="text-[11px] text-[#657889]">{name}</span><span className="font-serif text-[20px] text-[#0B2A52]">{price}</span></div>)}</div><p className="mt-5 text-[10px] leading-[1.85] text-[#718093]">These are website development starting prices only. They are not performance marketing fees.</p><Link href="/pricing" title="pricing" className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#A1845F]">View pricing <ArrowRight size={13}/></Link></div>
        </div></div></div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1180px]"><div className="mx-auto max-w-[720px] text-center"><Eyebrow>Frequently Asked Questions</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">Performance Marketing in Borivali <i className="text-[#A1845F]">— FAQs</i></h2><p className="mt-4 text-[12px] leading-[1.9] text-[#718093]">Helpful answers about paid advertising, campaign management, budgets and reporting.</p></div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">{faqs.map(([q,a],i)=><Reveal key={q} delay={(i%2)*.025}><div className="flex gap-4 border-b border-[#E5DCCE] py-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E3D5] text-[#A1845F]"><MessageCircle size={15}/></span><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[17px] leading-[1.45] text-[#0B2A52]">{q}</h3><p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{a}</p></div></div></Reveal>)}</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div className="max-w-[720px]"><Eyebrow>Let's Plan Your Campaign</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-[-.045em]">Give Your Advertising a More <i className="text-[#D8BD98]">Structured Approach.</i></h2><p className="mt-5 max-w-[650px] text-[12px] leading-[2] text-white/70">From campaign planning and ad creative direction to monitoring and performance reviews, Sharp Rays can help you build a clearer paid media strategy.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact?source=borivali-performance-marketing" className="inline-flex items-center gap-3 rounded-[9px] bg-white px-6 py-4 text-[10px] font-semibold text-[#0B2A52] transition hover:bg-[#F2E8DA]">Discuss Your Campaign Goals <ArrowUpRight size={14}/></Link><Link href="/services/performance-marketing" className="inline-flex items-center gap-3 rounded-[9px] border border-white/35 px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-white/10">Explore Performance Marketing <ArrowRight size={14}/></Link></div></div>
      </section>
    </main>
  );
}
