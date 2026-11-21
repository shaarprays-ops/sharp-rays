
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import VCarGlowWebsiteCaseStudy from "@/components/Work/CaseStudies/VCarGlowWebsiteCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/vcarglow-website`;

const pageTitle =
  "VCarGlow Website Development Case Study | Sharp Rays";

const pageDescription =
  "Explore the VCarGlow website development project by Sharp Rays, featuring a website experience designed to present an automotive-focused brand through a clear and considered digital presence.";

const ogImage = `${siteUrl}/og/vcarglow-website-development-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "VCarGlow website development",
    "VCarGlow website",
    "VCarGlow case study",
    "automotive website development",
    "automotive website design",
    "automotive business website",
    "automotive digital presence",
    "automotive website design agency",
    "business website development",
    "website design and development",
    "Sharp Rays website development",
    "Sharp Rays case studies",
  ],

  authors: [{ name: "Sharp Rays", url: siteUrl }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",
  category: "Website Development Case Study",

  alternates: {
    canonical: pageUrl,
  },

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

  openGraph: {
    type: "article",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "VCarGlow website development case study by Sharp Rays",
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
      about: {
        "@id": `${pageUrl}#article`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      image: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      mainEntityOfPage: {
        "@id": `${pageUrl}#webpage`,
      },
      author: {
        "@type": "Organization",
        name: "Sharp Rays",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Sharp Rays",
        url: siteUrl,
      },
      about: [
        {
          "@type": "Thing",
          name: "Automotive Website Development",
        },
        {
          "@type": "Thing",
          name: "Automotive Digital Presence",
        },
        {
          "@type": "Thing",
          name: "Website Design",
        },
      ],
      articleSection: "Our Work",
      inLanguage: "en-IN",
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
          name: "Our Work",
          item: `${siteUrl}/work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "VCarGlow Website Development",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function VCarGlowWebsitePage() {
  return (
    <main>
      <Navbar />

      <VCarGlowWebsiteCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
