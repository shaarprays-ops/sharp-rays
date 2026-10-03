"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Search,
  Megaphone,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    number: "01",
    title: "Sharp Rays Website",
    type: "Internal Project",
    services: ["Website Development", "SEO"],
    description:
      "Clearer service journeys, responsive development and scalable website architecture built around multiple Sharp Rays services.",
    href: "/work/sharp-rays-website",
    icon: Code2,
    accent: "#4E8FA1",
    soft: "#ECF7FA",
  },

  {
    number: "02",
    title: "Double Trouble Studio",
    type: "Client Work",
    services: ["SEO", "Website"],
    description:
      "Search strategy, technical optimization, service-page improvements and a clearer content structure designed to strengthen organic visibility.",
    href: "/work/dts-seo",
    icon: Search,
    accent: "#3F8A72",
    soft: "#EAF7F1",
  },

  {
    number: "03",
    title: "RNK Rentals",
    type: "Client Work",
    services: ["SEO", "Social", "Website"],
    description:
      "Improving rental-service visibility through SEO, clearer website journeys and a more consistent digital presence across social channels.",
    href: "/work/rnk-rentals-seo",
    icon: Megaphone,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
];

export default function SelectedWorkSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-white

        py-8
        sm:py-10
        md:py-12
        lg:py-14
      "
    >
     
      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1360px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease,
          }}
          className="
            mx-auto
            max-w-[920px]

            text-center
          "
        >
          {/* EYEBROW */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8

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
                tracking-[0.25em]

                text-[#B79A72]

                sm:text-[10px]
              "
            >
              Selected Work
            </span>

            <span
              className="
                h-px
                w-8

                bg-gradient-to-l
                from-transparent
                to-[#B79A72]

                sm:w-10
              "
            />
          </div>

          {/* HEADING */}

          <h2
            id="selected-work-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[900px]

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
            Work Built Around{" "}
            <span className="font-normal italic text-[#B79A72]">
              Real Business Problems.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[680px]

              text-[0.84rem]
              leading-[1.7]

              text-[#60758A]

              sm:text-[0.94rem]
            "
          >
            A small selection of client and internal projects showing how
            strategy, execution and digital systems come together.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4

            sm:mt-12

            md:grid-cols-2

            lg:grid-cols-3
            lg:gap-5
          "
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  group
                  relative

                  flex
                  min-h-[365px]
                  flex-col

                  overflow-hidden

                  rounded-[24px]

                  border
                  border-[#D8E4EC]

                  bg-white

                  p-5

                  shadow-[0_12px_34px_rgba(11,42,82,0.045)]

                  transition-all
                  duration-300

                  hover:border-[#C5D8E5]
                  hover:shadow-[0_20px_48px_rgba(11,42,82,0.075)]

                  sm:p-6
                "
              >
                {/* SOFT GLOW */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16

                    h-40
                    w-40

                    rounded-full

                    opacity-80

                    blur-3xl
                  "
                  style={{
                    backgroundColor: project.soft,
                  }}
                />

                {/* TOP */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center

                      rounded-[13px]

                      border
                      border-black/[0.05]
                    "
                    style={{
                      backgroundColor: project.soft,
                      color: project.accent,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                  </span>

                  <div className="text-right">
                

                    <span
                      style={newYorkFont}
                      className="
                        mt-1
                        block

                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.14em]

                        text-[#B79A72]
                      "
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* SERVICE LABELS */}

                <div
                  className="
                    relative
                    z-10

                    mt-6

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.services.map((service) => (
                    <span
                      key={service}
                      style={newYorkFont}
                      className="
                        rounded-full

                        border
                        border-[#D8E4EC]

                        bg-[#F8FBFD]

                        px-3
                        py-1.5

                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.12em]

                        text-[#60758A]
                      "
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* TITLE */}

                <h3
                  style={newYorkFont}
                  className="
                    relative
                    z-10

                    mt-5

                    text-[1.55rem]
                    font-normal
                    leading-[1.07]
                    tracking-[-0.035em]

                    text-[#0B2A52]

                    sm:text-[1.7rem]
                  "
                >
                  {project.title}
                </h3>

                {/* ACCENT */}

                <span
                  className="
                    relative
                    z-10

                    mt-4

                    block
                    h-[2px]
                    w-9

                    rounded-full
                  "
                  style={{
                    backgroundColor: project.accent,
                  }}
                />

                {/* DESCRIPTION */}

                <p
                  style={newYorkFont}
                  className="
                    relative
                    z-10

                    mt-4

                    text-[0.78rem]
                    leading-[1.65]

                    text-[#60758A]

                    sm:text-[0.82rem]
                  "
                >
                  {project.description}
                </p>

                {/* CASE STUDY */}

              <Link
  href={project.href}
  title={`View ${project.title} Case Study`}
  aria-label={`View ${project.title} Case Study`}
  style={newYorkFont}
                  className="
                    relative
                    z-10

                    mt-auto
                    pt-7

                    flex
                    w-fit
                    items-center
                    gap-2

                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.16em]

                    text-[#0B2A52]
                  "
                >
                  <span>View Case Study</span>

                  <ArrowRight
                    size={12}
                    strokeWidth={1.7}
                    className="
                      text-[#B79A72]

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* BOTTOM HOVER ACCENT */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-0

                    transition-all
                    duration-500

                    group-hover:w-20
                  "
                  style={{
                    backgroundColor: project.accent,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL WORK CTA
        ===================================================== */}

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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-9

            flex
            justify-center

            sm:mt-10
          "
        >
         <Link
  href="/work"
  title="View All Sharp Rays Work and Case Studies"
  aria-label="View All Sharp Rays Work and Case Studies"
  style={newYorkFont}
  className="
    group
    relative

    inline-flex
    min-h-[46px]

    items-center
    justify-center

    overflow-hidden

    rounded-[16px]

    border
    border-[#6285AD]/30

    bg-white/80

    px-5
    py-[11px]

    text-[13px]
    font-medium
    tracking-[-0.01em]

    text-[#0B2A52]

    shadow-[0_8px_30px_rgba(11,42,82,0.08)]

    backdrop-blur-[8px]

    transition-all
    duration-300
    ease-out

    hover:-translate-y-[2px]
    hover:border-[#6285AD]/40
    hover:bg-white
    hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)]

    active:translate-y-0

    sm:min-h-[48px]
    sm:px-6
    sm:py-3
    sm:text-[14px]

    md:text-[15px]
  "
>
            <span
              className="
                pointer-events-none
                absolute
                inset-[2px]

                rounded-[13px]

                border
                border-white/60
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                inset-x-4
                top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            <span
              className="
                relative
                z-10

                whitespace-nowrap

                text-[#0B2A52]
              "
            >
              View All Work
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}