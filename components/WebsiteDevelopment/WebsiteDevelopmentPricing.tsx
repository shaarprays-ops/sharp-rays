"use client";



import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import {

  ArrowUpRight,

  Check,

  Code2,

  Layers3,

  ShoppingBag,

  Sparkles,

} from "lucide-react";

import type { LucideIcon } from "lucide-react";



const newYorkFont = {

  fontFamily: '"New York", "", Georgia, serif',

};



const ease = [0.22, 1, 0.36, 1] as const;



/* =========================================================

   TYPES

\========================================================= */



type Plan = {

  name: string;

  price: string;

  tagline: string;

  description: string;

  websiteType: string;

  icon: LucideIcon;

  highlighted?: boolean;

  features: string[];

  bestFor: string;

  cta: string;

};



/* =========================================================

   PRICING DATA

\========================================================= */



const plans: Plan[] = [

  {

    name: "Launch",

    price: "₹7,999",

    tagline: "A Professional Website Without the Large Upfront Cost.",

    description:

      "For startups and small businesses that need a professional website with ongoing technical support.",

    websiteType: "Business · Portfolio · Landing Website",

    icon: Code2,



    features: [

      "Up to 5 Website Pages",

      "Brand-Aligned Website Design",

      "Responsive Website Development",

      "Contact / Enquiry Form",

      "WhatsApp & Call Integration",

      "Basic On-Page SEO Setup",

      "Google Analytics & Search Console",

      "Hosting & SSL Support",

      "Up to 2 Small Content Updates / Month",

      "Technical Maintenance",

      "Email Support",

    ],



    bestFor:

      "Startups, professionals and local businesses that need a reliable website without a large upfront development cost.",



    cta: "Start With Launch",

  },



  {

    name: "Growth",

    price: "₹12,999",

    tagline: "Build a Website That Supports Visibility and Leads.",

    description:

      "For growing businesses that need editable content, stronger search foundations and ongoing website improvements.",

    websiteType: "CMS · Corporate · Service · Lead Generation",

    icon: Layers3,

    highlighted: true,



    features: [

   

      "Up to 10 Website Pages",

      "Custom UI/UX Design",

      "CMS / Editable Content Setup",

      "Blog / Insights Setup",


      "Advanced Lead & Enquiry Forms",

      "Technical SEO Foundations",

  

      "Conversion Event Tracking",

      "Up to 4 Website Updates / Month",

      "Monthly Website Health Review",

    

    ],



    bestFor:

      "Growing businesses that want their website to support credibility, organic visibility and lead generation.",



    cta: "Choose Growth",

  },



  {

    name: "Scale",

    price: "₹17,999",

    tagline: "A More Powerful Website for a Growing Business.",

    description:

      "For businesses that need more functionality, integrations, advanced content structure or starter e-commerce.",

    websiteType: "Advanced · E-commerce · Booking · Integrations",

    icon: ShoppingBag,



    features: [

   

      "Up to 15 Standard Website Pages",

      "Advanced Custom UI/UX",

    

      "CMS & Structured Content",

      "Advanced Interactions & Motion",

      "Advanced Forms & Lead Flows",

      "Up to 2 Standard Integrations",

      "Advanced Technical SEO",

      "Advanced Performance Optimization",

      "Up to 6 Website Updates / Month",

      "Analytics & Conversion Tracking",

      "Monthly Performance Review",

    

    ],



    bestFor:

      "Established businesses, growing brands and smaller e-commerce businesses that need a more advanced managed website.",



    cta: "Choose Scale",

  },

];



/* =========================================================

   CTA BUTTON

\========================================================= */



