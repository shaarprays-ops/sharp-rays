
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Compass,
  Search,
  Code2,
  Share2,
  Workflow,
  Clapperboard,
  Target,
  Sparkles,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Factory,
  UtensilsCrossed,
  BriefcaseBusiness,
  Rocket,
  Plane,
  Building2,
  Globe2,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const locations = [
  {
    name: "Vasai Road",
    slug: "vasai-road",
    region: "Vasai–Virar",
    number: "01",
    description:
      "Digital solutions for retail businesses, professional services and industrial businesses around Vasai.",
    tags: ["Retail", "Industrial", "Local businesses"],
  },
  {
    name: "Naigaon",
    slug: "naigaon",
    region: "Vasai–Virar",
    number: "02",
    description:
      "Digital growth solutions for businesses, new developments and emerging local brands.",
    tags: ["Growing businesses", "Retail", "Services"],
  },
  {
    name: "Nalasopara",
    slug: "nalasopara",
    region: "Vasai–Virar",
    number: "03",
    description:
      "Marketing and website solutions for retailers, clinics, coaching classes and more.",
    tags: ["Retail", "Healthcare", "Education"],
  },
  {
    name: "Virar",
    slug: "virar",
    region: "Vasai–Virar",
    number: "04",
    description:
      "Website, SEO and digital marketing solutions for businesses serving Virar and surrounding areas.",
    tags: ["Retail", "Professional services", "Local brands"],
  },
  {
    name: "Bhayandar",
    slug: "bhayandar",
    region: "Mumbai Metropolitan Region",
    number: "05",
    description:
      "Digital solutions for local businesses, service providers and growing brands.",
    tags: ["Local businesses", "Services", "Retail"],
  },
  {
    name: "Mira Road",
    slug: "mira-road",
    region: "Mumbai Metropolitan Region",
    number: "06",
    description:
      "Digital marketing and development solutions for businesses and professional brands.",
    tags: ["Professional brands", "Retail", "Services"],
  },
  {
    name: "Borivali",
    slug: "borivali",
    region: "Mumbai",
    number: "07",
    description:
      "Digital presence and growth solutions for businesses and brands in Borivali.",
    tags: ["Retail", "Professional services", "Brands"],
  },
  {
    name: "Thane",
    slug: "thane",
    region: "Mumbai Metropolitan Region",
    number: "08",
    description:
      "Digital solutions for retailers, professional firms and businesses in Thane.",
    tags: ["B2B", "Professional services", "Retail"],
  },
];

const services: {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Search Engine Optimization",
    description:
      "Build search visibility through technical SEO, useful content and relevant search strategies.",
    href: "/services/search-engine-optimization",
    icon: Search,
  },
  {
    number: "02",
    title: "Website Design & Development",
    description:
      "Create thoughtful digital experiences with modern design, responsive development and clear user journeys.",
    href: "/services/website-development",
    icon: Code2,
  },
  {
    number: "03",
    title: "Social Media Marketing",
    description:
      "Build a consistent social presence through strategy, creative content and audience engagement.",
    href: "/services/social-media-marketing",
    icon: Share2,
  },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Explore intelligent workflows that help streamline repetitive tasks and business processes.",
    href: "/services/ai-automation",
    icon: Workflow,
  },
  {
    number: "05",
    title: "AI Video & Creative",
    description:
      "Develop engaging visual content, AI-assisted videos and creative assets for digital platforms.",
    href: "/services/ai-video-and-creative",
    icon: Clapperboard,
  },
  {
    number: "06",
    title: "Performance Marketing & Paid Media",
    description:
      "Plan and optimise paid campaigns with relevant targeting, tracking and conversion measurement.",
    href: "/services/performance-marketing",
    icon: Target,
  },
];

