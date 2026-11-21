
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import DTSCaseStudy from "@/components/Work/CaseStudies/DTSCaseStudy";

const siteUrl = "https://www.sharprays.com";

const pageUrl = `${siteUrl}/work/dts-social-media`;

const pageTitle =
  "DTS Case Study | Website, SEO & Digital Marketing | Sharp Rays";

const pageDescription =
  "Explore the DTS digital marketing case study by Sharp Rays, covering website development, SEO, social media marketing and performance marketing in one connected digital project.";

const ogImage = `${siteUrl}/og/dts-case-study-og.webp`;

const faqs = [
  {
    question: "What work is covered in the DTS case study?",
    answer:
      "This case study brings together DTS website development, SEO, social media marketing and performance marketing work in one project overview.",
  },
  {
    question: "What was the focus of the DTS website project?",
    answer:
      "The website work focused on organising digital information, presenting services clearly and creating a responsive experience with a stronger content structure.",
  },
  {
    question: "What did the SEO work include?",
    answer:
      "The SEO work covered keyword research, page optimisation, technical SEO, internal linking, content structure and authority-building activity.",
  },
  {
    question: "Does this page publish campaign or traffic results?",
    answer:
      "This page describes the project scope and approach. Numerical performance claims should only be added when verified project data is available.",
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
        caption: "DTS Digital Marketing Case Study by Sharp Rays",
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
          name: "DTS",
          description: "Client project featured in this case study.",
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
          name: "Performance Marketing",
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
        "Performance Marketing",
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
          name: "DTS",
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
    "DTS case study",
    "DTS digital marketing case study",
    "DTS website development",
    "DTS SEO project",
    "DTS social media marketing",
    "DTS performance marketing",
    "website development case study",
    "SEO case study",
    "social media marketing case study",
    "performance marketing case study",
    "digital marketing portfolio",
    "Sharp Rays case studies",
    "Sharp Rays portfolio",
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
        alt: "DTS Website Development, SEO, Social Media and Performance Marketing Case Study by Sharp Rays",
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
        alt: "DTS Digital Marketing Case Study by Sharp Rays",
      },
    ],
  },
};

export default function DTSCaseStudyPage() {
  return (
    <>
      <Navbar />

      <main>
        <DTSCaseStudy />

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
