
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Film,
  Image as ImageIcon,
  Layers,
  Megaphone,
  MonitorPlay,
  Package,
  Play,
  ShoppingBag,
  Sparkles,
  Video,
  WandSparkles,
  Workflow,
  Camera,
  Palette,
  Building2,
  Utensils,
  BriefcaseBusiness,
  GraduationCap,
  Smartphone,
  Target,
  Lightbulb,
  Globe,
  MessageCircle,
  Store,
  Hotel,
  Factory,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   SHARP RAYS — BHAYANDAR AI VIDEO & CREATIVE
   Route: /locations/bhayandar/ai-video-creative
========================================================= */

const CONTACT_URL = "/contact?service=ai-video-and-creative";
const PRICING_URL = "/pricing";
const SERVICE_URL = "/services/ai-video-and-creative";

const COLORS = {
  navy: "#122847",
  deepNavy: "#0B2A52",
  gold: "#C6A77A",
  ivory: "#FCFAF7",
  cream: "#F6F1E9",
  text: "#26364A",
  muted: "#718096",
  border: "#E9E2D8",
};

/* =========================================================
   REVEAL
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
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
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
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[#C6A77A]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9B805B]">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-[#C6A77A]" />
      </div>

      <h2 className="font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#718096] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   BUTTONS
========================================================= */

function PrimaryButton({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(18,40,71,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2A52]"
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function SecondaryButton({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCD3C6] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#122847] transition-all hover:border-[#C6A77A] hover:bg-white"
    >
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}
/* =========================================================
   CREATIVE CAPABILITIES
========================================================= */

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  accent: string;
  tint: string;
}[] = [
  {
    icon: WandSparkles,
    title: "AI Video Creation",
    description:
      "Create visually engaging video concepts using AI-assisted production techniques and creative direction.",
    tag: "AI-POWERED PRODUCTION",
    accent: "#8E79AE",
    tint: "#F2EFF8",
  },
  {
    icon: ShoppingBag,
    title: "AI Product Videos",
    description:
      "Present products through motion-led visuals, product storytelling and campaign-ready creative concepts.",
    tag: "PRODUCT STORYTELLING",
    accent: "#AD895D",
    tint: "#F8F1E8",
  },
  {
    icon: Megaphone,
    title: "Advertising Creatives",
    description:
      "Develop video-led advertising concepts around your campaign message, audience and platform.",
    tag: "CAMPAIGN CONTENT",
    accent: "#AD728C",
    tint: "#F7EFF1",
  },
  {
    icon: Film,
    title: "Brand Storytelling",
    description:
      "Turn brand ideas, product benefits and business messages into memorable visual narratives.",
    tag: "BRAND COMMUNICATION",
    accent: "#668AA5",
    tint: "#EEF3F8",
  },
  {
    icon: Smartphone,
    title: "Social Media Videos",
    description:
      "Create vertical and platform-conscious video content for social media communication.",
    tag: "SOCIAL-FIRST CONTENT",
    accent: "#609286",
    tint: "#EDF5F1",
  },
  {
    icon: Palette,
    title: "Creative Visual Concepts",
    description:
      "Explore visual directions, AI-assisted scenes, compositions and creative treatments for your brand.",
    tag: "VISUAL EXPLORATION",
    accent: "#A38561",
    tint: "#F6F1E9",
  },
];

/* =========================================================
   VIDEO FORMATS
========================================================= */

const formats: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Video,
    title: "Short-form videos",
    description:
      "Vertical video concepts for Reels and other short-form platforms.",
  },
  {
    icon: Package,
    title: "Product showcases",
    description:
      "Visual product presentations that communicate features and value.",
  },
  {
    icon: MonitorPlay,
    title: "Explainer videos",
    description:
      "Simplify a service, product or business idea through visual storytelling.",
  },
  {
    icon: Clapperboard,
    title: "Promotional videos",
    description:
      "Creative promotional content for launches, campaigns and announcements.",
  },
  {
    icon: ImageIcon,
    title: "Motion-led visuals",
    description:
      "Animated visual concepts and AI-assisted creative compositions.",
  },
  {
    icon: Camera,
    title: "Brand-led content",
    description:
      "Visual content that supports a consistent brand identity and message.",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property showcases, project highlights and promotional video concepts.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Product showcases, promotional content and campaign visuals.",
  },
  {
    icon: Utensils,
    title: "Food & Hospitality",
    description:
      "Menu highlights, ambience-led storytelling and promotional content.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Service explainers, brand introductions and business communication.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Course explainers, educational promotions and institutional content.",
  },
  {
    icon: Globe,
    title: "Startups & Brands",
    description:
      "Product launches, brand stories and creative campaign concepts.",
  },
];

