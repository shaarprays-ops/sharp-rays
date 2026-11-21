
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import XiimbaWebsiteCaseStudy from "@/components/Work/CaseStudies/XiimbaWebsiteCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/xiimba-website`;

const pageTitle =
  "Xiimba Website Development Case Study | Sharp Rays";

const pageDescription =
  "Explore the Xiimba Ecosystems website development case study by Sharp Rays. Discover how a connected corporate website presents its vision and Agritech, Lifecare and Legal Sciences verticals.";

const ogImage = `${siteUrl}/og/xiimba-website-development-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Xiimba website development",
    "Xiimba Ecosystems website",
    "Xiimba case study",
    "corporate website development",
    "corporate website design",
    "multi-vertical business website",
    "Agritech website development",
    "Lifecare website",
    "Legal Sciences website",
    "business website development",
    "Sharp Rays case studies",
    "Sharp Rays website development",
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
        alt: "Xiimba Ecosystems corporate website developed by Sharp Rays",
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
    question: "What is Xiimba?",
    answer:
      "Xiimba Ecosystems is an organisation focused on transforming rural living and improving quality of life through the development of interconnected ecosystems.",
  },
  {
    question: "What was the objective of the Xiimba website?",
    answer:
      "The website presents Xiimba's vision, introduces its different business verticals and provides visitors with information about the organisation and its work.",
  },
  {
    question: "Which business verticals are presented on the website?",
    answer:
      "The website introduces areas including Agritech, Lifecare and Legal Sciences, each with its own focus and information.",
  },
  {
    question: "Why does an organisation need a structured website?",
    answer:
      "A structured website helps visitors understand an organisation's purpose, explore its different areas of work and find relevant information more easily.",
  },
  {
    question: "What does Sharp Rays focus on in website development?",
    answer:
      "Sharp Rays focuses on creating purposeful digital experiences through thoughtful content structure, visual presentation and website development.",
  },
  {
    question: "Can Sharp Rays develop websites for multi-vertical businesses?",
    answer:
      "Yes. Sharp Rays works on website experiences that organise multiple services, business divisions and areas of expertise under one connected brand presence.",
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
          name: "Corporate Website Development",
        },
        {
          "@type": "Thing",
          name: "Digital Brand Presentation",
        },
        {
          "@type": "Thing",
          name: "Multi-Vertical Business Website",
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
          name: "Xiimba Website Development",
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

export default function XiimbaWebsitePage() {
  return (
    <main>
      <Navbar />

      <XiimbaWebsiteCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
