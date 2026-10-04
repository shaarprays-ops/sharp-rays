"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {

  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',

};

/* =========================================================

   YOUR RIGHT-SIDE IMAGE

\========================================================= */

const RIGHT_HERO_IMAGE = "/work/work.webp";

/* =========================================================

   WORK HERO

\========================================================= */

export default function WorkHero() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="work-hero"

      className="

        relative

        isolate

        overflow-hidden

        bg-white

        pt-24

        pb-16

        sm:pt-28

        sm:pb-20

        lg:pt-[128px]

        lg:pb-12

        xl:pt-[132px]

        xl:pb-14

      "

    >

      {/* =====================================================

          BACKGROUND

      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">

        {/* WHITE BASE */}

        <div

          className="

            absolute

            inset-0

            bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFDFE_54%,#FFFFFF_100%)]

          "

        />

        {/* SOFT LEFT NAVY LIGHT */}

        <div

          className="

            absolute

            -left-[280px]

            top-[12%]

            h-[500px]

            w-[500px]

            rounded-full

            bg-[#0B2A52]/[0.028]

            blur-[120px]

          "

        />

        {/* VERY SOFT GOLD LIGHT */}

        <div

          className="

            absolute

            left-[25%]

            bottom-[-260px]

            h-[480px]

            w-[650px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[130px]

          "

        />

        {/* TOP LEFT DECORATIVE CURVES */}

        <svg

          viewBox="0 0 500 300"

          fill="none"

          aria-hidden="true"

          className="

            absolute

            -left-[135px]

            -top-[70px]

            hidden

            h-[320px]

            w-[550px]

            opacity-65

            lg:block

          "

        >

          <path

            d="M0 220C100 205 150 150 195 80C240 13 295 -9 430 -18"

            stroke="#D7E4ED"

            strokeWidth="1"

          />

          <path

            d="M0 265C110 240 178 190 230 118C280 48 340 22 470 15"

            stroke="#E6D8C3"

            strokeWidth="1"

          />

          <circle

            cx="175"

            cy="126"

            r="4"

            fill="#B79A72"

          />

        </svg>

      </div>

      {/* =====================================================

          MAIN CONTAINER

      ===================================================== */}

      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1500px]

          px-5

          sm:px-7

          md:px-9

          lg:px-12

          xl:px-14

        "

      >

        {/* =====================================================

            TRUE 50 / 50 LAYOUT

        ===================================================== */}

        <div

          className="

            grid

            grid-cols-1

            gap-12

            lg:grid-cols-2

            lg:items-start

            lg:gap-10

            xl:gap-14

          "

        >

          {/* =================================================

              LEFT CONTENT

          ================================================= */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    x: -30,

                  }

            }

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

              amount: 0.25,

            }}

            transition={{

              duration: 0.7,

              ease,

            }}

            className="

              relative

              z-20

              w-full

              max-w-[650px]

            "

          >

            {/* =================================================

                EYEBROW

            ================================================= */}

            <div

              className="

                flex

                items-center

                gap-4

              "

            >

              <span

                className="

                  text-[0.58rem]

                  font-semibold

                  uppercase

                  tracking-[0.3em]

                  text-[#A07850]

                "

              >

                Selected Work

              </span>

              <motion.span

                initial={

                  reduceMotion

                    ? false

                    : {

                        scaleX: 0,

                      }

                }

                whileInView={{

                  scaleX: 1,

                }}

                viewport={{ once: true }}

                transition={{

                  duration: 0.55,

                  delay: 0.08,

                  ease,

                }}

                style={{

                  transformOrigin: "left",

                }}

                className="

                  h-px

                  w-16

                  bg-[linear-gradient(90deg,#B79A72,transparent)]

                "

              />

            </div>

            {/* =================================================

                HEADING

            ================================================= */}

            <h1

              className="

                mt-6

                max-w-[640px]

                text-[2.3rem]

                leading-[1.01]

                tracking-[-0.045em]

                text-[#0B2A52]

                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]

              "

            >

              Work Built Around

              <br />

              What Needed to{" "}

              <span

                className="

                  font-normal

                  italic

                  text-[#B18458]

                "

              >

                Change.

              </span>

            </h1>

            {/* =================================================

                INTRO

            ================================================= */}

            <p

              className="

                mt-6

                max-w-[590px]

                text-[0.94rem]

                leading-[1.7]

                text-[#526A80]

                sm:text-[0.99rem]

              "

            >

              Explore how Sharp Rays approaches growth across search, social

              media, paid advertising, content, websites and AI-powered

              creative.

            </p>

            {/* =================================================

                CONTEXT

            ================================================= */}

            <div

              className="

                mt-6

                max-w-[550px]

                space-y-[3px]

                text-[0.86rem]

                leading-[1.52]

                text-[#617588]

                sm:text-[0.91rem]

              "

            >

              <p>Every project starts differently.</p>

              <p>

                Some businesses need to be easier to find.

              </p>

              <p>

                Some need a clearer story.

              </p>

              <p>

                Some need better conversion.

              </p>

              <p>

                Some need a stronger digital experience.

              </p>

              <p

                className="

                  pt-1.5

                  font-medium

                  text-[#0B2A52]

                "

              >

                The work changes because the problem changes.

              </p>

            </div>

            {/* =================================================

                CTA

            ================================================= */}

            <div

              className="

                mt-7

                flex

                flex-col

                gap-3

                sm:flex-row

                sm:items-center

              "

            >

              {/* PRIMARY */}

              <motion.a

                href="#portfolio"

                whileHover={

                  reduceMotion

                    ? undefined

                    : {

                        y: -2,

                      }

                }

                whileTap={{

                  scale: 0.98,

                }}

                style={newYorkFont}

                className="

                  group

                  relative

                  inline-flex

                  min-h-[46px]

                  items-center

                  justify-center

                  overflow-hidden

                  rounded-[16px]

                  border

                  border-[#6285AD]/30

                  bg-white/80

                  px-5

                  py-[11px]

                  text-[13px]

                  font-medium

                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all

                  duration-300

                  ease-out

                  hover:border-[#6285AD]/40

                  hover:bg-white

                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  sm:min-h-[48px]

                  sm:px-6

                  sm:py-3

                  sm:text-[14px]

                  md:text-[15px]

                "

              >

                {/* STATIC SOFT BORDER */}

                <span

                  className="

                    pointer-events-none

                    absolute

                    inset-[2px]

                    rounded-[13px]

                    border

                    border-white/60

                  "

                />

                {/* VERY SUBTLE INNER LIGHT */}

                <span

                  className="

                    pointer-events-none

                    absolute

                    inset-x-4

                    top-0

                    h-px

                    bg-gradient-to-r

                    from-transparent

                    via-white

                    to-transparent

                  "

                />

                {/* TEXT */}

                <span

                  className="

                    relative

                    z-10

                    whitespace-nowrap

                    text-[#0B2A52]

                  "

                >

                  Explore Our Work

                </span>

              </motion.a>

              {/* SECONDARY */}

              <motion.a

                href="/contact#contact-form"
                title="Start a Project with Sharp Rays"

                whileHover={

                  reduceMotion

                    ? undefined

                    : {

                        y: -2,

                      }

                }

                whileTap={{

                  scale: 0.98,

                }}

                style={newYorkFont}

                className="

                  group

                  relative

                  inline-flex

                  min-h-[46px]

                  items-center

                  justify-center

                  overflow-hidden

                  rounded-[16px]

                  border

                  border-[#6285AD]/30

                  bg-white/80

                  px-5

                  py-[11px]

                  text-[13px]

                  font-medium

                  tracking-[-0.01em]

                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all

                  duration-300

                  ease-out

                  hover:border-[#6285AD]/40

                  hover:bg-white

                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  sm:min-h-[48px]

                  sm:px-6

                  sm:py-3

                  sm:text-[14px]

                  md:text-[15px]

                "

              >

                {/* STATIC SOFT BORDER */}

                <span

                  className="

                    pointer-events-none

                    absolute

                    inset-[2px]

                    rounded-[13px]

                    border

                    border-white/60

                  "

                />

                {/* VERY SUBTLE INNER LIGHT */}

                <span

                  className="

                    pointer-events-none

                    absolute

                    inset-x-4

                    top-0

                    h-px

                    bg-gradient-to-r

                    from-transparent

                    via-white

                    to-transparent

                  "

                />

                {/* TEXT */}

                <span

                  className="

                    relative

                    z-10

                    whitespace-nowrap

                    text-[#0B2A52]

                  "

                >

                  Start a Project

                </span>

              </motion.a>

            </div>

           

            {/* =================================================

                BOTTOM NOTE

            ================================================= */}


          </motion.div>

          {/* =================================================

              RIGHT SIDE — IMAGE ONLY

          ================================================= */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    x: 32,

                    scale: 0.985,

                  }

            }

            whileInView={{

              opacity: 1,

              x: 0,

              scale: 1,

            }}

            viewport={{

              once: true,

              amount: 0.18,

            }}

            transition={{

              duration: 0.78,

              delay: 0.05,

              ease,

            }}

            className="

              relative

              flex

              w-full

              items-start

              justify-center

              lg:pt-8

              lg:justify-end

              xl:pt-5

            "

          >

            {/* =================================================

                IMAGE WRAPPER

                Main improvement:

                - no giant aspect box

                - viewport-limited height

                - full object-contain

                - moved UP

            ================================================= */}

            <div

              className="

                relative

                h-[380px]

                w-full

                max-w-[760px]

                sm:h-[460px]

                md:h-[520px]

                lg:h-[clamp(470px,60vh,560px)]

                xl:h-[clamp(500px,62vh,590px)]

                xl:max-w-[780px]

              "

            >

             <Image
  src={RIGHT_HERO_IMAGE}
  alt="Sharp Rays selected work"
  title="Sharp Rays selected work"
  fill
  priority
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="
    object-contain
    object-center
  "
/>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}
