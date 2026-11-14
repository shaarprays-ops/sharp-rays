
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import VirarWebsiteDevelopmentPageClient from "@/components/Locations/Virar/WebsiteDevelopment/VirarWebsiteDevelopmentPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/website-development`;

const ogImage = `/og/Virar.webp`;

const pageTitle = "Website Development in Virar | Sharp Rays";

const pageDescription =
  "Website design and development for Virar businesses, including business websites, Global City real estate project websites and booking websites for Arnala stays. Build a responsive, SEO-friendly website with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "website development in Virar",
    "website development company in Virar",
    "website development agency in Virar",
    "web development company in Virar",
    "website design in Virar",
    "website design company in Virar",
    "website designer in Virar",
    "web design agency in Virar",
    "business website development in Virar",
    "business website design in Virar",
    "custom website development in Virar",
    "responsive website development",
    "SEO-friendly website development",
    "ecommerce website development in Virar",
    "real estate website development in Virar",
    "property project website development",
    "Global City real estate website",
    "website development for builders in Virar",
    "hotel website development in Virar",
    "booking website development near Arnala",
    "hospitality website development",
    "website redesign services in Virar",
    "UI UX website design in Virar",
    "professional website development",
    "small business website development",
    "website maintenance services in Virar",
    "mobile-friendly website design",
    "SEO-ready business websites",
    "website development in Virar East",
    "website development in Virar West",
    "website development in Global City",
    "website development in Vasai-Virar",
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
        alt: "Website Design and Development Services in Virar by Sharp Rays",
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
      name: "Website Design and Development Services in Virar",
      serviceType: [
        "Website Design",
        "Website Development",
        "Business Website Development",
        "Custom Website Development",
        "Responsive Website Design",
        "UI/UX Design",
        "SEO-Friendly Website Development",
        "E-commerce Website Development",
        "Real Estate Website Development",
        "Property Project Website Development",
        "Hotel and Hospitality Website Development",
        "Booking Website Development",
        "Professional Service Website Development",
        "Website Redesign",
        "Website Maintenance",
      ],
      description:
        "Website design and development services for businesses targeting Virar. Services include business websites, custom development, responsive design, SEO-friendly foundations, e-commerce websites, real estate project websites, hospitality and booking websites, and website maintenance.",
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
          "Real estate developers, hotels and hospitality businesses, retailers, local shops, professional service providers, educational institutions, healthcare and wellness businesses, and growing companies",
      },
      url: pageUrl,
      image: ogImage,
      category: "Website Design and Development Services",
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
          name: "Website Development",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VirarWebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarWebsiteDevelopmentPageClient />
      </main>

      <Footer />
    </>
  );
}
