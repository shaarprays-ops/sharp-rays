import type { Metadata } from "next";

import AiAutomationExplained from "@/components/AIAutomation/AiAutomationExplained";
import AiAutomationFAQ from "@/components/AIAutomation/AiAutomationFAQ";
import AiAutomationFinalCTA from "@/components/AIAutomation/AiAutomationFinalCTA";
import AiAutomationHero from "@/components/AIAutomation/AiAutomationHero";
import AiAutomationHumanBalance from "@/components/AIAutomation/AiAutomationHumanBalance";
import AiAutomationJourney from "@/components/AIAutomation/AiAutomationJourney";
import AiAutomationPricing from "@/components/AIAutomation/AiAutomationPricing";
import AiAutomationProblem from "@/components/AIAutomation/AiAutomationProblem";
import AiAutomationServices from "@/components/AIAutomation/AiAutomationServices";
import AutomationByBusinessFunction from "@/components/AIAutomation/AutomationByBusinessFunction";
import BeforeAfterAutomation from "@/components/AIAutomation/BeforeAfterAutomation";
import HumanInTheLoopAutomation from "@/components/AIAutomation/HumanInTheLoopAutomation";
import SharpRaysAutomationFramework from "@/components/AIAutomation/SharpRaysAutomationFramework";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title:
    "AI Automation Agency in India | Sharp Rays",

  description:
    "AI automation agency in India helping businesses automate CRM updates, lead follow-ups, support, reporting and repetitive workflows while keeping human oversight.",

  applicationName: "Sharp Rays",

  creator: "Sharp Rays",

  publisher: "Sharp Rays",

  keywords: [
    "AI automation agency in India",
    "AI automation services India",
    "AI automation services for small businesses",
    "business automation agency India",
    "workflow automation services India",
    "CRM automation services India",
    "lead qualification automation",
    "lead follow up automation",
    "sales automation services",
    "customer support automation",
    "marketing automation services",
    "email automation services",
    "document processing automation",
    "reporting automation",
    "AI agent development India",
    "AI workflow automation",
    "small business automation India",
    "WhatsApp AI automation",
    "CRM workflow automation",
  ],

  alternates: {
    canonical:
      "https://www.sharprays.com/services/ai-automation",
  },

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

  openGraph: {
    type: "website",

    locale: "en_IN",

    url:
      "https://www.sharprays.com/services/ai-automation",

    siteName:
      "Sharp Rays",

    title:
      "AI Automation Agency in India",

    description:
      "AI automation for CRM updates, lead follow-ups, customer support, reporting and repetitive workflows with appropriate human oversight.",

    images: [
      {
        url:
          "/og/services-ai-automation.webp",

        width: 1200,

        height: 630,

        alt:
          "Sharp Rays AI Automation Agency in India",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "AI Automation Agency in India",

    description:
      "AI automation for CRM updates, lead follow-ups, customer support, reporting and repetitive workflows with appropriate human oversight.",

    images: [
      "/og/services-ai-automation.webp",
    ],
  },
};

/* =========================================================
   CORE SCHEMA
   ImageObject + Organization + WebSite + WebPage
========================================================= */

const aiAutomationCoreSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       PRIMARY IMAGE
    ===================================================== */

    {
      "@type":
        "ImageObject",

      "@id":
        "https://www.sharprays.com/services/ai-automation#primaryimage",

      url:
        "https://www.sharprays.com/og/services-ai-automation.webp",

      contentUrl:
        "https://www.sharprays.com/og/services-ai-automation.webp",

      width:
        1200,

      height:
        630,

      caption:
        "Sharp Rays AI Automation Agency in India",

      representativeOfPage:
        true,

      inLanguage:
        "en-IN",
    },

    /* =====================================================
       LOGO
    ===================================================== */

    {
      "@type":
        "ImageObject",

      "@id":
        "https://www.sharprays.com/#logo",

      url:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      contentUrl:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      caption:
        "Sharp Rays Logo",
    },

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    {
      "@type":
        "Organization",

      "@id":
        "https://www.sharprays.com/#organization",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      url:
        "https://www.sharprays.com/",

      logo: {
        "@id":
          "https://www.sharprays.com/#logo",
      },

      description:
        "Sharp Rays is a digital marketing and digital growth company helping startups, small businesses, D2C brands and growing businesses through SEO, social media marketing, performance marketing, website development, content, AI video and AI automation.",

      slogan:
        "Digital growth, without the guesswork.",

      email:
        "info@sharprays.com",

      telephone:
        "+91-9415951060",

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],

      areaServed: [
        {
          "@type": "City",
          name: "Mumbai",
        },

        {
          "@type": "Country",
          name: "India",
        },

        {
          "@type": "Place",
          name: "Worldwide",
        },
      ],

      knowsAbout: [
        "AI Automation",
        "Workflow Automation",
        "AI Agents",
        "Lead Qualification Automation",
        "CRM Automation",
        "Sales Automation",
        "Customer Support Automation",
        "Marketing Automation",
        "Email Automation",
        "Document Processing Automation",
        "Reporting Automation",
        "Data Automation",
        "Internal Knowledge Automation",
        "Lead Follow-Up Automation",
        "API Integrations",
        "Webhook Automation",
        "Human-in-the-Loop Automation",
        "AI Classification",
        "AI Summarization",
        "WhatsApp AI",
      ],
    },

    /* =====================================================
       WEBSITE
    ===================================================== */

    {
      "@type":
        "WebSite",

      "@id":
        "https://www.sharprays.com/#website",

      url:
        "https://www.sharprays.com/",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },

    /* =====================================================
       WEBPAGE
    ===================================================== */

    {
      "@type":
        "WebPage",

      "@id":
        "https://www.sharprays.com/services/ai-automation#webpage",

      url:
        "https://www.sharprays.com/services/ai-automation",

      name:
        "AI Automation Agency in India | Sharp Rays",

      headline:
        "Automate the Work That Shouldn't Need Your Attention.",

      alternativeHeadline:
        "AI Automation for Repetitive Work, Connected Systems and Smarter Business Workflows",

      description:
        "Sharp Rays helps businesses design AI-powered workflows for lead qualification, CRM updates, customer support, follow-ups, reporting, document processing and internal operations.",

      isPartOf: {
        "@id":
          "https://www.sharprays.com/#website",
      },

      about: {
        "@id":
          "https://www.sharprays.com/services/ai-automation#service",
      },

      mainEntity: {
        "@id":
          "https://www.sharprays.com/services/ai-automation#service",
      },

      primaryImageOfPage: {
        "@id":
          "https://www.sharprays.com/services/ai-automation#primaryimage",
      },

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      breadcrumb: {
        "@id":
          "https://www.sharprays.com/services/ai-automation#breadcrumb",
      },

      hasPart: [
        {
          "@id":
            "https://www.sharprays.com/services/ai-automation#plans",
        },

        {
          "@id":
            "https://www.sharprays.com/services/ai-automation#faq",
        },
      ],

      audience: {
        "@type":
          "BusinessAudience",

        name:
          "Startups, small businesses and growing companies",

        audienceType:
          "Businesses seeking AI workflow automation, CRM automation, lead automation, support automation and operational automation",

        description:
          "Businesses that want to reduce repetitive work, connect systems and improve the movement of information and tasks.",
      },

      mentions: [
        {
          "@type": "Thing",
          name: "AI Automation",
        },

        {
          "@type": "Thing",
          name: "Workflow Automation",
        },

        {
          "@type": "Thing",
          name: "AI Agents",
        },

        {
          "@type": "Thing",
          name: "Lead Qualification Automation",
        },

        {
          "@type": "Thing",
          name: "CRM Automation",
        },

        {
          "@type": "Thing",
          name: "Lead Follow-Up Automation",
        },

        {
          "@type": "Thing",
          name: "Customer Support Automation",
        },

        {
          "@type": "Thing",
          name: "Document Processing Automation",
        },

        {
          "@type": "Thing",
          name: "Reporting Automation",
        },

        {
          "@type": "Thing",
          name: "Human-in-the-Loop Automation",
        },
      ],

      significantLink: [
        "https://www.sharprays.com/services",
        "https://www.sharprays.com/services/ai-automation/whatsapp-automation",
        "https://www.sharprays.com/free-audit",
        "https://www.sharprays.com/contact",
      ],

      copyrightYear:
        2026,

      copyrightHolder: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },
  ],
};

