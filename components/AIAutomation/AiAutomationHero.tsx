"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiAutomationHero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-automation-hero"
      aria-labelledby="ai-automation-heading"
      className="
        relative
        overflow-hidden
        bg-white

        pb-14
        pt-28

        sm:pb-16
        sm:pt-32

        md:pb-18

        lg:pb-20
        lg:pt-32

        xl:pb-20
        xl:pt-32

        2xl:pb-24
        2xl:pt-36
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-16
        "
      >
        <div
          className="
            grid
            items-center

            gap-10
            sm:gap-12
            lg:gap-14

            xl:grid-cols-[0.47fr_0.53fr]
            xl:gap-10

            2xl:grid-cols-[0.45fr_0.55fr]
            2xl:gap-14
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -32,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              z-10

              mx-auto
              w-full
              max-w-[650px]

              xl:mx-0
              xl:max-w-[630px]

              2xl:max-w-[670px]
            "
          >
            {/* EYEBROW */}

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 bg-[#C6A77A] sm:w-10 xl:w-12" />

              <span
                style={newYorkFont}
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#B18458]

                  sm:text-[10px]
                  sm:tracking-[0.32em]
                "
              >
                AI Automation
              </span>
            </div>

            {/* HEADING */}

            <h1
              id="ai-automation-heading"
              style={newYorkFont}
              className="
                mt-5
                max-w-[720px]

                text-[2.2rem]
                font-light
                leading-[1.01]
                tracking-[-0.05em]
                text-[#0B2A52]

                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Automate the Work That Shouldn&apos;t Need{" "}
              <span className="text-[#B18458]">
                Your Attention.
              </span>
            </h1>

            {/* COPY */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="
                mt-5
                max-w-[590px]

                sm:mt-6
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[13px]
                  leading-[1.65]
                  text-[#405E79]

                  sm:text-[14px]
                  md:text-[15px]

                  2xl:text-[16px]
                "
              >
                Sharp Rays helps businesses design AI-powered workflows that
                reduce repetitive work, connect systems and keep important
                processes moving.
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-3

                  text-[13px]
                  leading-[1.65]
                  text-[#405E79]

                  sm:mt-3.5
                  sm:text-[14px]

                  md:text-[15px]

                  2xl:mt-4
                  2xl:text-[16px]
                "
              >
                From lead qualification and CRM workflows to customer support,
                reporting, follow-ups and internal operations, we identify
                where automation can remove friction without removing the human
                judgement that matters.
              </p>
            </motion.div>

            {/* KEY MESSAGE */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.17,
                ease,
              }}
              className="
                mt-5
                flex
                items-start
                gap-3

                sm:mt-6
                sm:gap-4
              "
            >
              <span
                className="
                  mt-1
                  h-[46px]
                  w-[2px]
                  shrink-0
                  bg-[#C6A77A]

                  sm:h-[50px]
                  2xl:h-[54px]
                "
              />

              <p
                style={newYorkFont}
                className="
                  text-[1.16rem]
                  font-light
                  leading-[1.18]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  sm:text-[1.28rem]
                  md:text-[1.35rem]

                  2xl:text-[1.5rem]
                "
              >
                Less manual repetition.
                <br />
                More time for useful work.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.72,
                delay: reduceMotion ? 0 : 0.23,
                ease,
              }}
              className="
                mx-auto
                mt-6

                flex
                w-full
                max-w-[430px]
                flex-row
                flex-nowrap
                items-center
                gap-2

                sm:mx-0
                sm:mt-7
                sm:max-w-none
                sm:gap-3
              "
            >
              {/* PRIMARY */}

              <a
                href="/contact?service=ai-automation#contact-form"
                style={newYorkFont}
                className="
                  group
                  relative
                  inline-flex

                  min-h-[43px]
                  min-w-0
                  flex-1

                  items-center
                  justify-center
                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-2.5
                  py-[9px]

                  text-[9px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#0B2A52]

                  shadow-[0_8px_30px_rgba(11,42,82,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[2px]
                  hover:border-[#6285AD]/40
                  hover:bg-white
                  hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[380px]:px-3
                  min-[380px]:text-[10px]

                  sm:min-h-[46px]
                  sm:flex-none
                  sm:px-5
                  sm:py-[11px]
                  sm:text-[13px]

                  md:min-h-[48px]
                  md:px-6
                  md:py-3
                  md:text-[14px]

                  2xl:text-[15px]
                "
              >
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

                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                    text-[#0B2A52]
                  "
                >
                  Automate My Workflow
                </span>
              </a>

             
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 34,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              relative

              mx-auto
              w-full
              max-w-[620px]

              sm:max-w-[680px]

              xl:max-w-[560px]
              xl:justify-self-end

              2xl:max-w-[680px]
            "
          >
            {/* VERTICAL SIDE LABEL */}

            <div
              className="
                absolute
                -left-6
                top-1/2
                z-20

                hidden
                -translate-y-1/2

                2xl:flex
                2xl:flex-col
                2xl:items-center
                2xl:gap-4
              "
            >
              <span className="h-14 w-px bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  rotate-180

                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#0B2A52]/40

                  [writing-mode:vertical-rl]
                "
              >
                WORKFLOW AUTOMATION
              </span>

              <span className="h-14 w-px bg-[#0B2A52]/10" />
            </div>

            {/* IMAGE FRAME */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[24px_24px_70px_24px]

                border
                border-[#DCE6ED]

                bg-[#F5F9FC]

                shadow-[0_24px_60px_rgba(11,42,82,0.07)]

                sm:rounded-[30px_30px_90px_30px]

                lg:rounded-[36px_36px_105px_36px]

                2xl:rounded-[42px_42px_125px_42px]
              "
            >
              <Image
             
  src="/aihero.webp"
  alt="AI automation connecting business systems, customer support, leads, scheduling and reporting"
  width={1536}
  height={1536}
sizes="(max-width: 639px) 92vw, (max-width: 767px) 88vw, (max-width: 1023px) 80vw, 55vw"
                className="
                  h-auto
                  w-full
                  object-cover

                  xl:max-h-[390px]
                  xl:object-contain

                  2xl:max-h-[470px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  rounded-[inherit]

                  ring-1
                  ring-inset
                  ring-white/80
                "
              />
            </div>

            {/* SMALL META */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                gap-4

                px-1

                sm:mt-6
              "
            >
              <div className="flex items-center gap-2.5">
                <span className="h-[6px] w-[6px] rounded-full bg-[#B18458]" />

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.21em]
                    text-[#0B2A52]/40

                    sm:text-[7px]
                  "
                >
                  CONNECTED SYSTEMS
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles
                  size={11}
                  strokeWidth={1.4}
                  className="text-[#B18458]"
                />

                <span
                  style={newYorkFont}
                  className="
                    text-[6px]
                    uppercase
                    tracking-[0.21em]
                    text-[#0B2A52]/40

                    sm:text-[7px]
                  "
                >
                  LESS FRICTION
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
