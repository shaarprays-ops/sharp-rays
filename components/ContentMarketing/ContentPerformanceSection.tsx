"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  MousePointer2,
  Eye,
  Network,
  GitBranch,
  MessageSquareText,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Check,
  TrendingUp,
} from "lucide-react";

/* ===========================================================
   METRICS
=========================================================== */

const metrics = [
  {
    number: "01",
    title: "Search Visibility",
    description:
      "Is your content becoming visible for relevant topics and searches?",
    icon: Search,

    desktopPosition:
      "left-1/2 top-[1%] -translate-x-1/2",
  },

  {
    number: "02",
    title: "AI Search Visibility",
    description:
      "Where measurable, is your content gaining visibility within emerging AI-assisted search experiences?",
    icon: Sparkles,

    desktopPosition:
      "right-[2%] top-[14%]",
  },

  {
    number: "03",
    title: "Qualified Organic Traffic",
    description:
      "Are the right people discovering your website?",
    icon: MousePointer2,

    desktopPosition:
      "right-[0%] top-[43%]",
  },

  {
    number: "04",
    title: "Engagement",
    description:
      "Are visitors actually spending time with and interacting with the content?",
    icon: Eye,

    desktopPosition:
      "right-[3%] bottom-[9%]",
  },

  {
    number: "05",
    title: "Topic Visibility",
    description:
      "Is your website becoming stronger across the themes connected to your expertise?",
    icon: Network,

    desktopPosition:
      "left-1/2 bottom-[0%] -translate-x-1/2",
  },

  {
    number: "06",
    title: "Leads & Enquiries",
    description:
      "Are visitors completing meaningful business actions?",
    icon: MessageSquareText,

    desktopPosition:
      "left-[3%] bottom-[9%]",
  },

  {
    number: "07",
    title: "Content Efficiency",
    description:
      "Which content should be improved, expanded, consolidated or stopped?",
    icon: RefreshCw,

    desktopPosition:
      "left-[0%] top-[43%]",
  },

  {
    number: "08",
    title: "Assisted Conversions",
    description:
      "Does content contribute to journeys that later become enquiries or customers?",
    icon: GitBranch,

    desktopPosition:
      "left-[2%] top-[14%]",
  },
];

/* ===========================================================
   MAIN COMPONENT
=========================================================== */

