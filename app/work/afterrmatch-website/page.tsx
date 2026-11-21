
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import AftermatchWebsiteCaseStudy from "@/components/Work/CaseStudies/AftermatchWebsiteCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/aftermatch-website`;

const pageTitle =
  "Aftermatch Website Development Case Study | Sharp Rays";

const pageDescription =
  "Explore the Aftermatch website development case study by Sharp Rays. Discover a digital experience for a social sports and gaming destination featuring pickleball, PS5 gaming and pool.";

const ogImage = `${siteUrl}/og/aftermatch-website-development-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Aftermatch website development",
    "Aftermatch website",
    "Aftermatch case study",
    "sports website development",
    "gaming website development",
    "sports and entertainment website",
    "pickleball venue website",
    "gaming venue website",
    "entertainment business website",
    "sports facility website design",
    "leisure website development",
    "activity booking website",
    "responsive website development",
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
        alt: "Aftermatch sports and gaming website developed by Sharp Rays",
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

const faqs = [
  {
    question: "What is Aftermatch?",
    answer:
      "Aftermatch is a social sports and gaming destination where visitors can enjoy activities such as pickleball, PS5 gaming and pool.",
  },
  {
    question: "What activities can visitors explore at Aftermatch?",
    answer:
      "The experiences highlighted in this project include pickleball, PS5 gaming and pool-table sessions.",
  },
  {
    question: "Can visitors book gaming experiences?",
    answer:
      "The concept includes booking experiences such as PS5 gaming and pool-table sessions so visitors can plan a visit and play.",
  },
  {
    question: "Why does a venue like Aftermatch need a website?",
    answer:
      "A website gives visitors one place to discover the venue, understand its activities and find the information they need before planning a visit.",
  },
  {
    question: "What did Sharp Rays work on for Aftermatch?",
    answer:
      "The project focused on website design and development, including the presentation of activities, content structure and the overall digital experience.",
  },
  {
    question: "Can Sharp Rays build websites for sports and entertainment venues?",
    answer:
      "Yes. Sharp Rays creates websites for businesses in sports, entertainment and leisure, with a focus on clear presentation and useful visitor experiences.",
  },
];

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
          name: "Sports Website Development",
        },
        {
          "@type": "Thing",
          name: "Gaming Website Development",
        },
        {
          "@type": "Thing",
          name: "Sports and Entertainment Digital Experience",
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
          name: "Aftermatch Website Development",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function AftermatchWebsitePage() {
  return (
    <main>
      <Navbar />

      <AftermatchWebsiteCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
