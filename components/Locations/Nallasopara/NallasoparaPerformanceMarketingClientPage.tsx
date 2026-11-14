"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Target, Search, Megaphone, MousePointerClick,
  BarChart3, LineChart, Users, Palette, Globe2, MapPin, Factory, Store,
  Building2, GraduationCap, HeartPulse, Utensils, BriefcaseBusiness, Rocket,
  Plane, Video, MonitorSmartphone, ClipboardList, Settings2, Eye, Wallet,
  MousePointer, MessageCircle, Sparkles, ShieldCheck, ChartNoAxesCombined,
} from "lucide-react";

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

function Rise({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }} className={className}>{children}</motion.div>;
}
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#B18E64] sm:text-[11px]">{children}</p>;
}
function Heading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-serif text-[clamp(27px,3.2vw,39px)] leading-[1.16] tracking-[-.04em] text-[#183253]">{title}</h2>{copy && <p className={`mt-4 text-[13px] leading-[1.95] text-[#748294] sm:text-[14px] ${center ? "mx-auto max-w-[660px]" : "max-w-[680px]"}`}>{copy}</p>}</div>;
}
function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link href={href} className={`group inline-flex min-h-[47px] items-center justify-center gap-2 rounded-[15px] border px-5 py-3 text-[12px] font-medium transition-all duration-300 hover:-translate-y-0.5 sm:px-6 sm:text-[13px] ${secondary ? "border-[#D8E0E8] bg-white/80 text-[#17365B] shadow-[0_7px_25px_rgba(11,42,82,.05)] hover:bg-white" : "border-[#C9D6E3] bg-white text-[#17365B] shadow-[0_8px_28px_rgba(11,42,82,.08)] hover:border-[#A9BDD1]"}`}>{children}<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>;
}
const pastel = ["bg-[#F0F5F7] border-[#DCE6EB]", "bg-[#F8F3EC] border-[#E9DFD2]", "bg-[#F1F5EF] border-[#DDE6DC]", "bg-[#F8F1F4] border-[#E9DDE3]", "bg-[#F3F2F8] border-[#E1DFF0]", "bg-[#F8F5EC] border-[#E9E3D2]"];
const iconBg = ["bg-[#DFEAF0] text-[#587B91]", "bg-[#F0E5D6] text-[#A17B50]", "bg-[#E1EBDD] text-[#648064]", "bg-[#F0E1E8] text-[#986B82]", "bg-[#E7E5F1] text-[#77739B]", "bg-[#F0EAD8] text-[#927F49]"];

