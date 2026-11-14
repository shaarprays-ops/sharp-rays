
import type { Metadata } from "next";

import BhayandarSEOPageClient from "@/components/Locations/Bhayandar/SEO/BhayandarSEOPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar/seo`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "SEO Services in Bhayandar | Local SEO & Maps | Sharp Rays";

const pageDescription =
  "SEO services in Bhayandar for better local search visibility, Google Business Profile optimisation, technical SEO and content optimisation. Explore SEO strategies for Bhayandar West, Uttan Road and Navghar with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "SEO services in Bhayandar",
    "SEO agency in Bhayandar",
    "SEO company in Bhayandar",
    "SEO expert in Bhayandar",
    "SEO consultant in Bhayandar",
    "local SEO services in Bhayandar",
    "local SEO agency in Bhayandar",
    "Google Maps SEO in Bhayandar",
    "Google Business Profile optimisation in Bhayandar",
    "Google Business Profile SEO",
    "Google Maps optimisation",
    "website SEO services in Bhayandar",
    "technical SEO in Bhayandar",
    "on-page SEO services",
    "content SEO services",
    "keyword research services",
    "SEO audit services",
    "website optimisation",
    "search engine optimisation services",
    "local keyword research",
    "local business SEO",
    "SEO for retail businesses",
    "SEO for restaurants",
    "SEO for manufacturing businesses",
    "industrial SEO services",
    "B2B SEO services",
    "SEO for real estate businesses",
    "SEO for healthcare businesses",
    "SEO for professional services",
    "SEO in Bhayandar West",
    "local SEO in Bhayandar West",
    "SEO for Uttan Road businesses",
    "SEO for restaurants near Uttan Road",
    "SEO for Navghar businesses",
    "SEO for industrial units in Navghar",
    "Sharp Rays SEO services",
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
              alt: "SEO Services in Bhayandar - Sharp Rays",
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
      name: "SEO Services in Bhayandar",
      serviceType: [
        "Search Engine Optimization",
        "Local SEO",
        "Google Business Profile Optimisation",
        "Google Maps Optimisation",
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content SEO",
        "SEO Monitoring",
        "Website Optimisation",
        "Local Search Optimisation",
      ],
      description:
        "SEO services for Bhayandar businesses, including local SEO, Google Business Profile optimisation, on-page SEO, technical SEO, content optimisation, keyword research and organic search performance monitoring.",
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
          "Retail businesses, restaurants and eateries, manufacturing and industrial businesses, healthcare and wellness providers, real estate businesses, education and coaching businesses, professional services and local businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter SEO",
            price: "14999",
            priceCurrency: "INR",
            description:
              "Starting SEO package including initial SEO review, keyword research, on-page optimisation, technical SEO checks and performance monitoring.",
          },
          {
            "@type": "Offer",
            name: "Growth SEO",
            price: "24999",
            priceCurrency: "INR",
            description:
              "Starting SEO package including Starter features, expanded keyword targeting, content optimisation, local SEO improvements and Google Business Profile guidance.",
          },
          {
            "@type": "Offer",
            name: "Scale SEO",
            price: "39999",
            priceCurrency: "INR",
            description:
              "Starting SEO package including Growth features, broader content planning, advanced technical review, expanded landing-page strategy and ongoing SEO recommendations.",
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
          name: "SEO Services",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BhayandarSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarSEOPageClient />
      </main>

      <Footer />
    </>
  );
}
