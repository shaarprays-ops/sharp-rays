
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import ShrutiChadhaCaseStudy from "@/components/Work/CaseStudies/ShrutiChadhaCaseStudy";

const siteUrl = "https://www.sharprays.com";

const pageUrl =
  `${siteUrl}/work/shruti-chadha-social-media`;

const pageTitle =
  "Shruti Chaddha Case Study | Website & Social Media | Sharp Rays";

const pageDescription =
  "Explore the Shruti Chaddha case study by Sharp Rays, combining website development and social media management to create a connected digital presence for an interior design practice.";

const ogImage =
  `${siteUrl}/og/shruti-chaddha-case-study-og.webp`;

const faqs = [
  {
    question: "What work did Sharp Rays do for Shruti Chaddha?",
    answer:
      "Sharp Rays managed Shruti Chaddha's social media presence and developed her website, bringing both digital touchpoints together as part of one project.",
  },
  {
    question: "Why is social media important for an interior designer?",
    answer:
      "Social media gives interior designers a platform to present their design perspective, share their work and help potential clients discover their practice.",
  },
  {
    question: "Why does an interior designer need a website?",
    answer:
      "A website provides a dedicated online destination where visitors can understand the design practice, explore its work and find relevant information about the brand.",
  },
  {
    question: "Why combine website development with social media management?",
    answer:
      "Social media and a website serve different purposes. Social media supports discovery and engagement, while the website provides a dedicated space to explore the brand in greater detail.",
  },
  {
    question: "Can Sharp Rays manage both services for my business?",
    answer:
      "Yes. Sharp Rays offers website development and social media management to help businesses build a consistent and well-structured digital presence.",
  },
  {
    question: "Which industries can benefit from these services?",
    answer:
      "Interior designers, architects, consultants, professional service providers and other businesses can benefit from a well-presented website and consistently managed social media presence.",
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
        caption:
          "Shruti Chaddha Website Development and Social Media Case Study by Sharp Rays",
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
          name: "Shruti Chaddha",
          description:
            "Interior design practice featured in this digital presence case study.",
        },
        {
          "@type": "Thing",
          name: "Interior Design",
        },
        {
          "@type": "Thing",
          name: "Website Development",
        },
        {
          "@type": "Thing",
          name: "Social Media Management",
        },
        {
          "@type": "Thing",
          name: "Content Planning",
        },
        {
          "@type": "Thing",
          name: "Creative Direction",
        },
        {
          "@type": "Thing",
          name: "Digital Brand Presentation",
        },
      ],
      articleSection: [
        "Website Development",
        "Social Media Management",
        "Digital Brand Presentation",
        "Project Approach",
        "Project Scope",
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
          name: "Shruti Chaddha",
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
    "Shruti Chaddha case study",
    "Shruti Chaddha social media",
    "Shruti Chaddha website development",
    "interior designer social media management",
    "interior design website development",
    "social media marketing for interior designers",
    "website development for interior designers",
    "interior design digital marketing",
    "interior design digital presence",
    "social media management case study",
    "website development case study",
    "digital brand presentation",
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
        alt: "Shruti Chaddha Website and Social Media Case Study by Sharp Rays",
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
        alt: "Shruti Chaddha Digital Presence Case Study by Sharp Rays",
      },
    ],
  },
};

export default function ShrutiChadhaSocialMediaPage() {
  return (
    <>
      <Navbar />

      <main>
        <ShrutiChadhaCaseStudy />

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
