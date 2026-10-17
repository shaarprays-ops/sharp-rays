"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Eye,
  FileText,
  Megaphone,
  Monitor,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: "New York, ui-serif, Georgia, serif",
};

const ease = [0.22, 1, 0.36, 1] as const;

type ResponsibilityItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const responsibilityItems: ResponsibilityItem[] = [
  {
    number: "01",
    title: "Asset & Brand Rights",
    description:
      "We consider permission to use supplied images, logos, brand assets and other source material.",
    icon: BadgeCheck,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "02",
    title: "Licensed Creative Material",
    description:
      "Music, stock assets and supporting media should be suitable for the intended commercial use.",
    icon: FileText,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "03",
    title: "Voice & Likeness",
    description:
      "AI presenters, voices and recognisable likenesses require appropriate permission and responsible use.",
    icon: Users,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "04",
    title: "Product Accuracy",
    description:
      "Generated visuals should not misrepresent important product details, features or customer expectations.",
    icon: Search,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "05",
    title: "Factual Claims",
    description:
      "Marketing claims, demonstrations and statements should remain accurate and supportable.",
    icon: ShieldCheck,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "06",
    title: "AI Disclosure",
    description:
      "Where context, platform rules or audience expectations make disclosure appropriate, it should be considered.",
    icon: Eye,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
  {
    number: "07",
    title: "Advertising Requirements",
    description:
      "Creative should account for the policies and requirements of the platforms where it will run.",
    icon: Megaphone,
    accent: "#3976B6",
    soft: "#EEF6FD",
  },
  {
    number: "08",
    title: "Commercial Usage",
    description:
      "We consider where the final video will appear, how it will be distributed and what usage it requires.",
    icon: Monitor,
    accent: "#B88959",
    soft: "#FBF4EB",
  },
];

export default function ResponsibleAiVideo() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="responsible-ai-video"
      aria-labelledby="responsible-ai-video-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#EDF6FD]/55 blur-[150px]" />

        <div className="absolute -right-[340px] top-[28%] hidden h-[650px] w-[650px] rounded-full border border-[#C9DEEF]/35 lg:block" />

        <div className="absolute -bottom-[260px] -left-[300px] hidden h-[560px] w-[560px] rounded-full border border-[#B88959]/10 lg:block" />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* =======================================================
            HEADER
        ======================================================= */}

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
            duration: reduceMotion ? 0 : 0.85,
            ease,
          }}
          className="mx-auto max-w-[1020px] text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#B88959]" />

            <span
              style={newYorkFont}
              className="text-[9px] uppercase tracking-[0.32em] text-[#A9784E] sm:text-[10px]"
            >
              Responsible AI Video
            </span>

            <span className="h-px w-9 bg-[#B88959]" />
          </div>

          <h2
            id="responsible-ai-video-heading"
            style={newYorkFont}
            className="mt-7 text-[2.35rem] font-light leading-[1] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Creative Possibility Still Needs{" "}
            <span className="text-[#B88959]">
              Responsibility.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="mx-auto mt-6 max-w-[730px] text-[14px] leading-[1.78] text-[#526D84] sm:text-[16px]"
          >
            AI video can expand what brands are able to create, but commercial
            creative still needs careful decisions around rights, accuracy,
            representation, disclosure and how the final content will be used.
          </p>
        </motion.div>

        {/* =======================================================
            PRINCIPLE LINE
        ======================================================= */}

        <motion.div
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
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="mt-12 flex flex-col gap-4 border-b border-[#0B2A52]/10 pb-5 sm:mt-14 sm:flex-row sm:items-end sm:justify-between lg:mt-16"
        >
          <div>
            <p
              style={newYorkFont}
              className="text-[8px] uppercase tracking-[0.28em] text-[#B88959]"
            >
              Production Standards
            </p>

            <p
              style={newYorkFont}
              className="mt-2 text-[15px] tracking-[-0.015em] text-[#0B2A52] sm:text-[17px]"
            >
              Every AI video project should consider:
            </p>
          </div>

          <span
            style={newYorkFont}
            className="text-[8px] uppercase tracking-[0.22em] text-[#0B2A52]/35"
          >
            01 — 08
          </span>
        </motion.div>

        {/* =======================================================
            RESPONSIBILITY GRID
        ======================================================= */}

        <div className="border-l border-[#0B2A52]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.055,
                    ease,
                  }}
                  style={
                    {
                      "--accent": item.accent,
                      "--soft": item.soft,
                    } as React.CSSProperties
                  }
                  className="group relative min-h-[235px] overflow-hidden border-b border-r border-[#0B2A52]/10 bg-white px-6 py-7 transition-colors duration-500 hover:bg-[var(--soft)] sm:min-h-[250px] sm:px-7 sm:py-8 lg:min-h-[270px] xl:px-8"
                >
                  {/* HOVER TOP LINE */}

                  <span
                    style={{
                      backgroundColor: item.accent,
                    }}
                    className="absolute left-0 top-0 h-[2px] w-10 transition-all duration-500 group-hover:w-full"
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* TOP */}

                    <div className="flex items-center justify-between gap-5">
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: 5,
                                scale: 1.06,
                              }
                        }
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}30`,
                        }}
                        className="flex h-[44px] w-[44px] items-center justify-center border bg-white/85 shadow-[0_6px_22px_rgba(11,42,82,0.05)]"
                      >
                        <Icon size={18} strokeWidth={1.45} />
                      </motion.div>

                      <span
                        style={newYorkFont}
                        className="text-[8px] tracking-[0.16em] text-[#9AAAB8]"
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3
                      style={newYorkFont}
                      className="mt-7 max-w-[235px] text-[18px] font-light leading-[1.2] tracking-[-0.025em] text-[#0B2A52] sm:text-[19px] lg:text-[20px]"
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      style={newYorkFont}
                      className="mt-3 max-w-[250px] text-[0.74rem] leading-[1.62] text-[#61798F]"
                    >
                      {item.description}
                    </p>

                    {/* MICRO LINE */}

                    <span
                      style={{
                        backgroundColor: item.accent,
                      }}
                      className="mt-auto block h-px w-8 opacity-50"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            FINAL PRINCIPLE
        ======================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="mx-auto mt-14 max-w-[920px] text-center sm:mt-16"
        >
          <div className="mx-auto flex w-fit items-center gap-4">
            <span className="h-px w-10 bg-[#B88959]/60 sm:w-16" />

            <span
              style={newYorkFont}
              className="text-[9px] uppercase tracking-[0.28em] text-[#B88959]"
            >
              The Principle
            </span>

            <span className="h-px w-10 bg-[#B88959]/60 sm:w-16" />
          </div>

          <h3
            style={newYorkFont}
            className="mx-auto mt-7 max-w-[880px] text-[27px] font-light leading-[1.08] tracking-[-0.04em] text-[#0B2A52] sm:text-[34px] md:text-[38px] lg:text-[42px]"
          >
            AI Can Expand the Creative Possibility.{" "}
            <span className="text-[#B88959]">
              Trust Still Has to Be Designed In.
            </span>
          </h3>

          <p
            style={newYorkFont}
            className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[1.8] text-[#647D96] sm:text-[14px]"
          >
            The final creative should work for the campaign without creating
            unnecessary risk for the audience, brand or people represented in it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}