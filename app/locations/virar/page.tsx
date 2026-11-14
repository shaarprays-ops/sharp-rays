
import type { Metadata } from "next";

import VirarClientPage from "@/components/Locations/Virar/VirarClientPage";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar`;

const ogImage = `/og/Virar.webp`;

const pageTitle = "Digital Marketing Agency in Virar | Sharp Rays";

const pageDescription =
  "Sharp Rays helps businesses in Virar grow online with SEO, website development, social media marketing, performance marketing, AI video and creative services, and AI automation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "digital marketing agency in Virar",
    "digital marketing company in Virar",
    "digital marketing services in Virar",
    "digital marketing agency near Virar station",
    "digital marketing in Virar",
    "SEO services in Virar",
    "SEO agency in Virar",
    "website development in Virar",
    "website design company in Virar",
    "social media marketing in Virar",
    "social media management in Virar",
    "performance marketing in Virar",
    "Google Ads agency in Virar",
    "Meta Ads management in Virar",
    "AI video services in Virar",
    "AI video production in Virar",
    "AI automation services in Virar",
    "digital marketing for local businesses in Virar",
    "digital marketing for shops in Virar",
    "digital marketing for real estate in Virar",
    "digital marketing for restaurants in Virar",
    "digital marketing for professional services in Virar",
    "digital marketing for startups in Virar",
    "digital marketing agency in Virar East",
    "digital marketing agency in Virar West",
    "digital marketing services in Global City Virar",
    "digital marketing for businesses near Jivdani Temple",
    "digital marketing agency in Vasai-Virar",
    "website and SEO services in Virar",
    "online marketing services in Virar",
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
        alt: "Digital Marketing Agency in Virar - Sharp Rays",
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
      name: "Digital Marketing Services in Virar",
      serviceType: [
        "Digital Marketing",
        "Search Engine Optimisation",
        "Website Design and Development",
        "Social Media Marketing",
        "Performance Marketing",
        "Paid Media Management",
        "AI Video and Creative Services",
        "AI Automation",
      ],
      description:
        "Digital marketing services for businesses targeting Virar. Sharp Rays offers SEO, website development, social media marketing, performance marketing, AI video and creative services, and AI automation. Service recommendations are planned around business goals, target audiences and genuine service coverage.",
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
          "Retail and local shops, real estate and property businesses, professional services, restaurants and hospitality businesses, education and coaching providers, and growing startups",
      },
      url: pageUrl,
      image: ogImage,
      category: "Digital Marketing Services",
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
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VirarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarClientPage />
      </main>

      <Footer />
    </>
  );
}
