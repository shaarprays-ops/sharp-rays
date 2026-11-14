
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Clapperboard,
  Film,
  Video,
  Image as ImageIcon,
  Layers3,
  Megaphone,
  Palette,
  Play,
  WandSparkles,
  Camera,
  MonitorPlay,
  ShoppingBag,
  Building2,
  Utensils,
  BriefcaseBusiness,
  
  Lightbulb,
  Workflow,
  Target,
  Eye,
  MessageSquare,
  CirclePlay,
} from "lucide-react";

/* =========================================================
   CONSTANTS
========================================================= */

const PRICING_URL = "/pricing";
const CONTACT_URL = "/contact?service=ai-video-and-creative";
const SERVICE_URL = "/services/ai-video-and-creative";

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({
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
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`max-w-[780px] ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A88659]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-[1.15] tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[46px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[13px] leading-[1.95] text-[#718092] sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   SERVICE CONTENT
========================================================= */

const creativeServices = [
  {
    number: "01",
    icon: Video,
    title: "AI Video Production",
    description:
      "Develop engaging video concepts using AI-assisted production techniques, creative direction and visual storytelling.",
    examples: [
      "AI-generated video scenes",
      "Brand storytelling",
      "Promotional video concepts",
    ],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "AI Product Videos",
    description:
      "Present products through creative visual concepts that communicate their features, details and positioning.",
    examples: [
      "Product-focused visuals",
      "Product storytelling",
      "Promotional concepts",
    ],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Promotional Videos",
    description:
      "Create promotional video content for launches, campaigns, services and business announcements.",
    examples: [
      "Brand promotions",
      "Campaign creatives",
      "Service explainers",
    ],
  },
  {
    number: "04",
    icon: Film,
    title: "Video Editing",
    description:
      "Refine existing footage through editing, pacing, transitions and visual finishing based on the project brief.",
    examples: [
      "Footage editing",
      "Visual sequencing",
      "Final video refinement",
    ],
  },
  {
    number: "05",
    icon: Layers3,
    title: "Motion Graphics",
    description:
      "Use motion-led visual elements to make information, brand messages and promotional content easier to understand.",
    examples: [
      "Animated text",
      "Visual transitions",
      "Motion-led elements",
    ],
  },
  {
    number: "06",
    icon: Palette,
    title: "Creative Visual Content",
    description:
      "Develop visual assets and creative directions that support brand communication across digital platforms.",
    examples: [
      "Creative campaign concepts",
      "Social media visuals",
      "Brand-led compositions",
    ],
  },
  {
    number: "07",
    icon: Camera,
    title: "Brand Storytelling",
    description:
      "Translate brand ideas, products and business messages into visual narratives with a consistent creative direction.",
    examples: [
      "Brand narratives",
      "Visual storyboards",
      "Creative concepts",
    ],
  },
  {
    number: "08",
    icon: MonitorPlay,
    title: "Social Media Videos",
    description:
      "Plan video content around the format, audience and communication goals of the intended social platform.",
    examples: [
      "Reels concepts",
      "Short-form videos",
      "Platform-conscious formats",
    ],
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    icon: Building2,
    title: "Real Estate & Property",
    description:
      "Present property features, project highlights, amenities and promotional messages through visual storytelling.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Develop product-focused creative concepts that help communicate product features and brand identity.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Hospitality",
    description:
      "Showcase dining experiences, ambience, services and hospitality offerings through promotional visuals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Explain services, communicate expertise and introduce business offerings through concise visual content.",
  },
  {
    icon: Sparkles,
    title: "Beauty & Lifestyle",
    description:
      "Develop creative visuals for products, launches, brand campaigns and lifestyle communication.",
  },
  {
    icon: Lightbulb,
    title: "Startups & Growing Brands",
    description:
      "Translate new ideas, products and brand messages into visual content for digital communication.",
  },
];

/* =========================================================
   CREATIVE PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand the Brief",
    description:
      "We understand your brand, audience, objective, references and the message the creative needs to communicate.",
  },
  {
    number: "02",
    title: "Develop the Concept",
    description:
      "We establish the creative direction, visual references, storytelling approach and production requirements.",
  },
  {
    number: "03",
    title: "Create the Visuals",
    description:
      "We develop the approved concept using suitable AI-assisted production and creative techniques.",
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "We review the creative against the agreed brief and make refinements within the approved project scope.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "The completed creative is delivered in the agreed format and according to the project requirements.",
  },
];

/* =========================================================
   PRICING PLANS
========================================================= */

const pricingPlans = [
  {
    name: "Starter",
    label: "Essential Creative",
    price: "₹14,999",
    description:
      "For businesses exploring AI-assisted video content.",
    features: [
      "AI-assisted creative direction",
      "Video concept development",
      "Creative planning",
      "Production based on approved scope",
      "Final delivery in agreed format",
    ],
  },
  {
    name: "Growth",
    label: "Campaign Creative",
    price: "₹24,999",
    description:
      "For brands planning a broader creative content requirement.",
    featured: true,
    features: [
      "Creative direction and planning",
      "Multiple creative concepts",
      "AI-assisted video production",
      "Campaign-oriented visual approach",
      "Review and refinement",
    ],
  },
  {
    name: "Scale",
    label: "Advanced Creative",
    price: "₹39,999",
    description:
      "For larger or more involved creative requirements.",
    features: [
      "Extended creative planning",
      "Advanced visual direction",
      "AI-assisted production",
      "Multiple deliverable planning",
      "Review and refinement",
    ],
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What are AI video and creative services?",
    answer:
      "AI video and creative services use AI-assisted production tools, visual concepts and creative direction to develop video content for brands, products, campaigns and digital platforms.",
  },
  {
    question:
      "Do you provide AI video and creative services in Mira Road?",
    answer:
      "Sharp Rays offers AI video and creative services for businesses targeting Mira Road and nearby markets. Project scope can include AI-assisted video production, promotional videos, video editing, motion graphics and creative visual content.",
  },
  {
    question: "What types of videos can Sharp Rays create?",
    answer:
      "Depending on the brief, projects can include product videos, promotional videos, social media videos, explainers, brand storytelling and AI-assisted visual concepts.",
  },
  {
    question: "Can AI videos be used for Instagram and social media?",
    answer:
      "Yes. Video concepts can be planned for Instagram and other social platforms. The format, aspect ratio and creative approach depend on the intended platform and campaign.",
  },
  {
    question: "Can you create AI product videos?",
    answer:
      "AI-assisted product video concepts can help present products through visual storytelling. The available approach depends on the product, supplied assets and production brief.",
  },
  {
    question: "Do I need to provide product images or videos?",
    answer:
      "It depends on the project. Existing product photographs, brand assets, logos, references and other supplied material can help guide the creative direction. Requirements are discussed during briefing.",
  },
  {
    question:
      "Is AI video creation the same as professional video editing?",
    answer:
      "No. AI video creation focuses on generating or developing visual content with AI-assisted techniques. Professional video editing focuses on editing and refining existing footage. Some projects may use both approaches.",
  },
  {
    question: "How much do AI video and creative services cost?",
    answer:
      "Sharp Rays offers three starting packages: Starter at ₹14,999, Growth at ₹24,999 and Scale at ₹39,999. Final pricing depends on creative scope, deliverables, complexity and production requirements.",
  },
  {
    question: "How long does an AI video project take?",
    answer:
      "The timeline depends on the creative brief, video complexity, availability of source material, review stages and agreed deliverables. A project timeline can be confirmed after discussing your requirements.",
  },
  {
    question: "Can you edit existing footage as well?",
    answer:
      "Yes. Professional video editing can be included when the project requires refining existing footage. Editing requirements, formats and deliverables are discussed as part of the creative brief.",
  },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

function AIVideoAndCreativeStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
   MAIN PAGE
========================================================= */

export default function MiraRoadAIVideoAndCreativeClientPage() {
  return (
    <>
      <AIVideoAndCreativeStructuredData />

      <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">

        {/* 01 — HERO */}

        <section className="relative isolate overflow-hidden bg-[#F7F3EC] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
          <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-[#B9C8D9]/20 blur-[100px]" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDB8] bg-white/70 px-4 py-2">
                <Sparkles size={14} className="text-[#A7834E]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#826C4D]">
                  AI Video & Creative · Mira Road
                </span>
              </div>

              <h1 className="max-w-2xl font-[var(--font-new-york)] text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Turn Your Ideas Into{" "}
                <span className="font-serif italic text-[#A7834E]">
                  Visual Stories.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-[#68778A] sm:text-base">
                AI-assisted video creation and creative production for
                Mira Road businesses. Develop product videos,
                promotional content and brand-led visuals that
                communicate your ideas with clarity.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
  href={CONTACT_URL}
  title="Contact Sharp Rays About AI Video and Creative Services in Mira Road"
  aria-label="Discuss your AI video and creative project with Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#203B5D]"
>
  Discuss Your Project
  <ArrowUpRight size={17} />
</Link>

               <Link
  href={PRICING_URL}
  title="View Sharp Rays AI Video and Creative Service Pricing"
  aria-label="Explore AI video and creative service pricing"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D8CBB9] bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#B79A72]"
>
  Explore Pricing
  <ArrowRight size={16} />
</Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#718092]">
                {[
                  "AI-assisted production",
                  "Creative direction",
                  "Platform-conscious formats",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#B79A72]" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="relative mx-auto max-w-[480px]">
                <div className="absolute -inset-5 rounded-[3rem] bg-[#C6A77A]/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#E5DDD3] bg-white p-5 shadow-[0_25px_80px_rgba(18,40,71,0.09)] sm:p-7">
                  <div className="flex items-center justify-between border-b border-[#EEE8E0] pb-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                        CREATIVE PRODUCTION
                      </p>
                      <h2 className="mt-2 font-[var(--font-new-york)] text-xl text-[#122847]">
                        From idea to visual
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F0E9]">
                      <Clapperboard size={22} className="text-[#A88659]" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-[#EDE7DE] p-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D9C8B2] via-[#B9A48D] to-[#66788A]" />
                      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-white/80">
                        <Video size={17} className="text-[#122847]" />
                      </span>
                      <div className="relative z-10">
                        <p className="text-[9px] uppercase tracking-widest text-white/80">
                          VIDEO
                        </p>
                        <p className="mt-1 font-[var(--font-new-york)] text-lg text-white">
                          Storytelling
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="flex flex-col justify-between rounded-2xl bg-[#F4F0EA] p-4">
                        <ImageIcon size={19} className="text-[#A88659]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-[#A88659]">
                            CREATIVE
                          </p>
                          <p className="mt-1 font-[var(--font-new-york)] text-base text-[#122847]">
                            Visual identity
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between rounded-2xl bg-[#122847] p-4">
                        <Sparkles size={19} className="text-[#C6A77A]" />
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-white/50">
                            AI ASSISTED
                          </p>
                          <p className="mt-1 font-[var(--font-new-york)] text-base text-white">
                            New possibilities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-xl border border-[#EEE8E0] px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
                      <span className="text-[10px] text-[#718092]">
                        Creative concept preview
                      </span>
                    </div>
                    <WandSparkles size={16} className="text-[#A88659]" />
                  </div>

                  <p className="mt-4 text-[9px] leading-[1.8] text-[#9AA3AD]">
                    Illustrative creative direction. Final visuals
                    depend on the approved brief and production scope.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 02 — DIRECT ANSWER */}

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1000px]">
            <Reveal>
              <div className="rounded-[2rem] border border-[#E9E1D7] bg-[#FCFAF7] p-7 sm:p-10 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A88659]">
                  AI VIDEO & CREATIVE SERVICES IN MIRA ROAD
                </p>

                <h2 className="mt-4 font-[var(--font-new-york)] text-2xl leading-snug text-[#122847] sm:text-3xl">
                  Bring your brand message to life through visual
                  storytelling.
                </h2>

                <p className="mt-5 text-[13px] leading-[2] text-[#64758A] sm:text-sm">
                  Sharp Rays provides AI video and creative services
                  for businesses targeting Mira Road, helping brands
                  develop promotional videos, product visuals,
                  social media content, explainers and creative
                  campaign assets. We combine creative planning,
                  visual direction and AI-assisted production
                  techniques to develop content around your
                  communication goals. Every project begins with
                  an approved brief, suitable references and
                  clearly defined deliverables.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 03 — CREATIVE CHALLENGES */}

        <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="THE CREATIVE CHALLENGE"
                title={
                  <>
                    Good ideas need{" "}
                    <span className="font-serif italic text-[#A88659]">
                      the right visual language.
                    </span>
                  </>
                }
                description="Businesses often have something valuable to communicate, but turning that message into clear, engaging visual content takes planning and creative direction."
              />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "Limited creative resources",
                  "Planning and producing fresh visual content can take time and coordination.",
                ],
                [
                  "Hard-to-explain products",
                  "Some products and services need visual demonstrations to communicate their value.",
                ],
                [
                  "Inconsistent brand visuals",
                  "Different creative styles can make brand communication feel disconnected.",
                ],
                [
                  "Campaign content pressure",
                  "Product launches and promotions often need multiple creative concepts.",
                ],
                [
                  "Repetitive social content",
                  "Publishing the same style of content can make communication feel predictable.",
                ],
                [
                  "Unclear creative direction",
                  "Without a defined brief, visual production can lose focus and consistency.",
                ],
              ].map(([title, description], index) => (
                <Reveal key={title}>
                  <article className="h-full rounded-2xl border border-[#E8E1D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9] font-[var(--font-new-york)] text-sm text-[#B79A72]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl text-[#122847]">
                      {title}
                    </h3>

                    <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — SERVICES */}

        <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="WHAT WE CREATE"
                title={
                  <>
                    Creative production for{" "}
                    <span className="font-serif italic text-[#A88659]">
                      different brand needs.
                    </span>
                  </>
                }
                description="Explore the types of AI-assisted video and creative work that can be developed around your business, product and campaign requirements."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {creativeServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.number}>
                    <article className="group flex h-full flex-col rounded-2xl border border-[#E7DED2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0E9] transition group-hover:bg-[#122847]">
                          <Icon
                            size={21}
                            strokeWidth={1.5}
                            className="text-[#A88659] transition group-hover:text-[#C6A77A]"
                          />
                        </div>

                        <span className="text-[10px] tracking-[0.15em] text-[#B79A72]">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-7 font-[var(--font-new-york)] text-xl text-[#122847]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2 rounded-xl bg-[#FCFAF7] p-4">
                        {service.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-start gap-2 text-[11px] text-[#52647A]"
                          >
                            <Check
                              size={13}
                              className="mt-0.5 shrink-0 text-[#B79A72]"
                            />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 05 — CREATIVE FORMATS */}

        <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="CREATIVE FORMATS"
                title={
                  <>
                    One brand.
                    <br />
                    <span className="font-serif italic text-[#A88659]">
                      Different ways to tell its story.
                    </span>
                  </>
                }
                description="The creative format should support the message, audience and platform. We plan visual content according to the purpose of each project."
              />

              <div className="mt-8 space-y-4">
                {[
                  [
                    "Short-form videos",
                    "For social media communication and promotional storytelling.",
                  ],
                  [
                    "Product-focused videos",
                    "For presenting product features, details and use cases.",
                  ],
                  [
                    "Brand and campaign visuals",
                    "For launches, announcements and broader brand communication.",
                  ],
                  [
                    "Explainer content",
                    "For making services, processes and ideas easier to understand.",
                  ],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="flex gap-4 border-b border-[#EAE3DA] pb-4 last:border-0"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E9]">
                      <Play size={16} className="text-[#A88659]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#122847]">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs leading-[1.8] text-[#718092]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-[#E5DDD3] bg-[#FCFAF7] p-5 sm:p-8">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex aspect-[4/5] flex-col justify-between rounded-2xl bg-[#E8DFD2] p-5">
                    <Video size={22} className="text-[#A88659]" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-[#8D704C]">
                        FORMAT 01
                      </p>
                      <h3 className="mt-2 font-[var(--font-new-york)] text-xl text-[#122847]">
                        Product film
                      </h3>
                    </div>
                  </div>

                  <div className="flex aspect-[4/5] flex-col justify-between rounded-2xl bg-[#122847] p-5">
                    <Sparkles size={22} className="text-[#C6A77A]" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/50">
                        FORMAT 02
                      </p>
                      <h3 className="mt-2 font-[var(--font-new-york)] text-xl text-white">
                        Brand story
                      </h3>
                    </div>
                  </div>

                  <div className="flex aspect-[4/5] flex-col justify-between rounded-2xl bg-[#F0ECE5] p-5">
                    <Camera  size={22} className="text-[#A88659]" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-[#8D704C]">
                        FORMAT 03
                      </p>
                      <h3 className="mt-2 font-[var(--font-new-york)] text-xl text-[#122847]">
                        Social video
                      </h3>
                    </div>
                  </div>

                  <div className="flex aspect-[4/5] flex-col justify-between rounded-2xl bg-[#DCE2E7] p-5">
                    <MonitorPlay size={22} className="text-[#536A80]" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-[#536A80]">
                        FORMAT 04
                      </p>
                      <h3 className="mt-2 font-[var(--font-new-york)] text-xl text-[#122847]">
                        Explainer
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[9px] leading-[1.8] text-[#9AA3AD]">
                  Format illustrations only. Actual creative outputs
                  are planned according to the approved project brief.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 06 — INDUSTRIES */}

        <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="WHO WE WORK WITH"
                title={
                  <>
                    Visual storytelling across{" "}
                    <span className="font-serif italic text-[#A88659]">
                      different industries.
                    </span>
                  </>
                }
                description="Creative requirements vary from one business to another. The visual direction should reflect the product, audience and communication objective."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <Reveal key={industry.title}>
                    <article className="flex h-full gap-5 rounded-2xl border border-[#E5DDD3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)] sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E9]">
                        <Icon size={21} className="text-[#A88659]" />
                      </div>

                      <div>
                        <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
                          {industry.title}
                        </h3>

                        <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                          {industry.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 07 — PROCESS */}

        <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="OUR CREATIVE PROCESS"
                title={
                  <>
                    From the first idea to{" "}
                    <span className="font-serif italic text-[#A88659]">
                      the final frame.
                    </span>
                  </>
                }
                description="A clear creative process helps keep the visual direction, production requirements and final deliverables aligned."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <Reveal key={step.number}>
                  <article className="h-full rounded-2xl border border-[#E5DDD3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                    <span className="font-[var(--font-new-york)] text-3xl text-[#B79A72]">
                      {step.number}
                    </span>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — WHY SHARP RAYS */}

        <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="THE SHARP RAYS APPROACH"
                title={
                  <>
                    Creative work needs{" "}
                    <span className="font-serif italic text-[#A88659]">
                      more than a visual tool.
                    </span>
                  </>
                }
                description="AI-assisted production is one part of the process. A clear message, considered visual direction and thoughtful execution are equally important."
              />
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-[#E5DDD3] bg-white p-7 sm:p-9">
                <div className="space-y-6">
                  {[
                    [
                      "Brief-led creative direction",
                      "Start with your audience, objective and communication needs.",
                    ],
                    [
                      "Visual consistency",
                      "Keep the creative aligned with your brand identity and references.",
                    ],
                    [
                      "Purposeful production",
                      "Choose suitable AI-assisted techniques for the approved concept.",
                    ],
                    [
                      "Review before delivery",
                      "Refine the work against the agreed brief and deliverables.",
                    ],
                  ].map(([title, description], index) => (
                    <div
                      key={title}
                      className="flex gap-4 border-b border-[#E3D9CC] pb-5 last:border-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E9] font-[var(--font-new-york)] text-sm text-[#B79A72]">
                        0{index + 1}
                      </span>

                      <div>
                        <h3 className="font-[var(--font-new-york)] text-lg text-[#122847]">
                          {title}
                        </h3>

                        <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 09 — PRICING */}

        <section
          id="pricing"
          className="bg-white px-5 py-20 sm:px-8 lg:py-28"
          aria-labelledby="mira-ai-video-pricing-heading"
        >
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="AI VIDEO & CREATIVE PRICING"
                title={
                  <>
                    Creative ideas deserve{" "}
                    <span className="font-serif italic text-[#A88659]">
                      the right execution.
                    </span>
                  </>
                }
                description="Explore AI video and creative packages for product storytelling, promotional content and broader brand communication."
                centered
              />
            </Reveal>

            <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 0.08}>
                  <article
                    className={`relative flex h-full flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                      plan.featured
                        ? "border-[#122847] bg-[#122847] text-white shadow-[0_20px_55px_rgba(18,40,71,0.15)]"
                        : "border-[#E5DDD3] bg-[#FCFAF7] text-[#122847] hover:border-[#C6A77A] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#122847]">
                        Most Popular
                      </span>
                    )}

                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        plan.featured
                          ? "text-[#C6A77A]"
                          : "text-[#A88659]"
                      }`}
                    >
                      {plan.label}
                    </p>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-3 min-h-[48px] text-xs leading-[1.8] ${
                        plan.featured
                          ? "text-white/60"
                          : "text-[#718092]"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="mt-7 border-y border-current/15 py-6">
                      <p className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                        Starting from
                      </p>

                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-[var(--font-new-york)] text-4xl">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex-1">
                      <p
                        className={`text-[9px] font-semibold uppercase tracking-[0.16em] ${
                          plan.featured
                            ? "text-[#C6A77A]"
                            : "text-[#A88659]"
                        }`}
                      >
                        Package Includes
                      </p>

                      <ul className="mt-5 space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className={`flex items-start gap-3 text-xs leading-[1.7] ${
                              plan.featured
                                ? "text-white/75"
                                : "text-[#52647A]"
                            }`}
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-[#C6A77A]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={PRICING_URL}
                      title={`View Sharp Rays ${plan.name} AI Video and Creative package`}
                      className={`mt-8 flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                        plan.featured
                          ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
                          : "bg-[#122847] text-white hover:bg-[#203B5D]"
                      }`}
                    >
                      View Package Details
                      <ArrowUpRight size={14} />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mx-auto mt-8 max-w-[850px] text-center text-[10px] leading-[1.9] text-[#87929D]">
                Prices are starting references. Final pricing depends
                on creative scope, deliverables, complexity, production
                requirements and the approved brief.
              </p>

              <div className="mt-5 flex justify-center">
                <Link
  href={PRICING_URL}
  title="View Complete Sharp Rays Service Pricing"
  aria-label="Explore complete Sharp Rays service pricing"
  className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A38561] transition-colors hover:text-[#122847]"
>
  Explore Complete Pricing
  <ArrowUpRight size={14} />
</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10 — RELATED SERVICES */}

        <section className="bg-[#F2F0EA] px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <SectionHeading
                eyebrow="CONNECTED DIGITAL SERVICES"
                title={
                  <>
                    Creative content meets{" "}
                    <span className="font-serif italic text-[#A88659]">
                      digital growth.
                    </span>
                  </>
                }
                description="Explore other Sharp Rays services that can support your website, visibility and digital marketing activities."
              />
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "Website Development",
                  "/services/website-development",
                ],
                [
                  "Performance Marketing",
                  "/services/performance-marketing",
                ],
                [
                  "Social Media Marketing",
                  "/services/social-media-marketing",
                ],
                [
                  "Search Engine Optimization",
                  "/services/search-engine-optimization",
                ],
              ].map(([label, href]) => (
  <Link
    key={label}
    href={href}
    className="group flex items-center justify-between rounded-2xl border border-[#E5DDD3] bg-white p-5 text-sm text-[#122847] transition hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-md"
  >
                  <span>{label}</span>

                  <ArrowUpRight
                    size={16}
                    className="text-[#B79A72] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-7">
             <Link
  href="/locations/mira-road"
  title="Explore Digital Marketing Services in Mira Road"
  aria-label="Explore all Sharp Rays services in Mira Road"
  className="inline-flex items-center gap-2 text-xs font-semibold text-[#8D704C] hover:text-[#122847]"
>
  Explore all services for Mira Road
  <ArrowRight size={14} />
</Link>
            </div>
          </div>
        </section>

        {/* 11 — FAQ */}

        <section
          className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
          aria-labelledby="mira-ai-video-faq-heading"
        >
          <div className="mx-auto max-w-[1220px]">
            <Reveal className="mx-auto max-w-[800px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A88659]">
                QUESTIONS BEFORE YOU START
              </p>

              <h2
                id="mira-ai-video-faq-heading"
                className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[46px]"
              >
                Frequently Asked{" "}
                <span className="font-serif italic text-[#A88659]">
                  Questions.
                </span>
              </h2>

              <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
                Useful information about AI video production,
                creative formats, project requirements and pricing.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question}>
                  <article className="flex h-full gap-4 rounded-2xl border border-[#E5DDD3] bg-white p-6 sm:p-7">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-[#FCFAF7] font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#122847] sm:text-[21px]">
                        {faq.question}
                      </h3>

                      <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 12 — FINAL CTA */}

        <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

          <Reveal className="relative mx-auto max-w-3xl text-center">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A77A]">
              LET'S CREATE SOMETHING
            </p>

            <h2 className="font-[var(--font-new-york)] text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your next idea deserves{" "}
              <span className="font-serif italic text-[#C6A77A]">
                to be seen.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/60 sm:text-base">
              Tell us about your product, brand or campaign. Let's
              explore the right creative direction for your next
              video project.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
             <Link
  href={CONTACT_URL}
  title="Contact Sharp Rays About Your AI Video and Creative Project"
  aria-label="Discuss your AI video and creative project with Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
  Discuss Your Creative Project
  <ArrowUpRight size={17} />
</Link>

            <Link
  href="/locations/mira-road"
  title="Explore Sharp Rays Digital Marketing Services in Mira Road"
  aria-label="Explore Sharp Rays services for Mira Road businesses"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
>
  Explore Mira Road Services
  <ArrowRight size={16} />
</Link>
            </div>

            <p className="mt-8 text-xs text-white/35">
              Sharp Rays · AI Video & Creative · Mira Road, Maharashtra
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
}
