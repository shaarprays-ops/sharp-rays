
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import VowStoryCaseStudy from "@/components/Work/CaseStudies/VowStoryCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/vow-story-social-media`;

const pageTitle =
  "Vow Story Case Study | Website & Social Media | Sharp Rays";

const pageDescription =
  "Explore the Vow Story case study by Sharp Rays, featuring website development and social media management for weddings, brand launches and curated experiences.";

const ogImage = `${siteUrl}/og/vow-story-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Vow Story case study",
    "Vow Story social media management",
    "Vow Story website development",
    "event brand website development",
    "event social media management",
    "wedding brand digital marketing",
    "brand launch digital presence",
    "event website design",
    "Sharp Rays case studies",
    "Sharp Rays digital marketing agency",
  ],

  authors: [{ name: "Sharp Rays", url: siteUrl }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",
  category: "Digital Marketing Case Study",

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
        alt: "Vow Story website development and social media case study by Sharp Rays",
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
    question: "What services did Sharp Rays provide for Vow Story?",
    answer:
      "Sharp Rays worked on Vow Story's social media management and website development, bringing both digital touchpoints together as part of the brand's online presence.",
  },
  {
    question: "What type of brand is Vow Story?",
    answer:
      "Vow Story is an event-focused brand covering weddings, brand launches and curated experiences.",
  },
  {
    question: "Why is social media important for an event brand?",
    answer:
      "Social media helps event brands present their experiences, communicate different event formats and give audiences a visual way to discover their work.",
  },
  {
    question: "Why does an event brand need a website?",
    answer:
      "A website gives an event brand a dedicated place to introduce its identity, present its experiences and help visitors understand the services it offers.",
  },
  {
    question: "How do social media and a website work together?",
    answer:
      "Social media supports discovery and engagement, while the website provides a dedicated destination to explore the brand and its experiences in greater detail.",
  },
  {
    question: "Can Sharp Rays manage both services for event businesses?",
    answer:
      "Yes. Sharp Rays provides website development and social media management to help event businesses create a consistent and professional digital presence.",
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
          name: "Social Media Management",
        },
        {
          "@type": "Thing",
          name: "Website Development",
        },
        {
          "@type": "Thing",
          name: "Event Brand Digital Presence",
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
          name: "Vow Story",
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

export default function VowStorySocialMediaPage() {
  return (
    <main>
      <Navbar />

      <VowStoryCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
