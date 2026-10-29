
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clapperboard,
  Film,
  MonitorPlay,
  Smartphone,
  Square,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type VideoFormat = {
  id: string;
  number: string;
  title: string;
  ratio: string;
  category: string;
  platforms: string;
  description: string;
  icon: LucideIcon;
  preview: string;
  deliverables: string[];
};

const videoFormats: VideoFormat[] = [
  {
    id: "vertical",
    number: "01",
    title: "Vertical Videos",
    ratio: "9:16",
    category: "Portrait",
    platforms: "Instagram Reels · YouTube Shorts · Stories",
    description:
      "Vertical editing designed for mobile viewing, short-form content and social media campaigns.",
    icon: Smartphone,
    preview: "portrait",
    deliverables: [
      "Vertical video framing",
      "Mobile-friendly text and captions",
      "Export suited to your chosen platform",
    ],
  },
  {
    id: "landscape",
    number: "02",
    title: "Widescreen Videos",
    ratio: "16:9",
    category: "Landscape",
    platforms: "YouTube · Websites · Presentations",
    description:
      "Landscape editing for long-form videos, business presentations, tutorials and branded content.",
    icon: MonitorPlay,
    preview: "landscape",
    deliverables: [
      "Landscape video composition",
      "Clear titles and on-screen elements",
      "High-quality final video export",
    ],
  },
  {
    id: "square",
    number: "03",
    title: "Square Videos",
    ratio: "1:1",
    category: "Square",
    platforms: "Social Feeds · Promotional Content",
    description:
      "Balanced square videos prepared for compatible social feed placements and promotional campaigns.",
    icon: Square,
    preview: "square",
    deliverables: [
      "Square video framing",
      "Balanced visual presentation",
      "Social-ready final export",
    ],
  },
];

