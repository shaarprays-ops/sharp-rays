"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, MessageCircle, MapPin, MonitorSmartphone,
  Smartphone, Layout, ShoppingCart, FileText, Palette, Search, Settings2,
  ShieldCheck, Gauge, ClipboardCheck, Code2, Store, HeartPulse, GraduationCap,
  Building2, UtensilsCrossed, BriefcaseBusiness, Sparkles, Factory, Rocket,
  Globe2, ShoppingBag, Megaphone, BarChart3, Newspaper, Film, Video, Workflow,
  Layers3, CalendarCheck, Phone, MousePointerClick, Eye, Laptop, BookOpen,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.68, delay: reduced ? 0 : delay, ease }}>{children}</motion.div>;
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#A1845F]"><span className="h-px w-8 bg-[#D5C7B4]" />{children}</div>;
}
function SectionTitle({ eyebrow, title, copy, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}><div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[34px] font-normal leading-[1.12] tracking-[-.045em] text-[#0B2A52] sm:text-[43px] lg:text-[50px]">{title}</h2>{copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] text-[#657889] ${center ? "mx-auto" : ""}`}>{copy}</p>}</div>;
}

const websiteServices = [
  { icon: Layout, title: "Business Website Development", copy: "A structured website that introduces your business, explains your services and gives visitors clear ways to get in touch.", points: ["Business overview and service pages", "Contact and enquiry pathways", "Clear content hierarchy"], tone: "from-[#E7EEF4] via-[#F5F7F8] to-[#DCE7EF]" },
  { icon: Palette, title: "Website Design & UI/UX", copy: "Thoughtful layouts, typography, navigation and interface details shaped around your visitors and the information they need.", points: ["Visual direction and page layouts", "Navigation and user journeys", "Consistent interface elements"], tone: "from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]" },
  { icon: Smartphone, title: "Responsive Website Development", copy: "Layouts that adapt to mobile phones, tablets and desktop screens while keeping content readable and interactions practical.", points: ["Mobile-first layout planning", "Responsive navigation", "Cross-device testing"], tone: "from-[#E9E7F1] via-[#F6F3F8] to-[#DED9EA]" },
  { icon: ShoppingCart, title: "Ecommerce Website Development", copy: "Organised online stores with product categories, product pages, shopping journeys and relevant purchasing functionality.", points: ["Product and category structure", "Shopping experience planning", "Checkout-related functionality"], tone: "from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]" },
  { icon: MousePointerClick, title: "Landing Page Development", copy: "Focused pages for an individual service, campaign, product or launch, with one clear proposition and relevant next action.", points: ["Campaign-focused messaging", "Clear calls to action", "Enquiry-oriented page structure"], tone: "from-[#F2E8E5] via-[#FAF3F0] to-[#EADBD6]" },
  { icon: Layers3, title: "Website Redesign", copy: "Improve an existing website's layout, content structure, navigation, responsiveness and overall visitor experience.", points: ["Review existing pages", "Identify usability gaps", "Plan improvements before rebuild"], tone: "from-[#E7ECF2] via-[#F4F6F8] to-[#D8E1EA]" },
  { icon: Search, title: "Website SEO Foundations", copy: "Build important search considerations into the website structure and page setup instead of leaving them until after launch.", points: ["Metadata and heading hierarchy", "URLs and internal linking", "Sitemap and canonical considerations"], tone: "from-[#F1E6D8] via-[#FBF6EF] to-[#E9D9C6]" },
  { icon: Settings2, title: "Website Maintenance & Management", copy: "Keep a website maintained through agreed updates, content changes, technical checks and ongoing improvements.", points: ["Content and page updates", "Technical checks", "Scope-based ongoing support"], tone: "from-[#E4EEE8] via-[#F3F7F3] to-[#D5E4DA]" },
];
const websiteTypes = [
  ["Business Websites", "For companies, local businesses, service providers and professional brands that need a credible online presence.", "from-[#E7EEF4] to-[#F5F7F8]"],
  ["Service-Based Websites", "For businesses with multiple offerings that need dedicated pages explaining each service clearly.", "from-[#F1E6D8] to-[#FBF6EF]"],
  ["Ecommerce Websites", "For businesses that want to present and sell products through an organised online store.", "from-[#E9E7F1] to-[#F6F3F8]"],
  ["Educational Websites", "For coaching classes, training institutes and education providers sharing courses and admission information.", "from-[#E4EEE8] to-[#F3F7F3]"],
  ["Healthcare Websites", "For clinics and healthcare providers presenting services, practitioner details and appointment enquiries.", "from-[#F2E8E5] to-[#FAF3F0]"],
  ["Portfolio Websites", "For professionals and creative businesses that need to showcase work, capabilities and projects.", "from-[#E7ECF2] to-[#F4F6F8]"],
  ["Landing Pages", "For specific campaigns, services, launches and enquiry-focused marketing activities.", "from-[#F1E6D8] to-[#FBF6EF]"],
  ["Custom Websites", "For projects requiring specific layouts, functionality, integrations or business workflows.", "from-[#E4EEE8] to-[#F3F7F3]"],
];
const industries = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", icon: Sparkles, text: "Showcase treatments, services, business information, appointment options and brand identity." },
  { name: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag, text: "Organise product categories, product information, discovery and purchasing pathways." },
  { name: "Education", href: "/industries/education", icon: GraduationCap, text: "Present courses, subjects, faculty information, learning formats and admission enquiries." },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse, text: "Develop clear, accessible pages for services, practitioners and appointment information." },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, text: "Communicate capabilities, product categories, specifications, catalogues and B2B enquiries." },
  { name: "Professional Services", href: "/industries/professional-services", icon: BriefcaseBusiness, text: "Present services, expertise, processes and contact options through an organised website." },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2, text: "Organise property information, project details, images, locations and enquiry pathways." },
  { name: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed, text: "Showcase menus, food offerings, restaurant information, location and contact details." },
  { name: "Startups", href: "/industries/startup", icon: Rocket, text: "Explain the product, business model, value proposition and key offerings clearly." },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Globe2, text: "Present destinations, accommodation, experiences, packages and booking information." },
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
const faqs = [
  ["Does Sharp Rays provide website development in Nalasopara?", "Sharp Rays offers website design and development services for businesses targeting Nalasopara and surrounding areas. Solutions can include business websites, service websites, ecommerce websites, landing pages, redesigns and website management."],
  ["How much does website development cost in Nalasopara?", "Sharp Rays website development packages start at ₹14,999, with additional starting packages at ₹24,999 and ₹39,999. Final pricing depends on the website's scope, number of pages, functionality and content requirements."],
  ["Can you build a website for a clinic in Nalasopara?", "Yes. A clinic website can include practitioner information, service details, treatment information, contact details and appointment enquiry options, depending on the clinic's requirements."],
  ["Can you develop a website for coaching classes?", "Yes. A coaching class website can present courses, subjects, learning formats, faculty details, admission information and enquiry options for students and parents."],
  ["Will my website work on mobile phones?", "Responsive website development focuses on making the website adapt to mobile phones, tablets and desktop screens. The final experience should be tested across relevant devices and browsers."],
  ["Can you redesign my existing website?", "Yes. An existing website can be reviewed for design, navigation, mobile experience, content structure and technical requirements before planning a redesign."],
  ["Will my website be SEO-friendly?", "We consider SEO foundations during development, including page structure, metadata, headings, internal linking, mobile responsiveness and technical accessibility. SEO performance also depends on content quality, competition and ongoing optimisation."],
  ["Can you add WhatsApp and enquiry forms to my website?", "Yes. WhatsApp contact options and enquiry forms can be included where appropriate to the website's requirements and agreed functionality."],
  ["Do you provide website maintenance?", "Website maintenance and management can be discussed according to the platform, technical requirements, update frequency and agreed scope."],
  ["Which industries do you develop websites for?", "Website requirements can be planned for beauty and wellness, ecommerce, education, healthcare, manufacturing, professional services, real estate, restaurants, startups and travel and hospitality."],
  ["How long does it take to develop a website?", "The timeline depends on the website's size, design requirements, content readiness, functionality and feedback process. A realistic timeline can be discussed after reviewing the project requirements."],
  ["How can I get a website development quote?", "Share your business details, website requirements and any existing website or reference examples. Sharp Rays can review your requirements and discuss a suitable project scope and quote."],
];