const challenges = [
  ["Targeting the wrong audience", "Campaigns may reach people who are unlikely to need your product or service.", Target],
  ["Unclear campaign objectives", "Without a defined goal—leads, purchases, calls or visits—it is difficult to evaluate performance.", ClipboardList],
  ["Poor advertising creatives", "Generic visuals and unclear messages may fail to communicate why someone should take action.", Palette],
  ["Landing pages that do not convert", "Relevant visitors may leave when a page is confusing, slow or lacks useful information.", MonitorSmartphone],
  ["Untracked conversions", "Without suitable tracking, it can be difficult to identify which campaigns generate meaningful actions.", ChartNoAxesCombined],
  ["Campaigns without optimisation", "Audience response, creative effectiveness and budget allocation need regular review.", Settings2],
];
const services = [
  ["Google Ads Management", "Reach people actively searching for products and services relevant to your business.", Search, ["Search campaign planning", "Keyword and search intent research", "Ad copy development", "Location and audience targeting", "Conversion tracking where supported", "Performance monitoring and optimisation"]],
  ["Meta Ads Management", "Promote your business through advertising opportunities across Facebook and Instagram.", Megaphone, ["Campaign objective selection", "Audience research and targeting", "Instagram and Facebook campaigns", "Creative and copy direction", "Retargeting where suitable", "Performance analysis"]],
  ["Lead Generation Campaigns", "Encourage potential customers to enquire about your products or services.", Users, ["Lead campaign planning", "Audience segmentation", "Lead form strategy", "Landing page recommendations", "Enquiry journey optimisation", "Lead tracking where configured"]],
  ["Search Advertising", "Connect your business with people searching for relevant products, services or solutions.", MousePointerClick, ["Search keyword research", "Search intent analysis", "Campaign and ad group structure", "Search ad copy", "Negative keyword planning", "Search term reviews"]],
  ["Social Media Advertising", "Introduce your brand, promote offers and reach relevant audiences through paid social.", Globe2, ["Facebook advertising", "Instagram advertising", "Creative direction", "Audience selection", "Campaign testing", "Retargeting where appropriate"]],
  ["Remarketing & Retargeting", "Reconnect with eligible audiences who have previously interacted with your website or ads.", Target, ["Audience planning", "Website visitor audiences where tracking and consent permit", "Campaign creative", "Audience exclusions", "Frequency and performance monitoring"]],
  ["Landing Page & Conversion Optimisation", "Make the journey from advertisement to enquiry clearer and more relevant.", MonitorSmartphone, ["Landing page structure recommendations", "Headline and message alignment", "CTA placement", "Form improvement suggestions", "Mobile experience review", "Conversion journey analysis"]],
  ["Campaign Analytics & Reporting", "Understand how campaigns perform and identify opportunities for improvement.", BarChart3, ["Clicks and impressions", "Click-through rate and cost per click", "Leads and conversions", "Cost per acquisition where measurable", "Conversion rate", "Campaign and audience analysis"]],
];
const industries = [
  ["Beauty & Wellness", "Salons, spas, beauty professionals and wellness businesses.", "Service promotions, appointment enquiries, local targeting, seasonal offers and relevant landing pages.", HeartPulse, "/industries/beauty-wellness"],
  ["Ecommerce", "Online stores, product brands and digital sellers.", "Product advertising, sales campaigns, catalogue opportunities, remarketing and product landing pages.", Store, "/industries/ecommerce"],
  ["Education", "Schools, coaching classes, training institutes and educators.", "Admission enquiries, course promotion, lead generation, location targeting and enquiry tracking.", GraduationCap, "/industries/education"],
  ["Healthcare", "Clinics, dental practices, diagnostic centres and healthcare providers.", "Service awareness, appointment enquiries, location campaigns and service landing pages.", HeartPulse, "/industries/healthcare"],
  ["Manufacturing", "Manufacturers, industrial suppliers, distributors and B2B businesses.", "Industrial product campaigns, B2B enquiries, capability promotion, RFQ pages and catalogue promotion.", Factory, "/industries/manufacturing"],
  ["Professional Services", "Consultants, agencies, financial professionals and service providers.", "Service campaigns, consultation enquiries, search advertising, lead forms and landing page optimisation.", BriefcaseBusiness, "/industries/professional-services"],
  ["Real Estate", "Real estate agencies, builders, property consultants and construction businesses.", "Property enquiries, project promotion, location-focused ads and property landing pages.", Building2, "/industries/real-estate"],
  ["Restaurants", "Restaurants, cafes, bakeries, caterers and food businesses.", "Local awareness, offer promotion, menu campaigns, ordering traffic and reservation enquiries.", Utensils, "/industries/restaurants"],
  ["Startups", "New businesses and growing brands introducing products or services.", "Brand awareness, launches, lead generation, audience testing and conversion measurement.", Rocket, "/industries/startup"],
  ["Travel & Hospitality", "Travel operators, accommodation providers and tourism businesses.", "Destination promotion, booking enquiries, seasonal campaigns and experience-led creative.", Plane, "/industries/travel-hospitality"],
];
const localAreas = [
  ["Nalasopara East — Tulinj Road & Achole", "Retail and neighbourhood service campaigns", "Retail and service businesses around Tulinj Road and Achole can use campaigns that communicate specific products, services and offers to relevant local audiences.", ["Search campaigns for specific products and services", "Meta campaigns for visual offers and promotions", "Enquiry campaigns for consultation-led services", "Location-relevant landing pages", "Creative variations for different offerings"], "Avoid generic 'best in town' claims. Use accurate offers, clear product information and a relevant next step."],
  ["Nalasopara West", "Appointment and service enquiry campaigns", "Clinics, professional services and customer-facing businesses in Nalasopara West may need campaigns that make service information, availability and enquiry options easy to understand.", ["Google Search campaigns for relevant service intent", "Appointment and enquiry pathways", "Business-specific audience planning", "Website and WhatsApp enquiry options where suitable", "Conversion tracking for configured actions"], "Campaigns should accurately describe the service, eligibility, availability and the business's actual service area."],
  ["Around Nalasopara Station", "Reach people with a relevant local offer", "Businesses targeting customers around Nalasopara station should consider whether the product or service is genuinely relevant to people in the selected area.", ["Local search intent and keyword research", "Clear business location and contact details", "Relevant landing pages", "Audience and location settings", "Offer-led creative where appropriate"], "Location targeting is not a guarantee that every impression will come from the immediate station area. Platform settings and audience signals affect delivery."],
];
const process = [
  ["Understand Your Business", "We learn about your products or services, target customers, market and business objectives."],
  ["Define Campaign Goals", "We identify intended outcomes such as enquiries, calls, purchases, website visits or brand awareness."],
  ["Research Your Audience", "We assess audience intent, relevant keywords, locations, competitors and campaign opportunities."],
  ["Plan the Campaign", "We develop advertising structure, targeting approach, budget allocation and creative direction."],
  ["Prepare Ads and Landing Pages", "We align ad messaging, creative assets and landing page content with the campaign objective."],
  ["Launch and Monitor", "We review campaign delivery, clicks, audience response, conversions and available tracking data."],
  ["Optimise and Improve", "We refine targeting, creatives, search terms, landing pages and budget allocation using campaign observations."],
];
const effective = [
  ["Clear campaign objectives", "Define whether the campaign is intended to generate leads, sales, calls, bookings or website visits.", Target],
  ["Relevant audience targeting", "Focus on people whose needs and interests align with your offering.", Users],
  ["Strong advertising creatives", "Use relevant messaging and visuals that explain the value of your product or service.", Palette],
  ["Relevant landing pages", "Ensure the page matches the advertisement and makes the next step easy to understand.", MonitorSmartphone],
  ["Accurate conversion tracking", "Configure suitable tracking so important actions can be measured.", ChartNoAxesCombined],
  ["Continuous optimisation", "Review available data and make informed adjustments instead of leaving campaigns unattended.", Settings2],
];
const reasons = [
  ["Strategy Before Spending", "Understand business goals and campaign requirements before recommending an advertising approach.", ShieldCheck],
  ["Audience-Focused Campaign Planning", "Reach relevant audiences instead of relying on broad targeting without a clear purpose.", Target],
  ["Creative and Advertising Alignment", "Ad messaging and creative direction should communicate your offering clearly and consistently.", Palette],
  ["Landing Page Awareness", "Connect the advertising experience with a relevant website or enquiry destination.", MonitorSmartphone],
  ["Performance Measurement", "Consider meaningful indicators such as enquiries, conversions and cost efficiency where tracking is available.", BarChart3],
  ["Connected Digital Services", "Bring advertising together with SEO, website development, social media and content marketing.", Globe2],
];
const allServices = [
  ["Social Media Marketing", "Build your brand presence through social strategy, content creation, Instagram marketing, Reels and platform management.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve organic visibility through technical SEO, on-page optimisation, local SEO and content strategy.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Reach relevant audiences through paid campaigns, audience targeting and performance optimisation.", "/locations/nalasopara-road/performance-marketing"],
  ["Website Development & Management", "Create and maintain responsive websites that communicate your business and support enquiries.", "/services/website-development"],
  ["Digital PR & Media Relations", "Strengthen brand communication, online reputation and visibility through digital PR activities.", "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Explore AI-assisted video production and creative solutions for engaging brand communication.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Transform raw footage into polished videos for social media, campaigns and brand communication.", "/services/video-editing"],
  ["Content Marketing", "Build useful, audience-focused content through blogs, website copy and strategic planning.", "/services/content-marketing"],
  ["AI Automation", "Identify repetitive business and marketing workflows that can benefit from automation.", "/services/ai-automation"],
];
const faqs = [
  ["What does a performance marketing agency in Nalasopara do?", "A performance marketing agency plans and manages paid digital advertising campaigns to help businesses reach relevant audiences and generate measurable actions such as leads, sales, calls or website visits."],
  ["What performance marketing services does Sharp Rays offer?", "Services can include Google Ads, Meta Ads, search advertising, social media advertising, lead generation, remarketing, landing page recommendations, conversion tracking and campaign analysis."],
  ["Do you provide Google Ads management in Nalasopara?", "Google Ads can help businesses reach people searching for relevant products and services. Campaign management may include keyword research, search campaign planning, ad copy, targeting, conversion tracking and optimisation."],
  ["Do you provide Facebook and Instagram Ads?", "Facebook and Instagram advertising can be used for brand promotion, lead generation, product campaigns and audience remarketing, depending on your business objectives."],
  ["Is performance marketing suitable for small businesses in Nalasopara?", "It can be suitable when campaign objectives, audience targeting and budget are planned carefully around realistic business goals and the value of the product or service."],
  ["Can performance marketing generate leads for manufacturers in Nalasopara East?", "Paid search and relevant lead-generation campaigns can help manufacturers reach potential buyers searching for industrial products, services or suppliers. Product information, targeting and an appropriate enquiry or RFQ page are important."],
  ["Can local shops in Nalasopara West use paid advertising?", "Yes. Local retailers and service businesses can use Google and Meta advertising to promote products, offers and services to relevant audiences in their service areas."],
  ["How much advertising budget do I need?", "There is no single budget suitable for every business. It depends on platform, competition, target audience, campaign objective and expected cost per action. Decide a practical budget after understanding your business and market."],
  ["Is the advertising budget included in performance marketing charges?", "Advertising spend and campaign management fees are separate unless a particular plan explicitly includes them. Confirm both amounts before launching."],
  ["How long does it take to see performance marketing results?", "Campaigns may begin collecting data after launch, but reliable evaluation and optimisation require sufficient data. Timing depends on budget, competition, audience size, conversion volume and campaign complexity."],
  ["What is the difference between SEO and performance marketing?", "SEO focuses on improving organic visibility in search results, while performance marketing uses paid campaigns to reach audiences through advertising platforms. Both can support a broader digital marketing strategy."],
  ["Do I need a website to run performance marketing campaigns?", "Not every campaign requires a traditional website, but a relevant landing page or enquiry destination is often important. It helps visitors understand your offer and take the intended action."],
  ["What is conversion tracking?", "Conversion tracking measures important actions after someone interacts with an ad, such as submitting a form, making a purchase or completing another configured action."],
  ["Can you manage campaigns on Google and Meta together?", "Google and Meta campaigns can be used together when their roles, audiences and objectives are clearly defined. The right mix depends on how customers discover and evaluate your offering."],
  ["How much does performance marketing cost in Nalasopara?", "Performance marketing management fees depend on campaign scope and deliverables. Advertising spend is separate and paid to the advertising platform. The ₹14,999, ₹24,999 and ₹39,999 prices shown on this page refer only to website development starting prices, not paid media management."],
];

