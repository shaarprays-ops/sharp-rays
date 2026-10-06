"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  Search,

  FileText,

  Sparkles,

} from "lucide-react";

export default function ContentMarketingFinalCTA() {

  const reduceMotion = useReducedMotion();

  return (

    <section

      id="content-marketing-final-cta"

      aria-labelledby="content-final-cta-heading"

      className="

        relative

        overflow-hidden

        bg-white

        py-20

        sm:py-24

        lg:py-28

        xl:py-32

      "

    >

      {/* =====================================================

          BACKGROUND

      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* LEFT SOFT BLUE GLOW */}

        <div

          className="

            absolute

            -left-[260px]

            top-[8%]

            h-[540px]

            w-[540px]

            rounded-full

            bg-[#EAF3FB]/80

            blur-[150px]

          "

        />

        {/* RIGHT WARM GLOW */}

        <div

          className="

            absolute

            -right-[250px]

            bottom-[-40px]

            h-[520px]

            w-[520px]

            rounded-full

            bg-[#F7EFE7]/75

            blur-[145px]

          "

        />

        {/* LEFT HALF CIRCLES */}

        <div

          className="

            absolute

            -left-[280px]

            top-1/2

            h-[560px]

            w-[560px]

            -translate-y-1/2

            rounded-full

            border

            border-[#0B2A52]/[0.045]

          "

        />

        <div

          className="

            absolute

            -left-[190px]

            top-1/2

            h-[380px]

            w-[380px]

            -translate-y-1/2

            rounded-full

            border

            border-[#B88758]/12

          "

        />

        {/* RIGHT HALF CIRCLES */}

        <div

          className="

            absolute

            -right-[300px]

            top-1/2

            h-[600px]

            w-[600px]

            -translate-y-1/2

            rounded-full

            border

            border-[#0B2A52]/[0.04]

          "

        />

        <div

          className="

            absolute

            -right-[190px]

            top-1/2

            h-[380px]

            w-[380px]

            -translate-y-1/2

            rounded-full

            border

            border-[#B88758]/10

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

          max-w-[1360px]

          px-5

          sm:px-8

          lg:px-12

          xl:px-16

        "

      >

        {/* =====================================================

            CTA SURFACE

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 34,

            scale: reduceMotion ? 1 : 0.985,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

            scale: 1,

          }}

          viewport={{

            once: true,

            amount: 0.25,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.9,

            ease: [0.22, 1, 0.36, 1],

          }}

          className="

            relative

            mx-auto

            max-w-[1180px]

            overflow-hidden

            rounded-[34px]

            border

            border-[#AFC1D0]

            bg-white/90

            px-6

            py-12

            shadow-[0_30px_90px_rgba(11,42,82,0.07)]

            backdrop-blur

            sm:px-8

            sm:py-14

            lg:px-12

            lg:py-16

          "

        >

          {/* ===============================================

              TOP GOLD LINE

          =============================================== */}

          <motion.div

            initial={{

              scaleX: reduceMotion ? 1 : 0,

            }}

            whileInView={{

              scaleX: 1,

            }}

            viewport={{ once: true }}

            transition={{

              duration: reduceMotion ? 0 : 0.85,

              delay: reduceMotion ? 0 : 0.2,

            }}

            className="

              absolute

              left-1/2

              top-0

              h-[3px]

              w-[130px]

              -translate-x-1/2

              origin-center

              bg-[#B88758]

            "

          />

          {/* ===============================================

              INTERNAL CIRCLES

          =============================================== */}

          <div

            className="

              pointer-events-none

              absolute

              -left-[130px]

              -top-[130px]

              h-[310px]

              w-[310px]

              rounded-full

              border

              border-[#0B2A52]/[0.045]

            "

          />

          <div

            className="

              pointer-events-none

              absolute

              -right-[110px]

              -bottom-[120px]

              h-[300px]

              w-[300px]

              rounded-full

              border

              border-[#B88758]/12

            "

          />

          {/* =================================================

              SMALL VISUAL FLOW

          ================================================= */}

          <motion.div

            initial={{

              opacity: 0,

              y: reduceMotion ? 0 : 16,

            }}

            whileInView={{

              opacity: 1,

              y: 0,

            }}

            viewport={{ once: true }}

            transition={{

              duration: reduceMotion ? 0 : 0.7,

              delay: reduceMotion ? 0 : 0.12,

            }}

            className="

              mx-auto

              mb-9

              flex

              max-w-[460px]

              items-center

              justify-center

            "

          >

            {/* KNOWLEDGE */}

            <motion.div

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, -4, 0],

                    }

              }

              transition={{

                duration: 3.2,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                flex

                h-12

                w-12

                shrink-0

                items-center

                justify-center

                rounded-[14px]

                border

                border-[#A9BDCD]

                bg-white

                text-[#0B2A52]

                shadow-[0_8px_20px_rgba(11,42,82,0.07)]

              "

            >

              <Sparkles

                size={18}

                strokeWidth={1.6}

              />

            </motion.div>

            {/* LINE */}

            <div

              className="

                relative

                mx-3

                h-px

                flex-1

                overflow-hidden

                bg-[#C5D0D9]

              "

            >

              <motion.span

                animate={

                  reduceMotion

                    ? undefined

                    : {

                        x: ["-100%", "250%"],

                      }

                }

                transition={{

                  duration: 2.2,

                  repeat: Infinity,

                  ease: "linear",

                }}

                className="

                  absolute

                  top-1/2

                  h-[3px]

                  w-[32px]

                  -translate-y-1/2

                  rounded-full

                  bg-[#B88758]

                "

              />

            </div>

            {/* CONTENT */}

            <motion.div

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, 4, 0],

                    }

              }

              transition={{

                duration: 3.5,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                flex

                h-12

                w-12

                shrink-0

                items-center

                justify-center

                rounded-[14px]

                bg-[#0B2A52]

                text-white

                shadow-[0_10px_25px_rgba(11,42,82,0.15)]

              "

            >

              <FileText

                size={18}

                strokeWidth={1.6}

              />

            </motion.div>

            {/* LINE */}

            <div

              className="

                relative

                mx-3

                h-px

                flex-1

                overflow-hidden

                bg-[#C5D0D9]

              "

            >

              <motion.span

                animate={

                  reduceMotion

                    ? undefined

                    : {

                        x: ["-100%", "250%"],

                      }

                }

                transition={{

                  duration: 2.2,

                  delay: 0.5,

                  repeat: Infinity,

                  ease: "linear",

                }}

                className="

                  absolute

                  top-1/2

                  h-[3px]

                  w-[32px]

                  -translate-y-1/2

                  rounded-full

                  bg-[#B88758]

                "

              />

            </div>

            {/* DISCOVERY */}

            <motion.div

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, -4, 0],

                    }

              }

              transition={{

                duration: 3,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                flex

                h-12

                w-12

                shrink-0

                items-center

                justify-center

                rounded-[14px]

                border

                border-[#D3AF8C]

                bg-[#FBF5EF]

                text-[#A67549]

                shadow-[0_8px_20px_rgba(184,135,88,0.08)]

              "

            >

              <Search

                size={18}

                strokeWidth={1.6}

              />

            </motion.div>

          </motion.div>

          {/* =================================================

              TEXT CONTENT

          ================================================= */}

          <div

            className="

              relative

              z-10

              mx-auto

              max-w-[920px]

              text-center

            "

          >

            {/* EYEBROW */}

            <motion.div

              initial={{

                opacity: 0,

                y: reduceMotion ? 0 : 10,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{ once: true }}

              transition={{

                duration: reduceMotion ? 0 : 0.6,

              }}

              className="

                flex

                items-center

                justify-center

                gap-3

              "

            >

              <span className="h-px w-9 bg-[#B88758]" />

              <span

                className="

                  text-[9px]

                  font-semibold

                  uppercase

                  tracking-[0.28em]

                  text-[#A67549]

                  sm:text-[10px]

                "

              >

                Your Next Move

              </span>

              <span className="h-px w-9 bg-[#B88758]" />

            </motion.div>

            {/* HEADING */}

            <motion.h2

              id="content-final-cta-heading"

              initial={{

                opacity: 0,

                y: reduceMotion ? 0 : 24,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{ once: true }}

              transition={{

                duration: reduceMotion ? 0 : 0.75,

                delay: reduceMotion ? 0 : 0.08,

                ease: [0.22, 1, 0.36, 1],

              }}

              className="

                mx-auto

                mt-6

                max-w-[1000px]

                font-serif

                text-[2.25rem]

                font-medium

                leading-[1.04]

                tracking-[-0.04em]

                text-[#0B2A52]

                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]

              "

            >

              Turn What You Know Into Something{" "}

              <span

                className="

                  font-normal

                  italic

                  text-[#B88758]

                "

              >

                Worth Finding.

              </span>

            </motion.h2>

            {/* COPY */}

            <motion.div

              initial={{

                opacity: 0,

                y: reduceMotion ? 0 : 20,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{ once: true }}

              transition={{

                duration: reduceMotion ? 0 : 0.7,

                delay: reduceMotion ? 0 : 0.16,

              }}

              className="

                mx-auto

                mt-6

                max-w-[760px]

              "

            >

              <p

                className="

                  text-[14px]

                  leading-7

                  text-[#536B83]

                  sm:text-[15px]

                "

              >

                Your business already has knowledge, experience and ideas.

              </p>

              <p

                className="

                  mt-2

                  text-[14px]

                  leading-7

                  text-[#536B83]

                  sm:text-[15px]

                "

              >

                The opportunity is to turn them into content that helps the

                right people discover you, understand you and trust you.

              </p>

              <p

                className="

                  mt-2

                  text-[14px]

                  leading-7

                  text-[#536B83]

                  sm:text-[15px]

                "

              >

                Let’s build a content strategy with a clearer purpose behind

                every page, article and idea.

              </p>

            </motion.div>

            {/* =================================================

                CTA BUTTONS

            ================================================= */}

            <motion.div

              initial={{

                opacity: 0,

                y: reduceMotion ? 0 : 18,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{ once: true }}

              transition={{

                duration: reduceMotion ? 0 : 0.7,

                delay: reduceMotion ? 0 : 0.24,

              }}

              className="

                mt-8

                flex

                flex-col

                items-center

                justify-center

                gap-3

                sm:flex-row

                sm:gap-4

              "

            >

              {/* PRIMARY */}

              <motion.a

                href="/contact?service=content-marketing&need=content-strategy#contact-form"
                title="Build My Content Strategy"
                whileHover={

                  reduceMotion

                    ? undefined

                    : {

                        y: -4,

                        scale: 1.015,

                      }

                }

                whileTap={{

                  scale: 0.98,

                }}

                className="

                  group

                  inline-flex

                  min-h-[44px]

                  items-center

                  justify-center

                  rounded-[14px]

                  bg-[#0B2A52]

                  px-4

                  text-[11px]

                  font-medium

                  tracking-[-0.01em]

                  !text-white

                  shadow-[0_8px_24px_rgba(11,42,82,0.14)]

                  transition-all

                  duration-300

                  hover:-translate-y-[2px]

                  hover:bg-[#123B6A]

                  hover:!text-white

                  hover:shadow-[0_10px_28px_rgba(11,42,82,0.18)]

                  sm:min-h-[46px]

                  sm:px-5

                  sm:text-[12px]

                "

              >

                <span className="!text-white" style={{ color: "#FFFFFF" }}>
                  Build My Content Strategy
                </span>

              </motion.a>

            </motion.div>

            {/* =================================================

                SUPPORTING LINE

            ================================================= */}

            <motion.div

              initial={{

                opacity: 0,

                y: reduceMotion ? 0 : 10,

              }}

              whileInView={{

                opacity: 1,

                y: 0,

              }}

              viewport={{ once: true }}

              transition={{

                duration: reduceMotion ? 0 : 0.65,

                delay: reduceMotion ? 0 : 0.3,

              }}

              className="

                mx-auto

                mt-9

                flex

                max-w-[600px]

                items-center

                gap-4

              "

            >

              <span

                className="

                  h-px

                  flex-1

                  bg-[#C5D0D9]

                "

              />

              <span

                className="

                  shrink-0

                  text-[8px]

                  font-semibold

                  uppercase

                  tracking-[0.22em]

                  text-[#A67549]

                  sm:text-[9px]

                "

              >

                Research · Create · Connect · Grow

              </span>

              <span

                className="

                  h-px

                  flex-1

                  bg-[#C5D0D9]

                "

              />

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}
