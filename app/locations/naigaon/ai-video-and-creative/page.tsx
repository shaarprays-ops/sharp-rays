
import type { Metadata } from "next";
import NaigaonAIVideoAndCreativeClient from "@/components/Locations/Naigaon/AIVideoAndCreative/NaigaonAIVideoAndCreativeClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/ai-video-and-creative`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "AI Video & Creative Services in Naigaon | Sharp Rays",

  description:
    "AI video production, promotional videos, motion graphics and creative content for Naigaon businesses. Explore video and creative solutions with Sharp Rays.",

  keywords: [
    "AI video services in Naigaon",
    "AI video production in Naigaon",
    "AI video production agency in Naigaon",
    "AI video creation in Naigaon",
    "AI video and creative services in Naigaon",
    "AI creative agency in Naigaon",
    "video production services in Naigaon",
    "promotional video production in Naigaon",
    "business promotional videos",
    "AI promotional videos",
    "AI video editing services",
    "professional video editing in Naigaon",
    "motion graphics services in Naigaon",
    "creative visual services in Naigaon",
    "digital creative services",
    "social media video production",
    "Instagram Reels video creation",
    "short-form video production",
    "product video production",
    "AI product videos",
    "brand storytelling videos",
    "business explainer videos",
    "AI-assisted video production",
    "AI-generated video content",
    "video content for businesses",
    "real estate promotional videos",
    "manufacturing product videos",
    "ecommerce product videos",
    "social media creative production",
    "AI video services in Naigaon East",
    "AI video services in Naigaon West",
    "AI video production near Naigaon Station",
    "AI video services in Vasai Virar",
    "Sharp Rays AI video and creative",
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
    title: "AI Video & Creative Services in Naigaon | Sharp Rays",
    description:
      "Create AI-assisted videos, promotional content, motion graphics and creative visuals for your business with Sharp Rays in Naigaon.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "AI Video and Creative Services in Naigaon - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Video & Creative Services in Naigaon | Sharp Rays",
    description:
      "AI-assisted video production, promotional videos, motion graphics and creative content for Naigaon businesses.",
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
      name: "AI Video & Creative Services in Naigaon | Sharp Rays",
      description:
        "AI video and creative services for businesses targeting Naigaon, including AI-assisted video production, promotional videos, video editing, motion graphics and creative visual content.",
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
      name: "AI Video & Creative Services in Naigaon",
      serviceType: [
        "AI Video Production",
        "Promotional Video Production",
        "AI Video Editing",
        "Video Editing",
        "Motion Graphics",
        "Creative Visual Production",
        "Social Media Video Content",
        "Product Video Production",
        "Brand Storytelling",
        "Explainer Video Production",
      ],
      description:
        "Sharp Rays offers AI-assisted video production and creative services for businesses targeting Naigaon. Services include promotional videos, video editing, motion graphics, creative visuals, short-form social media videos, product showcases, explainers and brand storytelling.",
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
          "Businesses, startups, retailers, real estate companies, manufacturers and professional service providers",
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
          name: "AI Video & Creative",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NaigaonAIVideoAndCreativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <NaigaonAIVideoAndCreativeClient />
      <Footer />
    </>
  );
}
