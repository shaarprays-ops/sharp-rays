"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CakeSlice,
  Camera,
  Heart,
  Layers3,
  Megaphone,
  MessageCircle,
  Palette,
  Play,
  ShoppingBag,
  Target,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const projectImage = "/services/social/cake_social.webp";

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
  alt = "Brownie Point cake and dessert social media creative",
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br from-[#F5EDE5] via-[#F8F4EF] to-[#E7D8CD] ${className}`}
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
          <CakeSlice size={42} strokeWidth={1} />
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
    title: "Product-led Content",
    description:
      "Give individual cakes and desserts a clear visual focus so each product can be presented with its own appeal.",
    icon: CakeSlice,
  },
  {
    number: "02",
    title: "Social-first Creatives",
    description:
      "Shape the presentation of products and brand messages for social feeds and platform-native viewing.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Reels and Short-form Video",
    description:
      "Use short-form content as a format for showing products, details and moments in a more dynamic way.",
    icon: Play,
  },
  {
    number: "04",
    title: "Campaign Communication",
    description:
      "Create space for campaign-led messages while keeping them connected to the overall brand presentation.",
    icon: Megaphone,
  },
];

const deliverables = [
  "Product content",
  "Social media creatives",
  "Reels",
  "Captions and copy",
  "Campaign content",
  "Publishing support",
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
      "Review the brand, its products and the kind of information customers need when exploring a cake and dessert offering.",
    icon: Target,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Organise product, brand and campaign communication into a practical content direction.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Develop social creatives, product-led content, reels and supporting captions.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Publish",
    description:
      "Prepare and publish content with attention to consistency across the social presence.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "What was the Brownie Point project about?",
    answer:
      "The project focused on social media content for a cake and dessert brand, with an emphasis on product presentation, visual consistency and brand communication.",
  },
  {
    question: "What type of social media work was included?",
    answer:
      "The listed work included product content, social creatives, reels, captions, campaign content and publishing.",
  },
  {
    question: "How was the content direction approached?",
    answer:
      "The content direction centred on making individual products visually distinctive while keeping the overall social feed connected to one recognisable brand identity.",
  },
  {
    question: "Does this page report campaign or engagement results?",
    answer:
      "This case study describes the work and creative direction. It does not publish numerical performance claims or engagement results that have not been verified.",
  },
];

export default function BrowniePointCaseStudy() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      {/* 01 — HERO */}
      <section
        className="relative bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
        aria-labelledby="brownie-hero-heading"
      >
        <div className="pointer-events-none absolute -right-32 -top-28 h-[440px] w-[440px] rounded-full border border-[#D8C5AA]/30" />
        <div className="pointer-events-none absolute -right-16 -top-12 h-[300px] w-[300px] rounded-full bg-[#E8D9C5]/25 blur-[90px]" />

        <div className="relative mx-auto max-w-[1260px]">
          <div className="mb-10 flex flex-wrap items-center gap-2 text-[11px] text-[#82909C]">
           <Link
  href="/"
  title="Visit Sharp Rays homepage"
  className="transition hover:text-[#0B2A52]"
>
  Home
</Link>
            <span>/</span>
            <Link
  href="/work"
  title="Explore Sharp Rays projects and case studies"
  className="transition hover:text-[#0B2A52]"
>
  Work
