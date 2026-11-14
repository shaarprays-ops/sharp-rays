
import type { Metadata } from "next";

import NaigaonPageClient from "@/components/Locations/Naigaon/NaigaonPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon`;

// Add the exact URL of your existing Naigaon OG image here
// once the image has been created and uploaded.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Naigaon | Sharp Rays",

  description:
    "Digital marketing in Naigaon by Sharp Rays: SEO, website development, social media, performance marketing, digital PR, video, content and AI automation.",

  keywords: [
    "digital marketing agency in Naigaon",
    "digital marketing company in Naigaon",
    "digital marketing services in Naigaon",
    "digital marketing near Naigaon station",
    "digital marketing agency near Naigaon",
    "SEO services in Naigaon",
    "SEO agency in Naigaon",
    "local SEO in Naigaon",
    "website development in Naigaon",
    "website design company in Naigaon",
    "web development in Naigaon",
    "social media marketing in Naigaon",
    "social media agency in Naigaon",
    "Instagram marketing in Naigaon",
    "performance marketing in Naigaon",
    "Google Ads services in Naigaon",
    "Meta Ads management in Naigaon",
    "AI video production in Naigaon",
    "AI video and creative services in Naigaon",
    "AI automation services in Naigaon",
    "business automation in Naigaon",
    "digital PR services in Naigaon",
    "professional video editing in Naigaon",
    "content marketing in Naigaon",
    "digital marketing for small businesses in Naigaon",
    "digital marketing in Naigaon East",
    "digital marketing in Naigaon West",
    "digital marketing in Juchandra",
    "digital marketing in Chandrapada",
    "SEO services near Naigaon station",
    "website development near Naigaon station",
    "digital marketing in Vasai-Virar",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: `${siteUrl}/about`,
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
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: "Digital Marketing Agency in Naigaon | Sharp Rays",
    description:
      "Explore SEO, website development, social media marketing, performance marketing, digital PR, AI video, content marketing and automation for Naigaon businesses.",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Sharp Rays digital marketing services for businesses in Naigaon",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Naigaon | Sharp Rays",
    description:
      "SEO, websites, social media, paid campaigns, AI video and automation for businesses around Naigaon.",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              alt: "Sharp Rays digital marketing services for businesses in Naigaon",
            },
          ],
        }
      : {}),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Digital Marketing Agency in Naigaon | Sharp Rays",
      description:
        "Digital marketing services for businesses in Naigaon, including SEO, website development, social media marketing, performance marketing, digital PR, AI video and creative, professional video editing, content marketing and AI automation.",
      inLanguage: "en-IN",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#organization`,
      },

      author: {
        "@id": `${siteUrl}/#organization`,
      },

      publisher: {
        "@id": `${siteUrl}/#organization`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },

      mainEntity: {
        "@id": `${pageUrl}#organization`,
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
          item: `${siteUrl}/`,
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
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NaigaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd,
        }}
      />

      <Navbar />
      <NaigaonPageClient />
      <Footer />
    </>
  );
}
