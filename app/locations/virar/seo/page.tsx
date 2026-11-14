
import type { Metadata } from "next";

import VirarSEOPageClient from "@/components/Locations/Virar/SEO/VirarSEOPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/seo`;

const ogImage = `/og/Virar.webp`;

const pageTitle = "SEO Services in Virar | Local SEO & Maps | Sharp Rays";

const pageDescription =
  "SEO services for Virar businesses, including local SEO, Google Maps optimisation, keyword research, technical SEO and content improvements. Build a search strategy for your target customers with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "SEO services in Virar",
    "SEO agency in Virar",
    "SEO company in Virar",
    "SEO consultant in Virar",
    "SEO expert in Virar",
    "local SEO services in Virar",
    "local SEO agency in Virar",
    "Google Maps SEO in Virar",
    "Google Business Profile optimisation in Virar",
    "Google Maps ranking services in Virar",
    "keyword research services in Virar",
    "technical SEO services in Virar",
    "on-page SEO services in Virar",
    "content SEO services in Virar",
    "website SEO optimisation in Virar",
    "SEO audit services in Virar",
    "SEO strategy for local businesses",
    "local business SEO in Virar",
    "SEO for shops in Virar West",
    "SEO for businesses in Global City Virar",
    "SEO for tourism businesses in Agashi",
    "SEO for hospitality businesses in Arnala",
    "tourism SEO in Virar",
    "hospitality SEO in Virar",
    "Google Search Console SEO",
    "website indexing optimisation",
    "SEO content strategy",
    "organic search optimisation",
    "SEO services in Virar East",
    "SEO services in Virar West",
    "SEO services in Vasai-Virar",
    "digital marketing agency in Virar",
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
        alt: "SEO Services in Virar by Sharp Rays",
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
      name: "SEO Services in Virar",
      serviceType: [
        "Search Engine Optimisation",
        "Local SEO",
        "Google Maps Optimisation",
        "Google Business Profile Optimisation",
        "Keyword Research",
        "Technical SEO",
        "On-Page SEO",
        "Content SEO",
        "SEO Monitoring and Reporting",
        "Website Structure Optimisation",
        "Local Landing Page Optimisation",
      ],
      description:
        "SEO services for businesses targeting Virar, including local SEO, Google Maps optimisation guidance, keyword research, technical SEO, on-page optimisation, content improvements and SEO monitoring. Strategies can be tailored to relevant business audiences and genuine service coverage.",
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
          "Local shops, retailers, real estate businesses, restaurants, tourism and hospitality businesses, professional service providers and startups",
      },
      url: pageUrl,
      image: ogImage,
      category: "Search Engine Optimisation Services",
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
          name: "SEO Services",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VirarSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarSEOPageClient />
      </main>

      <Footer />
    </>
  );
}
