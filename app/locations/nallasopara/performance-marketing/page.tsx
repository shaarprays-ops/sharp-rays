
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasoparaPerformanceMarketingClientPage from "@/components/Locations/Nallasopara/NallasoparaPerformanceMarketingClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/performance-marketing`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "Performance Marketing Agency in Nallasopara | Sharp Rays";

const pageDescription =
  "Reach relevant audiences with performance marketing services in Nallasopara. Sharp Rays offers Google Ads, Meta Ads, lead generation campaigns, remarketing, landing page optimisation and campaign tracking.";

const keywords = [
  "performance marketing agency in Nallasopara",
  "performance marketing services in Nallasopara",
  "digital advertising agency in Nallasopara",
  "paid media agency in Nallasopara",
  "Google Ads agency in Nallasopara",
  "Google Ads management in Nallasopara",
  "Meta Ads agency in Nallasopara",
  "Facebook Ads management in Nallasopara",
  "Instagram Ads management in Nallasopara",
  "YouTube Ads services",
  "lead generation campaigns in Nallasopara",
  "paid social media advertising",
  "search advertising services",
  "remarketing and retargeting",
  "landing page optimisation",
  "conversion tracking services",
  "campaign analytics and reporting",
  "performance marketing in Nallasopara East",
  "performance marketing in Nallasopara West",
  "digital advertising near Tulinj Road",
  "Sharp Rays performance marketing",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords,
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
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Sharp Rays",
    locale: "en_IN",
    type: "website",
    ...(ogImage ? { images: [{ url: ogImage, alt: pageTitle }] } : {}),
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
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntity: { "@id": `${pageUrl}/#service` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Performance Marketing Services in Nallasopara",
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
        "Performance marketing and paid media services for businesses targeting Nallasopara East, Nallasopara West and surrounding areas. Services include Google Ads, Meta advertising, lead generation, search campaigns, social media advertising, remarketing, landing page recommendations, conversion tracking and campaign analysis.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "Performance Marketing and Paid Media",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
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
          name: "Nallasopara",
          item: `${siteUrl}/locations/nallasopara`,
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

export default function NallasoparaPerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasoparaPerformanceMarketingClientPage />
      </main>
      <Footer />
    </>
  );
}
