import type { Metadata } from "next";

import AboutHero from "@/components/About/AboutHero";
import BeginningSection from "@/components/About/BeginningSection";
import BeliefSection from "@/components/About/BeliefSection";
import FinalHumanCTA from "@/components/About/FinalHumanCTA";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TheWayWeThink from "@/components/About/TheWayWeThink";
import WhatSharpraysIs from "@/components/About/WhatSharpraysIs";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "About Sharp Rays | Digital Growth Company for Modern Brands",

  description:
    "About Sharp Rays: a digital growth company joining strategy, SEO, ads, websites, AI video and automation in one system. See how we work and what we believe.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "about Sharp Rays",
    "Sharp Rays digital growth company",
    "Sharp Rays digital marketing agency",
    "Sharp Rays team",
    "digital growth company India",
    "digital marketing and AI agency",
    "digital marketing agency India",
    "digital growth partner",
    "SEO agency India",
    "performance marketing agency India",
    "website development agency India",
    "AI automation agency India",
    "AI video agency India",
    "digital marketing company for startups",
    "digital marketing company for modern brands",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/about",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: "https://www.sharprays.com/about",

    siteName: "Sharp Rays",

    title: "About Sharp Rays | Digital Growth Company for Modern Brands",

    description:
      "About Sharp Rays: a digital growth company joining strategy, SEO, ads, websites, AI video and automation in one system.",

    images: [
      {
        url: "/og/about.webp",
        width: 1200,
        height: 630,
        alt: "About Sharp Rays - Digital Growth Company for Modern Brands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Sharp Rays | Digital Growth Company for Modern Brands",

    description:
      "About Sharp Rays: a digital growth company joining strategy, SEO, ads, websites, AI video and automation in one system.",

    images: ["/og/about.webp"],
  },
};

/* =========================================================
   ABOUT PAGE CORE SCHEMA
   ImageObject + Organization + AboutPage
========================================================= */

const aboutCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id": "https://www.sharprays.com/about#primaryimage",

      url: "https://www.sharprays.com/og/about.png",

      contentUrl: "https://www.sharprays.com/og/about.png",

      width: 1200,

      height: 630,

      caption:
        "About Sharp Rays - Digital Growth Company for Modern Brands",

      representativeOfPage: true,

      inLanguage: "en-IN",
    },

    /* =====================================================
       LOGO
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id": "https://www.sharprays.com/#logo",

      url: "https://www.sharprays.com/logo/sharp-rays-logo.png",

      contentUrl:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      caption: "Sharp Rays Logo",
    },

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    {
      "@type": "Organization",

      "@id": "https://www.sharprays.com/#organization",

      name: "Sharp Rays",

      alternateName: "Sharp Rays Digital Marketing Agency",

      url: "https://www.sharprays.com/",

      logo: {
        "@id": "https://www.sharprays.com/#logo",
      },

      image: {
        "@id": "https://www.sharprays.com/about#primaryimage",
      },

      description:
        "Sharp Rays is a digital growth company combining strategy, creativity, technology and performance to help startups, small businesses, D2C brands and growing businesses build stronger digital growth systems.",

      slogan: "Digital growth, without the guesswork.",

      email: "info@sharprays.com",

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      knowsAbout: [
        "Digital Marketing",
        "Digital Growth Strategy",
        "Brand Strategy",
        "Social Media Marketing",
        "Search Engine Optimization",
        "Technical SEO",
        "Keyword Research",
        "Search Intent Strategy",
        "Performance Marketing",
        "Paid Media",
        "Google Ads",
        "Meta Ads",
        "Conversion Tracking",
        "Website Development",
        "Website Management",
        "UX Design",
        "UI Design",
        "Content Management",
        "AI Automation",
        "Workflow Automation",
        "Lead Automation",
        "AI Video Creation",
        "Video Editing",
      ],
    },

    /* =====================================================
       WEBSITE
    ===================================================== */

    {
      "@type": "WebSite",

      "@id": "https://www.sharprays.com/#website",

      url: "https://www.sharprays.com/",

      name: "Sharp Rays",

      alternateName: "Sharp Rays Digital Marketing Agency",

      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },

      inLanguage: "en-IN",
    },

    /* =====================================================
       ABOUT PAGE
    ===================================================== */

    {
      "@type": "AboutPage",

      "@id": "https://www.sharprays.com/about#webpage",

      url: "https://www.sharprays.com/about",

      name: "About Sharp Rays | Digital Growth Company for Modern Brands",

      headline: "We Build Meaningful Growth Engines.",

      alternativeHeadline:
        "We Don't Just Do Marketing. We Build Meaningful Growth Engines.",

      description:
        "Learn about Sharp Rays, a digital growth company combining strategy, creativity, technology and performance to help ambitious businesses build meaningful and sustainable growth.",

      isPartOf: {
        "@id": "https://www.sharprays.com/#website",
      },

      about: {
        "@id": "https://www.sharprays.com/#organization",
      },

      mainEntity: {
        "@id": "https://www.sharprays.com/#organization",
      },

      primaryImageOfPage: {
        "@id": "https://www.sharprays.com/about#primaryimage",
      },

      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id": "https://www.sharprays.com/about#breadcrumb",
      },

      audience: {
        "@type": "BusinessAudience",

        name:
          "Startups, small businesses, D2C brands and growing businesses",

        audienceType:
          "Businesses seeking a digital growth partner for strategy, creative, SEO, advertising, websites and AI automation",

        description:
          "Founders, startups, small businesses, D2C brands and growing companies interested in integrated digital marketing and growth services.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "Digital Growth Strategy",
        },
        {
          "@type": "Thing",
          name: "Search Engine Optimization",
        },
        {
          "@type": "Thing",
          name: "Performance Marketing",
        },
        {
          "@type": "Thing",
          name: "Website Development",
        },
        {
          "@type": "Thing",
          name: "AI Video",
        },
        {
          "@type": "Thing",
          name: "AI Automation",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/work",
        "https://www.sharprays.com/contact",
      ],

      copyrightYear: 2026,

      copyrightHolder: {
        "@id": "https://www.sharprays.com/#organization",
      },

      inLanguage: "en-IN",
    },
  ],
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://www.sharprays.com/about#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: "https://www.sharprays.com/",
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "About Sharp Rays",

      item: "https://www.sharprays.com/about",
    },
  ],
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      {/* =====================================================
          ABOUT PAGE STRUCTURED DATA
      ===================================================== */}

      <script
        id="about-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutCoreSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          BREADCRUMB STRUCTURED DATA
      ===================================================== */}

      <script
        id="about-breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="min-h-screen bg-[#051935]">
        <Navbar />

        <AboutHero />

        <BeginningSection />

        <BeliefSection />

        <WhatSharpraysIs />

        <HowWeWorkSection />

        <TheWayWeThink />

        <FinalHumanCTA />

        <Footer />
      </main>
    </>
  );
}