"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  Crosshair,
  MousePointerClick,
  MoveUpRight,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export default function PerformanceMarketingHero() {
  const reduceMotion = useReducedMotion();

  const transition = {
    duration: reduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="performance-marketing-hero"
      aria-labelledby="performance-marketing-heading"
      className="
        relative
        isolate
        min-h-0
        overflow-hidden
        bg-white

        lg:min-h-screen
      "
    >
      

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          mx-auto
          flex
          min-h-0
          w-full
          max-w-[1480px]
          items-center

          px-4
          pb-12
          pt-24

          sm:px-6
          sm:pb-16
          sm:pt-28

          md:px-8
          md:pb-20
          md:pt-32

          lg:min-h-screen
          lg:px-10
          lg:pb-24
          lg:pt-36

          xl:px-14
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10

            sm:gap-12
            md:gap-14

            lg:grid-cols-[0.93fr_1.07fr]
            lg:gap-12

            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="relative z-10 mx-auto w-full max-w-[690px] lg:mx-0">
            {/* EYEBROW */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -28,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.6,
              }}
              transition={transition}
              className="
                mb-5
                flex
                items-center
                gap-3

                sm:mb-6
                sm:gap-4

                lg:mb-7
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
                  text-[0.58rem]
          
                  tracking-[0.21em]
                  text-[#B79A72]

                  sm:text-[0.66rem]
                  sm:tracking-[0.26em]

                  md:text-[0.72rem]
                  md:tracking-[0.28em]
                "
              >
                PERFORMANCE MARKETING
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

            {/* =====================================================
                MAIN HEADING
            ===================================================== */}

            <motion.h1
              id="performance-marketing-heading"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 34,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                ...transition,
                delay: reduceMotion ? 0 : 0.08,
              }}
              className="
                max-w-[650px]

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
              Turn Reach Into{" "}
              <span
                className="
             
                

                 
                  tracking-[-0.025em]

                  text-[#B79A72]
                "
              >
                Results.

                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scaleX: 0,
                        }
                  }
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.7,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    delay: reduceMotion ? 0 : 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    -bottom-1
                    left-1

                    h-px
                    w-[96%]

                    origin-left

                    bg-[#B67D49]/50
                  "
                />
              </span>
            </motion.h1>

            {/* =====================================================
                BODY
            ===================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
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
                ...transition,
                delay: reduceMotion ? 0 : 0.16,
              }}
              className="
                mt-6
                max-w-[620px]
                space-y-3

                text-[0.9rem]
                leading-[1.7]
                text-[#405A79]

                sm:mt-7
                sm:space-y-4
                sm:text-[0.98rem]
                sm:leading-[1.75]

                md:text-[1rem]
              "
            >
              <p>
                Sharp Rays is a performance marketing agency helping businesses
                turn paid media into measurable growth.
              </p>

              <p>
                From campaign strategy and audience targeting to creative,
                conversion tracking and ongoing optimization, we connect every
                part of your advertising around the actions that matter to your
                business.
              </p>
            </motion.div>

            {/* =====================================================
                STATEMENT RAIL
            ===================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -25,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                ...transition,
                delay: reduceMotion ? 0 : 0.26,
              }}
              className="
                relative
                mt-6
                border-l-2
                border-[#B78350]
                pl-4

                sm:mt-7
                sm:pl-5
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  items-center

                  gap-x-3
                  gap-y-1.5

                  text-[0.84rem]

                  sm:text-[0.92rem]
                  font-medium
                  text-[#234468]
                "
              >
                <span>More than reach.</span>

                <span
                  className="
                    hidden
                    h-1
                    w-1
                    rounded-full
                    bg-[#B78350]

                    sm:block
                  "
                />

                <span>More than clicks.</span>
              </div>

              <p
                className="
                  mt-1

                  font-serif
                  text-[1rem]

                  sm:text-[1.08rem]
                  font-semibold
                  italic
                  text-[#0B2A52]
                "
              >
                Performance with somewhere to go.
              </p>
            </motion.div>

            {/* =====================================================
                CTAs
            ===================================================== */}

            <motion.div
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
                amount: 0.4,
              }}
              transition={{
                ...transition,
                delay: reduceMotion ? 0 : 0.34,
              }}
              className="
                mt-7
                flex
                w-full
                flex-row
                flex-nowrap
                items-center
                gap-2

                sm:mt-8
                sm:w-auto
                sm:gap-3
              "
            >
              {/* =================================================
                  PRIMARY CTA — SOFT GLASS STYLE
              ================================================= */}

              <a
              href="/contact?service=performance-marketing&need=paid-media-strategy#contact-form"
              title="Start Growing With Paid Media"
                className="
                  group
                  relative

                  inline-flex
                  min-h-[42px]
                  min-w-0
                  flex-1

                  items-center
                  justify-center
                  gap-1.5

                  overflow-hidden

                  rounded-[14px]

                  border
                  border-[#6285AD]/30

                  bg-white/80

                  px-3
                  py-2.5

                  text-[0.7rem]
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
                  sm:flex-none
                  sm:rounded-[16px]
                  sm:px-6
                  sm:py-3
                  sm:text-[0.88rem]
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

                {/* VERY SUBTLE INNER LIGHT */}
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

                <span className="relative z-10 whitespace-nowrap">
                  Grow With Paid Media
                </span>

               
              </a>

              {/* =================================================
                  SECONDARY CTA — SAME GLASS DESIGN FAMILY
              ================================================= */}

            
            </motion.div>

            {/* =====================================================
                SUPPORTING LINE
            ===================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.48,
              }}
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-3

                sm:mt-9
                sm:gap-4

                lg:justify-start
              "
            >
             
             

            </motion.div>
          </div>

          {/* =====================================================
              RIGHT PERFORMANCE VISUAL
          ===================================================== */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    scale: 0.96,
                  }
            }
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
              duration: reduceMotion ? 0 : 1,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[610px]

              sm:max-w-[650px]
              md:max-w-[680px]

              lg:mx-0
              lg:max-w-[690px]
            "
          >
            <div
              className="
                relative
                mx-auto

                aspect-[1/1.04]

                w-full
                max-w-[690px]

                sm:aspect-[1.03/0.94]
                md:aspect-[1.05/0.88]
              "
            >
             

              {/* =================================================
                  CENTRAL DASHBOARD
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -7, 0],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[2%]
                  top-[17%]
                  z-20

                  w-[96%]

                  overflow-hidden

                  rounded-[20px]

                  sm:left-[7%]
                  sm:top-[22%]
                  sm:w-[82%]
                  sm:rounded-[24px]

                  md:left-[10%]
                  md:top-[27%]
                  md:w-[69%]
                  md:rounded-[28px]

                  border
                  border-[#D7E0EA]

                  bg-white/90

                  shadow-[0_30px_90px_rgba(11,42,82,0.12)]

                  backdrop-blur-xl
                "
              >
                {/* TOP CHROME */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    border-b
                    border-[#E7EDF3]

                    px-3
                    py-3

                    sm:px-5
                    sm:py-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#D5B18B]" />
                    <span className="h-2 w-2 rounded-full bg-[#BFD2E5]" />
                    <span className="h-2 w-2 rounded-full bg-[#AFC7B7]" />
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      rounded-full

                      bg-[#F5F8FB]

                      px-3
                      py-1.5
                    "
                  >
                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: [1, 0.35, 1],
                            }
                      }
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#2F8A67]
                      "
                    />

                    <span
                      className="
                        text-[0.48rem]
                        font-semibold
                        tracking-[0.08em]

                        sm:text-[0.58rem]
                        sm:tracking-[0.12em]
                        text-[#56708B]
                      "
                    >
                      CAMPAIGN ACTIVE
                    </span>
                  </div>
                </div>

                {/* DASHBOARD BODY */}

                <div className="p-3 sm:p-5 md:p-6">
                  {/* TITLE */}

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p
                        className="
                          text-[0.58rem]
                          font-semibold
                          tracking-[0.18em]
                          text-[#8B9BAE]
                        "
                      >
                        PERFORMANCE FLOW
                      </p>

                      <h3
                        className="
                          mt-1.5

                          text-[0.95rem]
                          font-semibold
                          text-[#0B2A52]

                          sm:text-[1.08rem]
                          md:text-[1.22rem]
                        "
                      >
                        From attention to action.
                      </h3>
                    </div>

                    <div
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0

                        sm:h-10
                        sm:w-10
                        place-items-center

                        rounded-xl

                        bg-[#EEF5FB]
                        text-[#0B4B82]
                      "
                    >
                      <BarChart3 size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* =================================================
                      PERFORMANCE FLOW
                  ================================================= */}

                  <div
                    className="
                      mt-6

                      grid
                      grid-cols-3

                      items-center
                      gap-1.5

                      sm:grid-cols-[1fr_auto_1fr_auto_1fr]
                      sm:gap-2
                    "
                  >
                    {[
                      {
                        label: "Reach",
                        icon: Target,
                      },
                      {
                        label: "Intent",
                        icon: MousePointerClick,
                      },
                      {
                        label: "Action",
                        icon: TrendingUp,
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.label} className="contents">
                          <div
                            className="
                              rounded-xl

                              border
                              border-[#E1E8F0]

                              bg-[#F9FBFD]

                              px-1
                              py-3

                              sm:rounded-2xl
                              sm:px-2
                              sm:py-3.5

                              text-center
                            "
                          >
                            <Icon
                              size={15}
                              strokeWidth={1.8}
                              className="
                                mx-auto
                                text-[#0E4F87]
                              "
                            />

                            <p
                              className="
                                mt-2

                                text-[0.65rem]
                                font-semibold
                                text-[#274B6D]
                              "
                            >
                              {item.label}
                            </p>
                          </div>

                          {index < 2 && (
                            <ArrowRight
                              size={13}
                              className="hidden text-[#B48459] sm:block"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* =================================================
                      GRAPH
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-4

                      overflow-hidden

                      rounded-[16px]

                      sm:mt-5
                      sm:rounded-[20px]

                      border
                      border-[#E1E8F0]

                      bg-gradient-to-b
                      from-[#F8FBFE]
                      to-white

                      px-3
                      pb-3
                      pt-4

                      sm:px-4
                      sm:pb-4
                      sm:pt-5
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0

                        opacity-[0.55]

                        [background-image:linear-gradient(to_right,#0B2A5208_1px,transparent_1px),linear-gradient(to_bottom,#0B2A5208_1px,transparent_1px)]
                        [background-size:28px_28px]
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        items-end
                        gap-1.5

                        sm:h-[90px]
                        sm:gap-2.5
                      "
                    >
                      {[34, 43, 39, 55, 50, 67, 75, 71, 87].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    height: 0,
                                  }
                            }
                            whileInView={{
                              height: `${height}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: reduceMotion ? 0 : 0.7,
                              delay: reduceMotion
                                ? 0
                                : 0.55 + index * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                              flex-1
                              rounded-t-md

                              bg-gradient-to-t
                              from-[#0B3F73]
                              to-[#6BA7D7]
                            "
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING TARGETING CARD
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                      }
                }
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[1%]
                  top-[4%]
                  z-30

                  hidden
                  w-[160px]

                  rounded-[22px]

                  border
                  border-[#D9E3EC]

                  bg-white/90

                  p-4

                  shadow-[0_18px_50px_rgba(11,42,82,0.09)]

                  backdrop-blur-xl

                  md:block
                "
              >
                <div
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center

                    rounded-xl

                    bg-[#EFF5FB]
                    text-[#0B4C84]
                  "
                >
                  <Crosshair size={18} strokeWidth={1.8} />
                </div>

                <p
                  className="
                    mt-3

                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-[#8A9BAD]
                  "
                >
                  Targeting
                </p>

                <p
                  className="
                    mt-1

                    text-[0.82rem]
                    font-semibold
                    leading-snug

                    text-[#0B2A52]
                  "
                >
                  Reach the right audience
                </p>
              </motion.div>

              {/* =================================================
                  FLOATING CONVERSION CARD
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 10, 0],
                      }
                }
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[3%]
                  right-[1%]
                  z-30

                  sm:bottom-[4%]
                  sm:right-[2%]

                  md:bottom-[5%]
                  md:right-[3%]

                  hidden
                  w-[148px]

                  rounded-[18px]

                  sm:block
                  sm:w-[158px]
                  sm:rounded-[20px]

                  md:w-[170px]
                  md:rounded-[22px]

                  border
                  border-[#E3D7CA]

                  bg-[#FFFDFC]/95

                  p-3

                  shadow-[0_18px_55px_rgba(86,59,31,0.08)]

                  sm:p-4

                  backdrop-blur-xl
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      grid
                      h-9
                      w-9
                      place-items-center

                      rounded-xl

                      bg-[#F8EEE5]
                      text-[#AA7141]
                    "
                  >
                    <MoveUpRight size={18} strokeWidth={1.8} />
                  </div>

                  <Sparkles
                    size={15}
                    strokeWidth={1.7}
                    className="text-[#C29162]"
                  />
                </div>

                <p
                  className="
                    mt-3

                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-[#9A8675]
                  "
                >
                  Conversion
                </p>

                <p
                  className="
                    mt-1

                    text-[0.82rem]
                    font-semibold
                    leading-snug

                    text-[#0B2A52]
                  "
                >
                  Turn interest into action
                </p>
              </motion.div>

              {/* =================================================
                  PAID MEDIA CARD
              ================================================= */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 8, 0],
                      }
                }
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[1%]
                  left-[1%]
                  z-30

                  hidden
                  w-[158px]

                  rounded-[22px]

                  border
                  border-[#D9E4EE]

                  bg-white/95

                  p-4

                  shadow-[0_18px_50px_rgba(11,42,82,0.08)]

                  backdrop-blur-xl

                  md:block
                "
              >
                <CircleDollarSign
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#0B4B82]"
                />

                <p
                  className="
                    mt-3

                    text-[0.58rem]
                    font-semibold
                    uppercase
                    tracking-[0.14em]

                    text-[#8A9BAD]
                  "
                >
                  Paid Media
                </p>

                <p
                  className="
                    mt-1

                    text-[0.82rem]
                    font-semibold
                    leading-snug

                    text-[#0B2A52]
                  "
                >
                  Spend with purpose
                </p>
              </motion.div>

              {/* =================================================
                  VERTICAL EDITORIAL TEXT
              ================================================= */}


              {/* =================================================
                  SMALL VISUAL NODES
                  These are part of the performance illustration.
              ================================================= */}

             
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}