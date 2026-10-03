"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  BarChart3,
  Code2,
  Video,
  Brain,
  FileText,
} from "lucide-react";

const BRAND = "#0B2A52";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   SERVICES
   CONTENT UPDATED ONLY
   UI / STYLE / COLORS REMAIN SAME
========================================================= */
const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    slug: "/services/social-media-marketing",
    image: "/whatwedo/social-media1.png",
    imageAlt:
      "Social media marketing services for brand growth, content strategy and community engagement",
    imageTitle:
      "Social Media Marketing Services by Sharp Rays",
    description:
      "Build a stronger and more recognizable social presence through strategy, content planning, publishing, community engagement, and ongoing management.",
    items: [
      "Social Media Strategy",
      "Content Planning",
      "Publishing & Management",
      "Community Engagement",
    ],
  },

  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    slug: "/services/search-engine-optimization",
    image: "/seo.webp",
    imageAlt:
      "SEO services for improving organic search visibility, rankings and website discoverability",
    imageTitle:
      "Search Engine Optimization SEO Services by Sharp Rays",
    description:
      "Improve organic search visibility through technical SEO, search intent strategy, on-page optimization, internal linking, and continuous improvement.",
    items: [
      "Technical SEO",
      "Keyword & Intent Strategy",
      "On-Page Optimization",
      "Organic Growth",
    ],
  },

  {
    icon: BarChart3,
    title: "Performance Marketing / Paid Media",
    slug: "/services/performance-marketing",
    image: "/whatwedo/performance-maketing.png",
    imageAlt:
      "Performance marketing and paid media services for leads, sales and campaign optimization",
    imageTitle:
      "Performance Marketing and Paid Media Services by Sharp Rays",
    description:
      "Generate measurable leads and sales through paid campaigns built around targeting, creative testing, conversion tracking, and ongoing optimization.",
    items: [
      "Google Ads",
      "Meta Ads",
      "Audience & Creative Testing",
      "Conversion Tracking",
    ],
  },

  {
    icon: Code2,
    title: "Website Development & Management",
    slug: "/services/website-development",
    image: "/whatwedo/web.png",
    imageAlt:
      "Website development and management services for responsive, high-performance business websites",
    imageTitle:
      "Website Development and Management Services by Sharp Rays",
    description:
      "Plan, design, develop, and manage responsive websites built for clearer user journeys, strong performance, search visibility, and business growth.",
    items: [
      "Website Strategy",
      "UX / UI Design",
      "Website Development",
      "Website Management",
    ],
  },

  {
    icon: FileText,
    title: "Content Management",
    slug: "/services/content-marketing",
    image: "/whatwedo/content-marketing.png",
    imageAlt:
      "Content management services for website updates, publishing and digital content organization",
    imageTitle:
      "Content Management Services by Sharp Rays",
    description:
      "Keep your website and digital content organized, accurate, consistent, and up to date across pages, services, campaigns, and brand communication.",
    items: [
      "Website Content Updates",
      "Content Organization",
      "Publishing & Maintenance",
      "Content Quality Control",
    ],
  },

  {
    icon: Brain,
    title: "AI Automation",
    slug: "/services/ai-automation",
    image: "/whatwedo/ai.webp",
    imageAlt:
      "AI automation services for workflow automation, lead automation and business process optimization",
    imageTitle:
      "AI Automation Services by Sharp Rays",
    description:
      "Reduce repetitive work and connect everyday business processes through practical AI workflows, automation, and smarter information handling.",
    items: [
      "Workflow Automation",
      "AI Workflows",
      "Lead Automation",
      "Process Automation",
    ],
  },

  {
    icon: Video,
    title: "AI Video & Video Editing",
    slug: "/services/video-and-creative",
    image: "/whatwedo/video-creative.png",
    imageAlt:
      "AI video creation and professional video editing services for reels, shorts and digital campaigns",
    imageTitle:
      "AI Video Creation and Video Editing Services by Sharp Rays",
    description:
      "Create, edit, and adapt video content using AI-assisted production, professional editing, motion graphics, captions, and platform-ready workflows.",
    items: [
      "AI Video Creation",
      "Professional Editing",
      "Reels & Shorts",
      "Motion & Graphics",
    ],
  },
];
/* =========================================================
   EACH CARD GETS ITS OWN ACCENT
   SAME COLORS — NOT CHANGED
========================================================= */

