
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasoparaSocialMediaClientPage from "@/components/Locations/Nallasopara/NallasoparaSocialMediaClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/social-media-marketing`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "Social Media Marketing in Nallasopara | Sharp Rays";

const pageDescription =
  "Build a purposeful social media presence with services in Nallasopara from Sharp Rays. Explore Instagram strategy, Reels, content planning, creative design, captions, campaign communication and performance reporting.";

const keywords = [
  "social media marketing in Nallasopara",
  "social media marketing agency in Nallasopara",
  "social media company in Nallasopara",
  "social media management in Nallasopara",
  "Instagram marketing in Nallasopara",
  "Instagram Reels services in Nallasopara",
  "Facebook marketing in Nallasopara    ",
  "social media content creation",
  "social media strategy services",
  "social media content planning",
  "social media calendar management",
  "Reels and short-form video creation",
  "social media creative design",
  "social media captions and content writing",
  "social media campaign management",
  "social media performance reporting",
  "WhatsApp enquiry campaigns",
  "social media marketing for retail businesses",
  "social media marketing for coaching classes",
  "social media marketing in Nallasopara East",
  "social media marketing in Nallasopara West",
  "Sharp Rays social media marketing",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords,
  authors: [{ name: "Sharp Rays", url: siteUrl }],
  creator: "Sharp Rays",
  publisher: "Sharp Rays",

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
    type: "website",
    ...(ogImage ? { images: [{ url: ogImage, alt: pageTitle }] } : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

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
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      mainEntity: { "@id": `${pageUrl}/#service` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Social Media Marketing Services in Nallasopara",
      serviceType: [
        "Social Media Strategy",
        "Content Planning and Calendars",
        "Instagram Reels and Short-Form Video",
        "Social Creatives and Carousels",
        "Captions and Content Writing",
        "Community and Engagement Support",
        "Campaigns and Offer Promotion",
        "Insights and Performance Reporting",
      ],
      description:
        "Social media marketing services for businesses targeting Nallasopara East, Nallasopara West and nearby areas. Services include Instagram strategy, Reels, creative design, captions, content calendars, campaign communication and performance reporting, with relevant enquiry pathways such as WhatsApp where appropriate.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "Social Media Marketing",
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
          name: "Nallasopara",
          item: `${siteUrl}/locations/nallasopara`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Social Media Marketing",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NallasoparaSocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasoparaSocialMediaClientPage />
      </main>
      <Footer />
    </>
  );
}
