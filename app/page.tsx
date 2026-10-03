import type { Metadata } from "next";

import BeforeYouAskSection from "@/components/Home/BeforeYouAskSection";
import BigIdeaSection from "@/components/Home/BigIdeaSection";
import DifferenceSection from "@/components/Home/DifferenceSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HookSection from "@/components/Home/HookSection";
import HumanSection from "@/components/Home/HumanSection";
import Navbar from "@/components/Home/Navbar";
import SelectedWorkSection from "@/components/Home/SelectedWorkSection";
import SharpRaysComparisonSection from "@/components/Home/SharpRaysComparisonSection";
import WhatCouldWeDoSection from "@/components/Home/WhatCouldWeDoSection";
import YourMethodSection from "@/components/Home/YourMethodSection";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Digital Marketing Agency in India | SEO, Ads & AI | Sharp Rays",

  description:
    "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "digital marketing agency in India",
    "digital growth agency India",
    "hire digital marketing agency in India",
    "AI digital marketing agency",
    "digital marketing agency for brands",
    "digital marketing agency for startups",
    "digital marketing agency for small businesses",
    "digital marketing agency for D2C brands",
    "SEO agency India",
    "performance marketing agency India",
    "website development agency India",
    "AI automation agency India",
    "AI video agency India",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/",
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

    url: "https://www.sharprays.com/",

    siteName: "Sharp Rays",

    title: "Digital Marketing Agency in India | SEO, Ads & AI",

    description:
      "Sharp Rays helps startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

    images: [
      {
        url: "/og/home.webp",

        width: 1200,

        height: 630,

        alt: "Sharp Rays - Digital Marketing, AI Video and Automation Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Agency in India | SEO, Ads & AI",

    description:
      "Sharp Rays helps startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

    images: ["/og/home.webp"],
  },
};

/* =========================================================
   HOME PAGE STRUCTURED DATA
   ONE CONNECTED @GRAPH
========================================================= */

const homeSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id": "https://www.sharprays.com/#primaryimage",

      url: "https://www.sharprays.com/og/home.webp",

      contentUrl: "https://www.sharprays.com/og/home.webp",

      width: 1200,

      height: 630,

      caption:
        "Sharp Rays - Digital Marketing, AI Video and Automation Agency",

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

      inLanguage: "en-IN",
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

      image: {
        "@id": "https://www.sharprays.com/#primaryimage",
      },

      description:
        "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, social media marketing, performance marketing, website development, AI video and AI automation.",

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
        "Social Media Strategy",
        "Search Engine Optimization",
        "Technical SEO",
        "Keyword Research",
        "Search Intent Strategy",
        "On-Page SEO",
        "Performance Marketing",
        "Paid Media",
        "Google Ads",
        "Meta Ads",
        "Conversion Tracking",
        "Website Strategy",
        "UX Design",
        "UI Design",
        "Website Development",
        "Website Management",
        "Content Management",
        "AI Automation",
        "Workflow Automation",
        "Lead Automation",
        "AI Video Creation",
        "Video Editing",
        "Reels and Short-Form Video",
      ],

      hasOfferCatalog: {
        "@id": "https://www.sharprays.com/#services",
      },
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

      description:
        "Sharp Rays provides digital marketing, SEO, social media marketing, performance marketing, website development, content management, AI video and AI automation services.",

      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },

      inLanguage: "en-IN",
    },

    /* =====================================================
       HOMEPAGE
    ===================================================== */

   {
  "@type": "WebPage",

  "@id": "https://www.sharprays.com/#webpage",

  url: "https://www.sharprays.com/",

  name:
    "Digital Marketing Agency in India | SEO, Ads & AI | Sharp Rays",

  headline: "Make Your Brand Impossible to Ignore.",

  alternativeHeadline:
    "Digital Marketing Agency for Brands Ready to Grow",

  description:
    "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

  isPartOf: {
    "@id": "https://www.sharprays.com/#website",
  },

  about: {
    "@id": "https://www.sharprays.com/#organization",
  },

  mainEntity: {
    "@id": "https://www.sharprays.com/#organization",
  },

  primaryImageOfPage: {
    "@id": "https://www.sharprays.com/#primaryimage",
  },

  publisher: {
    "@id": "https://www.sharprays.com/#organization",
  },

  audience: {
    "@type": "BusinessAudience",

    name:
      "Startups, small businesses, D2C brands and growing businesses",

    audienceType:
      "Startups, small businesses, D2C brands, founders and growing businesses seeking digital marketing services",

    description:
      "Businesses looking to improve search visibility, digital marketing performance, websites, content, paid campaigns and business workflows.",
  },

  /* FAQ IS ACTUALLY PART OF THIS WEBPAGE */
  hasPart: {
    "@id": "https://www.sharprays.com/#faq",
  },

  /* SERVICES + SELECTED WORK ARE THINGS MENTIONED ON THE PAGE */
  mentions: [
    {
      "@id": "https://www.sharprays.com/#services",
    },

    {
      "@id": "https://www.sharprays.com/#selected-work",
    },
  ],

  significantLink: [
    "https://www.sharprays.com/services/social-media-marketing",
    "https://www.sharprays.com/services/search-engine-optimization",
    "https://www.sharprays.com/services/performance-marketing",
    "https://www.sharprays.com/services/website-development",
    "https://www.sharprays.com/services/content-marketing",
    "https://www.sharprays.com/services/ai-automation",
    "https://www.sharprays.com/services/video-and-creative",
    "https://www.sharprays.com/work",
    "https://www.sharprays.com/about",
    "https://www.sharprays.com/contact",
  ],

  copyrightYear: 2026,

  copyrightHolder: {
    "@id": "https://www.sharprays.com/#organization",
  },

  inLanguage: "en-IN",
},
    /* =====================================================
       SERVICE CATALOG
    ===================================================== */

    {
      "@type": "OfferCatalog",

      "@id": "https://www.sharprays.com/#services",

      name: "Sharp Rays Digital Marketing Services",

      url: "https://www.sharprays.com/#services",

      description:
        "Digital marketing services including social media marketing, search engine optimization, performance marketing, website development, content management, AI automation and AI video production.",

      itemListOrder: "https://schema.org/ItemListUnordered",

      numberOfItems: 7,

      itemListElement: [
        /* =================================================
           SOCIAL MEDIA MARKETING
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/social-media-marketing#offer",

          url:
            "https://www.sharprays.com/services/social-media-marketing",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/social-media-marketing#service",

            name: "Social Media Marketing",

            url:
              "https://www.sharprays.com/services/social-media-marketing",

            serviceType: "Social Media Marketing",

            category: "Digital Marketing Services",

            description:
              "Social media strategy, content planning, publishing, community engagement and ongoing management designed to build a stronger and more recognizable social presence.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           SEO
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/search-engine-optimization#offer",

          url:
            "https://www.sharprays.com/services/search-engine-optimization",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/search-engine-optimization#service",

            name: "Search Engine Optimization (SEO)",

            url:
              "https://www.sharprays.com/services/search-engine-optimization",

            serviceType: "Search Engine Optimization",

            category: "SEO Services",

            description:
              "Technical SEO, keyword and search intent strategy, on-page optimization, internal linking and continuous improvement designed to strengthen organic search visibility.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           PERFORMANCE MARKETING
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/performance-marketing#offer",

          url:
            "https://www.sharprays.com/services/performance-marketing",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/performance-marketing#service",

            name: "Performance Marketing and Paid Media",

            url:
              "https://www.sharprays.com/services/performance-marketing",

            serviceType: "Performance Marketing and Paid Media",

            category: "Paid Advertising Services",

            description:
              "Google Ads, Meta Ads, audience targeting, creative testing, conversion tracking and ongoing campaign optimization designed to generate measurable leads and sales.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           WEBSITE DEVELOPMENT
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/website-development#offer",

          url:
            "https://www.sharprays.com/services/website-development",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/website-development#service",

            name: "Website Development and Management",

            url:
              "https://www.sharprays.com/services/website-development",

            serviceType: "Website Development and Management",

            category: "Website Development Services",

            description:
              "Website strategy, UX and UI design, responsive development and website management focused on performance, search visibility and clearer user journeys.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           CONTENT MANAGEMENT
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/content-marketing#offer",

          url:
            "https://www.sharprays.com/services/content-marketing",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/content-marketing#service",

            name: "Content Management",

            url:
              "https://www.sharprays.com/services/content-marketing",

            serviceType: "Content Management",

            category: "Content Services",

            description:
              "Website content updates, publishing, maintenance, organization and content quality control for accurate and consistent digital communication.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           AI AUTOMATION
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/ai-automation#offer",

          url:
            "https://www.sharprays.com/services/ai-automation",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/ai-automation#service",

            name: "AI Automation",

            url:
              "https://www.sharprays.com/services/ai-automation",

            serviceType: "AI Automation",

            category: "AI Automation Services",

            description:
              "AI workflows, workflow automation, lead automation and business process automation designed to reduce repetitive work and connect everyday business processes.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },

        /* =================================================
           AI VIDEO & VIDEO EDITING
        ================================================= */

        {
          "@type": "Offer",

          "@id":
            "https://www.sharprays.com/services/video-and-creative#offer",

          url:
            "https://www.sharprays.com/services/video-and-creative",

          seller: {
            "@id": "https://www.sharprays.com/#organization",
          },

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/video-and-creative#service",

            name: "AI Video and Video Editing",

            url:
              "https://www.sharprays.com/services/video-and-creative",

            serviceType: "AI Video Creation and Video Editing",

            category: "Video Production Services",

            description:
              "AI-assisted video creation, professional editing, reels, shorts, motion graphics, captions and platform-ready video production.",

            provider: {
              "@id": "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",

              name: "India",
            },
          },
        },
      ],
    },

    /* =====================================================
       SELECTED WORK
    ===================================================== */

    {
      "@type": "ItemList",

      "@id": "https://www.sharprays.com/#selected-work",

      name: "Sharp Rays Selected Work",

      url: "https://www.sharprays.com/work",

      description:
        "Selected client and internal projects by Sharp Rays across website development, SEO, social media and digital strategy.",

      itemListOrder: "https://schema.org/ItemListUnordered",

      numberOfItems: 3,

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          item: {
            "@type": "CreativeWork",

            "@id":
              "https://www.sharprays.com/work/sharp-rays-website#project",

            name: "Sharp Rays Website",

            url:
              "https://www.sharprays.com/work/sharp-rays-website",

            description:
              "Clearer service journeys, responsive development and scalable website architecture built around multiple Sharp Rays services.",

            creator: {
              "@id": "https://www.sharprays.com/#organization",
            },
          },
        },

        {
          "@type": "ListItem",

          position: 2,

          item: {
            "@type": "CreativeWork",

            "@id":
              "https://www.sharprays.com/work/dts-seo#project",

            name: "Double Trouble Studio",

            url:
              "https://www.sharprays.com/work/dts-seo",

            description:
              "Search strategy, technical optimization, service-page improvements and a clearer content structure designed to strengthen organic visibility.",

            creator: {
              "@id": "https://www.sharprays.com/#organization",
            },
          },
        },

        {
          "@type": "ListItem",

          position: 3,

          item: {
            "@type": "CreativeWork",

            "@id":
              "https://www.sharprays.com/work/rnk-rentals-seo#project",

            name: "RNK Rentals",

            url:
              "https://www.sharprays.com/work/rnk-rentals-seo",

            description:
              "Improving rental-service visibility through SEO, clearer website journeys and a more consistent digital presence across social channels.",

            creator: {
              "@id": "https://www.sharprays.com/#organization",
            },
          },
        },
      ],
    },

    /* =====================================================
       FAQ PAGE
       EXACTLY MATCHES VISIBLE HOMEPAGE FAQ CONTENT
    ===================================================== */

    {
      "@type": "FAQPage",

      "@id": "https://www.sharprays.com/#faq",

      url: "https://www.sharprays.com/#faq",

      name: "Frequently Asked Questions About Sharp Rays",

      description:
        "Answers to common questions about working with Sharp Rays, pricing, project start times, startups, enquiries and marketing results.",

      isPartOf: {
        "@id": "https://www.sharprays.com/#webpage",
      },

      about: {
        "@id": "https://www.sharprays.com/#organization",
      },

      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },

      inLanguage: "en-IN",

      mainEntity: [
        {
          "@type": "Question",

          name: "How much does working with you cost?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "It depends on what your business actually needs. We start by understanding your goals, scope, and priorities before recommending the right approach and investment.",
          },
        },

        {
          "@type": "Question",

          name: "How quickly can we start?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Once we understand your requirements and agree on the scope, we can move quickly. We'll define the priorities, timeline, and next steps so everyone knows exactly what happens next.",
          },
        },

        {
          "@type": "Question",

          name: "Do you work with startups?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes. We work with startups and growing businesses that have something worth building and are serious about creating meaningful, sustainable digital growth.",
          },
        },

        {
          "@type": "Question",

          name: "What happens after I contact you?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "We start with a conversation. We learn about your business, what's working, what's not, and where you want to go. Then we'll tell you honestly how we think we can help.",
          },
        },

        {
          "@type": "Question",

          name: "Do you guarantee results?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "We don't promise numbers we can't control. What we do promise is thoughtful strategy, strong execution, transparency, and decisions backed by data.",
          },
        },
      ],
    },
  ],
};

/* =========================================================
   HOME PAGE
========================================================= */

export default function Home() {
  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
          SINGLE CONNECTED JSON-LD GRAPH
      ===================================================== */}

      <script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="min-h-screen bg-[#051935]">
        <Navbar />

        <Hero />

        <HookSection />

        <BigIdeaSection />

        <WhatCouldWeDoSection />

        <DifferenceSection />

        <SelectedWorkSection />

        <YourMethodSection />

        <HumanSection />

        <SharpRaysComparisonSection />

        <BeforeYouAskSection />

        <FinalCTASection />

        <Footer />
      </main>
    </>
  );
}