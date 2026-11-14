
import type { Metadata } from "next";
import NaigaonAIAutomationClient from "@/components/Locations/Naigaon/AIAutomation/NaigaonAIAutomationClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/naigaon/ai-automation`;

// Add the verified OG image URL when the image is available.
// Example: `${siteUrl}/images/locations/naigaon/ai-automation-og.webp`
const ogImage = "/og/naigaon.webp";

export const metadata: Metadata = {
  title: "AI Automation Services in Naigaon | Sharp Rays",

  description:
    "AI automation services in Naigaon for lead capture, CRM updates, WhatsApp workflows and repetitive business tasks. Explore practical automation with Sharp Rays.",

  keywords: [
    "AI automation services in Naigaon",
    "AI automation agency in Naigaon",
    "AI automation company in Naigaon",
    "business automation in Naigaon",
    "workflow automation in Naigaon",
    "business process automation in Naigaon",
    "AI-powered workflow automation",
    "lead capture automation",
    "lead qualification automation",
    "CRM automation services",
    "WhatsApp automation services",
    "WhatsApp workflow automation",
    "email automation services",
    "AI-powered business automation",
    "AI workflow automation",
    "document processing automation",
    "data automation services",
    "reporting automation",
    "sales workflow automation",
    "internal task automation",
    "automated lead routing",
    "customer follow-up automation",
    "business process automation for small businesses",
    "AI automation for startups",
    "AI automation for local businesses",
    "AI automation in Naigaon East",
    "AI automation in Naigaon West",
    "AI automation near Naigaon Station",
    "AI automation in Vasai Virar",
    "Sharp Rays AI automation",
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
    title: "AI Automation Services in Naigaon | Sharp Rays",
    description:
      "Connect lead capture, CRM updates, WhatsApp workflows and repetitive business processes with practical AI automation services in Naigaon.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "AI Automation Services in Naigaon - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services in Naigaon | Sharp Rays",
    description:
      "Practical AI automation for Naigaon businesses. Connect lead capture, CRM, WhatsApp workflows and repetitive business tasks with Sharp Rays.",
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
      name: "AI Automation Services in Naigaon | Sharp Rays",
      description:
        "AI automation services for businesses in Naigaon, including workflow automation, lead capture, CRM automation, WhatsApp and email workflows, document processing and reporting automation.",
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
      name: "AI Automation Services in Naigaon",
      serviceType: [
        "AI Automation",
        "Workflow Automation",
        "Business Process Automation",
        "Lead Capture and Qualification Automation",
        "WhatsApp and Email Automation",
        "CRM Automation",
        "AI-Powered Workflows",
        "Document Processing Automation",
        "Reporting and Data Automation",
        "Internal Task Automation",
      ],
      description:
        "Sharp Rays provides practical AI automation services for businesses in Naigaon. Services include workflow design, lead capture and routing, CRM updates, WhatsApp and email workflows, AI-assisted classification and summarisation, document processing, reporting and internal task automation, with testing and human review where required.",
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
          "Small businesses, local businesses, startups and growing teams",
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
          name: "AI Automation",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NaigaonAIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <NaigaonAIAutomationClient />
      <Footer />
    </>
  );
}
