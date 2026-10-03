"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        bg-[#6285AD]
        sm:min-h-[105svh]
        lg:min-h-[110svh]
        xl:min-h-[115svh]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src="/hero1.png"
        alt="Sharp Rays Marketing Agency Hero Background"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* Very subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/[0.04]" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <main
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1440px]
          items-start
          px-5
          pb-14
          pt-[105px]

          sm:px-8
          sm:pb-20
          sm:pt-[125px]

          md:px-10
          md:pt-[135px]

          lg:px-14
          lg:pb-24
          lg:pt-[145px]

          xl:px-16
          xl:pt-[155px]

          2xl:px-20
        "
      >
        <div className="w-full">
          {/* =================================================
              MAIN HERO GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-10

              md:gap-12

              lg:grid-cols-[1.04fr_0.96fr]
              lg:gap-8

              xl:gap-12
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="w-full max-w-[720px]">
              {/* =================================================
                  EYEBROW
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }}
                className="
                  mb-5
                  flex
                  w-fit
                  max-w-full
                  items-center
                  gap-2.5

                  sm:mb-7
                  sm:gap-4
                "
              >
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
                  style={newYorkFont}
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#B79A72]

                    sm:text-[10px]
                    sm:tracking-[0.30em]

                    md:text-xs
                  "
                >
                  Turning Attention Into Growth
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
              </motion.div>

              {/* =================================================
                  SEO H1
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease,
                }}
                className="
                  mb-4
                  text-[14px]
                  font-medium
                  tracking-[-0.01em]
                  text-[#0B2A52]

                  sm:mb-5
                  sm:text-[16px]

                  md:text-[18px]
                "
              >
                Digital Marketing Agency for Brands Ready to Grow
              </motion.h1>

              {/* =================================================
                  MAIN HEADLINE
              ================================================= */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.42,
                  ease,
                }}
                style={newYorkFont}
                className="
                  max-w-[720px]
                  text-balance
                  text-[42px]
                  font-light
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Make Your Brand
                <br />

                <span className="text-[#C6A77A]">
                  Impossible to Ignore.
                </span>
              </motion.h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.58,
                  ease,
                }}
                style={newYorkFont}
                className="
                  mt-6
                  max-w-[570px]
                  text-[14px]
                  leading-[1.65]
                  text-[#344054]

                  sm:mt-7
                  sm:text-[16px]
                  sm:leading-[1.7]

                  md:text-[17px]

                  lg:mt-8
                  lg:text-[18px]
                "
              >
                We build search visibility, powerful digital experiences,
                and performance-driven campaigns that turn attention into
                measurable business growth.
              </motion.p>

              {/* =================================================
                  CTA BUTTONS
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.72,
                  ease,
                }}
                className="
                  mt-7
                  flex
                  w-full
                  flex-wrap
                  items-center
                  gap-3

                  sm:mt-8
                  sm:gap-4

                  lg:mt-9
                "
              >
                {/* =================================================
                    PRIMARY CTA
                ================================================= */}

                <Link
                  href="/free-audit"
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

                    hover:-translate-y-[2px]
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
                    Get Your Free Growth Audit
                  </span>
                </Link>

                {/* =================================================
                    SECONDARY CTA
                ================================================= */}

              <Link
  href="/work"
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

    hover:-translate-y-[2px]
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

  <span
    className="
      relative
      z-10
      whitespace-nowrap
      text-[#0B2A52]
    "
  >
    View Our Work
  </span>
</Link>
              </motion.div>

              {/* =================================================
                  TRUST ROW
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.86,
                  ease,
                }}
                className="
                  mt-8
                  flex
                  w-full
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-3

                  sm:mt-9
                  sm:gap-x-6

                  lg:mt-10
                "
              >
                {/* CLIENT STACK */}

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#0B2A52]/80

                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#6285AD]

                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#C6A77A]

                        sm:h-8
                        sm:w-8
                      "
                    />

                    <span
                      className="
                        h-7
                        w-7
                        rounded-full
                        border-2
                        border-white/70
                        bg-[#344054]/70

                        sm:h-8
                        sm:w-8
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[11px]
                      text-[#344054]

                      sm:text-[12px]
                    "
                  >
                    Built for ambitious brands
                  </span>
                </div>

                {/* DIVIDER */}

                <span
                  className="
                    hidden
                    h-5
                    w-px
                    bg-[#0B2A52]/20

                    sm:block
                  "
                />

                {/* ROI */}

                <span
                  className="
                    text-[11px]
                    font-medium
                    text-[#0B2A52]

                    sm:text-[12px]
                  "
                >
                Outcome Focused
                </span>

                {/* DIVIDER */}

                <span
                  className="
                    hidden
                    h-5
                    w-px
                    bg-[#0B2A52]/20

                    sm:block
                  "
                />

                {/* STRATEGY */}

                <span
                  className="
                    text-[11px]
                    text-[#344054]/75

                    sm:text-[12px]
                  "
                >
                  Strategy · Creative · Performance
                </span>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 65,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 0.35,
                ease,
              }}
              className="
                relative
                flex
                min-h-[300px]
                w-full
                items-center
                justify-center
                pt-2

                sm:min-h-[360px]
                sm:pt-4

                md:min-h-[440px]
                md:pt-6

                lg:min-h-[570px]
                lg:pt-0
              "
            >
              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  items-center
                  justify-center
                  px-0

                  sm:px-2
                  md:px-4
                  lg:px-0
                "
              >
                <img
                  src="/hero2.png"
                  alt=""
                  className="
                    block
                    h-auto
                    w-full
                    max-w-[430px]
                    object-contain
                    object-center

                    sm:max-w-[520px]
                    md:max-w-[620px]
                    lg:max-w-[650px]
                    xl:max-w-[720px]
                    2xl:max-w-[780px]
                  "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
}