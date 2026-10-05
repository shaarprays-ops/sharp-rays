import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "Terms & Conditions for Website Use & Services | Sharp Rays",

  description:
    "Read the Sharp Rays terms and conditions covering website use, proposals, payments, revisions, intellectual property and how our marketing services work.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "Sharp Rays terms and conditions",
    "Sharp Rays terms",
    "Sharp Rays service terms",
    "digital marketing agency terms and conditions",
    "website terms and conditions",
    "marketing service terms",
    "service agreement terms",
    "payment and revision terms",
    "intellectual property terms",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/terms-and-conditions",
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
      "https://www.sharprays.com/terms-and-conditions",

    siteName: "Sharp Rays",

    title:
      "Terms & Conditions for Website Use & Services",

    description:
      "Read the Sharp Rays terms and conditions covering website use, proposals, payments, revisions, intellectual property and how our marketing services work.",

    images: [
      {
        url:
          "/og/terms-and-conditions.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Terms and Conditions for Website Use and Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Terms & Conditions for Website Use & Services",

    description:
      "Read the Sharp Rays terms and conditions covering website use, proposals, payments, revisions, intellectual property and how our marketing services work.",

    images: [
      "/og/terms-and-conditions.webp",
    ],
  },
};

/* =========================================================
   TERMS & CONDITIONS CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const termsCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/terms-and-conditions#primaryimage",

      url:
        "https://www.sharprays.com/og/terms-and-conditions.webp",

      contentUrl:
        "https://www.sharprays.com/og/terms-and-conditions.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Terms and Conditions",

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

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },

    /* =====================================================
       TERMS & CONDITIONS PAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/terms-and-conditions#webpage",

      url:
        "https://www.sharprays.com/terms-and-conditions",

      name:
        "Terms & Conditions for Website Use & Services | Sharp Rays",

      headline:
        "Sharp Rays Terms & Conditions",

      alternativeHeadline:
        "Terms Governing Website Use and Sharp Rays Services",

      description:
        "The Sharp Rays terms and conditions cover website use, service scope, proposals, payments, revisions, approvals, intellectual property and other terms relating to digital marketing services.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@type": "Thing",

        name:
          "Sharp Rays Website and Service Terms",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/terms-and-conditions#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/terms-and-conditions#breadcrumb",
      },

      isAccessibleForFree: true,

      keywords: [
        "Terms and Conditions",
        "Website Use",
        "Service Scope",
        "Proposals",
        "Payments",
        "Revisions",
        "Approvals",
        "Intellectual Property",
        "Marketing Services",
      ],

      mentions: [
        {
          "@type": "Thing",

          name:
            "Website Use",
        },

        {
          "@type": "Thing",

          name:
            "Service Scope",
        },

        {
          "@type": "Thing",

          name:
            "Proposals",
        },

        {
          "@type": "Thing",

          name:
            "Payments",
        },

        {
          "@type": "Thing",

          name:
            "Revisions and Approvals",
        },

        {
          "@type": "Thing",

          name:
            "Intellectual Property",
        },

        {
          "@type": "Thing",

          name:
            "Marketing Results",
        },

        {
          "@type": "Thing",

          name:
            "Governing Law",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/privacy-policy",
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
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id":
    "https://www.sharprays.com/terms-and-conditions#breadcrumb",

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
        "Terms & Conditions",

      item:
        "https://www.sharprays.com/terms-and-conditions",
    },
  ],
};

/* =========================================================
   TERMS & CONDITIONS PAGE
========================================================= */

export default function TermsAndConditions() {
  return (
    <>
      {/* =====================================================
          TERMS & CONDITIONS STRUCTURED DATA
      ===================================================== */}

      <script
        id="terms-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            termsCoreSchema,
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
        id="terms-breadcrumb-structured-data"
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

      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Add your Terms & Conditions content component here */}

        <Footer />
      </main>
    </>
  );
}