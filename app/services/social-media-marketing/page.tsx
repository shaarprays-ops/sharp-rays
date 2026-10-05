
import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import SocialMediaClosingSections from "@/components/SocialMediaMarketing/ReadyToBeRemembered";
import SocialMediaMarketingFAQs from "@/components/SocialMediaMarketing/SocialMediaMarketingFAQs";
import SocialMediaMarketingFirstConversationToCampaign from "@/components/SocialMediaMarketing/SocialMediaMarketingFirstConversationToCampaign";
import SocialMediaMarketingHero from "@/components/SocialMediaMarketing/SocialMediaMarketingHero";
import SocialMediaMarketingProblem from "@/components/SocialMediaMarketing/SocialMediaMarketingProblem";
import SocialMediaMarketingWhatWeDo from "@/components/SocialMediaMarketing/SocialMediaMarketingWhatWeDo";
import SocialMediaPlatformStrategy from "@/components/SocialMediaMarketing/SocialMediaPlatformStrategy";
import SocialMediaPricing from "@/components/SocialMediaMarketing/SocialMediaPricing";
import SocialMediaQuickAnswer from "@/components/SocialMediaMarketing/SocialMediaQuickAnswer";
import SocialMediaResultsProof from "@/components/SocialMediaMarketing/SocialMediaResultsProof";
import WhySharpRays from "@/components/SocialMediaMarketing/WhySharpRays";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "Social Media Marketing Agency for Small Business India",

  description:
    "Social media marketing agency for small businesses in India offering strategy, content, Reels, publishing, community management and reporting.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "social media marketing agency for small business",
    "social media marketing agency India",
    "social media management agency India",
    "Instagram marketing agency India",
    "LinkedIn marketing agency India",
    "Facebook marketing agency India",
    "social media agency for small business",
    "social media management for small business",
    "Instagram marketing services India",
    "social media content creation India",
    "social media content agency India",
    "social media strategy agency",
    "Reels content creation agency",
    "short form video agency India",
    "community management agency",
    "personal branding agency India",
    "social media marketing company India",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/social-media-marketing",
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
      "https://www.sharprays.com/services/social-media-marketing",

    siteName: "Sharp Rays",

    title:
      "Social Media Marketing Agency for Small Business India",

    description:
      "Social media marketing for small businesses through strategy, content creation, Reels, publishing, community management and performance reporting.",

    images: [
      {
        url:
          "/og/SharpRays-Social-Media-Marketing.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays Social Media Marketing Agency for Small Business India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Social Media Marketing Agency for Small Business India",

    description:
      "Social media marketing for small businesses through strategy, content creation, Reels, publishing, community management and performance reporting.",

    images: [
      "/og/SharpRays-Social-Media-Marketing.webp",
    ],
  },
};

