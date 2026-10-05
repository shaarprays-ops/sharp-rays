"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Camera,
} from "lucide-react";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   TYPES
========================================================= */

type SocialWork = {
  id: string;
  category: string;
  client: string;
  description: string;
  image: string;
  handle: string;
  badge?: string;

  insight?: {
    value: string;
    label: string;
  };
};

/* =========================================================
   SHOW ONLY 3 PROJECTS
========================================================= */

const socialWorks: SocialWork[] = [
  {
    id: "dts",
    category: "EVENTS & ENTERTAINMENT",
    client: "DTS World",
    description:
      "Social media presence built around events, celebrities, weddings, PR and entertainment-led brand communication.",
    image: "/services/social/dts_social.webp",
    handle: "@doubletrouble_studio",
    badge: "Digital agency",
  },

{
    id: "brownie",
    category: "FOOD & PRODUCT",
    client: "Brownie Point",
    description:
      "Product-led social content focused on visual appeal, consistency and memorable digital presentation.",
    image: "/services/social/cake_social.webp",
    handle: "@browniepointindia",
    badge: "Product Content",
  },

  {
    id: "shruti",
    category: "PERSONAL BRAND",
    client: "Shruti Chadha",
    description:
      "A refined personal-brand presence built through visual consistency, editorial content and social storytelling.",
    image: "/services/social/shruti_social.webp",
    handle: "@shrutichadha_",
    badge: "Personal Branding",
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SocialMediaWorkMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social-media-work"
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
          SUBTLE BACKGROUND
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
        <div
          className="
            absolute
            left-1/2
            top-[-180px]

            h-[360px]
            w-[700px]
            -translate-x-1/2

            rounded-full

            bg-[#EDF6FC]/70
            blur-[120px]

            sm:w-[850px]
            lg:w-[1050px]
          "
        />

        <div
          className="
            absolute
            -right-[260px]
            top-[48%]

            hidden
            h-[580px]
            w-[580px]

            rounded-full

            border
            border-[#B79A72]/10

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
          max-w-[1320px]

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
            max-w-[880px]
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
              Selected Work
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
            Real Brands.{" "}
            <span className="text-[#B79A72]">
              Real Social Work.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]

              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:mt-6
              sm:text-[15px]

              lg:text-[16px]
            "
          >
            A selection of social profiles we&apos;ve created,
            managed and shaped for brands across different
            industries.
          </p>
        </motion.div>

        {/* =====================================================
            PORTFOLIO LABEL
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
            Social Media Portfolio
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
            Selected Projects
          </span>
        </motion.div>

        {/* =====================================================
            3 WORK CARDS
        ===================================================== */}

        <div
          className="
            mt-6

            grid
            grid-cols-1

            gap-5

            sm:mt-7
            sm:gap-6

            md:grid-cols-2

            lg:mt-8
            lg:grid-cols-3
            lg:gap-6

            xl:gap-7
          "
        >
          {socialWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 32,
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
                duration: reduceMotion ? 0 : 0.68,
                delay: reduceMotion
                  ? 0
                  : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                ${
                  index === 2
                    ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[390px] lg:col-span-1 lg:mx-0 lg:max-w-none"
                    : ""
                }
              `}
            >
              <SocialCard work={work} />
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
            duration: reduceMotion ? 0 : 0.65,
            delay: reduceMotion ? 0 : 0.2,
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

              active:translate-y-0

              sm:min-h-[48px]
              sm:px-6
              sm:py-3
              sm:text-[14px]

              md:text-[15px]
            "
          >
            {/* INNER BORDER */}

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

            {/* TOP LIGHT */}

            <span
              aria-hidden="true"
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

            {/* CONTENT */}

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
            max-w-[600px]
            items-center
            justify-center
            gap-3

            sm:mt-10
          "
        >
          <span
            className="
              h-px
              flex-1
              bg-[#B79A72]/35
            "
          />

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
            Selected Social Media Work
          </span>

          <span
            className="
              h-px
              flex-1
              bg-[#B79A72]/35
            "
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SOCIAL CARD
========================================================= */

function SocialCard({
  work,
}: {
  work: SocialWork;
}) {
  const instagramUsername =
    work.handle.replace("@", "");

  return (
    <article
      className="
        group
        relative

        h-full
        w-full

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
        hover:border-[#B79A72]/45
        hover:shadow-[0_18px_45px_rgba(11,42,82,0.09)]

        sm:rounded-[24px]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative

          h-[300px]
          overflow-hidden

          bg-[#EDF3F8]

          sm:h-[340px]
          md:h-[350px]
          lg:h-[360px]
          xl:h-[380px]
        "
      >
        <Image
          src={work.image}
          alt={`${work.client} Instagram profile`}
          title={`${work.client} Instagram profile`}
          fill
          quality={95}
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1023px) 50vw,
            33vw
          "
          className="
            object-cover
            object-top

            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:scale-[1.015]
          "
        />

        {/* IMAGE GRADIENT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0

            h-20

            bg-gradient-to-t
            from-[#0B2A52]/20
            to-transparent
          "
        />

     
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          flex
          h-[calc(100%-300px)]
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
        {/* CATEGORY + BADGE */}

        <div
          className="
            flex
            min-w-0
            items-start
            justify-between
            gap-3
          "
        >
          <span
            className="
              min-w-0
              pt-1

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

          {work.insight ? (
            <span
              className="
                flex
                shrink-0
                items-center
                gap-1.5

                rounded-full

                border
                border-[#D5E3EF]

                bg-[#F1F7FC]

                px-2.5
                py-1.5

                text-[#0B2A52]
              "
            >
              <BarChart3
                size={11}
                strokeWidth={1.8}
                className="text-[#B79A72]"
              />

              <strong
                className="
                  text-[9px]
                  font-semibold

                  sm:text-[10px]
                "
              >
                {work.insight.value}
              </strong>

              <span
                className="
                  text-[8px]
                  font-medium
                  text-[#68829E]

                  sm:text-[9px]
                "
              >
                {work.insight.label}
              </span>
            </span>
          ) : (
            <span
              className="
                shrink-0

                rounded-full

                border
                border-[#D8C3A9]/65

                bg-[#F8F2EB]

                px-2.5
                py-1.5

                text-[8px]
                font-semibold
                text-[#9A744D]

                sm:px-3
                sm:text-[9px]
              "
            >
              {work.badge}
            </span>
          )}
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

            lg:text-[14px]
            lg:leading-[1.8]

            xl:text-[15px]
          "
        >
          {work.description}
        </p>

        {/* SPACER */}

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
          {/* HANDLE */}

          <div
            className="
              flex
              min-w-0
              items-center
              gap-2
            "
          >
            <Camera
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
              {work.handle}
            </span>
          </div>

          {/* PROFILE LINK */}

          <a
            href={`https://instagram.com/${instagramUsername}`}
            title={`View ${work.client} Instagram profile`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${work.client} Instagram profile`}
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

              hover:text-[#B58D61]

              sm:text-[12px]
            "
          >
            <span>View Profile</span>

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

      {/* GOLD HOVER LINE */}

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