/* =========================================================
   BHAYANDAR BUSINESS USE CASES
========================================================= */

const localUseCases: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Store,
    title: "Bhayandar West Retail & Shops",
    description:
      "Showcase products, new arrivals, seasonal collections, store updates and offers through planned short-form videos and visual content.",
  },
  {
    icon: Hotel,
    title: "Uttan Road Resorts & Hospitality",
    description:
      "Present property features, ambience, dining experiences and hospitality offerings through visual storytelling and promotional concepts.",
  },
  {
    icon: Factory,
    title: "Navghar Industrial Businesses",
    description:
      "Explain products, manufacturing capabilities, applications and business offerings through clear product videos and visual explainers.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Businesses",
    description:
      "Communicate project highlights, amenities, property features and launch announcements using approved project information and creative visuals.",
  },
];

/* =========================================================
   PRODUCTION PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Understand the brief",
    description:
      "We understand your business, audience, objective, platform and the message your video needs to communicate.",
  },
  {
    number: "02",
    title: "Creative direction",
    description:
      "We develop the concept, visual direction, storytelling approach and content requirements.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "We use suitable AI-assisted tools and creative production techniques to develop the video.",
  },
  {
    number: "04",
    title: "Review & refinement",
    description:
      "The creative is reviewed against the approved brief and refined according to the agreed scope.",
  },
  {
    number: "05",
    title: "Final delivery",
    description:
      "Approved deliverables are prepared in the agreed formats for your intended platforms.",
  },
];

/* =========================================================
   PRICING — MATCHES AI VIDEO & CREATIVE PACKAGES
========================================================= */

