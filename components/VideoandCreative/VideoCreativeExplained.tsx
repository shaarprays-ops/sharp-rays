"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  Boxes,
  Clapperboard,
  Film,
  Layers3,
  Megaphone,
  Package,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
};

const capabilities: Capability[] = [
  {
    title: "AI Video Ads",
    description:
      "Create campaign-ready video concepts around products, offers and audience hooks.",
    icon: Megaphone,
    bg: "#F4F9FE",
    border: "#C9DDEF",
    iconBg: "#E2EFFA",
    iconColor: "#0B2A52",
  },
  {
    title: "AI Product Videos",
    description:
      "Turn product images and ideas into launch, lifestyle and promotional visuals.",
    icon: Package,
    bg: "#FFF9F1",
    border: "#EAD8BD",
    iconBg: "#F5E7D2",
    iconColor: "#9A6829",
  },
  {
    title: "AI UGC Creative",
    description:
      "Develop creator-style video concepts for social media and advertising campaigns.",
    icon: Clapperboard,
    bg: "#F3FAF6",
    border: "#CEE4D6",
    iconBg: "#DFF0E6",
    iconColor: "#247B5B",
  },
  {
    title: "AI Brand Films",
    description:
      "Build cinematic visual stories for launches, campaigns and brand storytelling.",
    icon: Film,
    bg: "#FFF4F7",
    border: "#EFD3DC",
    iconBg: "#FBE1E8",
    iconColor: "#C33A60",
  },
  {
    title: "Campaign Visuals",
    description:
      "Create multiple creative directions, scenes and visual ideas from one campaign brief.",
    icon: Layers3,
    bg: "#F4F9FE",
    border: "#C9DDEF",
    iconBg: "#E2EFFA",
    iconColor: "#0B2A52",
  },
  {
    title: "Concept Visualisation",
    description:
      "Visualise products, environments and ideas before a traditional production exists.",
    icon: Boxes,
    bg: "#FFF9F1",
    border: "#EAD8BD",
    iconBg: "#F5E7D2",
    iconColor: "#9A6829",
  },
];

const process = [
  "Brief",
  "Concept",
  "Visual Direction",
  "AI Generation",
  "Final Creative",
];

