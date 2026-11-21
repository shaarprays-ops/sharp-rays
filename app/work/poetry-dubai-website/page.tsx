
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import PoetryDubaiWebsiteCaseStudy from "@/components/Work/CaseStudies/PoetryDubaiWebsiteCaseStudy";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/work/poetry-dubai-website`;

const pageTitle =
  "Poetry Dubai Website Development Case Study | Sharp Rays";

const pageDescription =
  "Explore the Poetry Dubai website development case study by Sharp Rays. Discover a refined, product-led website showcasing furniture, chairs, wall pieces and decorative design objects.";

const ogImage = `${siteUrl}/og/poetry-dubai-website-development-case-study-og.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Poetry Dubai website development",
    "Poetry Dubai case study",
    "Poetry Dubai website",
    "furniture website development",
    "furniture website design",
    "decor website development",
    "product showcase website",
    "product-focused website design",
    "furniture and decor website",
    "design-led website development",
    "corporate website development",
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
        alt: "Poetry Dubai furniture and decorative products website developed by Sharp Rays",
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
    question: "What is Poetry Dubai?",
    answer:
      "Poetry Dubai is a brand presenting furniture and decorative showcase items, including chairs, wall pieces and other design-focused products.",
  },
  {
    question: "What was the focus of the website project?",
    answer:
      "The focus was to create a clean, visually led website that presents the product collection and makes individual pieces easier to explore.",
  },
  {
    question: "Why does a furniture showcase brand need a website?",
    answer:
      "A dedicated website gives a furniture and decor brand a central place to present its collection, communicate its visual identity and help visitors discover its products.",
  },
  {
    question: "How should products be presented on a showcase website?",
    answer:
      "Product imagery, clear content structure and thoughtful spacing can help individual pieces stand out while keeping the browsing experience organised.",
  },
  {
    question: "What did Sharp Rays focus on for Poetry Dubai?",
    answer:
      "The project focused on website design and development, product presentation, content structure and a responsive browsing experience.",
  },
  {
    question: "Can Sharp Rays build websites for furniture and decor brands?",
    answer:
      "Yes. Sharp Rays creates product-focused websites for furniture, interiors and design-led businesses, with an emphasis on visual presentation and easy browsing.",
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
          name: "Furniture Website Development",
        },
        {
          "@type": "Thing",
          name: "Decorative Product Showcase",
        },
        {
          "@type": "Thing",
          name: "Product-Led Website Design",
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
          name: "Poetry Dubai Website Development",
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

export default function PoetryDubaiWebsitePage() {
  return (
    <main>
      <Navbar />

      <PoetryDubaiWebsiteCaseStudy />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Footer />
    </main>
  );
}
