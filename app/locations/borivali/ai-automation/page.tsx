
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliAiAutomationClientPage from "@/components/Locations/Borivali/BorivaliAiAutomationClientPage";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/ai-automation`;
const pageTitle = "AI Automation Services in Borivali | Sharp Rays";
const pageDescription =
  "AI automation services in Borivali for enquiry organisation, workflow automation, form and data processing, tool integrations, notifications and practical business workflows.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI automation agency in Borivali",
    "AI automation services in Borivali",
    "business process automation Borivali",
    "workflow automation Borivali",
    "AI workflow automation Borivali",
    "lead management automation Borivali",
    "enquiry automation Borivali",
    "form automation Borivali",
    "data automation Borivali",
    "business workflow integration Borivali",
    "AI automation for small businesses Borivali",
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
      alt: "AI Automation Services in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "AI Automation Services in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["What is AI automation?", "AI automation combines automation workflows with AI capabilities to assist with selected tasks such as processing, categorising or summarising information. The exact capabilities depend on the tools and workflow."],
  ["What AI automation services does Sharp Rays offer?", "Sharp Rays explores workflow automation, enquiry organisation, form and data workflows, AI-assisted information processing, notifications, integrations and workflow improvement."],
  ["Can AI automation help small businesses?", "Yes. Small businesses can explore automation for suitable repetitive tasks such as organising enquiries, routing information and creating reminders. The value depends on the process and implementation requirements."],
  ["Can you connect website forms with other tools?", "Where supported integrations and access permissions are available, website form information can be connected to compatible spreadsheets, databases, notification systems or other platforms."],
  ["Is AI automation fully independent of human involvement?", "Not necessarily. Important decisions, sensitive communication and uncertain AI outputs should retain appropriate human oversight."],
  ["How much does AI automation cost?", "Pricing depends on the number and complexity of workflows, integrations, data requirements and implementation scope. Contact Sharp Rays to discuss your specific requirements."],
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
      name: "AI Automation Services in Borivali",
      serviceType: [
        "Workflow Automation",
        "Enquiry and Lead Organisation",
        "Form and Data Automation",
        "AI-Assisted Information Processing",
        "Automated Notifications and Follow-Ups",
        "Customer Communication Workflows",
        "Tool and Platform Integrations",
        "Workflow Review and Improvement",
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
        { "@type": "ListItem", position: 4, name: "AI Automation", item: pageUrl },
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

export default function BorivaliAiAutomation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliAiAutomationClientPage /></main>
      <Footer />
    </>
  );
}
