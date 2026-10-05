"use client";



import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import {

  ArrowUpRight,

  Check,

  Info,

  SlidersHorizontal,

  Sparkles,

} from "lucide-react";



/* =========================================================

   FONT

========================================================= */



const newYorkFont = {

  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',

};



const ease = [0.22, 1, 0.36, 1] as const;



/* =========================================================

   PRICING DATA

========================================================= */



const plans = [

  {

    name: "Starter",

    price: "₹14,999",

    tagline: "Build a Consistent Social Presence.",

    description:

      "For startups and small businesses that need a professional and reliable social media presence.",

    highlighted: false,

    inclusions: [

      "1 Social Media Platform",

      "Social Media Strategy",

      "Monthly Content Calendar",

      "Up to 12 Total Content Pieces / Month",

      "Includes 2 Edited Reels / Short Videos",

      "Static Posts & Carousels",

      "Caption Writing",

      "Publishing & Scheduling",

      "Basic Profile Optimization",

      "Monthly Performance Report",

    ],

    bestFor:

      "Startups, local businesses and smaller brands that want consistent, professional social media without managing everything themselves.",

    cta: "Start With Starter",

  },



  {

    name: "Growth",

    price: "₹29,999",

    tagline: "Turn Content Into a Connected Growth System.",

    description:

      "For growing businesses that need stronger creative, more frequent content and active management across their key platforms.",

    highlighted: true,

    inclusions: [

      "Up to 2 Social Media Platforms",

      "Monthly Social Media Strategy",

      "Monthly Content Calendar",

      "Up to 20 Total Content Pieces / Month",

      "Includes 4–6 Edited Reels / Short Videos",

      "Static Posts, Carousels & Stories",

      "Caption & Content Copywriting",

      "Enhanced Creative Direction",

      "Publishing & Scheduling",

      "Community Engagement Support",

      "Monthly Content Optimization",

      "Performance & Growth Reporting",

      "Monthly Strategy Review",

    ],

    bestFor:

      "Growing brands that want stronger visibility, better engagement and a more consistent social media system.",

    cta: "Choose Growth",

  },



  {

    name: "Scale",

    price: "₹49,999",

    tagline: "Build a Complete Social Media Growth Engine.",

    description:

      "For brands that need broader strategy, higher content volume, campaign support and deeper ongoing social media management.",

    highlighted: false,

    inclusions: [

      "Up to 3 Social Media Platforms",

      "Advanced Social Media Strategy",

      "Monthly Campaign & Content Planning",

      "Up to 30 Total Content Pieces / Month",

      "Includes 8–10 Edited Reels / Short Videos",

      "Static Posts, Carousels, Stories & Campaign Creative",

      "Caption & Content Copywriting",

      "Advanced Creative Direction",

      "Publishing & Scheduling",

      "Active Community Management",

      "Campaign & Launch Content",

      "Competitor & Content Opportunity Review",

      "Monthly Performance Analysis",

      "Monthly Growth Strategy Review",

      "Priority Support",

    ],

    bestFor:

      "Growing and established brands that need a broader outsourced social media function without building a complete in-house team.",

    cta: "Choose Scale",

  },

];



/* =========================================================

   SCOPE DATA

========================================================= */



const quoteFactors = [

  "Number of platforms",

  "Monthly content volume",

  "Reels and video requirements",

  "Creative complexity",

  "Community management",

  "Campaign frequency",

  "Approval workflow",

  "Reporting requirements",

];



const separatelyQuoted = [

  "Advertising spend",

  "Paid media management",

  "Influencer collaborations",

  "Professional shoots",

  "Models or production crews",

  "Travel expenses",

  "Licensed media",

  "Third-party tools",

];



/* =========================================================

   GENERAL BUTTON

========================================================= */



