"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BookOpen, BriefcaseBusiness,
  Building2, Check, ChevronRight, Compass, Eye,
  Factory, Film, Gauge, GraduationCap, HeartPulse, Layers3, Megaphone,
  MessageCircle, MonitorSmartphone, MousePointerClick,
  Newspaper, Rocket, Search, Settings2, ShieldCheck, ShoppingBag,
  Sparkles, Target, TrendingUp, UtensilsCrossed, WandSparkles, Workflow,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const base = "https://images.unsplash.com/";

// Replace the photographs with licensed, locally hosted WebP assets before launch.
const photos = {
  hero: `${base}photo-1552664730-d307ca884978?w=1400&q=85&fit=crop`,
  social: `${base}photo-1611162617474-5b21e879e113?w=900&q=80&fit=crop`,
  seo: `${base}photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop`,
  ads: `${base}photo-1551288049-bebda4e38f71?w=900&q=80&fit=crop`,
  website: `${base}photo-1516321318423-f06f85e504b3?w=900&q=80&fit=crop`,
  content: `${base}photo-1499750310107-5fef28a66643?w=900&q=80&fit=crop`,
  aiVideo: `${base}photo-1574717024653-61fd2cf4d44d?w=900&q=80&fit=crop`,
  editing: `${base}photo-1536240478700-b869070f9279?w=900&q=80&fit=crop`,
  automation: `${base}photo-1518770660439-4636190af475?w=900&q=80&fit=crop`,
  pr: `${base}photo-1504711434969-e33886168f5c?w=900&q=80&fit=crop`,
};

type Service = {
  number: string;
  title: string;
  headline: string;
  intro: string;
  items: string[];
  best: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  tint: string;
  accent: string;
  family: string;
};

