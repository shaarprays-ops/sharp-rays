import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import SelectedWebsiteWork from "@/components/WebsiteDevelopment/SelectedWebsiteWork";
import WebsiteDevelopmentExplained from "@/components/WebsiteDevelopment/WebsiteDevelopmentExplained";
import WebsiteDevelopmentFAQs from "@/components/WebsiteDevelopment/WebsiteDevelopmentFAQs";
import WebsiteDevelopmentHero from "@/components/WebsiteDevelopment/WebsiteDevelopmentHero";
import WebsiteDevelopmentPricing from "@/components/WebsiteDevelopment/WebsiteDevelopmentPricing";
import WebsiteDevelopmentServicesSection from "@/components/WebsiteDevelopment/WebsiteDevelopmentServicesSection";
import WebsiteDevelopmentTrustSignalItem from "@/components/WebsiteDevelopment/WebsiteDevelopmentTrustSignalItem";
import WebsiteDevlopmentSeoAiSearchFoundation from "@/components/WebsiteDevelopment/websiteDevlopmentSeoAiSearchFoundation";
import WebsiteFinalSections from "@/components/WebsiteDevelopment/WebsiteFinalSections";
import WebsiteFrameworkSection from "@/components/WebsiteDevelopment/WebsiteFrameworkSection";
import WebsitePerformanceSection from "@/components/WebsiteDevelopment/WebsitePerformanceSection";
import WebsitePointOfViewSection from "@/components/WebsiteDevelopment/WebsitePointOfViewSection";
import WebsiteProblemSection from "@/components/WebsiteDevelopment/WebsiteProblemSection";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "Website Design for Small Business & Startups | Sharp Rays",

  description:
    "Website design and development for small businesses and startups with responsive UI, Next.js, technical SEO foundations, maintenance and ongoing support.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "website design for small business",
    "website designers for small business in India",
    "website development for small business",
    "website development company India",
    "responsive website development",
    "Next.js website development",
    "custom website development India",
    "website redesign services India",
    "landing page development India",
    "website maintenance services India",
    "website subscription plans India",
    "small business website design India",
    "startup website development India",
    "technical SEO website development",
    "CMS website development",
    "website development Mumbai",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/website-development",
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
      "https://www.sharprays.com/services/website-development",

    siteName: "Sharp Rays",

    title:
      "Website Design for Small Business & Startups",

    description:
      "Website design and development for small businesses and startups with responsive UI, Next.js, technical SEO foundations, maintenance and ongoing support.",

    images: [
      {
        url:
          "/og/services-website-development.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Website Design for Small Business and Startups",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Website Design for Small Business & Startups",

    description:
      "Website design and development for small businesses and startups with responsive UI, Next.js, technical SEO foundations, maintenance and ongoing support.",

    images: [
      "/og/services-website-development.webp",
    ],
  },
};

