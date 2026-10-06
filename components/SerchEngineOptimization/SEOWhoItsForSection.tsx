"use client";



import Image from "next/image";

import type { LucideIcon } from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

import {

  BarChart3,

  FileSearch,

  ListChecks,

  RefreshCw,

  Settings2,

  UsersRound,

} from "lucide-react";



const ease = [0.22, 1, 0.36, 1] as const;



/* ============================================================

   TYPES

============================================================ */



type ProcessStep = {

  number: string;

  label: string;

  title: string;

  description: string;

  extra?: string;

  icon: LucideIcon;

  image: string;

  imageAlt: string;

  imageTitle: string;

  tone: "blue" | "cream";

};



/* ============================================================

   DATA

============================================================ */



const steps: ProcessStep[] = [

  {

    number: "01",

    label: "DISCOVER",

    title: "Understand Your Business",

    description:

      "We discuss your services, audience, website, competitors, objectives and current search performance.",

    icon: UsersRound,

    image: "/services/seo/seo1.webp",

    imageAlt:
      "SEO discovery illustration representing business research, audience understanding and search planning",

    imageTitle: "SEO Discovery and Business Research",

    tone: "blue",

  },

  {

    number: "02",

    label: "AUDIT",

    title: "Find the Gaps",

    description:

      "We review the website to identify technical, content and search visibility opportunities.",

    icon: FileSearch,

    image: "/services/seo/seo2.webp",

    imageAlt:
      "SEO audit illustration showing website analysis, technical issues and search visibility opportunities",

    imageTitle: "SEO Audit and Opportunity Analysis",

    tone: "cream",



  },

  {

    number: "03",

    label: "PRIORITIZE",

    title: "Build the SEO Roadmap",

    description:

      "Recommendations are prioritized according to potential impact, business relevance and implementation requirements.",

    icon: Settings2,

    image: "/services/seo/seo3.webp",

    imageAlt:
      "SEO roadmap illustration representing prioritized optimization tasks and search strategy planning",

    imageTitle: "SEO Roadmap and Priority Planning",

    tone: "blue",

  },

  {

    number: "04",

    label: "OPTIMIZE",

    title: "Put the Strategy Into Action",

    description:

      "Agreed technical, on-page, content and structural improvements are implemented or provided to the responsible team.",

    icon: ListChecks,

    image: "/services/seo/seo4.webp",

    imageAlt:
      "SEO optimization illustration showing technical, on-page and content improvements being implemented",

    imageTitle: "SEO Optimization and Implementation",

    tone: "cream",

  },

  {

    number: "05",

    label: "MEASURE",

    title: "See What Is Changing",

    description:

      "We monitor relevant organic search indicators and identify further opportunities.",

    icon: BarChart3,

    image: "/services/seo/seo5.webp",

    imageAlt:
      "SEO performance illustration showing organic search visibility, rankings and growth measurement",

    imageTitle: "SEO Performance and Organic Search Measurement",

    tone: "blue",

  },

  {

    number: "06",

    label: "IMPROVE",

    title: "Build on What We Learn",

    description:

      "SEO evolves as your website, competitors, customers and search environment change.",

    extra:

      "Insights from real performance guide the next priorities.",

    icon: RefreshCw,

    image: "/services/seo/seo6.webp",

    imageAlt:
      "SEO improvement illustration representing ongoing optimization, stronger rankings and new search opportunities",

    imageTitle: "Continuous SEO Improvement and Search Growth",

    tone: "blue",

  },

];



/* ============================================================

   MAIN SECTION

============================================================ */



