"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  Search,
  MonitorSmartphone,
  Megaphone,
  Target,
  Video,
  Workflow,
  ArrowRight,
  Clapperboard,
FileText,
Compass,
Globe2,
ChartNoAxesCombined,
MousePointer2,
Navigation as NavigationIcon,
  Store,
  Stethoscope,
  GraduationCap,
  Building2,
  ShoppingBag,
  BriefcaseBusiness,
  MapPin,
  Check,
  HeartPulse,
  Hotel,
  House,
  Factory,
  Sparkles,
  ArrowUpRight,
  Utensils,
} from "lucide-react";

const C = {
  navy: "#122847",
  deep: "#0B2A52",
  gold: "#C6A77A",
  ivory: "#FCFAF7",
  cream: "#F5F1E9",
  text: "#34445A",
  muted: "#718096",
  line: "#E8E1D7",
  white: "#FFFFFF",
};

const CONTACT_URL = "/contact?source=mira-road-location";
const AUDIT_URL = "/free-audit";

const services = [
  {
    number: "01",
    title: "Search Engine Optimisation",
    short: "SEO",
    description:
      "Improve how your business appears in relevant searches through technical improvements, useful content and a more organised website structure.",
    features: [
      "Technical SEO and website audits",
      "Local keyword research",
      "On-page optimisation",
      "Content and internal linking",
    ],
    suitable:
      "Businesses that want to build long-term organic search visibility.",
    href: "/locations/mira-road/seo",
    icon: Search,
    accent: "#65836F",
    tint: "#EEF3EE",
  },
  {
    number: "02",
    title: "Website Development",
    short: "Websites",
    description:
      "Create a professional digital home for your business with clear service information, responsive layouts and useful enquiry journeys.",
    features: [
      "Business and service websites",
      "Responsive mobile-first design",
      "Landing pages and enquiry forms",
      "SEO-friendly website structure",
    ],
    suitable:
      "Businesses creating a new website or improving an existing one.",
    href: "/locations/mira-road/website-development",
    icon: MonitorSmartphone,
    accent: "#557A9B",
    tint: "#EDF3F7",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    short: "Social",
    description:
      "Build a recognisable brand presence through planned content, creative communication and consistent activity across relevant platforms.",
    features: [
      "Social media strategy",
      "Content calendars",
      "Creative posts and reels",
      "Content performance reviews",
    ],
    suitable:
      "Brands that want more consistent communication with their audience.",
    href: "/locations/mira-road/social-media-marketing",
    icon: Megaphone,
    accent: "#8A719C",
    tint: "#F3EFF6",
  },
  {
    number: "04",
    title: "Performance Marketing",
    short: "Paid Media",
    description:
      "Plan and manage paid campaigns around relevant audiences, campaign objectives, suitable landing pages and measurable activity.",
    features: [
      "Campaign planning",
      "Audience and keyword targeting",
      "Ad creative direction",
      "Campaign monitoring and optimisation",
    ],
    suitable:
      "Businesses ready to explore paid campaigns with a defined advertising budget.",
    href: "/locations/mira-road/performance-marketing",
    icon: Target,
    accent: "#B47B62",
    tint: "#F8F0EC",
  },
  {
    number: "05",
    title: "AI Video & Creative",
    short: "Creative",
    description:
      "Develop visual concepts, short-form videos and campaign creatives to communicate products, services and brand ideas.",
    features: [
      "Short-form video concepts",
      "AI-assisted visual production",
      "Promotional creative assets",
      "Social and campaign content",
    ],
    suitable:
      "Businesses that need fresh visual content for digital communication.",
    href: "/locations/mira-road/ai-video-and-creative",
    icon: Video,
    accent: "#A17E4D",
    tint: "#F5F1E8",
  },
  {
    number: "06",
    title: "AI Automation",
    short: "Automation",
    description:
      "Identify repetitive business tasks and explore practical workflows that connect tools, organise information and reduce manual work.",
    features: [
      "Workflow planning",
      "Lead capture and routing",
      "Email and notification workflows",
      "Business process automation",
    ],
    suitable:
      "Teams looking to make routine business processes more organised.",
    href: "/locations/mira-road/ai-automation",
    icon: Workflow,
    accent: "#64877D",
    tint: "#EEF4F1",
  },
];

const neighbourhoods = [
  {
    number: "01",
    name: "Shanti Nagar",
    category: "Residential & Retail",
    description:
      "A useful local context for businesses serving residents through shops, everyday services and neighbourhood-focused offerings.",
  },
  {
    number: "02",
    name: "Beverly Park",
    category: "Residential & Professional",
    description:
      "Businesses such as clinics and professional service providers can use clear service pages and accessible enquiry information.",
  },
  {
    number: "03",
    name: "Poonam Sagar",
    category: "Neighbourhood Businesses",
    description:
      "Local businesses can make their offerings easier to understand through accurate business information and relevant digital content.",
  },
  {
    number: "04",
    name: "Mira Road East",
    category: "Local Business Area",
    description:
      "A broader local context for businesses serving customers across different parts of Mira Road East.",
  },
];

