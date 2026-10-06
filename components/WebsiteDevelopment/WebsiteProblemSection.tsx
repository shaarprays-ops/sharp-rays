"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CircleHelp,
  FileText,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ADD YOUR IMAGE HERE
========================================================= */

const progressBgImage = "/services/webdev/progress-bg.webp";

/* =========================================================
   DATA
========================================================= */

const questions = [
  "Am I in the right place?",
  "Does this business solve my problem?",
  "Can I trust them?",
  "What exactly do they offer?",
  "Why should I choose them?",
  "What should I do next?",
];

const journey = [
  {
    icon: CircleHelp,
    label: "Question",
    text: "A curious visitor arrives with questions.",
  },
  {
    icon: Lightbulb,
    label: "Clarity",
    text: "Clear content provides natural answers.",
  },
  {
    icon: ShieldCheck,
    label: "Confidence",
    text: "Uncertainty fades as trust builds.",
  },
  {
    icon: ArrowRight,
    label: "Action",
    text: "The next step feels obvious.",
  },
];

const principles = [
  {
    icon: Layers3,
    title: "Every page needs a job.",
    text: "Each page should serve a clear purpose for the visitor.",
  },
  {
    icon: FileText,
    title: "Every section needs a reason to exist.",
    text: "Content should earn its place and move the story forward.",
  },
  {
    icon: TrendingUp,
    title: "Every interaction should move the visitor forward.",
    text: "Reduce friction. Create momentum. Guide them with intention.",
  },
];

