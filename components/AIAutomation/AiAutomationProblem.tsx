"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  FileText,
  FolderSearch,
  Mail,
  MessageSquareText,
  Route,
  Sheet,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type ProcessItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const manualItems: ProcessItem[] = [
  {
    title: "New Enquiry",
    subtitle: "Read and qualify manually",
    icon: Mail,
  },
  {
    title: "Website Form",
    subtitle: "Review every submission",
    icon: FileText,
  },
  {
    title: "Update Spreadsheet",
    subtitle: "Manually add information",
    icon: Sheet,
  },
  {
    title: "Internal Request",
    subtitle: "Pending response",
    icon: MessageSquareText,
  },
  {
    title: "Create Report",
    subtitle: "Collect and organize data first",
    icon: BarChart3,
  },
  {
    title: "Find Information",
    subtitle: "Search across multiple tools",
    icon: FolderSearch,
  },
];

const automatedItems: ProcessItem[] = [
  {
    title: "Qualify & Route Leads",
    subtitle: "Move enquiries to the right place",
    icon: Users,
  },
  {
    title: "Answer Common Questions",
    subtitle: "Handle routine enquiries faster",
    icon: MessageSquareText,
  },
  {
    title: "Update Your CRM",
    subtitle: "Keep records synchronized",
    icon: Database,
  },
  {
    title: "Send Follow-Ups",
    subtitle: "Keep communication moving",
    icon: Mail,
  },
  {
    title: "Generate Reports",
    subtitle: "Turn data into useful summaries",
    icon: BarChart3,
  },
  {
    title: "Assign Tasks Automatically",
    subtitle: "Route work when conditions are met",
    icon: CheckCircle2,
  },
];

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  item,
  side,
  index,
  reduceMotion,
}: {
  item: ProcessItem;
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
              x: side === "left" ? -24 : 24,
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
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.055,
        ease,
      }}
      className="
        group
        relative
        flex
        min-h-[84px]
        items-center
        gap-4
        rounded-[23px]
        border
        border-[#D5E3ED]
        bg-white/95
        px-4
        py-3
        shadow-[0_12px_32px_rgba(11,42,82,0.055)]
        backdrop-blur-[10px]
      "
    >
      <div
        className="
          flex
          h-[54px]
          w-[54px]
          shrink-0
          items-center
          justify-center
          rounded-[17px]
          border
          border-[#D9E6EF]
          bg-[#F2F7FB]
          text-[#0B2A52]
          transition-transform
          duration-300
          group-hover:-translate-y-1
        "
      >
        <Icon size={21} strokeWidth={1.45} />
      </div>

      <div className="min-w-0 pr-4">
        <h3
          style={newYorkFont}
          className="
            text-[14px]
            font-light
            leading-[1.15]
            tracking-[-0.02em]
            text-[#0B2A52]
          "
        >
          {item.title}
        </h3>

        <p
          style={newYorkFont}
          className="
            mt-1.5
            text-[10px]
            leading-[1.4]
            text-[#526E88]
          "
        >
          {item.subtitle}
        </p>
      </div>

      <span
        className={`
          absolute
          right-4
          top-4
          h-[7px]
          w-[7px]
          rounded-full
          ${
            side === "left"
              ? "bg-[#B18458]"
              : "bg-[#4197D1]"
          }
        `}
      />
    </motion.article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AiAutomationProblem() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-automation-problem"
      aria-labelledby="ai-automation-problem-heading"
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
      <div
        className="
          mx-auto
          w-full
          max-w-[1540px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[1050px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-[#C6A77A]" />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-[#B18458]
                sm:text-[10px]
              "
            >
              The Problem
            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />
          </div>

          <h2
            id="ai-automation-problem-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[1000px]

              text-[2.1rem]
              font-light
              leading-[0.98]
              tracking-[-0.05em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Your Team May Be Doing Work{" "}
            <span className="text-[#B18458]">
              Your Systems Could Handle.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[660px]
              text-[15px]
              leading-[1.65]
              text-[#49657F]
              sm:text-[16px]
            "
          >
            Many businesses do not have a productivity problem. They have a
            process problem.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP VISUAL
        ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            hidden
            h-[720px]
            max-w-[1400px]
            xl:block
          "
        >
          {/* =================================================
              LEFT NOTE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    rotate: -5,
                  }
            }
            whileInView={{
              opacity: 1,
              rotate: -5,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease,
            }}
            className="
              absolute
              left-[8px]
              top-[4px]
              z-30
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[17px]
                italic
                leading-[1.25]
                text-[#0B2A52]
              "
            >
              Too many tasks.
              <br />
              Not enough time.
            </p>

            <span className="mt-4 block h-px w-10 bg-[#B18458]" />
          </motion.div>

          {/* =================================================
              RIGHT NOTE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    rotate: -4,
                  }
            }
            whileInView={{
              opacity: 1,
              rotate: -4,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="
              absolute
              right-[10px]
              top-[4px]
              z-30
              text-right
            "
          >
            <p
              style={newYorkFont}
              className="
                text-[17px]
                italic
                leading-[1.25]
                text-[#0B2A52]
              "
            >
              Same team.
              <br />
              Smarter systems.
              <br />
              More time for what matters.
            </p>

            <span
              className="
                ml-auto
                mt-4
                block
                h-px
                w-10
                bg-[#B18458]
              "
            />
          </motion.div>

          {/* =================================================
              PROPER CONNECTORS + ARROWS
          ================================================= */}

          <svg
            viewBox="0 0 1400 720"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-[15]
              h-full
              w-full
              overflow-visible
            "
          >
            <defs>
              {/* LEFT MANUAL ARROW */}

              <marker
                id="manualArrow"
                viewBox="0 0 10 10"
                refX="8.4"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path
                  d="M1 1.2 L8.7 5 L1 8.8 Z"
                  fill="#839CB0"
                />
              </marker>

              {/* RIGHT AUTOMATION ARROW */}

              <marker
                id="automationArrow"
                viewBox="0 0 10 10"
                refX="8.4"
                refY="5"
                markerWidth="9"
                markerHeight="9"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path
                  d="M1 1.1 L8.8 5 L1 8.9 Z"
                  fill="#176FB4"
                />
              </marker>

              {/* SOFT BLUE GLOW */}

              <filter
                id="blueArrowGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="0.65"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ===============================================
                LEFT CARDS → PERSON / MANUAL WORK
            =============================================== */}

            {[
              "M305 152 C382 152 412 192 515 240",
              "M305 248 C390 248 420 260 520 282",
              "M305 344 C398 344 430 328 525 320",
              "M305 440 C398 440 430 388 525 357",
              "M305 536 C392 536 420 450 520 397",
              "M305 632 C380 632 410 510 515 438",
            ].map((d, index) => (
              <motion.path
                key={`manual-path-${index}`}
                d={d}
                fill="none"
                stroke="#839CB0"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#manualArrow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  pathLength: {
                    duration: reduceMotion ? 0 : 0.9,
                    delay: reduceMotion
                      ? 0
                      : index * 0.06,
                    ease,
                  },

                  opacity: {
                    duration: reduceMotion ? 0 : 0.25,
                    delay: reduceMotion
                      ? 0
                      : index * 0.06,
                  },
                }}
              />
            ))}

            {/* LEFT START DOTS */}

            {[
              [305, 152],
              [305, 248],
              [305, 344],
              [305, 440],
              [305, 536],
              [305, 632],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={`manual-dot-${index}`}
                cx={cx}
                cy={cy}
                r="3.4"
                fill="#B18458"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.4,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion
                    ? 0
                    : 0.1 + index * 0.06,
                }}
              />
            ))}

            {/* ===============================================
                PERSON / WORK → AI AUTOMATION
            =============================================== */}

            <motion.path
              d="M700 345 C738 345 765 345 810 345"
              fill="none"
              stroke="#3B9CD5"
              strokeWidth="1.9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              markerEnd="url(#automationArrow)"
              filter="url(#blueArrowGlow)"
              initial={{
                pathLength: reduceMotion ? 1 : 0,
                opacity: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
            />

            {/* CENTER FLOW DOT */}

            <motion.circle
              cx="700"
              cy="345"
              r="4"
              fill="#55A9D9"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              initial={{
                opacity: reduceMotion ? 1 : 0,
                scale: reduceMotion ? 1 : 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.28,
              }}
            />

            {/* ===============================================
                AI AUTOMATION → RIGHT CARDS
            =============================================== */}

            {[
              "M918 238 C982 225 1002 152 1088 152",
              "M928 276 C992 268 1008 248 1088 248",
              "M934 314 C1000 314 1015 344 1088 344",
              "M934 352 C1000 360 1015 440 1088 440",
              "M928 390 C995 414 1010 536 1088 536",
              "M918 428 C985 468 1000 632 1088 632",
            ].map((d, index) => (
              <motion.path
                key={`automation-path-${index}`}
                d={d}
                fill="none"
                stroke="#176FB4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#automationArrow)"
                filter="url(#blueArrowGlow)"
                initial={{
                  pathLength: reduceMotion ? 1 : 0,
                  opacity: reduceMotion ? 1 : 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  pathLength: {
                    duration: reduceMotion ? 0 : 0.95,
                    delay: reduceMotion
                      ? 0
                      : 0.34 + index * 0.065,
                    ease,
                  },

                  opacity: {
                    duration: reduceMotion ? 0 : 0.3,
                    delay: reduceMotion
                      ? 0
                      : 0.34 + index * 0.065,
                  },
                }}
              />
            ))}

            {/* AI SOURCE DOTS */}

            {[
              [918, 238],
              [928, 276],
              [934, 314],
              [934, 352],
              [928, 390],
              [918, 428],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={`ai-source-dot-${index}`}
                cx={cx}
                cy={cy}
                r="3.7"
                fill="#248FD0"
                stroke="#FFFFFF"
                strokeWidth="1.4"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.4,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion
                    ? 0
                    : 0.35 + index * 0.06,
                }}
              />
            ))}

            {/* RIGHT END DOTS */}

            {[
              [1094, 152],
              [1094, 248],
              [1094, 344],
              [1094, 440],
              [1094, 536],
              [1094, 632],
            ].map(([cx, cy], index) => (
              <motion.circle
                key={`right-end-${index}`}
                cx={cx}
                cy={cy}
                r="3.6"
                fill="#3096D3"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                initial={{
                  opacity: reduceMotion ? 1 : 0,
                  scale: reduceMotion ? 1 : 0.4,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: reduceMotion
                    ? 0
                    : 0.42 + index * 0.065,
                }}
              />
            ))}
          </svg>

          {/* =================================================
              LEFT CARDS
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-[110px]
              z-20
              w-[305px]
              space-y-[12px]
            "
          >
            {manualItems.map((item, index) => (
              <ProcessCard
                key={item.title}
                item={item}
                side="left"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          {/* =================================================
              CENTRAL IMAGE
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                    scale: 0.98,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease,
            }}
            className="
              absolute
              bottom-[34px]
              left-1/2
              z-10
              w-[820px]
              -translate-x-1/2
            "
          >
            <Image
              src="/aiprb.png"
              alt="Professional managing repetitive work with AI automation"
              title="Professional managing repetitive work with AI automation"
              width={1536}
              height={1024}
              className="
                h-auto
                w-full
                object-contain
                object-bottom
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT CARDS
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-[110px]
              z-20
              w-[305px]
              space-y-[12px]
            "
          >
            {automatedItems.map((item, index) => (
              <ProcessCard
                key={item.title}
                item={item}
                side="right"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div className="mt-12 xl:hidden">
          {/* IMAGE */}

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
              duration: reduceMotion ? 0 : 0.75,
              ease,
            }}
            className="
              mx-auto
              max-w-[820px]
            "
          >
            <Image
              src="/services/ai/aiprb.webp"
              alt="Professional managing repetitive work with AI automation"
              title="Professional managing repetitive work with AI automation"
              width={1536}
              height={1024}
              className="
                h-auto
                w-full
                object-contain
              "
            />
          </motion.div>

          {/* MOBILE FLOW ARROW */}

          <div
            className="
              mx-auto
              my-8
              flex
              max-w-[500px]
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#9DB9CD)]
              "
            />

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -8,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease,
              }}
              className="
                flex
                h-[46px]
                w-[46px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#BDD9E9]
                bg-[#F2F8FC]
                text-[#176FB4]
                shadow-[0_8px_22px_rgba(23,111,180,0.09)]
              "
            >
              <ArrowRight
                size={19}
                strokeWidth={1.6}
              />
            </motion.span>

            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#9DB9CD,transparent)]
              "
            />
          </div>

          {/* MANUAL */}

          <div
            className="
              mx-auto
              max-w-[850px]
            "
          >
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
              "
            >
              <span className="h-px w-9 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.27em]
                  text-[#B18458]
                "
              >
                TOO MUCH MANUAL WORK
              </span>
            </div>

            <div
              className="
                grid
                gap-3
                md:grid-cols-2
              "
            >
              {manualItems.map((item, index) => (
                <ProcessCard
                  key={item.title}
                  item={item}
                  side="left"
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>

          {/* TRANSITION */}

          <div
            className="
              mx-auto
              my-10
              flex
              max-w-[540px]
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,transparent,#83B4D3)]
              "
            />

            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#C8DDEA]
                bg-[#F4F9FC]
                px-5
                py-3
                shadow-[0_8px_22px_rgba(11,42,82,0.04)]
              "
            >
              <span
                style={newYorkFont}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-[#0B2A52]
                "
              >
                AI Automation
              </span>

              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="text-[#176FB4]"
              />
            </div>

            <span
              className="
                h-px
                flex-1
                bg-[linear-gradient(90deg,#83B4D3,transparent)]
              "
            />
          </div>

          {/* AUTOMATED */}

          <div
            className="
              mx-auto
              max-w-[850px]
            "
          >
            <div
              className="
                mb-5
                flex
                items-center
                gap-4
              "
            >
              <span className="h-px w-9 bg-[#C6A77A]" />

              <span
                style={newYorkFont}
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.27em]
                  text-[#0B2A52]
                "
              >
                WORK YOUR SYSTEMS CAN HELP MOVE
              </span>
            </div>

            <div
              className="
                grid
                gap-3
                md:grid-cols-2
              "
            >
              {automatedItems.map((item, index) => (
                <ProcessCard
                  key={item.title}
                  item={item}
                  side="right"
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BANNER
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
            amount: 0.4,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            mt-8
            max-w-[1240px]
            rounded-full
            border
            border-[#D4E3ED]
            bg-[#F0F6FA]
            px-5
            py-4
            sm:px-7
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[760px]
              items-center
              justify-center
              gap-5
            "
          >
           
            <p
              style={newYorkFont}
              className="
                text-center
                text-[1.25rem]
                font-light
                leading-[1.15]
                tracking-[-0.03em]
                text-[#0B2A52]

                sm:text-[1.55rem]
                lg:text-[1.75rem]
              "
            >
              From manual work to meaningful progress.
            </p>

            {/* PROPER ROUND CTA ARROW */}

           
          </div>
        </motion.div>

        {/* =====================================================
            ORIGINAL CONCLUSION
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
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mx-auto
            mt-8
            max-w-[950px]
            text-center
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-[#B18458]
            "
          >
            THE REAL PROBLEM
          </span>

          <h3
            style={newYorkFont}
            className="
              mt-3
              text-[1.55rem]
              font-light
              leading-[1.1]
              tracking-[-0.035em]
              text-[#0B2A52]

              sm:text-[1.8rem]
            "
          >
            The work is moving.
          </h3>

          <p
            style={newYorkFont}
            className="
              mt-2
              text-[1.1rem]
              font-light
              leading-[1.35]
              tracking-[-0.02em]
              text-[#B18458]

              sm:text-[1.25rem]
            "
          >
            But too much of the movement still depends on people pushing it
            manually.
          </p>
        </motion.div>
      </div>
    </section>
  );
}