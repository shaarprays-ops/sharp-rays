"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Compass,
  Factory, MapPin, MonitorSmartphone, Search, Megaphone, BarChart3,
  Workflow, Film, Sparkles, Building2, GraduationCap, HeartPulse,
  ShoppingBag, UtensilsCrossed, BriefcaseBusiness, Rocket, Store,
  Globe2, MousePointerClick, ShieldCheck, Target, Layers3, Menu,
} from "lucide-react";

const NAVY = "#122847";
const GOLD = "#C6A77A";

const services = [
  {
    no: "01", title: "Search Engine Optimization", short: "SEO", icon: Search,
    line: "Be easier to find when customers search.",
    copy: "Build stronger search foundations with technical SEO, keyword research, on-page improvements, useful content and local SEO. The focus is relevance, discoverability and a website that search engines and people can understand.",
    points: ["Technical and on-page SEO", "Keyword and search-intent research", "Local SEO foundations", "Content structure and internal links"],
    href: "/services/search-engine-optimization", tone: "from-[#E7EEF4] to-[#F7F4ED]",
  },
  {
    no: "02", title: "Website Development", short: "Websites", icon: MonitorSmartphone,
    line: "Give your business a digital home that works.",
    copy: "Create a responsive, well-structured website that explains what you do, builds confidence and makes it easy for visitors to enquire. We consider design, usability, performance and SEO-friendly foundations together.",
    points: ["Business websites and landing pages", "Responsive UI and UX", "Clear service and product pages", "Performance and enquiry journeys"],
    href: "/services/website-development", tone: "from-[#E8EDF4] to-[#F8F6F1]",
  },
  {
    no: "03", title: "Social Media Marketing", short: "Social", icon: Megaphone,
    line: "Make your brand more recognisable and relevant.",
    copy: "Plan platform-aware content that helps your business communicate consistently, showcase its work and build meaningful relationships with the right audience.",
    points: ["Social media strategy", "Content planning and calendars", "Creative direction and Reels", "Community engagement"],
    href: "/services/social-media-marketing", tone: "from-[#F2EAE5] to-[#FBF7F0]",
  },
  {
    no: "04", title: "Performance Marketing", short: "Paid media", icon: BarChart3,
    line: "Put campaigns in front of relevant audiences.",
    copy: "Plan and improve digital advertising with audience research, campaign structure, creative testing, landing-page alignment and performance measurement.",
    points: ["Google and Meta campaign planning", "Audience and creative testing", "Lead generation campaigns", "Conversion tracking"],
    href: "/services/performance-marketing", tone: "from-[#EEEAF4] to-[#F8F5F1]",
  },
  {
    no: "05", title: "AI Automation", short: "Automation", icon: Workflow,
    line: "Make everyday workflows more manageable.",
    copy: "Explore practical AI-assisted workflows for enquiry handling, lead routing, notifications and repetitive business processes, with appropriate human oversight.",
    points: ["Enquiry capture and routing", "Workflow integrations", "Follow-up processes", "Notifications and admin tasks"],
    href: "/services/ai-automation", tone: "from-[#E7F0ED] to-[#F8F7F1]",
  },
  {
    no: "06", title: "AI Video & Creative Solutions", short: "Creative", icon: Film,
    line: "Bring ideas to life with thoughtful visual storytelling.",
    copy: "Develop AI-assisted visuals, video concepts, motion-led content and creative assets that help explain products, services and brand stories.",
    points: ["AI-assisted video concepts", "Social and campaign creatives", "Visual storytelling", "Creative planning and storyboards"],
    href: "/services/ai-video-and-creative", tone: "from-[#F1EAE4] to-[#FAF6F0]",
  },
];

