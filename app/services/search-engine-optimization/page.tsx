
import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import SEOClosingSections from "@/components/SerchEngineOptimization/SEOClosingSections";
import SEOExplainedSection from "@/components/SerchEngineOptimization/SEOExplainedSection";
import SEOFAQs from "@/components/SerchEngineOptimization/SEOFAQs";
import SEOHeroSection from "@/components/SerchEngineOptimization/SEOHeroSection";
import SEOPerformanceSection from "@/components/SerchEngineOptimization/SEOPerformanceSection";
import SEOPricingSection from "@/components/SerchEngineOptimization/SEOPricingSection";
import SEOProblemSection from "@/components/SerchEngineOptimization/SEOProblemSection";
import SEOSelectedWork from "@/components/SerchEngineOptimization/SEOSelectedWork";
import SEOServicesSection from "@/components/SerchEngineOptimization/SEOServicesSection";
import SEOWhoItsForSection from "@/components/SerchEngineOptimization/SEOWhoItsForSection";
import WhySharpRaysSection from "@/components/SerchEngineOptimization/WhySharpRaysSection";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "SEO Services for Small Business & Startups | Sharp Rays",

  description:
    "SEO services for small businesses and startups covering technical SEO, keyword strategy, content optimization, local search and AI-search visibility.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "SEO services for small business",
    "SEO agency for small business",
    "SEO services India",
    "SEO agency India",
    "technical SEO services India",
    "local SEO services India",
    "keyword research services India",
    "on page SEO services",
    "SEO content strategy",
    "AI SEO services India",
    "AEO agency India",
    "AI search optimization India",
    "Google AI Overview optimization",
    "SEO for startups India",
    "small business SEO agency India",
    "organic search agency India",
    "SEO company Mumbai",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/search-engine-optimization",
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
      "https://www.sharprays.com/services/search-engine-optimization",

    siteName: "Sharp Rays",

    title:
      "SEO Services for Small Business & Startups",

    description:
      "SEO services for small businesses and startups covering technical SEO, keyword strategy, content optimization, local search and AI-search visibility.",

    images: [
      {
        url:
          "/og/services-search-engine-optimization.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays SEO Services for Small Business and Startups",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SEO Services for Small Business & Startups",

    description:
      "SEO services for small businesses and startups covering technical SEO, keyword strategy, content optimization, local search and AI-search visibility.",

    images: [
      "/og/services-search-engine-optimization.webp",
    ],
  },
};

/* =========================================================
   SEO CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const seoCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/search-engine-optimization#primaryimage",

      url:
        "https://www.sharprays.com/og/services-search-engine-optimization.webp",

      contentUrl:
        "https://www.sharprays.com/og/services-search-engine-optimization.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays SEO Services for Small Business and Startups",

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
        "Search Engine Optimization",
        "SEO Strategy",
        "SEO Audits",
        "Technical SEO",
        "Keyword Research",
        "Search Intent Analysis",
        "On-Page SEO",
        "SEO Content Strategy",
        "Internal Linking",
        "Digital PR",
        "Link Building",
        "Local SEO",
        "Google Business Profile Optimization",
        "AI Search Optimization",
        "Google AI Overviews",
        "Entity Optimization",
        "Topical Authority",
        "Schema Markup",
        "Google Search Console",
        "GA4",
        "SEO Analytics",
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
       SEO WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/search-engine-optimization#webpage",

      url:
        "https://www.sharprays.com/services/search-engine-optimization",

      name:
        "SEO Services for Small Business & Startups | Sharp Rays",

      headline:
        "SEO That Helps the Right Customers Find You.",

      alternativeHeadline:
        "SEO Services for Small Businesses and Startups That Improve Relevant Search Visibility",

      description:
        "Sharp Rays provides SEO services covering technical SEO, keyword and search intent strategy, on-page optimization, content, local SEO, authority building and AI-search visibility.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/search-engine-optimization#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/search-engine-optimization#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/search-engine-optimization#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/search-engine-optimization#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/search-engine-optimization#faq",
        },

        {
          "@id":
            "https://www.sharprays.com/services/search-engine-optimization#selected-work",
        },

        {
          "@id":
            "https://www.sharprays.com/services/search-engine-optimization#plans",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Small businesses, startups and growing companies",

        audienceType:
          "Businesses seeking technical SEO, keyword strategy, content optimization, local SEO and AI-search visibility",

        description:
          "Startups, small businesses and growing brands that want stronger organic search visibility and more relevant search traffic.",
      },

      mentions: [
        {
          "@type": "Thing",

          name:
            "Technical SEO",
        },

        {
          "@type": "Thing",

          name:
            "Keyword Research",
        },

        {
          "@type": "Thing",

          name:
            "Search Intent",
        },

        {
          "@type": "Thing",

          name:
            "On-Page SEO",
        },

        {
          "@type": "Thing",

          name:
            "SEO Content Strategy",
        },

        {
          "@type": "Thing",

          name:
            "Local SEO",
        },

        {
          "@type": "Thing",

          name:
            "Digital PR",
        },

        {
          "@type": "Thing",

          name:
            "AI Search Visibility",
        },

        {
          "@type": "Thing",

          name:
            "Google AI Overviews",
        },

        {
          "@type": "Thing",

          name:
            "SEO Analytics",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/content-marketing",
        "https://www.sharprays.com/services/search-engine-optimization/local-seo",
        "https://www.sharprays.com/services/search-engine-optimization/ecommerce-seo",
        "https://www.sharprays.com/work/rnk-rentals-seo",
        "https://www.sharprays.com/work/dts-seo",
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
   SEO SERVICE SCHEMA
========================================================= */

const seoServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/search-engine-optimization#service",

  name:
    "Search Engine Optimization (SEO)",

  alternateName:
    "SEO Services for Small Business and Startups",

  url:
    "https://www.sharprays.com/services/search-engine-optimization",

  serviceType:
    "Search Engine Optimization",

  category:
    "SEO Services",

  description:
    "SEO services covering technical SEO, keyword research, search intent strategy, on-page optimization, content strategy, local SEO, digital authority, AI-search visibility and performance analysis.",

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
      "Startups, small businesses, local businesses and growing companies seeking organic search growth",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",

      name:
        "SEO Audit and Strategy",
    },

    {
      "@type": "CreativeWork",

      name:
        "Technical SEO Improvements",
    },

    {
      "@type": "CreativeWork",

      name:
        "Keyword and Search Intent Strategy",
    },

    {
      "@type": "CreativeWork",

      name:
        "On-Page SEO Optimization",
    },

    {
      "@type": "CreativeWork",

      name:
        "SEO Content Strategy",
    },

    {
      "@type": "CreativeWork",

      name:
        "Internal Linking Improvements",
    },

    {
      "@type": "CreativeWork",

      name:
        "Local SEO Optimization",
    },

    {
      "@type": "CreativeWork",

      name:
        "AI Search Visibility Recommendations",
    },

    {
      "@type": "CreativeWork",

      name:
        "SEO Performance Reporting",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/search-engine-optimization#plans",
  },
};

/* =========================================================
   SEO PRICING / PLANS SCHEMA
========================================================= */

const seoPlansSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/search-engine-optimization#plans",

  name:
    "Sharp Rays SEO Plans",

  url:
    "https://www.sharprays.com/services/search-engine-optimization",

  description:
    "SEO plans for startups, small businesses, growing companies and competitive businesses based on website size, competition and growth goals.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       FOUNDATION
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Foundation SEO Plan",

      url:
        "https://www.sharprays.com/contact?service=seo&plan=foundation#contact-form",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Foundation SEO",

        serviceType:
          "Search Engine Optimization",

        description:
          "SEO support for startups, local businesses and smaller websites building the right organic search foundation.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },
      },
    },

    /* =====================================================
       GROWTH
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Growth SEO Plan",

      url:
        "https://www.sharprays.com/contact?service=seo&plan=growth#contact-form",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Growth SEO",

        serviceType:
          "Search Engine Optimization",

        description:
          "SEO support for growing businesses targeting more services, keywords, topics or locations.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },
      },
    },

    /* =====================================================
       SCALE
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Scale SEO Plan",

      url:
        "https://www.sharprays.com/contact?service=seo&plan=scale#contact-form",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Scale SEO",

        serviceType:
          "Search Engine Optimization",

        description:
          "Advanced SEO support for competitive businesses, larger websites and brands building long-term organic growth.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },
      },
    },
  ],
};

/* =========================================================
   SELECTED SEO WORK
========================================================= */

const selectedWorkSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  "@id":
    "https://www.sharprays.com/services/search-engine-optimization#selected-work",

  name:
    "Sharp Rays Selected SEO Work",

  url:
    "https://www.sharprays.com/services/search-engine-optimization",

  description:
    "Selected SEO projects by Sharp Rays showing search work and verified performance data.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    2,

  itemListElement: [
    /* =====================================================
       DOUBLE TROUBLE STUDIO
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        1,

      item: {
        "@type": "CreativeWork",

        "@id":
          "https://www.sharprays.com/work/dts-seo#project",

        name:
          "Double Trouble Studio SEO",

        url:
          "https://www.sharprays.com/work/dts-seo",

        description:
          "SEO work covering keyword research, technical SEO, service page optimization, content optimization and search performance.",

        creator: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        inLanguage:
          "en-IN",
      },
    },

    /* =====================================================
       RNK RENTALS
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        2,

      item: {
        "@type": "CreativeWork",

        "@id":
          "https://www.sharprays.com/work/rnk-rentals-seo#project",

        name:
          "RNK Rentals SEO",

        url:
          "https://www.sharprays.com/work/rnk-rentals-seo",

        description:
          "SEO work covering local SEO, service page optimization, keyword strategy, technical SEO and search performance.",

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
    "https://www.sharprays.com/services/search-engine-optimization#breadcrumb",

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
        "SEO",

      item:
        "https://www.sharprays.com/services/search-engine-optimization",
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
    "https://www.sharprays.com/services/search-engine-optimization#faq",

  url:
    "https://www.sharprays.com/services/search-engine-optimization#seo-faq",

  name:
    "SEO FAQs",

  description:
    "Answers to common questions about SEO agencies, SEO services, technical SEO, rankings, keyword research, AI search, Google Ads and SEO pricing.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/search-engine-optimization#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/search-engine-optimization#service",
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
        "What does an SEO agency do?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "An SEO agency helps improve a website’s visibility in organic search by addressing technical issues, understanding search intent, optimizing important pages, developing useful content, strengthening website structure and measuring search performance. The exact work depends on your website, market, competition and business objectives.",
      },
    },

    /* =====================================================
       FAQ 02
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is included in SEO services?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEO services can include website audits, technical SEO, keyword and search intent research, on-page optimization, content strategy, internal linking, local SEO and performance reporting. Your Sharp Rays proposal clearly defines the services, priority pages and deliverables included in your scope.",
      },
    },

    /* =====================================================
       FAQ 03
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How long does SEO take?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "There is no universal SEO timeline. Results depend on your website’s current condition, competition, existing authority, technical issues, content quality and the searches you are targeting. Some improvements may appear relatively early, while competitive organic growth usually requires consistent work over a longer period.",
      },
    },

    /* =====================================================
       FAQ 04
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can you guarantee first-page rankings?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No responsible SEO agency can guarantee a specific organic ranking. Search rankings are controlled by search engines and influenced by many factors outside an agency’s direct control. We focus on the factors we can influence and on building stronger long-term search visibility.",
      },
    },

    /* =====================================================
       FAQ 05
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is technical SEO?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Technical SEO focuses on making your website easier for search engines to crawl, process and index while maintaining a strong experience for users. This can include website architecture, indexing, canonicalization, redirects, sitemaps, structured data, page performance and JavaScript-related considerations.",
      },
    },

    /* =====================================================
       FAQ 06
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you provide keyword research and SEO content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Keyword and search intent research can be included within your SEO strategy, along with content planning, optimization and creation where required. We focus on searches that are relevant to your audience and business rather than choosing keywords only because they have high reported search volume.",
      },
    },

    /* =====================================================
       FAQ 07
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can SEO help with AI Overviews and AI search?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Strong SEO can improve how clearly your website and information can be understood and discovered across traditional and AI-assisted search experiences. There is no guaranteed method for appearing in a specific AI Overview or generated answer. Our focus remains on useful content, clear answers, logical structure, crawlable information, strong topic relationships and credible business information.",
      },
    },

    /* =====================================================
       FAQ 08
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Is SEO better than Google Ads?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEO and Google Ads solve different problems. Paid search can provide immediate paid visibility while campaigns are active, while SEO focuses on improving long-term organic discovery. For many businesses, the strongest strategy may use both channels for different objectives and stages of growth.",
      },
    },

    /* =====================================================
       FAQ 09
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How much do SEO services cost?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEO pricing depends on the size and condition of your website, competition, technical requirements, number of priority pages, content needs and the level of ongoing support required. We first understand the work involved, then define the scope and commercial terms clearly before execution begins.",
      },
    },
  ],
};

/* =========================================================
   SEO PAGE
========================================================= */

export default function SearchEngineOptimization() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="seo-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seoCoreSchema,
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
        id="seo-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seoServiceSchema,
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
        id="seo-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            seoPlansSchema,
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
        id="seo-selected-work-structured-data"
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
        id="seo-breadcrumb-structured-data"
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
        id="seo-faq-structured-data"
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

        <SEOHeroSection />

        <SEOExplainedSection />

        <SEOProblemSection />

        <SEOServicesSection />

        <SEOPerformanceSection />

        <SEOWhoItsForSection />

        <SEOSelectedWork />

        <WhySharpRaysSection />

        <SEOPricingSection />

        <SEOFAQs />

        <SEOClosingSections />

        <Footer />
      </main>
    </>
  );
}
