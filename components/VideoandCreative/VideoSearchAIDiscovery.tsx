"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  FileText,
  Scissors,
  Search,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const workflow = [
  {
    number: "01",
    label: "Direction",
    title: "Human-Led Brief",
    description:
      "We define the objective, audience, message and creative constraints before production begins.",
    icon: FileText,
  },
  {
    number: "02",
    label: "Exploration",
    title: "AI-Assisted Exploration",
    description:
      "AI helps us explore concepts, scenes and production possibilities with greater speed.",
    icon: Bot,
  },
  {
    number: "03",
    label: "Editing",
    title: "Human Selection & Editing",
    description:
      "We choose what supports the idea and shape the strongest assets into one coherent video.",
    icon: Scissors,
  },
  {
    number: "04",
    label: "Review",
    title: "Brand & Quality Review",
    description:
      "The final output is checked for brand fit, consistency, accuracy and intended use.",
    icon: CheckCircle2,
  },
];

export default function HumanDirectionAiProduction() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="human-direction-ai-production"
      aria-labelledby="human-direction-ai-production-heading"
      className="
        relative
        overflow-hidden
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* subtle background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          hidden
          sm:block
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-220px]

            h-[420px]
            w-[820px]

            -translate-x-1/2

            rounded-full
            bg-[#EEF5FA]
            blur-[120px]
          "
        />
      </div>

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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="
            mx-auto
            max-w-[920px]
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
                uppercase
                tracking-[0.22em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.27em]
              "
            >
              How We Use AI
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
            id="human-direction-ai-production-heading"
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
            AI Supports the Process.{" "}
            <span className="font-normal italic text-[#A97C52]">
              People Direct It.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-[0.86rem]
              leading-[1.7]

              text-[#5B7286]

              sm:text-[0.95rem]
            "
          >
            We use AI where it adds speed and flexibility, while direction,
            selection, editing and quality remain intentionally human.
          </p>
        </motion.div>

        {/* =====================================================
            OPEN WORKFLOW
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[1160px]

            border-t
            border-[#DCE5EB]

            sm:mt-14
          "
        >
          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease,
                  }}
                  className="
                    group
                    relative

                    border-b
                    border-[#DCE5EB]

                    py-6

                    md:px-5

                    lg:min-h-[245px]
                    lg:border-r
                    lg:last:border-r-0
                  "
                >
                  {/* top line */}
                  <div
                    className="
                      flex
                      items-center
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

                        rounded-full

                        bg-[#EEF5FA]

                        text-[#0B2A52]
                      "
                    >
                      <Icon size={16} strokeWidth={1.7} />
                    </span>

                    <span
                      style={newYorkFont}
                      className="
                        text-[0.58rem]
                        tracking-[0.08em]
                        text-[#A97C52]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  <span
                    style={newYorkFont}
                    className="
                      mt-5
                      block

                      text-[0.47rem]
                      font-medium
                      uppercase
                      tracking-[0.19em]

                      text-[#8A9AA7]
                    "
                  >
                    {step.label}
                  </span>

                  <h3
                    style={newYorkFont}
                    className="
                      mt-2

                      text-[1.15rem]
                      font-normal
                      leading-[1.18]
                      tracking-[-0.025em]

                      text-[#0B2A52]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    style={newYorkFont}
                    className="
                      mt-3

                      text-[0.74rem]
                      leading-[1.62]

                      text-[#62778A]
                    "
                  >
                    {step.description}
                  </p>

                  <span
                    className="
                      mt-5
                      block
                      h-[2px]
                      w-8

                      rounded-full

                      bg-[#B79A72]

                      transition-all
                      duration-300

                      group-hover:w-14
                    "
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            AI VS HUMAN
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[980px]

            border-y
            border-[#DCE5EB]

            py-7

            sm:mt-12
            sm:py-8
          "
        >
          <div
            className="
              grid
              gap-7

              md:grid-cols-2
              md:gap-0
            "
          >
            {/* AI */}

            <div
              className="
                md:border-r
                md:border-[#DCE5EB]
                md:pr-8
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    bg-[#FAF0E4]

                    text-[#A97942]
                  "
                >
                  <Bot size={14} strokeWidth={1.6} />
                </span>

                <span
                  style={newYorkFont}
                  className="
                    text-[0.5rem]
                    font-medium
                    uppercase
                    tracking-[0.2em]

                    text-[#A4774C]
                  "
                >
                  AI Assists
                </span>
              </div>

              <h3
                style={newYorkFont}
                className="
                  mt-4

                  text-[1.35rem]
                  font-light
                  tracking-[-0.03em]

                  text-[#0B2A52]
                "
              >
                Explore faster.
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-2
                  max-w-[390px]

                  text-[0.76rem]
                  leading-[1.6]

                  text-[#60758A]
                "
              >
                AI supports ideation, visual exploration and production
                efficiency.
              </p>
            </div>

            {/* HUMAN */}

            <div className="md:pl-8">
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B2A52]

                    text-white
                  "
                >
                  <Search size={14} strokeWidth={1.6} />
                </span>

                <span
                  style={newYorkFont}
                  className="
                    text-[0.5rem]
                    font-medium
                    uppercase
                    tracking-[0.2em]

                    text-[#5E7E9A]
                  "
                >
                  Human Decides
                </span>
              </div>

              <h3
                style={newYorkFont}
                className="
                  mt-4

                  text-[1.35rem]
                  font-light
                  tracking-[-0.03em]

                  text-[#0B2A52]
                "
              >
                Decide what matters.
              </h3>

              <p
                style={newYorkFont}
                className="
                  mt-2
                  max-w-[390px]

                  text-[0.76rem]
                  leading-[1.6]

                  text-[#60758A]
                "
              >
                People control direction, selection, brand standards and final
                quality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[820px]

            text-center

            sm:mt-12
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
            <span className="h-px w-7 bg-[#B79A72]/60" />

            <span
              style={newYorkFont}
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]

                text-[#A4774C]
              "
            >
              The Principle
            </span>

            <span className="h-px w-7 bg-[#B79A72]/60" />
          </div>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[800px]

              text-[1.25rem]
              font-light
              leading-[1.3]
              tracking-[-0.025em]

              text-[#0B2A52]

              sm:text-[1.5rem]
              md:text-[1.7rem]
            "
          >
            Use AI to improve the process,{" "}
            <span className="italic text-[#A97C52]">
              not replace the judgement behind it.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
