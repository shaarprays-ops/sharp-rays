"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  FileText,
  Paintbrush,
  Target,
  UsersRound,
} from "lucide-react";

const newYorkFont = {
  fontFamily: '"New York", "", Georgia, serif',
};

const fitItems = [
  {
    number: "01",
    eyebrow: "Strategy",
    title: "Have no clear social strategy.",
    shortTitle: "Clearer strategy.",
    description:
      "Your team is publishing, but there is no clear system connecting audience, platforms, content themes and business priorities.",
    insight:
      "We define what your brand should communicate, who it needs to reach and what role social media should play in the wider business.",
    icon: FileText,
  },
  {
    number: "02",
    eyebrow: "Consistency",
    title: "Struggle to publish consistently.",
    shortTitle: "A repeatable rhythm.",
    description:
      "Content depends on available time, last-minute ideas or whoever happens to be free enough to publish.",
    insight:
      "We create a practical rhythm around planning, content production, approvals and publishing so consistency becomes part of the system.",
    icon: CalendarDays,
  },
  {
    number: "03",
    eyebrow: "Creative",
    title: "Need stronger creative direction.",
    shortTitle: "A recognizable presence.",
    description:
      "Your posts may be polished individually, but together they do not create a strong or recognizable brand presence.",
    insight:
      "We build clearer creative direction around visual language, formats, messaging and recurring ideas so the brand feels connected.",
    icon: Paintbrush,
  },
  {
    number: "04",
    eyebrow: "Management",
    title: "Lack an internal social media team.",
    shortTitle: "The right support system.",
    description:
      "Content, design, copy and community management are being handled across different people without clear ownership.",
    insight:
      "We bring strategy, coordination and ongoing management together so your internal team does not have to carry every moving part.",
    icon: UsersRound,
  },
  {
    number: "05",
    eyebrow: "Growth",
    title: "Want social connected to business objectives.",
    shortTitle: "Activity with a purpose.",
    description:
      "You want social media to support more than visibility and become part of how the business builds awareness, trust and demand.",
    insight:
      "We connect social activity to the outcomes that matter to your business instead of treating posting as the objective.",
    icon: Target,
  },
];

