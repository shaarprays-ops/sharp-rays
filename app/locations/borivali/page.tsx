
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliPageClient from "@/components/Locations/Borivali/BolivaliClientpage";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali`;
const pageTitle = "Digital Marketing Agency in Borivali | Sharp Rays";
const pageDescription =
  "Digital marketing for S.V. Road jewellers, IC Colony clinics and Borivali coaching classes near Borivali station: SEO, websites and ads. Book a free audit.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "digital marketing agency in Borivali",
    "digital marketing company in Borivali",
    "digital marketing services in Borivali",
    "SEO services in Borivali",
    "website development in Borivali",
    "social media marketing in Borivali",
    "performance marketing in Borivali",
    "AI automation in Borivali",
    "AI video services in Borivali",
    "digital marketing agency in Borivali East",
    "digital marketing agency in Borivali West",
    "digital marketing near Borivali station",
    "digital marketing agency near S.V. Road",
    "digital marketing agency near IC Colony",
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
      alt: "Digital Marketing Agency in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "Digital Marketing Agency in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["Does Sharp Rays provide digital marketing services in Borivali?", "Sharp Rays offers digital marketing services for businesses targeting Borivali, including SEO, website development, social media marketing, performance marketing, digital PR, content marketing, AI video and creative, professional video editing and AI automation."],
  ["Which digital marketing services should a Borivali business start with?", "Start by identifying the biggest gap in your current online presence. SEO can support search visibility, website development can improve how customers understand your services, and social media marketing can help build consistent brand communication."],
  ["Can you help businesses targeting Borivali East and Borivali West?", "Our digital marketing services can be planned around businesses targeting Borivali East, Borivali West and surrounding areas, depending on their service area, audience and business requirements."],
  ["Do you provide paid advertising services in Borivali?", "Yes. Performance marketing is one of the services offered by Sharp Rays. Campaign planning should begin with a defined objective, suitable audience, relevant landing page and conversion measurement. Advertising spend is separate from the service fee."],
  ["How much does website development cost at Sharp Rays?", "Website development packages start at ₹14,999 for a Starter Website, ₹24,999 for a Business Website and ₹39,999 for an Advanced Website. Final pricing depends on project requirements, features, content and agreed deliverables."],
  ["How can I get started with Sharp Rays?", "Share your business details, website or social media profile and the main challenge you want to address. Sharp Rays can review the information and discuss suitable next steps."],
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
      name: "Digital Marketing Services for Businesses in Borivali",
      serviceType: [
        "SEO",
        "Website Development and Management",
        "Social Media Marketing",
        "Performance Marketing",
        "Digital PR and Media Relations",
        "Content Marketing",
        "AI Video and Creative",
        "Professional Video Editing",
        "AI Automation",
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
        { "@type": "ListItem", position: 3, name: "Borivali", item: pageUrl },
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

export default function BorivaliLocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliPageClient /></main>
      <Footer />
    </>
  );
}
