
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
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
} from "lucide-react";
/* -------------------------------------------------------
   SHARP RAYS — VIRAR AI VIDEO & CREATIVE
   Route: /locations/virar/ai-video-and-creative
------------------------------------------------------- */

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

const CONTACT_URL = "/contact?service=ai-video-and-creative";
const PRICING_URL = "/pricing";
const SERVICE_URL = "/services/ai-video-and-creative";

const virAR_SERVICES = [
  {
    name: "Website Development",
    description: "Websites designed to present your brand and convert visitors.",
    href: "/locations/virar/website-development",
  },
  {
    name: "SEO",
    description: "Improve your visibility when potential customers search online.",
    href: "/locations/virar/seo",
  },
  {
    name: "Social Media Marketing",
    description: "Build a consistent social presence with purposeful content.",
    href: "/locations/virar/social-media-marketing",
  },
  {
    name: "Performance Marketing",
    description: "Plan and manage targeted advertising campaigns.",
    href: "/locations/virar/performance-marketing",
  },
];

const capabilities = [
  {
    icon: WandSparkles,
    title: "AI Video Creation",
    description:
      "Create visually engaging video concepts using AI-assisted production techniques and creative direction.",
    tag: "AI-POWERED PRODUCTION",
  },
  {
    icon: ShoppingBag,
    title: "AI Product Videos",
    description:
      "Present products through motion-led visuals, product storytelling and campaign-ready creative concepts.",
    tag: "PRODUCT STORYTELLING",
  },
  {
    icon: Megaphone,
    title: "Advertising Creatives",
    description:
      "Develop video-led advertising concepts designed around your campaign message, audience and platform.",
    tag: "CAMPAIGN CONTENT",
  },
  {
    icon: Film,
    title: "Brand Storytelling",
    description:
      "Turn brand ideas, product benefits and business messages into memorable visual narratives.",
    tag: "BRAND COMMUNICATION",
  },
  {
    icon: Smartphone,
    title: "Social Media Videos",
    description:
      "Create vertical and platform-conscious video content for social media communication.",
    tag: "SOCIAL-FIRST CONTENT",
  },
  {
    icon: Palette,
    title: "Creative Visual Concepts",
    description:
      "Explore visual directions, AI-assisted scenes, compositions and creative treatments for your brand.",
    tag: "VISUAL EXPLORATION",
  },
];

const formats = [
  {
    icon: Video,
    title: "Short-form videos",
    description: "Vertical video concepts for Reels and other short-form platforms.",
  },
  {
    icon: Package,
    title: "Product showcases",
    description: "Visual product presentations that communicate features and value.",
  },
  {
    icon: MonitorPlay,
    title: "Explainer videos",
    description: "Simplify a service, product or business idea through visual storytelling.",
  },
  {
    icon: Clapperboard,
    title: "Promotional videos",
    description: "Creative promotional content for launches, campaigns and announcements.",
  },
  {
    icon: ImageIcon,
    title: "Motion-led visuals",
    description: "Animated visual concepts and AI-assisted creative compositions.",
  },
  {
    icon: Camera,
    title: "Brand-led content",
    description: "Visual content that supports a consistent brand identity and message.",
  },
];

const industries = [
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

const faqs = [
  {
    question: "What are AI video and creative services?",
    answer:
      "AI video and creative services use AI-assisted production tools, visual concepts and creative direction to develop video content for brands, products, campaigns and digital platforms.",
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
    question: "Is AI video creation the same as professional video editing?",
    answer:
      "No. AI video creation focuses on generating or developing visual content with AI-assisted techniques. Professional video editing focuses on editing and refining existing footage. Some projects may use both approaches.",
  },
  {
    question: "Do you provide AI video services in Virar?",
    answer:
      "Sharp Rays works with businesses targeting Virar and surrounding markets. Project discussions and deliverables can be coordinated according to the agreed requirements.",
  },
  {
    question: "How much do AI video and creative services cost?",
    answer:
      "Pricing depends on the creative scope, deliverables, complexity and production requirements. The packages shown on this page are starting references; the final scope is confirmed after discussing your brief.",
  },
];

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
    href: CONTACT_URL,
    label: "Discuss Starter",
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For brands planning a broader creative content requirement.",
    features: [
      "Creative direction and planning",
      "Multiple creative concepts",
      "AI-assisted video production",
      "Campaign-oriented visual approach",
      "Review and refinement",
    ],
    href: CONTACT_URL,
    label: "Discuss Growth",
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
    href: CONTACT_URL,
    label: "Discuss Scale",
  },
];

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
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

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
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

