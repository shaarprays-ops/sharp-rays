
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import JKAYYWebsiteCaseStudy from "@/components/Work/CaseStudies/JKAYYWebsiteCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/jkayy-website`;

const pageTitle =
  "JKAYY DJ Website Development Case Study | Sharp Rays";

const pageDescription =
  "Explore the JKAYY website development case study by Sharp Rays, featuring an artist-focused website with a music-inspired visual direction and a dedicated digital presence for the DJ.";

const ogImage = `${siteUrl}/og/jkayy-dj-website-development-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "JKAYY website development",
    "JKAYY DJ website",
    "JKAYY case study",
    "DJ website development",
    "DJ website design",
    "musician website development",
    "artist portfolio website",
    "artist website design",
    "music artist website",
    "creative portfolio website",
    "event booking website",
    "music-inspired website design",
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
        alt: "JKAYY DJ artist website developed by Sharp Rays",
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
    question: "Who is JKAYY?",
    answer:
      "JKAYY is a DJ and music artist with a dedicated website that presents the artist's identity and online presence.",
  },
  {
    question: "What was the objective of the JKAYY website?",
    answer:
      "The objective was to create a dedicated digital destination that brings the artist's identity, music-related presence and relevant information together.",
  },
  {
    question: "Why does a DJ need a professional website?",
    answer:
      "A professional website gives a DJ a central online destination to introduce their identity, showcase their work and make it easier for visitors and potential collaborators to connect.",
  },
  {
    question: "What did Sharp Rays focus on for this project?",
    answer:
      "The project focused on website design and development, with attention to the artist's visual identity, website structure and overall digital presentation.",
  },
  {
    question: "Can a DJ website include event and booking information?",
    answer:
      "Yes. A DJ website can bring artist information, music, event details and booking enquiries into one organised digital experience.",
  },
  {
    question: "Can Sharp Rays create websites for artists and creatives?",
    answer:
      "Yes. Sharp Rays develops websites for artists, creators and creative professionals, with digital experiences shaped around their individual identity and goals.",
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
          name: "DJ Website Development",
        },
        {
          "@type": "Thing",
          name: "Artist Website Design",
        },
        {
          "@type": "Thing",
          name: "Music Artist Digital Presence",
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
          name: "JKAYY Website Development",
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

export default function JKAYYWebsitePage() {
  return (
    <main>
      <Navbar />

      <JKAYYWebsiteCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
