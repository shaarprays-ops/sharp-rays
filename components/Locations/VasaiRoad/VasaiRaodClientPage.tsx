"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check,
  Factory, MapPin, MonitorSmartphone, Search, Megaphone, BarChart3,
  Workflow, Film, Sparkles, Building2, GraduationCap, HeartPulse,
  ShoppingBag, UtensilsCrossed, BriefcaseBusiness, Rocket,
  Globe2, MousePointerClick, ShieldCheck, Target, Layers3, MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Social Media Marketing", short: "Social", icon: Megaphone,
    line: "Make your brand more recognisable and relevant.",
    copy: "Plan platform-aware content that helps your business communicate consistently, showcase its work and build meaningful relationships with the right audience.",
    points: ["Social media strategy", "Content planning and calendars", "Creative direction and Reels", "Community engagement"],
    href: "/locations/vasai-road/social-media-marketing", tone: "from-[#EAF2F7] to-[#F7FAFC]",
  },
  {
    title: "Search Engine Optimization", short: "SEO", icon: Search,
    line: "Be easier to find when customers search.",
    copy: "Build stronger search foundations with technical SEO, keyword research, on-page improvements, useful content and local SEO. The focus is relevance, discoverability and a website that search engines and people can understand.",
    points: ["Technical and on-page SEO", "Keyword and search-intent research", "Local SEO foundations", "Content structure and internal links"],
    href: "/locations/vasai-road/seo", tone: "from-[#E7EEF4] to-[#F7FAFC]",
  },
  {
    title: "Performance Marketing / Paid Media", short: "Paid media", icon: BarChart3,
    line: "Put campaigns in front of relevant audiences.",
    copy: "Plan and improve digital advertising with audience research, campaign structure, creative testing, landing-page alignment and performance measurement.",
    points: ["Google and Meta campaign planning", "Audience and creative testing", "Lead generation campaigns", "Conversion tracking"],
    href: "/locations/vasai-road/performance-marketing", tone: "from-[#EAF0F6] to-[#F8FAFC]",
  },
  {
    title: "Website Development & Management", short: "Websites", icon: MonitorSmartphone,
    line: "Give your business a digital home that works.",
    copy: "Create a responsive, well-structured website that explains what you do, builds confidence and makes it easy for visitors to enquire. We consider design, usability, performance and SEO-friendly foundations together.",
    points: ["Business websites and landing pages", "Responsive UI and UX", "Clear service and product pages", "Performance and enquiry journeys"],
    href: "/locations/vasai-road/web-development-and-management", tone: "from-[#E8F0F5] to-[#F8FAFC]",
  },
  
  {
    title: "AI Video & Creative", short: "AI Video", icon: Film,
    line: "Bring ideas to life with thoughtful visual storytelling.",
    copy: "Develop AI-assisted visuals, video concepts, motion-led content and creative assets that help explain products, services and brand stories.",
    points: ["AI-assisted video concepts", "Social and campaign creatives", "Visual storytelling", "Creative planning and storyboards"],
    href: "/locations/vasai-road/ai-video-and-creative", tone: "from-[#EDF3F7] to-[#F9FBFC]",
  },
 
 
  {
    title: "AI Automation", short: "Automation", icon: Workflow,
    line: "Make everyday workflows more manageable.",
    copy: "Explore practical AI-assisted workflows for enquiry handling, lead routing, notifications and repetitive business processes, with appropriate human oversight.",
    points: ["Enquiry capture and routing", "Workflow integrations", "Follow-up processes", "Notifications and admin tasks"],
    href: "/locations/vasai-road/ai-automation", tone: "from-[#E8F1F5] to-[#F8FAFC]",
  },
];

const industries = [
  { name: "Beauty & Wellness", icon: Sparkles, text: "Build a recognisable digital presence for beauty, salon, spa and wellness businesses." },
  { name: "Ecommerce", icon: ShoppingBag, text: "Improve product discovery, presentation and the journey from browsing to purchase." },
  { name: "Education", icon: GraduationCap, text: "Communicate courses, programmes, admissions and learning opportunities clearly." },
  { name: "Healthcare", icon: HeartPulse, text: "Present healthcare services, facilities and appointment information clearly." },
  { name: "Manufacturing", icon: Factory, text: "Showcase industrial products, capabilities and company information to B2B buyers." },
  { name: "Professional Services", icon: BriefcaseBusiness, text: "Communicate professional expertise, services and business value." },
  { name: "Real Estate", icon: Building2, text: "Present properties, projects and real estate services through a clear digital presence." },
  { name: "Restaurants", icon: UtensilsCrossed, text: "Showcase menus, food, dining experiences and business information." },
  { name: "Startups", icon: Rocket, text: "Build a digital foundation and communicate new products, services and brand ideas." },
  { name: "Travel & Hospitality", icon: Globe2, text: "Promote travel experiences, accommodation, destinations and hospitality services." },
];