/* =========================================================
   SOCIAL MEDIA MARKETING CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const socialMediaCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/services/social-media-marketing#primaryimage",

      url:
        "https://www.sharprays.com/og/SharpRays-Social-Media-Marketing.webp",

      contentUrl:
        "https://www.sharprays.com/og/SharpRays-Social-Media-Marketing.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays Social Media Marketing Agency for Small Business India",

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
        "Social Media Marketing",
        "Social Media Strategy",
        "Social Media Management",
        "Social Media Content Creation",
        "Instagram Marketing",
        "Facebook Marketing",
        "LinkedIn Marketing",
        "Content Strategy",
        "Content Planning",
        "Social Media Publishing",
        "Community Management",
        "Instagram Reels",
        "Short-Form Video",
        "Social Media Reporting",
        "Audience Engagement",
        "Brand Positioning",
        "Personal Branding",
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
       SOCIAL MEDIA MARKETING WEBPAGE
    ===================================================== */

    {
      "@type": "WebPage",

      "@id":
        "https://www.sharprays.com/services/social-media-marketing#webpage",

      url:
        "https://www.sharprays.com/services/social-media-marketing",

      name:
        "Social Media Marketing Agency for Small Business India",

      headline:
        "Social Media Marketing That Makes Your Brand Worth Remembering.",

      alternativeHeadline:
        "Social Media Marketing for Small Businesses That Want a Clearer and More Consistent Social Presence",

      description:
        "Sharp Rays helps businesses build clearer social media through strategy, content creation, publishing, community management, platform planning and performance reporting.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/social-media-marketing#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/social-media-marketing#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/social-media-marketing#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/social-media-marketing#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/social-media-marketing#faq",
        },

        {
          "@id":
            "https://www.sharprays.com/services/social-media-marketing#selected-work",
        },

        {
          "@id":
            "https://www.sharprays.com/services/social-media-marketing#plans",
        },
      ],

      audience: {
        "@type": "BusinessAudience",

        name:
          "Small businesses, startups and growing brands",

        audienceType:
          "Businesses seeking social media strategy, content creation, publishing, community management and reporting",

        description:
          "Startups, small businesses and growing brands that need a clearer and more consistent social media presence.",
      },

      mentions: [
        {
          "@type": "Thing",

          name:
            "Social Media Strategy",
        },

        {
          "@type": "Thing",

          name:
            "Instagram Marketing",
        },

        {
          "@type": "Thing",

          name:
            "LinkedIn Marketing",
        },

        {
          "@type": "Thing",

          name:
            "Facebook Marketing",
        },

        {
          "@type": "Thing",

          name:
            "Social Media Content Creation",
        },

        {
          "@type": "Thing",

          name:
            "Instagram Reels",
        },

        {
          "@type": "Thing",

          name:
            "Short-Form Video",
        },

        {
          "@type": "Thing",

          name:
            "Community Management",
        },

        {
          "@type": "Thing",

          name:
            "Social Media Reporting",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/video-and-creative",
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
   SOCIAL MEDIA MARKETING SERVICE SCHEMA
========================================================= */

const socialMediaServiceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://www.sharprays.com/services/social-media-marketing#service",

  name:
    "Social Media Marketing",

  alternateName:
    "Social Media Marketing and Management Services",

  url:
    "https://www.sharprays.com/services/social-media-marketing",

  serviceType:
    "Social Media Marketing",

  category:
    "Digital Marketing Services",

  description:
    "Social media marketing services covering strategy, content planning, content creation, publishing, social media management, community engagement and performance reporting.",

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
      "Startups, small businesses, growing brands and established businesses seeking social media marketing support",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",

      name:
        "Social Media Strategy",
    },

    {
      "@type": "CreativeWork",

      name:
        "Content Strategy and Planning",
    },

    {
      "@type": "CreativeWork",

      name:
        "Social Media Content Creation",
    },

    {
      "@type": "CreativeWork",

      name:
        "Reels and Short-Form Video Content",
    },

    {
      "@type": "CreativeWork",

      name:
        "Social Media Publishing",
    },

    {
      "@type": "CreativeWork",

      name:
        "Community Management",
    },

    {
      "@type": "CreativeWork",

      name:
        "Social Media Performance Reporting",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/social-media-marketing#plans",
  },
};

/* =========================================================
   SOCIAL MEDIA MARKETING PLANS
========================================================= */

const socialMediaPlansSchema = {
  "@context": "https://schema.org",

  "@type": "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/social-media-marketing#plans",

  name:
    "Sharp Rays Social Media Marketing Plans",

  url:
    "https://www.sharprays.com/services/social-media-marketing#pricing",

  description:
    "Social media marketing plans for startups, small businesses, growing brands and established businesses.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       STARTER
    ===================================================== */

    {
      "@type": "Offer",

      name:
        "Starter Social Media Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=social-media-marketing&plan=starter",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Starter Social Media Marketing",

        serviceType:
          "Social Media Marketing",

        description:
          "Social media support for startups, local businesses and smaller brands that want a professional and consistent social media presence.",

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
        "Growth Social Media Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=social-media-marketing&plan=growth",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Growth Social Media Marketing",

        serviceType:
          "Social Media Marketing",

        description:
          "Social media support for growing businesses that need stronger creative, more frequent content and ongoing management across key platforms.",

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
        "Scale Social Media Marketing Plan",

      url:
        "https://www.sharprays.com/contact?service=social-media-marketing&plan=scale",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type": "Service",

        name:
          "Scale Social Media Marketing",

        serviceType:
          "Social Media Marketing",

        description:
          "Broader strategy, higher content volume, campaign support and deeper ongoing social media management for growing and established brands.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },
      },
    },
  ],
};

/* =========================================================
   SELECTED SOCIAL MEDIA WORK
========================================================= */