const services: Service[] = [
  { number: "01", title: "Social Media Marketing", headline: "Build a Social Presence That Attracts the Right Audience.", intro: "Platform-specific strategy, useful social content and more consistent communication across the channels your customers use.", items: ["Instagram, Facebook & LinkedIn", "Content calendars & publishing", "Reels and creative direction", "Community engagement & reporting"], best: "Brand awareness and audience engagement", href: "/services/social-media-marketing", image: photos.social, imageAlt: "Social media application icons and modern digital communication", icon: Megaphone, tint: "#F7EFF1", accent: "#AD728C", family: "Audience & Brand" },
  { number: "02", title: "Search Engine Optimisation (SEO)", headline: "Get Found When Potential Customers Are Already Searching.", intro: "Improve discoverability through sound technical SEO, helpful website content and search intent-led optimisation.", items: ["Technical audits & on-page SEO", "Keyword and search intent mapping", "Local SEO & Google Business Profile", "Content architecture & reporting"], best: "Organic visibility and inbound enquiries", href: "/services/search-engine-optimization", image: photos.seo, imageAlt: "Analytics graphs and search performance on a laptop screen", icon: Search, tint: "#EDF4EE", accent: "#668A72", family: "Search & Discovery" },
  { number: "03", title: "Performance Marketing / Paid Media", headline: "Reach High-Intent Audiences With Accountable Advertising.", intro: "Google and Meta campaigns designed around relevant audiences, careful testing, measurement and commercial objectives.", items: ["Google Ads & Meta Ads", "Lead generation campaigns", "Creative and audience testing", "Conversion tracking & optimisation"], best: "Targeted enquiries, bookings and online sales", href: "/services/performance-marketing", image: photos.ads, imageAlt: "Digital marketing dashboards showing advertising performance data", icon: BarChart3, tint: "#F8F0E5", accent: "#AD895D", family: "Acquisition & Conversion" },
  { number: "04", title: "Website Development & Management", headline: "Turn Your Website Into a Stronger Growth Foundation.", intro: "Responsive, accessible and clear websites that support credibility, easy navigation and meaningful customer actions.", items: ["Business websites & landing pages", "UX and responsive development", "Technical search foundations", "Maintenance and performance"], best: "A reliable website that supports enquiries", href: "/services/website-development", image: photos.website, imageAlt: "Modern workspace with laptop displaying a website interface", icon: MonitorSmartphone, tint: "#EEF3F9", accent: "#688AA6", family: "Experience & Conversion" },
  { number: "05", title: "Content Marketing", headline: "Create Content That Helps People Make Decisions.", intro: "Purposeful content that answers audience questions, explains expertise and connects search discovery with real customer needs.", items: ["SEO articles & topic planning", "Website and landing page copy", "Industry and service content", "Content refreshes & internal linking"], best: "Useful long-term content and organic discovery", href: "/services/content-marketing", image: photos.content, imageAlt: "Open editorial notebook and writing materials on a desk", icon: BookOpen, tint: "#F7F2E9", accent: "#9D8564", family: "Content & Education" },
  { number: "06", title: "AI Video & Creative", headline: "Turn Creative Ideas Into Flexible Digital Campaign Assets.", intro: "AI-assisted storyboarding, visual concepts and promotional content guided by thoughtful messaging and quality control.", items: ["AI-assisted video concepts", "Campaign creative variations", "Social visual assets", "Creative planning & storyboards"], best: "Flexible visual storytelling and campaign creatives", href: "/services/ai-video-and-creative", image: photos.aiVideo, imageAlt: "Professional camera and creative visual production workspace", icon: WandSparkles, tint: "#F1EEFA", accent: "#8E79AE", family: "Creative Production" },
  { number: "07", title: "Professional Video Editing", headline: "Make Every Video Clearer, More Engaging and Ready to Publish.", intro: "Transform raw footage into polished Reels, Shorts, product films and promotional edits with clear pacing and professional finishing.", items: ["Reels, Shorts & social edits", "Promotional video editing", "Captions, transitions & graphics", "Colour and audio finishing"], best: "Professional, platform-ready video content", href: "/services/video-editing", image: photos.editing, imageAlt: "Professional video editing production equipment and workstation", icon: Film, tint: "#EEF1F8", accent: "#7C85AE", family: "Creative Production" },
  { number: "08", title: "AI Automation", headline: "Spend Less Time on Repetitive Tasks.", intro: "Controlled workflows that connect lead capture, response processes and everyday information handling—with human oversight.", items: ["Lead capture & routing", "CRM and workflow integrations", "Enquiry follow-up automation", "Notifications and admin processes"], best: "Less manual effort and more consistent responses", href: "/services/ai-automation", image: photos.automation, imageAlt: "Electronic circuit board representing connected digital automation", icon: Workflow, tint: "#EDF6F3", accent: "#609286", family: "Operations & Retention" },
  { number: "09", title: "Digital PR & Media Relations", headline: "Build Brand Credibility Beyond Your Own Channels.", intro: "Story-led public communication, media research, press materials and suitable outreach that supports a more discoverable brand presence.", items: ["Digital PR positioning", "Media relations & press materials", "Founder and executive storytelling", "Reputation and mention monitoring"], best: "Relevant public visibility and brand credibility", href: "/services/digital-pr-media-relations", image: photos.pr, imageAlt: "Editorial newspapers and media publication materials", icon: Newspaper, tint: "#F6F0E9", accent: "#A68563", family: "Reputation & Trust" },
];

const growth = [
  { title: "Improve Google Visibility", description: "Help people discover the services and solutions you provide.", icon: Search, links: ["SEO", "Content", "Paid Search"], href: "/contact?goal=search-visibility" },
  { title: "Generate Qualified Leads", description: "Connect relevant traffic with clearer enquiry and conversion paths.", icon: Target, links: ["Paid Media", "Websites", "Automation"], href: "/contact?goal=lead-generation" },
  { title: "Grow My Social Presence", description: "Improve content direction, engagement and video creativity.", icon: Megaphone, links: ["Social Media", "Video Editing", "AI Creative"], href: "/contact?goal=social-growth" },
  { title: "Improve Website Conversions", description: "Reduce friction between website interest and meaningful action.", icon: MousePointerClick, links: ["Website", "Content", "Paid Media"], href: "/contact?goal=website-conversions" },
  { title: "Save Time With Automation", description: "Support lead handling and repetitive customer communication.", icon: Settings2, links: ["AI Automation", "CRM", "Websites"], href: "/contact?goal=automation" },
  { title: "Build Brand Credibility", description: "Explain your expertise and strengthen your public presence.", icon: ShieldCheck, links: ["Content", "Social", "Digital PR"], href: "/contact?goal=brand-credibility" },
];