const industries = [
  { name: "Retail & local businesses", icon: Store, text: "Help nearby customers understand what you offer, where to find you and how to get in touch." },
  { name: "Manufacturing & industrial", icon: Factory, text: "Present capabilities, products and company information clearly to B2B buyers." },
  { name: "Healthcare & clinics", icon: HeartPulse, text: "Make services, practitioner information and appointment pathways easier to understand." },
  { name: "Education & coaching", icon: GraduationCap, text: "Explain courses, programmes, admissions and learning options with clarity." },
  { name: "Real estate & property", icon: Building2, text: "Showcase properties, services and business credibility through a clear digital presence." },
  { name: "Restaurants & hospitality", icon: UtensilsCrossed, text: "Present menus, experiences, location details and updates consistently." },
  { name: "Professional services", icon: BriefcaseBusiness, text: "Communicate expertise, services and reasons to start a conversation." },
  { name: "Startups & growing brands", icon: Rocket, text: "Build a practical digital foundation as your business develops." },
  { name: "E-commerce & D2C", icon: ShoppingBag, text: "Improve product discovery, presentation and the path from browsing to purchase." },
  { name: "Beauty & wellness", icon: Sparkles, text: "Create a recognisable brand presence and make services easier to explore." },
];

const faqs = [
  ["Which digital marketing agency in Vasai offers SEO and website development?", "Sharp Rays offers SEO, website development, social media marketing, performance marketing, AI automation and creative digital solutions. Share your business requirements with us to discuss a suitable approach."],
  ["How much do digital marketing services cost in Vasai?", "Costs depend on the service, scope, complexity and deliverables. Sharp Rays has starting packages at ₹14,999, ₹24,999 and ₹39,999. Ask us for the current inclusions and a proposal based on your requirements."],
  ["Is SEO useful for small businesses in Vasai?", "SEO can help small businesses become more discoverable for relevant searches, explain their offerings and build a long-term organic presence. Outcomes depend on competition, website quality, search demand and ongoing work."],
  ["Do you develop websites for small businesses in Vasai?", "Yes. Website projects can include responsive design, clear navigation, service or product information, enquiry pathways and SEO-friendly foundations."],
  ["Can you help manufacturers in Vasai improve their online presence?", "Yes. A manufacturer may benefit from a professional company website, detailed product or capability pages, B2B-focused content and relevant SEO."],
  ["Do you serve businesses in Vasai East and Vasai West?", "This page is intended for businesses across Vasai East, Vasai West and surrounding areas. Contact Sharp Rays to discuss your location and project requirements."],
  ["Can I choose only SEO or website development?", "Yes. You can enquire about an individual service or discuss a combination of services if that better suits your objectives."],
  ["How long does SEO take to show results?", "SEO is an ongoing process. Timelines vary with the website's current condition, competition, search demand and the work involved. Rankings or enquiries cannot be guaranteed within a fixed timeframe."],
  ["Can social media marketing help a local business?", "It can help a business communicate with relevant audiences, showcase products and services, build recognition and maintain a consistent presence."],
  ["How can I get started with Sharp Rays?", "Use the enquiry form or contact options on this website. Share your business, website if available, main challenge and goals so we can understand what you need."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] ${light ? "text-[#D9C29F]" : "text-[#9A7950]"}`}><span className={`h-px w-8 ${light ? "bg-[#C6A77A]" : "bg-[#C6A77A]"}`} />{children}</div>;
}

function SectionTitle({ eyebrow, title, copy, light = false, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow light={light}>{eyebrow}</Eyebrow></div>
    <h2 className={`mt-5 font-serif text-[34px] font-normal leading-[1.12] tracking-[-.045em] sm:text-[43px] lg:text-[52px] ${light ? "text-white" : "text-[#122847]"}`}>{title}</h2>
    {copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] ${center ? "mx-auto" : ""} ${light ? "text-[#68798A]" : "text-[#657487]"}`}>{copy}</p>}
  </div>;
}

