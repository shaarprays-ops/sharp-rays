
import type { Metadata } from "next";

import VirarAIVideoAndCreativePageClient from "@/components/Locations/Virar/AIVideoAndCreative/VirarAIVideoAndCreativePageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/ai-video-and-creative`;

const ogImage = "/og/Virar.webp";

const pageTitle = "AI Video & Creative Services in Virar | Sharp Rays";

const pageDescription =
  "AI video creation, product videos, promotional content and creative production for businesses targeting Virar. Explore AI-assisted video and visual storytelling services by Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "AI video services in Virar",
    "AI video production in Virar",
    "AI video creation in Virar",
    "AI video agency in Virar",
    "AI video company in Virar",
    "AI video and creative services in Virar",
    "AI creative agency in Virar",
    "AI-assisted video production",
    "AI-powered video creation",
    "AI product videos in Virar",
    "AI product video production",
    "product video production in Virar",
    "promotional video production in Virar",
    "AI advertising creatives",
    "video advertising creatives",
    "AI brand storytelling",
    "brand storytelling videos",
    "social media video production in Virar",
    "Instagram Reels video creation",
    "short-form video production",
    "AI explainer videos",
    "AI creative visual concepts",
    "AI-assisted visual generation",
    "motion graphics and creative videos",
    "video content for businesses in Virar",
    "creative video services for businesses",
    "AI video services in Virar East",
    "AI video services in Virar West",
    "AI video production in Vasai-Virar",
    "AI video marketing services",
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
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AI Video & Creative Services in Virar by Sharp Rays",
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
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      mainEntity: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI Video & Creative Services in Virar",
      serviceType: [
        "AI Video Creation",
        "AI-Assisted Video Production",
        "AI Product Video Production",
        "Promotional Video Production",
        "Advertising Creative Production",
        "Brand Storytelling Videos",
        "Social Media Video Production",
        "Short-Form Video Creation",
        "Explainer Video Production",
        "Creative Visual Concepts",
        "AI-Assisted Visual Generation",
      ],
      description:
        "AI-assisted video creation and creative production for businesses targeting Virar. Services include product videos, promotional videos, advertising creatives, brand storytelling, social media videos, explainer videos and creative visual concepts.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Virar, Maharashtra, India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses, retailers, real estate brands, ecommerce businesses, hospitality businesses, professional service providers, educational institutions and startups",
      },
      url: pageUrl,
      image: ogImage,
      category: "AI Video Production and Creative Services",
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
          name: "Virar",
          item: `${siteUrl}/locations/virar`,
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

export default function VirarAIVideoAndCreativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarAIVideoAndCreativePageClient />
      </main>

      <Footer />
    </>
  );
}