const journey = [
  { title: "Discover", icon: Eye, copy: "A customer finds your business through search, social media or advertising.", support: "SEO · Google Ads · Social" },
  { title: "Explore", icon: Compass, copy: "They visit your site and examine your services, content or products.", support: "Websites · Content · Creative" },
  { title: "Evaluate", icon: ShieldCheck, copy: "They compare options and look for credible, relevant information.", support: "Case studies · Reviews · PR" },
  { title: "Convert", icon: MousePointerClick, copy: "They enquire, book a consultation or make a purchase.", support: "Landing pages · Paid Media" },
  { title: "Retain", icon: Workflow, copy: "Your business responds, follows up and develops the relationship.", support: "CRM · AI Automation" },
];

const industries = [
  { label: "Beauty & Wellness", href: "/industries/beauty-wellness", icon: Sparkles },
  { label: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag },
  { label: "Education", href: "/industries/education", icon: GraduationCap },
  { label: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
  { label: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  { label: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed },
  { label: "Professional Services", href: "/industries/professional-services", icon: BriefcaseBusiness },
  { label: "Startups", href: "/industries/startup", icon: Rocket },
  { label: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Compass },
  { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
];

const phases = [
  { num: "01", title: "Understand", copy: "Discuss your business, audience, existing marketing and growth priorities.", output: "Business goals & challenges" },
  { num: "02", title: "Find Opportunities", copy: "Review relevant search, website, content, campaign and workflow opportunities.", output: "Focused areas for improvement" },
  { num: "03", title: "Build the Plan", copy: "Recommend suitable services, define deliverables and agree on useful measures.", output: "Clear scope & strategy" },
  { num: "04", title: "Execute & Improve", copy: "Implement agreed activities, review performance and make informed adjustments.", output: "Consistent delivery & learning" },
];

const measures = [
  { icon: Search, name: "Organic Search Visibility", description: "Relevant organic impressions, clicks and search enquiries." },
  { icon: Eye, name: "Relevant Website Traffic", description: "Whether visitors align with your audience and intent." },
  { icon: Target, name: "Qualified Enquiries", description: "Useful leads, consultations, bookings or sales actions." },
  { icon: Gauge, name: "Campaign Efficiency", description: "Campaign costs and conversion metrics when tracking permits." },
  { icon: MousePointerClick, name: "Website Conversions", description: "How effectively visits turn into meaningful actions." },
  { icon: Megaphone, name: "Audience Engagement", description: "Relevant reactions to content and social communication." },
  { icon: Workflow, name: "Workflow Efficiency", description: "Response consistency and reduction of manual steps." },
];

const faqs = [
  ["What digital marketing services does Sharp Rays offer?", "Sharp Rays offers SEO, Social Media Marketing, Performance Marketing, Website Development & Management, Content Marketing, AI Video & Creative, Professional Video Editing and AI Automation. Digital PR & Media Relations is also presented as a service; confirm its current delivery scope before engagement."],
  ["Which digital marketing service is best for a small business?", "It depends on customers, market, budget and objectives. Local SEO may help location-based businesses, paid ads may support targeted acquisition and a clear website can improve enquiry journeys."],
  ["Do I need SEO and Google Ads together?", "Not always. SEO supports organic visibility over time, while paid search can reach selected audiences sooner. Combining them depends on your goals, budget and market demand."],
  ["What is the difference between SEO and social media marketing?", "SEO improves discoverability of website content through organic search. Social media marketing focuses on communication and engagement on social platforms."],
  ["Can digital marketing generate leads for my business?", "SEO, paid ads, content and landing pages can help create lead-generation opportunities. Results depend on demand, competition, positioning, budget and execution."],
  ["Does Sharp Rays support startups?", "Yes. Startup priorities can include launch websites, search visibility, paid acquisition, content, social media and automation, depending on the company’s stage."],
  ["Can I choose just one service?", "Yes. You can begin with one relevant service or combine activities where that better suits your objectives and resources."],
  ["How much do digital marketing services cost in India?", "Costs vary by scope, complexity and services. Advertising budgets, third-party software and external production costs may be separate from agency fees."],
  ["How long does digital marketing take to show results?", "Timelines vary. Paid campaigns can generate measurable activity after launch; SEO and content marketing usually need ongoing work. No fixed results are guaranteed."],
  ["How do I choose a digital marketing agency?", "Look for clear deliverables, relevant experience, transparent pricing, realistic expectations and measurement tied to your business goals."],
  ["Can Sharp Rays help with AI search visibility?", "SEO and content improvements can make a website easier for search systems to access and understand. No agency can guarantee AI-generated mentions or citations."],
  ["Does Sharp Rays work with businesses across India?", "Sharp Rays positions its services for Indian businesses, adapting activities to target locations, audiences and project scope."],
];

function Rise({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay, ease }} className={className}>{children}</motion.div>;
}

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}><span className="h-px w-7 bg-[#B79A72]"/><span className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#A38561] sm:text-[11px]">{children}</span>{center && <span className="h-px w-7 bg-[#B79A72]"/>}</div>;
}

