
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasoparaSeoClientPage from "@/components/Locations/Nallasopara/NallasoparaSeoClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/seo`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nallasopara-og.webp`;

const pageTitle = "SEO Services in Nallasopara | Local SEO & Google Maps | Sharp Rays";

const pageDescription =
  "Improve your search visibility with SEO services in Nallasopara. Sharp Rays offers technical SEO, keyword research, local SEO, Google Business Profile guidance, content optimisation and website audits.";

const keywords = [
  "SEO services in Nallasopara",
  "SEO agency in Nallasopara",
  "SEO company in Nallasopara",
  "SEO consultant in Nallasopara",
  "search engine optimisation in Nallasopara",
  "local SEO in Nallasopara",
  "Google Maps SEO in Nallasopara",
  "Google Business Profile optimisation",
  "technical SEO services in Nallasopara",
  "on-page SEO in Nallasopara",
  "keyword research services",
  "SEO audit in Nallasopara",
  "website SEO optimisation",
  "content SEO services",
  "internal linking optimisation",
  "local business SEO",
  "SEO in Nallasopara East",
  "SEO in Nallasopara West",
  "SEO near Tulinj Road",
  "SEO near Achole",
  "SEO near Nallasopara station",
  "Sharp Rays SEO services",
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
      name: "SEO Services in Nallasopara",
      serviceType: [
        "Local SEO",
        "Google Business Profile Guidance",
        "Keyword and Search-Intent Research",
        "Technical SEO",
        "On-Page SEO",
        "Content Optimisation",
        "Internal Linking",
        "SEO Audits",
        "SEO Measurement and Improvement",
      ],
      description:
        "SEO services for businesses targeting Nallasopara East, Nallasopara West, Tulinj Road, Achole and surrounding areas. Services include technical optimisation, keyword research, useful website content, local SEO, Google Business Profile guidance, website audits and search performance review.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "Search Engine Optimization",
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
          name: "SEO",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NallasoparaSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasoparaSeoClientPage />
      </main>
      <Footer />
    </>
  );
}