/* =========================================================
   AI AUTOMATION SERVICE
========================================================= */

const aiAutomationServiceSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Service",

  "@id":
    "https://www.sharprays.com/services/ai-automation#service",

  name:
    "AI Automation",

  alternateName:
    "Business AI Automation Services",

  url:
    "https://www.sharprays.com/services/ai-automation",

  serviceType:
    "AI Automation",

  category:
    "Business Process Automation",

  description:
    "AI automation services covering workflow automation, AI agents, lead qualification, CRM automation, sales automation, customer support, marketing, email, document processing, reporting and internal knowledge workflows.",

  provider: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
    },

    {
      "@type": "Country",
      name: "India",
    },

    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],

  audience: {
    "@type":
      "BusinessAudience",

    audienceType:
      "Startups, small businesses and growing businesses seeking workflow and AI automation",
  },

  serviceOutput: [
    {
      "@type": "CreativeWork",
      name: "Workflow Automation",
    },

    {
      "@type": "CreativeWork",
      name: "AI Agent Workflow",
    },

    {
      "@type": "CreativeWork",
      name: "Lead Qualification Automation",
    },

    {
      "@type": "CreativeWork",
      name: "CRM Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Sales Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Customer Support Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Marketing Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Email Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Document Processing Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Reporting and Data Automation",
    },

    {
      "@type": "CreativeWork",
      name: "Internal Knowledge Automation",
    },
  ],

  hasOfferCatalog: {
    "@id":
      "https://www.sharprays.com/services/ai-automation#plans",
  },
};

