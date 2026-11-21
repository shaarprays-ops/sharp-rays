
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import RNKCaseStudy from "@/components/Work/CaseStudies/RNKCaseStudy";

const siteUrl = "https://www.sharprays.com";

const pageUrl = `${siteUrl}/work/rnk-rental`;

const pageTitle =
  "RNK Rentals Case Study | Website, SEO & Social | Sharp Rays";

const pageDescription =
  "Explore the RNK Rentals case study by Sharp Rays, covering website development, SEO and social media marketing for a connected car rental brand.";

const ogImage = `${siteUrl}/og/rnk-rentals-case-study-og.webp`;

const faqs = [
  {
    question: "What work did Sharp Rays do for RNK Rentals?",
    answer:
      "This case study presents the RNK Rentals project across website development, SEO and social media marketing. The published sections should reflect only the services and deliverables actually completed.",
  },
  {
    question: "Why bring multiple digital services into one case study?",
    answer:
      "A single case study helps visitors understand how the different parts of a brand's digital presence relate to each other, rather than viewing each service in isolation.",
  },
  {
    question: "Can I explore individual Sharp Rays services?",
    answer:
      "Yes. The service sections on this page link to the relevant Sharp Rays service pages for visitors who want to learn more about a particular capability.",
  },
  {
    question: "Does this case study include performance results?",
    answer:
      "Only verified project data should be included as performance results. This page focuses on the project approach and work rather than presenting unverified figures or guarantees.",
  },
];

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
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": `${pageUrl}/#primaryimage`,
        url: ogImage,
        width: 1200,
        height: 630,
        caption: "RNK Rentals Case Study by Sharp Rays",
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}/#article`,
      },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      headline: pageTitle,
      description: pageDescription,
      image: {
        "@id": `${pageUrl}/#primaryimage`,
      },
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        {
          "@type": "Thing",
          name: "RNK Rentals",
          description: "Car rental business featured in this case study.",
        },
        {
          "@type": "Thing",
          name: "Website Development",
        },
        {
          "@type": "Thing",
          name: "Search Engine Optimisation",
        },
        {
          "@type": "Thing",
          name: "Social Media Marketing",
        },
        {
          "@type": "Thing",
          name: "Digital Brand Communication",
        },
      ],
      articleSection: [
        "Website Development",
        "Search Engine Optimisation",
        "Social Media Marketing",
        "Digital Presence",
      ],
      inLanguage: "en-IN",
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
          name: "Work",
          item: `${siteUrl}/work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "RNK Rentals",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      url: `${pageUrl}#faq`,
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "RNK Rentals case study",
    "RNK Rentals digital marketing",
    "car rental website development",
    "car rental SEO",
    "car rental social media marketing",
    "automotive digital marketing case study",
    "website development case study",
    "SEO case study",
    "social media marketing case study",
    "Sharp Rays portfolio",
    "Sharp Rays client projects",
  ],

  authors: [{ name: "Sharp Rays" }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

  category: "Digital Marketing Case Study",

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
        alt: "RNK Rentals Website, SEO and Social Media Case Study by Sharp Rays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        alt: "RNK Rentals Case Study by Sharp Rays",
      },
    ],
  },
};

export default function RNKCaseStudyPage() {
  return (
    <>
      <Navbar />

      <main>
        <RNKCaseStudy />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd,
          }}
        />
      </main>

      <Footer />
    </>
  );
}