const industries = [
  {
    name: "Beauty & Wellness",
    icon: Sparkles,
    detail: "Beauty brands, salons and wellness businesses",
    href: "/industries/beauty-wellness",
  },
  {
    name: "Ecommerce",
    icon: ShoppingBag,
    detail: "Online stores and product-led brands",
    href: "/industries/ecommerce",
  },
  {
    name: "Education",
    icon: GraduationCap,
    detail: "Institutes, coaching and learning platforms",
    href: "/industries/education",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    detail: "Clinics, healthcare providers and practices",
    href: "/industries/healthcare",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    detail: "Manufacturers, suppliers and industrial businesses",
    href: "/industries/manufacturing",
  },
  {
    name: "Professional Services",
    icon: BriefcaseBusiness,
    detail: "Consultants, agencies and service providers",
    href: "/industries/professional-services",
  },
  {
    name: "Real Estate",
    icon: House,
    detail: "Developers, brokers and property businesses",
    href: "/industries/real-estate",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    detail: "Restaurants, cafes and food businesses",
    href: "/industries/restaurants",
  },
  {
    name: "Startups",
    icon: Building2,
    detail: "Early-stage ventures and growing companies",
    href: "/industries/startup",
  },
  {
    name: "Travel & Hospitality",
    icon: Hotel,
    detail: "Hotels, travel brands and hospitality businesses",
    href: "/industries/travel-hospitality",
  },
];

