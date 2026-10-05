"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  BarChart3,
  MessageCircle,
  PenTool,
  Send,
  Target,
} from "lucide-react";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const supportAreas = [
  {
    number: "01",
    label: "Strategy",
    icon: Target,
  },
  {
    number: "02",
    label: "Content",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Publishing",
    icon: Send,
  },
  {
    number: "04",
    label: "Community",
    icon: MessageCircle,
  },
  {
    number: "05",
    label: "Reporting",
    icon: BarChart3,
  },
];

export default function SocialMediaClosingSections() {
  return (
    <>
      <FinalAnswerBlock />
    </>
  );
}

/* =========================================================
   SECTION 16 — FINAL ANSWER BLOCK
========================================================= */

function FinalAnswerBlock() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="social-media-final-answer"
      className="
        relative
        overflow-hidden
        bg-white

        py-24
        text-[#0B2A52]

        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-[390px]
            top-1/2

            h-[760px]
            w-[760px]

            -translate-y-1/2

            rounded-full

            border
            border-[#0B2A52]/[0.035]
          "
        />

        <div
          className="
            absolute
            -right-[390px]
            top-1/2

            h-[760px]
            w-[760px]

            -translate-y-1/2

            rounded-full

            border
            border-[#B79A72]/10
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1240px]

          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            mt-14

            grid
            items-center
            gap-14

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -40,
                  }
            }
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* HEADING */}

            <h2
              style={newYorkFont}
              className="
                max-w-[600px]

                text-[2.45rem]
                font-medium
                leading-[1.04]
                tracking-[-0.05em]
                text-[#0B2A52]

                sm:text-[3rem]
                md:text-[3.3rem]
                lg:text-[3.55rem]
              "
            >
              Need a Social Media{" "}
              <span
                className="
                  block
                  font-normal
                  text-[#B79A72]
                "
              >
                Marketing Partner?
              </span>
            </h2>

            {/* DESCRIPTION 1 */}

            <p
              className="
                mt-7
                max-w-[570px]

                text-[15px]
                leading-8
                text-[#0B2A52]/58

                sm:text-[16px]
              "
            >
              Sharp Rays helps businesses plan, create and manage social media
              with a clearer strategy behind every post.
            </p>

            {/* DESCRIPTION 2 */}

            <p
              className="
                mt-5
                max-w-[590px]

                text-[14px]
                leading-8
                text-[#0B2A52]/50

                sm:text-[15px]
              "
            >
              If you need support with social media strategy, content creation,
              publishing, community management or performance reporting, tell
              us where your brand is today and what you want social media to
              help you achieve.
            </p>

            {/* =================================================
                CTA BUTTON
            ================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.32,
              }}
              className="mt-9"
            >
              <a
             href="/contact?service=social-media-marketing"
             title="Contact Sharp Rays for social media marketing support"
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
                {/* STATIC SOFT INNER BORDER */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[2px]

                    rounded-[13px]

                    border
                    border-white/60
                  "
                />

                {/* SUBTLE INNER LIGHT */}

                <span
                  aria-hidden="true"
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

                {/* BUTTON TEXT */}

                <span
                  className="
                    relative
                    z-10

                    whitespace-nowrap

                    text-[#0B2A52]
                  "
                >
                  Let&apos;s Talk About Your Brand
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — CONNECTED SUPPORT
          ================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 40,
                  }
            }
            animate={
              isVisible
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              border-y
              border-[#0B2A52]/10
            "
          >
            {/* ===============================================
                RIGHT HEADER
            =============================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-6

                py-8
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#B79A72]
                  "
                >
                  One Connected Direction
                </p>

                <p
                  style={newYorkFont}
                  className="
                    mt-3

                    text-[20px]
                    font-medium
                    tracking-[-0.025em]
                    text-[#0B2A52]

                    sm:text-[23px]
                  "
                >
                  The support your social presence needs.
                </p>
              </div>

              <span
                className="
                  hidden

                  h-12
                  w-12
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#B79A72]/40

                  text-[#B79A72]

                  sm:flex
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
            </div>

            {/* ===============================================
                SUPPORT LIST
            =============================================== */}

            <div
              className="
                border-t
                border-[#0B2A52]/10
              "
            >
              {supportAreas.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    animate={
                      isVisible
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: reduceMotion
                        ? 0
                        : 0.28 + index * 0.07,
                    }}
                    className="
                      group

                      flex
                      min-h-[82px]
                      items-center
                      gap-5

                      border-b
                      border-[#0B2A52]/10

                      py-4
                    "
                  >
                    {/* ICON */}

                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#0B2A52]/12

                        bg-white

                        text-[#0B2A52]

                        transition-all
                        duration-400

                        group-hover:border-[#0B2A52]
                        group-hover:bg-[#0B2A52]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>

                    {/* LABEL */}

                    <span
                      style={newYorkFont}
                      className="
                        text-[17px]
                        font-medium
                        tracking-[-0.018em]
                        text-[#0B2A52]/65

                        transition-all
                        duration-400

                        group-hover:translate-x-1
                        group-hover:text-[#0B2A52]

                        sm:text-[18px]
                      "
                    >
                      {item.label}
                    </span>

                    {/* NUMBER */}

                    <span
                      className="
                        ml-auto

                        text-[9px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#B79A72]
                      "
                    >
                      {item.number}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}