"use client";

import { motion, useReducedMotion } from "framer-motion";

import {

  ArrowRight,

  Check,

  Code2,

  LayoutTemplate,

  MessageCircle,

  MousePointer2,

  Sparkles,

} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WebsiteFinalSections() {

  const reduceMotion = Boolean(useReducedMotion());

  const fadeUp = {

    hidden: {

      opacity: 0,

      y: reduceMotion ? 0 : 24,

    },

    visible: {

      opacity: 1,

      y: 0,

      transition: {

        duration: 0.7,

        ease,

      },

    },

  };

  const stagger = {

    hidden: {},

    visible: {

      transition: {

        staggerChildren: reduceMotion ? 0 : 0.08,

      },

    },

  };

  return (

    <>

      {/* =====================================================

          SECTION 15 — FINAL CTA

      ===================================================== */}

      <section

        id="website-final-cta"

        aria-labelledby="website-final-cta-heading"

        className="

          relative

          isolate

          overflow-hidden

          bg-white

          pb-20

          pt-8

          sm:pb-24

          md:pb-28

          lg:pb-32

        "

      >

        <div

          className="

            relative

            mx-auto

            w-full

            max-w-[1400px]

            px-5

            sm:px-7

            md:px-9

            lg:px-12

            xl:px-16

          "

        >

          <motion.div

            initial={{

              opacity: 0,

              y: reduceMotion ? 0 : 30,

              scale: reduceMotion ? 1 : 0.99,

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

              duration: 0.8,

              ease,

            }}

            className="

              relative

              overflow-hidden

              rounded-[30px]

              border

              border-[#D4E0E8]

              bg-[linear-gradient(135deg,#F1F7FB_0%,#FFFFFF_48%,#FBF6EE_100%)]

              px-5

              py-16

              shadow-[0_30px_80px_rgba(11,42,82,0.08)]

              sm:rounded-[36px]

              sm:px-8

              sm:py-20

              lg:px-12

              lg:py-24

            "

          >

            {/* DECORATIVE HALF CIRCLES */}

            <div

              className="

                pointer-events-none

                absolute

                -left-[170px]

                -top-[200px]

                h-[450px]

                w-[450px]

                rounded-full

                border

                border-[#C9DAE6]

              "

            />

            <div

              className="

                pointer-events-none

                absolute

                -left-[110px]

                -top-[140px]

                h-[330px]

                w-[330px]

                rounded-full

                border

                border-[#DCE7ED]

              "

            />

            <div

              className="

                pointer-events-none

                absolute

                -bottom-[240px]

                -right-[170px]

                h-[500px]

                w-[500px]

                rounded-full

                border

                border-[#DFC9A7]

              "

            />

            <div

              className="

                pointer-events-none

                absolute

                -bottom-[180px]

                -right-[110px]

                h-[370px]

                w-[370px]

                rounded-full

                border

                border-[#EEE0CB]

              "

            />

            {/* SOFT GLOWS */}

            <div

              className="

                pointer-events-none

                absolute

                left-[12%]

                top-[-80px]

                h-[330px]

                w-[330px]

                rounded-full

                bg-[#DDECF7]

                opacity-55

                blur-[95px]

              "

            />

            <div

              className="

                pointer-events-none

                bottom-[-120px]

                right-[10%]

                absolute

                h-[360px]

                w-[360px]

                rounded-full

                bg-[#F3E8D8]

                opacity-65

                blur-[100px]

              "

            />

            {/* CONTENT */}

            <motion.div

              variants={stagger}

              initial="hidden"

              whileInView="visible"

              viewport={{

                once: true,

                amount: 0.35,

              }}

              className="

                relative

                z-10

                mx-auto

                max-w-[950px]

                text-center

              "

            >

              {/* EYEBROW */}

              <motion.div

                variants={fadeUp}

                className="

                  flex

                  items-center

                  justify-center

                  gap-4

                "

              >

                <span className="h-px w-8 bg-[#B79A72]" />

                <span

                  className="

                    text-[0.55rem]

                    font-semibold

                    uppercase

                    tracking-[0.29em]

                    text-[#92745C]

                    sm:text-[0.61rem]

                  "

                >

                  Your Next Move

                </span>

                <span className="h-px w-8 bg-[#B79A72]" />

              </motion.div>

              {/* HEADING */}

              <motion.h2

                id="website-final-cta-heading"

                variants={fadeUp}

                className="

                  mx-auto

                  mt-5

                  max-w-[900px]

                  font-serif

                  text-[2.1rem]

                  font-normal

                  leading-[1.03]

                  tracking-[-0.045em]

                  text-[#0B2A52]

                  sm:text-[2.6rem]

                  md:text-[2.95rem]

                  lg:text-[3.1rem]

                  xl:text-[3.35rem]

                "

              >

                Build a Website People{" "}

                <span className="italic text-[#A97C52]">

                  Understand.

                </span>

              </motion.h2>

              {/* BODY */}

              <motion.p

                variants={fadeUp}

                className="

                  mx-auto

                  mt-6

                  max-w-[720px]

                  font-serif

                  text-[0.94rem]

                  leading-[1.8]

                  text-[#5E7488]

                  sm:text-[1rem]

                "

              >

                A strong website should make your business easier to discover,

                easier to trust and easier to choose.

              </motion.p>

              <motion.p

                variants={fadeUp}

                className="

                  mx-auto

                  mt-3

                  max-w-[740px]

                  font-serif

                  text-[0.94rem]

                  leading-[1.8]

                  text-[#5E7488]

                  sm:text-[1rem]

                "

              >

                Let&apos;s create an experience that looks considered, works

                smoothly and gives every visitor a clearer next step.

              </motion.p>

              {/* CTA BUTTONS */}

              <motion.div

                variants={fadeUp}

                className="

                  mx-auto

                  mt-8

                  flex

                  w-full

                  max-w-[430px]

                  flex-col

                  items-stretch

                  justify-center

                  gap-2.5

                  sm:mt-9

                  sm:max-w-none

                  sm:flex-row

                  sm:items-center

                  sm:gap-3

                "

              >

                {/* PRIMARY */}

                <a

                  href="/contact?service=website-development#contact-form"

                  style={{

                    fontFamily: '"New York", "", Georgia, serif',

                  }}

                  className="

                    group

                    relative

                    inline-flex

                    min-h-[44px]

                    w-full

                    items-center

                    justify-center

                    gap-2

                    overflow-hidden

                    rounded-[16px]

                    border

                    border-[#6285AD]/30

                    bg-white/80

                    px-4

                    py-[10px]

                    text-[12px]

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

                    sm:min-h-[46px]

                    sm:w-auto

                    sm:px-5

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

                  <span className="relative z-10 whitespace-nowrap">

                    Build My Website

                  </span>

                 

                </a>

                {/* SECONDARY */}

                <a

                  href="/contact?service=website-development#contact-form"

                  style={{

                    fontFamily: '"New York", "", Georgia, serif',

                  }}

                  className="

                    group

                    relative

                    inline-flex

                    min-h-[44px]

                    w-full

                    items-center

                    justify-center

                    gap-2

                    overflow-hidden

                    rounded-[16px]

                    border

                    border-[#6285AD]/25

                    bg-white/60

                    px-4

                    py-[10px]

                    text-[12px]

                    font-medium

                    tracking-[-0.01em]

                    text-[#0B2A52]

                    shadow-[0_6px_24px_rgba(11,42,82,0.055)]

                    backdrop-blur-[8px]

                    transition-all

                    duration-300

                    ease-out

                    hover:-translate-y-[2px]

                    hover:border-[#6285AD]/40

                    hover:bg-white

                    hover:shadow-[0_10px_32px_rgba(98,133,173,0.12)]

                    active:translate-y-0

                    sm:min-h-[46px]

                    sm:w-auto

                    sm:px-5

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

                      border-white/60

                    "

                  />

                  <span className="relative z-10 whitespace-nowrap">

                    Talk to Sharp Rays

                  </span>


                </a>

              </motion.div>

              

            </motion.div>

            {/* FLOATING DOTS */}

            <motion.span

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, -8, 0],

                    }

              }

              transition={{

                duration: 4.5,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                absolute

                left-[12%]

                top-[28%]

                hidden

                h-2

                w-2

                rounded-full

                bg-[#B79A72]

                lg:block

              "

            />

            <motion.span

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, 8, 0],

                    }

              }

              transition={{

                duration: 5,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                absolute

                bottom-[25%]

                right-[14%]

                hidden

                h-2

                w-2

                rounded-full

                bg-[#0B2A52]

                lg:block

              "

            />

          </motion.div>

        </div>

      </section>

    </>

  );

}
