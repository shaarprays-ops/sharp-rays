"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const principles = [
  {
    number: "01",
    eyebrow: "Strategy",
    title: "Strategy Before Posting",
    description:
      "Every content decision starts with audience, purpose and objective.",
    points: ["Audience", "Purpose", "Objective"],
  },
  {
    number: "02",
    eyebrow: "Workflow",
    title: "One Connected Workflow",
    description:
      "Strategy, planning, creative, publishing and reporting stay connected.",
    points: ["Plan", "Create", "Publish", "Review"],
  },
  {
    number: "03",
    eyebrow: "Clarity",
    title: "Clear Scope",
    description:
      "Deliverables, responsibilities and approval processes are defined before work begins.",
    points: ["Deliverables", "Ownership", "Approvals"],
  },
  {
    number: "04",
    eyebrow: "Measurement",
    title: "Measure Against Objectives",
    description:
      "We match reporting to the business objective rather than chasing every available metric.",
    points: ["Relevant metrics", "Objectives", "Next steps"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WhySharpRays() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px 0px",
  });

  const reduceMotion = useReducedMotion();

  const motionDuration = (duration: number) =>
    reduceMotion ? 0 : duration;

  return (
    <section
      ref={sectionRef}
      id="why-sharp-rays"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
      "
    >
      {/* subtle background detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[320px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-[#EAF4FC]/70
          blur-[120px]

          sm:h-[380px]
          sm:w-[900px]

          lg:h-[430px]
          lg:w-[1100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1450px]
          px-5
          sm:px-7
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* =====================================================
            INTRO
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
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: motionDuration(0.75),
            ease,
          }}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
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
              Why Sharp Rays
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
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[850px]

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
            A Clearer Way to{" "}
            <span className="text-[#B79A72]">
              Manage Social Media.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[690px]

              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:mt-7
              sm:text-[15px]

              lg:text-[16px]
              lg:leading-[1.85]
            "
          >
            We bring strategy, execution and measurement into one connected
            way of working — so social media has more structure behind every
            decision.
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
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: motionDuration(0.7),
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-4

            border-b
            border-[#D9E5EF]
            pb-5

            sm:mt-16

            md:mt-20
            md:flex-row
            md:items-end
            md:justify-between
            md:gap-8
            md:pb-6
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#6C88A4]

                sm:tracking-[0.34em]
              "
            >
              The Sharp Rays Difference
            </p>

            <p
              style={newYorkFont}
              className="
                mt-2
                max-w-[540px]

                text-[20px]
                font-medium
                leading-[1.25]
                tracking-[-0.025em]
                text-[#0B2A52]

                sm:text-[22px]
                md:text-[23px]
              "
            >
              Four principles behind the way we work.
            </p>
          </div>

          <p
            className="
              hidden
              max-w-[320px]
              text-right
              text-[11px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#8AA0B6]

              lg:block
            "
          >
            Strategy · Workflow · Clarity · Measurement
          </p>
        </motion.div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}
        <div
          className="
            grid
            grid-cols-1

            border-b
            border-[#D9E5EF]

            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {principles.map((item, index) => (
            <motion.article
              key={item.number}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 26,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: motionDuration(0.68),
                delay: reduceMotion ? 0 : 0.16 + index * 0.08,
                ease,
              }}
              className={`
                group
                relative
                overflow-hidden

                border-[#D9E5EF]

                px-0
                py-8

                sm:py-9

                md:min-h-[390px]
                md:px-7
                md:py-9

                lg:min-h-[430px]
                lg:px-6
                lg:py-10

                xl:min-h-[450px]
                xl:px-8

                ${
                  index > 0
                    ? "border-t md:border-t-0"
                    : ""
                }

                ${
                  index % 2 !== 0
                    ? "md:border-l"
                    : ""
                }

                ${
                  index > 0
                    ? "lg:border-l"
                    : ""
                }
              `}
            >
              {/* very subtle hover fill */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-b
                  from-[#F7FBFE]
                  via-[#F4F9FD]
                  to-[#EEF6FC]

                  opacity-0
                  transition-opacity
                  duration-500

                  group-hover:opacity-100
                "
              />

              {/* small top accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-[#B79A72]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                "
              >
                {/* top */}
                <div className="flex items-start justify-between gap-5">
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.26em]
                      text-[#6885A1]
                    "
                  >
                    {item.eyebrow}
                  </span>

                  <span
                    style={newYorkFont}
                    className="
                      text-[16px]
                      leading-none
                      text-[#B79A72]
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* content */}
                <div className="mt-7 sm:mt-8 lg:mt-9">
                  <h3
                    style={newYorkFont}
                    className="
                      max-w-[260px]

                      text-[24px]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#0B2A52]

                      sm:text-[26px]
                      md:text-[27px]
                      lg:text-[27px]
                      xl:text-[29px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[300px]

                      text-[13px]
                      leading-[1.75]
                      text-[#667E98]

                      sm:mt-5
                      sm:text-[14px]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* points */}
                <div
                  className="
                    mt-8
                    border-t
                    border-[#DCE7F0]
                    pt-5

                    md:mt-auto
                  "
                >
                  <div
                    className="
                      flex
                      flex-wrap
                      gap-x-4
                      gap-y-2.5
                    "
                  >
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <span
                          className="
                            h-[4px]
                            w-[4px]
                            shrink-0
                            rounded-full
                            bg-[#B79A72]
                          "
                        />

                        <span
                          className="
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-[#748EA8]

                            sm:text-[9px]
                          "
                        >
                          {point}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            FINAL STATEMENT
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
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: motionDuration(0.8),
            delay: reduceMotion ? 0 : 0.5,
            ease,
          }}
          className="
            mt-12
            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-7

              border-l-2
              border-[#B79A72]
              pl-5

              sm:pl-7

              md:flex-row
              md:items-end
              md:justify-between
              md:gap-12

              lg:pl-9
            "
          >
            <div className="shrink-0">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#748DA5]
                "
              >
                The result
              </p>
            </div>

            <p
              style={newYorkFont}
              className="
                max-w-[920px]

                text-[26px]
                font-medium
                leading-[1.17]
                tracking-[-0.035em]
                text-[#0B2A52]

                sm:text-[29px]
                md:text-[31px]
                lg:text-[34px]
                xl:text-[37px]
              "
            >
              Less disconnected activity.{" "}
              <span className="text-[#B58D61]">
                More clarity around what gets done, why it matters and what
                happens next.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}