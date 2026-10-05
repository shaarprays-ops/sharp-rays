import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import PrivacyPolicyPage from "@/components/Privacy-Policy/PrivacyPolicies";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Privacy Policy: How We Collect & Protect Data | Sharp Rays",

  description:
    "Read the Sharp Rays privacy policy to learn how we collect, use, store and protect personal information submitted through our website and enquiry forms.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "Sharp Rays privacy policy",
    "privacy policy Sharp Rays",
    "Sharp Rays data protection policy",
    "digital marketing agency privacy policy",
    "website privacy policy",
    "personal data protection",
    "data privacy policy",
    "website data collection policy",
    "Sharp Rays data privacy",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/privacy-policy",
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

    url: "https://www.sharprays.com/privacy-policy",

    siteName: "Sharp Rays",

    title: "Privacy Policy: How We Collect & Protect Data",

    description:
      "Read the Sharp Rays privacy policy to learn how we collect, use, store and protect personal information submitted through our website and enquiry forms.",

    images: [
      {
        url: "/og/Privacy-Policy.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Privacy Policy - How We Collect, Use and Protect Information",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Privacy Policy: How We Collect & Protect Data",

    description:
      "Read the Sharp Rays privacy policy to learn how we collect, use, store and protect personal information submitted through our website and enquiry forms.",

    images: ["/og/Privacy-Policy.webp"],
  },
};

/* =========================================================
   PRIVACY POLICY CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const privacyPolicyCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/privacy-policy#primaryimage",

      url:
        "https://www.sharprays.com/og/Privacy-Policy.webp",

      contentUrl:
        "https://www.sharprays.com/og/Privacy-Policy.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Privacy Policy",

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
        "Digital Marketing",
        "Search Engine Optimization",
        "Social Media Marketing",
        "Performance Marketing",
        "Paid Media",
        "Content Marketing",
        "Website Development",
        "AI Video",
        "AI Automation",
        "Digital Growth Strategy",
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
       PRIVACY POLICY PAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/privacy-policy#webpage",

      url:
        "https://www.sharprays.com/privacy-policy",

      name:
        "Privacy Policy: How We Collect & Protect Data | Sharp Rays",

      headline:
        "Privacy Policy",

      alternativeHeadline:
        "How Sharp Rays Handles Information Collected Through Our Website and Business Communications",

      description:
        "This Privacy Policy explains how Sharp Rays may collect, use, store and protect information when visitors use the website, submit enquiries or communicate about Sharp Rays services.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@type": "Thing",

        name:
          "Sharp Rays Privacy and Data Handling Practices",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/privacy-policy#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/privacy-policy#breadcrumb",
      },

      isAccessibleForFree: true,

      keywords: [
        "Privacy Policy",
        "Personal Information",
        "Data Collection",
        "Data Protection",
        "Cookies",
        "Analytics",
        "Data Retention",
        "Data Security",
        "Privacy Rights",
      ],

      mentions: [
        {
          "@type": "Thing",

          name: "Personal Information",
        },

        {
          "@type": "Thing",

          name: "Website Analytics",
        },

        {
          "@type": "Thing",

          name: "Cookies",
        },

        {
          "@type": "Thing",

          name: "Data Retention",
        },

        {
          "@type": "Thing",

          name: "Data Security",
        },

        {
          "@type": "Thing",

          name: "Third-Party Services",
        },

        {
          "@type": "Thing",

          name: "Privacy Rights",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/contact",
        "https://www.sharprays.com/terms-and-conditions",
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
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id":
    "https://www.sharprays.com/privacy-policy#breadcrumb",

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

      name: "Privacy Policy",

      item:
        "https://www.sharprays.com/privacy-policy",
    },
  ],
};

/* =========================================================
   PRIVACY POLICY PAGE
========================================================= */

export default function PrivacyPolicy() {
  return (
    <>
      {/* =====================================================
          PRIVACY POLICY STRUCTURED DATA
      ===================================================== */}

      <script
        id="privacy-policy-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            privacyPolicyCoreSchema,
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
        id="privacy-policy-breadcrumb-structured-data"
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

        <PrivacyPolicyPage />

    
      </main>
    </>
  );
}