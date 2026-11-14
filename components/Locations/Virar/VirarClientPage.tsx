"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  Globe2,
  MapPin,
  Search,
  ShoppingBag,
  Store,
  Target,
  TrendingUp,
  Users,
  Video,
  Workflow,
  Wrench,
} from "lucide-react";

const C = {
  navy: "#0B2A52",
  gold: "#C6A77A",
  ivory: "#FCFAF7",
  muted: "#66758A",
  line: "#E8E4DD",
};

const services = [
  {
    no: "01",
    name: "Search Engine Optimisation",
    headline: "Be easier to find when customers search.",
    description:
      "Build a stronger search presence with useful website content, technical improvements and location-relevant SEO foundations.",
    points: [
      "Website and technical SEO review",
      "Service and location keyword planning",
      "On-page content and internal linking",
    ],
    best: "For businesses that want to build sustainable organic visibility.",
    icon: Search,
    href: "/locations/virar/seo",
    tag: "Organic visibility",
    accent: "#B18A58",
    tint: "#F6F0E7",
  },
  {
    no: "02",
    name: "Website Development",
    headline: "Turn your website into a useful business asset.",
    description:
      "Create a clear, responsive website that communicates your offer, supports search visibility and makes it easier for visitors to enquire.",
    points: [
      "Responsive, mobile-first layouts",
      "Service pages and enquiry journeys",
      "SEO-friendly structure and performance",
    ],
    best: "For businesses that need a professional website or a better digital foundation.",
    icon: Globe2,
    href: "/locations/virar/website-development",
    tag: "Digital foundation",
    accent: "#557A9B",
    tint: "#EDF3F7",
  },
  {
    no: "03",
    name: "Social Media Marketing",
    headline: "Make your brand presence more consistent.",
    description:
      "Plan content around your audience, communicate your value and build a recognisable presence across relevant social platforms.",
    points: [
      "Content themes and monthly planning",
      "Creative direction and post development",
      "Publishing and performance review",
    ],
    best: "For businesses that want to stay visible and build audience trust.",
    icon: Users,
    href: "/locations/virar/social-media-marketing",
    tag: "Brand presence",
    accent: "#8A719C",
    tint: "#F3EFF6",
  },
  {
    no: "04",
    name: "Performance Marketing",
    headline: "Reach relevant audiences with purposeful campaigns.",
    description:
      "Plan paid campaigns with clear objectives, relevant audience targeting, useful landing pages and ongoing optimisation.",
    points: [
      "Campaign and audience planning",
      "Ad creative and landing-page alignment",
      "Measurement and optimisation",
    ],
    best: "For businesses ready to test paid acquisition with a defined budget.",
    icon: Target,
    href: "/locations/virar/performance-marketing",
    tag: "Paid campaigns",
    accent: "#B47B62",
    tint: "#F8F0EC",
  },
  {
    no: "05",
    name: "AI Video & Creative",
    headline: "Bring ideas to life through visual storytelling.",
    description:
      "Develop short-form videos, campaign creatives and visual concepts that help explain your products, services and brand.",
    points: [
      "Short-form video concepts",
      "AI-assisted visual production",
      "Social and campaign creative assets",
    ],
    best: "For brands that need fresh creative assets for digital channels.",
    icon: Video,
    href: "/locations/virar/ai-video-and-creative",
    tag: "Creative production",
    accent: "#A17E4D",
    tint: "#F5F1E8",
  },
  {
    no: "06",
    name: "AI Automation",
    headline: "Make repetitive business workflows simpler.",
    description:
      "Identify practical opportunities to connect tools, organise routine tasks and reduce manual steps in everyday workflows.",
    points: [
      "Workflow and process discovery",
      "Task and tool automation planning",
      "Practical implementation support",
    ],
    best: "For teams looking to improve operational consistency and save time.",
    icon: Workflow,
    href: "/locations/virar/ai-automation",
    tag: "Smarter workflows",
    accent: "#64877D",
    tint: "#EEF4F1",
  },
];

