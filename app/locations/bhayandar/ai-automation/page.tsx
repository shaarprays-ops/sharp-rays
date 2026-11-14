
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BhayandarAIAutomationPageClient from "@/components/Locations/Bhayandar/AIAutomation/BhayandarAIAutomationPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/bhayandar/ai-automation`;

const ogImage = "/og/Bhyanadar.webp";

const pageTitle = "AI Automation Services in Bhayandar | Sharp Rays";

const pageDescription =
  "Automate repetitive business tasks with AI automation services in Bhayandar. Explore lead capture, CRM automation, WhatsApp and email workflows, document processing and business process automation by Sharp Rays.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "AI automation services in Bhayandar",
    "AI automation company in Bhayandar",
    "AI automation agency in Bhayandar",
    "business process automation in Bhayandar",
    "workflow automation in Bhayandar",
    "business workflow automation",
    "AI-powered workflow automation",
    "lead capture automation in Bhayandar",
    "lead qualification automation",
    "CRM automation services",
    "WhatsApp automation in Bhayandar",
    "WhatsApp business automation",
    "email automation services",
    "enquiry follow-up automation",
    "document processing automation",
    "AI document processing",
    "reporting and data automation",
    "internal task automation",
    "AI automation for small businesses",
    "AI automation for professional services",
    "AI automation for retail businesses",
    "AI automation for hospitality businesses",
    "AI automation for startups",
    "AI automation in Bhayandar West",
    "AI automation in Navghar",
    "AI automation near Uttan Road",
    "Sharp Rays AI automation",
  ],

  authors: [
    {
      name: "Sharp Rays",
      url: siteUrl,
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
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Sharp Rays",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AI Automation Services in Bhayandar - Sharp Rays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
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
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: new URL(ogImage, siteUrl).toString(),
        width: 1200,
        height: 630,
      },
      mainEntity: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "AI Automation Services in Bhayandar",
      serviceType: [
        "Workflow Automation",
        "Lead Capture and Qualification",
        "WhatsApp and Email Automation",
        "CRM Automation",
        "AI-Powered Workflows",
        "Document Processing",
        "Reporting and Data Automation",
        "Internal Task Automation",
      ],
      description:
        "Sharp Rays provides AI automation services for businesses targeting Bhayandar, including lead capture, enquiry routing, CRM updates, WhatsApp and email workflows, document processing, reporting and internal task automation. Workflows are planned around existing business processes, available integrations, testing requirements and human oversight.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Bhayandar, Maharashtra, India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Retail and shop businesses, professional services, hospitality businesses, startups, growing teams and service administration teams",
      },
      url: pageUrl,
      image: new URL(ogImage, siteUrl).toString(),
      category: "AI Automation Services",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Automation Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter - Focused Automation",
            description:
              "One focused workflow, up to two connected tools, basic triggers and conditions, CRM or spreadsheet automation, testing, launch, documentation and 14 days of post-launch support.",
            price: "14999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Focused AI Automation",
            },
          },
          {
            "@type": "Offer",
            name: "Growth - Connected Automation",
            description:
              "Up to three connected workflows, up to four standard integrations, lead qualification and routing, automated follow-up sequences, AI classification and summaries, error alerts and 30 days of post-launch support.",
            price: "29999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Connected AI Automation",
            },
          },
          {
            "@type": "Offer",
            name: "Scale - Advanced Automation",
            description:
              "Up to five connected workflows, multi-system automation, advanced API and webhook connections, document and reporting automation, human-in-the-loop controls, workflow monitoring setup and 60 days of post-launch support.",
            price: "49999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Advanced AI Automation",
            },
          },
          {
            "@type": "Offer",
            name: "Optional Automation Care",
            description:
              "Optional ongoing monitoring, error checks, minor workflow changes and optimisation.",
            price: "4999",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "4999",
              priceCurrency: "INR",
              unitText: "month",
            },
            itemOffered: {
              "@type": "Service",
              name: "Automation Care",
            },
          },
        ],
      },
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
          name: "Bhayandar",
          item: `${siteUrl}/locations/bhayandar`,
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

export default function BhayandarAIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <BhayandarAIAutomationPageClient />
      </main>

      <Footer />
    </>
  );
}