export default function ContentPerformanceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="content-performance"
      aria-labelledby="content-performance-heading"
      className="
        relative
        overflow-hidden
        bg-white

        py-20
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* LEFT SOFT DETAIL */}

        <div
          className="
            absolute
            -left-[260px]
            -top-[160px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#EFF5FA]
            blur-[105px]
          "
        />

        {/* RIGHT WARM DETAIL */}

        <div
          className="
            absolute
            -right-[260px]
            bottom-[30px]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#F8F1EA]
            blur-[120px]
          "
        />

        {/* LEFT BOTTOM CIRCLES */}

        <div
          className="
            absolute
            -left-[260px]
            bottom-[-250px]

            h-[500px]
            w-[500px]

            rounded-full

            border
            border-[#B88758]/10
          "
        />

        <div
          className="
            absolute
            -left-[165px]
            bottom-[-155px]

            h-[310px]
            w-[310px]

            rounded-full

            border
            border-[#B88758]/10
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
          max-w-[1360px]

          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
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
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[1020px]
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
                w-12
                bg-[#B88758]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.29em]
                text-[#A67549]

                sm:text-[10px]
              "
            >
              Content Performance
            </span>

            <span
              className="
                h-px
                w-12
                bg-[#B88758]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id="content-performance-heading"
            className="
              mx-auto
              mt-6
              max-w-[980px]

              font-serif
              text-[2.25rem]
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
            Content Should Create More Than{" "}
            <span
              className="
                block
                font-normal
                italic
                text-[#B88758]
              "
            >
              Page Views.
            </span>
          </h2>

          {/* INTRO */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[800px]

              text-[14px]
              leading-7
              text-[#526A81]

              sm:text-[15px]
            "
          >
            Traffic matters. But the value of content depends on what that
            attention contributes to the business.
          </p>
        </motion.header>

        {/* =====================================================
            DESKTOP PERFORMANCE ORBIT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            mx-auto
            mt-20

            hidden

            h-[700px]
            w-full
            max-w-[1080px]

            lg:block
          "
        >
          {/* =================================================
              OUTER ORBIT
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[570px]
              w-[570px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              border
              border-[#9FB7CB]
            "
          />

          {/* SECOND ORBIT */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[495px]
              w-[495px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              border
              border-[#0B2A52]/[0.055]
            "
          />

          {/* GOLD INNER ORBIT */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[405px]
              w-[405px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              border
              border-[#B88758]/20
            "
          />

          {/* CENTER BACKGROUND */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[370px]
              w-[370px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-gradient-to-b
              from-[#FBF6F0]
              via-white
              to-[#F0F5F9]

              shadow-[0_20px_70px_rgba(11,42,82,0.045)]
            "
          />

          {/* =================================================
              ORBIT DOTS
          ================================================= */}

          {Array.from({ length: 8 }).map((_, index) => {
            const angle = index * 45;

            return (
              <div
                key={index}
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-1/2

                  h-[570px]
                  w-[570px]

                  -translate-x-1/2
                  -translate-y-1/2
                "
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.35, 1],
                        }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: index * 0.16,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-[-5px]

                    h-[10px]
                    w-[10px]

                    -translate-x-1/2

                    rounded-full

                    border-2
                    border-white

                    bg-[#B88758]

                    shadow-[0_0_0_3px_rgba(184,135,88,0.12)]
                  "
                />
              </div>
            );
          })}

          {/* =================================================
              CENTER VISUAL
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[350px]
              w-[350px]

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* ===============================================
                PERSON IMAGE — SMALLER
            =============================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[30px]
                left-1/2

                z-10

                h-[285px]
                w-[285px]

                -translate-x-1/2
              "
            >
              <Image
                src="/content/content-performance-person.png"
                alt="Content marketing performance and measurement"
                title="Content marketing performance and measurement"
                fill
                className="
                  object-contain
                  object-bottom
                "
                sizes="285px"
              />
            </motion.div>

            {/* ===============================================
                LEFT FLOATING RESULT CARD
            =============================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[-58px]
                top-[70px]

                z-20

                w-[140px]

                rounded-[14px]

                border
                border-[#D2DDE6]

                bg-white/95

                px-3
                py-3

                shadow-[0_15px_35px_rgba(11,42,82,0.08)]

                backdrop-blur
              "
            >
              {[
                "More Visibility",
                "More Engagement",
                "More Conversions",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    py-1
                  "
                >
                  <span
                    className="
                      flex
                      h-[15px]
                      w-[15px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#B88758]

                      text-[#B88758]
                    "
                  >
                    <Check
                      size={8}
                      strokeWidth={2}
                    />
                  </span>

                  <span
                    className="
                      text-[7px]
                      font-medium
                      text-[#536B83]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ===============================================
                RIGHT FLOATING CHART
            =============================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[-60px]
                top-[55px]

                z-20

                w-[145px]

                rounded-[14px]

                border
                border-[#D2DDE6]

                bg-white/95

                px-4
                py-3

                shadow-[0_15px_35px_rgba(11,42,82,0.08)]

                backdrop-blur
              "
            >
              <span
                className="
                  font-serif
                  text-[0.78rem]
                  font-medium
                  text-[#0B2A52]
                "
              >
                Content Growth
              </span>

              <div
                className="
                  mt-3
                  flex
                  h-[65px]
                  items-end
                  gap-[5px]
                "
              >
                {[18, 27, 36, 46, 58, 70].map(
                  (height, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.6,
                        delay: reduceMotion
                          ? 0
                          : index * 0.07,
                      }}
                      className={`
                        w-[8px]
                        rounded-t-[2px]

                        ${
                          index === 5
                            ? "bg-[#B88758]"
                            : "bg-[#EEDBC9]"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </motion.div>

            {/* ===============================================
                TREND ICON
            =============================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                      x: [0, 4, 0],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[40px]
                top-[165px]

                z-20

                text-[#2E6FA6]
              "
            >
              <TrendingUp
                size={27}
                strokeWidth={1.6}
              />
            </motion.div>

            {/* ===============================================
                SEARCH BAR
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 10,
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
                delay: reduceMotion ? 0 : 0.45,
              }}
              className="
                absolute
                bottom-[25px]
                left-1/2

                z-30

                flex
                w-[265px]

                -translate-x-1/2

                items-center
                gap-3

                rounded-full

                border
                border-[#CCD9E3]

                bg-white/95

                px-4
                py-2

                shadow-[0_10px_30px_rgba(11,42,82,0.1)]

                backdrop-blur
              "
            >
              <Search
                size={13}
                strokeWidth={1.7}
                className="text-[#0B2A52]"
              />

              <span
                className="
                  flex-1

                  text-[8px]
                  font-medium
                  text-[#385771]
                "
              >
                More than page views...
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  rounded-full

                  bg-[#B88758]
                  text-white
                "
              >
                <ArrowRight
                  size={11}
                  strokeWidth={1.7}
                />
              </span>
            </motion.div>
          </div>

          {/* =================================================
              METRICS
          ================================================= */}

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.article
                key={metric.number}
                initial={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 0.9,
                  y: reduceMotion ? 0 : 14,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion
                    ? 0
                    : 0.2 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  absolute
                  z-30

                  w-[165px]

                  text-center

                  ${metric.desktopPosition}
                `}
              >
                {/* NUMBER */}

                <span
                  className="
                    block

                    font-serif
                    text-[0.88rem]
                    font-medium
                    text-[#B88758]
                  "
                >
                  {metric.number}
                </span>

                {/* ICON */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          scale: 1.05,
                        }
                  }
                  className="
                    mx-auto
                    mt-1

                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#D5B18D]

                    bg-white

                    shadow-[0_8px_20px_rgba(11,42,82,0.055)]
                  "
                >
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#ECD8C4]

                      bg-[#FCFAF7]

                      text-[#0B2A52]
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                    />
                  </div>
                </motion.div>

                {/* TITLE */}

                <h3
                  className="
                    mx-auto
                    mt-2.5
                    max-w-[165px]

                    font-serif
                    text-[0.98rem]
                    font-medium
                    leading-[1.14]
                    tracking-[-0.025em]
                    text-[#0B2A52]
                  "
                >
                  {metric.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto
                    mt-1.5
                    max-w-[160px]

                    text-[8.5px]
                    leading-[1.45]
                    text-[#536B83]
                  "
                >
                  {metric.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            TABLET + MOBILE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[760px]

            lg:hidden
          "
        >
          {/* ===============================================
              CENTRAL VISUAL
          =============================================== */}

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
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
            }}
            className="
              relative

              mx-auto

              h-[350px]
              max-w-[440px]

              overflow-hidden

              rounded-[34px]

              border
              border-[#CFDAE3]

              bg-gradient-to-b
              from-[#FCF8F4]
              via-white
              to-[#F1F5F8]
            "
          >
            {/* IMAGE */}

            <div
              className="
                absolute
                bottom-[45px]
                left-1/2

                h-[300px]
                w-[300px]

                -translate-x-1/2
              "
            >
              <Image
                src="/content/content-performance-person.webp"
                alt="Content marketing performance and measurement"
                title="Content marketing performance and measurement"
                fill
                className="
                  object-contain
                  object-bottom
                "
                sizes="255px"
              />
            </div>

            {/* SEARCH BAR */}

            <div
              className="
                absolute
                bottom-5
                left-1/2

                flex
                w-[82%]

                -translate-x-1/2

                items-center
                gap-3

                rounded-full

                border
                border-[#CFDAE3]

                bg-white

                px-4
                py-2

                shadow-[0_8px_25px_rgba(11,42,82,0.08)]
              "
            >
              <Search
                size={13}
                className="text-[#0B2A52]"
              />

              <span
                className="
                  flex-1
                  text-[8px]
                  font-medium
                  text-[#385771]
                "
              >
                More than page views...
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  rounded-full

                  bg-[#B88758]
                  text-white
                "
              >
                <ArrowRight
                  size={11}
                />
              </span>
            </div>
          </motion.div>

          {/* ===============================================
              METRIC LIST
          =============================================== */}

          <div
            className="
              mt-9
              grid
              gap-x-7

              sm:grid-cols-2
            "
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.article
                  key={metric.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 16,
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
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion
                      ? 0
                      : index * 0.04,
                  }}
                  className="
                    flex
                    gap-4

                    border-t
                    border-[#B8C7D3]

                    py-5
                  "
                >
                  {/* NUMBER / ICON */}

                  <div
                    className="
                      shrink-0
                      text-center
                    "
                  >
                    <span
                      className="
                        block

                        font-serif
                        text-[0.75rem]
                        text-[#B88758]
                      "
                    >
                      {metric.number}
                    </span>

                    <span
                      className="
                        mt-2

                        flex
                        h-10
                        w-10
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#D5B18D]

                        text-[#0B2A52]
                      "
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.6}
                      />
                    </span>
                  </div>

                  {/* COPY */}

                  <div>
                    <h3
                      className="
                        font-serif
                        text-[1.08rem]
                        font-medium
                        leading-[1.2]
                        text-[#0B2A52]
                      "
                    >
                      {metric.title}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-[10px]
                        leading-5
                        text-[#536B83]
                      "
                    >
                      {metric.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            REAL METRIC
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            mx-auto

            mt-14
            max-w-[1160px]

            overflow-hidden

            rounded-[26px]

            border
            border-[#DEC2A7]

            bg-[#FFFCF9]

            px-6
            py-8

            shadow-[0_16px_45px_rgba(11,42,82,0.045)]

            sm:px-8

            lg:px-10
            lg:py-9
          "
        >
          {/* LEFT DECORATION */}

          <div
            className="
              pointer-events-none

              absolute
              -left-[70px]
              -top-[70px]

              h-[170px]
              w-[170px]

              rounded-full

              border
              border-[#B88758]/15
            "
          />

          <div
            className="
              pointer-events-none

              absolute
              -left-[35px]
              -top-[35px]

              h-[100px]
              w-[100px]

              rounded-full

              border
              border-[#B88758]/15
            "
          />

          {/* RIGHT DECORATION */}

          <div
            className="
              pointer-events-none

              absolute
              -right-[60px]
              -top-[65px]

              h-[165px]
              w-[165px]

              rounded-full

              border
              border-[#B88758]/12
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10

              grid
              items-center
              gap-7

              lg:grid-cols-[1fr_auto]
            "
          >
            {/* COPY */}

            <div
              className="
                text-center
                lg:text-left
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3

                  lg:justify-start
                "
              >
                <span className="h-px w-7 bg-[#B88758]" />

                <span
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#A67549]
                  "
                >
                  The Real Metric
                </span>

                <span className="h-px w-7 bg-[#B88758]" />
              </div>

              <h3
                className="
                  mt-5

                  font-serif
                  text-[1.75rem]
                  font-medium
                  leading-[1.18]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[2.05rem]
                  lg:text-[2.3rem]
                "
              >
                Useful attention that moves the relationship{" "}
                <span
                  className="
                    font-normal
                    italic
                    text-[#B88758]
                  "
                >
                  forward.
                </span>
              </h3>
            </div>

            {/* ARROW */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, 4, 0],
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mx-auto

                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full

                border
                border-[#D3AD87]

                bg-white

                text-[#B88758]

                shadow-[0_7px_18px_rgba(184,135,88,0.09)]

                lg:mx-0
              "
            >
              <ArrowRight
                size={19}
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}