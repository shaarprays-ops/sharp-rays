
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import MiraRoadWebsiteDevelopmentPageClient from "@/components/Locations/MiraRoad/WebsiteDevelopment/MiraRoadWebsiteDevelopmentPageClient";

const siteUrl = "https://www.sharprays.com";

const pageUrl =
  `${siteUrl}/locations/mira-road/website-development`;

const pageTitle =
  "Website Development in Mira Road | Sharp Rays";

const pageDescription =
  "Website design and development in Mira Road for restaurants, clinics and growing businesses. Explore responsive websites, ecommerce, WhatsApp integration and booking-focused websites with Sharp Rays.";

const ogImage =
  `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "website development in Mira Road",
    "website development company in Mira Road",
    "website design in Mira Road",
    "web development agency Mira Road",
    "website designer in Mira Road",
    "restaurant website development Mira Road",
    "clinic website development Mira Road",
    "ecommerce website development Mira Road",
    "business website design Mira Road",
    "WhatsApp integration website Mira Road",
    "responsive website development Mira Road",
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
        alt: "Website Design and Development in Mira Road by Sharp Rays",
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

const faqs = [
  {
    question: "Do you provide website development in Mira Road?",
    answer:
      "Yes. Sharp Rays provides website design and development for businesses targeting customers in Mira Road. The project scope can include business websites, ecommerce websites, service pages, WhatsApp integration and booking-focused websites.",
  },
  {
    question: "How much does website development cost in Mira Road?",
    answer:
      "Website cost depends on the number of pages, design requirements, functionality, integrations and content requirements. You can explore Sharp Rays pricing packages or request a quote for your project.",
  },
  {
    question: "Can you build a website for a Mira Road restaurant?",
    answer:
      "Yes. A restaurant website can include a menu, food and venue images, location information, opening details and WhatsApp ordering links so customers can enquire or place orders conveniently.",
  },
  {
    question: "Can you build an appointment website for clinics?",
    answer:
      "Yes. A clinic website can present doctors, treatments, timings, location details and appointment enquiry options. The exact booking functionality depends on the agreed project scope.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Websites are designed with responsive layouts so visitors can access and navigate the pages on mobile phones, tablets and desktop screens.",
  },
  {
    question: "Can you add WhatsApp to my website?",
    answer:
      "Yes. WhatsApp links and enquiry journeys can be added to relevant pages so visitors can contact your business or enquire about products and services.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We can build SEO foundations into the website, including logical page structure, headings, metadata, responsive layouts and internal linking. Ongoing SEO work can be planned separately.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your current website and discuss improvements to its design, content structure, mobile experience, functionality and overall customer journey.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the size of the website, content readiness, design complexity, functionality and feedback process. A project timeline can be discussed after understanding your requirements.",
  },
  {
    question: "Will I be able to update my website later?",
    answer:
      "Future updates depend on the technology and content management setup selected for the project. We can discuss the appropriate setup based on how frequently you need to make changes.",
  },
  {
    question: "Do you develop ecommerce websites?",
    answer:
      "Yes. Ecommerce projects can include product pages, category organisation, shopping functionality and suitable enquiry or checkout options depending on the requirements.",
  },
  {
    question: "How can I get a website development quote?",
    answer:
      "Contact Sharp Rays with your business details, website requirements and any reference websites you like. We can discuss the scope and provide a suitable project quotation.",
  },
];

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
      about: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Website Design and Development in Mira Road",
      serviceType: [
        "Website Design",
        "Website Development",
        "Business Website Development",
        "Ecommerce Website Development",
        "Booking Website Development",
        "WhatsApp Integration",
        "SEO-Friendly Website Development",
      ],
      description:
        "Website design and development for businesses targeting customers in Mira Road. Projects can include responsive business websites, ecommerce stores, restaurant websites with WhatsApp ordering, clinic websites with appointment enquiries, service websites and SEO-friendly website foundations.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Mira Road, Maharashtra, India",
      },
      url: pageUrl,
      mainEntityOfPage: {
        "@id": `${pageUrl}/#webpage`,
      },
      hasOfferCatalog: {
        "@id": `${pageUrl}/#offer-catalog`,
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": `${pageUrl}/#offer-catalog`,
      name: "Website Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Website Package",
          price: "14999",
          priceCurrency: "INR",
          description:
            "Starting package for businesses that need a professional website foundation. Final scope and inclusions depend on the confirmed project requirements.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Starter Website Development",
          },
        },
        {
          "@type": "Offer",
          name: "Growth Website Package",
          price: "24999",
          priceCurrency: "INR",
          description:
            "Starting package for growing businesses that need a more developed website. Final scope and inclusions depend on the confirmed project requirements.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Growth Website Development",
          },
        },
        {
          "@type": "Offer",
          name: "Advanced Website Package",
          description:
            "Custom website development for projects with broader functionality and specific requirements. Pricing depends on the confirmed project scope.",
          url: pageUrl,
          itemOffered: {
            "@type": "Service",
            name: "Advanced Website Development",
          },
        },
      ],
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
          name: "Website Development",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadWebsiteDevelopmentPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadWebsiteDevelopmentPageClient />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd,
          }}
        />
      </main>

      <Footer />
    </>
  );
}