const faqs = [
  {
    q: "Do you provide digital marketing services in Mira Road?",
    a: "Sharp Rays offers digital services for businesses looking to improve their online presence in Mira Road. These include SEO, website development, social media marketing, performance marketing, AI video and creative services, and AI automation.",
  },
  {
    q: "Can you help businesses near Mira Road station?",
    a: "You can enquire about digital marketing requirements for businesses serving customers near Mira Road station. The suitable approach depends on your business, target audience and service requirements.",
  },
  {
    q: "Do you work with businesses in Mira Road East?",
    a: "Businesses serving Mira Road East, including areas such as Shanti Nagar, Beverly Park and Poonam Sagar, can discuss their digital requirements with Sharp Rays.",
  },
  {
    q: "Which digital marketing service should my business start with?",
    a: "The right starting point depends on your current digital presence. A business with an outdated website may need website improvements, while another may benefit from SEO, social media or a combination of services.",
  },
  {
    q: "Can you develop a website for a small business in Mira Road?",
    a: "Yes. Website projects can be planned around the business's services, audience, content, functionality and enquiry requirements. The scope is discussed before the project begins.",
  },
  {
    q: "Can I choose SEO or social media marketing separately?",
    a: "Yes. You can enquire about an individual service or discuss a combination of services. The recommended scope depends on your business priorities.",
  },
  {
    q: "Do you provide paid advertising services?",
    a: "Performance marketing can include campaign planning, audience targeting, creative direction, landing-page alignment and campaign optimisation. Advertising spend is separate from service fees.",
  },
  {
    q: "How much do digital marketing services cost?",
    a: "Pricing depends on the selected service, deliverables, complexity and ongoing requirements. You can explore the Sharp Rays pricing page or contact the team to discuss your project.",
  },
  {
    q: "Can digital marketing guarantee Google rankings?",
    a: "No agency can responsibly guarantee specific organic search rankings. SEO work focuses on improving technical foundations, relevance, content quality and the overall search experience.",
  },
  {
    q: "How do I get started with Sharp Rays?",
    a: "Share your business details, website if available, location and goals through the contact page. Sharp Rays can then understand your requirements and discuss suitable next steps.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-px w-7"
        style={{ background: light ? C.gold : "#B79A72" }}
      />
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: light ? "#D9C5A5" : "#9B805B" }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[680px]">
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>

      <h2
        className="mt-5 font-[var(--font-new-york)] text-[32px] font-medium leading-[1.12] tracking-[-0.04em] sm:text-[42px] lg:text-[48px]"
        style={{ color: dark ? C.white : C.navy }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-5 max-w-[570px] text-sm leading-8"
          style={{ color: dark ? "rgba(255,255,255,.65)" : C.muted }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   FAQ STRUCTURED DATA
========================================================= */

function MiraRoadFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function MiraRoadPageClient() {
  return (
    <>
      <MiraRoadFAQSchema />

      <main className="overflow-hidden bg-white text-[#122847]">


{/* =====================================================
    01. HERO — PREMIUM SPLIT EDITORIAL DESIGN
===================================================== */}

<section className="relative isolate overflow-hidden bg-[#FCFAF7]">

  {/* BACKGROUND ATMOSPHERE */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full border border-[#C6A77A]/15" />
    <div className="absolute -right-28 -top-28 h-[480px] w-[480px] rounded-full border border-[#C6A77A]/15" />
    <div className="absolute left-0 top-0 h-full w-px bg-[#E8E1D7]/70" />
    <div className="absolute bottom-0 h-px w-full bg-[#E8E1D7]" />
    <div className="absolute right-[15%] top-[30%] h-64 w-64 rounded-full bg-[#D9C8AF]/15 blur-[90px]" />
  </div>

  <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-9 sm:px-9 sm:pb-20 lg:px-14 lg:pt-11">

    {/* TOP BRAND NAVIGATION */}
    <Reveal>
      <div className="flex items-center justify-between border-b border-[#E8E1D7] pb-5">

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#C6A77A]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#122847]">
            Sharp Rays
          </span>
        </div>

        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.17em] text-[#8791A0]">
          <MapPin size={12} className="text-[#A78354]" />
          Mira Road, Maharashtra
        </div>

      </div>
    </Reveal>

    {/* MAIN HERO */}
    <div className="grid items-center gap-12 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:pt-20">

      {/* LEFT CONTENT */}
      <Reveal>
        <div className="relative z-10 max-w-[720px]">

          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#C6A77A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B59]">
              Digital growth for local businesses
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="mt-8 font-[var(--font-new-york)] text-[43px] font-medium leading-[1.08] tracking-[-0.05em] text-[#122847] sm:text-[59px] lg:text-[68px] xl:text-[76px]">
            Digital Marketing
            <span className="block">Agency in</span>
            <span className="relative inline-block italic text-[#A78354]">
              Mira Road.
              <span className="absolute -bottom-2 left-0 h-px w-full bg-[#C6A77A]" />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-9 max-w-[550px] text-sm leading-8 text-[#718096] sm:text-base">
            Great businesses deserve to be seen. Sharp Rays helps
            businesses in Mira Road build a stronger digital presence
            through search engine optimisation, website development,
            social media marketing and thoughtful creative solutions.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-3">

            <Link
              href={AUDIT_URL}
              title="Request a free digital marketing audit for your Mira Road business"
              className="group inline-flex items-center gap-4 rounded-full bg-[#122847] px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D3B60] hover:shadow-[0_12px_28px_rgba(18,40,71,.15)]"
            >
              Get Your Free Audit

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>

           <Link
  href="#mira-services"
  title="Explore Digital Marketing Services in Mira Road"
  className="group inline-flex items-center gap-3 rounded-full border border-[#DCD3C6] bg-white/70 px-6 py-3.5 text-xs font-semibold text-[#122847] transition-all duration-300 hover:border-[#C6A77A] hover:bg-white"
>
              Explore Our Services
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* SMALL TRUST / BRAND STATEMENT */}
          <div className="mt-12 flex items-center gap-4 border-t border-[#E8E1D7] pt-6">

            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FCFAF7] bg-[#E9DFD0] text-[#A78354]">
                <Search size={13} />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FCFAF7] bg-[#E5EAF0] text-[#557A9B]">
                <MonitorSmartphone size={13} />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FCFAF7] bg-[#EEE7F0] text-[#8A719C]">
                <Megaphone size={13} />
              </span>
            </div>

            <div>
              <p className="text-[10px] font-semibold text-[#122847]">
                Strategy meets creativity.
              </p>
              <p className="mt-1 text-[9px] text-[#8791A0]">
                Digital experiences designed with purpose.
              </p>
            </div>

          </div>

        </div>
      </Reveal>

      {/* RIGHT — ABSTRACT EDITORIAL VISUAL */}
      <Reveal delay={0.15}>
        <div className="relative mx-auto w-full max-w-[570px]">

          {/* VISUAL CANVAS */}
          <div className="relative aspect-[1/1.03] overflow-hidden">

            {/* SOFT BACKGROUND */}
            <div className="absolute inset-0 bg-[#F2EDE4]" />

            {/* ABSTRACT GRADIENT */}
            <div className="absolute -right-[10%] top-[5%] h-[75%] w-[75%] rounded-full bg-gradient-to-br from-[#DCCBB1]/70 via-[#E8DFD1]/40 to-transparent blur-[2px]" />

            {/* ORBIT LINES */}
            <div className="absolute -right-[12%] top-[10%] h-[82%] w-[82%] rounded-full border border-[#A78354]/35" />
            <div className="absolute -right-[2%] top-[20%] h-[62%] w-[62%] rounded-full border border-[#A78354]/30" />
            <div className="absolute right-[8%] top-[30%] h-[42%] w-[42%] rounded-full border border-[#A78354]/25" />

            {/* ABSTRACT ARCHITECTURAL FORMS */}
            <div className="absolute right-[16%] top-[22%] h-[43%] w-[34%] rotate-[18deg] rounded-t-full border border-[#122847]/20 bg-gradient-to-b from-[#E9E1D4] to-[#D5C5AD]/60" />

            <div className="absolute right-[24%] top-[29%] h-[36%] w-[25%] rotate-[18deg] rounded-t-full border border-white/80 bg-[#F7F3EC]/70" />

            {/* OVERSIZED TYPOGRAPHY */}
            <div className="absolute left-[7%] top-[13%] z-10">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#927B59]">
                Local perspective
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[clamp(75px,12vw,148px)] leading-[.76] tracking-[-0.09em] text-[#122847]">
                MIRA
              </h2>

              <p className="mt-4 pl-2 font-[var(--font-new-york)] text-[clamp(28px,4vw,46px)] italic tracking-[-0.04em] text-[#A78354]">
                Road.
              </p>

            </div>

            {/* SMALL VERTICAL LABEL */}
            <div className="absolute right-[7%] top-[12%] z-10 flex items-center gap-3 [writing-mode:vertical-rl]">
              <span className="h-10 w-px bg-[#A78354]/60" />
              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#927B59]">
                Sharp Rays / 2026
              </span>
            </div>

            {/* LOWER ARTWORK TEXT */}
            <div className="absolute bottom-[10%] left-[8%] z-10 max-w-[300px]">

              <div className="mb-5 h-px w-16 bg-[#A78354]" />

              <p className="font-[var(--font-new-york)] text-[27px] leading-[1.1] tracking-[-0.03em] text-[#122847] sm:text-[34px]">
                Make your
                <span className="block italic text-[#A78354]">
                  presence matter.
                </span>
              </p>

              <p className="mt-4 text-[8px] font-medium uppercase tracking-[0.2em] text-[#897D6C]">
                Strategy · Design · Technology
              </p>

            </div>

            {/* SMALL DECORATIVE DOT */}
            <div className="absolute bottom-[12%] right-[12%] flex h-12 w-12 items-center justify-center rounded-full border border-[#A78354]/50 bg-[#F2EDE4]">
              <ArrowUpRight size={19} className="text-[#A78354]" />
            </div>

            {/* CANVAS CORNER DETAIL */}
            <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-[#A78354]/50" />

            <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-[#A78354]/50" />

          </div>

          {/* BOTTOM CAPTION */}
          <div className="mt-5 flex items-center justify-between border-b border-[#E8E1D7] pb-4">

            <p className="text-[9px] uppercase tracking-[0.17em] text-[#8791A0]">
              A new perspective on digital growth
            </p>

            <span className="font-[var(--font-new-york)] text-sm italic text-[#A78354]">
              We Create the “Oh, Wow.”!
            </span>

          </div>

        </div>
      </Reveal>

    </div>

    {/* BOTTOM BRAND LINE */}
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8E1D7] pt-5">

      <p className="text-[9px] uppercase tracking-[0.18em] text-[#8791A0]">
        Built around your business. Designed for your audience.
      </p>

      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A78354]">
        Sharp Rays — Digital Growth Partner
      </p>

    </div>

  </div>
</section>


        {/* =====================================================
            02. DIRECT ANSWER — EDITORIAL TEXT BAND
        ===================================================== */}

        <section className="border-b border-[#E8E1D7] bg-white px-5 py-16 sm:px-9 lg:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Digital marketing in Mira Road</Eyebrow>
              <h2 className="mt-5 font-[var(--font-new-york)] text-[30px] leading-[1.15] tracking-[-0.035em] sm:text-[38px]">
                What does your business need to grow online?
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-sm leading-8 text-[#718096] sm:text-base">
                <p>
                  A digital marketing agency helps businesses improve how they
                  present themselves online, reach relevant audiences and
                  communicate their products or services. This can involve
                  search engine optimisation, website development, social
                  media marketing and other digital activities.
                </p>

                <p>
                  For businesses around Mira Road station, Shanti Nagar,
                  Beverly Park and Poonam Sagar, the right approach depends on
                  the type of business, its customers and the way people look
                  for its services.
                </p>

                <p>
                  Sharp Rays focuses on practical digital foundations:
                  discoverability through SEO, clear website experiences and
                  consistent brand communication through social media.
                </p>

                <Link
                  href="/services/search-engine-optimization"
                  className="inline-flex items-center gap-2 border-b border-[#C6A77A] pb-1 text-xs font-semibold text-[#122847] transition hover:text-[#A78354]"
                >
                  Explore our core SEO services
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            03. NEIGHBOURHOODS — HORIZONTAL EDITORIAL INDEX
        ===================================================== */}

        <section className="bg-[#F7F4EE] px-5 py-20 sm:px-9 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                <SectionTitle
                  eyebrow="A closer look at the area"
                  title={
                    <>
                      One location.
                      <br />
                      <span className="italic text-[#A78354]">
                        Different business needs.
                      </span>
                    </>
                  }
                  description="Mira Road includes different neighbourhoods and business categories. Digital communication should reflect the customers a business actually serves."
                />

                <div className="max-w-[260px] border-l border-[#D8C8B2] pl-5">
                  <p className="text-xs leading-7 text-[#7D8794]">
                    Location relevance works best when it explains real
                    services, audiences and business information — not when
                    it simply repeats place names.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-[22px] border border-[#E4DCCE] bg-[#E4DCCE] sm:grid-cols-2 lg:grid-cols-4">
              {neighbourhoods.map((area, index) => (
                <Reveal key={area.number} delay={index * 0.06}>
                  <article className="flex h-full min-h-[280px] flex-col bg-[#FCFAF7] p-6 transition-colors duration-300 hover:bg-white sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[32px] text-[#C6A77A]">
                        {area.number}
                      </span>
                      <MapPin
                        size={17}
                        strokeWidth={1.4}
                        className="text-[#A78354]"
                      />
                    </div>

                    <div className="mt-auto">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A78354]">
                        {area.category}
                      </p>

                      <h3 className="mt-3 font-[var(--font-new-york)] text-[25px] tracking-[-0.02em] text-[#122847]">
                        {area.name}
                      </h3>

                      <p className="mt-3 text-xs leading-7 text-[#7A8795]">
                        {area.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

       
{/* =====================================================
    04. SIX SERVICES — COLOURFUL EDITORIAL BENTO
===================================================== */}

<section
  id="mira-services"
  className="relative overflow-hidden bg-white px-5 py-20 sm:px-9 lg:py-28"
>
  <div className="mx-auto max-w-[1260px]">

    {/* HEADER */}
    <Reveal>
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>What we do</Eyebrow>

          <h2 className="mt-5 max-w-2xl font-[var(--font-new-york)] text-3xl leading-[1.13] tracking-tight text-[#122847] sm:text-4xl lg:text-[48px]">
            Digital services for
            <span className="block italic text-[#A78354]">
              different stages of growth.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-[13px] leading-8 text-[#68798B] lg:pb-1">
          Thoughtful digital solutions for businesses looking to build
          their presence, connect with the right audience and move forward.
        </p>
      </div>
    </Reveal>

    {/* COLOURFUL SERVICE CARDS */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <Reveal key={service.number} delay={index * 0.055}>
            <article
              className="group relative flex h-full min-h-[510px] flex-col overflow-hidden rounded-[24px] border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(18,40,71,.10)] sm:p-7"
              style={{
                backgroundColor: service.tint,
                borderColor: `${service.accent}45`,
              }}
            >

              {/* DECORATIVE BACKGROUND */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-[1px] transition-transform duration-700 group-hover:scale-125"
                style={{ backgroundColor: service.accent }}
              />

              <div
                className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full opacity-[0.09] blur-2xl"
                style={{ backgroundColor: service.accent }}
              />

              {/* TOP ROW */}
              <div className="relative flex items-center justify-between">

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110"
                  style={{ color: service.accent }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <span
                  className="font-[var(--font-new-york)] text-[38px] leading-none"
                  style={{ color: `${service.accent}75` }}
                >
                  {service.number}
                </span>
              </div>

              {/* SERVICE TITLE */}
              <div className="relative mt-9">
                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: service.accent }}
                >
                  {service.short}
                </p>

                <h3 className="mt-3 max-w-[290px] font-[var(--font-new-york)] text-[25px] leading-[1.17] tracking-tight text-[#122847]">
                  {service.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-[#536477]">
                  {service.description}
                </p>
              </div>

              {/* FEATURES */}
              <div
                className="relative mt-7 rounded-2xl border p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.48)",
                  borderColor: `${service.accent}30`,
                }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-[9px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: service.accent }}
                  >
                    What it can include
                  </p>

                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: service.accent }}
                  />
                </div>

                <ul className="mt-4 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[11px] leading-5 text-[#536477]"
                    >
                      <span
                        className="mt-0.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-white"
                        style={{ color: service.accent }}
                      >
                        <Check size={10} strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SUITABLE FOR */}
              <div className="relative mt-5">
                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: service.accent }}
                >
                  Suitable for
                </p>

                <p className="mt-2 text-[11px] leading-6 text-[#58697B]">
                  {service.suitable}
                </p>
              </div>

              {/* EXPLORE LINK */}
              <div className="relative mt-auto pt-7">
                <Link
                  href={service.href}
                  title={`${service.title} in Mira Road - Sharp Rays`}
                  className="flex items-center justify-between border-t pt-5 text-xs font-semibold text-[#122847]"
                  style={{ borderColor: `${service.accent}35` }}
                >
                  <span className="transition-colors duration-300 group-hover:text-[#A78354]">
                    Explore service
                  </span>

                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#122847] group-hover:text-white"
                    style={{ color: service.accent }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>

              {/* BOTTOM ACCENT */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: service.accent }}
              />

            </article>
          </Reveal>
        );
      })}

    </div>

    {/* ALL SERVICES CTA */}
    <Reveal>
      <div className="mt-14 flex flex-col items-center text-center">

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#C6A77A]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
            Explore beyond
          </span>
          <span className="h-px w-10 bg-[#C6A77A]" />
        </div>

        <h3 className="font-[var(--font-new-york)] text-2xl text-[#122847] sm:text-3xl">
          There's more to explore.
        </h3>

        <p className="mt-3 max-w-md text-xs leading-7 text-[#68798B]">
          Discover all the digital services and creative solutions
          available for your business.
        </p>

        <Link
          href="/services"
          className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#122847] px-8 py-4 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#A78354] hover:shadow-lg"
        >
          Explore All Services

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight size={14} />
          </span>
        </Link>

      </div>
    </Reveal>

  </div>
</section>



{/* =====================================================
    INDUSTRIES WE HELP — EDITORIAL DIRECTORY
===================================================== */}

<section
  id="mira-industries"
  className="bg-[#FFFEFC] px-5 py-20 sm:px-9 lg:py-28"
>
  <div className="mx-auto max-w-[1260px]">

    {/* HEADER */}
    <Reveal>
      <div className="flex flex-col justify-between gap-7 border-b border-[#E9E3D9] pb-10 lg:flex-row lg:items-end">

        <div>
          <Eyebrow>Industries we help</Eyebrow>

          <h2 className="mt-5 max-w-2xl font-[var(--font-new-york)] text-3xl leading-[1.15] tracking-tight text-[#122847] sm:text-4xl lg:text-[46px]">
            Built around your
            <span className="block italic text-[#A78354]">
              industry's way of growing.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-[13px] leading-8 text-[#68798B]">
          Every business has a different audience and a different
          path to growth. Explore the industries we support with
          thoughtful digital and marketing solutions.
        </p>

      </div>
    </Reveal>

    {/* INDUSTRY DIRECTORY */}
    <div className="mt-10 grid gap-x-12 lg:grid-cols-2">

     
{industries.map((industry, index) => {
  const Icon = industry.icon;

  return (
    <Reveal key={industry.name} delay={index * 0.035}>
      <Link
        href={industry.href}
        title={`${industry.name} Digital Marketing - Sharp Rays`}
        className="group flex items-center gap-4 border-b border-[#E9E3D9] py-6 transition-all duration-300 sm:gap-6 sm:py-7"
      >
        {/* NUMBER */}
        <span className="w-7 shrink-0 font-[var(--font-new-york)] text-sm text-[#B6A995]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* ICON */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E9E3D9] bg-[#F7F4EE] text-[#A78354] transition-all duration-300 group-hover:border-[#C6A77A] group-hover:bg-[#122847] group-hover:text-white">
          <Icon size={19} strokeWidth={1.5} />
        </div>

        {/* INDUSTRY DETAILS */}
        <div className="min-w-0 flex-1">
          <h3 className="font-[var(--font-new-york)] text-lg leading-snug text-[#122847] transition-colors duration-300 group-hover:text-[#A78354] sm:text-xl">
            {industry.name}
          </h3>

          <p className="mt-1.5 text-[11px] leading-6 text-[#68798B] sm:text-xs">
            {industry.detail}
          </p>
        </div>

        {/* INDEX MARK */}
        <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E9E3D9] text-[#A78354] transition-all duration-300 group-hover:border-[#C6A77A] group-hover:bg-[#F7F4EE] sm:flex">
          <ArrowUpRight size={15} />
        </div>
      </Link>
    </Reveal>
  );
})}


    </div>

    {/* ALL INDUSTRIES */}
    <Reveal>
      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#E9E3D9] bg-[#F7F4EE] px-6 py-7 text-center sm:flex-row sm:text-left sm:px-9">

        <div>
          <h3 className="font-[var(--font-new-york)] text-xl text-[#122847] sm:text-2xl">
            Your industry isn't listed?
          </h3>

          <p className="mt-2 text-xs leading-6 text-[#68798B]">
            We work with businesses across different sectors and growth stages.
          </p>
        </div>

       <Link
  href="/industries"
  className="group inline-flex w-fit items-center gap-3 rounded-full border px-6 py-3 text-xs font-semibold transition-all duration-300 hover:bg-[#122847] hover:text-white"
  style={{ borderColor: "#C6A77A", color: C.navy }}
>
  Explore All Industries
  <ArrowUpRight
    size={15}
    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>

      </div>
    </Reveal>

  </div>
</section>



{/* OUR SERVICES - PREMIUM SERVICE COLLECTION */}
<section
  className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
  style={{ background: "#F8F7F4" }}
>
  {/* Soft background details */}
  <div
    className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full blur-3xl"
    style={{ background: "rgba(198,167,122,0.10)" }}
  />
  <div
    className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full blur-3xl"
    style={{ background: "rgba(18,40,71,0.035)" }}
  />

  <div className="relative mx-auto max-w-7xl">

    {/* HEADER */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow>Our Services</Eyebrow>
        </div>

        <h2
          className="mt-5 font-[var(--font-new-york)] text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          style={{ color: C.navy }}
        >
          Thoughtful solutions.
          <span
            className="block italic"
            style={{ color: "#AC895E" }}
          >
            Meaningful digital growth.
          </span>
        </h2>

        <p
          className="mx-auto mt-5 max-w-2xl text-sm leading-8"
          style={{ color: C.muted }}
        >
          From your first digital impression to long-term brand growth,
          explore the services that bring your ideas, technology and
          marketing together.
        </p>
      </div>
    </Reveal>

    {/* SERVICE COLLECTION */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          title: "Social Media Marketing",
          description:
            "Build a recognisable social presence with thoughtful content, consistent communication and audience-focused strategy.",
          icon: Megaphone,
          category: "Social & Brand",
          href: "/services/social-media-marketing",
        },
        {
          number: "02",
          title: "Search Engine Optimization",
          description:
            "Strengthen organic visibility with technical SEO, useful content and strategies built around search intent.",
          icon: Search,
          category: "Organic Growth",
          href: "/services/search-engine-optimization",
        },
        {
          number: "03",
          title: "Performance Marketing / Paid Media",
          description:
            "Reach relevant audiences through structured advertising campaigns, creative testing and ongoing optimization.",
          icon: Target,
          category: "Paid Growth",
          href: "/services/performance-marketing",
        },
        {
          number: "04",
          title: "Website Development & Management",
          description:
            "Create responsive, user-friendly websites that communicate your brand and support your business objectives.",
          icon: MonitorSmartphone,
          category: "Web & Technology",
          href: "/services/website-development",
        },
        {
          number: "05",
          title: "Digital PR & Media Relations",
          description:
            "Develop meaningful brand stories and strengthen your digital presence through media and communication.",
          icon: BriefcaseBusiness,
          category: "Brand Visibility",
          href: "/services/digital-pr-and-media-relations",
        },
        {
          number: "06",
          title: "AI Video and Creative",
          description:
            "Explore AI-assisted video concepts, visual storytelling and creative assets for digital campaigns.",
          icon: Video,
          category: "Creative Studio",
          href: "/services/ai-video-and-creative",
        },
        {
          number: "07",
          title: "Professional Video Editing",
          description:
            "Turn raw footage into polished videos, social content and engaging visual stories.",
          icon: Clapperboard,
          category: "Video Production",
          href: "/services/video-editing",
        },
        {
          number: "08",
          title: "Content Marketing",
          description:
            "Create purposeful content that answers audience questions, communicates expertise and supports discoverability.",
          icon: FileText,
          category: "Content & Strategy",
          href: "/services/content-marketing",
        },
        {
          number: "09",
          title: "AI Automation",
          description:
            "Simplify repetitive tasks and connect business workflows with practical automation solutions.",
          icon: Workflow,
          category: "Smart Automation",
          href: "/services/ai-automation",
        },
      ].map((service, index) => {
        const Icon = service.icon;

        return (
          <Reveal key={service.number} delay={index * 0.045}>
            <Link
              href={service.href}
              className="group relative flex h-full min-h-[275px] flex-col overflow-hidden rounded-[22px] border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(18,40,71,0.075)] sm:p-7"
              style={{
                background: "#FFFEFC",
                borderColor: "#E9E4DC",
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "#A98A64" }}
                >
                  {service.category}
                </span>

                <span
                  className="font-[var(--font-new-york)] text-sm"
                  style={{ color: "#B9AE9F" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mt-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "#F4F0E9",
                    color: "#A78354",
                  }}
                >
                  <Icon size={21} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 flex-1">
                <h3
                  className="max-w-[280px] font-[var(--font-new-york)] text-xl leading-snug tracking-tight"
                  style={{ color: C.navy }}
                >
                  {service.title}
                </h3>

                <p
                  className="mt-3 text-[12px] leading-7"
                  style={{ color: C.muted }}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom link */}
              <div
                className="mt-7 flex items-center justify-between border-t pt-4"
                style={{ borderColor: "#EEE9E1" }}
              >
                <span
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ color: C.navy }}
                >
                  Explore service
                </span>

                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[#122847] group-hover:bg-[#122847] group-hover:text-white"
                  style={{
                    borderColor: "#E6DED2",
                    color: "#A78354",
                  }}
                >
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "#C6A77A" }}
              />
            </Link>
          </Reveal>
        );
      })}
    </div>

    {/* BOTTOM CTA */}
    <Reveal>
      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left"
        style={{
          background: "#F0EBE2",
          borderColor: "#E6DCCE",
        }}
      >
        <div>
          <p
            className="font-[var(--font-new-york)] text-xl sm:text-2xl"
            style={{ color: C.navy }}
          >
            Have something different in mind?
          </p>

          <p
            className="mt-2 text-xs leading-6"
            style={{ color: C.muted }}
          >
            Let's find the right combination of services for your business.
          </p>
        </div>

        <Link
          href="/services"
          className="group inline-flex shrink-0 items-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg"
          style={{ background: C.navy }}
        >
          Explore All Services
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </Reveal>

  </div>
