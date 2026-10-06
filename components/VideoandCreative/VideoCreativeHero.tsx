"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Play,
  Sparkles,
  Video,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiVideoEditingHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ai-video-editing-hero"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-white
      "
    >


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          pb-16
          pt-[110px]
          sm:px-8
          sm:pt-[125px]
          md:px-10
          lg:px-14
          lg:pb-20
          lg:pt-[140px]
          xl:px-16
          2xl:px-20
        "
      >
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
           
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C6A77A] sm:w-11" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#C6A77A]
                sm:text-[10px]
                md:text-[11px]
              "
            >
              AI Video & Video Editing
            </span>
          </div>

       
        </motion.div>

        {/* =======================================================
            MAIN HERO
        ======================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-14
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-center
            lg:gap-8
            xl:gap-14
          "
        >
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <div className="relative z-20">
          

            {/* HEADLINE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: reduceMotion ? 0 : 0.18,
                ease,
              }}
              style={newYorkFont}
              className="
                max-w-[720px]
                text-[42px]
                font-light
                leading-[0.94]
                tracking-[-0.05em]
                text-[#0B2A52]
                sm:text-[2.6rem]
                md:text-[2.95rem]
                lg:text-[3.1rem]
                xl:text-[3.35rem]
              "
            >
              Faster to Create. Better to Watch.{" "}
              <span className="relative inline-block text-[#C6A77A]">
                Built to Perform.

                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.75,
                    ease,
                  }}
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    bg-[#C6A77A]/60
                  "
                />
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.32,
                ease,
              }}
              style={newYorkFont}
              className="
                mt-7
                max-w-[585px]
                space-y-4
                text-[14px]
                leading-[1.72]
                text-[#344054]
                sm:text-[16px]
                md:text-[17px]
              "
            >
              <p>
                Sharp Rays combines AI-powered video creation with professional
                editing to help brands produce stronger visual content without
                turning every idea into a traditional production.
              </p>

              <p>
                From AI-generated scenes and short-form content to advertising
                edits, social videos, motion graphics and post-production, we
                turn raw ideas and existing assets into videos built for modern
                digital channels.
              </p>
            </motion.div>

            {/* KEY MESSAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.45,
                ease,
              }}
              className="
                mt-7
                max-w-[590px]
                rounded-r-[22px]
                border-l-[3px]
                border-[#C6A77A]
                bg-white/55
                px-5
                py-4
                backdrop-blur-sm
              "
            >
              <p
                style={newYorkFont}
                className="
                  text-[13px]
                  leading-[1.7]
                  text-[#0B2A52]
                  sm:text-[15px]
                "
              >
                AI can accelerate the process.
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-1
                  text-[13px]
                  font-medium
                  leading-[1.7]
                  text-[#0B2A52]
                  sm:text-[15px]
                "
              >
                Good editing gives the idea its impact.
              </p>
            </motion.div>

            {/* =====================================================
                CTAs
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.55,
                ease,
              }}
              className="
                mt-7

                flex
                w-full
                max-w-[430px]
                flex-row
                flex-nowrap
                items-center
                gap-2

                sm:mt-8
                sm:max-w-none
                sm:gap-3
              "
            >
              {/* PRIMARY CTA */}

              <Link
                href="/contact?service=ai-video-editing#contact-form"
                title="Create My Video"
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
                  gap-1.5

                  overflow-hidden

                  rounded-[16px]

                  border
                  border-[#6285AD]/30

                  bg-white/85

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
                  hover:border-[#6285AD]/45
                  hover:bg-white
                  hover:shadow-[0_12px_34px_rgba(98,133,173,0.15)]

                  active:translate-y-0

                  min-[390px]:px-3
                  min-[390px]:text-[11.5px]

                  sm:min-h-[46px]
                  sm:flex-none
                  sm:px-5
                  sm:py-[11px]
                  sm:text-[13px]

                  md:min-h-[48px]
                  md:px-6
                  md:py-3
                  md:text-[14px]
                "
              >
                {/* inner glass edge */}
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

                {/* subtle top highlight */}
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
                  "
                >
                  Create My Video
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.8}
                  className="
                    relative
                    z-10
                    shrink-0

                    text-[#B79A72]

                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5

                    sm:h-[13px]
                    sm:w-[13px]
                  "
                />
              </Link>

             
            </motion.div>

            {/* =====================================================
                SUPPORTING LINE
            ===================================================== */}

        </div>

          {/* =====================================================
              RIGHT — VIDEO EDITING STAGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 60,
              scale: reduceMotion ? 1 : 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.2,
              ease,
            }}
            className="
              relative
              mx-auto
              min-h-[510px]
              w-full
              max-w-[680px]
              sm:min-h-[600px]
              lg:min-h-[620px]
            "
          >
            {/* LARGE TYPOGRAPHY */}

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={newYorkFont}
              className="
                pointer-events-none
                absolute
                right-[1%]
                top-[1%]
                text-[74px]
                font-light
                leading-none
                tracking-[-0.08em]
                text-[#0B2A52]/[0.055]
                sm:text-[110px]
                lg:text-[128px]
              "
            >
              PLAY
            </motion.span>

            {/* =================================================
                BACK FRAME — AI SCENE
            ================================================= */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotate: [-7, -6, -7],
                    }
              }
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[6%]
                top-[15%]
                h-[330px]
                w-[58%]
                rotate-[-7deg]
                rounded-[34px]
                border
                border-[#0B2A52]/10
                bg-[#6285AD]
                shadow-[0_30px_70px_rgba(11,42,82,0.12)]
              "
            >
              <div
                className="
                  absolute
                  inset-5
                  rounded-[24px]
                  border
                  border-white/20
                "
              />

              <div
                style={newYorkFont}
                className="
                  absolute
                  bottom-7
                  left-7
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                AI Scene / 01
              </div>
            </motion.div>

            {/* =================================================
                BACK FRAME — EDITING LAYER
            ================================================= */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 10, 0],
                      rotate: [7, 6, 7],
                    }
              }
              transition={{
                duration: 7.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[2%]
                top-[21%]
                h-[320px]
                w-[55%]
                rotate-[7deg]
                rounded-[34px]
                border
                border-[#C6A77A]/30
                bg-[#E9DDCA]
                shadow-[0_30px_70px_rgba(11,42,82,0.09)]
              "
            >
              <Sparkles
                size={28}
                strokeWidth={1.2}
                className="
                  absolute
                  right-7
                  top-7
                  text-[#C6A77A]
                "
              />
            </motion.div>

            {/* =================================================
                MAIN VIDEO CANVAS
            ================================================= */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-[12%]
                z-20
                w-[82%]
                -translate-x-1/2
                overflow-hidden
                rounded-[34px]
                border-[6px]
                border-white
                bg-white
                shadow-[0_35px_100px_rgba(11,42,82,0.20)]
              "
            >
              {/* TOP BAR */}

              <div
                className="
                  flex
                  h-12
                  items-center
                  justify-between
                  border-b
                  border-[#0B2A52]/10
                  bg-white
                  px-5
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C6A77A]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#6285AD]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#0B2A52]/20" />
                </div>

             
              </div>

              {/* =================================================
                  VIDEO SCREEN
              ================================================= */}

              <div
                className="
                  relative
                  aspect-[1.3/1]
                  overflow-hidden
                  bg-[#0B2A52]
                "
              >
                {/* GOLD SPHERE */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.05, 1],
                          x: [0, 8, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-[25%]
                    -left-[15%]
                    h-[75%]
                    w-[75%]
                    rounded-full
                    bg-[#C6A77A]
                  "
                />

                {/* BLUE CIRCLE */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -12, 0],
                        }
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -right-[7%]
                    top-[8%]
                    h-[155px]
                    w-[155px]
                    rounded-full
                    border-[30px]
                    border-[#6285AD]/30
                    sm:h-[190px]
                    sm:w-[190px]
                  "
                />

                {/* =================================================
                    WAVEFORM
                ================================================= */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-10
                    items-end
                    gap-[3px]
                  "
                >
                  {[11, 21, 15, 30, 18, 36, 23, 17, 29, 15].map(
                    (height, index) => (
                      <motion.span
                        key={index}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                height: [
                                  height,
                                  Math.max(7, height - 9),
                                  height,
                                ],
                              }
                        }
                        transition={{
                          duration: 0.9 + index * 0.07,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          w-[3px]
                          rounded-full
                          bg-white/45
                        "
                        style={{ height }}
                      />
                    )
                  )}
                </div>

                {/* =================================================
                    PLAY BUTTON
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                  "
                >
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 360,
                          }
                    }
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      h-[100px]
                      w-[100px]
                      rounded-full
                      border
                      border-dashed
                      border-white/30
                    "
                  />

                  <motion.button
                    type="button"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                          }
                    }
                    className="
                      relative
                      z-10
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-[#0B2A52]
                      shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                    "
                    aria-label="Play video preview"
                  >
                    <Play
                      size={21}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </motion.button>
                </div>

                {/* =================================================
                    VIDEO MESSAGE
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                  "
                >
                  <p
                    style={newYorkFont}
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      text-white/55
                      sm:text-[9px]
                    "
                  >
                    AI Scene / Edit / Impact
                  </p>

                  <p
                    style={newYorkFont}
                    className="
                      mt-2
                      max-w-[330px]
                      text-[20px]
                      font-light
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-white
                      sm:text-[27px]
                    "
                  >
                    Built for modern digital channels.
                  </p>
                </div>
              </div>

              {/* =================================================
                  EDITING TIMELINE
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-white
                  px-5
                  py-4
                "
              >
                <Film
                  size={16}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#C6A77A]"
                />

                <div
                  className="
                    relative
                    h-1.5
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-[#0B2A52]/10
                  "
                >
                  <motion.div
                    initial={{
                      width: "10%",
                    }}
                    animate={{
                      width: "70%",
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 2,
                      delay: reduceMotion ? 0 : 0.9,
                      ease,
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      rounded-full
                      bg-[#C6A77A]
                    "
                  />
                </div>

                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    text-[#344054]/70
                    sm:text-[9px]
                  "
                >
                  00:08
                </span>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING SHORT-FORM FRAME
            ================================================= */}


            
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM CREATIVE STRIP
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mt-14
            overflow-hidden
            rounded-[22px]
            border
            border-[#0B2A52]/10
            bg-white/50
            backdrop-blur-md
            lg:mt-8
          "
        >
          <div
            style={newYorkFont}
            className="
              flex
              min-w-max
              items-center
              gap-6
              px-5
              py-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#0B2A52]/65
              sm:gap-9
              sm:px-7
              sm:text-[10px]
            "
          >
            <span>AI-Generated Scenes</span>

            <span className="text-[#C6A77A]">●</span>

            <span>Short-Form Video</span>

            <span className="text-[#C6A77A]">●</span>

            <span>Advertising Edits</span>

            <span className="text-[#C6A77A]">●</span>

            <span>Motion Graphics</span>

            <span className="text-[#C6A77A]">●</span>

            <span>Post-Production</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}