/* =========================================================
   WEBSITE DEVELOPMENT CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const websiteDevelopmentCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/website-development#primaryimage",

      url:
        "https://www.sharprays.com/og/services-website-development.webp",

      contentUrl:
        "https://www.sharprays.com/og/services-website-development.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Website Design for Small Business and Startups",

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
        "Website Development",
        "Website Design",
        "UX Design",
        "UI Design",
        "Custom Website Development",
        "Next.js Website Development",
        "Responsive Website Development",
        "Landing Page Development",
        "Website Redesign",
        "Website Redevelopment",
        "CMS Development",
        "Content Management Systems",
        "Website Integrations",
        "E-commerce Website Development",
        "Shopify Development",
        "WordPress Development",
        "Website Performance Optimization",
        "Core Web Vitals",
        "Technical SEO",
        "Structured Data",
        "Website Maintenance",
        "Conversion Optimization",
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
       WEBSITE DEVELOPMENT WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/website-development#webpage",

      url:
        "https://www.sharprays.com/services/website-development",

      name:
        "Website Design for Small Business & Startups | Sharp Rays",

      headline:
        "Websites Built to Be Understood, Trusted and Used.",

      alternativeHeadline:
        "Website Design and Development for Small Businesses and Startups",

      description:
        "Sharp Rays designs and develops responsive business websites covering strategy, UX/UI, custom development, Next.js, landing pages, CMS, performance, technical SEO and ongoing support.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/website-development#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/website-development#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/website-development#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/website-development#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/website-development#selected-work",
        },

        {
          "@id":
            "https://www.sharprays.com/services/website-development#plans",
        },

        {
          "@id":
            "https://www.sharprays.com/services/website-development#faq",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Startups, small businesses and growing companies",

        audienceType:
          "Businesses seeking website design, development, redesign, landing pages, CMS, integrations or website maintenance",

        description:
          "Businesses that need a responsive, clear and technically strong website built around communication, credibility and meaningful customer actions.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "Next.js Website Development",
        },

        {
          "@type": "Thing",
          name: "Responsive Website Development",
        },

        {
          "@type": "Thing",
          name: "Landing Page Development",
        },

        {
          "@type": "Thing",
          name: "Website Redesign",
        },

        {
          "@type": "Thing",
          name: "CMS Development",
        },

        {
          "@type": "Thing",
          name: "Website Integrations",
        },

        {
          "@type": "Thing",
          name: "E-commerce Development",
        },

        {
          "@type": "Thing",
          name: "Website Performance",
        },

        {
          "@type": "Thing",
          name: "Core Web Vitals",
        },

        {
          "@type": "Thing",
          name: "Technical SEO",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/website-development/nextjs-website-development",
        "https://www.sharprays.com/services/website-development/landing-page-development",
        "https://www.sharprays.com/services/website-development/website-redesign",
        "https://www.sharprays.com/work",
        "https://www.sharprays.com/free-audit",
        "https://www.sharprays.com/contact",
      ],

      copyrightYear:
        2026,

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
   WEBSITE DEVELOPMENT SERVICE SCHEMA
========================================================= */

const websiteDevelopmentServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/website-development#service",

  name:
    "Website Design and Development",

  alternateName:
    "Website Development & Management",

  url:
    "https://www.sharprays.com/services/website-development",

  serviceType:
    "Website Design and Development",

  category:
    "Website Development Services",

  description:
    "Website design and development services covering strategy, UX/UI, custom development, Next.js, responsive development, landing pages, redesign, CMS, integrations, performance optimization and technical SEO foundations.",

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
      "Startups, small businesses, service businesses, e-commerce businesses and growing brands seeking website development",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",
      name: "Website Strategy and Architecture",
    },

    {
      "@type": "CreativeWork",
      name: "UX and Interface Design",
    },

    {
      "@type": "CreativeWork",
      name: "Custom Website Development",
    },

    {
      "@type": "CreativeWork",
      name: "Next.js Website Development",
    },

    {
      "@type": "CreativeWork",
      name: "Responsive Website Development",
    },

    {
      "@type": "CreativeWork",
      name: "Landing Page Development",
    },

    {
      "@type": "CreativeWork",
      name: "Website Redesign and Redevelopment",
    },

    {
      "@type": "CreativeWork",
      name: "CMS and Content Management Setup",
    },

    {
      "@type": "CreativeWork",
      name: "Website Integrations and Functionality",
    },

    {
      "@type": "CreativeWork",
      name: "Performance Optimization",
    },

    {
      "@type": "CreativeWork",
      name: "Technical SEO Foundations",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/website-development#plans",
  },
};

/* =========================================================
   WEBSITE DEVELOPMENT PLANS
========================================================= */

const websiteDevelopmentPlansSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/website-development#plans",

  name:
    "Sharp Rays Website Development Plans",

  url:
    "https://www.sharprays.com/services/website-development",

  description:
    "Monthly website design, development, maintenance and support plans for startups, small businesses and growing companies.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       LAUNCH
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Launch Website Subscription",

      url:
        "https://www.sharprays.com/contact?service=website-development",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Launch Website Plan",

        serviceType:
          "Website Design and Development",

        description:
          "A website subscription for startups and small businesses that need a professional business, portfolio or landing website with ongoing technical support.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Website Type",

            value:
              "Business, Portfolio or Landing Website",
          },

          {
            "@type": "PropertyValue",

            name:
              "Page Scope",

            value:
              "Up to 5 Website Pages",
          },

          {
            "@type": "PropertyValue",

            name:
              "Ongoing Updates",

            value:
              "Up to 2 Small Content Updates per Month",
          },

          {
            "@type": "PropertyValue",

            name:
              "Minimum Commitment",

            value:
              "Minimum 6-month commitment for new website builds",
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
        "Growth Website Subscription",

      url:
        "https://www.sharprays.com/contact?service=website-development",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Growth Website Plan",

        serviceType:
          "Website Design and Development",

        description:
          "A website subscription for growing businesses that need editable content, stronger search foundations, lead-generation functionality and ongoing website improvements.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Website Type",

            value:
              "CMS, Corporate, Service or Lead Generation Website",
          },

          {
            "@type": "PropertyValue",

            name:
              "Page Scope",

            value:
              "Up to 10 Website Pages",
          },

          {
            "@type": "PropertyValue",

            name:
              "Ongoing Updates",

            value:
              "Up to 4 Website Updates per Month",
          },

          {
            "@type": "PropertyValue",

            name:
              "Minimum Commitment",

            value:
              "Minimum 6-month commitment for new website builds",
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
        "Scale Website Subscription",

      url:
        "https://www.sharprays.com/contact?service=website-development",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Scale Website Plan",

        serviceType:
          "Website Design and Development",

        description:
          "A website subscription for businesses that need advanced functionality, integrations, structured content, starter e-commerce or more complex website requirements.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",

            name:
              "Website Type",

            value:
              "Advanced, E-commerce, Booking or Integrations",
          },

          {
            "@type": "PropertyValue",

            name:
              "Page Scope",

            value:
              "Up to 15 Standard Website Pages",
          },

          {
            "@type": "PropertyValue",

            name:
              "Integrations",

            value:
              "Up to 2 Standard Integrations",
          },

          {
            "@type": "PropertyValue",

            name:
              "Ongoing Updates",

            value:
              "Up to 6 Website Updates per Month",
          },

          {
            "@type": "PropertyValue",

            name:
              "Minimum Commitment",

            value:
              "Minimum 6-month commitment for new website builds",
          },
        ],
      },
    },
  ],
};

/* =========================================================
   SELECTED WEBSITE WORK
========================================================= */

const selectedWorkSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  "@id":
    "https://www.sharprays.com/services/website-development#selected-work",

  name:
    "Sharp Rays Selected Website Work",

  url:
    "https://www.sharprays.com/services/website-development",

  description:
    "Selected website projects created by Sharp Rays across manufacturing, luxury interior design and weddings and experiences.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       XIIMBA
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        1,

      item: {
        "@type": "CreativeWork",

        name:
          "Xiimba Website",

        url:
          "https://www.xiimba.com/",

        description:
          "A clear B2B website built to present textile manufacturing capabilities, fabric solutions and scalable production for domestic and global markets.",

        creator: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        inLanguage:
          "en-IN",
      },
    },

    /* =====================================================
       SHRUTI CHADHA
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        2,

      item: {
        "@type": "CreativeWork",

        name:
          "Shruti Chadha Website",

        url:
          "https://www.shrutichadha.com/",

        description:
          "An editorial portfolio website designed around refined interiors, visual storytelling and a premium digital experience for a luxury design studio.",

        creator: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        inLanguage:
          "en-IN",
      },
    },

    /* =====================================================
       DOUBLE TROUBLE STUDIO
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        3,

      item: {
        "@type": "CreativeWork",

        name:
          "Double Trouble Studio Website",

        url:
          "https://vow-story.vercel.app/",

        description:
          "An immersive event and wedding website built around storytelling, visual impact and a refined journey through celebrations, services and experiences.",

        creator: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        inLanguage:
          "en-IN",
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
    "https://www.sharprays.com/services/website-development#breadcrumb",

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
        "Website Development",

      item:
        "https://www.sharprays.com/services/website-development",
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
    "https://www.sharprays.com/services/website-development#faq",

  url:
    "https://www.sharprays.com/services/website-development#website-development-faqs",

  name:
    "Website Development FAQs",

  description:
    "Answers to common questions about website development, web design, custom websites, Next.js, responsive development, SEO-friendly websites, redesigns, CMS and integrations.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/website-development#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/website-development#service",
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
        "What does a website development company do?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A website development company plans and builds the technical experience behind a website. Depending on the project, this can include strategy, information architecture, frontend development, responsive implementation, CMS integration, forms, APIs, performance optimization, testing and deployment.",
      },
    },

    /* =====================================================
       FAQ 02
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is the difference between web design and web development?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Web design focuses on how the website is organized, presented and experienced by users. Web development turns that design into a functional digital product through code, systems and integrations. Strong website projects usually require the two disciplines to work together.",
      },
    },

    /* =====================================================
       FAQ 03
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Does Sharp Rays provide both website design and development?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Depending on the project scope, Sharp Rays can support website strategy, UX/UI design and development as one connected process. The exact responsibilities are defined before work begins.",
      },
    },

    /* =====================================================
       FAQ 04
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you build custom websites?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Where a project requires a tailored experience, we can develop custom page structures, reusable components, interactions and functionality around the needs of the business.",
      },
    },

    /* =====================================================
       FAQ 05
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you develop Next.js websites?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Next.js can be used for suitable Sharp Rays projects where its component architecture, rendering options and modern frontend capabilities align with the website requirements. The technology is selected according to the project rather than used automatically for every website.",
      },
    },

    /* =====================================================
       FAQ 06
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Will my website work on mobile devices?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Responsive development is part of modern website delivery. Layouts, navigation, content and interactions should adapt across relevant screen sizes so important functionality remains usable on mobile, tablet and desktop devices.",
      },
    },

    /* =====================================================
       FAQ 07
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Will the website be SEO-friendly?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "We can build the website with a technical SEO foundation including crawlable content, semantic structure, internal linking considerations, metadata implementation and other agreed technical requirements. However, development alone does not guarantee search rankings. Ongoing organic visibility also depends on content, competition, authority, relevance and wider SEO activity.",
      },
    },

    /* =====================================================
       FAQ 08
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can you redesign my existing website?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Before recommending a complete rebuild, we assess what is working, what is limiting the experience and what can reasonably be preserved. The right approach may be redesign, redevelopment or a more focused set of improvements.",
      },
    },

    /* =====================================================
       FAQ 09
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can I update the website myself?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "That depends on the website architecture and project requirements. Where regular client-managed updates are required, an appropriate content management workflow can be included in the scope.",
      },
    },

    /* =====================================================
       FAQ 10
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can you integrate forms, CRM tools or external platforms?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes, where technically suitable. Integrations can be included depending on the platform, API availability, authentication requirements and agreed development scope.",
      },
    },
  ],
};

/* =========================================================
   WEBSITE DEVELOPMENT PAGE
========================================================= */

export default function WebsiteDevelopment() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="website-development-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteDevelopmentCoreSchema,
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
        id="website-development-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteDevelopmentServiceSchema,
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
        id="website-development-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            websiteDevelopmentPlansSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          SELECTED WORK STRUCTURED DATA
      ===================================================== */}

      <script
        id="website-development-selected-work-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            selectedWorkSchema,
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
        id="website-development-breadcrumb-structured-data"
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
        id="website-development-faq-structured-data"
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

        <WebsiteDevelopmentHero />

        <WebsiteDevelopmentExplained />

        <WebsitePointOfViewSection />

        <WebsiteProblemSection />

        <WebsiteDevelopmentServicesSection />

        <WebsitePerformanceSection />

        <WebsiteDevlopmentSeoAiSearchFoundation />

        <WebsiteDevelopmentTrustSignalItem />

        <WebsiteFrameworkSection />

        <SelectedWebsiteWork />

        <WebsiteDevelopmentPricing />

        <WebsiteDevelopmentFAQs />

        <WebsiteFinalSections />

        <Footer />
      </main>
    </>
  );
}