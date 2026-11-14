
import type { Metadata } from "next";

import BhayandarWebDevPageClient from "@/components/Locations/Bhayandar/WebsiteDevelopment/BhayandarWebDevPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar/website-development`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "Website Development in Bhayandar | Sharp Rays";

const pageDescription =
  "Website design and development in Bhayandar for business, industrial and hospitality websites. Build responsive, SEO-aware websites for Navghar industrial businesses, Uttan Road resorts and local businesses with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,

  description: pageDescription,

  keywords: [
    "website development in Bhayandar",
    "website development company in Bhayandar",
    "website development agency in Bhayandar",
    "website design company in Bhayandar",
    "web design services in Bhayandar",
    "web development services in Bhayandar",
    "website designer in Bhayandar",
    "business website development",
    "business website design",
    "custom website development",
    "responsive website development",
    "SEO-friendly website development",
    "professional website design",
    "company website development",
    "industrial website development",
    "B2B website development",
    "manufacturing website design",
    "website development for industrial businesses",
    "hospitality website development",
    "resort website development",
    "hotel website design",
    "ecommerce website development",
    "online store development",
    "website redesign services",
    "website improvement services",
    "UI UX design services",
    "mobile-friendly website design",
    "SEO-aware website development",
    "website maintenance services",
    "website development for local businesses",
    "website development in Bhayandar West",
    "website development in Bhayandar East",
    "website development for Navghar industrial units",
    "website development for Uttan Road resorts",
    "Sharp Rays website development",
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
              alt: "Website Development in Bhayandar - Sharp Rays",
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
      name: "Website Design & Development Services in Bhayandar",
      serviceType: [
        "Website Development",
        "Website Design",
        "Custom Website Development",
        "Business Website Development",
        "UI/UX Design",
        "Industrial Website Development",
        "B2B Website Development",
        "Hospitality Website Development",
        "Resort Website Development",
        "Ecommerce Website Development",
        "Website Redesign",
        "Responsive Website Development",
        "SEO-Friendly Website Development",
      ],
      description:
        "Website design and development services for Bhayandar businesses, including business websites, custom UI/UX design, industrial and B2B websites, hospitality and resort websites, ecommerce development and website redesign.",
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
          "Industrial and manufacturing businesses, hospitality and resort businesses, retail businesses, local service providers, professional services and ecommerce businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Development Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Launch Website Package",
            price: "9999",
            priceCurrency: "INR",
            description:
              "Monthly website development package for businesses with basic website requirements. Refer to the pricing page for complete inclusions and terms.",
          },
          {
            "@type": "Offer",
            name: "Growth Website Package",
            price: "14999",
            priceCurrency: "INR",
            description:
              "Monthly website development package for businesses with broader website requirements. Refer to the pricing page for complete inclusions and terms.",
          },
          {
            "@type": "Offer",
            name: "Scale Website Package",
            price: "24999",
            priceCurrency: "INR",
            description:
              "Monthly website development package for businesses with more extensive website requirements. Refer to the pricing page for complete inclusions and terms.",
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
          name: "Website Development",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BhayandarWebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarWebDevPageClient />
      </main>

      <Footer />
    </>
  );
}
