
import type { Metadata } from "next";
import NaigaonSocialMediaMarketingClient from "@/components/Locations/Naigaon/SocialMediaMarketing/NaigaonSocialMediaMarketingClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/social-media-marketing`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "Social Media Marketing in Naigaon | Sharp Rays",

  description:
    "Social media marketing for Naigaon businesses, including Instagram management, Reels, content strategy, creative design and social media planning. Grow your brand presence with Sharp Rays.",

  keywords: [
    "social media marketing in Naigaon",
    "social media marketing agency in Naigaon",
    "social media marketing company in Naigaon",
    "social media management in Naigaon",
    "Instagram marketing in Naigaon",
    "Instagram marketing agency in Naigaon",
    "Instagram management services",
    "Instagram Reels creation in Naigaon",
    "Reels creation services",
    "social media content creation in Naigaon",
    "social media creative design",
    "social media strategy services",
    "social media account management",
    "Facebook marketing in Naigaon",
    "Facebook page management",
    "LinkedIn marketing services",
    "social media marketing for local businesses",
    "social media marketing for small businesses",
    "social media marketing for real estate",
    "real estate social media marketing in Naigaon",
    "social media marketing for shops",
    "social media marketing for startups",
    "social media content calendar",
    "social media campaign planning",
    "short-form video content creation",
    "social media analytics and reporting",
    "brand awareness through social media",
    "social media marketing near Naigaon Station",
    "social media marketing in Naigaon East",
    "social media marketing in Naigaon West",
    "social media marketing in Juchandra",
    "social media marketing in Chandrapada",
    "social media marketing in Vasai Virar",
    "Sharp Rays social media marketing",
  ],

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
    type: "website",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: "Social Media Marketing in Naigaon | Sharp Rays",
    description:
      "Build a consistent social presence with Instagram marketing, Reels, content strategy, creative design and social media management for Naigaon businesses.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Social Media Marketing in Naigaon - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing in Naigaon | Sharp Rays",
    description:
      "Instagram marketing, Reels, social media management and content strategy for businesses targeting Naigaon.",
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Social Media Marketing in Naigaon | Sharp Rays",
      description:
        "Social media marketing services for businesses targeting Naigaon, including Instagram marketing, Reels, content strategy, creative design, social media management and performance reporting.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Social Media Marketing Services in Naigaon",
      serviceType: [
        "Social Media Marketing",
        "Instagram Marketing",
        "Instagram Reels Creation",
        "Social Media Management",
        "Social Media Content Creation",
        "Social Media Creative Design",
        "Content Strategy",
        "Social Media Analytics and Reporting",
        "Facebook Marketing",
        "LinkedIn Marketing",
      ],
      description:
        "Sharp Rays provides social media marketing services for businesses targeting Naigaon. Services include Instagram marketing, Reels and short-form videos, social media management, creative design, content strategy, platform planning and performance reporting.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Naigaon, Maharashtra, India",
      },
      url: pageUrl,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Real estate businesses, retailers, manufacturers, education providers, healthcare and wellness businesses, ecommerce brands, startups and professional service providers",
      },
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
          name: "Naigaon",
          item: `${siteUrl}/locations/naigaon`,
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

export default function NaigaonSocialMediaMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <NaigaonSocialMediaMarketingClient />
      <Footer />
    </>
  );
}