function Card({ title, copy, icon: Icon, points, index = 0 }: { title: string; copy: string; icon: any; points?: string[]; index?: number }) {
  return <Rise delay={(index % 3) * 0.05} className={`h-full rounded-[22px] border p-5 sm:p-6 ${pastel[index % pastel.length]}`}><div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-[15px] ${iconBg[index % iconBg.length]}`}><Icon size={19} strokeWidth={1.7} /></div><h3 className="text-[16px] font-semibold tracking-[-.02em] text-[#213B59]">{title}</h3><p className="mt-2 text-[12px] leading-[1.85] text-[#718093]">{copy}</p>{points && <ul className="mt-4 space-y-2 border-t border-[#193653]/10 pt-4">{points.map((p) => <li key={p} className="flex gap-2 text-[11px] leading-[1.6] text-[#596D80]"><Check size={13} className="mt-0.5 shrink-0 text-[#8B9D8A]" />{p}</li>)}</ul>}</Rise>;
}
function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) { return <section id={id} className={`px-5 py-16 sm:px-8 lg:py-[88px] ${className}`}><div className="mx-auto max-w-[1220px]">{children}</div></section>; }

export default function NalasoparaPerformanceMarketingPageClient() {
  return <main className="overflow-hidden bg-[#FCFBF8]">
    {/* HERO */}
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_78%_18%,rgba(221,231,235,.75),transparent_38%),radial-gradient(ellipse_at_8%_88%,rgba(241,229,215,.62),transparent_34%),linear-gradient(120deg,#FBFAF7_0%,#F5F7F6_52%,#F8F4EF_100%)] px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full border border-[#D9E2E4]/70" /><div className="absolute -right-10 top-28 h-52 w-52 rounded-full border border-[#D9E2E4]/70" />
      <div className="relative mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <Rise><Eyebrow>PERFORMANCE MARKETING / PAID MEDIA</Eyebrow><h1 className="max-w-[760px] font-serif text-[clamp(38px,5.3vw,66px)] leading-[1.04] tracking-[-.055em] text-[#183253]">Performance Marketing Services in Nalasopara</h1><p className="mt-6 max-w-[650px] text-[14px] leading-[1.95] text-[#718093] sm:text-[15px]">Reach the right audience with targeted digital advertising campaigns designed around your business objectives.</p><p className="mt-3 max-w-[650px] text-[13px] leading-[1.9] text-[#718093]">Sharp Rays combines audience research, campaign planning, creative strategy, landing page optimisation and performance tracking to help Nalasopara businesses make more informed advertising decisions.</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/contact">Discuss Your Campaign</ButtonLink><ButtonLink href="#services" secondary>Explore Our Services</ButtonLink></div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-medium tracking-wide text-[#738397]"><span className="flex items-center gap-2"><Check size={13} className="text-[#8A9B85]"/> Strategy-led campaigns</span><span className="flex items-center gap-2"><Check size={13} className="text-[#8A9B85]"/> Clear performance measurement</span><span className="flex items-center gap-2"><Check size={13} className="text-[#8A9B85]"/> Google & Meta advertising</span></div></Rise>
        <Rise delay={.12} className="relative"><div className="rounded-[30px] border border-white/80 bg-white/75 p-5 shadow-[0_24px_80px_rgba(32,57,76,.10)] backdrop-blur sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[.2em] text-[#A98259]">Campaign overview</p><p className="mt-1 text-[18px] font-semibold text-[#213B59]">Performance, with purpose.</p></div><div className="rounded-full bg-[#EDF3EF] px-3 py-1.5 text-[10px] text-[#718A78]">Strategy first</div></div><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#F0F5F7] p-4"><Search className="text-[#587B91]" size={20}/><p className="mt-5 text-[13px] font-semibold text-[#29445F]">Google Ads</p><p className="mt-1 text-[10px] text-[#78899A]">Capture active search intent</p></div><div className="rounded-2xl bg-[#F8F1F4] p-4"><Megaphone className="text-[#986B82]" size={20}/><p className="mt-5 text-[13px] font-semibold text-[#29445F]">Meta Ads</p><p className="mt-1 text-[10px] text-[#78899A]">Build relevant discovery</p></div><div className="rounded-2xl bg-[#F8F3EC] p-4"><Target className="text-[#A17B50]" size={20}/><p className="mt-5 text-[13px] font-semibold text-[#29445F]">Audience fit</p><p className="mt-1 text-[10px] text-[#78899A]">Reach relevant people</p></div><div className="rounded-2xl bg-[#F1F5EF] p-4"><LineChart className="text-[#648064]" size={20}/><p className="mt-5 text-[13px] font-semibold text-[#29445F]">Optimisation</p><p className="mt-1 text-[10px] text-[#78899A]">Learn and improve</p></div></div><div className="mt-4 flex items-center justify-between rounded-2xl border border-[#E6E9E5] bg-white/80 px-4 py-3"><span className="text-[11px] text-[#718093]">A connected campaign journey</span><ArrowRight size={16} className="text-[#A98259]"/></div></div></Rise>
      </div>
    </section>

    {/* DIRECT ANSWER */}
    <Section className="bg-white"><Rise className="mx-auto max-w-[900px] rounded-[24px] border border-[#E5E9E8] bg-[#F8FAF9] p-7 sm:p-10"><Eyebrow>PERFORMANCE MARKETING IN NALASOPARA</Eyebrow><h2 className="font-serif text-[25px] leading-tight tracking-[-.03em] text-[#183253] sm:text-[31px]">What does a performance marketing agency in Nalasopara do?</h2><p className="mt-4 text-[13px] leading-[1.95] text-[#718093] sm:text-[14px]">Sharp Rays offers performance marketing and paid media services for businesses targeting Nalasopara East, Nalasopara West and surrounding areas. Our approach includes Google Ads, paid social media campaigns, audience targeting, creative development, landing page optimisation, conversion tracking and campaign analysis. We focus on connecting advertising activity with meaningful business actions such as enquiries, appointments and relevant leads.</p></Rise></Section>

    {/* CHALLENGES */}
    <Section><Heading eyebrow="THE CHALLENGE" title="Spending on advertisements does not automatically mean better results" copy="Running advertisements is only one part of performance marketing. Campaign success also depends on reaching the right audience, communicating a relevant offer and providing a clear path to conversion."/><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{challenges.map(([title, copy, Icon], i) => <Card key={title as string} title={title as string} copy={copy as string} icon={Icon} index={i}/>)}</div><p className="mt-7 rounded-2xl border border-[#E8E3D9] bg-[#F8F4ED] p-5 text-[12px] leading-[1.8] text-[#6E7D8C]">A better approach connects advertising strategy, creative execution, landing pages and performance measurement.</p></Section>

    {/* SERVICES */}
    <Section id="services" className="bg-white"><Heading eyebrow="WHAT WE DO" title="Performance Marketing Services in Nalasopara" copy="Paid advertising strategies built around your business objectives. Sharp Rays helps businesses approach digital advertising through structured campaign planning, creative communication and performance monitoring."/><div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map(([title, copy, Icon, points], i) => <Card key={title as string} title={title as string} copy={copy as string} icon={Icon} points={points as string[]} index={i}/>)}</div></Section>

    {/* INDUSTRIES */}
    <Section><Heading eyebrow="INDUSTRIES WE HELP" title="Advertising strategies for different business industries" copy="Different industries have different customers, buying journeys and advertising requirements. A retail business may need product-focused campaigns, while a manufacturer may need targeted B2B enquiries. Sharp Rays plans around your offering, audience and desired action."/><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(([title, copy, opportunities, Icon, href], i) => <Rise key={title as string} delay={(i%3)*.04}><Link href={href as string} className={`group block h-full rounded-[21px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(35,59,77,.08)] ${pastel[i%pastel.length]}`}><div className="flex items-center justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-[14px] ${iconBg[i%iconBg.length]}`}><Icon size={18}/></span><ArrowUpRight size={16} className="text-[#8292A0] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-4 text-[15px] font-semibold text-[#213B59]">{title as string}</h3><p className="mt-1 text-[11px] leading-[1.7] text-[#718093]">{copy as string}</p><p className="mt-3 border-t border-[#193653]/10 pt-3 text-[11px] leading-[1.75] text-[#617487]"><span className="font-semibold text-[#405B73]">Advertising opportunities: </span>{opportunities as string}</p><span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-[#526F88]">Explore industry <ArrowRight size={12}/></span></Link></Rise>)}</div></Section>

    {/* LOCAL AREAS */}
    <Section className="bg-[#F7F8F6]"><Heading eyebrow="LOCAL CAMPAIGN STRATEGY" title="Performance Marketing Across Nalasopara" copy="A campaign should reflect where potential customers are, what they are searching for and what action the business wants them to take."/><div className="mt-9 grid gap-5 lg:grid-cols-3">{localAreas.map(([area, title, copy, points, note], i) => <Rise key={area as string} delay={i*.06} className="rounded-[23px] border border-[#E1E7E4] bg-white p-6 shadow-[0_8px_30px_rgba(35,59,77,.035)]"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#A98259]"><MapPin size={13}/>{area as string}</div><h3 className="mt-4 font-serif text-[22px] leading-tight text-[#213B59]">{title as string}</h3><p className="mt-3 text-[12px] leading-[1.85] text-[#718093]">{copy as string}</p><ul className="mt-4 space-y-2">{(points as string[]).map(p=><li key={p} className="flex gap-2 text-[11px] leading-[1.6] text-[#617487]"><Check size={13} className="mt-0.5 shrink-0 text-[#8A9B85]"/>{p}</li>)}</ul><p className="mt-4 border-t border-[#E9ECE8] pt-4 text-[11px] leading-[1.8] text-[#82909D]">{note as string}</p></Rise>)}</div><p className="mt-6 text-[10px] leading-[1.8] text-[#8A969F]">Local campaign targeting should be based on actual service areas, audience relevance and platform targeting availability. A location mention alone does not guarantee that advertisements reach only that area.</p></Section>

    {/* PLATFORMS */}
    <Section><Heading eyebrow="PLATFORM SELECTION" title="Reach your audience where they are most likely to take action" copy="Not every business needs to advertise on every platform. The right choice depends on audience behaviour, campaign objectives and available budget."/><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Google Ads","Suitable for reaching people actively searching for a product, service or solution.",Search,["Service enquiries","Product searches","Local business discovery","High-intent search campaigns"]],["Facebook Ads","Suitable for reaching relevant audiences through visual, promotional and lead-focused campaigns.",Megaphone,["Local business promotion","Lead generation","Offers and campaigns","Remarketing"]],["Instagram Ads","Suitable for visual businesses and brands that communicate through creative content.",Video,["Product promotion","Reels advertising","Brand discovery","Service enquiries"]],["YouTube Ads","Suitable for businesses with video content that want to reach audiences through video advertising.",PlayIcon,["Brand awareness","Product demonstrations","Service introductions","Video-led campaigns"]]].map(([title,copy,Icon,points],i)=><Card key={title as string} title={title as string} copy={copy as string} icon={Icon} points={points as string[]} index={i}/>)}</div><p className="mt-6 rounded-2xl bg-[#F4F1EA] p-5 text-[12px] leading-[1.8] text-[#6F7D8B]"><strong className="text-[#405B73]">Our recommendation:</strong> Select platforms based on your customer journey rather than trying to advertise everywhere.</p></Section>

    {/* PROCESS */}
    <Section className="bg-white"><Heading eyebrow="HOW WE WORK" title="Our Performance Marketing Process" copy="From campaign planning to continuous optimisation."/><div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{process.map(([title,copy],i)=><Rise key={title as string} delay={(i%4)*.05} className="rounded-[20px] border border-[#E5E9E8] bg-[#FAFBF9] p-5"><div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#E9EFF1] text-[12px] font-semibold text-[#607D91]">{String(i+1).padStart(2,"0")}</div><h3 className="text-[14px] font-semibold text-[#213B59]">{title as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{copy as string}</p></Rise>)}</div></Section>

    {/* EFFECTIVE */}
    <Section><Heading eyebrow="WHAT MAKES IT WORK" title="What Makes a Performance Marketing Campaign Effective?" copy="Connect advertising spend with meaningful business actions. A campaign should not be judged by impressions and clicks alone. Its value depends on whether it reaches the right people and encourages useful actions."/><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{effective.map(([title,copy,Icon],i)=><Card key={title as string} title={title as string} copy={copy as string} icon={Icon} index={i}/>)}</div></Section>

    {/* WHY US */}
    <Section className="bg-[#F7F8F6]"><Heading eyebrow="WHY SHARP RAYS" title="A business-focused approach to paid digital advertising" copy="Performance marketing requires more than launching advertisements. It involves understanding the audience, communicating the offer and measuring what happens after someone clicks."/><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([title,copy,Icon],i)=><Card key={title as string} title={title as string} copy={copy as string} icon={Icon} index={i}/>)}</div></Section>

    {/* ALL SERVICES */}
    <Section><Heading eyebrow="EXPLORE SHARP RAYS" title="Complete Digital Solutions to Build and Grow Your Online Presence" copy="Paid advertising is one part of your digital growth strategy. Sharp Rays offers a range of digital services to help businesses strengthen their online presence, attract relevant audiences and build stronger brand communication."/><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{allServices.map(([title,copy,href],i)=><Rise key={title as string} delay={(i%3)*.04}><Link href={href as string} className="group flex h-full items-start justify-between gap-4 rounded-[18px] border border-[#E4E9E8] bg-white p-5 shadow-[0_6px_24px_rgba(35,59,77,.025)] transition-all hover:-translate-y-1 hover:border-[#C9D7DE] hover:shadow-[0_12px_30px_rgba(35,59,77,.07)]"><div><h3 className="text-[14px] font-semibold text-[#213B59]">{title as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{copy as string}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-[#A98259] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></Rise>)}</div><div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-[#E7E2D8] bg-[#F8F4ED] p-6"><div><h3 className="text-[15px] font-semibold text-[#213B59]">Looking for more than one service?</h3><p className="mt-1 text-[12px] text-[#718093]">Build a more connected online growth strategy with Sharp Rays.</p></div><ButtonLink href="/services" secondary>Explore All Sharp Rays Services</ButtonLink></div></Section>

    {/* ECOSYSTEM */}
    <Section className="bg-white"><Heading eyebrow="A CONNECTED DIGITAL PRESENCE" title="Make your website and advertising work together" copy="Paid advertising can bring visitors to your website, but the website experience plays an important role in what happens next."/><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["Google Ads","Connect your business with people searching for relevant services.",Search],["Meta Ads","Introduce your offering to suitable audiences.",Megaphone],["Landing Pages","Explain your service and encourage enquiries.",MonitorSmartphone],["SEO","Support long-term organic discovery.",Globe2],["Social Media Marketing","Build familiarity and communicate your brand.",Users],["Conversion Tracking","Help measure meaningful actions.",ChartNoAxesCombined]].map(([title,copy,Icon],i)=><Card key={title as string} title={title as string} copy={copy as string} icon={Icon} index={i}/>)}</div><p className="mt-6 text-[11px] leading-[1.85] text-[#82909D]">Paid advertising does not guarantee sales or leads. Outcomes depend on the offer, audience, competition, landing page, budget and campaign execution. Explore our <Link className="font-semibold text-[#526F88] underline underline-offset-4" href="/services/search-engine-optimization">SEO services</Link> and <Link className="font-semibold text-[#526F88] underline underline-offset-4" href="/services/website-development">website development services</Link> to strengthen the other parts of your digital presence.</p></Section>

    {/* PRICING */}
    <Section><div className="grid items-center gap-9 lg:grid-cols-[.9fr_1.1fr]"><Rise><Eyebrow>PRICING & ADVERTISING BUDGET</Eyebrow><h2 className="font-serif text-[clamp(28px,3.2vw,40px)] leading-[1.14] tracking-[-.04em] text-[#183253]">Performance Marketing Pricing in Nalasopara</h2><p className="mt-4 text-[13px] leading-[1.9] text-[#718093]">Performance marketing management fees depend on the agreed campaign scope, platforms, complexity, creative requirements and reporting needs. Share your objectives to discuss a suitable scope.</p><p className="mt-4 text-[12px] leading-[1.85] text-[#617487]">Advertising spend is a separate cost paid to platforms such as Google or Meta. It is not the same as Sharp Rays' campaign management fee. Confirm both amounts, deliverables, campaign count and tracking requirements before launch.</p><div className="mt-6"><ButtonLink href="/contact" secondary>Discuss Campaign Requirements</ButtonLink></div></Rise><Rise delay={.1} className="rounded-[24px] border border-[#E7E2D8] bg-[#F8F4ED] p-6 sm:p-8"><Eyebrow>WEBSITE DEVELOPMENT STARTING PRICES</Eyebrow><h3 className="font-serif text-[23px] leading-tight text-[#213B59]">Need a landing page for your campaigns?</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">These are website development starting prices only — not paid media management fees or advertising spend.</p><div className="mt-6 grid gap-3 sm:grid-cols-3">{[["Starter Website","₹14,999"],["Business Website","₹24,999"],["Advanced Website","₹39,999"]].map(([name,price],i)=><div key={name} className={`rounded-[18px] border p-4 ${pastel[(i+1)%pastel.length]}`}><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#A98259]">{name}</p><p className="mt-3 font-serif text-[25px] tracking-[-.04em] text-[#213B59]">{price}</p><p className="mt-2 text-[10px] leading-[1.7] text-[#718093]">Starting price</p></div>)}</div><div className="mt-5"><ButtonLink href="/pricing" secondary>Explore Website Pricing</ButtonLink></div></Rise></div></Section>

  
{/* FAQ */}
<Section className="relative overflow-hidden bg-[#FFFEFC]">
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(circle at 8% 15%, rgba(198,167,122,0.10), transparent 30%), radial-gradient(circle at 92% 85%, rgba(11,42,82,0.045), transparent 32%)",
    }}
  />

  <div className="relative mx-auto max-w-[1080px]">
    <Heading
      eyebrow="A FEW THINGS YOU SHOULD KNOW"
      title="Performance Marketing — Frequently Asked Questions"
      copy="Clear answers about paid advertising, campaign planning, budgets and how we approach performance marketing."
      center
    />

    <div className="mt-12 grid gap-x-10 md:grid-cols-2">
      {faqs.map(([q, a], i) => (
        <Rise key={q} delay={(i % 2) * 0.04}>
          <div className="group h-full border-t border-[#E9E1D5] py-6 transition-colors duration-300 hover:border-[#B79A72]">
            <div className="flex items-start gap-4">
              <span className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E8DCCB] bg-[#F8F4ED] text-[#A1845F] transition-all duration-300 group-hover:bg-[#0B2A52] group-hover:text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </span>

              <div className="min-w-0">
                <h3 className="font-serif text-[17px] leading-[1.5] text-[#0B2A52]">
                  {q}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#718093]">
                  {a}
                </p>
              </div>
            </div>
          </div>
        </Rise>
      ))}
    </div>

    <div className="mt-2 border-t border-[#E9E1D5]" />
  </div>
</Section>

    {/* RELATED LOCATIONS & SERVICES */}
    <Section className="bg-white"><Heading eyebrow="EXPLORE MORE" title="Related Digital Marketing Services and Locations" copy="Explore the wider Sharp Rays service ecosystem and nearby location-specific pages."/><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["Nalasopara digital marketing services","/locations/nalasopara"],["All service locations","/locations"],["SEO services","/services/search-engine-optimization"],["Website development","/services/website-development"],["Social media marketing","/services/social-media-marketing"],["Performance marketing in Vasai Road","/locations/vasai-road/performance-marketing"],["Performance marketing in Virar","/locations/virar/performance-marketing"]].map(([label,href])=><Link key={href} href={href} title={`Explore ${label} by Sharp Rays`} className="group flex items-center justify-between rounded-[16px] border border-[#E5E9E8] bg-[#FCFCFA] px-5 py-4 text-[12px] font-medium text-[#405B73] transition hover:-translate-y-0.5 hover:border-[#C9D7DE] hover:bg-[#F8F4ED]">{label}<ArrowUpRight size={15} className="text-[#A98259] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link>)}</div></Section>

    {/* FINAL CTA */}
    <Section className="bg-[radial-gradient(ellipse_at_85%_15%,rgba(222,232,234,.75),transparent_40%),linear-gradient(120deg,#F7F4EE,#F7F9F7)]"><Rise className="mx-auto max-w-[900px] rounded-[28px] border border-white/90 bg-white/65 px-6 py-10 text-center shadow-[0_16px_55px_rgba(35,59,77,.06)] backdrop-blur sm:px-12 sm:py-14"><Eyebrow>LET'S PLAN YOUR NEXT CAMPAIGN</Eyebrow><h2 className="mx-auto max-w-[700px] font-serif text-[clamp(29px,4vw,44px)] leading-[1.12] tracking-[-.04em] text-[#183253]">Ready to Make Your Advertising More Effective?</h2><p className="mx-auto mt-4 max-w-[690px] text-[13px] leading-[1.9] text-[#718093]">Whether you run a clinic, coaching class, retail business or professional service in Nalasopara East, Nalasopara West or around Nalasopara station, your advertising strategy should reflect your customers, offering and business objectives.</p><p className="mx-auto mt-2 max-w-[650px] text-[12px] leading-[1.85] text-[#718093]">Let's plan campaigns that reach relevant audiences, communicate your value and make performance easier to measure.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><ButtonLink href="/contact">Talk to Sharp Rays</ButtonLink><ButtonLink href="/services" secondary>Explore All Sharp Rays Services</ButtonLink></div><p className="mt-8 text-[10px] font-semibold tracking-[.08em] text-[#A98259]">Sharp Rays — We Create the “Oh, Wow.”!</p></Rise></Section>
  </main>;
}

function PlayIcon(props: any) { return <Video {...props}/>; }