function Heading({ children, id, center = false }: { children: ReactNode; id?: string; center?: boolean }) {
  return <h2 id={id} className={`mt-5 font-[var(--font-new-york)] text-[29px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[36px] lg:text-[42px] ${center ? "text-center" : ""}`}>{children}</h2>;
}

function Photo({ src, alt, title, priority = false, sizes = "(max-width: 1023px) 100vw, 50vw", className = "" }: {src: string; alt: string; title: string; priority?: boolean; sizes?: string; className?: string}) {
  const [error, setError] = useState(false);
  return <div className={`relative overflow-hidden bg-gradient-to-br from-[#E7E1D7] to-[#B8C5C5] ${className}`}>
    {!error && <Image src={src} alt={alt} title={title} fill unoptimized priority={priority} sizes={sizes} className="object-cover" onError={() => setError(true)}/>}
    {error && <div className="absolute inset-0 flex items-center justify-center text-[#0B2A52]/40"><Layers3 size={70} strokeWidth={0.8}/></div>}
  </div>;
}

export default function ServicesPageClient() {
  return <main className="overflow-hidden bg-white text-[#0B2A52]">
    {/* 01 HERO */}
    <section className="relative bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pb-24 lg:pt-40" aria-labelledby="services-main-heading">
      <div className="mx-auto grid max-w-[1260px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Rise><div>
          <Eyebrow>Digital Marketing Services in India</Eyebrow>
          <h1 id="services-main-heading" className="mt-6 max-w-[680px] font-[var(--font-new-york)] text-[38px] font-normal leading-[1.12] tracking-[-0.04em] sm:text-[47px] lg:text-[53px]">Digital Marketing Services That Turn Visibility Into <span className="text-[#B79A72]">Business Growth.</span></h1>
          <p className="mt-6 max-w-[590px] text-[14px] leading-[1.9] text-[#566C80]">From being found on Google to engaging the right audience and generating relevant leads, Sharp Rays connects SEO, paid media, social content, websites, video and practical AI-powered solutions.</p>
          <p className="mt-3 max-w-[570px] text-[13px] leading-[1.9] text-[#778595]">For startups, small businesses and growing brands looking for more purposeful digital marketing.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link title="Get My Free Marketing Audit" href="/free-audit" className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B2A52] px-6 text-[12px] text-white transition hover:bg-[#163D69]">Get My Free Marketing Audit <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link><Link title="Explore All Sharp Rays Services" href="#all-marketing-services" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px]">Explore Our Services <ArrowDown size={15} className="text-[#B79A72]"/></Link></div>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E8DFD3] pt-6">{["Search Visibility", "Audience Growth", "Lead Generation", "Conversion"].map(x => <span key={x} className="inline-flex items-center gap-2 text-[10px] text-[#927B60]"><span className="h-1 w-1 rounded-full bg-[#B79A72]"/>{x}</span>)}</div>
        </div></Rise>
        <Rise delay={0.12}><div className="relative mx-auto w-full max-w-[610px] pb-8"><div className="absolute -right-3 -top-3 h-1/2 w-1/2 border-r border-t border-[#C6AD8D] sm:-right-5 sm:-top-5"/><Photo src={photos.hero} alt="Collaborative marketing team discussing campaign strategy in a modern office" title="Digital Marketing Strategy and Services by Sharp Rays" priority className="aspect-[5/5] rounded-[18px] sm:aspect-[6/5] lg:aspect-[4/5]"/><div className="absolute inset-x-4 bottom-0 rounded-xl border border-[#E7DACA] bg-white/95 p-5 shadow-[0_20px_50px_-30px_rgba(11,42,82,0.28)] backdrop-blur-sm sm:inset-x-8"><span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">The Growth Perspective</span><p className="mt-2 font-[var(--font-new-york)] text-[21px] leading-[1.35]">Right audience <span className="text-[#B79A72]">→</span> useful experience <span className="text-[#B79A72]">→</span> meaningful action</p></div></div></Rise>
      </div>
    </section>

    {/* 02 CONNECTED APPROACH */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="connected-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[830px] text-center"><Eyebrow center>A Connected Approach to Digital Growth</Eyebrow><Heading id="connected-heading" center>Better Marketing Doesn't Start With More Services. <span className="text-[#B79A72]">It Starts With the Right Strategy.</span></Heading><p className="mx-auto mt-5 max-w-[720px] text-[13px] leading-[1.95] text-[#708092]">Customers discover, research, compare and contact businesses in different ways. Our role is to connect the activities that matter throughout that journey.</p></Rise>
    <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border border-[#E5DDD2] bg-[#E5DDD2] sm:grid-cols-2 lg:grid-cols-4">{[
      {icon:Search,title:"Get Discovered",num:"01",text:"Be visible when customers search for solutions like yours.",link:"SEO · Content · Paid Search"},
      {icon:Sparkles,title:"Build Attention & Trust",num:"02",text:"Develop a more recognisable and credible brand presence.",link:"Social · Video · PR"},
      {icon:MousePointerClick,title:"Convert Interest",num:"03",text:"Make the next action clear and easy for potential customers.",link:"Websites · Ads · Content"},
      {icon:Workflow,title:"Improve Efficiency",num:"04",text:"Support lead management, customer communication and retention.",link:"Automation · CRM"},
    ].map((item,i)=>{const Icon=item.icon;return <Rise key={item.title} delay={i*0.05} className="h-full"><article className="flex h-full flex-col bg-[#FCFAF7] p-6 transition-colors hover:bg-white sm:p-7"><div className="flex justify-between"><Icon size={23} strokeWidth={1.4} className="text-[#B79A72]"/></div><h3 className="mt-9 font-[var(--font-new-york)] text-[23px] leading-[1.25]">{item.title}</h3><p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#6B7D8E]">{item.text}</p><div className="mt-7 border-t border-[#E4D8CA] pt-4 text-[10px] text-[#A18460]">{item.link}</div></article></Rise>})}</div><Rise><p className="mt-8 text-center text-[12px] text-[#708092]">Not every business needs every service. We help identify the combination relevant to your current stage.</p></Rise></div></section>

    {/* 03 FULL SERVICES DIRECTORY */}
    <section id="all-marketing-services" className="scroll-mt-24 bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="all-services-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[810px] text-center"><Eyebrow center>Explore What Sharp Rays Can Do</Eyebrow><Heading id="all-services-heading" center>The Right Digital Marketing Services for <span className="text-[#B79A72]">Your Next Stage of Growth.</span></Heading><p className="mx-auto mt-5 text-[13px] leading-[1.95] text-[#708092]">Nine connected capabilities. Choose an individual service or build a coordinated approach around your business goal.</p></Rise>
    <div className="mt-12 space-y-5 lg:mt-16">{services.map((s,i)=>{const Icon=s.icon;const reverse=i%2===1;return <Rise key={s.href}><article className="group overflow-hidden rounded-[18px] border border-[#E9E0D5] bg-white"><div className={`grid lg:grid-cols-[0.40fr_0.60fr] ${reverse?"lg:grid-cols-[0.60fr_0.40fr]":""}`}><div className={`relative min-h-[240px] sm:min-h-[320px] ${reverse?"lg:order-2":""}`} style={{backgroundColor:s.tint}}><Photo src={s.image} alt={s.imageAlt} title={`${s.title} by Sharp Rays`} sizes="(max-width:1023px) 100vw, 40vw" className="absolute inset-0 h-full w-full"/><div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/50 to-transparent"/><span className="absolute left-6 top-6 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[10px] tracking-wide text-[#0B2A52]">{s.family}</span><div className="absolute bottom-6 left-6 flex items-center gap-3 text-white"><Icon size={21} strokeWidth={1.5}/></div></div><div className={`flex flex-col p-6 sm:p-8 lg:px-10 lg:py-10 ${reverse?"lg:order-1":""}`}><p className="text-[10px] uppercase tracking-[0.16em]" style={{color:s.accent}}>  {s.family}</p><h3 className="mt-3 max-w-[620px] font-[var(--font-new-york)] text-[26px] leading-[1.2] sm:text-[32px]">{s.title}</h3><p className="mt-3 max-w-[620px] font-[var(--font-new-york)] text-[17px] leading-[1.4] text-[#A18461]">{s.headline}</p><p className="mt-4 max-w-[630px] text-[12px] leading-[1.9] text-[#718092] sm:text-[13px]">{s.intro}</p><div className="mt-6 grid gap-x-5 gap-y-2 sm:grid-cols-2">{s.items.map(x=><div key={x} className="flex items-start gap-2 text-[11px] leading-[1.75] text-[#536A7D]"><Check size={14} className="mt-0.5 shrink-0" style={{color:s.accent}}/>{x}</div>)}</div><div className="mt-auto flex flex-col gap-5 pt-7 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-[300px] text-[11px] leading-[1.6] text-[#7E8C98]"><span className="font-medium text-[#0B2A52]">Best for:</span> {s.best}</p><Link href={s.href} title={`Explore ${s.title} by Sharp Rays`} className="group/link inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-[#0B2A52] hover:text-[#A18461]">Explore Service <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"/></Link></div></div></div></article></Rise>})}</div>
    <Rise><div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#E0D4C4] pt-8 sm:flex-row sm:items-center"><p className="font-[var(--font-new-york)] text-[22px]">Not sure which service fits your business?</p><Link href="/contact?source=services" title="Help Me Choose the Right Service" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#A18461]">Help Me Choose the Right Service <ArrowUpRight size={16}/></Link></div></Rise></div></section>

    {/* 04 BUSINESS GOAL DIRECTORY */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="growth-goal-heading"><div className="mx-auto max-w-[1220px]"><Rise className="max-w-[780px]"><Eyebrow>Start With Your Business Goal</Eyebrow><Heading id="growth-goal-heading">What Does Your Business Need <span className="text-[#B79A72]">Most Right Now?</span></Heading><p className="mt-5 text-[13px] leading-[1.9] text-[#708092]">You don't need to know the marketing terminology. Begin with the outcome you want to improve.</p></Rise><div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{growth.map((g,i)=>{const Icon=g.icon;return <Rise key={g.title} delay={(i%3)*0.07}><Link href={g.href} title={`Discuss how to ${g.title.toLowerCase()}`} className="group flex h-full flex-col rounded-[16px] border border-[#E8DED0] bg-[#FCFAF7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CBB292] hover:shadow-[0_15px_38px_-30px_rgba(11,42,82,.26)]"><div className="flex justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D6C5] bg-white text-[#B79A72]"><Icon size={20} strokeWidth={1.5}/></div><ArrowUpRight size={17} className="text-[#B79A72] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></div><h3 className="mt-7 font-[var(--font-new-york)] text-[22px] leading-[1.3]">{g.title}</h3><p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#718092]">{g.description}</p><div className="mt-6 flex flex-wrap gap-2 border-t border-[#E6DACD] pt-5">{g.links.map(l=><span key={l} className="rounded-full bg-white px-3 py-1.5 text-[10px] text-[#9B7C57]">{l}</span>)}</div></Link></Rise>})}</div></div></section>

    {/* 05 JOURNEY */}
    <section className="bg-[#F4F6F5] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="journey-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[780px] text-center"><Eyebrow center>From Discovery to Customer Action</Eyebrow><Heading id="journey-heading" center>One Customer Journey. <span className="text-[#B79A72]">Multiple Marketing Opportunities.</span></Heading><p className="mt-5 text-[13px] leading-[1.9] text-[#708092]">Most customers research and compare before making a decision. Different services can support each stage.</p></Rise><div className="mt-14 grid gap-3 md:grid-cols-5">{journey.map((j,i)=>{const Icon=j.icon;return <Rise key={j.title} delay={i*0.05} className="h-full"><article className="relative flex h-full flex-col border-t-2 border-[#B79A72] bg-white p-5 sm:p-6"><div className="flex items-center justify-between"><Icon size={21} className="text-[#B79A72]" strokeWidth={1.5}/></div><h3 className="mt-7 font-[var(--font-new-york)] text-[22px]">{j.title}</h3><p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#708092]">{j.copy}</p><div className="mt-6 border-t border-[#E6DFD3] pt-4 text-[10px] leading-5 text-[#94795C]">{j.support}</div>{i<4&&<ChevronRight size={15} className="absolute -right-3 top-1/2 z-10 hidden text-[#B79A72] md:block"/>}</article></Rise>})}</div><Rise><p className="mt-9 text-center font-[var(--font-new-york)] text-[19px] leading-[1.5]">A connected strategy helps reduce the gaps between attention, interest and <span className="text-[#B79A72]">meaningful business opportunities.</span></p></Rise></div></section>

    {/* 06 INDUSTRIES */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="service-industries-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[810px] text-center"><Eyebrow center>Marketing Strategies Built Around Your Business</Eyebrow><Heading id="service-industries-heading" center>Different Industries Need Different Ways to <span className="text-[#B79A72]">Attract Customers.</span></Heading><p className="mx-auto mt-5 max-w-[730px] text-[13px] leading-[1.9] text-[#708092]">A manufacturer looking for procurement enquiries and a restaurant attracting local diners have different customer journeys. We adapt our approach accordingly.</p></Rise><div className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-[#E8DFD2] bg-[#E8DFD2] sm:grid-cols-2 lg:grid-cols-5">{industries.map((ind,i)=>{const Icon=ind.icon;return <Rise key={ind.href} delay={(i%5)*0.035}><Link href={ind.href} title={`Digital Marketing for ${ind.label} by Sharp Rays`} className="group flex h-full min-h-[158px] flex-col justify-between bg-[#FCFAF7] p-5 transition-colors hover:bg-[#F6EEE2]"><div className="flex items-start justify-between"><Icon size={22} strokeWidth={1.4} className="text-[#B79A72]"/><ArrowUpRight size={15} className="text-[#B79A72] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></div><div><h3 className="mt-2 font-[var(--font-new-york)] text-[19px] leading-[1.25]">{ind.label}</h3></div></Link></Rise>})}</div><Rise className="mt-8 text-center"><Link href="/industries" title="Explore All Industries We Help" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#987751]">Explore Industries We Serve <ArrowUpRight size={16}/></Link></Rise></div></section>

    {/* 07 WORKING PROCESS */}
    <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="working-process-heading"><div className="mx-auto max-w-[1220px]"><Rise><Eyebrow>A Strategy Before a Channel</Eyebrow><Heading id="working-process-heading">We Start With Your Business, <span className="text-[#B79A72]">Not a Preselected Package.</span></Heading><p className="mt-5 max-w-[680px] text-[13px] leading-[1.9] text-[#718092]">A useful plan begins with understanding your position and identifying where relevant improvements are most likely to matter.</p></Rise><div className="mt-12 grid gap-8 border-t border-[#E1D6C7] lg:grid-cols-4 lg:gap-10">{phases.map((p,i)=><Rise key={p.num} delay={i*0.06}><article className="py-7"><h3 className="mt-6 font-[var(--font-new-york)] text-[23px]">{p.title}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#708092]">{p.copy}</p><div className="mt-7 border-t border-[#E2D8CA] pt-4 text-[10px] text-[#9D805C]">{p.output}</div></article></Rise>)}</div></div></section>

    {/* 08 METRICS */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="metrics-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[830px] text-center"><Eyebrow center>Meaningful Performance Over Vanity Metrics</Eyebrow><Heading id="metrics-heading" center>More Traffic Is Useful. <span className="text-[#B79A72]">Better Business Outcomes Matter More.</span></Heading><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">Measurement should reflect your services, objectives and the data that can be reliably tracked.</p></Rise><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{measures.map((m,i)=>{const Icon=m.icon;return <Rise key={m.name} delay={(i%4)*0.05}><article className="h-full rounded-[14px] border border-[#E8E0D6] bg-[#FDFBF8] p-6"><Icon size={21} strokeWidth={1.5} className="text-[#B79A72]"/><h3 className="mt-5 font-[var(--font-new-york)] text-[20px] leading-[1.3]">{m.name}</h3><p className="mt-3 text-[12px] leading-[1.85] text-[#718092]">{m.description}</p></article></Rise>})}<Rise><div className="flex h-full flex-col justify-center rounded-[14px] bg-[#F4EEE5] p-6"><TrendingUp size={24} className="text-[#B79A72]"/><p className="mt-5 font-[var(--font-new-york)] text-[19px] leading-[1.45]">Measure the outcomes that matter to <span className="text-[#B79A72]">your business.</span></p></div></Rise></div><Rise><p className="mt-7 text-[11px] leading-[1.8] text-[#87929D]">We focus on transparent reporting, useful insights and opportunities for improvement—not guaranteed rankings, leads or sales.</p></Rise></div></section>

    {/* 09 FAQ */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="services-faq-heading"><div className="mx-auto max-w-[1220px]"><Rise className="mx-auto max-w-[800px] text-center"><Eyebrow center>Questions Before You Start</Eyebrow><Heading id="services-faq-heading" center>Frequently Asked <span className="text-[#B79A72]">Questions.</span></Heading><p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">Clear answers about choosing, combining and measuring digital marketing services.</p></Rise><div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">{faqs.map(([q,a],i)=><Rise key={q}><article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">{String(i+1).padStart(2,"0")}</span><div><h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] sm:text-[21px]">{q}</h3><p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">{a}</p></div></article></Rise>)}</div></div></section>

    {/* 10 CTA */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="services-final-heading"><div className="mx-auto max-w-[1220px]"><Rise><div className="relative overflow-hidden rounded-[20px] border border-[#E4D5C1] bg-[#F7F1E9]"><div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full border border-[#D8C2A4]/60"/><div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 h-[360px] w-[360px] rounded-full border border-[#D8C2A4]/40"/><div className="relative grid gap-9 p-7 sm:p-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14 lg:p-14"><div><Eyebrow>Let's Find Your Next Growth Opportunity</Eyebrow><h2 id="services-final-heading" className="mt-5 max-w-[750px] font-[var(--font-new-york)] text-[30px] leading-[1.17] tracking-[-0.035em] sm:text-[39px] lg:text-[44px]">You Don't Need Every Marketing Service. <span className="text-[#B79A72]">You Need the Right Ones Working for Your Business.</span></h2><p className="mt-6 max-w-[680px] text-[13px] leading-[1.95] text-[#62778A]">Whether you need better search visibility, qualified leads, social growth, a stronger website or smarter workflows, tell us about your goals and challenges.</p></div><div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11"><MessageCircle size={23} className="text-[#B79A72]"/><h3 className="mt-4 font-[var(--font-new-york)] text-[24px] leading-[1.3]">Your next step starts with a conversation.</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">Share your business, website if available, main goal and the improvements you'd like to explore.</p><div className="mt-7 flex flex-col gap-3"><Link href="/free-audit" title="Get My Free Marketing Audit" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0B2A52] px-5 text-center text-[12px] text-white hover:bg-[#173E6D]">Get My Free Marketing Audit <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link><Link href="/contact?source=services" title="Start a Conversation with Sharp Rays" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D9C6AE] bg-white px-5 text-[12px]">Start a Conversation <ArrowRight size={16} className="text-[#B79A72]"/></Link></div></div></div><div className="relative border-t border-[#E1D4C3] px-7 py-4 text-[10px] tracking-[0.12em] text-[#9A815F] sm:px-11 lg:px-14">SHARP RAYS — DIGITAL GROWTH WITHOUT THE GUESSWORK</div></div></Rise></div></section>
  </main>;
}
