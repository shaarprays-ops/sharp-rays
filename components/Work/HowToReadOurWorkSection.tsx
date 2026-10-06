"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  CircleHelp,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type WorkLens = {
  number: string;
  label: string;
  question: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const lenses: WorkLens[] = [
  {
    number: "01",
    label: "The Challenge",
    question: "What was getting in the way?",
    icon: CircleHelp,
    accent: "#3976A4",
    soft: "#EAF3FA",
  },
  {
    number: "02",
    label: "The Thinking",
    question: "What did we believe needed to change?",
    icon: Lightbulb,
    accent: "#75629A",
    soft: "#F0ECF7",
  },
  {
    number: "03",
    label: "The Execution",
    question: "What did Sharp Rays actually do?",
    icon: Rocket,
    accent: "#A57A50",
    soft: "#F7EEE2",
  },
  {
    number: "04",
    label: "The Outcome",
    question: "What changed after the work went live?",
    icon: TrendingUp,
    accent: "#477D73",
    soft: "#E7F2EF",
  },
];

export default function HowToReadOurWorkSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="how-to-read-our-work"
      aria-labelledby="how-to-read-our-work-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-280px]

            h-[470px]
            w-[850px]

            -translate-x-1/2
            rounded-full

            bg-[#EEF5FA]/80
            blur-[145px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 22,
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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[920px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-3">
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
                tracking-[0.23em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.27em]
              "
            >
              Beyond the Final Screen
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

          <h2
            id="how-to-read-our-work-heading"
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
            The Outcome Makes More Sense When You{" "}
            <span className="font-normal italic text-[#B79A72]">
              Understand the Thinking.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[690px]

              text-[0.84rem]
              leading-[1.65]
              text-[#60758A]

              sm:text-[0.94rem]
            "
          >
            A useful case study should show more than the final screen. It
            should explain why the work was done that way.
          </p>
        </motion.div>

        <div
          className="
            mx-auto
            mt-10
            max-w-[1160px]

            border-y
            border-[#DDE6EC]

            sm:mt-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {lenses.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease,
                  }}
                  className={`
                    group
                    relative

                    px-4
                    py-5

                    sm:px-5
                    sm:py-6

                    lg:px-6
                    lg:py-7

                    ${
                      index !== lenses.length - 1
                        ? `
                            border-b
                            border-[#E1E8ED]

                            sm:[&:nth-child(odd)]:border-r
                            lg:border-b-0
                            lg:border-r
                          `
                        : ""
                    }

                    ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}
                    ${index === 2 ? "sm:border-b-0" : ""}
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center

                        rounded-[12px]
                        border
                        border-black/[0.05]
                      "
                      style={{
                        backgroundColor: item.soft,
                        color: item.accent,
                      }}
                    >
                      <Icon size={16} strokeWidth={1.65} />
                    </span>

                    <span
                      style={newYorkFont}
                      className="
                        pt-1
                        text-[0.52rem]
                        tracking-[0.12em]
                        text-[#9AA7B1]
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={newYorkFont}
                    className="
                      mt-4
                      text-[0.53rem]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#92745C]
                    "
                  >
                    {item.label}
                  </h3>

                  <p
                    style={newYorkFont}
                    className="
                      mt-2.5
                      max-w-[245px]

                      text-[1.08rem]
                      font-normal
                      leading-[1.28]
                      tracking-[-0.02em]
                      text-[#0B2A52]

                      sm:text-[1.14rem]
                    "
                  >
                    {item.question}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[-1px]
                      left-0

                      h-[2px]
                      w-0

                      rounded-full
                      transition-all
                      duration-500

                      group-hover:w-14
                    "
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-8
            max-w-[850px]
            text-center

            sm:mt-10
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#B79A72]
            "
          >
            The Principle
          </span>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-3
              max-w-[820px]

              text-[1.2rem]
              font-light
              leading-[1.32]
              tracking-[-0.025em]
              text-[#0B2A52]

              sm:text-[1.4rem]
              md:text-[1.55rem]
            "
          >
            Don&apos;t judge the work only by how it looks.{" "}
            <span className="italic text-[#B79A72]">
              Understand what it was designed to do.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