const pricingPlans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "For businesses exploring AI-assisted video content.",
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
    price: "₹24,999",
    description:
      "For brands planning a broader creative content requirement.",
    features: [
      "Creative direction and planning",
      "Multiple creative concepts",
      "AI-assisted video production",
      "Campaign-oriented visual approach",
      "Review and refinement",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "₹39,999",
    description: "For larger or more involved creative requirements.",
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
      "Do you provide AI video and creative services in Bhayandar?",
    answer:
      "Sharp Rays offers AI video and creative services for businesses targeting Bhayandar and nearby areas. The scope can include AI-assisted video production, promotional videos, video editing, motion graphics and creative visual content.",
  },
  {
    question: "What types of videos can Sharp Rays create?",
    answer:
      "Depending on the brief, projects can include product videos, promotional videos, social media videos, explainers, brand storytelling and AI-assisted visual concepts.",
  },
  {
    question: "Can AI videos be used for Instagram and social media?",
    answer:
      "Yes. Video concepts can be planned for platforms such as Instagram and other social channels. The format, aspect ratio and creative approach depend on the intended platform and campaign.",
  },
  {
    question: "Can you create AI product videos?",
    answer:
      "Yes. AI-assisted product video concepts can help present products through visual storytelling. The available approach depends on the product, supplied assets and production brief.",
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
    question: "Can you create videos for resorts on Uttan Road?",
    answer:
      "Video concepts can help hospitality businesses present property features, ambience, dining experiences and promotional messages. The final creative depends on the supplied material, approved brief and production requirements.",
  },
  {
    question: "Can you create promotional videos for Navghar businesses?",
    answer:
      "Yes. Depending on the brief, promotional content can explain products, services, business capabilities, launches and other relevant information for Navghar businesses.",
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
   FAQ STRUCTURED DATA
========================================================= */

function BhayandarAIVideoCreativeStructuredData() {
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

export default function BhayandarAIVideoCreativePageClient() {
  return (
    <>
      <BhayandarAIVideoCreativeStructuredData />

      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="relative isolate overflow-hidden bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-[#B9C8D9]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDB8] bg-white/70 px-4 py-2">
              <Sparkles size={14} className="text-[#A7834E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#826C4D]">
                AI Video & Creative · Bhayandar
              </span>
            </div>

            <h1 className="max-w-2xl font-[var(--font-new-york)] text-[40px] leading-[1.1] tracking-[-0.045em] text-[#122847] sm:text-5xl lg:text-[60px]">
              Turn Your Ideas Into{" "}
              <span className="text-[#A7834E]">
                Visual Stories.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#68778A] sm:text-base">
              AI-assisted video creation and creative production for
              Bhayandar businesses. Develop product videos, promotional
              content and brand-led visuals that communicate your ideas
              with clarity.
            </p>

            <PrimaryButton
  href={CONTACT_URL}
  title="Contact Sharp Rays for AI video and creative services in Bhayandar"
>
  Discuss Your Project
</PrimaryButton>

<SecondaryButton
  href={PRICING_URL}
  title="Explore Sharp Rays AI video and creative pricing packages"
>
  Explore Pricing
</SecondaryButton>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[#788596]">
              {[
                "AI-assisted production",
                "Creative direction",
                "Platform-conscious formats",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#A7834E]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#C6A77A]/25 via-white/30 to-[#AFC2D5]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[22px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(18,40,71,0.12)]">
                <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[17px] bg-gradient-to-br from-[#102847] via-[#183B62] to-[#42617D] p-7 text-white sm:min-h-[440px] sm:p-9">
                  <div className="absolute -right-16 top-12 h-64 w-64 rounded-full border border-white/10" />
                  <div className="absolute -right-4 top-24 h-44 w-44 rounded-full border border-white/10" />
                  <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[#C6A77A]/20 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      Creative Studio
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                      AI + Creativity
                    </span>
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Clapperboard size={36} strokeWidth={1.2} />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#DCC39F]">
                      Ideas into motion
                    </p>

                    <h2 className="mt-4 max-w-sm font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                      Make Your Brand
                      <span className="block text-[#D8BD94]">
                        Visual.
                      </span>
                    </h2>

                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77A] text-[#122847]">
                        <Play size={17} fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">
                          Creative possibilities
                        </p>
                        <p className="mt-1 text-[10px] text-white/55">
                          Concept · Production · Delivery
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="text-[10px] tracking-[0.18em] text-white/55">
                      SHARP RAYS
                    </span>
                    <span className="text-[10px] text-white/55">
                      We Create the “Oh, Wow.”!
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-[#E9E0D4] bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EFE5] text-[#A7834E]">
                    <WandSparkles size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#122847]">
                      Creative meets technology
                    </p>
                    <p className="mt-1 text-[10px] text-[#8A96A5]">
                      Built around your brief
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          02. DIRECT ANSWER
      ================================================= */}

      <section className="relative bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
              A Creative-First Approach
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847] sm:text-4xl">
              What does AI video creation mean?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm leading-8 text-[#68778A] sm:text-base">
              AI video creation combines creative planning, visual
              storytelling and AI-assisted production techniques to
              develop video content for brands and businesses. The process
              begins with the message, audience and purpose—not simply
              generating visuals.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#68778A] sm:text-base">
              Sharp Rays helps businesses targeting Bhayandar explore
              video concepts for products, services, campaigns and brand
              communication. The right production approach depends on
              the creative brief, supplied assets and intended use.
            </p>

            <Link
              href={SERVICE_URL}
              title="Explore Sharp Rays AI Video and Creative services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition-colors hover:text-[#A7834E]"
            >
              Explore our AI Video service
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          03. CREATIVE CHALLENGES
      ================================================= */}

      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="The Creative Challenge"
              title={
                <>
                  Your business has a story.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Make it visual.
                  </span>
                </>
              }
              description="A strong creative asset does more than look attractive. It helps people understand your offering, remember your message and see what makes your business relevant."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Products are hard to explain",
                description:
                  "A product may need more than a static image to communicate its features, use and value.",
              },
              {
                title: "Promotional content feels repetitive",
                description:
                  "Brands need fresh creative directions for launches, announcements and campaigns.",
              },
              {
                title: "Complex services need clarity",
                description:
                  "Visual storytelling can help simplify services, processes and business ideas.",
              },
              {
                title: "Brand communication lacks consistency",
                description:
                  "Creative assets should follow a recognisable visual direction across platforms.",
              },
              {
                title: "Social content needs platform context",
                description:
                  "A video should be planned around the audience, placement and intended format.",
              },
              {
                title: "Ideas need a production direction",
                description:
                  "A clear brief and concept help turn an initial idea into a usable creative deliverable.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                  <span className="text-xs font-semibold tracking-widest text-[#B79A72]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          04. CREATIVE SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="What We Create"
              title={
                <>
                  Creative production for{" "}
                  <span className="font-serif italic text-[#A88659]">
                    modern brands.
                  </span>
                </>
              }
              description="From AI-assisted video concepts to campaign visuals, each creative deliverable should have a clear purpose and fit the way your business communicates."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article
                    className="group h-full rounded-[20px] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,40,71,0.07)]"
                    style={{
                      borderColor: `${item.accent}45`,
                      backgroundColor: item.tint,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white"
                        style={{ color: item.accent }}
                      >
                        <Icon size={22} strokeWidth={1.6} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-[#A99A83] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p
                      className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: item.accent }}
                    >
                      {item.tag}
                    </p>

                    <h3 className="mt-3 font-[var(--font-new-york)] text-2xl text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          05. VIDEO FORMATS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Content Formats"
              title={
                <>
                  One brand.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Different ways to tell its story.
                  </span>
                </>
              }
              description="The best format depends on where your audience will see the content and what you want them to understand, remember or do."
            />

            <div className="mt-8">
              <PrimaryButton
  href={CONTACT_URL}
  title="Discuss AI video content planning with Sharp Rays"
>
  Plan My Video Content
</PrimaryButton>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="flex h-full gap-4 rounded-2xl border border-[#EAE3D9] bg-white p-5 transition-all duration-300 hover:border-[#C6A77A]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EFE5] text-[#A7834E]">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#788596]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          06. BHAYANDAR BUSINESS USE CASES
      ================================================= */}

      <section className="bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Local Business Relevance"
              title={
                <>
                  Creative content for{" "}
                  <span className="font-serif italic text-[#A88659]">
                    Bhayandar businesses.
                  </span>
                </>
              }
              description="Different businesses need different kinds of visual communication. The creative direction should reflect the product, service, audience and message."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {localUseCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="flex h-full gap-5 rounded-[20px] border border-[#E7DED1] bg-white p-6 sm:p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5EFE5] text-[#A7834E]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-7 text-[#718096]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          07. INDUSTRIES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Who Can Use It"
              title={
                <>
                  Creative video ideas across{" "}
                  <span className="font-serif italic text-[#A88659]">
                    industries.
                  </span>
                </>
              }
              description="AI-assisted video and creative production can support different kinds of business communication, depending on the brief and available material."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="flex h-full gap-5 rounded-[18px] border border-[#EAE3D9] bg-[#FCFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#A7834E]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#788596]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          08. CREATIVE APPROACH
      ================================================= */}

      <section className="relative overflow-hidden bg-[#122847] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A77A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B98E]">
                Beyond the Technology
              </span>
            </div>

            <h2 className="max-w-xl font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              AI is the tool.
              <span className="block text-[#D6B98E]">
                The idea is what matters.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/65">
              A visually impressive video is not automatically a useful
              marketing asset. The creative needs a clear purpose, a relevant
              message and a visual direction that fits the brand.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-white/65">
              We approach AI-assisted production as a creative process—not
              simply a way to generate visuals. Every project starts with
              understanding what the business wants to communicate.
            </p>

            <div className="mt-9">
              <PrimaryButton
  href={CONTACT_URL}
  title="Start a creative production discussion with Sharp Rays"
>
  Start a Creative Discussion
</PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Purpose before production",
                  description:
                    "Define the communication objective before choosing the visual format.",
                },
                {
                  icon: Lightbulb,
                  title: "Concept-led thinking",
                  description:
                    "Build a creative idea around the brand, audience and message.",
                },
                {
                  icon: Layers,
                  title: "Consistent visual direction",
                  description:
                    "Keep the creative aligned with the intended brand presentation.",
                },
                {
                  icon: Workflow,
                  title: "A considered workflow",
                  description:
                    "Plan, produce, review and refine against the approved brief.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                  >
                    <Icon size={23} className="text-[#D6B98E]" />
                    <h3 className="mt-5 text-base font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-white/55">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          09. AI VIDEO VS VIDEO EDITING
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding the Difference"
              title={
                <>
                  AI video creation{" "}
                  <span className="font-serif italic text-[#A88659]">
                    vs
                  </span>{" "}
                  professional video editing.
                </>
              }
              description="Both can contribute to a brand's content strategy, but they solve different creative requirements."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[22px] border border-[#E5D8C4] bg-[#F8F4ED] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A7834E]">
                  <WandSparkles size={23} />
                </div>

                <h3 className="mt-6 font-[var(--font-new-york)] text-2xl text-[#122847]">
                  AI Video Creation
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718096]">
                  Focuses on developing visual content through AI-assisted
                  generation, creative concepts and production techniques.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "AI-assisted visual generation",
                    "Creative scene concepts",
                    "Product and promotional visuals",
                    "Concept-led video production",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#536477]"
                    >
                      <Check size={16} className="mt-0.5 text-[#A7834E]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="h-full rounded-[22px] border border-[#E5EAF0] bg-[#F5F7FA] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#42617D]">
                  <Film size={23} />
                </div>

                <h3 className="mt-6 font-[var(--font-new-york)] text-2xl text-[#122847]">
                  Professional Video Editing
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#718096]">
                  Focuses on refining existing footage through editing,
                  sequencing, transitions, sound and visual finishing.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Editing supplied footage",
                    "Video sequencing and pacing",
                    "Transitions and visual refinement",
                    "Finishing and export preparation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#536477]"
                    >
                      <Check size={16} className="mt-0.5 text-[#42617D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================
          10. PRODUCTION PROCESS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Our Production Workflow"
              title={
                <>
                  From the first idea{" "}
                  <span className="font-serif italic text-[#A88659]">
                    to final delivery.
                  </span>
                </>
              }
              description="A structured production process helps keep the creative aligned with your brief and intended use."
              centered
            />
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-[#DED3C3] md:block" />

            <div className="space-y-4">
              {process.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.05}>
                  <article className="relative grid gap-5 rounded-[18px] border border-[#EAE3D9] bg-white p-6 sm:grid-cols-[75px_1fr] sm:items-center sm:p-7">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5EFE5] font-[var(--font-new-york)] text-lg text-[#A7834E]">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-2xl text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-[#788596]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          11. PRICING
      ================================================= */}

      <section
        className="bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-ai-video-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
                AI VIDEO & CREATIVE PRICING
              </p>

              <h2
                id="bhayandar-ai-video-pricing-heading"
                className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[44px]"
              >
                Creative Packages for{" "}
                <span className="text-[#A88659]">
                  Different Requirements.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#718096]">
                Whether you are exploring your first AI-assisted video or
                planning a broader creative requirement, choose a starting
                package based on your project scope.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.07}>
                <article
                  className={`relative flex h-full flex-col rounded-[20px] border bg-white p-7 sm:p-8 ${
                    plan.featured
                      ? "border-[#B79A72] shadow-[0_20px_55px_-35px_rgba(18,40,71,.35)]"
                      : "border-[#E8DED0]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#F3EBDD] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#A38561]">
                      Popular Choice
                    </span>
                  )}

                  <span className="font-[var(--font-new-york)] text-[26px] text-[#D5C5AE]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-[26px] text-[#122847]">
                    {plan.name}
                  </h3>

                  <p className="mt-4 font-[var(--font-new-york)] text-[38px] leading-none tracking-[-0.04em] text-[#122847]">
                    {plan.price}
                  </p>

                  <p className="mt-5 min-h-[48px] text-xs leading-6 text-[#718092]">
                    {plan.description}
                  </p>

                  <div className="mt-6 border-t border-[#EEE7DE] pt-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A38561]">
                      Package Includes
                    </p>

                    <ul className="mt-5 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs leading-6 text-[#647487]"
                        >
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-[#A38561]"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      href={CONTACT_URL}
                      title={`Discuss the ${plan.name} AI Video and Creative package`}
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-xs font-medium transition ${
                        plan.featured
                          ? "bg-[#122847] text-white hover:bg-[#203B5D]"
                          : "border border-[#DDCDB9] bg-[#FCFAF7] text-[#122847] hover:border-[#B79A72]"
                      }`}
                    >
                      Discuss {plan.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-8 max-w-[850px] text-center text-[10px] leading-[1.9] text-[#87929D]">
              Prices are starting references. Final pricing depends on the
              creative scope, deliverables, complexity, production
              requirements and approved brief.
            </p>

            <div className="mt-5 flex justify-center">
              <Link
                href={PRICING_URL}
                title="Explore all Sharp Rays pricing packages"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A38561] transition-colors hover:text-[#122847]"
              >
                Explore Complete Pricing
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          12. FAQ
      ================================================= */}

      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-ai-video-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-ai-video-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[44px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about AI video production, product videos,
              creative content and promotional video services around Bhayandar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 2) * 0.04}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
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

      {/* =================================================
          13. FINAL CTA
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[1220px]">
          <div className="relative overflow-hidden rounded-[22px] bg-[#122847] px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-20 -bottom-40 h-[340px] w-[340px] rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A77A]">
                Bring Your Creative Idea to Life
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[45px]">
                Have an Idea Worth{" "}
                <span className="text-[#C6A77A]">
                  Bringing to Life?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-sm leading-8 text-white/65">
                Tell us about your brand, the story you want to communicate
                and the kind of video or creative content you have in mind.
                Let's shape the right production approach.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
             <PrimaryButton
  href={CONTACT_URL}
  title="Contact Sharp Rays to discuss your AI video project"
>
  Discuss Your Project
</PrimaryButton>

                <Link
                  href="/locations/bhayandar"
                  title="Explore digital marketing services in Bhayandar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-[#C6A77A] hover:text-[#C6A77A]"
                >
                  Explore Bhayandar
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          14. INTERNAL LINKS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#E8DED1] pt-7 text-[10px] text-[#788594]">
          <Link
            href={SERVICE_URL}
            title="Explore Sharp Rays AI Video and Creative services"
            className="transition-colors hover:text-[#A38561]"
          >
            AI Video & Creative Services
          </Link>

          <Link
            href="/locations/bhayandar"
            title="Digital marketing services in Bhayandar"
            className="transition-colors hover:text-[#A38561]"
          >
            Bhayandar
          </Link>

          <Link
            href="/locations"
            title="Explore all Sharp Rays locations"
            className="transition-colors hover:text-[#A38561]"
          >
            All Locations
          </Link>

          <Link
            href="/pricing"
            title="Explore Sharp Rays pricing"
            className="transition-colors hover:text-[#A38561]"
          >
            Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
