"use client";

import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type Reason = {
  number: string;
  title: string;
  description: string;
  label: string;
  icon: LucideIcon;
};

/* =========================================================
   DATA
========================================================= */

const reasons: Reason[] = [
  {
    number: "01",
    label: "BUSINESS VALUE",
    title: "Business Value Before Volume",
    description:
      "We prioritize searches and pages that connect with meaningful business opportunities.",
    icon: Target,
  },
  {
    number: "02",
    label: "CONNECTED SEO",
    title: "Technical + Content Together",
    description:
      "We do not treat technical fixes and content strategy as separate SEO worlds.",
    icon: Network,
  },
  {
    number: "03",
    label: "CLEAR DELIVERY",
    title: "Clear Scope",
    description:
      "Priority pages, deliverables, responsibilities and reporting are agreed before execution.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    label: "REALISTIC EXPECTATIONS",
    title: "No Ranking Guarantees",
    description:
      "We focus on factors we can influence rather than promising outcomes no SEO agency controls.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function WhySharpRaysSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-sharp-rays"
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
        {/* BLUE LIGHT */}

        <div
          className="
            absolute
            -left-[280px]
            top-[4%]

            h-[560px]
            w-[560px]

            rounded-full

            bg-[#EAF4FC]/70
            blur-[150px]
          "
        />

        {/* GOLD LIGHT */}

        <div
          className="
            absolute
            -right-[280px]
            bottom-[2%]

            h-[540px]
            w-[540px]

            rounded-full

            bg-[#C6A77A]/[0.08]
            blur-[150px]
          "
        />

        {/* LARGE BACK WORD */}

        <div
          className="
            absolute
            left-[-15px]
            top-1/2

            hidden

            -translate-y-1/2
            -rotate-90

            select-none
            whitespace-nowrap

            text-[100px]
            font-semibold
            uppercase
            tracking-[-0.06em]
            text-[#0B2A52]/[0.018]

            xl:block
          "
        >
          WHY
        </div>

        {/* RIGHT ORBIT */}

        <div
          className="
            absolute
            -right-[320px]
            top-[16%]

            hidden

            h-[640px]
            w-[640px]

            rounded-full

            border
            border-[#C6A77A]/10

            lg:block
          "
        />

        <div
          className="
            absolute
            -right-[230px]
            top-[25%]

            hidden

            h-[460px]
            w-[460px]

            rounded-full

            border
            border-[#0B2A52]/[0.04]

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
          max-w-[1280px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-12

            sm:gap-14

            lg:grid-cols-[0.78fr_1.22fr]
            lg:items-start
            lg:gap-16

            xl:grid-cols-[0.72fr_1.28fr]
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT — EDITORIAL INTRO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -34,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="
              relative

              lg:sticky
              lg:top-28
            "
          >
            {/* EYEBROW */}

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-8

                  bg-[#C6A77A]

                  sm:w-10
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#C6A77A]

                  sm:text-[10px]
                "
              >
                Why Sharp Rays
              </span>
            </div>

            {/* HEADING */}

            <h2
              style={newYorkFont}
              className="
                mt-6
                max-w-[560px]

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
              A Clearer Way to Build{" "}
              <span className="text-[#C6A77A]">
                Search Visibility.
              </span>
            </h2>

            {/* COPY */}

            <p
              className="
                mt-6
                max-w-[500px]

                text-[13px]
                leading-[1.8]
                text-[#657B91]

                sm:text-[14px]
                md:text-[15px]
              "
            >
              Good SEO should be understandable, commercially relevant and
              clear about what is being done and why.
            </p>

            <p
              className="
                mt-3
                max-w-[500px]

                text-[13px]
                leading-[1.8]
                text-[#657B91]

                sm:text-[14px]
              "
            >
              Our approach keeps strategy, execution and expectations connected
              from the beginning.
            </p>

            {/* SMALL PRINCIPLE */}

            <div
              className="
                mt-8
                max-w-[450px]

                border-l-2
                border-[#C6A77A]

                pl-5
              "
            >
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#C6A77A]
                "
              >
                The Difference
              </p>

              <p
                style={newYorkFont}
                className="
                  mt-2

                  text-[18px]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.02em]
                  text-[#0B2A52]

                  sm:text-[20px]
                "
              >
                Clear priorities. Connected execution. No unnecessary promises.
              </p>
            </div>

            {/* DESKTOP DETAIL */}

            <div
              className="
                mt-10
                hidden

                items-center
                gap-3

                lg:flex
              "
            >
              <span
                className="
                  h-px
                  w-10

                  bg-[#0B2A52]/10
                "
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#0B2A52]/35
                "
              >
                Strategy · Execution · Accountability
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — DIFFERENTIATOR RAIL
          ================================================= */}

          <div
            className="
              relative

              mx-auto
              w-full
              max-w-[720px]

              lg:max-w-none
            "
          >
            {/* BASE LINE */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-7
                left-[18px]
                top-7

                hidden
                w-px

                bg-[#DCE5ED]

                sm:block
              "
            />

            {/* ANIMATED LINE */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                ease,
              }}
              className="
                absolute
                bottom-7
                left-[18px]
                top-7

                hidden
                w-[2px]

                origin-top

                bg-gradient-to-b
                from-[#C6A77A]
                via-[#0B2A52]/25
                to-transparent

                sm:block
              "
            />

            {/* ITEMS */}

            <div>
              {reasons.map((reason, index) => (
                <ReasonRow
                  key={reason.number}
                  reason={reason}
                  index={index}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-12
            max-w-[1120px]

            overflow-hidden

            border-y
            border-[#DCE5ED]

            py-6

            sm:mt-14
            sm:py-7

            lg:mt-16
          "
        >
          {/* GOLD LIGHT */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[8%]
              top-1/2

              h-[100px]
              w-[280px]

              -translate-y-1/2

              rounded-full

              bg-[#C6A77A]/[0.08]

              blur-[55px]
            "
          />

          <div
            className="
              relative
              z-10

              flex
              flex-col

              gap-4

              md:flex-row
              md:items-center
              md:justify-between
              md:gap-10
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  bg-[#0B2A52]

                  text-white
                "
              >
                <ShieldCheck
                  size={15}
                  strokeWidth={1.7}
                />
              </span>

              <div>
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C6A77A]
                  "
                >
                  How We Work
                </p>

                <p
                  className="
                    mt-1

                    text-[11px]
                    text-[#6B8095]

                    sm:text-[12px]
                  "
                >
                  Priorities and responsibilities agreed before execution.
                </p>
              </div>
            </div>

            <p
              style={newYorkFont}
              className="
                max-w-[590px]

                text-[20px]
                font-medium
                leading-[1.3]
                tracking-[-0.025em]
                text-[#0B2A52]

                md:text-right
                md:text-[22px]
              "
            >
              Search visibility should support the business —{" "}
              <span className="text-[#C6A77A]">
                not become an activity for its own sake.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   REASON ROW
========================================================= */

function ReasonRow({
  reason,
  index,
  reduceMotion,
}: {
  reason: Reason;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = reason.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 32,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.68,
        delay: reduceMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        relative

        flex
        gap-4

        border-b
        border-[#DCE5ED]

        py-6

        first:pt-2
        last:border-b-0
        last:pb-2

        sm:gap-6
        sm:pl-0
        sm:py-7

        lg:min-h-[150px]
        lg:items-center
      "
    >
      {/* =====================================================
          NODE
      ===================================================== */}

      <div
        className="
          relative
          z-10

          hidden

          h-9
          w-9
          shrink-0

          items-center
          justify-center

          rounded-full

          border
          border-[#D5E0E9]

          bg-white

          shadow-[0_5px_18px_rgba(11,42,82,0.05)]

          transition-all
          duration-300

          group-hover:border-[#C6A77A]
          group-hover:bg-[#FFF9F1]

          sm:flex
        "
      >
        <span
          className="
            h-2
            w-2

            rounded-full

            bg-[#C6A77A]

            transition-transform
            duration-300

            group-hover:scale-125
          "
        />
      </div>

      {/* =====================================================
          MAIN ROW
      ===================================================== */}

      <div
        className="
          grid
          min-w-0
          flex-1

          grid-cols-1

          gap-5

          sm:grid-cols-[1fr_auto]
          sm:items-start

          lg:grid-cols-[1fr_250px]
          lg:items-center
          lg:gap-8
        "
      >
        {/* LEFT CONTENT */}

        <div className="min-w-0">
          {/* TOP */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* MOBILE ICON */}

            <span
              className="
                flex
                h-9
                w-9
                shrink-0

                items-center
                justify-center

                rounded-[11px]

                bg-[#EEF5FA]

                text-[#0B2A52]

                sm:hidden
              "
            >
              <Icon
                size={14}
                strokeWidth={1.7}
              />
            </span>

            <span
              className="
                text-[8px]
                font-bold
                tracking-[0.18em]
                text-[#C6A77A]
              "
            >
              {reason.number}
            </span>

            <span
              className="
                h-px
                w-5

                bg-[#C6A77A]/60
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#7C90A4]

                sm:text-[8px]
              "
            >
              {reason.label}
            </span>
          </div>

          {/* TITLE */}

          <h3
            style={newYorkFont}
            className="
              mt-3

              text-[23px]
              font-medium
              leading-[1.1]
              tracking-[-0.03em]
              text-[#0B2A52]

              sm:text-[25px]

              lg:text-[27px]
            "
          >
            {reason.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-3
              max-w-[510px]

              text-[12.5px]
              leading-[1.7]
              text-[#657B91]

              sm:text-[13px]
              lg:text-[14px]
            "
          >
            {reason.description}
          </p>
        </div>

        {/* =================================================
            RIGHT VISUAL SIGNAL
        ================================================= */}

        <div
          className="
            hidden
            items-center
            justify-end

            gap-4

            sm:flex
          "
        >
          {/* LINE */}

          <span
            className="
              h-px
              w-8

              bg-[#0B2A52]/10

              transition-all
              duration-500

              group-hover:w-14
              group-hover:bg-[#C6A77A]
            "
          />

          {/* ICON */}

          <span
            className="
              relative

              flex
              h-12
              w-12
              shrink-0

              items-center
              justify-center

              rounded-[14px]

              border
              border-[#D8E3EC]

              bg-white

              text-[#0B2A52]

              shadow-[0_7px_22px_rgba(11,42,82,0.045)]

              transition-all
              duration-400

              group-hover:-translate-y-1
              group-hover:border-[#C6A77A]/45
              group-hover:bg-[#0B2A52]
              group-hover:text-white
              group-hover:shadow-[0_12px_30px_rgba(11,42,82,0.12)]
            "
          >
            <Icon
              size={18}
              strokeWidth={1.55}
            />

            {/* CORNER DETAIL */}

            <span
              aria-hidden="true"
              className="
                absolute
                -right-1
                -top-1

                h-2
                w-2

                rounded-full

                border-2
                border-white

                bg-[#C6A77A]

                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />
          </span>
        </div>
      </div>

      {/* =====================================================
          HOVER ACCENT
      ===================================================== */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-[64px]

          h-[2px]
          w-0

          bg-gradient-to-r
          from-[#C6A77A]
          to-transparent

          transition-all
          duration-500

          group-hover:w-[45%]

          sm:left-[60px]
        "
      />
    </motion.article>
  );
}