const selectedWorkSchema = {
  "@context": "https://schema.org",

  "@type": "ItemList",

  "@id":
    "https://www.sharprays.com/services/social-media-marketing#selected-work",

  name:
    "Sharp Rays Selected Social Media Work",

  url:
    "https://www.sharprays.com/services/social-media-marketing#selected-work",

  description:
    "Selected social media projects by Sharp Rays across digital marketing, food and product content, and personal branding.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       DTS WORLD
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        1,

      item: {
        "@type": "CreativeWork",

        name:
          "DTS World Social Media",

        description:
          "Social media presence built around events, celebrities, weddings, PR and entertainment-led brand communication.",

        creator: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        inLanguage:
          "en-IN",
      },
    },

    /* =====================================================
       BROWNIE POINT
    ===================================================== */

    {
      "@type": "ListItem",

      position:
        2,

      item: {
        "@type": "CreativeWork",

        name:
          "Brownie Point Social Media",

        description:
          "Product-led social content focused on visual appeal, consistency and memorable digital presentation.",

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
        3,

      item: {
        "@type": "CreativeWork",

        name:
          "Shruti Chadha Social Media",

        description:
          "A refined personal-brand presence built through visual consistency, editorial content and social storytelling.",

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
    "https://www.sharprays.com/services/social-media-marketing#breadcrumb",

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
        "Social Media Marketing",

      item:
        "https://www.sharprays.com/services/social-media-marketing",
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
    "https://www.sharprays.com/services/social-media-marketing#faq",

  url:
    "https://www.sharprays.com/services/social-media-marketing#social-media-marketing-faq",

  name:
    "Social Media Marketing FAQs",

  description:
    "Answers to common questions about social media marketing, management, pricing, platforms, Reels, community management, paid advertising and performance measurement.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/social-media-marketing#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/social-media-marketing#service",
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
        "What does a social media marketing agency do?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "A social media marketing agency helps businesses plan, create, manage and improve their presence across social platforms. Services may include social media strategy, content creation, publishing, community management, paid advertising and performance reporting.",
      },
    },

    /* =====================================================
       FAQ 02
    ===================================================== */

    {
      "@type": "Question",

      name:
        "What is included in social media management?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Social media management can include strategy, content planning, content creation, scheduling, publishing, community engagement and reporting. The exact deliverables depend on the platforms, content volume and responsibilities included in your plan.",
      },
    },

    /* =====================================================
       FAQ 03
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How much does social media marketing cost?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Social media marketing costs vary depending on the number of platforms, volume and type of content, video production requirements, community management, paid advertising and level of ongoing support. Sharp Rays confirms the final price after defining the required scope.",
      },
    },

    /* =====================================================
       FAQ 04
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Which social media platform is best for my business?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The best platform depends on your audience, industry and goals. Instagram may suit highly visual brands, while LinkedIn can be more relevant for many B2B businesses. The right strategy focuses on the platforms where your audience and business objectives overlap.",
      },
    },

    /* =====================================================
       FAQ 05
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you create Instagram Reels and short-form videos?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Short-form video can be included depending on your package and production requirements. The proposal clarifies whether Sharp Rays creates the complete video, works with footage supplied by your team or requires separate production.",
      },
    },

    /* =====================================================
       FAQ 06
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Do you manage comments and direct messages?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Community management can be included in your service. The exact responsibilities, response expectations and escalation process are agreed before management begins.",
      },
    },

    /* =====================================================
       FAQ 07
    ===================================================== */

    {
      "@type": "Question",

      name:
        "Is paid social media advertising included?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Paid advertising is available as an additional service where required. Campaign management, creative production and advertising spend are defined separately in your proposal.",
      },
    },

    /* =====================================================
       FAQ 08
    ===================================================== */

    {
      "@type": "Question",

      name:
        "How do you measure social media performance?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "The metrics used depend on your objectives. They may include reach, engagement, audience growth, profile activity, website traffic, enquiries, leads or conversions where tracking is available.",
      },
    },
  ],
};

/* =========================================================
   SOCIAL MEDIA MARKETING PAGE
========================================================= */

export default function SocialMediaMarketing() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="social-media-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            socialMediaCoreSchema,
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
        id="social-media-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            socialMediaServiceSchema,
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
        id="social-media-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            socialMediaPlansSchema,
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
        id="social-media-work-structured-data"
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
        id="social-media-breadcrumb-structured-data"
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
        id="social-media-faq-structured-data"
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

        <SocialMediaMarketingHero />

        <SocialMediaQuickAnswer />

        <SocialMediaMarketingWhatWeDo />

        <SocialMediaMarketingProblem />

        <SocialMediaPlatformStrategy />

        <WhySharpRays />

        <SocialMediaMarketingFirstConversationToCampaign />

        <SocialMediaResultsProof />

        <SocialMediaPricing />

        <SocialMediaMarketingFAQs />

        <SocialMediaClosingSections />

        <Footer />
      </main>
    </>
  );
}
