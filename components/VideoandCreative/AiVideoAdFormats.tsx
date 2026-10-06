"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Clapperboard,
  Gem,
  Lightbulb,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type FormatItem = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  focus: string[];
};

const formats: FormatItem[] = [
  {
    number: "01",
    title: "Product Hero Ad",
    eyebrow: "Make the product the star",
    description:
      "Polished product-led creative designed to create desire.",
    icon: Gem,
    focus: ["PRODUCT", "DETAIL", "DESIRE", "BRAND"],
  },
  {
    number: "02",
    title: "UGC / Influencer-Style",
    eyebrow: "Make the message feel human",
    description:
      "Conversational social-first creative built around relatability and proof.",
    icon: Users,
    focus: ["HOOK", "RELATABILITY", "PROOF", "ACTION"],
  },
  {
    number: "03",
    title: "Problem → Solution",
    eyebrow: "Make the solution clear",
    description:
      "Start with a familiar problem and make the benefit easy to understand.",
    icon: Lightbulb,
    focus: ["PAIN", "RELEVANCE", "SOLUTION", "BENEFIT"],
  },
  {
    number: "04",
    title: "Product Demo / Feature",
    eyebrow: "Show what it actually does",
    description:
      "Demonstrate features, workflows and value instead of only describing them.",
    icon: Settings,
    focus: ["SHOW", "EXPLAIN", "PROVE", "ACT"],
  },
  {
    number: "05",
    title: "Cinematic Brand Commercial",
    eyebrow: "Build a world around the brand",
    description:
      "Story-led creative designed to strengthen mood, identity and memory.",
    icon: Clapperboard,
    focus: ["MOOD", "STORY", "IDENTITY", "MEMORY"],
  },
  {
    number: "06",
    title: "Transformation / Before–After",
    eyebrow: "Make the change visible",
    description:
      "Show the difference between the starting point and the desired result.",
    icon: BarChart3,
    focus: ["BEFORE", "CHANGE", "AFTER", "PROOF"],
  },
];

const leftFormats = [formats[0], formats[2], formats[4]];
const rightFormats = [formats[1], formats[3], formats[5]];

/* =========================================================
   DESKTOP FORMAT
========================================================= */