export default function NalasoparaWebsiteDevelopmentPageClient() {
  const featureCards = [
    [Smartphone, "Mobile-first layouts", "A responsive experience that keeps important information readable and accessible."],
    [BookOpen, "Clear navigation", "Help visitors find services, products and business information without confusion."],
    [Phone, "Contact integration", "Make it simple to call, message or reach your business through suitable channels."],
    [FileText, "Enquiry forms", "Collect the information your team needs to understand incoming enquiries."],
    [Layers3, "Dedicated pages", "Give important services and products the space and detail they deserve."],
    [Search, "SEO foundations", "Build descriptive URLs, metadata, headings and internal links into the structure."],
    [BarChart3, "Analytics setup", "Understand website interactions with suitable analytics and conversion tracking."],
    [ShieldCheck, "Technical foundations", "Consider security, maintenance and platform requirements from the start."],
  ] as const;

  const processSteps = [
    ["01", "Discover", "Understand your business, audience, goals, content and required functionality."],
    ["02", "Structure", "Plan the sitemap, page hierarchy, navigation and important customer journeys."],
    ["03", "Design", "Shape the visual direction, layouts, typography and interface details."],
    ["04", "Develop", "Build the agreed website experience and implement its required functionality."],
    ["05", "Prepare", "Add content and SEO foundations, then test the experience across relevant devices."],
    ["06", "Launch & improve", "Prepare the website for launch and identify future improvements within the agreed scope."],
  ] as const;

  const reasons = [
    ["Business-focused planning", "Start with the business objective and target audience, not a template chosen at random."],
    ["Design with purpose", "Use layout, hierarchy and navigation to make information easier to understand."],
    ["Mobile-first thinking", "Consider how customers will use the website on smartphones and other devices."],
    ["SEO-aware development", "Build important search foundations into the website from the beginning."],
    ["Clear communication", "Keep requirements, deliverables and project scope understandable."],
    ["Connected digital services", "Bring website development together with SEO, social media and content strategy when useful."],
  ] as const;

  return (
    <main className="overflow-hidden bg-[#FBFCFE] text-[#102B4E]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_20%,rgba(198,167,122,.22),transparent_32%),radial-gradient(ellipse_at_8%_82%,rgba(190,211,228,.42),transparent_34%),linear-gradient(135deg,#F7F9FC_0%,#FFFFFF_55%,#F8F5F0_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 -z-10 h-[620px] w-[620px] rounded-full border border-[#0B2A52]/[.07]" />
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <div className="max-w-[700px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EC] bg-white/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#8B704F] shadow-[0_8px_28px_-22px_rgba(11,42,82,.3)]">
                <MapPin size={13} /> Website development · Nalasopara
              </div>
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[.2em] text-[#73869A]">A better website starts with a clearer idea.</p>
              <h1 className="mt-4 max-w-[720px] font-[var(--font-new-york),Georgia,serif] text-[43px] font-normal leading-[1.04] tracking-[-.055em] sm:text-[58px] lg:text-[70px]">
                Websites built to make your business <span className="bg-gradient-to-r from-[#A1845F] via-[#B79A72] to-[#8B704F] bg-clip-text italic text-transparent">stand out.</span>
              </h1>
              <p className="mt-7 max-w-[610px] text-[14px] leading-[2] text-[#5C7084] sm:text-[15px]">
                Sharp Rays creates responsive, mobile-friendly websites for businesses serving Nalasopara East, Nalasopara West and surrounding areas. Bring your services, brand story and customer enquiries together in one considered digital experience.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact?source=nalasopara-website-development" title="Get a free website development quote from Sharp Rays for your Nalasopara business" className="group inline-flex min-h-12 items-center gap-3 rounded-[9px] bg-[#122847] px-6 text-[12px] font-semibold text-white shadow-[0_14px_30px_-18px_rgba(18,40,71,.6)] transition hover:-translate-y-0.5 hover:bg-[#1B3A63]">
                  Discuss your website <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="#website-services" title="Explore website design and development services in Nalasopara" className="inline-flex min-h-12 items-center gap-3 rounded-[9px] border border-[#D8E1E8] bg-white/80 px-6 text-[12px] font-semibold text-[#122847] transition hover:border-[#B79A72] hover:bg-white">
                  Explore capabilities <ArrowRight size={15} />
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DDE5EB] pt-6 text-[9px] font-semibold uppercase tracking-[.16em] text-[#75879A]">
                <span>Thoughtful design</span><span>Responsive development</span><span>SEO-aware structure</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-br from-[#E5EDF4] via-[#F6F1E9] to-[#E8E3F0] blur-xl opacity-80" />
              <div className="relative rounded-[25px] border border-white bg-white/90 p-3 shadow-[0_35px_100px_-50px_rgba(16,43,78,.35)] sm:p-4">
                <div className="rounded-[18px] bg-[#F5F7FA] p-4 sm:p-5">
                  <div className="flex items-center gap-2 border-b border-[#E0E7ED] pb-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E7B7A9]" /><span className="h-2.5 w-2.5 rounded-full bg-[#E8D39B]" /><span className="h-2.5 w-2.5 rounded-full bg-[#A9CDBB]" />
                    <span className="ml-auto text-[8px] font-semibold tracking-[.18em] text-[#8A9AAA]">YOUR DIGITAL HOME</span>
                  </div>
                  <div className="mt-5 overflow-hidden rounded-xl border border-[#E3E9EF] bg-white">
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="font-serif text-[15px] font-semibold tracking-tight">Your Brand</span>
                      <div className="flex gap-2"><span className="h-1.5 w-7 rounded bg-[#DDE5EC]"/><span className="h-1.5 w-7 rounded bg-[#DDE5EC]"/><span className="h-1.5 w-7 rounded bg-[#DDE5EC]"/></div>
                    </div>
                    <div className="grid min-h-[230px] grid-cols-[1.1fr_.9fr] bg-gradient-to-br from-[#EAF0F5] via-[#F6F2EA] to-[#E9E5F0] p-4 sm:p-6">
                      <div className="flex flex-col justify-center">
                        <span className="h-1.5 w-12 rounded bg-[#B79A72]"/>
                        <div className="mt-4 space-y-2"><div className="h-3 w-full rounded bg-[#17385E]/80"/><div className="h-3 w-4/5 rounded bg-[#17385E]/80"/><div className="h-3 w-3/5 rounded bg-[#17385E]/80"/></div>
                        <div className="mt-5 h-7 w-24 rounded-full bg-[#122847]"/>
                        <div className="mt-5 space-y-1.5"><div className="h-1 w-full rounded bg-[#AAB8C5]"/><div className="h-1 w-4/5 rounded bg-[#AAB8C5]"/></div>
                      </div>
                      <div className="relative ml-3 overflow-hidden rounded-[45%_45%_14px_14px] bg-gradient-to-br from-[#C9D8E2] via-[#E9D8C6] to-[#B6C6D2]">
                        <div className="absolute bottom-0 left-1/2 h-[72%] w-[58%] -translate-x-1/2 rounded-t-full bg-gradient-to-b from-[#F9F6F0] to-[#A8BBCB]"/>
                        <div className="absolute bottom-[48%] left-[27%] h-3 w-3 rounded-full bg-white/70 blur-sm"/>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-3"><div className="h-10 rounded-lg bg-[#F0F3F6]"/><div className="h-10 rounded-lg bg-[#F4EEE5]"/><div className="h-10 rounded-lg bg-[#EFEDF5]"/></div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[["01","Clear structure","Pages with purpose"],["02","Easy enquiries","A simpler next step"]].map(([n,t,d])=><div key={n} className="rounded-xl border border-white bg-white/85 p-4"><span className="text-[9px] font-semibold tracking-[.16em] text-[#A1845F]">{n}</span><p className="mt-2 font-serif text-[17px]">{t}</p><p className="mt-1 text-[9px] text-[#8291A0]">{d}</p></div>)}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_-28px_rgba(16,43,78,.35)] sm:block">
                <p className="text-[8px] font-semibold uppercase tracking-[.18em] text-[#A1845F]">Sharp Rays</p>
                <p className="mt-1 font-serif text-[17px]">We create the “Oh, Wow.”!</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO / POSITIONING */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[26px] border border-[#E5EBF0] bg-white p-7 shadow-[0_24px_70px_-58px_rgba(16,43,78,.3)] sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:p-12">
          <Reveal><Eyebrow>Website development in Nalasopara</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[31px] leading-[1.15] tracking-[-.04em] sm:text-[39px]">A website should do more than <span className="italic text-[#A1845F]">look good.</span></h2></Reveal>
          <Reveal delay={.08}><p className="text-[14px] leading-[2] text-[#5C7084]">Sharp Rays offers website design and development solutions for businesses targeting Nalasopara East, Nalasopara West and surrounding areas. Our work can include business websites, service websites, landing pages, ecommerce websites, responsive design, website redesigns, technical SEO foundations and website management. We focus on creating useful digital experiences that make it easier for customers to understand your business and enquire.</p></Reveal>
        </div>
      </section>

      {/* WHY A WEBSITE */}
      <section className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[#E9EFF5] blur-3xl opacity-60"/>
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal><SectionTitle eyebrow="The role of your website" title={<>Turn your online presence into a place customers can <span className="italic text-[#A1845F]">understand and trust.</span></>} copy="Potential customers want to understand your services, compare options and find a convenient way to get in touch. A professional website gives your business a dedicated place to communicate all of this."/></Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Explain your offering","Present products and services clearly so visitors understand what your business provides."],
              ["Bring information together","Keep business details, service information and contact options organised in one place."],
              ["Work across devices","Make important information accessible through mobile-friendly layouts and navigation."],
              ["Support enquiries","Make calls, appointment requests and customer enquiries easier to initiate."],
              ["Help visitors find answers","Organise pages and content so people can reach relevant information quickly."],
              ["Build a digital foundation","Create a useful base for SEO, content marketing and wider digital activities."],
            ].map(([title,copy],i)=><Reveal key={title} delay={(i%3)*.05}><article className={`group relative min-h-[220px] overflow-hidden rounded-[20px] border border-white p-7 shadow-[0_18px_48px_-38px_rgba(16,43,78,.32)] transition duration-300 hover:-translate-y-1 ${["bg-gradient-to-br from-[#E7EEF4] via-[#F7F9FA] to-[#DCE7EF]","bg-gradient-to-br from-[#F1E6D8] via-[#FCF8F2] to-[#E9D9C6]","bg-gradient-to-br from-[#E9E7F1] via-[#F8F6FA] to-[#DED9EA]","bg-gradient-to-br from-[#E4EEE8] via-[#F6F9F5] to-[#D5E4DA]","bg-gradient-to-br from-[#F2E8E5] via-[#FCF6F3] to-[#EADBD6]","bg-gradient-to-br from-[#E7ECF2] via-[#F7F8FA] to-[#D8E1EA]"][i]}`}><span className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-white/70 transition-transform duration-500 group-hover:scale-125"/><span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/75 text-[#A1845F]"><Check size={18}/></span><h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[22px]">{title}</h3><p className="relative mt-3 text-[12px] leading-[1.9] text-[#526779]">{copy}</p></article></Reveal>)}
          </div>
          <p className="mt-8 border-l-2 border-[#B79A72] pl-5 text-[13px] leading-[1.9] text-[#657889]">Your website should not simply look attractive. It should make the customer journey easier.</p>
        </div>
      </section>

      {/* WEBSITE SOLUTIONS */}
      <section id="website-services" className="scroll-mt-20 bg-[#F1F5F8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
<Reveal>
  <SectionTitle
    eyebrow="What we build"
    title={
      <>
        Website solutions for{" "}
        <span className="italic text-[#A1845F]">
          real business needs.
        </span>
      </>
    }
  />
</Reveal>            <Reveal delay={0.08}><p className="max-w-[600px] text-[13px] leading-[1.9] text-[#657889]">We develop website solutions based on business requirements, content needs, functionality and the intended customer experience. Explore the capabilities that can shape your next website.</p></Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {websiteServices.map((service,i)=>{const Icon=service.icon;return <Reveal key={service.title} delay={(i%4)*.04}><article className={`group flex h-full flex-col rounded-[19px] border border-white/90 bg-gradient-to-br ${service.tone} p-6 shadow-[0_15px_40px_-32px_rgba(11,42,82,.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-34px_rgba(11,42,82,.35)] sm:p-7`}><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/90 bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.4}/></span><span className="text-[9px] font-semibold tracking-[.15em] text-[#8B9AAA]">0{i+1}</span></div><h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.2]">{service.title}</h3><p className="mt-3 flex-1 text-[11px] leading-[1.9] text-[#526779]">{service.copy}</p><ul className="mt-5 space-y-2 border-t border-white/80 pt-5">{service.points.map(point=><li key={point} className="flex items-start gap-2 text-[10px] leading-[1.6] text-[#657889]"><Check size={13} className="mt-0.5 shrink-0 text-[#A1845F]"/>{point}</li>)}</ul></article></Reveal>})}
          </div>
        </div>
      </section>

      {/* BUSINESS-SPECIFIC EXPERIENCES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal><SectionTitle eyebrow="Built around your audience" title={<>Different businesses need different <span className="italic text-[#A1845F]">website experiences.</span></>} copy="A clinic needs a different website experience from a coaching institute. Structure and functionality should reflect what customers need to know."/></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal><article className="relative h-full overflow-hidden rounded-[24px] border border-[#DCE7EF] bg-gradient-to-br from-[#E4EDF4] via-[#F5F8FA] to-[#D8E5EF] p-7 sm:p-10"><div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/80"/><div className="relative"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/75 text-[#A1845F]"><HeartPulse size={22}/></span><h3 className="mt-7 font-[var(--font-new-york),Georgia,serif] text-[28px]">Websites for clinics</h3><p className="mt-3 max-w-[480px] text-[12px] leading-[1.9] text-[#526779]">Help visitors understand available services, practitioner information, timings and appointment options.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Clinic introduction and overview","Doctor or practitioner profiles, where applicable","Treatment and service information","Appointment enquiry options","Location and contact details","Frequently asked questions","Mobile-friendly navigation","Clear and responsible health information"].map(x=><li key={x} className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#526779]"><Check size={14} className="mt-0.5 shrink-0 text-[#A1845F]"/>{x}</li>)}</ul><p className="mt-7 border-t border-white/80 pt-5 text-[10px] leading-[1.8] text-[#7B8791]">Healthcare websites should communicate information accurately and avoid unsupported medical claims or promises.</p></div></article></Reveal>
            <Reveal delay={.08}><article className="relative h-full overflow-hidden rounded-[24px] border border-[#E9DDCE] bg-gradient-to-br from-[#F1E6D8] via-[#FCF8F2] to-[#E9D9C6] p-7 sm:p-10"><div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/80"/><div className="relative"><span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/75 text-[#A1845F]"><GraduationCap size={22}/></span><h3 className="mt-7 font-[var(--font-new-york),Georgia,serif] text-[28px]">Websites for coaching classes</h3><p className="mt-3 max-w-[480px] text-[12px] leading-[1.9] text-[#526779]">Make courses, subjects and learning options easy to understand for students and parents.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{["Institute introduction","Course and subject pages","Class formats and learning information","Faculty information, where available","Admission and enquiry details","Batch information, where applicable","Student and parent FAQs","Contact and enquiry forms"].map(x=><li key={x} className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#526779]"><Check size={14} className="mt-0.5 shrink-0 text-[#A1845F]"/>{x}</li>)}</ul><p className="mt-7 border-t border-white/80 pt-5 text-[10px] leading-[1.8] text-[#7B8791]">The goal is to help prospective students understand the offering before they contact the institute.</p></div></article></Reveal>
          </div>
          <div className="mt-5 grid gap-6 rounded-[22px] border border-[#DCE9E1] bg-gradient-to-r from-[#E4EEE8] via-[#F6F9F5] to-[#D5E4DA] p-7 sm:p-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><Eyebrow>Mobile-first experience</Eyebrow><h3 className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[27px]">A smooth experience on every screen.</h3></div><div><p className="text-[12px] leading-[1.9] text-[#526779]">Many visitors access business websites from smartphones. A website should therefore be planned for mobile screens from the beginning. Our approach considers responsive layouts, readable typography, clear navigation, optimised images, sensible page loading behaviour, accessible contact options and consistent experiences across devices.</p><p className="mt-3 text-[10px] leading-[1.8] text-[#7B7C79]">Website speed depends on hosting, assets, scripts and third-party integrations. Performance should be tested rather than assumed.</p></div></div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Website formats" title={<>Choose a format that fits <span className="italic text-[#A1845F]">the job to be done.</span></>} copy="A website should be selected according to what the business needs to communicate and what visitors should be able to do."/></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{websiteTypes.map(([title,copy,tone],i)=><Reveal key={title} delay={(i%4)*.035}><article className={`group h-full rounded-[17px] border border-white bg-gradient-to-br ${tone} p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_42px_-32px_rgba(16,43,78,.3)]`}><span className="text-[9px] font-semibold uppercase tracking-[.17em] text-[#A1845F]">Website format · 0{i+1}</span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[21px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#526779]">{copy}</p></article></Reveal>)}</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
<Reveal>
  <SectionTitle
    eyebrow="Useful website features"
    title={
      <>
        Functionality that earns its{" "}
        <span className="italic text-[#A1845F]">place.</span>
      </>
    }
  />
</Reveal>          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{featureCards.map(([Icon,title,copy],i)=><Reveal key={title} delay={(i%4)*.04}><article className="h-full rounded-[17px] border border-[#E4EAF0] bg-white p-6 shadow-[0_14px_38px_-32px_rgba(16,43,78,.25)] transition hover:-translate-y-1 hover:border-[#C6A77A]"><span className={`flex h-11 w-11 items-center justify-center rounded-xl ${["bg-[#EAF1F6]","bg-[#F5EDE2]","bg-[#EFEDF5]","bg-[#EAF2EC]"][i%4]} text-[#9A7952]`}><Icon size={20}/></span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[19px]">{title}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#657889]">{copy}</p></article></Reveal>)}</div>
       
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F1F5F8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Industries we work with" title={<>Website experiences shaped around <span className="italic text-[#A1845F]">industry needs.</span></>} copy="Different industries require different website content, functionality and customer journeys. Our approach considers the purpose of the business and the information its audience needs."/></Reveal>
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((industry,i)=>{const Icon=industry.icon;const tones=["from-[#EADBC8] via-[#F7F0E7] to-[#DCC7AE]","from-[#E3EAF0] via-[#F2F5F7] to-[#D2DEE8]","from-[#E6E2EF] via-[#F3F0F7] to-[#D8D1E6]","from-[#E1EBE4] via-[#F1F6F1] to-[#CFDFD4]","from-[#F0E2DD] via-[#F8F0ED] to-[#E5D0C8]"];return <Reveal key={industry.name} delay={(i%5)*.035}><Link href={industry.href} title={`Explore website and digital solutions for ${industry.name} businesses at Sharp Rays`} className={`group flex min-h-[220px] flex-col rounded-[17px] border border-white bg-gradient-to-br ${tones[i%tones.length]} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-32px_rgba(16,43,78,.3)]`}><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/75 text-[#122847]"><Icon size={20}/></span><ArrowUpRight size={16} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[18px]">{industry.name}</h3><p className="mt-2 flex-1 text-[10px] leading-[1.85] text-[#526779]">{industry.text}</p><span className="mt-4 inline-flex items-center gap-2 border-t border-white/70 pt-3 text-[9px] font-semibold uppercase tracking-[.13em]">Explore industry <ArrowUpRight size={13}/></span></Link></Reveal>})}</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="How a project takes shape" title={<>A considered process from first brief to <span className="italic text-[#A1845F]">website launch.</span></>} copy="Every website project begins with understanding what the business needs from its website."/></Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{processSteps.map(([num,title,copy],i)=><Reveal key={num} delay={(i%3)*.05}><article className={`relative h-full overflow-hidden rounded-[19px] border border-white p-7 ${["bg-gradient-to-br from-[#E7EEF4] to-[#F7F9FA]","bg-gradient-to-br from-[#F1E6D8] to-[#FCF8F2]","bg-gradient-to-br from-[#E9E7F1] to-[#F8F6FA]","bg-gradient-to-br from-[#E4EEE8] to-[#F6F9F5]","bg-gradient-to-br from-[#F2E8E5] to-[#FCF6F3]","bg-gradient-to-br from-[#E7ECF2] to-[#F7F8FA]"][i]}`}><span className="text-[11px] font-semibold tracking-[.18em] text-[#A1845F]">{num}</span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[23px]">{title}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#526779]">{copy}</p><div className="absolute -bottom-12 -right-8 h-32 w-32 rounded-full border border-white/70"/></article></Reveal>)}</div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><Reveal><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#D6BB96]">Why Sharp Rays</p><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[34px] font-normal leading-[1.12] tracking-[-.04em] sm:text-[43px]">Thoughtful digital work. <span className="italic text-[#D6BB96]">Clear intent.</span></h2><p className="mt-5 text-[13px] leading-[1.9] text-white/65">A useful website needs more than an attractive design. It needs a clear structure, relevant content, appropriate functionality and an understanding of what visitors need.</p></div></Reveal>
          <div className="grid gap-x-8 sm:grid-cols-2">{reasons.map(([title,copy],i)=><Reveal key={title} delay={(i%2)*.05}><article className="border-t border-white/15 py-6"><span className="text-[9px] font-semibold tracking-[.18em] text-[#D6BB96]">0{i+1}</span><h3 className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[21px]">{title}</h3><p className="mt-2 text-[11px] leading-[1.9] text-white/60">{copy}</p></article></Reveal>)}</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Website development pricing" title={<>A clear starting point for <span className="italic text-[#A1845F]">your website.</span></>} copy="Choose a website package according to your business requirements, content, functionality and project scope." center/></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{[["Starter Website","₹14,999","For businesses that need a professional website foundation."],["Business Website","₹24,999","For businesses that need a broader website structure and more detailed service presentation."],["Advanced Website","₹39,999","For projects that require a more extensive website experience and functionality."]].map(([name,price,copy],i)=><Reveal key={name} delay={i*.06}><article className={`relative flex h-full flex-col overflow-hidden rounded-[22px] border p-7 sm:p-8 ${i===1?"border-[#B79A72] bg-gradient-to-br from-[#F0E4D3] via-[#FBF7F0] to-[#E6D5C0] shadow-[0_25px_65px_-42px_rgba(16,43,78,.28)]":"border-[#E1E8EE] bg-gradient-to-br from-white to-[#F4F7FA]"}`}><span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#A1845F]">{i===0?"Website foundation":i===1?"Growing business":"Extended requirements"}</span><h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[25px]">{name}</h3><p className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[38px] text-[#122847]">{price}<span className="ml-2 text-[10px] text-[#657889]">starting at</span></p><p className="mt-4 flex-1 text-[12px] leading-[1.9] text-[#526779]">{copy}</p><Link href="/pricing" title={`Explore Sharp Rays ${name.toLowerCase()} website pricing and package details`} className="mt-7 inline-flex min-h-9 items-center justify-center gap-2 rounded-[9px] bg-[#122847] px-5 text-[11px] font-semibold text-white transition hover:bg-[#1B3A63]">Explore website pricing <ArrowUpRight size={14}/></Link></article></Reveal>)}</div>
          <p className="mt-6 text-center text-[10px] leading-[1.8] text-[#8A8B88]">These are starting prices. Final pricing depends on the project scope, features, content requirements and agreed deliverables.</p>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F1F5F8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Explore Sharp Rays services" title={<>Build a more connected <span className="italic text-[#A1845F]">digital presence.</span></>} copy="Website development can work alongside other digital services. Explore the wider Sharp Rays capabilities."/></Reveal>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{allServices.map((service,i)=>{const Icon=service.icon;return <Reveal key={service.title} delay={(i%3)*.04}><Link href={service.href} title={`Explore ${service.title} services at Sharp Rays`} className={`group flex h-full min-h-[205px] flex-col rounded-[19px] border border-white bg-gradient-to-br ${service.tone} p-6 shadow-[0_14px_36px_-28px_rgba(11,42,82,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-30px_rgba(11,42,82,.3)] sm:p-7`}><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/90 bg-white/75 text-[#A1845F]"><Icon size={20}/></span><ArrowUpRight size={17} className="text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[21px] leading-tight">{service.title}</h3><p className="mt-3 flex-1 text-[11px] leading-[1.9] text-[#526779]">{service.desc}</p><span className="mt-5 inline-flex items-center gap-2 border-t border-white/80 pt-4 text-[9px] font-semibold uppercase tracking-[.14em]">Explore service <ArrowUpRight size={13}/></span></Link></Reveal>})}</div>
          <div className="mt-8"><Link href="/services" title="Explore all digital marketing and creative services offered by Sharp Rays" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#122847] px-6 text-[12px] font-semibold text-white transition hover:bg-[#1B3A63]">Explore all services <ArrowUpRight size={15}/></Link></div>
        </div>
      </section>

     {/* FAQ — single FAQPage schema is added in route */}
<section
  className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="nalasopara-website-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">
    <Reveal>
      <div className="mx-auto max-w-[800px] text-center">
        <div className="flex justify-center">
          <Eyebrow>Questions before you start</Eyebrow>
        </div>

        <h2
          id="nalasopara-website-faq-heading"
          className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[34px] font-normal leading-[1.15] tracking-[-.035em] text-[#0B2A52] sm:text-[43px] lg:text-[50px]"
        >
          Frequently Asked{" "}
          <span className="text-[#A1845F]">Questions.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-[1.9] text-[#657889]">
          Answers about website design, development, pricing and getting
          started in Nalasopara.
        </p>
      </div>
    </Reveal>

    <div className="mt-12 grid gap-x-12 border-t border-[#E7DFD3] lg:grid-cols-2">
      {faqs.map(([q, a]) => (
        <Reveal key={q}>
          <article className="flex h-full gap-4 border-b border-[#E7DFD3] py-7 sm:py-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7DFD3] bg-white text-[#A1845F]">
              <MessageCircle size={17} strokeWidth={1.4} />
            </span>

            <div>
              <h3 className="font-[var(--font-new-york),Georgia,serif] text-[19px] leading-[1.4] text-[#0B2A52] sm:text-[21px]">
                {q}
              </h3>

              <p className="mt-3 text-[12px] leading-[1.95] text-[#657889]">
                {a}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      {/* RELATED LOCATION LINKS */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1200px] rounded-[20px] border border-[#E1E8EE] bg-white p-7 sm:p-9"><div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><Eyebrow>Explore related pages</Eyebrow><p className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[23px]">More website and location information.</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold"><Link href="/locations/nalasopara" title="Return to the Nalasopara digital marketing location page" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Nalasopara <ArrowUpRight size={14}/></Link><Link href="/locations/vasai-road/website-development" title="Explore website development in Vasai Road" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Vasai Road Website Development <ArrowUpRight size={14}/></Link><Link href="/locations/virar/website-development" title="Explore website development in Virar" className="inline-flex items-center gap-2 hover:text-[#A1845F]">Virar Website Development <ArrowUpRight size={14}/></Link><Link href="/locations" title="Browse all Sharp Rays location pages" className="inline-flex items-center gap-2 hover:text-[#A1845F]">All locations <ArrowUpRight size={14}/></Link></div></div><p className="mt-5 border-t border-[#E8EDF1] pt-5 text-[10px] text-[#9A8B78]">Explore the <Link href="/services/website-development" title="Explore the Sharp Rays website development service overview" className="font-semibold text-[#122847] underline decoration-[#D5C7B4] underline-offset-4">website development service overview</Link> for a broader view of our approach.</p></div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#122847] px-7 py-12 text-white shadow-[0_30px_80px_-45px_rgba(18,40,71,.5)] sm:px-12 sm:py-16 lg:px-16"><div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-40 h-[480px] w-[480px] rounded-full border border-white/10"/><div aria-hidden="true" className="pointer-events-none absolute right-20 top-10 h-[260px] w-[260px] rounded-full bg-[#C6A77A]/10 blur-3xl"/><div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><Reveal><Eyebrow>Build your business website</Eyebrow><h2 className="mt-6 max-w-[700px] font-[var(--font-new-york),Georgia,serif] text-[37px] leading-[1.08] tracking-[-.045em] text-white sm:text-[50px]">Give your business a website that <span className="italic text-[#D6BB96]">works harder.</span></h2><p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-white/65">Whether you need a new business website, an ecommerce store, a clinic website, a coaching institute website or a complete redesign, Sharp Rays can help you plan the right digital experience.</p></Reveal><Reveal delay={.1}><div className="rounded-[20px] border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm"><p className="font-[var(--font-new-york),Georgia,serif] text-[23px]">Let's discuss your website.</p><p className="mt-3 text-[11px] leading-[1.8] text-white/60">Share your business details and website requirements to start a conversation.</p><div className="mt-6 flex flex-col gap-3"><Link href="/contact?source=nalasopara-website-development" title="Get a free website development quote from Sharp Rays" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-[12px] font-semibold text-[#122847] transition hover:bg-[#F2E8D9]">Get a free website quote <ArrowUpRight size={15}/></Link><Link href="/pricing" title="View Sharp Rays website development pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-5 text-[12px] font-medium text-white transition hover:bg-white/10">Explore website pricing <ArrowRight size={15}/></Link></div></div></Reveal></div><div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[9px] font-semibold uppercase tracking-[.18em] text-white/45"><span>SHARP RAYS — WE CREATE THE “OH, WOW.”!</span><span>NALASOPARA · WEBSITE DEVELOPMENT</span></div></div>
      </section>
    </main>
  );
}
