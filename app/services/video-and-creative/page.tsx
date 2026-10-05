// app/services/ai-video-editing/page.tsx

import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import AiVideoAdFormats from "@/components/VideoandCreative/AiVideoAdFormats";
import AiVideoEditingFaq from "@/components/VideoandCreative/AiVideoEditingFaq";
import AiVideoEditingPricing from "@/components/VideoandCreative/AiVideoEditingPricing";
import AiVideoFinalCTA from "@/components/VideoandCreative/AiVideoFinalCTA";

import CreativeChannels from "@/components/VideoandCreative/CreativeChannels";
import SelectedCreative from "@/components/VideoandCreative/SelectedCreative";
import SharpRaysCreativeFramework from "@/components/VideoandCreative/SharpRaysCreativeFramework";

import VideoCreativeExplained from "@/components/VideoandCreative/VideoCreativeExplained";
import VideoCreativeHero from "@/components/VideoandCreative/VideoCreativeHero";
import VideoCreativeProblem from "@/components/VideoandCreative/VideoCreativeProblem";
import VideoCreativeServices from "@/components/VideoandCreative/VideoCreativeServices";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "AI Video Production Company in India for Brands | Sharp Rays",

  description:
    "AI video production company in India creating product videos, ads, Reels, brand content and professional video editing for modern digital channels.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "AI video production company in India",
    "AI video agency India",
    "AI video editing services",
    "AI video production services",
    "video editing services in India",
    "AI video creation India",
    "professional video editing India",
    "AI product video agency",
    "AI advertising video production",
    "AI video ads India",
    "short form video editing India",
    "Instagram Reels editing India",
    "YouTube Shorts editing India",
    "performance video editing",
    "social media video editing India",
    "AI product videos",
    "AI brand films",
    "motion graphics services India",
    "video repurposing services",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/ai-video-editing",
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

    url:
      "https://www.sharprays.com/services/ai-video-editing",

    siteName: "Sharp Rays",

    title:
      "AI Video Production Company in India for Brands",

    description:
      "AI video production company in India creating product videos, ads, Reels, brand content and professional video editing for modern digital channels.",

    images: [
      {
        url:
          "/og/services-ai-video-editing.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays AI Video Production Company in India for Brands",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AI Video Production Company in India for Brands",

    description:
      "AI video production company in India creating product videos, ads, Reels, brand content and professional video editing for modern digital channels.",

    images: [
      "/og/services-ai-video-editing.webp",
    ],
  },
};

