
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clapperboard,
  FileVideo2,
  Scissors,
  Send,
  AudioLines,
  Captions,
  Film,
  Play,
  Layers3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps: {
  number: string;
  phase: string;
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}[] = [
  {
    number: "01",
    phase: "PROJECT BRIEF",
    title: "Share Your Footage & Requirements",
    description:
      "Send us your recorded footage, brand assets and reference videos. Tell us where the video will be used, who it is for and the editing style you prefer.",
    icon: FileVideo2,
    points: ["Raw Footage", "Brand Assets", "References"],
  },
  {
    number: "02",
    phase: "CREATIVE DIRECTION",
    title: "Plan the Editing Approach",
    description:
      "We review your footage and plan the video structure, pacing, transitions, captions and visual style based on your goals and chosen platform.",
    icon: Clapperboard,
    points: ["Story Structure", "Editing Style", "Platform Format"],
  },
  {
    number: "03",
    phase: "POST-PRODUCTION",
    title: "Edit, Enhance & Refine",
    description:
      "Our editing process brings together the best footage, clean cuts, sound adjustments, colour correction, motion graphics and subtitles where required.",
    icon: Scissors,
    points: ["Professional Cuts", "Sound & Colour", "Motion & Captions"],
  },
  {
    number: "04",
    phase: "FINAL DELIVERY",
    title: "Review, Revise & Deliver",
    description:
      "You review the edited video and share your feedback. After the agreed revisions and final approval, we deliver your video in the required format and resolution.",
    icon: Send,
    points: ["Client Review", "Agreed Revisions", "Final Export"],
  },
];

function WorkflowVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#E9EFF5]">
        <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full border border-[#B8C9D7]" />

        <div className="relative flex items-center">
          <div className="relative z-10 flex h-[112px] w-[86px] -rotate-12 flex-col overflow-hidden rounded-[10px] border-[5px] border-white bg-[#8AA5BB] shadow-[0_12px_25px_rgba(11,42,82,0.12)] sm:h-[134px] sm:w-[100px]">
            <div className="flex flex-1 items-center justify-center">
              <Film size={29} strokeWidth={1.2} className="text-white/80" />
            </div>
            <span className="bg-[#0B2A52]/25 px-2 py-1 text-[7px] text-white">
              CLIP_01
            </span>
          </div>

          <div className="relative z-20 -ml-5 -mt-5 flex h-[115px] w-[88px] rotate-6 flex-col overflow-hidden rounded-[10px] border-[5px] border-white bg-[#436783] shadow-[0_12px_25px_rgba(11,42,82,0.14)] sm:h-[143px] sm:w-[108px]">
            <div className="flex flex-1 items-center justify-center">
              <Play size={25} fill="currentColor" className="text-white/85" />
            </div>
            <span className="bg-[#0B2A52]/30 px-2 py-1 text-[7px] text-white">
              CLIP_02
            </span>
          </div>

          <div className="relative z-10 -ml-5 mt-7 flex h-[110px] w-[84px] rotate-12 flex-col overflow-hidden rounded-[10px] border-[5px] border-white bg-[#B2A087] shadow-[0_12px_25px_rgba(11,42,82,0.12)] sm:h-[130px] sm:w-[99px]">
            <div className="flex flex-1 items-center justify-center">
              <Layers3 size={27} strokeWidth={1.2} className="text-white/80" />
            </div>
            <span className="bg-[#0B2A52]/25 px-2 py-1 text-[7px] text-white">
              CLIP_03
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#EBF0F4]">
        <div className="w-[80%] max-w-[290px] rotate-[-5deg] overflow-hidden rounded-[12px] border border-[#CFDCE5] bg-white p-4 shadow-[0_18px_30px_rgba(11,42,82,0.09)]">
          <div className="flex items-center justify-between border-b border-[#E7EDF2] pb-3">
            <span className="text-[8px] font-semibold tracking-[0.12em] text-[#7D91A3]">
              EDIT STRUCTURE
            </span>
            <Clapperboard size={14} className="text-[#B79A72]" />
          </div>

          <div className="mt-4 space-y-3">
            {[70, 95, 60].map((width, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#EAF0F5] text-[9px] text-[#6285AD]">
                  0{i + 1}
                </span>
                <div
                  className="h-[9px] rounded-full bg-[#7898AF]/70"
                  style={{ width: `${width}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-1.5">
            {["HOOK", "STORY", "END"].map((item) => (
              <span
                key={item}
                className="rounded-[5px] bg-[#F1F5F8] px-2 py-1.5 text-[7px] font-semibold tracking-[0.08em] text-[#6D8499]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#112E4C]">
        <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full border border-white/10" />
        <div className="w-[85%] max-w-[300px] rounded-[12px] border border-white/10 bg-[#091E35] p-4 shadow-[0_16px_38px_rgba(0,0,0,0.16)]">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-semibold tracking-[0.13em] text-white/55">
              EDITING TIMELINE
            </span>
            <Scissors size={14} className="text-[#D0B28B]" />
          </div>

          <div className="mt-5 space-y-2.5">
            <div className="flex items-center gap-2">
              <Film size={12} className="shrink-0 text-white/50" />
              <div className="flex h-7 flex-1 gap-1">
                <span className="w-[35%] rounded-[3px] bg-[#6D92AE]" />
                <span className="w-[25%] rounded-[3px] bg-[#436F91]" />
                <span className="flex-1 rounded-[3px] bg-[#6D92AE]" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <AudioLines size={12} className="shrink-0 text-white/50" />
              <div className="flex h-4 flex-1 gap-1">
                <span className="w-[58%] rounded-[3px] bg-[#9A8367]" />
                <span className="flex-1 rounded-[3px] bg-[#766754]" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Captions size={12} className="shrink-0 text-white/50" />
              <div className="flex h-4 flex-1 gap-1">
                <span className="w-[28%] rounded-[3px] bg-[#648B86]" />
                <span className="w-[44%] rounded-[3px] bg-[#527A75]" />
              </div>
            </div>
          </div>

          <div className="mt-5 h-px bg-white/10" />
          <p className="mt-3 text-[8px] tracking-[0.15em] text-[#D0B28B]">
            CUT / SOUND / CAPTIONS
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#E9EFF4]">
      <div className="relative flex h-[155px] w-[215px] flex-col overflow-hidden rounded-[12px] border-[6px] border-white bg-[#0B2A52] shadow-[0_15px_34px_rgba(11,42,82,0.17)] sm:h-[172px] sm:w-[245px]">
        <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_70%_35%,#65849D,#173B59_60%,#0B2A52)]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10">
            <Play size={18} fill="currentColor" className="ml-0.5 text-white" />
          </span>
        </div>

        <div className="flex items-center justify-between bg-white px-3 py-2">
          <span className="text-[8px] font-semibold tracking-[0.1em] text-[#0B2A52]">
            FINAL_VIDEO.MP4
          </span>
          <Check size={13} className="text-[#B79A72]" />
        </div>
      </div>
    </div>
  );
}

export default function VideoEditingProcess() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-process"
      aria-labelledby="video-editing-process-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24 xl:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-0 h-[480px] w-[480px] rounded-full bg-[#F1F6FA] blur-[140px]" />
        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F9F5EF] blur-[135px]" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* SECTION HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="mx-auto max-w-[820px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-[#B79A72]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              Our Professional Video Editing Process
            </span>
            <span className="h-px w-9 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-process-heading"
            className="mt-5 font-[var(--font-new-york)] text-[2.15rem] font-normal leading-[1.06] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            From Raw Footage to{" "}
            <span className="text-[#B79A72]">
              Professionally Edited Videos.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[670px] text-[12px] leading-[1.85] text-[#60778B] sm:text-[14px] sm:leading-7 md:text-[15px]">
            We follow a clear, collaborative video editing process to
            transform your footage into polished content — from the initial
            brief and creative planning to revisions and final delivery.
          </p>
        </motion.div>

        {/* STAGGERED WORKFLOW */}

        <div className="relative mx-auto mt-14 max-w-[1120px] sm:mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-1/2 top-12 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9D6E0] to-transparent lg:block"
          />

          <div className="space-y-6 sm:space-y-8 lg:space-y-11">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: isRight ? 25 : -25,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    ease,
                  }}
                  className={`relative flex ${
                    isRight ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {/* CENTRE NUMBER */}

                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#0B2A52] font-[var(--font-new-york)] text-[12px] text-white shadow-[0_4px_18px_rgba(11,42,82,0.1)] lg:flex">
                    {step.number}
                  </div>

                  {/* STEP FEATURE */}

                  <div className="group relative grid w-full overflow-hidden rounded-[20px] border border-[#DFE7ED] bg-white shadow-[0_15px_45px_rgba(11,42,82,0.045)] transition-all duration-300 hover:shadow-[0_22px_55px_rgba(11,42,82,0.09)] sm:grid-cols-[0.41fr_0.59fr] lg:w-[46%] lg:grid-cols-1 xl:grid-cols-[0.42fr_0.58fr]">
                    {/* VISUAL */}

                    <div className="relative h-[205px] overflow-hidden sm:h-auto sm:min-h-[220px] lg:h-[205px] xl:h-auto">
                      <WorkflowVisual index={index} />
                    </div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col px-5 py-6 sm:px-6 sm:py-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#B79A72]">
                          {step.phase}
                        </span>

                        <Icon
                          size={17}
                          strokeWidth={1.5}
                          className="text-[#6285AD]"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-4 font-[var(--font-new-york)] text-[21px] font-normal leading-[1.19] tracking-[-0.025em] text-[#0B2A52] sm:text-[23px]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-[12px] leading-[1.75] text-[#62788D]">
                        {step.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-5">
                        {step.points.map((point) => (
                          <span
                            key={point}
                            className="flex items-center gap-1.5 text-[9px] text-[#73899B]"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* CONCLUSION */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative mt-16 overflow-hidden rounded-[22px] bg-[#0B2A52] px-6 py-9 sm:mt-20 sm:px-9 sm:py-11 lg:px-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-32 -top-44 h-[370px] w-[370px] rounded-full border border-white/[0.09]" />
            <div className="absolute -right-16 -top-28 h-[270px] w-[270px] rounded-full border border-white/[0.09]" />
          </div>

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#DABB8F]">
                The Sharp Rays Approach
              </span>

              <h3 className="mt-3 max-w-[610px] font-[var(--font-new-york)] text-[24px] font-normal leading-[1.2] tracking-[-0.025em] text-white sm:text-[29px]">
                Your Footage.{" "}
                <span className="text-[#DABB8F]">
                  Our Editing Expertise.
                </span>
              </h3>

              <p className="mt-3 max-w-[650px] text-[12px] leading-[1.8] text-white/70 sm:text-[13px]">
                Have footage ready? Share your project requirements and
                let's discuss the editing approach that fits your content.
              </p>
            </div>

            <Link
              href="/contact?service=video-editing#contact-form"
              title="Get a Professional Video Editing Quote"
              className="group inline-flex min-h-[48px] w-fit shrink-0 items-center justify-center gap-3 rounded-[13px] bg-white px-6 py-3 text-[12px] font-medium !text-[#0B2A52] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F8F2E9] hover:!text-[#0B2A52] sm:text-[13px]"
            >
              <span className="!text-[#0B2A52]">
                Get My Editing Quote
              </span>

              <ArrowUpRight
                size={15}
                className="!text-[#0B2A52] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
