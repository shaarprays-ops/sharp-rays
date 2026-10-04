"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Gauge,
  Megaphone,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPES
========================================================= */

type ServiceId =
  | "social"
  | "seo"
  | "performance"
  | "website"
  | "automation";

type ServiceMeta = {
  id: ServiceId;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  accent: string;
  soft: string;
};

type Project = {
  id: string;
  service: ServiceId;
  title: string;
  type: string;
  platform?: string;
  industry?: string;
  contentTag?: string;
  image: string;
  intro: string;
  challenge: string;
  work: string;
  outcome: string;
  href: string;
};

/* =========================================================
   SERVICES
========================================================= */

const services: ServiceMeta[] = [
  {
    id: "social",
    label: "Social Media Marketing",
    shortLabel: "Social",
    icon: Megaphone,
    accent: "#3976B6",
    soft: "#EAF4FE",
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    shortLabel: "SEO",
    icon: Search,
    accent: "#3F8A72",
    soft: "#EAF7F1",
  },
  {
    id: "performance",
    label: "Performance Marketing",
    shortLabel: "Performance",
    icon: Gauge,
    accent: "#C7794A",
    soft: "#FFF1E7",
  },
  {
    id: "website",
    label: "Website Development",
    shortLabel: "Website",
    icon: Code2,
    accent: "#4E9AA8",
    soft: "#EAF8FA",
  },
  {
    id: "automation",
    label: "AI Automation",
    shortLabel: "Automation",
    icon: Bot,
    accent: "#6285AD",
    soft: "#EEF5FA",
  },
];

/* =========================================================
   PROJECTS

   IMPORTANT:
   Add every real project here.
   The section automatically groups it under the correct service.

   Card structure:
   Project Name
   Project Type
   Intro
   Challenge
   Work
   Outcome
   Full Case Study
========================================================= */