const industries = [
  {
    title: "Retail & Local Shops",
    text: "Help customers discover your shop, understand what you offer and find a convenient way to contact you.",
    icon: ShoppingBag,
  },
  {
    title: "Real Estate & Property",
    text: "Present projects, properties and your brand with useful web pages and clear enquiry journeys.",
    icon: Building2,
  },
  {
    title: "Professional Services",
    text: "Build trust through service-focused pages, useful information and a stronger online presence.",
    icon: Wrench,
  },
  {
    title: "Restaurants & Hospitality",
    text: "Showcase your experience, menu, services and location through search-friendly digital content.",
    icon: Store,
  },
  {
    title: "Education & Coaching",
    text: "Make courses, programmes and admissions information easier for prospective students to explore.",
    icon: Users,
  },
  {
    title: "Growing Startups",
    text: "Build a consistent digital foundation as your business develops its positioning and customer base.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    q: "Do you provide digital marketing services in Virar?",
    a: "Yes. Sharp Rays works with businesses looking to improve their online presence in Virar through SEO, website development, social media marketing, performance marketing, AI video and creative services, and AI automation.",
  },
  {
    q: "Which businesses can benefit from your services?",
    a: "Local shops, real estate businesses, professional service providers, restaurants, educational institutes, startups and other businesses can explore digital strategies based on their audience and goals.",
  },
  {
    q: "Can you help my business appear on Google in Virar?",
    a: "We can work on relevant website pages, local SEO foundations, Google Business Profile guidance, useful content and technical SEO. Search visibility takes time and cannot be guaranteed.",
  },
  {
    q: "Do I need a website for my local business?",
    a: "A website can give your business a central place to explain its services, share important information and receive enquiries. The right approach depends on your business model and customer journey.",
  },
  {
    q: "Can I choose only one service?",
    a: "Yes. You can start with an individual service such as SEO, website development or social media marketing. The scope can be planned around your immediate business requirements.",
  },
  {
    q: "Do you work with businesses in Virar East and Virar West?",
    a: "You can enquire about services for businesses in Virar East, Virar West and nearby areas. We will discuss your location, audience and project requirements before suggesting an approach.",
  },
  {
    q: "How much do digital marketing services cost?",
    a: "Pricing depends on the service, deliverables, project complexity and ongoing requirements. You can explore the Sharp Rays pricing page or contact us to discuss your project.",
  },
  {
    q: "How do I get started with Sharp Rays?",
    a: "Share your business details, website (if available), location and goals through the contact page. We can then understand what you need and discuss suitable next steps.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8" style={{ background: C.gold }} />
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: C.muted }}
      >
        {children}
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={center ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2
        className="font-[var(--font-new-york)] text-3xl font-medium leading-[1.15] tracking-[-0.035em] sm:text-4xl lg:text-[46px]"
        style={{ color: C.navy }}
      >
        {title}
      </h2>
      {copy && (
        <p
          className="mt-5 text-sm leading-7 sm:text-base"
          style={{ color: C.muted }}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export default function VirarClientPage() {
  return (
    <main className="overflow-hidden bg-white" style={{ color: C.navy }}>
      
{/* HERO — PREMIUM CREATIVE STUDIO DESIGN */}
<section className="relative isolate overflow-hidden bg-[#FCFAF7]">
  {/* Background design */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#C6A77A]/20" />
    <div className="absolute -right-24 -top-24 h-[440px] w-[440px] rounded-full border border-[#C6A77A]/20" />
    <div className="absolute bottom-0 left-[45%] h-px w-[55%] bg-[#E8E4DD]" />
    <div className="absolute left-0 top-[45%] h-px w-[20%] bg-[#E8E4DD]" />
  </div>

  <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-12 sm:px-9 sm:pb-20 lg:px-14 lg:pt-14">

    {/* Header line */}
    <Reveal>
      <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-5">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#C6A77A]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0B2A52]">
            SHARP RAYS
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.19em] text-[#66758A]">
          Digital growth · Virar, Maharashtra
        </span>
      </div>
    </Reveal>

    <div className="grid items-center gap-12 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-16">

      {/* LEFT CONTENT */}
      <Reveal className="relative z-10">
        <div className="max-w-[760px]">

          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E8E4DD] bg-white/80 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#66758A]">
              Digital growth · Virar, Maharashtra
            </span>
          </div>

          <h1
            className="font-[var(--font-new-york)] text-[43px] font-medium leading-[1.04] tracking-[-0.05em] sm:text-[60px] lg:text-[72px] xl:text-[82px]"
            style={{ color: C.navy }}
          >
            Helping Virar businesses build a stronger{" "}
            <span className="relative inline-block italic text-[#A78354]">
              digital presence.
              <span className="absolute -bottom-2 left-0 h-[3px] w-[85%] rounded-full bg-[#C6A77A]/70" />
            </span>
          </h1>

          <p className="mt-9 max-w-[530px] text-sm leading-8 text-[#66758A] sm:text-base">
            From being discovered on Google to presenting your business
            professionally online, Sharp Rays brings strategy, creativity
            and technology together to support your next stage of growth.
          </p>

          {/* Original CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact?source=virar-location"
              title="Discuss your digital marketing requirements in Virar"
              className="group inline-flex items-center gap-4 rounded-full bg-[#0B2A52] px-7 py-4 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(11,42,82,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#173D68]"
            >
              Discuss Your Project
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link
              href="#our-services"
              title="Explore digital marketing services for Virar businesses"
              className="inline-flex items-center gap-3 rounded-full border border-[#D9D2C7] bg-white px-6 py-4 text-xs font-semibold text-[#0B2A52] transition-all hover:border-[#C6A77A] hover:shadow-md"
            >
              Explore Services
              <ArrowDownRight size={15} />
            </Link>
          </div>

          {/* Original supporting points */}
          <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#E8E4DD] pt-7 sm:grid-cols-3 sm:gap-5">
            {["Strategy-led work", "Creative thinking", "Practical solutions"].map(
              (item, i) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0E9DE] text-[#A78354]">
                    <Check size={14} strokeWidth={2.2} />
                  </span>
                  <span className="text-[11px] font-medium text-[#66758A]">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </Reveal>

      {/* RIGHT — LAYERED ART DIRECTION */}
      <Reveal delay={0.12} className="relative mx-auto w-full max-w-[590px]">

        <div className="relative min-h-[520px] sm:min-h-[590px]">

          {/* Back gold architectural slab */}
          <div className="absolute right-[5%] top-[5%] h-[76%] w-[76%] rotate-[8deg] rounded-[2rem] bg-[#D9C5A5]/50" />

          {/* Ivory offset frame */}
          <div className="absolute right-[9%] top-[2%] h-[78%] w-[77%] -rotate-[5deg] rounded-[2rem] border border-[#C6A77A]/60 bg-[#F4EEE4]" />

          {/* Main composition */}
          <div className="absolute right-[8%] top-[5%] h-[78%] w-[82%] overflow-hidden rounded-[1.8rem] bg-[#0B2A52] shadow-[0_28px_75px_rgba(11,42,82,0.20)]">

            {/* Main background gradients */}
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#183E66_0%,#0B2A52_48%,#071C36_100%)]" />

            {/* Graphic geometry */}
            <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full border border-[#C6A77A]/40" />
            <div className="absolute -right-8 -top-4 h-60 w-60 rounded-full border border-[#C6A77A]/30" />
            <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full border border-white/10" />

            {/* Oversized background typography */}
            <div className="absolute -right-4 top-[22%] select-none font-[var(--font-new-york)] text-[190px] font-semibold leading-none tracking-[-0.12em] text-white/[0.045] sm:text-[230px]">
              SR
            </div>

            {/* Central visual */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-9">

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.24em] text-white/50">
                    Digital experience
                  </span>
                  <div className="mt-2 h-px w-12 bg-[#C6A77A]" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#D9BD95]">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Layered creative shapes */}
              <div className="relative mx-auto flex h-[245px] w-full max-w-[300px] items-center justify-center">

                <div className="absolute h-[220px] w-[220px] rotate-45 rounded-[3rem] border border-[#C6A77A]/60" />

                <div className="absolute h-[175px] w-[175px] rotate-[25deg] rounded-[2.5rem] bg-[#C6A77A]/20 backdrop-blur-sm" />

                <div className="absolute h-[125px] w-[125px] rounded-full border border-white/50 bg-[#E3D3B8]/10 backdrop-blur-md" />

                <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#C6A77A] text-[#0B2A52] shadow-[0_0_60px_rgba(198,167,122,0.25)]">
                  <Compass size={39} strokeWidth={1.1} />
                </div>

                <div className="absolute right-0 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#E3C9A4] backdrop-blur-md">
                  <Search size={19} />
                </div>

                <div className="absolute bottom-3 left-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#E3C9A4] backdrop-blur-md">
                  <Globe2 size={19} />
                </div>

                <div className="absolute bottom-4 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#E3C9A4] backdrop-blur-md">
                  <Target size={18} />
                </div>
              </div>

              {/* Bottom brand area */}
              <div className="border-t border-white/15 pt-6">
                <p className="font-[var(--font-new-york)] text-[27px] leading-tight text-white sm:text-[34px]">
                  We Create the
                  <span className="block italic text-[#D9BD95]">
                    “Oh, Wow.”
                  </span>
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/45">
                    Strategy · Design · Technology
                  </span>
                  <span className="text-[9px] text-[#D9BD95]">
                    SHARP RAYS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating service label */}
          <div className="absolute -left-1 top-[20%] z-10 flex items-center gap-3 rounded-xl border border-[#E8E4DD] bg-white px-4 py-3.5 shadow-[0_15px_35px_rgba(11,42,82,0.10)] sm:-left-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3EDE3] text-[#A78354]">
              <Globe2 size={20} />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.16em] text-[#8A96A5]">
                Brand experience
              </p>
              <p className="mt-1 text-[11px] font-semibold text-[#0B2A52]">
                Digital presence
              </p>
            </div>
          </div>

          {/* Floating location label */}
          <div className="absolute -bottom-1 right-0 z-10 flex items-center gap-2 rounded-full border border-[#E8E4DD] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(11,42,82,0.10)] sm:-right-2">
            <MapPin size={14} className="text-[#A78354]" />
            <span className="text-[10px] font-semibold text-[#0B2A52]">
              Virar, Maharashtra
            </span>
          </div>

          {/* Small decorative number */}
          <div className="absolute bottom-[9%] left-[3%] hidden sm:block">
            <span className="font-[var(--font-new-york)] text-6xl italic text-[#B79A72]/50">
              01
            </span>
          </div>

        </div>
      </Reveal>
    </div>
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <Eyebrow>A local business perspective</Eyebrow>
            <p
              className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl"
              style={{ color: C.navy }}
            >
              Good businesses deserve to be{" "}
              <span className="italic" style={{ color: "#A78354" }}>
                easy to find
              </span>{" "}
              and easy to trust.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-8" style={{ color: C.muted }}>
              Businesses in Virar serve customers with different needs — from
              everyday local services to property, education, retail and
              professional requirements. A clear digital presence helps
              people understand what you offer before they decide to contact
              you.
            </p>
            <p
              className="mt-5 text-base leading-8"
              style={{ color: C.muted }}
            >
              Sharp Rays helps bring the important pieces together: a useful
              website, relevant search visibility, consistent communication
              and creative campaigns. The right combination depends on your
              business, audience and goals.
            </p>
            <Link
              href="/about"
              title="Learn more about Sharp Rays"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: C.navy }}
            >
              Get to know Sharp Rays{" "}
              <ArrowRight size={16} style={{ color: "#A78354" }} />
            </Link>
          </Reveal>
        </div>
      </section>


{/* LOCAL AREAS — EDITORIAL LOCATION DIRECTORY */}
<section
  className="relative isolate overflow-hidden bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
>
  {/* Background typography */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-10 top-12 select-none font-[var(--font-new-york)] text-[180px] font-medium leading-none tracking-[-0.1em] text-[#0B2A52]/[0.025] sm:text-[260px] lg:text-[340px]"
  >
    VIRAR
  </div>

  <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#C6A77A]/[0.07] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* HEADING */}
    <Reveal>
      <div className="grid items-end gap-8 border-b border-[#E8E4DD] pb-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <Eyebrow>Understanding the area</Eyebrow>

          <h2
            className="font-[var(--font-new-york)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-5xl"
            style={{ color: C.navy }}
          >
            A digital approach shaped around
            <span className="block italic" style={{ color: "#A78354" }}>
              Virar.
            </span>
          </h2>

          <p
            className="mt-5 max-w-2xl text-sm leading-8 sm:text-base"
            style={{ color: C.muted }}
          >
            Your customers may search by locality, service or the problem they
            need solved. Your online presence should make those connections
            clearer.
          </p>
        </div>

        {/* Decorative location motif */}
        <div className="hidden items-center gap-4 pb-2 lg:flex">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#D8C5A7]">
            <div className="absolute inset-2 rounded-full border border-[#D8C5A7]/60" />
            <MapPin size={25} strokeWidth={1.2} className="text-[#A78354]" />
          </div>
          <div>
            <span className="block font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
              04
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-[#8792A0]">
              Local areas
            </span>
          </div>
        </div>
      </div>
    </Reveal>

    {/* LOCATION DIRECTORY */}
    <div className="mt-8">

      {[
        {
          no: "01",
          area: "Virar East",
          note: "Make your business information and services easier to discover for nearby audiences.",
          tint: "#F1E9DD",
          accent: "#B18A58",
        },
        {
          no: "02",
          area: "Virar West",
          note: "Present your offerings clearly and give prospective customers a direct enquiry path.",
          tint: "#EAF0F3",
          accent: "#65819A",
        },
        {
          no: "03",
          area: "Global City",
          note: "Build relevant pages and content around the audiences and services you want to reach.",
          tint: "#F0ECF3",
          accent: "#8B789E",
        },
        {
          no: "04",
          area: "Nearby localities",
          note: "Consider surrounding service areas where your business genuinely operates.",
          tint: "#EAF0EB",
          accent: "#718D7F",
        },
      ].map((item, i) => (
        <Reveal key={item.no} delay={i * 0.06}>
          <article className="group relative grid gap-5 border-b border-[#E8E4DD] py-8 transition-all duration-300 sm:grid-cols-[90px_1fr_1.1fr_65px] sm:items-center sm:gap-7 sm:py-9">

            {/* Number */}
            <div className="flex items-center gap-3 sm:block">
              <span
                className="font-[var(--font-new-york)] text-4xl tracking-tight transition-colors duration-300 sm:text-5xl"
                style={{ color: item.accent, opacity: 0.75 }}
              >
                {item.no}
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#A0A8B1] sm:hidden">
                Location
              </span>
            </div>

            {/* Locality name */}
            <div className="relative">
              <h3
                className="font-[var(--font-new-york)] text-2xl leading-tight tracking-tight transition-all duration-300 group-hover:translate-x-2 sm:text-[30px]"
                style={{ color: C.navy }}
              >
                {item.area}
              </h3>

              <span
                className="mt-3 block h-[2px] w-8 transition-all duration-500 group-hover:w-16"
                style={{ background: item.accent }}
              />
            </div>

            {/* Description */}
            <p
              className="max-w-lg text-[13px] leading-7 sm:text-sm"
              style={{ color: C.muted }}
            >
              {item.note}
            </p>

            {/* Location icon */}
            <div className="absolute right-0 top-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8E4DD] bg-white transition-all duration-300 group-hover:border-transparent sm:static sm:justify-self-end"
              style={{ ["--location-tint" as string]: item.tint }}
            >
              <MapPin
                size={17}
                strokeWidth={1.5}
                style={{ color: item.accent }}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>

            {/* Hover background */}
            <div className="pointer-events-none absolute inset-0 -z-10 scale-y-0 bg-white/80 transition-transform duration-300 group-hover:scale-y-100" />
          </article>
        </Reveal>
      ))}
    </div>

    {/* FOOTNOTE */}
    <Reveal>
      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-3xl text-[11px] leading-6 text-[#7A8795]">
          Location references are intended to describe potential service
          audiences, not a claim of a Sharp Rays office in these areas.
        </p>

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#C6A77A]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#A78354]">
            Sharp Rays
          </span>
        </div>
      </div>
    </Reveal>

  </div>
</section>


      {/* BUSINESS CHALLENGES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="The opportunity"
              title={<>Where your digital presence can do more.</>}
              copy="A business can have a good product or service and still lose potential enquiries when its online information is unclear, incomplete or difficult to find."
            />
            <div
              className="mt-8 rounded-2xl p-6 sm:p-7"
              style={{ background: C.navy }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                A useful starting point
              </p>
              <p className="mt-3 font-[var(--font-new-york)] text-2xl leading-snug text-white">
                Make it easier for the right customer to understand, trust and
                contact your business.
              </p>
              <Link
                href="/contact?source=virar-digital-audit"
                title="Discuss a digital presence review for your Virar business"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#E2C9A5" }}
              >
                Discuss your requirements <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="space-y-0">
            {[
              [
                "01",
                "Low search visibility",
                "Your business may not appear for the relevant searches your potential customers make.",
              ],
              [
                "02",
                "An unclear website experience",
                "Visitors may struggle to understand your services, pricing approach or next step.",
              ],
              [
                "03",
                "Inconsistent social presence",
                "Irregular or unfocused content can make it harder to communicate what makes your business valuable.",
              ],
              [
                "04",
                "Enquiries without a clear journey",
                "A visitor needs an obvious way to call, message, enquire or learn more.",
              ],
            ].map((item, i) => (
              <Reveal key={item[0]} delay={i * 0.05}>
                <div
                  className="grid grid-cols-[48px_1fr] gap-5 border-b py-7"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className="font-[var(--font-new-york)] text-2xl"
                    style={{ color: "#B79A72" }}
                  >
                    {item[0]}
                  </span>
                  <div>
                    <h3
                      className="font-[var(--font-new-york)] text-xl"
                      style={{ color: C.navy }}
                    >
                      {item[1]}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-7"
                      style={{ color: C.muted }}
                    >
                      {item[2]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="our-services"
        className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        style={{ background: "#F8F7F4" }}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="What we can help with"
              title={
                <>
                  Digital services designed around{" "}
                  <span className="italic" style={{ color: "#A78354" }}>
                    your next step.
                  </span>
                </>
              }
              copy="Explore the services available to businesses in Virar. Start with the area that matters most, or combine services into a connected digital growth plan."
              center
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.no}
                  delay={i * 0.045}
                  className="h-full"
                >
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(11,42,82,0.08)]"
                    style={{ borderColor: C.line }}
                  >
                    <div
                      className="relative flex min-h-[142px] items-start justify-between overflow-hidden px-6 py-6"
                      style={{ background: service.tint }}
                    >
                      <div
                        className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full border"
                        style={{ borderColor: `${service.accent}30` }}
                      />
                      <div
                        className="pointer-events-none absolute -bottom-20 right-16 h-36 w-36 rounded-full border"
                        style={{ borderColor: `${service.accent}25` }}
                      />
                      <div
                        className="relative flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                        style={{ background: C.navy }}
                      >
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                      <span
                        className="relative font-[var(--font-new-york)] text-3xl"
                        style={{ color: service.accent }}
                      >
                        {service.no}
                      </span>
                      <span
                        className="absolute bottom-5 left-6 text-[10px] font-semibold uppercase tracking-[0.17em]"
                        style={{ color: service.accent }}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3
                        className="font-[var(--font-new-york)] text-[23px] leading-tight"
                        style={{ color: C.navy }}
                      >
                        {service.name}
                      </h3>
                      <p
                        className="mt-2 text-sm font-medium leading-6"
                        style={{ color: "#465B72" }}
                      >
                        {service.headline}
                      </p>
                      <p
                        className="mt-3 text-[13px] leading-7"
                        style={{ color: C.muted }}
                      >
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-[12px] leading-5"
                            style={{ color: C.muted }}
                          >
                            <span
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{
                                background: service.tint,
                                color: service.accent,
                              }}
                            >
                              <Check size={11} strokeWidth={2.5} />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      <p
                        className="mt-5 border-t pt-4 text-[11px] leading-5"
                        style={{
                          borderColor: "#EEE6DC",
                          color: "#7B8794",
                        }}
                      >
                        <span
                          className="font-semibold"
                          style={{ color: C.navy }}
                        >
                          A good fit:{" "}
                        </span>
                        {service.best}
                      </p>

                      <Link
                        href={service.href}
                        title={`${service.name} services in Virar`}
                        className="mt-6 inline-flex items-center justify-between rounded-full border px-5 py-3 text-xs font-semibold transition hover:text-white"
                        style={{
                          borderColor: `${service.accent}65`,
                          color: C.navy,
                        }}
                      >
                        Explore {service.name}
                        <ArrowUpRight
                          size={16}
                          style={{ color: service.accent }}
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
              <p
                className="text-sm leading-6"
                style={{ color: C.muted }}
              >
                Not sure which service to start with? Explore the full range
                and find a practical starting point.
              </p>
              <Link
                href="/services"
                title="Explore all digital marketing and creative services by Sharp Rays"
                className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:gap-4"
                style={{ background: C.navy }}
              >
                Explore All Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

{/* INDUSTRIES */}
<section className="relative overflow-hidden bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
  <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#C6A77A]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <Reveal>
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Industries we support</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] sm:text-5xl" style={{ color: C.navy }}>
            Every industry has a different story.
            <span className="block italic text-[#A78354]">Your digital presence should too.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#66758A]">
          We shape digital experiences around the way your customers discover,
          evaluate and choose businesses in your industry.
        </p>
      </div>
    </Reveal>

    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, i) => {
        const Icon = industry.icon;

        return (
          <Reveal key={industry.title} delay={i * 0.05}>
            <article className="group relative flex h-full min-h-[255px] flex-col overflow-hidden rounded-[1.5rem] border border-[#E8E4DD] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A77A]/60 hover:shadow-[0_20px_55px_rgba(11,42,82,0.07)] sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#C6A77A]/20 transition-transform duration-700 group-hover:scale-125" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F0E8] text-[#A78354] transition-colors duration-300 group-hover:bg-[#0B2A52] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <span className="font-[var(--font-new-york)] text-3xl text-[#D8C6AA]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-auto pt-10">
                <h3 className="font-[var(--font-new-york)] text-[22px] leading-tight text-[#0B2A52]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-[#66758A]">
                  {industry.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#A78354]">
                  Industry-focused approach
                  <span className="h-px w-7 bg-[#C6A77A] transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>

    <Reveal>
      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#E8E4DD] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="font-[var(--font-new-york)] text-xl text-[#0B2A52]">
            Have a different type of business?
          </p>
          <p className="mt-2 text-sm leading-6 text-[#66758A]">
            Tell us what you do. We can discuss an approach around your business requirements.
          </p>
        </div>

        <Link
          href="/contact?source=virar-industries"
          title="Discuss digital services for your business"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0B2A52] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#173D68]"
        >
          Discuss Your Business <ArrowUpRight size={15} />
        </Link>
      </div>
    </Reveal>
  </div>
</section>


{/* LOCAL SEO / OUR APPROACH */}
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">

    {/* LEFT VISUAL */}
    <Reveal>
      <div className="relative">
        <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-[#C6A77A]/40" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B2A52] p-6 shadow-[0_25px_70px_rgba(11,42,82,0.15)] sm:p-9">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Local digital strategy
                </span>
                <h3 className="mt-2 font-[var(--font-new-york)] text-2xl text-white sm:text-3xl">
                  Visibility with purpose.
                </h3>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 text-[#E3C9A4]">
                <MapPin size={23} />
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-[#FCFAF7] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8A96A5]">
                    Your local search foundation
                  </p>
                  <p className="mt-1 font-[var(--font-new-york)] text-xl text-[#0B2A52]">
                    Built around your audience
                  </p>
                </div>
                <Search size={21} className="text-[#A78354]" />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    title: "Relevant search presence",
                    detail: "Services and location-focused content",
                    icon: Search,
                  },
                  {
                    title: "Useful website experience",
                    detail: "Clear pages and enquiry pathways",
                    icon: Globe2,
                  },
                  {
                    title: "Consistent business information",
                    detail: "Accurate and helpful local details",
                    icon: Building2,
                  },
                  {
                    title: "Customer-focused content",
                    detail: "Answers to real audience questions",
                    icon: Users,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-[#EAE5DC] bg-white p-3.5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E8] text-[#A78354]">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-[#0B2A52]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#8290A0]">
                          {item.detail}
                        </p>
                      </div>

                      <Check size={15} className="ml-auto shrink-0 text-[#A78354]" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.16em] text-white/50">
              <span>Research</span>
              <ArrowRight size={14} />
              <span>Strategy</span>
              <ArrowRight size={14} />
              <span>Execution</span>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-3 hidden rounded-2xl border border-[#E8E4DD] bg-white px-5 py-4 shadow-lg sm:block">
          <p className="text-[9px] uppercase tracking-[0.17em] text-[#8A96A5]">
            The focus
          </p>
          <p className="mt-1 font-[var(--font-new-york)] text-lg text-[#0B2A52]">
            Relevant. Useful. Clear.
          </p>
        </div>
      </div>
    </Reveal>

    {/* RIGHT CONTENT */}
    <Reveal delay={0.1}>
      <Eyebrow>Our local growth approach</Eyebrow>

      <h2 className="font-[var(--font-new-york)] text-3xl leading-[1.12] tracking-[-0.035em] sm:text-5xl" style={{ color: C.navy }}>
        Being found is important.
        <span className="block italic text-[#A78354]">
          Being chosen matters too.
        </span>
      </h2>

      <p className="mt-6 text-sm leading-8 text-[#66758A] sm:text-base">
        A strong local digital presence should do more than mention a location.
        It should help potential customers understand your services, find
        relevant information and take the next step with confidence.
      </p>

      <p className="mt-4 text-sm leading-8 text-[#66758A] sm:text-base">
        For businesses serving Virar and nearby areas, we consider the
        relationship between search visibility, website experience, useful
        content and the way enquiries are generated.
      </p>

      <div className="mt-9 space-y-5">
        {[
          {
            no: "01",
            title: "Understand your service area",
            text: "Identify the locations and audiences your business genuinely serves.",
          },
          {
            no: "02",
            title: "Build useful website content",
            text: "Create clear service information that answers customer questions.",
          },
          {
            no: "03",
            title: "Strengthen search foundations",
            text: "Improve technical SEO, page structure and relevant local signals.",
          },
        ].map((item) => (
          <div key={item.no} className="flex gap-4 border-b border-[#E8E4DD] pb-5">
            <span className="font-[var(--font-new-york)] text-2xl text-[#C6A77A]">
              {item.no}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#0B2A52]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-6 text-[#66758A]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/services/search-engine-optimization"
        title="Explore Sharp Rays SEO services"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-[#173D68]"
      >
        Explore SEO Services <ArrowUpRight size={15} />
      </Link>
    </Reveal>
  </div>
</section>


{/* OUR PROCESS */}
<section className="relative overflow-hidden bg-[#F6F4F0] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C6A77A]/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <Reveal>
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] sm:text-5xl" style={{ color: C.navy }}>
            A clear process.
            <span className="block italic text-[#A78354]">Thoughtful execution.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#66758A]">
          Every project starts with understanding. From there, we build a
          practical plan and work through each stage with purpose.
        </p>
      </div>
    </Reveal>

    <div className="relative mt-16">
      {/* CONNECTING LINE */}
      <div className="absolute left-[7%] right-[7%] top-9 hidden h-px bg-[#D8C7AC] lg:block" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            no: "01",
            title: "Discover",
            subtitle: "Understand before creating",
            text: "We learn about your business, audience, services, challenges and current digital presence.",
            icon: Compass,
            tag: "The foundation",
          },
          {
            no: "02",
            title: "Strategise",
            subtitle: "Choose the right direction",
            text: "We identify priorities and plan the right deliverables around your goals and requirements.",
            icon: Target,
            tag: "The direction",
          },
          {
            no: "03",
            title: "Create",
            subtitle: "Turn the plan into action",
            text: "We work on the agreed website, content, creative assets or digital campaigns.",
            icon: Video,
            tag: "The execution",
          },
          {
            no: "04",
            title: "Refine",
            subtitle: "Learn and improve",
            text: "We review progress, understand what needs attention and identify useful next steps.",
            icon: TrendingUp,
            tag: "The improvement",
          },
        ].map((step, i) => {
          const Icon = step.icon;

          return (
            <Reveal key={step.no} delay={i * 0.07}>
              <article className="group relative h-full rounded-[1.5rem] border border-[#E5DED2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)] sm:p-7">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[5px] border-[#F6F4F0] bg-[#0B2A52] text-[#E3C9A4] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <span className="font-[var(--font-new-york)] text-3xl text-[#D8C6AA]">
                    {step.no}
                  </span>
                </div>

                <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#A78354]">
                  {step.tag}
                </p>

                <h3 className="mt-2 font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-[#465B72]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-[13px] leading-7 text-[#66758A]">
                  {step.text}
                </p>

                <div className="mt-7 h-px w-full bg-[#EEE9E1]">
                  <div
                    className="h-px transition-all duration-500 group-hover:w-full"
                    style={{
                      width: "32%",
                      background: C.gold,
                    }}
                  />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>

    <Reveal>
      <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#0B2A52] px-6 py-7 sm:flex-row sm:px-9">
        <div>
          <p className="font-[var(--font-new-york)] text-xl text-white sm:text-2xl">
            Have a project in mind?
          </p>
          <p className="mt-1 text-xs leading-6 text-white/60">
            Let's understand your requirements and find a practical way forward.
          </p>
        </div>

        <Link
          href="/contact?source=virar-process"
          title="Start a project discussion with Sharp Rays"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#E3C9A4] px-6 py-3.5 text-xs font-semibold text-[#0B2A52] transition hover:bg-white"
        >
          Start a Conversation <ArrowUpRight size={15} />
        </Link>
      </div>
    </Reveal>
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
                website development and working with Sharp Rays in Virar.
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

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <div
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-12 sm:py-20"
            style={{ background: C.navy }}
          >
            <div className="pointer-events-none absolute -right-24 -top-40 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-52 -left-20 h-96 w-96 rounded-full border border-white/10" />
            <div className="relative mx-auto max-w-2xl">
              <Eyebrow>Start a conversation</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-3xl leading-tight tracking-tight text-white sm:text-5xl">
                Ready to build a better digital presence for your business?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Tell us what your business does and what you want to improve.
                Let’s explore the right digital direction for your next step.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact?source=virar-location-cta"
                  title="Contact Sharp Rays about digital marketing services in Virar"
                  className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition hover:opacity-90"
                  style={{ background: "#E3C9A4", color: C.navy }}
                >
                  Let’s Talk <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  title="Explore Sharp Rays service pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}