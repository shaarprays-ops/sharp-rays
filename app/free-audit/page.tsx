import type { Metadata } from "next";

import FreeAuditClient from "@/components/FreeAudit/FreeAuditClient";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Free Digital Marketing Audit: Website, SEO, Ads | Sharp Rays",

  description:
    "Request a free digital marketing audit from Sharp Rays. We review your website, SEO, social media and ads, then share clear, prioritised next steps.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "free digital marketing audit",
    "digital marketing audit India",
    "free website audit",
    "free SEO audit",
    "free social media audit",
    "free Google Ads audit",
    "free Meta Ads audit",
    "website marketing audit",
    "SEO audit India",
    "social media audit India",
    "paid ads audit",
    "digital growth audit",
    "Sharp Rays free audit",
    "marketing audit for small business",
    "digital marketing audit for startups",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/free-audit",
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

    url: "https://www.sharprays.com/free-audit",

    siteName: "Sharp Rays",

    title: "Free Digital Marketing Audit: Website, SEO, Ads",

    description:
      "Request a free digital marketing audit from Sharp Rays. We review your website, SEO, social media and ads, then share clear, prioritised next steps.",

    images: [
      {
        url: "/og/free-audit.webp",

        width: 1200,

        height: 630,

        alt:
          "Free Digital Marketing Audit by Sharp Rays for Website, SEO, Social Media and Paid Ads",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Free Digital Marketing Audit: Website, SEO, Ads",

    description:
      "Request a free digital marketing audit from Sharp Rays. We review your website, SEO, social media and ads, then share clear, prioritised next steps.",

    images: ["/og/free-audit.webp"],
  },
};

/* =========================================================
   FREE AUDIT CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const freeAuditCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/free-audit#primaryimage",

      url:
        "https://www.sharprays.com/og/free-audit.webp",

      contentUrl:
        "https://www.sharprays.com/og/free-audit.webp",

      width: 1200,

      height: 630,

      caption:
        "Free Digital Marketing Audit by Sharp Rays",

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

      caption: "Sharp Rays Logo",
    },

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    {
      "@type": "Organization",

      "@id":
        "https://www.sharprays.com/#organization",

      name: "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      url:
        "https://www.sharprays.com/",

      logo: {
        "@id":
          "https://www.sharprays.com/#logo",
      },

      image: {
        "@id":
          "https://www.sharprays.com/free-audit#primaryimage",
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

      areaServed: {
        "@type": "Country",

        name: "India",
      },

      knowsAbout: [
        "Digital Marketing",
        "Digital Marketing Audits",
        "Website Audits",
        "Search Engine Optimization",
        "SEO Audits",
        "Technical SEO",
        "On-Page SEO",
        "Social Media Marketing",
        "Social Media Audits",
        "Performance Marketing",
        "Google Ads",
        "Meta Ads",
        "Paid Media Audits",
        "Website Development",
        "Conversion Optimization",
        "Content Marketing",
        "Digital Growth Strategy",
        "AI Automation",
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

      name: "Sharp Rays",

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
       FREE AUDIT WEB PAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/free-audit#webpage",

      url:
        "https://www.sharprays.com/free-audit",

      name:
        "Free Digital Marketing Audit: Website, SEO, Ads | Sharp Rays",

      headline:
        "Find Out What Is Holding Your Digital Growth Back.",

      alternativeHeadline:
        "Get a Free Digital Marketing Audit From Sharp Rays",

      description:
        "Get an initial review of your website and digital presence with clear observations, priority opportunities and practical next steps.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/free-audit#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/free-audit#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/free-audit#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/free-audit#breadcrumb",
      },

      audience: {
        "@type": "BusinessAudience",

        name:
          "Businesses looking to identify digital marketing opportunities",

        audienceType:
          "Startups, small businesses, founders, D2C brands and growing businesses",

        description:
          "Businesses seeking an initial review of their website, SEO visibility, social media, paid marketing or broader digital growth opportunities.",
      },

      mentions: [
        {
          "@type": "Thing",

          name: "Website Audit",
        },

        {
          "@type": "Thing",

          name: "SEO Audit",
        },

        {
          "@type": "Thing",

          name: "Social Media Audit",
        },

        {
          "@type": "Thing",

          name: "Performance Marketing Audit",
        },

        {
          "@type": "Thing",

          name: "Content Marketing",
        },

        {
          "@type": "Thing",

          name: "AI Automation",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services/search-engine-optimization",
        "https://www.sharprays.com/services/social-media-marketing",
        "https://www.sharprays.com/services/performance-marketing",
        "https://www.sharprays.com/services/website-development",
        "https://www.sharprays.com/services/content-marketing",
        "https://www.sharprays.com/services/ai-automation",
        "https://www.sharprays.com/work",
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
   FREE DIGITAL MARKETING AUDIT SERVICE SCHEMA
   Service + Offer
========================================================= */

const freeAuditServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/free-audit#service",

  name:
    "Free Digital Marketing Audit",

  alternateName:
    "Sharp Rays Free Digital Marketing Audit",

  url:
    "https://www.sharprays.com/free-audit",

  serviceType:
    "Digital Marketing Audit",

  category:
    "Digital Marketing Services",

  description:
    "A complimentary initial review of a business website and digital presence covering areas such as website structure, SEO visibility, social media, paid marketing and digital growth opportunities.",

  provider: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  areaServed: {
    "@type": "Country",

    name: "India",
  },

  audience: {
    "@type": "BusinessAudience",

    audienceType:
      "Startups, small businesses, D2C brands and growing businesses",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",

      name:
        "Initial website and digital presence review",
    },

    {
      "@type": "CreativeWork",

      name:
        "Important issues identified during the review",
    },

    {
      "@type": "CreativeWork",

      name:
        "3–5 priority digital growth opportunities",
    },

    {
      "@type": "CreativeWork",

      name:
        "Recommended next steps",
    },
  ],

  offers: {
    "@type": "Offer",

    "@id":
      "https://www.sharprays.com/free-audit#offer",

    url:
      "https://www.sharprays.com/free-audit",

    price: "0",

    priceCurrency: "INR",

    availability:
      "https://schema.org/InStock",

    seller: {
      "@id":
        "https://www.sharprays.com/#organization",
    },

    itemOffered: {
      "@id":
        "https://www.sharprays.com/free-audit#service",
    },
  },
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id":
    "https://www.sharprays.com/free-audit#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item:
        "https://www.sharprays.com/",
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "Free Audit",

      item:
        "https://www.sharprays.com/free-audit",
    },
  ],
};

/* =========================================================
   FREE AUDIT PAGE
========================================================= */

export default function FreeAuditPage() {
  return (
    <>
      {/* =====================================================
          FREE AUDIT CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="free-audit-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            freeAuditCoreSchema,
          ).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          FREE AUDIT SERVICE STRUCTURED DATA
      ===================================================== */}

      <script
        id="free-audit-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            freeAuditServiceSchema,
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
        id="free-audit-breadcrumb-structured-data"
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
          PAGE
      ===================================================== */}

      <main className="min-h-screen bg-[#051935]">
        <Navbar />

        <FreeAuditClient />
      </main>
    </>
  );
}