export default function SEOProcessSection() {

  const reduceMotion = useReducedMotion();



  return (

    <section

      id="seo-process"

      className="

        relative

        overflow-hidden

        bg-white

        py-24

        text-[#0B2A52]

        sm:py-28

        lg:py-32

      "

    >

      {/* =====================================================

          BACKGROUND ATMOSPHERE

      ====================================================== */}



      <div className="pointer-events-none absolute inset-0">

        <div

          className="

            absolute

            -left-72

            top-[8%]

            h-[620px]

            w-[620px]

            rounded-full

            bg-[#3976B6]/[0.035]

            blur-[180px]

          "

        />



        <div

          className="

            absolute

            -right-72

            bottom-[12%]

            h-[600px]

            w-[600px]

            rounded-full

            bg-[#C6A77A]/[0.065]

            blur-[180px]

          "

        />

      </div>



      <div

        className="

          relative

          z-10

          mx-auto

          max-w-[1380px]

          px-5

          sm:px-8

          lg:px-12

        "

      >

        {/* =====================================================

            HERO HEADER

        ====================================================== */}



        <div className="relative">

          {/* LEFT EDITORIAL NOTE */}









          {/* MAIN CENTER */}



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

              amount: 0.3,

            }}

            transition={{

              duration: 0.9,

              ease,

            }}

            className="

              mx-auto

              max-w-[900px]

              text-center

            "

          >

            <div className="flex items-center justify-center gap-4">

         <span

            className="

              h-px

              w-10



              bg-gradient-to-r

              from-transparent

              to-[#B79A72]

            "

          />



              <span

                className="

                  text-[10px]



                  tracking-[0.26em]

                  text-[#B79A72]

                "

              >

                YOUR EXPERIENCE

              </span>



             <span

            className="

              h-px

              w-10



              bg-gradient-to-l

              from-transparent

              to-[#B79A72]

            "

          />

            </div>



            <h2

              className="

                mt-6

                [font-family:Georgia,'Times_New_Roman',serif]

                text-[2.8rem]

                font-normal

                leading-[0.98]

                tracking-[-0.045em]

                text-[#091F50]

                sm:text-[3.5rem]

                md:text-[4rem]

                lg:text-[4.45rem]

              "

            >

              From SEO Audit to

              <span

                className="

                  mt-1

                  block

                  text-[#B79A72]

                "

              >

                Ongoing Improvement.

              </span>

            </h2>



            <p

              className="

                mx-auto

                mt-7

                max-w-[760px]

                [font-family:Georgia,'Times_New_Roman',serif]

                text-[14px]

                leading-7

                text-[#0B2A52]/62

                sm:text-[16px]

              "

            >

              A clear process keeps recommendations connected to business

              priorities instead of creating an endless SEO task list.

            </p>

          </motion.div>

        </div>



        {/* =====================================================

            PROCESS INTRO

        ====================================================== */}



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

            duration: 0.8,

            ease,

          }}

          className="

            mx-auto

            mt-14

            flex

            max-w-[1280px]

            flex-col

            gap-5

            border-t

            border-[#0B2A52]/14

            pt-6

            sm:flex-row

            sm:items-end

            sm:justify-between

          "

        >

          <div>

            <span

              className="

                text-[9px]

                font-semibold

                tracking-[0.22em]

                text-[#A87846]

              "

            >

              THE SEO PROCESS

            </span>



            <h3

              className="

                mt-2

                [font-family:Georgia,'Times_New_Roman',serif]

                text-[23px]

                font-normal

                tracking-[-0.025em]

                text-[#0B2A52]

                sm:text-[26px]

              "

            >

              Six connected stages. One clear direction.

            </h3>

          </div>



          <div className="flex items-end gap-4">







          </div>

        </motion.div>



        {/* =====================================================

            DESKTOP JOURNEY

        ====================================================== */}



        <div

          className="

            relative

            mx-auto

            mt-10

            hidden

            max-w-[1280px]

            lg:block

          "

        >

          {/* ===================================================

              CENTRAL FLOWING PATH

          =================================================== */}



          <div

            className="

              pointer-events-none

              absolute

              bottom-[55px]

              left-1/2

              top-[55px]

              z-20

              w-[180px]

              -translate-x-1/2

            "

          >

            <svg

              viewBox="0 0 180 900"

              fill="none"

              className="h-full w-full"

              preserveAspectRatio="none"

              aria-hidden="true"

            >

              <path

                d="

                  M84 10

                  C150 60 148 120 86 166

                  C24 212 27 270 90 316

                  C151 361 150 423 88 470

                  C25 518 27 579 90 625

                  C151 670 148 728 87 775

                  C34 815 31 856 83 890

                "

                stroke="#3976B6"

                strokeOpacity="0.13"

                strokeWidth="1.4"

              />



              <motion.path

                d="

                  M84 10

                  C150 60 148 120 86 166

                  C24 212 27 270 90 316

                  C151 361 150 423 88 470

                  C25 518 27 579 90 625

                  C151 670 148 728 87 775

                  C34 815 31 856 83 890

                "

                stroke="#3976B6"

                strokeOpacity="0.34"

                strokeWidth="1.7"

                strokeLinecap="round"

                initial={{

                  pathLength: 0,

                }}

                whileInView={{

                  pathLength: 1,

                }}

                viewport={{

                  once: true,

                  amount: 0.1,

                }}

                transition={{

                  duration: reduceMotion ? 0 : 2,

                  ease,

                }}

              />

            </svg>



            {/* NODES */}



            <span

              className="

                absolute

                left-[80%]

                top-[7%]

                h-3

                w-3

                rounded-full

                bg-[#C58A47]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />



            <span

              className="

                absolute

                left-[31%]

                top-[23%]

                h-3

                w-3

                rounded-full

                bg-[#53B7D7]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />



            <span

              className="

                absolute

                left-[78%]

                top-[40%]

                h-3

                w-3

                rounded-full

                bg-[#C58A47]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />



            <span

              className="

                absolute

                left-[31%]

                top-[57%]

                h-3

                w-3

                rounded-full

                bg-[#53B7D7]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />



            <span

              className="

                absolute

                left-[77%]

                top-[74%]

                h-3

                w-3

                rounded-full

                bg-[#C58A47]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />



            <span

              className="

                absolute

                left-[30%]

                top-[90%]

                h-3

                w-3

                rounded-full

                bg-[#53B7D7]

                shadow-[0_0_0_5px_#FCFCFA]

              "

            />

          </div>



          {/* ===================================================

              ROW 1

          =================================================== */}



          <ProcessRow

            leftStep={steps[0]}

            rightStep={steps[1]}

            rowIndex={0}

            reduceMotion={!!reduceMotion}

          />



          {/* ===================================================

              ROW 2

          =================================================== */}



          <ProcessRow

            leftStep={steps[2]}

            rightStep={steps[3]}

            rowIndex={1}

            reduceMotion={!!reduceMotion}

          />



          {/* ===================================================

              ROW 3

          =================================================== */}



          <ProcessRow

            leftStep={steps[4]}

            rightStep={steps[5]}

            rowIndex={2}

            reduceMotion={!!reduceMotion}

          />

        </div>



        {/* =====================================================

            MOBILE / TABLET

        ====================================================== */}



        <div

          className="

            mx-auto

            mt-12

            max-w-[760px]

            lg:hidden

          "

        >

          <div

            className="

              relative

              border-l

              border-[#3976B6]/20

              pl-7

            "

          >

            {steps.map((step, index) => (

              <MobileStep

                key={step.number}

                step={step}

                index={index}

                reduceMotion={!!reduceMotion}

              />

            ))}

          </div>

        </div>



        {/* =====================================================

            CONTINUOUS IMPROVEMENT PANEL

        ====================================================== */}



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

            amount: 0.25,

          }}

          transition={{

            duration: 0.9,

            ease,

          }}

          className="

            relative

            mx-auto

            mt-16

            max-w-[1280px]

            overflow-hidden

            rounded-[30px]

            border

            border-[#3976B6]/18

            bg-gradient-to-r

            from-[#EAF5FE]

            via-white

            to-[#FBF0DF]

            px-7

            py-9

            shadow-[0_20px_55px_rgba(11,42,82,0.04)]

            sm:px-10

            lg:px-12

            lg:py-11

          "

        >

          {/* DECORATIVE CURVE */}



          <svg

            viewBox="0 0 1000 170"

            fill="none"

            preserveAspectRatio="none"

            className="

              pointer-events-none

              absolute

              inset-x-0

              bottom-0

              h-[110px]

              w-full

            "

            aria-hidden="true"

          >

            <path

              d="M0 130C180 70 290 170 430 120C570 68 630 150 760 95C855 55 930 42 1000 48"

              stroke="#C6A77A"

              strokeOpacity="0.35"

              strokeWidth="1.5"

            />

          </svg>



          <span

            className="

              pointer-events-none

              absolute

              right-[8%]

              top-7

              h-2.5

              w-2.5

              rounded-full

              bg-[#E9B872]

            "

          />



          <div

            className="

              relative

              z-10

              grid

              gap-9

              lg:grid-cols-[0.95fr_1.05fr]

              lg:items-center

            "

          >

            {/* LEFT */}



            <div>

              <span

                className="

                  text-[10px]

                  font-semibold

                  tracking-[0.23em]

                  text-[#A87846]

                "

              >

                CONTINUOUS IMPROVEMENT

              </span>



              <h3

                className="

                  mt-5

                  max-w-[570px]

                  [font-family:Georgia,'Times_New_Roman',serif]

                  text-[33px]

                  font-normal

                  leading-[1.05]

                  tracking-[-0.035em]

                  text-[#0B2A52]

                  sm:text-[40px]

                  lg:text-[44px]

                "

              >

                Each cycle makes the next decision

                <span

                  className="

                    block

                    text-[#BD8953]

                  "

                >

                  more informed.

                </span>

              </h3>

            </div>



            {/* RIGHT */}



            <div>

              <div

                className="

                  rounded-full

                  border

                  border-[#3976B6]/15

                  bg-gradient-to-r

                  from-[#E3F0FE]

                  via-white

                  to-[#FAEBD6]

                  px-5

                  py-4

                "

              >

                <div

                  className="

                    flex

                    flex-wrap

                    items-center

                    justify-center

                    gap-x-4

                    gap-y-2

                  "

                >

                  {[

                    "AUDIT",

                    "PRIORITIZE",

                    "OPTIMIZE",

                    "MEASURE",

                    "IMPROVE",

                  ].map((item, index, array) => (

                    <div

                      key={item}

                      className="flex items-center gap-4"

                    >

                      <span

                        className="

                          text-[9px]

                          font-semibold

                          tracking-[0.14em]

                          text-[#0B2A52]/60

                        "

                      >

                        {item}

                      </span>



                      {index < array.length - 1 && (

                        <span

                          className="

                            h-1

                            w-1

                            rounded-full

                            bg-[#0B2A52]/45

                          "

                        />

                      )}

                    </div>

                  ))}

                </div>

              </div>



              <p

                className="

                  mt-5

                  text-center

                  [font-family:Georgia,'Times_New_Roman',serif]

                  text-[13px]

                  leading-6

                  text-[#0B2A52]/58

                  sm:text-[14px]

                "

              >

                Insights from real performance guide the next priorities.

              </p>

            </div>

          </div>

        </motion.div>



        {/* =====================================================

            BOTTOM MICROCOPY

        ====================================================== */}



        <div

          className="

            mx-auto

            mt-10

            flex

            max-w-[1280px]

            flex-col

            gap-4

            sm:flex-row

            sm:items-center

            sm:justify-between

          "

        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#C6A77A]" />



            <span

              className="

                text-[9px]

                font-semibold

                tracking-[0.22em]

                text-[#3976B6]/60

              "

            >

              A MORE VISIBLE TOMORROW

            </span>

          </div>



          <span

            className="

              text-[9px]

              font-semibold

              tracking-[0.20em]

              text-[#3976B6]/55

            "

          >

            STRATEGY · CONTENT · PERFORMANCE

          </span>

        </div>

      </div>

    </section>

  );

}



/* ============================================================

   PROCESS ROW

============================================================ */



function ProcessRow({

  leftStep,

  rightStep,

  rowIndex,

  reduceMotion,

}: {

  leftStep: ProcessStep;

  rightStep: ProcessStep;

  rowIndex: number;

  reduceMotion: boolean;

}) {

  return (

    <div

      className="

        relative

        grid

        min-h-[300px]

        grid-cols-[1fr_225px_110px_1fr_225px]

        items-center

        gap-6

        py-5

      "

    >

      {/* LEFT STEP */}



      <ProcessCopy

        step={leftStep}

        side="left"

        index={rowIndex * 2}

        reduceMotion={reduceMotion}

      />



      {/* LEFT IMAGE */}



      <ProcessImage

        step={leftStep}

        index={rowIndex * 2}

        side="left"

        reduceMotion={reduceMotion}

      />



      {/* CENTER SPACE FOR PATH */}



      <div />



      {/* RIGHT STEP */}



      <ProcessCopy

        step={rightStep}

        side="right"

        index={rowIndex * 2 + 1}

        reduceMotion={reduceMotion}

      />



      {/* RIGHT IMAGE */}



      <ProcessImage

        step={rightStep}

        index={rowIndex * 2 + 1}

        side="right"

        reduceMotion={reduceMotion}

      />

    </div>

  );

}



/* ============================================================

   PROCESS COPY

============================================================ */



function ProcessCopy({

  step,

  side,

  index,

  reduceMotion,

}: {

  step: ProcessStep;

  side: "left" | "right";

  index: number;

  reduceMotion: boolean;

}) {

  const Icon = step.icon;

  const blue = step.tone === "blue";



  return (

    <motion.article

      initial={{

        opacity: 0,

        x: reduceMotion

          ? 0

          : side === "left"

            ? -22

            : 22,

      }}

      whileInView={{

        opacity: 1,

        x: 0,

      }}

      viewport={{

        once: true,

        amount: 0.3,

      }}

      transition={{

        duration: 0.72,

        delay: Math.min(index * 0.07, 0.28),

        ease,

      }}

      className="

        relative

        flex

        items-start

        gap-4

      "

    >

      {/* ICON */}



      <div

        className={`

          flex

          h-[72px]

          w-[72px]

          shrink-0

          items-center

          justify-center

          rounded-full

          border-[5px]

          border-white

          shadow-[0_8px_24px_rgba(11,42,82,0.08)]



          ${

            blue

              ? "bg-[#E7F3FE] text-[#0B2A52]"

              : "bg-[#FFF1DF] text-[#0B2A52]"

          }

        `}

      >

        <Icon

          size={25}

          strokeWidth={1.65}

        />

      </div>



      {/* COPY */}



      <div className="pt-1">

        <div className="flex items-end gap-3">



        </div>



        <span

          className="

            mt-1

            block

            text-[9px]

            font-semibold

            tracking-[0.23em]

            text-[#A87846]

          "

        >

          {step.label}

        </span>



        <h3

          className="

            mt-2

            [font-family:Georgia,'Times_New_Roman',serif]

            text-[23px]

            font-normal

            leading-[1.08]

            tracking-[-0.025em]

            text-[#0B2A52]

          "

        >

          {step.title}

        </h3>



        <p

          className="

            mt-3

            max-w-[300px]

            [font-family:Georgia,'Times_New_Roman',serif]

            text-[13px]

            leading-6

            text-[#0B2A52]/60

          "

        >

          {step.description}

        </p>



        {step.extra && (

          <p

            className="

              mt-2

              max-w-[300px]

              [font-family:Georgia,'Times_New_Roman',serif]

              text-[12px]

              leading-5

              text-[#0B2A52]/68

            "

          >

            {step.extra}

          </p>

        )}

      </div>

    </motion.article>

  );

}



/* ============================================================

   PROCESS IMAGE

============================================================ */



function ProcessImage({

  step,

  index,

  side,

  reduceMotion,

}: {

  step: ProcessStep;

  index: number;

  side: "left" | "right";

  reduceMotion: boolean;

}) {

  const shapes = [

    "rounded-[58px_58px_58px_14px]",

    "rounded-[18px_62px_18px_18px]",

    "rounded-[18px_64px_18px_64px]",

    "rounded-[18px_64px_18px_18px]",

    "rounded-[18px_64px_18px_64px]",

    "rounded-[18px_64px_18px_64px]",

  ];



  return (

    <motion.div

      initial={{

        opacity: 0,

        scale: reduceMotion ? 1 : 0.94,

        y: reduceMotion ? 0 : 16,

      }}

      whileInView={{

        opacity: 1,

        scale: 1,

        y: 0,

      }}

      viewport={{

        once: true,

        amount: 0.3,

      }}

      transition={{

        duration: 0.75,

        delay: Math.min(index * 0.065, 0.28),

        ease,

      }}

      className={`

        relative

        h-[205px]

        overflow-hidden

        bg-[#F4F1EB]

        shadow-[0_14px_36px_rgba(11,42,82,0.055)]

        ${shapes[index]}

      `}

    >

      <Image

        src={step.image}

        alt={step.imageAlt}

        title={step.imageTitle}

        fill

        sizes="225px"

        className="

          object-cover

          transition-transform

          duration-700

          hover:scale-[1.035]

        "

      />



      <div

        className={`

          pointer-events-none

          absolute

          inset-0

          ${

            side === "left"

              ? "bg-gradient-to-tr from-[#3976B6]/[0.025] to-transparent"

              : "bg-gradient-to-tl from-[#C6A77A]/[0.035] to-transparent"

          }

        `}

      />

    </motion.div>

  );

}



/* ============================================================

   MOBILE STEP

============================================================ */



function MobileStep({

  step,

  index,

  reduceMotion,

}: {

  step: ProcessStep;

  index: number;

  reduceMotion: boolean;

}) {

  const Icon = step.icon;

  const blue = step.tone === "blue";



  return (

    <motion.article

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

        duration: 0.6,

        delay: Math.min(index * 0.05, 0.2),

        ease,

      }}

      className="

        relative

        pb-12

      "

    >

      {/* TIMELINE NODE */}



      <span

        className={`

          absolute

          -left-[33px]

          top-[12px]

          h-3

          w-3

          rounded-full

          ring-[5px]

          ring-[#FCFCFA]



          ${

            index % 2 === 0

              ? "bg-[#53B7D7]"

              : "bg-[#C58A47]"

          }

        `}

      />



      {/* HEAD */}



      <div className="flex items-start gap-4">

        <div

          className={`

            flex

            h-12

            w-12

            shrink-0

            items-center

            justify-center

            rounded-full



            ${

              blue

                ? "bg-[#E7F3FE]"

                : "bg-[#FFF1DF]"

            }

          `}

        >

          <Icon

            size={17}

            strokeWidth={1.65}

          />

        </div>



        <div>

          <span

            className="

              [font-family:Georgia,'Times_New_Roman',serif]

              text-[35px]

              leading-none

              text-[#E1C8AA]

            "

          >

            {step.number}

          </span>



          <span

            className="

              ml-3

              text-[9px]

              font-semibold

              tracking-[0.20em]

              text-[#A87846]

            "

          >

            {step.label}

          </span>

        </div>

      </div>



      {/* TEXT */}



      <h3

        className="

          mt-4

          [font-family:Georgia,'Times_New_Roman',serif]

          text-[24px]

          font-normal

          tracking-[-0.025em]

          text-[#0B2A52]

        "

      >

        {step.title}

      </h3>



      <p

        className="

          mt-3

          [font-family:Georgia,'Times_New_Roman',serif]

          text-[14px]

          leading-7

          text-[#0B2A52]/60

        "

      >

        {step.description}

      </p>



      {step.extra && (

        <p

          className="

            mt-2

            [font-family:Georgia,'Times_New_Roman',serif]

            text-[13px]

            leading-6

            text-[#0B2A52]/70

          "

        >

          {step.extra}

        </p>

      )}



      {/* IMAGE */}



      <div

        className="

          relative

          mt-6

          h-[230px]

          overflow-hidden

          rounded-[28px]

          bg-[#F3F1EC]

        "

      >

        <Image

          src={step.image}

          alt={step.imageAlt}

          title={step.imageTitle}

          fill

          sizes="(max-width: 1024px) 90vw, 225px"

          className="object-cover"

        />

      </div>

    </motion.article>

  );

}