
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import NallasopraAiAutomationClientPage from "@/components/Locations/Nallasopara/NallasopraAiAutomationClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara/ai-automation`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "AI Automation Services in Nallasopara | Sharp Rays";

const pageDescription =
  "Explore AI automation services in Nallasopara, including enquiry management, lead automation, AI-assisted communication, workflow integration and business process automation by Sharp Rays.";

const keywords = [
  "AI automation services in Nallasopara",
  "AI automation company in Nallasopara",
  "AI automation agency in Nallasopara",
  "business process automation in Nallasopara",
  "workflow automation in Nallasopara",
  "enquiry management automation",
  "lead management automation",
  "automated follow-up workflows",
  "AI-assisted customer communication",
  "AI chatbot services in Nallasopara",
  "CRM and business workflow automation",
  "data organisation and processing automation",
  "business tool integrations",
  "AI automation for small businesses",
  "AI automation in Nallasopara East",
  "AI automation in Nallasopara West",
  "AI automation near Tulinj Road",
  "AI automation near Achole",

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
      name: "AI Automation Services in Nallasopara",
      serviceType: [
        "Enquiry Management Automation",
        "Lead Management Automation",
        "Automated Follow-Up Workflows",
        "AI-Assisted Customer Communication",
        "Workflow and Task Automation",
        "AI Chatbot and FAQ Workflows",
        "Data Organisation and Processing",
        "Business Tool Integrations",
        "AI-Assisted Business Workflows",
      ],
      description:
        "AI automation and workflow solutions for businesses targeting Nallasopara East, Nallasopara West and surrounding areas. Services include enquiry management, lead organisation, follow-up workflows, AI-assisted communication, task automation, data processing and business tool integrations.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Nallasopara, Maharashtra, India",
      },
      url: pageUrl,
      category: "AI Automation Services",
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
          name: "AI Automation",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NallasoparaAIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <main>
        <NallasopraAiAutomationClientPage />
      </main>
      <Footer />
    </>
  );
}