const projects: Project[] = [
  /* =========================================================
     SOCIAL MEDIA MARKETING
     Images:
     /public/work/social/
  ========================================================= */

  {
    id: "rnk-rentals-social",
    service: "social",
    title: "RNK Rentals",
    type: "Client Project",
    platform: "Instagram",
    industry: "Car Rental",
    contentTag: "Social Media",
    image: "/services/social/rnk_social.webp",
    intro:
      "Social media content for a car rental brand focused on presenting the fleet clearly, building a more consistent visual presence and making rental options easier to discover.",
    challenge:
      "Present different cars and rental services clearly while keeping the feed visually consistent and easy to understand.",
    work:
      "Content Planning · Social Creative · Captions · Reels · Publishing · Brand Consistency",
    outcome:
      "A clearer social presence with more consistent service communication and stronger visual presentation.",
    href: "/work/rnk-rentals-social-media",
  },
  {
    id: "dts-social",
    service: "social",
    title: "DTS",
    type: "Client Project",
    platform: "Instagram",
    industry: "Digital Marketing",
    contentTag: "Brand Content",
    image: "/services/social/dts_social.webp",
    intro:
      "Social media work for a digital marketing brand, combining educational, promotional and brand-led content into a more consistent publishing system.",
    challenge:
      "Communicate multiple digital topics without making the social feed feel disconnected or overly promotional.",
    work:
      "Content Strategy · Social Creative · Reels · Copy · Publishing · Content Planning",
    outcome:
      "A more structured content system with clearer brand communication across social posts.",
    href: "/work/dts-social-media",
  },
  {
    id: "brownie-point-social",
    service: "social",
    title: "Brownie Point",
    type: "Client Project",
    platform: "Instagram",
    industry: "Food & Product",
    contentTag: "Product Content",
    image: "/services/social/cake_social.webp",
    intro:
      "Product-led social content for a cake and dessert brand focused on visual appeal, consistency and memorable digital presentation.",
    challenge:
      "Make individual products feel distinctive while keeping the overall feed recognisable as one brand.",
    work:
      "Product Content · Social Creative · Reels · Captions · Campaign Content · Publishing",
    outcome:
      "A stronger product-first social presentation with a more consistent visual identity.",
    href: "/work/brownie-point-social-media",
  },
  {
    id: "butter-chicken-factory-social",
    service: "social",
    title: "Butter Chicken Factory",
    type: "Client Project",
    platform: "Instagram",
    industry: "Food & Restaurant",
    contentTag: "Food Content",
    image: "/services/social/chicken_social.webp",
    intro:
      "Social media content for a food brand built around appetite appeal, product visibility, offers and a more recognisable restaurant presence.",
    challenge:
      "Turn menu items and promotions into content that feels visually appetising without becoming repetitive.",
    work:
      "Food Creative · Reels · Offer Content · Captions · Publishing · Content Planning",
    outcome:
      "A more consistent food-focused feed designed to make products and promotions easier to notice.",
    href: "/work/butter-chicken-factory-social-media",
  },
  {
    id: "shruti-chadha-social",
    service: "social",
    title: "Shruti Chadha",
    type: "Client Project",
    platform: "Instagram",
    industry: "Interior Design",
    contentTag: "Portfolio Content",
    image: "/services/social/shruti_social.webp",
    intro:
      "Social media content for an interior designer focused on presenting spaces, design thinking and project details in a polished editorial format.",
    challenge:
      "Showcase varied interior projects while maintaining a premium and consistent visual identity.",
    work:
      "Content Strategy · Project Showcases · Social Creative · Reels · Captions · Publishing",
    outcome:
      "A cleaner portfolio-led social presence that presents design work with stronger visual consistency.",
    href: "/work/shruti-chadha-social-media",
  },
  {
    id: "vow-story-social",
    service: "social",
    title: "Vow Story",
    type: "Client Project",
    platform: "Instagram",
    industry: "Events & Experiences",
    contentTag: "Event Content",
    image: "/services/social/vow_social.webp",
    intro:
      "Social media content for an event brand covering weddings, launches and branded experiences through a more cohesive visual storytelling system.",
    challenge:
      "Communicate different event formats while keeping every post connected to one recognisable brand experience.",
    work:
      "Event Content · Reels · Social Creative · Campaign Content · Captions · Publishing",
    outcome:
      "A more cohesive event-led feed that connects weddings, launches and brand experiences under one identity.",
    href: "/work/vow-story-social-media",
  },

  /* =========================================================
     SEO
     Images:
     /public/work/seo/
  ========================================================= */

  {
    id: "rnk-rentals-seo",
    service: "seo",
    title: "RNK Rentals",
    type: "Client Project",
    industry: "Car Rental",
    contentTag: "SEO",
    image: "/services/seo/rnk_seo.webp",
    intro:
      "SEO work for a car rental business focused on improving service visibility, strengthening important pages and building a clearer organic search foundation.",
    challenge:
      "Make relevant rental services easier to discover while improving the structure and search readiness of key website pages.",
    work:
      "Keyword Research · On-Page SEO · Technical Fixes · Internal Linking · Backlinks · GBP · Reporting",
    outcome:
      "A stronger search foundation with clearer priority pages, improved structure and ongoing visibility tracking.",
    href: "/work/rnk-rentals-seo",
  },
  {
    id: "dts-seo",
    service: "seo",
    title: "DTS",
    type: "Client Project",
    industry: "Digital Marketing",
    contentTag: "SEO",
    image: "/services/seo/dts_seo.webp",
    intro:
      "Ongoing SEO work for a digital marketing brand covering technical improvements, search-led pages, internal linking and authority-building activity.",
    challenge:
      "Improve organic discoverability across services and content while keeping the website structure useful for both users and search engines.",
    work:
      "Keyword Research · Page Optimization · Technical SEO · Internal Linking · Backlinks · GBP · Reporting",
    outcome:
      "A more structured organic search program with clearer search targets and stronger website connectivity.",
    href: "/work/dts-seo",
  },

  /* =========================================================
     PERFORMANCE MARKETING
     Images:
     /public/work/performance/
  ========================================================= */

  {
    id: "rnk-rentals-performance",
    service: "performance",
    title: "RNK Rentals",
    type: "Client Project",
    industry: "Car Rental",
    contentTag: "Paid Growth",
    image: "/work/performance/rnk-rentals.jpg",
    intro:
      "Performance marketing work for a car rental business focused on reaching relevant audiences, improving campaign structure and supporting measurable enquiries.",
    challenge:
      "Use paid media to connect rental demand with the right services while reducing wasted campaign activity.",
    work:
      "Campaign Strategy · Audience Targeting · Conversion Tracking · Creative Testing · Optimization · Reporting",
    outcome:
      "A more structured paid acquisition setup with clearer campaign measurement and ongoing optimization.",
    href: "/work/rnk-rentals-performance-marketing",
  },
  {
    id: "dts-performance",
    service: "performance",
    title: "DTS",
    type: "Client Project",
    industry: "Digital Marketing",
    contentTag: "Paid Growth",
    image: "/work/performance/dts.jpg",
    intro:
      "Paid campaign work for a digital marketing brand focused on campaign setup, audience targeting, creative testing and clearer performance measurement.",
    challenge:
      "Build a more measurable acquisition process across campaigns without treating clicks as the final business outcome.",
    work:
      "Paid Campaigns · Audience Testing · Creative Variations · Conversion Tracking · Optimization · Reporting",
    outcome:
      "A clearer performance framework for testing audiences, creative and campaign efficiency.",
    href: "/work/dts-performance-marketing",
  },

  /*
    PERFORMANCE PROJECT 03:
    Add the third project here once you confirm its client/project name.
    Keeping it out of the live UI avoids publishing a made-up client name.
  */

  /* =========================================================
     WEBSITE DEVELOPMENT
     Images:
     /public/work/websites/
  ========================================================= */

  {
    id: "dts-website",
    service: "website",
    title: "DTS",
    type: "Client Project",
    industry: "Digital Marketing",
    contentTag: "Website",
    image: "/services/webdev/dts_web.webp",
    intro:
      "A website project for a digital marketing brand focused on organising services, improving clarity and creating a stronger responsive digital presence.",
    challenge:
      "Present multiple digital services clearly without making the site feel crowded or difficult to navigate.",
    work:
      "Website Strategy · UX/UI · Responsive Development · Content Structure · Technical SEO",
    outcome:
      "A clearer service journey with a more structured and scalable website experience.",
    href: "/work/dts-website",
  },
  {
    id: "rnk-rentals-website",
    service: "website",
    title: "RNK Rentals",
    type: "Client Project",
    industry: "Car Rental",
    contentTag: "Website",
    image: "/services/webdev/rnk_web.webp",
    intro:
      "A car rental website experience designed to make the fleet, rental options and enquiry journey easier to understand across devices.",
    challenge:
      "Organise vehicles and rental information in a way that helps visitors quickly understand options and move toward an enquiry.",
    work:
      "Website Structure · UX/UI · Responsive Development · Service Pages · Technical SEO",
    outcome:
      "A clearer rental journey with improved mobile usability and a more organised digital experience.",
    href: "/work/rnk-rentals-website",
  },
  {
    id: "xiimba-website",
    service: "website",
    title: "Xiimba",
    type: "Client Project",
    industry: "Fabric Import & Export",
    contentTag: "Website",
    image: "/services/webdev/xiimba_web.webp",
    intro:
      "A business website for a fabric import and export company built to present products, capabilities and company information in a clearer professional format.",
    challenge:
      "Explain the business, product range and trade capabilities clearly to different types of buyers and partners.",
    work:
      "Website Strategy · UX/UI · Responsive Development · Content Structure · Product Presentation",
    outcome:
      "A more professional digital presence with clearer business information and product communication.",
    href: "/work/xiimba-website",
  },
  {
    id: "poetry-dubai-website",
    service: "website",
    title: "Poetry Dubai",
    type: "Client Project",
    industry: "Furniture & Interior Products",
    contentTag: "Showcase Website",
    image: "/services/webdev/poetry_web.webp",
    intro:
      "A showcase-led website for a Dubai brand presenting chairs, wall pieces and other design-focused products through a clean visual browsing experience.",
    challenge:
      "Let the product range feel premium and visual while keeping categories and individual pieces easy to explore.",
    work:
      "Showcase Strategy · UX/UI · Product Presentation · Responsive Development · Content Structure",
    outcome:
      "A cleaner product showcase that gives individual pieces more visual space while keeping browsing straightforward.",
    href: "/services/webdev/poetry_web.webp",
  },
  {
    id: "shruti-chadha-website",
    service: "website",
    title: "Shruti Chadha",
    type: "Client Project",
    industry: "Interior Design",
    contentTag: "Portfolio Website",
    image: "/services/webdev/shruti_chadha_web.webp",
    intro:
      "A portfolio-led website for an interior designer created to present projects, services and design thinking through a more refined digital experience.",
    challenge:
      "Showcase visual interior work without letting navigation, copy or layout compete with the projects themselves.",
    work:
      "Portfolio Strategy · UX/UI · Responsive Development · Project Structure · Content Presentation",
    outcome:
      "A more polished portfolio experience that makes interior projects easier to explore across screen sizes.",
    href: "/work/shruti-chadha-website",
  },
  {
    id: "vcarglow-website",
    service: "website",
    title: "VCarGlow",
    type: "Client Project",
    industry: "Car Cleaning & Washing",
    contentTag: "Service Website",
    image: "/services/webdev/vcar_web.webp",
    intro:
      "A service website for a car cleaning and washing business designed to explain services clearly and make the next customer action easier to understand.",
    challenge:
      "Turn multiple vehicle cleaning services into a simple digital journey without overwhelming visitors with service details.",
    work:
      "Service Architecture · UX/UI · Responsive Development · Content Structure · Conversion Journey",
    outcome:
      "A clearer service experience that makes car care options easier to understand and act on.",
    href: "/work/vcarglow-website",
  },
  {
    id: "jkayy-website",
    service: "website",
    title: "JKAYY",
    type: "Client Project",
    industry: "DJ & Artist",
    contentTag: "Artist Website",
    image: "/services/webdev/jkayy_web.webp",
    intro:
      "A personal artist website for a DJ built to showcase identity, performances and creative presence in one focused digital destination.",
    challenge:
      "Translate an individual DJ identity into a website that feels distinctive while keeping important artist information easy to access.",
    work:
      "Artist Positioning · UX/UI · Responsive Development · Showcase Sections · Content Structure",
    outcome:
      "A stronger personal digital presence that brings artist identity and performance-focused content together.",
    href: "/work/jkayy-website",
  },
  {
    id: "afterrmatch-website",
    service: "website",
    title: "AfterrMatch",
    type: "Client Project",
    industry: "Sports, Gaming & Café",
    contentTag: "Experience Website",
    image: "/services/webdev/aftermatch_web.webp",
    intro:
      "A multi-experience website for a venue combining pickleball, pool tables, PS5 gaming, café experiences and DJ-led entertainment.",
    challenge:
      "Communicate several different activities and experiences without making the venue feel confusing or fragmented.",
    work:
      "Experience Architecture · UX/UI · Responsive Development · Activity Pages · Content Structure",
    outcome:
      "A clearer digital experience that brings sport, gaming, food and entertainment together under one venue identity.",
    href: "/work/afterrmatch-website",
  },
  {
  id: "vow-story-website",
  service: "website",
  title: "Vow Story",
  type: "Client Project",
  industry: "Events, Weddings & Brand Experiences",
  contentTag: "Event Website",
  image: "/services/webdev/vow-story_web.webp",
  intro:
    "A visually led website for an event brand showcasing weddings, brand launches and curated experiences through a clear and premium digital presentation.",
  challenge:
    "Present different types of events and experiences without making the website feel disconnected or visually overwhelming.",
  work:
    "Website Strategy · UX/UI · Responsive Development · Event Showcase · Content Structure",
  outcome:
    "A more cohesive digital experience that brings weddings, launches and event work together under one clear brand identity.",
  href: "/work/vow-story-website",
},

 
];