function FormatPreview({
  format,
  reduceMotion,
}: {
  format: VideoFormat;
  reduceMotion: boolean;
}) {
  return (
    <div className="relative flex h-[325px] w-full items-center justify-center sm:h-[390px] lg:h-[430px]">
      {/* STAGE LIGHTING */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D8E6F1]/70 blur-[75px] sm:h-[340px] sm:w-[340px]" />

        <div className="absolute bottom-[13%] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#AFC2D1] to-transparent" />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={format.id}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.9, y: 12 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            reduceMotion
              ? undefined
              : { opacity: 0, scale: 0.94, y: -8 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.38,
            ease,
          }}
          className="relative z-10"
        >
          {/* FRAME */}

          <div
            className={`relative overflow-hidden bg-[#091E35] shadow-[0_24px_48px_rgba(11,42,82,0.22)] ${
              format.preview === "portrait"
                ? "h-[270px] w-[153px] rounded-[24px] border-[6px] border-[#1B354F] sm:h-[320px] sm:w-[180px]"
                : format.preview === "landscape"
                  ? "h-[170px] w-[294px] rounded-[15px] border-[7px] border-[#1B354F] sm:h-[205px] sm:w-[355px]"
                  : "h-[230px] w-[230px] rounded-[17px] border-[7px] border-[#1B354F] sm:h-[270px] sm:w-[270px]"
            }`}
          >
            {/* DEVICE NOTCH FOR VERTICAL */}

            {format.preview === "portrait" && (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-2 z-20 h-[5px] w-[38px] -translate-x-1/2 rounded-full bg-black/55"
              />
            )}

            {/* CINEMATIC SCENE */}

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_64%_24%,#C5A888_0%,#7693A7_32%,#315674_59%,#102D49_100%)]" />

            <div className="absolute -right-[35%] -top-[25%] h-[95%] w-[105%] -rotate-[28deg] rounded-full border-[32px] border-white/[0.08]" />

            <div className="absolute -bottom-[48%] -left-[30%] h-[95%] w-[105%] rounded-full border-[34px] border-[#D8B78B]/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/95 via-[#07182B]/10 to-transparent" />

            {/* TOP BRAND */}

            <span className="absolute left-4 top-5 text-[7px] font-semibold uppercase tracking-[0.19em] text-white/80 sm:text-[8px]">
              Sharp Rays
            </span>

            {/* CENTRAL EDITORIAL TITLE */}

            <div className="absolute inset-x-3 bottom-[16%] text-center sm:inset-x-5">
              <p className="font-[var(--font-new-york)] text-[18px] font-normal leading-[1.08] tracking-[-0.03em] text-white sm:text-[22px]">
                Made to
                <span className="block italic text-[#E2C69D]">
                  Be Watched.
                </span>
              </p>
            </div>

            {/* BOTTOM INDICATOR */}

            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between border-t border-white/20 pt-2 text-[7px] tracking-[0.1em] text-white/60">
              <span>FINAL CUT</span>
              <span>{format.ratio}</span>
            </div>
          </div>

          {/* SMALL FLOATING LABEL */}

          <div className="absolute -bottom-5 -right-10 flex items-center gap-2 rounded-[11px] border border-[#DCE5EC] bg-white px-3 py-2 shadow-[0_10px_25px_rgba(11,42,82,0.1)] sm:-right-14">
            <Film size={13} className="text-[#B79A72]" />

            <span className="text-[9px] font-medium text-[#0B2A52]">
              {format.ratio} Format
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function VideoEditingFormats() {
  const [selectedId, setSelectedId] = useState("vertical");
  const reduceMotion = Boolean(useReducedMotion());

  const selected =
    videoFormats.find((format) => format.id === selectedId) ??
    videoFormats[0];

  const SelectedIcon = selected.icon;

  return (
    <section
      id="video-editing-formats"
      aria-labelledby="video-editing-formats-heading"
      className="relative isolate overflow-hidden bg-[#FAFCFE] py-16 text-[#0B2A52] sm:py-20 lg:py-24 xl:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-44 top-0 h-[460px] w-[460px] rounded-full bg-[#EAF3FA]/65 blur-[135px]" />
        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F9F1E7]/55 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="mx-auto max-w-[830px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              Video Formats & Final Delivery
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-formats-heading"
            className="mt-5 font-[var(--font-new-york)] text-[2.15rem] font-normal leading-[1.07] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Your Video, Prepared{" "}
            <span className="text-[#B79A72]">
              for Every Screen.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[670px] text-[12px] leading-[1.8] text-[#60778B] sm:text-[14px] sm:leading-7 md:text-[15px]">
            From vertical Reels to widescreen YouTube videos, we prepare
            your edited content in the format that fits your publishing
            platform and intended audience.
          </p>
        </motion.div>

        {/* EDITORIAL FORMAT STUDIO */}

        <div className="mt-12 grid overflow-hidden rounded-[22px] border border-[#DCE6EE] bg-white shadow-[0_18px_55px_rgba(11,42,82,0.055)] sm:mt-14 lg:grid-cols-[0.34fr_0.66fr]">
          {/* LEFT CONTROL PANEL */}

          <div className="border-b border-[#DCE6EE] px-5 py-7 sm:px-7 sm:py-9 lg:border-b-0 lg:border-r lg:px-8">
            <div className="flex items-center gap-2.5">
              <Clapperboard
                size={17}
                strokeWidth={1.5}
                className="text-[#B79A72]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B9EAF]">
                Choose Your Format
              </span>
            </div>

            <h3 className="mt-4 font-[var(--font-new-york)] text-[23px] font-normal leading-[1.2] text-[#0B2A52] sm:text-[26px]">
              One Story.
              <span className="block text-[#B79A72]">
                Different Frames.
              </span>
            </h3>

            {/* FORMAT BUTTONS */}

            <div className="mt-7 space-y-2.5">
              {videoFormats.map((format) => {
                const Icon = format.icon;
                const selectedFormat = selectedId === format.id;

                return (
                  <button
                    key={format.id}
                    type="button"
                    onClick={() => setSelectedId(format.id)}
                    aria-pressed={selectedFormat}
                    className={`group flex w-full items-center gap-3 rounded-[13px] border px-4 py-4 text-left transition-all duration-300 ${
                      selectedFormat
                        ? "border-[#0B2A52] bg-[#0B2A52]"
                        : "border-[#E0E8EE] bg-[#FBFCFE] hover:border-[#C4D3DF]"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${
                        selectedFormat
                          ? "bg-white/10 text-[#DABD93]"
                          : "bg-[#EEF4F8] text-[#6285AD]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[12px] font-semibold ${
                          selectedFormat
                            ? "text-white"
                            : "text-[#0B2A52]"
                        }`}
                      >
                        {format.title}
                      </span>

                      <span
                        className={`mt-1 block text-[10px] ${
                          selectedFormat
                            ? "text-white/65"
                            : "text-[#879BAB]"
                        }`}
                      >
                        {format.category} · {format.ratio}
                      </span>
                    </span>

                    <ChevronRight
                      size={15}
                      className={
                        selectedFormat
                          ? "text-[#DABD93]"
                          : "text-[#9EAFBC]"
                      }
                    />
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-[10px] leading-[1.8] text-[#91A3B1]">
              Select a format to preview its proportions and see
              where it's commonly used.
            </p>
          </div>

          {/* RIGHT VISUAL STUDIO */}

          <div className="flex flex-col">
            {/* FORMAT PREVIEW STAGE */}

            <div className="relative overflow-hidden border-b border-[#E0E8EE] bg-[#F1F6FA]">
              <div className="absolute left-5 top-5 z-10 flex items-center gap-2 sm:left-8 sm:top-7">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8195A6]">
                  Format Preview
                </span>
              </div>

              <div className="absolute right-5 top-5 z-10 rounded-full border border-[#D7E2EA] bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-[#0B2A52] sm:right-8 sm:top-7">
                {selected.ratio}
              </div>

              <FormatPreview
                format={selected}
                reduceMotion={reduceMotion}
              />

              <p className="relative pb-5 text-center text-[9px] uppercase tracking-[0.17em] text-[#91A2B1]">
                Illustrative framing preview
              </p>
            </div>

            {/* FORMAT DETAIL STRIP */}

            <div className="grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`details-${selected.id}`}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, y: -8 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.22,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F5F9] text-[#6285AD]">
                      <SelectedIcon size={18} strokeWidth={1.5} />
                    </span>

                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#B79A72]">
                        {selected.category} Format
                      </span>

                      <h4 className="mt-1 font-[var(--font-new-york)] text-[20px] font-normal text-[#0B2A52]">
                        {selected.title}
                      </h4>
                    </div>
                  </div>

                  <p className="mt-4 max-w-[360px] text-[12px] leading-[1.8] text-[#60778B]">
                    {selected.description}
                  </p>

                  <p className="mt-4 text-[10px] font-medium leading-[1.7] text-[#8C9EAE]">
                    {selected.platforms}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="lg:border-l lg:border-[#E4EBF0] lg:pl-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B79A72]">
                  Final Delivery Considerations
                </p>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`delivery-${selected.id}`}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, y: -8 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.22,
                    }}
                    className="mt-4 space-y-3"
                  >
                    {selected.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#B79A72]"
                        />

                        <span className="text-[12px] leading-[1.7] text-[#5D7489]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                <p className="mt-4 text-[10px] leading-[1.7] text-[#97A7B5]">
                  Final export specifications are agreed based on your project.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION FOOTER */}

        <div className="mt-10 flex flex-col gap-5 border-t border-[#DDE6ED] pt-7 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-[var(--font-new-york)] text-[21px] font-normal leading-[1.3] text-[#0B2A52] sm:text-[24px]">
              Your Video, Ready for the Right Platform.
            </h3>

            <p className="mt-2 max-w-[600px] text-[12px] leading-[1.8] text-[#64798D] sm:text-[13px]">
              Share where you'll publish your videos, and we'll discuss
              the editing and delivery formats that fit your project.
            </p>
          </div>

          <Link
            href="/contact?service=video-editing#contact-form"
            title="Discuss Your Professional Video Editing Requirements"
            className="group inline-flex min-h-[48px] w-fit shrink-0 items-center justify-center gap-3 rounded-[14px] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17436F] hover:!text-white sm:text-[13px]"
          >
            <span className="!text-white">
              Discuss My Video Project
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
              className="!text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
