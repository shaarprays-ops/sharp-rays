"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Megaphone,
  Search,
  Target,
  Compass,
  Sparkles,
  Workflow,
  Eye,
  Layers3,
} from "lucide-react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = {
  website: "/services/webdev/dts_web.webp",
  seo: "/services/seo/dts_seo.webp",
  social: "/services/social/dts_social.webp",
  performance: "/work/performance/dts.jpg",
};

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
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.65, delay, ease }}
      className={className}
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
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-7 bg-[#B79A72]" />
      <span className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#A38561] sm:text-[11px]">
        {children}
      </span>
      {center && <span className="h-px w-7 bg-[#B79A72]" />}
    </div>
  );
}

function Heading({
  children,
  center = false,
  id,
}: {
  children: ReactNode;
  center?: boolean;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-5 font-[var(--font-new-york)] text-[29px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[36px] lg:text-[42px] ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "A clearer digital home for the brand.",
    description:
      "The DTS website project focuses on organising the brand's digital information, presenting its services clearly and creating a responsive experience that is easier to navigate.",
    points: [
      "Website strategy and structure",
      "UX/UI and responsive development",
      "Service and content organisation",
      "Technical SEO foundations",
    ],
    image: images.website,
    alt: "DTS website development project",
    href: "/services/website-development",
    accent: "#688AA6",
    icon: Code2,
  },
  {
    number: "02",
    title: "Search Engine Optimisation",
    subtitle: "A more organised foundation for search.",
    description:
      "The SEO work covers technical improvements, search-led pages, internal linking and authority-building activity to support the website's organic discoverability.",
    points: [
      "Keyword research and page targeting",
      "Technical and on-page SEO",
      "Internal linking and content structure",
      "Authority-building activity",
    ],
    image: images.seo,
    alt: "DTS SEO project visual",
    href: "/services/search-engine-optimization",
    accent: "#668A72",
    icon: Search,
  },
  {
    number: "03",
    title: "Social Media Marketing",
    subtitle: "A consistent voice across social content.",
    description:
      "The social media work combines educational, promotional and brand-led content into a more consistent publishing system, with creative and copy planned around the brand's digital topics.",
    points: [
      "Content strategy and planning",
      "Social creative and visual direction",
      "Reels, captions and copy",
      "Publishing and content consistency",
    ],
    image: images.social,
    alt: "DTS social media marketing creatives",
    href: "/services/social-media-marketing",
    accent: "#AD728C",
    icon: Megaphone,
  },
  
];

const objectives = [
  {
    number: "01",
    title: "Clarify the Brand",
    description:
      "Present the brand and its digital services through clearer website content and a more consistent communication direction.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Strengthen Discoverability",
    description:
      "Improve the organisation of search-focused pages and the technical foundations that support organic discovery.",
    icon: Search,
  },
  {
    number: "03",
    title: "Build Content Consistency",
    description:
      "Bring educational, promotional and brand-led social content into a more structured publishing approach.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Support Measurable Campaigns",
    description:
      "Use campaign structure, audience testing and conversion tracking to make paid activity easier to evaluate.",
    icon: Target,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the brand, its services, audience and existing digital touchpoints.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organise the website, search priorities, content themes and campaign requirements.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop the website experience, social creatives and campaign assets around the agreed direction.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Review",
    description:
      "Evaluate the work, check implementation and identify practical opportunities for refinement.",
    icon: Workflow,
  },
];

const gallery = [
  {
    number: "01",
    title: "Website Experience",
    category: "Website Development",
    image: images.website,
    alt: "DTS website project showcase",
  },
  {
    number: "02",
    title: "Search Optimisation",
    category: "SEO",
    image: images.seo,
    alt: "DTS SEO project showcase",
  },
  {
    number: "03",
    title: "Social Media Content",
    category: "Social Media Marketing",
    image: images.social,
    alt: "DTS social media creative showcase",
  },
  {
    number: "04",
    title: "Campaign Direction",
    category: "Performance Marketing",
    image: images.performance,
    alt: "DTS performance marketing project showcase",
  },
];

const faqs = [
  {
    question: "What work is covered in the DTS case study?",
    answer:
      "This case study brings together DTS website development, SEO, social media marketing and performance marketing work in one project overview.",
  },
  {
    question: "What was the focus of the DTS website project?",
    answer:
      "The website work focused on organising digital information, presenting services clearly and creating a responsive experience with a stronger content structure.",
  },
  {
    question: "What did the SEO work include?",
    answer:
      "The SEO work covered keyword research, page optimisation, technical SEO, internal linking, content structure and authority-building activity.",
  },
  {
    question: "Does this page publish campaign or traffic results?",
    answer:
      "This page describes the project scope and approach. Numerical performance claims should only be added when verified project data is available.",
  },
];

export default function DTSCaseStudy() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
     
{/* 01 — HERO */}
<section
  className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
  aria-labelledby="dts-hero-heading"
>
  {/* Soft background details */}
  <div className="pointer-events-none absolute -right-32 -top-28 h-[440px] w-[440px] rounded-full border border-[#D8C5AA]/30" />
  <div className="pointer-events-none absolute -right-16 top-10 h-[300px] w-[300px] rounded-full bg-[#E8D9C5]/25 blur-[90px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#E8E3DA]/40 blur-[100px]" />

  <div className="relative mx-auto max-w-[1260px]">

    {/* Breadcrumb */}
    <div className="mb-12 flex flex-wrap items-center gap-2 text-[11px] text-[#82909C]">
     <Link
  href="/"
  title="Visit Sharp Rays homepage"
>
  Home
</Link>
      <span>/</span>
     <Link
  href="/work"
  title="Explore Sharp Rays portfolio and case studies"
>
  Work
</Link>
      <span>/</span>
      <span className="text-[#0B2A52]">DTS</span>
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

      {/* LEFT CONTENT */}
      <Reveal>
        <div>
          <Eyebrow>Selected Client Project · Digital Brand</Eyebrow>

          <h1
            id="dts-hero-heading"
            className="mt-7 max-w-[720px] font-[var(--font-new-york)] text-[40px] font-normal leading-[1.08] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]"
          >
            Building a more connected digital presence for{" "}
            <span className="text-[#B79A72]">DTS.</span>
          </h1>

          <p className="mt-7 max-w-[590px] text-[14px] leading-[2] text-[#64798B] sm:text-[15px]">
            A multi-service digital project bringing together
            website development, search optimisation, social media
            communication and performance marketing for DTS.
          </p>

          <p className="mt-5 max-w-[550px] text-[12px] leading-[1.95] text-[#82909C] sm:text-[13px]">
            Each discipline contributes a different role to the
            brand's digital presence, from its website experience
            and organic search foundations to consistent content
            and structured campaign activity.
          </p>

          {/* Key points */}
          <div className="mt-8 space-y-4">
            {[
              "Website experience and digital presentation",
              "Search visibility and content structure",
              "Consistent social media communication",
              "Campaign planning and performance measurement",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check
                  size={17}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                  strokeWidth={1.8}
                />
                <span className="text-[12px] leading-6 text-[#536A7D] sm:text-[13px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-3">
           <Link
  href="#project-overview"
  title="Explore the DTS social media marketing case study"
  className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] transition hover:border-[#B79A72]"
>
  Explore the Project
  <ArrowDown
    size={15}
    className="text-[#B79A72]"
  />
</Link>

            <a
              href="#project-overview"
              className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#D9CCBC] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#B79A72]"
            >
              Explore the Project
              <ArrowDown size={15} className="text-[#B79A72]" />
            </a>
          </div>
        </div>
      </Reveal>

      {/* RIGHT PROJECT PANEL — NO IMAGE */}
      <Reveal delay={0.12}>
        <div className="relative mx-auto w-full max-w-[520px]">

          <div className="relative overflow-hidden rounded-[24px] border border-[#E8DED2] bg-white p-7 shadow-[0_24px_70px_-35px_rgba(11,42,82,0.18)] sm:p-10">

            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#E6D8C6]/70" />
            <div className="pointer-events-none absolute -right-7 -top-7 h-44 w-44 rounded-full border border-[#E6D8C6]/60" />

            <div className="relative">

              {/* Panel heading */}
              <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#A38561]">
                  Project Overview
                </span>
                <Code2
                  size={22}
                  strokeWidth={1.4}
                  className="text-[#B79A72]"
                />
              </div>

              {/* Main typography */}
              <div className="py-12 sm:py-16">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#9A8A77]">
                  DTS · Digital Presence
                </p>

                <h2 className="mt-5 font-[var(--font-new-york)] text-[48px] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[62px]">
                  Connected
                  <br />
                  <span className="text-[#B79A72]">By Design.</span>
                </h2>

                <p className="mt-6 max-w-[320px] text-[12px] leading-[1.9] text-[#718092]">
                  Four digital disciplines brought together
                  under one coordinated brand direction.
                </p>
              </div>

              {/* Service tiles */}
              <div className="grid grid-cols-2 gap-3 border-t border-[#EAE3D9] pt-6">

                <div className="rounded-xl bg-[#F5F4F0] p-4">
                  <Code2
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#688AA6]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Website
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Digital Experience
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5F4F0] p-4">
                  <Search
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#668A72]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    SEO
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Organic Discovery
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5F4F0] p-4">
                  <Megaphone
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#AD728C]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Social Media
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Brand Communication
                  </p>
                </div>

                <div className="rounded-xl bg-[#F5F4F0] p-4">
                  <Gauge
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#B8794D]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Performance
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Campaign Strategy
                  </p>
                </div>

              </div>

              {/* Bottom label */}
              <div className="mt-6 flex items-center justify-between border-t border-[#EAE3D9] pt-6">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                  One Connected Direction
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9CCBC]">
                  <ArrowUpRight
                    size={16}
                    className="text-[#B79A72]"
                  />
                </div>
              </div>

            </div>
          </div>

          <p className="mt-4 text-right text-[9px] uppercase tracking-[0.2em] text-[#A38561]">
            DTS · Digital Marketing & Development
          </p>
        </div>
      </Reveal>
    </div>

    {/* PROJECT DETAILS */}
    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E8DFD3] pt-8 sm:grid-cols-4">
      {[
        ["Client", "DTS"],
        ["Project Type", "Client Project"],
        ["Disciplines", "4 Digital Services"],
        ["Focus", "Connected Digital Presence"],
      ].map(([label, value]) => (
        <div key={label}>
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#9A8A77]">
            {label}
          </p>
          <p className="mt-2 text-[12px] font-medium text-[#0B2A52] sm:text-[13px]">
            {value}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* 02 — PROJECT OVERVIEW */}
      <section
        id="project-overview"
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="overview-heading"
      >
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Project Overview</Eyebrow>
            <Heading id="overview-heading">
              One brand. Four connected digital disciplines.
            </Heading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[13px] leading-[2] text-[#6D8091]">
              <p>
                The DTS project brings together multiple areas of digital
                marketing and development under one coordinated direction.
                Website development establishes the brand's digital experience,
                while SEO supports search visibility and content structure.
              </p>
              <p>
                Social media marketing contributes to consistent communication
                across digital channels, while performance marketing introduces
                a more structured approach to campaign planning, audience
                targeting and measurement.
              </p>
              <p>
                The aim of this case study is to present the scope of work and
                explain how these digital touchpoints fit together. It focuses
                on the project approach rather than making unverified claims
                about traffic, leads or campaign performance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — OBJECTIVES */}
      <section
        className="bg-[#F7F5F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="objectives-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[700px]">
            <Eyebrow>Project Objectives</Eyebrow>
            <Heading id="objectives-heading">
              Creating clarity across every digital touchpoint.
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.06}>
                  <article className="h-full rounded-[15px] border border-[#E8E0D6] bg-white p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon
                        size={23}
                        strokeWidth={1.4}
                        className="text-[#B79A72]"
                      />
                      <span className="text-[10px] tracking-[0.18em] text-[#B79A72]">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-8 font-[var(--font-new-york)] text-[21px] leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[11px] leading-[1.9] text-[#718092]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[760px]">
            <Eyebrow>What We Worked On</Eyebrow>
            <Heading id="services-heading">
              Four areas of work, one connected digital direction.
            </Heading>
            <p className="mt-5 max-w-[620px] text-[12px] leading-[1.9] text-[#718092]">
              Explore the different disciplines represented in the DTS project
              and the role each one plays in building a more connected digital
              presence.
            </p>
          </Reveal>

          <div className="mt-14 space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 !== 0;

              return (
                <Reveal key={service.number} delay={0.04}>
                  <article
                    className={`grid overflow-hidden rounded-[18px] border border-[#EAE3DA] bg-[#FCFAF7] lg:grid-cols-2 ${
                      reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[260px] bg-[#E9EEF0] sm:min-h-[340px]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover transition duration-700 hover:scale-[1.025]"
                      />
                      <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-[#0B2A52]">
                        {service.title}
                      </span>
                    </div>

                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.2em] text-[#B79A72]">
                          {service.number} / 04
                        </span>
                        <Icon
                          size={23}
                          strokeWidth={1.4}
                          style={{ color: service.accent }}
                        />
                      </div>

                      <h3 className="mt-7 font-[var(--font-new-york)] text-[27px] leading-[1.2] tracking-[-0.025em] sm:text-[32px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[12px] font-medium text-[#A38561]">
                        {service.subtitle}
                      </p>
                      <p className="mt-5 text-[12px] leading-[1.95] text-[#718092]">
                        {service.description}
                      </p>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-[11px] leading-[1.6] text-[#607588]"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-[#B79A72]"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={service.href}
                        className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#CBB99F] pb-2 text-[11px] font-medium text-[#0B2A52] transition hover:text-[#A38561]"
                      >
                        Explore Service
                        <ArrowUpRight
                          size={15}
                          className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

     

      {/* 06 — APPROACH */}
      <section
        className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[760px]">
            <Eyebrow>Our Approach</Eyebrow>
            <h2
              id="approach-heading"
              className="mt-5 font-[var(--font-new-york)] text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[38px] lg:text-[44px]"
            >
              A thoughtful process from understanding to refinement.
            </h2>
            <p className="mt-5 max-w-[620px] text-[12px] leading-[1.9] text-white/60">
              Each part of the project follows a practical sequence, helping
              keep the work aligned with the brand, its requirements and its
              wider digital direction.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-white/15 pt-9 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.06}>
                  <article className="h-full">
                    <div className="flex items-center justify-between">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className="text-[#C6A77A]"
                      />
                      <span className="text-[10px] tracking-[0.18em] text-[#C6A77A]">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-8 font-[var(--font-new-york)] text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[12px] leading-[1.9] text-white/60">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — PROJECT HIGHLIGHTS */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="highlights-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>What the Project Brings Together</Eyebrow>
            <Heading id="highlights-heading" center>
              A connected approach to{" "}
              <span className="text-[#B79A72]">digital work.</span>
            </Heading>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "A Clearer Website Journey",
                description:
                  "Website structure and content organisation help visitors understand the brand and navigate its digital information.",
              },
              {
                number: "02",
                title: "Search and Content Working Together",
                description:
                  "Search-focused pages and a consistent content approach support discoverability and brand communication.",
              },
              {
                number: "03",
                title: "More Structured Campaign Activity",
                description:
                  "Campaign planning, audience testing and conversion tracking create a clearer framework for reviewing paid activity.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <article className="h-full rounded-[16px] border border-[#E8E0D6] bg-[#FCFAF7] p-7 sm:p-8">
                  <span className="text-[10px] tracking-[0.2em] text-[#B79A72]">
                    {item.number}
                  </span>
                  <h3 className="mt-8 font-[var(--font-new-york)] text-[23px] leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — REFLECTION */}
      <section
        className="bg-[#F4F6F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="reflection-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-1/2 w-1/2 border-l border-t border-[#B79A72]" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[16px] bg-[#E8EEF1]">
                <Image
                  src={images.social}
                  alt="DTS social media project creative"
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>The Bigger Picture</Eyebrow>
            <Heading id="reflection-heading">
              Digital channels work best when each has a clear role.
            </Heading>
            <div className="mt-6 space-y-5 text-[13px] leading-[2] text-[#6D8091]">
              <p>
                A website, search presence, social media channels and paid
                campaigns contribute differently to a brand's digital presence.
                Their roles become easier to understand when each is planned
                with a clear purpose.
              </p>
              <p>
                The DTS case study brings these areas together to show the range
                of work represented in the project, from website and content
                structure to search optimisation and campaign measurement.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-[#B79A72] pl-5">
              <p className="font-[var(--font-new-york)] text-[20px] leading-[1.5] text-[#0B2A52]">
                "Clear digital direction comes from giving every channel a
                purpose."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section
        className="bg-[#FAF8F5] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Questions About the Project</Eyebrow>
            <Heading id="faq-heading" center>
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </Heading>
            <p className="mt-5 text-[12px] leading-[1.9] text-[#718092]">
              A few things to know about the DTS project and Sharp Rays'
              approach.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={(index % 2) * 0.05}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-6 sm:py-7">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[14px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-new-york)] text-[18px] leading-[1.4] sm:text-[20px]">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-[11px] leading-[1.95] text-[#708092] sm:text-[12px]">
                      {item.answer}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — RELATED WORK */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1220px] flex-col justify-between gap-6 border-y border-[#E7DED3] py-9 sm:flex-row sm:items-center">
          <div>
            <Eyebrow>Continue Exploring</Eyebrow>
            <h2 className="mt-4 font-[var(--font-new-york)] text-[25px]">
              Discover more work by Sharp Rays.
            </h2>
          </div>
         <Link
  href="/work"
  title="Explore all Sharp Rays projects and case studies"
>
  Explore All Projects
</Link>
        </div>
      </section>

      {/* 11 — FINAL CTA */}
      <section
        className="bg-white px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28"
        aria-labelledby="final-cta-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] border border-[#E4D5C1] bg-[#F7F1E9]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full border border-[#D8C2A4]/60"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-28 h-[360px] w-[360px] rounded-full border border-[#D8C2A4]/40"
              />

              <div className="relative grid gap-9 p-7 sm:p-11 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14 lg:p-14">
                <div>
                  <Eyebrow>Have a Project in Mind?</Eyebrow>
                  <h2
                    id="final-cta-heading"
                    className="mt-5 max-w-[720px] font-[var(--font-new-york)] text-[31px] leading-[1.17] tracking-[-0.035em] sm:text-[40px] lg:text-[46px]"
                  >
                    Let's create something that makes people say{" "}
                    <span className="text-[#B79A72]">Oh, Wow.</span>
                  </h2>
                  <p className="mt-6 max-w-[620px] text-[13px] leading-[1.95] text-[#62778A]">
                    Whether you need a clearer website, stronger search
                    visibility, purposeful social content or a more structured
                    campaign approach, let's find the right direction for your
                    business.
                  </p>
                </div>

                <div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11">
                  <Code2 size={25} className="text-[#B79A72]" />
                  <h3 className="mt-5 font-[var(--font-new-york)] text-[25px] leading-[1.3]">
                    Your next project starts with a conversation.
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                    Tell us about your business, goals and the digital
                    experience you want to create.
                  </p>
                 <Link
  href="/contact"
  title="Start a social media marketing project with Sharp Rays"
>
  Start a Project
</Link>
                </div>
              </div>

              <div className="relative border-t border-[#E1D4C3] px-7 py-4 text-[9px] tracking-[0.16em] text-[#9A815F] sm:px-11 lg:px-14">
                SHARP RAYS — WE CREATE THE "OH, WOW."
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}