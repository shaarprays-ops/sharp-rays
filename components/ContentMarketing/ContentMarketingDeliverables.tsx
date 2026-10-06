"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import {

  FileText,

  Search,

  Map,

  PenLine,

  Settings2,

  Link2,

  BarChart3,

  ArrowRight,

} from "lucide-react";

const deliverables = [

  {

    number: "01",

    title: "Content Strategy",

    description:

      "Audience priorities, content objectives, topic direction, content pillars and channel recommendations.",

    icon: FileText,

  },

  {

    number: "02",

    title: "Topic & Search Research",

    description:

      "Research into customer questions, relevant search demand, content gaps and commercial opportunities.",

    icon: Search,

  },

  {

    number: "03",

    title: "Content Roadmap",

    description:

      "A prioritized plan for what needs to be created, improved or consolidated.",

    icon: Map,

  },

  {

    number: "04",

    title: "Content Briefs",

    description:

      "Clear guidance covering purpose, audience, search intent, structure, supporting topics and desired action.",

    icon: FileText,

  },

  {

    number: "05",

    title: "Content Creation",

    description:

      "Agreed website pages, articles, guides, case studies, thought leadership or other content formats.",

    icon: PenLine,

  },

  {

    number: "06",

    title: "Content Optimization",

    description:

      "Updates to existing pages to improve usefulness, relevance, structure and search performance.",

    icon: Settings2,

  },

  {

    number: "07",

    title: "Internal Linking",

    description:

      "Contextual connections between related website pages to strengthen navigation and topical relationships.",

    icon: Link2,

  },

  {

    number: "08",

    title: "Content Performance Reporting",

    description:

      "Relevant insights covering visibility, engagement, traffic, conversions and future content opportunities.",

    icon: BarChart3,

  },

];

const finalPlan = [

  "Topics",

  "Formats",

  "Monthly volumes",

  "Responsibilities",

  "Review process",

  "Timelines",

  "Distribution",

  "Reporting",

  "Commercial scope",

];

