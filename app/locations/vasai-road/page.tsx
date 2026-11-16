
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiRoadClientPage from "@/components/Locations/VasaiRoad/VasaiRaodClientPage";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/vasai-road`;

// OG image used by both Open Graph and Twitter
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-vasai-og.webp`;

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Vasai | Sharp Rays",

  description:
    "Looking for a digital marketing agency in Vasai? Sharp Rays offers SEO, website development, social media marketing and creative digital solutions for growing businesses.",

  keywords: [
    "digital marketing agency in Vasai",
    "digital marketing company in Vasai",
    "digital marketing services in Vasai",
    "digital marketing agency near Vasai",
    "digital marketing agency Vasai West",
    "digital marketing agency Vasai East",
    "SEO services in Vasai",
    "SEO agency in Vasai",
    "website development in Vasai",
    "web development company in Vasai",
    "social media marketing in Vasai",
    "social media agency in Vasai",
    "performance marketing in Vasai",
    "paid advertising services in Vasai",
    "AI video production in Vasai",
    "AI video and creative services in Vasai",
    "AI automation services in Vasai",
    "business automation in Vasai",
    "digital PR services in Vasai",
    "professional video editing in Vasai",
    "content marketing services in Vasai",
    "local SEO services in Vasai",
    "online marketing for businesses in Vasai",
    "digital marketing for small businesses in Vasai",
    "digital marketing agency in Vasai-Virar",
    "digital marketing agency near Naigaon",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: `${siteUrl}/about`,
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

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: "Digital Marketing Agency in Vasai | Sharp Rays",
    description:
      "Explore SEO, website development, social media marketing, performance marketing and AI-powered creative solutions for businesses in Vasai.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Sharp Rays digital marketing services for businesses in Vasai",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Vasai | Sharp Rays",
    description:
      "Explore SEO, websites, social media, paid campaigns and AI-powered digital solutions for Vasai businesses.",
    images: [
      {
        url: ogImage,
        alt: "Sharp Rays digital marketing services for businesses in Vasai",
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
      name: "Digital Marketing Agency in Vasai | Sharp Rays",
      description:
        "Digital marketing services for businesses in Vasai, including SEO, website development, social media marketing, performance marketing, AI automation and AI creative solutions.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
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
      name: "Digital Marketing Services in Vasai",
      serviceType: "Digital Marketing",
      description:
        "SEO, website development, social media marketing, performance marketing, AI automation and AI video and creative solutions for businesses in Vasai.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Vasai, Maharashtra, India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Search Engine Optimization",
          },
          {
            "@type": "OfferCatalog",
            name: "Website Development",
          },
          {
            "@type": "OfferCatalog",
            name: "Social Media Marketing",
          },
          {
            "@type": "OfferCatalog",
            name: "Performance Marketing",
          },
          {
            "@type": "OfferCatalog",
            name: "AI Automation",
          },
          {
            "@type": "OfferCatalog",
            name: "AI Video and Creative",
          },
        ],
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
          item: `${siteUrl}/`,
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
          name: "Vasai Road",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VasaiRoadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd,
        }}
      />

      <Navbar />
      <VasaiRoadClientPage />
      <Footer />
    </>
  );
}
