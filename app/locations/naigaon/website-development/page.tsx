
import type { Metadata } from "next";
import NaigaonWebDevClient from "@/components/Locations/Naigaon/WebsiteDevelopment/NaigaonWebDevClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/website-development`;

// Add the verified OG image URL when the image is available.
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "Website Development in Naigaon | Sharp Rays",

  description:
    "Website design and development for Naigaon businesses. Build responsive business websites, ecommerce stores and SEO-friendly digital experiences with Sharp Rays.",

  keywords: [
    "website development in Naigaon",
    "website development company in Naigaon",
    "website development agency in Naigaon",
    "website design in Naigaon",
    "website designing company in Naigaon",
    "web design agency in Naigaon",
    "web development services in Naigaon",
    "business website development in Naigaon",
    "business website design",
    "professional website development",
    "custom website development in Naigaon",
    "responsive website development",
    "mobile-friendly website design",
    "UI UX design services in Naigaon",
    "ecommerce website development in Naigaon",
    "online store development",
    "SEO-friendly website development",
    "SEO-friendly web design",
    "website redesign services in Naigaon",
    "website maintenance and support",
    "website development for small businesses",
    "website development for startups",
    "real estate website development",
    "housing project website development",
    "property website development",
    "manufacturing website development",
    "product catalogue website development",
    "website development for businesses in Juchandra",
    "website development near Naigaon Station",
    "website development in Naigaon East",
    "website development in Naigaon West",
    "website development in Chandrapada",
    "website development in Vasai Virar",
    "Sharp Rays website development",
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
    title: "Website Development in Naigaon | Sharp Rays",
    description:
      "Professional business websites, responsive web design, ecommerce development and SEO-friendly website solutions for businesses targeting Naigaon.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Website Development in Naigaon - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development in Naigaon | Sharp Rays",
    description:
      "Build a professional digital presence with responsive website design, ecommerce development and SEO-friendly website solutions.",
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
      name: "Website Development in Naigaon | Sharp Rays",
      description:
        "Website design and development services for businesses targeting Naigaon, including business websites, UI/UX design, ecommerce development, responsive layouts, SEO-friendly structures and website maintenance.",
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
      name: "Website Development Services in Naigaon",
      serviceType: [
        "Website Design and Development",
        "Business Website Development",
        "Custom Website Development",
        "UI/UX Design",
        "Ecommerce Website Development",
        "Responsive Website Development",
        "SEO-Friendly Website Development",
        "Website Redesign",
        "Website Maintenance and Support",
      ],
      description:
        "Sharp Rays provides website design and development services for businesses targeting Naigaon. Services include professional business websites, UI/UX design, ecommerce development, responsive layouts, SEO-friendly website structures, website redesign and maintenance.",
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
          "Small businesses, startups, real estate businesses, manufacturers, ecommerce brands and professional service providers",
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
          name: "Website Development",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NaigaonWebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <NaigaonWebDevClient />
      <Footer />
    </>
  );
}
