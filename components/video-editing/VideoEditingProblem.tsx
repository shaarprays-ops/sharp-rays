"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  Clapperboard,
  Crop,
  Scissors,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type Challenge = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const challenges: Challenge[] = [
  {
    number: "01",
    title: "The First Few Seconds Matter",
    description:
      "Slow openings, unnecessary pauses and weak pacing can cause viewers to leave before your message begins.",
    icon: Timer,
  },
  {
    number: "02",
    title: "Clips Need a Clear Story",
    description:
      "Without thoughtful sequencing, even high-quality recordings can feel disconnected or difficult to follow.",
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Sound Shapes the Experience",
    description:
      "Inconsistent dialogue, background noise and poorly balanced audio can distract from otherwise good footage.",
    icon: AudioLines,
  },
  {
    number: "04",
    title: "Every Platform Is Different",
    description:
      "Instagram Reels, YouTube videos and digital ads need editing decisions suited to their format and audience.",
    icon: Crop,
  },
];

function ChallengeItem({
  challenge,
  index,
  reduceMotion,
}: {
  challenge: Challenge;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = challenge.icon;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : index * 0.07,
        ease,
      }}
      className="group relative border-b border-[#DCE5EC] py-6 sm:py-7 lg:px-7 lg:py-8"
    >
      <div className="flex items-start justify-between gap-5">
        <span
          style={newYorkFont}
          className="text-[20px] font-normal italic text-[#B79A72]"
        >
          {challenge.number}
        </span>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9E4EB] bg-white text-[#6285AD] transition-all duration-300 group-hover:border-[#B79A72]/50 group-hover:bg-[#FFF9F1] group-hover:text-[#B79A72]">
          <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>

      <h3
        style={newYorkFont}
        className="mt-5 max-w-[350px] text-[20px] font-normal leading-[1.16] tracking-[-0.025em] text-[#0B2A52] sm:text-[22px]"
      >
        {challenge.title}
      </h3>

      <p className="mt-3 max-w-[390px] text-[12px] leading-[1.8] text-[#647B90] sm:text-[13px]">
        {challenge.description}
      </p>

      <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default function VideoEditingProblem() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-problem"
      aria-labelledby="video-editing-problem-heading"
      className="relative isolate overflow-hidden bg-[#F8FBFD] py-16 text-[#0B2A52] sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-0 h-[430px] w-[430px] rounded-full bg-[#EDF5FB] blur-[125px]" />
        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#FBF3E9]/80 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="mx-auto max-w-[790px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px]">
              Why Professional Editing Matters
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-problem-heading"
            style={newYorkFont}
            className="mt-5 text-[2.15rem] font-normal leading-[1.05] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem]"
          >
            Good Footage Is Only{" "}
            <span className="text-[#B79A72]">the Beginning.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[630px] text-[12px] leading-[1.8] text-[#60758A] sm:text-[14px] md:text-[15px]">
            Professional video editing shapes raw footage into a clear,
            engaging story through better pacing, sound, structure and
            visual presentation.
          </p>
        </motion.div>

        {/* CREATIVE STORYBOARD */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="relative mx-auto mt-11 max-w-[1080px] sm:mt-14"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-[#DCE5EC] bg-white px-4 py-7 shadow-[0_18px_50px_rgba(11,42,82,0.055)] sm:px-8 sm:py-9 lg:px-12">
            <div className="flex items-center justify-between gap-4 border-b border-[#E7EDF2] pb-5">
              <div className="flex items-center gap-2">
                <Scissors
                  size={16}
                  strokeWidth={1.6}
                  className="text-[#B79A72]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6D8296]">
                  The Editing Difference
                </span>
              </div>

              <span className="hidden text-[9px] tracking-[0.13em] text-[#9AABBA] sm:block">
                FROM FOOTAGE TO FINAL VIDEO
              </span>
            </div>

            <div className="grid items-center gap-5 py-7 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-4 lg:gap-7">
              {/* RAW FOOTAGE */}

              <div className="text-center">
                <div className="relative mx-auto flex aspect-[16/10] max-w-[260px] items-center justify-center overflow-hidden rounded-[14px] border border-[#DFE7ED] bg-[#F1F5F8]">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#D6E3EC,#F2F6F9)]" />

                  <div className="relative flex -space-x-4">
                    {[0, 1, 2].map((item) => (
                      <span
                        key={item}
                        className="flex h-[74px] w-[63px] rotate-[-5deg] items-center justify-center rounded-[8px] border-[3px] border-white bg-[#9BB4C8] shadow-[0_6px_16px_rgba(11,42,82,0.12)] first:rotate-[-12deg] last:rotate-[8deg]"
                      >
                        <Clapperboard
                          size={20}
                          strokeWidth={1.3}
                          className="text-white"
                        />
                      </span>
                    ))}
                  </div>
                </div>

                <p
                  style={newYorkFont}
                  className="mt-4 text-[17px] font-normal text-[#0B2A52] sm:text-[19px]"
                >
                  Raw Footage
                </p>

                <p className="mt-1 text-[10px] text-[#8295A7]">
                  Unstructured clips
                </p>
              </div>

              {/* ARROW */}

              <div className="flex justify-center text-[#B79A72]">
                <ArrowRight
                  size={20}
                  strokeWidth={1.5}
                  className="rotate-90 sm:rotate-0"
                />
              </div>

              {/* CREATIVE EDIT */}

              <div className="text-center">
                <div className="relative mx-auto flex aspect-[16/10] max-w-[260px] items-center justify-center overflow-hidden rounded-[14px] border border-[#C9DCE9] bg-[#E9F3F9]">
                  <div className="space-y-2 px-5">
                    <div className="flex gap-1">
                      <span className="h-6 w-14 rounded-[4px] bg-[#6285AD]" />
                      <span className="h-6 w-9 rounded-[4px] bg-[#94B5CD]" />
                      <span className="h-6 w-12 rounded-[4px] bg-[#6285AD]" />
                    </div>

                    <div className="flex gap-1">
                      <span className="h-3 w-20 rounded-[3px] bg-[#B79A72]/70" />
                      <span className="h-3 w-12 rounded-[3px] bg-[#D8C6AC]" />
                    </div>

                    <div className="flex gap-1">
                      <span className="h-3 w-12 rounded-[3px] bg-[#9ABCB2]" />
                      <span className="h-3 w-20 rounded-[3px] bg-[#6D9D90]" />
                    </div>
                  </div>

                  <span className="absolute bottom-0 top-0 left-[57%] w-px bg-[#B79A72]" />
                </div>

                <p
                  style={newYorkFont}
                  className="mt-4 text-[17px] font-normal text-[#0B2A52] sm:text-[19px]"
                >
                  Professional Editing
                </p>

                <p className="mt-1 text-[10px] text-[#8295A7]">
                  Story · Sound · Pacing
                </p>
              </div>

              {/* ARROW */}

              <div className="flex justify-center text-[#B79A72]">
                <ArrowRight
                  size={20}
                  strokeWidth={1.5}
                  className="rotate-90 sm:rotate-0"
                />
              </div>

              {/* FINAL VIDEO */}

              <div className="text-center">
                <div className="relative mx-auto flex aspect-[16/10] max-w-[260px] items-center justify-center overflow-hidden rounded-[14px] bg-[#0B2A52]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,#547E9D_0%,#1C4569_46%,#0B2A52_100%)]" />

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
                    <Clapperboard
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="absolute bottom-3 left-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/65">
                    FINAL CUT
                  </span>
                </div>

                <p
                  style={newYorkFont}
                  className="mt-4 text-[17px] font-normal text-[#0B2A52] sm:text-[19px]"
                >
                  Finished Video
                </p>

                <p className="mt-1 text-[10px] text-[#8295A7]">
                  Clear · Polished · Ready
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CHALLENGES HEADER */}

        <div className="mx-auto mt-14 flex max-w-[1100px] flex-wrap items-end justify-between gap-4 border-b border-[#DCE5EC] pb-4 sm:mt-16">
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">
              What Can Hold a Video Back?
            </span>

            <h3
              style={newYorkFont}
              className="mt-2 text-[23px] font-normal tracking-[-0.03em] text-[#0B2A52] sm:text-[27px]"
            >
              Four Details That Change the Result.
            </h3>
          </div>

          <span className="text-[9px] uppercase tracking-[0.17em] text-[#9AAABB]">
            01 — 04
          </span>
        </div>

        {/* CHALLENGES GRID */}

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 sm:grid-cols-2 lg:gap-x-12">
          {challenges.map((challenge, index) => (
            <ChallengeItem
              key={challenge.number}
              challenge={challenge}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* CLOSING LINE */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="mx-auto mt-12 flex max-w-[900px] items-center justify-center gap-4 text-center sm:mt-14"
        >
          <span className="hidden h-px w-12 bg-[#B79A72]/60 sm:block" />

          <p
            style={newYorkFont}
            className="text-[17px] font-normal leading-[1.45] text-[#0B2A52] sm:text-[20px]"
          >
            The difference is in the details.{" "}
            <span className="italic text-[#B79A72]">
              That's where editing matters.
            </span>
          </p>

          <span className="hidden h-px w-12 bg-[#B79A72]/60 sm:block" />
        </motion.div>
      </div>
    </section>
  );
}