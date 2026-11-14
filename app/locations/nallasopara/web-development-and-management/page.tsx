
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasoparaWebdevelopmentClientPage from "@/components/Locations/Nallasopara/NallasoparaWebdevelopmentClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/web-development-and-management`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "Web Development and Management in Nallasopara | Sharp Rays";

const pageDescription =
  "Build a responsive, SEO-aware website with Sharp Rays in Nallasopara. Explore business websites, UI/UX design, ecommerce development, landing pages, website redesign and website management.";

const keywords = [
  "website development in Nallasopara",
  "website development company in Nallasopara",
  "web development company in Nallasopara",
  "website design company in Nallasopara",
  "website designer in Nallasopara",
  "web design services in Nallasopara",
  "business website development",
  "professional website design",
  "responsive website development",
  "mobile-friendly website design",
  "UI UX design services",
  "ecommerce website development in Nallasopara",
  "landing page development",
  "website redesign services",
  "website maintenance and management",
  "website SEO foundations",
  "service-based website development",
  "healthcare website development",
  "coaching class website development",
  "website development in Nallasopara East",
  "website development in Nallasopara West",
  "website development near Tulinj Road",
  "Sharp Rays website development",
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
      name: "Website Development Services in Nallasopara",
      serviceType: [
        "Business Website Development",
        "Website Design and UI/UX",
        "Responsive Website Development",
        "Ecommerce Website Development",
        "Landing Page Development",
        "Website Redesign",
        "Website SEO Foundations",
        "Website Maintenance and Management",
      ],
      description:
        "Website design and development services for businesses targeting Nallasopara East, Nallasopara West and surrounding areas. Services include business websites, service websites, landing pages, ecommerce websites, responsive design, website redesigns, technical SEO foundations and website management.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "Website Design and Development",
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
          name: "Website Development",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NallasoparaWebdevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasoparaWebdevelopmentClientPage />
      </main>
      <Footer />
    </>
  );
}
