"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Filter,
  KeyRound,
  MapPin,
  MousePointer2,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   TYPES
============================================================ */

type MetricItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FocusArea = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "cream" | "blue";
  metrics: MetricItem[];
};

/* ============================================================
   DATA
============================================================ */

const focusAreas: FocusArea[] = [
  {
    number: "01",
    eyebrow: "SEARCH PRESENCE",
    title: "Can the right audience find you?",
    description:
      "Visibility is the starting point. We look at whether your website is appearing across relevant searches and reaching users at key moments.",
    icon: Search,
    tone: "cream",
    metrics: [
      {
        title: "Organic Visibility",
        description:
          "How frequently your website appears for relevant searches.",
        icon: BarChart3,
      },
      {
        title: "Keyword Visibility",
        description:
          "How your important commercial and informational topics perform over time.",
        icon: KeyRound,
      },
      {
        title: "AI Search Visibility",
        description:
          "Where possible, we review visibility within emerging search experiences to understand your exposure beyond traditional search.",
        icon: Sparkles,
      },
    ],
  },
  {
    number: "02",
    eyebrow: "AUDIENCE QUALITY",
    title: "Is search bringing new people into the business?",
    description:
      "Visibility matters more when it turns attention into real people who are genuinely relevant to what you offer.",
    icon: Users,
    tone: "blue",
    metrics: [
      {
        title: "Organic Clicks",
        description:
          "How many users choose to visit your website.",
        icon: MousePointer2,
      },
      {
        title: "Non-Branded Search Growth",
        description:
          "Whether new audiences are discovering your business without already knowing your name.",
        icon: TrendingUp,
      },
      {
        title: "Audience Quality",
        description:
          "How relevant the traffic is to your products or services.",
        icon: Users,
      },
    ],
  },
  {
    number: "03",
    eyebrow: "BUSINESS VALUE",
    title: "What happens after the visitor arrives?",
    description:
      "The strongest SEO measurement connects discovery with real people, real behaviour and meaningful business outcomes.",
    icon: Target,
    tone: "cream",
    metrics: [
      {
        title: "Landing Page Performance",
        description:
          "Which pages are your organic traffic visiting and how well those opportunities convert.",
        icon: FileText,
      },
      {
        title: "Leads & Enquiries",
        description:
          "Whether organic traffic contributes meaningful business actions.",
        icon: Filter,
      },
      {
        title: "Local Search Performance",
        description:
          "For local businesses, whether you're visible in local searches and driving relevant discovery.",
        icon: MapPin,
      },
    ],
  },
];

/* ============================================================
   MAIN SECTION
============================================================ */