function CreativeFormat({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: FormatItem;
  side: "left" | "right";
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: side === "left" ? -32 : 32,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : index * 0.12,
        ease,
      }}
      className={`
        group
        relative

        min-h-[150px]

        ${
          side === "left"
            ? "text-right"
            : "text-left"
        }
      `}
    >
      {/* connector */}
      <div
        className={`
          absolute
          top-[37px]

          hidden
          h-px

          w-[115px]

          bg-gradient-to-r

          lg:block

          ${
            side === "left"
              ? "left-full ml-5 from-[#6285AD] to-[#DCE8F2]"
              : "right-full mr-5 from-[#DCE8F2] to-[#6285AD]"
          }
        `}
      >
        {/* signal */}
        {!reduceMotion && (
          <motion.span
            animate={
              side === "left"
                ? { left: ["0%", "100%"] }
                : { right: ["0%", "100%"] }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: index * 0.45,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-1/2

              h-[6px]
              w-[6px]

              -translate-y-1/2

              rounded-full

              bg-[#B79A72]

              shadow-[0_0_14px_rgba(98,133,173,0.6)]
            "
          />
        )}
      </div>

      {/* top meta */}
      <div
        className={`
          flex
          items-center
          gap-4

          ${
            side === "left"
              ? "justify-end"
              : "justify-start"
          }
        `}
      >
        {side === "right" && (
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-[#EEF5FA]

              text-[#0B2A52]

              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-[#E7F1F8]
            "
          >
            <Icon size={16} strokeWidth={1.6} />
          </span>
        )}

        <span
          style={newYorkFont}
          className="
            text-[0.58rem]
            tracking-[0.18em]

            text-[#8AA0B4]
          "
        >
          {item.number}
        </span>

        {side === "left" && (
          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-[#EEF5FA]

              text-[#0B2A52]

              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-[#E7F1F8]
            "
          >
            <Icon size={16} strokeWidth={1.6} />
          </span>
        )}
      </div>

      {/* content */}
      <div className="mt-4">
        <span
          className="
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.21em]

            text-[#6285AD]
          "
        >
          {item.eyebrow}
        </span>

        <h3
          style={newYorkFont}
          className={`
            mt-2

            text-[1.18rem]
            font-normal
            leading-[1.12]
            tracking-[-0.03em]

            text-[#0B2A52]

            xl:text-[1.27rem]

            ${
              side === "left"
                ? "ml-auto"
                : ""
            }

            max-w-[270px]
          `}
        >
          {item.title}
        </h3>

        <p
          style={newYorkFont}
          className={`
            mt-3

            max-w-[285px]

            text-[0.73rem]
            leading-[1.6]

            text-[#5F7488]

            ${
              side === "left"
                ? "ml-auto"
                : ""
            }
          `}
        >
          {item.description}
        </p>

        {/* focus */}
        <div
          className={`
            mt-4

            flex
            flex-wrap
            gap-x-2
            gap-y-1.5

            ${
              side === "left"
                ? "justify-end"
                : "justify-start"
            }
          `}
        >
          {item.focus.map((focus, i) => (
            <div
              key={focus}
              className="flex items-center gap-2"
            >
              <span
                className="
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]

                  text-[#718CA4]
                "
              >
                {focus}
              </span>

              {i !== item.focus.length - 1 && (
                <span
                  className="
                    h-[3px]
                    w-[3px]

                    rounded-full

                    bg-[#B79A72]/55
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE FORMAT
========================================================= */

function MobileFormat({
  item,
  index,
  reduceMotion,
}: {
  item: FormatItem;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.3,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.05,
        ease,
      }}
      className="
        relative

        grid
        grid-cols-[52px_1fr]
        gap-4
      "
    >
      {/* rail */}
      <div className="relative flex justify-center">
        {index < formats.length - 1 && (
          <span
            className="
              absolute
              bottom-[-28px]
              top-[48px]

              w-px

              bg-[#D9E5EE]
            "
          />
        )}

        <div
          className="
            relative
            z-10

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-[#CFDEE9]

            bg-white

            text-[#6285AD]

            shadow-[0_8px_24px_rgba(11,42,82,0.06)]
          "
        >
          <Icon size={16} strokeWidth={1.5} />
        </div>
      </div>

      {/* content */}
      <div
        className="
          border-b
          border-[#DFE9F0]

          pb-8
        "
      >
        <div className="flex items-center justify-between gap-4">
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[#6285AD]
            "
          >
            {item.eyebrow}
          </span>

          <span
            style={newYorkFont}
            className="
              text-[0.58rem]
              tracking-[0.18em]

              text-[#90A4B6]
            "
          >
            {item.number}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className="
            mt-2

            text-[1.2rem]
            font-normal
            leading-[1.15]
            tracking-[-0.03em]

            text-[#0B2A52]
          "
        >
          {item.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-3

            text-[0.78rem]
            leading-[1.6]

            text-[#5F7488]
          "
        >
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {item.focus.map((focus) => (
            <span
              key={focus}
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.14em]

                text-[#6E89A1]
              "
            >
              {focus}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiVideoAdFormats() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-ad-formats"
      aria-labelledby="ai-video-ad-formats-heading"
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
            top-[38%]

            h-[600px]
            w-[900px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#EEF5FA]/70

            blur-[150px]
          "
        />

        {/* giant side arcs */}
        <div
          className="
            absolute
            -left-[350px]
            top-[31%]

            h-[700px]
            w-[700px]

            rounded-full

            border
            border-[#E4EDF4]
          "
        />

        <div
          className="
            absolute
            -right-[350px]
            top-[31%]

            h-[700px]
            w-[700px]

            rounded-full

            border
            border-[#E4EDF4]
          "
        />
      </div>

      <div
        className="
          mx-auto
          w-full
          max-w-[1380px]

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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
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
                w-8
                bg-gradient-to-r
                from-transparent
                to-[#B79A72]
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.26em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              AI Video Ad Formats
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
            id="ai-video-ad-formats-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[900px]

              text-[2.2rem]
              font-light
              leading-[1.03]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            One Product.
            <br className="sm:hidden" />{" "}
            <span className="font-normal italic text-[#B79A72]">
              Six Creative Directions.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[670px]

              text-[0.86rem]
              leading-[1.7]

              text-[#5F7488]

              sm:text-[0.95rem]
            "
          >
            The product can stay the same while the story, angle and reason
            to act completely change.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP CREATIVE LENS
        ===================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-20

            hidden

            min-h-[650px]
            max-w-[1220px]

            lg:grid
            lg:grid-cols-[1fr_340px_1fr]
            lg:items-center
            lg:gap-x-[120px]
          "
        >
          {/* ================= LEFT ================= */}

          <div className="grid h-full content-between gap-12 py-3">
            {leftFormats.map((item, index) => (
              <CreativeFormat
                key={item.number}
                item={item}
                index={index}
                side="left"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* ================= CENTER LENS ================= */}

          <div
            className="
              relative

              flex
              h-[340px]
              w-[340px]
              items-center
              justify-center

              self-center
            "
          >
            {/* outer rotating ring */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0

                rounded-full

                border
                border-dashed
                border-[#BFCEDB]
              "
            >
              <span
                className="
                  absolute
                  left-1/2
                  top-[-5px]

                  h-[10px]
                  w-[10px]

                  -translate-x-1/2

                  rounded-full

                  bg-[#B79A72]
                "
              />

              <span
                className="
                  absolute
                  bottom-[8%]
                  right-[20%]

                  h-[6px]
                  w-[6px]

                  rounded-full

                  bg-[#A7C0D3]
                "
              />
            </motion.div>

            {/* second ring */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-[24px]

                rounded-full

                border
                border-[#D9E5EE]
              "
            >
              <span
                className="
                  absolute
                  right-[4px]
                  top-1/2

                  h-[7px]
                  w-[7px]

                  -translate-y-1/2

                  rounded-full

                  bg-[#6285AD]
                "
              />
            </motion.div>

            {/* glow */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.045, 1],
                      opacity: [0.5, 0.85, 0.5],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-[55px]

                rounded-full

                bg-[#EDF5FA]

                blur-[4px]
              "
            />

            {/* center */}
            <div
              className="
                relative
                z-10

                flex
                h-[215px]
                w-[215px]
                flex-col
                items-center
                justify-center

                rounded-full

                border
                border-[#D7E3EC]

                bg-white

                text-center

                shadow-[0_30px_80px_rgba(11,42,82,0.09)]
              "
            >
              <Sparkles
                size={17}
                strokeWidth={1.5}
                className="text-[#6285AD]"
              />

              <span
                className="
                  mt-4

                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]

                  text-[#6E89A1]
                "
              >
                One Product
              </span>

              <p
                style={newYorkFont}
                className="
                  mt-2

                  text-[3.1rem]
                  font-light
                  leading-none
                  tracking-[-0.07em]

                  text-[#0B2A52]
                "
              >
                06
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-1

                  text-[1.05rem]
                  font-normal
                  italic

                  text-[#B79A72]
                "
              >
                creative angles
              </p>
            </div>

            {/* floating tags */}
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-4
                top-[27%]

                rounded-full

                border
                border-[#D8E3EA]

                bg-white

                px-3
                py-2

                text-[6px]
                font-semibold
                uppercase
                tracking-[0.16em]

                text-[#6285AD]

                shadow-[0_8px_25px_rgba(11,42,82,0.06)]
              "
            >
              STORY
            </motion.span>

            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 6, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-8
                bottom-[24%]

                rounded-full

                border
                border-[#D8E3EA]

                bg-white

                px-3
                py-2

                text-[6px]
                font-semibold
                uppercase
                tracking-[0.16em]

                text-[#6285AD]

                shadow-[0_8px_25px_rgba(11,42,82,0.06)]
              "
            >
              ANGLE
            </motion.span>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="grid h-full content-between gap-12 py-3">
            {rightFormats.map((item, index) => (
              <CreativeFormat
                key={item.number}
                item={item}
                index={index}
                side="right"
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[720px]

            space-y-7

            lg:hidden
          "
        >
          {/* mini lens */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.92,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease,
            }}
            className="
              mx-auto
              mb-10

              flex
              h-[180px]
              w-[180px]
              flex-col
              items-center
              justify-center

              rounded-full

              border
              border-[#D7E3EC]

              bg-white

              text-center
            "
          >
            <Sparkles
              size={16}
              strokeWidth={1.5}
              className="text-[#6285AD]"
            />

            <span
              className="
                mt-3

                text-[7px]
                font-semibold
                uppercase
                tracking-[0.22em]

                text-[#718CA4]
              "
            >
              One Product
            </span>

            <span
              style={newYorkFont}
              className="
                mt-2

                text-[2.7rem]
                font-light
                leading-none

                text-[#0B2A52]
              "
            >
              06
            </span>

            <span
              style={newYorkFont}
              className="
                mt-1

                text-[0.95rem]
                italic

                text-[#6285AD]
              "
            >
              creative angles
            </span>
          </motion.div>

          {formats.map((item, index) => (
            <MobileFormat
              key={item.number}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            FINAL CREATIVE MESSAGE
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            relative

            mx-auto
            mt-14

            max-w-[930px]

            border-t
            border-[#D8E3EA]

            pt-10

            text-center

            sm:mt-16
            lg:mt-8
          "
        >
          {/* tiny vertical marker */}
          <span
            className="
              absolute
              left-1/2
              top-0

              h-5
              w-px

              -translate-x-1/2

              bg-[#6285AD]
            "
          />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]

              text-[#6285AD]
            "
          >
            Creative Direction Matters
          </span>

          <h3
            style={newYorkFont}
            className="
              mx-auto
              mt-4

              max-w-[820px]

              text-[1.55rem]
              font-light
              leading-[1.18]
              tracking-[-0.035em]

              text-[#0B2A52]

              sm:text-[1.9rem]
              md:text-[2.2rem]
            "
          >
            Don&apos;t Make Six Versions of the Same Ad.
            <br className="hidden sm:block" />{" "}
            <span className="font-normal italic text-[#B79A72]">
              Give People Six Different Reasons to Care.
            </span>
          </h3>

          <div
            className="
              mx-auto
              mt-7

              flex
              max-w-[580px]
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px flex-1 bg-[#D9E5EE]" />

            <span
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.2em]

                text-[#7D94A8]
              "
            >
              IDEA → ANGLE → CREATIVE → TEST
            </span>

            <span className="h-px flex-1 bg-[#D9E5EE]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}