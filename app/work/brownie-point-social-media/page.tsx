
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BrowniePointCaseStudy from "@/components/Work/CaseStudies/BrowniePointCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/brownie-point-social-media`;

const ogImage = `${siteUrl}/og/brownie-point-social-media-case-study-og.webp`;

const pageTitle =
  "Brownie Point Social Media Case Study | Sharp Rays";

const pageDescription =
  "Explore the Brownie Point social media case study by Sharp Rays, featuring product-led content, social creatives, Reels, captions and campaign communication for a cake and dessert brand.";

const faqs = [
  {
    question: "What was the Brownie Point project about?",
    answer:
      "The project focused on social media content for a cake and dessert brand, with an emphasis on product presentation, visual consistency and brand communication.",
  },
  {
    question: "What type of social media work was included?",
    answer:
      "The listed work included product content, social creatives, Reels, captions, campaign content and publishing.",
  },
  {
    question: "How was the content direction approached?",
    answer:
      "The content direction centred on making individual products visually distinctive while keeping the overall social feed connected to one recognisable brand identity.",
  },
  {
    question: "Does this page report campaign or engagement results?",
    answer:
      "This case study describes the work and creative direction. It does not publish numerical performance claims or engagement results that have not been verified.",
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
        "@id": `${pageUrl}/#article`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}/#article`,
      headline: pageTitle,
      description: pageDescription,
      image: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
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
          name: "Brownie Point",
          description: "Cake and dessert brand featured in this case study.",
        },
        {
          "@type": "Thing",
          name: "Social Media Marketing",
        },
        {
          "@type": "Thing",
          name: "Product-led Content",
        },
        {
          "@type": "Thing",
          name: "Social Media Creative Design",
        },
        {
          "@type": "Thing",
          name: "Reels and Short-form Video",
        },
        {
          "@type": "Thing",
          name: "Brand Communication",
        },
      ],
      articleSection: [
        "Social Media Marketing",
        "Product Content",
        "Social Media Creatives",
        "Reels and Short-form Video",
        "Campaign Communication",
        "Brand Consistency",
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
          name: "Brownie Point",
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
    "Brownie Point social media case study",
    "Brownie Point digital marketing",
    "cake brand social media marketing",
    "dessert brand social media",
    "food brand social media marketing",
    "social media marketing case study",
    "product photography content marketing",
    "product-led social media content",
    "Instagram creatives for food brands",
    "Reels creation for food brands",
    "social media creative design",
    "food and dessert brand content",
    "Sharp Rays case studies",
    "Sharp Rays portfolio",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: siteUrl,
    },
  ],

  creator: "Sharp Rays",
  publisher: "Sharp Rays",
  category: "Social Media Marketing Case Study",

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
    type: "article",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Brownie Point social media marketing case study by Sharp Rays",
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

export default function BrowniePointSocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd,
        }}
      />

      <Navbar />

      <main>
        <BrowniePointCaseStudy />
      </main>

      <Footer />
    </>
  );
}
