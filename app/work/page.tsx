import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import ConnectedCapabilitiesSection from "@/components/Work/ConnectedCapabilitiesSection";
import ExploreByServiceSection from "@/components/Work/ExploreByServiceSection";
import FinalCTASection from "@/components/Work/FinalCTASection";
import HowToReadOurWorkSection from "@/components/Work/HowToReadOurWorkSection";
import ResultsContextSection from "@/components/Work/ResultsContextSection";
import WorkFAQs from "@/components/Work/WorkFAQs";
import SelectedWorkHero from "@/components/Work/WorkHero";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Digital Marketing Case Studies & Client Work | Sharp Rays",

  description:
    "Browse Sharp Rays digital marketing case studies across social media, SEO, websites, paid media and digital growth projects for modern brands.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "digital marketing case studies",
    "digital marketing case studies India",
    "Sharp Rays work",
    "Sharp Rays case studies",
    "digital marketing client work",
    "social media case studies",
    "social media marketing case studies India",
    "SEO case study India",
    "SEO client work",
    "website development case studies",
    "performance marketing case studies",
    "digital marketing portfolio",
    "digital agency portfolio India",
    "client work portfolio",
    "digital growth case studies",
    "marketing agency work",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/work",
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

    url: "https://www.sharprays.com/work",

    siteName: "Sharp Rays",

    title: "Digital Marketing Case Studies & Client Work | Sharp Rays",

    description:
      "Explore Sharp Rays client work across social media, SEO, websites, paid advertising, content and digital growth.",

    images: [
      {
        url: "/og/work.png",

        width: 1200,

        height: 630,

        alt: "Sharp Rays Digital Marketing Case Studies and Client Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Case Studies & Client Work | Sharp Rays",

    description:
      "Explore Sharp Rays client work across social media, SEO, websites, paid advertising, content and digital growth.",

    images: ["/og/work.png"],
  },
};

/* =========================================================
   WORK PAGE CORE SCHEMA
   ImageObject + Organization + WebSite + CollectionPage
========================================================= */

const workCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id": "https://www.sharprays.com/work#primaryimage",

      url: "https://www.sharprays.com/og/work.png",

      contentUrl: "https://www.sharprays.com/og/work.png",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Digital Marketing Case Studies and Client Work",

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

      description:
        "Sharp Rays is a digital marketing and digital growth company helping startups, small businesses and growing brands through SEO, social media marketing, paid advertising, websites, AI video and automation.",

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
        "Social Media Marketing",
        "Search Engine Optimization",
        "Technical SEO",
        "Content Strategy",
        "Performance Marketing",
        "Paid Media",
        "Google Ads",
        "Meta Ads",
        "Website Development",
        "UX Design",
        "UI Design",
        "Landing Page Development",
        "AI Video",
        "Video Editing",
        "AI Automation",
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
       COLLECTION PAGE
    ===================================================== */

    {
      "@type": "CollectionPage",

      "@id": "https://www.sharprays.com/work#webpage",

      url: "https://www.sharprays.com/work",

      name:
        "Digital Marketing Case Studies & Client Work | Sharp Rays",

      headline:
        "Work Built Around What Needed to Change.",

      alternativeHeadline:
        "Digital Marketing Case Studies and Selected Client Work",

      description:
        "Explore Sharp Rays work across social media marketing, SEO, performance marketing, website development, content, AI-powered creative and digital growth.",

      isPartOf: {
        "@id": "https://www.sharprays.com/#website",
      },

      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },

      primaryImageOfPage: {
        "@id": "https://www.sharprays.com/work#primaryimage",
      },

      breadcrumb: {
        "@id": "https://www.sharprays.com/work#breadcrumb",
      },

      mainEntity: {
        "@id": "https://www.sharprays.com/work#projects",
      },

      audience: {
        "@type": "BusinessAudience",

        name:
          "Businesses evaluating Sharp Rays digital marketing work",

        audienceType:
          "Startups, small businesses, founders, D2C brands and growing businesses",

        description:
          "Businesses exploring Sharp Rays capabilities, previous work, digital marketing projects and case studies before starting a project.",
      },

      about: [
        {
          "@type": "Thing",

          name: "Digital Marketing Case Studies",
        },

        {
          "@type": "Thing",

          name: "Social Media Marketing",
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

          name: "Content Marketing",
        },

        {
          "@type": "Thing",

          name: "AI Video",
        },
      ],

      keywords: [
        "Digital Marketing Case Studies",
        "Social Media Case Studies",
        "SEO Case Studies",
        "Website Development Case Studies",
        "Performance Marketing Case Studies",
        "Client Work",
        "Digital Marketing Portfolio",
      ],

      significantLink: [
        "https://www.sharprays.com/work/rnk-rentals-seo",
        "https://www.sharprays.com/work/dts-seo",
        "https://www.sharprays.com/work/butter-chicken-factory-social-media",
        "https://www.sharprays.com/about",
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
   PROJECT / CASE STUDY COLLECTION
========================================================= */

const projectCollectionSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  "@id": "https://www.sharprays.com/work#projects",

  url: "https://www.sharprays.com/work",

  name: "Sharp Rays Digital Marketing Case Studies",

  description:
    "Selected Sharp Rays client work and digital marketing case studies across social media marketing, SEO, websites and digital growth.",

  itemListOrder: "https://schema.org/ItemListUnordered",

  numberOfItems: 3,

  itemListElement: [
    /* =====================================================
       BUTTER CHICKEN FACTORY
    ===================================================== */

    {
      "@type": "ListItem",

      position: 1,

      url:
        "https://www.sharprays.com/work/butter-chicken-factory-social-media",

      item: {
        "@type": "CreativeWork",

        "@id":
          "https://www.sharprays.com/work/butter-chicken-factory-social-media#project",

        url:
          "https://www.sharprays.com/work/butter-chicken-factory-social-media",

        name: "Butter Chicken Factory Social Media Marketing",

        headline:
          "Butter Chicken Factory Social Media Marketing Case Study",

        description:
          "Social media content for a food brand built around appetite appeal, product visibility, offers and a more recognizable restaurant presence.",

        genre: "Social Media Marketing Case Study",

        keywords: [
          "Social Media Marketing",
          "Food Marketing",
          "Restaurant Marketing",
          "Content Planning",
          "Reels",
          "Social Creative",
        ],

        creator: {
          "@id": "https://www.sharprays.com/#organization",
        },

        publisher: {
          "@id": "https://www.sharprays.com/#organization",
        },

        inLanguage: "en-IN",
      },
    },

    /* =====================================================
       RNK RENTALS SEO
    ===================================================== */

    {
      "@type": "ListItem",

      position: 2,

      url:
        "https://www.sharprays.com/work/rnk-rentals-seo",

      item: {
        "@type": "CreativeWork",

        "@id":
          "https://www.sharprays.com/work/rnk-rentals-seo#project",

        url:
          "https://www.sharprays.com/work/rnk-rentals-seo",

        name: "RNK Rentals SEO",

        headline:
          "RNK Rentals Search Engine Optimization Case Study",

        description:
          "SEO work focused on improving rental-service visibility, search structure, website journeys and organic discoverability.",

        genre: "SEO Case Study",

        keywords: [
          "Search Engine Optimization",
          "SEO Case Study",
          "Rental SEO",
          "Keyword Research",
          "Technical SEO",
          "On-Page SEO",
        ],

        creator: {
          "@id": "https://www.sharprays.com/#organization",
        },

        publisher: {
          "@id": "https://www.sharprays.com/#organization",
        },

        inLanguage: "en-IN",
      },
    },

    /* =====================================================
       DTS SEO
    ===================================================== */

    {
      "@type": "ListItem",

      position: 3,

      url:
        "https://www.sharprays.com/work/dts-seo",

      item: {
        "@type": "CreativeWork",

        "@id":
          "https://www.sharprays.com/work/dts-seo#project",

        url:
          "https://www.sharprays.com/work/dts-seo",

        name: "DTS SEO",

        headline:
          "DTS Search Engine Optimization Case Study",

        description:
          "Search strategy, technical optimization, service-page improvements and content structure work designed to strengthen organic visibility.",

        genre: "SEO Case Study",

        keywords: [
          "Search Engine Optimization",
          "SEO Strategy",
          "Technical SEO",
          "Service Page Optimization",
          "Content Structure",
          "Organic Search",
        ],

        creator: {
          "@id": "https://www.sharprays.com/#organization",
        },

        publisher: {
          "@id": "https://www.sharprays.com/#organization",
        },

        inLanguage: "en-IN",
      },
    },
  ],
};

/* =========================================================
   BREADCRUMB
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://www.sharprays.com/work#breadcrumb",

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

      name: "Work",

      item: "https://www.sharprays.com/work",
    },
  ],
};

/* =========================================================
   WORK PAGE
========================================================= */

export default function Work() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="work-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workCoreSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          PROJECT COLLECTION STRUCTURED DATA
      ===================================================== */}

      <script
        id="work-projects-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectCollectionSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* =====================================================
          BREADCRUMB STRUCTURED DATA
      ===================================================== */}

      <script
        id="work-breadcrumb-structured-data"
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

        <SelectedWorkHero />

        <HowToReadOurWorkSection />

        <ExploreByServiceSection />

        <ConnectedCapabilitiesSection />

        <ResultsContextSection />

        <WorkFAQs />

        <FinalCTASection />

        <Footer />
      </main>
    </>
  );
}