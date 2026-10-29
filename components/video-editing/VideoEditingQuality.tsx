
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  AudioLines,
  Captions,
  Check,
  Film,
  Palette,
  Scissors,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type Detail = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const leftDetails: Detail[] = [
  {
    number: "01",
    title: "Clean Cuts & Pacing",
    description:
      "Thoughtful scene selection and natural pacing that keeps your message clear.",
    icon: Scissors,
  },
  {
    number: "02",
    title: "Colour Correction",
    description:
      "Balanced exposure, consistent tones and polished visuals across every shot.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Audio Enhancement",
    description:
      "Clear dialogue, balanced sound levels and music that complements the story.",
    icon: AudioLines,
  },
];

const rightDetails: Detail[] = [
  {
    number: "04",
    title: "Captions & Titles",
    description:
      "Readable subtitles, clean titles and on-screen text that supports your content.",
    icon: Captions,
  },
  {
    number: "05",
    title: "Motion & Transitions",
    description:
      "Purposeful transitions and subtle motion graphics without distracting effects.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Platform-Ready Exports",
    description:
      "Final files prepared in the right formats, aspect ratios and resolutions.",
    icon: SlidersHorizontal,
  },
];

function DetailItem({
  item,
  index,
  reduced,
  side,
}: {
  item: Detail;
  index: number;
  reduced: boolean;
  side: "left" | "right";
}) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 16,
            }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduced ? 0 : 0.55,
        delay: reduced ? 0 : index * 0.08,
        ease,
      }}
      className="group relative border-b border-[#DFE7ED] py-6 first:pt-0 last:border-b-0 sm:py-7 lg:first:pt-6"
    >
      <div
        className={`flex items-start gap-4 ${
          side === "left"
            ? "lg:flex-row-reverse lg:text-right"
            : ""
        }`}
      >
        <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#DDE6ED] bg-white text-[#6285AD] transition-all duration-300 group-hover:border-[#B79A72] group-hover:bg-[#0B2A52] group-hover:text-white">
          <Icon
            size={19}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B79A72]">
            DETAIL {item.number}
          </span>

          <h3 className="mt-2 font-[var(--font-new-york)] text-[19px] font-normal leading-[1.2] tracking-[-0.02em] text-[#0B2A52] sm:text-[21px] xl:text-[22px]">
            {item.title}
          </h3>

          <p className="mt-2.5 text-[12px] leading-[1.8] text-[#64798D] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      </div>

      <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

function EditingShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-[455px] items-center justify-center py-5 sm:py-9 lg:py-0">
      {/* OUTER VISUAL ACCENTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DBE5ED]" />

        <div className="absolute left-1/2 top-1/2 h-[79%] w-[79%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E4EAF0]" />

        <div className="absolute left-[4%] top-[20%] h-2 w-2 rounded-full bg-[#B79A72]" />

        <div className="absolute bottom-[18%] right-[5%] h-1.5 w-1.5 rounded-full bg-[#6285AD]" />
      </div>

      {/* THE CENTRAL FRAME */}

      <div className="relative z-10 w-[78%] rotate-[-3deg] rounded-[22px] border-[7px] border-white bg-[#102C4B] p-2 shadow-[0_28px_65px_rgba(11,42,82,0.16)] transition-transform duration-500 hover:rotate-0 sm:rounded-[26px] sm:border-[9px]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[13px] bg-[#183A59] sm:rounded-[17px]">
          {/* CINEMATIC ABSTRACT FRAME */}

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_22%,#B29B84_0%,#7795A6_24%,#315574_48%,#102C4B_78%)]" />

          <div className="absolute -right-[40%] -top-[30%] h-[92%] w-[115%] -rotate-[32deg] rounded-full border-[35px] border-white/[0.075] sm:border-[45px]" />

          <div className="absolute -bottom-[50%] -left-[45%] h-[95%] w-[120%] rotate-12 rounded-full border-[35px] border-[#B79A72]/20 sm:border-[50px]" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06192E]/95 via-[#0B2A52]/10 to-transparent" />

          {/* TOP LABEL */}

          <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-2">
            <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Sharp Rays
            </span>

            <Film
              size={15}
              strokeWidth={1.5}
              className="text-[#E2C69E]"
            />
          </div>

          {/* CENTRE TYPOGRAPHY */}

          <div className="absolute inset-x-0 bottom-[17%] px-5 text-center sm:px-7">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#E0C49D] sm:text-[9px]">
              The Art of Editing
            </span>

            <p className="mt-4 font-[var(--font-new-york)] text-[30px] font-normal leading-[1.03] tracking-[-0.04em] text-white min-[375px]:text-[35px] sm:text-[44px]">
              Every Frame
              <span className="block italic text-[#DCC19A]">
                Matters.
              </span>
            </p>

            <span className="mx-auto mt-5 block h-px w-12 bg-[#DCC19A]/75" />
          </div>

          {/* BOTTOM DETAILS */}

          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 border-t border-white/20 pt-3 text-[8px] tracking-[0.1em] text-white/55">
            <span>PICTURE / SOUND / STORY</span>
            <span>01:01</span>
          </div>
        </div>
      </div>

      {/* FLOATING TAG */}

      <div className="absolute bottom-[8%] right-[-1%] z-20 flex items-center gap-2.5 rounded-[13px] border border-[#DEE7ED] bg-white px-3 py-2.5 shadow-[0_12px_30px_rgba(11,42,82,0.1)] sm:right-[-4%] sm:px-4 sm:py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F5F9] text-[#B79A72]">
          <Check size={15} strokeWidth={1.8} />
        </span>

        <div>
          <p className="text-[10px] font-medium text-[#0B2A52]">
            Professional Finish
          </p>
          <p className="mt-0.5 text-[9px] text-[#8497A8]">
            Detail in Every Edit
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoEditingQuality() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-quality"
      aria-labelledby="video-editing-quality-heading"
      className="relative isolate overflow-hidden bg-[#FAFCFE] py-16 text-[#0B2A52] sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#EEF5FA]/70 blur-[130px]" />

        <div className="absolute -right-44 bottom-0 h-[430px] w-[430px] rounded-full bg-[#F8F2EB]/65 blur-[135px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* SECTION HEADER */}

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.65, ease }}
          className="mx-auto max-w-[840px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[10px]">
              What Makes a Professional Edit
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-quality-heading"
            className="mt-5 font-[var(--font-new-york)] text-[2.15rem] font-normal leading-[1.07] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Every Detail Counts.
            <span className="block text-[#B79A72]">
              Every Frame Gets Attention.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[670px] text-[12px] leading-[1.8] text-[#60778B] sm:text-[14px] sm:leading-7 md:text-[15px]">
            Great editing brings picture, sound and storytelling
            together. We refine the details that make your footage
            clearer, more consistent and ready for your audience.
          </p>
        </motion.div>

        {/* THREE-COLUMN EDITORIAL SHOWCASE */}

        <div className="mt-12 grid items-center gap-8 sm:mt-16 lg:grid-cols-[1fr_1.14fr_1fr] lg:gap-6 xl:gap-10">
          {/* LEFT DETAILS */}

          <div className="order-2 lg:order-1">
            {leftDetails.map((item, index) => (
              <DetailItem
                key={item.number}
                item={item}
                index={index}
                reduced={reduced}
                side="left"
              />
            ))}
          </div>

          {/* CENTRAL VISUAL */}

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduced ? 0 : 0.8, ease }}
            className="order-1 lg:order-2"
          >
            <EditingShowcase />
          </motion.div>

          {/* RIGHT DETAILS */}

          <div className="order-3">
            {rightDetails.map((item, index) => (
              <DetailItem
                key={item.number}
                item={item}
                index={index}
                reduced={reduced}
                side="right"
              />
            ))}
          </div>
        </div>

        {/* CLEAN CONCLUSION */}

        <div className="mt-12 flex flex-col gap-6 border-t border-[#DCE5ED] pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div>
            <h3 className="font-[var(--font-new-york)] text-[21px] font-normal leading-[1.3] text-[#0B2A52] sm:text-[24px]">
              Your Footage. Professionally Finished.
            </h3>

            <p className="mt-2 max-w-[560px] text-[12px] leading-[1.8] text-[#64798D] sm:text-[13px]">
              Share your footage, preferred editing style and project
              requirements. Let's create a final video that fits your goals.
            </p>
          </div>

          <Link
            href="/contact?service=video-editing#contact-form"
            title="Get a Professional Video Editing Quote"
            className="group inline-flex min-h-[48px] w-fit shrink-0 items-center justify-center gap-3 rounded-[14px] border border-[#0B2A52] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white shadow-[0_10px_26px_rgba(11,42,82,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17436F] sm:text-[13px]"
          >
            <span className="!text-white">
              Get My Editing Quote
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="!text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
