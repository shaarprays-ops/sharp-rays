
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiWebsiteDevelopmentPageClient from "@/components/Locations/VasaiRoad/VasaiWebDevelopmentPageClient.tsx/page";
import type { Metadata } from "next";

const pageUrl =
  "https://www.sharprays.com/locations/vasai-road/website-development";

const ogImage =
  "https://www.sharprays.com/og/digital-marketing-agency-in-vasai-og.webp";

export const metadata: Metadata = {
  title: "Website Development in Vasai | Sharp Rays",

  description:
    "Website development in Vasai for businesses, manufacturers and shops. Get modern, SEO-friendly websites, product catalogues and WhatsApp-ready enquiries with Sharp Rays.",

  keywords: [
    "website development in Vasai",
    "website development company in Vasai",
    "website design company in Vasai",
    "web development company in Vasai",
    "website developers in Vasai",
    "website designing services in Vasai",
    "business website development in Vasai",
    "professional website design in Vasai",
    "custom website development in Vasai",
    "responsive website development in Vasai",
    
  
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
    title: "Website Development in Vasai | Sharp Rays",
    description:
      "Explore professional website design, custom development, industrial websites, product catalogues and e-commerce website solutions in Vasai.",
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Website Development Services in Vasai by Sharp Rays",
    
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Development in Vasai | Sharp Rays",
    description:
      "Modern business websites, industrial product catalogues, e-commerce and custom website development in Vasai.",
    images: [
      {
        url: ogImage,
        alt: "Website Development Services in Vasai by Sharp Rays",
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
      name: "Website Development in Vasai | Sharp Rays",
      description:
        "Website development services in Vasai, including business website development, website design, UI/UX, industrial websites, product catalogue websites, e-commerce, custom development and website redesign.",
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
      name: "Website Development Services in Vasai",
      serviceType: [
        "Business Website Development",
        "Website Design and UI/UX",
        "Manufacturing and Industrial Website Development",
        "Product Catalogue Website Development",
        "E-commerce Website Development",
        "Custom Website Development",
        "Website Redesign and Modernization",
      ],
      description:
        "Website design and development services for businesses in Vasai, including responsive business websites, industrial product catalogues, RFQ functionality, e-commerce solutions, custom website development and website redesign.",
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
          name: "Website Development",
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
      <VasaiWebsiteDevelopmentPageClient />
      <Footer />
    </>
  );
}