export default function ContentMarketingDeliverables() {

  const reduceMotion = useReducedMotion();

  const fadeUp = {

    hidden: {

      opacity: 0,

      y: reduceMotion ? 0 : 24,

    },

    visible: {

      opacity: 1,

      y: 0,

      transition: {

        duration: reduceMotion ? 0 : 0.72,

        ease: [0.22, 1, 0.36, 1] as const,

      },

    },

  };

  return (

    <section

      id="content-marketing-deliverables"

      aria-labelledby="content-marketing-deliverables-heading"

      className="

        relative

        overflow-hidden

        bg-white

        py-20

        sm:py-24

        lg:py-28

        xl:py-32

      "

    >

      {/* =====================================================

          BACKGROUND

      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* center glow */}

        <div

          className="

            absolute

            left-1/2

            top-[34%]

            h-[650px]

            w-[920px]

            -translate-x-1/2

            rounded-full

            bg-[#EDF6FF]/55

            blur-[150px]

          "

        />

        {/* lower left soft shape */}

        <div

          className="

            absolute

            -bottom-[250px]

            -left-[220px]

            h-[520px]

            w-[520px]

            rounded-full

            bg-[#F8F1E9]/45

            blur-[100px]

          "

        />

        {/* lower right soft blue */}

        <div

          className="

            absolute

            -bottom-[260px]

            -right-[220px]

            h-[520px]

            w-[520px]

            rounded-full

            bg-[#EEF6FF]/60

            blur-[105px]

          "

        />

        {/* TOP RIGHT CIRCLES */}

        <div

          className="

            absolute

            -right-[155px]

            -top-[150px]

            hidden

            h-[430px]

            w-[430px]

            rounded-full

            border

            border-[#C79A73]/20

            xl:block

          "

        />

        <div

          className="

            absolute

            -right-[115px]

            -top-[110px]

            hidden

            h-[350px]

            w-[350px]

            rounded-full

            border

            border-[#C79A73]/15

            xl:block

          "

        />

        <div

          className="

            absolute

            right-[180px]

            top-[90px]

            hidden

            h-2

            w-2

            rounded-full

            bg-[#B88758]

            xl:block

          "

        />

        {/* TOP RIGHT MICROCOPY */}

        <div

          className="

            absolute

            right-[55px]

            top-[78px]

            hidden

            text-[0.57rem]

            font-medium

            uppercase

            leading-[2]

            tracking-[0.18em]

            text-[#9B8471]

            xl:block

          "

        >

          <div>Strategy</div>

          <div>Creation</div>

          <div>Optimization</div>

          <div>Growth</div>

          <span

            className="

              mt-3

              block

              h-px

              w-7

              bg-[#B88758]

            "

          />

        </div>

      </div>

      {/* =====================================================

          MAIN CONTAINER

      ===================================================== */}

      <div

        className="

          relative

          z-10

          mx-auto

          w-full

          max-w-[1400px]

          px-5

          sm:px-8

          lg:px-12

          xl:px-16

        "

      >

        {/* =====================================================

            INTRO

        ===================================================== */}

        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{

            once: true,

            amount: 0.22,

          }}

          transition={{

            staggerChildren: reduceMotion ? 0 : 0.09,

          }}

          className="

            mx-auto

            max-w-[1040px]

            text-center

          "

        >

          {/* eyebrow */}

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

              Content Marketing Deliverables

            </span>

            <span className="h-px w-11 bg-[#B88758]" />

          </motion.div>

          {/* heading */}

          <motion.h2

            id="content-marketing-deliverables-heading"

            variants={fadeUp}

            className="

              mx-auto

              mt-5

              max-w-[1000px]

              font-serif

              font-medium

              leading-[0.98]

              tracking-[-0.045em]

              text-[#0B2A52]

              text-[2.45rem]

              sm:text-[2.85rem]

              md:text-[3.2rem]

              lg:text-[3.65rem]

              xl:text-[4.05rem]

            "

          >

            Clear Content.

            <br />

            <span

              className="

                font-normal

                italic

                text-[#B86F3F]

              "

            >

              Clear Responsibilities.

            </span>

          </motion.h2>

          {/* description */}

          <motion.div

            variants={fadeUp}

            className="

              mx-auto

              mt-6

              max-w-[820px]

              space-y-2

              text-[0.95rem]

              leading-[1.65]

              text-[#506986]

              sm:text-[1rem]

            "

          >

            <p>

              Your proposal defines the exact deliverables included in your

              content marketing plan.

            </p>

            <p>

              Depending on the selected scope, your service may include:

            </p>

          </motion.div>

        </motion.div>

        {/* =====================================================

            DELIVERABLES GRID

        ===================================================== */}

        <div

          className="

            mx-auto

            mt-12

            grid

            max-w-[1180px]

            gap-4

            md:grid-cols-2

            lg:mt-14

          "

        >

          {deliverables.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.article

                key={item.number}

                initial={{

                  opacity: 0,

                  x:

                    reduceMotion

                      ? 0

                      : index % 2 === 0

                        ? -26

                        : 26,

                  y: reduceMotion ? 0 : 14,

                }}

                whileInView={{

                  opacity: 1,

                  x: 0,

                  y: 0,

                }}

                viewport={{

                  once: true,

                  amount: 0.28,

                  margin: "-50px",

                }}

                transition={{

                  duration: reduceMotion ? 0 : 0.65,

                  delay:

                    reduceMotion

                      ? 0

                      : (index % 4) * 0.04,

                  ease: [0.22, 1, 0.36, 1],

                }}

                className="

                  group

                  relative

                  min-h-[155px]

                  overflow-hidden

                  rounded-[1rem]

                  border

                  border-[#BFD2E5]

                  bg-white/85

                  px-5

                  py-5

                  shadow-[0_10px_30px_rgba(11,42,82,0.035)]

                  backdrop-blur-sm

                  transition-all

                  duration-300

                  hover:-translate-y-1

                  hover:border-[#89AACE]

                  hover:bg-[#F9FCFF]

                  hover:shadow-[0_18px_42px_rgba(11,42,82,0.08)]

                  sm:px-6

                  sm:py-6

                "

              >

                <div

                  className="

                    grid

                    grid-cols-[64px_1fr_42px]

                    items-center

                    gap-4

                    sm:grid-cols-[72px_1fr_44px]

                    sm:gap-5

                  "

                >

                  {/* ICON */}

                  <div

                    className="

                      flex

                      h-[64px]

                      w-[64px]

                      items-center

                      justify-center

                      rounded-full

                      bg-[#EAF4FF]

                      text-[#0B2A52]

                      transition-all

                      duration-300

                      group-hover:bg-[#DDEEFF]

                      group-hover:scale-[1.03]

                      sm:h-[68px]

                      sm:w-[68px]

                    "

                  >

                    <Icon

                      size={27}

                      strokeWidth={1.7}

                    />

                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0">

                    {/* number */}

                    <div

                      className="

                        flex

                        items-center

                        gap-3

                      "

                    >

                      <span

                        className="

                          font-serif

                          text-[0.9rem]

                          font-medium

                          text-[#B36E3F]

                        "

                      >

                        {item.number}

                      </span>

                      <span

                        className="

                          h-px

                          w-6

                          bg-[#B88758]

                        "

                      />

                    </div>

                    {/* title */}

                    <h3

                      className="

                        mt-2

                        font-serif

                        text-[1.18rem]

                        font-medium

                        leading-[1.15]

                        tracking-[-0.02em]

                        text-[#0B2A52]

                        sm:text-[1.28rem]

                      "

                    >

                      {item.title}

                    </h3>

                    {/* description */}

                    <p

                      className="

                        mt-2

                        max-w-[440px]

                        text-[0.82rem]

                        leading-[1.48]

                        text-[#526C89]

                        sm:text-[0.86rem]

                      "

                    >

                      {item.description}

                    </p>

                  </div>

                  {/* ARROW */}

                  <div

                    className="

                      flex

                      h-10

                      w-10

                      items-center

                      justify-center

                      rounded-full

                      border

                      border-[#AFC7DF]

                      bg-white

                      text-[#0B2A52]

                      transition-all

                      duration-300

                      group-hover:translate-x-1

                      group-hover:border-[#0B2A52]

                      group-hover:bg-[#0B2A52]

                      group-hover:text-white

                    "

                  >

                    <ArrowRight

                      size={17}

                      strokeWidth={1.6}

                    />

                  </div>

                </div>

              </motion.article>

            );

          })}

        </div>

        {/* =====================================================

            FINAL PLAN PANEL

        ===================================================== */}

        <motion.div

          initial={{

            opacity: 0,

            y: reduceMotion ? 0 : 28,

          }}

          whileInView={{

            opacity: 1,

            y: 0,

          }}

          viewport={{

            once: true,

            amount: 0.3,

          }}

          transition={{

            duration: reduceMotion ? 0 : 0.8,

            ease: [0.22, 1, 0.36, 1],

          }}

          className="

            relative

            mx-auto

            mt-6

            max-w-[1180px]

            overflow-hidden

            rounded-[1rem]

            border

            border-[#0B3A68]

            bg-gradient-to-r

            from-[#0B2A52]

            via-[#173F69]

            to-[#7890A8]

            shadow-[0_20px_50px_rgba(11,42,82,0.14)]

            sm:mt-7

          "

        >

          {/* RIGHT DECORATIVE CIRCLES */}

          <div

            className="

              pointer-events-none

              absolute

              -right-[60px]

              -top-[90px]

              h-[250px]

              w-[250px]

              rounded-full

              border

              border-white/10

            "

          />

          <div

            className="

              pointer-events-none

              absolute

              -right-[15px]

              -top-[45px]

              h-[160px]

              w-[160px]

              rounded-full

              border

              border-white/10

            "

          />

          {/* CONTENT */}

          <div

            className="

              relative

              z-10

              grid

              items-center

              gap-7

              px-6

              py-7

              sm:px-8

              lg:grid-cols-[1fr_1px_310px]

              lg:gap-8

              lg:px-10

              lg:py-8

            "

          >

            {/* LEFT */}

            <div>

              <span

                className="

                  text-[0.58rem]

                  font-semibold

                  uppercase

                  tracking-[0.27em]

                  text-[#D7E8F8]

                "

              >

                Your Final Plan Confirms

              </span>

              {/* tags */}

              <div

                className="

                  mt-4

                  flex

                  flex-wrap

                  items-center

                  gap-x-3

                  gap-y-2

                "

              >

                {finalPlan.map((item, index) => (

                  <div

                    key={item}

                    className="

                      flex

                      items-center

                      gap-3

                    "

                  >

                    <span

                      className="

                        font-serif

                        text-[0.93rem]

                        italic

                        text-white

                      "

                    >

                      {item}

                    </span>

                    {index !== finalPlan.length - 1 && (

                      <span

                        className="

                          text-[0.7rem]

                          text-[#E3B68E]

                        "

                      >

                        •

                      </span>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* DIVIDER */}

            <div

              className="

                hidden

                h-[72px]

                w-px

                bg-white/20

                lg:block

              "

            />

            {/* CTA */}

            <div

              className="

                flex

                lg:justify-end

              "

            >

              <Link

               href="/contact?service=content-marketing&need=content-plan#contact-form"
              title="Let's Build Your Plan"
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
                  Let&apos;s Build Your Plan
                </span>

              </Link>

            </div>

          </div>

        </motion.div>

        {/* =====================================================

            BOTTOM DETAILS

        ===================================================== */}

        <div

          className="

            relative

            mx-auto

            mt-4

            max-w-[1180px]

          "

        >

          {/* LEFT HANDWRITTEN NOTE */}

          <motion.div

            initial={{

              opacity: 0,

              x: reduceMotion ? 0 : -15,

            }}

            whileInView={{

              opacity: 1,

              x: 0,

            }}

            viewport={{

              once: true,

            }}

            className="

              absolute

              -left-[45px]

              -top-[10px]

              hidden

              -rotate-[7deg]

              font-serif

              text-[0.9rem]

              italic

              leading-[1.05]

              text-[#A86839]

              xl:block

            "

          >

            Content

            <br />

            That Creates

            <br />

            Opportunity

          </motion.div>

          {/* RIGHT MICROCOPY */}

          <div

            className="

              flex

              items-center

              justify-end

              gap-3

              pr-2

              text-[0.55rem]

              font-semibold

              uppercase

              tracking-[0.22em]

              text-[#A56C38]

            "

          >

            <span>Ideas</span>

            <ArrowRight

              size={12}

              strokeWidth={1.6}

            />

            <span>Impact</span>

          </div>

        </div>

      </div>

    </section>

  );

}
