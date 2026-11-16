
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliSEOPageClient from "@/components/Locations/Borivali/BorivaliSEIClientPage";

import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/seo`;
const pageTitle = "SEO Services in Borivali | Local SEO & Maps | Sharp Rays";
const pageDescription =
  "SEO and Google Maps ranking for Borivali businesses. Maps and review SEO for S.V. Road jewellers and IC Colony clinics. Book a free SEO audit.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "SEO services in Borivali",
    "SEO agency in Borivali",
    "SEO company in Borivali",
    "local SEO Borivali",
    "Google Maps SEO Borivali",
    "Google Business Profile optimisation Borivali",
    "technical SEO Borivali",
    "on-page SEO Borivali",
    "keyword research Borivali",
    "SEO for jewellers Borivali",
    "SEO for clinics Borivali",
    "SEO near S.V. Road",
    "SEO in Borivali East",
    "SEO in Borivali West",
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
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: "SEO Services in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "SEO Services in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["Does Sharp Rays provide SEO services in Borivali?", "Yes. Sharp Rays provides SEO services for businesses targeting Borivali, including technical SEO, on-page optimisation, local SEO, Google Business Profile guidance, keyword research, content SEO, website structure and reporting."],
  ["Can SEO help my business appear on Google Maps in Borivali?", "Local SEO can help improve the accuracy and relevance of your business information and website content. Google Maps visibility depends on factors including relevance, distance and prominence, so no particular position can be guaranteed."],
  ["Do you provide Google Business Profile optimisation?", "Yes. The work can include reviewing business categories, services, descriptions, contact details, opening hours, photos and available profile performance information."],
  ["How long does SEO take to show results?", "SEO timelines vary with the website's current condition, competition, search demand, scope of work and implementation. It is not possible to promise a fixed timeframe or ranking outcome."],
  ["Can you guarantee first-page Google rankings?", "No. Search rankings and Maps positions are controlled by search platforms and depend on multiple changing factors. Sharp Rays focuses on sound SEO implementation, useful content and ongoing review rather than ranking guarantees."],
  ["Do you create or buy Google reviews?", "No. We do not create fake reviews, purchase ratings or offer incentives in exchange for positive reviews. Review guidance should encourage genuine customer feedback and follow platform policies and privacy requirements."],
] as const;

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
      about: { "@id": `${pageUrl}/#service` },
      publisher: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "SEO Services for Borivali Businesses",
      serviceType: [
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "Google Business Profile SEO",
        "Keyword Research",
        "Content SEO",
        "E-commerce SEO",
        "Website Structure and Internal Linking",
        "SEO Reporting and Monitoring",
        "Review Management Guidance",
      ],
      description: pageDescription,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Borivali, Mumbai, Maharashtra, India",
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${siteUrl}/locations` },
        { "@type": "ListItem", position: 3, name: "Borivali", item: `${siteUrl}/locations/borivali` },
        { "@type": "ListItem", position: 4, name: "SEO", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BorivaliSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliSEOPageClient /></main>
      <Footer />
    </>
  );
}
