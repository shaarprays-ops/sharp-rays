
import type { Metadata } from "next";
import NaigaonPerformanceMarketingClient from "@/components/Locations/Naigaon/PerformanceMarketing/NaigaonPerformanceMarketingClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/performance-marketing`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Naigaon | Sharp Rays",

  description:
    "Performance marketing in Naigaon with Google Ads, Meta Ads, campaign strategy and conversion tracking. Plan paid campaigns with Sharp Rays.",

  keywords: [
    "performance marketing agency in Naigaon",
    "performance marketing services in Naigaon",
    "performance marketing company in Naigaon",
    "paid advertising agency in Naigaon",
    "paid media agency in Naigaon",
    "Google Ads agency in Naigaon",
    "Google Ads services in Naigaon",
    "Google Ads management in Naigaon",
    "Meta Ads agency in Naigaon",
    "Facebook Ads services in Naigaon",
    "Instagram Ads services in Naigaon",
    "Facebook and Instagram advertising",
    "paid campaign management",
    "digital advertising services in Naigaon",
    "online advertising agency in Naigaon",
    "lead generation through Google Ads",
    "lead generation through Meta Ads",
    "Google Search Ads management",
    "campaign strategy and targeting",
    "audience targeting services",
    "paid media campaign optimisation",
    "conversion tracking setup",
    "Google Ads conversion tracking",
    "landing page optimisation",
    "remarketing campaign management",
    "retargeting campaigns",
    "campaign monitoring and reporting",
    "advertising campaign management for businesses",
    "local business advertising in Naigaon",
    "real estate advertising in Naigaon",
    "ecommerce advertising services",
    "performance marketing in Naigaon East",
    "performance marketing in Naigaon West",
    "performance marketing near Naigaon Station",
    "performance marketing in Vasai Virar",
    "Sharp Rays performance marketing",
  ],

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
    type: "website",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: "Performance Marketing Agency in Naigaon | Sharp Rays",
    description:
      "Plan Google Ads and Meta Ads campaigns with relevant targeting, conversion tracking and ongoing optimisation for businesses targeting Naigaon.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Performance Marketing Agency in Naigaon - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency in Naigaon | Sharp Rays",
    description:
      "Google Ads, Meta Ads, campaign strategy and conversion tracking for businesses targeting Naigaon.",
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
      name: "Performance Marketing Agency in Naigaon | Sharp Rays",
      description:
        "Performance marketing services for businesses targeting Naigaon, including Google Ads, Meta Ads, campaign planning, audience targeting, landing-page optimisation, conversion tracking and campaign reporting.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Performance Marketing Services in Naigaon",
      serviceType: [
        "Performance Marketing",
        "Paid Media Management",
        "Google Ads Management",
        "Google Search Advertising",
        "Meta Ads Management",
        "Facebook Advertising",
        "Instagram Advertising",
        "Campaign Strategy and Audience Targeting",
        "Landing Page Optimisation",
        "Conversion Tracking",
        "Campaign Monitoring and Reporting",
      ],
      description:
        "Sharp Rays provides performance marketing services for businesses targeting Naigaon. Services include Google Ads and Meta Ads campaign planning, audience targeting, campaign setup and management, landing-page recommendations, conversion tracking, performance reviews and ongoing optimisation.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Naigaon, Maharashtra, India",
      },
      url: pageUrl,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Local businesses, real estate companies, retailers, education providers, healthcare and wellness businesses, professional services and ecommerce brands",
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
          name: "Naigaon",
          item: `${siteUrl}/locations/naigaon`,
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

export default function NaigaonPerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <NaigaonPerformanceMarketingClient />
      <Footer />
    </>
  );
}
