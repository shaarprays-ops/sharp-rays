
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasoparaAiVideoandCreativeClientPage from "@/components/Locations/Nallasopara/NallasoparaAiVideoandCreativeClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/ai-video-and-creative`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "AI Video & Creative Services in Nallasopara | Sharp Rays";

const pageDescription =
  "Explore AI video production and creative services in Nallasopara, including promotional videos, product videos, brand storytelling, social media video content, advertising creatives and AI-assisted visual concepts by Sharp Rays.";

const keywords = [
  "AI video services in Nallasopara",
  "AI video agency in Nallasopara",
  "AI video creation in Nallasopara",
  "AI promotional videos",
  "AI product videos",
  "AI brand storytelling",
  "AI social media video content",
  "AI advertising creatives",
  "AI explainer videos",
  "AI-generated creative assets",
  "AI visual concepts",
  "AI video for businesses",
  "AI video services in Nallasopara East",
  "AI video services in Nallasopara West",


];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords,
  authors: [{ name: "Sharp Rays", url: siteUrl }],
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
    ...(ogImage ? { images: [{ url: ogImage, alt: pageTitle }] } : {}),
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
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntity: { "@id": `${pageUrl}/#service` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "AI Video and Creative Services in Nallasopara",
      serviceType: [
        "AI-Assisted Promotional Videos",
        "AI Product Videos",
        "AI Brand Storytelling",
        "AI Social Media Video Content",
        "AI Advertising Creatives",
        "AI Visual Concepts and Experiments",
        "AI Explainer Videos",
        "AI-Generated Creative Assets",
        "Creative Direction and Storyboarding",
      ],
      description:
        "AI video production and creative services for businesses targeting Nallasopara East, Nallasopara West and surrounding areas. Services include AI-assisted promotional videos, product visuals, brand storytelling, social media video assets, advertising creatives, explainer videos and creative storyboarding.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "AI Video Production and Creative Services",
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
          name: "Nallasopara",
          item: `${siteUrl}/locations/nallasopara`,
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

export default function NallasoparaAIVideoCreativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasoparaAiVideoandCreativeClientPage />
      </main>
      <Footer />
    </>
  );
}
