
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import BeautyWellnessHero from "@/components/Industries/BeautyWellness/BeautyWellnessHero";
import BeautyGrowthProblems from "@/components/Industries/BeautyWellness/BeautyGrowthProblems";
import BeautyMarketingIntro from "@/components/Industries/BeautyWellness/BeautyMarketingIntro";
import BeautyServicesSystem from "@/components/Industries/BeautyWellness/BeautyServicesSystem";
import BeautyCustomerJourney from "@/components/Industries/BeautyWellness/BeautyCustomerJourney";
import BeautySearchVisibility from "@/components/Industries/BeautyWellness/BeautySearchVisibility";
import BeautyWhoWeHelp from "@/components/Industries/BeautyWellness/BeautyWhoWeHelp";
import BeautyGrowthStack from "@/components/Industries/BeautyWellness/BeautyGrowthStack";
import BeautyFinalCTA from "@/components/Industries/BeautyWellness/BeautyFinalCTA";

// ======================================================
// PAGE CONFIGURATION
// ======================================================

const SITE_URL = "https://www.sharprays.com";

const PAGE_PATH = "/industries/beauty-wellness";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const OG_IMAGE_PATH = "/og/beauty-wellness.webp";
const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

const PAGE_TITLE =
  "Digital Marketing for Salons & Beauty Businesses | Sharp Rays";

const PAGE_DESCRIPTION =
  "Digital marketing for salons, spas and wellness businesses with SEO, Google Ads, social media, landing pages and automation focused on bookings and repeat customers.";

const INDUSTRY_NAME = "Beauty & Wellness";

const IMAGE_ALT =
  "Sharp Rays digital marketing services for beauty salons, spas and wellness businesses";

// ======================================================
// SEO METADATA
// ======================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  keywords: [
    "digital marketing for salons",
    "beauty salon marketing",
    "spa marketing agency",
    "beauty and wellness marketing",
    "salon digital marketing",
    "spa digital marketing",
    "salon SEO",
    "salon Google Ads",
    "salon local SEO",
    "digital marketing for beauty salons",
    "salon booking marketing",
    "wellness business marketing",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: PAGE_URL,
    siteName: "Sharp Rays",

    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,

    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: IMAGE_ALT,
        type: "image/webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,

    images: [
      {
        url: OG_IMAGE_URL,
        alt: IMAGE_ALT,
      },
    ],
  },
};

// ======================================================
// FAQ DATA
// ======================================================

const faqItems = [
  {
    question: "How can I get more salon bookings?",
    answer:
      "More salon bookings usually come from improving local visibility, making your services easier to discover, building trust through reviews and social proof, and creating a clear path from search or social media to enquiry and appointment.",
  },
  {
    question: "How can my salon rank higher on Google?",
    answer:
      "A stronger local SEO strategy can include Google Business Profile optimisation, service pages, location pages, reviews, local content and consistent business information across the web.",
  },
  {
    question: "Does Google Ads work for salons and spas?",
    answer:
      "Yes, especially when campaigns target high-intent searches for specific treatments, services and locations. The landing page, offer and booking journey also need to be aligned with the ad.",
  },
  {
    question: "Can Instagram generate real salon customers?",
    answer:
      "Yes. Instagram works best when content builds desire and trust through transformations, real results, expertise, services, offers and clear booking calls to action.",
  },
  {
    question: "How can I improve repeat bookings?",
    answer:
      "Repeat bookings can improve through appointment reminders, follow-up messages, rebooking prompts, personalised offers, review requests and WhatsApp or CRM automation.",
  },
  {
    question: "What digital marketing services are best for salons?",
    answer:
      "For most salons and wellness businesses, a strong mix includes local SEO, Google Maps visibility, Google Ads, social media marketing, landing pages, WhatsApp automation and customer retention workflows.",
  },
] as const;

// ======================================================
// SERVICE DATA
// ======================================================

const services = [
  {
    name: "Local SEO & Google Maps Marketing",
    path: "search-engine-optimization",
  },
  {
    name: "Google Ads & Performance Marketing",
    path: "performance-marketing",
  },
  {
    name: "Social Media Marketing",
    path: "social-media-marketing",
  },
  {
    name: "Website Development & Landing Pages",
    path: "website-development",
  },
  {
    name: "Content Marketing",
    path: "content-marketing",
  },
  {
    name: "AI Automation & Customer Retention",
    path: "ai-automation",
  },
] as const;

// ======================================================
// STRUCTURED DATA
// ======================================================

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    // WEBPAGE
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,

      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },

      mainEntity: {
        "@id": `${PAGE_URL}#service`,
      },

      image: {
        "@id": `${PAGE_URL}#socialimage`,
      },

      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },

      hasPart: {
        "@id": `${PAGE_URL}#faq`,
      },
    },

    // SOCIAL IMAGE
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,

      url: OG_IMAGE_URL,
      contentUrl: OG_IMAGE_URL,

      name: IMAGE_ALT,
      description:
        "Social sharing image for Sharp Rays beauty and wellness digital marketing services.",

      width: 1200,
      height: 630,

      encodingFormat: "image/webp",
      inLanguage: "en-IN",
    },

    // SERVICE
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,

      name: `${INDUSTRY_NAME} Digital Marketing Services`,
      serviceType: `${INDUSTRY_NAME} Digital Marketing`,

      url: PAGE_URL,
      description: PAGE_DESCRIPTION,

      provider: {
        "@id": `${SITE_URL}/#organization`,
      },

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Beauty salons, spas, hair salons, beauty studios and wellness businesses",
      },

      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,

        name: `${INDUSTRY_NAME} Marketing Services`,

        itemListElement: services.map((service) => ({
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: service.name,

            url: `${SITE_URL}/services/${service.path}`,

            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
          },
        })),
      },
    },

    // BREADCRUMB
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: INDUSTRY_NAME,
          item: PAGE_URL,
        },
      ],
    },

    // FAQ
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,

      name: `${INDUSTRY_NAME} Digital Marketing FAQs`,
      url: PAGE_URL,
      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${PAGE_URL}#webpage`,
      },

      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

// ======================================================
// PAGE
// ======================================================

export default function BeautyWellnessPage() {
  return (
    <main>
      <script
        id="beauty-wellness-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Navbar />

      <BeautyWellnessHero />
      <BeautyGrowthProblems />
      <BeautyMarketingIntro />
      <BeautyServicesSystem />
      <BeautyCustomerJourney />
      <BeautySearchVisibility />
      <BeautyWhoWeHelp />
      <BeautyGrowthStack />
      <BeautyFinalCTA />

      <Footer />
    </main>
  );
}