</section>



        {/* =====================================================
            06. LOCAL SEO — SPLIT FEATURE PANEL
        ===================================================== */}

        <section className="bg-white px-5 py-20 sm:px-9 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <div className="overflow-hidden rounded-[28px] bg-[#122847]">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <Reveal className="relative flex min-h-[450px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:p-14">
                  <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
                  <div className="absolute -right-5 top-10 h-52 w-52 rounded-full border border-[#C6A77A]/30" />
                  <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#C6A77A]/10 blur-3xl" />

                  <div className="relative">
                    <Eyebrow light>Local search strategy</Eyebrow>

                    <h2 className="mt-7 max-w-[490px] font-[var(--font-new-york)] text-[36px] leading-[1.1] tracking-[-0.04em] text-white sm:text-[46px]">
                      Help nearby customers understand what you offer.
                    </h2>

                    <p className="mt-6 max-w-[440px] text-sm leading-8 text-white/60">
                      Local SEO connects your business information with
                      relevant local searches. The foundation is accurate,
                      useful and consistent information across your website
                      and business profiles.
                    </p>
                  </div>

                  <div className="relative mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77A] text-[#122847]">
                      <MapPin size={19} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Mira Road, Maharashtra
                      </p>
                      <p className="mt-1 text-[10px] text-white/45">
                        Location-aware website content
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="flex h-full flex-col justify-center bg-[#F5F1E9] p-8 sm:p-12 lg:p-14">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                      A practical local SEO foundation
                    </p>

                    <div className="mt-8 space-y-0">
                      {[
                        {
                          icon: Search,
                          title: "Relevant search terms",
                          text: "Understand how potential customers describe the services they need.",
                        },
                        {
                          icon: Globe2,
                          title: "Useful location pages",
                          text: "Explain your service areas with meaningful and original information.",
                        },
                        {
                          icon: ChartNoAxesCombined,
                          title: "Website optimisation",
                          text: "Improve page structure, content, internal links and technical foundations.",
                        },
                        {
                          icon: MousePointer2,
                          title: "Clear enquiry journeys",
                          text: "Make it easier for visitors to understand your offering and contact you.",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="flex gap-4 border-b border-[#DDD4C7] py-5 last:border-0"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#A78354]">
                              <Icon size={18} />
                            </div>

                            <div>
                              <h3 className="text-sm font-semibold text-[#122847]">
                                {item.title}
                              </h3>
                              <p className="mt-1.5 text-xs leading-6 text-[#788596]">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href="/services/search-engine-optimization"
                      className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#122847] transition hover:text-[#A78354]"
                    >
                      Explore SEO services
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            07. OUR APPROACH — NUMBERED TIMELINE
        ===================================================== */}

        <section className="bg-[#F7F4EE] px-5 py-20 sm:px-9 lg:py-28">
          <div className="mx-auto max-w-[1260px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                <SectionTitle
                  eyebrow="How we approach your project"
                  title={
                    <>
                      A thoughtful process.
                      <br />
                      <span className="italic text-[#A78354]">
                        A clearer direction.
                      </span>
                    </>
                  }
                  description="We begin by understanding your business before suggesting a digital approach. The scope depends on your current website, audience and goals."
                />

               <Link
  href={CONTACT_URL}
  title="Contact Sharp Rays About Digital Marketing Services in Mira Road"
  className="inline-flex items-center gap-2 text-xs font-semibold text-[#122847] transition hover:text-[#A78354]"
>
                  Talk about your project
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>

            <div className="relative mt-16">
              <div className="absolute left-[18px] top-5 hidden h-[calc(100%-40px)] w-px bg-[#D8C8B2] md:block" />

              <div className="grid gap-8 md:gap-0">
                {[
                  {
                    n: "01",
                    title: "Understand the business",
                    text: "We discuss your services, audience, current digital presence and the outcomes you want your online activity to support.",
                  },
                  {
                    n: "02",
                    title: "Review the current position",
                    text: "We assess the relevant website, content, search presence and communication gaps before defining priorities.",
                  },
                  {
                    n: "03",
                    title: "Plan the right scope",
                    text: "We identify the services, deliverables and practical next steps that fit the project requirements.",
                  },
                  {
                    n: "04",
                    title: "Implement and improve",
                    text: "Work is carried out according to the agreed scope, with relevant reviews and improvements as the project progresses.",
                  },
                ].map((step, index) => (
                  <Reveal key={step.n} delay={index * 0.06}>
                    <div className="relative grid gap-4 border-b border-[#E3DACE] pb-8 md:grid-cols-[90px_.8fr_1.2fr] md:gap-8 md:py-8">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A77A] bg-[#F7F4EE] font-[var(--font-new-york)] text-sm text-[#A78354]">
                        {step.n}
                      </div>

                      <h3 className="font-[var(--font-new-york)] text-[24px] leading-tight text-[#122847]">
                        {step.title}
                      </h3>

                      <p className="max-w-[520px] text-xs leading-7 text-[#788596]">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            08. CORE SERVICE PILLARS — THREE LINK STRIP
        ===================================================== */}

        <section className="bg-white px-5 py-20 sm:px-9 lg:py-24">
          <div className="mx-auto max-w-[1260px]">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
                <div>
                  <Eyebrow>Explore our core pillars</Eyebrow>
                  <h2 className="mt-5 font-[var(--font-new-york)] text-[32px] leading-tight tracking-[-0.035em] sm:text-[39px]">
                    Start with the foundations.
                  </h2>
                </div>

                <p className="max-w-[550px] text-sm leading-8 text-[#718096]">
                  SEO, website development and social media marketing are
                  three important parts of a business's digital presence.
                  Explore each service to understand the work involved.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Search Engine Optimisation",
                  text: "Build organic search visibility.",
                  href: "/services/search-engine-optimization",
                },
                {
                  icon: MonitorSmartphone,
                  title: "Website Development",
                  text: "Create a useful digital home.",
                  href: "/services/website-development",
                },
                {
                  icon: Megaphone,
                  title: "Social Media Marketing",
                  text: "Communicate consistently.",
                  href: "/services/social-media-marketing",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <Link
                      href={item.href}
                      className="group flex min-h-[160px] items-center justify-between gap-4 rounded-[18px] border border-[#E8E1D7] bg-[#FCFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A77A] hover:bg-white hover:shadow-lg"
                    >
                      <div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E9DE] text-[#A78354]">
                          <Icon size={19} />
                        </div>
                        <h3 className="mt-5 text-sm font-semibold text-[#122847]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs text-[#8791A0]">
                          {item.text}
                        </p>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5DCCF] text-[#A78354] transition group-hover:rotate-45 group-hover:bg-[#122847] group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
{/* FAQ - TWO COLUMN NUMBERED STYLE */}
<section
  className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
  style={{ background: C.ivory }}
>
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-12 text-center">
        <div className="flex justify-center">
          <Eyebrow>Frequently asked questions</Eyebrow>
        </div>

        <h2
          className="font-[var(--font-new-york)] text-3xl leading-tight tracking-tight sm:text-4xl"
          style={{ color: C.navy }}
        >
          A little more clarity before you begin.
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-sm leading-7"
          style={{ color: C.muted }}
        >
          Helpful answers to common questions about digital marketing,
          website development and working with Sharp Rays in Mira Road.
        </p>
      </div>
    </Reveal>

    <div className="grid gap-x-12 sm:grid-cols-2">
      {faqs.map((faq, i) => (
        <Reveal key={faq.q} delay={i * 0.025}>
          <div
            className="h-full border-b py-6"
            style={{ borderColor: "#DED9D0" }}
          >
            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold"
                style={{
                  borderColor: "#D7C4A7",
                  color: "#A78354",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3
                  className="font-[var(--font-new-york)] text-lg leading-snug"
                  style={{ color: C.navy }}
                >
                  {faq.q}
                </h3>

                <p
                  className="mt-3 text-[13px] leading-7"
                  style={{ color: C.muted }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

        {/* =====================================================
            10. FINAL CTA — TYPOGRAPHIC CLOSING
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#122847] px-5 py-20 sm:px-9 lg:py-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-44 h-[520px] w-[520px] rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-24 h-[360px] w-[360px] rounded-full border border-[#C6A77A]/25" />
            <div className="absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-[#C6A77A]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-[1260px] items-end gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal>
              <Eyebrow light>Let's discuss your next step</Eyebrow>

              <h2 className="mt-6 max-w-[780px] font-[var(--font-new-york)] text-[39px] leading-[1.08] tracking-[-0.045em] text-white sm:text-[54px] lg:text-[66px]">
                Your business deserves
                <span className="block italic text-[#D8BD94]">
                  a clearer digital presence.
                </span>
              </h2>

              <p className="mt-6 max-w-[570px] text-sm leading-8 text-white/60">
                Tell us about your business, your current challenges and what
                you want to improve. We can discuss a suitable digital
                direction for your requirements.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={AUDIT_URL}
                  className="inline-flex items-center justify-between gap-7 rounded-full bg-[#C6A77A] px-6 py-4 text-xs font-semibold text-[#122847] transition hover:-translate-y-1 hover:bg-[#D7C19F]"
                >
                  Book a Free Audit
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center justify-between gap-7 rounded-full border border-white/25 px-6 py-4 text-xs font-semibold text-white transition hover:border-[#D8BD94] hover:text-[#D8BD94]"
                >
                  Discuss Your Business
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto mt-16 flex max-w-[1260px] flex-col justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Sharp Rays · We Create the “Oh, Wow.”!
            </p>
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
              Digital marketing services in Mira Road
            </p>
          </div>
        </section>

        {/* =====================================================
            11. INTERNAL NAVIGATION
        ===================================================== */}

        <section className="bg-white px-5 py-10 sm:px-9">
          <div className="mx-auto flex max-w-[1260px] flex-col justify-between gap-5 border-b border-[#E8E1D7] pb-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                Explore more
              </p>
              <p className="mt-2 text-xs text-[#718096]">
                Discover other Sharp Rays locations and digital services.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
             <Link
  href="/locations"
  title="Explore All Sharp Rays Service Locations"
  className="text-xs font-medium text-[#122847] transition hover:text-[#A78354]"
>
                All Locations
              </Link>

             <Link
  href="/locations/bhayandar"
  title="Explore Digital Marketing Services in Bhayandar"
  className="text-xs font-medium text-[#122847] transition hover:text-[#A78354]"
>
                Bhayandar
              </Link>

             <Link
  href="/locations/borivali"
  title="Explore Digital Marketing Services in Borivali"
  className="text-xs font-medium text-[#122847] transition hover:text-[#A78354]"
>
                Borivali
              </Link>

              <Link
                href="/services"
                className="text-xs font-medium text-[#122847] transition hover:text-[#A78354]"
              >
                All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}