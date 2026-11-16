"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, MapPin, Search, MonitorSmartphone, Megaphone,
  BarChart3, Newspaper, Film, Video, FileText, Workflow, Sparkles,
  ShoppingBag, GraduationCap, HeartPulse, Factory, BriefcaseBusiness,
  Building2, UtensilsCrossed, Rocket, Globe2, MessageCircle, Target,
  Layers3, ShieldCheck, MousePointerClick, Check,
} from "lucide-react";

const services = [
  { title: "Search Engine Optimisation (SEO)", short: "SEO", icon: Search, line: "Be easier to find when customers search.", copy: "Improve search relevance through website structure, technical improvements, useful content, keyword relevance and local search visibility.", points: ["Technical and on-page SEO", "Keyword and search-intent research", "Local SEO foundations", "Content structure and internal links"], href: "/locations/nalasopara/seo", pillarHref: "/services/search-engine-optimization" },
  { title: "Website Development & Management", short: "Websites", icon: MonitorSmartphone, line: "Give your business a digital home that works.", copy: "Create a responsive website that explains your services, communicates your value and makes it easier for visitors to enquire.", points: ["Responsive website experiences", "Clear navigation and page structure", "Service and product information", "Enquiry pathways and SEO foundations"], href: "/locations/nalasopara/website-development", pillarHref: "/services/website-development" },
  { title: "Social Media Marketing", short: "Social", icon: Megaphone, line: "Build a consistent and recognisable presence.", copy: "Plan platform-aware content, creative direction and audience communication around what customers need to understand about your business.", points: ["Social media strategy", "Content planning and calendars", "Creative direction and Reels", "Audience engagement"], href: "/locations/nalasopara/social-media-marketing", pillarHref: "/services/social-media-marketing" },
  { title: "Performance Marketing", short: "Paid media", icon: BarChart3, line: "Put campaigns in front of relevant audiences.", copy: "Connect advertising objectives with audience selection, creative testing, landing pages and conversion measurement.", points: ["Campaign objective planning", "Audience and creative testing", "Landing-page alignment", "Conversion measurement"], href: "/services/performance-marketing", pillarHref: "/services/performance-marketing" },
  { title: "Digital PR & Media Relations", short: "Digital PR", icon: Newspaper, line: "Build a more credible public presence.", copy: "Develop brand stories, relevant media communication and responsible public relations around genuine business updates.", points: ["Digital PR planning", "Media research and outreach", "Press materials and brand storytelling", "Founder and brand visibility"], href: "/services/digital-pr-and-media-relations", pillarHref: "/services/digital-pr-and-media-relations" },
  { title: "AI Video & Creative", short: "AI Video", icon: Film, line: "Bring ideas to life through visual storytelling.", copy: "Use AI-assisted creative workflows for marketing campaigns, product communication and consistent brand storytelling.", points: ["AI-assisted video concepts", "Campaign and social creatives", "Visual experimentation", "Creative planning and storyboards"], href: "/services/ai-video-and-creative", pillarHref: "/services/ai-video-and-creative" },
  { title: "Professional Video Editing", short: "Video Editing", icon: Video, line: "Turn raw footage into polished content.", copy: "Prepare video content with considered pacing, captions, transitions, sound refinement and platform-specific formatting.", points: ["Reels and Shorts editing", "YouTube and promotional videos", "Captions and transitions", "Colour and audio refinement"], href: "/services/video-editing", pillarHref: "/services/video-editing" },
  { title: "Content Marketing", short: "Content", icon: FileText, line: "Answer the questions your customers are asking.", copy: "Develop useful website pages, articles and educational resources around audience needs and relevant search intent.", points: ["Content strategy and topic planning", "SEO articles and website copy", "Service and industry content", "Content refreshes and internal links"], href: "/services/content-marketing", pillarHref: "/services/content-marketing" },
  { title: "AI Automation", short: "Automation", icon: Workflow, line: "Make repetitive business processes easier to manage.", copy: "Explore practical workflows for enquiry organisation, lead follow-ups, information handling and connected business processes.", points: ["Enquiry capture and routing", "Workflow integrations", "Lead follow-up processes", "Notifications and admin tasks"], href: "/services/ai-automation", pillarHref: "/services/ai-automation" },
];

