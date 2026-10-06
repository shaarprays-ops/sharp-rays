"use client";

import Image from "next/image";
import { type ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileText,
  Globe2,
  MousePointer2,
  MousePointerClick,
  Search,
  SearchCheck,
} from "lucide-react";

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
   PROBLEM DATA
========================================================= */

const problems = [
  {
    number: "01",
    title: "You Have a Website",
    description:
      "But search engines may not fully understand its structure, pages or relevance.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "You’re Publishing Content",
    description:
      "But it may not match what potential customers are actually searching for.",
    icon: FileText,
  },
  {
    number: "03",
    title: "You’re Getting Traffic",
    description:
      "But visitors may be arriving through searches that do not support your business goals.",
    icon: MousePointer2,
  },
  {
    number: "04",
    title: "You’re Ranking for Something",
    description:
      "But not necessarily for the searches that influence enquiries, leads or revenue.",
    icon: SearchCheck,
  },
];

/* =========================================================
   POV CONNECTIONS
========================================================= */

type Connection = {
  number: string;
  label: string;
  title: string;
  icon: ElementType;
};

const connections: Connection[] = [
  {
    number: "01",
    label: "AUDIENCE SEARCHES",
    title: "What your audience searches.",
    icon: Search,
  },
  {
    number: "02",
    label: "BUSINESS OFFERS",
    title: "What your business offers.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    label: "WEBSITE COMMUNICATES",
    title: "What your website communicates.",
    icon: Globe2,
  },
  {
    number: "04",
    label: "NEXT ACTION",
    title: "What action should happen next.",
    icon: MousePointerClick,
  },
];

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SEOProblemSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  return (
    <section
      id="seo-problem"
      className="
        relative
        overflow-hidden

        bg-white

      
        text-[#0B2A52]

        sm:py-12
        md:py-14
        lg:py-16
        xl:py-18
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
          max-w-[1320px]

          px-5
          sm:px-7
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* =====================================================
            PROBLEM HEADER
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            staggerChildren: 0.09,
          }}
          className="
            mx-auto
            max-w-[900px]

            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            variants={fadeUp}
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
              w-10

              bg-gradient-to-r
              from-transparent
              to-[#B79A72]
            "
          />

            <span
              className="
                text-[9px]
              
                uppercase
                tracking-[0.28em]
                text-[#B79A72]

                sm:text-[10px]
              "
            >
              The Problem
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

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            style={newYorkFont}
            className="
              mx-auto
              mt-6
              max-w-[900px]

              text-[2.6rem]
             
              leading-[1]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Having a Website Doesn&apos;t Mean{" "}
            <span className="text-[#B79A72]">
              People Can Find It.
            </span>
          </motion.h2>

          {/* COPY */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-[700px]

              text-[13px]
              leading-[1.8]
              text-[#0B2A52]/60

              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Your website can look polished, explain your services clearly and
            still struggle to generate meaningful organic visibility.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-2
              max-w-[700px]

              text-[13px]
              font-medium
              leading-[1.8]
              text-[#0B2A52]

              sm:text-[14px]
            "
          >
            Because being online and being discoverable are two different
            things.
          </motion.p>
        </motion.div>

        {/* =====================================================
            PROBLEM CONTENT
        ===================================================== */}

        <div
          className="
            mt-12

            grid
            grid-cols-1

            items-center

            gap-10

            sm:mt-14

            md:gap-12

            lg:mt-20
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14

            xl:gap-20
          "
        >
          {/* =================================================
              VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -40,
              scale: reduceMotion ? 1 : 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.95,
              ease,
            }}
            className="
              relative

              mx-auto

              flex
              min-h-[300px]
              w-full
              max-w-[650px]

              items-center
              justify-center

              sm:min-h-[400px]

              md:min-h-[450px]

              lg:min-h-[520px]
              lg:max-w-none
            "
          >
            {/* BACK CIRCLE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.82,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                delay: 0.15,
                ease,
              }}
              className="
                pointer-events-none

                absolute

                h-[270px]
                w-[270px]

                rounded-full

                border
                border-[#0B2A52]/[0.07]

                sm:h-[350px]
                sm:w-[350px]

                md:h-[400px]
                md:w-[400px]

                lg:h-[450px]
                lg:w-[450px]
              "
            />

            {/* GOLD ORBIT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.85,
                rotate: reduceMotion ? 0 : -15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                delay: 0.25,
                ease,
              }}
              className="
                pointer-events-none

                absolute

                h-[220px]
                w-[220px]

                rounded-full

                border
                border-dashed
                border-[#C6A77A]/25

                sm:h-[290px]
                sm:w-[290px]

                md:h-[330px]
                md:w-[330px]

                lg:h-[370px]
                lg:w-[370px]
              "
            />

            {/* GLOW */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute

                h-[260px]
                w-[260px]

                rounded-full

                bg-[#C6A77A]/10

                blur-[90px]

                sm:h-[340px]
                sm:w-[340px]
              "
            />

            {/* IMAGE */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10

                w-full
                max-w-[440px]

                sm:max-w-[520px]

                lg:max-w-[560px]
              "
            >
            <Image
  src="/services/seo/seo-problem-visual.webp"
  alt="SEO illustration showing website visibility challenges and search discoverability gaps"
  title="SEO Visibility and Discoverability Challenges"

                width={800}
                height={700}
                sizes="
                  (max-width: 639px) 90vw,
                  (max-width: 1023px) 70vw,
                  48vw
                "
                className="
                  h-auto
                  w-full

                  object-contain

                  drop-shadow-[0_25px_50px_rgba(11,42,82,0.09)]
                "
              />
            </motion.div>

            {/* WEBSITE LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.65,
                ease,
              }}
              className="
                absolute
                left-[1%]
                top-[14%]
                z-20

                hidden

                rounded-[14px]

                border
                border-[#0B2A52]/10

                bg-white/90

                px-3.5
                py-2.5

                shadow-[0_10px_30px_rgba(11,42,82,0.07)]

                backdrop-blur-xl

                sm:block
              "
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-lg

                    bg-[#0B2A52]/[0.06]

                    text-[#0B2A52]
                  "
                >
                  <Globe2
                    size={14}
                    strokeWidth={1.6}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#0B2A52]/35
                    "
                  >
                    Online
                  </p>

                  <p
                    className="
                      mt-0.5

                      text-[10px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Website exists
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DISCOVERABILITY LABEL */}

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
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: 0.82,
                ease,
              }}
              className="
                absolute
                bottom-[13%]
                right-[0%]
                z-20

                hidden

                rounded-[14px]

                border
                border-[#C6A77A]/30

                bg-white/90

                px-3.5
                py-2.5

                shadow-[0_10px_30px_rgba(11,42,82,0.07)]

                backdrop-blur-xl

                sm:block
              "
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    relative

                    flex
                    h-2
                    w-2
                  "
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.8, 1],
                            opacity: [0.5, 0, 0.5],
                          }
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      inset-0

                      rounded-full

                      bg-[#C6A77A]
                    "
                  />

                  <span
                    className="
                      relative

                      h-2
                      w-2

                      rounded-full

                      bg-[#C6A77A]
                    "
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#C6A77A]
                    "
                  >
                    The Gap
                  </p>

                  <p
                    className="
                      mt-0.5

                      text-[10px]
                      font-medium
                      text-[#0B2A52]
                    "
                  >
                    Can customers find it?
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              4 PROBLEMS
          ================================================= */}

          <div className="relative">
            {/* VERTICAL LINE */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-6
                left-[17px]
                top-6

                hidden
                w-px

                bg-[#0B2A52]/10

                sm:block
              "
            />

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                delay: 0.2,
                ease,
              }}
              className="
                absolute
                bottom-6
                left-[17px]
                top-6

                hidden
                w-px

                origin-top

                bg-gradient-to-b
                from-[#C6A77A]
                via-[#0B2A52]/20
                to-transparent

                sm:block
              "
            />

            <div className="space-y-1">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <motion.article
                    key={problem.number}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 30,
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

                      rounded-[18px]

                      border
                      border-transparent

                      px-2
                      py-4

                      transition-all
                      duration-400

                      hover:border-[#0B2A52]/[0.07]
                      hover:bg-white
                      hover:shadow-[0_12px_35px_rgba(11,42,82,0.05)]

                      sm:gap-5
                      sm:pl-0
                      sm:py-5
                    "
                  >
                    {/* ICON */}

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
                        border-[#0B2A52]/10

                        bg-[#FAFBFC]

                        text-[#0B2A52]/45

                        transition-all
                        duration-300

                        group-hover:border-[#C6A77A]/45
                        group-hover:bg-[#C6A77A]/[0.08]
                        group-hover:text-[#C6A77A]

                        sm:flex
                      "
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* COPY */}

                    <div className="min-w-0 flex-1">
                   
                   

                      <h3
                        style={newYorkFont}
                        className="
                          mt-1.5

                          text-[18px]
                          font-medium
                          leading-[1.25]
                          tracking-[-0.02em]
                          text-[#0B2A52]

                          sm:text-[19px]
                          lg:text-[20px]
                        "
                      >
                        {problem.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[500px]

                          text-[12.5px]
                          leading-[1.7]
                          text-[#0B2A52]/55

                          sm:text-[13px]
                        "
                      >
                        {problem.description}
                      </p>

                      <span
                        className="
                          mt-4
                          block

                          h-px
                          w-8

                          bg-[#0B2A52]/10

                          transition-all
                          duration-500

                          group-hover:w-14
                          group-hover:bg-[#C6A77A]
                        "
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            POV DIVIDER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 26,
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
            mx-auto

            mt-14

            max-w-[1180px]

            border-t
            border-[#0B2A52]/10

            pt-12

            sm:mt-16
            sm:pt-14

            lg:mt-20
            lg:pt-16
          "
        >
          {/* =================================================
              POV INTRO
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-6

              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-end
              lg:gap-12
            "
          >
            <div>
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
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#C6A77A]
                  "
                >
                  Our Point of View
                </span>
              </div>

              <h3
                style={newYorkFont}
                className="
                  mt-5

                  max-w-[500px]

                  text-[28px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.035em]
                  text-[#0B2A52]

                  sm:text-[32px]

                  lg:text-[35px]
                "
              >
                Rankings Create Visibility.{" "}
                <span className="text-[#C6A77A]">
                  Relevance Creates Value.
                </span>
              </h3>
            </div>

            {/* POV COPY */}

            <div
              className="
                relative

                max-w-[650px]

                lg:ml-auto
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0

                  w-[2px]

                  rounded-full

                  bg-[#C6A77A]
                "
              />

              <div className="pl-5 sm:pl-6">
                <p
                  className="
                    text-[14px]
                    leading-[1.8]
                    text-[#0B2A52]/60

                    sm:text-[15px]
                  "
                >
                  Rankings create visibility.
                </p>

                <p
                  className="
                    mt-1

                    text-[15px]
                    font-medium
                    leading-[1.8]
                    text-[#0B2A52]

                    sm:text-[16px]
                  "
                >
                  Relevance connects that visibility with business value.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CONNECTION LABEL
          ================================================= */}

          <div
            className="
              mt-9

              flex
              items-center
              gap-3

              sm:mt-10
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.19em]
                text-[#0B2A52]/40

                sm:text-[9px]
              "
            >
              The right SEO strategy connects four things
            </span>

            <span
              className="
                h-px
                flex-1

                bg-[#0B2A52]/10
              "
            />
          </div>

          {/* =================================================
              4 CONNECTIONS
          ================================================= */}

          <div
            className="
              mt-6

              grid
              grid-cols-1

              gap-3

              sm:grid-cols-2
              sm:gap-4

              lg:grid-cols-4
              lg:gap-5
            "
          >
            {connections.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 24,
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
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                  className="
                    group

                    relative

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-[#D8E2EC]

                    bg-white

                    p-5

                    shadow-[0_8px_28px_rgba(11,42,82,0.035)]

                    transition-[border-color,box-shadow]
                    duration-400

                    hover:border-[#C6A77A]/50
                    hover:shadow-[0_15px_38px_rgba(11,42,82,0.07)]

                    sm:p-6
                  "
                >
                  {/* TOP */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0

                        items-center
                        justify-center

                        rounded-[11px]

                        bg-[#EFF4F8]

                        text-[#0B2A52]

                        transition-all
                        duration-300

                        group-hover:bg-[#0B2A52]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.6}
                      />
                    </span>

                    
                  </div>

                  {/* TITLE */}

                  <h4
                    style={newYorkFont}
                    className="
                      mt-6

                      text-[19px]
                      font-medium
                      leading-[1.25]
                      tracking-[-0.025em]
                      text-[#0B2A52]

                      sm:text-[20px]
                    "
                  >
                    {item.title}
                  </h4>

                  {/* LABEL */}

                  <div
                    className="
                      mt-6

                      flex
                      items-center
                      gap-2.5
                    "
                  >
                    <span
                      className="
                        h-px
                        w-6

                        bg-[#C6A77A]

                        transition-all
                        duration-400

                        group-hover:w-9
                      "
                    />

                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#0B2A52]/38
                      "
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* BOTTOM ACCENT */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-0
                      left-1/2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      bg-[#C6A77A]

                      transition-all
                      duration-500

                      group-hover:w-[70%]
                    "
                  />
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              CLOSING LINE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="
              mt-8

              flex
              flex-col
              gap-2

              border-t
              border-[#0B2A52]/10

              pt-6

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-6
            "
          >
            <p
              className="
                max-w-[800px]

                text-[13px]
                leading-[1.75]
                text-[#0B2A52]/55

                sm:text-[14px]
              "
            >
              When those four pieces align, organic search becomes more than
              a traffic channel.
            </p>

            <p
              className="
                shrink-0

                text-[9px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#C6A77A]
              "
            >
              Search With Purpose
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}