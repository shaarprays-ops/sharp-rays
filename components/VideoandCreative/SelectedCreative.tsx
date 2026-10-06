"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CheckCircle2,
  FileText,
  MonitorSmartphone,
  Palette,
  Scissors,
  Sparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type WorkflowStep = {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    stage: "Brief",
    title: "Define the Job",
    description:
      "We clarify the audience, message, channel and intended outcome.",
    icon: FileText,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    number: "02",
    stage: "Direction",
    title: "Shape the Creative",
    description:
      "We establish the concept, references, tone and visual direction.",
    icon: Palette,
    accent: "#C7794A",
    soft: "#FFF1E7",
  },
  {
    number: "03",
    stage: "Generate / Gather",
    title: "Build the Raw Material",
    description:
      "We create agreed AI assets or organize footage, graphics and supporting media.",
    icon: Sparkles,
    accent: "#7B61C9",
    soft: "#F2EEFF",
  },
  {
    number: "04",
    stage: "Edit",
    title: "Build the Story",
    description:
      "We shape the material with pacing, audio, graphics and narrative decisions.",
    icon: Scissors,
    accent: "#3F9A7A",
    soft: "#EAF8F2",
  },
  {
    number: "05",
    stage: "Refine",
    title: "Make It Feel Finished",
    description:
      "We polish consistency, captions, colour, motion and brand details.",
    icon: CheckCircle2,
    accent: "#C49A3E",
    soft: "#FFF8E5",
  },
  {
    number: "06",
    stage: "Adapt",
    title: "Prepare Each Format",
    description:
      "Approved creative is adapted for the agreed sizes, lengths and placements.",
    icon: MonitorSmartphone,
    accent: "#4E9AA8",
    soft: "#EAF8FA",
  },
  {
    number: "07",
    stage: "Deliver",
    title: "Ready to Publish",
    description:
      "Final approved assets are exported in the agreed formats and specifications.",
    icon: BadgeCheck,
    accent: "#C86F86",
    soft: "#FFF0F4",
  },
];

