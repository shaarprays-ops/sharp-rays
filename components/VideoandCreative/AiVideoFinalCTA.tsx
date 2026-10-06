"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowRight } from "lucide-react";

const newYorkFont = {

  fontFamily: '"New York", "", Georgia, serif',

};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiVideoFinalCTA() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="ai-video-final-cta"

      aria-labelledby="ai-video-final-cta-heading"

      className="

        relative

        isolate

        overflow-hidden

        bg-white

        py-16

        sm:py-20

        md:py-24

        lg:py-28

      "

    >

      {/* =====================================================

          SOFT BACKGROUND

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          inset-0

          -z-10

          hidden

          sm:block

        "

      >

        <div

          className="

            absolute

            left-1/2

            top-1/2

            h-[430px]

            w-[900px]

            -translate-x-1/2

            -translate-y-1/2

            rounded-[50%]

            bg-[#EEF5FA]/80

            blur-[125px]

          "

        />

        <div

          className="

            absolute

            left-1/2

            top-[14%]

            h-[380px]

            w-[760px]

            -translate-x-1/2

            rounded-[50%]

            border

            border-[#C9D9E5]/55

          "

        />

        <div

          className="

            absolute

            left-1/2

            top-[19%]

            h-[330px]

            w-[660px]

            -translate-x-1/2

            rounded-[50%]

            border

            border-[#B79A72]/18

          "

        />

      </div>

      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1100px]

          px-4

          sm:px-6

          md:px-8

        "

      >

        <motion.div

          initial={

            reduceMotion

              ? false

              : {

                  opacity: 0,

                  y: 24,

                }

          }

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.35,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.75,

            ease,

          }}

          className="

            mx-auto

            text-center

          "

        >

          {/* =====================================================

              LABEL

          ===================================================== */}

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

                w-7

                bg-gradient-to-r

                from-transparent

                to-[#B79A72]

                sm:w-10

              "

            />

            <span

              style={newYorkFont}

              className="

                text-[9px]

                font-medium

                uppercase

                tracking-[0.24em]

                text-[#B79A72]

                sm:text-[10px]

                sm:tracking-[0.28em]

              "

            >

              Your Next Move

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

          {/* =====================================================

              HEADING

          ===================================================== */}

          <h2

            id="ai-video-final-cta-heading"

            style={newYorkFont}

            className="

              mx-auto

              mt-5

              max-w-[920px]

              text-[2.2rem]

              font-light

              leading-[1.04]

              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]

              md:text-[2.95rem]

              lg:text-[3.1rem]

              xl:text-[3.35rem]

            "

          >

            Turn the Idea Into Something{" "}

            <span className="font-normal italic text-[#B79A72]">

              Worth Watching.

            </span>

          </h2>

          {/* =====================================================

              SHORT COPY

          ===================================================== */}

          <p

            style={newYorkFont}

            className="

              mx-auto

              mt-5

              max-w-[620px]

              text-[0.86rem]

              leading-[1.68]

              text-[#5D7286]

              sm:text-[0.95rem]

            "

          >

            Start with footage, an idea or an existing asset.

          </p>

          {/* =====================================================

              CTAS

          ===================================================== */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    y: 18,

                  }

            }

            whileInView={{

              opacity: 1,

              y: 0,

            }}

            viewport={{

              once: true,

              amount: 0.4,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.6,

              delay: reduceMotion ? 0 : 0.08,

              ease,

            }}

            className="

              mx-auto

              mt-7

              flex

              w-full

              max-w-[430px]

              flex-row

              flex-nowrap

              items-center

              justify-center

              gap-2

              sm:mt-8

              sm:max-w-none

              sm:gap-3

            "

          >

            {/* PRIMARY */}

            <Link

              href="/contact?service=ai-video-editing#contact-form"
              title="Create My Video"
              style={newYorkFont}

              className="

                group

                relative

                inline-flex

                min-h-[43px]

                min-w-[185px]

                items-center

                justify-center

                gap-1.5

                overflow-hidden

                rounded-[16px]

                border

                border-[#6285AD]/35

                bg-[#F7FAFC]/90

                px-2.5

                py-[9px]

                text-[10.5px]

                font-medium

                tracking-[-0.01em]

                text-[#0B2A52]

                shadow-[0_8px_28px_rgba(11,42,82,0.08)]

                backdrop-blur-[8px]

                transition-all

                duration-300

                ease-out

                hover:-translate-y-[2px]

                hover:border-[#6285AD]/50

                hover:bg-white

                hover:shadow-[0_12px_34px_rgba(98,133,173,0.16)]

                active:translate-y-0

                min-[390px]:px-3

                min-[390px]:text-[11.5px]

                sm:min-h-[46px]

                sm:px-6

                sm:py-[11px]

                sm:text-[13px]

                md:min-h-[48px]

                md:px-6

                md:py-3

                md:text-[14px]

              "

            >

              <span

                className="

                  pointer-events-none

                  absolute

                  inset-[2px]

                  rounded-[13px]

                  border

                  border-white/70

                "

              />

              <span className="relative z-10 whitespace-nowrap">

                Create My Video

              </span>

              <ArrowRight

                size={12}

                strokeWidth={1.8}

                className="

                  relative

                  z-10

                  shrink-0

                  text-[#B79A72]

                  transition-transform

                  duration-300

                  group-hover:translate-x-1

                  sm:h-[13px]

                  sm:w-[13px]

                "

              />

            </Link>

          </motion.div>

          {/* =====================================================

              SUPPORTING LINE

          ===================================================== */}

         

          {/* BOTTOM HAIRLINE */}

          
        </motion.div>

      </div>

    </section>

  );

}
