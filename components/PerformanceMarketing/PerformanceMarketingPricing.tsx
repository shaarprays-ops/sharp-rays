"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowUpRight, BarChart3, Check, Layers3, Megaphone, Sparkles, Target } from "lucide-react";

import type { LucideIcon } from "lucide-react";

/* =========================================================

   FONT + MOTION

========================================================= */

const newYorkFont = { fontFamily: '"New York", "", Georgia, serif', };

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================

   TYPES

========================================================= */

type Plan = {

  name: string;

  subtitle: string;

  description: string;

  price: string;

  platformScope: string;

  bundleTitle: string;

  bundleText: string;

  items: string[];

  bestFor: string;

  cta: string;

  icon: LucideIcon;

  popular?: boolean;

};

/* =========================================================

   PRICING DATA

========================================================= */

const plans: Plan[] = [

  {

    name: "Starter",

    subtitle: "Start With Smarter Paid Media.",

    description:

      "For businesses that want to begin paid advertising with one focused channel and a clear performance objective.",

    price: "₹12,999",

    platformScope: "1 Advertising Platform",

    bundleTitle: "Focused Start",

    bundleText:

      "A focused single-channel plan for businesses that want to test and improve paid acquisition before expanding.",

    items: [

      "Paid Media Strategy",

      "Campaign Setup & Management",

      "Audience / Keyword Research",

      "Campaign Structure & Targeting",

      "Ad Copy & Messaging Support",

      "Basic Conversion Tracking",

      "Ongoing Campaign Optimization",

      "Budget Allocation Recommendations",

      "Monthly Performance Report",

      "Monthly Performance Review",

    ],

    bestFor:

      "Startups, local businesses and companies starting with Google Ads or Meta Ads.",

    cta: "Start With Starter",

    icon: Target,

  },

  {

    name: "Growth",

    subtitle: "Build a Connected Performance System.",

    description:

      "For growing businesses that want two paid channels working together with stronger tracking, testing and retargeting.",

    price: "₹22,999",

    platformScope: "Up to 2 Advertising Platforms",

    bundleTitle: "Bundle Advantage",

    bundleText:

      "Save ₹2,999 compared with two separate Starter plans — plus unlock cross-platform strategy, retargeting and creative testing.",

    items: [

      "Everything in Starter",

      "Cross-Platform Campaign Strategy",

      "Multi-Campaign Management",

      "Retargeting Campaigns",

      "Advanced Conversion Tracking",

      "Audience Testing",

      "Creative Performance Testing",

      "Ad Copy, Hook & CTA Testing",

      "Cross-Platform Budget Optimization",

      "Landing Page Recommendations",

      "Lead / Conversion Quality Review",

      "Monthly Strategy Review",

      "Priority Campaign Support",

    ],

    bestFor:

      "Growing businesses that want Google Ads and Meta Ads working together to generate more consistent leads or sales.",

    cta: "Choose Growth",

    icon: BarChart3,

    popular: true,

  },

  {

    name: "Scale",

    subtitle: "Scale What Performs Across Channels.",

    description:

      "For businesses ready for a broader paid growth system across multiple channels, audiences and conversion journeys.",

    price: "₹32,999",

    platformScope: "Up to 3 Advertising Platforms",

    bundleTitle: "Scale Advantage",

    bundleText:

      "Save ₹5,998 compared with three separate Starter plans — with advanced tracking, segmentation, CRO and multi-channel optimization included.",

    items: [

      "Everything in Growth",

      "Multi-Channel Paid Media Strategy",

      "Advanced Campaign Architecture",

      "Advanced Retargeting",

      "Audience Segmentation",

      "Cross-Channel Budget Allocation",

      "Advanced Conversion & Attribution Tracking",

      "Larger Creative Testing Framework",

      "Offer & Messaging Testing",

      "Landing Page CRO Recommendations",

      "Funnel & Conversion Path Review",

      "Conversion Value / ROAS Analysis",

      "More Frequent Performance Optimization",

      "Advanced Performance Reporting",

      "Monthly Growth Strategy Review",

      "Priority Support",

    ],

    bestFor:

      "Businesses scaling paid acquisition across Google, Meta and an additional platform such as YouTube or LinkedIn.",

    cta: "Choose Scale",

    icon: Layers3,

  },

];