/* =========================================================
   FILTER BUTTON
========================================================= */

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={newYorkFont}
      className={`
        relative
        shrink-0

        overflow-hidden

        rounded-[14px]

        border

        px-4
        py-2.5

        text-[9px]
        font-medium
        uppercase
        tracking-[0.13em]

        transition-all
        duration-300

        sm:px-5
        sm:text-[10px]

        ${
          active
            ? `
                border-[#6285AD]/35
                bg-[#EEF5FA]
                text-[#0B2A52]

                shadow-[0_7px_20px_rgba(11,42,82,0.07)]
              `
            : `
                border-[#D6E3EC]
                bg-white/85
                text-[#60758A]

                hover:border-[#6285AD]/35
                hover:bg-[#F8FBFD]
                hover:text-[#0B2A52]
              `
        }
      `}
    >
      {label}
    </button>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function WorkCard({
  project,
  service,
  index,
  reduceMotion,
}: {
  project: Project;
  service: ServiceMeta;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 14,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.18),
        ease,
        layout: {
          duration: reduceMotion ? 0 : 0.4,
          ease,
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
            }
      }
      className="
        group
        relative

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-[24px]

        border
        border-[#D5E1E9]

        bg-white

        shadow-[0_14px_38px_rgba(11,42,82,0.055)]

        transition-all
        duration-300

        hover:border-[#BFD2DF]
        hover:shadow-[0_22px_50px_rgba(11,42,82,0.09)]
      "
    >
      {/* =====================================================
          IMAGE — SAME FEEL AS YOUR REFERENCE CARD
      ===================================================== */}

      <div
        className="
          relative

          h-[210px]
          w-full

          overflow-hidden

          bg-[#EEF4F8]

          sm:h-[230px]
          md:h-[240px]
          xl:h-[250px]
        "
      >
       <Image
  src={project.image}
  alt={`${project.title} ${service.label} project by Sharp Rays${
    project.industry ? ` for the ${project.industry} industry` : ""
  }`}
  title={`${project.title} — ${service.label} Case Study | Sharp Rays`}
  width={1600}
  height={1000}
  sizes="
    (max-width: 767px) 100vw,
    (max-width: 1279px) 50vw,
    33vw
  "
  className="
    block
    h-full
    w-full
    max-w-none

    object-cover
    object-center

    transition-transform
    duration-700
    ease-out

    group-hover:scale-[1.035]
  "
/>

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-t
            from-[#061A2D]/15
            via-transparent
            to-transparent
          "
        />

        {/* PLATFORM PILL */}

        {project.platform && (
          <div
            className="
              absolute
              left-4
              top-4

              rounded-full

              border
              border-white/75

              bg-white/92

              px-4
              py-2

              shadow-[0_8px_24px_rgba(11,42,82,0.09)]

              backdrop-blur-[8px]
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]

                text-[#0B2A52]
              "
            >
              {project.platform}
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative

          flex
          flex-1
          flex-col

          p-5

          sm:p-6
        "
      >
        {/* META */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
          "
        >
          <span
            style={newYorkFont}
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.18em]
            "
          >
            <span style={{ color: service.accent }}>
              {project.industry ?? service.label}
            </span>
          </span>

          {project.contentTag && (
            <span
              style={newYorkFont}
              className="
                rounded-full

                border
                border-[#D8C8B3]

                bg-[#FFF9F1]

                px-3
                py-1.5

                text-[8px]
                font-medium

                text-[#8B5F35]
              "
            >
              {project.contentTag}
            </span>
          )}
        </div>

        {/* TITLE */}

        <div className="mt-4">
          <span
            style={newYorkFont}
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.16em]

              text-[#9BA9B5]
            "
          >
            {project.type}
          </span>

          <h3
            style={newYorkFont}
            className="
              mt-2

              text-[1.55rem]
              font-normal
              leading-[1.05]
              tracking-[-0.035em]

              text-[#0B2A52]

              sm:text-[1.7rem]
            "
          >
            {project.title}
          </h3>

          <p
            style={newYorkFont}
            className="
              mt-3

              text-[0.78rem]
              leading-[1.65]

              text-[#60758A]

              sm:text-[0.82rem]
            "
          >
            {project.intro}
          </p>
        </div>

        {/* COMPACT CASE-STUDY INFO */}

        <div
          className="
            mt-5

            divide-y
            divide-[#E2E9EE]

            border-y
            border-[#E2E9EE]
          "
        >
          <div
            className="
              grid
              grid-cols-[70px_1fr]
              gap-3

              py-3.5
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.15em]

                text-[#B79A72]
              "
            >
              Challenge
            </span>

            <p
              style={newYorkFont}
              className="
                text-[0.7rem]
                leading-[1.5]

                text-[#0B2A52]
              "
            >
              {project.challenge}
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-[70px_1fr]
              gap-3

              py-3.5
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.15em]

                text-[#B79A72]
              "
            >
              Work
            </span>

            <p
              style={newYorkFont}
              className="
                text-[0.7rem]
                leading-[1.5]

                text-[#0B2A52]
              "
            >
              {project.work}
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-[70px_1fr]
              gap-3

              py-3.5
            "
          >
            <span
              style={newYorkFont}
              className="
                text-[7px]
                font-medium
                uppercase
                tracking-[0.15em]

                text-[#B79A72]
              "
            >
              Outcome
            </span>

            <p
              style={newYorkFont}
              className="
                text-[0.7rem]
                leading-[1.5]

                text-[#0B2A52]
              "
            >
              {project.outcome}
            </p>
          </div>
        </div>

        {/* CTA */}

     <Link
  href={project.href}
  title={`View ${project.title} ${service.label} case study`}
  style={newYorkFont}
  className="
    mt-auto
    pt-5

    flex
    w-fit
    items-center
    gap-2

    text-[8px]
    font-medium
    uppercase
    tracking-[0.16em]

    text-[#0B2A52]
  "
>
  <span>View Full Case Study</span>

  <ArrowRight
    size={11}
    strokeWidth={1.7}
    className="
      text-[#B79A72]

      transition-transform
      duration-300

      group-hover:translate-x-1
    "
  />
</Link>
      </div>

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0

          h-[2px]
          w-0

          rounded-full

          transition-all
          duration-500

          group-hover:w-20
        "
        style={{
          backgroundColor: service.accent,
        }}
      />
    </motion.article>
  );
}

/* =========================================================
   SERVICE GROUP
========================================================= */

function ServiceGroup({
  service,
  projectsForService,
  reduceMotion,
}: {
  service: ServiceMeta;
  projectsForService: Project[];
  reduceMotion: boolean;
}) {
  if (projectsForService.length === 0) {
    return null;
  }

  const Icon = service.icon;

  return (
    <motion.div
      layout
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease,
      }}
      className="
        mt-12
        first:mt-0

        sm:mt-14
        lg:mt-16
      "
    >
      {/* GROUP HEADER */}

      <div
        className="
          mb-5

          flex
          items-center
          gap-3

          sm:mb-6
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

            border
            border-black/[0.05]
          "
          style={{
            color: service.accent,
            backgroundColor: service.soft,
          }}
        >
          <Icon size={15} strokeWidth={1.6} />
        </span>

        <div className="min-w-0">
          <span
            style={newYorkFont}
            className="
              block

              text-[8px]
              font-medium
              uppercase
              tracking-[0.18em]

              text-[#9A7957]
            "
          >
            Work by Service
          </span>

          <h3
            style={newYorkFont}
            className="
              mt-1

              text-[1.3rem]
              font-normal
              tracking-[-0.03em]

              text-[#0B2A52]

              sm:text-[1.45rem]
            "
          >
            {service.label}
          </h3>
        </div>

        <span className="h-px flex-1 bg-[#DCE6ED]" />

        <span
          style={newYorkFont}
          className="
            shrink-0

            text-[8px]
            uppercase
            tracking-[0.14em]

            text-[#9AA8B4]
          "
        >
          {projectsForService.length.toString().padStart(2, "0")}{" "}
          {projectsForService.length === 1 ? "Project" : "Projects"}
        </span>
      </div>

      {/* GROUP CARDS */}

      <div
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2

          xl:grid-cols-3
          xl:gap-5
        "
      >
        {projectsForService.map((project, index) => (
          <WorkCard
            key={project.id}
            project={project}
            service={service}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ServiceWiseWorkSection() {
  const reduceMotion = Boolean(useReducedMotion());

  const [activeService, setActiveService] =
    useState<ServiceId>("social");

  const selectedService =
    services.find((service) => service.id === activeService) ?? services[0];

  const selectedProjects = projects.filter(
    (project) => project.service === activeService,
  );

  return (
    <section
      id="portfolio"
      aria-labelledby="service-work-heading"
      className="
        relative
        isolate
        overflow-hidden

        bg-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-320px]

            h-[540px]
            w-[980px]

            -translate-x-1/2

            rounded-full

            bg-[#EEF5FA]/80

            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-[220px]
            bottom-[-180px]

            h-[440px]
            w-[440px]

            rounded-full

            bg-[#B79A72]/[0.045]

            blur-[125px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1360px]

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-14
        "
      >
        {/* HEADER */}

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
            ease,
          }}
          className="
            mx-auto
            max-w-[960px]

            text-center
          "
        >
          <div className="flex items-center justify-center gap-3">
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
              style={newYorkFont}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.23em]

                text-[#B79A72]

                sm:text-[10px]
                sm:tracking-[0.27em]
              "
            >
              Selected Work
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

          <h2
            id="service-work-heading"
            style={newYorkFont}
            className="
              mx-auto
              mt-5
              max-w-[960px]

              text-[2.2rem]
              font-light
              leading-[1.04]
              tracking-[-0.045em]

              text-[#0B2A52]

              sm:text-[2.6rem]
              md:text-[2.95rem]
              lg:text-[3.1rem]
              xl:text-[3.35rem]
            "
          >
            Explore Our Work{" "}
            <span className="font-normal italic text-[#B79A72]">
              Service by Service.
            </span>
          </h2>

          <p
            style={newYorkFont}
            className="
              mx-auto
              mt-4
              max-w-[720px]

              text-[0.84rem]
              leading-[1.65]

              text-[#60758A]

              sm:text-[0.94rem]
            "
          >
            Each project is shown through the problem, the work and the outcome
            — so you can understand more than just what the final screen looked
            like.
          </p>
        </motion.div>

        {/* FILTERS */}

        <div
          className="
            -mx-4
            mt-8

            overflow-x-auto

            px-4
            pb-2

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:mx-0
            sm:mt-10
            sm:px-0
          "
        >
          <div
            className="
              mx-auto
              flex
              w-max
              min-w-full
              items-center
              gap-2

              sm:flex-wrap
              sm:justify-center
            "
          >
            {services.map((service) => (
              <FilterButton
                key={service.id}
                active={activeService === service.id}
                label={service.shortLabel}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>
        </div>

        {/* WORK */}

        <div className="mt-10 sm:mt-12">
          <AnimatePresence mode="wait">
            {selectedProjects.length > 0 ? (
              <motion.div
                key={selectedService.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 8,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease,
                }}
              >
                <ServiceGroup
                  service={selectedService}
                  projectsForService={selectedProjects}
                  reduceMotion={reduceMotion}
                />
              </motion.div>
            ) : (
              <motion.div
                key={`empty-${activeService}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  mx-auto
                  max-w-[620px]

                  rounded-[22px]

                  border
                  border-[#D8E4EC]

                  bg-[#F8FBFD]

                  px-6
                  py-9

                  text-center
                "
              >
                <span
                  style={newYorkFont}
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]

                    text-[#B79A72]
                  "
                >
                  Work Coming Here
                </span>

                <p
                  style={newYorkFont}
                  className="
                    mt-3

                    text-[1.15rem]
                    font-light
                    leading-[1.35]

                    text-[#0B2A52]
                  "
                >
                  Projects for this service will appear here.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
