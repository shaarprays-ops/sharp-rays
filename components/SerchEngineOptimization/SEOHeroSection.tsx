"use client";

import Image from "next/image";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {

  fontFamily: '"New York",  Georgia, serif',

};

/* =========================================================

   REUSABLE GLASS BUTTON

\========================================================= */
function GlassButton({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      style={newYorkFont}
      className="
        group relative inline-flex min-h-[46px] w-full items-center justify-center overflow-hidden
        rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px]
        text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52]
        shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px]
        transition-all duration-300 ease-out
        hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white
        hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]
        active:translate-y-0 sm:min-h-[48px] sm:w-auto sm:px-6 sm:py-3
        sm:text-[14px] md:text-[15px]
      "
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />

      <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">
        {label}
      </span>
    </Link>
  );
}

/* =========================================================

   SEO HERO

\========================================================= */

export default function SEOHeroSection() {

  const reduceMotion = useReducedMotion();

  const fadeUp = {

    hidden: {

      opacity: 0,

      y: reduceMotion ? 0 : 26,

    },

    visible: {

      opacity: 1,

      y: 0,

      transition: {

        duration: 0.85,

        ease,

      },

    },

  };

  const imageReveal = {

    hidden: {

      opacity: 0,

      x: reduceMotion ? 0 : 45,

      scale: reduceMotion ? 1 : 0.97,

    },

    visible: {

      opacity: 1,

      x: 0,

      scale: 1,

      transition: {

        duration: 1.1,

        delay: 0.2,

        ease,

      },

    },

  };

  return (

    <section

      id="seo-hero"

      className="

        relative

        min-h-0

        overflow-hidden

        bg-white

        text-[#0B2A52]

        lg:min-h-screen

      "

    >

      {/* =====================================================

          BACKGROUND IMAGE

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          inset-0

        "

      >

      <Image

  src="/services/seo/seo-hero.webp"

  alt="Search engine optimization illustration showing search performance and website discovery"

  title="Search Engine Optimization Services at Sharp Rays"

          fill

          priority

          sizes="100vw"

          className="

            object-cover

            object-center

          "

        />

      </div>

      {/* =====================================================

          RESPONSIVE BACKGROUND OVERLAY

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          inset-0

          bg-gradient-to-b

          from-white/95

          via-white/90

          to-white/90

          sm:from-white/94

          sm:via-white/87

          sm:to-white/80

          lg:bg-gradient-to-r

          lg:from-white/94

          lg:via-white/62

          lg:to-white/10

          xl:from-white/92

          xl:via-white/48

          xl:to-transparent

        "

      />

      {/* =====================================================

          LEFT SOFT LIGHT

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          -left-40

          top-[20%]

          h-[360px]

          w-[360px]

          rounded-full

          bg-white/70

          blur-[100px]

          sm:h-[420px]

          sm:w-[420px]

        "

      />

      {/* =====================================================

          NAVY SOFT GLOW

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          -right-40

          bottom-[-170px]

          h-[420px]

          w-[420px]

          rounded-full

          bg-[#0B2A52]/[0.045]

          blur-[110px]

          sm:h-[520px]

          sm:w-[520px]

        "

      />

      {/* =====================================================

          GOLD SOFT GLOW

      ===================================================== */}

      <div

        aria-hidden="true"

        className="

          pointer-events-none

          absolute

          right-[5%]

          top-[30%]

          h-[260px]

          w-[260px]

          rounded-full

          bg-[#C6A77A]/[0.06]

          blur-[90px]

          sm:right-[15%]

          sm:h-[330px]

          sm:w-[330px]

          lg:right-[20%]

          lg:top-[20%]

        "

      />

      {/* =====================================================

          MAIN CONTAINER

      ===================================================== */}

      <div

        className="

          relative

          z-10

          mx-auto

          flex

          w-full

          max-w-[1500px]

          items-center

          px-5

          pb-16

          pt-24

          sm:px-8

          sm:pb-20

          sm:pt-28

          md:pb-24

          md:pt-32

          lg:min-h-screen

          lg:px-12

          lg:pb-20

          lg:pt-28

          xl:px-16

          xl:pb-20

          xl:pt-32

        "

      >

        <div

          className="

            grid

            w-full

            grid-cols-1

            items-center

            gap-10

            sm:gap-12

            md:gap-14

            lg:grid-cols-[0.9fr_1.1fr]

            lg:gap-4

            xl:grid-cols-[0.88fr_1.12fr]

            xl:gap-6

          "

        >

          {/* =================================================

              LEFT CONTENT

          ================================================= */}

          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{

              once: true,

              amount: 0.15,

            }}

            transition={{

              staggerChildren: 0.1,

            }}

            className="

              relative

              z-20

              mx-auto

              w-full

              max-w-[650px]

              lg:mx-0

              lg:max-w-[590px]

            "

          >

            {/* =============================================

                EYEBROW

            ============================================= */}

            <motion.div

              variants={fadeUp}

              className="

                flex

                items-center

                gap-3

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

                className="

                  text-[9px]

                  uppercase

                  tracking-[0.22em]

                  text-[#B79A72]

                  sm:text-[10px]

                  sm:tracking-[0.28em]

                "

              >

                SEARCH ENGINE OPTIMIZATION

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

            {/* =============================================

                MAIN HEADING

            ============================================= */}

            <motion.h1

              variants={fadeUp}

              style={newYorkFont}

              className="

                mt-6

                max-w-[580px]

                text-[2.4rem]

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

              SEO That Helps the

              <br className="hidden xs:block" />

              <span className="sm:hidden"> </span>

              Right Customers

              <br />

              <span className="text-[#B79A72]">

                Find You.

              </span>

            </motion.h1>

            {/* =============================================

                DESCRIPTION 01

            ============================================= */}

            <motion.p

              variants={fadeUp}

              className="

                mt-6

                max-w-[530px]

                text-[13px]

                leading-7

                text-[#0B2A52]/60

                sm:text-[14px]

                sm:leading-7

                md:text-[15px]

              "

            >

              Sharp Rays is an SEO agency helping businesses improve organic

              visibility, strengthen search performance and turn relevant

              searches into meaningful website visits and business

              opportunities.

            </motion.p>

            {/* =============================================

                DESCRIPTION 02

            ============================================= */}

            <motion.p

              variants={fadeUp}

              className="

                mt-4

                max-w-[530px]

                text-[13px]

                leading-7

                text-[#0B2A52]/60

                sm:text-[14px]

                md:text-[15px]

              "

            >

              From technical SEO and keyword strategy to on-page optimization,

              content and performance analysis, we connect every part of your

              SEO around one goal:

            </motion.p>

            {/* =============================================

                MAIN SEO GOAL

            ============================================= */}

            <motion.div

              variants={fadeUp}

              className="

                mt-4

                flex

                max-w-[530px]

                items-start

                gap-3

              "

            >

              <span

                aria-hidden="true"

                className="

                  mt-[7px]

                  h-8

                  w-[2px]

                  shrink-0

                  rounded-full

                  bg-[#C6A77A]

                "

              />

              <p

                className="

                  text-[13px]

                  font-semibold

                  leading-7

                  text-[#C6A77A]

                  sm:text-[14px]

                  md:text-[15px]

                "

              >

                Make your business easier to find when the right people are

                searching.

              </p>

            </motion.div>

            {/* =============================================

                CTA BUTTONS

            ============================================= */}

            <motion.div

              variants={fadeUp}

              className="

                mt-8

                flex

                w-full

                flex-col

                gap-3

                sm:w-auto

                sm:flex-row

                sm:flex-wrap

                sm:items-center

              "

            >
<GlassButton
  href="/contact?service=seo#contact-form"
  label="Improve My Search Visibility"
  title="Contact Sharp Rays for Search Engine Optimization Services"
/>

            </motion.div>

            {/* =============================================

                SUPPORTING LINE

            ============================================= */}

            <motion.div

              variants={fadeUp}

              className="

                mt-8

                flex

                flex-wrap

                items-center

                gap-x-4

                gap-y-2

                sm:mt-10

              "

            >

              <div

                className="

                  h-px

                  w-8

                  bg-[#0B2A52]/12

                  sm:w-10

                "

              />

              <p

                className="

                  text-[7px]

                  font-medium

                  tracking-[0.15em]

                  text-[#0B2A52]/40

                  sm:text-[8px]

                  sm:tracking-[0.19em]

                "

              >

                TECHNICAL · CONTENT · AUTHORITY · GROWTH

              </p>

            </motion.div>

          </motion.div>

          {/* =================================================

              RIGHT SEO VISUAL

          ================================================= */}

          <motion.div

            variants={imageReveal}

            initial="hidden"

            whileInView="visible"

            viewport={{

              once: true,

              amount: 0.15,

            }}

            className="

              relative

              mx-auto

              mt-2

              flex

              min-h-[300px]

              w-full

              max-w-[680px]

              items-center

              justify-center

              sm:min-h-[390px]

              md:min-h-[450px]

              lg:mx-0

              lg:ml-auto

              lg:mt-0

              lg:min-h-[570px]

              lg:max-w-none

              lg:justify-end

              xl:min-h-[600px]

            "

          >

            {/* =============================================

                LARGE BACK ORBIT

            ============================================= */}

            <motion.div

              initial={{

                opacity: 0,

                scale: reduceMotion ? 1 : 0.85,

              }}

              whileInView={{

                opacity: 1,

                scale: 1,

              }}

              viewport={{

                once: true,

                amount: 0.2,

              }}

              transition={{

                duration: 1.3,

                delay: 0.35,

                ease,

              }}

              className="

                pointer-events-none

                absolute

                right-[7%]

                top-1/2

                hidden

                h-[500px]

                w-[500px]

                -translate-y-1/2

                rounded-full

                border

                border-[#C6A77A]/15

                lg:block

              "

            />

            {/* =============================================

                SECOND ORBIT

            ============================================= */}

            <motion.div

              initial={{

                opacity: 0,

                scale: reduceMotion ? 1 : 0.88,

              }}

              whileInView={{

                opacity: 1,

                scale: 1,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                duration: 1.3,

                delay: 0.45,

                ease,

              }}

              className="

                pointer-events-none

                absolute

                right-[14%]

                top-1/2

                hidden

                h-[390px]

                w-[390px]

                -translate-y-1/2

                rounded-full

                border

                border-[#0B2A52]/[0.06]

                lg:block

              "

            />

            {/* =============================================

                IMAGE BACK GLOW

            ============================================= */}

            <motion.div

              initial={{

                opacity: 0,

                scale: 0.8,

              }}

              whileInView={{

                opacity: 1,

                scale: 1,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                duration: 1.4,

                delay: 0.25,

                ease,

              }}

              className="

                pointer-events-none

                absolute

                left-1/2

                top-1/2

                h-[260px]

                w-[260px]

                -translate-x-1/2

                -translate-y-1/2

                rounded-full

                bg-[#0B2A52]/[0.055]

                blur-[80px]

                sm:h-[340px]

                sm:w-[340px]

                md:h-[400px]

                md:w-[400px]

                lg:left-auto

                lg:right-[8%]

                lg:h-[500px]

                lg:w-[500px]

                lg:translate-x-0

                lg:blur-[95px]

              "

            />

            {/* =============================================

                MAIN IMAGE

            ============================================= */}

            <motion.div

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, -7, 0],

                    }

              }

              transition={{

                duration: 6,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                relative

                z-10

                mx-auto

                w-full

                max-w-[520px]

                sm:max-w-[600px]

                md:max-w-[660px]

                lg:ml-auto

                lg:mr-0

                lg:max-w-[760px]

                xl:max-w-[800px]

              "

            >

    <Image

  src="/services/seo/seo-bg2.webp"

  alt="SEO illustration representing organic search visibility, rankings and website growth"

  title="SEO Visibility and Organic Growth"

  width={950}

  height={950}

  sizes="(max-width: 639px) 92vw, (max-width: 767px) 88vw, (max-width: 1023px) 80vw, 55vw"

  preload

                className="

                  h-auto

                  w-full

                  object-contain

                  object-center

                  drop-shadow-[0_24px_45px_rgba(11,42,82,0.09)]

                  lg:drop-shadow-[0_32px_55px_rgba(11,42,82,0.10)]

                "

              />

            </motion.div>

            {/* =============================================

                DECORATIVE DETAILS

            ============================================= */}

            <motion.span

              animate={

                reduceMotion

                  ? undefined

                  : {

                      scale: [1, 1.4, 1],

                      opacity: [0.6, 1, 0.6],

                    }

              }

              transition={{

                duration: 3,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                pointer-events-none

                absolute

                right-[11%]

                top-[15%]

                hidden

                h-2

                w-2

                rounded-full

                bg-[#C6A77A]

                shadow-[0_0_24px_rgba(198,167,122,0.55)]

                lg:block

              "

            />

            <motion.span

              animate={

                reduceMotion

                  ? undefined

                  : {

                      y: [0, 5, 0],

                    }

              }

              transition={{

                duration: 4,

                repeat: Infinity,

                ease: "easeInOut",

              }}

              className="

                pointer-events-none

                absolute

                bottom-[17%]

                left-[15%]

                hidden

                h-1.5

                w-1.5

                rounded-full

                bg-[#0B2A52]/35

                lg:block

              "

            />

          </motion.div>

        </div>

      </div>

    </section>

  );

}