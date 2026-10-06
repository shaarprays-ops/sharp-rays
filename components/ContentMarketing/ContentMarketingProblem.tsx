"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Search,
  BarChart3,
  UserRound,
  Cpu,
  RefreshCw,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const problems = [
  {
    number: "01",
    title: "You’re Publishing",
    description:
      "But there is no clear content strategy connecting one topic to the next.",
    icon: FileText,
  },
  {
    number: "02",
    title: "You’re Targeting Keywords",
    description:
      "But the content sounds like every other page already ranking for them.",
    icon: Search,
  },
  {
    number: "03",
    title: "You’re Getting Traffic",
    description:
      "But visitors are not moving towards your services or business.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "You Have Expertise",
    description:
      "But your website does not communicate enough of it.",
    icon: UserRound,
  },
  {
    number: "05",
    title: "You’re Using AI",
    description:
      "But the output still needs your experience, perspective and judgement to become genuinely useful.",
    icon: Cpu,
  },
  {
    number: "06",
    title: "You Have Old Content",
    description:
      "But nobody is reviewing what should be improved, consolidated or removed.",
    icon: RefreshCw,
  },
];

export default function ContentMarketingProblem() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="content-marketing-problem"
      aria-labelledby="content-marketing-problem-heading"
      className="
        relative
        overflow-hidden
        bg-[#FDFEFE]
        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[32%]
            h-[620px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#F3F8FF]/70
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            top-[38%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#F7EFE6]/60
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-[200px]
            bottom-[8%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#EAF4FF]/60
            blur-[110px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ========================================================
            INTRO
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.22,
          }}
          transition={{
            staggerChildren: reduceMotion ? 0 : 0.1,
          }}
          className="
            mx-auto
            max-w-[1100px]
            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#B88758]" />

            <span
              className="
                text-[0.68rem]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#A67549]
                sm:text-[0.73rem]
              "
            >
              The Problem
            </span>

            <span className="h-px w-10 bg-[#B88758]" />
          </motion.div>

          {/* HEADING */}

          <motion.h2
            id="content-marketing-problem-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[1060px]
              font-serif
              text-[2.25rem]
              font-medium
              leading-[1.05]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Publishing More Content Doesn’t
            <br className="hidden md:block" />
            Automatically Make You More{" "}
            <span
              className="
                font-normal
                italic
                text-[#B88758]
              "
            >
              Valuable.
            </span>
          </motion.h2>

          {/* INTRO COPY */}

          <motion.div
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[880px]
              text-[0.96rem]
              leading-[1.7]
              text-[#526C89]
              sm:text-[1rem]
            "
          >
            <p>Businesses are creating more content than ever.</p>

            <p>
              But more articles, more posts and more pages do not necessarily
              create more visibility, authority or customers.
            </p>
          </motion.div>

          {/* SMALL PILL */}

          <motion.div
            variants={fadeUp}
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#BDD2E8]
              bg-white/90
              px-5
              py-2.5
              shadow-[0_8px_24px_rgba(11,42,82,0.04)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#B88758]
              "
            />

            <span
              className="
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#0B2A52]
              "
            >
              Does This Sound Familiar?
            </span>
          </motion.div>
        </motion.div>

        {/* ========================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-[1320px]
            items-stretch
            gap-10

            lg:grid-cols-[1.04fr_0.96fr]
            lg:gap-8

            xl:gap-12
          "
        >
          {/* ======================================================
              LEFT — PROBLEM CARDS
          ====================================================== */}

          <div className="flex flex-col gap-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <motion.article
                  key={problem.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -38,
                    y: reduceMotion ? 0 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.68,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.25rem]
                    border
                    border-[#E6EDF5]
                    bg-white
                    px-4
                    py-4
                    shadow-[0_12px_35px_rgba(18,54,91,0.055)]
                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:border-[#C5D7EA]
                    hover:shadow-[0_18px_45px_rgba(18,54,91,0.1)]

                    sm:px-5
                    sm:py-4
                  "
                >
                  {/* hover background */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#F7FBFF]
                      via-white
                      to-[#FAFCFF]
                      opacity-0
                      transition-opacity
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      grid
                      grid-cols-[42px_54px_1fr_24px]
                      items-center
                      gap-3

                      sm:grid-cols-[46px_58px_1fr_30px]
                      sm:gap-4
                    "
                  >
                    {/* NUMBER */}

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FBF5EF]
                        font-serif
                        text-[0.75rem]
                        font-semibold
                        text-[#AE7746]
                      "
                    >
                      {problem.number}
                    </div>

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[52px]
                        w-[52px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#EAF4FF]
                        text-[#0B3C75]
                        transition-all
                        duration-300

                        group-hover:bg-[#DCEEFF]
                      "
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* COPY */}

                    <div>
                      <h3
                        className="
                          font-serif
                          text-[1.04rem]
                          font-semibold
                          leading-[1.25]
                          text-[#0B2A52]

                          sm:text-[1.12rem]
                        "
                      >
                        {problem.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-[450px]
                          text-[0.86rem]
                          leading-[1.42]
                          text-[#5A718A]

                          sm:text-[0.9rem]
                        "
                      >
                        {problem.description}
                      </p>
                    </div>

                    {/* ARROW */}

                    <ArrowRight
                      size={19}
                      strokeWidth={1.6}
                      className="
                        text-[#0B467F]
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* ======================================================
              RIGHT — IMAGE AREA
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[560px]

              sm:min-h-[620px]

              lg:min-h-0
            "
          >
            {/* LARGE SOFT BACKGROUND SHAPE */}

            <div
              className="
                absolute
                bottom-[2%]
                left-1/2
                h-[88%]
                w-[90%]
                -translate-x-1/2
                rounded-t-[48%]
                rounded-b-[28%]
                bg-gradient-to-b
                from-[#F4EEE7]
                via-[#F8F4EF]
                to-[#EEF5FB]
              "
            />

            {/* SOFT OUTER CIRCLE */}

            <div
              className="
                absolute
                bottom-[8%]
                left-1/2
                h-[76%]
                w-[76%]
                -translate-x-1/2
                rounded-full
                border
                border-[#DDE7F0]
              "
            />

            {/* ==================================================
                YOUR IMAGE
            ================================================== */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                z-10
                h-[88%]
                w-[90%]
                -translate-x-1/2
              "
            >
              <Image
                src="/content/content-problem.webp"
                alt="Content strategy problem visual"
                title="Content strategy problem visual" 
                fill
                priority={false}
                sizes="
                  (max-width: 1023px) 90vw,
                  45vw
                "
                className="
                  object-contain
                  object-bottom
                "
              />
            </div>

            {/* ==================================================
                FLOATING QUESTION CARDS
            ================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      rotate: [-5, -3, -5],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[9%]
                top-[7%]
                z-20
                -rotate-[5deg]
                rounded-lg
                border
                border-[#E9DFD5]
                bg-[#FFFDFB]
                px-5
                py-4
                shadow-[0_12px_30px_rgba(46,56,67,0.08)]
              "
            >
              <span
                className="
                  block
                  max-w-[90px]
                  text-center
                  font-serif
                  text-[1rem]
                  italic
                  leading-[1.15]
                  text-[#0D3768]
                "
              >
                More
                <br />
                Posts?
              </span>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 6, 0],
                      rotate: [5, 3, 5],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[3%]
                top-[11%]
                z-20
                rotate-[5deg]
                rounded-lg
                border
                border-[#E9DFD5]
                bg-[#FFFDFB]
                px-5
                py-4
                shadow-[0_12px_30px_rgba(46,56,67,0.08)]
              "
            >
              <span
                className="
                  block
                  max-w-[100px]
                  text-center
                  font-serif
                  text-[1rem]
                  italic
                  leading-[1.15]
                  text-[#0D3768]
                "
              >
                Better
                <br />
                Strategy?
              </span>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                      rotate: [-7, -5, -7],
                    }
              }
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[1%]
                top-[33%]
                z-20
                -rotate-[7deg]
                rounded-lg
                border
                border-[#E9DFD5]
                bg-[#FFFDFB]
                px-5
                py-4
                shadow-[0_12px_30px_rgba(46,56,67,0.08)]
              "
            >
              <span
                className="
                  block
                  text-center
                  font-serif
                  text-[0.95rem]
                  italic
                  leading-[1.15]
                  text-[#0D3768]
                "
              >
                More
                <br />
                Traffic?
              </span>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 6, 0],
                      rotate: [4, 2, 4],
                    }
              }
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-0
                top-[37%]
                z-20
                rotate-[4deg]
                rounded-lg
                border
                border-[#E9DFD5]
                bg-[#FFFDFB]
                px-5
                py-4
                shadow-[0_12px_30px_rgba(46,56,67,0.08)]
              "
            >
              <span
                className="
                  block
                  text-center
                  font-serif
                  text-[0.94rem]
                  italic
                  leading-[1.15]
                  text-[#0D3768]
                "
              >
                What&apos;s
                <br />
                Missing?
              </span>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                      rotate: [-8, -6, -8],
                    }
              }
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[2%]
                top-[54%]
                z-20
                -rotate-[8deg]
                rounded-lg
                border
                border-[#E9DFD5]
                bg-[#FFFDFB]
                px-4
                py-4
                shadow-[0_12px_30px_rgba(46,56,67,0.08)]
              "
            >
              <span
                className="
                  block
                  text-center
                  font-serif
                  text-[0.94rem]
                  italic
                  leading-[1.15]
                  text-[#0D3768]
                "
              >
                Still no
                <br />
                Results?
              </span>
            </motion.div>

            {/* GOLD SQUIGGLE */}

            <svg
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
              className="
                absolute
                right-[23%]
                top-[1%]
                z-20
                h-20
                w-20
                text-[#C68E55]
              "
            >
              <motion.path
                d="M26 26C56 0 83 15 62 31C43 46 35 50 54 55C77 61 72 74 43 89"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1.3,
                  delay: reduceMotion ? 0 : 0.5,
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* ========================================================
            BOTTOM — REAL PROBLEM PANEL
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 32,
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
            duration: reduceMotion ? 0 : 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-[1320px]
            overflow-hidden
            rounded-[1.8rem]
            border
            border-[#C1D7EB]
            bg-gradient-to-r
            from-[#F5FAFF]
            via-white
            to-[#FBF6F0]
            px-6
            py-8
            shadow-[0_20px_55px_rgba(11,42,82,0.07)]

            sm:px-8

            lg:mt-14
            lg:px-12
            lg:py-9
          "
        >
          <div
            className="
              grid
              items-center
              gap-8

              lg:grid-cols-[1.35fr_1px_0.9fr]
              lg:gap-10
            "
          >
            {/* LEFT */}

            <div>
              <span
                className="
                  text-[0.65rem]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#B17B48]
                "
              >
                The Real Problem
              </span>

              <h3
                className="
                  mt-4
                  max-w-[620px]
                  font-serif
                  text-[1.8rem]
                  font-medium
                  leading-[1.12]
                  tracking-[-0.03em]
                  text-[#0B2A52]

                  sm:text-[2rem]
                  lg:text-[2.25rem]
                "
              >
                Your audience needs a reason to choose{" "}
                <span
                  className="
                    font-normal
                    italic
                    text-[#B88758]
                  "
                >
                  your version.
                </span>
              </h3>
            </div>

            {/* DIVIDER */}

            <div
              className="
                hidden
                h-20
                w-px
                bg-[#D7C9B9]
                lg:block
              "
            />

            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-[74px]
                  w-[74px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FAF3EA]
                  text-[#B9824D]
                "
              >
                <Lightbulb
                  size={31}
                  strokeWidth={1.55}
                />
              </div>

              <p
                className="
                  max-w-[280px]
                  text-[0.9rem]
                  leading-[1.5]
                  text-[#58718C]
                "
              >
                It&apos;s not just about creating more content. It&apos;s about
                creating the right content, for the right people, with a clear
                purpose.
              </p>
            </div>
          </div>

          {/* decorative text */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-5
              right-7
              hidden
              -rotate-[8deg]
              text-right
              font-serif
              text-[0.9rem]
              italic
              leading-[1.15]
              text-[#B17B48]
              xl:block
            "
          >
            Strategy
            <br />
            Content
            <br />
            Impact
          </div>
        </motion.div>
      </div>
    </section>
  );
}