function PlanButton({
  plan,
}: {
  plan: Plan;
}) {
  const isGrowth = plan.name === "Growth";
  const isScale = plan.name === "Scale";

  const planHref =
    plan.name === "Launch"
      ? "/contact?service=website-development&plan=launch#contact-form"
      : plan.name === "Growth"
      ? "/contact?service=website-development&plan=growth#contact-form"
      : "/contact?service=website-development&plan=scale#contact-form";

  return (
    <Link
      href={planHref}

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



        text-[12px]

        font-semibold



        transition-all

        duration-300



        ${

          isGrowth

            ? `

              border-[#0B2A52]

              bg-[#0B2A52]

              !text-white



              shadow-[0_10px_28px_rgba(11,42,82,0.14)]



              hover:-translate-y-0.5

              hover:bg-[#123B6A]

              hover:!text-white

              hover:shadow-[0_14px_32px_rgba(11,42,82,0.18)]

            `

            : isScale

            ? `

              border-[#C6A77A]/55

              bg-[#FFF8EE]

              text-[#0B2A52]



              hover:-translate-y-0.5

              hover:border-[#B58D61]

              hover:bg-[#FCF1E2]

            `

            : `

              border-[#8FB2D3]/55

              bg-[#F2F7FB]

              text-[#0B2A52]



              hover:-translate-y-0.5

              hover:border-[#6E9CC6]

              hover:bg-[#EAF3FA]

            `

        }

      `}

    >

      <span className={isGrowth ? "!text-white" : ""}>

        {plan.cta}

      </span>



      <ArrowUpRight

        size={14}

        strokeWidth={1.6}

        className={`

          transition-transform

          duration-300



          group-hover/button:translate-x-0.5

          group-hover/button:-translate-y-0.5



          ${isGrowth ? "text-white" : ""}

        `}

      />

    </Link>

  );

}



/* =========================================================

   MAIN COMPONENT

\========================================================= */



export default function WebsiteDevelopmentPricing() {

  const reduceMotion = Boolean(useReducedMotion());



  return (

    <section

      id="website-development-pricing"

      aria-labelledby="website-development-pricing-heading"

      className="

        relative

        overflow-hidden

        bg-white



        py-20

        sm:py-24

        md:py-28

        lg:py-32

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

          overflow-hidden

        "

      >

        <div

          className="

            absolute

            left-1/2

            top-[-250px]



            h-[480px]

            w-[760px]



            -translate-x-1/2



            rounded-full



            bg-[#EDF6FC]/80

            blur-[150px]



            sm:w-[950px]

            lg:w-[1100px]

          "

        />



        <div

          className="

            absolute

            -right-[280px]

            top-[43%]



            hidden

            h-[560px]

            w-[560px]



            rounded-full



            border

            border-[#B79A72]/10



            lg:block

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

          max-w-[1380px]



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

            y: reduceMotion ? 0 : 26,

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

            <span

              className="

                h-px

                w-8



                bg-gradient-to-r

                from-transparent

                to-[#B79A72]

              "

            />



            <span

              className="

                text-[9px]

                font-semibold

                uppercase

                tracking-[0.28em]

                text-[#B79A72]



                sm:text-[10px]

              "

            >

              Website Development Plans

            </span>



            <span

              className="

                h-px

                w-8



                bg-gradient-to-l

                from-transparent

                to-[#B79A72]

              "

            />

          </div>



          <h2

            id="website-development-pricing-heading"

            style={newYorkFont}

            className="

              mx-auto

              mt-5

              max-w-[880px]



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

            A Better Website Without the{" "}

            <span className="text-[#B79A72]">

              Large Upfront Cost.

            </span>

          </h2>



          <p

            className="

              mx-auto

              mt-5

              max-w-[730px]



              text-[13px]

              leading-[1.8]

              text-[#647B98]



              sm:text-[14px]

              md:text-[15px]

            "

          >

            Website design, development, maintenance and ongoing support

            combined into simple monthly plans built around your business.

          </p>

        </motion.div>



        {/* =====================================================

            COMMITMENT STRIP

        ===================================================== */}



        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 14,

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

            mt-7



            flex

            max-w-[710px]

            items-center

            justify-center

            gap-2



            rounded-full



            border

            border-[#C9DDEB]



            bg-[#F5FAFD]



            px-4

            py-2.5



            text-center

          "

        >

          <span

            className="

              h-[5px]

              w-[5px]

              shrink-0



              rounded-full



              bg-[#B79A72]

            "

          />



          <p

            className="

              text-[9.5px]

              font-medium

              leading-5

              text-[#536F87]



              sm:text-[10.5px]

            "

          >

            Initial website design & development included · Minimum 6-month

            commitment for new website builds

          </p>

        </motion.div>



        {/* =====================================================

            PRICING CARDS

        ===================================================== */}



        <div

          className="

            mx-auto

            mt-10



            grid

            max-w-[1160px]

            grid-cols-1



            items-stretch

            gap-5



            sm:mt-12



            md:grid-cols-2



            lg:mt-14

            lg:grid-cols-3



            xl:gap-6

          "

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

                        y: -4,

                      }

                }

                className={`

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

                        border-[#6F9FC4]/60



                        bg-[linear-gradient(180deg,#EFF7FC_0%,#FFFFFF_34%,#FFFFFF_100%)]



                        shadow-[0_20px_52px_rgba(11,42,82,0.10)]

                      `

                      : isScale

                      ? `

                        border-[#DDCCB5]/70



                        bg-[linear-gradient(180deg,#FFFCF8_0%,#FFFFFF_36%,#FFFFFF_100%)]



                        shadow-[0_10px_32px_rgba(11,42,82,0.05)]

                      `

                      : `

                        border-[#D5E3ED]



                        bg-[linear-gradient(180deg,#F7FBFD_0%,#FFFFFF_36%,#FFFFFF_100%)]



                        shadow-[0_10px_32px_rgba(11,42,82,0.05)]

                      `

                  }



                  ${

                    isScale

                      ? "md:col-span-2 lg:col-span-1"

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

                        ? "bg-gradient-to-r from-[#0B2A52] via-[#6C9DC4] to-[#B79A72]"

                        : isScale

                        ? "bg-gradient-to-r from-transparent via-[#B79A72]/75 to-transparent"

                        : "bg-gradient-to-r from-transparent via-[#78A6C9]/70 to-transparent"

                    }

                  `}

                />



                {/* MOST POPULAR */}



                {isGrowth && (

                  <div

                    className="

                      absolute

                      right-4

                      top-4



                      z-20



                      flex

                      items-center

                      gap-1.5



                      rounded-full



                      bg-[#0B2A52]



                      px-2.5

                      py-1.5



                      shadow-[0_7px_18px_rgba(11,42,82,0.14)]

                    "

                  >

                    <Sparkles

                      size={9}

                      strokeWidth={1.8}

                      className="text-white"

                    />



                    <span

                      className="

                        text-[7px]

                        font-bold

                        uppercase

                        tracking-[0.13em]

                        text-white

                      "

                    >

                      Most Popular

                    </span>

                  </div>

                )}



                {/* CARD BODY */}



                <div

                  className="

                    flex

                    h-full

                    flex-1

                    flex-col



                    p-5



                    sm:p-6

                  "

                >

                  {/* PLAN */}



                  <div className="flex items-center gap-3">

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

                          isGrowth

                            ? "bg-[#0B2A52] text-white"

                            : isScale

                            ? "bg-[#FFF2DF] text-[#A97C52]"

                            : "bg-[#E8F3FA] text-[#0B2A52]"

                        }

                      `}

                    >

                      <Icon

                        size={15}

                        strokeWidth={1.65}

                      />

                    </span>



                    <div>

                      <p

                        className="

                          text-[9px]

                          font-bold

                          uppercase

                          tracking-[0.22em]

                          text-[#B79A72]

                        "

                      >

                        {plan.name}

                      </p>



                      <p

                        className="

                          mt-0.5



                          text-[7px]

                          font-semibold

                          uppercase

                          tracking-[0.14em]

                          text-[#8194A7]

                        "

                      >

                        Website Subscription

                      </p>

                    </div>

                  </div>



                  {/* TITLE */}



                  <h3

                    style={newYorkFont}

                    className="

                      mt-5



                      min-h-[52px]



                      text-[22px]

                      font-medium

                      leading-[1.08]

                      tracking-[-0.03em]

                      text-[#0B2A52]



                      sm:text-[24px]



                      lg:min-h-[58px]

                    "

                  >

                    {plan.tagline}

                  </h3>



                  {/* DESCRIPTION */}



                  <p

                    className="

                      mt-3



                      min-h-[64px]



                      text-[11.5px]

                      leading-[1.65]

                      text-[#657C95]



                      sm:text-[12px]



                      lg:min-h-[70px]

                    "

                  >

                    {plan.description}

                  </p>



                  {/* PRICE */}



                 



                  {/* WEBSITE TYPE */}



                  <div

                    className="

                      mt-4



                      rounded-[10px]



                      border

                      border-[#D9E6EE]



                      bg-white/75



                      px-3

                      py-2.5

                    "

                  >

                    <p

                      className="

                        text-[7px]

                        font-bold

                        uppercase

                        tracking-[0.16em]

                        text-[#B79A72]

                      "

                    >

                      Website Type

                    </p>



                    <p

                      className="

                        mt-1



                        text-[10px]

                        font-medium

                        leading-[1.45]

                        text-[#526E87]

                      "

                    >

                      {plan.websiteType}

                    </p>

                  </div>



                  {/* FEATURES */}



                  <div className="mt-5">

                    <p

                      className="

                        text-[8px]

                        font-bold

                        uppercase

                        tracking-[0.19em]

                        text-[#0B2A52]

                      "

                    >

                      What&apos;s Included

                    </p>



                    <div className="mt-3.5 space-y-[9px]">

                      {plan.features.map((feature) => (

                        <div

                          key={feature}

                          className="

                            flex

                            items-start

                            gap-2.5

                          "

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

                                  ? "bg-[#E2F0F9] text-[#0B2A52]"

                                  : isScale

                                  ? "bg-[#F8F0E5] text-[#9C744A]"

                                  : "bg-[#EAF4FB] text-[#3872A3]"

                              }

                            `}

                          >

                            <Check

                              size={9}

                              strokeWidth={2}

                            />

                          </span>



                          <span

                            className="

                              text-[11px]

                              leading-[1.48]

                              text-[#617991]



                              sm:text-[11.5px]

                            "

                          >

                            {feature}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* FLEX SPACER */}



                  <div className="flex-1" />



                  {/* BEST FOR */}



                  <div

                    className="

                      mt-6



                      border-t

                      border-[#DCE6EF]



                      pt-4

                    "

                  >

                   

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

            ECOMMERCE NOTE

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

          className="

            mx-auto

            mt-6



            max-w-[1030px]



            rounded-[14px]



            border

            border-[#E3D1B8]/70



            bg-[#FFF9F1]



            px-4

            py-3.5



            text-center



            sm:px-6

          "

        >

          <p

            className="

              text-[10px]

              leading-[1.7]

              text-[#687F96]



              sm:text-[10.5px]

            "

          >

            <strong className="font-semibold text-[#0B2A52]">

              Starter e-commerce can be included within the Scale plan

            </strong>{" "}

            where the agreed scope covers a modest catalogue, product pages,

            cart, checkout, payment gateway and basic shipping configuration.

          </p>

        </motion.div>



        {/* =====================================================

            CUSTOM DEVELOPMENT

        ===================================================== */}



        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 26,

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

          className="

            relative



            mx-auto

            mt-10



            max-w-[1160px]



            overflow-hidden



            rounded-[22px]



            border

            border-[#CFE0ED]



            bg-[linear-gradient(105deg,#F1F8FC_0%,#FFFFFF_52%,#FFF9F1_100%)]



            px-5

            py-6



            sm:px-7

            sm:py-7



            lg:px-8

          "

        >

          <div

            aria-hidden="true"

            className="

              pointer-events-none



              absolute

              -right-[110px]

              -top-[120px]



              h-[260px]

              w-[260px]



              rounded-full



              border

              border-[#B79A72]/15

            "

          />



          <div

            className="

              relative

              z-10



              flex

              flex-col

              gap-6



              lg:flex-row

              lg:items-center

              lg:justify-between

              lg:gap-12

            "

          >

            <div className="max-w-[750px]">

              <p

                className="

                  text-[8px]

                  font-bold

                  uppercase

                  tracking-[0.22em]

                  text-[#B79A72]

                "

              >

                Custom Development

              </p>



              <h3

                style={newYorkFont}

                className="

                  mt-3



                  text-[25px]

                  font-medium

                  leading-[1.1]

                  tracking-[-0.035em]

                  text-[#0B2A52]



                  sm:text-[29px]

                  lg:text-[31px]

                "

              >

                Need More Advanced Functionality?

              </h3>



              <p

                className="

                  mt-3



                  max-w-[700px]



                  text-[12.5px]

                  leading-[1.75]

                  text-[#657C95]



                  sm:text-[13.5px]

                "

              >

                Large e-commerce stores, marketplaces, dashboards, customer

                portals, memberships, complex booking systems and custom web

                applications require a tailored development scope.

              </p>



              <p

                className="

                  mt-4



                  text-[8px]

                  font-semibold

                  uppercase

                  tracking-[0.12em]

                  text-[#56758F]

                "

              >

                Large E-commerce · Marketplace · Portal · Membership · Web App

              </p>

            </div>



            <div

              className="

                shrink-0



                lg:text-right

              "

            >

              <p

                className="

                  text-[7px]

                  font-bold

                  uppercase

                  tracking-[0.19em]

                  text-[#B79A72]

                "

              >

                Pricing

              </p>



              <p

                style={newYorkFont}

                className="

                  mt-1



                  text-[25px]

                  font-medium

                  text-[#0B2A52]

                "

              >

                Custom Quote

              </p>



              <Link

                href="/contact?service=website-development&need=custom-web-development#contact-form"

                className="

                  group



                  mt-4



                  inline-flex

                  min-h-[46px]



                  items-center

                  justify-center

                  gap-2



                  rounded-[13px]



                  border

                  border-[#0B2A52]



                  bg-[#f2f3f4]



                  px-5

                  py-2.5



                  text-[11.5px]

                  font-semibold

                  text-white



                  shadow-[0_9px_24px_rgba(11,42,82,0.13)]



                  transition-all

                  duration-300



                  hover:-translate-y-0.5

                  hover:bg-[#123B6A]

                "

              >

                Request a Custom Quote



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

            </div>

          </div>

        </motion.div>



        {/* =====================================================

            PLAN DETAILS

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

            duration: reduceMotion ? 0 : 0.7,

            ease,

          }}

          className="

            mx-auto

            mt-10



            max-w-[1160px]



            rounded-[20px]



            border

            border-[#D8E4EE]



            bg-white



            px-5

            py-6



            shadow-[0_10px_35px_rgba(11,42,82,0.04)]



            sm:px-7

            sm:py-7

          "

        >

          <div

            className="

              grid

              gap-6



              md:grid-cols-2

              md:gap-10

            "

          >

            {/* INCLUDED */}



            <div>

              <p

                className="

                  text-[8px]

                  font-bold

                  uppercase

                  tracking-[0.2em]

                  text-[#B79A72]

                "

              >

                Monthly Plans Include

              </p>



              <p

                className="

                  mt-3



                  text-[12px]

                  leading-[1.75]

                  text-[#657C95]



                  sm:text-[13px]

                "

              >

                Initial website design and development, hosting support,

                technical maintenance and the agreed number of ongoing website

                updates are included during your active plan.

              </p>

            </div>



            {/* SEPARATE */}



            <div

              className="

                border-t

                border-[#DCE6EF]



                pt-6



                md:border-l

                md:border-t-0

                md:pl-10

                md:pt-0

              "

            >

              <p

                className="

                  text-[8px]

                  font-bold

                  uppercase

                  tracking-[0.2em]

                  text-[#B79A72]

                "

              >

                Quoted Separately

              </p>



              <p

                className="

                  mt-3



                  text-[12px]

                  leading-[1.75]

                  text-[#657C95]



                  sm:text-[13px]

                "

              >

                Domain registration, premium software, paid plugins, paid APIs,

                third-party subscriptions, professional photography or video,

                full copywriting and complex custom development.

              </p>

            </div>

          </div>



          {/* OWNERSHIP */}



          <div

            className="

              mt-6



              border-t

              border-[#DCE6EF]



              pt-5

            "

          >

            <p

              className="

                text-[10px]

                leading-[1.7]

                text-[#71869A]



                sm:text-[11px]

              "

            >

              <strong className="font-semibold text-[#0B2A52]">

                Clear ownership and transfer terms.

              </strong>{" "}

              Your domain and business content remain yours. Website ownership,

              hosting, cancellation and transfer terms are defined clearly in

              your Sharp Rays proposal before work begins.

            </p>

          </div>

        </motion.div>



        {/* =====================================================

            END NOTE

        ===================================================== */}



        <div

          className="

            mx-auto

            mt-8



            flex

            max-w-[560px]

            items-center

            gap-3

          "

        >

          <span

            className="

              h-px

              flex-1



              bg-gradient-to-r

              from-transparent

              to-[#B79A72]/45

            "

          />



          <span

            className="

              shrink-0



              text-center



              text-[8px]

              font-semibold

              uppercase

              tracking-[0.18em]

              text-[#8295A8]

            "

          >

            Design · Develop · Maintain · Grow

          </span>



          <span

            className="

              h-px

              flex-1



              bg-gradient-to-l

              from-transparent

              to-[#B79A72]/45

            "

          />

        </div>

      </div>

    </section>

  );

}