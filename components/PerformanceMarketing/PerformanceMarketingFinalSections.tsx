"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  MousePointerClick,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

/* =========================================================
   FINAL PERFORMANCE MARKETING SECTIONS
========================================================= */

export default function PerformanceMarketingFinalSections() {
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      {/* =====================================================
          SECTION 14 — FINAL ANSWER BLOCK
      ===================================================== */}


      {/* =====================================================
          SECTION 15 — FINAL CTA
      ===================================================== */}

      <section
        id="performance-final-cta"
        aria-labelledby="performance-final-cta-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-white
          py-16

          sm:py-20
          md:py-24
          lg:py-28
          xl:py-32
        "
      >
        {/* ===================================================
            CLEAN WHITE BACKGROUND
        =================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-20
            bg-white
          "
        />

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-8
            lg:px-10
            xl:px-14
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 34,
              scale: reduceMotion ? 1 : 0.99,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative
              mx-auto
              max-w-[1040px]

              px-0
              py-4

              text-center

              sm:py-6
              lg:py-8
            "
          >
            <div className="relative z-10">
              {/* EYEBROW */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
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
                    text-[0.65rem]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#B79A72]
                  "
                >
                  Your Next Move
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

              {/* HEADING */}

              <motion.h2
                id="performance-final-cta-heading"
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.05,
                  ease,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-[900px]
                  text-[2.2rem]
                  font-medium
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]
                "
              >
                Ready to Turn Reach Into{" "}
                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-[#B79A72]
                  "
                >
                  Growth?
                </span>
              </motion.h2>

              {/* COPY */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.55,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.72,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="
                  mx-auto
                  mt-7
                  max-w-[740px]
                  space-y-4
                  text-[0.98rem]
                  leading-[1.75]
                  text-[#506981]
                  sm:text-[1rem]
                "
              >
                <p className="font-medium text-[#234B6C]">
                  Getting seen is only the first step.
                </p>

                <p>
                  The opportunity is to turn that attention into clicks,
                  conversions and meaningful business outcomes.
                </p>

                <p>
                  Let’s build a performance marketing strategy around the
                  audiences, campaigns and opportunities that matter most to
                  your growth.
                </p>
              </motion.div>

             

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.22,
                  ease,
                }}
                className="
                  mt-8
                  flex

                  sm:mt-10
                  justify-center
                "
              >
                <motion.a
                href="/contact?service=performance-marketing&need=custom-performance-plan#contact-form"
                title="Start Growing With Paid Media"
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
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
                  {/* SOFT INNER BORDER */}
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

                  {/* INNER LIGHT */}
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

                  <span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                    "
                  >
                    Start Growing With Paid Media
                  </span>
                </motion.a>
              </motion.div>

              {/* SUPPORTING LINE */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.3,
                }}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span
                  className="
                    hidden
                    h-px
                    w-9
                    bg-[#B4C9D8]
                    sm:block
                  "
                />

              

                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   SECTION 14 SIGNAL
========================================================= */

function AnswerSignal({
  number,
  label,
  text,
  icon: Icon,
}: {
  number: string;
  label: string;
  text: string;
  icon: typeof Target;
}) {
  return (
    <div
      className="
        group
        rounded-[1rem]
        border
        border-[#C2D7E6]
        bg-gradient-to-br
        from-white
        to-[#EFF7FC]
        px-5
        py-5
        text-left
        shadow-[0_9px_25px_rgba(11,42,82,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#8EB9D7]
        hover:shadow-[0_15px_35px_rgba(11,42,82,0.08)]
      "
    >
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
            h-9
            w-9
            items-center
            justify-center
            rounded-[0.7rem]
            bg-[#E4F1FA]
            text-[#1763A0]
          "
        >
          <Icon
            size={16}
            strokeWidth={1.7}
          />
        </span>

        <span
          className="
            font-serif
            text-[0.7rem]
            italic
            text-[#7893A9]
          "
        >
          {number}
        </span>
      </div>

      <p
        className="
          mt-5
          text-[0.55rem]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#315F82]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-[0.72rem]
          leading-[1.55]
          text-[#5B7288]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   CTA GROWTH STEP
========================================================= */

function GrowthStep({
  icon: Icon,
  label,
}: {
  icon: typeof Target;
  label: string;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
      "
    >
      <span
        className="
          grid
          h-7
          w-7
          place-items-center

          rounded-full

          bg-[#EEF6FB]

          text-[#1763A0]
        "
      >
        <Icon
          size={12}
          strokeWidth={1.7}
        />
      </span>

      <span
        className="
          text-[0.52rem]
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[#476A85]
        "
      >
        {label}
      </span>
    </div>
  );
}