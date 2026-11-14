"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Search, MapPin, MapPinned, Store,
  FileSearch, Gauge, Network, ClipboardCheck, ChartNoAxesCombined,
  Check, MessageCircle, Target, ShieldCheck, Layers3, Compass,
  MousePointerClick, Sparkles, Navigation, Building2,
  MonitorSmartphone, Megaphone, BarChart3, Newspaper, Film, Video,
  FileText, Workflow, ShoppingBag, GraduationCap, HeartPulse, Factory,
  BriefcaseBusiness, UtensilsCrossed, Rocket, Globe2
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: MapPinned,
    title: "Local SEO & Google Maps",
    copy: "Improve the way your business information is organised for local discovery, including relevant categories, service details, location signals and website connections.",
    points: ["Google Business Profile guidance", "Local landing-page relevance", "Business information consistency"],
    tone: "from-[#E7EEF4] via-[#F5F7F8] to-[#DCE7EF]",
  },
  {
    icon: FileSearch,
    title: "Keyword & Search-Intent Research",
    copy: "Understand the phrases people use when looking for your products or services, then map those searches to useful pages rather than repeating keywords without purpose.",
    points: ["Service and location keyword research", "Search-intent mapping", "Page and topic recommendations"],
    tone: "from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]",
  },
  {
    icon: Gauge,
    title: "Technical & On-Page SEO",
    copy: "Review the technical foundations and page elements that help search engines access, interpret and understand your website.",
    points: ["Indexing and crawlability checks", "Titles, headings and metadata", "Mobile and page experience review"],
    tone: "from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]",
  },
  {
    icon: Network,
    title: "Content & Internal Linking",
    copy: "Build useful service and information pages that answer real customer questions and connect related topics through a clear website structure.",
    points: ["Content gap identification", "Service-page content planning", "Relevant internal-link structure"],
    tone: "from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]",
  },
  {
    icon: ClipboardCheck,
    title: "SEO Audit & Prioritisation",
    copy: "Identify issues and opportunities across your website, then organise recommendations by relevance, impact and implementation effort.",
    points: ["Website health review", "On-page and content checks", "Prioritised action plan"],
    tone: "from-[#F2E8E5] via-[#FAF3F0] to-[#EADBD6]",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Measurement & Improvement",
    copy: "Use available search and website data to understand visibility, engagement and enquiry journeys, and to decide what needs attention next.",
    points: ["Google Search Console review", "Organic traffic and page analysis", "Ongoing recommendations"],
    tone: "from-[#E7ECF2] via-[#F4F6F8] to-[#D8E1EA]",
  },
];