const parent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SocialMediaFitSection() {
  const [active, setActive] = useState(0);

  const selected = fitItems[active];

  return (
    <section
      id="who-we-work-with"
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
          BACKGROUND
      ===================================================== */}

     
     

      
     

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1450px]
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
          viewport={{ once: true, amount: 0.4 }}
          variants={parent}
          className="
            mx-auto
            max-w-[1020px]
            text-center
          "
        >
          <motion.div
            variants={reveal}
            className="
              mb-7
              flex
              items-center
              justify-center
              gap-4
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
                tracking-[0.4em]
                text-[#B79A72]
                sm:text-[11px]
              "
            >
              Who We Work With
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
            variants={reveal}
            style={newYorkFont}
            className="
              text-[2.6rem]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#0B2A52]

              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Is Social Media Management
            <br className="hidden sm:block" />
            <span> Right for </span>
            <span className="text-[#B79A72]">
              Your Business?
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="
              mx-auto
              mt-7
              max-w-[710px]
              text-[15px]
              leading-[1.8]
              text-[#647B9B]
              sm:text-[16px]
            "
          >
            Social media management works best when your business needs
            more than another posting schedule. It needs clearer direction,
            stronger consistency and a system behind the content.
          </motion.p>
        </motion.div>

        {/* =====================================================
            MAIN EXPERIENCE
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            gap-12

            lg:mt-20
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-stretch
            lg:gap-14

            xl:grid-cols-[0.86fr_1.14fr]
            xl:gap-20
          "
        >
          {/* ===================================================
              LEFT — INTERACTIVE EDITORIAL PANEL
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#C8DBEC]/65
              bg-gradient-to-br
              from-[#EDF6FF]
              via-[#F7FBFF]
              to-white

              p-7
              shadow-[0_30px_80px_rgba(11,42,82,0.08)]

              sm:p-9
              lg:min-h-[620px]
              lg:p-10
              xl:p-12
            "
          >
            {/* Decorative top line */}

            <div
              className="
                absolute
                left-0
                top-0
                h-[3px]
                w-[34%]
                bg-gradient-to-r
                from-[#0B2A52]
                via-[#5E86B1]
                to-transparent
              "
            />

            {/* Soft glow */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -right-28
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#D9ECFF]
                blur-[65px]
              "
            />

            {/* Large subtle number */}

            

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              "
            >
              {/* Top metadata */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-white
                      bg-white/80
                      text-[#174C82]
                      shadow-[0_8px_30px_rgba(11,42,82,0.07)]
                    "
                  >
                    <selected.icon
                      className="h-[19px] w-[19px]"
                      strokeWidth={1.65}
                    />
                  </span>

                  <div>
                    

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#345D89]
                      "
                    >
                      {selected.eyebrow}
                    </p>
                  </div>
                </div>

               

              </div>

              {/* Main statement */}

              <motion.div
                key={`${selected.number}-content`}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-16
                  sm:mt-20
                  lg:mt-auto
                  lg:mb-auto
                "
              >
                <span
                  className="
                    mb-6
                    block
                    h-[2px]
                    w-12
                    bg-[#B78F61]
                  "
                />

                <h3
                  style={newYorkFont}
                  className="
                    max-w-[430px]
                    text-[36px]
                    font-medium
                    leading-[1]
                    tracking-[-0.045em]
                    text-[#0B2A52]

                    sm:text-[42px]
                    lg:text-[45px]
                    xl:text-[49px]
                  "
                >
                  {selected.shortTitle}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[450px]
                    text-[14px]
                    leading-[1.85]
                    text-[#657B98]
                    sm:text-[15px]
                  "
                >
                  {selected.insight}
                </p>
              </motion.div>

              {/* Bottom philosophy */}

              <div
                className="
                  mt-12
                  border-t
                  border-[#BFD2E5]/65
                  pt-6
                  lg:mt-auto
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-7
                  "
                >
                  <p
                    className="
                      max-w-[310px]
                      text-[10px]
                      font-semibold
                      uppercase
                      leading-[1.8]
                      tracking-[0.25em]
                      text-[#476A91]
                    "
                  >
                    Strategy · Content · Community · Growth
                  </p>

                  <span
                    className="
                      mt-1
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-[#B79061]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — DIAGNOSTIC LIST
          =================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={parent}
            className="
              flex
              flex-col
              justify-center
            "
          >
            <motion.div
              variants={reveal}
              className="
                mb-5
                flex
                items-center
                justify-between
                gap-5
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.34em]
                  text-[#164D87]
                  sm:text-[11px]
                "
              >
                Does this sound familiar?
              </p>

             
            </motion.div>

            <div className="border-t border-[#C8D9EA]">
              {fitItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === active;

                return (
                  <motion.button
                    key={item.number}
                    variants={reveal}
                    type="button"
                    onClick={() => setActive(index)}
                    className="
                      group
                      relative
                      block
                      w-full
                      overflow-hidden
                      border-b
                      border-[#D2DFEB]
                      text-left
                    "
                  >
                    {/* Active wash */}

                    <span
                      className={`
                        pointer-events-none
                        absolute
                        inset-0
                        origin-left
                        bg-gradient-to-r
                        from-[#EDF6FF]
                        via-[#F7FBFF]
                        to-transparent
                        transition-transform
                        duration-500
                        ease-out

                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />

                    {/* Accent rail */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-1/2
                        h-[55%]
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#B79061]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-60"
                        }
                      `}
                    />

                    <div
                      className="
                        relative
                        z-10
                        grid
                        grid-cols-[44px_1fr_auto]
                        items-center
                        gap-4
                        py-5
                        pl-4
                        pr-1

                        sm:grid-cols-[54px_1fr_auto]
                        sm:gap-5
                        sm:py-[22px]
                        sm:pl-5
                      "
                    >
                      {/* Number */}

                      <span
                        style={newYorkFont}
                        className={`
                          text-[17px]
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-[#B58B5C]"
                              : "text-[#94A9BF]"
                          }
                        `}
                      >
                        {item.number}
                      </span>

                      {/* Main content */}

                      <div className="min-w-0">
                        <div
                          className="
                            mb-1.5
                            flex
                            items-center
                            gap-2.5
                          "
                        >
                          <Icon
                            className={`
                              h-[14px]
                              w-[14px]
                              transition-colors
                              duration-300

                              ${
                                isActive
                                  ? "text-[#164D87]"
                                  : "text-[#91A8BF]"
                              }
                            `}
                            strokeWidth={1.7}
                          />

                          <span
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.3em]
                              text-[#7893AF]
                            "
                          >
                            {item.eyebrow}
                          </span>
                        </div>

                        <h4
                          style={newYorkFont}
                          className={`
                            text-[18px]
                            leading-[1.35]
                            tracking-[-0.02em]
                            transition-colors
                            duration-300

                            sm:text-[20px]
                            lg:text-[21px]

                            ${
                              isActive
                                ? "text-[#0B2A52]"
                                : "text-[#365474]"
                            }
                          `}
                        >
                          {item.title}
                        </h4>

                        {/* Description appears only for active */}

                        <div
                          className={`
                            grid
                            transition-all
                            duration-500

                            ${
                              isActive
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <p
                              className="
                                max-w-[580px]
                                pt-3
                                text-[13px]
                                leading-[1.75]
                                text-[#7187A2]
                                sm:text-[14px]
                              "
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action */}

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? `
                                rotate-45
                                border-[#678BAF]/35
                                bg-white
                                text-[#0B2A52]
                                shadow-[0_6px_18px_rgba(11,42,82,0.06)]
                              `
                              : `
                                border-transparent
                                text-[#8CA5BE]
                                group-hover:border-[#AFC5D9]/60
                                group-hover:bg-white
                                group-hover:text-[#0B2A52]
                              `
                          }
                        `}
                      >
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.6}
                        />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CONCLUSION + CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            border-t
            border-[#D6E3EF]
            pt-10

            sm:mt-20
            sm:pt-12

            lg:flex
            lg:items-end
            lg:justify-between
            lg:gap-12
          "
        >
          {/* Closing statement */}

          <div className="max-w-[720px]">
            <p
              className="
                mb-4
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.37em]
                text-[#A0784F]
              "
            >
              The principle
            </p>

            <h3
              style={newYorkFont}
              className="
                text-[30px]
                font-medium
                leading-[1.08]
                tracking-[-0.035em]
                text-[#0B2A52]

                sm:text-[36px]
                lg:text-[39px]
              "
            >
              You do not need more random activity.
              <span className="text-[#B58B5C]">
                {" "}
                You need clearer direction.
              </span>
            </h3>
          </div>

          {/* CTA */}

          <div
            className="
              mt-8
              shrink-0
              lg:mt-0
            "
          >
            <Link
              href="/contact"
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
              {/* STATIC SOFT BORDER */}
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

              {/* VERY SUBTLE INNER LIGHT */}
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
                Talk About My Social Media
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}