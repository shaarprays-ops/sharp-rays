"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  FileSearch,
  Files,
  HeartHandshake,
  Layers3,
  Lightbulb,
  MessageSquareText,
  Scale,
  Settings,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserRound,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type Item = {
  title: string;
  icon: LucideIcon;
};

const aiItems: Item[] = [
  {
    title: "Information movement.",
    icon: Files,
  },
  {
    title: "Classification.",
    icon: Layers3,
  },
  {
    title: "Data extraction.",
    icon: FileSearch,
  },
  {
    title: "Notifications.",
    icon: Bell,
  },
  {
    title: "Routine responses.",
    icon: MessageSquareText,
  },
  {
    title: "Scheduling.",
    icon: CalendarDays,
  },
  {
    title: "System updates.",
    icon: Settings,
  },
];

const humanItems: Item[] = [
  {
    title: "Strategy.",
    icon: Lightbulb,
  },
  {
    title: "Judgement.",
    icon: Scale,
  },
  {
    title: "Sensitive conversations.",
    icon: MessageSquareText,
  },
  {
    title: "Complex decisions.",
    icon: Settings,
  },
  {
    title: "Creative thinking.",
    icon: Sparkles,
  },
  {
    title: "Approvals.",
    icon: ShieldCheck,
  },
  {
    title: "Exceptions.",
    icon: TriangleAlert,
  },
  {
    title: "Relationship building.",
    icon: Users,
  },
];

/* =========================================================
   LIST ROW
========================================================= */

