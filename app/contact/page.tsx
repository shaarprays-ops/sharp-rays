import type { Metadata } from "next";

import ContactHero from "@/components/Contact/ContactHero";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA

   BASE PAGE:
   /contact
   -> index,follow

   FORM PRESELECT VARIANTS:
   /contact?service=seo
   /contact?service=social-media-marketing
   /contact?service=seo&plan=foundation
   /contact?service=seo&need=seo-opportunity-review
   etc.

   -> noindex,follow
   -> canonical /contact
========================================================= */

type ContactPageProps = {
  searchParams?: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const params = searchParams ? await searchParams : {};

  const hasQueryParameters = Object.keys(params).length > 0;

  return {
    metadataBase: new URL("https://www.sharprays.com"),

    title:
      "Contact Sharp Rays | Talk to a Digital Marketing Strategist",

    description:
      "Contact Sharp Rays about SEO, ads, social media, websites, AI video or automation. Share your goals and we'll reply with clear next steps.",

    applicationName: "Sharp Rays",

    creator: "Sharp Rays",

    publisher: "Sharp Rays",

    keywords: [
      "contact Sharp Rays",
      "Sharp Rays contact",
      "hire Sharp Rays",
      "digital marketing agency contact",
      "digital marketing agency Mumbai",
      "digital marketing agency contact India",
      "hire digital marketing agency India",
      "digital marketing strategist India",
      "SEO agency contact India",
      "social media marketing agency contact",
      "performance marketing agency contact",
      "website development agency contact",
      "AI video agency contact",
      "AI automation agency contact",
      "digital growth agency India",
    ],

    alternates: {
      canonical: "https://www.sharprays.com/contact",
    },

    robots: {
      index: !hasQueryParameters,
      follow: true,

      googleBot: {
        index: !hasQueryParameters,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",

      locale: "en_IN",

      url: "https://www.sharprays.com/contact",

      siteName: "Sharp Rays",

      title:
        "Contact Sharp Rays | Talk to a Digital Marketing Strategist",

      description:
        "Contact Sharp Rays about SEO, ads, social media, websites, AI video or automation. Share your goals and we'll reply with clear next steps.",

      images: [
        {
          url: "/og/contact.webp",

          width: 1200,

          height: 630,

          alt:
            "Contact Sharp Rays - Digital Marketing Agency in Mumbai, India",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        "Contact Sharp Rays | Talk to a Digital Marketing Strategist",

      description:
        "Contact Sharp Rays about SEO, ads, social media, websites, AI video or automation. Share your goals and we'll reply with clear next steps.",

      images: ["/og/contact.webp"],
    },
  };
}

/* =========================================================
   CONTACT PAGE CORE SCHEMA
   ImageObject + Organization + ContactPoint
   + WebSite + ContactPage
========================================================= */

const contactCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type": "ImageObject",

      "@id":
        "https://www.sharprays.com/contact#primaryimage",

      url:
        "https://www.sharprays.com/og/contact.png",

      contentUrl:
        "https://www.sharprays.com/og/contact.png",

      width: 1200,

      height: 630,

      caption:
        "Contact Sharp Rays - Digital Marketing Agency in Mumbai, India",

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
          "https://www.sharprays.com/contact#primaryimage",
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
        "Digital Growth Strategy",
        "Social Media Marketing",
        "Search Engine Optimization",
        "Technical SEO",
        "Keyword Research",
        "Search Intent Strategy",
        "Content Marketing",
        "Content Management",
        "Performance Marketing",
        "Paid Media",
        "Google Ads",
        "Meta Ads",
        "Conversion Tracking",
        "Website Development",
        "Website Management",
        "UX Design",
        "UI Design",
        "AI Video Creation",
        "Video Editing",
        "AI Automation",
        "Workflow Automation",
        "Lead Automation",
      ],

      contactPoint: {
        "@id":
          "https://www.sharprays.com/contact#contactpoint",
      },
    },

    /* =====================================================
       CONTACT POINT
    ===================================================== */

    {
      "@type": "ContactPoint",

      "@id":
        "https://www.sharprays.com/contact#contactpoint",

      contactType:
        "Project and service enquiries",

      telephone:
        "+91-9415951060",

      email:
        "info@sharprays.com",

      url:
        "https://www.sharprays.com/contact",

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

      availableLanguage: [
        "English",
      ],

      hoursAvailable: {
        "@type": "OpeningHoursSpecification",

        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],

        opens: "09:00",

        closes: "18:00",
      },
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
       CONTACT PAGE
    ===================================================== */

    {
      "@type": "ContactPage",

      "@id":
        "https://www.sharprays.com/contact#webpage",

      url:
        "https://www.sharprays.com/contact",

      name:
        "Contact Sharp Rays | Talk to a Digital Marketing Strategist",

      headline:
        "Tell Us What You're Trying to Improve.",

      alternativeHeadline:
        "Start a Conversation With Sharp Rays",

      description:
        "Contact Sharp Rays about SEO, social media marketing, content marketing, performance marketing, website development, AI video or AI automation. Tell us what you want to improve and we'll start from there.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/contact#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/contact#breadcrumb",
      },

      hasPart: {
        "@id":
          "https://www.sharprays.com/contact#faq",
      },

      audience: {
        "@type": "BusinessAudience",

        name:
          "Startups, small businesses, D2C brands and growing businesses",

        audienceType:
          "Businesses seeking digital marketing, SEO, advertising, website development, content, AI video or automation support",

        description:
          "Businesses looking to improve search visibility, social media, paid campaigns, content, websites, video production or business workflows.",
      },

      mentions: [
        {
          "@type": "Service",

          name:
            "Social Media Marketing",

          url:
            "https://www.sharprays.com/services/social-media-marketing",
        },

        {
          "@type": "Service",

          name:
            "Search Engine Optimization",

          url:
            "https://www.sharprays.com/services/search-engine-optimization",
        },

        {
          "@type": "Service",

          name:
            "Content Marketing",

          url:
            "https://www.sharprays.com/services/content-marketing",
        },

        {
          "@type": "Service",

          name:
            "Performance Marketing",

          url:
            "https://www.sharprays.com/services/performance-marketing",
        },

        {
          "@type": "Service",

          name:
            "Website Development and Management",

          url:
            "https://www.sharprays.com/services/website-development",
        },

        {
          "@type": "Service",

          name:
            "AI Video and Video Editing",

          url:
            "https://www.sharprays.com/services/video-and-creative",
        },

        {
          "@type": "Service",

          name:
            "AI Automation",

          url:
            "https://www.sharprays.com/services/ai-automation",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services/social-media-marketing",
        "https://www.sharprays.com/services/search-engine-optimization",
        "https://www.sharprays.com/services/content-marketing",
        "https://www.sharprays.com/services/performance-marketing",
        "https://www.sharprays.com/services/website-development",
        "https://www.sharprays.com/services/video-and-creative",
        "https://www.sharprays.com/services/ai-automation",
        "https://www.sharprays.com/work",
        "https://www.sharprays.com/about",
        "https://www.sharprays.com/privacy-policy",
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
    "https://www.sharprays.com/contact#breadcrumb",

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

      name: "Contact",

      item:
        "https://www.sharprays.com/contact",
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
    "https://www.sharprays.com/contact#faq",

  url:
    "https://www.sharprays.com/contact#faq",

  name:
    "Contact Sharp Rays Frequently Asked Questions",

  description:
    "Answers to common questions about contacting Sharp Rays, choosing services, project briefs, startup support and single-service projects.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/contact#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  publisher: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  inLanguage:
    "en-IN",

  mainEntity: [
    {
      "@type": "Question",

      name:
        "Do I need to know which service I need?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No. If you know what you need, select the relevant service. If you are unsure, choose Not Sure Yet and explain the problem you are trying to solve.",
      },
    },

    {
      "@type": "Question",

      name:
        "Do I need a full project brief?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "No. A short explanation of your business, current situation and objective is enough to begin the conversation.",
      },
    },

    {
      "@type": "Question",

      name:
        "Does Sharp Rays work with startups?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. The right scope depends on the stage of the business, available resources and the problem that needs to be solved.",
      },
    },

    {
      "@type": "Question",

      name:
        "Do you work with established businesses too?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. Sharp Rays can support businesses that already have existing websites, marketing teams, campaigns or digital systems and need help improving a specific area.",
      },
    },

    {
      "@type": "Question",

      name:
        "Can I contact you for just one service?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. A project can focus on one service where that is all the business needs. We do not require every engagement to combine multiple services.",
      },
    },
  ],
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function Contact() {
  return (
    <>
      {/* =====================================================
          CONTACT PAGE STRUCTURED DATA
      ===================================================== */}

      <script
        id="contact-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            contactCoreSchema,
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
        id="contact-breadcrumb-structured-data"
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
        id="contact-faq-structured-data"
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

      <main className="min-h-screen bg-[#051935]">
        <Navbar />

        <ContactHero />

        <Footer />
      </main>
    </>
  );
}