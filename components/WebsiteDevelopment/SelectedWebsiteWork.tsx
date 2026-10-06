"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Layout,
  Monitor,
} from "lucide-react";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

/* =========================================================
   TYPES
========================================================= */

type WebsiteWork = {
  id: string;
  client: string;
  category: string;
  description: string;
  image: string;
  url: string;
  domain: string;
  services: string[];
  accent: string;
};

/* =========================================================
   WEBSITE PROJECTS
========================================================= */

const websiteWorks: WebsiteWork[] = [
  {
    id: "xiimba",
    client: "Xiimba",
    category: "TEXTILE MANUFACTURING",
    description:
      "A clear B2B website built to present textile manufacturing capabilities, fabric solutions and scalable production for domestic and global markets.",
    image: "/xiimba.jpeg",
    url: "https://www.xiimba.com/",
    domain: "xiimba.com",
    services: ["Website Design", "Development", "Responsive UI"],
    accent: "#B79A72",
  },
  {
    id: "shruti-chadha",
    client: "Shruti Chadha",
    category: "LUXURY INTERIOR DESIGN",
    description:
      "An editorial portfolio website designed around refined interiors, visual storytelling and a premium digital experience for a luxury design studio.",
    image: "/shruti-chadha.jpeg",
    url: "https://www.shrutichadha.com/",
    domain: "shrutichadha.com",
    services: ["UX Design", "Development", "Portfolio Experience"],
    accent: "#6285AD",
  },
  {
    id: "vow-story",
    client: "Double Trouble Studio",
    category: "WEDDINGS & EXPERIENCES",
    description:
      "An immersive event and wedding website built around storytelling, visual impact and a refined journey through celebrations, services and experiences.",
    image: "/vow-story.jpeg",
    url: "https://vow-story.vercel.app/",
    domain: "vow-story.vercel.app",
    services: ["Creative Direction", "Frontend", "Interactive Experience"],
    accent: "#8EA7C2",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SelectedWebsiteWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="selected-website-work"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#0B2A52]

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* TOP BLUE GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-[-220px]
            h-[420px]
            w-[720px]
            -translate-x-1/2
            rounded-full
            bg-[#EDF6FC]/75
            blur-[130px]

            sm:w-[900px]
            lg:w-[1100px]
          "
        />

        {/* RIGHT CIRCLE */}

        <div
          className="
            absolute
            -right-[300px]
            top-[32%]
            hidden
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#6285AD]/10

            lg:block
          "
        />

        {/* LEFT GOLD GLOW */}

        <div
          className="
            absolute
            -bottom-[260px]
            -left-[260px]
            hidden
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#F6F0E8]/60
            blur-[120px]

            lg:block
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-5

          sm:px-7
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
                  y: 28,
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
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[900px]
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

              sm:gap-4
            "
          >
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
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.36em]
              "
            >
              Selected Website Work
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

          {/* HEADING */}

          <h2
            style={newYorkFont}
            className="
              mt-6
              text-[2.6rem]
              font-medium
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Websites Built for{" "}
            <span className="text-[#6285AD]">
              Real Businesses.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[680px]
              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:mt-6
              sm:text-[15px]

              lg:text-[16px]
            "
          >
            A selection of website experiences created around clearer
            communication, responsive design and a stronger digital presence.
          </p>
        </motion.div>

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="
            mt-12
            flex
            items-center
            gap-3

            sm:mt-14
            sm:gap-4

            md:mt-16

            lg:mt-20
          "
        >
          <span
            className="
              shrink-0
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#B79A72]

              sm:text-[9px]
              sm:tracking-[0.24em]
            "
          >
            Website Portfolio
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#0B2A52]/10
            "
          />

          <span
            className="
              hidden
              shrink-0
              text-[8px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#71879F]

              sm:block
            "
          >
            03 Selected Projects
          </span>
        </motion.div>

        {/* =====================================================
            WEBSITE CARDS
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-6

            sm:mt-7

            md:grid-cols-2

            lg:mt-8
            lg:grid-cols-3
            lg:gap-7

            xl:gap-8
          "
        >
          {websiteWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 34,
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
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${
                  index === 2
                    ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[500px] lg:col-span-1 lg:mx-0 lg:max-w-none"
                    : ""
                }
              `}
            >
              <WebsiteCard work={work} index={index} />
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            VIEW ALL WORK
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
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.18,
          }}
          className="
            mt-10
            flex
            justify-center

            sm:mt-12
            lg:mt-14
          "
        >
          <Link
            href="/work"
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

              sm:min-h-[48px]
              sm:px-6
              sm:py-3
              sm:text-[14px]

              md:text-[15px]
            "
          >
            <span
              aria-hidden="true"
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
                relative
                z-10
                flex
                items-center
                gap-2
                whitespace-nowrap
              "
            >
              View All Work

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="
                  text-[#B79A72]
                  transition-transform
                  duration-300

                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            BOTTOM DETAIL
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-9
            flex
            max-w-[620px]
            items-center
            justify-center
            gap-3

            sm:mt-10
          "
        >
          <span className="h-px flex-1 bg-[#B79A72]/35" />

          <span
            className="
              shrink-0
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#71879F]
            "
          >
            Design · Develop · Launch
          </span>

          <span className="h-px flex-1 bg-[#B79A72]/35" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WEBSITE CARD
========================================================= */

function WebsiteCard({
  work,
  index,
}: {
  work: WebsiteWork;
  index: number;
}) {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[#D9E4EE]
        bg-white
        shadow-[0_10px_30px_rgba(11,42,82,0.055)]
        transition-[border-color,box-shadow,transform]
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-[#6285AD]/35
        hover:shadow-[0_20px_48px_rgba(11,42,82,0.10)]

        sm:rounded-[24px]
      "
    >
      {/* =====================================================
          WEBSITE PREVIEW
      ===================================================== */}

      <a
        href={work.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${work.client} website`}
        className="
          relative
          block
          overflow-hidden
          bg-[#EDF3F8]
        "
      >
        {/* BROWSER TOP BAR */}

        <div
          className="
            relative
            z-20
            flex
            h-[38px]
            items-center
            border-b
            border-[#E4EAF0]
            bg-white
            px-3

            sm:h-[42px]
            sm:px-4
          "
        >
          {/* BROWSER DOTS */}

          <div className="flex items-center gap-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-[#E8786A]" />
            <span className="h-[6px] w-[6px] rounded-full bg-[#E8B95B]" />
            <span className="h-[6px] w-[6px] rounded-full bg-[#73B989]" />
          </div>

          {/* URL */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[22px]
              w-[48%]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#E3E9EF]
              bg-[#F9FBFD]

              sm:h-[24px]
              sm:w-[52%]
            "
          >
            <Globe2
              size={9}
              strokeWidth={1.6}
              className="
                mr-1.5
                shrink-0
                text-[#8FA1B2]
              "
            />

            <span
              className="
                truncate
                text-[7px]
                font-medium
                text-[#8294A6]

                sm:text-[8px]
              "
            >
              {work.domain}
            </span>
          </div>
        </div>

        {/* SCREENSHOT */}

        <div
          className="
            relative
            aspect-[16/11]
            overflow-hidden
            bg-[#EDF3F8]
          "
        >
          <Image
            src={work.image}
            alt={`${work.client} website design`}
            fill
            quality={95}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="
              object-cover
              object-top
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:scale-[1.025]
            "
          />

          {/* SUBTLE IMAGE OVERLAY */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[32%]
              bg-gradient-to-t
              from-[#0B2A52]/25
              via-[#0B2A52]/5
              to-transparent
            "
          />

          {/* PROJECT NUMBER */}

          <div
            className="
              absolute
              left-4
              top-4
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-white/90
              text-[9px]
              font-semibold
              tracking-[0.08em]
              text-[#0B2A52]
              shadow-[0_5px_18px_rgba(11,42,82,0.08)]
              backdrop-blur-md

              sm:left-5
              sm:top-5
            "
          >
            0{index + 1}
          </div>

          {/* VISIT ICON */}

          <div
            className="
              absolute
              bottom-4
              right-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-white/92
              text-[#0B2A52]
              shadow-[0_7px_22px_rgba(11,42,82,0.12)]
              backdrop-blur-md
              transition-all
              duration-300

              group-hover:scale-105
              group-hover:bg-[#0B2A52]
              group-hover:text-white

              sm:bottom-5
              sm:right-5
            "
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </div>
        </div>
      </a>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-5
          pb-6
          pt-5

          sm:px-6
          sm:pb-7
          sm:pt-6

          lg:px-7
        "
      >
        {/* CATEGORY */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#7D92A9]

              sm:text-[9px]
              sm:tracking-[0.18em]
            "
          >
            {work.category}
          </span>

          <span
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              border
              border-[#D8E4EE]
              bg-[#F5F9FC]
              px-2.5
              py-1.5
              text-[8px]
              font-semibold
              text-[#6285AD]

              sm:text-[9px]
            "
          >
            <Monitor size={11} strokeWidth={1.7} />
            Website
          </span>
        </div>

        {/* CLIENT */}

        <h3
          style={newYorkFont}
          className="
            mt-5
            text-[27px]
            font-medium
            leading-[1.05]
            tracking-[-0.035em]
            text-[#0B2A52]

            sm:mt-6
            sm:text-[29px]

            lg:text-[30px]
          "
        >
          {work.client}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-4
            text-[13px]
            leading-[1.75]
            text-[#657C95]

            sm:text-[14px]

            lg:leading-[1.8]

            xl:text-[15px]
          "
        >
          {work.description}
        </p>

        {/* SERVICES */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          "
        >
          {work.services.map((service) => (
            <span
              key={service}
              className="
                rounded-full
                border
                border-[#DCE6EF]
                bg-[#F8FAFC]
                px-2.5
                py-1.5
                text-[8px]
                font-medium
                text-[#71869D]

                sm:px-3
                sm:text-[9px]
              "
            >
              {service}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        {/* DIVIDER */}

        <div
          className="
            my-5
            h-px
            w-full
            bg-[#DCE6EF]

            sm:my-6
          "
        />

        {/* FOOTER */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <div
            className="
              flex
              min-w-0
              items-center
              gap-2
            "
          >
            <Layout
              size={13}
              strokeWidth={1.5}
              className="
                shrink-0
                text-[#B79A72]
              "
            />

            <span
              className="
                truncate
                text-[9px]
                font-medium
                text-[#8194A8]

                sm:text-[10px]
              "
            >
              {work.domain}
            </span>
          </div>

          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${work.client} website`}
            className="
              group/link
              flex
              shrink-0
              items-center
              gap-1.5
              text-[11px]
              font-semibold
              text-[#0B2A52]
              transition-colors
              duration-300

              hover:text-[#6285AD]

              sm:text-[12px]
            "
          >
            <span>Visit Website</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="
                text-[#B79A72]
                transition-transform
                duration-300

                group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM HOVER LINE
      ===================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-[#B79A72]
          transition-all
          duration-500
          ease-out

          group-hover:w-full
        "
      />
    </article>
  );
}