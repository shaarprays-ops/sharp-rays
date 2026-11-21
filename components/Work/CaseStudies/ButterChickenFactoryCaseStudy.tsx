"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Camera,
  ChefHat,
  Heart,
  Layers3,
  Megaphone,
  MessageCircle,
  Palette,
  Play,
  ShoppingBag,
  Sparkles,
  Target,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projectImage = "/services/social/butter_chicken_factory_social.webp";

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
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease,
      }}
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
      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#A38561] sm:text-[10px]">
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

function ProjectVisual({
  className = "",
  priority = false,
  alt = "Butter Chicken Factory social media project visual",
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br from-[#F0E6DA] via-[#F8F3EC] to-[#D9C6B1] ${className}`}
    >
      {!failed ? (
        <Image
          src={projectImage}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 1023px) 100vw, 50vw"
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#A38561]/70">
          <Utensils size={42} strokeWidth={1} />
          <span className="text-[9px] uppercase tracking-[0.2em]">
            Project Visual
          </span>
        </div>
      )}
    </div>
  );
}

const contentFocus: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Food Photography",
    description:
      "Put the food at the centre of the creative direction with product-focused visuals that highlight presentation and detail.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Menu-led Content",
    description:
      "Present dishes and menu highlights through clear, visually engaging social media communication.",
    icon: Utensils,
  },
  {
    number: "03",
    title: "Reels and Short-form Video",
    description:
      "Use short-form video to showcase food, preparation details and the overall dining experience.",
    icon: Play,
  },
  {
    number: "04",
    title: "Promotional Creatives",
    description:
      "Communicate relevant offers, featured dishes and brand messages through campaign-oriented content.",
    icon: Megaphone,
  },
];

const deliverables = [
  "Food-focused social creatives",
  "Menu and product content",
  "Reels and short-form videos",
  "Social media captions",
  "Promotional content",
  "Content planning",
];

const process: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the restaurant's menu, food presentation, brand personality and customer-facing communication.",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Organise food, menu, promotional and brand content into a clear social media direction.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop visual creatives, short-form videos and supporting copy for social media.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Bring the planned content together through consistent brand-led social communication.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "What was the Butter Chicken Factory project about?",
    answer:
      "The project focuses on social media marketing for a restaurant brand, with an emphasis on food presentation, menu communication and promotional content.",
  },
  {
    question: "What type of content is covered?",
    answer:
      "The case study covers food-focused creatives, menu-led content, reels, short-form videos, captions and promotional communication.",
  },
  {
    question: "Why is food photography important for restaurant marketing?",
    answer:
      "Food photography helps communicate the visual appeal of dishes and gives audiences a clearer impression of the restaurant's menu and presentation.",
  },
  {
    question: "Does this case study include campaign results?",
    answer:
      "This page focuses on the creative direction and project work. Numerical campaign or engagement results should only be added when verified project data is available.",
  },
];

export default function ButterChickenFactoryCaseStudy() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
    
{/* 01 — HERO */}
<section
  className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
  aria-labelledby="butter-chicken-hero-heading"
