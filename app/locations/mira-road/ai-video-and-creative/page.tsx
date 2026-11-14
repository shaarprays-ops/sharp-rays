
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MiraRoadAIVideoAndCreativeClientPage from "@/components/Locations/MiraRoad/AIVideoAndCreative/MiraRoadAIVideoAndCreativeClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/mira-road/ai-video-and-creative`;

const pageTitle = "AI Video & Creative Agency in Mira Road | Sharp Rays";

const pageDescription =
  "AI video and creative services in Mira Road for product videos, promotional content, social media videos, motion graphics, brand storytelling and AI-assisted visual production.";

const ogImage =
  `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "AI video agency in Mira Road",
    "AI video production in Mira Road",
    "AI video services in Mira Road",
    "AI creative agency in Mira Road",
    "AI video creation in Mira Road",
    "product video production in Mira Road",
    "promotional video agency in Mira Road",
    "video editing services in Mira Road",
    "motion graphics in Mira Road",
    "creative video production in Mira Road",
    "AI-assisted video production Mira Road",
    "social media video production Mira Road",
    "brand storytelling services Mira Road",
  ],

  authors: [{ name: "Sharp Rays" }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

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

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Sharp Rays AI Video and Creative Services in Mira Road",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "AI Video and Creative Services in Mira Road",
      serviceType: [
        "AI Video Production",
        "AI Product Videos",
        "Promotional Video Production",
        "Video Editing",
        "Motion Graphics",
        "Creative Visual Content",
        "Brand Storytelling",
        "Social Media Videos",
      ],
      description:
        "Sharp Rays provides AI video and creative services for businesses targeting Mira Road, including AI-assisted video production, product videos, promotional content, video editing, motion graphics, creative visual content and brand storytelling.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Mira Road, Maharashtra, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mira Road",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Real estate businesses, retail and ecommerce brands, restaurants, hospitality businesses, professional services, beauty and lifestyle brands, startups and growing businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Video and Creative Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter - Essential Creative",
            description:
              "AI-assisted creative direction, video concept development, creative planning, production based on approved scope and final delivery in the agreed format.",
            price: "14999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Essential AI Video and Creative Package",
            },
          },
          {
            "@type": "Offer",
            name: "Growth - Campaign Creative",
            description:
              "Creative direction and planning, multiple creative concepts, AI-assisted video production, campaign-oriented visual approach, review and refinement.",
            price: "24999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Campaign AI Video and Creative Package",
            },
          },
          {
            "@type": "Offer",
            name: "Scale - Advanced Creative",
            description:
              "Extended creative planning, advanced visual direction, AI-assisted production, multiple deliverable planning, review and refinement.",
            price: "39999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Advanced AI Video and Creative Package",
            },
          },
        ],
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: `${siteUrl}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mira Road",
          item: `${siteUrl}/locations/mira-road`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Video & Creative",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What are AI video and creative services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI video and creative services use AI-assisted production tools, visual concepts and creative direction to develop video content for brands, products, campaigns and digital platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide AI video and creative services in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sharp Rays offers AI video and creative services for businesses targeting Mira Road and nearby markets. Project scope can include AI-assisted video production, promotional videos, video editing, motion graphics and creative visual content.",
          },
        },
        {
          "@type": "Question",
          name: "What types of videos can Sharp Rays create?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the brief, projects can include product videos, promotional videos, social media videos, explainers, brand storytelling and AI-assisted visual concepts.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI videos be used for Instagram and social media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Video concepts can be planned for Instagram and other social platforms. The format, aspect ratio and creative approach depend on the intended platform and campaign.",
          },
        },
        {
          "@type": "Question",
          name: "Can you create AI product videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI-assisted product video concepts can help present products through visual storytelling. The available approach depends on the product, supplied assets and production brief.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to provide product images or videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the project. Existing product photographs, brand assets, logos, references and other supplied material can help guide the creative direction. Requirements are discussed during briefing.",
          },
        },
        {
          "@type": "Question",
          name: "Is AI video creation the same as professional video editing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AI video creation focuses on generating or developing visual content with AI-assisted techniques. Professional video editing focuses on editing and refining existing footage. Some projects may use both approaches.",
          },
        },
        {
          "@type": "Question",
          name: "How much do AI video and creative services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sharp Rays offers three starting packages: Starter at ₹14,999, Growth at ₹24,999 and Scale at ₹39,999. Final pricing depends on creative scope, deliverables, complexity and production requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an AI video project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on the creative brief, video complexity, availability of source material, review stages and agreed deliverables. A project timeline can be confirmed after discussing your requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you edit existing footage as well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Professional video editing can be included when the project requires refining existing footage. Editing requirements, formats and deliverables are discussed as part of the creative brief.",
          },
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadAIVideoAndCreativePage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadAIVideoAndCreativeClientPage />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </main>

      <Footer />
    </>
  );
}
