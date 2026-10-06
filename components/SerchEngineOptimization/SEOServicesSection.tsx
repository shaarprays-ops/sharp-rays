"use client";

import Link from "next/link";
import type { CSSProperties, ElementType } from "react";

import {
  BarChart3,
  BookOpenText,
  Bot,
  Compass,
  FileText,
  MapPin,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type Service = {
  number: string;
  title: string;
  subtitle: string;
  intro: string[];
  lead: string;
  items: string[];
  icon: ElementType;
  accent: string;
  soft: string;
  gradient: string;
};

/* ============================================================
   SERVICES
============================================================ */

const services: Service[] = [
  {
    number: "01",
    title: "SEO Audit & Strategy",
    subtitle:
      "Start With the Right Search Strategy.",

    intro: [
      "Before optimizing anything, we understand what your audience is searching for, how your competitors are winning, and where your biggest opportunities are.",
    ],

    lead: "What we do",

    items: [
      "SEO Audits",
      "Keyword Research",
      "Search Intent Analysis",
      "Competitor Analysis",
      "SEO Roadmaps",
      "Opportunity Mapping",
    ],

    icon: Compass,

    accent: "#3976B6",
    soft: "#E4F1FC",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EEF6FC 32%, #E1EFFA 68%, #D7EAF8 100%)",
  },

  {
    number: "02",
    title: "Technical SEO",
    subtitle:
      "Build a Website Search Engines Can Understand.",

    intro: [
      "A beautiful website means little if search engines can't properly crawl, understand, and index it.",
      "We strengthen the technical foundation behind your website so search engines can access your most important pages efficiently.",
    ],

    lead: "What we do",

    items: [
      "Technical SEO Audits",
      "Crawl & Indexing Optimization",
      "Core Web Vitals",
      "Page Speed Optimization",
      "Mobile SEO",
      "Sitemap & Robots.txt",
      "Canonicals & Redirects",
      "Website Architecture",
    ],

    icon: Settings2,

    accent: "#27816A",
    soft: "#E2F3EC",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EFF9F5 30%, #E1F2EA 67%, #D0EADF 100%)",
  },

  {
    number: "03",
    title: "On-Page SEO",
    subtitle:
      "Make Every Important Page Count.",

    intro: [
      "We optimize the elements that help search engines understand what your pages are about — while keeping the experience clear and useful for real people.",
    ],

    lead: "What we do",

    items: [
      "Title & Meta Optimization",
      "Heading Structure",
      "URL Optimization",
      "Internal Linking",
      "Image SEO",
      "Keyword Optimization",
      "Search Intent Optimization",
      "Content Optimization",
    ],

    icon: FileText,

    accent: "#7059B0",
    soft: "#ECE7F8",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #F7F3FD 30%, #ECE6F8 67%, #DDD3F1 100%)",
  },

  {
    number: "04",
    title: "SEO Content Strategy & Optimization",
    subtitle:
      "Create Content Worth Finding.",

    intro: [
      "We don't create content just to fill a blog.",
      "We build content around real search demand, meaningful topics, and the questions your audience actually wants answered — creating a stronger foundation for long-term organic visibility.",
    ],

    lead: "What we do",

    items: [
      "SEO Content Strategy",
      "Topic Clusters",
      "Pillar Pages",
      "Blog SEO",
      "Service Page SEO",
      "Content Gap Analysis",
      "Content Refresh",
      "Topical Authority",
    ],

    icon: BookOpenText,

    accent: "#BD6247",
    soft: "#FBE8E1",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FFF5F1 30%, #FAE7DF 67%, #F2D4C8 100%)",
  },

  {
    number: "05",
    title: "Authority & Digital PR",
    subtitle:
      "Build Authority Beyond Your Website.",

    intro: [
      "Search visibility isn't only about what happens on your own website.",
      "We help strengthen your brand's authority through relevant digital PR, strategic outreach, quality mentions, and credible opportunities across the web.",
    ],

    lead: "What we do",

    items: [
      "Digital PR",
      "Quality Link Building",
      "Competitor Backlink Analysis",
      "Link Gap Analysis",
      "Brand Mentions",
      "Strategic Outreach",
      "Authority Building",
    ],

    icon: ShieldCheck,

    accent: "#A85072",
    soft: "#F8E3EB",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FFF4F8 30%, #F8E4EC 67%, #EFD1DD 100%)",
  },

  {
    number: "06",
    title: "Local SEO",
    subtitle:
      "Be Found Where Your Customers Are Looking.",

    intro: [
      "For businesses serving specific locations, visibility in local search can make the difference between being discovered and being overlooked.",
      "We optimize your local presence so potential customers can find, understand, and connect with your business.",
    ],

    lead: "What we do",

    items: [
      "Google Business Profile Optimization",
      "Local Keyword Research",
      "Local Landing Pages",
      "Local Citations",
      "Review Strategy",
      "Google Maps Optimization",
      "Local Competitor Analysis",
    ],

    icon: MapPin,

    accent: "#9B6C31",
    soft: "#F7EBD7",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #FCF7ED 30%, #F5E8D2 67%, #EBD5B1 100%)",
  },

  {
    number: "07",
    title: "AI Search & Generative Discovery",
    subtitle:
      "Optimize for the Way Search Is Changing.",

    intro: [
      "Search is evolving beyond traditional blue links.",
      "We build content, structure, and brand signals that help your business stay visible across modern search experiences, including AI-powered search.",
    ],

    lead: "What we do",

    items: [
      "AI Search Visibility",
      "AI Overview Optimization",
      "Entity Optimization",
      "Brand Mention Strategy",
      "Topical Authority",
      "Structured Content",
      "AI Search Monitoring",
    ],

    icon: Bot,

    accent: "#258595",
    soft: "#E1F4F6",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EFFAFB 30%, #E0F3F5 67%, #CDECEF 100%)",
  },

  {
    number: "08",
    title: "SEO Analytics",
    subtitle:
      "Don't Just Track Rankings. Track Growth.",

    intro: [
      "We connect SEO activity with the metrics that actually matter to your business.",
      "From search visibility to organic traffic and conversions, we measure what's working and use the data to continuously improve the strategy.",
    ],

    lead: "What we do",

    items: [
      "Google Search Console",
      "GA4 Integration",
      "Keyword Rank Tracking",
      "Organic Traffic Analysis",
      "Conversion Tracking",
      "SEO Reporting",
      "Competitor Monitoring",
    ],

    icon: BarChart3,

    accent: "#3976B6",
    soft: "#E4F1FC",

    gradient:
      "linear-gradient(115deg, rgba(255,255,255,0.98) 0%, #EEF6FC 32%, #E1EFFA 68%, #D7EAF8 100%)",
  },
];

/* ============================================================
   SHARP RAYS APPROACH
============================================================ */

const approachItems = [
  "Technical foundations.",
  "Intent-driven content.",
  "Relevant authority.",
  "Continuous measurement.",
];

/* ============================================================
   SECTION
============================================================ */

export default function SEOServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-services"
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-white
        via-[#FBFCFF]
        to-[#F8FAFC]

        py-16
        text-[#0B2A52]

        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
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
          max-w-[1380px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          className="
            mx-auto
            max-w-[940px]
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
                font-semibold
                tracking-[0.28em]
                text-[#B79A72]

                sm:text-[10px]
              "
            >
              SEO SERVICES
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
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-5

              text-[2rem]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-[#0B2A52]

              sm:mt-6
              sm:text-[2.6rem]

              md:text-[2.95rem]

              lg:text-[3.1rem]

              xl:text-[3.35rem]
            "
          >
            Search Visibility That Turns Into{" "}
            <span className="text-[#C6A77A]">
              Business Growth.
            </span>
          </h2>

          {/* SUPPORTING */}

          <p
            className="
              mx-auto
              mt-5

              max-w-[760px]

              text-[15px]
              font-medium
              leading-7
              text-[#0B2A52]

              sm:mt-6
              sm:text-[17px]
            "
          >
            Ranking is only the beginning.
          </p>

          <p
            className="
              mx-auto
              mt-3

              max-w-[760px]

              text-[12.5px]
              leading-6
              text-[#0B2A52]/60

              sm:text-sm
              sm:leading-7
            "
          >
            We build SEO strategies that help your brand get discovered by the
            right people, earn trust in search, and turn organic visibility into
            meaningful traffic, enquiries, and growth.
          </p>
        </motion.div>

        {/* ====================================================
            BLUEPRINT HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
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
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.15,
            ease,
          }}
          className="
            mx-auto
            mt-12

            flex
            max-w-[1240px]
            flex-wrap
            items-center
            justify-between

            gap-3

            border-b
            border-[#0B2A52]/15

            pb-4

            sm:mt-14
            sm:pb-5

            lg:mt-16
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2

                rounded-full

                bg-[#C6A77A]

                shadow-[0_0_12px_rgba(198,167,122,0.45)]
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.22em]
                text-[#0B2A52]/45
              "
            >
              SEO SERVICE BLUEPRINT
            </span>
          </div>

          <span
            className="
              hidden

              text-[8px]
              font-semibold
              tracking-[0.18em]
              text-[#0B2A52]/30

              sm:block
            "
          >
            08 CONNECTED CAPABILITIES
          </span>
        </motion.div>

        {/* ====================================================
            SERVICES
        ==================================================== */}

        <div className="mx-auto max-w-[1240px]">
          {services.map((service, index) => (
            <ServiceChapter
              key={service.number}
              service={service}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        {/* ====================================================
            SHARP RAYS APPROACH
        ==================================================== */}

        <motion.div
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
            duration: reduceMotion ? 0 : 0.8,
            ease,
          }}
          className="
            relative

            mx-auto
            mt-12
            max-w-[1180px]

            overflow-hidden

            rounded-[22px]

            border
            border-[#0B2A52]/10

            bg-gradient-to-r
            from-[#EDF6FD]/80
            via-white
            to-[#FFF7EA]/75

            px-5
            py-8

            shadow-[0_14px_45px_rgba(11,42,82,0.045)]

            sm:mt-14
            sm:rounded-[26px]
            sm:px-7
            sm:py-9

            md:px-9

            lg:mt-16
            lg:px-11
            lg:py-11
          "
        >
          {/* DECOR */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -right-[120px]
              -top-[150px]

              h-[320px]
              w-[320px]

              rounded-full

              border
              border-[#C6A77A]/15
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              -bottom-[190px]
              -left-[150px]

              h-[360px]
              w-[360px]

              rounded-full

              border
              border-[#3976B6]/[0.07]
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
              <span className="h-px w-8 bg-[#C6A77A]" />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#C6A77A]

                  sm:text-[9px]
                "
              >
                The Sharp Rays Approach
              </span>

              <span className="h-px w-8 bg-[#C6A77A]" />
            </div>

            {/* HEADING */}

            <h3
              className="
                mx-auto
                mt-5
                max-w-[820px]

                text-center

                text-[24px]
                font-medium
                leading-[1.12]
                tracking-[-0.03em]
                text-[#0B2A52]

                sm:text-[28px]
                md:text-[32px]
              "
            >
              We Don&apos;t Chase Rankings.{" "}
              <span className="text-[#C6A77A]">
                We Build Search Visibility That Lasts.
              </span>
            </h3>

            {/* APPROACH POINTS */}

            <div
              className="
                mx-auto
                mt-7

                grid
                max-w-[900px]

                grid-cols-1
                gap-3

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {approachItems.map((item, index) => (
                <motion.div
                  key={item}
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
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease,
                  }}
                  className="
                    flex
                    items-center
                    gap-3

                    border-b
                    border-[#0B2A52]/10

                    py-3

                    lg:border-b-0
                    lg:border-r
                    lg:border-[#0B2A52]/10
                    lg:px-4

                    lg:last:border-r-0
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      shrink-0

                      rounded-full

                      bg-[#C6A77A]
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-medium
                      leading-5
                      text-[#0B2A52]

                      sm:text-[12px]
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-7

                max-w-[800px]

                text-center

                text-[12px]
                leading-6
                text-[#0B2A52]/60

                sm:text-[13px]
                sm:leading-7
              "
            >
              Every part of our SEO strategy works together to make your brand
              more discoverable, more credible, and more valuable in search.
            </p>

            {/* MICROCOPY */}

            <div
              className="
                mx-auto
                mt-7

                flex
                max-w-[560px]

                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  flex-1

                  bg-gradient-to-r
                  from-transparent
                  to-[#C6A77A]/50
                "
              />

              <span
                className="
                  shrink-0

                  text-[7px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#0B2A52]/40

                  sm:text-[8px]
                "
              >
                SEARCH · DISCOVER · TRUST · GROW
              </span>

              <span
                className="
                  h-px
                  flex-1

                  bg-gradient-to-l
                  from-transparent
                  to-[#C6A77A]/50
                "
              />
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
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
            duration: reduceMotion ? 0 : 0.75,
            ease,
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
  href="/contact?service=seo#contact-form"
  title="Contact Sharp Rays for Search Engine Optimization Services"
  className="
    group
    relative
    inline-flex
    min-h-[46px]
    w-full
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
    sm:w-auto
    sm:px-7
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

  <span className="relative z-10 whitespace-nowrap">
    Improve My Search Visibility
  </span>
</Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE CHAPTER
============================================================ */

function ServiceChapter({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = service.icon;

  const style = {
    "--accent": service.accent,
    "--soft": service.soft,
  } as CSSProperties;

  return (
    <motion.article
      style={style}
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
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        ease,
      }}
      className="
        group
        relative

        border-b
        border-[#0B2A52]/15

        py-8

        sm:py-10
        md:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          MAIN GRADIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          inset-x-0
          inset-y-2

          rounded-[22px]

          opacity-[0.82]

          shadow-[0_12px_38px_rgba(11,42,82,0.025)]

          transition-all
          duration-700
          ease-out

          group-hover:opacity-100
          group-hover:shadow-[0_18px_50px_rgba(11,42,82,0.06)]

          sm:-inset-x-3
          sm:inset-y-3
          sm:rounded-[26px]

          md:-inset-x-5

          lg:-inset-x-7
          lg:rounded-[28px]
        "
        style={{
          background: service.gradient,
        }}
      />

      {/* ACCENT GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-10
          top-1/2

          h-[74%]
          w-[40%]

          -translate-y-1/2

          rounded-full

          bg-[var(--accent)]

          opacity-[0.045]

          blur-[70px]

          transition-all
          duration-700

          group-hover:scale-110
          group-hover:opacity-[0.085]
        "
      />

      {/* LEFT WHITE LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -left-20
          top-1/2

          h-[75%]
          w-[30%]

          -translate-y-1/2

          rounded-full

          bg-white
          opacity-30
          blur-[60px]
        "
      />

      {/* ACTIVE LEFT LINE */}

      <div
        className="
          absolute
          bottom-8
          left-0
          top-8
          z-20

          w-[3px]

          origin-center

          scale-y-50

          rounded-r-full

          bg-[var(--accent)]

          opacity-55

          transition-all
          duration-500

          group-hover:scale-y-100
          group-hover:opacity-100

          sm:bottom-10
          sm:top-10

          lg:bottom-12
          lg:top-12
        "
      />

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          grid
          grid-cols-1

          gap-7

          px-4

          sm:gap-8
          sm:px-5

          md:grid-cols-[96px_minmax(0,1fr)]
          md:gap-9
          md:px-6

          lg:grid-cols-[130px_0.8fr_1.2fr]
          lg:gap-12
          lg:px-0
          lg:pl-8
        "
      >
        {/* ===================================================
            NUMBER + ICON
        =================================================== */}

        <div
          className="
            flex
            items-start
            justify-between

            md:block
          "
        >
          <div>
            <span
              className="
                block

                text-[44px]
                font-light
                leading-none
                tracking-[-0.05em]
                text-[var(--accent)]

                sm:text-[52px]
              "
            >
              {service.number}
            </span>

            <span
              className="
                mt-3
                block

                text-[7px]
                font-bold
                tracking-[0.2em]
                text-[#0B2A52]/35
              "
            >
              SEO SERVICE
            </span>
          </div>

          {/* CONNECTOR */}

          <div className="mt-7 hidden items-center lg:flex">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 48,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.15,
                ease,
              }}
              className="h-px bg-[var(--accent)]"
            />

            <span
              className="
                h-2
                w-2

                -translate-x-px

                rounded-full

                bg-[var(--accent)]
              "
            />
          </div>

          {/* ICON */}

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    rotate: 5,
                    scale: 1.06,
                  }
            }
            transition={{
              duration: 0.3,
            }}
            className="
              mt-0

              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-full

              bg-[var(--accent)]

              text-white

              shadow-[0_8px_22px_rgba(11,42,82,0.12)]

              md:mt-8
            "
          >
            <Icon
              size={16}
              strokeWidth={1.7}
            />
          </motion.div>
        </div>

        {/* ===================================================
            SERVICE INFORMATION
        =================================================== */}

        <div>
          <h3
            className="
              max-w-[500px]

              text-[20px]
              font-medium
              leading-[1.18]
              tracking-[-0.026em]
              text-[#0B2A52]

              sm:text-[22px]
              md:text-[24px]
              lg:text-[25px]
            "
          >
            {service.title}
          </h3>

          <h4
            className="
              mt-4
              max-w-[510px]

              text-[14px]
              font-semibold
              leading-7
              text-[var(--accent)]

              sm:text-[15px]
            "
          >
            {service.subtitle}
          </h4>

          <div
            className="
              mt-4
              max-w-[520px]
              space-y-3
            "
          >
            {service.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="
                  text-[12px]
                  leading-6
                  text-[#0B2A52]/65

                  sm:text-[13px]
                "
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ===================================================
            SCOPE
        =================================================== */}

        <div
          className="
            relative

            md:col-span-2
            md:border-t
            md:border-[#0B2A52]/10
            md:pt-7

            lg:col-span-1
            lg:border-l
            lg:border-t-0
            lg:border-[#0B2A52]/12
            lg:pl-10
            lg:pt-0
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
            "
          >
            <p
              className="
                max-w-[500px]

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                leading-5
                text-[#0B2A52]

                sm:text-[11px]
              "
            >
              {service.lead}
            </p>

            <div className="flex items-center gap-2">
              <span
                className="
                  text-[8px]
                  font-bold
                  tracking-[0.16em]
                  text-[var(--accent)]
                "
              >
                {service.items.length
                  .toString()
                  .padStart(2, "0")}
              </span>

              <span
                className="
                  text-[7px]
                  font-semibold
                  tracking-[0.16em]
                  text-[#0B2A52]/35
                "
              >
                FOCUS AREAS
              </span>
            </div>
          </div>

          {/* ITEMS */}

          <div
            className="
              mt-5

              grid
              grid-cols-1

              gap-x-6

              sm:grid-cols-2

              md:gap-x-8
            "
          >
            {service.items.map(
              (item, itemIndex) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 8,
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
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion
                      ? 0
                      : Math.min(
                          itemIndex * 0.025,
                          0.16,
                        ),
                  }}
                  className="
                    group/item

                    flex
                    min-h-[43px]

                    items-center
                    gap-3

                    border-b
                    border-[#0B2A52]/12

                    py-2.5

                    transition-all
                    duration-300

                    hover:border-[var(--accent)]
                  "
                >
                  {/* NODE */}

                  <span
                    className="
                      relative

                      flex
                      h-[15px]
                      w-[15px]
                      shrink-0

                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        h-[5px]
                        w-[5px]

                        rounded-full

                        bg-[var(--accent)]
                      "
                    />

                    <span
                      className="
                        absolute
                        inset-0

                        scale-50

                        rounded-full

                        border
                        border-[var(--accent)]

                        opacity-0

                        transition-all
                        duration-300

                        group-hover/item:scale-100
                        group-hover/item:opacity-45
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      leading-5
                      text-[#0B2A52]/68

                      transition-all
                      duration-300

                      group-hover/item:translate-x-1
                      group-hover/item:text-[#0B2A52]

                      sm:text-[11px]
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ),
            )}
          </div>

          {/* BOTTOM ACCENT */}

          <div
            className="
              mt-6

              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-8

                bg-[var(--accent)]

                transition-all
                duration-500

                group-hover:w-14
              "
            />

            <span
              className="
                text-[7px]
                font-semibold
                tracking-[0.2em]
                text-[#0B2A52]/32
              "
            >
              CONNECTED SEO
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}