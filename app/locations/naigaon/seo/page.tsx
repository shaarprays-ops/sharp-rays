
import type { Metadata } from "next";

import NaigaonSEOPageClient from "@/components/Locations/Naigaon/SEO/NaigaonSEOPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/seo`;

// Add your actual OG image URL here after creating the image.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "SEO Services in Naigaon | Local SEO & Maps | Sharp Rays",

  description:
    "SEO and Google Maps optimisation for Naigaon businesses. Improve local search visibility with keyword research, technical SEO and website optimisation.",

  keywords: [
    "SEO services in Naigaon",
    "SEO agency in Naigaon",
    "SEO company in Naigaon",
    "SEO consultant in Naigaon",
    "SEO expert in Naigaon",
    "local SEO services in Naigaon",
    "local SEO agency in Naigaon",
    "Google Maps SEO in Naigaon",
    "Google Business Profile optimisation in Naigaon",
    "Google Business Profile optimization in Naigaon",
    "technical SEO services in Naigaon",
    "on-page SEO services in Naigaon",
    "off-page SEO services in Naigaon",
    "keyword research services in Naigaon",
    "content SEO services in Naigaon",
    "website SEO optimisation in Naigaon",
    "website SEO optimization in Naigaon",
    "SEO audit services in Naigaon",
    "local search optimisation in Naigaon",
    "local search optimization in Naigaon",
    "SEO for small businesses in Naigaon",
    "SEO for local businesses in Naigaon",
    "SEO for real estate businesses in Naigaon",
    "website indexing services",
    "website technical SEO audit",
    "SEO services near Naigaon Station",
    "SEO services in Naigaon East",
    "SEO services in Naigaon West",
    "SEO services in Juchandra",
    "SEO services in Chandrapada",
    "SEO agency in Vasai-Virar",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: "SEO Services in Naigaon | Local SEO & Maps | Sharp Rays",
    description:
      "Improve local search visibility with local SEO, Google Maps optimisation, keyword research, technical SEO, on-page optimisation and content strategy in Naigaon.",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "SEO Services in Naigaon by Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Naigaon | Local SEO & Maps | Sharp Rays",
    description:
      "Local SEO, Google Maps optimisation, technical SEO and website optimisation for businesses in Naigaon.",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              alt: "SEO Services in Naigaon by Sharp Rays",
            },
          ],
        }
      : {}),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "SEO Services in Naigaon | Local SEO & Maps | Sharp Rays",
      description:
        "SEO services in Naigaon, including local SEO, Google Business Profile optimisation, keyword research, technical SEO, on-page optimisation, content strategy and SEO reporting.",
      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${pageUrl}#service`,
      },

      author: {
        "@id": `${siteUrl}/#organization`,
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
      name: "SEO Services in Naigaon",
      serviceType: [
        "Local SEO",
        "Google Business Profile Optimisation",
        "Keyword Research",
        "Technical SEO",
        "On-Page SEO",
        "Content Strategy",
        "Local Landing Page Optimisation",
        "SEO Reporting",
      ],
      description:
        "Search engine optimisation services for businesses targeting Naigaon, including local search optimisation, keyword research, technical website improvements, on-page optimisation, content strategy and organic performance monitoring.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Naigaon, Maharashtra, India",
        },
        {
          "@type": "Place",
          name: "Juchandra, Maharashtra, India",
        },
        {
          "@type": "Place",
          name: "Chandrapada, Maharashtra, India",
        },
        {
          "@type": "Place",
          name: "Naigaon West, Maharashtra, India",
        },
      ],
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
          name: "Naigaon",
          item: `${siteUrl}/locations/naigaon`,
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

export default function NaigaonSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd,
        }}
      />

      <Navbar />
      <NaigaonSEOPageClient />
      <Footer />
    </>
  );
}
