
import type { Metadata } from "next";
import BhayandarPageClient from "@/components/Locations/Bhayandar/BhayandarPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar`;
const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "Digital Marketing Agency in Bhayandar | Sharp Rays";

const pageDescription =
  "Explore digital marketing services in Bhayandar, including SEO, website development, social media marketing, performance marketing, AI video and AI automation by Sharp Rays.";

const keywords = [
  "digital marketing agency in Bhayandar",
  "digital marketing company in Bhayandar",
  "digital marketing services in Bhayandar",
  "SEO services in Bhayandar",
  "SEO company in Bhayandar",
  "website development in Bhayandar",
  "website design company in Bhayandar",
  "social media marketing in Bhayandar",
  "performance marketing in Bhayandar",
  "Google Ads agency in Bhayandar",
  "AI video services in Bhayandar",
  "AI automation services in Bhayandar",
  "digital marketing agency in Bhayandar East",
  "digital marketing agency in Bhayandar West",
  "Sharp Rays",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords,

  authors: [{ name: "Sharp Rays" }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      mainEntity: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Digital Marketing Services in Bhayandar",
      serviceType: "Digital Marketing",
      description:
        "Digital marketing services for businesses targeting Bhayandar, Maharashtra, including search engine optimization, website development, social media marketing, performance marketing, AI video and creative services, and AI automation.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Bhayandar, Maharashtra, India",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Maharashtra",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Social Media Marketing",
            itemListElement: [
              {
                "@type": "Service",
                name: "Social Media Marketing",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Search Engine Optimization",
            itemListElement: [
              {
                "@type": "Service",
                name: "Search Engine Optimization (SEO)",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Performance Marketing",
            itemListElement: [
              {
                "@type": "Service",
                name: "Performance Marketing / Paid Media",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Website Development",
            itemListElement: [
              {
                "@type": "Service",
                name: "Website Development & Management",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Video & Creative",
            itemListElement: [
              {
                "@type": "Service",
                name: "AI Video and Creative",
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Automation",
            itemListElement: [
              {
                "@type": "Service",
                name: "AI Automation",
              },
            ],
          },
        ],
      },
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
          name: "Bhayandar",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BhayandarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarPageClient />
      </main>

      <Footer />
    </>
  );
}
