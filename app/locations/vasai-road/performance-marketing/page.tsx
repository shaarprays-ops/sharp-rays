
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiPerformanceMarketingPageClient from "@/components/Locations/VasaiRoad/VasaiPerformanceMarketingPageClient";
import type { Metadata } from "next";

const pageUrl =
  "https://www.sharprays.com/locations/vasai-road/performance-marketing";

const ogImage =
  "https://www.sharprays.com/og/digital-marketing-agency-in-vasai-og.webp";

export const metadata: Metadata = {
  title: "Performance Marketing in Vasai | Sharp Rays",

  description:
    "Performance marketing in Vasai by Sharp Rays. Explore Google Ads, Meta Ads, lead generation, remarketing and campaign optimisation for businesses.",

  keywords: [
    "performance marketing in Vasai",
    "performance marketing agency in Vasai",
    "performance marketing services in Vasai",
    "performance marketing company in Vasai",
    "digital advertising agency in Vasai",
    "paid media agency in Vasai",
    "paid advertising services in Vasai",
    "Google Ads management in Vasai",
    "Google Ads agency in Vasai",
    "Google Ads services in Vasai",
    "Meta Ads management in Vasai",
    "Facebook Ads agency in Vasai",
    "Instagram Ads agency in Vasai",
    "social media advertising in Vasai",
    "lead generation services in Vasai",
    
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
    title: "Performance Marketing in Vasai | Sharp Rays",
    description:
      "Reach relevant audiences with Google Ads, Meta Ads, lead generation campaigns and performance-focused digital advertising in Vasai.",
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Performance Marketing Services in Vasai by Sharp Rays",
     
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing in Vasai | Sharp Rays",
    description:
      "Google Ads, Meta Ads, lead generation and campaign optimisation for businesses in Vasai.",
    images: [
      {
        url: ogImage,
        alt: "Performance Marketing Services in Vasai by Sharp Rays",
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
      name: "Performance Marketing in Vasai | Sharp Rays",
      description:
        "Performance marketing services in Vasai, including Google Ads, Meta Ads, search advertising, lead generation, remarketing, landing page optimisation and campaign analytics.",
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
      name: "Performance Marketing Services in Vasai",
      serviceType: [
        "Google Ads Management",
        "Meta Ads Management",
        "Lead Generation Campaigns",
        "Search Advertising",
        "Social Media Advertising",
        "Remarketing and Retargeting",
        "Landing Page and Conversion Optimisation",
        "Campaign Analytics and Reporting",
      ],
      description:
        "Performance marketing and paid media services for businesses, covering campaign planning, audience targeting, advertising creatives, conversion tracking and ongoing campaign optimisation.",
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
          name: "Performance Marketing",
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
      <VasaiPerformanceMarketingPageClient />
      <Footer />
    </>
  );
}
