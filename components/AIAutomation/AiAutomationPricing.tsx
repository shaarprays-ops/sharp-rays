"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import type { LucideIcon } from "lucide-react";

import {

  ArrowUpRight,

  Bot,

  Check,

  Layers3,

  Settings,

  Sparkles,

  Wrench,

} from "lucide-react";

/* =========================================================

   FONT + MOTION

========================================================= */

const newYorkFont = {

  fontFamily: '"New York",  Georgia, serif',

};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================

   TYPES

========================================================= */

type Plan = {

  name: string;

  price: string;

  label: string;

  title: string;

  description: string;

  scope: string;

  icon: LucideIcon;

  features: string[];

  bestFor: string;

  cta: string;

  popular?: boolean;

};

/* =========================================================

   PRICING DATA

========================================================= */

const plans: Plan[] = [

  {

    name: "Starter",

    price: "₹14,999",

    label: "Focused Automation",

    title: "Automate One Repetitive Process Properly.",

    description:

      "For businesses that have one clear manual process they want to simplify, connect or automate.",

    scope: "1 Focused Automation Workflow",

    icon: Settings,

    features: [

      "Up to 2 Connected Tools",

      "Basic Triggers & Conditions",

      "Email / Notification Automation",

      "Data Transfer Between Systems",

      "Basic CRM / Spreadsheet Automation",

      "Testing & Launch",

      "Basic Workflow Documentation",

      "1 Revision Round",

      "14 Days Post-Launch Support",

    ],

    bestFor:

      "Startups and small businesses automating their first repetitive workflow.",

    cta: "Start With Automation",

  },

  {

    name: "Growth",

    price: "₹34,999",

    label: "Connected Automation",

    title: "Connect Multiple Steps Into One Smarter Workflow.",

    description:

      "For growing businesses that need several systems, actions or follow-ups working together automatically.",

    scope: "Up to 3 Connected Workflows",

    icon: Layers3,

    popular: true,

    features: [

      "Up to 4 Standard Tool Integrations",

      "Multi-Step Conditional Logic",

      "Lead Qualification Automation",

      "CRM Updates & Lead Routing",

      "Automated Follow-Up Sequences",

      "Email / Marketing Automation",

      "Webhook / API Integration Where Required",

      "AI Classification or Summarization",

      "Internal Alerts & Notifications",

      "Error Alerts & Fallback Paths",

      "2 Revision Rounds",

      "30 Days Post-Launch Support",

    ],

    bestFor:

      "Growing businesses connecting leads, CRM, communication and internal processes.",

    cta: "Choose Growth",

  },

  {

    name: "Scale",

    price: "₹64,999",

    label: "Advanced Automation",

    title: "Build a More Connected Automation System.",

    description:

      "For businesses that need automation across several processes, systems or operational teams.",

    scope: "Up to 5 Connected Workflows",

    icon: Bot,

    features: [

      "Multi-System Automation",

      "Advanced Conditional Routing",

      "Advanced API / Webhook Connections",

      "Document Processing Automation",

      "Reporting & Data Automation",

      "Customer Support Automation",

      "Advanced Lead & Sales Automation",

      "AI-Assisted Decision Steps",

      "Human-in-the-Loop Controls",

      "Data Synchronization",

      "Workflow Monitoring Setup",

      "Detailed Documentation",

      "3 Revision Rounds",

      "60 Days Post-Launch Support",

    ],

    bestFor:

      "Businesses building a broader automation system across multiple processes and teams.",

    cta: "Build My Automation System",

  },

];

/* =========================================================

   PLAN BUTTON

========================================================= */

