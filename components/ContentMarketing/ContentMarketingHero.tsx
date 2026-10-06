"use client";

import Image from "next/image";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function ContentMarketingHero() {

  const reduceMotion = useReducedMotion();

  const reveal = {

    hidden: {

      opacity: 0,

      y: reduceMotion ? 0 : 22,

    },

    visible: {

      opacity: 1,

      y: 0,

      transition: {

        duration: reduceMotion ? 0 : 0.7,

        ease: [0.22, 1, 0.36, 1] as const,

      },

    },

  };

  return (

    <section

      id="content-marketing-hero"

      aria-labelledby="content-marketing-heading"

      className="

        relative

        overflow-hidden

        bg-white

      "

    >

      {/* =====================================================

          HERO CONTAINER

      ===================================================== */}

      <div

        className="

          relative

          mx-auto

          flex

          w-full

          max-w-[1540px]

          items-center

          px-5

          pb-16

          pt-28

          sm:px-8

          sm:pb-16

          sm:pt-32

          md:px-10

          lg:min-h-screen

          lg:px-14

          lg:pb-8

          lg:pt-[125px]

          xl:px-16

          xl:pb-10

          xl:pt-[135px]

          2xl:px-20

        "

      >

        {/* ===================================================

            TWO COLUMN LAYOUT

        =================================================== */}

        <div

          className="

            grid

            w-full

            items-center

            gap-12

            lg:grid-cols-[1.1fr_0.9fr]

            lg:gap-10

            xl:grid-cols-[1.12fr_0.88fr]

            xl:gap-14

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

              amount: 0.2,

            }}

            transition={{

              staggerChildren: reduceMotion ? 0 : 0.085,

            }}

            className="

              relative

              z-10

              mx-auto

              w-full

              max-w-[760px]

              lg:mx-0

              lg:max-w-[750px]

              xl:max-w-[790px]

            "

          >

            {/* ===============================================

                LABEL

            =============================================== */}

            <motion.div

              variants={reveal}

              className="

                mb-5

                flex

                items-center

                gap-4

              "

            >

              <span

                className="

                  h-px

                  w-10

                  bg-[#B88758]

                "

              />

              <span

                className="

                  text-[0.68rem]

                  font-semibold

                  uppercase

                  tracking-[0.3em]

                  text-[#A67549]

                  sm:text-[0.73rem]

                "

              >

                Content Marketing

              </span>

            </motion.div>

            {/* ===============================================

                MAIN HEADING

            =============================================== */}

            <motion.h1

              id="content-marketing-heading"

              variants={reveal}

              className="

                max-w-[760px]

                font-serif

                text-[2.25rem]

                font-medium

                leading-[1.04]

                tracking-[-0.035em]

                text-[#0B2A52]

                sm:text-[2.6rem]

                md:text-[2.95rem]

                lg:text-[3.1rem]

                xl:text-[3.35rem]

              "

            >

              Content That Gives People a Reason to{" "}

              <span

                className="

                  font-normal

                  italic

                  text-[#B88758]

                "

              >

                Find, Trust and Remember You.

              </span>

            </motion.h1>

            {/* ===============================================

                CONTENT

            =============================================== */}

            <motion.div

              variants={reveal}

              className="

                mt-6

                max-w-[700px]

                space-y-3.5

                text-[0.92rem]

                leading-[1.65]

                text-[#48617F]

                sm:text-[0.96rem]

                lg:text-[0.94rem]

                xl:text-[0.97rem]

              "

            >

              <p>

                Sharp Rays is a content marketing agency helping businesses

                turn expertise, ideas and customer questions into useful

                content that supports visibility, trust and growth.

              </p>

              <p>

                From content strategy and search-led topic research to website

                content, articles, thought leadership and ongoing optimization,

                we build content around what your audience actually needs to

                understand.

              </p>

              <p>

                Not more content for the sake of publishing.

                <span

                  className="

                    mt-0.5

                    block

                    font-semibold

                    text-[#0B2A52]

                  "

                >

                  Content with a reason to exist.

                </span>

              </p>

            </motion.div>

            {/* ===============================================

                CTA BUTTONS

            =============================================== */}

            <motion.div

              variants={reveal}

              className="

                mt-6

                flex

                flex-col

                gap-3

                sm:flex-row

                sm:items-center

              "

            >

              {/* PRIMARY CTA */}

              <Link

                href="/contact?service=content-marketing&need=content-strategy#contact-form"
                title="Build My Content Strategy"
                className="

                  group

                  inline-flex

                  min-h-[48px]

                  items-center

                  justify-center

                  gap-3

                  rounded-[16px]

                  bg-gradient-to-r

                  from-[#0B2A52]

                  via-[#104A84]

                  to-[#1970B5]

                  px-6

                  text-[0.85rem]

                  font-medium

                  !text-white

                  shadow-[0_10px_26px_rgba(11,42,82,0.16)]

                  transition-all

                  duration-300

                  hover:-translate-y-0.5

                  hover:shadow-[0_14px_34px_rgba(11,42,82,0.24)]

                  sm:px-7

                "

              >

                <span className="!text-white">

                  Build My Content Strategy

                </span>

                <ArrowRight

                  size={16}

                  strokeWidth={1.8}

                  className="

                    !text-white

                    transition-transform

                    duration-300

                    group-hover:translate-x-1

                  "

                />

              </Link>

              {/* SECONDARY CTA */}

              <Link

                href="#content-marketing-approach"
                title="Explore Our Approach"
                className="

                  group

                  inline-flex

                  min-h-[48px]

                  items-center

                  justify-center

                  gap-3

                  rounded-[16px]

                  border

                  border-[#AFC1D7]

                  bg-white

                  px-6

                  text-[0.85rem]

                  font-medium

                  text-[#0B2A52]

                  shadow-[0_8px_20px_rgba(11,42,82,0.035)]

                  transition-all

                  duration-300

                  hover:-translate-y-0.5

                  hover:border-[#7898BA]

                  hover:bg-[#F7FAFE]

                  hover:shadow-[0_12px_26px_rgba(11,42,82,0.07)]

                  sm:px-7

                "

              >

                <span>Explore Our Approach</span>

                <ArrowRight

                  size={16}

                  strokeWidth={1.8}

                  className="

                    transition-transform

                    duration-300

                    group-hover:translate-x-1

                  "

                />

              </Link>

            </motion.div>

            {/* ===============================================

                SUPPORTING LINE

            =============================================== */}

          </motion.div>

          {/* =================================================

              RIGHT IMAGE

              ONLY ONE IMAGE

          ================================================= */}

          <motion.div

            initial={{

              opacity: 0,

              x: reduceMotion ? 0 : 45,

              scale: reduceMotion ? 1 : 0.98,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

              scale: 1,

            }}

            viewport={{

              once: true,

              amount: 0.25,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.9,

              ease: [0.22, 1, 0.36, 1],

              delay: reduceMotion ? 0 : 0.12,

            }}

            className="

              relative

              mx-auto

              flex

              w-full

              items-center

              justify-center

              max-w-[620px]

              lg:max-w-[650px]

              xl:max-w-[680px]

            "

          >

            <Image

              src="/content/content-hero-person.webp"

              alt="Content marketing strategy and content creation"
              title="Content marketing strategy and content creation"

              width={1100}

              height={950}

              priority

              className="

                h-auto

                w-full

                object-contain

                object-center

              "

            />

          </motion.div>

        </div>

      </div>

    </section>

  );

}
