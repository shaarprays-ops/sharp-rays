"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {

  ArrowUpRight,

  Check,

  Clapperboard,

  Layers3,

  Play,

  Scissors,

  Sparkles,

  WandSparkles,

} from "lucide-react";

/* =========================================================

   FONT + MOTION

========================================================= */

const newYorkFont = {

  fontFamily: '"New York", "", Georgia, serif',

};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================

   TYPES

========================================================= */

type PricingCategory = "editing" | "ai";

type Plan = {

  category: PricingCategory;

  name: string;

title: string;

  description: string;

  scope: string;

  features: string[];

  bestFor: string;

  cta: string;

  icon: LucideIcon;

  popular?: boolean;

};

/* =========================================================

   VIDEO EDITING PLANS

========================================================= */

const editingPlans: Plan[] = [

  {

    category: "editing",

    name: "Edit Starter",

title: "Consistent Editing for Consistent Content.",

    description:

      "For businesses that already have footage and need reliable short-form editing every month.",

    scope: "Up to 6 Videos / Month",

    icon: Scissors,

    features: [

      "Professional Video Editing",

      "Reels & Shorts Formatting",

      "Clean Cuts & Pacing",

      "Captions & Subtitles",

      "Basic Sound Treatment",

      "Basic Colour Correction",

      "Brand Text Treatment",

      "Platform-Ready Exports",

      "2 Revision Rounds / Video",

    ],

    bestFor:

      "Startups, creators and businesses already producing their own footage.",

    cta: "Start Editing",

  },

  {

    category: "editing",

    name: "Edit Growth",

title: "More Content. Stronger Creative Treatment.",

    description:

      "For growing brands that need higher output, stronger editing and content adapted across channels.",

    scope: "Up to 12 Videos / Month",

    icon: Play,

    popular: true,

    features: [

      "Everything in Edit Starter",

      "Advanced Short-Form Editing",

      "Motion Graphics",

      "Creative Transitions",

      "Hook Optimization",

      "Content Repurposing",

      "Social Media Video Editing",

      "Basic Performance Ad Editing",

      "Multiple Aspect Ratios",

      "Priority Editing Queue",

    ],

    bestFor:

      "Growing brands publishing consistent organic and social-first video content.",

    cta: "Choose Edit Growth",

  },

  {

    category: "editing",

    name: "Edit Scale",

title: "Build a Reliable Video Content Pipeline.",

    description:

      "For brands that need a larger and more flexible monthly editing operation.",

    scope: "Up to 20 Videos / Month",

    icon: Layers3,

    features: [

      "Everything in Edit Growth",

      "Advanced Professional Editing",

      "Advanced Motion Graphics",

      "Performance Video Variations",

      "Content Repurposing System",

      "Advertising Creative Editing",

      "Multiple Platform Versions",

      "Creative Testing Variations",

      "Monthly Creative Review",

      "Faster Priority Queue",

      "Priority Support",

    ],

    bestFor:

      "Brands and marketing teams producing frequent organic and paid video content.",

    cta: "Choose Edit Scale",

  },

];

/* =========================================================

   AI VIDEO PLANS

========================================================= */

