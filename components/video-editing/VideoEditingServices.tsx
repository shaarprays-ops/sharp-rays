"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  AudioLines,
  Captions,
  Clapperboard,
  Film,
  MonitorPlay,
  PlaySquare,
  Scissors,
  Smartphone,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type EditingService = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  background: string;
  iconBackground: string;
  slug: string;
};

const editingServices: EditingService[] = [
  {
    number: "01",
    title: "Reels & Shorts Editing",
    description:
      "Short-form videos with sharper hooks, engaging captions and pacing that keeps the story moving.",
    icon: Smartphone,
    accent: "#397CC0",
    background: "#EEF6FF",
    iconBackground: "#DDEDFC",
    slug: "reels-shorts-editing",
  },
  {
    number: "02",
    title: "YouTube Video Editing",
    description:
      "Structured long-form editing for tutorials, vlogs, educational videos and creator content.",
    icon: PlaySquare,
    accent: "#8365C5",
    background: "#F4F0FF",
    iconBackground: "#E8DEFF",
    slug: "youtube-video-editing",
  },
  {
    number: "03",
    title: "Social Media Video Editing",
    description:
      "Consistent branded video content adapted for different social media audiences and platforms.",
    icon: MonitorPlay,
    accent: "#318B73",
    background: "#EDF9F4",
    iconBackground: "#DDF2E8",
    slug: "social-media-video-editing",
  },
  {
    number: "04",
    title: "Video Ads Editing",
    description:
      "Promotional ads with attention-focused openings, clear messaging and purposeful calls to action.",
    icon: Clapperboard,
    accent: "#C57A43",
    background: "#FFF3E9",
    iconBackground: "#FBE3CD",
    slug: "video-ads-editing",
  },
  {
    number: "05",
    title: "Podcast & Interview Editing",
    description:
      "Multi-camera editing, audio refinement and structured conversations for polished podcast videos.",
    icon: AudioLines,
    accent: "#338EA8",
    background: "#EDF9FC",
    iconBackground: "#D8F0F6",
    slug: "podcast-interview-editing",
  },
  {
    number: "06",
    title: "Corporate & Brand Videos",
    description:
      "Company introductions, promotional content and brand stories edited with professional finishing.",
    icon: Film,
    accent: "#AF8540",
    background: "#FFF9EB",
    iconBackground: "#F9ECCB",
    slug: "corporate-brand-video-editing",
  },
  {
    number: "07",
    title: "Motion Graphics & Captions",
    description:
      "Animated titles, subtitles, branded graphics and visual elements that make messages clearer.",
    icon: Captions,
    accent: "#BC6489",
    background: "#FFF0F6",
    iconBackground: "#FADFEB",
    slug: "motion-graphics-captions",
  },
  {
    number: "08",
    title: "Video Repurposing",
    description:
      "Turn long recordings into highlights, short clips and platform-ready content for wider use.",
    icon: Scissors,
    accent: "#5978BA",
    background: "#F0F3FF",
    iconBackground: "#E0E7FC",
    slug: "video-repurposing",
  },
];

function EditingServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: EditingService;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  const href = `/contact?service=video-editing&editing=${encodeURIComponent(
    service.slug
  )}#contact-form`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 4) * 0.065,
        ease,
      }}
      className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[22px] border border-[#0B2A52]/[0.055] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(11,42,82,0.10)] sm:min-h-[295px] sm:p-6 xl:min-h-[305px] xl:p-7"
      style={{ backgroundColor: service.background }}
    >
      {/* DECORATIVE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-50 transition-transform duration-700 group-hover:scale-125"
        style={{
          background: `radial-gradient(circle, ${service.iconBackground}, transparent 72%)`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-8 h-36 w-36 rounded-full border opacity-20 transition-transform duration-500 group-hover:rotate-12"
        style={{ borderColor: service.accent }}
      />

      {/* TOP ROW */}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] shadow-[0_5px_15px_rgba(11,42,82,0.035)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
          style={{
            backgroundColor: service.iconBackground,
            color: service.accent,
          }}
        >
          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <span
          style={{
            ...newYorkFont,
            color: service.accent,
          }}
          className="text-[17px] font-normal italic opacity-65"
        >
          {service.number}
        </span>
      </div>

      {/* SERVICE TITLE */}

      <h3
        style={newYorkFont}
        className="relative z-10 mt-8 max-w-[260px] text-[20px] font-normal leading-[1.16] tracking-[-0.025em] text-[#0B2A52] sm:text-[21px] xl:text-[22px]"
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}

      <p className="relative z-10 mt-3 max-w-[290px] text-[11.5px] leading-[1.75] text-[#536B80] sm:text-[12px]">
        {service.description}
      </p>

      {/* BOTTOM ACTION */}

      <div className="relative z-10 mt-auto pt-7">
        <div className="mb-4 h-px w-full bg-[#0B2A52]/[0.085]" />

        <Link
          href={href}
          title={`Enquire About ${service.title}`}
          aria-label={`Enquire About ${service.title}`}
          className="flex items-center justify-between gap-4"
        >
          <span className="text-[11px] font-semibold text-[#0B2A52] transition-colors duration-300 group-hover:text-[#6285AD]">
            Discuss This Service
          </span>

          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/85 shadow-[0_4px_12px_rgba(11,42,82,0.045)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: service.accent }}
          >
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}

export default function VideoEditingServices() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-services"
      aria-labelledby="video-editing-services-heading"
      className="relative isolate overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 md:py-24 lg:py-28"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-280px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#EFF6FB]/60 blur-[145px]" />

        <div className="absolute -bottom-[240px] -right-[210px] h-[460px] w-[460px] rounded-full bg-[#FBF2E6]/45 blur-[130px]" />
      </div>

      {/* MAIN CONTAINER */}

      <div className="relative mx-auto w-full max-w-[1380px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* HEADER */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B79A72]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px]">
              Our Video Editing Services
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2
            id="video-editing-services-heading"
            style={newYorkFont}
            className="mx-auto mt-5 max-w-[810px] text-[2.15rem] font-normal leading-[1.05] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Every Video Has a Purpose.{" "}
            <span className="text-[#B79A72]">
              We Edit for It.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[12px] leading-[1.8] text-[#61788D] sm:text-[14px] sm:leading-7 md:text-[15px]">
            Explore our professional video editing services for social media,
            YouTube, advertising, podcasts and brand content — all built
            around your footage, audience and platform.
          </p>
        </motion.div>

        {/* SECTION INDICATOR */}

        <div className="mt-12 flex items-center justify-between gap-4 border-b border-[#DFE7EE] pb-4 sm:mt-14">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#879AAB]">
            Find Your Editing Service
          </span>

          <span className="text-[9px] font-medium tracking-[0.14em] text-[#B79A72]">
            08 Services
          </span>
        </div>

        {/* COLOURFUL CARD GRID */}

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 xl:gap-6">
          {editingServices.map((service, index) => (
            <EditingServiceCard
              key={service.number}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease }}
          className="mt-12 flex flex-col gap-5 border-t border-[#E0E8EF] pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3
              style={newYorkFont}
              className="text-[21px] font-normal leading-[1.25] text-[#0B2A52] sm:text-[24px]"
            >
              Have a Different Type of Video?
            </h3>

            <p className="mt-2 max-w-[630px] text-[12px] leading-[1.7] text-[#647A8F] sm:text-[13px]">
              Tell us what you've recorded and how you want to use it.
              We'll help plan the right editing approach.
            </p>
          </div>

          <Link
            href="/contact?service=video-editing#contact-form"
            title="Discuss Your Professional Video Editing Project"
            className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-[14px] border border-[#0B2A52] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium !text-white shadow-[0_10px_25px_rgba(11,42,82,0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#17436F] hover:!text-white sm:text-[13px]"
          >
            <span className="!text-white">
              Discuss Your Project
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="!text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}