/* =========================================================
   AUTOMATION PLANS
========================================================= */

const aiAutomationPlansSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "OfferCatalog",

  "@id":
    "https://www.sharprays.com/services/ai-automation#plans",

  name:
    "Sharp Rays AI Automation Plans",

  url:
    "https://www.sharprays.com/services/ai-automation",

  description:
    "Project-based AI automation plans ranging from one focused workflow to broader multi-system automation.",

  itemListOrder:
    "https://schema.org/ItemListUnordered",

  numberOfItems:
    3,

  itemListElement: [
    /* =====================================================
       STARTER
    ===================================================== */

    {
      "@type":
        "Offer",

      name:
        "Starter AI Automation",

      url:
        "https://www.sharprays.com/contact?service=ai-automation",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type":
          "Service",

        name:
          "Starter Focused Automation",

        serviceType:
          "AI Automation",

        description:
          "A focused automation project for businesses with one clear manual process they want to simplify, connect or automate.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type":
              "PropertyValue",

            name:
              "Project Scope",

            value:
              "1 Focused Automation Workflow",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Connected Tools",

            value:
              "Up to 2 Connected Tools",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Revision Rounds",

            value:
              "1 Revision Round",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Post-Launch Support",

            value:
              "14 Days",
          },
        ],
      },
    },

    /* =====================================================
       GROWTH
    ===================================================== */

    {
      "@type":
        "Offer",

      name:
        "Growth AI Automation",

      url:
        "https://www.sharprays.com/contact?service=ai-automation",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type":
          "Service",

        name:
          "Growth Connected Automation",

        serviceType:
          "AI Automation",

        description:
          "A connected automation project for growing businesses that need several systems, actions or follow-ups working together automatically.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type":
              "PropertyValue",

            name:
              "Project Scope",

            value:
              "Up to 3 Connected Workflows",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Tool Integrations",

            value:
              "Up to 4 Standard Tool Integrations",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Revision Rounds",

            value:
              "2 Revision Rounds",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Post-Launch Support",

            value:
              "30 Days",
          },
        ],
      },
    },

    /* =====================================================
       SCALE
    ===================================================== */

    {
      "@type":
        "Offer",

      name:
        "Scale AI Automation",

      url:
        "https://www.sharprays.com/contact?service=ai-automation",

      seller: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      itemOffered: {
        "@type":
          "Service",

        name:
          "Scale Advanced Automation",

        serviceType:
          "AI Automation",

        description:
          "An advanced automation project for businesses connecting several workflows, systems or operational teams.",

        provider: {
          "@id":
            "https://www.sharprays.com/#organization",
        },

        additionalProperty: [
          {
            "@type":
              "PropertyValue",

            name:
              "Project Scope",

            value:
              "Up to 5 Connected Workflows",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Revision Rounds",

            value:
              "3 Revision Rounds",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Post-Launch Support",

            value:
              "60 Days",
          },

          {
            "@type":
              "PropertyValue",

            name:
              "Human Controls",

            value:
              "Human-in-the-Loop Controls",
          },
        ],
      },
    },
  ],
};