export default function WebsitePointOfViewSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -28,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  return (
    <section
      id="website-point-of-view"
      aria-labelledby="website-point-of-view-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[520px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#F4F8FB]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-[180px]
            bottom-[2%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#F7F9FB]
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
          max-w-[1420px]
          px-5
          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
        "
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            mx-auto
            max-w-[1080px]
            text-center
          "
        >
          <motion.div
            variants={fadeUp}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
              sm:mb-6
            "
          >
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
              className="
                text-[10px]
         
                uppercase
                tracking-[0.28em]
                text-[#B79A72]
              
              "
            >
              How We Think About Websites
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
          </motion.div>

          <motion.h2
            id="website-point-of-view-heading"
            variants={fadeUp}
            className="
              mx-auto
              max-w-[1080px]

              font-serif
              text-[2.1rem]
              font-normal
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Your Website Should Answer Questions{" "}
            <span
              className="
                block
                font-serif
                font-normal
                italic
                text-[#B79A72]

                sm:inline
              "
            >
              Before It Creates Them.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[780px]

              font-serif
              text-[0.94rem]
              leading-[1.75]
              text-[#5D7288]

              sm:text-[1rem]
            "
          >
            A visitor lands on your website with questions. The strongest
            digital experiences answer them naturally before uncertainty has a
            chance to grow.
          </motion.p>
        </motion.div>

        {/* =====================================================
            MAIN TWO PANEL AREA
        ===================================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-[1240px]
            gap-5

            sm:mt-14

            lg:mt-16
            lg:grid-cols-[0.98fr_1.02fr]
            lg:gap-6
          "
        >
          {/* =================================================
              LEFT — QUESTIONS
          ================================================= */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              relative
              overflow-hidden

              rounded-[24px]

              border
              border-[#DCE6EE]

              bg-[#F6FAFD]

              px-5
              py-7

              sm:rounded-[28px]
              sm:px-7
              sm:py-8

              lg:px-8
              lg:py-9
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-[100px]
                top-[15%]
                h-[250px]
                w-[250px]
                rounded-full
                bg-white
                blur-[70px]
              "
            />

            <div className="relative z-10">
              {/* LABEL */}

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.5rem]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#6D8195]
                  "
                >
                  Visitors Arrive With Questions
                </span>
              </div>

              <h3
                className="
                  mt-5

                  font-serif
                  text-[1.75rem]
                  font-normal
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[2rem]
                  md:text-[2.15rem]
                "
              >
                Answer them with clarity.
              </h3>

              {/* QUESTIONS */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className="
                  mt-7
                  space-y-2.5
                "
              >
                {questions.map((question, index) => (
                  <motion.div
                    key={question}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 4,
                          }
                    }
                    className="
                      group

                      flex
                      min-h-[56px]
                      items-center
                      gap-3

                      rounded-[14px]

                      border
                      border-[#DCE5EC]

                      bg-white

                      px-3.5
                      py-3

                      shadow-[0_4px_15px_rgba(11,42,82,0.025)]

                      transition-all
                      duration-300

                      hover:border-[#C7D3DD]
                      hover:shadow-[0_7px_20px_rgba(11,42,82,0.055)]

                      sm:min-h-[60px]
                      sm:px-4
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#EDF4F9]

                        text-[0.47rem]
                        font-semibold
                        text-[#536E87]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                        flex-1

                        font-serif
                        text-[0.86rem]
                        leading-[1.35]
                        text-[#0B2A52]

                        sm:text-[0.94rem]
                      "
                    >
                      {question}
                    </p>

                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="
                        shrink-0
                        text-[#A97C52]

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — IMAGE BACKGROUND PANEL
          ================================================= */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              relative
              min-h-[600px]
              overflow-hidden

              rounded-[24px]

              border
              border-[#DCE6EE]

              bg-[#F4F8FB]

              sm:min-h-[620px]
              sm:rounded-[28px]

              lg:min-h-full
            "
          >
            {/* ===============================================
                BACKGROUND IMAGE
            =============================================== */}

            <Image
              src={progressBgImage}
              alt="Website visual"
              title="Website visual"
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className="
                object-cover
                object-center
              "
            />

            {/* ===============================================
                OVERLAY
                keeps left content readable while allowing
                image to remain more visible on the right
            =============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-r

                from-[#F6FAFD]/95
                via-[#F6FAFD]/78
                to-[#F6FAFD]/28
              "
            />

            {/* TOP/BOTTOM SOFTENING */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-[130px]

                bg-gradient-to-b
                from-[#F6FAFD]/75
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-[120px]

                bg-gradient-to-t
                from-[#F6FAFD]/55
                to-transparent
              "
            />

            {/* subtle blue atmosphere */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[120px]
                top-[30%]

                h-[320px]
                w-[320px]

                rounded-full

                bg-[#E8F1F7]/40

                blur-[90px]
              "
            />

            {/* ===============================================
                CONTENT
            =============================================== */}

            <div
              className="
                relative
                z-10

                flex
                min-h-[600px]
                flex-col

                px-5
                py-7

                sm:min-h-[620px]
                sm:px-7
                sm:py-8

                lg:min-h-full
                lg:px-8
                lg:py-9
              "
            >
              {/* TOP LABEL */}

              <span
                className="
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.23em]
                  text-[#607A92]
                "
              >
                From Questions to Real Progress
              </span>

              {/* JOURNEY + STATEMENT */}

              <div
                className="
                  mt-8
                  grid
                  flex-1
                  gap-9

                  md:grid-cols-[0.88fr_1.12fr]
                  md:items-center

                  lg:grid-cols-[0.9fr_1.1fr]
                "
              >
                {/* ===========================================
                    JOURNEY TIMELINE
                =========================================== */}

                <div className="relative">
                  {/* line */}

                  <div
                    className="
                      absolute
                      bottom-7
                      left-[23px]
                      top-7

                      w-px

                      border-l
                      border-dashed
                      border-[#9CB0C1]
                    "
                  />

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    className="space-y-8"
                  >
                    {journey.map(
                      ({ icon: Icon, label, text }, index) => (
                        <motion.div
                          key={label}
                          variants={fadeUp}
                          className="
                            group
                            relative
                            flex
                            gap-4
                          "
                        >
                          {/* NODE */}

                          <div
                            className="
                              relative
                              z-10

                              flex
                              h-[46px]
                              w-[46px]
                              shrink-0
                              items-center
                              justify-center

                              rounded-full

                              border
                              border-[#CCDCE7]

                              bg-[#F3F8FC]/95

                              text-[#0B2A52]

                              shadow-[0_4px_12px_rgba(11,42,82,0.035)]

                              backdrop-blur-sm

                              transition-all
                              duration-300

                              group-hover:border-[#B79A72]
                            "
                          >
                            {index === journey.length - 1 ? (
                              <span
                                className="
                                  flex
                                  h-[40px]
                                  w-[40px]
                                  items-center
                                  justify-center

                                  rounded-full

                                  bg-[#B79A72]

                                  text-white

                                  shadow-[0_8px_20px_rgba(183,154,114,0.28)]
                                "
                              >
                                <ArrowRight size={15} />
                              </span>
                            ) : (
                              <Icon
                                size={18}
                                strokeWidth={1.6}
                                className={
                                  index === 1
                                    ? "text-[#A97C52]"
                                    : "text-[#0B2A52]"
                                }
                              />
                            )}
                          </div>

                          {/* TEXT */}

                          <div className="pt-1">
                            <span
                              className="
                                text-[0.52rem]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[#0B2A52]
                              "
                            >
                              {label}
                            </span>

                            <p
                              className="
                                mt-1
                                max-w-[190px]

                                font-serif
                                text-[0.76rem]
                                leading-[1.55]
                                text-[#597087]
                              "
                            >
                              {text}
                            </p>
                          </div>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </div>

                {/* ===========================================
                    MAIN RESULT MESSAGE
                =========================================== */}

                <div
                  className="
                    flex
                    items-center

                    md:justify-end
                  "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.35,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                      ease,
                    }}
                    className="
                      max-w-[300px]

                      border-l
                      border-[#8EA6BA]

                      bg-white/25

                      pl-5

                      backdrop-blur-[1px]

                      sm:pl-6
                    "
                  >
                    <h3
                      className="
                        font-serif
                        text-[1.75rem]
                        font-normal
                        leading-[1.06]
                        tracking-[-0.04em]
                        text-[#0B2A52]

                        sm:text-[2rem]
                        lg:text-[2.15rem]
                      "
                    >
                      Make the next step feel{" "}
                      <span
                        className="
                          block

                          font-serif
                          italic
                          text-[#A97C52]
                        "
                      >
                        obvious.
                      </span>
                    </h3>

                    <span
                      className="
                        mt-4
                        block
                        h-px
                        w-9
                        bg-[#B79A72]
                      "
                    />

                    <p
                      className="
                        mt-4

                        max-w-[280px]

                        font-serif
                        text-[0.8rem]
                        leading-[1.65]
                        text-[#587086]

                        sm:text-[0.84rem]
                      "
                    >
                      Clear content, hierarchy and purposeful design turn
                      questions into progress.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       

        {/* =====================================================
            THE SHIFT
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.72,
            ease,
          }}
          className="
            mx-auto
            mt-10
            max-w-[1240px]

            sm:mt-12
          "
        >
          <div
            className="
              relative
              overflow-hidden

              rounded-[22px]

              border
              border-[#DCE6EE]

              bg-[#F7FAFC]

              px-5
              pb-7
              pt-6

              sm:rounded-[26px]
              sm:px-8
              sm:pb-9
              sm:pt-7

              lg:px-10
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[280px]
                w-[650px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white

                blur-[70px]
              "
            />

            <div className="relative z-10">
              {/* LABEL */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span className="h-px w-10 bg-[#B79A72]" />

                <span
                  className="
                    text-[0.52rem]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#92745C]
                  "
                >
                  The Shift
                </span>

                <span className="h-px w-10 bg-[#B79A72]" />
              </div>

              {/* COMPARISON */}

              <div
                className="
                  mt-7
                  grid
                  gap-6

                  md:grid-cols-[1fr_80px_1fr]
                  md:items-center
                  md:gap-5
                "
              >
                {/* OLD */}

                <motion.div
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="md:pr-4"
                >
                  <span
                    className="
                      text-[0.5rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#718293]
                    "
                  >
                    Stop Asking:
                  </span>

                  <p
                    className="
                      mt-3
                      max-w-[470px]

                      font-serif
                      text-[1.4rem]
                      leading-[1.15]
                      tracking-[-0.03em]
                      text-[#0B2A52]

                      sm:text-[1.6rem]
                      lg:text-[1.75rem]
                    "
                  >
                    “How can we make the website look more impressive?”
                  </p>
                </motion.div>

                {/* CENTER */}

                <div
                  className="
                    flex
                    items-center
                    justify-center

                    border-y
                    border-[#D7E0E7]

                    py-4

                    md:h-full
                    md:border-x
                    md:border-y-0
                    md:py-0
                  "
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: [0, 4, 0],
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-full

                      bg-[#B79A72]

                      text-white

                      shadow-[0_10px_25px_rgba(183,154,114,0.25)]
                    "
                  >
                    <ArrowRight size={17} />
                  </motion.span>
                </div>

                {/* NEW */}

                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="md:pl-4"
                >
                  <span
                    className="
                      text-[0.5rem]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#718293]
                    "
                  >
                    Start Asking:
                  </span>

                  <p
                    className="
                      mt-3
                      max-w-[470px]

                      font-serif
                      text-[1.45rem]
                      leading-[1.15]
                      tracking-[-0.03em]
                      text-[#0B2A52]

                      sm:text-[1.7rem]
                      lg:text-[1.85rem]
                    "
                  >
                    “How can we make the{" "}
                    <span
                      className="
                        font-serif
                        italic
                        text-[#A97C52]
                      "
                    >
                      decision easier?
                    </span>
                    ”
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL MICROCOPY
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.58,
            ease,
          }}
          className="
            mx-auto
            mt-6

            flex
            max-w-[780px]
            items-center
            justify-center
            gap-3

            text-center
          "
        >
          <Target
            size={14}
            strokeWidth={1.7}
            className="
              shrink-0
              text-[#B79A72]
            "
          />

          <p
            className="
              font-serif
              text-[0.8rem]
              leading-6
              text-[#64788C]
            "
          >
            Strong website design reduces uncertainty and makes the next step
            feel natural.
          </p>
        </motion.div>
      </div>
    </section>
  );
}