const aiPlans: Plan[] = [

  {

    category: "ai",

    name: "AI Starter",

title: "Turn an Idea Into a Finished AI Video.",

    description:

      "For brands testing AI video or creating visual concepts without traditional production.",

    scope: "Up to 3 AI Videos / Month",

    icon: Sparkles,

    features: [

      "Creative Concept Development",

      "AI Visual Generation",

      "Prompt Development",

      "Basic Scene Planning",

      "AI Video Generation",

      "Professional Editing",

      "Text & Caption Treatment",

      "Music & Sound Treatment",

      "Brand Styling",

      "Platform-Ready Export",

      "2 Revision Rounds",

    ],

    bestFor:

      "Brands testing AI video for campaigns, products, concepts or social content.",

    cta: "Start With AI Video",

  },

  {

    category: "ai",

    name: "AI Growth",

title: "Build More Concepts. Test More Creative.",

    description:

      "For brands that want AI-generated content regularly across organic and advertising requirements.",

    scope: "Up to 6 AI Videos / Month",

    icon: WandSparkles,

    popular: true,

    features: [

      "Everything in AI Starter",

      "Stronger Concept Development",

      "Multi-Scene AI Videos",

      "AI Product / Concept Videos",

      "Creative Variations",

      "Advertising Video Creative",

      "Enhanced Motion Treatment",

      "Multiple Aspect Ratios",

      "AI-Assisted Enhancement",

      "Priority Generation & Editing",

    ],

    bestFor:

      "Growing brands using AI creative regularly for campaigns, products and advertising.",

    cta: "Choose AI Growth",

  },

  {

    category: "ai",

    name: "AI Scale",

title: "Build an AI Creative Production System.",

    description:

      "For brands that need a consistent pipeline of AI-generated campaign and performance creative.",

    scope: "Up to 10 AI Videos / Month",

    icon: Clapperboard,

    features: [

      "Everything in AI Growth",

      "Advanced Concept Development",

      "Multi-Scene Generation",

      "AI Product Visuals",

      "AI Advertising Creative",

      "Multiple Creative Directions",

      "Performance Ad Variations",

      "Advanced Motion Treatment",

      "Brand-Led Visual Consistency",

      "Multiple Platform Versions",

      "Monthly Creative Planning",

      "Priority Production",

      "Priority Support",

    ],

    bestFor:

      "D2C brands, campaigns and businesses producing AI creative at a higher frequency.",

    cta: "Choose AI Scale",

  },

];

/* =========================================================

   BUTTON

========================================================= */