const faqs = [
  ["Which digital marketing agency in Vasai offers SEO and website development?", "Sharp Rays offers SEO, website development, social media marketing, performance marketing, digital PR, AI video and creative, professional video editing, content marketing and AI automation for businesses in Vasai."],
  ["How much do digital marketing services cost in Vasai?", "Costs depend on the service, scope, complexity and deliverables. Refer to our pricing page for current package information and contact us for a proposal based on your requirements."],
  ["Is SEO useful for small businesses in Vasai?", "SEO can help small businesses become more discoverable for relevant searches, explain their offerings and build a long-term organic presence. Outcomes depend on competition, website quality, search demand and ongoing work."],
  ["Do you develop websites for small businesses in Vasai?", "Yes. Website projects can include responsive design, clear navigation, service or product information, enquiry pathways and SEO-friendly foundations."],
  ["Can you help manufacturers in Vasai improve their online presence?", "Yes. A manufacturer may benefit from a professional company website, detailed product or capability pages, B2B-focused content and relevant SEO."],
  ["Do you serve businesses in Vasai East and Vasai West?", "This page is intended for businesses across Vasai East, Vasai West, Vasai Fort and surrounding areas. Contact Sharp Rays to discuss your location and project requirements."],
  ["Can I choose only SEO or website development?", "Yes. You can enquire about an individual service or discuss a combination of services if that better suits your objectives."],
  ["How long does SEO take to show results?", "SEO is an ongoing process. Timelines vary with the website's current condition, competition, search demand and the work involved. Rankings or enquiries cannot be guaranteed within a fixed timeframe."],
  ["Can social media marketing help a local business?", "It can help a business communicate with relevant audiences, showcase products and services, build recognition and maintain a consistent presence."],
  ["Do you provide performance marketing services in Vasai?", "Yes. Performance marketing can include Google and Meta campaign planning, audience targeting, creative testing, lead-generation campaigns and conversion measurement, based on the agreed scope."],
  ["Can you create AI videos for businesses in Vasai?", "Yes. AI-assisted video concepts and creative assets can support product stories, promotional campaigns and social content. The suitable approach depends on your brief and intended use."],
  ["Do you provide AI automation for small businesses?", "Yes. Practical workflows may support enquiry capture, lead routing, follow-ups, notifications and repetitive administrative tasks, with appropriate human oversight."],
  ["Do you offer professional video editing?", "Yes. Professional editing can include Reels, Shorts, YouTube videos, promotional videos, captions, transitions, colour correction and audio finishing."],
  ["Can I combine SEO, website development and social media marketing?", "Yes. These services can work together when they support the same business goals. We can discuss priorities, scope and a suitable sequence for your business."],
  ["Which industries does Sharp Rays serve in Vasai?", "Sharp Rays supports businesses across Beauty & Wellness, Ecommerce, Education, Healthcare, Manufacturing, Professional Services, Real Estate, Restaurants, Startups, and Travel & Hospitality."],
  ["How can I get started with Sharp Rays?", "Use the enquiry form or contact options on this website. Share your business, website if available, main challenge and goals so we can understand what you need."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] ${light ? "text-[#D9C29F]" : "text-[#9A7950]"}`}><span className={`h-px w-8 ${light ? "bg-[#8FAEC4]" : "bg-[#8FAEC4]"}`} />{children}</div>;
}

function SectionTitle({ eyebrow, title, copy, light = false, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow light={light}>{eyebrow}</Eyebrow></div>
    <h2 className={`mt-5 font-serif text-[34px] font-normal leading-[1.12] tracking-[-.045em] sm:text-[43px] lg:text-[52px] ${light ? "text-white" : "text-[#263B50]"}`}>{title}</h2>
    {copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] ${center ? "mx-auto" : ""} ${light ? "text-[#68798A]" : "text-[#657487]"}`}>{copy}</p>}
  </div>;
}

