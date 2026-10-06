"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  BarChart3,
  Check,
  Gift,
  Search,
  Target,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   DATA
========================================================= */

const plans = [
  {
    name: "Foundation",

    tagline: "Build the Right Search Foundation.",

    icon: Search,

    items: [
      "SEO Audit & Priority Action Plan",
      "Keyword & Search Intent Research",
      "Core Technical SEO Checks",
      "Up to 5 Priority Page Optimizations / Month",
      "On-Page SEO Improvements",
      "Meta Titles & Descriptions",
      "Internal Linking Improvements",
      "Google Search Console Review",
      "GA4 Performance Review",
      "Monthly SEO Report",
    ],

    bonus: "SEO Opportunity Snapshot",

    bestFor:
      "Startups, local businesses and smaller websites building their organic search foundation.",

    cta: "Start With Foundation",

    href: "/contact?service=seo&plan=foundation#contact-form",
    
  },

  {
    name: "Growth",

    tagline: "Turn Search Visibility Into Consistent Growth.",

    icon: Target,

    items: [
      "Everything in Foundation",
      "Advanced Keyword & Competitor Research",
      "Up to 10 Priority Page Optimizations / Month",
      "Content Gap Analysis",
      "Existing Content Optimization",
      "Technical SEO Monitoring",
      "Search Intent & Page Mapping",
      "Schema & Structured Data Recommendations",
      "AI Search Readiness Recommendations",
      "2 SEO Content Briefs / Month",
      "Monthly Performance & Strategy Review",
    ],

    bonus: "Competitor & Content Opportunity Report",

    bestFor:
      "Growing businesses targeting more services, keywords or locations.",

    cta: "Choose Growth",

    href: "/contact?service=seo&plan=growth#contact-form",

    popular: true,
  },

  {
    name: "Scale",

    tagline: "Build a Complete Organic Growth System.",

    icon: BarChart3,

    items: [
      "Everything in Growth",
      "Up to 15 Priority Page Optimizations / Month",
      "Advanced Keyword & Competitor Strategy",
      "Advanced Technical SEO Monitoring",
      "Technical Issue Prioritization",
      "Content Cluster & Topical Authority Planning",
      "Advanced Internal Linking Strategy",
      "Local SEO Optimization Support",
      "Schema & Structured Data Strategy",
      "AI Search & AI Overview Optimization",
      "Search Console & GA4 Performance Analysis",
      "Organic Competitor Growth Analysis",
      "Authority & Digital PR Opportunity Mapping",
      "Conversion & Search Performance Review",
      "Monthly Growth Strategy Session",
      "Priority Support",
    ],

    bonus:
      "Competitor Growth Report + 60-Minute Strategy Session",

    bestFor:
      "Competitive businesses, larger websites and brands building long-term organic growth.",

    cta: "Choose Scale",

    href: "/contact?service=seo&plan=scale#contact-form",
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function SEOPricingSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="seo-pricing"
      aria-labelledby="seo-pricing-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        text-[#0B2A52]

        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-280px]
            h-[500px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[#EAF4FC]/70
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-[280px]
            top-[46%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C6A77A]/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-[240px]
            bottom-[2%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#EAF4FC]/45
            blur-[140px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1340px]
          px-5

          sm:px-7
          md:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            HEADER
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-8 bg-[#C6A77A]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-[#C6A77A]

                sm:text-[10px]
              "
            >
              SEO Pricing
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />
          </div>

          <h2
            id="seo-pricing-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[850px]

              text-[2.1rem]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            SEO Plans Built Around How Far You Want to{" "}
            <span className="text-[#C6A77A]">
              Grow.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]

              text-[13px]
              leading-6
              text-[#61778D]

              sm:text-[14px]
            "
          >
            Choose a starting point based on your website,
            competition and growth goals.
          </p>
        </motion.div>

        {/* =====================================================
            OFFERS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
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
          className="
            mx-auto
            mt-8
            grid
            max-w-[980px]
            gap-3

            md:grid-cols-2
          "
        >
          {/* NEW CLIENT OFFER */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              rounded-[16px]

              border
              border-[#C6A77A]/25

              bg-[#FFF9EF]

              px-4
              py-3.5

              text-center
            "
          >
            <Gift
              size={14}
              strokeWidth={1.7}
              className="
                shrink-0
                text-[#B88E55]
              "
            />

            <p
              className="
                text-[10.5px]
                font-medium
                leading-5
                text-[#0B2A52]

                sm:text-[11px]
              "
            >
              <strong>
                New Client Offer:
              </strong>{" "}
              Free SEO Opportunity Review with any plan.
            </p>
          </div>

          {/* QUARTERLY OFFER */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3

              rounded-[16px]

              border
              border-[#A8C6DC]/40

              bg-[#F0F7FC]

              px-4
              py-3.5

              text-center
            "
          >
            <span
              className="
                flex
                h-[24px]
                w-[24px]
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#0B2A52]

                text-[8px]
                font-bold
                text-white
              "
            >
              %
            </span>

            <p
              className="
                text-[10.5px]
                font-medium
                leading-5
                text-[#0B2A52]

                sm:text-[11px]
              "
            >
              <strong>
                Quarterly Billing:
              </strong>{" "}
              Save 10% when you choose a quarterly plan.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-8

            grid
            max-w-[1180px]
            grid-cols-1

            items-stretch
            gap-5

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className={`
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[22px]
                  border
                  bg-white
                  p-5
                  shadow-[0_12px_35px_rgba(11,42,82,0.045)]
                  transition-all
                  duration-300

                  sm:p-6

                  ${
                    plan.popular
                      ? `
                          border-[#3976B6]/50
                          shadow-[0_18px_45px_rgba(57,118,182,0.10)]
                        `
                      : `
                          border-[#D6E2EC]
                          hover:border-[#B7CCDC]
                        `
                  }

                  ${
                    plan.name === "Scale"
                      ? "md:col-span-2 xl:col-span-1"
                      : ""
                  }
                `}
              >
                {/* CARD BACKGROUND */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    inset-0

                    ${
                      plan.popular
                        ? `
                            bg-gradient-to-br
                            from-[#EDF6FD]
                            via-white
                            to-white
                          `
                        : `
                            bg-gradient-to-br
                            from-white
                            to-[#F7FAFC]
                          `
                    }
                  `}
                />

                {/* MOST POPULAR */}

                {plan.popular && (
                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      z-20

                      rounded-full

                      bg-[#0B2A52]

                      px-3
                      py-1.5

                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    Most Popular
                  </span>
                )}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* PLAN */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-[11px]

                        ${
                          plan.popular
                            ? "bg-[#0B2A52] text-white"
                            : "bg-[#EAF4FC] text-[#0B2A52]"
                        }
                      `}
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.65}
                      />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#C6A77A]
                      "
                    >
                      {plan.name}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    style={newYorkFont}
                    className="
                      mt-4
                      min-h-[58px]
                      max-w-[350px]

                      text-[23px]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.03em]
                      text-[#0B2A52]

                      sm:text-[25px]
                    "
                  >
                    {plan.tagline}
                  </h3>

                  {/* QUARTERLY SAVING */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2

                      rounded-[10px]

                      border
                      border-[#C2D9E8]/65

                      bg-[#F4F9FC]

                      px-3
                      py-2
                    "
                  >
                    <span
                      className="
                        flex
                        h-[19px]
                        w-[19px]
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#DDECF6]

                        text-[7px]
                        font-bold
                        text-[#0B2A52]
                      "
                    >
                      %
                    </span>

                    <span
                      className="
                        text-[8.5px]
                        font-medium
                        leading-4
                        text-[#536F87]
                      "
                    >
                      Save 10% with quarterly billing
                    </span>
                  </div>

                  {/* INCLUDED */}

                  <div
                    className="
                      mt-5
                      border-t
                      border-[#0B2A52]/[0.07]
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#0B2A52]/55
                      "
                    >
                      What&apos;s Included
                    </span>

                    <div className="mt-2">
                      {plan.items.map((item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-2.5
                            py-[5px]
                          "
                        >
                          <span
                            className="
                              mt-[3px]
                              flex
                              h-[16px]
                              w-[16px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#EAF4FC]
                            "
                          >
                            <Check
                              size={9}
                              strokeWidth={2}
                              className="text-[#3976B6]"
                            />
                          </span>

                          <span
                            className="
                              text-[10.5px]
                              leading-[1.55]
                              text-[#5F758B]

                              sm:text-[11px]
                            "
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BONUS */}

                  <div
                    className="
                      mt-5
                      flex
                      items-start
                      gap-2.5
                      rounded-[12px]
                      border
                      border-[#EFDDBD]/55
                      bg-[#FFF8ED]
                      px-3
                      py-2.5
                    "
                  >
                    <Gift
                      size={12}
                      strokeWidth={1.7}
                      className="
                        mt-[3px]
                        shrink-0
                        text-[#B88E55]
                      "
                    />

                    <p
                      className="
                        text-[9.5px]
                        font-medium
                        leading-5
                        text-[#0B2A52]
                      "
                    >
                      <span className="text-[#A77D45]">
                        Included Bonus:
                      </span>{" "}
                      {plan.bonus}
                    </p>
                  </div>

                  {/* BEST FOR */}

                  <div
                    className="
                      mt-4
                      border-l
                      border-[#C6A77A]
                      pl-3
                    "
                  >
                    <span
                      className="
                        block
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.17em]
                        text-[#C6A77A]
                      "
                    >
                      Best For
                    </span>

                    <p
                      className="
                        mt-1
                        text-[9.5px]
                        leading-[1.55]
                        text-[#61778D]
                      "
                    >
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <div
                    className="
                      mt-auto
                      pt-6
                    "
                  >
                   <Link
  href={plan.href}
  title={`${plan.cta} — ${plan.name} SEO Plan`}
  className={`
    group/button
    flex
    min-h-[48px]
    w-full
    items-center
    justify-center
    gap-2
    rounded-[13px]
    border
    px-4
    py-3
    text-[11.5px]
    font-medium
    transition-all
    duration-300

    ${
      plan.name === "Growth"
        ? `
            border-[#0B2A52]
            bg-[#0B2A52]
            !text-white
            shadow-[0_10px_26px_rgba(11,42,82,0.12)]
            hover:-translate-y-0.5
            hover:bg-[#123B6A]
            hover:!text-white
            hover:shadow-[0_14px_30px_rgba(11,42,82,0.18)]
          `
        : plan.name === "Scale"
        ? `
            border-[#C6A77A]/55
            bg-[#FFF8EE]
            text-[#0B2A52]
            hover:-translate-y-0.5
            hover:border-[#B58D61]
            hover:bg-[#FCF2E4]
            hover:text-[#9A7043]
            hover:shadow-[0_10px_26px_rgba(181,141,97,0.12)]
          `
        : `
            border-[#8FB2D3]/55
            bg-[#F2F7FB]
            text-[#0B2A52]
            hover:-translate-y-0.5
            hover:border-[#6E9CC6]
            hover:bg-[#EAF3FA]
            hover:text-[#245C91]
            hover:shadow-[0_10px_26px_rgba(78,126,171,0.10)]
          `
    }
  `}
>
  <span className={plan.name === "Growth" ? "!text-white" : ""}>
    {plan.cta}
  </span>

  <ArrowUpRight
    size={13}
    strokeWidth={1.5}
    className={`
      transition-transform
      duration-300
      group-hover/button:translate-x-0.5
      group-hover/button:-translate-y-0.5
      ${plan.name === "Growth" ? "text-white" : ""}
    `}
  />
</Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            FREE REVIEW CTA
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-10

            flex
            max-w-[950px]

            flex-col
            items-center
            justify-between

            gap-5

            rounded-[18px]

            border
            border-[#D5E2EC]

            bg-[linear-gradient(110deg,#EEF7FD_0%,#FFFFFF_55%,#FFF9EF_100%)]

            px-5
            py-5

            text-center

            sm:px-6

            md:flex-row
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              Not Sure Which Plan Fits?
            </p>

            <h3
              style={newYorkFont}
              className="
                mt-1.5

                text-[21px]
                font-medium
                tracking-[-0.025em]
                text-[#0B2A52]

                sm:text-[23px]
              "
            >
              Start With a Free SEO Opportunity Review.
            </h3>

            <p
              className="
                mt-2
                max-w-[610px]

                text-[10px]
                leading-5
                text-[#61778D]
              "
            >
              We&apos;ll review your search visibility, technical
              priorities and growth opportunities before recommending
              the right level of SEO support.
            </p>
          </div>

          <Link
            href="/contact?service=seo&need=seo-opportunity-review#contact-form"
            title="Request a Free SEO Opportunity Review from Sharp Rays"
            className="
              group

              inline-flex
              min-h-[44px]
              w-full
              shrink-0

              items-center
              justify-center
              gap-2

              rounded-[13px]

              border
              border-[#6285AD]/30

              bg-white

              px-5
              py-2.5

              text-[11.5px]
              font-medium
              text-[#0B2A52]

              shadow-[0_7px_22px_rgba(11,42,82,0.06)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_9px_25px_rgba(98,133,173,0.13)]

              sm:w-auto
            "
          >
            Get My Free SEO Review

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </motion.div>

        {/* =====================================================
            SCOPE NOTE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-6
            max-w-[850px]
            border-t
            border-[#0B2A52]/[0.07]
            pt-5
            text-center
          "
        >
          <p
            className="
              text-[9px]
              leading-5
              text-[#61778D]
            "
          >
            Pricing shown is a starting point. Final scope depends on
            website size, competition, technical requirements and SEO
            opportunities.
          </p>

          <p
            className="
              mt-1
              text-[9px]
              leading-5
              text-[#61778D]
            "
          >
            New content creation, development work and third-party costs
            are scoped separately where required.
          </p>
        </div>
      </div>
    </section>
  );
}