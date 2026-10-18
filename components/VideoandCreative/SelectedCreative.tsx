"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clapperboard,
  FileText,
  Layers3,
  Palette,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
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
    title: "Define the Objective",
    description:
      "We clarify the audience, product, message, platform and outcome the video needs to support.",
    icon: FileText,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    number: "02",
    stage: "Concept",
    title: "Find the Creative Angle",
    description:
      "We develop the hook, story and central idea before any AI generation begins.",
    icon: WandSparkles,
    accent: "#C7794A",
    soft: "#FFF1E7",
  },
  {
    number: "03",
    stage: "Plan",
    title: "Script & Storyboard",
    description:
      "We map the scenes, sequence, messaging and visual moments needed to tell the story clearly.",
    icon: Layers3,
    accent: "#7B61C9",
    soft: "#F2EEFF",
  },
  {
    number: "04",
    stage: "Direction",
    title: "Build the Visual Language",
    description:
      "We define references, environments, characters, product treatment and overall art direction.",
    icon: Palette,
    accent: "#3F9A7A",
    soft: "#EAF8F2",
  },
  {
    number: "05",
    stage: "AI Production",
    title: "Generate & Refine the Scenes",
    description:
      "We create and iterate the AI-generated visuals required for the approved concept and story.",
    icon: Sparkles,
    accent: "#C49A3E",
    soft: "#FFF8E5",
  },
  {
    number: "06",
    stage: "Post-Production",
    title: "Turn Scenes Into a Finished Video",
    description:
      "We assemble pacing, motion, sound, typography and visual details into one coherent final creative.",
    icon: Clapperboard,
    accent: "#4E9AA8",
    soft: "#EAF8FA",
  },
  {
    number: "07",
    stage: "Delivery",
    title: "Prepare It for the Channel",
    description:
      "Approved videos are exported in the agreed formats, sizes and specifications for ads, social or web.",
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
      className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 pb-8 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-5 sm:pb-9 lg:grid-cols-[1fr_72px_1fr] lg:items-center lg:gap-7 lg:pb-10"
    >
      {/* MOBILE / TABLET NODE */}

      <div className="relative flex justify-center lg:hidden">
        {index < workflowSteps.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-[-32px] top-[48px] w-px bg-gradient-to-b from-[#C9D9E5] via-[#DCE7EF] to-[#C9D9E5]"
          />
        )}

        <span
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-black/[0.06] shadow-[0_8px_24px_rgba(11,42,82,0.06)] sm:h-12 sm:w-12"
          style={{
            backgroundColor: step.soft,
            color: step.accent,
          }}
        >
          <Icon size={17} strokeWidth={1.65} />
        </span>
      </div>

      {/* CONTENT */}

      <div
        className={`min-w-0 ${
          isLeft
            ? "lg:col-start-1 lg:text-right"
            : "lg:col-start-3 lg:text-left"
        }`}
      >
        <div
          className={`flex items-center gap-3 ${
            isLeft ? "lg:justify-end" : "lg:justify-start"
          }`}
        >
          <span
            style={{
              ...newYorkFont,
              color: step.accent,
            }}
            className="text-[0.48rem] font-medium uppercase tracking-[0.18em]"
          >
            {step.stage}
          </span>

          <span
            style={newYorkFont}
            className="text-[0.55rem] tracking-[0.12em] text-[#9AAAB8]"
          >
            {step.number}
          </span>
        </div>

        <h3
          style={newYorkFont}
          className={`mt-2 text-[1.25rem] font-normal leading-[1.12] tracking-[-0.03em] text-[#0B2A52] sm:text-[1.4rem] lg:text-[1.48rem] ${
            isLeft ? "lg:ml-auto" : ""
          }`}
        >
          {step.title}
        </h3>

        <p
          style={newYorkFont}
          className={`mt-2.5 max-w-[500px] text-[0.77rem] leading-[1.62] text-[#60758A] sm:text-[0.82rem] ${
            isLeft ? "lg:ml-auto" : ""
          }`}
        >
          {step.description}
        </p>

        <span
          className={`mt-4 block h-[2px] w-8 rounded-full ${
            isLeft ? "lg:ml-auto" : ""
          }`}
          style={{
            backgroundColor: step.accent,
          }}
        />
      </div>

      {/* DESKTOP CENTER NODE */}

      <div className="relative hidden h-full items-center justify-center lg:col-start-2 lg:row-start-1 lg:flex">
        {index < workflowSteps.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[58px] h-[calc(100%+40px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#C9D9E5] via-[#DCE7EF] to-[#C9D9E5]"
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
          className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[16px] border border-black/[0.06] shadow-[0_10px_28px_rgba(11,42,82,0.07)]"
          style={{
            backgroundColor: step.soft,
            color: step.accent,
          }}
        >
          <Icon size={20} strokeWidth={1.6} />

          <span
            aria-hidden="true"
            className="absolute -inset-[6px] rounded-[20px] border border-current/10"
          />
        </motion.span>
      </div>

      <div
        aria-hidden="true"
        className={`hidden lg:block ${
          isLeft ? "lg:col-start-3" : "lg:col-start-1"
        }`}
      />
    </motion.article>
  );
}

export default function AiVideoProductionProcess() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-production-process"
      aria-labelledby="ai-video-production-process-heading"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden sm:block"
      >
        <div className="absolute left-1/2 top-[-280px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[#EEF5FA] blur-[145px]" />

        <div className="absolute -right-[240px] bottom-[-200px] h-[440px] w-[440px] rounded-full bg-[#B79A72]/[0.045] blur-[125px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}

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
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10" />

            <span
              style={newYorkFont}
              className="text-[9px] font-medium uppercase tracking-[0.23em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.27em]"
            >
              Our AI Video Process
            </span>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10" />
          </div>

          <h2
            id="ai-video-production-process-heading"
            style={newYorkFont}
            className="mx-auto mt-5 max-w-[920px] text-[2.2rem] font-light leading-[1.04] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            How Our AI Video Production{" "}
            <span className="font-normal italic text-[#B79A72]">
              Process Works.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="mx-auto mt-5 max-w-[720px] text-[0.86rem] leading-[1.68] text-[#5D7286] sm:text-[0.94rem]"
          >
            Every AI video moves through a structured creative process so the
            final result is guided by the message, audience and campaign goal —
            not just by what an AI tool can generate.
          </p>
        </motion.div>

        {/* WORKFLOW */}

        <div className="mx-auto mt-12 max-w-[1080px] sm:mt-14 lg:mt-16">
          {workflowSteps.map((step, index) => (
            <WorkflowItem
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* PRINCIPLE */}

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
          className="mx-auto mt-8 max-w-[880px] text-center sm:mt-10"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#B79A72]/60" />

            <span
              style={newYorkFont}
              className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#B79A72]"
            >
              The Principle
            </span>

            <span className="h-px w-7 bg-[#B79A72]/60" />
          </div>

          <p
            style={newYorkFont}
            className="mx-auto mt-4 max-w-[820px] text-[1.25rem] font-light leading-[1.32] tracking-[-0.025em] text-[#0B2A52] sm:text-[1.5rem] md:text-[1.7rem]"
          >
            AI may generate the scenes.{" "}
            <span className="italic text-[#B79A72]">
              The process gives those scenes a reason to exist.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}