/* =========================================================

   PLAN BUTTON

========================================================= */

function PlanButton({

  plan,

}: {

  plan: Plan;

}) {

  const isGrowth = plan.name === "Growth";

  const isScale = plan.name === "Scale";

  const planHref =

    plan.name === "Starter"

      ? "/contact?service=performance-marketing&plan=starter#contact-form"

      : plan.name === "Growth"

      ? "/contact?service=performance-marketing&plan=growth#contact-form"

      : "/contact?service=performance-marketing&plan=scale#contact-form";

  return (

    <Link

      href={planHref}

      title={`${plan.name} Performance Marketing Plan`}
      style={{ ...newYorkFont, color: isGrowth ? "#FFFFFF" : "#0B2A52" }}

      className={`group/button flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[16px] border px-5 py-3 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 ease-out ${isGrowth ?`border-[#0B2A52] bg-[#0B2A52] !text-white shadow-[0_10px_28px_rgba(11,42,82,0.16)] hover:-translate-y-[2px] hover:bg-[#123B6A] hover:!text-white hover:shadow-[0_14px_34px_rgba(11,42,82,0.20)]`: isScale ?`border-[#B79A72]/35 bg-[#FFF9F1] text-[#0B2A52] shadow-[0_8px_25px_rgba(183,154,114,0.08)] hover:-translate-y-[2px] hover:border-[#B79A72]/55 hover:bg-[#FFF5E8]`:`border-[#6285AD]/30 bg-white/85 text-[#0B2A52] shadow-[0_8px_25px_rgba(11,42,82,0.07)] hover:-translate-y-[2px] hover:border-[#6285AD]/45 hover:bg-[#F3F8FC]`}`}

    >

      <span

        style={{ color: isGrowth ? "#FFFFFF" : undefined }}

        className={isGrowth ? "!text-white" : ""}

      >

        {plan.cta}

      </span>

      <ArrowUpRight

        size={13}

        strokeWidth={1.6}

        style={{ color: isGrowth ? "#FFFFFF" : undefined }}

        className={`transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 ${isGrowth ? "!text-white" : ""}`}

      />

    </Link>

  );

}

/* =========================================================

   MAIN COMPONENT

========================================================= */

export default function PerformanceMarketingPricing() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="performance-marketing-pricing"

      aria-labelledby="performance-pricing-heading"

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

          className="absolute left-1/2 top-[-300px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[#E8F3FB]/75 blur-[170px]"

        />

        <div

          className="absolute -right-[300px] top-[43%] hidden h-[560px] w-[560px] rounded-full border border-[#B79A72]/10 lg:block"

        />

        <div

          className="absolute -left-[260px] bottom-[5%] hidden h-[500px] w-[500px] rounded-full bg-[#DDEDF8]/45 blur-[160px] lg:block"

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

              Performance Marketing Pricing

            </span>

            <span

              className="h-px w-9 bg-gradient-to-l from-transparent to-[#B79A72]"

            />

          </div>

          <h2

            id="performance-pricing-heading"

            style={newYorkFont}

            className="mx-auto mt-6 max-w-[900px] text-[2.1rem] font-medium leading-[1] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"

          >

            More Channels. More Capability.{" "}

            <span className="text-[#B79A72]">

              Better Value.

            </span>

          </h2>

          <p

            className="mx-auto mt-5 max-w-[740px] text-[13px] leading-[1.8] text-[#536C83] sm:text-[14px] md:text-[15px]"

          >

            Start with one focused advertising channel, then unlock stronger

            cross-platform strategy, testing, tracking and optimization as your

            paid media grows.

          </p>

        </motion.div>

        {/* =====================================================

            PRICING GRID

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

                  y: reduceMotion ? 0 : 28,

                }}

                whileInView={{

                  opacity: 1,

                  y: 0,

                }}

                viewport={{

                  once: true,

                  amount: 0.14,

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

                className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border transition-all duration-500 ${isGrowth ?`border-[#78AED3]/70 bg-[linear-gradient(180deg,#EFF7FC_0%,#FFFFFF_34%,#FFFFFF_100%)] shadow-[0_22px_55px_rgba(11,42,82,0.10)]`: isScale ?`border-[#DDCDB8] bg-[linear-gradient(180deg,#FFF9F1_0%,#FFFFFF_34%,#FFFFFF_100%)] shadow-[0_12px_36px_rgba(11,42,82,0.05)]`:`border-[#D6E3EC] bg-[linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_34%,#FFFFFF_100%)] shadow-[0_12px_36px_rgba(11,42,82,0.05)]`} ${isScale ? "md:col-span-2 xl:col-span-1" : ""}`}

              >

                {/* TOP ACCENT */}

                <div

                  aria-hidden="true"

                  className={`h-[3px] w-full ${isGrowth ? "bg-gradient-to-r from-[#0B2A52] via-[#6C9CC2] to-[#B79A72]" : isScale ? "bg-gradient-to-r from-transparent via-[#B79A72]/80 to-transparent" : "bg-gradient-to-r from-transparent via-[#72A3C7]/75 to-transparent"}`}

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

                {/* CONTENT */}

                <div

                  className="flex h-full flex-1 flex-col p-5 sm:p-6"

                >

                  {/* PLAN */}

                  <div className="flex items-center gap-3">

                    <span

                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${isGrowth ? "bg-[#0B2A52] text-white" : isScale ? "bg-[#FFF0DB] text-[#A97C52]" : "bg-[#E7F2FA] text-[#0D5A93]"}`}

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

                        Monthly Management

                      </p>

                    </div>

                  </div>

                  {/* TITLE */}

                  <h3

                    style={newYorkFont}

                    className="mt-5 min-h-[54px] text-[22px] font-medium leading-[1.08] tracking-[-0.03em] text-[#0B2A52] sm:text-[24px]"

                  >

                    {plan.subtitle}

                  </h3>

                  {/* DESCRIPTION */}

                  <p

                    className="mt-3 min-h-[64px] text-[11.5px] leading-[1.65] text-[#617991] sm:text-[12px]"

                  >

                    {plan.description}

                  </p>

                  {/* PRICE */}

                  {/* PLATFORM SCOPE */}

                  <div

                    className={`mt-4 flex items-center justify-between gap-3 rounded-[11px] border px-3.5 py-3 ${isGrowth ? "border-[#C7DDEA] bg-[#F1F8FC]" : isScale ? "border-[#E5D7C5] bg-[#FFF9F1]" : "border-[#D7E4ED] bg-[#F7FAFC]"}`}

                  >

                    <span

                      className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#8495A6]"

                    >

                      Platform Scope

                    </span>

                    <span

                      className="text-right text-[10px] font-semibold text-[#274F72]"

                    >

                      {plan.platformScope}

                    </span>

                  </div>

                  {/* =====================================================

                      BUNDLE / VALUE ADVANTAGE

                  ===================================================== */}

                  <div

                    className={`mt-3 rounded-[12px] border px-3.5 py-3.5 ${isGrowth ?`border-[#AFCDE2]/75 bg-[linear-gradient(135deg,#EAF5FC_0%,#F7FBFD_100%)]`: isScale ?`border-[#DFCCB1]/75 bg-[linear-gradient(135deg,#FFF4E5_0%,#FFFBF6_100%)]`:`border-[#DBE6EE] bg-white/80`}`}

                  >

                    <div className="flex items-center gap-2">

                      {(isGrowth || isScale) && (

                        <Sparkles

                          size={11}

                          strokeWidth={1.7}

                          className={

                            isScale

                              ? "text-[#A97C52]"

                              : "text-[#2F739E]"

                          }

                        />

                      )}

                      <p

                        className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#B79A72]"

                      >

                        {plan.bundleTitle}

                      </p>

                    </div>

                    <p

                      className="mt-1.5 text-[10px] font-medium leading-[1.55] text-[#526F88]"

                    >

                      {plan.bundleText}

                    </p>

                  </div>

                  {/* INCLUDED */}

                  <div className="mt-5">

                    <p

                      className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0B2A52]"

                    >

                      What&apos;s Included

                    </p>

                    <div className="mt-3.5 space-y-[9px]">

                      {plan.items.map((item) => (

                        <div

                          key={item}

                          className="flex items-start gap-2.5"

                        >

                          <span

                            className={`mt-[1px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full ${isGrowth ? "bg-[#E1EFF8] text-[#0B2A52]" : isScale ? "bg-[#F8F0E5] text-[#9A7147]" : "bg-[#EAF4FB] text-[#3573A6]"}`}

                          >

                            <Check

                              size={9}

                              strokeWidth={2}

                            />

                          </span>

                          <span

                            className="text-[11px] leading-[1.48] text-[#5D758B] sm:text-[11.5px]"

                          >

                            {item}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* SPACER */}

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

            WHY HIGHER PLANS GIVE MORE VALUE

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

            amount: 0.2,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.7,

            ease,

          }}

          className="mx-auto mt-8 max-w-[1100px] rounded-[18px] border border-[#D3E1EA] bg-[#F8FBFD] px-5 py-5 sm:px-6 sm:py-6"

        >

          <div

            className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-8"

          >

            <div>

              <p

                className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B79A72]"

              >

                Better Value as You Scale

              </p>

              <h3

                style={newYorkFont}

                className="mt-2 text-[23px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B2A52] sm:text-[26px]"

              >

                More Platforms Should Unlock More Than More Management.

              </h3>

            </div>

            <div

              className="grid gap-3 sm:grid-cols-2"

            >

              <div

                className="rounded-[13px] border border-[#C9DDEB] bg-white px-4 py-3.5"

              >

                <p

                  className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#2F739E]"

                >

                  Growth Advantage

                </p>

                <p

                  className="mt-1.5 text-[10.5px] leading-[1.6] text-[#637A90]"

                >

                  Lower combined management cost plus retargeting, creative

                  testing and cross-platform optimization.

                </p>

              </div>

              <div

                className="rounded-[13px] border border-[#E0CFB8] bg-[#FFFBF6] px-4 py-3.5"

              >

                <p

                  className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#A97C52]"

                >

                  Scale Advantage

                </p>

                <p

                  className="mt-1.5 text-[10.5px] leading-[1.6] text-[#637A90]"

                >

                  Better multi-channel value plus attribution, segmentation,

                  CRO, funnel analysis and deeper optimization.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            IMPORTANT NOTE

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

            amount: 0.3,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.65,

            ease,

          }}

          className="mx-auto mt-8 max-w-[1100px] rounded-[17px] border border-[#D7E3EC] bg-white/85 px-5 py-5 shadow-[0_8px_28px_rgba(11,42,82,0.035)] sm:px-6"

        >

          <div

            className="flex flex-col gap-4 sm:flex-row sm:items-start"

          >

            <span

              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF4FB] text-[#0D5A93]"

            >

              <Megaphone

                size={15}

                strokeWidth={1.7}

              />

            </span>

            <div>

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Important

              </p>

              <p

                className="mt-1.5 text-[11.5px] font-medium leading-6 text-[#0B2A52] sm:text-[12px]"

              >

                Advertising spend is not included in the management fee and is

                paid separately to the advertising platforms.

              </p>

              <p

                className="mt-1 text-[10.5px] leading-5 text-[#60768B] sm:text-[11px]"

              >

                Pricing covers the agreed advertising platform and campaign

                scope. Multiple ad accounts, larger campaign structures,

                advanced creative production or complex tracking requirements

                may require a custom scope.

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            CREATIVE SCOPE

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

                Included Creative Support

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Ad copy, hooks, CTA variations, creative recommendations and

                agreed performance creative testing are included according to

                the selected plan.

              </p>

            </div>

            <div

              className="border-t border-[#E0E8EE] pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0"

            >

              <p

                className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

              >

                Quoted Separately

              </p>

              <p

                className="mt-2 text-[11px] leading-[1.7] text-[#647B90] sm:text-[11.5px]"

              >

                Professional shoots, UGC creators, talent, advanced video

                production, large creative batches and new landing-page

                development are scoped separately where required.

              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            CUSTOM PLAN

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

          className="relative mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-[22px] border border-[#C7D9E6] bg-[linear-gradient(110deg,#F1F8FD_0%,#FFFFFF_55%,#FFF8F0_100%)] px-5 py-6 shadow-[0_14px_40px_rgba(11,42,82,0.05)] sm:px-7 sm:py-7 md:flex md:items-center md:justify-between md:gap-10 lg:px-9"

        >

          <div

            aria-hidden="true"

            className="pointer-events-none absolute -right-[100px] -top-[115px] h-[250px] w-[250px] rounded-full border border-[#B79A72]/15"

          />

          <div

            className="relative z-10 max-w-[710px]"

          >

            <p

              className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#B79A72]"

            >

              Custom Performance Plan

            </p>

            <h3

              style={newYorkFont}

              className="mt-2 text-[24px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B2A52] sm:text-[28px]"

            >

              Running More Platforms or More Complex Campaigns?

            </h3>

            <p

              className="mt-3 max-w-[680px] text-[12px] leading-[1.7] text-[#5B7187] sm:text-[13px]"

            >

              For four or more advertising platforms, multiple ad accounts,

              larger campaign structures, advanced tracking or heavier creative

              requirements, we build a custom performance marketing scope.

            </p>

          </div>

          <div

            className="relative z-10 mt-5 shrink-0 md:mt-0 md:text-right"

          >

            <p

              className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#B79A72]"

            >

              Pricing

            </p>

            <p

              style={newYorkFont}

              className="mt-1 text-[24px] font-medium text-[#0B2A52]"

            >

              Custom Quote

            </p>

           <Link

  href="/contact"

  title="Get a Custom Performance Marketing Proposal"
  style={{

    ...newYorkFont,

    color: "#FFFFFF",

  }}

  className="group mt-4 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[16px] border border-[#0B2A52] bg-[#0B2A52] px-5 py-2.5 text-[12px] font-medium !text-white shadow-[0_9px_24px_rgba(11,42,82,0.14)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B6A] hover:!text-white"

>

  <span

    style={{ color: "#FFFFFF" }}

    className="!text-white"

  >

    Get a Custom Proposal

  </span>

  <ArrowUpRight

    size={13}

    strokeWidth={1.5}

    style={{ color: "#FFFFFF" }}

    className="!text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"

  />

</Link>

          </div>

        </motion.div>

        {/* =====================================================

            PLATFORM FOOTER

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            scaleX: reduceMotion ? 1 : 0.9,

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

          className="mx-auto mt-9 flex max-w-[720px] items-center gap-3 sm:gap-4"

        >

          <span

            className="h-px flex-1 bg-gradient-to-r from-transparent to-[#8CB4D0]/50"

          />

          <span

            className="shrink-0 text-center text-[7px] font-semibold uppercase tracking-[0.12em] text-[#536F8A] sm:text-[8.5px] sm:tracking-[0.17em]"

          >

            Google Ads · Meta Ads · YouTube · LinkedIn Ads

          </span>

          <span

            className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B79A72]/45"

          />

        </motion.div>

      </div>

    </section>

  );

}