export default function VasaiRoadClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return <main className="overflow-hidden bg-[#FBFAF7] text-[#122847]">
    {/* HERO — editorial layout, not a reused service-page template */}
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#F8F7F3] px-5 pb-20 pt-32 text-[#122847] sm:px-8 sm:pt-36 lg:min-h-[780px] lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 78% 28%, rgba(198,167,122,.20), transparent 29%), radial-gradient(circle at 15% 90%, rgba(172,190,199,.22), transparent 32%)" }} />
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[620px] w-[620px] rounded-full border border-[#122847]/[.07]" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-[420px] w-[420px] rounded-full border border-[#C6A77A]/30" />
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <Reveal><div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-[#927650] shadow-sm"><MapPin size={12} /> Digital partner · Vasai, Maharashtra</div>
          <h1 className="mt-8 font-serif text-[46px] font-normal leading-[1.04] tracking-[-.05em] sm:text-[58px] lg:text-[70px]">A stronger digital presence for <span className="text-[#A88659] italic">Vasai businesses.</span></h1>
          <p className="mt-7 max-w-[590px] text-[15px] leading-[1.95] text-[#596D80]">Sharp Rays brings SEO, website development, social media marketing and creative digital solutions together to help businesses become easier to discover, understand and contact.</p>
          <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#82909B]">For retailers, manufacturers, startups and professional businesses across Vasai East, Vasai West and nearby areas.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link href="/contact?source=vasai-location" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#D9C5A7] px-6 text-[12px] font-semibold text-[#122847] shadow-[0_8px_24px_-16px_rgba(18,40,71,.35)] transition hover:bg-[#D7BE9A]">Discuss Your Project <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link><Link href="#vasai-services" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#D8D0C4] bg-white/70 px-6 text-[12px] text-[#344A60] transition hover:border-[#C6A77A] hover:bg-white">Explore Services <ArrowDown size={15} /></Link></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DED3] pt-6 text-[10px] uppercase tracking-[.15em] text-[#788795]"><span>Search visibility</span><span>Better websites</span><span>Brand communication</span></div>
        </div></Reveal>
        <Reveal delay={0.12}><div className="relative mx-auto w-full max-w-[590px]">
          <div className="relative aspect-[.94] overflow-hidden rounded-[5px] border border-[#DED8CD] bg-gradient-to-br from-[#E8EEF1] via-[#F5F2EB] to-[#E8E2D8] p-5 sm:p-7">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(18,40,71,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,40,71,.08) 1px, transparent 1px)", backgroundSize: "38px 38px" }} />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#C6A77A]/10 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between"><span className="text-[9px] uppercase tracking-[.22em] text-[#9A7950]">The digital landscape</span><Globe2 size={19} className="text-[#C6A77A]" strokeWidth={1.2} /></div>
              <div className="relative mx-auto flex w-full max-w-[390px] flex-col gap-3">
                <div className="rounded-xl border border-[#DED8CD] bg-white/95 p-4 text-[#122847] shadow-2xl shadow-black/20">
                  <div className="flex items-center justify-between border-b border-[#E8E1D6] pb-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#C6A77A]"/><span className="text-[9px] font-semibold tracking-[.15em]">YOUR BUSINESS</span></div><span className="text-[8px] text-[#8B98A5]">ONLINE PRESENCE</span></div>
                  <div className="mt-4 grid grid-cols-[1fr_82px] items-center gap-3"><div><div className="h-2 w-4/5 rounded bg-[#122847]"/><div className="mt-2 h-2 w-3/5 rounded bg-[#C9D1D8]"/><div className="mt-4 inline-flex rounded-full bg-[#C6A77A] px-3 py-2 text-[8px] font-semibold">Explore services</div></div><div className="flex aspect-square items-center justify-center rounded-lg bg-[#E9EDF0]"><Layers3 size={34} strokeWidth={1.1} className="text-[#6E8294]"/></div></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[{ icon: Search, label: "SEARCH" }, { icon: MonitorSmartphone, label: "WEB" }, { icon: Megaphone, label: "SOCIAL" }].map(({ icon: Icon, label }) => <div key={label} className="flex items-center justify-center gap-2 rounded-lg border border-[#DED8CD] bg-white/70 py-3 text-[8px] tracking-[.15em] text-[#52677D]"><Icon size={13} className="text-[#D5B98E]"/>{label}</div>)}
                </div>
              </div>
              <div className="flex items-end justify-between"><p className="max-w-[210px] font-serif text-[21px] leading-tight text-[#344A60]">Make every digital touchpoint <span className="text-[#A88659] italic">count.</span></p><span className="text-[9px] tracking-[.18em] text-[#82909B]">SHARP RAYS / 01</span></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden max-w-[230px] border border-[#D7C3A5] bg-[#F7F3EB] p-4 text-[#122847] shadow-xl sm:block"><span className="text-[9px] uppercase tracking-[.17em] text-[#9A7950]">Our point of view</span><p className="mt-2 font-serif text-[18px] leading-snug">Strategy first. Design with purpose.</p></div>
        </div></Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A77A]/60 to-transparent" />
    </section>

    {/* DIRECT ANSWER */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal><Eyebrow>01 / A local digital partner</Eyebrow><h2 className="mt-5 max-w-[390px] font-serif text-[35px] leading-[1.12] tracking-[-.04em] sm:text-[43px]">Looking for a digital marketing agency in <span className="text-[#A88659] italic">Vasai?</span></h2></Reveal>
        <Reveal delay={0.08}><div className="border-l border-[#D9C8AE] pl-6 sm:pl-9"><p className="text-[16px] leading-[1.9] text-[#354B63]">Sharp Rays is a digital marketing agency offering SEO, website development, social media marketing, performance marketing, AI automation and AI-powered creative solutions for businesses in Vasai.</p><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">We help businesses improve online visibility, build professional websites and communicate more effectively with relevant audiences. Our approach starts by understanding your business, audience and objectives before identifying the digital solutions that make sense.</p><div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">{["Understand the business", "Choose relevant channels", "Build for real users"].map((x,i)=><div key={x} className="border-t border-[#D8C9B5] pt-3"><span className="font-serif text-[24px] text-[#C6A77A]">0{i+1}</span><p className="mt-1 text-[11px] text-[#52677D]">{x}</p></div>)}</div></div></Reveal>
      </div>
    </section>

    {/* SERVICES — alternating editorial cards */}
  
<section
  id="vasai-services"
  className="scroll-mt-20 bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
>
  <div className="mx-auto max-w-[1200px]">
    <Reveal>
      <SectionTitle
        eyebrow="02 / What we do"
        title={
          <>
            Digital marketing services for your{" "}
            <span className="text-[#A88659] italic">next move.</span>
          </>
        }
        copy="Different businesses need different things from digital marketing. Explore the capabilities that can help you establish, improve or strengthen your online presence."
      />
    </Reveal>

    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <Reveal key={service.no} delay={i * 0.04}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[5px] border border-[#E9E2D8] bg-[#FFFDF9] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D7C5A9] hover:shadow-[0_18px_50px_rgba(50,40,25,0.06)] sm:p-9">

              {/* Subtle top accent */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />

              {/* Number and icon */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-[13px] tracking-[0.18em] text-[#B49A78]">
                  {service.no} / 06
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EAE1D4] bg-[#F8F5EF] transition-all duration-500 group-hover:bg-[#EFE8DC]">
                  <Icon
                    size={21}
                    strokeWidth={1.35}
                    className="text-[#A88659]"
                  />
                </div>
              </div>

              {/* Service content */}
              <div className="mt-9">
                <p className="font-serif text-[17px] italic leading-snug text-[#A88659]">
                  {service.line}
                </p>

                <h3 className="mt-2 font-serif text-[29px] leading-tight tracking-[-0.035em] text-[#26364A] sm:text-[34px]">
                  {service.title}
                  <span className="text-[#B79A72]">.</span>
                </h3>

                <p className="mt-4 max-w-[480px] text-[12px] leading-[2] text-[#718092] sm:text-[13px]">
                  {service.copy}
                </p>
              </div>

              {/* Service features */}
              <div className="mt-7 grid gap-x-4 gap-y-3 border-t border-[#EEE7DD] pt-6 sm:grid-cols-2">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#526477]"
                  >
                    <Check
                      size={14}
                      strokeWidth={1.7}
                      className="mt-0.5 shrink-0 text-[#B08D5C]"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto pt-8">
                <div className="border-t border-[#EEE7DD] pt-5">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#26364A] transition-colors duration-300 hover:text-[#A88659]"
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
  </div>
</section>


    {/* LOCAL NEEDS */}
    <section className="bg-[#F4F5F2] px-5 py-20 text-[#122847] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <Reveal><SectionTitle eyebrow="03 / The local business picture" title={<>One town. Different business <span className="text-[#A88659] italic">ambitions.</span></>} copy="A local retailer, an industrial supplier and a professional service provider do not share the same customer journey. Their digital approach should reflect that." /></Reveal>
        <div className="grid gap-px self-start border border-[#E5E2DA] bg-[#E5E2DA] sm:grid-cols-2">{[
          ["01", "Be discovered", "Help relevant customers find accurate business and service information."],
          ["02", "Explain your value", "Make products, services and capabilities easier to understand."],
          ["03", "Build confidence", "Use clear information, a professional website and consistent communication."],
          ["04", "Make contact easier", "Create straightforward paths for enquiries, calls and next steps."],
        ].map(([n,t,d],i)=><Reveal key={n} delay={i*.06}><div className="h-full bg-white p-6 sm:p-7"><span className="font-serif text-[30px] text-[#C6A77A]">{n}</span><h3 className="mt-5 font-serif text-[22px]">{t}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">{d}</p></div></Reveal>)}</div>
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="04 / Who we work to support" title={<>Digital solutions shaped around your <span className="text-[#A88659] italic">industry.</span></>} copy="Vasai's business mix spans local retail, industrial and professional services. We consider your audience and business model before recommending a digital approach." /></Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((industry,i)=>{const Icon=industry.icon;return <Reveal key={industry.name} delay={(i%5)*.04}><article className="group flex h-full min-h-[205px] flex-col border border-[#E8E1D7] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_18px_45px_-35px_rgba(18,40,71,.45)]"><div className="flex items-center justify-between"><Icon size={22} strokeWidth={1.25} className="text-[#A88659]"/><ArrowUpRight size={15} className="text-[#B8A78F] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></div><h3 className="mt-8 font-serif text-[19px] leading-tight">{industry.name}</h3><p className="mt-3 text-[11px] leading-[1.8] text-[#718092]">{industry.text}</p></article></Reveal>})}</div>
      </div>
    </section>

    {/* EAST / WEST */}
    <section className="bg-[#F5F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="05 / Across Vasai" title={<>Local context makes the strategy <span className="text-[#A88659] italic">more relevant.</span></>} copy="Vasai East and Vasai West include different business settings and customer needs. Location-specific communication should be useful, accurate and grounded in the areas a business genuinely serves." /></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal><article className="relative min-h-[350px] overflow-hidden border border-[#E5DED3] bg-gradient-to-br from-[#F0F3F3] via-[#F8F7F2] to-[#F3EEE7] p-7 text-[#122847] sm:p-10"><div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#122847]/[.07]"/><div className="absolute -right-5 top-0 h-52 w-52 rounded-full border border-[#C6A77A]/30"/><div className="relative flex h-full flex-col"><span className="text-[10px] uppercase tracking-[.2em] text-[#D5B98E]">Area focus / 01</span><h3 className="mt-6 font-serif text-[36px]">Vasai <span className="italic text-[#D5B98E]">West</span></h3><p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#68798A]">Commercial and neighbourhood areas around Ambadi Road and Manickpur include retailers, restaurants, clinics and professional service providers with varied digital requirements.</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#DED9CF] pt-6">{["Local SEO", "Business websites", "Social communication", "Clear enquiry paths"].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-[#52677D]"><span className="h-1 w-1 rounded-full bg-[#C6A77A]"/>{x}</div>)}</div></div></article></Reveal>
          <Reveal delay={.08}><article className="relative min-h-[350px] overflow-hidden border border-[#DED4C5] bg-[#F9F7F2] p-7 sm:p-10"><div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-[#C6A77A]/35"/><div className="absolute -right-5 top-0 h-52 w-52 rounded-full border border-[#122847]/10"/><div className="relative flex h-full flex-col"><span className="text-[10px] uppercase tracking-[.2em] text-[#9A7950]">Area focus / 02</span><h3 className="mt-6 font-serif text-[36px]">Vasai <span className="italic text-[#A88659]">East</span></h3><p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#66788A]">Areas around Waliv, Sativali and Gauraipada include industrial and commercial businesses that may need clear company websites, product information and B2B-focused communication.</p><div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#DED4C5] pt-6">{["Company websites", "Product pages", "B2B SEO", "Capability content"].map(x=><div key={x} className="flex items-center gap-2 text-[11px] text-[#52677D]"><span className="h-1 w-1 rounded-full bg-[#A88659]"/>{x}</div>)}</div></div></article></Reveal>
        </div>
        <p className="mt-6 text-[11px] leading-[1.8] text-[#7B8792]">These are examples of local business contexts, not a claim of a physical Sharp Rays office or verified client presence in each area.</p>
      </div>
    </section>

    {/* WEBSITE FOUNDATION */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <Reveal><div className="relative overflow-hidden bg-[#E9EDF0] p-6 sm:p-9"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#122847]/10"/><div className="relative border border-[#D4DCE1] bg-white p-5 shadow-[0_24px_60px_-40px_rgba(18,40,71,.4)] sm:p-7"><div className="flex items-center gap-1.5 border-b border-[#E8ECEF] pb-4"><span className="h-2 w-2 rounded-full bg-[#D8BDA0]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="h-2 w-2 rounded-full bg-[#D9DDE0]"/><span className="ml-auto text-[8px] tracking-[.15em] text-[#8997A4]">BUSINESS WEBSITE</span></div><div className="mt-6 grid grid-cols-[1fr_.75fr] gap-4"><div><div className="h-2 w-3/4 rounded bg-white"/><div className="mt-3 h-2 w-full rounded bg-[#DCE2E6]"/><div className="mt-2 h-2 w-4/5 rounded bg-[#DCE2E6]"/><div className="mt-6 h-8 w-24 rounded-full bg-[#C6A77A]"/></div><div className="aspect-square rounded bg-gradient-to-br from-[#D8E0E5] to-[#AABBC8]"/></div><div className="mt-7 grid grid-cols-3 gap-2">{[1,2,3].map(x=><div key={x} className="h-14 rounded bg-[#F0F2F3]"/>)}</div><div className="mt-6 h-2 w-2/5 rounded bg-[#DCE2E6]"/><div className="mt-2 h-2 w-3/4 rounded bg-[#E8ECEF]"/></div><div className="relative mt-4 flex items-center justify-between border border-[#D7C8B1] bg-[#F9F6EF] p-4"><div><span className="text-[8px] uppercase tracking-[.15em] text-[#9A7950]">A better first impression</span><p className="mt-1 font-serif text-[17px]">Designed around your customer.</p></div><MousePointerClick size={22} className="text-[#A88659]"/></div></div></Reveal>
        <Reveal delay={.08}><div><SectionTitle eyebrow="06 / Website & SEO foundations" title={<>What should your business website in Vasai <span className="text-[#A88659] italic">actually do?</span></>} copy="A website should do more than display a company name. It should help visitors understand what you offer, why it matters and how to take the next step."/><div className="mt-8 space-y-4">{[
          ["Mobile-first experience", "Responsive layouts that work across phones, tablets and desktops."],
          ["Clear website structure", "Logical navigation, useful headings and well-organised service information."],
          ["Search-friendly foundations", "Relevant page titles, content structure, internal links and technical basics."],
          ["Performance and usability", "A considered focus on speed, accessibility and a friction-light experience."],
          ["Enquiry-focused pathways", "Visible calls to action, useful contact details and straightforward forms."],
          ["Accurate local information", "Location and service-area details that reflect where your business genuinely operates."],
        ].map(([title,copy],i)=><div key={title} className="flex gap-4 border-b border-[#EAE5DC] pb-4"><span className="font-serif text-[20px] text-[#C6A77A]">0{i+1}</span><div><h3 className="text-[13px] font-semibold">{title}</h3><p className="mt-1 text-[11px] leading-[1.8] text-[#718092]">{copy}</p></div></div>)}</div><Link href="/contact?source=vasai-website" className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.12em]">Discuss a website project <ArrowUpRight size={15} className="text-[#A88659]"/></Link></div></Reveal>
      </div>
    </section>

    {/* PROCESS */}
    <section className="bg-[#F4F2ED] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="07 / How we work" title={<>A thoughtful process, from first conversation to <span className="text-[#A88659] italic">implementation.</span></>} copy="We begin with your business requirements, then identify the work that is relevant to your goals and resources."/></Reveal>
        <div className="mt-14 grid gap-0 border-y border-[#D4C9B8] md:grid-cols-4">{[
          ["01", "Understand", "Discuss your business, audience, current digital presence and priorities.", "Business context"],
          ["02", "Identify", "Review the relevant opportunities across website, search, social and other channels.", "Priority areas"],
          ["03", "Plan & create", "Agree the scope, deliverables and approach before the work begins.", "Clear action plan"],
          ["04", "Implement & improve", "Deliver the agreed work, review useful indicators and identify improvements.", "Ongoing learning"],
        ].map(([num,title,copy,output],i)=><Reveal key={num} delay={i*.06}><article className={`flex h-full flex-col py-7 md:px-6 ${i===0?"md:pl-0":""} ${i!==3?"md:border-r md:border-[#D4C9B8]":""}`}><span className="font-serif text-[43px] leading-none text-[#B18E60]">{num}</span><h3 className="mt-7 font-serif text-[25px]">{title}</h3><p className="mt-3 min-h-[78px] text-[12px] leading-[1.9] text-[#68798A]">{copy}</p><div className="mt-6 border-t border-[#D4C9B8] pt-4 text-[9px] uppercase tracking-[.15em] text-[#9A7950]">{output}</div></article></Reveal>)}</div>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionTitle eyebrow="08 / Why Sharp Rays" title={<>Thoughtful digital work. <span className="text-[#A88659] italic">Clear intent.</span></>} copy="Choosing an agency means choosing a partner in how your business appears and communicates online. Our approach combines creativity, strategy and technology."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{[
          [Target,"Strategy before execution","Understand the business and its objectives before recommending channels."],
          [Layers3,"Connected capabilities","Bring website, SEO, social and creative work together where it makes sense."],
          [ShieldCheck,"Realistic expectations","Clear scope, transparent communication and no guaranteed-ranking claims."],
          [Sparkles,"Creative with purpose","Use design and technology to make information more engaging and useful."],
        ].map(([Icon,title,copy]:any,i)=><Reveal key={title} delay={i*.05}><article className="border-b border-[#EAE5DC] py-6"><Icon size={22} strokeWidth={1.3} className="text-[#A88659]"/><h3 className="mt-4 font-serif text-[22px]">{title}</h3><p className="mt-2 text-[12px] leading-[1.9] text-[#718092]">{copy}</p></article></Reveal>)}</div>
      </div>
    </section>

   

    {/* PRICING */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="10 / Project options" title={<>Start with the scope your business <span className="text-[#A88659] italic">needs.</span></>} copy="Every business has different requirements. These starting options are a reference point; the right solution depends on the services, scope and deliverables involved."/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{[
          ["Starter","₹14,999","For businesses exploring an initial digital solution."],
          ["Growth","₹24,999","For businesses looking to develop and strengthen their digital presence."],
          ["Advanced","₹39,999","For businesses with broader digital requirements."],
        ].map(([name,price,desc],i)=><Reveal key={name} delay={i*.07}><article className={`relative flex h-full flex-col border p-7 ${i===1?"border-[#C6A77A] bg-[#F4EFE6]":"border-[#E5DED3] bg-white"}`}><span className="text-[9px] uppercase tracking-[.2em] text-[#9A7950]">{i===0?"A considered start":i===1?"Room to grow":"Broader scope"}</span><h3 className="mt-5 font-serif text-[25px]">{name}</h3><p className="mt-4 font-serif text-[42px] tracking-[-.04em]">{price}<span className="ml-2 text-[11px] tracking-normal text-[#7A8793]">onwards</span></p><p className="mt-4 flex-1 text-[12px] leading-[1.9] text-[#718092]">{desc}</p><Link href="/pricing" className="mt-7 inline-flex items-center gap-2 border-t border-[#E2D9CC] pt-5 text-[10px] font-semibold uppercase tracking-[.13em]">View package details <ArrowUpRight size={14} className="text-[#A88659]"/></Link></article></Reveal>)}</div>
        <p className="mt-5 text-[10px] leading-[1.8] text-[#8A949D]">Confirm current package inclusions, taxes, timelines and applicable terms before publishing or purchasing.</p>
      </div>
    </section>

   
 {/* 09 FAQ */}
<section
  className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="services-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">

   <div className="mx-auto max-w-[800px] text-center">
  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B79A72]">
    Questions Before You Start
  </p>

  <h2
    id="services-faq-heading"
    className="font-[var(--font-new-york)] text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] tracking-[-0.035em] text-[#26364A]"
  >
    Frequently Asked{" "}
    <span className="text-[#B79A72]">Questions.</span>
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
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
              {String(i + 1).padStart(2, "0")}
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
      <div className="relative mx-auto max-w-[1200px] overflow-hidden border border-[#E8DED0] bg-gradient-to-br from-[#F7F4ED] via-[#FBFAF7] to-[#EEF2F1] px-7 py-12 text-[#122847] shadow-[0_24px_70px_-55px_rgba(18,40,71,.35)] sm:px-12 sm:py-16 lg:px-16"><div className="pointer-events-none absolute -right-24 -top-36 h-[480px] w-[480px] rounded-full border border-[#C6A77A]/30"/><div className="pointer-events-none absolute -right-5 -top-16 h-[330px] w-[330px] rounded-full border border-[#122847]/[.07]"/><div className="relative grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><Reveal><Eyebrow>12 / Let's build something better</Eyebrow><h2 className="mt-6 max-w-[700px] font-serif text-[38px] leading-[1.08] tracking-[-.045em] sm:text-[50px]">Ready to move your business <span className="text-[#A88659] italic">forward?</span></h2><p className="mt-5 max-w-[610px] text-[13px] leading-[1.95] text-[#68798A]">Whether you need a professional website, stronger visibility on Google or a more consistent social media presence, let's understand your goals and identify a useful next step.</p></Reveal><Reveal delay={.1}><div className="border-t border-[#DED8CD] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><p className="font-serif text-[23px] leading-snug">Tell us what you're building.</p><p className="mt-3 text-[11px] leading-[1.8] text-[#7A8793]">Share your business, website and the challenge you'd like to solve.</p><div className="mt-6 flex flex-col gap-3"><Link href="/contact?source=vasai-location" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#C6A77A] px-5 text-[11px] font-semibold text-[#122847] transition hover:bg-[#D8C09B]">Get a Free Consultation <ArrowUpRight size={15}/></Link><Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#D8D0C4] bg-white/65 px-5 text-[11px] text-[#344A60] transition hover:bg-white">Explore all services <ArrowRight size={15}/></Link></div></div></Reveal></div><div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#DED8CD] pt-5 text-[9px] uppercase tracking-[.18em] text-[#87919A]"><span>SHARP RAYS — WE CREATE THE “OH, WOW.”!</span><span>VASAI · MAHARASHTRA</span></div></div>
    </section>
  </main>;
}