const industries = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", icon: Sparkles, text: "Present treatments, services, business details and visual content with a consistent digital presence." },
  { name: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag, text: "Organise product categories, product information, discovery and purchasing pathways." },
  { name: "Education", href: "/industries/education", icon: GraduationCap, text: "Communicate courses, subjects, learning formats, admissions and enquiry information." },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse, text: "Present services, practitioner information and appointment details clearly and responsibly." },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, text: "Showcase product categories, specifications, capabilities and B2B business information." },
  { name: "Professional Services", href: "/industries/professional-services", icon: BriefcaseBusiness, text: "Explain expertise, services, working processes and contact options with clarity." },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2, text: "Organise project information, property details, location context and enquiry pathways." },
  { name: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed, text: "Make menus, services, location information and customer updates easy to access." },
  { name: "Startups", href: "/industries/startup", icon: Rocket, text: "Communicate the product, audience, value proposition and brand through a clear digital foundation." },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Globe2, text: "Showcase experiences, destinations, packages and useful visitor information." },
];

const faqs = [
  ["Does Sharp Rays provide digital marketing services in Nalasopara?", "Sharp Rays offers digital marketing services for businesses targeting Nalasopara, including SEO, website development, social media marketing, performance marketing, digital PR, content marketing, AI video and creative, professional video editing and AI automation."],
  ["Which digital marketing services should a Nalasopara business start with?", "Start by identifying the biggest gap in your current online presence. SEO can support search visibility, website development can improve how customers understand your services, and social media marketing can build consistent brand communication."],
  ["Can you help businesses targeting Nalasopara East and West?", "Our digital marketing services can be planned around businesses targeting customers in Nalasopara East, Nalasopara West and surrounding areas, based on their service area and audience needs."],
  ["How can SEO help a local business in Nalasopara?", "SEO can improve a website's relevance and visibility for searches related to its services and service area. This may involve technical improvements, useful content, local SEO and clear business information. Outcomes depend on competition and ongoing work."],
  ["Does my business need a website if it already uses Instagram?", "Instagram can help a business publish content and communicate with its audience. A website provides more control over service information, search-focused pages, enquiries and the overall customer journey. Both can support each other."],
  ["Do you provide paid advertising services?", "Yes. Performance marketing is one of the services offered by Sharp Rays. Campaign planning should begin with a defined objective, suitable audience, relevant landing page and conversion measurement."],
  ["Can digital marketing help coaching classes and clinics?", "Digital marketing can help education and healthcare businesses communicate their services, important information and enquiry options online. The strategy should reflect the audience and nature of the services."],
  ["How much does website development cost?", "Website development packages start at ₹14,999, with additional starting packages at ₹24,999 and ₹39,999. The final cost depends on the number of pages, functionality, content and project requirements."],
  ["Do you provide AI video and automation services?", "Yes. Sharp Rays offers AI Video and Creative services and AI Automation solutions. These can support visual content production and practical business workflows, depending on the project's requirements."],
  ["How do I get started with Sharp Rays?", "Share your business details, website or social media profile and the main challenge you want to address. We can review the information and discuss suitable next steps."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#A1845F]"><span className="h-px w-8 bg-[#D5C7B4]" />{children}</div>;
}
function SectionTitle({ eyebrow, title, copy, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
    <h2 className="mt-5 font-serif text-[34px] font-normal leading-[1.12] tracking-[-.045em] text-[#0B2A52] sm:text-[43px] lg:text-[50px]">{title}</h2>
    {copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] text-[#657889] ${center ? "mx-auto" : ""}`}>{copy}</p>}
  </div>;
}

export default function NalasoparaClientPage() {
  return <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
    {/* HERO */}
    <section className="relative isolate min-h-[690px] overflow-hidden bg-[linear-gradient(135deg,#FAF8F5_0%,#F8F6F1_52%,#FFFEFC_100%)] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:min-h-[740px] lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 78% 28%, rgba(198,167,122,.22), transparent 31%), radial-gradient(circle at 15% 90%, rgba(215,199,174,.24), transparent 34%), radial-gradient(circle at 52% 4%, rgba(255,255,255,.95), transparent 42%)" }} />
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[620px] w-[620px] rounded-full border border-[#0B2A52]/[.07]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-[420px] w-[420px] rounded-full border border-[#B79A72]/30" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <Reveal><div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E7DFD3] bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-[#A1845F] shadow-sm"><MapPin size={12} /> Digital growth · Nalasopara, Maharashtra</div>
          <h1 className="mt-8 max-w-[720px] font-serif text-[44px] font-normal leading-[1.04] tracking-[-.05em] sm:text-[58px] lg:text-[68px]">Digital marketing for <span className="bg-gradient-to-r from-[#A1845F] via-[#B79A72] to-[#8D704D] bg-clip-text text-transparent italic">Nalasopara businesses.</span></h1>
          <p className="mt-7 max-w-[610px] text-[15px] leading-[1.95] text-[#526779]">Build a stronger online presence with strategic SEO, professional website development and social media marketing. Sharp Rays brings together digital strategy, creative thinking and technology to help businesses communicate better, improve online visibility and create clearer paths to customer enquiries.</p>
          <p className="mt-3 max-w-[560px] text-[12px] leading-[1.9] text-[#9A8B78]">For businesses serving Nalasopara East, Nalasopara West and neighbourhoods around the station.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact?source=nalasopara-location" title="Book a free digital marketing audit for your Nalasopara business" className="group inline-flex min-h-12 items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Book a Free Audit <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            <a href="#nalasopara-services" title="Explore digital marketing services in Nalasopara" className="inline-flex min-h-12 items-center gap-3 rounded-[9px] border border-[#D5C7B4] bg-white/75 px-6 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#B79A72] hover:bg-[#FAF8F4]">Explore Our Services <ArrowRight size={15}/></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E7DFD3] pt-6 text-[10px] uppercase tracking-[.15em] text-[#657889]"><span>Search visibility</span><span>Digital experiences</span><span>Creative communication</span></div>
        </div></Reveal>
        <Reveal delay={.12}><div className="relative mx-auto w-full max-w-[510px]">
          <div className="absolute -inset-5 border border-[#E6DED2]/70"/>
          <div className="relative border border-white/80 bg-white/75 p-5 shadow-[0_35px_90px_-55px_rgba(38,59,80,.35)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-4"><div><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">Digital presence</span><p className="mt-1 font-serif text-[21px]">A connected growth system</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F1] text-[#A1845F]"><Layers3 size={19}/></div></div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[["01","Be discoverable","SEO & content",Search],["02","Make it clear","Website experience",MonitorSmartphone],["03","Stay connected","Social media",Megaphone],["04","Measure intent","Campaigns & enquiries",BarChart3]].map(([n,t,d,Icon]:any,i)=><div key={n} className={`min-h-[138px] rounded-[10px] border border-white/80 bg-gradient-to-br ${["from-[#E6EEF5] via-[#F2F6F8] to-[#D8E4ED]","from-[#F1E6D8] via-[#FAF5ED] to-[#E8D8C5]","from-[#E9E7F1] via-[#F5F3F8] to-[#DDD9EA]","from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]"][i]} p-4 shadow-[0_12px_30px_-24px_rgba(11,42,82,.28)]`}><div className="flex items-center justify-between"><span className="text-[9px] tracking-[.15em] text-[#9A8B78]">{n}</span><Icon size={17} className="text-[#A1845F]" strokeWidth={1.4}/></div><p className="mt-6 font-serif text-[18px]">{t}</p><p className="mt-1 text-[10px] text-[#9A8B78]">{d}</p></div>)}
            </div>
            <div className="mt-4 flex items-center gap-3 border border-[#E7DFD3] bg-[#FAF8F5] p-4"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#A1845F]"><MousePointerClick size={17}/></div><div><p className="text-[11px] font-semibold">A clearer path to enquiry</p><p className="mt-1 text-[10px] text-[#9A8B78]">Useful information. Clear next steps.</p></div><ArrowUpRight size={16} className="ml-auto text-[#A1845F]"/></div>
          </div>
          <div className="absolute -bottom-8 -left-8 hidden border border-[#E7DFD3] bg-white/90 px-5 py-4 shadow-[0_15px_40px_-30px_rgba(38,59,80,.4)] sm:block"><p className="text-[9px] uppercase tracking-[.18em] text-[#A1845F]">Sharp Rays</p><p className="mt-1 font-serif text-[17px]">We Create the “Oh, Wow.”!</p></div>
        </div></Reveal>
      </div>
    </section>

    {/* DIRECT ANSWER */}
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <Reveal><Eyebrow>Digital marketing in Nalasopara</Eyebrow><h2 className="mt-5 font-serif text-[32px] leading-[1.15] tracking-[-.04em] sm:text-[40px]">A practical digital partner for your <span className="text-[#A1845F] italic">next stage.</span></h2></Reveal>
        <Reveal delay={.08}><div className="border-l-2 border-[#D5C7B4] pl-6 sm:pl-8"><p className="text-[15px] leading-[2] text-[#526779]">Sharp Rays offers digital marketing solutions for businesses targeting customers in Nalasopara East, Nalasopara West and surrounding areas. Our services include search engine optimisation, website development, social media marketing, performance marketing, digital PR, content marketing, AI video and creative solutions, professional video editing and AI automation.</p><p className="mt-4 text-[13px] leading-[1.95] text-[#657889]">We focus on helping businesses build a useful digital presence through clear communication, relevant content, well-structured websites and marketing strategies aligned with their business goals.</p></div></Reveal>
      </div>
    </section>


    {/* SIX FOCUSED SERVICES FOR NALASOPARA */}
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="nalasopara-six-services-heading">
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#F1E8DC]/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#E7EEF4]/70 blur-3xl" />
      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>Services for Nalasopara</Eyebrow>
              <h2 id="nalasopara-six-services-heading" className="mt-5 max-w-[520px] font-serif text-[34px] font-normal leading-[1.12] tracking-[-.045em] text-[#0B2A52] sm:text-[43px]">
                Six focused services for your <span className="text-[#A1845F] italic">next step.</span>
              </h2>
            </div>
            <p className="max-w-[610px] text-[13px] leading-[1.95] text-[#657889] lg:justify-self-end">
              For businesses targeting customers in Nalasopara, we bring together six practical service areas—from building your website and improving search visibility to creative campaigns and business automation.
            </p>
          </div>
        </Reveal>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[services[0], services[1], services[2], services[3], services[5], services[8]].map((service, i) => {
            const Icon = service.icon;
            const accents = [
              "bg-[#E8EFF5]",
              "bg-[#F3E9DC]",
              "bg-[#ECEAF3]",
              "bg-[#E8F0EA]",
              "bg-[#F3E9E5]",
              "bg-[#E9EDF2]",
            ];
            return (
              <Reveal key={`nalasopara-featured-${service.title}`} delay={(i % 3) * 0.05}>
                <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[10px] border border-[#E7DFD3] bg-[#FFFEFC] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_22px_50px_-38px_rgba(13,36,68,.30)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#A1845F]">0{i + 1} / 06</span>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full ${accents[i]} text-[#0B2A52]`}>
                      <Icon size={19} strokeWidth={1.4} />
                    </span>
                  </div>
                  <h3 className="mt-7 max-w-[280px] font-serif text-[23px] leading-[1.2] tracking-[-.025em] text-[#0B2A52]">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[11px] leading-[1.9] text-[#657889]">{service.copy}</p>
                  <Link
                    href={service.href}
                    title={`Explore ${service.title} by Sharp Rays`}
                    className="mt-6 inline-flex w-fit items-center gap-2 border-t border-[#E7DFD3] pt-4 text-[9px] font-semibold uppercase tracking-[.14em] text-[#0B2A52] transition-colors hover:text-[#A1845F]"
                  >
                    Explore service <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section id="nalasopara-services" className="scroll-mt-20 bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal><SectionTitle eyebrow="What we can help with" title={<>Digital services with a <span className="text-[#A1845F] italic">clear purpose.</span></>} copy="Every business has different goals, audiences and digital requirements. Explore the capabilities that may fit your next step." /></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service,i)=>{const Icon=service.icon;const serviceTones=["from-[#E7EEF4] via-[#F3F6F8] to-[#DCE7EF]","from-[#F1E6D8] via-[#FAF5ED] to-[#E9D9C6]","from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]"];return <Reveal key={service.title} delay={(i%3)*.05}><article className={`group flex h-full flex-col rounded-[12px] border border-white/80 bg-gradient-to-br ${serviceTones[i%serviceTones.length]} p-6 shadow-[0_14px_36px_-28px_rgba(11,42,82,.30)] transition duration-300 hover:-translate-y-1 hover:border-[#A1845F] hover:shadow-[0_22px_50px_-38px_rgba(13,36,68,.32)] sm:p-7`}><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center border border-[#E7DFD3] bg-[#F1F6F9] text-[#A1845F]"><Icon size={20} strokeWidth={1.35}/></div><span className="text-[9px] uppercase tracking-[.17em] text-[#9A8B78]">{service.short}</span></div><h3 className="mt-7 font-serif text-[24px] leading-[1.2] tracking-[-.025em] text-[#0B2A52]">{service.title}</h3><p className="mt-3 text-[12px] font-semibold text-[#A1845F]">{service.line}</p><p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#657889]">{service.copy}</p><ul className="mt-5 space-y-2 border-t border-[#E7DFD3] pt-5">{service.points.map(point=><li key={point} className="flex items-start gap-2 text-[10px] text-[#657889]"><Check size={13} className="mt-0.5 shrink-0 text-[#D5C7B4]"/>{point}</li>)}</ul><div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7DFD3] pt-5"><Link href={service.href} title={`Explore ${service.title} for businesses in Nalasopara`} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B2A52] transition hover:text-[#0B2A52]">Explore service <ArrowUpRight size={14}/></Link>{service.pillarHref && <Link href={service.pillarHref} title={`Explore Sharp Rays ${service.title} services`} className="text-[9px] text-[#9A8B78] transition hover:text-[#0B2A52]">Service overview</Link>}</div></article></Reveal>})}
        </div>
      </div>
    </section>

    {/* LOCAL CONTEXT */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Understanding Nalasopara" title={<>Local context makes digital strategy <span className="text-[#A1845F] italic">more relevant.</span></>} copy="Nalasopara has distinct East and West areas, with local shopping streets, residential neighbourhoods, clinics, coaching classes and other service-led businesses. A useful strategy reflects the customers a business wants to reach and how they search." /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {name:"Nalasopara",side:"East",copy:"Areas around Tulinj Road and Achole provide relevant local context for retail, education, healthcare and service-oriented businesses.",items:["Services and product information","Location and contact details","Relevant local search content","Enquiry and appointment pathways"]},
            {name:"Nalasopara",side:"West",copy:"The Sopara and Nirmal side has its own residential and commercial context. Businesses serving nearby communities need clear service information and consistent communication.",items:["Clear service-area information","Useful website content","Consistent brand communication","Simple customer enquiries"]},
            {name:"Around the",side:"Station",copy:"The station is an important local reference point for people travelling between neighbourhoods and commercial areas. Businesses should make service areas and contact options easy to understand.",items:["Accurate business details","Relevant location context","Easy-to-find contact options","Natural location relevance"]},
          ].map((area,i)=><Reveal key={area.side} delay={i*.07}><article className={`relative flex min-h-[340px] flex-col overflow-hidden border p-7 sm:p-9 ${["border-[#D9E4EC] bg-gradient-to-br from-[#E5EEF5] via-[#F2F6F8] to-[#D7E4ED]","border-[#E8DCCB] bg-gradient-to-br from-[#F2E7D9] via-[#FAF5EE] to-[#E9D9C6]","border-[#DCE6DF] bg-gradient-to-br from-[#E7F0E9] via-[#F4F7F3] to-[#D9E6DC]"][i]}`}><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D5C7B4]/25"/><div className="relative flex h-full flex-col"><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">Local business context</span><h3 className="mt-6 font-serif text-[34px] leading-tight">{area.name} <span className="italic text-[#A1845F]">{area.side}</span></h3><p className="mt-4 text-[12px] leading-[1.9] text-[#657889]">{area.copy}</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#E7DFD3] pt-6">{area.items.map(item=><div key={item} className="flex items-start gap-2 text-[10px] leading-[1.6] text-[#526779]"><span className="mt-1 h-1 w-1 shrink-0 bg-[#D5C7B4]"/>{item}</div>)}</div></div></article></Reveal>)}
        </div>
        <p className="mt-5 text-[10px] leading-[1.8] text-[#9A8B78]">These references describe local business contexts and do not imply a physical Sharp Rays office or verified client presence in these neighbourhoods.</p>
      </div>
    </section>

    {/* CHALLENGES */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="What businesses can review" title={<>A stronger online presence starts by fixing the <span className="text-[#A1845F] italic">right gaps.</span></>} copy="Having a good product or service does not automatically make a business easy to discover online. The digital experience also matters." /></Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Low search visibility","Your website may not appear for relevant service-related or location-based searches. SEO can help identify technical, content and relevance gaps."],
            ["Outdated website experience","A website that is difficult to navigate or does not work well on mobile can make it harder for visitors to understand your business."],
            ["Unclear service information","When services, pricing information, business details or contact options are difficult to find, customers may struggle to evaluate the offering."],
            ["Inconsistent social media","Publishing without a clear content direction can make brand communication feel disconnected. A strategy gives each post a purpose."],
            ["Weak enquiry journey","Clear calls to action, accessible contact details and relevant enquiry forms help visitors understand what to do next."],
            ["Unmeasured advertising","Campaign tracking helps businesses understand whether advertising activity is generating relevant actions against its objectives."],
          ].map(([title,copy],i)=><Reveal key={title} delay={(i%3)*.05}><article className={`h-full rounded-[10px] border border-white/80 bg-gradient-to-br ${["from-[#E7EEF4] via-[#F4F7F9] to-[#DCE7EF]","from-[#F2E8DC] via-[#FBF6EF] to-[#EADBC9]","from-[#E9E8F1] via-[#F6F4F9] to-[#DFDCEB]","from-[#E5EEE8] via-[#F3F7F3] to-[#D7E5DB]","from-[#F2E8E5] via-[#FAF3F0] to-[#EADBD6]","from-[#E7ECF2] via-[#F4F6F8] to-[#D8E1EA]"][i%6]} p-6 shadow-[0_12px_30px_-25px_rgba(11,42,82,.25)] sm:p-7`}><span className="text-[9px] uppercase tracking-[.18em] text-[#D5C7B4]">Area to review</span><h3 className="mt-5 font-serif text-[22px] leading-tight">{title}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#657889]">{copy}</p></article></Reveal>)}
        </div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="bg-gradient-to-br from-[#FFFEFC] via-[#FAF8F5] to-[#EEE8DD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Industries we can support" title={<>Digital solutions shaped around your <span className="text-[#A1845F] italic">industry.</span></>} copy="Different industries communicate with customers in different ways. The right digital strategy reflects the information people need before they contact or choose a business." /></Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((industry,i)=>{const Icon=industry.icon;const tones=["from-[#EADBC8] via-[#F7F0E7] to-[#DCC7AE]","from-[#E3EAF0] via-[#F2F5F7] to-[#D2DEE8]","from-[#E6E2EF] via-[#F3F0F7] to-[#D8D1E6]","from-[#E1EBE4] via-[#F1F6F1] to-[#CFDFD4]","from-[#F0E2DD] via-[#F8F0ED] to-[#E5D0C8]"];return <Reveal key={industry.name} delay={(i%5)*.04}><Link href={industry.href} title={`Explore digital marketing for ${industry.name} businesses at Sharp Rays`} className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[12px] border border-[#E6DED2]/70 bg-gradient-to-br ${tones[i%tones.length]} p-5 shadow-[0_12px_35px_-30px_rgba(13,36,68,.30)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_22px_48px_-30px_rgba(11,42,82,.20)]`}><span className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full border border-[#A1845F]/15 transition-transform duration-500 group-hover:scale-125"/><div className="relative flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center border border-white/80 bg-white/75 text-[#0B2A52] shadow-sm"><Icon size={21} strokeWidth={1.35}/></span><ArrowUpRight size={17} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="relative mt-7 font-serif text-[19px] leading-tight text-[#0B2A52]">{industry.name}</h3><p className="relative mt-3 flex-1 text-[10px] leading-[1.85] text-[#526779]">{industry.text}</p><span className="relative mt-5 inline-flex items-center gap-2 border-t border-[#D5C7B4]/60 pt-4 text-[9px] font-semibold uppercase tracking-[.14em] text-[#0B2A52]">Explore industry <ArrowUpRight size={13}/></span></Link></Reveal>})}</div>
      </div>
    </section>

    {/* WEBSITE FOUNDATION */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><div className="relative overflow-hidden border border-[#E7DFD3] bg-[#F1EAE0] p-6 sm:p-9"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#0B2A52]/10"/><div className="relative border border-[#E7DFD3] bg-white p-5 shadow-[0_24px_60px_-40px_rgba(38,59,80,.4)] sm:p-7"><div className="flex items-center gap-1.5 border-b border-[#E7DFD3] pb-4"><span className="h-2 w-2 rounded-full bg-[#D5C7B4]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="ml-auto text-[8px] tracking-[.15em] text-[#9A8B78]">BUSINESS WEBSITE</span></div><div className="mt-6 grid grid-cols-[1fr_.75fr] gap-4"><div><div className="h-2 w-3/4 bg-[#DCE2E6]"/><div className="mt-3 h-2 w-full bg-[#DCE2E6]"/><div className="mt-2 h-2 w-4/5 bg-[#DCE2E6]"/><div className="mt-6 h-8 w-24 rounded-full bg-gradient-to-r from-[#0B2A52] to-[#A1845F]"/></div><div className="aspect-square bg-gradient-to-br from-[#D8E0E5] to-[#D8C5AA]"/></div><div className="mt-7 grid grid-cols-3 gap-2">{[1,2,3].map(x=><div key={x} className="h-14 bg-[#F0F2F3]"/>)}</div><div className="mt-6 h-2 w-2/5 bg-[#DCE2E6]"/><div className="mt-2 h-2 w-3/4 bg-[#E7DFD3]"/></div><div className="relative mt-4 flex items-center justify-between border border-[#E7DFD3] bg-[#FFFEFC] p-4"><div><span className="text-[8px] uppercase tracking-[.15em] text-[#A1845F]">A better first impression</span><p className="mt-1 font-serif text-[17px]">Designed around your customer.</p></div><MousePointerClick size={22} className="text-[#A1845F]"/></div></div></Reveal>
        <Reveal delay={.08}><div><SectionTitle eyebrow="Website & SEO foundations" title={<>Your website is the foundation of <span className="text-[#A1845F] italic">digital growth.</span></>} copy="Social media and advertising can introduce people to a business, but a website gives you more control over how services, products and information are presented."/><div className="mt-8 space-y-4">{[
          ["Clear business information","Explain what the business offers, who it serves and how customers can get in touch."],
          ["Responsive experience","Make the website work smoothly across mobile devices, tablets and desktops."],
          ["Organised service pages","Present services in a logical structure with meaningful headings and internal links."],
          ["Search-friendly foundations","Use relevant page titles, content structure, technical SEO and accessible pages."],
          ["Straightforward enquiries","Make contact options, calls to action and enquiry forms easy to find."],
        ].map(([title,copy])=><div key={title} className="border-b border-[#E7DFD3] pb-4"><h3 className="text-[13px] font-semibold">{title}</h3><p className="mt-1 text-[11px] leading-[1.8] text-[#657889]">{copy}</p></div>)}</div><div className="mt-7 flex flex-wrap gap-5"><Link href="/services/website-development" title="Explore website development services at Sharp Rays" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B2A52]">Website Development <ArrowUpRight size={14}/></Link><Link href="/services/search-engine-optimization" title="Explore search engine optimisation services at Sharp Rays" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-[#0B2A52]">Search Engine Optimisation <ArrowUpRight size={14}/></Link></div></div></Reveal>
      </div>
    </section>

    {/* APPROACH */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="How we work" title={<>A thoughtful process, from first conversation to <span className="text-[#A1845F] italic">implementation.</span></>} copy="Effective digital work starts with understanding the business, not selecting services at random." /></Reveal>
        <div className="mt-14 grid gap-0 border-y border-[#D5E0E7] md:grid-cols-5">{[
          ["Understand","Learn about the business, services, audience, current digital presence and objectives.","Business context"],
          ["Identify","Review website experience, search visibility, content, social media and enquiry pathways.","Opportunity areas"],
          ["Plan","Prioritise the services and improvements that fit the requirements, resources and goals.","Right priorities"],
          ["Create & implement","Deliver the agreed website, SEO, content, creative, advertising or automation work.","Defined scope"],
          ["Review & improve","Use available performance information to understand what is working and what needs attention.","Next steps"],
        ].map(([title,copy,output],i)=><Reveal key={title} delay={i*.05}><article className={`flex h-full flex-col py-7 md:px-5 ${i===0?"md:pl-0":""} ${i!==4?"md:border-r md:border-[#D5E0E7]":""}`}><h3 className="mt-2 font-serif text-[23px]">{title}</h3><p className="mt-3 min-h-[100px] text-[11px] leading-[1.9] text-[#657889]">{copy}</p><div className="mt-6 border-t border-[#D5E0E7] pt-4 text-[9px] uppercase tracking-[.15em] text-[#A1845F]">{output}</div></article></Reveal>)}</div>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionTitle eyebrow="Why Sharp Rays" title={<>Thoughtful digital work. <span className="text-[#A1845F] italic">Clear intent.</span></>} copy="Our approach brings strategy, creativity, website development and digital marketing together to help businesses build a more connected online presence."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{[
          [Target,"Strategy before execution","Understand the business objective before choosing the platform, channel or marketing activity."],
          [Layers3,"Connected digital services","Align website development, SEO, social media and other marketing activities where it makes sense."],
          [ShieldCheck,"Transparent communication","Keep requirements, scope, deliverables and expectations clear throughout the engagement."],
          [Sparkles,"Creative thinking","Develop communication and visual ideas that help a brand present its offering with clarity."],
        ].map(([Icon,title,copy]:any,i)=><Reveal key={title} delay={i*.05}><article className="border-b border-[#E7DFD3] py-6"><Icon size={22} strokeWidth={1.3} className="text-[#A1845F]"/><h3 className="mt-4 font-serif text-[22px]">{title}</h3><p className="mt-2 text-[12px] leading-[1.9] text-[#657889]">{copy}</p></article></Reveal>)}</div>
      </div>
    </section>

    {/* WEBSITE PRICING */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Website development pricing" title={<>A website plan for the stage you're <span className="text-[#A1845F] italic">building toward.</span></>} copy="A professional website should be planned around your requirements, content, functionality and intended customer experience."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{[
          ["Starter Website","₹14,999","A professional website foundation to present your services and essential business information."],
          ["Business Website","₹24,999","A broader website structure and more detailed presentation of your services or offerings."],
          ["Advanced Website","₹39,999","A more extensive website experience for projects that require additional functionality."],
        ].map(([name,price,desc],i)=><Reveal key={name} delay={i*.07}><article className={`relative flex h-full flex-col border p-7 ${i===1?"border-[#D8C4A9] bg-gradient-to-br from-[#E8D7C1] via-[#F4E9DA] to-[#DCC5A8] shadow-[0_18px_42px_-30px_rgba(11,42,82,.30)]":"border-[#E7DFD3] bg-gradient-to-br from-[#F5F1EA] via-white to-[#E9E1D6]"}`}><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">{i===0?"Website foundation":i===1?"For growing businesses":"Extended requirements"}</span><h3 className="mt-5 font-serif text-[25px]">{name}</h3><p className="mt-4 font-serif text-[34px] text-[#0B2A52]">Starting at {price}</p><p className="mt-4 flex-1 text-[12px] leading-[1.9] text-[#657889]">{desc}</p><Link href="/pricing" title={`View ${name} website development pricing at Sharp Rays`} className="mt-7 inline-flex items-center gap-2 border-t border-[#E7DFD3] pt-5 text-[10px] font-semibold uppercase tracking-[.13em] text-[#0B2A52]">Explore Website Pricing <ArrowUpRight size={14}/></Link></article></Reveal>)}</div>
        <p className="mt-5 text-[10px] leading-[1.8] text-[#9A8B78]">These are starting prices. Final pricing depends on project scope, features, content requirements and agreed deliverables.</p>
      </div>
    </section>

    {/* FAQ — keep the preferred static two-column FAQ design */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="nalasopara-faq-heading">
      <div className="mx-auto max-w-[1220px]">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A1845F]">Questions Before You Start</p>
          <h2 id="nalasopara-faq-heading" className="font-[var(--font-new-york)] text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] tracking-[-0.035em] text-[#0B2A52]">Frequently Asked <span className="text-[#A1845F]">Questions.</span></h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-[1.9] text-[#657889]">Clear answers about our services, process and how we help businesses build a stronger online presence.</p>
        </div>
        <div className="mt-12 grid gap-x-12 border-t border-[#E7DFD3] lg:grid-cols-2">
          {faqs.map(([q,a])=><div key={q}><article className="flex h-full gap-4 border-b border-[#E7DFD3] py-7 sm:py-8"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7DFD3] bg-white text-[#A1845F]"><MessageCircle size={17} strokeWidth={1.4}/></span><div><h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#0B2A52] sm:text-[21px]">{q}</h3><p className="mt-3 text-[12px] leading-[1.95] text-[#657889]">{a}</p></div></article></div>)}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden border border-[#E7DFD3] bg-gradient-to-br from-[#F1EAE0] via-[#FAF8F5] to-[#EEE4D7] px-7 py-12 text-[#0B2A52] shadow-[0_24px_70px_-55px_rgba(11,42,82,.22)] sm:px-12 sm:py-16 lg:px-16"><div className="pointer-events-none absolute -right-24 -top-36 h-[480px] w-[480px] rounded-full border border-[#B79A72]/30"/><div className="pointer-events-none absolute -right-5 -top-16 h-[330px] w-[330px] rounded-full border border-[#0B2A52]/[.07]"/><div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><Reveal><Eyebrow>Let's build something better</Eyebrow><h2 className="mt-6 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-.045em] sm:text-[50px]">Make your business easier to <span className="text-[#A1845F] italic">discover online.</span></h2><p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-[#657889]">Whether you need a professional website, better search visibility, consistent social media communication or a more structured digital marketing approach, start with a conversation about your business goals.</p></Reveal><Reveal delay={.1}><div className="border-t border-[#E7DFD3] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><p className="font-serif text-[23px] leading-snug">Tell us what you're building.</p><p className="mt-3 text-[11px] leading-[1.8] text-[#657889]">Share your business, website and the challenge you'd like to solve.</p><div className="mt-6 flex flex-col gap-3"><Link href="/contact?source=nalasopara-location" title="Book a free digital marketing audit with Sharp Rays" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] bg-[#0B2A52] px-5 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Book a Free Audit <ArrowUpRight size={15}/></Link><Link href="/services" title="Explore all Sharp Rays digital marketing services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] border border-[#D5C7B4] bg-white/80 px-5 text-[12px] font-medium text-[#0B2A52] transition hover:bg-white">Explore all services <ArrowRight size={15}/></Link></div></div></Reveal></div><div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7DFD3] pt-5 text-[9px] uppercase tracking-[.18em] text-[#9A8B78]"><span>SHARP RAYS — WE CREATE THE “OH, WOW.”!</span><span>NALASOPARA · MAHARASHTRA</span></div></div>
    </section>
  </main>;
}
