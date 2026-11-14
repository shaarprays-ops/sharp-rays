
import type { Metadata } from "next";

import VirarSocialMediaMarketingPageClient from "@/components/Locations/Virar/SocialMediaMarketing/VirarSocialMediaMarketingPageClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/social-media-marketing`;

const ogImage = `/og/Virar.webp`;

const pageTitle = "Social Media Marketing in Virar | Sharp Rays";

const pageDescription =
  "Social media marketing for Virar businesses with Instagram Reels, content planning, creative design and campaign management. Explore festival and Jivdani-season content strategies with Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "social media marketing in Virar",
    "social media marketing agency in Virar",
    "social media marketing company in Virar",
    "social media management in Virar",
    "Instagram marketing in Virar",
    "Instagram Reels creation in Virar",
    "Facebook marketing in Virar",
    "LinkedIn marketing in Virar",
    "social media content creation in Virar",
    "social media content strategy",
    "social media campaign management",
    "social media creative design",
    "Reels and short-form video creation",
    "social media account management",
    "social media calendar planning",
    "festival social media campaigns in Virar",
    "Jivdani-season social media content",
    "social media marketing for Virar shops",
    "social media marketing for restaurants in Virar",
    "social media marketing for food brands",
    "social media marketing for retail businesses",
    "social media marketing for real estate",
    "social media marketing for local businesses",
    "Instagram content creation for businesses",
    "social media advertising strategy",
    "social media performance reporting",
    "social media marketing in Virar East",
    "social media marketing in Virar West",
    "social media marketing in Global City Virar",
    "digital marketing agency in Virar",
    "social media marketing in Vasai-Virar",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: siteUrl,
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
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Sharp Rays",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services in Virar by Sharp Rays",
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
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Social Media Marketing Services in Virar",
      serviceType: [
        "Social Media Marketing",
        "Social Media Strategy",
        "Social Media Management",
        "Instagram Marketing",
        "Facebook Marketing",
        "LinkedIn Marketing",
        "Instagram Reels Creation",
        "Short-Form Video Production",
        "Social Media Creative Design",
        "Social Media Content Creation",
        "Community Engagement",
        "Festival Campaign Planning",
        "Seasonal Social Media Campaigns",
        "Social Media Performance Reporting",
      ],
      description:
        "Social media marketing services for businesses targeting Virar. Services include content strategy, social media management, Instagram Reels, short-form videos, creative design, content creation, community engagement, festival campaigns, seasonal content planning and performance reporting.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Virar, Maharashtra, India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Retail businesses, local shops, restaurants, food brands, real estate businesses, professional services, fashion and lifestyle brands, educational institutions and growing businesses",
      },
      url: pageUrl,
      image: ogImage,
      category: "Social Media Marketing Services",
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
          name: "Locations",
          item: `${siteUrl}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Virar",
          item: `${siteUrl}/locations/virar`,
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

export default function VirarSocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <VirarSocialMediaMarketingPageClient />
      </main>

      <Footer />
    </>
  );
}
