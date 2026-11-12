
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiSocialMediaMarketingPageClient from "@/components/Locations/VasaiRoad/VasaiSocialMediaMarketingPageClient";
import type { Metadata } from "next";

const pageUrl =
  "https://www.sharprays.com/locations/vasai-road/social-media-marketing";

const ogImage =
  "https://www.sharprays.com/og/digital-marketing-agency-in-vasai-og.webp";

export const metadata: Metadata = {
  title: "Social Media Marketing in Vasai | Sharp Rays",

  description:
    "Social media marketing in Vasai for business growth. Explore Instagram marketing, Reels, Facebook, LinkedIn, content creation and social media management with Sharp Rays.",

  keywords: [
    "social media marketing in Vasai",
    "social media marketing agency in Vasai",
    "social media company in Vasai",
    "social media services in Vasai",
    "social media management in Vasai",
    "social media manager in Vasai",
    "Instagram marketing in Vasai",
    "Instagram marketing agency in Vasai",
    "Instagram Reels creation in Vasai",
    "Reels marketing in Vasai",
    "Facebook marketing in Vasai",
    "Facebook page management in Vasai",
    "LinkedIn marketing in Vasai",
    "LinkedIn marketing agency in Vasai",
    "social media content creation in Vasai",
    "social media strategy in Vasai",
    "social media post design in Vasai",
    "social media creative design in Vasai",
    "social media advertising in Vasai",
    "social media campaign management in Vasai",
    "content calendar management in Vasai",
   
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: "https://www.sharprays.com/about",
    },
  ],

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
    type: "website",
    url: pageUrl,
    title: "Social Media Marketing in Vasai | Sharp Rays",
    description:
      "Build your brand presence with Instagram marketing, Reels, Facebook, LinkedIn, creative content and social media management in Vasai.",
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services in Vasai by Sharp Rays",
    
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing in Vasai | Sharp Rays",
    description:
      "Instagram marketing, Reels, Facebook, LinkedIn and social media management for businesses in Vasai.",
    images: [
      {
        url: ogImage,
        alt: "Social Media Marketing Services in Vasai by Sharp Rays",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Social Media Marketing in Vasai | Sharp Rays",
      description:
        "Social media marketing services in Vasai, including social media strategy, Instagram marketing, Reels creation, Facebook marketing, LinkedIn marketing, content creation, social media management and performance analysis.",
      url: pageUrl,
      inLanguage: "en-IN",
      author: {
        "@id": "https://www.sharprays.com/#organization",
      },
      publisher: {
        "@id": "https://www.sharprays.com/#organization",
      },
      isPartOf: {
        "@id": "https://www.sharprays.com/#website",
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Social Media Marketing Services in Vasai",
      serviceType: [
        "Social Media Strategy",
        "Instagram Marketing",
        "Reels Creation and Marketing",
        "Facebook Marketing",
        "LinkedIn Marketing",
        "Social Media Content Creation",
        "Social Media Management",
        "Social Media Performance Analysis",
      ],
      description:
        "Social media marketing services for businesses in Vasai, covering platform-specific strategy, content planning, creative development, Reels, social media management and performance analysis.",
      provider: {
        "@id": "https://www.sharprays.com/#organization",
      },
      areaServed: {
        "@type": "Place",
        name: "Vasai, Maharashtra, India",
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sharprays.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.sharprays.com/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Vasai",
          item: "https://www.sharprays.com/locations/vasai-road",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />
      <VasaiSocialMediaMarketingPageClient />
      <Footer />
    </>
  );
}
