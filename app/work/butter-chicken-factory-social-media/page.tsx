
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import ButterChickenFactoryCaseStudy from "@/components/Work/CaseStudies/ButterChickenFactoryCaseStudy";

const siteUrl = "https://www.sharprays.com";

const pageUrl =
  `${siteUrl}/work/butter-chicken-factory-social-media`;

const pageTitle =
  "Butter Chicken Factory Social Media Case Study | Sharp Rays";

const pageDescription =
  "Explore the Butter Chicken Factory social media case study by Sharp Rays, featuring food photography, menu content, Reels, promotional creatives and restaurant brand communication.";

const ogImage = `${siteUrl}/og/butter-chicken-factory-social-media-case-study-og.webp`;

const faqs = [
  {
    question: "What was the Butter Chicken Factory project about?",
    answer:
      "The project focuses on social media marketing for a restaurant brand, with an emphasis on food presentation, menu communication and promotional content.",
  },
  {
    question: "What type of content is covered?",
    answer:
      "The case study covers food-focused creatives, menu-led content, Reels, short-form videos, captions and promotional communication.",
  },
  {
    question: "Why is food photography important for restaurant marketing?",
    answer:
      "Food photography helps communicate the visual appeal of dishes and gives audiences a clearer impression of the restaurant's menu and presentation.",
  },
  {
    question: "Does this case study include campaign results?",
    answer:
      "This page focuses on the creative direction and project work. Numerical campaign or engagement results should only be added when verified project data is available.",
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
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${pageUrl}#article`,
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
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        {
          "@type": "Thing",
          name: "Butter Chicken Factory",
          description:
            "Restaurant brand featured in this social media case study.",
        },
        {
          "@type": "Thing",
          name: "Restaurant Social Media Marketing",
        },
        {
          "@type": "Thing",
          name: "Food Photography",
        },
        {
          "@type": "Thing",
          name: "Menu-led Content",
        },
        {
          "@type": "Thing",
          name: "Reels and Short-form Video",
        },
        {
          "@type": "Thing",
          name: "Promotional Creative Design",
        },
        {
          "@type": "Thing",
          name: "Restaurant Brand Communication",
        },
      ],
      articleSection: [
        "Social Media Marketing",
        "Food Photography and Creatives",
        "Menu Content",
        "Reels and Short-form Videos",
        "Promotional Content",
        "Restaurant Brand Communication",
      ],
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
          name: "Work",
          item: `${siteUrl}/work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Butter Chicken Factory",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
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
    "Butter Chicken Factory case study",
    "Butter Chicken Factory social media",
    "restaurant social media marketing",
    "food social media marketing",
    "restaurant digital marketing case study",
    "food photography for restaurants",
    "restaurant menu content",
    "food brand social media creatives",
    "restaurant Reels creation",
    "food content creation",
    "restaurant promotional creatives",
    "social media marketing case study",
    "Sharp Rays case studies",
    "Sharp Rays portfolio",
  ],

  authors: [{ name: "Sharp Rays" }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

  category: "Social Media Marketing Case Study",

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
        alt: "Butter Chicken Factory social media marketing case study by Sharp Rays",
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

export default function ButterChickenFactorySocialMediaPage() {
  return (
    <>
      <Navbar />

      <main>
        <ButterChickenFactoryCaseStudy />

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