/* =========================================================
   AI VIDEO CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const aiVideoCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/ai-video-editing#primaryimage",

      url:
        "https://www.sharprays.com/og/services-ai-video-editing.webp",

      contentUrl:
        "https://www.sharprays.com/og/services-ai-video-editing.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays AI Video Production Company in India",

      representativeOfPage: true,

      inLanguage: "en-IN",
    },

    /* =====================================================
       LOGO
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/#logo",

      url:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      contentUrl:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      caption:
        "Sharp Rays Logo",
    },

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    {
      "@type": "Organization",

      "@id":
        "https://www.sharprays.com/#organization",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      url:
        "https://www.sharprays.com/",

      logo: {
        "@id":
          "https://www.sharprays.com/#logo",
      },

      description:
        "Sharp Rays is a digital marketing and digital growth company helping startups, small businesses, D2C brands and growing businesses through SEO, social media marketing, performance marketing, website development, content, AI video and AI automation.",

      slogan:
        "Digital growth, without the guesswork.",

      email:
        "info@sharprays.com",

      telephone:
        "+91-9415951060",

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],

      areaServed: [
        {
          "@type": "City",
          name: "Mumbai",
        },

        {
          "@type": "Country",
          name: "India",
        },

        {
          "@type": "Place",
          name: "Worldwide",
        },
      ],

      knowsAbout: [
        "AI Video Production",
        "AI Video Creation",
        "Professional Video Editing",
        "Short-Form Video Editing",
        "Instagram Reels Editing",
        "YouTube Shorts Editing",
        "Social Media Video Editing",
        "Advertising Video Creative",
        "Performance Video",
        "AI Product Videos",
        "AI Concept Videos",
        "Motion Graphics",
        "Visual Effects",
        "Video Repurposing",
        "Captions and Subtitles",
        "AI-Assisted Video Enhancement",
        "Video Post-Production",
        "Creative Direction",
      ],
    },

    /* =====================================================
       WEBSITE
    ===================================================== */

    {
      "@type": "WebSite",

      "@id":
        "https://www.sharprays.com/#website",

      url:
        "https://www.sharprays.com/",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      description:
        "Sharp Rays provides SEO, social media marketing, performance marketing, website development, content management, AI video and AI automation services.",

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },

    /* =====================================================
       AI VIDEO WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/ai-video-editing#webpage",

      url:
        "https://www.sharprays.com/services/ai-video-editing",

      name:
        "AI Video Production Company in India for Brands | Sharp Rays",

      headline:
        "Faster to Create. Better to Watch. Built to Perform.",

      alternativeHeadline:
        "AI Video Production and Professional Video Editing for Modern Brands",

      description:
        "Sharp Rays combines AI-powered video creation with professional editing to produce product videos, advertising creative, short-form content, motion graphics and platform-ready video assets.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/ai-video-editing#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/ai-video-editing#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/ai-video-editing#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/ai-video-editing#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/ai-video-editing#plans",
        },

        {
          "@id":
            "https://www.sharprays.com/services/ai-video-editing#faq",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Brands, startups, D2C businesses and marketing teams",

        audienceType:
          "Businesses seeking AI video production, professional video editing, short-form content and advertising creative",

        description:
          "Businesses that need AI-generated creative, professional editing, Reels, Shorts, product videos, social content or performance advertising assets.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "AI Video Creation",
        },

        {
          "@type": "Thing",
          name: "Professional Video Editing",
        },

        {
          "@type": "Thing",
          name: "Short-Form Video",
        },

        {
          "@type": "Thing",
          name: "Instagram Reels",
        },

        {
          "@type": "Thing",
          name: "YouTube Shorts",
        },

        {
          "@type": "Thing",
          name: "Advertising Video",
        },

        {
          "@type": "Thing",
          name: "AI Product Video",
        },

        {
          "@type": "Thing",
          name: "Motion Graphics",
        },

        {
          "@type": "Thing",
          name: "Video Repurposing",
        },

        {
          "@type": "Thing",
          name: "AI-Assisted Enhancement",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/ai-video-editing/short-form-video-editing",
        "https://www.sharprays.com/services/ai-video-editing/advertising-performance-video",
        "https://www.sharprays.com/free-audit",
        "https://www.sharprays.com/contact",
      ],

      copyrightYear: 2026,

      copyrightHolder: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },
  ],
};

/* =========================================================
   AI VIDEO SERVICE SCHEMA
========================================================= */

const aiVideoServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/ai-video-editing#service",

  name:
    "AI Video Production & Video Editing",

  alternateName:
    "AI Video and Professional Video Editing Services",

  url:
    "https://www.sharprays.com/services/ai-video-editing",

  serviceType:
    "AI Video Production and Video Editing",

  category:
    "Video Production and Creative Services",

  description:
    "AI video production and professional editing services covering generated scenes, short-form video, advertising creative, product videos, motion graphics, repurposing, captions and AI-assisted enhancement.",

  provider: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },

    {
      "@type": "Country",
      name: "India",
    },

    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],

  audience: {
    "@type": "BusinessAudience",

    audienceType:
      "Brands, startups, D2C businesses, creators and marketing teams seeking AI video production or professional editing",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",
      name: "AI-Generated Video",
    },

    {
      "@type": "CreativeWork",
      name: "Professional Video Edit",
    },

    {
      "@type": "CreativeWork",
      name: "Short-Form Video",
    },

    {
      "@type": "CreativeWork",
      name: "Social Media Video",
    },

    {
      "@type": "CreativeWork",
      name: "Advertising and Performance Video",
    },

    {
      "@type": "CreativeWork",
      name: "AI Product and Concept Video",
    },

    {
      "@type": "CreativeWork",
      name: "Motion Graphics",
    },

    {
      "@type": "CreativeWork",
      name: "Repurposed Video Content",
    },

    {
      "@type": "CreativeWork",
      name: "Captioned and Subtitled Video",
    },

    {
      "@type": "CreativeWork",
      name: "AI-Assisted Video Enhancement",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/ai-video-editing#plans",
  },
};

/* =========================================================
   VIDEO EDITING + AI VIDEO PLANS
========================================================= */

const aiVideoPlansSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/ai-video-editing#plans",

  name:
    "Sharp Rays AI Video and Video Editing Plans",

  url:
    "https://www.sharprays.com/services/ai-video-editing",

  description:
    "Monthly professional video editing and AI video creation plans for brands, startups, creators and marketing teams.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    6,

  itemListElement: [
    /* =====================================================
       EDIT STARTER
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Edit Starter",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Edit Starter Video Editing",

        serviceType:
          "Professional Video Editing",

        description:
          "Monthly professional video editing for businesses that already have footage and need reliable short-form content.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 6 Videos per Month",
          },

          {
            "@type": "PropertyValue",

            name:
              "Revision Rounds",

            value:
              "2 Revision Rounds per Video",
          },
        ],
      },
    },

    /* =====================================================
       EDIT GROWTH
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Edit Growth",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Edit Growth Video Editing",

        serviceType:
          "Professional Video Editing",

        description:
          "Higher-output professional editing with motion graphics, repurposing and stronger creative treatment for growing brands.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 12 Videos per Month",
          },
        ],
      },
    },

    /* =====================================================
       EDIT SCALE
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Edit Scale",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Edit Scale Video Editing",

        serviceType:
          "Professional Video Editing",

        description:
          "A larger monthly video editing operation for brands and marketing teams producing frequent organic and paid video content.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 20 Videos per Month",
          },
        ],
      },
    },

    /* =====================================================
       AI STARTER
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "AI Starter",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "AI Starter Video Creation",

        serviceType:
          "AI Video Production",

        description:
          "AI video creation for brands testing generated creative or producing visual concepts without traditional production.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 3 AI Videos per Month",
          },

          {
            "@type": "PropertyValue",

            name:
              "Revision Rounds",

            value:
              "2 Revision Rounds",
          },
        ],
      },
    },

    /* =====================================================
       AI GROWTH
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "AI Growth",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "AI Growth Video Creation",

        serviceType:
          "AI Video Production",

        description:
          "Recurring AI-generated video production for brands using AI creative across organic, product and advertising requirements.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 6 AI Videos per Month",
          },
        ],
      },
    },

    /* =====================================================
       AI SCALE
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "AI Scale",

      url:
        "https://www.sharprays.com/contact?service=ai-video-editing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "AI Scale Video Creation",

        serviceType:
          "AI Video Production",

        description:
          "A higher-frequency AI creative production system for D2C brands, campaigns and businesses producing performance creative.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Monthly Output",

            value:
              "Up to 10 AI Videos per Month",
          },
        ],
      },
    },
  ],
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id":
    "https://www.sharprays.com/services/ai-video-editing#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",

      position:
        1,

      name:
        "Home",

      item:
        "https://www.sharprays.com/",
    },

    {
      "@type": "ListItem",

      position:
        2,

      name:
        "Services",

      item:
        "https://www.sharprays.com/services",
    },

    {
      "@type": "ListItem",

      position:
        3,

      name:
        "AI Video & Video Editing",

      item:
        "https://www.sharprays.com/services/ai-video-editing",
    },
  ],
};

/* =========================================================
   FAQ PAGE SCHEMA

   NOTE:
   Current extracted page contains all 10 FAQ questions,
   but only FAQ 01 has a complete visible answer.

   Do not invent the remaining answers.
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  "@id":
    "https://www.sharprays.com/services/ai-video-editing#faq",

  url:
    "https://www.sharprays.com/services/ai-video-editing#ai-video-editing-faq",

  name:
    "AI Video & Editing FAQs",

  description:
    "Answers to common questions about AI video creation, professional video editing, short-form videos, advertising creative and brand consistency.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/ai-video-editing#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/ai-video-editing#service",
  },

  publisher: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  inLanguage:
    "en-IN",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "What is AI video creation?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "AI video creation uses generative artificial intelligence to create or transform moving visual content from inputs such as text, images or existing media. It can support concept development, generated scenes, animation and other visual production requirements.",
      },
    },
  ],
};

/* =========================================================
   AI VIDEO & VIDEO EDITING PAGE
========================================================= */

export default function VideoCreativePage() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-video-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiVideoCoreSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          SERVICE STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-video-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiVideoServiceSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          PLANS STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-video-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiVideoPlansSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          BREADCRUMB STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-video-breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          FAQ STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-video-faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="min-h-screen">
        <Navbar />

        <VideoCreativeHero />

        <VideoCreativeExplained />

        <VideoCreativeProblem />

        <VideoCreativeServices />

        <AiVideoAdFormats />

        <CreativeChannels />

        <SelectedCreative />

        <SharpRaysCreativeFramework />

        <AiVideoEditingPricing />

        <AiVideoEditingFaq />

        <AiVideoFinalCTA />

        <Footer />
      </main>
    </>
  );
}