const industries: {
  name: string;
  category: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Beauty & Wellness",
    category: "SALONS · SPAS · WELLNESS",
    description:
      "Digital strategies for beauty brands, salons, spas and wellness businesses.",
    href: "/industries/beauty-wellness",
    icon: Sparkles,
  },
  {
    name: "Ecommerce",
    category: "ONLINE STORES · D2C BRANDS",
    description:
      "Support product discovery, online shopping journeys and ecommerce growth.",
    href: "/industries/ecommerce",
    icon: ShoppingBag,
  },
  {
    name: "Education",
    category: "SCHOOLS · COLLEGES · TRAINING",
    description:
      "Help educational institutions communicate programmes and reach prospective students.",
    href: "/industries/education",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    category: "CLINICS · HEALTHCARE PROVIDERS",
    description:
      "Improve digital discovery and make healthcare information easier to access.",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    name: "Manufacturing",
    category: "INDUSTRIAL · B2B · EXPORTERS",
    description:
      "Present technical capabilities and connect with relevant industrial buyers.",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    name: "Professional Services",
    category: "CONSULTANTS · ADVISORS · B2B FIRMS",
    description:
      "Communicate expertise and build clearer digital journeys for potential clients.",
    href: "/industries/professional-services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Real Estate",
    category: "PROPERTY · DEVELOPERS · CONSULTANTS",
    description:
      "Support property discovery with useful project information and enquiry pathways.",
    href: "/industries/real-estate",
    icon: Building2,
  },
  {
    name: "Restaurants",
    category: "RESTAURANTS · CAFÉS · CLOUD KITCHENS",
    description:
      "Connect local discovery, menus, content and customer enquiries.",
    href: "/industries/restaurants",
    icon: UtensilsCrossed,
  },
  {
    name: "Startups",
    category: "FOUNDERS · SAAS · EMERGING BRANDS",
    description:
      "Build a stronger digital foundation for emerging products and businesses.",
    href: "/industries/startup",
    icon: Rocket,
  },
  {
    name: "Travel & Hospitality",
    category: "HOTELS · RESORTS · TRAVEL",
    description:
      "Help hospitality brands present their experiences and reach potential guests.",
    href: "/industries/travel-hospitality",
    icon: Plane,
  },
];

const faqs = [
  [
    "Where is Sharp Rays based?",
    "Sharp Rays is based in Naigaon, Vasai-Virar. Our location directory presents selected areas where we offer or plan to offer location-specific digital service information.",
  ],
  [
    "Which locations are listed on this page?",
    "The current Phase 1 directory includes Vasai Road, Naigaon, Nalasopara, Virar, Bhayandar, Mira Road, Borivali and Thane.",
  ],
  [
    "What services does Sharp Rays offer?",
    "Our six core service categories are SEO, website design and development, social media marketing, AI automation, AI video and creative production, and performance marketing and paid media.",
  ],
  [
    "Which industries does Sharp Rays help?",
    "Our industry directory includes Beauty and Wellness, Ecommerce, Education, Healthcare, Manufacturing, Professional Services, Real Estate, Restaurants, Startups, and Travel and Hospitality.",
  ],
  [
    "Can I enquire about services for my location?",
    "Yes. Contact Sharp Rays through the website and share your business location, requirements and goals so the relevant scope can be discussed.",
  ],
  [
    "Are the services available in every listed location?",
    "The listed locations are part of our location-page directory. Contact us with your area and requirements to discuss the services relevant to your business.",
  ],
  [
    "Can I choose more than one digital marketing service?",
    "Yes. Depending on your goals, services such as SEO, website development, social media marketing, AI automation, creative production and paid media may be considered together.",
  ],
  [
    "How do I get started with Sharp Rays?",
    "Start by sharing your business details, location and main objectives through our contact page. We can then discuss your requirements and a suitable scope of work.",
  ],
];

