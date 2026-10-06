
import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import ChannelStrategySection from "@/components/PerformanceMarketing/ChannelStrategySection";
import PerformanceMarketingExplained from "@/components/PerformanceMarketing/PerformanceMarketingExplained";
import PerformanceMarketingFAQs from "@/components/PerformanceMarketing/PerformanceMarketingFAQs";
import PerformanceMarketingFinalSections from "@/components/PerformanceMarketing/PerformanceMarketingFinalSections";
import PerformanceMarketingHero from "@/components/PerformanceMarketing/PerformanceMarketingHero";
import PerformanceMarketingPricing from "@/components/PerformanceMarketing/PerformanceMarketingPricing";
import PerformanceMarketingProblem from "@/components/PerformanceMarketing/PerformanceMarketingProblem";
import PerformanceMarketingProcess from "@/components/PerformanceMarketing/PerformanceMarketingProcess";
import PerformanceMarketingServices from "@/components/PerformanceMarketing/PerformanceMarketingServices";
import PerformanceMetricsSection from "@/components/PerformanceMarketing/PerformanceMetricsSection";
import PerformancePointOfView from "@/components/PerformanceMarketing/PerformancePointOfView";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "Performance Marketing Agency in India | Sharp Rays",

  description:
    "Performance marketing agency in India for startups and D2C brands offering Google & Meta ads, tracking, retargeting and landing-page optimization.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "performance marketing agency in India",
    "performance marketing agency for startups",
    "performance marketing agency India",
    "lead generation agency India",
    "Google Ads management India",
    "Meta Ads management India",
    "Google and Meta ads management",
    "paid media agency India",
    "paid advertising agency India",
    "retargeting ads agency India",
    "conversion tracking services India",
    "performance marketing for startups",
    "performance marketing for D2C brands",
    "Google Ads agency India",
    "Meta Ads agency India",
    "Facebook Ads agency India",
    "Instagram Ads agency India",
    "ROAS marketing agency India",
    "lead generation marketing agency",
    "paid media management India",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/performance-marketing",
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
      "https://www.sharprays.com/services/performance-marketing",

    siteName: "Sharp Rays",

    title:
      "Performance Marketing Agency in India",

    description:
      "Performance marketing agency in India for startups and D2C brands offering Google & Meta ads, tracking, retargeting and landing-page optimization.",

    images: [
      {
        url:
          "/og/services-performance-marketing.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Performance Marketing Agency in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Performance Marketing Agency in India",

    description:
      "Performance marketing agency in India for startups and D2C brands offering Google & Meta ads, tracking, retargeting and landing-page optimization.",

    images: [
      "/og/services-performance-marketing.webp",
    ],
  },
};

/* =========================================================
   PERFORMANCE MARKETING CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const performanceMarketingCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/performance-marketing#primaryimage",

      url:
        "https://www.sharprays.com/og/services-performance-marketing.webp",

      contentUrl:
        "https://www.sharprays.com/og/services-performance-marketing.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Performance Marketing Agency in India",

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
        "Performance Marketing",
        "Paid Media Strategy",
        "Google Ads",
        "Google Search Ads",
        "Performance Max",
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "LinkedIn Ads",
        "YouTube Advertising",
        "Display Advertising",
        "Retargeting",
        "Remarketing",
        "Lead Generation",
        "Conversion Tracking",
        "Landing Page Optimization",
        "Performance Creative",
        "Audience Targeting",
        "Campaign Optimization",
        "Conversion Rate Optimization",
        "Return On Ad Spend",
        "Cost Per Lead",
        "Cost Per Acquisition",
        "Paid Media Analytics",
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

      inLanguage: "en-IN",
    },

    /* =====================================================
       PERFORMANCE MARKETING WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/performance-marketing#webpage",

      url:
        "https://www.sharprays.com/services/performance-marketing",

      name:
        "Performance Marketing Agency in India | Sharp Rays",

      headline:
        "Turn Reach Into Results.",

      alternativeHeadline:
        "Performance Marketing That Turns Paid Reach Into Measurable Business Action",

      description:
        "Sharp Rays provides performance marketing services covering paid media strategy, Google Ads, Meta Ads, retargeting, creative, landing-page optimization, conversion tracking and ongoing campaign optimization.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/performance-marketing#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/performance-marketing#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/performance-marketing#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/performance-marketing#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/performance-marketing#faq",
        },

        {
          "@id":
            "https://www.sharprays.com/services/performance-marketing#plans",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Startups, D2C brands, local businesses and growing companies",

        audienceType:
          "Businesses seeking Google Ads, Meta Ads, paid media, lead generation, retargeting and conversion optimization",

        description:
          "Businesses that want paid advertising connected to measurable actions such as leads, enquiries, purchases, calls or revenue.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "Google Ads",
        },

        {
          "@type": "Thing",
          name: "Meta Ads",
        },

        {
          "@type": "Thing",
          name: "Facebook Advertising",
        },

        {
          "@type": "Thing",
          name: "Instagram Advertising",
        },

        {
          "@type": "Thing",
          name: "LinkedIn Ads",
        },

        {
          "@type": "Thing",
          name: "YouTube Advertising",
        },

        {
          "@type": "Thing",
          name: "Retargeting",
        },

        {
          "@type": "Thing",
          name: "Conversion Tracking",
        },

        {
          "@type": "Thing",
          name: "Landing Page Optimization",
        },

        {
          "@type": "Thing",
          name: "Performance Creative",
        },

        {
          "@type": "Thing",
          name: "Return On Ad Spend",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/performance-marketing/google-ads-management",
        "https://www.sharprays.com/services/performance-marketing/meta-ads",
        "https://www.sharprays.com/services/performance-marketing/conversion-tracking",
        "https://www.sharprays.com/services/website-development/landing-page-development",
        "https://www.sharprays.com/free-audit",
        "https://www.sharprays.com/contact",
      ],

      copyrightYear: 2026,

      copyrightHolder: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage: "en-IN",
    },
  ],
};

/* =========================================================
   PERFORMANCE MARKETING SERVICE SCHEMA
========================================================= */

const performanceMarketingServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/performance-marketing#service",

  name:
    "Performance Marketing",

  alternateName:
    "Paid Media and Performance Marketing Services",

  url:
    "https://www.sharprays.com/services/performance-marketing",

  serviceType:
    "Performance Marketing",

  category:
    "Digital Advertising and Paid Media",

  description:
    "Performance marketing services covering paid media strategy, Google Ads, Meta Ads, paid social, performance creative, landing-page optimization, conversion tracking, retargeting and campaign optimization.",

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
      "Startups, D2C brands, local businesses and growing companies seeking measurable paid media growth",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",
      name: "Paid Media Strategy",
    },

    {
      "@type": "CreativeWork",
      name: "Google Ads Campaign Management",
    },

    {
      "@type": "CreativeWork",
      name: "Meta Ads Campaign Management",
    },

    {
      "@type": "CreativeWork",
      name: "Performance Creative",
    },

    {
      "@type": "CreativeWork",
      name: "Landing Page Optimization Recommendations",
    },

    {
      "@type": "CreativeWork",
      name: "Conversion Tracking and Measurement",
    },

    {
      "@type": "CreativeWork",
      name: "Retargeting Campaigns",
    },

    {
      "@type": "CreativeWork",
      name: "Campaign Optimization",
    },

    {
      "@type": "CreativeWork",
      name: "Performance Reporting",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/performance-marketing#plans",
  },
};

/* =========================================================
   PERFORMANCE MARKETING PLANS
========================================================= */

const performanceMarketingPlansSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/performance-marketing#plans",

  name:
    "Sharp Rays Performance Marketing Plans",

  url:
    "https://www.sharprays.com/services/performance-marketing",

  description:
    "Performance marketing management plans for businesses running one or more paid advertising platforms.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems: 3,

  itemListElement: [
    /* =====================================================
       STARTER
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Starter Performance Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=performance-marketing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Starter Performance Marketing",

        serviceType:
          "Performance Marketing",

        description:
          "A focused single-channel performance marketing plan for businesses that want to begin paid acquisition with one advertising platform and a clear performance objective.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Platform Scope",

            value:
              "1 Advertising Platform",
          },
        ],
      },
    },

    /* =====================================================
       GROWTH
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Growth Performance Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=performance-marketing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Growth Performance Marketing",

        serviceType:
          "Performance Marketing",

        description:
          "A connected performance marketing plan for growing businesses that want two paid channels working together with stronger tracking, testing and retargeting.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Platform Scope",

            value:
              "Up to 2 Advertising Platforms",
          },

          {
            "@type": "PropertyValue",

            name:
              "Bundle Advantage",

            value:
              "Save ₹2,999 compared with two separate Starter plans",
          },
        ],
      },
    },

    /* =====================================================
       SCALE
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Scale Performance Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=performance-marketing",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Scale Performance Marketing",

        serviceType:
          "Performance Marketing",

        description:
          "A broader paid growth system for businesses scaling acquisition across multiple channels, audiences and conversion journeys.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Platform Scope",

            value:
              "Up to 3 Advertising Platforms",
          },

          {
            "@type": "PropertyValue",

            name:
              "Scale Advantage",

            value:
              "Save ₹5,998 compared with three separate Starter plans",
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
    "https://www.sharprays.com/services/performance-marketing#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name:
        "Home",

      item:
        "https://www.sharprays.com/",
    },

    {
      "@type": "ListItem",

      position: 2,

      name:
        "Services",

      item:
        "https://www.sharprays.com/services",
    },

    {
      "@type": "ListItem",

      position: 3,

      name:
        "Performance Marketing",

      item:
        "https://www.sharprays.com/services/performance-marketing",
    },
  ],
};

/* =========================================================
   FAQ PAGE SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  "@id":
    "https://www.sharprays.com/services/performance-marketing#faq",

  url:
    "https://www.sharprays.com/services/performance-marketing#performance-marketing-faqs",

  name:
    "Performance Marketing FAQs",

  description:
    "Answers to common questions about performance marketing, paid media, Google Ads, Meta Ads, advertising budgets, conversions, conversion tracking and cost per lead.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/performance-marketing#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/performance-marketing#service",
  },

  publisher: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  inLanguage:
    "en-IN",

  mainEntity: [
    /* =====================================================
       FAQ 01
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is performance marketing?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Performance marketing is a results-focused approach to digital advertising where campaigns are measured and optimized around defined outcomes such as leads, sales, enquiries, calls or other valuable actions.",
      },
    },

    /* =====================================================
       FAQ 02
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What does a performance marketing agency do?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A performance marketing agency can manage campaign strategy, paid search, paid social, audience targeting, advertising creative, conversion tracking, optimization and performance reporting. The exact scope depends on the business, platforms and objectives.",
      },
    },

    /* =====================================================
       FAQ 03
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is the difference between performance marketing and digital marketing?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Digital marketing is a broad category covering channels such as SEO, social media, content, email and paid advertising. Performance marketing focuses specifically on measurable campaign activity and optimizing spend around defined outcomes.",
      },
    },

    /* =====================================================
       FAQ 04
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Which platforms do you manage?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Depending on the strategy and agreed scope, campaigns may include Google Ads, Meta Ads and other relevant paid media platforms. We recommend platforms based on the audience, objective and available opportunity rather than trying to advertise everywhere.",
      },
    },

    /* =====================================================
       FAQ 05
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you manage Google Ads?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Google Ads management can be included within a Sharp Rays performance marketing plan, including relevant Search, Performance Max, YouTube, Display or other suitable campaign types.",
      },
    },

    /* =====================================================
       FAQ 06
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you manage Meta Ads?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Facebook and Instagram advertising can be included depending on your audience, campaign objective, creative requirements and agreed scope.",
      },
    },

    /* =====================================================
       FAQ 07
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How much should I spend on paid advertising?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "There is no universal advertising budget. The appropriate level depends on your market, audience size, customer value, competition, conversion rate, campaign objective and available growth opportunity. Media spend is discussed separately from management fees.",
      },
    },

    /* =====================================================
       FAQ 08
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is a conversion?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A conversion is a valuable action completed after someone interacts with your marketing. Depending on your business, this could be a purchase, lead form, phone call, booking, signup or another meaningful action.",
      },
    },

    /* =====================================================
       FAQ 09
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is conversion tracking?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Conversion tracking measures the valuable actions generated after people interact with advertising. It helps connect campaign activity with outcomes such as leads or purchases and provides better information for optimization.",
      },
    },

    /* =====================================================
       FAQ 10
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is cost per lead?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Cost per lead, or CPL, is the amount of advertising spend required on average to generate a recorded lead. Lead quality should be evaluated alongside CPL rather than judging campaign performance on cost alone.",
      },
    },
  ],
};

/* =========================================================
   PERFORMANCE MARKETING PAGE
========================================================= */

export default function PerformanceMarketing() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="performance-marketing-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            performanceMarketingCoreSchema,
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
        id="performance-marketing-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            performanceMarketingServiceSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          PRICING / PLANS STRUCTURED DATA
      ===================================================== */}

      <script
        id="performance-marketing-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            performanceMarketingPlansSchema,
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
        id="performance-marketing-breadcrumb-structured-data"
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
        id="performance-marketing-faq-structured-data"
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

        <PerformanceMarketingHero />

        <PerformanceMarketingExplained />

        <PerformanceMarketingProblem />

        <PerformancePointOfView />

        <PerformanceMarketingServices />

        <PerformanceMetricsSection />

        <ChannelStrategySection />

        <PerformanceMarketingProcess />

        <PerformanceMarketingPricing />

        <PerformanceMarketingFAQs />

        <PerformanceMarketingFinalSections />

        <Footer />
      </main>
    </>
  );
}