function PlanButton({ plan }: { plan: Plan }) {

  const isPopular = Boolean(plan.popular);

  const isAI = plan.category === "ai";

  const planHref =

    plan.name === "Edit Starter"

      ? "/contact?service=ai-video-editing&plan=edit-starter#contact-form"

      : plan.name === "Edit Growth"

      ? "/contact?service=ai-video-editing&plan=edit-growth#contact-form"

      : plan.name === "Edit Scale"

      ? "/contact?service=ai-video-editing&plan=edit-scale#contact-form"

      : plan.name === "AI Starter"

      ? "/contact?service=ai-video-editing&plan=ai-starter#contact-form"

      : plan.name === "AI Growth"

      ? "/contact?service=ai-video-editing&plan=ai-growth#contact-form"

      : "/contact?service=ai-video-editing&plan=ai-scale#contact-form";

  return (

    <Link

      href={planHref}

      title={`${plan.name} AI Video & Editing Plan`}
      style={newYorkFont}

      className={`

        group/button

        flex

        min-h-[48px]

        w-full

        items-center

        justify-center

        gap-2

        rounded-[16px]

        border

        px-5

        py-3

        text-[13px]

        font-medium

        transition-all

        duration-300

        ${

          isPopular

            ? `

              border-[#0B2A52]

              bg-[#0B2A52]

              !text-white

              shadow-[0_10px_28px_rgba(11,42,82,0.16)]

              hover:-translate-y-[2px]

              hover:bg-[#123B6A]

              hover:!text-white

            `

            : isAI

              ? `

                border-[#B79A72]/35

                bg-[#FFF9F1]

                text-[#0B2A52]

                hover:-translate-y-[2px]

                hover:border-[#B79A72]/55

                hover:bg-[#FFF4E5]

              `

              : `

                border-[#6285AD]/30

                bg-white/85

                text-[#0B2A52]

                hover:-translate-y-[2px]

                hover:border-[#6285AD]/45

                hover:bg-[#F2F7FB]

              `

        }

      `}

    >

      <span className={isPopular ? "!text-white" : ""}>

        {plan.cta}

      </span>

      <ArrowUpRight

        size={13}

        strokeWidth={1.6}

        className={`

          transition-transform

          duration-300

          group-hover/button:translate-x-0.5

          group-hover/button:-translate-y-0.5

          ${isPopular ? "text-white" : ""}

        `}

      />

    </Link>

  );

}

/* =========================================================

   PRICING CARD

========================================================= */

function PricingCard({

  plan,

  index,

  reduceMotion,

}: {

  plan: Plan;

  index: number;

  reduceMotion: boolean;

}) {

  const Icon = plan.icon;

  const isAI = plan.category === "ai";

  const isPopular = Boolean(plan.popular);

  return (

    <motion.article

      initial={{

        opacity: 0,

        y: reduceMotion ? 0 : 28,

      }}

      whileInView={{

        opacity: 1,

        y: 0,

      }}

      viewport={{

        once: true,

        amount: 0.12,

      }}

      transition={{

        duration: reduceMotion ? 0 : 0.7,

        delay: reduceMotion ? 0 : index * 0.06,

        ease,

      }}

      whileHover={

        reduceMotion

          ? undefined

          : {

              y: -5,

            }

      }

      className={`

        group

        relative

        flex

        h-full

        min-w-0

        flex-col

        overflow-hidden

        rounded-[22px]

        border

        transition-all

        duration-500

        ${

          isPopular

            ? `

              border-[#78AED3]/75

              bg-[linear-gradient(180deg,#EEF7FC_0%,#FFFFFF_31%,#FFFFFF_100%)]

              shadow-[0_22px_55px_rgba(11,42,82,0.10)]

            `

            : isAI

              ? `

                border-[#DDCDB8]

                bg-[linear-gradient(180deg,#FFF9F1_0%,#FFFFFF_31%,#FFFFFF_100%)]

                shadow-[0_12px_36px_rgba(11,42,82,0.05)]

              `

              : `

                border-[#D6E3EC]

                bg-[linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_31%,#FFFFFF_100%)]

                shadow-[0_12px_36px_rgba(11,42,82,0.05)]

              `

        }

      `}

    >

      {/* ACCENT */}

      <div

        aria-hidden="true"

        className={`

          h-[3px]

          w-full

          ${

            isPopular

              ? "bg-gradient-to-r from-[#0B2A52] via-[#72A3C7] to-[#B79A72]"

              : isAI

                ? "bg-gradient-to-r from-transparent via-[#B79A72]/80 to-transparent"

                : "bg-gradient-to-r from-transparent via-[#72A3C7]/75 to-transparent"

          }

        `}

      />

      {/* POPULAR */}

      {isPopular && (

        <div

          className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-[#0B2A52] px-2.5 py-1.5 shadow-[0_7px_18px_rgba(11,42,82,0.14)]"

        >

          <Sparkles

            size={9}

            strokeWidth={1.8}

            className="text-white"

          />

          <span

            className="text-[7px] font-bold uppercase tracking-[0.13em] text-white"

          >

            Most Popular

          </span>

        </div>

      )}

      {/* CARD BODY */}

      <div

        className="flex h-full flex-1 flex-col p-5 sm:p-6"

      >

        {/* ICON + PLAN */}

        <div className="flex items-center gap-3">

          <span

            className={`

              flex

              h-10

              w-10

              shrink-0

              items-center

              justify-center

              rounded-[12px]

              ${

                isPopular

                  ? "bg-[#0B2A52] text-white"

                  : isAI

                    ? "bg-[#FFF0DB] text-[#A97C52]"

                    : "bg-[#E7F2FA] text-[#0D5A93]"

              }

            `}

          >

            <Icon

              size={16}

              strokeWidth={1.7}

            />

          </span>

          <div>

            <p

              className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#B79A72]"

            >

              {plan.name}

            </p>

            <p

              className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.13em] text-[#8496A8]"

            >

              {isAI ? "AI Video Creation" : "Video Editing"}

            </p>

          </div>

        </div>

        {/* TITLE */}

        <h3

          style={newYorkFont}

          className="mt-5 min-h-[54px] text-[21px] font-medium leading-[1.08] tracking-[-0.03em] text-[#0B2A52] sm:text-[23px]"

        >

          {plan.title}

        </h3>

        {/* DESCRIPTION */}

        <p

          className="mt-3 min-h-[62px] text-[11px] leading-[1.65] text-[#617991] sm:text-[11.5px]"

        >

          {plan.description}

        </p>

        {/* SCOPE */}

        <div

          className={`

            mt-4

            rounded-[11px]

            border

            px-3.5

            py-3

            ${

              isPopular

                ? "border-[#C7DDEA] bg-[#F1F8FC]"

                : isAI

                  ? "border-[#E5D7C5] bg-[#FFF9F1]"

                  : "border-[#D7E4ED] bg-[#F7FAFC]"

            }

          `}

        >

          <p

            className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#8495A6]"

          >

            Monthly Output

          </p>

          <p

            className="mt-1 text-[10.5px] font-semibold leading-[1.4] text-[#274F72]"

          >

            {plan.scope}

          </p>

        </div>

        {/* FEATURES */}

        <div className="mt-5">

          <p

            className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0B2A52]"

          >

            What&apos;s Included

          </p>

          <div className="mt-3.5 space-y-[8px]">

            {plan.features.map((feature) => (

              <div

                key={feature}

                className="flex items-start gap-2.5"

              >

                <span

                  className={`

                    mt-[1px]

                    flex

                    h-[17px]

                    w-[17px]

                    shrink-0

                    items-center

                    justify-center

                    rounded-full

                    ${

                      isPopular

                        ? "bg-[#E1EFF8] text-[#0B2A52]"

                        : isAI

                          ? "bg-[#F8F0E5] text-[#9A7147]"

                          : "bg-[#EAF4FB] text-[#3573A6]"

                    }

                  `}

                >

                  <Check

                    size={9}

                    strokeWidth={2}

                  />

                </span>

                <span

                  className="text-[10.5px] leading-[1.48] text-[#5D758B] sm:text-[11px]"

                >

                  {feature}

                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="flex-1" />

        {/* BEST FOR */}

        <div

          className="mt-6 border-t border-[#DCE6EE] pt-4"

        >

          <div

            className="border-l border-[#B79A72] pl-3"

          >

            <p

              className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#B79A72]"

            >

              Best For

            </p>

            <p

              className="mt-1.5 text-[10px] leading-[1.6] text-[#667D92]"

            >

              {plan.bestFor}

            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="pt-5">

          <PlanButton plan={plan} />

        </div>

      </div>

    </motion.article>

  );

}

/* =========================================================

   CATEGORY HEADING

========================================================= */

function CategoryHeading({

  label,

  title,

  description,

  icon: Icon,

  type,

  reduceMotion,

}: {

  label: string;

  title: string;

  description: string;

  icon: LucideIcon;

  type: PricingCategory;

  reduceMotion: boolean;

}) {

  const isAI = type === "ai";

  return (

    <motion.div

      initial={{

        opacity: 0,

        x: reduceMotion ? 0 : -20,

      }}

      whileInView={{

        opacity: 1,

        x: 0,

      }}

      viewport={{

        once: true,

        amount: 0.4,

      }}

      transition={{

        duration: reduceMotion ? 0 : 0.7,

        ease,

      }}

      className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-7"

    >

      <div

        className="flex items-start gap-4"

      >

        <span

          className={`

            flex

            h-11

            w-11

            shrink-0

            items-center

            justify-center

            rounded-[13px]

            ${

              isAI

                ? "bg-[#FFF1DE] text-[#A97C52]"

                : "bg-[#E8F3FA] text-[#0D5A93]"

            }

          `}

        >

          <Icon

            size={18}

            strokeWidth={1.6}

          />

        </span>

        <div>

          <p

            className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#B79A72]"

          >

            {label}

          </p>

          <h3

            style={newYorkFont}

            className="mt-1.5 text-[25px] font-medium leading-[1.05] tracking-[-0.035em] text-[#0B2A52] sm:text-[28px]"

          >

            {title}

          </h3>

        </div>

      </div>

      <p

        className="max-w-[480px] text-[11px] leading-[1.65] text-[#647B91] sm:text-right sm:text-[11.5px]"

      >

        {description}

      </p>

    </motion.div>

  );

}

/* =========================================================

   MAIN

========================================================= */

export default function AiVideoEditingPricing() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="ai-video-editing-pricing"

      aria-labelledby="ai-video-editing-pricing-heading"

      className="relative isolate overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28 xl:py-32"

    >

      {/* =====================================================

          BACKGROUND

      ===================================================== */}

      <div

        aria-hidden="true"

        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"

      >

        <div

          className="absolute left-1/2 top-[-320px] h-[580px] w-[960px] -translate-x-1/2 rounded-full bg-[#EAF4FB]/80 blur-[175px]"

        />

        <div

          className="absolute -left-[300px] top-[38%] hidden h-[560px] w-[560px] rounded-full border border-[#9CC5E2]/15 lg:block"

        />

        <div

          className="absolute -right-[290px] bottom-[9%] hidden h-[540px] w-[540px] rounded-full border border-[#B79A72]/15 lg:block"

        />

      </div>

      {/* =====================================================

          CONTAINER

      ===================================================== */}

      <div

        className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-14"

      >

        {/* =====================================================

            MAIN HEADER

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 24,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.25,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.8,

            ease,

          }}

          className="mx-auto max-w-[950px] text-center"

        >

          <div

            className="flex items-center justify-center gap-3"

          >

            <span

              className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]"

            />

            <span

              className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#B79A72] sm:text-[10px]"

            >

              Video & Creative Pricing

            </span>

            <span

              className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]"

            />

          </div>

          <h2

            id="ai-video-editing-pricing-heading"

            style={newYorkFont}

            className="mx-auto mt-6 max-w-[930px] text-[2.1rem] font-medium leading-[1] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"

          >

            Choose How You Want to{" "}

            <span className="text-[#B79A72]">

              Create.

            </span>

          </h2>

          <p

            className="mx-auto mt-5 max-w-[760px] text-[13px] leading-[1.8] text-[#536C83] sm:text-[14px] md:text-[15px]"

          >

            Choose professional editing when you already have footage, or AI

            video creation when you want to build new visual content from an

            idea.

          </p>

        </motion.div>

        {/* =====================================================

            VIDEO EDITING

        ===================================================== */}

        <div

          className="mx-auto mt-14 max-w-[1200px] sm:mt-16 lg:mt-20"

        >

          <CategoryHeading

            label="01 · Video Editing"

            title="Already Have the Footage?"

            description="We turn existing footage into polished, platform-ready videos with better pacing, captions, motion and creative treatment."

            icon={Scissors}

            type="editing"

            reduceMotion={reduceMotion}

          />

          <div

            className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"

          >

            {editingPlans.map((plan, index) => (

              <PricingCard

                key={plan.name}

                plan={plan}

                index={index}

                reduceMotion={reduceMotion}

              />

            ))}

          </div>

        </div>

        {/* =====================================================

            CENTER DIVIDER

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            scaleX: reduceMotion ? 1 : 0.8,

          }}

          whileInView={{

            opacity: 1,

            scaleX: 1,

          }}

          viewport={{

            once: true,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.7,

            ease,

          }}

          className="mx-auto my-14 flex max-w-[900px] items-center gap-4 sm:my-16 lg:my-20"

        >

          <span

            className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8FB7D2]/55"

          />

          <span

            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6E2EA] bg-white text-[#B79A72] shadow-[0_5px_15px_rgba(11,42,82,0.05)]"

          >

            <Sparkles

              size={13}

              strokeWidth={1.6}

            />

          </span>

          <span

            className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B79A72]/55"

          />

        </motion.div>

        {/* =====================================================

            AI VIDEO CREATION

        ===================================================== */}

        <div

          className="mx-auto max-w-[1200px]"

        >

          <CategoryHeading

            label="02 · AI Video Creation"

            title="Starting With an Idea?"

            description="We develop concepts, generate visuals and scenes, edit the results and turn AI-generated material into finished creative."

            icon={Sparkles}

            type="ai"

            reduceMotion={reduceMotion}

          />

          <div

            className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6"

          >

            {aiPlans.map((plan, index) => (

              <PricingCard

                key={plan.name}

                plan={plan}

                index={index}

                reduceMotion={reduceMotion}

              />

            ))}

          </div>

        </div>

        {/* =====================================================

            AI VIDEO CLARIFICATION

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 18,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.25,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.65,

            ease,

          }}

          className="mx-auto mt-8 max-w-[1080px] rounded-[17px] border border-[#E3D5C2] bg-[#FFFBF6] px-5 py-5 sm:px-6"

        >

          <div className="flex items-start gap-3.5">

            <span

              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#A97C52] shadow-[0_5px_14px_rgba(11,42,82,0.05)]"

            >

              <WandSparkles

                size={14}

                strokeWidth={1.7}

              />

            </span>

            <div>

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Standard AI Video Scope

              </p>

              <p

                className="mt-1.5 text-[11px] font-medium leading-[1.65] text-[#0B2A52] sm:text-[11.5px]"

              >

                AI video limits apply to agreed short-form creative within the

                selected package.

              </p>

              <p

                className="mt-1 text-[10.5px] leading-[1.65] text-[#6B8094]"

              >

                Longer videos, advanced character consistency, complex product

                simulation, cinematic sequences, heavy VFX or unusually high

                generation requirements may require a custom quote.

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            HYBRID AI + EDITING

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 22,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.2,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.75,

            ease,

          }}

          className="relative mx-auto mt-10 max-w-[1120px] overflow-hidden rounded-[22px] border border-[#C9DBE7] bg-[linear-gradient(110deg,#EEF7FC_0%,#FFFFFF_52%,#FFF8F0_100%)] px-5 py-6 shadow-[0_14px_40px_rgba(11,42,82,0.05)] sm:px-7 sm:py-7 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-9"

        >

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -right-[100px] -top-[115px] h-[250px] w-[250px] rounded-full border border-[#B79A72]/15"

          />

          <div

            className="relative z-10 max-w-[730px]"

          >

            <p

              className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B79A72]"

            >

              Need Both?

            </p>

            <h3

              style={newYorkFont}

              className="mt-2 text-[25px] font-medium leading-[1.08] tracking-[-0.035em] text-[#0B2A52] sm:text-[29px]"

            >

              AI Video + Regular Editing.

            </h3>

            <p

              className="mt-3 max-w-[700px] text-[12px] leading-[1.75] text-[#657C95] sm:text-[13px]"

            >

              Need AI-generated creative alongside regular Reels, Shorts or

              advertising edits? We can combine both services into one custom

              monthly content plan.

            </p>

          </div>

          <div

            className="relative z-10 mt-6 shrink-0 lg:mt-0 lg:text-right"

          >

            <p

              className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

            >

              Combined Plan

            </p>

            <p

              style={newYorkFont}

              className="mt-1 text-[24px] font-medium text-[#0B2A52]"

            >

              Custom Monthly

            </p>

           <Link

  href="/contact?service=ai-video-editing&need=combined-video-plan#contact-form"

  title="Build My Video Plan"

  style={newYorkFont}

  className="group mt-4 inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[16px] border border-[#0B2A52] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white shadow-[0_9px_24px_rgba(11,42,82,0.14)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B6A] hover:!text-white hover:shadow-[0_13px_30px_rgba(11,42,82,0.18)]"

>

  <span className="relative z-10 !text-white">

    Build My Video Plan

  </span>

  <ArrowUpRight

    size={14}

    strokeWidth={1.6}

    className="relative z-10 !text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"

  />

</Link>

          </div>

        </motion.div>

        {/* =====================================================

            CUSTOM PRODUCTION + EXCLUSIONS

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 18,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.25,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.7,

            ease,

          }}

          className="mx-auto mt-8 max-w-[1080px] border-y border-[#E0E8EE] py-5"

        >

          <div

            className="grid gap-5 md:grid-cols-2 md:gap-10"

          >

            <div>

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Custom Production

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Cinematic AI films, advanced product videos, long-form content,

                advanced VFX, 3D / CGI and production-heavy campaigns are

                quoted separately.

              </p>

            </div>

            <div

              className="border-t border-[#E0E8EE] pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0"

            >

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Additional Costs

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Professional shoots, locations, talent, UGC creators,

                professional voiceovers, paid stock assets and premium

                generation costs are quoted separately where required.

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            END LINE

        ===================================================== */}

        <div

          className="mx-auto mt-9 flex max-w-[670px] items-center gap-3"

        >

          <span

            className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7EA9C8]/45"

          />

          <span

            className="shrink-0 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-[#8295A8] sm:tracking-[0.2em]"

          >

            Create · Edit · Enhance · Publish

          </span>

          <span

            className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B79A72]/45"

          />

        </div>

      </div>

    </section>

  );

}
