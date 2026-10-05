"use client";

import Link from "next/link";
import { type ElementType } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  Compass,
  MessageCircle,
  PenTool,
  Send,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

/* =========================================================
   FONT
========================================================= */

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

/* =========================================================
   TYPES
========================================================= */

type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  includeLabel: string;
  items: string[];
  footer?: string;
  icon: ElementType;
  color: string;
  soft: string;
  lighter: string;
  dark: string;
};

/* =========================================================
   SERVICES
========================================================= */

const services: Service[] = [
  {
    number: "01",
    title: "Social Media Strategy",
    shortTitle: "Strategy",
    description:
      "We establish the direction behind your social media presence before deciding what needs to be posted.",
    includeLabel: "This can include:",
    items: [
      "Audience priorities",
      "Platform selection",
      "Brand positioning",
      "Social media objectives",
      "Brand voice",
      "Content pillars",
      "Creative direction",
    ],
    icon: Compass,

    color: "#6386D8",
    soft: "#DDE7FF",
    lighter: "#F2F6FF",
    dark: "#263E78",
  },

  {
    number: "02",
    title: "Content Strategy & Planning",
    shortTitle: "Planning",
    description:
      "We turn your social media strategy into a structured content system.",
    includeLabel: "Your plan can include:",
    items: [
      "Content themes",
      "Publishing priorities",
      "Content formats",
      "Campaign ideas",
      "Content calendars",
      "Approval schedules",
    ],
    icon: CalendarDays,

    color: "#8B74CB",
    soft: "#E8E1FA",
    lighter: "#F7F4FD",
    dark: "#4D397F",
  },

  {
    number: "03",
    title: "Social Media Content Creation",
    shortTitle: "Creation",
    description:
      "We create content designed around your brand, audience and agreed strategy.",
    includeLabel:
      "Depending on your scope, content may include:",
    items: [
      "Social media graphics",
      "Carousels",
      "Captions and social copy",
      "Stories",
      "Short-form video concepts",
      "Reels and video content",
      "Campaign creatives",
    ],
    icon: PenTool,

    color: "#D98170",
    soft: "#F8DED8",
    lighter: "#FFF5F2",
    dark: "#854437",
  },

  {
    number: "04",
    title: "Publishing & Social Media Management",
    shortTitle: "Management",
    description:
      "We help keep your selected social media channels consistent and organized.",
    includeLabel: "This can include:",
    items: [
      "Content scheduling",
      "Publishing",
      "Platform management",
      "Profile coordination",
      "Publishing quality checks",
    ],
    icon: Send,

    color: "#55A99D",
    soft: "#D9F0EC",
    lighter: "#F1FAF8",
    dark: "#286C63",
  },

  {
    number: "05",
    title: "Community Management",
    shortTitle: "Community",
    description:
      "Social media should create conversation, not simply broadcast information.",
    includeLabel:
      "Where included in your scope, community management can cover:",
    items: [
      "Comment responses",
      "Direct message handling",
      "Audience interaction",
      "Basic community monitoring",
      "Escalation of important enquiries",
    ],
    icon: MessageCircle,

    color: "#CF7595",
    soft: "#F4DDE6",
    lighter: "#FFF5F8",
    dark: "#7B3D55",
  },

  {
    number: "06",
    title: "Social Media Reporting & Optimization",
    shortTitle: "Reporting",
    description:
      "Performance data helps us understand what your audience is responding to and what should happen next.",
    includeLabel:
      "Reporting may cover relevant metrics such as:",
    items: [
      "Reach",
      "Engagement",
      "Profile activity",
      "Audience growth",
      "Content performance",
      "Website activity",
      "Enquiries or conversions where measurable",
    ],
    footer:
      "We use those insights to identify patterns, improve content decisions and refine future activity.",
    icon: BarChart3,

    color: "#C79A4B",
    soft: "#F4E8CC",
    lighter: "#FFF9EC",
    dark: "#76571F",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   MAIN SECTION
========================================================= */

export default function SocialMediaMarketingServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social-media-marketing-services"
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
        <div
          className="
            absolute
            left-1/2
            top-[-180px]

            h-[380px]
            w-[700px]
            -translate-x-1/2

            rounded-full

            bg-[#EDF6FC]/65
            blur-[130px]

            sm:w-[900px]
            lg:w-[1100px]
          "
        />

        <div
          className="
            absolute
            -right-[300px]
            top-[42%]

            hidden
            h-[650px]
            w-[650px]

            rounded-full

            border
            border-[#B79A72]/10

            lg:block
          "
        />

        <div
          className="
            absolute
            -left-[330px]
            bottom-[-250px]

            hidden
            h-[650px]
            w-[650px]

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
                  y: 30,
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          {/* LABEL */}

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
                tracking-[0.28em]
                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Our Social Media Marketing Services
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
              mx-auto
              mt-6

              max-w-[900px]

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
            Everything Your Social Presence Needs.{" "}
            <span className="text-[#B79A72]">
              Connected.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[720px]

              text-[14px]
              leading-[1.8]
              text-[#647B98]

              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Our social media management services can cover strategy,
            planning, creative execution, publishing, audience engagement and
            reporting.
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-[680px]

              text-[12px]
              leading-6
              text-[#8193A6]

              sm:text-[13px]
            "
          >
            The final scope depends on your business, platforms, objectives and
            content requirements.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div
          className="
            mt-12

            grid
            grid-cols-1

            gap-5

            sm:mt-14
            sm:gap-6

            md:grid-cols-2

            lg:mt-20
            lg:grid-cols-3
            lg:gap-6

            xl:gap-7
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.68,
                  delay: reduceMotion
                    ? 0
                    : index * 0.06,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                className="
                  group
                  relative

                  flex
                  min-h-0
                  flex-col

                  overflow-hidden

                  rounded-[22px]

                  border

                  bg-white

                  p-5

                  shadow-[0_10px_35px_rgba(11,42,82,0.05)]

                  transition-shadow
                  duration-500

                  hover:shadow-[0_22px_55px_rgba(11,42,82,0.09)]

                  sm:rounded-[24px]
                  sm:p-6

                  lg:p-7
                "
                style={{
                  borderColor: `${service.color}35`,
                }}
              >
                {/* =============================================
                    CARD BACKGROUND
                ============================================= */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                  style={{
                    background: `linear-gradient(
                      180deg,
                      ${service.lighter} 0%,
                      rgba(255,255,255,0.96) 48%,
                      #ffffff 100%
                    )`,
                  }}
                />

                {/* ACCENT TOP */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0

                    h-[3px]
                    w-full
                  "
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${service.color},
                      transparent
                    )`,
                  }}
                />

                {/* GLOW */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none

                    absolute
                    -right-14
                    -top-14

                    h-[160px]
                    w-[160px]

                    rounded-full

                    opacity-50

                    blur-[55px]
                  "
                  style={{
                    backgroundColor: service.soft,
                  }}
                />

                {/* =============================================
                    CARD CONTENT
                ============================================= */}

                <div
                  className="
                    relative
                    z-10

                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* TOP */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    {/* ICON */}

                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0

                        items-center
                        justify-center

                        rounded-[14px]

                        transition-transform
                        duration-500

                        group-hover:scale-[1.05]
                      "
                      style={{
                        backgroundColor: service.soft,
                        color: service.dark,
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                      />
                    </span>

                    {/* NUMBER */}

                
                  </div>

                  {/* CATEGORY */}

                  <p
                    className="
                      mt-6

                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]

                      sm:text-[9px]
                    "
                    style={{
                      color: service.color,
                    }}
                  >
                    {service.shortTitle}
                  </p>

                  {/* TITLE */}

                  <h3
                    style={newYorkFont}
                    className="
                      mt-3
                      max-w-[340px]

                      text-[24px]
                      font-medium
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#0B2A52]

                      sm:text-[25px]
                      xl:text-[27px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4

                      text-[13px]
                      leading-[1.7]
                      text-[#657C95]

                      sm:text-[14px]
                    "
                  >
                    {service.description}
                  </p>

                  {/* DIVIDER */}

                  <div
                    className="
                      my-5
                      h-px
                      w-full
                    "
                    style={{
                      backgroundColor: `${service.color}25`,
                    }}
                  />

                  {/* INCLUDE LABEL */}

                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]

                      sm:text-[9px]
                    "
                    style={{
                      color: service.dark,
                    }}
                  >
                    {service.includeLabel}
                  </p>

                  {/* ITEMS */}

                  <div
                    className="
                      mt-4
                      space-y-2.5
                    "
                  >
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2.5
                        "
                      >
                        <span
                          className="
                            mt-[1px]

                            flex
                            h-[17px]
                            w-[17px]
                            shrink-0

                            items-center
                            justify-center

                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              service.soft,
                            color: service.dark,
                          }}
                        >
                          <Check
                            size={10}
                            strokeWidth={2}
                          />
                        </span>

                        <span
                          className="
                            text-[12.5px]
                            leading-[1.5]
                            text-[#617991]

                            sm:text-[13px]
                          "
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER NOTE */}

                  {service.footer && (
                    <div
                      className="
                        mt-5

                        rounded-[14px]

                        border

                        px-4
                        py-3.5
                      "
                      style={{
                        backgroundColor:
                          service.lighter,
                        borderColor:
                          `${service.color}30`,
                      }}
                    >
                      <p
                        className="
                          text-[11px]
                          leading-[1.65]
                          text-[#647B98]

                          sm:text-[12px]
                        "
                      >
                        {service.footer}
                      </p>
                    </div>
                  )}

                  {/* PUSH CTA TO BOTTOM */}

                  <div className="flex-1" />

                  {/* CTA */}

                  <div
                    className="
                      mt-6

                      border-t
                      pt-5
                    "
                    style={{
                      borderColor:
                        `${service.color}20`,
                    }}
                  >
                    <Link
                      href="/services/social-media-marketing"
                      style={newYorkFont}
                      className="
                        group/button

                        inline-flex
                        items-center
                        gap-2

                        text-[12px]
                        font-semibold
                        tracking-[-0.01em]

                        transition-all
                        duration-300

                        sm:text-[13px]
                      "
                    >
                      <span
                        style={{
                          color: service.dark,
                        }}
                      >
                        Explore Service
                      </span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="
                          transition-transform
                          duration-300

                          group-hover/button:translate-x-1
                          group-hover/button:-translate-y-0.5
                        "
                        style={{
                          color: service.color,
                        }}
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CONVERSION CTA
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
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="
            mx-auto
            mt-12
            max-w-[860px]

            border-t
            border-[#0B2A52]/10

            pt-9
            text-center

            sm:mt-14
            sm:pt-10

            lg:mt-16
            lg:pt-12
          "
        >
          <p
            style={newYorkFont}
            className="
              mx-auto
              max-w-[650px]

              text-[1.4rem]
              font-normal
              leading-[1.2]
              tracking-[-0.03em]

              text-[#0B2A52]

              sm:text-[1.6rem]
              md:text-[1.8rem]
            "
          >
            Need help choosing the right{" "}
            <span className="italic text-[#B79A72]">
              social media support?
            </span>
          </p>

          <Link
          href="/contact?service=social-media-marketing"
          title="Contact Sharp Rays for social media marketing support"
            style={newYorkFont}
            className="
              group
              relative

              mt-6

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
              Talk About Your Social Media

              <ArrowUpRight
                size={15}
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

          <p
            className="
              mx-auto
              mt-4
              max-w-[520px]

              text-[11px]
              leading-[1.7]

              text-[#8293A5]

              sm:text-[12px]
            "
          >
            We&apos;ll help define the right mix of strategy, content,
            publishing, community support and reporting for your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}