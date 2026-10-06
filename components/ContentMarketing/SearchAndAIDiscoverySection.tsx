"use client";

import { motion, useReducedMotion } from "framer-motion";

import {

  Search,

  Sparkles,

  FileText,

  MessageCircle,

  UsersRound,

  BookOpenText,

  BrainCircuit,

  Target,

  Lightbulb,

  ShieldCheck,

  Network,

  BriefcaseBusiness,

  Layers3,

  ArrowRight,

  Check,

} from "lucide-react";

/* =========================================================

   DISCOVERY CHANNELS

\========================================================= */

const discoveryChannels = [

  {

    title: "Google Search",

    description: "Rank for what matters.",

    icon: Search,

    card:

      "border-[#B9D6F2] bg-gradient-to-br from-[#F3F9FF] via-white to-[#F7FBFF]",

    iconBox: "bg-[#DCEEFF] text-[#1264B5]",

  },

  {

    title: "AI Overviews",

    description: "Be part of AI-generated answers.",

    icon: Sparkles,

    card:

      "border-[#D8C8F0] bg-gradient-to-br from-[#FAF6FF] via-white to-[#FBF9FF]",

    iconBox: "bg-[#EEE3FF] text-[#7040B0]",

  },

  {

    title: "AI-assisted Search",

    description: "Show up in conversational results.",

    icon: FileText,

    card:

      "border-[#F0CFB6] bg-gradient-to-br from-[#FFF7F1] via-white to-[#FFF9F5]",

    iconBox: "bg-[#FCE8D7] text-[#D66B2A]",

  },

  {

    title: "Conversational Tools",

    description: "Reach users in new ways.",

    icon: MessageCircle,

    card:

      "border-[#BFE0D8] bg-gradient-to-br from-[#F1FBF8] via-white to-[#F7FCFA]",

    iconBox: "bg-[#DDF3ED] text-[#258D75]",

  },

  {

    title: "Social Platforms",

    description: "Meet your audience where they search.",

    icon: UsersRound,

    card:

      "border-[#EEC6D8] bg-gradient-to-br from-[#FFF4F8] via-white to-[#FFF8FB]",

    iconBox: "bg-[#FCE0EC] text-[#D3347B]",

  },

  {

    title: "Industry Publications",

    description: "Build authority beyond search.",

    icon: BookOpenText,

    card:

      "border-[#C5DBF2] bg-gradient-to-br from-[#F4F9FF] via-white to-[#F8FBFF]",

    iconBox: "bg-[#DFECFB] text-[#2363B0]",

  },

];

/* =========================================================

   CONTENT PRINCIPLES

\========================================================= */

const principles = [

  {

    number: "01",

    title: "Easy to understand",

    description:

      "Clear language and logical structure make complex ideas easier to follow.",

    icon: BrainCircuit,

    card:

      "border-[#C3DAF1] bg-gradient-to-br from-[#F6FAFF] via-white to-[#F9FCFF]",

    iconBox: "bg-[#DFEEFE] text-[#1965BA]",

    arrow: "bg-[#FBE8D9] text-[#9C5B2A]",

  },

  {

    number: "02",

    title: "Specific enough to be useful",

    description:

      "Real examples, expertise and detail are more valuable than generic summaries.",

    icon: FileText,

    card:

      "border-[#BFDFD7] bg-gradient-to-br from-[#F4FBF8] via-white to-[#F9FCFA]",

    iconBox: "bg-[#DCF2EA] text-[#25836D]",

    arrow: "bg-[#DFF2EA] text-[#227961]",

  },

  {

    number: "03",

    title: "Original enough to add something",

    description:

      "Your content should contribute a perspective rather than repeat what already exists.",

    icon: Lightbulb,

    card:

      "border-[#D9C9F1] bg-gradient-to-br from-[#FBF8FF] via-white to-[#FCFAFF]",

    iconBox: "bg-[#EEE3FE] text-[#7147B1]",

    arrow: "bg-[#EEE3FE] text-[#7045B0]",

  },

  {

    number: "04",

    title: "Supported by credible information",

    description:

      "Claims should have evidence, experience or reliable sources behind them.",

    icon: ShieldCheck,

    card:

      "border-[#F0CDB3] bg-gradient-to-br from-[#FFF8F2] via-white to-[#FFFAF7]",

    iconBox: "bg-[#FCE6D5] text-[#C7662A]",

    arrow: "bg-[#FBE7D8] text-[#A75C2A]",

  },

  {

    number: "05",

    title: "Connected to wider topics",

    description:

      "Related pages and internal links help create a clearer understanding of what your business knows.",

    icon: Network,

    card:

      "border-[#EEC7D9] bg-gradient-to-br from-[#FFF5F9] via-white to-[#FFF9FB]",

    iconBox: "bg-[#FADDE9] text-[#CE3675]",

    arrow: "bg-[#FADDE9] text-[#B52F68]",

  },

  {

    number: "06",

    title: "Connected to a real business",

    description:

      "Clear authorship, business information, expertise and real-world context strengthen trust.",

    icon: BriefcaseBusiness,

    card:

      "border-[#BDD5EF] bg-gradient-to-br from-[#F4F9FF] via-white to-[#F9FCFF]",

    iconBox: "bg-[#DEECFB] text-[#2163B0]",

    arrow: "bg-[#DFEDFB] text-[#1E61AC]",

  },

];

