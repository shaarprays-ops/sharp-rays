"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Lightbulb,
  LineChart,
  Search,
  Target,
} from "lucide-react";

/* =========================================================
   METHOD STEPS
========================================================= */

const methodSteps = [
  {
    number: "01",
    title: "Understand",
    description: "What's actually happening?",
    icon: Search,
  },
  {
    number: "02",
    title: "Find the Opportunity",
    description: "Where can we win?",
    icon: Target,
  },
  {
    number: "03",
    title: "Build the System",
    description: "Strategy → Creative → Distribution",
    icon: Brain,
  },
  {
    number: "04",
    title: "Measure",
    description: "What worked?",
    icon: BarChart3,
  },
  {
    number: "05",
    title: "Make It Better",
    description: "Repeat → Improve → Scale",
    icon: LineChart,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function YourMethodSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]

          px-4
          min-[375px]:px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* ====================================================
            SECTION LABEL
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            z-20
            flex
            items-center
            justify-center

            gap-2.5
            sm:gap-3
            md:gap-4
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
              whitespace-nowrap
              text-[9px]
           
              uppercase
              tracking-[0.22em]
              text-[#C6A77A]

              min-[375px]:text-[10px]

              sm:text-[11px]
              sm:tracking-[0.28em]

              md:text-xs
              md:tracking-[0.32em]
            "
          >
            Your Method
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

        {/* ====================================================
            MAIN HEADING
        ==================================================== */}

       <div
  className="
    relative
    z-30
    mx-auto

    mt-6
    max-w-[1200px]

    overflow-visible
    text-center

    sm:mt-7
    md:mt-8
    lg:mt-9
  "
>
  <div className="relative overflow-hidden pb-1 sm:pb-2">
    <motion.h2
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.85,
        ease,
      }}
      className="
        relative
        z-30

        font-[var(--font-new-york)]

        text-[2.15rem]
        font-normal
        leading-[0.98]
        tracking-[-0.055em]
        text-[#0B2A52]

        min-[375px]:text-[2.3rem]

        sm:text-[2.6rem]
        md:text-[2.95rem]
        lg:text-[3.1rem]
        xl:text-[3.35rem]
      "
    >
      We Don&apos;t Guess.{" "}
      <span className="text-[#B79A72]">
        We Find Out.
      </span>
    </motion.h2>
  </div>
</div>
        {/* ====================================================
            DESCRIPTION
        ==================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="
            relative
            z-20
            mx-auto

            mt-5
            max-w-[620px]

            px-2

            text-center
            text-[13px]
            leading-[1.7]
            text-[#66758A]

            min-[375px]:text-[14px]

            sm:mt-6
            sm:text-base

            md:mt-7
            md:text-lg
            md:leading-7
          "
        >
          Every strong decision starts with knowing what&apos;s actually
          happening.
        </motion.p>

        {/* ====================================================
            MAIN CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-10

            mt-10

            grid
            grid-cols-1
            items-center

            gap-10

            sm:mt-12
            sm:gap-12

            md:mt-14

            lg:mt-16
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-12

            xl:mt-20
            xl:grid-cols-[1fr_1fr]
            xl:gap-20

            2xl:gap-24
          "
        >
          {/* ==================================================
              LEFT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              relative

              flex
              w-full

              min-h-[280px]

              items-center
              justify-center

              min-[375px]:min-h-[310px]

              sm:min-h-[360px]

              md:min-h-[420px]

              lg:min-h-[500px]

              xl:min-h-[600px]
            "
          >
            {/* IMAGE */}

            <motion.img
              src="/whatwedo/YourMethodSection.png"
              alt="People collaborating and finding insights"
              title="People collaborating and finding insights"
              initial={{
                scale: 0.94,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
                ease,
              }}
              className="
                relative
                z-10

                block
                h-auto
                w-full

                max-w-[340px]

                object-contain
                object-center

                min-[375px]:max-w-[380px]

                sm:max-w-[470px]

                md:max-w-[560px]

                lg:max-h-[540px]
                lg:max-w-[600px]

                xl:max-h-[620px]
                xl:max-w-[680px]
              "
            />

            {/* SMALL LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="
                absolute

                left-0
                top-1

                z-20

                flex
                items-center

                gap-2

                sm:left-2
                sm:top-3
                sm:gap-3

                md:left-4
                md:top-4

                lg:left-0
                lg:top-6
              "
            >
              <span
                className="
                  h-px
                  w-5
                  bg-[#C6A77A]

                  sm:w-7
                  md:w-8
                "
              />

              <span
                className="
                  whitespace-nowrap

                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#66758A]

                  min-[375px]:text-[8px]

                  sm:text-[9px]
                  sm:tracking-[0.2em]
                "
              >
                Start with the truth
              </span>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT — THINKING SYSTEM
          ================================================== */}

          <div
            className="
              relative
              z-10
              w-full
              min-w-0
            "
          >
            {/* INTRO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mb-6

                sm:mb-7
                md:mb-8
                lg:mb-9
              "
            >
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C6A77A]

                  min-[375px]:text-[9px]

                  sm:text-[10px]
                  sm:tracking-[0.25em]
                "
              >
                How we think
              </p>

              <h3
                className="
                  mt-2.5
                  max-w-[540px]

                  font-[var(--font-new-york)]

                  text-[1.75rem]
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#0B2A52]

                  min-[375px]:text-[1.9rem]

                  sm:mt-3
                  sm:text-[2.1rem]

                  md:text-4xl

                  lg:text-[2.45rem]

                  xl:text-[2.65rem]
                "
              >
                Turn uncertainty
                <br />
                into a system.
              </h3>
            </motion.div>

            {/* ==================================================
                TIMELINE
            ================================================== */}

            <div className="relative">
              {/* BASE LINE */}

              <div
                className="
                  absolute

                  bottom-6
                  left-[17px]
                  top-6

                  w-px

                  bg-[#E2E8EF]

                  min-[375px]:left-[18px]

                  sm:bottom-7
                  sm:left-[20px]
                  sm:top-7

                  md:left-[23px]

                  lg:left-[24px]
                "
              />

              {/* ANIMATED LINE */}

              <motion.div
                initial={{
                  height: 0,
                }}
                whileInView={{
                  height: "100%",
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="
                  absolute

                  left-[17px]
                  top-6

                  z-[1]

                  w-px

                  bg-[#0B2A52]

                  min-[375px]:left-[18px]

                  sm:left-[20px]
                  sm:top-7

                  md:left-[23px]

                  lg:left-[24px]
                "
              />

              {/* STEPS */}

              <div className="relative space-y-0 sm:space-y-1">
                {methodSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        delay:
                          0.15 +
                          index * 0.12,
                        duration: 0.65,
                        ease,
                      }}
                      className="
                        group
                        relative

                        flex
                        min-w-0
                        items-start

                        gap-3.5

                        py-3.5

                        min-[375px]:gap-4

                        sm:gap-5
                        sm:py-4

                        md:gap-6
                        md:py-5
                      "
                    >
                      {/* NODE */}

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 20,
                        }}
                        className="
                          relative
                          z-10

                          flex

                          h-[34px]
                          w-[34px]

                          shrink-0

                          items-center
                          justify-center

                          rounded-full
                          bg-white

                          min-[375px]:h-9
                          min-[375px]:w-9

                          sm:h-10
                          sm:w-10

                          md:h-12
                          md:w-12
                        "
                      >
                        <div
                          className="
                            absolute
                            inset-0

                            rounded-full
                            border
                            border-[#DCE5EF]

                            transition-all
                            duration-300

                            group-hover:border-[#C6A77A]
                          "
                        />

                        <Icon
                          strokeWidth={1.5}
                          className="
                            relative

                            h-[14px]
                            w-[14px]

                            text-[#0B2A52]

                            transition-transform
                            duration-300

                            group-hover:scale-110

                            sm:h-4
                            sm:w-4

                            md:h-[17px]
                            md:w-[17px]
                          "
                        />
                      </motion.div>

                      {/* CONTENT */}

                      <div
                        className="
                          min-w-0
                          flex-1
                          pt-[1px]
                        "
                      >
                        <div
                          className="
                            flex
                            min-w-0
                            items-baseline
                            gap-2

                            sm:gap-3
                          "
                        >
                          <h4
                            className="
                              min-w-0

                              break-words

                              font-[var(--font-new-york)]

                              text-[17px]
                              font-semibold
                              leading-[1.15]
                              tracking-[-0.025em]
                              text-[#0B2A52]

                              transition-transform
                              duration-300

                              group-hover:translate-x-1

                              min-[375px]:text-lg

                              sm:text-xl

                              md:text-2xl
                            "
                          >
                            {step.title}
                          </h4>
                        </div>

                        <p
                          className="
                            mt-1

                            max-w-[480px]

                            break-words

                            text-[11px]
                            leading-[1.55]
                            text-[#66758A]

                            min-[375px]:text-xs

                            sm:mt-1.5
                            sm:text-sm
                            sm:leading-6

                            md:text-[15px]
                          "
                        >
                          {step.description}
                        </p>

                        {/* BUILD SYSTEM DETAILS */}

                        {index === 2 && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: 0.5,
                              duration: 0.6,
                            }}
                            className="
                              mt-2.5

                              flex
                              flex-wrap
                              items-center

                              gap-x-1.5
                              gap-y-1.5

                              text-[7px]
                              font-semibold
                              uppercase
                              tracking-[0.1em]
                              text-[#0B2A52]

                              min-[375px]:text-[8px]

                              sm:mt-3
                              sm:gap-x-2
                              sm:text-[9px]
                              sm:tracking-[0.13em]
                            "
                          >
                            <span>Strategy</span>

                            <ArrowRight
                              className="
                                h-2
                                w-2

                                sm:h-[10px]
                                sm:w-[10px]
                              "
                            />

                            <span>Creative</span>

                            <ArrowRight
                              className="
                                h-2
                                w-2

                                sm:h-[10px]
                                sm:w-[10px]
                              "
                            />

                            <span>Distribution</span>
                          </motion.div>
                        )}
                      </div>

                      {/* HOVER ARROW */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="
                          hidden
                          shrink-0
                          pt-2

                          lg:block
                        "
                      >
                        <ArrowRight
                          size={17}
                          strokeWidth={1.4}
                          className="text-[#C6A77A]"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            NO ASSUMPTIONS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative

            mt-12
            pt-8

            sm:mt-14
            sm:pt-10

            md:mt-16

            lg:mt-20
            lg:pt-12
          "
        >
          {/* TOP LINE */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0

              h-px

              bg-[#E2E8EF]
            "
          />

          <div
            className="
              grid
              grid-cols-1

              gap-8

              md:gap-10

              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-center
              lg:gap-12

              xl:gap-16
            "
          >
            {/* STATEMENT */}

            <div>
              <div
                className="
                  flex
                  items-center

                  gap-2.5

                  sm:gap-3
                "
              >
                <div
                  className="
                    flex

                    h-7
                    w-7

                    shrink-0

                    items-center
                    justify-center

                    rounded-full
                    bg-[#0B2A52]

                    sm:h-8
                    sm:w-8
                  "
                >
                  <Check
                    className="
                      h-3
                      w-3

                      text-white

                      sm:h-[14px]
                      sm:w-[14px]
                    "
                    strokeWidth={2}
                  />
                </div>

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C6A77A]

                    sm:text-[9px]
                    sm:tracking-[0.22em]
                  "
                >
                  Our principle
                </span>
              </div>

              <h3
                className="
                  mt-3

                  font-[var(--font-new-york)]

                  text-[2rem]
                  font-medium
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#0B2A52]

                  min-[375px]:text-[2.2rem]

                  sm:mt-4
                  sm:text-4xl

                  md:text-[2.7rem]

                  lg:text-5xl
                "
              >
                No assumptions.
              </h3>

              <p
                className="
                  mt-3
                  max-w-[430px]

                  text-[12px]
                  leading-[1.65]
                  text-[#66758A]

                  min-[375px]:text-[13px]

                  sm:text-sm
                  sm:leading-6
                "
              >
                We start with what the data tells us — not what we hope is
                true.
              </p>
            </div>

            {/* =================================================
                PRINCIPLES
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1

                gap-6

                min-[480px]:grid-cols-3
                min-[480px]:gap-4

                sm:gap-6

                lg:gap-7
              "
            >
              {/* DATA */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  border-b
                  border-[#E2E8EF]

                  pb-5

                  min-[480px]:border-b-0
                  min-[480px]:pb-0
                "
              >
                <BarChart3
                  className="
                    h-5
                    w-5
                    text-[#0B2A52]

                    sm:h-[21px]
                    sm:w-[21px]
                  "
                  strokeWidth={1.5}
                />

                <p
                  className="
                    mt-3

                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C6A77A]

                    sm:mt-4
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Data
                </p>

                <h4
                  className="
                    mt-1.5

                    font-[var(--font-new-york)]

                    text-[16px]
                    font-semibold
                    leading-tight
                    text-[#0B2A52]

                    sm:mt-2
                    sm:text-lg
                  "
                >
                  Know what is happening.
                </h4>
              </motion.div>

              {/* CREATIVITY */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  border-b
                  border-[#E2E8EF]

                  pb-5

                  min-[480px]:border-b-0
                  min-[480px]:pb-0
                "
              >
                <Lightbulb
                  className="
                    h-5
                    w-5
                    text-[#0B2A52]

                    sm:h-[21px]
                    sm:w-[21px]
                  "
                  strokeWidth={1.5}
                />

                <p
                  className="
                    mt-3

                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C6A77A]

                    sm:mt-4
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Creativity
                </p>

                <h4
                  className="
                    mt-1.5

                    font-[var(--font-new-york)]

                    text-[16px]
                    font-semibold
                    leading-tight
                    text-[#0B2A52]

                    sm:mt-2
                    sm:text-lg
                  "
                >
                  Know what could happen.
                </h4>
              </motion.div>

              {/* OPTIMIZATION */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <LineChart
                  className="
                    h-5
                    w-5
                    text-[#0B2A52]

                    sm:h-[21px]
                    sm:w-[21px]
                  "
                  strokeWidth={1.5}
                />

                <p
                  className="
                    mt-3

                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C6A77A]

                    sm:mt-4
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  Optimization
                </p>

                <h4
                  className="
                    mt-1.5

                    font-[var(--font-new-york)]

                    text-[16px]
                    font-semibold
                    leading-tight
                    text-[#0B2A52]

                    sm:mt-2
                    sm:text-lg
                  "
                >
                  Make it happen better.
                </h4>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            FINAL STATEMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="
            mt-8

            flex
            w-full
            items-center
            justify-center

            gap-2

            sm:mt-9
            sm:gap-3

            lg:mt-10
          "
        >
          <span
            className="
              h-px
              w-4
              shrink-0
              bg-[#C6A77A]

              min-[375px]:w-6

              sm:w-8
            "
          />

          <p
            className="
              max-w-[500px]

              text-center

              text-[11px]
              italic
              leading-[1.5]
              text-[#66758A]

              min-[375px]:text-xs

              sm:text-sm

              md:text-base
            "
          >
            Find the truth. Build the system. Improve what works.
          </p>

          <span
            className="
              h-px
              w-4
              shrink-0
              bg-[#C6A77A]

              min-[375px]:w-6

              sm:w-8
            "
          />
        </motion.div>
      </div>
    </section>
  );
}