function ResponsibilityRow({
  item,
  index,
  side,
  reduceMotion,
}: {
  item: Item;
  index: number;
  side: "ai" | "human";
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: side === "ai" ? -18 : 18,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.45,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.2),
        ease,
      }}
      className="
        group
        flex
        min-h-[58px]
        items-center
        gap-4
        rounded-full
        border
        border-white/80
        bg-white/80
        px-4
        py-2.5
        shadow-[0_8px_22px_rgba(11,42,82,0.035)]
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-white
      "
    >
      <div
        className={`
          flex
          h-[38px]
          w-[38px]
          shrink-0
          items-center
          justify-center
          rounded-full

          ${
            side === "ai"
              ? "text-[#0B2A52]"
              : "text-[#765022]"
          }
        `}
      >
        <Icon
          size={21}
          strokeWidth={1.55}
        />
      </div>

      <span
        style={newYorkFont}
        className="
          text-[13px]
          font-light
          leading-[1.2]
          tracking-[-0.015em]
          text-[#0B2A52]
          sm:text-[14px]
        "
      >
        {item.title}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiAutomationHumanBalance() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-human-balance"
      aria-labelledby="ai-human-balance-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          SOFT BACKGROUND SHAPES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-[290px]
            top-[40px]
            h-[760px]
            w-[760px]
            rounded-full
            bg-[#EDF5FC]
            opacity-80
            blur-[1px]
          "
        />

        <div
          className="
            absolute
            -right-[300px]
            top-[40px]
            h-[760px]
            w-[760px]
            rounded-full
            bg-[#FBF2E7]
            opacity-85
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1480px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            DESKTOP LAYOUT
        ===================================================== */}

        <div
          className="
            grid
            gap-10

            xl:grid-cols-[0.33fr_0.34fr_0.33fr]
            xl:items-end
            xl:gap-0
          "
        >
          {/* =================================================
              AI PANEL
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[470px]
              overflow-visible
              rounded-t-[220px]
              border
              border-[#CFE0F2]
              bg-[#EAF4FD]/80
              px-7
              pb-10
              pt-16
              shadow-[0_18px_50px_rgba(43,107,170,0.06)]

              sm:px-9
              xl:min-h-[670px]
            "
          >
            {/* TOP ICON */}

            <div
              className="
                absolute
                left-1/2
                top-0
                flex
                h-[92px]
                w-[92px]
                -translate-x-1/2
                -translate-y-[32%]
                items-center
                justify-center
                rounded-full
                border
                border-[#BFD8EF]
                bg-[#F5FAFE]
                shadow-[0_12px_30px_rgba(43,107,170,0.08)]
              "
            >
              <BrainCircuit
                size={37}
                strokeWidth={1.55}
                className="text-[#0B2A52]"
              />
            </div>

            {/* PANEL TITLE */}

            <div className="text-center">
              <h2
                id="ai-human-balance-heading"
                style={newYorkFont}
                className="
                  text-[1.9rem]
                  font-light
                  leading-none
                  tracking-[-0.04em]
                  text-[#0B2A52]

                  sm:text-[2.15rem]
                "
              >
                AI Automates
              </h2>

              <p
                style={newYorkFont}
                className="
                  mt-3
                  text-[8px]
                  uppercase
                  tracking-[0.32em]
                  text-[#0B2A52]/60
                "
              >
                Handles the repetitive
              </p>
            </div>

            {/* AI LIST */}

            <div className="mt-7 space-y-2.5">
              {aiItems.map((item, index) => (
                <ResponsibilityRow
                  key={item.title}
                  item={item}
                  index={index}
                  side="ai"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </motion.div>

          {/* =================================================
              CENTER
          ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[520px]
              flex-col
              items-center
              justify-end

              xl:min-h-[670px]
            "
          >

            {/* CURVED BALANCE LINE */}

            <div
              className="
                relative
                z-20
                mb-[-55px]
                mt-10
                h-[130px]
                w-[92%]

                xl:mt-0
              "
            >
              <svg
                viewBox="0 0 500 130"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="balanceGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4C8BEB"
                    />

                    <stop
                      offset="48%"
                      stopColor="#9DBAE0"
                    />

                    <stop
                      offset="100%"
                      stopColor="#D8A86A"
                    />
                  </linearGradient>
                </defs>

                <motion.path
                  d="M30 110 C120 15 380 15 470 110"
                  fill="none"
                  stroke="url(#balanceGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{
                    pathLength: reduceMotion ? 1 : 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 1.1,
                    ease,
                  }}
                />

                <circle
                  cx="30"
                  cy="110"
                  r="8"
                  fill="#4B8AEA"
                />

                <circle
                  cx="470"
                  cy="110"
                  r="8"
                  fill="#D4A166"
                />
              </svg>

              {/* CENTRE ICON */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[16px]
                  flex
                  h-[82px]
                  w-[82px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-white
                  text-[#5B78A3]
                  shadow-[0_14px_30px_rgba(11,42,82,0.09)]
                "
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="21"
                    width="6"
                    height="9"
                    rx="1.4"
                    fill="currentColor"
                  />

                  <rect
                    x="14"
                    y="14"
                    width="6"
                    height="16"
                    rx="1.4"
                    fill="currentColor"
                  />

                  <rect
                    x="24"
                    y="6"
                    width="6"
                    height="24"
                    rx="1.4"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* CENTRAL IMAGE */}

            <div
              className="
                relative
                z-10
                w-full
              "
            >
              <Image
                src="/services/ai/ailaptop1.webp"
                alt="Laptop workspace representing balance between AI automation and human judgement"
                title="Laptop workspace representing balance between AI automation and human judgement"
                width={1536}
                height={1024}
                className="
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>
          </motion.div>

          {/* =================================================
              HUMAN PANEL
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[470px]
              overflow-visible
              rounded-t-[220px]
              border
              border-[#E8D6C0]
              bg-[#FBF4EA]/82
              px-7
              pb-10
              pt-16
              shadow-[0_18px_50px_rgba(135,95,40,0.05)]

              sm:px-9
              xl:min-h-[670px]
            "
          >
            {/* TOP ICON */}

            <div
              className="
                absolute
                left-1/2
                top-0
                flex
                h-[92px]
                w-[92px]
                -translate-x-1/2
                -translate-y-[32%]
                items-center
                justify-center
                rounded-full
                border
                border-[#E6CFB0]
                bg-[#FFF9F1]
                shadow-[0_12px_30px_rgba(113,76,31,0.07)]
              "
            >
              <UserRound
                size={35}
                strokeWidth={1.6}
                className="text-[#765022]"
              />
            </div>

            {/* PANEL TITLE */}

            <div className="text-center">
              <h2
                style={newYorkFont}
                className="
                  text-[1.9rem]
                  font-light
                  leading-none
                  tracking-[-0.04em]
                  text-[#5E3C19]

                  sm:text-[2.15rem]
                "
              >
                Human Focuses
              </h2>

              <p
                style={newYorkFont}
                className="
                  mt-3
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#5E3C19]/55
                "
              >
                Brings judgement and context
              </p>
            </div>

            {/* HUMAN LIST */}

            <div className="mt-7 space-y-2.5">
              {humanItems.map((item, index) => (
                <ResponsibilityRow
                  key={item.title}
                  item={item}
                  index={index}
                  side="human"
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PRINCIPLE
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative
            z-20
            mx-auto
            mt-12
            max-w-[1230px]
            rounded-[42px]
            border
            border-[#BDD5F2]
            bg-white/90
            px-6
            py-8
            text-center
            shadow-[0_16px_42px_rgba(11,42,82,0.045)]
            backdrop-blur-sm

            sm:px-10
            lg:mt-7
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[8px]
              uppercase
              tracking-[0.36em]
              text-[#0B2A52]/65
            "
          >
            The Principle
          </span>

          <h3
            style={newYorkFont}
            className="
              mx-auto
              mt-3
              max-w-[1050px]
              text-[1.6rem]
              font-light
              leading-[1.08]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[1.9rem]
              lg:text-[2.15rem]
            "
          >
            Good Automation Does Not Remove People From the Business.
          </h3>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-2
              max-w-[950px]
              text-[1.25rem]
              font-light
              leading-[1.15]
              tracking-[-0.03em]
              text-[#74869A]

              sm:text-[1.5rem]
            "
          >
            It Removes Unnecessary Work From Their Day.
          </p>

          <span
            className="
              mx-auto
              mt-5
              block
              h-[2px]
              w-16
              bg-[#B18458]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}