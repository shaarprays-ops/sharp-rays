
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiSEOPageClient from "@/components/Locations/VasaiRoad/VasaiSeoPageClient.tsx/page";
import type { Metadata } from "next";

const pageUrl =
  "https://www.sharprays.com/locations/vasai-road/seo";

const ogImage =
  "https://www.sharprays.com/og/digital-marketing-agency-in-vasai-og.webp";

export const metadata: Metadata = {
  title: "SEO Services in Vasai | Local SEO & Maps | Sharp Rays",

  description:
    "SEO services in Vasai for better Google visibility. Explore local SEO, Google Maps optimization, technical SEO and product SEO with Sharp Rays.",

  keywords: [
    "SEO services in Vasai",
    "SEO agency in Vasai",
    "SEO company in Vasai",
    "SEO consultant in Vasai",
    "SEO expert in Vasai",
    "local SEO services in Vasai",
    "local SEO agency in Vasai",
    "Google Maps SEO in Vasai",
    "Google Business Profile optimization in Vasai",
    "technical SEO services in Vasai",
    "on-page SEO services in Vasai",
   

    "industrial SEO in Vasai",
    "SEO services in Vasai West",
    "SEO services in Vasai East",
    "SEO agency in Vasai-Virar",
    "SEO services near Naigaon",
    "SEO for local businesses in Vasai",
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
    title: "SEO Services in Vasai | Local SEO & Maps | Sharp Rays",
    description:
      "Improve your organic search visibility with local SEO, Google Maps optimization, technical SEO, keyword research, content SEO and product SEO in Vasai.",
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SEO Services in Vasai by Sharp Rays",
    
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Vasai | Local SEO & Maps | Sharp Rays",
    description:
      "Local SEO, Google Maps optimization, technical SEO and product SEO services for businesses in Vasai.",
    images: [
      {
        url: ogImage,
        alt: "SEO Services in Vasai by Sharp Rays",
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
      name: "SEO Services in Vasai | Local SEO & Maps | Sharp Rays",
      description:
        "SEO services in Vasai covering local SEO, Google Business Profile optimization, technical SEO, on-page SEO, keyword research, content SEO, product SEO and SEO performance monitoring.",
      url: pageUrl,
      inLanguage: "en-IN",
      author: {
        "@id": "https://www.sharprays.com/#organization",
      },
      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },
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
      name: "SEO Services in Vasai",
      serviceType: [
        "Local SEO",
        "Google Business Profile Optimization",
        "Technical SEO",
        "On-Page SEO",
        "Keyword Research",
        "Content SEO",
        "Product SEO",
        "SEO Performance Monitoring",
      ],
      description:
        "Search engine optimization services for businesses in Vasai, including organic search strategy, local search optimization, technical website improvements, content optimization and product page SEO.",
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
          name: "SEO Services",
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
      <VasaiSEOPageClient />
      <Footer />
    </>
  );
}
