"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  Layers3,
  Lightbulb,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const projectTypes = [
  {
    number: "01",
    label: "Client Work",
    description: "Delivered for a real client.",
    icon: BriefcaseBusiness,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    number: "02",
    label: "Internal Work",
    description: "Built for Sharp Rays.",
    icon: Layers3,
    accent: "#B18458",
    soft: "#FBF3E8",
  },
  {
    number: "03",
    label: "Concept Work",
    description: "Independent capability exploration.",
    icon: Lightbulb,
    accent: "#4E8B77",
    soft: "#EAF5F1",
  },
];

export default function BuildingPortfolioSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="work-context"
      aria-labelledby="work-context-heading"
      className="
        relative
        overflow-hidden
        bg-white

        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* SOFT BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-260px]

            h-[430px]
            w-[820px]

            -translate-x-1/2
            rounded-full

            bg-[#EEF5FA]/75

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
          max-w-[1180px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8

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
                tracking-[0.26em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              Real Work. Clear Context.
            </span>

            <span
              className="
                h-px
                w-8

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]

                sm:w-10
              "
            />
          </div>

          <h2
            id="work-context-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-4

              text-[1.85rem]
              font-light
              leading-[1.1]
              tracking-[-0.04em]

              text-[#0B2A52]

              sm:text-[2.1rem]
              md:text-[2.35rem]
            "
          >
            Know Exactly{" "}
            <span className="italic text-[#B79A72]">
              What You&apos;re Looking At.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            THREE WORK TYPES
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-9
            max-w-[1040px]

            border-y
            border-[#DCE6ED]

            sm:mt-10
          "
        >
          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-3
            "
          >
            {projectTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
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
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease,
                  }}
                  className={`
                    relative

                    px-5
                    py-5

                    sm:px-6
                    sm:py-6

                    md:px-7
                    md:py-7

                    ${
                      index !== projectTypes.length - 1
                        ? `
                            border-b
                            border-[#E1E8ED]

                            md:border-b-0
                            md:border-r
                          `
                        : ""
                    }
                  `}
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
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
                      <Icon size={16} strokeWidth={1.6} />
                    </span>

                    <span
                      style={newYorkFont}
                      className="
                        pt-1

                        text-[8px]
                        tracking-[0.13em]

                        text-[#A0ADB8]
                      "
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={newYorkFont}
                    className="
                      mt-4

                      text-[1.16rem]
                      font-normal
                      tracking-[-0.025em]

                      text-[#0B2A52]

                      sm:text-[1.25rem]
                    "
                  >
                    {item.label}
                  </h3>

                  <p
                    style={newYorkFont}
                    className="
                      mt-2

                      text-[0.78rem]
                      leading-[1.55]

                      text-[#60758A]

                      sm:text-[0.82rem]
                    "
                  >
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HONESTY STATEMENT
        ===================================================== */}

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
            mt-7
            max-w-[880px]

            text-center

            sm:mt-8
          "
        >
          <p
            style={newYorkFont}
            className="
              text-[1.02rem]
              font-light
              leading-[1.55]
              tracking-[-0.018em]

              text-[#0B2A52]

              sm:text-[1.12rem]
              md:text-[1.2rem]
            "
          >
            When verified performance data exists, we show it.{" "}
            <span className="text-[#60758A]">
              When it doesn&apos;t, we show the change we can genuinely
              demonstrate.
            </span>
          </p>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-5
              flex
              w-fit
              items-center
              gap-2.5
            "
          >
            <span className="h-px w-8 bg-[#D6E2EA]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />
            <span className="h-px w-8 bg-[#D6E2EA]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
