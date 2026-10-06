"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import {

  Sparkles,

  Workflow,

} from "lucide-react";

const newYorkFont = {

  fontFamily: "New York, ui-serif, Georgia, serif",

};

const ease = [0.22, 1, 0.36, 1] as const;

export default function AiAutomationFinalCTA() {

  const reduceMotion = Boolean(useReducedMotion());

  return (

    <section

      id="final-cta"

      aria-labelledby="final-cta-heading"

      className="

        relative

        overflow-hidden

        bg-white

        py-24

        sm:py-28

        lg:py-32

        xl:py-36

      "

    >

      {/* =====================================================

          LARGE FLOW LINE

      ===================================================== */}

      <div

        className="

          pointer-events-none

          absolute

          left-1/2

          top-[52%]

          hidden

          h-[260px]

          w-[980px]

          -translate-x-1/2

          -translate-y-1/2

          lg:block

        "

      >

        <svg

          viewBox="0 0 980 260"

          className="h-full w-full"

          aria-hidden="true"

        >

          <defs>

            <linearGradient

              id="ctaFlow"

              x1="0"

              y1="0"

              x2="1"

              y2="0"

            >

              <stop

                offset="0%"

                stopColor="#C6A77A"

                stopOpacity="0"

              />

              <stop

                offset="22%"

                stopColor="#C6A77A"

                stopOpacity="0.65"

              />

              <stop

                offset="50%"

                stopColor="#7CA6C6"

                stopOpacity="0.8"

              />

              <stop

                offset="78%"

                stopColor="#C6A77A"

                stopOpacity="0.65"

              />

              <stop

                offset="100%"

                stopColor="#C6A77A"

                stopOpacity="0"

              />

            </linearGradient>

          </defs>

          <motion.path

            d="

              M0 150

              C145 150 145 40 300 40

              C430 40 410 220 520 220

              C665 220 660 65 790 65

              C875 65 900 130 980 130

            "

            fill="none"

            stroke="url(#ctaFlow)"

            strokeWidth="1.3"

            strokeLinecap="round"

            initial={{

              pathLength: reduceMotion ? 1 : 0,

              opacity: reduceMotion ? 1 : 0,

            }}

            whileInView={{

              pathLength: 1,

              opacity: 1,

            }}

            viewport={{

              once: true,

              amount: 0.35,

            }}

            transition={{

              duration: reduceMotion ? 0 : 1.25,

              ease,

            }}

          />

          <circle

            cx="300"

            cy="40"

            r="5"

            fill="#B18458"

          />

          <circle

            cx="520"

            cy="220"

            r="5"

            fill="#0B2A52"

          />

          <circle

            cx="790"

            cy="65"

            r="5"

            fill="#B18458"

          />

        </svg>

      </div>

      {/* =====================================================

          MAIN WRAPPER

      ===================================================== */}

      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1480px]

          px-5

          sm:px-8

          md:px-10

          lg:px-14

          xl:px-16

        "

      >

        {/* =====================================================

            CTA FRAME

        ===================================================== */}

        <div

          className="

            relative

            mx-auto

            max-w-[1260px]

            overflow-hidden

            rounded-[42px]

            border

            border-[#C7DBE8]

            bg-white/88

            px-6

            py-14

            text-center

            shadow-[0_26px_70px_rgba(11,42,82,0.065)]

            backdrop-blur-[8px]

            sm:px-10

            sm:py-16

            lg:px-16

            lg:py-20

          "

        >

          {/* =================================================

              FRAME DECORATION

          ================================================= */}

          <div

            className="

              pointer-events-none

              absolute

              left-[-110px]

              top-[-130px]

              h-[310px]

              w-[310px]

              rounded-full

              border

              border-[#C8DCE9]

            "

          />

          <div

            className="

              pointer-events-none

              absolute

              left-[-55px]

              top-[-75px]

              h-[205px]

              w-[205px]

              rounded-full

              border

              border-[#E0EAF1]

            "

          />

          <div

            className="

              pointer-events-none

              absolute

              bottom-[-150px]

              right-[-120px]

              h-[360px]

              w-[360px]

              rounded-full

              border

              border-[#C8DCE9]

            "

          />

          <div

            className="

              pointer-events-none

              absolute

              bottom-[-70px]

              right-[-55px]

              h-[220px]

              w-[220px]

              rounded-full

              bg-[#EEF6FB]

              blur-[30px]

            "

          />

          {/* =================================================

              TOP ICON

          ================================================= */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    scale: 0.9,

                  }

            }

            whileInView={{

              opacity: 1,

              scale: 1,

            }}

            viewport={{

              once: true,

              amount: 0.5,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.6,

              ease,

            }}

            className="

              relative

              z-10

              mx-auto

              flex

              h-[58px]

              w-[58px]

              items-center

              justify-center

              rounded-full

              border

              border-[#C6DAE7]

              bg-[linear-gradient(145deg,#FFFFFF,#EDF6FB)]

              text-[#0B2A52]

              shadow-[0_10px_26px_rgba(11,42,82,0.07)]

            "

          >

            <Workflow

              size={22}

              strokeWidth={1.45}

            />

            <span

              className="

                absolute

                -right-[3px]

                -top-[3px]

                h-[12px]

                w-[12px]

                rounded-full

                border-[3px]

                border-white

                bg-[#B18458]

              "

            />

          </motion.div>

          {/* =================================================

              EYEBROW

          ================================================= */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                    y: 12,

                  }

            }

            whileInView={{

              opacity: 1,

              y: 0,

            }}

            viewport={{

              once: true,

              amount: 0.45,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.65,

              delay: reduceMotion ? 0 : 0.06,

              ease,

            }}

            className="

              relative

              z-10

              mt-7

              flex

              items-center

              justify-center

              gap-4

            "

          >

            <span className="h-px w-10 bg-[#C6A77A]" />

            <span

              style={newYorkFont}

              className="

                text-[9px]

                uppercase

                tracking-[0.36em]

                text-[#B18458]

                sm:text-[10px]

              "

            >

              Your Next Move

            </span>

            <span className="h-px w-10 bg-[#C6A77A]" />

          </motion.div>

          {/* =================================================

              HEADING

          ================================================= */}

          <motion.h2

            id="final-cta-heading"

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

              amount: 0.4,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.75,

              delay: reduceMotion ? 0 : 0.1,

              ease,

            }}

            style={newYorkFont}

            className="

              relative

              z-10

              mx-auto

              mt-6

              max-w-[920px]

              text-[2.1rem]

              font-light

              leading-[0.98]

              tracking-[-0.05em]

              text-[#0B2A52]

              sm:text-[2.6rem]

              md:text-[2.95rem]

              lg:text-[3.1rem]

              xl:text-[3.35rem]

            "

          >

            Stop Spending Human Time{" "}

            <span className="text-[#B18458]">

              on Machine Work.

            </span>

          </motion.h2>

          {/* =================================================

              COPY

          ================================================= */}

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

              amount: 0.4,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.7,

              delay: reduceMotion ? 0 : 0.15,

              ease,

            }}

            className="

              relative

              z-10

              mx-auto

              mt-6

              max-w-[790px]

            "

          >

            <p

              style={newYorkFont}

              className="

                text-[13px]

                leading-[1.7]

                text-[#536D85]

                sm:text-[14px]

              "

            >

              Your team should not need to repeat the same process hundreds of

              times simply because the systems around them are disconnected.

            </p>

            <p

              style={newYorkFont}

              className="

                mt-4

                text-[13px]

                leading-[1.7]

                text-[#536D85]

                sm:text-[14px]

              "

            >

              Let’s identify where automation can remove friction, improve

              response times and give people more room for work that actually

              needs them.

            </p>

          </motion.div>

          {/* =================================================

              CTA BUTTONS

          ================================================= */}

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

              amount: 0.4,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.7,

              delay: reduceMotion ? 0 : 0.2,

              ease,

            }}

            className="

              relative

              z-10

              mt-9

              flex

              flex-col

              items-center

              justify-center

              gap-3

              sm:flex-row

              sm:gap-4

            "

          >

            {/* PRIMARY */}

            <Link

              href="/contact?service=ai-automation&need=automation-discovery#contact-form"
              title="Find What We Can Automate"
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

                Find What We Can Automate

              </span>

            </Link>

          </motion.div>

          {/* =================================================

              SUPPORTING LINE

          ================================================= */}

          <motion.div

            initial={

              reduceMotion

                ? false

                : {

                    opacity: 0,

                  }

            }

            whileInView={{

              opacity: 1,

            }}

            viewport={{

              once: true,

              amount: 0.5,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.7,

              delay: reduceMotion ? 0 : 0.25,

              ease,

            }}

            className="

              relative

              z-10

              mx-auto

              mt-10

              flex

              max-w-[650px]

              items-center

              justify-center

              gap-4

            "

          >

            <span

              className="

                h-px

                flex-1

                bg-[linear-gradient(90deg,transparent,#C6A77A)]

              "

            />

           

          </motion.div>

          {/* =================================================

              BOTTOM MICRO DETAIL

          ================================================= */}

          <div

            className="

              relative

              z-10

              mx-auto

              mt-7

              flex

              items-center

              justify-center

              gap-3

            "

          >

            

          </div>

        </div>

      </div>

    </section>

  );

}
