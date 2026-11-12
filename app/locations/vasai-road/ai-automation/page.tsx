
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiAIAutomationPageClient from "@/components/Locations/VasaiRoad/VasaiAiAutomationPageClient";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";

const pageUrl = `${siteUrl}/locations/vasai-road/ai-automation`;

const ogImage = `${siteUrl}/og/digital-marketing-agency-in-vasai-og.webp`;

const pageTitle = "AI Automation Services in Vasai | Sharp Rays";

const pageDescription =
  "AI automation services in Vasai from Sharp Rays. Explore workflow automation, lead management, customer enquiry automation and AI-assisted business processes.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,
  keywords: [
  "AI video production in Vasai",
  "AI video production agency in Vasai",
  "AI video services in Vasai",
  "AI video creation in Vasai",
  "AI video and creative services",
  "AI product videos",
  "AI advertising creatives",
  "AI explainer videos",
  "AI brand storytelling",
  "AI social media creatives",
  "AI-generated marketing videos",
  "AI video content for businesses",
  "AI creative agency in Vasai",
  "AI video marketing services",
  "AI video production for businesses",
  "AI video services in Vasai West",
  "AI video services in Vasai East",
  "AI video production near Vasai",
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
        alt: "AI Automation Services in Vasai by Sharp Rays",
     
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        alt: "AI Automation Services in Vasai by Sharp Rays",
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
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI Automation Services in Vasai",
      serviceType: [
        "Workflow Automation",
        "Lead Management Automation",
        "Customer Enquiry Automation",
        "AI-Assisted Customer Support",
        "Data Entry and Information Processing",
        "Email and Communication Automation",
        "Marketing Workflow Automation",
        "AI-Powered Business Workflows",
      ],
      description:
        "Sharp Rays helps businesses in Vasai identify repetitive tasks and explore practical workflow automation and AI-assisted processes for enquiry handling, lead organisation, information processing and business coordination.",
      provider: {
        "@id": `${siteUrl}/#organization`,
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
          name: "Vasai",
          item: `${siteUrl}/locations/vasai-road`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Automation",
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

      <VasaiAIAutomationPageClient />

      <Footer />
    </>
  );
}
