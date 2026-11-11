
import type { Metadata } from "next";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import RealEstateBuyerSearch from "@/components/Industries/RealEstate/RealEstateBuyerSearch";
import RealEstateFinalCTA from "@/components/Industries/RealEstate/RealEstateFinalCTA";
import RealEstateHero from "@/components/Industries/RealEstate/RealEstateHero";
import RealEstateLeadQuality from "@/components/Industries/RealEstate/RealEstateLeadQuality";
import RealEstateProjectExperience from "@/components/Industries/RealEstate/RealEstateProjectExperience";
import RealEstateServices from "@/components/Industries/RealEstate/RealEstateServices";
import RealEstateWhoWeHelp from "@/components/Industries/RealEstate/RealEstateWhoWeHelp";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/real-estate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/real-estate-og.webp`;

const PAGE_TITLE =
  "Real Estate Digital Marketing Agency in India | Sharp Rays";

const PAGE_DESCRIPTION =
  "Digital marketing for real estate developers and property businesses. Improve project visibility, attract qualified buyer enquiries and support site visits with SEO and ads.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  keywords: [
    "real estate digital marketing agency",
    "real estate marketing agency India",
    "digital marketing for real estate",
    "real estate SEO services",
    "SEO for real estate developers",
    "property marketing agency",
    "real estate lead generation",
    "property buyer lead generation",
    "Google Ads for real estate",
    "Meta Ads for real estate",
    "real estate landing page development",
    "real estate project marketing",
    "real estate site visit marketing",
    "real estate marketing automation",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Sharp Rays",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays Real-State digital marketing", type: "image/webp" }],

  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays real estate digital marketing services" }],
  },
};

const faqItems = [
  {
    question:
      "How can real estate companies generate qualified property leads online?",
    answer:
      "Real estate companies can use property-focused SEO, Google Search campaigns, Meta advertising, project landing pages and enquiry workflows. Matching campaigns to available properties, buyer budgets, locations and configurations helps improve lead relevance.",
  },
  {
    question: "What is real estate SEO?",
    answer:
      "Real estate SEO is the process of improving organic search visibility for property projects, localities, listings and relevant real estate services. It includes technical optimisation, location pages, project content, internal linking and useful property information.",
  },
  {
    question: "How can property developers improve Google rankings?",
    answer:
      "Developers can improve their search visibility by creating informative project and location pages, publishing accurate specifications, strengthening technical SEO and matching content to relevant buyer searches. Rankings depend on competition and other search factors.",
  },
  {
    question: "Are Google Ads effective for real estate lead generation?",
    answer:
      "Google Ads can help reach people actively searching for properties, locations and projects. Campaigns should use relevant keywords, accurate landing pages and conversion tracking that considers lead quality.",
  },
  {
    question:
      "Which is better for real estate marketing: Google Ads or Meta Ads?",
    answer:
      "Google Ads can capture existing search demand, while Meta Ads can build awareness and encourage exploration of suitable properties. Their relative effectiveness depends on the project, target audience, available budget and campaign execution.",
  },
  {
    question: "How can real estate companies increase site visits?",
    answer:
      "Clear project information, relevant audience targeting, easy visit scheduling and timely sales follow-up can help interested buyers progress towards site visits. Monitoring enquiry-to-visit rates helps identify where the process needs improvement.",
  },
  {
    question: "What should a real estate landing page include?",
    answer:
      "A useful project page should include location, available configurations, accurate pricing information, floor plans, amenities, project status, applicable regulatory details and clear enquiry or site-visit options.",
  },
  {
    question: "Can WhatsApp automation improve real estate lead management?",
    answer:
      "Consent-based WhatsApp and CRM workflows can support enquiry acknowledgements, relevant project information, lead assignment and site-visit reminders. Personalised advice, price commitments and negotiations should involve authorised team members.",
  },
  {
    question: "How much does digital marketing for real estate cost?",
    answer:
      "Costs depend on the number of projects, target locations, competition, services required, advertising budget and reporting needs. A suitable plan should consider qualified enquiries and site visits, not just raw lead volume.",
  },
  {
    question: "How long does real estate SEO take to show results?",
    answer:
      "Timelines vary by website condition, market competition, location and available content. SEO is a longer-term activity, and rankings or enquiry volumes cannot be guaranteed within a fixed timeframe.",
  },
] as const;

const services = [
  {
    name: "Real Estate SEO & Location Search",
    url: `${SITE_URL}/services/search-engine-optimization`,
  },
  {
    name: "Google Ads & Real Estate Performance Marketing",
    url: `${SITE_URL}/services/performance-marketing`,
  },
  {
    name: "Meta Ads & Social Media Marketing",
    url: `${SITE_URL}/services/social-media-marketing`,
  },
  {
    name: "Real Estate Website & Landing Page Development",
    url: `${SITE_URL}/services/website-development`,
  },
  {
    name: "Real Estate Content Marketing",
    url: `${SITE_URL}/services/content-marketing`,
  },
  {
    name: "AI Video & Real Estate Creative",
    url: `${SITE_URL}/services/video-and-creative`,
  },
  {
    name: "AI Automation & Property Enquiry Management",
    url: `${SITE_URL}/services/ai-automation`,
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#service`,
      },
      image: { "@id": `${PAGE_URL}#socialimage` },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      hasPart: {
        "@id": `${PAGE_URL}#faq`,
      },
    },

    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      name: "Sharp Rays real estate digital marketing services",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Real Estate Digital Marketing Services",
      serviceType: "Digital Marketing for Real Estate Businesses",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing services for real estate developers and property businesses. Services include real estate SEO, Google Ads, Meta advertising, project landing pages, content marketing, creative production and property enquiry automation.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Real estate developers, property development companies, real estate agencies and property marketing businesses",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Real Estate Digital Marketing Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: service.url,
            provider: {
              "@id": `${SITE_URL}/#organization`,
            },
          },
        })),
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Real Estate",
          item: PAGE_URL,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#real-estate-faqs`,
      name: "Real Estate Digital Marketing FAQs",
      description:
        "Frequently asked questions about real estate SEO, property lead generation, Google Ads, Meta Ads, site visits, project landing pages and lead management.",
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${PAGE_URL}#webpage`,
      },
      mainEntity: faqItems.map((faq) => ({
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

export default function RealEstate() {
  return (
    <main>
      <script
        id="real-estate-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Navbar />
      <RealEstateHero />
      <RealEstateBuyerSearch />
      <RealEstateLeadQuality />
      <RealEstateServices />
      <RealEstateProjectExperience />
      <RealEstateWhoWeHelp />
      <RealEstateFinalCTA />
      <Footer />
    </main>
  );
}