const accents = [
  {
    border: "#F43F8F",
    soft: "#FFF1F7",
    icon: "#E11D68",
  },

  {
    border: "#059669",
    soft: "#ECFDF5",
    icon: "#059669",
  },

  {
    border: "#EA580C",
    soft: "#FFF7ED",
    icon: "#EA580C",
  },

  {
    border: "#2b7777",
    soft: "#e7fcfc",
    icon: "#2b7777",
  },

  {
    border: "#f1636f",
    soft: "#fde6ea",
    icon: "#e54656",
  },

  {
    border: "#5e6bf0",
    soft: "#daeaff",
    icon: "#679be8",
  },

  {
    border: "#0891B2",
    soft: "#ECFEFF",
    icon: "#0891B2",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[220px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#F4F7FB]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[700px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F7F9FC]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
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
            duration: 0.9,
            ease,
          }}
          className="
            mx-auto
            mb-9
            max-w-4xl
            text-center
            sm:mb-10
            lg:mb-12
          "
        >
          {/* Label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="
              mb-5
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
                text-[11px]
            
                uppercase
                tracking-[0.28em]
                sm:text-xs
              "
              style={{
                color: "#B79A72",
              }}
            >
              Our Services
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

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="
              font-[var(--font-new-york)]
              text-4xl
              font-medium
              leading-[1.02]
              tracking-[-0.035em]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
            style={{
              color: BRAND
            }}
          >
            Digital Marketing Services
            <br />

            <span className="text-[#C6A77A]">
              That Drive Real Growth
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.28,
              ease,
            }}
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7

              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
            style={{
              color: "#64748B",
            }}
          >
            SHARPRAYS helps businesses strengthen their digital presence through
            social media marketing, SEO, paid media, website development,
            AI-powered video production, AI automation, and ongoing content management.
          </motion.p>
        </motion.div>

        {/* ===================================================
            SERVICE GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3

            xl:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            const accent =
              accents[index % accents.length];

            return (
              <Link
                key={service.slug}
                href={service.slug}
                  title={`Explore ${service.title} Services by Sharp Rays`}
                aria-label={`Explore ${service.title}`}
                className="
                  block
                  h-full
                  rounded-[28px]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#6285AD]/45
                  focus-visible:ring-offset-4
                "
              >
                <motion.article
                initial={{
                  opacity: 0,
                  y: 65,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease,
                }}
                className="
                  group
                  relative
                  flex
                  h-full
                  cursor-pointer
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  bg-white
                  transition-all
                  duration-500

                  hover:-translate-y-1
                "
                style={{
                  border: `1.5px solid ${accent.border}`,
                  boxShadow: `0 12px 40px ${accent.border}10`,
                }}
              >
                {/* =================================================
                    IMAGE AREA
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08 + 0.1,
                    ease,
                  }}
                  className="
                    relative
                    mx-3
                    mt-3
                    flex
                    h-[215px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[22px]
                  "
                  style={{
                    backgroundColor: accent.soft,
                  }}
                >
                  {/* Soft decorative circle */}

                  <div
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      opacity-60
                    "
                    style={{
                      backgroundColor: `${accent.border}12`,
                    }}
                  />

                  <div
                    className="
                      absolute
                      -bottom-16
                      -left-12
                      h-40
                      w-40
                      rounded-full
                      opacity-50
                    "
                    style={{
                      backgroundColor: `${accent.border}10`,
                    }}
                  />

                  {/* Service image */}

                  <div
                    className="
                      relative
                      z-10
                      h-[200px]
                      w-[200px]
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.06]
                    "
                  >
                    <Image
  src={service.image}
  alt={service.imageAlt}
  title={service.imageTitle}
  fill
  sizes="
    (max-width: 640px) 80vw,
    (max-width: 1024px) 40vw,
    240px
  "
  className="object-contain"
/>
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                    "
                    style={{
                      color: accent.icon,
                      border: `1px solid ${accent.border}35`,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>
                </motion.div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08 + 0.2,
                    ease,
                  }}
                  className="
                    flex
                    flex-1
                    flex-col
                    px-6
                    pb-5
                    pt-5
                    sm:px-7
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      font-[var(--font-new-york)]
                      text-[27px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                    "
                    style={{
                      color: BRAND,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Accent line */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08 + 0.35,
                      ease,
                    }}
                    style={{
                      transformOrigin: "left",
                      backgroundColor: accent.border,
                    }}
                    className="
                      my-4
                      h-[2px]
                      w-10
                      rounded-full
                    "
                  />

                  {/* Description */}

                  <p
                    className="
                      text-[15px]
                      leading-6
                    "
                    style={{
                      color: "#64748B",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* =================================================
                      SERVICE ITEMS
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-2
                      gap-x-4
                      gap-y-2.5
                    "
                  >
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2
                        "
                      >
                        <span
                          className="
                            mt-[7px]
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              accent.border,
                          }}
                        />

                        <span
                          className="
                            text-[12px]
                            leading-[1.45]
                          "
                          style={{
                            color: "#64748B",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      EXPLORE MORE
                  ================================================= */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-2.5
                      pt-5

                      text-[14px]
                      font-semibold

                      transition-all
                      duration-300
                    "
                    style={{
                      color: accent.border,
                    }}
                  >
                    <span>Explore More</span>

                    <span
                      aria-hidden="true"
                      className="
                        inline-block

                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </motion.div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    opacity-70
                  "
                  style={{
                    backgroundColor: accent.border,
                  }}
                />
              </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}