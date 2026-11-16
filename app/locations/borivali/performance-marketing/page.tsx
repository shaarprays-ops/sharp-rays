
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliPerformanceMarketingClient from "@/components/Locations/Borivali/BorivaliPerformanceMarketingClient";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/performance-marketing`;
const pageTitle = "Performance Marketing Agency in Borivali | Sharp Rays";
const pageDescription =
  "Performance marketing for Borivali businesses. Google Ads, Meta Ads, campaign planning, audience targeting, creative direction and performance reviews. Discuss your goals.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "performance marketing agency in Borivali",
    "performance marketing services Borivali",
    "paid advertising agency Borivali",
    "Google Ads agency Borivali",
    "Google Ads management Borivali",
    "Meta Ads agency Borivali",
    "Facebook Ads management Borivali",
    "Instagram Ads Borivali",
    "lead generation campaigns Borivali",
    "paid media agency Borivali",
    "digital advertising Borivali",
    "performance marketing Borivali East",
    "performance marketing Borivali West",
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
      alt: "Performance Marketing in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "Performance Marketing in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["What is performance marketing?", "Performance marketing is a digital advertising approach that uses defined campaign objectives and measurable indicators to review advertising activity and outcomes."],
  ["Does Sharp Rays provide performance marketing in Borivali?", "Sharp Rays offers performance marketing and paid media services, including campaign planning, advertising management, creative direction and performance reviews."],
  ["Do you manage Google Ads campaigns?", "Yes. Google Ads management can include campaign planning, keyword and audience research, campaign setup, monitoring and optimisation, depending on the agreed scope."],
  ["Do you provide Facebook and Instagram advertising?", "Yes. Meta advertising campaigns can be planned and managed across Facebook and Instagram according to the business objective and suitable platform formats."],
  ["Is the advertising budget included in your service fee?", "No. Advertising spend paid to platforms such as Google and Meta is separate from the performance marketing service fee."],
  ["Can performance marketing generate enquiries?", "Campaigns can be designed to encourage enquiries, but actual results depend on audience relevance, offer, creative, landing page experience, competition and other factors. Enquiries or sales are not guaranteed."],
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
      name: "Performance Marketing Services in Borivali",
      serviceType: [
        "Google Ads Management",
        "Meta Ads Management",
        "Campaign Strategy",
        "Audience Research and Targeting",
        "Ad Creative and Copy Direction",
        "Landing Page and Conversion Journey Review",
        "Campaign Monitoring and Optimisation",
        "Performance Reporting",
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
        { "@type": "ListItem", position: 4, name: "Performance Marketing", item: pageUrl },
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

export default function BorivaliPerformanceMarketing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliPerformanceMarketingClient /></main>
      <Footer />
    </>
  );
}
