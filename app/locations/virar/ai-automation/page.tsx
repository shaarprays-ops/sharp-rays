
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import VirarAIAutomationPageClient from "@/components/Locations/Virar/AIAutomation/VirarAIAutomationPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/virar/ai-automation`;

// Add the actual OG image URL when the image is ready.
const ogImage = "/og/Virar.webp";

export const metadata: Metadata = {
  title: "AI Automation Services in Virar | Sharp Rays",

  description:
    "AI automation services in Virar for WhatsApp enquiries, lead management, CRM updates, business workflows and customer communication. Explore practical automation with Sharp Rays.",

  keywords: [
    "AI automation services in Virar",
    "AI automation agency in Virar",
    "AI automation company in Virar",
    "AI automation solutions in Virar",
    "business automation in Virar",
    "workflow automation in Virar",
    "business process automation",
    "WhatsApp automation in Virar",
    "WhatsApp business automation",
    "WhatsApp enquiry automation",
    "WhatsApp chatbot services",
    "AI chatbot development in Virar",
    "AI assistants for businesses",
    "lead management automation",
    "lead capture automation",
    "lead qualification automation",
    "CRM automation services",
    "CRM integration services",
    "customer follow-up automation",
    "email automation services",
    "appointment booking automation",
    "appointment reminder automation",
    "business workflow automation",
    "AI-powered workflow automation",
    "data automation services",
    "reporting automation",
    "document processing automation",
    "administrative task automation",
    "customer communication automation",
    "automation for small businesses",
    "AI automation for startups",
    "AI automation for real estate businesses",
    "AI automation in Virar West",
    "AI automation in Virar East",
    "AI automation in Global City Virar",
    "AI automation in Agashi",
    "AI automation in Arnala",
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
    title: "AI Automation Services in Virar | Sharp Rays",
    description:
      "Simplify repetitive business tasks with WhatsApp automation, lead management, AI chatbots and connected workflows for businesses in Virar.",
    locale: "en_IN",
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "AI Automation Services in Virar - Sharp Rays",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services in Virar | Sharp Rays",
    description:
      "Practical AI automation for Virar businesses. Organise enquiries, connect workflows and simplify repetitive business processes.",
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
      name: "AI Automation Services in Virar | Sharp Rays",
      description:
        "AI automation services for businesses in Virar, including WhatsApp automation, business workflow automation, lead management, email automation, appointment booking, AI chatbots, data automation and document processing.",
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
      name: "AI Automation Services in Virar",
      serviceType: [
        "AI Automation",
        "WhatsApp Automation",
        "Business Workflow Automation",
        "Lead Management Automation",
        "CRM Automation",
        "Email Automation",
        "Appointment and Booking Automation",
        "AI Chatbots and Assistants",
        "Data and Reporting Automation",
        "Document and Administrative Automation",
      ],
      description:
        "Sharp Rays provides AI automation services for businesses targeting Virar. Solutions include WhatsApp enquiry workflows, lead capture and management, CRM updates, email automation, appointment reminders, AI chatbots, data processing, reporting and document automation. Workflows are designed around existing business processes with appropriate testing and human oversight.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Virar, Maharashtra, India",
      },
      url: pageUrl,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Retail businesses, real estate companies, professional services, education providers, ecommerce businesses, healthcare and wellness businesses, and growing teams",
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
          name: "Virar",
          item: `${siteUrl}/locations/virar`,
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

export default function VirarAIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />
      <Navbar />
      <VirarAIAutomationPageClient />
      <Footer />
    </>
  );
}