/* =========================================================
   OPTIONAL AUTOMATION CARE OFFER

   IMPORTANT:
   ₹4,999/month refers specifically to optional ongoing
   support after the included support period.
========================================================= */

const automationCareOfferSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Offer",

  "@id":
    "https://www.sharprays.com/services/ai-automation#automation-care",

  name:
    "Automation Care",

  url:
    "https://www.sharprays.com/services/ai-automation",

  price:
    "4999",

  priceCurrency:
    "INR",

  priceSpecification: {
    "@type":
      "UnitPriceSpecification",

    price:
      "4999",

    priceCurrency:
      "INR",

    unitText:
      "MONTH",

    minPrice:
      "4999",
  },

  description:
    "Optional ongoing support for monitoring, error checks, minor workflow adjustments, dependency checks and basic optimization after the included support period.",

  seller: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  itemOffered: {
    "@type":
      "Service",

    name:
      "Automation Care",

    serviceType:
      "AI Automation Support",

    provider: {
      "@id":
        "https://www.sharprays.com/#organization",
    },
  },
};

/* =========================================================
   BREADCRUMB
========================================================= */

const breadcrumbSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "BreadcrumbList",

  "@id":
    "https://www.sharprays.com/services/ai-automation#breadcrumb",

  itemListElement: [
    {
      "@type":
        "ListItem",

      position:
        1,

      name:
        "Home",

      item:
        "https://www.sharprays.com/",
    },

    {
      "@type":
        "ListItem",

      position:
        2,

      name:
        "Services",

      item:
        "https://www.sharprays.com/services",
    },

    {
      "@type":
        "ListItem",

      position:
        3,

      name:
        "AI Automation",

      item:
        "https://www.sharprays.com/services/ai-automation",
    },
  ],
};

/* =========================================================
   FAQ PAGE SCHEMA
========================================================= */

const faqSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "FAQPage",

  "@id":
    "https://www.sharprays.com/services/ai-automation#faq",

  url:
    "https://www.sharprays.com/services/ai-automation#ai-automation-faq",

  name:
    "AI Automation FAQs",

  description:
    "Answers to common questions about AI automation, workflow automation, AI agents, CRM automation, integrations, security, pricing and implementation.",

  isPartOf: {
    "@id":
      "https://www.sharprays.com/services/ai-automation#webpage",
  },

  about: {
    "@id":
      "https://www.sharprays.com/services/ai-automation#service",
  },

  publisher: {
    "@id":
      "https://www.sharprays.com/#organization",
  },

  inLanguage:
    "en-IN",

  mainEntity: [
    {
      "@type":
        "Question",

      name:
        "What is AI automation?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "AI automation combines artificial intelligence with workflow automation to help complete or coordinate business tasks with less manual intervention. It can be used to interpret information, classify requests, generate or summarize content, update systems and trigger actions within defined workflows.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "What is the difference between AI automation and traditional automation?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Traditional automation usually follows predefined rules such as “when this happens, do that.” AI-enabled automation can also help interpret less structured information such as text, documents or customer requests before deciding which predefined action should follow. The right workflow may use both approaches together.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "What business processes can be automated?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Common opportunities can include lead capture, CRM updates, customer support routing, follow-ups, reporting, document processing, internal notifications, marketing workflows and recurring administrative tasks. The best opportunities depend on how your business currently operates.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "What is workflow automation?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Workflow automation connects triggers and actions so a process can move between steps with less manual coordination. For example, a new website enquiry could trigger CRM creation, lead classification, assignment, acknowledgement and follow-up tasks automatically.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "What is an AI agent?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "An AI agent is a software-based system designed to use information, reasoning and tools to perform defined tasks towards an objective. In business workflows, an agent may retrieve information, interpret requests, prepare outputs or trigger approved actions. The level of autonomy should depend on the task and associated risk.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can AI automate lead qualification?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Yes. A workflow can collect lead information, categorize enquiries, compare them with defined criteria, update the CRM and route suitable opportunities to the appropriate person. Important commercial decisions can remain with the sales team.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can you automate our CRM?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "CRM workflows can often be automated around lead creation, updates, assignment, follow-up tasks, pipeline stages and internal notifications. The exact possibilities depend on the CRM and available integrations.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can AI automate customer support?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "AI can support customer service by classifying requests, retrieving approved information, preparing responses, summarizing conversations and routing tickets. Sensitive or complex issues should still be escalated appropriately.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can automation connect different business tools?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Often, yes. Systems can be connected where suitable APIs, integrations or other supported methods are available. Technical feasibility depends on the platforms involved.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Do we need to replace our existing software?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Usually not. Many automation projects focus on connecting and improving the systems a business already uses rather than replacing everything. The existing technology should be reviewed before recommending changes.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Is AI automation secure?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Security depends on the systems, architecture, permissions, data and implementation. Any automation that handles sensitive business information should be designed around appropriate access controls and data-handling requirements. Security should be evaluated for the actual workflow rather than assumed simply because a particular technology is being used.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Will AI automation replace our employees?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "The purpose of most business automation is to reduce repetitive work and improve process consistency. It can change how certain tasks are completed, but many workflows still require people for judgement, exceptions, relationships, creativity and accountability.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "How do you decide what should be automated?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "We look for processes that are repetitive, rule-driven, time-consuming, error-prone or dependent on unnecessary manual handoffs. We also consider risk, complexity, frequency and the value of keeping a person involved.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can you automate a process that uses spreadsheets?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Potentially. Spreadsheet-based workflows are common automation candidates, especially when information needs to move between forms, spreadsheets, CRM systems or reporting tools. The right implementation depends on the role the spreadsheet currently plays.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can AI automation help small businesses?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Yes. Small businesses can benefit when automation removes recurring administrative work or improves response times without requiring additional manual coordination. The automation should still be proportionate to the size and complexity of the process.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "How much does AI automation cost?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Pricing depends on the number of workflows, systems involved, AI requirements, integrations, business logic, data complexity, testing and ongoing support. We define the process and technical scope before confirming commercial terms.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "How long does an automation project take?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "Timeline depends on workflow complexity, integrations, access requirements, testing and the number of exceptions that need to be handled. A focused workflow may be significantly simpler than a multi-system automation program. The project timeline is defined after discovery.",
      },
    },

    {
      "@type":
        "Question",

      name:
        "Can AI automation improve business efficiency?",

      acceptedAnswer: {
        "@type":
          "Answer",

        text:
          "It can improve efficiency when applied to processes where repetitive work, waiting or manual coordination creates unnecessary friction. The value should be measured against real operational outcomes such as time saved, faster responses or fewer manual steps rather than the fact that AI was used.",
      },
    },
  ],
};

/* =========================================================
   PAGE
========================================================= */

export default function AiAutomationPage() {
  return (
    <>
      {/* =====================================================
          CORE STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-automation-core-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiAutomationCoreSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          SERVICE STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-automation-service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiAutomationServiceSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          PLANS STRUCTURED DATA
      ===================================================== */}

      <script
        id="ai-automation-plans-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aiAutomationPlansSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          AUTOMATION CARE OFFER
      ===================================================== */}

      <script
        id="ai-automation-care-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            automationCareOfferSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <script
        id="ai-automation-breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <script
        id="ai-automation-faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main className="min-h-screen bg-white">
        <Navbar />

        <AiAutomationHero />

        <AiAutomationExplained />

        <AiAutomationProblem />

        <AiAutomationHumanBalance />

        <AiAutomationJourney />

        <AiAutomationServices />

        <AutomationByBusinessFunction />

        <BeforeAfterAutomation />

        <SharpRaysAutomationFramework />

        <HumanInTheLoopAutomation />

        <AiAutomationPricing />

        <AiAutomationFAQ />

        <AiAutomationFinalCTA />

        <Footer />
      </main>
    </>
  );
}