
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import MiraRoadSocialMediaMarketingPageClient from "@/components/Locations/MiraRoad/SocialMediaMarketing/MiraRoadSocialMediaMarketingPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl =
  `${siteUrl}/locations/mira-road/social-media-marketing`;

const pageTitle =
  "Social Media Marketing in Mira Road | Sharp Rays";

const pageDescription =
  "Social media marketing in Mira Road for stronger brand visibility and audience engagement. Explore Instagram management, Reels, creative content and monthly plans starting at ₹12,999.";

const ogImage =
  `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "social media marketing in Mira Road",
    "social media marketing agency in Mira Road",
    "Instagram marketing in Mira Road",
    "Instagram management in Mira Road",
    "Reels creation in Mira Road",
    "social media management Mira Road",
    "social media agency Mira Road",
    "social media marketing for restaurants in Mira Road",
    "social media marketing for cafes in Mira Road",
    "social media content creation Mira Road",
  ],

  authors: [{ name: "Sharp Rays" }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

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
    type: "website",
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
        alt: "Social Media Marketing Services in Mira Road by Sharp Rays",
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
    question: "Do you provide social media marketing in Mira Road?",
    answer:
      "Yes. Sharp Rays provides social media marketing services for businesses targeting customers in Mira Road. The scope can include Instagram management, content planning, Reels, creative design, captions and performance reviews.",
  },
  {
    question: "Do you create Instagram Reels for restaurants in Mira Road?",
    answer:
      "Yes. Restaurant-focused content can include food preparation videos, menu highlights, dish showcases, ambience, staff moments and promotional Reels. The creative direction depends on the restaurant and its audience.",
  },
  {
    question: "Can you manage my business Instagram account?",
    answer:
      "Instagram management can include content planning, creative development, captions, publishing coordination and performance reviews. Account access and the exact responsibilities are agreed before work begins.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Sharp Rays social media marketing plans start from ₹12,999 per month. The final scope depends on the number of platforms, content formats, creative requirements and publishing frequency.",
  },
  {
    question: "Do you create Reels and static posts?",
    answer:
      "Yes. A content plan can combine Reels, static posts, carousels and stories. The balance depends on your business goals, audience and the type of content available.",
  },
  {
    question: "Can social media marketing help a new business?",
    answer:
      "Social media can help a new business introduce its products or services, communicate its identity and build an initial audience. Results depend on the content, audience, consistency, offer and market.",
  },
  {
    question: "Do you provide social media content for cafes?",
    answer:
      "Yes. Cafe content can include coffee preparation, signature drinks, food showcases, ambience, customer experiences and seasonal promotions.",
  },
  {
    question: "Which platforms do you work with?",
    answer:
      "The social media strategy can focus on platforms suited to your audience and business goals. Instagram is an important option for visual storytelling, Reels and product-led content.",
  },
  {
    question: "How often should my business post on Instagram?",
    answer:
      "The right publishing frequency depends on your content resources, audience and goals. A realistic, consistent schedule is more useful than committing to a volume of content that cannot be maintained.",
  },
  {
    question: "Do you write captions and hashtags?",
    answer:
      "Content support can include captions, calls to action, relevant hashtags and creative copy based on the agreed monthly content plan.",
  },
  {
    question: "Can you promote my products through Reels?",
    answer:
      "Yes. Product-focused Reels can demonstrate features, show products in use, highlight details and communicate offers. The format should suit the product and the audience you want to reach.",
  },
  {
    question: "How do I get started with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your business details, social media profiles and goals. We can discuss your current content, requirements and a suitable social media marketing plan.",
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
      about: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Social Media Marketing in Mira Road",
      serviceType: [
        "Social Media Marketing",
        "Instagram Management",
        "Reels Strategy and Creation",
        "Social Media Content Planning",
        "Creative Content Development",
      ],
      description:
        "Social media marketing services for businesses targeting customers in Mira Road. Services include Instagram strategy, account management, Reels creation, branded creative content, content calendars, captions, publishing coordination and performance reviews.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Mira Road, Maharashtra, India",
      },
      url: pageUrl,
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
      },
      hasOfferCatalog: {
        "@id": `${pageUrl}/#offer-catalog`,
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": `${pageUrl}/#offer-catalog`,
      name: "Social Media Marketing Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "12999",
          priceCurrency: "INR",
          description:
            "Monthly social media plan for businesses building a consistent social presence. Includes 1 social media platform, up to 12 content pieces per month and 2 Reels or short videos.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Starter Social Media Marketing Plan",
          },
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "21999",
          priceCurrency: "INR",
          description:
            "Monthly social media plan for growing brands seeking broader social media management. Includes up to 2 social media platforms, up to 20 content pieces per month and 4–6 Reels or short videos.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Growth Social Media Marketing Plan",
          },
        },
        {
          "@type": "Offer",
          name: "Scale Plan",
          price: "34999",
          priceCurrency: "INR",
          description:
            "Monthly social media plan for brands requiring a more comprehensive social presence. Includes up to 3 social media platforms, up to 30 content pieces per month and 8–10 Reels or short videos.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Scale Social Media Marketing Plan",
          },
        },
      ],
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
          name: "Locations",
          item: `${siteUrl}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mira Road",
          item: `${siteUrl}/locations/mira-road`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Social Media Marketing",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
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

export default function MiraRoadSocialMediaMarketingPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadSocialMediaMarketingPageClient />

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