function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const title =
    href === CONTACT_URL
      ? "Discuss AI video and creative services with Sharp Rays"
      : href === PRICING_URL
        ? "Explore Sharp Rays pricing and service packages"
        : "Explore Sharp Rays services";

  return (
    <Link
      href={href}
      title={title}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(18,40,71,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2A52] hover:shadow-[0_12px_30px_rgba(18,40,71,0.2)]"
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      title={
        href === PRICING_URL
          ? "Explore AI video and creative service pricing"
          : "Explore related Sharp Rays services"
      }
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCD3C6] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#122847] transition-all duration-300 hover:border-[#C6A77A] hover:bg-white"
    >
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function VirarAIVideoAndCreativePageClient() {


  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#26364A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F7F3EC]">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-[#B9C8D9]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-28">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDB8] bg-white/70 px-4 py-2">
              <Sparkles size={14} className="text-[#A7834E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#826C4D]">
                AI Video & Creative · Virar
              </span>
            </div>

            <h1 className="max-w-2xl font-[var(--font-new-york)] text-[42px] leading-[1.08] tracking-[-0.045em] text-[#122847] sm:text-5xl lg:text-[62px]">
              Turn your ideas into
              <span className="relative mx-2 inline-block text-[#A7834E]">
                visual stories.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#68778A]">
              AI-assisted video creation and creative production for businesses
              in Virar. Develop product videos, promotional content and
              brand-led visuals that communicate your ideas with clarity.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href={CONTACT_URL}>
                Discuss Your Project
              </PrimaryButton>
              <SecondaryButton href={PRICING_URL}>
                Explore Pricing
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[#788596]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A7834E]" />
                AI-assisted production
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A7834E]" />
                Creative direction
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A7834E]" />
                Platform-conscious formats
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto max-w-[540px]">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#C6A77A]/25 via-white/30 to-[#AFC2D5]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(18,40,71,0.12)]">
                <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[23px] bg-gradient-to-br from-[#102847] via-[#183B62] to-[#42617D] p-7 text-white sm:min-h-[460px] sm:p-9">
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
                      Make your brand
                      <span className="block text-[#D8BD94]">
                        impossible to ignore.
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

              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[#E9E0D4] bg-white px-5 py-4 shadow-xl sm:block">
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

      {/* DIRECT ANSWER */}
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
              A creative-first approach
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847] sm:text-4xl">
              What does AI video creation actually mean?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-[#68778A]">
              AI video creation combines creative planning, visual storytelling
              and AI-assisted production techniques to develop video content
              for brands and businesses. Instead of treating every video as
              just another social media post, the process begins with the
              message, audience and purpose.
            </p>
            <p className="mt-5 text-base leading-8 text-[#68778A]">
              Sharp Rays helps businesses targeting Virar explore video
              concepts for products, services, campaigns and brand communication.
              The right production approach depends on the creative brief,
              supplied assets and final use of the content.
            </p>

            <Link
              href={SERVICE_URL}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition-colors hover:text-[#A7834E]"
            >
              Explore our AI Video service
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#FCFAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="What we create"
              title="Creative possibilities for modern brands."
              description="From product-focused visuals to campaign storytelling, explore creative formats that can support your business communication."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group h-full rounded-[25px] border border-[#EAE3D9] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4BE9D] hover:shadow-[0_20px_50px_rgba(18,40,71,0.07)]">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5EFE5] text-[#A7834E] transition-colors group-hover:bg-[#122847] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.6} />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-[#B7A58C] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A7834E]">
                      {item.tag}
                    </p>
                    <h3 className="mt-3 font-[var(--font-new-york)] text-2xl text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#788596]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton href={CONTACT_URL}>
              Tell Us Your Creative Idea
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* CONTENT FORMATS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Content formats"
              title="One brand. Different ways to tell its story."
              description="The best format depends on where your audience will see the content and what you want them to understand, remember or do."
            />

            <div className="mt-8">
              <PrimaryButton href={CONTACT_URL}>
                Plan My Video Content
              </PrimaryButton>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl border border-[#EAE3D9] bg-[#FCFAF7] p-5 transition-all duration-300 hover:border-[#C6A77A]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#A7834E] shadow-sm">
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
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CREATIVE APPROACH */}
      <section className="relative overflow-hidden bg-[#102847] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1320px] gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A77A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B98E]">
                Beyond the technology
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
              <PrimaryButton href={CONTACT_URL}>
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
                  <div
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
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCAL INDUSTRIES */}
      <section className="bg-[#F7F3EC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Who can use it"
              title="Creative video ideas across industries."
              description="Different businesses need different kinds of visual communication. Here are some ways AI-assisted video and creative production can support business storytelling."
              centered
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="flex h-full gap-5 rounded-[22px] border border-[#E7DED1] bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5EFE5] text-[#A7834E]">
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
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIRAR LOCAL CONTEXT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Local business relevance"
              title="Creative content for businesses targeting Virar."
              description="Businesses in Virar serve different audiences, from local shoppers and homeowners to customers discovering brands online. Their video content should reflect the products, services and messages that matter to those audiences."
            />

            <p className="mt-6 text-sm leading-7 text-[#788596]">
              Whether you are promoting a property, introducing a new product,
              explaining a service or planning a social campaign, the creative
              direction should be shaped around your actual business objective.
            </p>

            <div className="mt-8">
              <PrimaryButton href={CONTACT_URL}>
                Discuss Your Business Requirements
              </PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] bg-[#F5EFE5] p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#C6A77A]/20 blur-3xl" />

              <div className="relative">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9B805B]">
                  Local understanding
                </span>

                <h3 className="mt-5 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847]">
                  Your business deserves a story worth watching.
                </h3>

                <div className="mt-8 space-y-4">
                  {[
                    "Virar East and West business audiences",
                    "Retail and neighbourhood brands",
                    "Real estate and property promotion",
                    "Local services and growing businesses",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#A7834E]">
                        <Check size={12} />
                      </span>
                      <span className="text-sm text-[#536477]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTION PROCESS */}
      <section className="bg-[#FCFAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our workflow"
              title="From the first idea to final delivery."
              description="A structured production process helps keep the creative aligned with your brief and intended use."
              centered
            />
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[23px] top-5 hidden h-[calc(100%-40px)] w-px bg-[#DED3C3] md:block" />

            <div className="space-y-5">
              {process.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.06}>
                  <div className="relative grid gap-5 rounded-[22px] border border-[#EAE3D9] bg-white p-6 sm:grid-cols-[75px_1fr] sm:items-center sm:p-8">
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI VIDEO VS VIDEO EDITING */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding the difference"
              title="AI video creation vs professional video editing."
              description="Both can contribute to a brand's content strategy, but they solve different creative requirements."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[25px] border border-[#E5D8C4] bg-[#F8F4ED] p-8 sm:p-9">
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
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-[25px] border border-[#E5EAF0] bg-[#F5F7FA] p-8 sm:p-9">
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
              </div>
            </Reveal>
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-[#8A96A5]">
            Some projects may combine AI-assisted creation and conventional
            editing, depending on the brief and agreed production scope.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F7F3EC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Investment"
              title="Creative production that fits your next move."
              description="Explore the starting package references below. Final pricing and deliverables are confirmed after reviewing the creative brief and project requirements."
              centered
            />
          </Reveal>

          <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.07}>
                <div
                  className={`relative flex h-full flex-col rounded-[26px] border p-7 sm:p-8 ${
                    plan.featured
                      ? "border-[#122847] bg-[#122847] text-white shadow-[0_25px_60px_rgba(18,40,71,0.16)]"
                      : "border-[#E6DED2] bg-white text-[#122847]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 right-7 rounded-full bg-[#C6A77A] px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#122847]">
                      Popular choice
                    </span>
                  )}

                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                      plan.featured ? "text-[#D6B98E]" : "text-[#A7834E]"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-4xl tracking-tight">
                    {plan.price}
                  </h3>

                  <p
                    className={`mt-3 min-h-[48px] text-sm leading-6 ${
                      plan.featured ? "text-white/60" : "text-[#788596]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`my-7 h-px ${
                      plan.featured ? "bg-white/15" : "bg-[#EAE3D9]"
                    }`}
                  />

                  <p
                    className={`mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      plan.featured ? "text-white/70" : "text-[#526477]"
                    }`}
                  >
                    Package highlights
                  </p>

                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          plan.featured ? "text-white/75" : "text-[#627286]"
                        }`}
                      >
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            plan.featured
                              ? "text-[#D6B98E]"
                              : "text-[#A7834E]"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                 <Link
  href={plan.href}
  title={`Discuss the ${plan.name} AI video and creative package with Sharp Rays`}
  className={`mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
    plan.featured
      ? "bg-[#C6A77A] text-[#122847] hover:bg-[#D7BD96]"
      : "bg-[#122847] text-white hover:bg-[#0B2A52]"
  }`}
>
                    {plan.label}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-[#8993A0]">
            Package references are indicative. Exact deliverables, revisions,
            production requirements and timelines are agreed before work begins.
          </p>

          <div className="mt-5 text-center">
         <Link
  href={PRICING_URL}
  title="Explore all Sharp Rays pricing and service packages"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] hover:text-[#A7834E]"
>
              View all Sharp Rays pricing
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="More ways to grow"
              title="Connect your creative content with a bigger strategy."
              description="Video content can work alongside your website, search visibility, social media and advertising. Explore other Sharp Rays services for Virar businesses."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {virAR_SERVICES.map((service, index) => (
              <Reveal key={service.name} delay={index * 0.05}>
                <Link
                  href={service.href}
                  title={`Explore ${service.name} in Virar`}
                  className="group flex h-full flex-col rounded-[22px] border border-[#EAE3D9] bg-[#FCFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A77A] hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-2 rounded-full bg-[#C6A77A]" />
                    <ArrowUpRight
                      size={17}
                      className="text-[#9AA5B1] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#A7834E]"
                    />
                  </div>
                  <h3 className="mt-6 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-6 text-[#788596]">
                    {service.description}
                  </p>
                  <span className="mt-6 text-xs font-semibold text-[#A7834E]">
                    Explore service
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/locations/virar"
              title="Explore all digital marketing services in Virar"
              className="inline-flex items-center gap-2 rounded-full border border-[#E4D9C9] px-6 py-3 text-sm font-medium text-[#122847] transition-colors hover:border-[#C6A77A] hover:bg-[#FCFAF7]"
            >
              Explore Virar Services
              <ArrowDown size={16} />
            </Link>
          </div>
        </div>
      </section>

{/* FAQ SECTION */}
<section
  id="virar-ai-video-faq"
  className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* FAQ HEADER */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A78354]">
          Questions before you start
        </p>

        <h2 className="mt-5 font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.035em] text-[#0B2A52] sm:text-5xl">
          Frequently Asked{" "}
          <span className="text-[#B79A72]">Questions.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#66758A] sm:text-base">
          Clear answers about AI video creation, creative production,
          product videos, pricing and visual content for businesses in Virar.
        </p>
      </div>
    </Reveal>

    {/* FAQ DIVIDER */}
    <div className="mt-14 border-t border-[#E4DED4] sm:mt-16" />

    {/* FAQ GRID */}
    <div className="grid gap-x-12 sm:grid-cols-2">
      {faqs.map((faq, i) => (
        <Reveal key={faq.question} delay={i * 0.025}>
          <article className="h-full border-b border-[#E4DED4] py-7 sm:py-8">
            <div className="flex items-start gap-4">

              {/* NUMBER */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5D5C0] font-[var(--font-new-york)] text-sm text-[#A78354]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* QUESTION & ANSWER */}
              <div className="min-w-0 pt-0.5">
                <h3 className="font-[var(--font-new-york)] text-lg leading-snug text-[#0B2A52] sm:text-xl">
                  {faq.question}
                </h3>

                <p className="mt-3 text-[12px] leading-7 text-[#66758A] sm:text-[13px]">
                  {faq.answer}
                </p>
              </div>

            </div>
          </article>
        </Reveal>
      ))}
    </div>

  </div>
</section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#102847] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-48 -right-20 h-[400px] w-[400px] rounded-full bg-[#6884A2]/20 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-[#D6B98E]">
            <Sparkles size={25} />
          </div>

          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6B98E]">
            Your next creative project starts here
          </p>

          <h2 className="mt-5 font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Have an idea?
            <span className="block text-[#D6B98E]">
              Let’s bring it to life.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
            Tell us about your brand, product or campaign. Let’s explore how
            AI-assisted video and creative production can help communicate your
            message.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <PrimaryButton href={CONTACT_URL}>
              Start Your Project
            </PrimaryButton>
          <Link
  href="/locations/virar"
  title="Explore digital marketing services for businesses in Virar"
  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-[#D6B98E] hover:bg-white/10"
>
              Explore Virar Services
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <p className="mt-9 text-[10px] tracking-[0.18em] text-white/35">
            SHARP RAYS · WE CREATE THE “OH, WOW.”!
          </p>
        </Reveal>
      </section>
    </main>
  );
}