/* =========================================================

   COMPONENT

\========================================================= */

export default function SearchAndAIDiscoverySection() {

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

        duration: reduceMotion ? 0 : 0.75,

        ease: [0.22, 1, 0.36, 1] as const,

      },

    },

  };

  return (

    <section

      id="content-search-ai-discovery"

      aria-labelledby="search-ai-heading"

      className="

        relative

        overflow-hidden

        bg-white

        pt-20

        sm:pt-24

        lg:pt-28

        xl:pt-32

      "

    >

      {/* =====================================================

          GLOBAL BACKGROUND

      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div

          className="

            absolute

            left-1/2

            top-[14%]

            h-[500px]

            w-[900px]

            -translate-x-1/2

            rounded-full

            bg-[#EEF6FF]/60

            blur-[150px]

          "

        />

        <div

          className="

            absolute

            -left-[220px]

            top-[22%]

            h-[420px]

            w-[420px]

            rounded-full

            bg-[#FFF4EA]/45

            blur-[130px]

          "

        />

      </div>

      {/* =====================================================

          TOP CONTAINER

      ===================================================== */}

      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1440px]

          px-5

          sm:px-8

          lg:px-12

          xl:px-16

        "

      >

        {/* =================================================

            HEADER

        ================================================= */}

        <motion.header

          initial="hidden"

          whileInView="visible"

          viewport={{

            once: true,

            amount: 0.25,

          }}

          transition={{

            staggerChildren: reduceMotion ? 0 : 0.1,

          }}

          className="

            mx-auto

            max-w-[1100px]

            text-center

          "

        >

          {/* EYEBROW */}

          <motion.div

            variants={fadeUp}

            className="

              flex

              items-center

              justify-center

              gap-4

            "

          >

            <span className="h-px w-11 bg-[#B88758]" />

            <span

              className="

                text-[0.67rem]

                font-semibold

                uppercase

                tracking-[0.3em]

                text-[#A56C38]

                sm:text-[0.73rem]

              "

            >

              Search Is Changing

            </span>

            <span className="h-px w-11 bg-[#B88758]" />

          </motion.div>

          {/* HEADING */}

          <motion.h2

            id="search-ai-heading"

            variants={fadeUp}

            className="

              mx-auto

              mt-5

              max-w-[1080px]

              font-serif

              text-[2.25rem]

              font-medium

              leading-[1.05]

              tracking-[-0.04em]

              text-[#0B2A52]

              sm:text-[2.6rem]

              md:text-[2.95rem]

              lg:text-[3.1rem]

              xl:text-[3.35rem]

            "

          >

            Content for Google Search, AI Overviews and{" "}

            <span

              className="

                font-normal

                italic

                text-[#B88758]

              "

            >

              Generative Discovery.

            </span>

          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div

            variants={fadeUp}

            className="

              mx-auto

              mt-6

              max-w-[850px]

              text-[0.95rem]

              leading-[1.65]

              text-[#526C89]

              sm:text-[1rem]

            "

          >

            <p>

              People no longer discover information through one type of search

              experience.

            </p>

            <p>

              We create content that performs across all of them.

            </p>

          </motion.div>

        </motion.header>

        {/* =================================================

            DISCOVERY CHANNELS

        ================================================= */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 30,

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

            duration: reduceMotion ? 0 : 0.8,

            ease: [0.22, 1, 0.36, 1],

          }}

          className="

            relative

            mx-auto

            mt-12

            max-w-[1240px]

          "

        >

          {/* HANDWRITTEN LEFT NOTE */}

          <div

            className="

              pointer-events-none

              absolute

              -left-[25px]

              -top-[58px]

              hidden

              -rotate-[8deg]

              font-serif

              text-[1rem]

              italic

              leading-[1.05]

              text-[#A86839]

              xl:block

            "

          >

            More

            <br />

            Places

          </div>

          {/* HANDWRITTEN RIGHT NOTE */}

          <div

            className="

              pointer-events-none

              absolute

              -right-[18px]

              -top-[58px]

              hidden

              rotate-[7deg]

              font-serif

              text-[1rem]

              italic

              leading-[1.05]

              text-[#A86839]

              xl:block

            "

          >

            Bigger

            <br />

            Opportunities

          </div>

          {/* OUTER SHELL */}

          <div

            className="

              relative

              overflow-hidden

              rounded-[2rem]

              border

              border-[#D6E3EF]

              bg-white/75

              p-3

              shadow-[0_20px_60px_rgba(11,42,82,0.07)]

              backdrop-blur-sm

              sm:p-4

            "

          >

            {/* LEFT BLUE CURVE */}

            <div

              className="

                pointer-events-none

                absolute

                -left-[17px]

                top-1/2

                h-[90px]

                w-[34px]

                -translate-y-1/2

                rounded-full

                border-2

                border-r-0

                border-[#3A87E1]

              "

            />

            {/* RIGHT BLUE CURVE */}

            <div

              className="

                pointer-events-none

                absolute

                -right-[17px]

                top-1/2

                h-[90px]

                w-[34px]

                -translate-y-1/2

                rounded-full

                border-2

                border-l-0

                border-[#3A87E1]

              "

            />

            <div

              className="

                grid

                gap-3

                sm:grid-cols-2

                lg:grid-cols-3

                xl:grid-cols-6

              "

            >

              {discoveryChannels.map((channel, index) => {

                const Icon = channel.icon;

                return (

                  <motion.article

                    key={channel.title}

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

                      duration: reduceMotion ? 0 : 0.5,

                      delay:

                        reduceMotion

                          ? 0

                          : index * 0.07,

                      ease: [0.22, 1, 0.36, 1],

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

                      min-h-[185px]

                      overflow-hidden

                      rounded-[1.35rem]

                      border

                      px-4

                      py-5

                      text-center

                      shadow-[0_10px_30px_rgba(11,42,82,0.04)]

                      transition-shadow

                      duration-300

                      hover:shadow-[0_18px_38px_rgba(11,42,82,0.09)]

                      ${channel.card}

                    `}

                  >

                    {/* ICON */}

                    <div

                      className={`

                        mx-auto

                        flex

                        h-[56px]

                        w-[56px]

                        items-center

                        justify-center

                        rounded-full

                        transition-transform

                        duration-300

                        group-hover:scale-105

                        ${channel.iconBox}

                      `}

                    >

                      <Icon

                        size={23}

                        strokeWidth={1.8}

                      />

                    </div>

                    {/* TITLE */}

                    <h3

                      className="

                        mt-4

                        font-serif

                        text-[1rem]

                        font-semibold

                        leading-[1.2]

                        text-[#0B2A52]

                      "

                    >

                      {channel.title}

                    </h3>

                    {/* COPY */}

                    <p

                      className="

                        mx-auto

                        mt-2

                        max-w-[150px]

                        text-[0.8rem]

                        leading-[1.4]

                        text-[#536C85]

                      "

                    >

                      {channel.description}

                    </p>

                  </motion.article>

                );

              })}

            </div>

          </div>

        </motion.div>

        {/* =================================================

            CONVERGENCE

        ================================================= */}

        <div

          className="

            relative

            mx-auto

            mt-2

            flex

            max-w-[820px]

            flex-col

            items-center

          "

        >

          {/* LEFT CURVED ARROW */}

          <svg

            viewBox="0 0 120 80"

            fill="none"

            aria-hidden="true"

            className="

              pointer-events-none

              absolute

              -left-[10px]

              top-[-5px]

              hidden

              h-[90px]

              w-[125px]

              text-[#B88758]/70

              lg:block

            "

          >

            <motion.path

              d="M10 8 C18 44 40 60 72 66"

              stroke="currentColor"

              strokeWidth="1.4"

              strokeLinecap="round"

              initial={{

                pathLength: reduceMotion ? 1 : 0,

              }}

              whileInView={{

                pathLength: 1,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                duration: reduceMotion ? 0 : 0.8,

              }}

            />

            <path

              d="M67 59 L74 66 L65 69"

              stroke="currentColor"

              strokeWidth="1.4"

              strokeLinecap="round"

              strokeLinejoin="round"

            />

          </svg>

          {/* RIGHT CURVED ARROW */}

          <svg

            viewBox="0 0 120 80"

            fill="none"

            aria-hidden="true"

            className="

              pointer-events-none

              absolute

              -right-[10px]

              top-[-5px]

              hidden

              h-[90px]

              w-[125px]

              -scale-x-100

              text-[#B88758]/70

              lg:block

            "

          >

            <motion.path

              d="M10 8 C18 44 40 60 72 66"

              stroke="currentColor"

              strokeWidth="1.4"

              strokeLinecap="round"

              initial={{

                pathLength: reduceMotion ? 1 : 0,

              }}

              whileInView={{

                pathLength: 1,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                duration: reduceMotion ? 0 : 0.8,

              }}

            />

            <path

              d="M67 59 L74 66 L65 69"

              stroke="currentColor"

              strokeWidth="1.4"

              strokeLinecap="round"

              strokeLinejoin="round"

            />

          </svg>

          {/* VERTICAL LINE */}

          <motion.div

            initial={{

              scaleY: reduceMotion ? 1 : 0,

            }}

            whileInView={{

              scaleY: 1,

            }}

            viewport={{

              once: true,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.6,

            }}

            className="

              h-[50px]

              w-px

              origin-top

              bg-gradient-to-b

              from-[#BFD0DE]

              to-[#B88758]

            "

          />

          <span

            className="

              -mt-[3px]

              h-[9px]

              w-[9px]

              rounded-full

              bg-[#B88758]

            "

          />

          {/* NAVY PRINCIPLE PILL */}

          <motion.div

            initial={{

              opacity: 0,

              scale: reduceMotion ? 1 : 0.96,

            }}

            whileInView={{

              opacity: 1,

              scale: 1,

            }}

            viewport={{

              once: true,

              amount: 0.5,

            }}

            transition={{

              duration: reduceMotion ? 0 : 0.65,

              delay: reduceMotion ? 0 : 0.15,

            }}

            className="

              relative

              mt-4

              w-full

              max-w-[560px]

              overflow-hidden

              rounded-full

              border

              border-[#0A3765]

              bg-gradient-to-r

              from-[#0B3560]

              via-[#154C7B]

              to-[#103B68]

              px-6

              py-5

              shadow-[0_18px_45px_rgba(11,42,82,0.18)]

              sm:px-8

            "

          >

            {/* INNER LIGHT */}

            <div

              className="

                pointer-events-none

                absolute

                left-[15%]

                top-0

                h-full

                w-[60%]

                bg-[radial-gradient(circle_at_center,rgba(98,176,231,0.17),transparent_65%)]

              "

            />

            <div

              className="

                relative

                z-10

                flex

                items-center

                justify-center

                gap-5

              "

            >

              <div

                className="

                  flex

                  h-[52px]

                  w-[52px]

                  shrink-0

                  items-center

                  justify-center

                  rounded-full

                  border-[5px]

                  border-white/80

                  bg-[#E7F3FF]

                  text-[#286BB2]

                "

              >

                <Layers3

                  size={21}

                  strokeWidth={1.7}

                />

              </div>

              <div>

                <span

                  className="

                    text-[0.55rem]

                    font-semibold

                    uppercase

                    tracking-[0.22em]

                    text-[#AFCDE8]

                  "

                >

                  Same Principle

                </span>

                <p

                  className="

                    mt-1

                    font-serif

                    text-[1.2rem]

                    leading-[1.2]

                    text-white

                    sm:text-[1.45rem]

                  "

                >

                  Useful information{" "}

                  <span

                    className="

                      font-normal

                      italic

                      text-[#E4A470]

                    "

                  >

                    still matters.

                  </span>

                </p>

              </div>

            </div>

          </motion.div>

          {/* SUBCOPY */}

          <p

            className="

              mx-auto

              mt-6

              max-w-[700px]

              text-center

              text-[0.88rem]

              leading-[1.65]

              text-[#526C89]

            "

          >

            The discovery experience is changing. But the requirement for

            useful information remains.

          </p>

        </div>

      </div>

      {/* =====================================================

          LOWER FULL-WIDTH AREA

      ===================================================== */}

      <div

        className="

          relative

          mt-16

          bg-gradient-to-b

          from-[#F5F9FE]

          via-[#F8FBFF]

          to-white

          py-16

          sm:py-20

          lg:mt-20

        "

      >

        <div

          className="

            mx-auto

            w-full

            max-w-[1440px]

            px-5

            sm:px-8

            lg:px-12

            xl:px-16

          "

        >

          {/* =================================================

              LOWER INTRO

          ================================================= */}

          <motion.div

            initial="hidden"

            whileInView="visible"

            viewport={{

              once: true,

              amount: 0.25,

            }}

            transition={{

              staggerChildren: reduceMotion ? 0 : 0.09,

            }}

            className="

              mx-auto

              grid

              max-w-[1220px]

              gap-8

              lg:grid-cols-[0.85fr_1.15fr]

              lg:items-end

              lg:gap-16

            "

          >

            {/* LEFT */}

            <div>

              <motion.span

                variants={fadeUp}

                className="

                  text-[0.67rem]

                  font-semibold

                  uppercase

                  tracking-[0.26em]

                  text-[#A56C38]

                "

              >

                Content That Works

              </motion.span>

              <motion.h3

                variants={fadeUp}

                className="

                  mt-3

                  max-w-[530px]

                  font-serif

                  text-[2rem]

                  font-medium

                  leading-[1.08]

                  tracking-[-0.035em]

                  text-[#0B2A52]

                  sm:text-[2.25rem]

                  lg:text-[2.55rem]

                "

              >

                We build content that is designed to be{" "}

                <span

                  className="

                    font-normal

                    italic

                    text-[#B88758]

                  "

                >

                  genuinely useful.

                </span>

              </motion.h3>

            </div>

            {/* RIGHT */}

            <motion.div

              variants={fadeUp}

              className="

                relative

                max-w-[660px]

              "

            >

              <p

                className="

                  text-[0.93rem]

                  leading-[1.7]

                  text-[#526C89]

                "

              >

                Search systems may change, interfaces may change and discovery

                paths may change. Strong content still needs clarity,

                specificity, originality, context and credibility.

              </p>

              {/* RIGHT NOTE */}

              <div

                className="

                  pointer-events-none

                  absolute

                  -right-[80px]

                  -top-[20px]

                  hidden

                  rotate-[6deg]

                  font-serif

                  text-[1.05rem]

                  italic

                  leading-[1.05]

                  text-[#A86839]

                  xl:block

                "

              >

                Useful

                <br />

                Content

                <br />

                Lasts

              </div>

            </motion.div>

          </motion.div>

          {/* =================================================

              PRINCIPLES GRID

          ================================================= */}

          <div

            className="

              mx-auto

              mt-10

              grid

              max-w-[1220px]

              gap-4

              md:grid-cols-2

              xl:grid-cols-3

            "

          >

            {principles.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.article

                  key={item.number}

                  initial={{

                    opacity: 0,

                    y: reduceMotion ? 0 : 20,

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

                    duration: reduceMotion ? 0 : 0.55,

                    delay:

                      reduceMotion

                        ? 0

                        : (index % 3) * 0.06,

                    ease: [0.22, 1, 0.36, 1],

                  }}

                  whileHover={

                    reduceMotion

                      ? undefined

                      : {

                          y: -4,

                        }

                  }

                  className={`

                    group

                    relative

                    min-h-[178px]

                    overflow-hidden

                    rounded-[1.55rem]

                    border

                    p-5

                    shadow-[0_12px_34px_rgba(11,42,82,0.045)]

                    transition-shadow

                    duration-300

                    hover:shadow-[0_20px_45px_rgba(11,42,82,0.09)]

                    sm:p-6

                    ${item.card}

                  `}

                >

                  <div

                    className="

                      flex

                      h-full

                      items-start

                      gap-4

                    "

                  >

                    {/* ICON */}

                    <div

                      className={`

                        flex

                        h-[58px]

                        w-[58px]

                        shrink-0

                        items-center

                        justify-center

                        rounded-full

                        transition-transform

                        duration-300

                        group-hover:-rotate-3

                        group-hover:scale-105

                        ${item.iconBox}

                      `}

                    >

                      <Icon

                        size={24}

                        strokeWidth={1.7}

                      />

                    </div>

                    {/* COPY */}

                    <div

                      className="

                        min-w-0

                        flex-1

                        pr-9

                      "

                    >

                      <h4

                        className="

                          font-serif

                          text-[1rem]

                          font-semibold

                          leading-[1.25]

                          text-[#0B2A52]

                          sm:text-[1.08rem]

                        "

                      >

                        {item.title}

                      </h4>

                      <span

                        className="

                          mt-2

                          block

                          h-[2px]

                          w-7

                          bg-[#315F8B]

                        "

                      />

                      <p

                        className="

                          mt-3

                          text-[0.8rem]

                          leading-[1.5]

                          text-[#526C89]

                        "

                      >

                        {item.description}

                      </p>

                    </div>

                    {/* ARROW */}

                    <div

                      className={`

                        absolute

                        bottom-5

                        right-5

                        flex

                        h-10

                        w-10

                        items-center

                        justify-center

                        rounded-full

                        transition-transform

                        duration-300

                        group-hover:translate-x-1

                        ${item.arrow}

                      `}

                    >

                      <ArrowRight

                        size={17}

                        strokeWidth={1.7}

                      />

                    </div>

                  </div>

                </motion.article>

              );

            })}

          </div>

          {/* =================================================

              FINAL PERSPECTIVE

          ================================================= */}

          <motion.div

            initial={{

              opacity: 0,

              y: reduceMotion ? 0 : 30,

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

              ease: [0.22, 1, 0.36, 1],

            }}

            className="

              relative

              mx-auto

              mt-12

              max-w-[1220px]

              overflow-hidden

              rounded-[1.8rem]

              border-[1.5px]

              border-[#78A4D2]

              bg-gradient-to-r

              from-[#F8FBFF]

              via-[#F4F9FF]

              to-[#EAF4FE]

              px-6

              py-8

              shadow-[0_18px_48px_rgba(11,42,82,0.06)]

              sm:px-8

              lg:mt-14

              lg:px-11

              lg:py-10

            "

          >

            {/* DECORATIVE CIRCLES */}

            <div

              className="

                pointer-events-none

                absolute

                -right-[45px]

                -top-[80px]

                h-[260px]

                w-[260px]

                rounded-full

                border

                border-white

              "

            />

            <div

              className="

                pointer-events-none

                absolute

                right-[5px]

                -top-[25px]

                h-[160px]

                w-[160px]

                rounded-full

                border

                border-white/80

              "

            />

            <div

              className="

                relative

                z-10

                grid

                items-center

                gap-8

                lg:grid-cols-[1fr_auto]

              "

            >

              {/* COPY */}

              <div>

                <div

                  className="

                    flex

                    items-center

                    gap-4

                  "

                >

                  <span

                    className="

                      text-[0.6rem]

                      font-semibold

                      uppercase

                      tracking-[0.23em]

                      text-[#315B83]

                    "

                  >

                    Our Perspective

                  </span>

                  <span className="h-px w-8 bg-[#B88758]" />

                </div>

                <h3

                  className="

                    mt-5

                    max-w-[850px]

                    font-serif

                    text-[1.6rem]

                    font-medium

                    leading-[1.18]

                    tracking-[-0.03em]

                    text-[#0B2A52]

                    sm:text-[1.85rem]

                    lg:text-[2rem]

                  "

                >

                  Don’t Create Content Just to Feed an Algorithm.

                </h3>

                <p

                  className="

                    mt-2

                    max-w-[900px]

                    font-serif

                    text-[1.45rem]

                    font-normal

                    italic

                    leading-[1.18]

                    tracking-[-0.025em]

                    text-[#B88758]

                    sm:text-[1.7rem]

                    lg:text-[1.9rem]

                  "

                >

                  Create the Source People — and Search Systems — Want to Use.

                </p>

              </div>

              {/* CTA */}

              <a

               href="/contact?service=content-marketing&need=content-strategy#contact-form"
               title="Build My Content Strategy"
                className="
                  group
                  inline-flex
                  min-h-[44px]
                  w-auto
                  items-center
                  justify-center

                  rounded-[14px]

                  border
                  border-[#0B2A52]

                  bg-[#0B2A52]

                  px-4
                  py-2.5

                  text-[11px]
                  font-medium
                  tracking-[-0.01em]
                  !text-white

                  shadow-[0_8px_24px_rgba(11,42,82,0.14)]

                  transition-all
                  duration-300

                  hover:-translate-y-[2px]
                  hover:bg-[#123B6A]
                  hover:!text-white
                  hover:shadow-[0_10px_28px_rgba(11,42,82,0.18)]

                  sm:min-h-[46px]
                  sm:px-5
                  sm:text-[12px]
                "
              >

                <span className="!text-white" style={{ color: "#FFFFFF" }}>
                  Let&apos;s Build Useful Content
                </span>

              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

}
