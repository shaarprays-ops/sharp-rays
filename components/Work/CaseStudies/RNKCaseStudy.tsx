"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Layers3,
  Search,
  MonitorSmartphone,
  Megaphone,
  Target,
  Sparkles,
  Compass,
  Eye,
  Workflow,
  MousePointerClick,
  CarFront,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projectImages = {
  hero: "/services/webdev/rnkhero.webp",
  website: "/services/webdev/rnk_web.webp",
  seo: "/services/seo/rnk_seo.webp",
  social: "/services/social/rnk_social.webp",
};

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
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
      initial={reduced ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease }}
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
    <div
      className={`flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
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

function ProjectImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 1023px) 100vw, 50vw",
  fit = "contain",
}: ProjectImageProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        fit === "contain"
          ? "bg-[#F3F1ED]"
          : "bg-gradient-to-br from-[#E7E1D7] via-[#F5F2EC] to-[#C8D3D8]"
      } ${className}`}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes={sizes}
          className={
            fit === "contain"
              ? "object-contain p-2 sm:p-3"
              : "object-cover transition duration-700 group-hover:scale-[1.035]"
          }
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#F2EEE7] to-[#DDE5E7] text-[#0B2A52]/45">
          <Layers3 size={42} strokeWidth={0.9} />
          <span className="text-[9px] uppercase tracking-[0.2em]">
            Project Visual
          </span>
        </div>
      )}
    </div>
  );
}

const services: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  href: string;
  accent: string;
}[] = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "A digital experience built around the brand.",
    description:
      "The website is an important part of how customers discover a rental business, understand its services and decide what to do next. The focus is on presenting information clearly through a considered digital experience.",
    points: [
      "Website structure and page experience",
      "Responsive design considerations",
      "Clear service presentation",
      "User-friendly navigation",
    ],
    icon: MonitorSmartphone,
    image: projectImages.website,
    imageAlt: "RNK Rentals website development project",
    href: "/services/website-development",
    accent: "#688AA6",
  },
  {
    number: "02",
    title: "Search Engine Optimisation",
    subtitle: "Making the brand easier to discover.",
    description:
      "Search optimisation supports the way potential customers find relevant rental services online. The approach considers website structure, useful content and search relevance.",
    points: [
      "On-page SEO considerations",
      "Search intent and keyword relevance",
      "Website content organisation",
      "Technical SEO foundations",
    ],
    icon: Search,
    image: projectImages.seo,
    imageAlt: "RNK Rentals SEO project visual",
    href: "/services/search-engine-optimization",
    accent: "#668A72",
  },
  {
    number: "03",
    title: "Social Media Marketing",
    subtitle: "A recognisable and consistent social presence.",
    description:
      "Social media gives a rental brand another way to communicate its services, share useful information and build familiarity with its audience through purposeful content and creative direction.",
    points: [
      "Social media content planning",
      "Creative design direction",
      "Brand communication",
      "Platform-specific content",
    ],
    icon: Megaphone,
    image: projectImages.social,
    imageAlt: "RNK Rentals social media marketing creatives",
    href: "/services/social-media-marketing",
    accent: "#AD728C",
  },
];

const objectives = [
  {
    number: "01",
    title: "Communicate Clearly",
    description:
      "Present the rental business and its services in a way that is easier for potential customers to understand.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Strengthen Discovery",
    description:
      "Build a more organised digital foundation to support how people find and explore the brand.",
    icon: Search,
  },
  {
    number: "03",
    title: "Create Consistency",
    description:
      "Bring the website, search presence and social media communication together under one brand direction.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Support Enquiries",
    description:
      "Make important information and customer actions easier to find across relevant digital touchpoints.",
    icon: MousePointerClick,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, its services, audience and existing digital presence.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Identify priorities and create a direction for the required digital services.",
    icon: Target,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop the agreed website, content and creative assets with a consistent visual direction.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Review the work and identify practical opportunities for continued improvement.",
    icon: Workflow,
  },
];

const gallery = [
  {
    number: "01",
    title: "Website Experience",
    category: "Website Development",
    image: projectImages.website,
    alt: "RNK Rentals website development project",
  },
  {
    number: "02",
    title: "Search Visibility",
    category: "Search Engine Optimisation",
    image: projectImages.seo,
    alt: "RNK Rentals SEO project visual",
  },
  {
    number: "03",
    title: "Social Media Creatives",
    category: "Social Media Marketing",
    image: projectImages.social,
    alt: "RNK Rentals social media creatives",
  },
];

