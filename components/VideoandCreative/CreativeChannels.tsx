"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Megaphone,
  Monitor,
  Package,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

type UseCase = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

const useCases: UseCase[] = [
  {
    number: "01",
    title: "Social Media",
    description:
      "Reels, Shorts, educational clips, branded series and platform-native videos.",
    icon: Smartphone,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    number: "02",
    title: "Paid Advertising",
    description:
      "Creative variations, hooks, product videos and conversion-focused edits.",
    icon: Megaphone,
    accent: "#C7794A",
    soft: "#FFF1E7",
  },
  {
    number: "03",
    title: "Products",
    description:
      "Demonstrations, concept visuals, feature videos and launch creative.",
    icon: Package,
    accent: "#7B61C9",
    soft: "#F2EEFF",
  },
  {
    number: "04",
    title: "Services",
    description:
      "Explainers that make difficult or intangible offers easier to understand.",
    icon: Briefcase,
    accent: "#3F9A7A",
    soft: "#EAF8F2",
  },
  {
    number: "05",
    title: "Founders & Experts",
    description:
      "Interviews, talking-head edits, insights, thought leadership and repurposed content.",
    icon: Users,
    accent: "#C49A3E",
    soft: "#FFF8E5",
  },
  {
    number: "06",
    title: "Websites",
    description:
      "Hero videos, service explainers, background visuals and product demonstrations.",
    icon: Monitor,
    accent: "#4E9AA8",
    soft: "#EAF8FA",
  },
  {
    number: "07",
    title: "Campaigns",
    description:
      "Visual concepts, launch assets and multiple creative formats around one central idea.",
    icon: Rocket,
    accent: "#C86F86",
    soft: "#FFF0F4",
  },
];

function UseCaseItem({
  item,
  index,
  reduceMotion,
}: {
  item: UseCase;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : index * 0.05,
        ease,
      }}
      className="
        group
        relative
        border-b
        border-[#DCE6ED]
        py-5

        transition-colors
        duration-300

        sm:py-6

        lg:border-b-0
        lg:border-r
        lg:px-5
        lg:py-1
        lg:last:border-r-0
      "
    >
      <div className="flex items-start gap-4 lg:block">
        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[12px]
            border
            border-black/[0.06]

            shadow-[0_6px_18px_rgba(11,42,82,0.035)]

            transition-all
            duration-300
            group-hover:-translate-y-1
            lg:h-11
            lg:w-11
          "
          style={{
            backgroundColor: item.soft,
            color: item.accent,
          }}
        >
          <Icon size={17} strokeWidth={1.65} />
        </span>

        <div className="min-w-0 flex-1 lg:mt-5">
          <div className="flex items-center justify-between gap-3 lg:justify-start">
            <span
              style={{
                ...newYorkFont,
                color: item.accent,
              }}
              className="
                text-[0.47rem]
                font-medium
                uppercase
                tracking-[0.18em]
              "
            >
              Use Case
            </span>

          </div>

          <h3
            style={newYorkFont}
            className="
              mt-2
              text-[1.12rem]
              font-normal
              leading-[1.15]
              tracking-[-0.025em]
              text-[#0B2A52]
              sm:text-[1.2rem]
              lg:text-[1.18rem]
              xl:text-[1.28rem]
            "
          >
            {item.title}
          </h3>

          <p
            style={newYorkFont}
            className="
              mt-2.5
              max-w-[340px]
              text-[0.73rem]
              leading-[1.6]
              text-[#60758A]
              sm:text-[0.77rem]
            "
          >
            {item.description}
          </p>

          <span
            className="
              mt-4
              block
              h-[2px]
              w-7
              rounded-full
              transition-all
              duration-300
              group-hover:w-12
            "
            style={{
              backgroundColor: item.accent,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function AiVideoUseCases() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="ai-video-use-cases"
      aria-labelledby="ai-video-use-cases-heading"
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
            top-[-260px]
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#EEF5FA]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-[240px]
            bottom-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#B79A72]/[0.04]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
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
              Where AI Video Can Fit
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
            id="ai-video-use-cases-heading"
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
            One Production System.{" "}
            <span className="font-normal italic text-[#B79A72]">
              Different Business Jobs.
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
            AI video and editing can support different parts of your marketing.
            The format changes around the job while the brand stays consistent.
          </p>
        </motion.div>

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
            delay: reduceMotion ? 0 : 0.08,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[1160px]
            sm:mt-16
          "
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px flex-1 bg-[#D7E3EB]" />

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
                rounded-full
                border
                border-[#C9D9E5]
                bg-white
                px-4
                py-2.5
                shadow-[0_8px_26px_rgba(11,42,82,0.05)]
                sm:px-5
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#B79A72]" />

              <span
                style={newYorkFont}
                className="
                  text-[0.5rem]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#0B2A52]
                  sm:text-[0.55rem]
                "
              >
                One Production System
              </span>
            </div>

            <span className="h-px flex-1 bg-[#D7E3EB]" />
          </div>

       
        </motion.div>

        <div
          className="
            mx-auto
            mt-12
            max-w-[1220px]
            border-t
            border-[#DCE6ED]
            sm:mt-12
          "
        >
          <div
            className="
              grid
              grid-cols-1

              pb-8

              sm:grid-cols-2
              sm:pb-10

              lg:grid-cols-4
              lg:pb-12
            "
          >
            {useCases.slice(0, 4).map((item, index) => (
              <UseCaseItem
                key={item.number}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <div
            className="
              relative

              grid
              grid-cols-1

              border-t
              border-[#DCE6ED]

              pt-8

              sm:grid-cols-2
              sm:pt-10

              lg:grid-cols-3
              lg:px-[12.5%]
              lg:pt-12
            "
          >
            {useCases.slice(4).map((item, index) => (
              <UseCaseItem
                key={item.number}
                item={item}
                index={index + 4}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

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
            mt-14
            max-w-[900px]
            text-center
            sm:mt-14
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
            Different channels need different edits.{" "}
            <span className="italic text-[#B79A72]">
              The brand should still feel like the same brand.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}