function PlanButton({ plan }: { plan: Plan }) {

  const isGrowth = plan.name === "Growth";

  const isScale = plan.name === "Scale";

  const planHref =

    plan.name === "Starter"

      ? "/contact?service=ai-automation&plan=starter#contact-form"

      : plan.name === "Growth"

      ? "/contact?service=ai-automation&plan=growth#contact-form"

      : "/contact?service=ai-automation&plan=scale#contact-form";

  return (

    <Link

      href={planHref}

      title={`${plan.name} AI Automation Plan`}
      style={newYorkFont}

      className={`

        group

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

          isGrowth

            ? `

              border-[#0B2A52]

              bg-[#0B2A52]

              !text-white

              shadow-[0_10px_28px_rgba(11,42,82,0.15)]

              hover:-translate-y-[2px]

              hover:bg-[#123B6A]

              hover:!text-white

            `

            : isScale

              ? `

                border-[#C6A77A]/45

                bg-[#FFF8EE]

                text-[#0B2A52]

                hover:-translate-y-[2px]

                hover:border-[#B79A72]/70

                hover:bg-[#FFF3E3]

              `

              : `

                border-[#6285AD]/30

                bg-white/85

                text-[#0B2A52]

                hover:-translate-y-[2px]

                hover:border-[#6285AD]/50

                hover:bg-[#F2F7FB]

              `

        }

      `}

    >

      <span className={isGrowth ? "!text-white" : ""}>

        {plan.cta}

      </span>

      <ArrowUpRight

        size={13}

        strokeWidth={1.6}

        className={`

          transition-transform

          duration-300

          group-hover:translate-x-0.5

          group-hover:-translate-y-0.5

          ${isGrowth ? "text-white" : ""}

        `}

      />

    </Link>

  );

}

/* =========================================================

   MAIN COMPONENT

========================================================= */

export default function AiAutomationPricing() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="ai-automation-pricing"

      aria-labelledby="ai-automation-pricing-heading"

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

          className="absolute left-1/2 top-[-280px] h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-[#EAF4FB]/75 blur-[165px]"

        />

        <div

          className="absolute -right-[280px] top-[40%] hidden h-[540px] w-[540px] rounded-full border border-[#B79A72]/10 lg:block"

        />

        <div

          className="absolute -left-[260px] bottom-[4%] hidden h-[480px] w-[480px] rounded-full bg-[#EDF6FC]/70 blur-[150px] lg:block"

        />

      </div>

      {/* =====================================================

          CONTAINER

      ===================================================== */}

      <div

        className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-14"

      >

        {/* =====================================================

            HEADER

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

          className="mx-auto max-w-[920px] text-center"

        >

          <div

            className="flex items-center justify-center gap-3"

          >

            <span

              className="h-px w-9 bg-gradient-to-r from-transparent to-[#B79A72]"

            />

            <span

              className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#B79A72] sm:text-[10px]"

            >

              AI Automation Pricing

            </span>

            <span

              className="h-px w-9 bg-gradient-to-l from-transparent to-[#B79A72]"

            />

          </div>

          <h2

            id="ai-automation-pricing-heading"

            style={newYorkFont}

            className="mx-auto mt-6 max-w-[900px] text-[2.1rem] font-medium leading-[1] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"

          >

            Start With One Workflow.{" "}

            <span className="text-[#B79A72]">

              Build From There.

            </span>

          </h2>

          <p

            className="mx-auto mt-5 max-w-[735px] text-[13px] leading-[1.8] text-[#536C83] sm:text-[14px] md:text-[15px]"

          >

            Clear project-based pricing for businesses that want to reduce

            repetitive work, connect systems and build smarter operational

            workflows.

          </p>

        </motion.div>

        {/* =====================================================

            PRICING CARDS

        ===================================================== */}

        <div

          className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 items-stretch gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 xl:grid-cols-3 xl:gap-6"

        >

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            const isGrowth = plan.name === "Growth";

            const isScale = plan.name === "Scale";

            return (

              <motion.article

                key={plan.name}

                initial={{

                  opacity: 0,

                  y: reduceMotion ? 0 : 30,

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

                  delay: reduceMotion ? 0 : index * 0.08,

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

                    isGrowth

                      ? `

                        border-[#78AED3]/70

                        bg-[linear-gradient(180deg,#EEF7FC_0%,#FFFFFF_34%,#FFFFFF_100%)]

                        shadow-[0_22px_55px_rgba(11,42,82,0.10)]

                      `

                      : isScale

                        ? `

                          border-[#DDCDB8]

                          bg-[linear-gradient(180deg,#FFF9F2_0%,#FFFFFF_35%,#FFFFFF_100%)]

                          shadow-[0_12px_36px_rgba(11,42,82,0.05)]

                        `

                        : `

                          border-[#D6E3EC]

                          bg-[linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_35%,#FFFFFF_100%)]

                          shadow-[0_12px_36px_rgba(11,42,82,0.05)]

                        `

                  }

                  ${

                    isScale

                      ? "md:col-span-2 xl:col-span-1"

                      : ""

                  }

                `}

              >

                {/* TOP ACCENT */}

                <div

                  aria-hidden="true"

                  className={`

                    h-[3px]

                    w-full

                    ${

                      isGrowth

                        ? "bg-gradient-to-r from-[#0B2A52] via-[#6C9CC2] to-[#B79A72]"

                        : isScale

                          ? "bg-gradient-to-r from-transparent via-[#B79A72]/80 to-transparent"

                          : "bg-gradient-to-r from-transparent via-[#72A3C7]/75 to-transparent"

                    }

                  `}

                />

                {/* MOST POPULAR */}

                {plan.popular && (

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

                {/* CARD */}

                <div

                  className="flex h-full flex-1 flex-col p-5 sm:p-6"

                >

                  {/* PLAN HEADER */}

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

                          isGrowth

                            ? "bg-[#0B2A52] text-white"

                            : isScale

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

                        className="text-[9px] font-bold uppercase tracking-[0.21em] text-[#B79A72]"

                      >

                        {plan.name}

                      </p>

                      <p

                        className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.13em] text-[#8496A8]"

                      >

                        {plan.label}

                      </p>

                    </div>

                  </div>

                  {/* TITLE */}

                  <h3

                    style={newYorkFont}

                    className="mt-5 min-h-[54px] text-[22px] font-medium leading-[1.08] tracking-[-0.03em] text-[#0B2A52] sm:text-[24px]"

                  >

                    {plan.title}

                  </h3>

                  {/* DESCRIPTION */}

                  <p

                    className="mt-3 min-h-[65px] text-[11.5px] leading-[1.65] text-[#617991] sm:text-[12px]"

                  >

                    {plan.description}

                  </p>

                  {/* PRICE */}

                  {/* SCOPE */}

                  <div

                    className={`

                      mt-4

                      flex

                      items-center

                      justify-between

                      gap-3

                      rounded-[11px]

                      border

                      px-3.5

                      py-3

                      ${

                        isGrowth

                          ? "border-[#C7DDEA] bg-[#F1F8FC]"

                          : isScale

                            ? "border-[#E5D7C5] bg-[#FFF9F1]"

                            : "border-[#D7E4ED] bg-[#F7FAFC]"

                      }

                    `}

                  >

                    <span

                      className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#8495A6]"

                    >

                      Project Scope

                    </span>

                    <span

                      className="text-right text-[10px] font-semibold text-[#274F72]"

                    >

                      {plan.scope}

                    </span>

                  </div>

                  {/* FEATURES */}

                  <div className="mt-5">

                    <p

                      className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0B2A52]"

                    >

                      What&apos;s Included

                    </p>

                    <div className="mt-3.5 space-y-[9px]">

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

                                isGrowth

                                  ? "bg-[#E1EFF8] text-[#0B2A52]"

                                  : isScale

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

                            className="text-[11px] leading-[1.48] text-[#5D758B] sm:text-[11.5px]"

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

                        className="mt-1.5 text-[10.5px] leading-[1.6] text-[#667D92]"

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

          })}

        </div>

        {/* =====================================================

            CUSTOM AI SYSTEMS

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

            amount: 0.2,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.75,

            ease,

          }}

          className="relative mx-auto mt-10 max-w-[1120px] overflow-hidden rounded-[22px] border border-[#C7D9E6] bg-[linear-gradient(110deg,#F1F8FD_0%,#FFFFFF_55%,#FFF8F0_100%)] px-5 py-6 shadow-[0_14px_40px_rgba(11,42,82,0.05)] sm:px-7 sm:py-7 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-9"

        >

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -right-[100px] -top-[110px] h-[250px] w-[250px] rounded-full border border-[#B79A72]/15"

          />

          <div

            className="relative z-10 max-w-[760px]"

          >

            <div className="flex items-center gap-2.5">

              <Bot

                size={14}

                strokeWidth={1.6}

                className="text-[#B79A72]"

              />

              <p

                className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B79A72]"

              >

                Need Something More Advanced?

              </p>

            </div>

            <h3

              style={newYorkFont}

              className="mt-3 text-[25px] font-medium leading-[1.08] tracking-[-0.035em] text-[#0B2A52] sm:text-[29px] lg:text-[31px]"

            >

              Custom AI Agents & Automation Systems.

            </h3>

            <p

              className="mt-3 max-w-[730px] text-[12.5px] leading-[1.75] text-[#657C95] sm:text-[13.5px]"

            >

              AI agents, internal knowledge systems, voice automation,

              high-volume workflows and complex integrations require a tailored

              architecture and project scope.

            </p>

            <div

              className="mt-4 flex flex-wrap gap-x-3 gap-y-2"

            >

              {[

                "Custom AI Agents",

                "Knowledge / RAG",

                "Voice AI",

                "WhatsApp AI",

                "Multi-Agent Systems",

                "Custom APIs",

              ].map((item) => (

                <span

                  key={item}

                  className="text-[8px] font-semibold uppercase tracking-[0.09em] text-[#56758F]"

                >

                  {item}

                </span>

              ))}

            </div>

          </div>

          <div

            className="relative z-10 mt-6 shrink-0 lg:mt-0 lg:text-right"

          >

            <p

              className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

            >

              Project Pricing

            </p>

            <p

              style={newYorkFont}

              className="mt-1 text-[25px] font-medium text-[#0B2A52]"

            >

              Custom Quote

            </p>

            <Link

              href="/contact?service=ai-automation&need=custom-automation-system#contact-form"

              title="Request a Custom AI Automation Proposal"

              style={newYorkFont}

              className="group mt-4 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[16px] border border-[#0B2A52] bg-[#0B2A52] px-5 py-2.5 text-[12px] font-medium text-white shadow-[0_9px_24px_rgba(11,42,82,0.14)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B6A]"

            >

              Request an Automation Proposal

              <ArrowUpRight

                size={13}

                strokeWidth={1.5}

                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"

              />

            </Link>

          </div>

        </motion.div>

        {/* =====================================================

            AUTOMATION CARE

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 20,

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

          className="mx-auto mt-8 max-w-[1120px] rounded-[18px] border border-[#D5E3ED] bg-[#F7FAFC] px-5 py-5 sm:px-6"

        >

          <div

            className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8"

          >

            <div className="flex items-start gap-3.5">

              <span

                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B2A52] shadow-[0_5px_14px_rgba(11,42,82,0.06)]"

              >

                <Wrench

                  size={14}

                  strokeWidth={1.7}

                />

              </span>

              <div>

                <p

                  className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

                >

                  Optional Ongoing Support

                </p>

                <h3

                  style={newYorkFont}

                  className="mt-1 text-[20px] font-medium text-[#0B2A52] sm:text-[22px]"

                >

                  Automation Care

                </h3>

                <p

                  className="mt-1.5 max-w-[680px] text-[11px] leading-[1.65] text-[#617991] sm:text-[11.5px]"

                >

                  Monitoring, error checks, minor workflow adjustments,

                  dependency checks and basic ongoing optimization after the

                  included support period.

                </p>

              </div>

            </div>

            <div className="shrink-0 md:text-right">

              <p

                className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#8495A6]"

              >

                Starting From

              </p>

              <p

                style={newYorkFont}

                className="mt-1 text-[24px] font-medium text-[#0B2A52]"

              >

                ₹4,999

                <span

                  className="ml-1 text-[10px] font-normal text-[#71879A]"

                >

                  / month

                </span>

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            IMPORTANT SCOPE NOTE

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 16,

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

          className="mx-auto mt-8 max-w-[1060px] border-y border-[#E0E8EE] py-5"

        >

          <div

            className="grid gap-5 md:grid-cols-2 md:gap-10"

          >

            <div>

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Pricing Depends On

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Workflow complexity, number of systems, integrations, AI

                requirements, conditional logic, data volume and approval

                requirements.

              </p>

            </div>

            <div

              className="border-t border-[#E0E8EE] pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0"

            >

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Third-Party Costs

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Automation platforms, AI model usage, APIs, WhatsApp charges,

                premium tools and other external software costs are separate

                unless specifically included in your proposal.

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            END LINE

        ===================================================== */}

        <div

          className="mx-auto mt-9 flex max-w-[650px] items-center gap-3"

        >

          <span

            className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B79A72]/45"

          />

          <span

            className="shrink-0 text-center text-[8px] font-semibold uppercase tracking-[0.16em] text-[#8295A8] sm:tracking-[0.22em]"

          >

            Connect · Automate · Review · Improve

          </span>

          <span

            className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B79A72]/45"

          />

        </div>

      </div>

    </section>

  );

}