</Link>
            <span>/</span>
            <span className="text-[#0B2A52]">Brownie Point</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Selected Client Project · Food & Dessert</Eyebrow>

              <h1
                id="brownie-hero-heading"
                className="mt-6 max-w-[690px] font-[var(--font-new-york)] text-[39px] font-normal leading-[1.1] tracking-[-0.045em] sm:text-[48px] lg:text-[58px]"
              >
                Giving every sweet detail a{" "}
                <span className="text-[#B79A72]">
                  place to stand out.
                </span>
              </h1>

              <p className="mt-6 max-w-[560px] text-[13px] leading-[1.95] text-[#64798B] sm:text-[14px]">
                Social media content for Brownie Point, focused on product
                presentation, a consistent visual identity and clear
                communication across the brand’s social presence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
              <Link
  href="/contact"
  title="Contact Sharp Rays to discuss your project"
  className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B2A52] px-6 text-[12px] text-white transition hover:bg-[#173D66]"
>
  Discuss Your Project
  <ArrowUpRight
    size={16}
    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</Link>

               <Link
  href="#project-overview"
  title="Explore the Brownie Point case study project overview"
  className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] transition hover:border-[#B79A72]"
>
  Explore the Project
  <ArrowDown size={15} className="text-[#B79A72]" />
</Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#E8DFD3] pt-6">
                {[
                  "Product Content",
                  "Social Creatives",
                  "Brand Consistency",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[10px] text-[#927B60]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="group relative mx-auto w-full max-w-[610px] pb-7">
                <div className="absolute -right-3 -top-3 h-1/2 w-1/2 border-r border-t border-[#C6AD8D] sm:-right-5 sm:-top-5" />

                <ProjectVisual
                  priority
                  alt="Brownie Point product-led social media visual"
                  className="aspect-[5/5] rounded-[18px] sm:aspect-[6/5] lg:aspect-[5/5]"
                />

                <div className="absolute inset-x-4 bottom-0 rounded-xl border border-[#E7DACA] bg-white/95 p-5 shadow-[0_20px_50px_-30px_rgba(11,42,82,0.28)] backdrop-blur-sm sm:inset-x-8">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                    The Creative Direction
                  </span>
                  <p className="mt-2 font-[var(--font-new-york)] text-[21px] leading-[1.35]">
                    Product-first storytelling.{" "}
                    <span className="text-[#B79A72]">
                      One recognisable feed.
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E8DFD3] pt-8 sm:grid-cols-4">
            {[
              ["Client", "Brownie Point"],
              ["Industry", "Cakes & Desserts"],
              ["Project Type", "Social Media"],
              ["Primary Focus", "Product Content"],
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

      {/* 02 — OVERVIEW */}
      <section
        id="project-overview"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="overview-heading"
      >
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <Eyebrow>The Project</Eyebrow>
            <Heading id="overview-heading">
              Making the product the centre of the social experience.
            </Heading>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[13px] leading-[2] text-[#6D8091] sm:text-[14px]">
              <p>
                For a cake and dessert brand, the product is an important
                part of the story. The way each item is presented can help
                people notice its details, understand the offering and
                remember the brand behind it.
              </p>
              <p>
                The Brownie Point project focused on creating product-led
                social content while maintaining a consistent visual
                direction across the feed.
              </p>
              <p>
                The work brought together creative design, reels, captions
                and campaign content as parts of a more organised social
                media presence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — CHALLENGE */}
      <section
        className="bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="challenge-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The Challenge</Eyebrow>
            <Heading id="challenge-heading">
              Make each product distinctive without losing the{" "}
              <span className="text-[#B79A72]">brand connection.</span>
            </Heading>
            <p className="mt-6 text-[13px] leading-[2] text-[#6D8091]">
              Different cakes and desserts need their own visual attention.
              At the same time, the overall feed should feel cohesive rather
              than like a collection of unrelated product posts.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[18px] border border-[#E5DDD2] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F0E8] text-[#B79A72]">
                  <ShoppingBag size={19} strokeWidth={1.4} />
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                  Core Creative Consideration
                </span>
              </div>

              <h3 className="mt-7 font-[var(--font-new-york)] text-[26px] leading-[1.25]">
                Individual product appeal. Shared visual language.
              </h3>

              <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                The content needed to give products room to stand out while
                keeping design choices, messaging and presentation connected
                to one recognisable brand presence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — CONTENT DIRECTION */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="direction-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[780px]">
            <Eyebrow>Content Direction</Eyebrow>
            <Heading id="direction-heading">
              A content mix built around{" "}
              <span className="text-[#B79A72]">
                the product and the brand.
              </span>
            </Heading>
            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#708092]">
              The creative direction brought together different formats to
              support product visibility and consistent brand communication.
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
              The work behind a more consistent social presence.
            </Heading>
            <p className="mt-5 text-[13px] leading-[1.95] text-[#708092]">
              The project covered the content and publishing activities
              listed below.
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

    

      {/* 07 — APPROACH */}
      <section
        className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="approach-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="max-w-[700px]">
            <Eyebrow>How We Approach the Work</Eyebrow>
            <Heading id="approach-heading">
              From product understanding to{" "}
              <span className="text-[#C6A77A]">
                consistent publishing.
              </span>
            </Heading>
            <p className="mt-5 text-[13px] leading-[1.95] text-white/60">
              A practical creative workflow helps keep content connected to
              the brand and its products.
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
              <ProjectVisual
                alt="Brownie Point product content project visual"
                className="aspect-[5/4] rounded-[16px]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Project Takeaway</Eyebrow>
            <Heading id="takeaway-heading">
              Let the products stand out. Keep the brand connected.
            </Heading>

            <div className="mt-6 space-y-5 text-[13px] leading-[2] text-[#6D8091]">
              <p>
                The Brownie Point project centred on a simple creative
                consideration: individual products should feel distinctive,
                while the overall social presence should still feel like one
                brand.
              </p>
              <p>
                By bringing product content, social creatives, reels,
                captions and campaign communication into the same content
                direction, the work supported a more consistent
                product-first presentation.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#B79A72] pl-5">
              <p className="font-[var(--font-new-york)] text-[20px] leading-[1.5] text-[#0B2A52]">
                A recognisable social presence is built one considered
                product story at a time.
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
              A few things to know about the Brownie Point social media
              project.
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
  title="Explore all Sharp Rays portfolio projects and case studies"
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
                    products or business? Let’s find a creative direction
                    that feels right for your brand.
                  </p>
                </div>

                <div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11">
                  <Heart size={25} className="text-[#B79A72]" />
                  <h3 className="mt-5 font-[var(--font-new-york)] text-[25px] leading-[1.3]">
                    Your next project starts with a conversation.
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                    Tell us about your brand, products and the social
                    presence you want to build.
                  </p>

                 <Link
  href="/contact"
  title="Start a new project with Sharp Rays"
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