export default function VasaiRoadClientPage() {

  return <main className="overflow-hidden bg-[#F8FAFC] text-[#263B50]">
    {/* HERO — editorial layout, not a reused service-page template */}
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[linear-gradient(135deg,#F5F8FB_0%,#EEF4F8_48%,#F8F5EF_100%)] px-5 pb-20 pt-32 text-[#263B50] sm:px-8 sm:pt-36 lg:min-h-[780px] lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 78% 28%, rgba(198,167,122,.25), transparent 31%), radial-gradient(circle at 15% 90%, rgba(172,190,199,.30), transparent 34%), radial-gradient(circle at 52% 4%, rgba(255,255,255,.9), transparent 42%)" }} />
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[620px] w-[620px] rounded-full border border-[#263B50]/[.07]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-[420px] w-[420px] rounded-full border border-[#8FAEC4]/30" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <Reveal><div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-[#927650] shadow-sm"><MapPin size={12} /> Digital partner · Vasai, Maharashtra</div>
          <h1 className="mt-8 max-w-[720px] font-serif text-[46px] font-normal leading-[1.04] tracking-[-.05em] sm:text-[58px] lg:text-[70px]">A stronger digital presence for <span className="bg-gradient-to-r from-[#B18B5D] via-[#C6A77A] to-[#A98254] bg-clip-text text-transparent italic">Vasai businesses.</span></h1>
          <p className="mt-7 max-w-[590px] text-[15px] leading-[1.95] text-[#596D80]">Sharp Rays brings SEO, website development, social media marketing and creative digital solutions together to help businesses become easier to discover, understand and contact.</p>
          <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#82909B]">For retailers, manufacturers, startups and professional businesses across Vasai East, Vasai West and nearby areas.</p>
          <div className="mt-7 flex w-full flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 lg:mt-9">
            <Link
              href="/free-audit"
              title="Get Your Free Growth Audit"
              className="group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px] text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] active:translate-y-0 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]"
            >
              <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">Get Your Free Growth Audit</span>
            </Link>
            <Link
              href="/work"
              title="View Our Work"
              className="group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px] text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] active:translate-y-0 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]"
            >
              <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">View Our Work</span>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DED3] pt-6 text-[10px] uppercase tracking-[.15em] text-[#788795]"><span>Search visibility</span><span>Better websites</span><span>Brand communication</span></div>
        </div></Reveal>
        <Reveal delay={0.12}><div className="relative mx-auto w-full max-w-[590px]">
          <div className="relative aspect-[.94] overflow-hidden  border border-[#DED8CD] bg-gradient-to-br from-[#E8EEF1] via-[#F5F2EB] to-[#E8E2D8] p-5 sm:p-7">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(18,40,71,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,40,71,.08) 1px, transparent 1px)", backgroundSize: "38px 38px" }} />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#8FAEC4]/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between"><span className="text-[9px] uppercase tracking-[.22em] text-[#9A7950]">The digital landscape</span><Globe2 size={19} className="text-[#8FAEC4]" strokeWidth={1.2} /></div>
              <div className="relative mx-auto flex w-full max-w-[390px] flex-col gap-3">
                <div className=" border border-[#DED8CD] bg-white/95 p-4 text-[#263B50] shadow-2xl shadow-black/20">
                  <div className="flex items-center justify-between border-b border-[#E8E1D6] pb-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8FAEC4]"/><span className="text-[9px] font-semibold tracking-[.15em]">YOUR BUSINESS</span></div><span className="text-[8px] text-[#8B98A5]">ONLINE PRESENCE</span></div>
                  <div className="mt-4 grid grid-cols-[1fr_82px] items-center gap-3"><div><div className="h-2 w-4/5 rounded bg-[#263B50]"/><div className="mt-2 h-2 w-3/5 rounded bg-[#C9D1D8]"/><div className="mt-4 inline-flex rounded-full bg-[#8FAEC4] px-3 py-2 text-[8px] font-semibold">Explore services</div></div><div className="flex aspect-square items-center justify-center  bg-[#E8F0F5]"><Layers3 size={34} strokeWidth={1.1} className="text-[#6E8294]"/></div></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[{ icon: Search, label: "SEARCH" }, { icon: MonitorSmartphone, label: "WEB" }, { icon: Megaphone, label: "SOCIAL" }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center justify-center gap-2  border border-[#DED8CD] bg-white/70 py-3 text-[8px] tracking-[.15em] text-[#52677D]"><Icon size={13} className="text-[#9CB7CB]"/>{label}</div>)}
                </div>
              </div>
              <div className="flex items-end justify-between"><p className="max-w-[210px] font-serif text-[21px] leading-tight text-[#344A60]">Make every digital touchpoint <span className="text-[#7899B2] italic">count.</span></p><span className="text-[9px] tracking-[.18em] text-[#82909B]">SHARP RAYS</span></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden max-w-[230px] border border-[#D7C3A5] bg-[#F7F3EB] p-4 text-[#263B50] shadow-xl sm:block"><span className="text-[9px] uppercase tracking-[.17em] text-[#9A7950]">Our point of view</span><p className="mt-2 font-serif text-[18px] leading-snug">Strategy first. Design with purpose.</p></div>
        </div></Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8FAEC4]/60 to-transparent" />
    </section>

    {/* DIRECT ANSWER */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal><Eyebrow>A local digital partner</Eyebrow><h2 className="mt-5 max-w-[390px] font-serif text-[35px] leading-[1.12] tracking-[-.04em] sm:text-[43px]">Looking for a digital marketing agency in <span className="text-[#7899B2] italic">Vasai?</span></h2></Reveal>
        <Reveal delay={0.08}><div className="border-l border-[#D9C8AE] pl-6 sm:pl-9"><p className="text-[16px] leading-[1.9] text-[#354B63]">Sharp Rays is a digital marketing agency offering Social Media Marketing, Search Engine Optimization (SEO), Performance Marketing, Website Development & Management, Digital PR & Media Relations, AI Video and Creative, Professional Video Editing, Content Marketing and AI Automation for businesses in Vasai.</p><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">We help businesses improve online visibility, build professional websites and communicate more effectively with relevant audiences. Our approach starts by understanding your business, audience and objectives before identifying the digital solutions that make sense.</p><div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">{["Understand the business", "Choose relevant channels", "Build for real users"].map((x,i)=><div key={x} className="border-t border-[#D8C9B5] pt-3"><span className="font-serif text-[24px] text-[#8FAEC4]"></span><p className="mt-1 text-[11px] text-[#52677D]">{x}</p></div>)}</div></div></Reveal>
      </div>
    </section>

   {/* SERVICES — all services with explore more button */}

<section
  id="vasai-services"
  className="scroll-mt-20 bg-[#F3F7FA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
>
  <div className="mx-auto max-w-[1200px]">
    <Reveal>
      <SectionTitle
        eyebrow="What we do"
        title={
          <>
            Digital marketing services for your{" "}
            <span className="text-[#7899B2] italic">next move.</span>
          </>
        }
        copy="Different businesses need different things from digital marketing. Explore the capabilities that can help you establish, improve or strengthen your online presence."
      />
    </Reveal>

    {/* ALL SERVICES */}
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <Reveal key={service.title} delay={i * 0.04}>
            <article className="group relative flex h-full flex-col overflow-hidden border border-[#DDE7EE] bg-[#FBFDFF] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D7C5A9] hover:shadow-[0_18px_50px_rgba(50,40,25,0.06)] sm:p-9">

              {/* Subtle top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#7899B2] transition-all duration-500 group-hover:w-full" />

              {/* Icon */}
              <div className="flex items-center justify-end">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EAE1D4] bg-[#F8F5EF] transition-all duration-500 group-hover:bg-[#EFE8DC]">
                  <Icon
                    size={21}
                    strokeWidth={1.35}
                    className="text-[#7899B2]"
                  />
                </div>
              </div>

              {/* Service content */}
              <div className="mt-9">
                <p className="font-serif text-[17px] italic leading-snug text-[#7899B2]">
                  {service.line}
                </p>

                <h3 className="mt-2 font-serif text-[29px] leading-tight tracking-[-0.035em] text-[#26364A] sm:text-[34px]">
                  {service.title}
                  <span className="text-[#C6A77A]">.</span>
                </h3>

                <p className="mt-4 max-w-[480px] text-[12px] leading-[2] text-[#718092] sm:text-[13px]">
                  {service.copy}
                </p>
              </div>

              {/* Service features */}
              <div className="mt-7 grid gap-x-4 gap-y-3 border-t border-[#E1EAF0] pt-6 sm:grid-cols-2">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#526477]"
                  >
                    <Check
                      size={14}
                      strokeWidth={1.7}
                      className="mt-0.5 shrink-0 text-[#7899B2]"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Individual service link */}
              <div className="mt-auto pt-8">
                <div className="border-t border-[#E1EAF0] pt-5">
                  <Link
                    href={service.href}
                    title={`Explore ${service.title} Services in Vasai`}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#26364A] transition-colors duration-300 hover:text-[#C6A77A]"
                  >
                    Explore {service.short}

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>

            </article>
          </Reveal>
        );
      })}
    </div>

    {/* EXPLORE MORE SERVICES */}
    <Reveal>
      <div className="mt-12 flex justify-center">
        <Link
          href="/services"
          title="Explore All Sharp Rays Digital Marketing Services"
          className="group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-6 py-3 text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#C6A77A]/60 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] active:translate-y-0 sm:min-h-[48px] sm:px-7 sm:text-[14px]"
        >
          <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />

          <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
            Explore More Services

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </Link>
      </div>
    </Reveal>

  </div>
</section>

    {/* LOCAL NEEDS */}
    <section className="bg-[#EEF4F8] px-5 py-20 text-[#263B50] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <Reveal><SectionTitle eyebrow="The local business picture" title={<>One town. Different business <span className="text-[#7899B2] italic">ambitions.</span></>} copy="A local retailer, an industrial supplier and a professional service provider do not share the same customer journey. Their digital approach should reflect that." /></Reveal>
        <div className="grid gap-px self-start border border-[#E5E2DA] bg-[#E5E2DA] sm:grid-cols-2">{[
          ["Be discovered", "Help relevant customers find accurate business and service information."],
          ["Explain your value", "Make products, services and capabilities easier to understand."],
          ["Build confidence", "Use clear information, a professional website and consistent communication."],
          ["Make contact easier", "Create straightforward paths for enquiries, calls and next steps."],
        ].map(([t,d],i)=><Reveal key={t} delay={i*.06}><div className="h-full bg-white p-6 sm:p-7"><h3 className="mt-5 font-serif text-[22px]">{t}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">{d}</p></div></Reveal>)}</div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Who we work to support" title={<>Digital solutions shaped around your <span className="text-[#7899B2] italic">industry.</span></>} copy="Vasai's business mix spans local retail, industrial and professional services. We consider your audience and business model before recommending a digital approach." /></Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((industry,i)=>{const Icon=industry.icon;return <Reveal key={industry.name} delay={(i%5)*.04}><article className="group flex h-full min-h-[205px] flex-col border border-[#DDE7EE] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#8FAEC4] hover:shadow-[0_18px_45px_-35px_rgba(18,40,71,.45)]"><div className="flex items-center justify-between"><Icon size={22} strokeWidth={1.25} className="text-[#7899B2]"/><ArrowUpRight size={15} className="text-[#B8A78F] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></div><h3 className="mt-8 font-serif text-[19px] leading-tight">{industry.name}</h3><p className="mt-3 text-[11px] leading-[1.8] text-[#718092]">{industry.text}</p></article></Reveal>})}</div>
      </div>
    </section>

    {/* EAST / WEST */}
    <section className="bg-[#EDF3F7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Across Vasai" title={<>Local context makes the strategy <span className="text-[#7899B2] italic">more relevant.</span></>} copy="Vasai East and Vasai West include different business settings and customer needs. Location-specific communication should be useful, accurate and grounded in the areas a business genuinely serves." /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal><article className="relative min-h-[350px] overflow-hidden border border-[#E5DED3] bg-gradient-to-br from-[#F0F3F3] via-[#F8F7F2] to-[#F3EEE7] p-7 text-[#263B50] sm:p-10"><div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#263B50]/[.07]"/><div className="absolute -right-5 top-0 h-52 w-52 rounded-full border border-[#8FAEC4]/30"/><div className="relative flex h-full flex-col"><span className="text-[10px] uppercase tracking-[.2em] text-[#9CB7CB]">Local business context</span><h3 className="mt-6 font-serif text-[36px]">Vasai <span className="italic text-[#9CB7CB]">West</span></h3><p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#68798A]">Commercial and neighbourhood areas around Ambadi Road and Manickpur include retailers, restaurants, clinics and professional service providers with varied digital requirements.</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#DED9CF] pt-6">{["Local SEO", "Business websites", "Social communication", "Clear enquiry paths"].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-[#52677D]"><span className="h-1 w-1 rounded-full bg-[#8FAEC4]"/>{x}</div>)}</div></div></article></Reveal>
          <Reveal delay={.08}><article className="relative min-h-[350px] overflow-hidden border border-[#DED4C5] bg-[#F6F9FB] p-7 sm:p-10"><div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#8FAEC4]/35"/><div className="absolute -right-5 top-0 h-52 w-52 rounded-full border border-[#263B50]/10"/><div className="relative flex h-full flex-col"><span className="text-[10px] uppercase tracking-[.2em] text-[#9A7950]">Local business context</span><h3 className="mt-6 font-serif text-[36px]">Vasai <span className="italic text-[#7899B2]">East</span></h3><p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#66788A]">Areas around Waliv, Sativali and Gauraipada include industrial and commercial businesses that may need clear company websites, product information and B2B-focused communication.</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#DED4C5] pt-6">{["Company websites", "Product pages", "B2B SEO", "Capability content"].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-[#52677D]"><span className="h-1 w-1 rounded-full bg-[#7899B2]"/>{x}</div>)}</div></div></article></Reveal>
          <Reveal delay={.16}><article className="relative min-h-[350px] overflow-hidden border border-[#D9E4EC] bg-gradient-to-br from-[#EAF2F7] via-[#F5F8FA] to-[#E6EEF4] p-7 sm:p-10"><div className="absolute -right-16 -top-16 h-72 w-72 border border-[#8FAEC4]/35"/><div className="absolute -right-5 top-0 h-52 w-52 border border-[#263B50]/10"/><div className="relative flex h-full flex-col"><span className="text-[10px] uppercase tracking-[.2em] text-[#7899B2]">Local business context</span><h3 className="mt-6 font-serif text-[36px]">Vasai <span className="italic text-[#7899B2]">Fort</span></h3><p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#68798A]">The fort and surrounding heritage area create a distinct tourism and local-experience context for travel, hospitality and visitor-focused businesses.</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#D6E1E9] pt-6">{["Visual storytelling", "Social media", "Video content", "Relevant campaigns"].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-[#52677D]"><span className="h-1 w-1 bg-[#8FAEC4]"/>{x}</div>)}</div></div></article></Reveal>
        </div>
        <p className="mt-6 text-[11px] leading-[1.8] text-[#7B8792]">These are examples of local business contexts, not a claim of a physical Sharp Rays office or verified client presence in each area.</p>
      </div>
    </section>

    {/* WEBSITE FOUNDATION */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><div className="relative overflow-hidden bg-[#E8F0F5] p-6 sm:p-9"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#263B50]/10"/><div className="relative border border-[#D4DCE1] bg-white p-5 shadow-[0_24px_60px_-40px_rgba(18,40,71,.4)] sm:p-7"><div className="flex items-center gap-1.5 border-b border-[#E8ECEF] pb-4"><span className="h-2 w-2 rounded-full bg-[#D8BDA0]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="ml-auto text-[8px] tracking-[.15em] text-[#8997A4]">BUSINESS WEBSITE</span></div><div className="mt-6 grid grid-cols-[1fr_.75fr] gap-4"><div><div className="h-2 w-3/4 rounded bg-white"/><div className="mt-3 h-2 w-full rounded bg-[#DCE2E6]"/><div className="mt-2 h-2 w-4/5 rounded bg-[#DCE2E6]"/><div className="mt-6 h-8 w-24 rounded-full bg-[#8FAEC4]"/></div><div className="aspect-square rounded bg-gradient-to-br from-[#D8E0E5] to-[#AABBC8]"/></div><div className="mt-7 grid grid-cols-3 gap-2">{[1,2,3].map(x=><div key={x} className="h-14 rounded bg-[#F0F2F3]"/>)}</div><div className="mt-6 h-2 w-2/5 rounded bg-[#DCE2E6]"/><div className="mt-2 h-2 w-3/4 rounded bg-[#E8ECEF]"/></div><div className="relative mt-4 flex items-center justify-between border border-[#D7C8B1] bg-[#F9F6EF] p-4"><div><span className="text-[8px] uppercase tracking-[.15em] text-[#9A7950]">A better first impression</span><p className="mt-1 font-serif text-[17px]">Designed around your customer.</p></div><MousePointerClick size={22} className="text-[#7899B2]"/></div></div></Reveal>
        <Reveal delay={.08}><div><SectionTitle eyebrow="Website & SEO foundations" title={<>What should your business website in Vasai <span className="text-[#7899B2] italic">actually do?</span></>} copy="A website should do more than display a company name. It should help visitors understand what you offer, why it matters and how to take the next step."/><div className="mt-8 space-y-4">{[
          ["Mobile-first experience", "Responsive layouts that work across phones, tablets and desktops."],
          ["Clear website structure", "Logical navigation, useful headings and well-organised service information."],
          ["Search-friendly foundations", "Relevant page titles, content structure, internal links and technical basics."],
          ["Performance and usability", "A considered focus on speed, accessibility and a friction-light experience."],
          ["Enquiry-focused pathways", "Visible calls to action, useful contact details and straightforward forms."],
          ["Accurate local information", "Location and service-area details that reflect where your business genuinely operates."],
        ].map(([title,copy],i)=><div key={title} className="flex gap-4 border-b border-[#E1EAF0] pb-4"><div><h3 className="text-[13px] font-semibold">{title}</h3><p className="mt-1 text-[11px] leading-[1.8] text-[#718092]">{copy}</p></div></div>)}</div><Link href="/contact?source=vasai-website" title="Discuss a website project" className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em]">Discuss a website project <ArrowUpRight size={15} className="text-[#7899B2]"/></Link></div></Reveal>
      </div>
    </section>

    {/* PROCESS */}
    <section className="bg-[#EEF3F7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="How we work" title={<>A thoughtful process, from first conversation to <span className="text-[#7899B2] italic">implementation.</span></>} copy="We begin with your business requirements, then identify the work that is relevant to your goals and resources."/></Reveal>
        <div className="mt-14 grid gap-0 border-y border-[#D4C9B8] md:grid-cols-4">{[
          ["Understand", "Discuss your business, audience, current digital presence and priorities.", "Business context"],
          ["Identify", "Review the relevant opportunities across website, search, social and other channels.", "Priority areas"],
          ["Plan & create", "Agree the scope, deliverables and approach before the work begins.", "Clear action plan"],
          ["Implement & improve", "Deliver the agreed work, review useful indicators and identify improvements.", "Ongoing learning"],
        ].map(([title,copy,output],i)=><Reveal key={title} delay={i*.06}><article className={`flex h-full flex-col py-7 md:px-6 ${i===0?"md:pl-0":""} ${i!==3?"md:border-r md:border-[#D4C9B8]":""}`}><h3 className="mt-7 font-serif text-[25px]">{title}</h3><p className="mt-3 min-h-[78px] text-[12px] leading-[1.9] text-[#68798A]">{copy}</p><div className="mt-6 border-t border-[#D4C9B8] pt-4 text-[9px] uppercase tracking-[.15em] text-[#9A7950]">{output}</div></article></Reveal>)}</div>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionTitle eyebrow="Why Sharp Rays" title={<>Thoughtful digital work. <span className="text-[#7899B2] italic">Clear intent.</span></>} copy="Choosing an agency means choosing a partner in how your business appears and communicates online. Our approach combines creativity, strategy and technology."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{[
          [Target,"Strategy before execution","Understand the business and its objectives before recommending channels."],
          [Layers3,"Connected capabilities","Bring website, SEO, social and creative work together where it makes sense."],
          [ShieldCheck,"Realistic expectations","Clear scope, transparent communication and no guaranteed-ranking claims."],
          [Sparkles,"Creative with purpose","Use design and technology to make information more engaging and useful."],
        ].map(([Icon,title,copy]:any,i)=><Reveal key={title} delay={i*.05}><article className="border-b border-[#E1EAF0] py-6"><Icon size={22} strokeWidth={1.3} className="text-[#7899B2]"/><h3 className="mt-4 font-serif text-[22px]">{title}</h3><p className="mt-2 text-[12px] leading-[1.9] text-[#718092]">{copy}</p></article></Reveal>)}</div>
      </div>
    </section>

   

    {/* PRICING */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Project options" title={<>Start with the scope your business <span className="text-[#7899B2] italic">needs.</span></>} copy="Every business has different requirements. These starting options are a reference point; the right solution depends on the services, scope and deliverables involved."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{[
          ["Starter","₹14,999","For businesses exploring an initial digital solution."],
          ["Growth","₹24,999","For businesses looking to develop and strengthen their digital presence."],
          ["Advanced","₹39,999","For businesses with broader digital requirements."],
        ].map(([name,price,desc],i)=><Reveal key={name} delay={i*.07}><article className={`relative flex h-full flex-col border p-7 ${i===1?"border-[#8FAEC4] bg-[#EAF1F6]":"border-[#E5DED3] bg-white"}`}><span className="text-[9px] uppercase tracking-[.2em] text-[#9A7950]">{i===0?"A considered start":i===1?"Room to grow":"Broader scope"}</span><h3 className="mt-5 font-serif text-[25px]">{name}</h3><p className="mt-4 font-serif text-[42px] tracking-[-.04em]">{price}<span className="ml-2 text-[11px] tracking-normal text-[#7A8793]">onwards</span></p><p className="mt-4 flex-1 text-[12px] leading-[1.9] text-[#718092]">{desc}</p><Link href="/pricing" title="View package details" className="mt-7 inline-flex items-center gap-2 border-t border-[#E2D9CC] pt-5 text-[10px] font-semibold uppercase tracking-[.13em]">View package details <ArrowUpRight size={14} className="text-[#7899B2]"/></Link></article></Reveal>)}</div>
        <p className="mt-5 text-[10px] leading-[1.8] text-[#8A949D]">Confirm current package inclusions, taxes, timelines and applicable terms before publishing or purchasing.</p>
      </div>
    </section>

   
 {/* FAQ */}
<section
  className="bg-[#F3F7FA] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="services-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">

   <div className="mx-auto max-w-[800px] text-center">
  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7899B2]">
    Questions Before You Start
  </p>

  <h2
    id="services-faq-heading"
    className="font-[var(--font-new-york)] text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] tracking-[-0.035em] text-[#26364A]"
  >
    Frequently Asked{" "}
    <span className="text-[#7899B2]">Questions.</span>
  </h2>

  <p className="mx-auto mt-5 max-w-[560px] text-[13px] leading-[1.9] text-[#718092]">
    Clear answers about our services, process and how we help
    businesses grow online.
  </p>
</div>

    <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
      {faqs.map(([q, a], i) => (
        <div key={q}>
          <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7E3EC] bg-white text-[#7899B2]">
              <MessageCircle size={17} strokeWidth={1.4} />
            </span>

            <div>
              <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#26364A] sm:text-[21px]">
                {q}
              </h3>

              <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">
                {a}
              </p>
            </div>
          </article>
        </div>
      ))}
    </div>

  </div>
</section>

    {/* FINAL CTA */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden border border-[#E8DED0] bg-gradient-to-br from-[#F1F6F9] via-[#F8FAFC] to-[#EEF2F1] px-7 py-12 text-[#263B50] shadow-[0_24px_70px_-55px_rgba(18,40,71,.35)] sm:px-12 sm:py-16 lg:px-16"><div className="pointer-events-none absolute -right-24 -top-36 h-[480px] w-[480px] rounded-full border border-[#8FAEC4]/30"/><div className="pointer-events-none absolute -right-5 -top-16 h-[330px] w-[330px] rounded-full border border-[#263B50]/[.07]"/><div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><Reveal><Eyebrow>Let's build something better</Eyebrow><h2 className="mt-6 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-.045em] sm:text-[50px]">Ready to move your business <span className="text-[#7899B2] italic">forward?</span></h2><p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-[#68798A]">Whether you need a professional website, stronger visibility on Google or a more consistent social media presence, let's understand your goals and identify a useful next step.</p></Reveal><Reveal delay={.1}><div className="border-t border-[#DED8CD] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><p className="font-serif text-[23px] leading-snug">Tell us what you're building.</p><p className="mt-3 text-[11px] leading-[1.8] text-[#7A8793]">Share your business, website and the challenge you'd like to solve.</p><div className="mt-6 flex flex-col gap-3"><Link href="/contact?source=vasai-location" title="Get a Free Consultation" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#8FAEC4] px-5 text-[11px] font-semibold text-[#263B50] transition hover:bg-[#D8C09B]">Get a Free Consultation <ArrowUpRight size={15}/></Link><Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#D8D0C4] bg-white/65 px-5 text-[11px] text-[#344A60] transition hover:bg-white">Explore all services <ArrowRight size={15}/></Link></div></div></Reveal></div><div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#DED8CD] pt-5 text-[9px] uppercase tracking-[.18em] text-[#87919A]"><span>SHARP RAYS — WE CREATE THE “OH, WOW.”!</span><span>VASAI · MAHARASHTRA</span></div></div>
    </section>
  </main>;
}