export default function AiVideoExplained() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-production"
      aria-labelledby="ai-video-production-heading"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* SOFT BACKGROUND DETAILS */}

      <div className="pointer-events-none absolute -left-[140px] top-[18%] h-[340px] w-[340px] rounded-full bg-[#DDECF8]/45 blur-[100px]" />
      <div className="pointer-events-none absolute -right-[150px] bottom-[10%] h-[380px] w-[380px] rounded-full bg-[#F4E5D1]/45 blur-[110px]" />

      <div className="relative z-20 mx-auto w-full max-w-[1450px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[980px] text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
            className="mx-auto flex w-fit items-center gap-3 sm:gap-4"
          >
            <span className="h-px w-7 bg-[#B79A72] sm:w-11" />

            <span
              style={newYorkFont}
              className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#A4774C] sm:text-[10px] md:text-[11px]"
            >
              AI Video Production
            </span>

            <span className="h-px w-7 bg-[#B79A72] sm:w-11" />
          </motion.div>

          <motion.h2
            id="ai-video-production-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.05,
              ease,
            }}
            style={newYorkFont}
            className="mx-auto mt-6 max-w-[900px] text-[2.2rem] font-light leading-[1.02] tracking-[-0.05em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Video Production{" "}
            <span className="text-[#B18458]">
              Without Starting With a Camera.
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            style={newYorkFont}
            className="mx-auto mt-5 max-w-[790px] text-[13px] leading-[1.72] text-[#49657E] sm:mt-6 sm:text-[15px] md:text-[16px]"
          >
            AI video production uses generative technology and creative
            direction to turn ideas, product images and campaign briefs into
            finished video creative for advertising, social media, websites
            and brand campaigns.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN VISUAL — IDEA TO VIDEO
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.85,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="relative mx-auto mt-10 max-w-[1180px] overflow-hidden rounded-[30px] border border-[#D7E3EC] bg-[linear-gradient(135deg,#F7FBFE_0%,#FFFFFF_48%,#FCF8F2_100%)] px-5 py-8 shadow-[0_24px_70px_rgba(11,42,82,0.07)] sm:mt-12 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-[-80px] h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-[#DDECF8]/65 blur-[80px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">

            {/* LEFT */}

            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#E6F1FA] text-[#0B2A52]">
                <WandSparkles size={25} strokeWidth={1.4} />
              </div>

              <h3
                style={newYorkFont}
                className="mt-6 max-w-[430px] text-[1.75rem] font-light leading-[1.08] tracking-[-0.04em] text-[#0B2A52] sm:text-[2rem]"
              >
                Start With an Idea.{" "}
                <span className="italic text-[#B18458]">
                  Build the Visual Around It.
                </span>
              </h3>

              <p
                style={newYorkFont}
                className="mt-4 max-w-[470px] text-[0.9rem] leading-[1.7] text-[#557087] sm:text-[0.96rem]"
              >
                Instead of beginning with locations, sets and cameras, AI video
                can begin with the message you want to communicate and the
                visual world you want to create.
              </p>
            </div>

            {/* RIGHT — PROCESS */}

            <div className="relative">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
                {process.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.07,
                      ease,
                    }}
                    className="relative flex min-h-[108px] flex-col justify-between rounded-[18px] border border-[#D8E5EE] bg-white/80 p-4 backdrop-blur-sm"
                  >
                    <span
                      style={newYorkFont}
                      className="text-[9px] font-medium tracking-[0.17em] text-[#B18458]"
                    >
                      0{index + 1}
                    </span>

                    <span
                      style={newYorkFont}
                      className="mt-6 text-[0.88rem] font-medium leading-[1.25] text-[#0B2A52]"
                    >
                      {item}
                    </span>

                    {index < process.length - 1 && (
                      <span className="absolute -right-[8px] top-1/2 z-20 hidden h-[16px] w-[16px] -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E5EE] bg-white text-[#B18458] sm:flex">
                        <span className="text-[10px]">→</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CONNECTOR
        ===================================================== */}

        <div className="mx-auto flex h-[68px] justify-center">
          <motion.div
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease,
            }}
            className="relative h-full w-px origin-top bg-[#B79A72]/55"
          >
            <span className="absolute -bottom-2 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-[#E2D5C3] bg-white text-[#B18458]">
              <ArrowDown size={10} strokeWidth={1.6} />
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            CAPABILITY HEADER
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease }}
          className="mx-auto max-w-[840px] text-center"
        >
          <span
            style={newYorkFont}
            className="text-[9px] font-medium uppercase tracking-[0.27em] text-[#A4774C]"
          >
            What You Can Create
          </span>

          <h3
            style={newYorkFont}
            className="mx-auto mt-3 max-w-[760px] text-[1.65rem] font-light leading-[1.15] tracking-[-0.035em] text-[#0B2A52] sm:text-[1.95rem] md:text-[2.2rem]"
          >
            AI Video Creative for{" "}
            <span className="text-[#B18458]">
              Different Marketing Goals.
            </span>
          </h3>
        </motion.div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div className="mx-auto mt-7 grid max-w-[1240px] grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.05,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                style={{
                  backgroundColor: item.bg,
                  borderColor: item.border,
                }}
                className="group relative overflow-hidden rounded-[20px] border p-5 shadow-[0_8px_25px_rgba(11,42,82,0.025)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(11,42,82,0.08)] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.06,
                            rotate: 3,
                          }
                    }
                    style={{
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px]"
                  >
                    <Icon size={21} strokeWidth={1.45} />
                  </motion.div>

                  <div>
                    <h4
                      style={newYorkFont}
                      className="text-[1rem] font-medium leading-[1.25] text-[#0B2A52] sm:text-[1.05rem]"
                    >
                      {item.title}
                    </h4>

                    <p
                      style={newYorkFont}
                      className="mt-2 text-[0.79rem] leading-[1.6] text-[#587087] sm:text-[0.84rem]"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            ENDING STATEMENT
        ===================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="mx-auto mt-11 max-w-[900px] text-center sm:mt-14"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#B79A72] sm:w-10" />

            <span
              style={newYorkFont}
              className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#A4774C] sm:text-[9px]"
            >
              At Sharp Rays
            </span>

            <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#B79A72] sm:w-10" />
          </div>

          <h3
            style={newYorkFont}
            className="mx-auto mt-4 max-w-[760px] text-[1.45rem] font-light leading-[1.18] tracking-[-0.035em] text-[#0B2A52] sm:text-[1.8rem] md:text-[2rem]"
          >
            AI generates the possibilities.{" "}
            <span className="font-normal italic text-[#B18458]">
              Creative direction decides what is worth making.
            </span>
          </h3>

          <p
            style={newYorkFont}
            className="mx-auto mt-3 max-w-[660px] text-[0.8rem] leading-[1.65] text-[#5B7286] sm:text-[0.9rem]"
          >
            Every project starts with the audience, message and purpose — not
            the AI tool.
          </p>
        </motion.div>
      </div>
    </section>
  );
}