const allServices = [
  { title: "Search Engine Optimisation (SEO)", desc: "Improve search relevance through technical improvements, useful content, keyword research and local visibility.", icon: Search, href: "/locations/nalasopara/seo", tone: "from-[#E7EEF4] via-[#F5F7F8] to-[#DCE7EF]" },
  { title: "Website Development & Management", desc: "Create responsive websites that communicate your value, organise information and make enquiries easier.", icon: MonitorSmartphone, href: "/locations/nalasopara/website-development", tone: "from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]" },
  { title: "Social Media Marketing", desc: "Build a consistent brand presence through platform-aware strategy, content planning and creative communication.", icon: Megaphone, href: "/locations/nalasopara/social-media-marketing", tone: "from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]" },
  { title: "Performance Marketing", desc: "Plan campaigns around relevant audiences, creative testing, landing pages and conversion measurement.", icon: BarChart3, href: "/services/performance-marketing", tone: "from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]" },
  { title: "Digital PR & Media Relations", desc: "Shape brand stories, media communication and responsible public relations around genuine business updates.", icon: Newspaper, href: "/services/digital-pr-and-media-relations", tone: "from-[#F2E8E5] via-[#FAF3F0] to-[#EADBD6]" },
  { title: "AI Video & Creative", desc: "Explore AI-assisted video concepts and creative workflows for campaigns, products and brand storytelling.", icon: Film, href: "/services/ai-video-and-creative", tone: "from-[#E7ECF2] via-[#F4F6F8] to-[#D8E1EA]" },
  { title: "Professional Video Editing", desc: "Turn raw footage into polished Reels, Shorts, YouTube and promotional videos with considered pacing and sound.", icon: Video, href: "/services/video-editing", tone: "from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]" },
  { title: "Content Marketing", desc: "Create useful website pages, articles and resources around audience questions and relevant search intent.", icon: FileText, href: "/services/content-marketing", tone: "from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]" },
  { title: "AI Automation", desc: "Connect practical workflows for enquiry routing, lead follow-ups, notifications and repetitive business processes.", icon: Workflow, href: "/services/ai-automation", tone: "from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]" },
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

const localChallenges = [
  ["Similar shops, similar categories", "Where many nearby retailers offer comparable products, a business needs clear category, product and service information—not just repeated location keywords."],
  ["A crowded local search area", "Businesses around Tulinj Road and Achole may compete for overlapping local searches. Useful pages and accurate business details help explain what makes each offering relevant."],
  ["Customers searching with different intent", "A person looking for a nearby shop, a specific service or a product category may need different information. Search pages should match that intent."],
  ["Incomplete online business information", "Outdated hours, inconsistent contact details or unclear service areas can make it harder for customers to understand and contact a business."],
];

const faqs = [
  ["What do SEO services in Nalasopara include?", "SEO may include technical website checks, keyword and search-intent research, on-page optimisation, useful content planning, internal linking and local SEO improvements. The exact work depends on your website, business category and goals."],
  ["Can SEO help a shop around Tulinj Road or Achole?", "SEO can help a shop present its category, products, services and business details more clearly for relevant searches. In a crowded area, the goal is to build useful, specific information rather than rely on repeated location keywords."],
  ["Do you provide local SEO and Google Maps optimisation?", "Yes. Local SEO planning can include Google Business Profile guidance, business information consistency, local landing pages and relevant website content. Visibility depends on several factors, including relevance, distance and competition."],
  ["How long does SEO take to show results?", "SEO is an ongoing process and there is no fixed timeline or guaranteed ranking. Changes can take time to be crawled, indexed and reflected in search results. Competition, website condition and implementation all affect progress."],
  ["Do I need a website for local SEO?", "A website gives you space to explain services, categories, locations and customer information in more depth. A Google Business Profile can support local discovery, while a well-structured website helps build broader search relevance."],
  ["Can you work on SEO for Nalasopara East and West?", "SEO can be planned around the actual areas a business serves, including Nalasopara East and West. Location references should be useful and accurate, and should not create thin or repetitive doorway pages."],
  ["What is the difference between local SEO and regular SEO?", "Local SEO focuses on searches with geographic intent and business discovery, while broader SEO can target informational, product and service searches across wider areas. Many local businesses benefit from a considered combination."],
  ["How much does a website cost?", "Sharp Rays website packages have starting prices of ₹14,999, ₹24,999 and ₹39,999. The appropriate package depends on pages, functionality, content and project requirements. See the pricing page for details."],
  ["Do you guarantee first-page Google rankings?", "No responsible SEO provider can guarantee a specific Google position. SEO work focuses on improving technical quality, relevance, content and local information while measuring progress transparently."],
  ["How can I request an SEO audit?", "Contact Sharp Rays with your website URL, business category and the main locations you serve. This gives us context to discuss a relevant review and possible next steps."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.68, delay: reduced ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#A1845F]"><span className="h-px w-8 bg-[#D5C7B4]" />{children}</div>;
}

function SectionTitle({ eyebrow, title, copy, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
    <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[34px] font-normal leading-[1.12] tracking-[-.045em] text-[#0B2A52] sm:text-[43px] lg:text-[50px]">{title}</h2>
    {copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] text-[#657889] ${center ? "mx-auto" : ""}`}>{copy}</p>}
  </div>;
}

export default function NalasoparaSEOPageClient() {
  return <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
    {/* HERO */}
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#FAF8F5_0%,#F8F6F1_52%,#FFFEFC_100%)] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 78% 24%, rgba(198,167,122,.25), transparent 32%), radial-gradient(circle at 12% 90%, rgba(215,199,174,.28), transparent 34%), radial-gradient(circle at 50% 0%, rgba(255,255,255,.95), transparent 42%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-16 -z-10 h-[620px] w-[620px] rounded-full border border-[#0B2A52]/[.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-36 -z-10 h-[430px] w-[430px] rounded-full border border-[#B79A72]/30" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <Reveal>
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7DFD3] bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-[#A1845F] shadow-sm"><MapPin size={12} /> SEO services · Nalasopara, Maharashtra</div>
            <h1 className="mt-8 font-[var(--font-new-york),Georgia,serif] text-[44px] font-normal leading-[1.04] tracking-[-.05em] sm:text-[58px] lg:text-[68px]">SEO services for <span className="bg-gradient-to-r from-[#A1845F] via-[#B79A72] to-[#8D704D] bg-clip-text italic text-transparent">Nalasopara businesses.</span></h1>
            <p className="mt-7 max-w-[620px] text-[15px] leading-[1.95] text-[#526779]">Build stronger search visibility with technical SEO, useful content, local search strategy and a website structure that helps customers understand what your business offers. Sharp Rays plans SEO around your services, audience and the areas you genuinely serve.</p>
            <p className="mt-3 max-w-[580px] text-[12px] leading-[1.9] text-[#9A8B78]">Local search context for businesses around Nalasopara East, West, Tulinj Road, Achole and the station area.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact?source=nalasopara-seo" title="Request a free SEO audit for your Nalasopara business" className="group inline-flex min-h-12 items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Request a Free SEO Audit <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              <Link href="#seo-services" title="Explore SEO services and optimisation areas in Nalasopara" className="inline-flex min-h-12 items-center gap-3 rounded-[9px] border border-[#D5C7B4] bg-white/75 px-6 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#B79A72] hover:bg-[#FAF8F4]">Explore SEO Services <ArrowRight size={15}/></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E7DFD3] pt-6 text-[10px] uppercase tracking-[.15em] text-[#657889]"><span>Technical foundations</span><span>Local relevance</span><span>Useful content</span></div>
          </div>
        </Reveal>
        <Reveal delay={.12}>
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-5 border border-[#E6DED2]/70"/>
            <div className="relative border border-white/80 bg-white/80 p-5 shadow-[0_35px_90px_-55px_rgba(38,59,80,.35)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-4"><div><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">Local search strategy</span><p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[22px]">Be relevant. Be understood.</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F6F1] text-[#A1845F]"><Compass size={19}/></div></div>
              <div className="mt-6 space-y-3">
                {[
                  [MapPinned,"Local discovery","Business details & Maps"],
                  [Search,"Search relevance","Keywords & intent"],
                  [Layers3,"Website structure","Pages & internal links"],
                  [ChartNoAxesCombined,"Measure progress","Search data & insights"],
                ].map(([Icon,title,sub]: any,i)=><div key={title} className={`flex items-center gap-4 border border-white/80 bg-gradient-to-r ${["from-[#E7EEF4] to-[#F6F8F9]","from-[#F1E6D8] to-[#FBF7F1]","from-[#E9E7F1] to-[#F8F6FA]","from-[#E4EEE8] to-[#F5F8F4]"][i]} p-4`}><span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/80 bg-white/75 text-[#A1845F]"><Icon size={19} strokeWidth={1.4}/></span><div><p className="font-[var(--font-new-york),Georgia,serif] text-[18px]">{title}</p><p className="mt-1 text-[10px] text-[#8D8A83]">{sub}</p></div><ArrowUpRight size={15} className="ml-auto text-[#A1845F]"/></div>)}
              </div>
              <div className="mt-4 flex items-center gap-3 border border-[#E7DFD3] bg-[#FAF8F5] p-4"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#A1845F]"><MousePointerClick size={17}/></div><div><p className="text-[11px] font-semibold">A clearer local search journey</p><p className="mt-1 text-[10px] text-[#9A8B78]">Relevant pages. Accurate details. Useful next steps.</p></div></div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden border border-[#E7DFD3] bg-white/95 px-5 py-4 shadow-[0_15px_40px_-30px_rgba(38,59,80,.4)] sm:block"><p className="text-[9px] uppercase tracking-[.18em] text-[#A1845F]">Sharp Rays</p><p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[17px]">Search with purpose.</p></div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* DIRECT ANSWER — 50 words */}
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-20">
        <Reveal><Eyebrow>SEO in Nalasopara</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[32px] leading-[1.15] tracking-[-.04em] sm:text-[40px]">Search visibility built on <span className="italic text-[#A1845F]">relevance.</span></h2></Reveal>
        <Reveal delay={.08}><div className="border-l-2 border-[#D5C7B4] pl-6 sm:pl-8"><p className="text-[15px] leading-[2] text-[#526779]">Sharp Rays provides SEO services for Nalasopara businesses, covering technical optimisation, keyword research, useful website content and local SEO. We help businesses improve how their services and locations are presented in search, including Google Maps foundations for relevant local discovery around Tulinj Road and Achole.</p></div></Reveal>
      </div>
    </section>

    {/* LOCAL SEARCH CHALLENGE */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal><SectionTitle eyebrow="The local search landscape" title={<>When nearby businesses look similar, <span className="italic text-[#A1845F]">clarity matters.</span></>} copy="In busy retail pockets such as Tulinj Road and Achole, several businesses may appear relevant to the same broad category. A useful SEO strategy gives search engines and customers clearer information about each business, its offer and the area it serves."/></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {localChallenges.map(([title,copy],i)=><Reveal key={title} delay={(i%2)*.06}><article className={`relative h-full overflow-hidden border border-white/80 bg-gradient-to-br ${["from-[#E7EEF4] via-[#F4F7F9] to-[#DCE7EF]","from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]","from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]","from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]"][i]} p-7 shadow-[0_14px_36px_-28px_rgba(11,42,82,.25)] sm:p-8`}><div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#A1845F]/15"/><div className="relative"><span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#A1845F]">Search consideration</span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[24px] leading-tight">{title}</h3><p className="mt-3 max-w-[480px] text-[12px] leading-[1.95] text-[#526779]">{copy}</p></div></article></Reveal>)}
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section id="seo-services" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal><SectionTitle eyebrow="SEO services" title={<>A complete foundation for <span className="italic text-[#A1845F]">sustainable search.</span></>} copy="SEO is not one isolated change. It brings together technical access, page relevance, useful information and ongoing review."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service,i)=>{const Icon=service.icon;return <Reveal key={service.title} delay={(i%3)*.05}><article className={`group flex h-full flex-col border border-white/80 bg-gradient-to-br ${service.tone} p-6 shadow-[0_14px_36px_-28px_rgba(11,42,82,.28)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_22px_50px_-34px_rgba(13,36,68,.3)] sm:p-7`}><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center border border-white/80 bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.35}/></span><ArrowUpRight size={17} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-7 font-[var(--font-new-york),Georgia,serif] text-[23px] leading-[1.2]">{service.title}</h3><p className="mt-3 flex-1 text-[12px] leading-[1.95] text-[#526779]">{service.copy}</p><ul className="mt-5 space-y-2 border-t border-[#D5C7B4]/60 pt-5">{service.points.map(point=><li key={point} className="flex items-start gap-2 text-[10px] text-[#657889]"><Check size={13} className="mt-0.5 shrink-0 text-[#A1845F]"/>{point}</li>)}</ul></article></Reveal>})}
        </div>
      </div>
    </section>

    {/* MAPS */}
    <section className="bg-gradient-to-br from-[#FFFEFC] via-[#FAF8F5] to-[#EEE8DD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><div className="relative overflow-hidden border border-[#E7DFD3] bg-gradient-to-br from-[#E7EEF4] via-[#F5F7F8] to-[#E8E0D5] p-7 sm:p-10"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#A1845F]/20"/><div className="relative"><div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">Local discovery</span><MapPin size={20} className="text-[#A1845F]"/></div><div className="mt-9 grid grid-cols-2 gap-3"><div className="border border-white/80 bg-white/75 p-4"><Store size={20} className="text-[#A1845F]"/><p className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[19px]">Tulinj Road</p><p className="mt-1 text-[10px] text-[#657889]">Retail search context</p></div><div className="border border-white/80 bg-white/75 p-4"><Building2 size={20} className="text-[#A1845F]"/><p className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[19px]">Achole</p><p className="mt-1 text-[10px] text-[#657889]">Local business context</p></div></div><div className="mt-4 border border-white/80 bg-white/75 p-4"><div className="flex items-center gap-3"><Navigation size={18} className="text-[#A1845F]"/><div><p className="text-[11px] font-semibold">Relevant location information</p><p className="mt-1 text-[10px] text-[#657889]">Accurate categories, service areas and contact details</p></div></div></div></div></div></Reveal>
        <Reveal delay={.08}><div><SectionTitle eyebrow="Local SEO & Google Maps" title={<>Help nearby customers understand <span className="italic text-[#A1845F]">what you offer.</span></>} copy="Local SEO is especially relevant when customers search for a category, product or service near them. The work should start with accurate business information and a clear understanding of the places you actually serve."/><div className="mt-8 space-y-4">{[["Google Business Profile","Review categories, services, contact details, hours and other information for accuracy."],["Local landing-page relevance","Create genuinely useful location content where it helps customers understand service coverage."],["Consistent business details","Keep important business information clear and consistent across relevant online properties."],["Review and measurement","Use available search and profile insights to identify questions, visibility patterns and next improvements."]].map(([title,copy])=><div key={title} className="border-b border-[#E7DFD3] pb-4"><h3 className="text-[13px] font-semibold">{title}</h3><p className="mt-1 text-[11px] leading-[1.85] text-[#657889]">{copy}</p></div>)}</div></div></Reveal>
      </div>
    </section>

    {/* PROCESS */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Our SEO process" title={<>A considered route from review to <span className="italic text-[#A1845F]">continuous improvement.</span></>} copy="The priorities depend on your website, category, competition and the information already available."/></Reveal>
        <div className="mt-12 grid gap-0 border-y border-[#E7DFD3] md:grid-cols-5">{[["Discover","Understand the business, services, target audience and service areas.","Business context"],["Audit","Review technical health, indexability, page content and local information.","Current state"],["Prioritise","Identify the most relevant fixes and opportunities for the available scope.","Action plan"],["Optimise","Implement agreed technical, on-page, content and local SEO work.","Improvements"],["Review","Use available data to evaluate progress and identify next steps.","Ongoing direction"]].map(([title,copy,output],i)=><Reveal key={title} delay={i*.045}><article className={`flex h-full flex-col py-7 md:px-5 ${i===0?"md:pl-0":""} ${i!==4?"md:border-r md:border-[#E7DFD3]":""}`}><h3 className="font-[var(--font-new-york),Georgia,serif] text-[23px]">{title}</h3><p className="mt-3 min-h-[100px] text-[11px] leading-[1.9] text-[#657889]">{copy}</p><div className="mt-6 border-t border-[#E7DFD3] pt-4 text-[9px] uppercase tracking-[.15em] text-[#A1845F]">{output}</div></article></Reveal>)}</div>
      </div>
    </section>

    {/* TRANSPARENT PRICING — supplied final website prices */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Transparent website pricing" title={<>Clear starting prices. <span className="italic text-[#A1845F]">Defined scope.</span></>} copy="For businesses reviewing their website as part of a wider SEO foundation, these are the current website package starting prices. SEO scope is discussed separately according to the work required."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Starter Website","₹14,999","A professional foundation for presenting essential business and service information."],
            ["Business Website","₹24,999","A broader website structure for businesses with more detailed service and content needs."],
            ["Advanced Website","₹39,999","An extended website experience for projects requiring additional pages or functionality."],
          ].map(([name,price,copy],i)=><Reveal key={name} delay={i*.06}><article className={`relative flex h-full flex-col border p-7 ${i===1?"border-[#D8C4A9] bg-gradient-to-br from-[#E8D7C1] via-[#F4E9DA] to-[#DCC5A8] shadow-[0_18px_42px_-30px_rgba(11,42,82,.30)]":"border-[#E7DFD3] bg-gradient-to-br from-[#F5F1EA] via-white to-[#E9E1D6]"}`}><span className="text-[9px] uppercase tracking-[.2em] text-[#A1845F]">{i===0?"Website foundation":i===1?"For growing businesses":"Extended requirements"}</span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[25px]">{name}</h3><p className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[35px]">{price}</p><p className="mt-4 flex-1 text-[12px] leading-[1.9] text-[#657889]">{copy}</p><Link href="/pricing" title={`View ${name} website package details and pricing`} className="mt-7 inline-flex items-center gap-2 border-t border-[#D5C7B4]/70 pt-5 text-[10px] font-semibold uppercase tracking-[.13em]">View pricing details <ArrowUpRight size={14}/></Link></article></Reveal>)}
        </div>
        <p className="mt-5 text-[10px] leading-[1.8] text-[#9A8B78]">Prices shown are website package starting prices, not monthly SEO retainers. Final website pricing depends on scope, features, content and agreed deliverables.</p>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionTitle eyebrow="Why Sharp Rays" title={<>SEO with clarity, not <span className="italic text-[#A1845F]">empty promises.</span></>} copy="Good SEO work should be explainable. Priorities, implementation and progress should be connected to the website and the business objective."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{[[Target,"Strategy before activity","Start with the audience, service and search intent before choosing SEO tasks."],[Layers3,"Connected website structure","Align service pages, useful content and internal links so related information is easy to navigate."],[ShieldCheck,"Transparent scope","Keep recommendations, deliverables and expectations clear. No guaranteed ranking claims."],[Sparkles,"Useful communication","Create content that answers customer questions and explains the business accurately."]].map(([Icon,title,copy]:any,i)=><Reveal key={title} delay={i*.05}><article className="border-b border-[#E7DFD3] py-6"><Icon size={22} strokeWidth={1.3} className="text-[#A1845F]"/><h3 className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[22px]">{title}</h3><p className="mt-2 text-[12px] leading-[1.9] text-[#657889]">{copy}</p></article></Reveal>)}</div>
      </div>
    </section>


    {/* ALL SHARP RAYS SERVICES */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal><SectionTitle eyebrow="Explore all our services" title={<>More ways to build your <span className="italic text-[#A1845F]">digital presence.</span></>} copy="SEO is one part of a connected digital strategy. Explore the wider Sharp Rays services that can support your website, marketing, creative communication and business workflows."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service,i)=>{const Icon=service.icon;return <Reveal key={service.title} delay={(i%3)*.045}><Link href={service.href} title={`Explore ${service.title} services at Sharp Rays`} className={`group relative flex h-full min-h-[230px] flex-col overflow-hidden border border-white/80 bg-gradient-to-br ${service.tone} p-6 shadow-[0_14px_36px_-28px_rgba(11,42,82,.28)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_22px_50px_-34px_rgba(13,36,68,.3)] sm:p-7`}><span className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full border border-[#A1845F]/15 transition-transform duration-500 group-hover:scale-125"/><div className="relative flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center border border-white/80 bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.35}/></span><ArrowUpRight size={17} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[22px] leading-tight text-[#0B2A52]">{service.title}</h3><p className="relative mt-3 flex-1 text-[11px] leading-[1.9] text-[#526779]">{service.desc}</p><span className="relative mt-5 inline-flex items-center gap-2 border-t border-[#D5C7B4]/60 pt-4 text-[9px] font-semibold uppercase tracking-[.14em] text-[#0B2A52]">Explore service <ArrowUpRight size={13}/></span></Link></Reveal>})}
        </div>
        <div className="mt-8"><Link href="/services" title="Explore all digital marketing and creative services offered by Sharp Rays" className="inline-flex min-h-12 items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Explore All Services <ArrowUpRight size={15}/></Link></div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="bg-gradient-to-br from-[#FFFEFC] via-[#FAF8F5] to-[#EEE8DD] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal><SectionTitle eyebrow="Industries we can support" title={<>Digital thinking shaped around your <span className="italic text-[#A1845F]">industry.</span></>} copy="Different industries have different customer questions, buying journeys and information needs. Explore how Sharp Rays approaches digital communication across these sectors."/></Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry,i)=>{const Icon=industry.icon;const tones=["from-[#EADBC8] via-[#F7F0E7] to-[#DCC7AE]","from-[#E3EAF0] via-[#F2F5F7] to-[#D2DEE8]","from-[#E6E2EF] via-[#F3F0F7] to-[#D8D1E6]","from-[#E1EBE4] via-[#F1F6F1] to-[#CFDFD4]","from-[#F0E2DD] via-[#F8F0ED] to-[#E5D0C8]"];return <Reveal key={industry.name} delay={(i%5)*.035}><Link href={industry.href} title={`Explore digital marketing solutions for ${industry.name} businesses at Sharp Rays`} className={`group relative flex h-full min-h-[220px] flex-col overflow-hidden border border-[#E6DED2]/70 bg-gradient-to-br ${tones[i%tones.length]} p-5 shadow-[0_12px_35px_-30px_rgba(13,36,68,.30)] transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_22px_48px_-30px_rgba(11,42,82,.20)]`}><span className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full border border-[#A1845F]/15 transition-transform duration-500 group-hover:scale-125"/><div className="relative flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center border border-white/80 bg-white/75 text-[#0B2A52] shadow-sm"><Icon size={21} strokeWidth={1.35}/></span><ArrowUpRight size={17} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="relative mt-7 font-[var(--font-new-york),Georgia,serif] text-[19px] leading-tight text-[#0B2A52]">{industry.name}</h3><p className="relative mt-3 flex-1 text-[10px] leading-[1.85] text-[#526779]">{industry.text}</p><span className="relative mt-5 inline-flex items-center gap-2 border-t border-[#D5C7B4]/60 pt-4 text-[9px] font-semibold uppercase tracking-[.14em] text-[#0B2A52]">Explore industry <ArrowUpRight size={13}/></span></Link></Reveal>})}
        </div>
      </div>
    </section>

    {/* FAQ — single FAQPage schema is added in route */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="nalasopara-seo-faq-heading">
      <div className="mx-auto max-w-[1220px]">
        <Reveal><div className="mx-auto max-w-[800px] text-center"><div className="flex justify-center"><Eyebrow>Questions before you start</Eyebrow></div><h2 id="nalasopara-seo-faq-heading" className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[34px] font-normal leading-[1.15] tracking-[-.035em] text-[#0B2A52] sm:text-[43px] lg:text-[50px]">Frequently Asked <span className="text-[#A1845F]">Questions.</span></h2><p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-[1.9] text-[#657889]">Answers about local SEO, Google Maps, website optimisation and getting started in Nalasopara.</p></div></Reveal>
        <div className="mt-12 grid gap-x-12 border-t border-[#E7DFD3] lg:grid-cols-2">
          {faqs.map(([q,a])=><Reveal key={q}><article className="flex h-full gap-4 border-b border-[#E7DFD3] py-7 sm:py-8"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7DFD3] bg-white text-[#A1845F]"><MessageCircle size={17} strokeWidth={1.4}/></span><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[19px] leading-[1.4] text-[#0B2A52] sm:text-[21px]">{q}</h3><p className="mt-3 text-[12px] leading-[1.95] text-[#657889]">{a}</p></div></article></Reveal>)}
        </div>
      </div>
    </section>

    {/* RELATED LOCATION SEO PAGES */}
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px] border-y border-[#E7DFD3] py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><Eyebrow>Explore related location pages</Eyebrow><p className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[23px]">More local SEO information.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold"><Link href="/locations/vasai-road/seo" title="Explore SEO services in Vasai Road" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Vasai Road SEO <ArrowUpRight size={14}/></Link><Link href="/locations/virar/seo" title="Explore SEO services in Virar" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Virar SEO <ArrowUpRight size={14}/></Link><Link href="/locations/nalasopara" title="Return to the Nalasopara digital marketing location page" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Nalasopara <ArrowUpRight size={14}/></Link><Link href="/locations" title="Browse all Sharp Rays location pages" className="inline-flex items-center gap-2 hover:text-[#A1845F]">All locations <ArrowUpRight size={14}/></Link></div></div>
        <p className="mt-5 text-[10px] text-[#9A8B78]">Explore the main <Link href="/services/search-engine-optimization" title="Explore the Sharp Rays SEO service pillar page" className="font-semibold text-[#0B2A52] underline decoration-[#D5C7B4] underline-offset-4">SEO service overview</Link> for a broader view of our search optimisation approach.</p>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden border border-[#E7DFD3] bg-gradient-to-br from-[#F1EAE0] via-[#FAF8F5] to-[#EEE4D7] px-7 py-12 shadow-[0_24px_70px_-55px_rgba(11,42,82,.22)] sm:px-12 sm:py-16 lg:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-36 h-[480px] w-[480px] rounded-full border border-[#B79A72]/30"/>
        <div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <Reveal><Eyebrow>Start with a clearer search strategy</Eyebrow><h2 className="mt-6 max-w-[700px] font-[var(--font-new-york),Georgia,serif] text-[38px] leading-[1.08] tracking-[-.045em] sm:text-[50px]">Help the right customers <span className="italic text-[#A1845F]">find your business.</span></h2><p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-[#657889]">Share your website, business category and service area. We can discuss the SEO foundations and improvements that may be relevant to your goals.</p></Reveal>
          <Reveal delay={.1}><div className="border-t border-[#E7DFD3] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><p className="font-[var(--font-new-york),Georgia,serif] text-[23px]">Let's review your SEO.</p><p className="mt-3 text-[11px] leading-[1.8] text-[#657889]">A useful conversation starts with your website and your business objectives.</p><div className="mt-6 flex flex-col gap-3"><Link href="/contact?source=nalasopara-seo" title="Request a free SEO audit from Sharp Rays" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] bg-[#0B2A52] px-5 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Request a Free SEO Audit <ArrowUpRight size={15}/></Link><Link href="/services/search-engine-optimization" title="Read the complete Sharp Rays SEO service overview" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[9px] border border-[#D5C7B4] bg-white/80 px-5 text-[12px] font-medium text-[#0B2A52] transition hover:bg-white">Explore SEO Services <ArrowRight size={15}/></Link></div></div></Reveal>
        </div>
        <div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7DFD3] pt-5 text-[9px] uppercase tracking-[.18em] text-[#9A8B78]"><span>SHARP RAYS — WE CREATE THE “OH, WOW.”!</span><span>NALASOPARA · SEO SERVICES</span></div>
      </div>
    </section>
  </main>;
}
