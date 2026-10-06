"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  Network,
  Target,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const differentiators = [
  {
    number: "01",
    title: "Strategy Before Activity",
    description:
      "We first understand what needs to change before choosing channels or deliverables.",
    icon: Target,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    number: "02",
    title: "Connected Capabilities",
    description:
      "Search, creative, paid media, websites and automation can work together when the problem requires it.",
    icon: Network,
    accent: "#4E8B77",
    soft: "#EAF5F1",
  },
  {
    number: "03",
    title: "Clear Scope",
    description:
      "Responsibilities, deliverables, timelines and dependencies are defined before work begins.",
    icon: ClipboardCheck,
    accent: "#B18458",
    soft: "#FBF3E8",
  },
  {
    number: "04",
    title: "Proof With Context",
    description:
      "We show verified performance where reliable data exists and clearly explain what changed when it does not.",
    icon: BadgeCheck,
    accent: "#75659B",
    soft: "#F1EEFA",
  },
];

export default function HumanSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="why-sharp-rays"
      aria-labelledby="why-sharp-rays-heading"
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-320px]

            h-[520px]
            w-[920px]

            -translate-x-1/2

            rounded-full

            bg-[#EEF5FA]/80

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            bottom-[-180px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[125px]
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
          w-full
          max-w-[1280px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[900px]

            text-center
          "
        >
          {/* EYEBROW */}

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
                tracking-[0.25em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              Why Sharp Rays
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

          {/* HEADING */}

          <h2
            id="why-sharp-rays-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[900px]

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
            Clear Thinking Before{" "}
            <span className="font-normal italic text-[#B79A72]">
              More Activity.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[700px]

              text-[0.84rem]
              leading-[1.7]

              text-[#60758A]

              sm:text-[0.94rem]
            "
          >
            We focus on understanding the problem, defining the work clearly
            and showing what can genuinely be demonstrated.
          </p>
        </motion.div>

        {/* =====================================================
            DIFFERENTIATORS
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[1080px]

            border-y
            border-[#DCE6ED]

            sm:mt-12
          "
        >
          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-2
            "
          >
            {differentiators.map((item, index) => {
              const Icon = item.icon;

              const isLeftColumn = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <motion.article
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
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
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  className={`
                    group
                    relative

                    px-5
                    py-6

                    sm:px-6
                    sm:py-7

                    md:px-8
                    md:py-9

                    ${
                      index !== differentiators.length - 1
                        ? "border-b border-[#E1E8ED] md:border-b-0"
                        : ""
                    }

                    ${
                      isTopRow
                        ? "md:border-b md:border-[#E1E8ED]"
                        : ""
                    }

                    ${
                      isLeftColumn
                        ? "md:border-r md:border-[#E1E8ED]"
                        : ""
                    }
                  `}
                >
                  {/* TOP */}

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
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center

                        rounded-[13px]

                        border
                        border-black/[0.05]

                        transition-transform
                        duration-300

                        group-hover:-translate-y-1
                      "
                      style={{
                        backgroundColor: item.soft,
                        color: item.accent,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                  </div>

                  {/* TITLE */}

                  <h3
                    style={newYorkFont}
                    className="
                      mt-5

                      text-[1.35rem]
                      font-normal
                      leading-[1.1]
                      tracking-[-0.03em]

                      text-[#0B2A52]

                      sm:text-[1.5rem]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* ACCENT */}

                  <span
                    className="
                      mt-4
                      block

                      h-[2px]
                      w-8

                      rounded-full

                      transition-all
                      duration-300

                      group-hover:w-12
                    "
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  {/* DESCRIPTION */}

                  <p
                    style={newYorkFont}
                    className="
                      mt-4
                      max-w-[430px]

                      text-[0.78rem]
                      leading-[1.65]

                      text-[#60758A]

                      sm:text-[0.84rem]
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
            BOTTOM PRINCIPLE
        ===================================================== */}

        <motion.div
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
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-7
            max-w-[860px]

            text-center

            sm:mt-8
          "
        >
          <p
            style={newYorkFont}
            className="
              text-[1rem]
              font-light
              leading-[1.6]
              tracking-[-0.018em]

              text-[#0B2A52]

              sm:text-[1.1rem]
              md:text-[1.18rem]
            "
          >
            Strategy, execution and evidence should stay{" "}
            <span className="italic text-[#B79A72]">
              connected.
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
