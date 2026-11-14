
import type { Metadata } from "next";

import BhayandarPerformanceMarketingPageClient from "@/components/Locations/Bhayandar/PerformanceMarketing/BhayandarPerformanceMarketingPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar/performance-marketing`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "Performance Marketing Agency in Bhayandar | Sharp Rays";

const pageDescription =
  "Performance marketing services in Bhayandar with Google Ads, Meta Ads, lead generation, remarketing, campaign optimisation and conversion tracking. Plan measurable advertising campaigns with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "performance marketing agency in Bhayandar",
    "performance marketing services in Bhayandar",
    "performance marketing company in Bhayandar",
    "digital advertising agency in Bhayandar",
    "paid media agency in Bhayandar",
    "paid advertising services in Bhayandar",
    "Google Ads agency in Bhayandar",
    "Google Ads management in Bhayandar",
    "Google Search Ads in Bhayandar",
    "Google Display Ads in Bhayandar",
    "Meta Ads agency in Bhayandar",
    "Facebook Ads management in Bhayandar",
    "Instagram Ads management in Bhayandar",
    "lead generation services in Bhayandar",
    "lead generation campaigns",
    "paid campaign management",
    "online advertising services",
    "remarketing campaigns",
    "retargeting campaigns",
    "audience targeting",
    "keyword research for Google Ads",
    "campaign strategy",
    "campaign optimisation",
    "conversion tracking",
    "advertising performance reporting",
    "Google advertising services",
    "Facebook and Instagram advertising",
    "real estate lead generation",
    "local business advertising",
    "ecommerce advertising campaigns",
    "B2B advertising campaigns",
    "performance marketing in Bhayandar West",
    "performance marketing in Bhayandar East",
    "paid advertising near Navghar",
    "Sharp Rays performance marketing",
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
              alt: "Performance Marketing Agency in Bhayandar - Sharp Rays",
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
      name: "Performance Marketing Services in Bhayandar",
      serviceType: [
        "Performance Marketing",
        "Paid Media Management",
        "Google Ads Management",
        "Google Search Advertising",
        "Google Display Advertising",
        "Meta Ads Management",
        "Facebook Advertising",
        "Instagram Advertising",
        "Lead Generation Campaigns",
        "Remarketing Campaigns",
        "Campaign Optimisation",
        "Conversion Tracking",
        "Advertising Performance Reporting",
      ],
      description:
        "Performance marketing services for businesses targeting Bhayandar, including Google Ads, Meta Ads, lead generation campaigns, remarketing, audience targeting, campaign optimisation, conversion tracking and performance reporting.",
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
          "Retail businesses, real estate businesses, hospitality businesses, industrial and manufacturing companies, ecommerce businesses, healthcare and wellness providers, educational institutions, professional services and startups",
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
          name: "Performance Marketing",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BhayandarPerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarPerformanceMarketingPageClient />
      </main>

      <Footer />
    </>
  );
}
