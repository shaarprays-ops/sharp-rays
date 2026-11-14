
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import VirarPerformanceMarketingPageClient from "@/components/Locations/Virar/PerformanceMarketing/VirarPerformanceMarketingPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/performance-marketing`;

const ogImage = `/og/Virar.webp`;

const pageTitle = "Performance Marketing in Virar | Sharp Rays";

const pageDescription =
  "Performance marketing services in Virar with Google Ads, Meta Ads, campaign strategy, audience targeting and conversion tracking. Plan and optimise paid campaigns with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "performance marketing in Virar",
    "performance marketing agency in Virar",
    "performance marketing company in Virar",
    "paid advertising agency in Virar",
    "paid media services in Virar",
    "digital advertising in Virar",
    "Google Ads agency in Virar",
    "Google Ads management in Virar",
    "Google Search Ads in Virar",
    "Meta Ads agency in Virar",
    "Facebook Ads management in Virar",
    "Instagram Ads management in Virar",
    "social media advertising in Virar",
    "paid campaign management in Virar",
    "online advertising services in Virar",
    "lead generation campaigns in Virar",
    "campaign strategy and planning",
    "audience targeting for advertising",
    "local advertising campaigns in Virar",
    "Google Ads campaign optimisation",
    "Meta Ads campaign optimisation",
    "landing page optimisation",
    "conversion tracking services",
    "remarketing campaigns",
    "retargeting campaigns",
    "paid advertising for real estate",
    "Google Ads for local businesses",
    "Facebook and Instagram advertising",
    "performance marketing in Virar East",
    "performance marketing in Virar West",
    "paid advertising in Global City Virar",
    "digital marketing services in Virar",
    "performance marketing in Vasai-Virar",
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
        alt: "Performance Marketing Services in Virar by Sharp Rays",
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
      name: "Performance Marketing Services in Virar",
      serviceType: [
        "Performance Marketing",
        "Paid Media Management",
        "Google Ads Management",
        "Google Search Advertising",
        "Meta Ads Management",
        "Facebook Advertising",
        "Instagram Advertising",
        "Campaign Strategy and Planning",
        "Audience and Location Targeting",
        "Landing Page Optimisation",
        "Conversion Tracking",
        "Campaign Monitoring and Reporting",
        "Remarketing and Retargeting",
      ],
      description:
        "Performance marketing and paid advertising services for businesses targeting Virar. Services include Google Search Ads, Facebook and Instagram Ads, campaign planning, audience targeting, landing page optimisation, conversion tracking, campaign monitoring and reporting.",
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
          "Businesses, real estate companies, retailers, educational institutions, healthcare and wellness providers, professional services and ecommerce brands",
      },
      url: pageUrl,
      image: ogImage,
      category: "Performance Marketing and Paid Advertising",
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
          name: "Performance Marketing",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VirarPerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarPerformanceMarketingPageClient />
      </main>

      <Footer />
    </>
  );
}
