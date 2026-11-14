
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MiraRoadAiAutomationClientPage from "@/components/Locations/MiraRoad/AIAutomation/MiraRoadAiAutomationClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/mira-road/ai-automation`;

const pageTitle = "AI Automation Services in Mira Road | Sharp Rays";

const pageDescription =
  "AI automation services in Mira Road for business workflows, AI chatbots, enquiry capture, lead management, tool integrations and repetitive task automation. Discuss your requirements with Sharp Rays.";

const ogImage = `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "AI automation services in Mira Road",
    "AI automation agency in Mira Road",
    "AI automation company in Mira Road",
    "business process automation in Mira Road",
    "AI chatbot development in Mira Road",
    "workflow automation services in Mira Road",
    "lead management automation in Mira Road",
    "AI integration services in Mira Road",
    "business workflow automation Mira Road",
    "customer enquiry automation Mira Road",
    "CRM automation services Mira Road",
    "AI assistants for businesses in Mira Road",
  ],

  authors: [{ name: "Sharp Rays" }],
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

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Sharp Rays",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "AI Automation Services in Mira Road by Sharp Rays",
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
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "AI Automation Services in Mira Road",
      serviceType: [
        "Business Workflow Automation",
        "AI Chatbots and Assistants",
        "Lead Management Automation",
        "AI and Business Tool Integrations",
        "Customer Communication Automation",
        "Data and Administrative Automation",
      ],
      description:
        "Sharp Rays provides AI automation services for businesses in Mira Road, including workflow automation, AI-powered assistants, enquiry capture, lead management, business notifications, data organisation and integrations between compatible tools.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Mira Road, Maharashtra, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mira Road",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Local businesses, real estate companies, clinics, educational institutions, retailers, restaurants and professional service providers",
      },
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
              "Up to three connected workflows, up to four standard integrations, lead qualification and routing, automated follow-up sequences, AI classification and summaries, error alerts, fallback paths and 30 days of post-launch support.",
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
            name: "Automation Care",
            description:
              "Optional ongoing monitoring, error checks, minor workflow changes and optimisation after the included support period.",
            price: "4999",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "4999",
              priceCurrency: "INR",
              unitText: "MONTH",
            },
            itemOffered: {
              "@type": "Service",
              name: "AI Automation Care and Maintenance",
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
          name: "Mira Road",
          item: `${siteUrl}/locations/mira-road`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI Automation",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AI automation for a business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI automation combines artificial intelligence with workflows and connected applications to handle suitable business tasks. Examples include answering defined customer questions, organising enquiry information and assisting with repetitive processes.",
          },
        },
        {
          "@type": "Question",
          name: "Does Sharp Rays provide AI automation services in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sharp Rays offers AI automation solutions for businesses targeting customers in Mira Road. Depending on the requirements, the scope can include workflow automation, AI chatbots, lead management processes and business tool integrations.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build an AI chatbot for my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A website chatbot can be designed to answer defined questions, share approved business information and collect relevant enquiry details. Its capabilities depend on the information, integrations and boundaries configured for it.",
          },
        },
        {
          "@type": "Question",
          name: "Can AI automation help manage customer enquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Suitable workflows can capture enquiry details, organise information, send internal notifications and support follow-up processes. The exact workflow depends on your existing tools and requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Can you automate lead follow-ups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lead follow-up workflows can use defined triggers and approved communication channels to support reminders, notifications and other agreed actions. Human review can remain part of the process where needed.",
          },
        },
        {
          "@type": "Question",
          name: "Can you connect website forms with a CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This may be possible when the website form and CRM provide compatible integration options. We first review the tools, available APIs or connectors and the information that needs to move between them.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need technical knowledge to use automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. The workflow can be designed around the way your team already works. We explain the agreed process and provide suitable handover guidance.",
          },
        },
        {
          "@type": "Question",
          name: "Can automation work with my existing business tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, yes. Compatibility depends on the applications, their available integrations, API access, account permissions and any usage restrictions.",
          },
        },
        {
          "@type": "Question",
          name: "How much do AI automation services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on workflow complexity, the number of integrations, AI usage, implementation requirements and ongoing support. Sharp Rays discusses the scope before preparing a project estimate.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to implement an automation workflow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on the number of workflow steps, integrations, testing requirements and access to the necessary tools. A clear estimate can be provided after understanding the project.",
          },
        },
        {
          "@type": "Question",
          name: "Can an AI chatbot answer every customer question?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI chatbot should operate within defined information and response boundaries. Questions outside its configured knowledge or capabilities should be directed to a human team member where appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with Sharp Rays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Share your business details, the tasks you want to automate and the tools you currently use. Sharp Rays can review the requirements and discuss a suitable automation approach.",
          },
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadAiAutomationPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadAiAutomationClientPage />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </main>

      <Footer />
    </>
  );
}
