"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Film,
  Lightbulb,
  Smartphone,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    number: "01",
    label: "Ideas",
    title: "Good Ideas Take Too Long",
    text: "Long production cycles can slow momentum before an idea reaches people.",
    icon: Lightbulb,
  },
  {
    number: "02",
    label: "Footage",
    title: "Useful Footage Stays Unused",
    text: "Raw clips only create value when they become clear, finished content.",
    icon: Film,
  },
  {
    number: "03",
    label: "AI Output",
    title: "Fast Can Feel Generic",
    text: "AI still needs direction and editing to feel consistent with your brand.",
    icon: Sparkles,
  },
  {
    number: "04",
    label: "Content Demand",
    title: "Freshness Never Stops",
    text: "Reels, ads and campaigns constantly need new creative variations.",
    icon: Smartphone,
  },
];

export default function AiVideoProblem() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-problem"
      aria-labelledby="ai-video-problem-heading"
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
      {/* soft background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          -z-10

          h-[520px]
          w-[950px]

          -translate-x-1/2

          rounded-full
          bg-[#EEF5FA]/75
          blur-[150px]
        "
      />

      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#B79A72]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              The Problem
            </span>

            <span
              className="
                h-px
                w-8
                bg-gradient-to-l
                from-transparent
                to-[#B79A72]
              "
            />
          </div>

          <h2
            id="ai-video-problem-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[950px]

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
            More Video Does Not Automatically Mean{" "}
            <span className="font-normal italic text-[#B79A72]">
              Better Video.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[650px]

              text-[0.86rem]
              leading-[1.7]

              text-[#5F7488]

              sm:text-[0.95rem]
            "
          >
            AI makes production faster. The harder part is creating something
            people actually choose to watch.
          </p>
        </motion.div>

        {/* ==================================================
            CONNECTED PROBLEM FLOW
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-[1160px]

            sm:mt-16
            lg:mt-20
          "
        >
          {/* DESKTOP LINE */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[35px]

              hidden
              h-px

              bg-[#D8E4EC]

              lg:block
            "
          />

          {/* animated light travelling on line */}

          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              initial={{ left: "12.5%" }}
              animate={{ left: "87.5%" }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="
                absolute
                top-[31px]

                hidden
                h-[8px]
                w-[8px]

                -translate-x-1/2

                rounded-full

                bg-[#B79A72]

                shadow-[0_0_20px_rgba(183,154,114,0.45)]

                lg:block
              "
            />
          )}

          <div
            className="
              grid
              grid-cols-1
              gap-0

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {problems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 26,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  className="
                    group
                    relative

                    border-b
                    border-[#DDE8EF]

                    py-7

                    sm:px-5

                    lg:border-b-0
                    lg:px-6
                    lg:py-0
                    lg:text-center
                  "
                >
                  {/* NUMBER */}
                  <span
                    style={newYorkFont}
                    className="
                      absolute
                      right-0
                      top-7

                      text-[0.55rem]
                      tracking-[0.18em]

                      text-[#8FA3B4]

                      sm:right-5

                      lg:hidden
                    "
                  >
                    {item.number}
                  </span>

                  {/* ICON NODE */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-[70px]
                      w-[70px]
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#C9D9E5]

                      bg-white

                      text-[#6285AD]

                      shadow-[0_12px_35px_rgba(11,42,82,0.05)]

                      transition-all
                      duration-500

                      group-hover:-translate-y-1
                      group-hover:border-[#9CB8CD]
                      group-hover:bg-[#EEF5FA]

                      lg:mx-auto
                    "
                  >
                    <Icon size={19} strokeWidth={1.55} />

                    <span
                      style={newYorkFont}
                      className="
                        absolute
                        -top-6
                        left-1/2

                        hidden
                        -translate-x-1/2

                        text-[0.52rem]
                        tracking-[0.16em]

                        text-[#8FA3B4]

                        lg:block
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* TEXT */}

                  <div className="mt-5 lg:mt-7">
                    <span
                      style={newYorkFont}
                      className="
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.2em]

                        text-[#6285AD]
                      "
                    >
                      {item.label}
                    </span>

                    <h3
                      style={newYorkFont}
                      className="
                        mt-2

                        max-w-[260px]

                        text-[1.12rem]
                        font-normal
                        leading-[1.2]
                        tracking-[-0.025em]

                        text-[#0B2A52]

                        sm:text-[1.18rem]

                        lg:mx-auto
                        lg:text-[1.22rem]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      style={newYorkFont}
                      className="
                        mt-3

                        max-w-[270px]

                        text-[0.76rem]
                        leading-[1.65]

                        text-[#5F7488]

                        lg:mx-auto
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* SMALL ACCENT */}

                  <div
                    className="
                      mt-5
                      h-px
                      w-7

                      bg-[#6285AD]

                      transition-all
                      duration-300

                      group-hover:w-12

                      lg:mx-auto
                    "
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            ATTENTION STATEMENT
        ================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            relative
            mx-auto

            mt-12
            max-w-[900px]

            pt-10

            text-center

            sm:mt-14
            sm:pt-12

            lg:mt-16
          "
        >
          {/* vertical connector */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-0

              h-7
              w-px

              -translate-x-1/2

              bg-gradient-to-b
              from-[#8FA9BE]
              to-transparent
            "
          />

          <span
            style={newYorkFont}
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.24em]

              text-[#B79A72]
            "
          >
            The Real Problem
          </span>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[820px]

              text-[1.4rem]
              font-light
              leading-[1.27]
              tracking-[-0.03em]

              text-[#0B2A52]

              sm:text-[1.6rem]
              md:text-[1.85rem]
            "
          >
            Production speed creates more content.
            <br className="hidden sm:block" />{" "}
            <span className="font-normal italic text-[#B79A72]">
              Creative judgment creates attention.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}