const faqs = [
  {
    question: "What work did Sharp Rays do for RNK Rentals?",
    answer:
      "This case study presents the RNK Rentals project across website development, SEO and social media marketing. The published sections should reflect only the services and deliverables actually completed.",
  },
  {
    question: "Why bring multiple digital services into one case study?",
    answer:
      "A single case study helps visitors understand how the different parts of a brand's digital presence relate to each other, rather than viewing each service in isolation.",
  },
  {
    question: "Can I explore individual Sharp Rays services?",
    answer:
      "Yes. The service sections on this page link to the relevant Sharp Rays service pages for visitors who want to learn more about a particular capability.",
  },
  {
    question: "Does this case study include performance results?",
    answer:
      "Only verified project data should be included as performance results. This page focuses on the project approach and work rather than presenting unverified figures or guarantees.",
  },
];

export default function RNKCaseStudy() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
     
{/* 01 — HERO */}
<section
  className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
  aria-labelledby="rnk-hero-heading"
>
  {/* Soft background details */}
  <div className="pointer-events-none absolute -right-32 -top-28 h-[440px] w-[440px] rounded-full border border-[#D8C5AA]/30" />
  <div className="pointer-events-none absolute -right-16 top-10 h-[300px] w-[300px] rounded-full bg-[#E8D9C5]/25 blur-[90px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#E8E3DA]/40 blur-[100px]" />

  <div className="relative mx-auto max-w-[1260px]">

    {/* Breadcrumb */}
    <div className="mb-12 flex flex-wrap items-center gap-2 text-[11px] text-[#82909C]">
     <Link href="/" title="Visit Sharp Rays homepage">
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
      <span className="text-[#0B2A52]">RNK Rentals</span>
    </div>

    {/* Hero Content */}
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

      {/* Left Content */}
      <Reveal>
        <div>
          <Eyebrow>Selected Client Project · Automotive</Eyebrow>

          <h1
            id="rnk-hero-heading"
            className="mt-7 max-w-[720px] font-[var(--font-new-york)] text-[40px] font-normal leading-[1.08] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]"
          >
            Building a stronger digital presence for{" "}
            <span className="text-[#B79A72]">RNK Rentals.</span>
          </h1>

          <p className="mt-7 max-w-[590px] text-[14px] leading-[2] text-[#64798B] sm:text-[15px]">
            Bringing together website development, search engine
            optimisation and social media marketing to create a
            more connected digital experience for a car rental brand.
          </p>

          <p className="mt-5 max-w-[550px] text-[12px] leading-[1.95] text-[#82909C] sm:text-[13px]">
            From the way customers discover rental services to how
            they explore the business online, the project focuses
            on clear communication, consistent presentation and
            a more considered customer journey.
          </p>

          {/* Key points */}
          <div className="mt-8 space-y-4">
            {[
              "A clear and accessible website experience",
              "A stronger foundation for search discovery",
              "Consistent social media communication",
              "Connected digital brand presentation",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                  strokeWidth={1.7}
                />
                <span className="text-[12px] leading-6 text-[#536A7D] sm:text-[13px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
           <Link
  href="/contact"
  title="Contact Sharp Rays about your website and digital marketing project"
>
  Discuss Your Project
</Link>

         <Link
  href="#project-overview"
  title="Explore the RNK Rentals website and digital marketing case study"
  className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] transition hover:border-[#B79A72]"
>
  Explore the Project
  <ArrowDown size={15} className="text-[#B79A72]" />
</Link>
          </div>
        </div>
      </Reveal>

      {/* Right Editorial Content — No Image */}
      <Reveal delay={0.12}>
        <div className="relative mx-auto w-full max-w-[520px]">

          <div className="relative overflow-hidden rounded-[24px] border border-[#E8DED2] bg-white p-7 shadow-[0_24px_70px_-35px_rgba(11,42,82,0.18)] sm:p-10">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#E6D8C6]/70" />
            <div className="pointer-events-none absolute -right-7 -top-7 h-44 w-44 rounded-full border border-[#E6D8C6]/60" />

            <div className="relative">

              <div className="flex items-center justify-between border-b border-[#EAE3D9] pb-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#A38561]">
                  Project Overview
                </span>
                <CarFront size={21} className="text-[#B79A72]" strokeWidth={1.4} />
              </div>

              <div className="py-12 sm:py-16">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#9A8A77]">
                  RNK Rentals
                </p>

                <h2 className="mt-5 font-[var(--font-new-york)] text-[45px] leading-[1.02] tracking-[-0.04em] text-[#0B2A52] sm:text-[58px]">
                  Moving
                  <br />
                  <span className="text-[#B79A72]">Forward.</span>
                </h2>

                <p className="mt-6 max-w-[310px] text-[12px] leading-[1.9] text-[#718092]">
                  A connected digital direction for a customer-facing
                  car rental business.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-[#EAE3D9] pt-6">
                {[
                  { number: "01", label: "Website" },
                  { number: "02", label: "SEO" },
                  { number: "03", label: "Social" },
                ].map((item) => (
                  <div key={item.number}>
                    <span className="text-[9px] tracking-[0.15em] text-[#B79A72]">
                      {item.number}
                    </span>
                    <p className="mt-2 text-[11px] font-medium text-[#0B2A52]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <p className="mt-4 text-right text-[9px] uppercase tracking-[0.2em] text-[#A38561]">
            RNK Rentals · Digital Experience
          </p>
        </div>
      </Reveal>
    </div>

    {/* Project Details */}
    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E8DFD3] pt-8 sm:grid-cols-4">
      {[
        ["Client", "RNK Rentals"],
        ["Industry", "Car Rentals"],
        ["Project Type", "Digital Presence"],
        ["Focus", "Multi-service"],
      ].map(([label, value]) => (
        <div key={label}>
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#9A8A77]">
            {label}
          </p>
          <p className="mt-2 text-[13px] font-medium text-[#0B2A52]">
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
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="overview-heading"
      >
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <Eyebrow>The Project</Eyebrow>
            <Heading id="overview-heading">
              A digital presence designed around the customer experience.
            </Heading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[13px] leading-[2] text-[#6D8091] sm:text-[14px]">
              <p>
                RNK Rentals operates in a category where customers need to
                understand available services, explore relevant information
                and feel confident before making an enquiry.
              </p>
              <p>
                The digital experience therefore needs to do more than simply
                introduce the business. It should communicate the brand
                clearly and make the customer journey easier to follow.
              </p>
              <p>
                Sharp Rays approaches this project through the relationship
                between website experience, search discovery and social
                media communication, bringing the different touchpoints
                into a more consistent direction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — PROJECT OBJECTIVES */}
      <section
        className="bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="objectives-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[780px]">
            <Eyebrow>Project Objectives</Eyebrow>
            <Heading id="objectives-heading">
              Four important areas of the{" "}
              <span className="text-[#B79A72]">digital experience.</span>
            </Heading>
            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#708092]">
              The project is structured around the practical needs of a
              customer-facing rental business.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-[#E5DDD2] bg-[#E5DDD2] sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.05}>
                  <article className="flex h-full flex-col bg-[#FCFAF7] p-6 transition-colors hover:bg-white sm:p-7">
                    <div className="flex items-center justify-between">
                      <Icon
                        size={23}
                        strokeWidth={1.4}
                        className="text-[#B79A72]"
                      />
                      <span className="text-[10px] tracking-[0.16em] text-[#B79A72]">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-9 font-[var(--font-new-york)] text-[22px] leading-[1.25]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#6B7D8E]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES DELIVERED */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Our Work</Eyebrow>
            <Heading id="services-heading" center>
              Different capabilities.{" "}
              <span className="text-[#B79A72]">One connected direction.</span>
            </Heading>
            <p className="mt-5 text-[13px] leading-[1.95] text-[#708092]">
              Explore the key digital areas represented in the RNK Rentals
              project.
            </p>
          </Reveal>

          <div className="mt-14 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 === 1;

              return (
                <Reveal key={service.number}>
                  <article className="group overflow-hidden rounded-[18px] border border-[#E9E0D5] bg-[#FCFAF7]">
                    <div className="grid lg:grid-cols-2">
                      <div
                        className={`relative min-h-[270px] bg-[#F3F1ED] sm:min-h-[360px] ${
                          reverse ? "lg:order-2" : ""
                        }`}
                      >
                        <ProjectImage
                          src={service.image}
                          alt={service.imageAlt}
                          sizes="(max-width: 1023px) 100vw, 50vw"
                          fit="contain"
                          className="absolute inset-0 h-full w-full"
                        />

                        <span className="absolute left-6 top-6 rounded-full border border-[#E8DED2] bg-white/95 px-4 py-2 text-[9px] tracking-[0.14em] text-[#0B2A52]">
                          SERVICE {service.number}
                        </span>

                        <div className="absolute bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DED2] bg-white/95 text-[#0B2A52]">
                          <Icon size={20} strokeWidth={1.4} />
                        </div>
                      </div>

                      <div
                        className={`flex flex-col p-7 sm:p-9 lg:p-11 ${
                          reverse ? "lg:order-1" : ""
                        }`}
                      >
                        <p
                          className="text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: service.accent }}
                        >
                          {service.title}
                        </p>

                        <h3 className="mt-4 font-[var(--font-new-york)] text-[29px] leading-[1.2] sm:text-[34px]">
                          {service.subtitle}
                        </h3>

                        <p className="mt-5 text-[12px] leading-[1.95] text-[#718092] sm:text-[13px]">
                          {service.description}
                        </p>

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#536A7D]"
                            >
                              <Check
                                size={14}
                                className="mt-0.5 shrink-0"
                                style={{ color: service.accent }}
                              />
                              {point}
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto border-t border-[#E7DED3] pt-6">
                          <Link
                            href={service.href}
                            className="group/link inline-flex items-center gap-2 text-[11px] font-medium text-[#0B2A52] transition hover:text-[#A18461]"
                          >
                            Explore This Service
                            <ArrowUpRight
                              size={15}
                              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

   

      {/* 06 — STRATEGIC APPROACH */}
      <section
        className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[700px]">
            <Eyebrow>How We Approach the Work</Eyebrow>
            <Heading id="approach-heading">
              Thoughtful planning.{" "}
              <span className="text-[#C6A77A]">Purposeful execution.</span>
            </Heading>
            <p className="mt-5 text-[13px] leading-[1.95] text-white/60">
              Every project needs a clear direction. We focus on understanding
              the business first, then making creative and technical
              decisions that support its requirements.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
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
              A more considered approach to{" "}
              <span className="text-[#B79A72]">digital presence.</span>
            </Heading>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Clarity Across Touchpoints",
                description:
                  "The website and social channels each have a role in explaining the business and helping customers explore its services.",
              },
              {
                number: "02",
                title: "A Consistent Brand Direction",
                description:
                  "Visual presentation and communication should feel connected, recognisable and relevant to the business.",
              },
              {
                number: "03",
                title: "A Foundation to Build On",
                description:
                  "A considered digital foundation creates a starting point for ongoing improvements as the business evolves.",
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

      {/* 08 — PROJECT REFLECTION */}
      <section
        className="bg-[#F4F6F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="reflection-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-1/2 w-1/2 border-l border-t border-[#B79A72]" />
              <ProjectImage
                src={projectImages.hero}
                alt="RNK Rentals digital project visual"
                fit="contain"
                className="aspect-[5/4] rounded-[16px]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>The Bigger Picture</Eyebrow>
            <Heading id="reflection-heading">
              Good digital experiences connect the details.
            </Heading>
            <div className="mt-6 space-y-5 text-[13px] leading-[2] text-[#6D8091]">
              <p>
                A website, search presence and social media channels each
                contribute differently to how customers experience a brand.
                Their value becomes clearer when they communicate in a
                consistent and purposeful way.
              </p>
              <p>
                The RNK Rentals case study reflects Sharp Rays' approach to
                combining creative thinking with practical digital
                execution, keeping the business and its audience at the
                centre of the work.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-[#B79A72] pl-5">
              <p className="font-[var(--font-new-york)] text-[20px] leading-[1.5] text-[#0B2A52]">
                "A connected digital presence starts with understanding
                what the customer needs."
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
              A few things to know about the RNK Rentals project and
              Sharp Rays' approach.
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
                    Whether you need a stronger website, better search
                    visibility or purposeful social media communication,
                    let's find the right direction for your business.
                  </p>
                </div>

                <div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11">
                  <CarFront size={25} className="text-[#B79A72]" />
                  <h3 className="mt-5 font-[var(--font-new-york)] text-[25px] leading-[1.3]">
                    Your next project starts with a conversation.
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                    Tell us about your business, goals and the digital
                    experience you want to create.
                  </p>
                 <Link
  href="/contact"
  title="Start a website or digital marketing project with Sharp Rays"
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