function WorkflowItem({
  step,
  index,
  reduceMotion,
}: {
  step: WorkflowStep;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 22,
              x: isLeft ? -18 : 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.28,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : index * 0.04,
        ease,
      }}
      className="
        relative

        grid
        grid-cols-[48px_minmax(0,1fr)]
        gap-4

        pb-8

        sm:grid-cols-[56px_minmax(0,1fr)]
        sm:gap-5
        sm:pb-9

        lg:grid-cols-[1fr_72px_1fr]
        lg:items-center
        lg:gap-7
        lg:pb-10
      "
    >
      {/* =====================================================
          MOBILE / TABLET NODE
      ===================================================== */}

      <div className="relative flex justify-center lg:hidden">
        {index < workflowSteps.length - 1 && (
          <span
            aria-hidden="true"
            className="
              absolute
              bottom-[-32px]
              top-[48px]

              w-px

              bg-gradient-to-b
              from-[#C9D9E5]
              via-[#DCE7EF]
              to-[#C9D9E5]
            "
          />
        )}

        <span
          className="
            relative
            z-10

            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center

            rounded-[13px]

            border
            border-black/[0.06]

            shadow-[0_8px_24px_rgba(11,42,82,0.06)]

            sm:h-12
            sm:w-12
          "
          style={{
            backgroundColor: step.soft,
            color: step.accent,
          }}
        >
          <Icon size={17} strokeWidth={1.65} />
        </span>
      </div>

      {/* =====================================================
          LEFT CONTENT / MOBILE CONTENT
      ===================================================== */}

      <div
        className={`
          min-w-0

          ${isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-3 lg:text-left"}
        `}
      >
        <div
          className={`
            flex
            items-center
            gap-3

            ${isLeft ? "lg:justify-end" : "lg:justify-start"}
          `}
        >
          <span
            style={{
              ...newYorkFont,
              color: step.accent,
            }}
            className="
              text-[0.48rem]
              font-medium
              uppercase
              tracking-[0.18em]
            "
          >
            {step.stage}
          </span>

          <span
            style={newYorkFont}
            className="
              text-[0.55rem]
              tracking-[0.12em]

              text-[#9AAAB8]
            "
          >
            {step.number}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className={`
            mt-2

            text-[1.25rem]
            font-normal
            leading-[1.12]
            tracking-[-0.03em]

            text-[#0B2A52]

            sm:text-[1.4rem]
            lg:text-[1.48rem]

            ${isLeft ? "lg:ml-auto" : ""}
          `}
        >
          {step.title}
        </h3>

        <p
          style={newYorkFont}
          className={`
            mt-2.5
            max-w-[500px]

            text-[0.77rem]
            leading-[1.62]

            text-[#60758A]

            sm:text-[0.82rem]

            ${isLeft ? "lg:ml-auto" : ""}
          `}
        >
          {step.description}
        </p>

        <span
          className={`
            mt-4
            block
            h-[2px]
            w-8

            rounded-full

            ${isLeft ? "lg:ml-auto" : ""}
          `}
          style={{
            backgroundColor: step.accent,
          }}
        />
      </div>

      {/* =====================================================
          DESKTOP CENTER NODE
      ===================================================== */}

      <div
        className="
          relative
          hidden
          h-full
          items-center
          justify-center

          lg:col-start-2
          lg:row-start-1
          lg:flex
        "
      >
        {index < workflowSteps.length - 1 && (
          <span
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[58px]

              h-[calc(100%+40px)]
              w-px

              -translate-x-1/2

              bg-gradient-to-b
              from-[#C9D9E5]
              via-[#DCE7EF]
              to-[#C9D9E5]
            "
          />
        )}

        <motion.span
          whileHover={
            reduceMotion
              ? undefined
              : {
                  scale: 1.06,
                  rotate: 4,
                }
          }
          className="
            relative
            z-10

            flex
            h-[58px]
            w-[58px]
            items-center
            justify-center

            rounded-[16px]

            border
            border-black/[0.06]

            shadow-[0_10px_28px_rgba(11,42,82,0.07)]
          "
          style={{
            backgroundColor: step.soft,
            color: step.accent,
          }}
        >
          <Icon size={20} strokeWidth={1.6} />

          <span
            aria-hidden="true"
            className="
              absolute
              -inset-[6px]

              rounded-[20px]

              border
              border-current/10
            "
          />
        </motion.span>
      </div>

      {/* EMPTY DESKTOP SIDE */}
      <div
        aria-hidden="true"
        className={`
          hidden
          lg:block

          ${isLeft ? "lg:col-start-3" : "lg:col-start-1"}
        `}
      />
    </motion.article>
  );
}

export default function SharpRaysWorkflow() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="sharp-rays-workflow"
      aria-labelledby="sharp-rays-workflow-heading"
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

          hidden
          sm:block
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-280px]

            h-[520px]
            w-[920px]

            -translate-x-1/2

            rounded-full

            bg-[#EEF5FA]

            blur-[145px]
          "
        />

        <div
          className="
            absolute
            -right-[240px]
            bottom-[-200px]

            h-[440px]
            w-[440px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[125px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1320px]

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
          <div className="flex items-center justify-center gap-3">
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
                font-medium
                uppercase
                tracking-[0.23em]

                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.27em]
              "
            >
              Our Approach
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
            id="sharp-rays-workflow-heading"
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
            From Brief to Delivery.{" "}
            <span className="font-normal italic text-[#B79A72]">
              One Clear Workflow.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[700px]

              text-[0.86rem]
              leading-[1.68]

              text-[#5D7286]

              sm:text-[0.94rem]
            "
          >
            A structured process keeps fast production clear, intentional and
            easier to review at every stage.
          </p>
        </motion.div>

        {/* =====================================================
            WORKFLOW TIMELINE
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            max-w-[1080px]

            sm:mt-14
            lg:mt-16
          "
        >
          {workflowSteps.map((step, index) => (
            <WorkflowItem
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
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
                  y: 16,
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
            mt-8
            max-w-[880px]

            text-center

            sm:mt-10
          "
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#B79A72]/60" />

            <span
              style={newYorkFont}
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]

                text-[#B79A72]
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
              max-w-[820px]

              text-[1.25rem]
              font-light
              leading-[1.32]
              tracking-[-0.025em]

              text-[#0B2A52]

              sm:text-[1.5rem]
              md:text-[1.7rem]
            "
          >
            Faster production works best when{" "}
            <span className="italic text-[#B79A72]">
              every stage still has a clear purpose.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