function GlassButton({

  href,

  label,

}: {

  href: string;

  label: string;

}) {

  return (

    <Link

      href={href}

      title={label}

      style={newYorkFont}

      className="

        group

        relative



        inline-flex

        min-h-[47px]



        items-center

        justify-center



        overflow-hidden



        rounded-[14px]



        border

        border-[#8FB2D3]/50



        bg-[#F3F8FC]



        px-5

        py-[11px]



        text-[13px]

        font-medium

        tracking-[-0.01em]

        text-[#0B2A52]



        shadow-[0_7px_24px_rgba(11,42,82,0.05)]



        transition-all

        duration-300



        hover:-translate-y-[2px]

        hover:border-[#719CC5]

        hover:bg-[#EAF4FB]

        hover:shadow-[0_10px_30px_rgba(83,132,177,0.12)]



        sm:min-h-[49px]

        sm:px-6

        sm:text-[14px]

      "

    >

      <span className="relative z-10 whitespace-nowrap">

        {label}

      </span>



      <ArrowUpRight

        size={14}

        strokeWidth={1.5}

        className="

          relative

          z-10

          ml-2



          transition-transform

          duration-300



          group-hover:translate-x-0.5

          group-hover:-translate-y-0.5

        "

      />

    </Link>

  );

}



/* =========================================================

   PLAN CTA

========================================================= */



function PlanButton({

  planName,

  label,

}: {

  planName: string;

  label: string;

}) {

  const isGrowth = planName === "Growth";

  const isScale = planName === "Scale";



  const planHref =

    planName === "Starter"

      ? "/contact?service=social-media-marketing&plan=starter"

      : planName === "Growth"

      ? "/contact?service=social-media-marketing&plan=growth"

      : "/contact?service=social-media-marketing&plan=scale";



  return (

    <Link

      href={planHref}

      title={`${label} — ${planName} Social Media Marketing Plan`}

      className={`

        group/button



        flex

        min-h-[49px]

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

              hover:text-[#8F683E]



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

      <span className={isGrowth ? "!text-white" : ""}>

        {label}

      </span>



      <ArrowUpRight

        size={14}

        strokeWidth={1.5}

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

   MAIN SECTION

========================================================= */



export default function SocialMediaPricing() {

  const reduceMotion = Boolean(useReducedMotion());



  return (

    <section

      id="social-media-pricing"

      aria-labelledby="social-media-pricing-heading"

      className="

        relative

        overflow-hidden

        bg-white



        py-20



        sm:py-24

        md:py-28

        lg:py-32

        xl:py-36

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

            top-[-230px]



            h-[450px]

            w-[720px]



            -translate-x-1/2



            rounded-full



            bg-[#EDF6FC]/75

            blur-[145px]



            sm:w-[900px]

            lg:w-[1100px]

          "

        />



        <div

          className="

            absolute

            -right-[300px]

            top-[41%]



            hidden



            h-[620px]

            w-[620px]



            rounded-full



            border

            border-[#B79A72]/10



            lg:block

          "

        />



        <div

          className="

            absolute

            -left-[260px]

            bottom-[8%]



            hidden



            h-[520px]

            w-[520px]



            rounded-full



            bg-[#F0F7FC]/60

            blur-[140px]



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

          max-w-[1450px]



          px-5

          sm:px-7

          md:px-8

          lg:px-12

          xl:px-16

        "

      >

        {/* =====================================================

            INTRO

        ===================================================== */}



        <motion.div

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

            amount: 0.25,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.8,

            ease,

          }}

          className="

            mx-auto

            max-w-[930px]

            text-center

          "

        >

          {/* EYEBROW */}



          <div

            className="

              flex

              items-center

              justify-center

              gap-3



              sm:gap-4

            "

          >

            <span

              className="

                h-px

                w-7



                bg-gradient-to-r

                from-transparent

                to-[#B79A72]



                sm:w-10

              "

            />



            <span

              className="

                text-[9px]

                font-semibold

                uppercase

                tracking-[0.26em]

                text-[#B79A72]



                sm:text-[10px]

                sm:tracking-[0.34em]

              "

            >

              Social Media Marketing Pricing

            </span>



            <span

              className="

                h-px

                w-7



                bg-gradient-to-l

                from-transparent

                to-[#B79A72]



                sm:w-10

              "

            />

          </div>



          {/* HEADING */}



          <h2

            id="social-media-pricing-heading"

            style={newYorkFont}

            className="

              mx-auto

              mt-6

              max-w-[900px]



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

            Social Media Support Built Around{" "}

            <span className="text-[#B79A72]">

              Where Your Brand Is Going.

            </span>

          </h2>



          {/* DESCRIPTION */}



          <p

            className="

              mx-auto

              mt-6

              max-w-[730px]



              text-[14px]

              leading-[1.8]

              text-[#647B98]



              sm:text-[15px]

              lg:text-[16px]

            "

          >

            Choose the level of strategy, content and ongoing management your

            business needs today, with room to scale as your social presence

            grows.

          </p>

        </motion.div>



        {/* =====================================================

            PRICING CARDS

        ===================================================== */}



        <div

          className="

            mx-auto

            mt-12



            grid

            w-full

            max-w-[1220px]

            grid-cols-1



            items-stretch

            gap-5



            sm:mt-14



            md:mt-16

            md:grid-cols-2



            lg:mt-20

            lg:grid-cols-3



            xl:gap-6

          "

        >

          {plans.map((plan, index) => {

            const isGrowth = plan.name === "Growth";

            const isScale = plan.name === "Scale";



            return (

              <motion.article

                key={plan.name}

                initial={{

                  opacity: 0,

                  y: reduceMotion ? 0 : 34,

                }}

                whileInView={{

                  opacity: 1,

                  y: 0,

                }}

                viewport={{

                  once: true,

                  amount: 0.1,

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

                  group

                  relative



                  flex

                  h-full

                  min-w-0

                  flex-col



                  overflow-hidden



                  rounded-[22px]



                  border



                  transition-[transform,box-shadow,border-color]

                  duration-500

                  ease-out



                  sm:rounded-[24px]



                  ${

                    isGrowth

                      ? `

                        border-[#6B99C0]/55



                        bg-[linear-gradient(180deg,#F0F7FC_0%,#FFFFFF_34%,#FFFFFF_100%)]



                        shadow-[0_20px_55px_rgba(11,42,82,0.10)]

                      `

                      : isScale

                      ? `

                        border-[#D8C5A9]/60



                        bg-[linear-gradient(180deg,#FFFDF9_0%,#FFFFFF_36%,#FFFFFF_100%)]



                        shadow-[0_12px_38px_rgba(11,42,82,0.055)]



                        hover:border-[#B79A72]/55

                        hover:shadow-[0_18px_48px_rgba(11,42,82,0.08)]

                      `

                      : `

                        border-[#D5E3ED]



                        bg-[linear-gradient(180deg,#F8FBFD_0%,#FFFFFF_36%,#FFFFFF_100%)]



                        shadow-[0_12px_38px_rgba(11,42,82,0.055)]



                        hover:border-[#9BBBD2]/60

                        hover:shadow-[0_18px_48px_rgba(11,42,82,0.08)]

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

                        ? "bg-gradient-to-r from-[#0B2A52] via-[#6A9BC5] to-[#B79A72]"

                        : isScale

                        ? "bg-gradient-to-r from-transparent via-[#B79A72]/75 to-transparent"

                        : "bg-gradient-to-r from-transparent via-[#7EA6C8]/65 to-transparent"

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



                      px-3

                      py-1.5



                      text-white



                      shadow-[0_8px_20px_rgba(11,42,82,0.12)]



                      sm:right-5

                      sm:top-5

                    "

                  >

                    <Sparkles

                      size={10}

                      strokeWidth={1.8}

                      className="text-white"

                    />



                    <span

                      className="

                        text-[7px]

                        font-bold

                        uppercase

                        tracking-[0.14em]

                        text-white



                        sm:text-[8px]

                      "

                    >

                      Most Popular

                    </span>

                  </div>

                )}



                {/* CARD CONTENT */}



                <div

                  className="

                    flex

                    h-full

                    flex-1

                    flex-col



                    p-5



                    sm:p-6

                    lg:p-6

                    xl:p-7

                  "

                >

                  {/* PLAN */}



                  <p

                    className="

                      text-[9px]

                      font-bold

                      uppercase

                      tracking-[0.25em]

                      text-[#B79A72]

                    "

                  >

                    {plan.name}

                  </p>



                  {/* TITLE */}



                  <h3

                    style={newYorkFont}

                    className="

                      mt-5



                      min-h-[52px]



                      max-w-[315px]



                      text-[23px]

                      font-medium

                      leading-[1.08]

                      tracking-[-0.035em]

                      text-[#0B2A52]



                      sm:text-[25px]



                      lg:min-h-[58px]

                      lg:text-[25px]



                      xl:text-[27px]

                    "

                  >

                    {plan.tagline}

                  </h3>



                  {/* DESCRIPTION */}



                  <p

                    className="

                      mt-3.5



                      min-h-[78px]



                      text-[12.5px]

                      leading-[1.7]

                      text-[#657C95]



                      sm:text-[13px]



                      lg:min-h-[88px]

                    "

                  >

                    {plan.description}

                  </p>



                  {/* PRICE */}





















                  {/* INCLUDED */}



                  <div className="mt-5">

                    <p

                      className="

                        text-[8px]

                        font-bold

                        uppercase

                        tracking-[0.2em]

                        text-[#0B2A52]

                      "

                    >

                      What&apos;s Included

                    </p>



                    <div

                      className="

                        mt-4

                        space-y-[10px]

                      "

                    >

                      {plan.inclusions.map((item) => (

                        <div

                          key={item}

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

                              h-[18px]

                              w-[18px]

                              shrink-0



                              items-center

                              justify-center



                              rounded-full



                              ${

                                isGrowth

                                  ? "bg-[#E3F0F9] text-[#0B2A52]"

                                  : isScale

                                  ? "bg-[#F8F0E5] text-[#9D754B]"

                                  : "bg-[#EAF4FB] text-[#376C9A]"

                              }

                            `}

                          >

                            <Check

                              size={10}

                              strokeWidth={2}

                            />

                          </span>



                          <span

                            className="

                              text-[12px]

                              leading-[1.52]

                              text-[#617991]



                              sm:text-[12.5px]

                            "

                          >

                            {item}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>



                  {/* FLEX SPACE */}



                  <div className="flex-1" />



                  {/* BEST FOR */}



                  <div

                    className="

                      mt-7



                      border-t

                      border-[#DCE6EF]



                      pt-5

                    "

                  >

                    <div

                      className="

                        border-l

                        border-[#B79A72]



                        pl-3

                      "

                    >

                      <p

                        className="

                          text-[8px]

                          font-bold

                          uppercase

                          tracking-[0.19em]

                          text-[#B79A72]

                        "

                      >

                        Best For

                      </p>



                      <p

                        className="

                          mt-2



                          min-h-[62px]



                          text-[11.5px]

                          leading-[1.65]

                          text-[#6B8198]



                          sm:text-[12px]

                        "

                      >

                        {plan.bestFor}

                      </p>

                    </div>

                  </div>



                  {/* CTA */}



                  <div className="pt-6">

                    <PlanButton

                      planName={plan.name}

                      label={plan.cta}

                    />

                  </div>

                </div>

              </motion.article>

            );

          })}

        </div>



        {/* =====================================================

            IMPORTANT SCOPE CLARIFICATION

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

          className="

            mx-auto

            mt-6



            max-w-[1060px]



            rounded-[14px]



            border

            border-[#D6E4ED]



            bg-[#F7FBFD]



            px-4

            py-3.5



            text-center



            sm:px-6

          "

        >

          <p

            className="

              text-[10px]

              leading-[1.75]

              text-[#617991]



              sm:text-[11px]

            "

          >

            <strong className="font-semibold text-[#0B2A52]">

              Content quantities include the listed Reels / short-form videos.

            </strong>{" "}

            Professional shoots, paid advertising, influencer collaborations,

            talent, travel and third-party production costs are quoted

            separately.

          </p>

        </motion.div>



        {/* =====================================================

            CUSTOM PLAN

        ===================================================== */}



        <motion.div

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

            amount: 0.2,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.75,

            ease,

          }}

          className="

            relative



            mx-auto

            mt-12



            w-full

            max-w-[1180px]



            overflow-hidden



            rounded-[22px]



            border

            border-[#CFE0ED]



            bg-[linear-gradient(105deg,#EEF7FD_0%,#F8FBFE_52%,#FFF9F3_100%)]



            p-5



            sm:mt-14

            sm:rounded-[24px]

            sm:p-7



            lg:mt-16

            lg:p-8

          "

        >

          {/* DECORATION */}



          <div

            aria-hidden="true"

            className="

              pointer-events-none

              absolute

              right-[-100px]

              top-[-120px]



              h-[250px]

              w-[250px]



              rounded-full



              border

              border-[#B79A72]/20

            "

          />



          <div

            className="

              relative

              z-10



              flex

              flex-col



              gap-7



              lg:flex-row

              lg:items-center

              lg:justify-between

              lg:gap-10

            "

          >

            {/* COPY */}



            <div className="max-w-[760px]">

              <div

                className="

                  flex

                  items-center

                  gap-2

                "

              >

                <SlidersHorizontal

                  size={14}

                  strokeWidth={1.6}

                  className="text-[#B79A72]"

                />



                <span

                  className="

                    text-[8px]

                    font-bold

                    uppercase

                    tracking-[0.22em]

                    text-[#B79A72]



                    sm:text-[9px]

                  "

                >

                  Need Something Different?

                </span>

              </div>



              <h3

                style={newYorkFont}

                className="

                  mt-3.5



                  max-w-[720px]



                  text-[25px]

                  font-medium

                  leading-[1.12]

                  tracking-[-0.035em]

                  text-[#0B2A52]



                  sm:text-[29px]

                  lg:text-[32px]

                "

              >

                Your Social Media Plan Does Not Have to Fit Inside a Package.

              </h3>



              <p

                className="

                  mt-3.5

                  max-w-[690px]



                  text-[13px]

                  leading-[1.75]

                  text-[#657C95]



                  sm:text-[14px]

                "

              >

                Not every business needs the same number of platforms, posts or

                videos. If your requirements sit between packages, we can build

                a custom social media marketing plan around what your business

                actually needs.

              </p>

            </div>



            {/* CTA */}



            <div className="shrink-0">

              <GlassButton

                href="/contact?service=social-media-marketing&need=custom-plan"

                label="Get a Custom Proposal"

              />

            </div>

          </div>

        </motion.div>



        {/* =====================================================

            PRICING & SCOPE

        ===================================================== */}



        <motion.div

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



            w-full

            max-w-[1180px]



            overflow-hidden



            rounded-[22px]



            border

            border-[#D8E4EE]



            bg-white



            shadow-[0_12px_40px_rgba(11,42,82,0.055)]



            sm:mt-12

            sm:rounded-[24px]



            lg:mt-14

          "

        >

          {/* BACKGROUND */}



          <div

            aria-hidden="true"

            className="

              pointer-events-none

              absolute

              inset-0



              bg-[linear-gradient(110deg,#F5FAFE_0%,#FFFFFF_50%,#FFF9F3_100%)]

            "

          />



          {/* DECORATIVE CIRCLE */}



          <div

            aria-hidden="true"

            className="

              pointer-events-none

              absolute

              -right-[110px]

              -top-[120px]



              h-[280px]

              w-[280px]



              rounded-full



              border

              border-[#B79A72]/15

            "

          />



          <div

            className="

              relative

              z-10



              p-5



              sm:p-7

              md:p-8

              lg:p-9

            "

          >

            {/* TOP */}



            <div

              className="

                flex

                flex-col

                gap-5



                md:flex-row

                md:items-start

                md:justify-between

                md:gap-10

              "

            >

              <div className="max-w-[720px]">

                <div

                  className="

                    flex

                    items-center

                    gap-2.5

                  "

                >

                  <span

                    className="

                      flex

                      h-9

                      w-9

                      shrink-0



                      items-center

                      justify-center



                      rounded-full



                      bg-[#EDF5FB]

                      text-[#0B2A52]

                    "

                  >

                    <Info

                      size={15}

                      strokeWidth={1.7}

                    />

                  </span>



                  <span

                    className="

                      text-[8px]

                      font-bold

                      uppercase

                      tracking-[0.22em]

                      text-[#B79A72]



                      sm:text-[9px]

                    "

                  >

                    Pricing & Scope

                  </span>

                </div>



                <h3

                  style={newYorkFont}

                  className="

                    mt-4

                    max-w-[700px]



                    text-[25px]

                    font-medium

                    leading-[1.1]

                    tracking-[-0.035em]

                    text-[#0B2A52]



                    sm:text-[29px]

                    md:text-[31px]

                  "

                >

                  Clear Scope Before the First Post Goes Live.

                </h3>



                <p

                  className="

                    mt-4

                    max-w-[700px]



                    text-[13px]

                    leading-[1.75]

                    text-[#657C95]



                    sm:text-[14px]

                  "

                >

                  Our packages are starting points. Final pricing is confirmed

                  after we understand your platforms, monthly content volume,

                  video requirements, community management needs and the level

                  of ongoing support your business requires.

                </p>

              </div>



              <div className="shrink-0">

                <GlassButton

             href="/contact?service=social-media-marketing"

                  label="Talk About My Social Media"

                />

              </div>

            </div>



            {/* =================================================

                PRICING DETAILS

            ================================================= */}



            <div

              className="

                mt-7



                grid

                gap-7



                border-t

                border-[#DCE6EF]



                pt-7



                md:grid-cols-2

                md:gap-10



                lg:mt-8

                lg:gap-14

                lg:pt-8

              "

            >

              {/* WHAT CAN CHANGE */}



              <div>

                <p

                  className="

                    text-[8px]

                    font-bold

                    uppercase

                    tracking-[0.2em]

                    text-[#B79A72]



                    sm:text-[9px]

                  "

                >

                  What Can Change Your Quote

                </p>



                <div

                  className="

                    mt-4



                    grid

                    gap-x-5

                    gap-y-2.5



                    sm:grid-cols-2

                  "

                >

                  {quoteFactors.map((item) => (

                    <div

                      key={item}

                      className="

                        flex

                        items-start

                        gap-2.5

                      "

                    >

                      <span

                        className="

                          mt-[7px]



                          h-[5px]

                          w-[5px]

                          shrink-0



                          rounded-full



                          bg-[#B79A72]

                        "

                      />



                      <span

                        className="

                          text-[12px]

                          leading-[1.6]

                          text-[#687F96]



                          sm:text-[12.5px]

                        "

                      >

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>



              {/* QUOTED SEPARATELY */}



              <div

                className="

                  border-t

                  border-[#DCE6EF]



                  pt-7



                  md:border-l

                  md:border-t-0

                  md:pl-10

                  md:pt-0



                  lg:pl-14

                "

              >

                <p

                  className="

                    text-[8px]

                    font-bold

                    uppercase

                    tracking-[0.2em]

                    text-[#B79A72]



                    sm:text-[9px]

                  "

                >

                  Usually Quoted Separately

                </p>



                <div

                  className="

                    mt-4



                    grid

                    gap-x-5

                    gap-y-2.5



                    sm:grid-cols-2

                  "

                >

                  {separatelyQuoted.map((item) => (

                    <div

                      key={item}

                      className="

                        flex

                        items-start

                        gap-2.5

                      "

                    >

                      <span

                        className="

                          mt-[7px]



                          h-[5px]

                          w-[5px]

                          shrink-0



                          rounded-full



                          bg-[#B79A72]

                        "

                      />



                      <span

                        className="

                          text-[12px]

                          leading-[1.6]

                          text-[#687F96]



                          sm:text-[12.5px]

                        "

                      >

                        {item}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>



            {/* =================================================

                FINAL SCOPE

            ================================================= */}



            <div

              className="

                mt-7



                flex

                flex-col

                gap-3



                border-t

                border-[#DCE6EF]



                pt-6



                sm:flex-row

                sm:items-center

                sm:justify-between

                sm:gap-6

              "

            >

              <p

                className="

                  max-w-[820px]



                  text-[12px]

                  leading-[1.7]

                  text-[#657C95]



                  sm:text-[13px]

                "

              >

                Before work begins, your Sharp Rays proposal confirms the

                platforms, deliverables, responsibilities, approval process,

                exclusions and monthly investment — so both sides know exactly

                what is included.

              </p>



              <p

                className="

                  shrink-0



                  text-[8px]

                  font-bold

                  uppercase

                  tracking-[0.18em]

                  text-[#0B2A52]



                  sm:text-right

                "

              >

                Clear Scope. No Guesswork.

              </p>

            </div>

          </div>

        </motion.div>



        {/* =====================================================

            END NOTE

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

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.65,

            delay: reduceMotion ? 0 : 0.1,

            ease,

          }}

          className="

            mx-auto

            mt-8



            flex

            max-w-[650px]

            items-center

            gap-3



            sm:mt-10

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

              tracking-[0.16em]

              text-[#8295A8]



              sm:text-[9px]

              sm:tracking-[0.24em]

            "

          >

            Strategy · Content · Community · Growth

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

        </motion.div>

      </div>

    </section>

  );

}