function Rise({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-9 bg-[#B79A72]" />
      <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#9F805E] sm:text-[11px]">
        {children}
      </span>
      {center && <span className="h-px w-9 bg-[#B79A72]" />}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  children,
  description,
  center = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <Rise
      className={`${
        center ? "mx-auto max-w-[800px] text-center" : "max-w-[760px]"
      }`}
    >
      <Eyebrow center={center}>{eyebrow}</Eyebrow>

      <h2 className="font-[var(--font-new-york),Georgia,serif] text-[32px] font-normal leading-[1.13] tracking-[-.035em] text-[#0B2A52] sm:text-[40px] lg:text-[47px]">
        {children}
      </h2>

      {description && (
        <p
          className={`mt-5 text-[13px] leading-[1.95] text-[#657889] sm:text-[14px] ${
            center ? "mx-auto max-w-[690px]" : "max-w-[650px]"
          }`}
        >
          {description}
        </p>
      )}
    </Rise>
  );
}

export default function LocationClient() {
  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">

      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#EDE2D4]/60 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-[#E7EDF1]/60 blur-[110px]" />

        <div className="relative mx-auto max-w-[1480px] px-5 pb-20 sm:px-8 lg:px-14 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            <Rise className="relative z-10 max-w-[690px]">
              <Eyebrow>Sharp Rays / Locations</Eyebrow>

              <h1 className="font-[var(--font-new-york),Georgia,serif] text-[39px] font-normal leading-[1.08] tracking-[-.045em] sm:text-[49px] md:text-[58px] lg:text-[65px] xl:text-[72px]">
                Local context.
                <br />
                <span className="italic text-[#B79A72]">
                  Smarter digital
                </span>
                <br />
                growth.
              </h1>

              <p className="mt-7 max-w-[570px] text-[14px] leading-[1.95] text-[#526779] sm:text-[15px]">
                Every business has a different market, audience and
                opportunity. Explore our location pages to discover
                digital marketing, website development and creative
                solutions relevant to your area.
              </p>

              <p className="mt-4 max-w-[550px] text-[12px] leading-[1.9] text-[#75838D]">
                Sharp Rays is based in Naigaon, Vasai-Virar, and
                presents its location-specific services across selected
                areas of the Mumbai Metropolitan Region.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#location-directory"
                  className="group inline-flex min-h-[51px] items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173F6F]"
                >
                  Explore Locations
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-[51px] items-center gap-2 rounded-[9px] border border-[#D5C7B4] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#B79A72] hover:bg-[#FAF8F4]"
                >
                  Talk to Sharp Rays
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="mt-11 grid max-w-[530px] grid-cols-3 divide-x divide-[#DFD6C9] border-t border-[#DFD6C9] pt-5">
                {[
                  ["08", "Location areas"],
                  ["06", "Core services"],
                  ["10", "Industry sectors"],
                ].map(([number, label]) => (
                  <div key={label} className="pr-3 pl-4 first:pl-0">
                   
                    <p className="mt-2 text-[9px] uppercase tracking-[.12em] text-[#75818A] sm:text-[10px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Rise>

            {/* HERO LOCATION DIRECTORY VISUAL */}
            <Rise delay={0.12} className="relative mx-auto w-full max-w-[590px]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[18px] border border-[#E9E1D5] bg-[#F6F3ED] p-6 sm:min-h-[500px] sm:p-9">
                <div className="absolute -right-24 -top-24 h-[330px] w-[330px] rounded-full border border-[#D9CCB8]" />
                <div className="absolute -right-12 -top-12 h-[240px] w-[240px] rounded-full border border-[#D9CCB8]/80" />
                <div className="absolute -bottom-32 -left-20 h-[330px] w-[330px] rounded-full border border-[#D9CCB8]/70" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#9F805E]">
                    Our service areas
                  </span>
                  <Compass size={21} strokeWidth={1.2} className="text-[#B79A72]" />
                </div>

                <div className="relative mt-9 grid grid-cols-2 gap-3 sm:gap-4">
                  {locations.map((location, i) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className={`group flex min-h-[76px] items-center gap-3 rounded-[10px] border p-3 transition-all duration-300 sm:p-4 ${
                        i < 2
                          ? "border-[#D5C4AA] bg-white shadow-[0_8px_25px_rgba(11,42,82,.045)]"
                          : "border-white/80 bg-white/65 hover:border-[#C6A77A] hover:bg-white"
                      }`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1E9DE] text-[#A1845F]">
                        <MapPin size={15} strokeWidth={1.5} />
                      </span>

                      <span className="min-w-0">
                        <span className="block truncate font-[var(--font-new-york),Georgia,serif] text-[14px] sm:text-[16px]">
                          {location.name}
                        </span>
                        <span className="mt-1 block text-[8px] uppercase tracking-[.1em] text-[#8A969D]">
                          {location.region}
                        </span>
                      </span>

                     
                    </Link>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center justify-between border-t border-[#DED5C8] pt-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#A1845F]">
                      Sharp Rays
                    </p>
                    <p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[18px]">
                      Naigaon, Vasai-Virar
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2A52] text-white">
                    <Globe2 size={18} strokeWidth={1.4} />
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 rounded-[9px] border border-[#E7DFD3] bg-white px-5 py-3 shadow-[0_12px_35px_rgba(11,42,82,.08)] sm:left-10">
                <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#A1845F]">
                  A more relevant approach
                </p>
                <p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[16px] text-[#0B2A52]">
                  Strategy with local context.
                </p>
              </div>
            </Rise>
          </div>
        </div>

        <div className="border-t border-[#E5DCCF] bg-[#F9F7F3]">
          <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-14">
            <p className="text-[10px] font-medium uppercase tracking-[.18em] text-[#957852]">
              Local relevance. Digital expertise.
            </p>
            <p className="text-[10px] tracking-[.05em] text-[#6F7A83] sm:text-[11px]">
              SEO <span className="px-2 text-[#B79A72]">✦</span>
              Websites <span className="px-2 text-[#B79A72]">✦</span>
              Creative <span className="px-2 text-[#B79A72]">✦</span>
              Digital Growth
            </p>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1380px] gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-12">
          <SectionHeading eyebrow="More than a location name">
            Your market is local.
            <br />
            <span className="italic text-[#B79A72]">
              Your digital reach can grow.
            </span>
          </SectionHeading>

          <Rise>
            <p className="text-[14px] leading-[2] text-[#526779] sm:text-[15px]">
              A business in Vasai may have different customers and
              competition from a business in Thane or Borivali. The
              right digital strategy starts by understanding the
              audience, the service being offered and the way people
              discover and evaluate local businesses.
            </p>
            <p className="mt-5 text-[13px] leading-[1.95] text-[#71818D]">
              Our location directory helps you explore the areas and
              service-specific information relevant to your business.
              Each location page is intended to provide its own local
              context rather than a generic city-name replacement.
            </p>
          </Rise>
        </div>
      </section>

{/* 03 — LOCATION DIRECTORY */}
<section
  id="location-directory"
  className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-28"
>
  <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading
        eyebrow="Explore our locations"
        description="Discover the areas and business communities represented in our location directory."
      >
        Find your area.
        <br />
        <span className="italic text-[#B79A72]">
          Explore what is possible.
        </span>
      </SectionHeading>

      <p className="mb-2 text-[10px] uppercase tracking-[.16em] text-[#947D60]">
        Location directory / 01—08
      </p>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {locations.map((location, index) => (
        <Rise key={location.slug} delay={(index % 4) * 0.05}>
          <div
            className="group relative flex h-full min-h-[275px] flex-col overflow-hidden rounded-[13px] border border-[#E7E1D7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7AD88] hover:shadow-[0_18px_40px_rgba(11,42,82,.07)] sm:p-7"
          >
            <div className="flex items-center justify-between">
            

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A1845F]">
                <MapPin size={16} strokeWidth={1.4} />
              </span>
            </div>

            <p className="mt-7 text-[9px] font-semibold uppercase tracking-[.14em] text-[#9B896F]">
              {location.region}
            </p>

            <h3 className="mt-2 font-[var(--font-new-york),Georgia,serif] text-[27px] leading-tight tracking-[-.025em] text-[#0B2A52]">
              {location.name}
            </h3>

            <p className="mt-4 text-[11px] leading-[1.85] text-[#6C7D89]">
              {location.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {location.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#EAE4DA] px-2.5 py-1 text-[8px] text-[#71808A]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Rise>
      ))}
    </div>
  </div>
</section>


      {/* 04 — SERVICES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <SectionHeading eyebrow="What we do">
              Six capabilities.
              <br />
              <span className="italic text-[#B79A72]">
                One connected vision.
              </span>
            </SectionHeading>

            <Rise>
              <p className="max-w-[600px] text-[13px] leading-[1.95] text-[#657889]">
                From building your digital foundation to attracting
                relevant audiences and improving business workflows,
                explore the services offered by Sharp Rays.
              </p>
            </Rise>
          </div>

          <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Rise key={service.href} delay={(index % 3) * 0.05}>
                  <Link
                    href={service.href}
                    className="group flex min-h-[225px] flex-col border-t border-[#E5E0D7] py-7 transition-colors hover:border-[#B79A72]"
                  >
                    <div className="flex items-center justify-between">
                     
                      <Icon
                        size={22}
                        strokeWidth={1.35}
                        className="text-[#A98B66] transition-transform group-hover:-translate-y-1"
                      />
                    </div>

                    <h3 className="mt-6 max-w-[320px] font-[var(--font-new-york),Georgia,serif] text-[24px] leading-[1.2] text-[#0B2A52]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[370px] text-[11px] leading-[1.9] text-[#6B7C89]">
                      {service.description}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[10px] font-semibold text-[#0B2A52]">
                      Explore service
                      <ArrowUpRight
                        size={15}
                        className="text-[#B79A72] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </Link>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — INDUSTRIES */}
      <section
        id="industries"
        className="bg-[#F8F6F1] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Industries we help"
              description="Different industries have different customers, buying journeys and business priorities. Explore the sectors Sharp Rays aims to support with relevant digital strategies."
            >
              Different industries.
              <br />
              <span className="italic text-[#B79A72]">
                Different growth opportunities.
              </span>
            </SectionHeading>

            <Link
              href="/industries"
              className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold text-[#0B2A52] transition hover:gap-4"
            >
              Explore all industries
              <ArrowUpRight size={16} className="text-[#B79A72]" />
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Rise key={industry.href} delay={(index % 5) * 0.045}>
                  <Link
                    href={industry.href}
                    className="group flex h-full min-h-[220px] flex-col rounded-[12px] border border-[#E6E0D6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_15px_35px_rgba(11,42,82,.055)] sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EDE4] text-[#A1845F] transition group-hover:bg-[#0B2A52] group-hover:text-white">
                        <Icon size={19} strokeWidth={1.4} />
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[#B79A72] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <p className="mt-6 text-[8px] font-semibold uppercase leading-[1.7] tracking-[.12em] text-[#A1845F]">
                      {industry.category}
                    </p>

                    <h3 className="mt-2 font-[var(--font-new-york),Georgia,serif] text-[21px] leading-[1.2] text-[#0B2A52]">
                      {industry.name}
                    </h3>

                    <p className="mt-3 text-[10px] leading-[1.85] text-[#71808A]">
                      {industry.description}
                    </p>
                  </Link>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — OUR APPROACH */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <SectionHeading eyebrow="Our approach">
              Not just location pages.
              <br />
              <span className="italic text-[#B79A72]">
                Relevant local context.
              </span>
            </SectionHeading>

            <Rise>
              <p className="text-[14px] leading-[1.95] text-[#627688]">
                A useful location page should help visitors understand
                the services available, the problems those services
                address and how to take the next step. It should also
                reflect the character of its location.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  [
                    "01",
                    "Understand the area",
                    "Consider its business environment, audience and local context.",
                  ],
                  [
                    "02",
                    "Connect the right services",
                    "Explain how each digital service relates to relevant business needs.",
                  ],
                  [
                    "03",
                    "Create a clear journey",
                    "Connect useful information with service pages and enquiry options.",
                  ],
                ].map(([number, title, copy]) => (
                  <div
                    key={number}
                    className="flex gap-5 border-t border-[#E7E2D9] pt-5"
                  >
                  
                    <div>
                      <h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px]">
                        {title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-[1.85] text-[#6E7F8B]">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* 07 — FAQ: TWO-COLUMN NUMBERED EDITORIAL DESIGN */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="locations-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Questions Before You Start</Eyebrow>

            <h2
              id="locations-faq-heading"
              className="font-[var(--font-new-york),Georgia,serif] text-[32px] font-normal leading-[1.15] tracking-[-.03em] text-[#0B2A52] sm:text-[40px] lg:text-[46px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Clear answers about our locations, services and how to
              get started with Sharp Rays.
            </p>
          </Rise>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map(([question, answer], index) => (
              <Rise key={question}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                 


                  <div>
                    <h3 className="font-[var(--font-new-york),Georgia,serif] text-[19px] leading-[1.4] text-[#0B2A52] sm:text-[21px]">
                      {question}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">
                      {answer}
                    </p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section className="relative overflow-hidden bg-[#EEE8DD] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-44 h-[550px] w-[550px] rounded-full border border-[#D9CCB8]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -left-40 h-[550px] w-[550px] rounded-full border border-[#D9CCB8]"
        />

        <Rise className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <Eyebrow center>
            Your business. Your market. Your opportunity.
          </Eyebrow>

          <h2 className="font-[var(--font-new-york),Georgia,serif] text-[37px] font-normal leading-[1.12] tracking-[-.04em] text-[#0B2A52] sm:text-[49px] lg:text-[57px]">
            Let&apos;s create something
            <span className="block italic text-[#A68862]">
              remarkable for your business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[620px] text-[13px] leading-[1.95] text-[#637587] sm:text-[14px]">
            Tell us where your business is, what you want to achieve
            and where you need support. Let&apos;s explore the right
            digital direction together.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex min-h-[52px] items-center gap-3 rounded-[9px] bg-[#0B2A52] px-7 text-[12px] font-medium text-white transition hover:bg-[#173F6F]"
            >
              Discuss Your Requirements
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-[9px] border border-[#CCB99E] bg-white/80 px-7 text-[12px] font-medium text-[#0B2A52] transition hover:bg-white"
            >
              Explore Our Services
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-9 flex items-center justify-center gap-2 text-[10px] text-[#8A8B87]">
            <Check size={13} className="text-[#A1845F]" />
            Clear scope. Relevant strategy. No one-size-fits-all promises.
          </div>
        </Rise>
      </section>
    </main>
  );
}