export default function SEOPerformanceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-performance"
      className="
        relative
        overflow-hidden
        bg-[#FCFBF8]
        py-24
        text-[#0B2A52]
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-72
            top-[5%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#C6A77A]/[0.08]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -right-72
            top-[38%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#3976B6]/[0.05]
            blur-[170px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =====================================================
            HERO
        ====================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -30,
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
              duration: 0.9,
              ease,
            }}
          >
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
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
               
                  tracking-[0.28em]
                  text-[#B79A72]
                "
              >
                MARKETING ROI
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
                mt-7
                max-w-[630px]
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[2.8rem]
                font-normal
                leading-[0.98]
                tracking-[-0.045em]
                text-[#091C42]
                sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]SEOWhoItsForSection
              "
            >
              Rankings Matter.
              <span
                className="
                  mt-1
                  block
                  text-[#B79A72]
                "
              >
                Business Impact
                <br />
                Matters More.
              </span>
            </h2>

            {/* COPY */}

            <div
              className="
                mt-7
                max-w-[650px]
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[15px]
                leading-7
                text-[#0B2A52]/68
                sm:text-[16px]
              "
            >
              <p>
                SEO performance should be evaluated against the purpose of
                your website.
              </p>

              <p className="mt-1">
                Depending on your objectives, we pay attention to what matters
                most.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
              scale: reduceMotion ? 1 : 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[650px]
              lg:mx-0
              lg:ml-auto
            "
          >
         <Image
  src="/services/seo/seo-performance-hero.webp"
  alt="SEO performance dashboard on a laptop showing organic search growth and visibility"
  title="SEO Performance and Organic Growth"

              width={1080}
              height={870}
              priority={false}
              className="
                h-auto
                w-full
                object-contain
              "
            />
          </motion.div>
        </div>

        {/* =====================================================
            KEY AREAS INTRO
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:gap-7
            lg:mt-10
          "
        >
      

          <span
            className="
              hidden
              h-14
              w-px
              bg-[#C6A77A]/45
              sm:block
            "
          />

          <div>
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.27em]
                text-[#9A6A35]
              "
            >
              KEY AREAS WE FOCUS ON
            </span>

            <p
              className="
                mt-2
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[18px]
                text-[#0B2A52]
                sm:text-[20px]
              "
            >
              From being visible to creating value.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            THREE LARGE CARDS
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {focusAreas.map((area, index) => (
            <FocusCard
              key={area.number}
              area={area}
              index={index}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM EDITORIAL AREA
        ====================================================== */}

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
            duration: 0.9,
            ease,
          }}
          className="
            relative
            mt-20
            grid
            gap-12
            lg:grid-cols-[300px_1fr_240px]
            lg:items-center
            lg:gap-12
          "
        >
          {/* LEFT CIRCULAR IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              relative
              mx-auto
              lg:mx-0
            "
          >
            <div
              className="
                relative
                h-[260px]
                w-[260px]
                overflow-hidden
                rounded-full
                border-[12px]
                border-white
                shadow-[0_18px_55px_rgba(11,42,82,0.08)]
                sm:h-[290px]
                sm:w-[290px]
              "
            >
            <Image
  src="/services/seo/seo-performance-book.webp"
  alt="SEO growth visual representing better rankings, visibility and new search opportunities"
  title="Better Rankings and Search Opportunities"

                fill
                sizes="290px"
                className="object-cover"
              />
            </div>

            <span
              className="
                absolute
                left-[-6px]
                top-[26px]
                h-8
                w-8
                rounded-full
                bg-gradient-to-br
                from-[#E6C48E]
                to-[#A86B2D]
                shadow-[0_6px_16px_rgba(166,107,45,0.2)]
              "
            />
          </motion.div>

          {/* CENTER */}

          <div className="text-center lg:text-left">
            <div
              className="
                flex
                items-center
                justify-center
                gap-4
                lg:justify-start
              "
            >
              <span className="h-px w-10 bg-[#C6A77A]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.28em]
                  text-[#9A6A35]
                "
              >
                THE MEASURE THAT MATTERS
              </span>

              <span className="h-px w-10 bg-[#C6A77A]" />
            </div>

            <h3
              className="
                mt-6
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.045em]
                text-[#091C42]
                sm:text-[3.8rem]
                lg:text-[4.15rem]
              "
            >
              The goal is more
              <span
                className="
                  block
                  italic
                  text-[#B67A3B]
                "
              >
                useful visibility.
              </span>
            </h3>

            <p
              className="
                mt-6
                [font-family:Georgia,'Times_New_Roman',serif]
                text-[15px]
                text-[#0B2A52]/62
                sm:text-[16px]
              "
            >
              Because the goal is not simply more traffic.
            </p>
          </div>

          {/* RIGHT GROWTH MOTIF */}

          <div
            className="
              relative
              mx-auto
              min-h-[250px]
              w-full
              max-w-[240px]
              lg:mx-0
            "
          >
            {/* CURVED LINE */}

            <svg
              viewBox="0 0 240 220"
              fill="none"
              className="
                absolute
                inset-0
                h-full
                w-full
                overflow-visible
              "
              aria-hidden="true"
            >
              <motion.path
                d="M5 188 C70 208 132 160 172 104 C192 75 205 49 226 22"
                stroke="#B98246"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.4,
                  ease,
                }}
              />

              <path
                d="M4 198 C75 216 139 171 183 116"
                stroke="#C6A77A"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.08"
              />
            </svg>

            {/* SEND CIRCLE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.45,
                ease,
              }}
              className="
                absolute
                right-0
                top-0
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#C6A77A]/40
                bg-[#FFF8ED]
                text-[#986024]
                shadow-[0_12px_28px_rgba(152,96,36,0.10)]
              "
            >
              <Send
                size={22}
                strokeWidth={1.6}
              />
            </motion.div>

            <div
              className="
                absolute
                bottom-2
                right-0
                text-right
              "
            >
              <span
                className="
                  block
                  text-[9px]
                  font-semibold
                  leading-5
                  tracking-[0.26em]
                  text-[#0B2A52]/55
                "
              >
                FROM
                <br />
                VISIBILITY
                <br />
                TO REAL
                <br />
                BUSINESS
                <br />
                GROWTH
              </span>

              <span
                className="
                  ml-auto
                  mt-3
                  block
                  h-px
                  w-8
                  bg-[#C6A77A]
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   FOCUS CARD
============================================================ */

function FocusCard({
  area,
  index,
  reduceMotion,
}: {
  area: FocusArea;
  index: number;
  reduceMotion: boolean;
}) {
  const Icon = area.icon;

  const isBlue = area.tone === "blue";

  return (
    <motion.article
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.72,
        delay: index * 0.08,
        ease,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        p-7
        shadow-[0_18px_55px_rgba(11,42,82,0.045)]
        sm:p-8
        lg:p-8

        ${
          isBlue
            ? "border-[#3976B6]/15 bg-gradient-to-br from-[#EDF6FE] via-[#F4F9FE] to-[#EAF4FC]"
            : "border-[#C6A77A]/18 bg-gradient-to-br from-[#FFFCF7] via-[#FBF7F0] to-[#F8F0E5]"
        }
      `}
    >
      {/* SOFT LIGHT */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-[190px]
          w-[190px]
          rounded-full
          blur-[55px]

          ${
            isBlue
              ? "bg-[#3976B6]/[0.08]"
              : "bg-[#C6A77A]/[0.11]"
          }
        `}
      />

      {/* =====================================================
          CARD HEADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
          gap-5
        "
      >
        <div>
          

          <span
            className="
              mt-3
              block
              text-[9px]
              font-semibold
              tracking-[0.26em]
              text-[#0B2A52]/65
            "
          >
            {area.eyebrow}
          </span>
        </div>

        <div
          className={`
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            rounded-[15px]
            border
            bg-white/70
            shadow-[0_9px_24px_rgba(11,42,82,0.06)]

            ${
              isBlue
                ? "border-[#3976B6]/15 text-[#0B2A52]"
                : "border-[#C6A77A]/25 text-[#986024]"
            }
          `}
        >
          <Icon
            size={24}
            strokeWidth={1.55}
          />
        </div>
      </div>

      {/* =====================================================
          MAIN COPY
      ====================================================== */}

      <div className="relative z-10">
        <h3
          className="
            mt-6
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[27px]
            font-normal
            leading-[1.08]
            tracking-[-0.035em]
            text-[#091C42]
            sm:text-[29px]
          "
        >
          {area.title}
        </h3>

        <p
          className="
            mt-5
            min-h-[96px]
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[14px]
            leading-6
            text-[#0B2A52]/62
          "
        >
          {area.description}
        </p>
      </div>

      {/* DIVIDER */}

      <div
        className={`
          relative
          z-10
          mt-7
          h-px
          w-full

          ${
            isBlue
              ? "bg-[#3976B6]/18"
              : "bg-[#C6A77A]/25"
          }
        `}
      />

      {/* =====================================================
          METRICS
      ====================================================== */}

      <div className="relative z-10">
        {area.metrics.map((metric, metricIndex) => (
          <MetricRow
            key={metric.title}
            metric={metric}
            index={metricIndex}
            isBlue={isBlue}
          />
        ))}
      </div>
    </motion.article>
  );
}

/* ============================================================
   METRIC ROW
============================================================ */

function MetricRow({
  metric,
  index,
  isBlue,
}: {
  metric: MetricItem;
  index: number;
  isBlue: boolean;
}) {
  const Icon = metric.icon;

  return (
    <div
      className={`
        flex
        gap-4
        py-6

        ${
          index !== 0
            ? isBlue
              ? "border-t border-[#3976B6]/14"
              : "border-t border-[#C6A77A]/20"
            : ""
        }
      `}
    >
      <div
        className={`
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full

          ${
            isBlue
              ? "bg-[#D9EAFE] text-[#0B2A52]"
              : "bg-[#F9EBD7] text-[#955A1E]"
          }
        `}
      >
        <Icon
          size={19}
          strokeWidth={1.7}
        />
      </div>

      <div>
        <h4
          className="
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[15px]
            font-semibold
            leading-5
            text-[#0B2A52]
          "
        >
          {metric.title}
        </h4>

        <p
          className="
            mt-1.5
            [font-family:Georgia,'Times_New_Roman',serif]
            text-[12.5px]
            leading-5
            text-[#0B2A52]/60
          "
        >
          {metric.description}
        </p>
      </div>
    </div>
  );
}