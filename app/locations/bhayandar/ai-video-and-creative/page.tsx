
import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import BhayandarAIVideoCreativePageClient from "@/components/Locations/Bhayandar/AIVideoAndCreative/BhayandarAIVideoAndCreativePageClient";
import Navbar from "@/components/Home/Navbar";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar/ai-video-creative`;

// Add the actual OG image URL when the image is available.
const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "AI Video & Creative Services in Bhayandar | Sharp Rays";

const pageDescription =
  "AI video and creative services in Bhayandar for product videos, promotional content, brand storytelling, social media videos and AI-assisted visual production. Turn your ideas into visual stories with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "AI video services in Bhayandar",
    "AI video production in Bhayandar",
    "AI video production agency in Bhayandar",
    "AI video creation in Bhayandar",
    "AI creative services in Bhayandar",
    "AI creative agency in Bhayandar",
    "AI-assisted video production",
    "AI product videos",
    "AI product video production",
    "product video creation",
    "promotional video production",
    "AI advertising creatives",
    "video advertising creatives",
    "brand storytelling videos",
    "AI brand storytelling",
    "social media video production",
    "Instagram Reels video creation",
    "short-form video production",
    "AI explainer videos",
    "AI visual content creation",
    "creative video production",
    "AI-assisted creative production",
    "motion graphics and creative visuals",
    "AI video content for businesses",
    "video production for retail businesses",
    "promotional videos for hospitality businesses",
    "product videos for ecommerce businesses",
    "AI video services in Bhayandar West",
    "AI video services in Bhayandar East",
    "AI video production near Uttan Road",
    "AI video production for Navghar businesses",
    "Sharp Rays AI Video and Creative",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: siteUrl,
    },
  ],

  creator: "Sharp Rays",
  publisher: "Sharp Rays",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Sharp Rays",
    locale: "en_IN",
    type: "website",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "AI Video and Creative Services in Bhayandar - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI Video & Creative Services in Bhayandar",
      serviceType: [
        "AI Video Creation",
        "AI-Assisted Video Production",
        "AI Product Videos",
        "Advertising Creatives",
        "Brand Storytelling",
        "Social Media Videos",
        "Creative Visual Concepts",
        "Promotional Video Production",
        "Explainer Videos",
        "Motion-Led Visual Content",
      ],
      description:
        "AI-assisted video creation and creative production for businesses targeting Bhayandar. Services include AI video concepts, product videos, advertising creatives, brand storytelling, social media videos and creative visual production.",
      url: pageUrl,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Bhayandar, Maharashtra, India",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Retail and ecommerce businesses, hospitality businesses, real estate businesses, professional services, education businesses, startups and growing brands",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Video & Creative Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter AI Video & Creative Package",
            price: "14999",
            priceCurrency: "INR",
            description:
              "Starting package for businesses exploring AI-assisted video content, including creative direction, video concept development, creative planning and production based on the approved scope.",
          },
          {
            "@type": "Offer",
            name: "Growth AI Video & Creative Package",
            price: "24999",
            priceCurrency: "INR",
            description:
              "Starting package for broader creative requirements, including creative direction, multiple concepts, AI-assisted video production, campaign-oriented visual planning and refinement.",
          },
          {
            "@type": "Offer",
            name: "Scale AI Video & Creative Package",
            price: "39999",
            priceCurrency: "INR",
            description:
              "Starting package for larger creative requirements, including extended planning, advanced visual direction, AI-assisted production and multiple deliverable planning.",
          },
        ],
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Bhayandar",
          item: `${siteUrl}/locations/bhayandar`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Video & Creative",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BhayandarAIVideoCreativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarAIVideoCreativePageClient />
      </main>

      <Footer />
    </>
  );
}
