"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Package,
  Play,
  RefreshCw,
  Scissors,
  Settings,
  Sparkles,
  Type,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

type Service = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  href: string;

  bg: string;
  border: string;
  iconBg: string;
  accent: string;
  accentText: string;
  chipBg: string;
};

const services: Service[] = [
  {
    category: "AI Creation",
    title: "AI Video Creation",
    subtitle: "Turn an idea into a visual starting point.",
    description:
      "We use AI-assisted tools to develop scenes, concepts and video assets around a clear creative direction.",
    icon: Sparkles,
    href: "/services/ai-video-editing/ai-video-creation",
    bg: "bg-[#EAF5FF]",
    border: "border-[#78B7EA]",
    iconBg: "bg-[#CFE9FF]",
    accent: "bg-[#62A8E5]",
    accentText: "text-[#2E78B7]",
    chipBg: "bg-[#D9EDFF]",
  },
  {
    category: "Editing",
    title: "Professional Video Editing",
    subtitle: "Shape raw material into something worth watching.",
    description:
      "Footage, audio and visual assets are edited into a polished story built around the intended audience and objective.",
    icon: Scissors,
    href: "/services/ai-video-editing/professional-video-editing",
    bg: "bg-[#FFF1E5]",
    border: "border-[#E4A878]",
    iconBg: "bg-[#FADDC4]",
    accent: "bg-[#D9935B]",
    accentText: "text-[#A9622E]",
    chipBg: "bg-[#FFE4CE]",
  },
  {
    category: "Short Form",
    title: "Short-Form Video Editing",
    subtitle: "Make every second earn attention.",
    description:
      "Tighter edits for Reels, Shorts and vertical video where pace, hooks and clarity matter quickly.",
    icon: Play,
    href: "/services/ai-video-editing/short-form-video-editing",
    bg: "bg-[#F2EEFF]",
    border: "border-[#A997E8]",
    iconBg: "bg-[#DDD4FF]",
    accent: "bg-[#8D72D9]",
    accentText: "text-[#6B50BC]",
    chipBg: "bg-[#E4DCFF]",
  },
  {
    category: "Social",
    title: "Social Media Video Editing",
    subtitle: "Create content that feels native to the feed.",
    description:
      "Video is adapted for the pace, format and viewing behaviour of the platforms where it will be published.",
    icon: Users,
    href: "/services/ai-video-editing/social-media-video-editing",
    bg: "bg-[#EAF9F3]",
    border: "border-[#79C5A2]",
    iconBg: "bg-[#CFEFE0]",
    accent: "bg-[#61B08C]",
    accentText: "text-[#3D8768]",
    chipBg: "bg-[#D8F2E7]",
  },
  {
    category: "Performance",
    title: "Advertising & Performance Video",
    subtitle: "Creative designed to be tested and improved.",
    description:
      "We develop video variations around campaign messages, audience angles and performance objectives.",
    icon: BarChart3,
    href: "/services/ai-video-editing/advertising-performance-video",
    bg: "bg-[#FFF0F4]",
    border: "border-[#DF93A7]",
    iconBg: "bg-[#FAD5DF]",
    accent: "bg-[#D67991]",
    accentText: "text-[#AD526A]",
    chipBg: "bg-[#F9DDE5]",
  },
  {
    category: "Concept",
    title: "AI Product & Concept Videos",
    subtitle: "Show the idea before traditional production exists.",
    description:
      "Useful for visualising products, environments and concepts when traditional footage is unavailable or unnecessary.",
    icon: Package,
    href: "/services/ai-video-editing/ai-product-concept-videos",
    bg: "bg-[#EAF9FB]",
    border: "border-[#74BDCA]",
    iconBg: "bg-[#CFECEF]",
    accent: "bg-[#58A9B8]",
    accentText: "text-[#347F8D]",
    chipBg: "bg-[#D8F1F4]",
  },
  {
    category: "Motion",
    title: "Motion Graphics & Visual Effects",
    subtitle: "Give information movement where it helps.",
    description:
      "Motion, transitions and visual effects are used to clarify ideas, add emphasis and strengthen presentation.",
    icon: Sparkles,
    href: "/services/ai-video-editing/motion-graphics-visual-effects",
    bg: "bg-[#FFF9E4]",
    border: "border-[#DCC05D]",
    iconBg: "bg-[#F8E9B5]",
    accent: "bg-[#D0AD45]",
    accentText: "text-[#9D7B24]",
    chipBg: "bg-[#F9EDC1]",
  },
  {
    category: "Repurposing",
    title: "Video Repurposing",
    subtitle: "One recording. More useful content.",
    description:
      "Longer videos and existing recordings are reshaped into shorter edits for different channels and use cases.",
    icon: RefreshCw,
    href: "/services/ai-video-editing/video-repurposing",
    bg: "bg-[#F1F8E9]",
    border: "border-[#9EBF70]",
    iconBg: "bg-[#DCEBCB]",
    accent: "bg-[#85AA58]",
    accentText: "text-[#5F813A]",
    chipBg: "bg-[#E3EFD5]",
  },
  {
    category: "Accessibility",
    title: "Captions, Subtitles & Text Treatment",
    subtitle: "Make the message work with or without sound.",
    description:
      "Captions, subtitles and on-screen text help make the content clearer, more usable and easier to follow.",
    icon: Type,
    href: "/services/ai-video-editing/captions-subtitles-text-treatment",
    bg: "bg-[#EDF4FA]",
    border: "border-[#7EA4C3]",
    iconBg: "bg-[#D6E7F4]",
    accent: "bg-[#6D98BA]",
    accentText: "text-[#476F91]",
    chipBg: "bg-[#DDEBF5]",
  },
  {
    category: "Enhancement",
    title: "AI-Assisted Enhancement",
    subtitle: "Improve the material you already have.",
    description:
      "AI-assisted tools can support cleanup, enhancement and selected production tasks where they improve the final result.",
    icon: Settings,
    href: "/services/ai-video-editing/ai-assisted-enhancement",
    bg: "bg-[#EFF2FF]",
    border: "border-[#94A7E8]",
    iconBg: "bg-[#DCE3FF]",
    accent: "bg-[#7589D8]",
    accentText: "text-[#5368B8]",
    chipBg: "bg-[#E4E9FF]",
  },
];

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : index * 0.045,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className={`
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[20px]

        border

        ${service.bg}
        ${service.border}

        p-5

        shadow-[0_12px_34px_rgba(11,42,82,0.06)]

        transition-all
        duration-500

        hover:shadow-[0_20px_48px_rgba(11,42,82,0.09)]

        sm:p-5

        xl:h-[365px]
        xl:min-h-[365px]
        xl:max-h-[365px]
        xl:p-[18px]

        2xl:h-[375px]
        2xl:min-h-[375px]
        2xl:max-h-[375px]
        2xl:p-5
      `}
    >
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none

          absolute
          -right-16
          -top-16

          h-40
          w-40

          rounded-full

          ${service.accent}

          opacity-[0.10]
          blur-[38px]

          transition-all
          duration-500

          group-hover:scale-125
          group-hover:opacity-[0.16]
        `}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* icon */}
        <div className="flex items-start justify-between gap-4">
          <motion.span
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.08,
                    rotate: -5,
                  }
            }
            className={`
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center

              rounded-[13px]

              ${service.iconBg}
              ${service.accentText}

              shadow-[0_7px_20px_rgba(11,42,82,0.04)]

              sm:h-10
              sm:w-10

              xl:h-9
              xl:w-9
              sm:rounded-[13px]
            `}
          >
            <Icon size={17} strokeWidth={1.7} />
          </motion.span>
        </div>

        {/* category */}
        <span
          className={`
            mt-4
            block

            text-[0.53rem]
            font-semibold
            uppercase
            tracking-[0.18em]

            ${service.accentText}
          `}
        >
          {service.category}
        </span>

        {/* title */}
        <h3
          style={newYorkFont}
          className="
            mt-2
            max-w-[420px]

            text-[1.22rem]
            font-normal
            leading-[1.12]
            tracking-[-0.03em]

            text-[#0B2A52]

            sm:text-[1.3rem]

            xl:min-h-[50px]
            xl:text-[1.08rem]
            xl:leading-[1.14]

            2xl:text-[1.14rem]
          "
        >
          {service.title}
        </h3>

        {/* highlighted subtitle */}
        <div
          className={`
            mt-3

            flex
            min-h-[58px]
            items-center

            rounded-[12px]

            ${service.chipBg}

            px-3
            py-2.5

            xl:min-h-[62px]
          `}
        >
          <p
            className={`
              text-[0.7rem]
              font-semibold
              leading-[1.45]

              xl:text-[0.66rem]

              ${service.accentText}
            `}
          >
            {service.subtitle}
          </p>
        </div>

        {/* description */}
        <p
          style={newYorkFont}
          className="
            mt-3

            text-[0.76rem]
            leading-[1.58]

            text-[#5E7488]

            xl:min-h-[48px]
            xl:line-clamp-3
            xl:text-[0.66rem]
            xl:leading-[1.5]

            2xl:text-[0.69rem]
          "
        >
          {service.description}
        </p>

        {/* footer */}
        <div
          className="
            mt-auto
            flex
            min-h-[52px]
            shrink-0
            items-center
            justify-between
            gap-3

            border-t
            border-black/[0.08]

            pt-3.5
          "
        >
          <Link
            href={service.href}
            style={newYorkFont}
            className="
              group/learn

              inline-flex
              shrink-0
              items-center
              gap-2

              whitespace-nowrap

              text-[0.78rem]
              font-semibold

              text-[#0B2A52]

              transition-colors
              duration-300

              hover:text-[#183E64]

              sm:text-[0.84rem]

              xl:text-[0.72rem]

              2xl:text-[0.76rem]
            "
          >
            <span>Learn More</span>

            <ArrowRight
              size={14}
              strokeWidth={1.7}
              className="
                transition-transform
                duration-300

                group-hover/learn:translate-x-1
              "
            />
          </Link>

          <Link
            href="/contact"
            aria-label={`Contact Sharp Rays about ${service.title}`}
            className={`
              group/contact

              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-full

              ${service.accent}

              text-[#0B2A52]

              shadow-[0_10px_24px_rgba(11,42,82,0.10)]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:scale-[1.04]
              hover:shadow-[0_14px_30px_rgba(11,42,82,0.15)]

              sm:h-11
              sm:w-11
            `}
          >
            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300

                group-hover/contact:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function AiVideoEditingServices() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-editing-services"
      aria-labelledby="ai-video-editing-services-heading"
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
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div
          className="
            absolute
            left-1/2
            top-[3%]

            h-[480px]
            w-[980px]

            -translate-x-1/2

            rounded-full

            bg-[#F6F8FA]

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            bottom-[5%]

            h-[500px]
            w-[500px]

            rounded-full

            bg-[#B79A72]/[0.035]

            blur-[110px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1580px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-8
          2xl:px-12
        "
      >
        {/* header */}
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
            max-w-[1050px]

            text-center
          "
        >
          <div className="flex items-center justify-center gap-4">
            <span
              className="
                h-px
                w-10

                bg-gradient-to-r
                from-transparent
                to-[#B79A72]
              "
            />

            <span
              style={newYorkFont}
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              Our AI Video & Editing Services
            </span>

            <span
              className="
                h-px
                w-10

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]
              "
            />
          </div>

          <h2
            id="ai-video-editing-services-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[1050px]

              text-[2.2rem]
              font-medium
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            From AI Creation to Final Edit.{" "}
            <span
              className="
                font-serif
                font-normal
                italic

                text-[#B79A72]
              "
            >
              Connected.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[790px]

              text-[0.9rem]
              leading-[1.72]

              text-[#5A7186]

              sm:text-[0.96rem]
            "
          >
            Creation, editing, repurposing and enhancement work together around
            the audience, platform and objective behind the video.
          </p>
        </motion.div>

        {/* service cards */}
        <div
          className="
            mx-auto
            mt-12
            max-w-[1500px]

            grid
            auto-rows-fr
            grid-cols-1
            items-stretch
            gap-4

            sm:mt-14
            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-3

            xl:mt-16
            xl:grid-cols-5
            xl:gap-4

            2xl:gap-5
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ending */}
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mx-auto
            mt-14
            max-w-[940px]

            text-center

            sm:mt-16
          "
        >
          <p
            style={newYorkFont}
            className="
              mx-auto
              max-w-[880px]

              text-[1.25rem]
              leading-[1.35]
              tracking-[-0.025em]

              text-[#0B2A52]

              sm:text-[1.5rem]
            "
          >
            The format changes. The goal stays the same —{" "}
            <span className="italic text-[#B18458]">
              make the video worth watching.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}