import type { Metadata } from "next";

import ContentMarketingDeliverables from "@/components/ContentMarketing/ContentMarketingDeliverables";
import ContentMarketingExplained from "@/components/ContentMarketing/ContentMarketingExplained";
import ContentMarketingFAQs from "@/components/ContentMarketing/ContentMarketingFAQs";
import ContentMarketingFinalCTA from "@/components/ContentMarketing/ContentMarketingFinalCTA";
import ContentMarketingHero from "@/components/ContentMarketing/ContentMarketingHero";
import ContentMarketingProblem from "@/components/ContentMarketing/ContentMarketingProblem";
import ContentMarketingProcess from "@/components/ContentMarketing/ContentMarketingProcess";
import ContentMarketingServices from "@/components/ContentMarketing/ContentMarketingServices";
import ContentPerformanceSection from "@/components/ContentMarketing/ContentPerformanceSection";
import ContentPointOfView from "@/components/ContentMarketing/ContentPointOfView";
import SearchAndAIDiscoverySection from "@/components/ContentMarketing/SearchAndAIDiscoverySection";
import SharpRaysContentFramework from "@/components/ContentMarketing/SharpRaysContentFramework";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "Content Marketing Agency in India for Startups | Sharp Rays",

  description:
    "Content marketing agency in India helping startups and B2B brands with content strategy, SEO content, blogs, website copy and AI-search visibility.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "content marketing agency India",
    "content marketing services in India",
    "SEO content writing services India",
    "blog writing services for small business",
    "content marketing for startups",
    "content marketing agency for startups",
    "B2B content marketing India",
    "SEO content strategy India",
    "website content writing India",
    "blog content writing India",
    "thought leadership content India",
    "content optimization services",
    "content strategy agency India",
    "AI search content optimization",
    "AI Overview content strategy",
    "AEO content marketing",
    "GEO content marketing",
    "content marketing company India",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/content-marketing",
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
      "https://www.sharprays.com/services/content-marketing",

    siteName: "Sharp Rays",

    title:
      "Content Marketing Agency in India for Startups",

    description:
      "Content marketing agency in India helping startups and B2B brands with content strategy, SEO content, blogs, website copy and AI-search visibility.",

    images: [
      {
        url:
          "/og/Content-Marketing.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Content Marketing Agency in India for Startups",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Content Marketing Agency in India for Startups",

    description:
      "Content marketing agency in India helping startups and B2B brands with content strategy, SEO content, blogs, website copy and AI-search visibility.",

    images: [
      "/og/Content-Marketing.webp",
    ],
  },
};

/* =========================================================
   CONTENT MARKETING CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const contentMarketingCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/content-marketing#primaryimage",

      url:
        "https://www.sharprays.com/og/Content-Marketing.webp",

      contentUrl:
        "https://www.sharprays.com/og/Content-Marketing.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Content Marketing Agency in India for Startups",

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
        "Content Marketing",
        "Content Strategy",
        "Audience Research",
        "Topic Research",
        "Keyword Research",
        "SEO Content Strategy",
        "SEO Content Writing",
        "Website Content",
        "Blog Content",
        "Editorial Content",
        "Thought Leadership",
        "Case Studies",
        "Customer Stories",
        "Content Optimization",
        "Internal Linking",
        "Google Search",
        "Google AI Overviews",
        "AI Search Visibility",
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "Content Performance",
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
       CONTENT MARKETING WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/content-marketing#webpage",

      url:
        "https://www.sharprays.com/services/content-marketing",

      name:
        "Content Marketing Agency in India for Startups | Sharp Rays",

      headline:
        "Content That Gives People a Reason to Find, Trust and Remember You.",

      alternativeHeadline:
        "Content Marketing That Connects Business Expertise With What Your Audience Wants to Understand",

      description:
        "Sharp Rays provides content marketing services covering strategy, audience and topic research, SEO content, website copy, blogs, thought leadership, content optimization and AI-search visibility.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/content-marketing#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/content-marketing#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/content-marketing#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/content-marketing#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/content-marketing#faq",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Startups, B2B brands, small businesses and growing companies",

        audienceType:
          "Businesses seeking content strategy, SEO content, website content, blogs, thought leadership and AI-search visibility",

        description:
          "Businesses that want to turn expertise, customer questions and useful ideas into content that supports discovery, trust and growth.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "Content Strategy",
        },

        {
          "@type": "Thing",
          name: "SEO Content",
        },

        {
          "@type": "Thing",
          name: "Website Content",
        },

        {
          "@type": "Thing",
          name: "Blog Content",
        },

        {
          "@type": "Thing",
          name: "Thought Leadership",
        },

        {
          "@type": "Thing",
          name: "Content Optimization",
        },

        {
          "@type": "Thing",
          name: "Google Search",
        },

        {
          "@type": "Thing",
          name: "Google AI Overviews",
        },

        {
          "@type": "Thing",
          name: "Answer Engine Optimization",
        },

        {
          "@type": "Thing",
          name: "Generative Engine Optimization",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/search-engine-optimization",
        "https://www.sharprays.com/blog",
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
   CONTENT MARKETING SERVICE SCHEMA
========================================================= */

const contentMarketingServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/content-marketing#service",

  name:
    "Content Marketing",

  alternateName:
    "Content Marketing and SEO Content Services",

  url:
    "https://www.sharprays.com/services/content-marketing",

  serviceType:
    "Content Marketing",

  category:
    "Digital Marketing Services",

  description:
    "Content marketing services covering strategy, audience and topic research, SEO content, website content, blogs, thought leadership, case studies, optimization, internal linking and performance reporting.",

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
      "Startups, B2B brands, small businesses and growing companies seeking strategic content marketing support",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",
      name: "Content Strategy",
    },

    {
      "@type": "CreativeWork",
      name: "Audience and Topic Research",
    },

    {
      "@type": "CreativeWork",
      name: "SEO Content Strategy",
    },

    {
      "@type": "CreativeWork",
      name: "Website Content",
    },

    {
      "@type": "CreativeWork",
      name: "Blog and Editorial Content",
    },

    {
      "@type": "CreativeWork",
      name: "Thought Leadership Content",
    },

    {
      "@type": "CreativeWork",
      name: "Case Studies and Customer Stories",
    },

    {
      "@type": "CreativeWork",
      name: "Content Optimization",
    },

    {
      "@type": "CreativeWork",
      name: "Content Briefs",
    },

    {
      "@type": "CreativeWork",
      name: "Internal Linking",
    },

    {
      "@type": "CreativeWork",
      name: "Content Performance Reporting",
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
    "https://www.sharprays.com/services/content-marketing#breadcrumb",

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
        "Content Marketing",

      item:
        "https://www.sharprays.com/services/content-marketing",
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
    "https://www.sharprays.com/services/content-marketing#faq",

  url:
    "https://www.sharprays.com/services/content-marketing#content-marketing-faq",

  name:
    "Content Marketing FAQs",

  description:
    "Answers to common questions about content marketing, SEO content, website copy, blogs, thought leadership, AI content, AI Overviews, AEO, GEO and content marketing pricing.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/content-marketing#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/content-marketing#service",
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
        "What does a content marketing agency do?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A content marketing agency helps businesses plan, create, distribute and improve useful content designed to attract audiences, demonstrate expertise, build trust and support business goals. Services can include content strategy, topic research, SEO content, website copy, blog articles, thought leadership, case studies and content optimization.",
      },
    },

    /* =====================================================
       FAQ 02
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is included in content marketing services?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Content marketing services can include audience research, content strategy, topic and keyword research, editorial planning, content creation, optimization, internal linking, distribution support and performance reporting. The exact deliverables depend on your objectives and agreed scope.",
      },
    },

    /* =====================================================
       FAQ 03
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is the difference between content marketing and SEO?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "SEO focuses on improving visibility and performance within organic search. Content marketing has a wider role that can include search, education, brand authority, customer nurturing and distribution across multiple channels. The two often work best together because useful content gives an SEO strategy something valuable to make discoverable.",
      },
    },

    /* =====================================================
       FAQ 04
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you provide SEO content writing?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. SEO-led content can be included within a Sharp Rays content marketing plan. We combine search intent with audience needs, business expertise and clear content structure rather than writing purely around keyword density.",
      },
    },

    /* =====================================================
       FAQ 05
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you write website content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Depending on the agreed scope, we can develop content for service pages, landing pages, industry pages, About pages and other important website sections.",
      },
    },

    /* =====================================================
       FAQ 06
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you create blog content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Blog and editorial content can be included where ongoing educational or search-led publishing supports the wider strategy. We prioritize useful topics rather than publishing articles simply to maintain a schedule.",
      },
    },

    /* =====================================================
       FAQ 07
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can you create thought leadership content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. We can help turn founder, leadership or subject-matter expertise into articles, perspectives and other thought leadership formats. The strongest thought leadership is based on genuine knowledge and experience rather than generic commentary.",
      },
    },

    /* =====================================================
       FAQ 08
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can AI be used to create content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "AI can support parts of the content workflow, including research, ideation and production assistance. However, useful content still requires accurate information, editorial judgement, original perspective and appropriate human review. We do not treat mass-produced AI content as a substitute for genuine expertise.",
      },
    },

    /* =====================================================
       FAQ 09
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How does content marketing help SEO?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Content marketing can help build relevant pages around the questions, topics and needs connected to your audience. When useful content is supported by strong technical SEO and internal linking, it can strengthen organic discovery across relevant searches.",
      },
    },

    /* =====================================================
       FAQ 10
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Can content help my business appear in AI Overviews?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Useful, original and accessible content can improve your overall eligibility for discovery across Google's search ecosystem, including generative search features. However, no agency can guarantee inclusion within an AI Overview or AI-generated response.",
      },
    },

    /* =====================================================
       FAQ 11
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is AEO in content marketing?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Answer engine optimization generally refers to making information easy to understand and useful when people ask direct questions through search and AI experiences. Clear answers, logical structure, trustworthy information and useful context are important principles.",
      },
    },

    /* =====================================================
       FAQ 12
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is GEO in content marketing?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Generative engine optimization is a term commonly used for improving content visibility within generative AI experiences. For Google Search, the same strong SEO foundations remain important: useful original content, crawlability, clear information and genuine expertise.",
      },
    },

    /* =====================================================
       FAQ 13
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How often should a business publish content?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "There is no universal publishing frequency. The right cadence depends on your audience, resources, industry, objectives and ability to maintain quality. Publishing fewer valuable pieces can be more effective than producing large volumes of weak content.",
      },
    },

    /* =====================================================
       FAQ 14
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How long does content marketing take to work?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Content marketing is generally a medium- to long-term strategy. Some individual content can generate attention quickly, while organic visibility, brand authority and consistent lead generation usually develop over time. The timeline depends on your starting position, competition, content quality, distribution and objectives.",
      },
    },

    /* =====================================================
       FAQ 15
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How much do content marketing services cost?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Pricing depends on the level of strategy required, volume and format of content, research requirements, production complexity, optimization needs and ongoing support. Sharp Rays confirms pricing after defining the scope and responsibilities.",
      },
    },
  ],
};

/* =========================================================
   CONTENT MARKETING PAGE
========================================================= */

export default function ContentMarketing() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="content-marketing-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            contentMarketingCoreSchema,
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
        id="content-marketing-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            contentMarketingServiceSchema,
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
        id="content-marketing-breadcrumb-structured-data"
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
        id="content-marketing-faq-structured-data"
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

        <ContentMarketingHero />

        <ContentMarketingExplained />

        <ContentMarketingProblem />

        <ContentPointOfView />

        <ContentMarketingServices />

        <SearchAndAIDiscoverySection />

        <SharpRaysContentFramework />

        <ContentMarketingDeliverables />

        <ContentPerformanceSection />

        <ContentMarketingProcess />

        <ContentMarketingFAQs />

        <ContentMarketingFinalCTA />

        <Footer />
      </main>
    </>
  );
}