>
  {/* Soft background details */}
  <div className="pointer-events-none absolute -right-32 -top-28 h-[440px] w-[440px] rounded-full border border-[#D8C5AA]/30" />
  <div className="pointer-events-none absolute -right-16 top-10 h-[300px] w-[300px] rounded-full bg-[#E8D9C5]/25 blur-[90px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-[#E8E3DA]/40 blur-[100px]" />

  <div className="relative mx-auto max-w-[1260px]">

    {/* Breadcrumb */}
    <div className="mb-12 flex flex-wrap items-center gap-2 text-[11px] text-[#82909C]">
      <Link href="/" className="transition hover:text-[#0B2A52]">
        Home
      </Link>
      <span>/</span>
      <Link href="/work" className="transition hover:text-[#0B2A52]">
        Work
      </Link>
      <span>/</span>
      <span className="text-[#0B2A52]">
        Butter Chicken Factory
      </span>
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

      {/* LEFT CONTENT */}
      <Reveal>
        <div>
          <Eyebrow>
            Selected Client Project · Food & Hospitality
          </Eyebrow>

          <h1
            id="butter-chicken-hero-heading"
            className="mt-7 max-w-[720px] font-[var(--font-new-york)] text-[40px] font-normal leading-[1.08] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]"
          >
            Making food the{" "}
            <span className="text-[#B79A72]">
              highlight of every scroll.
            </span>
          </h1>

          <p className="mt-7 max-w-[590px] text-[14px] leading-[2] text-[#64798B] sm:text-[15px]">
            Social media content for Butter Chicken Factory,
            centred on food presentation, menu communication
            and creative brand storytelling across social platforms.
          </p>

          <p className="mt-5 max-w-[550px] text-[12px] leading-[1.95] text-[#82909C] sm:text-[13px]">
            From food-focused visuals to reels and promotional
            creatives, the content direction brings together
            different ways to present the restaurant's menu
            and communicate its brand.
          </p>

          {/* Key points */}
          <div className="mt-8 space-y-4">
            {[
              "Food photography and product-focused visuals",
              "Menu highlights and promotional creatives",
              "Reels and short-form video content",
              "Consistent restaurant brand communication",
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
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173D66]"
            >
              Discuss Your Project
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

      <Link
  href="#project-overview"
  title="Explore the Butter Chicken Factory project overview"
  className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#B79A72]"
>
  Explore the Project
  <ArrowDown size={15} className="text-[#B79A72]" />
</Link>
          </div>
        </div>
      </Reveal>

      {/* RIGHT CREATIVE PANEL — NO IMAGE */}
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
                  Creative Direction
                </span>
                <ChefHat
                  size={23}
                  strokeWidth={1.4}
                  className="text-[#B79A72]"
                />
              </div>

              {/* Main typography */}
              <div className="py-12 sm:py-16">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#9A8A77]">
                  Butter Chicken Factory
                </p>

                <h2 className="mt-5 font-[var(--font-new-york)] text-[46px] leading-[1.02] tracking-[-0.04em] text-[#0B2A52] sm:text-[60px]">
                  Made to
                  <br />
                  <span className="text-[#B79A72]">
                    Make You Look.
                  </span>
                </h2>

                <p className="mt-6 max-w-[320px] text-[12px] leading-[1.9] text-[#718092]">
                  A food-first content direction that brings
                  menu, visuals and restaurant storytelling together.
                </p>
              </div>

              {/* Content categories */}
              <div className="grid grid-cols-2 gap-3 border-t border-[#EAE3D9] pt-6">

                <div className="rounded-xl bg-[#F8F4EE] p-4">
                  <Camera
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Food Visuals
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Photography & Creatives
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8F4EE] p-4">
                  <Utensils
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Menu Content
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Dish Highlights
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8F4EE] p-4">
                  <Play
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Short Videos
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Reels & Storytelling
                  </p>
                </div>

                <div className="rounded-xl bg-[#F8F4EE] p-4">
                  <Megaphone
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />
                  <p className="mt-4 text-[11px] font-medium text-[#0B2A52]">
                    Promotions
                  </p>
                  <p className="mt-1 text-[9px] text-[#8A929A]">
                    Brand Communication
                  </p>
                </div>

              </div>

              {/* Bottom label */}
              <div className="mt-6 flex items-center justify-between border-t border-[#EAE3D9] pt-6">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                  Social Media Marketing
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
            Butter Chicken Factory · Social Media
          </p>
        </div>
      </Reveal>
    </div>

    {/* PROJECT DETAILS */}
    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E8DFD3] pt-8 sm:grid-cols-4">
      {[
        ["Client", "Butter Chicken Factory"],
        ["Industry", "Food & Hospitality"],
        ["Project Type", "Social Media"],
        ["Primary Focus", "Food Content"],
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
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="overview-heading"
      >
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <Eyebrow>The Project</Eyebrow>
            <Heading id="overview-heading">
              Bringing food, menu and brand communication together.
            </Heading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[13px] leading-[2] text-[#6D8091] sm:text-[14px]">
              <p>
                For a restaurant, social media is an opportunity to introduce
                its food, communicate menu offerings and give people a feel
                for the brand before they visit or place an order.
              </p>

              <p>
                The Butter Chicken Factory project focuses on presenting
                food through purposeful social content, with attention to
                the visual appeal of dishes and the way the restaurant
                communicates with its audience.
              </p>

              <p>
                The creative direction brings together food-focused visuals,
                menu communication, short-form video and promotional
                messaging as parts of the social media presence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — PROJECT CHALLENGE */}
      <section
        className="bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="challenge-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The Challenge</Eyebrow>
            <Heading id="challenge-heading">
              Turn everyday menu moments into{" "}
              <span className="text-[#B79A72]">
                engaging brand content.
              </span>
            </Heading>

            <p className="mt-6 text-[13px] leading-[2] text-[#6D8091]">
              Restaurant content needs to do more than display a dish.
              It should make the food visually appealing while helping
              audiences understand the menu, recognise the brand and
              connect with its communication.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[18px] border border-[#E5DDD2] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F0E8] text-[#B79A72]">
                  <ChefHat size={19} strokeWidth={1.4} />
                </span>

                <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                  Core Creative Consideration
                </span>
              </div>

              <h3 className="mt-7 font-[var(--font-new-york)] text-[26px] leading-[1.25]">
                Make the food appealing. Make the brand recognisable.
              </h3>

              <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                The content direction needs to balance dish presentation,
                menu information and promotional messaging while keeping
                the restaurant's social presence visually connected.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — CONTENT STRATEGY */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="strategy-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[780px]">
            <Eyebrow>Content Direction</Eyebrow>

            <Heading id="strategy-heading">
              A content approach built around{" "}
              <span className="text-[#B79A72]">
                the dining experience.
              </span>
            </Heading>

            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#708092]">
              Different content formats can work together to present
              restaurant offerings, highlight food and communicate
              the brand in a consistent way.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-[#E5DDD2] bg-[#E5DDD2] sm:grid-cols-2 lg:grid-cols-4">
            {contentFocus.map((item, index) => {
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

                    <h3 className="mt-9 font-[var(--font-new-york)] text-[21px] leading-[1.25]">
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

      {/* 05 — DELIVERABLES */}
      <section
        className="bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
        aria-labelledby="deliverables-heading"
      >
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Project Deliverables</Eyebrow>

            <Heading id="deliverables-heading">
              The creative elements behind the social presence.
            </Heading>

            <p className="mt-5 text-[13px] leading-[1.95] text-[#708092]">
              A combination of food-focused visuals and social media
              communication formats.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#E7DED3] bg-white px-5 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5EFE7] text-[#A38561]">
                    <Check size={14} />
                  </span>

                  <span className="text-[12px] text-[#536A7D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* 07 — CREATIVE PROCESS */}
      <section
        className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[700px]">
            <Eyebrow>How We Approach the Work</Eyebrow>

            <Heading id="approach-heading">
              From understanding the menu to{" "}
              <span className="text-[#C6A77A]">
                creating the content.
              </span>
            </Heading>

            <p className="mt-5 text-[13px] leading-[1.95] text-white/60">
              A structured creative workflow helps maintain consistency
              across restaurant content and brand communication.
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

      {/* 08 — PROJECT TAKEAWAY */}
      <section
        className="bg-[#F4F6F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="takeaway-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-1/2 w-1/2 border-l border-t border-[#B79A72]" />

              
<div className="relative">
  <div className="absolute -left-4 -top-4 h-1/2 w-1/2 border-l border-t border-[#B79A72]" />

  <div className="relative aspect-[5/4] overflow-hidden rounded-[16px] border border-[#E8DED2] bg-[#F8F4EE]">
    <Image
      src="/services/social/chicken_social.webp"
      alt="Butter Chicken Factory restaurant social media creative"
      fill
      sizes="(max-width: 1023px) 100vw, 45vw"
      className="object-cover object-center"
    />
  </div>
</div>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Project Takeaway</Eyebrow>

            <Heading id="takeaway-heading">
              Food creates the first impression. Good communication
              makes it memorable.
            </Heading>

            <div className="mt-6 space-y-5 text-[13px] leading-[2] text-[#6D8091]">
              <p>
                Restaurant social media needs to balance visual appeal
                with useful information. Food imagery can attract attention,
                while menu and promotional content help communicate what
                the brand offers.
              </p>

              <p>
                The Butter Chicken Factory project brings these elements
                together through food-focused creatives, short-form video
                and brand-led social communication.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#B79A72] pl-5">
              <p className="font-[var(--font-new-york)] text-[20px] leading-[1.5] text-[#0B2A52]">
                Make every dish worth noticing. Make every post feel
                like the brand.
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
              A few things to know about the Butter Chicken Factory
              social media project.
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
            className="group inline-flex items-center gap-3 text-[12px] font-medium text-[#0B2A52] transition hover:text-[#A18461]"
          >
            Explore All Projects
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
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
                    Let’s create something that makes people say{" "}
                    <span className="text-[#B79A72]">Oh, Wow.</span>
                  </h2>

                  <p className="mt-6 max-w-[620px] text-[13px] leading-[1.95] text-[#62778A]">
                    Looking for thoughtful social media content for your
                    restaurant? Let’s find a creative direction that
                    brings your food and brand together.
                  </p>
                </div>

                <div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11">
                  <Heart size={25} className="text-[#B79A72]" />

                  <h3 className="mt-5 font-[var(--font-new-york)] text-[25px] leading-[1.3]">
                    Your next project starts with a conversation.
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                    Tell us about your restaurant, menu and the social
                    presence you want to create.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#0B2A52] px-5 text-[12px] text-white transition hover:bg-[#173D66]"
                  >
                    Start a Project
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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