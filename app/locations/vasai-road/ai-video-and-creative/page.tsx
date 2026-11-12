
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiAIVideoCreativePageClient from "@/components/Locations/VasaiRoad/VasaiAiVideoAndCreativePageClient";
import type { Metadata } from "next";

const pageUrl =
  "https://www.sharprays.com/locations/vasai-road/ai-video-and-creative";

const ogImage =
  "https://www.sharprays.com/og/digital-marketing-agency-in-vasai-og.webp";

export const metadata: Metadata = {
  title: "AI Video Production in Vasai | Sharp Rays",

  description:
    "AI video production and creative services in Vasai by Sharp Rays. Explore AI product videos, ad creatives, explainer videos, brand storytelling and social media content.",
keywords: [
  "AI video production in Vasai",
  "AI video production agency in Vasai",
  "AI video services in Vasai",
  "AI video creation in Vasai",
  "AI video and creative services in Vasai",
  "AI creative agency in Vasai",
  "AI product videos",
  "AI product video production",
  "AI advertising creatives",
  "AI video ads",
  "AI explainer videos",
  "AI brand storytelling",
  "AI social media creatives",
  "AI Instagram Reels creation",
  "AI-generated marketing videos",
  "AI-assisted video production",
  "AI visual content creation",
  "AI video marketing services",
 
  "AI video services in Vasai West",
  "AI video services in Vasai East",
  "AI video production in Vasai-Virar",

],
   

  authors: [
    {
      name: "Sharp Rays",
      url: "https://www.sharprays.com/about",
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
    type: "website",
    url: pageUrl,
    title: "AI Video Production in Vasai | Sharp Rays",
    description:
      "Explore AI-assisted video production, product videos, advertising creatives, explainer videos and visual storytelling for businesses in Vasai.",
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AI Video Production and Creative Services in Vasai by Sharp Rays",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Video Production in Vasai | Sharp Rays",
    description:
      "AI-assisted video production, product videos, ad creatives and visual storytelling for Vasai businesses.",
    images: [
      {
        url: ogImage,
        alt: "AI Video Production and Creative Services in Vasai by Sharp Rays",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "AI Video Production in Vasai | Sharp Rays",
      description:
        "AI video production and creative services for businesses in Vasai, including AI-assisted video creation, product videos, advertising creatives, explainers and brand storytelling.",
      url: pageUrl,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": "https://www.sharprays.com/#website",
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI Video and Creative Services in Vasai",
      serviceType: [
        "AI Video Creation",
        "AI Product Videos",
        "AI Advertising Creatives",
        "AI Explainer Videos",
        "AI-Powered Brand Storytelling",
        "AI Social Media Creatives",
        "AI Visual Concepts and Creative Experiments",
        "AI-Assisted Marketing Content",
      ],
      description:
        "AI-assisted video production and creative services for businesses, including product storytelling, promotional videos, advertising concepts, explainer videos, brand storytelling and social media creatives.",
      provider: {
        "@id": "https://www.sharprays.com/#organization",
      },
      areaServed: {
        "@type": "Place",
        name: "Vasai, Maharashtra, India",
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sharprays.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.sharprays.com/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vasai",
          item: "https://www.sharprays.com/locations/vasai-road",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Video and Creative",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />
      <VasaiAIVideoCreativePageClient />
      <Footer />
    </>
  );
}
