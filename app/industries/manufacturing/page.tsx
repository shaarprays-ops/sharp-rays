
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ManufacturingBuyerSearch from "@/components/Industries/Manufacturing/ManufacturingBuyerSearch";
import ManufacturingFinalCTA from "@/components/Industries/Manufacturing/ManufacturingFinalCTA";
import ManufacturingHero from "@/components/Industries/Manufacturing/ManufacturingHero";
import ManufacturingRFQ from "@/components/Industries/Manufacturing/ManufacturingRFQ";
import ManufacturingServices from "@/components/Industries/Manufacturing/ManufacturingServices";
import ManufacturingWebsite from "@/components/Industries/Manufacturing/ManufacturingWebsite";
import ManufacturingWhoWeHelp from "@/components/Industries/Manufacturing/ManufacturingWhoWeHelp";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/manufacturing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/manufacturing-og.webp`;

const PAGE_TITLE =
  "Manufacturing Digital Marketing Agency in India | Sharp Rays";

const PAGE_DESCRIPTION =
  "Digital marketing for manufacturers, OEMs and industrial suppliers. Improve B2B search visibility and attract qualified RFQs with industrial SEO, Google Ads and websites.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "manufacturing digital marketing agency",
    "manufacturing marketing agency India",
    "digital marketing for manufacturers",
    "industrial digital marketing agency",
    "manufacturing SEO",
    "industrial SEO services",
    "SEO for manufacturers",
    "B2B manufacturing lead generation",
    "industrial lead generation",
    "Google Ads for manufacturers",
    "manufacturing website development",
    "OEM digital marketing",
    "industrial supplier marketing",
    "manufacturing content marketing",
    "B2B RFQ generation",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays manufacturing and industrial digital marketing", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays manufacturing and industrial digital marketing" }],
  },
};

const faqItems = [
  {
    question: "How can manufacturing companies generate B2B leads online?",
    answer:
      "Manufacturing companies can attract relevant B2B enquiries through industrial SEO, Google Search Ads, detailed product pages, professional websites, technical content and quotation request forms. A good strategy focuses on buyer requirements, product relevance and enquiry quality.",
  },
  {
    question: "What is manufacturing SEO?",
    answer:
      "Manufacturing SEO is the process of improving a manufacturer's organic search visibility for relevant products, materials, manufacturing processes and supplier searches. It includes technical SEO, product-page optimisation, capability pages, content development and internal linking.",
  },
  {
    question: "How can manufacturers improve their Google rankings?",
    answer:
      "Manufacturers can improve search visibility by building accurate product and capability pages, targeting relevant industrial searches, improving technical SEO, strengthening internal links and providing useful product specifications. Rankings depend on competition, website quality and other factors.",
  },
  {
    question: "Are Google Ads effective for manufacturing companies?",
    answer:
      "Google Ads can help manufacturers reach businesses actively searching for industrial products and manufacturing services. Product-focused campaigns, relevant landing pages and quotation tracking can make advertising more useful.",
  },
  {
    question: "What should a manufacturing company website include?",
    answer:
      "A manufacturing website should clearly explain products, capabilities, materials, technical specifications, production processes, documented certifications and company information. It should also make it easy for relevant buyers to request quotations.",
  },
  {
    question: "How can manufacturers get more qualified quotation enquiries?",
    answer:
      "Manufacturers can improve RFQ quality by targeting relevant buyer searches, clearly presenting their capabilities and using enquiry forms that capture important requirements such as product details, quantity, specifications and delivery timelines.",
  },
  {
    question: "Can digital marketing help Indian manufacturers find international buyers?",
    answer:
      "Yes. International SEO, market-specific product pages and targeted Google Ads can improve visibility among overseas buyers. The approach should reflect the manufacturer's export capabilities, target markets and applicable requirements.",
  },
  {
    question: "Is LinkedIn marketing useful for B2B manufacturers?",
    answer:
      "LinkedIn can support professional visibility, industry content distribution and awareness among relevant business audiences. Its effectiveness for direct lead generation varies by industry, audience and sales cycle.",
  },
  {
    question: "How can AI automation help manufacturing businesses?",
    answer:
      "AI automation can help organise enquiries, route RFQs, acknowledge requests, update CRM systems and schedule administrative follow-ups. Technical feasibility, pricing and quotations should still receive appropriate human review.",
  },
  {
    question: "How long does manufacturing SEO take to show results?",
    answer:
      "Manufacturing SEO is a longer-term strategy. Results depend on your website's current condition, competition, product categories and target markets. Rankings and enquiries cannot be guaranteed within a fixed timeline.",
  },
] as const;

const services = [
  {
    name: "Manufacturing SEO & Industrial Search",
    url: `${SITE_URL}/services/search-engine-optimization`,
  },
  {
    name: "Google Ads & B2B Performance Marketing",
    url: `${SITE_URL}/services/performance-marketing`,
  },
  {
    name: "Manufacturing Website Development",
    url: `${SITE_URL}/services/website-development`,
  },
  {
    name: "Industrial Content Marketing",
    url: `${SITE_URL}/services/content-marketing`,
  },
  {
    name: "B2B Social Media Marketing",
    url: `${SITE_URL}/services/social-media-marketing`,
  },
  {
    name: "AI Automation & RFQ Management",
    url: `${SITE_URL}/services/ai-automation`,
  },
];

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
      name: "Sharp Rays manufacturing and industrial digital marketing",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Manufacturing Digital Marketing Services",
      serviceType: "Digital Marketing for Manufacturing Companies",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing services for manufacturers, OEMs, industrial suppliers, fabrication businesses and exporters. Services include industrial SEO, B2B Google Ads, manufacturing websites, content marketing and RFQ automation.",
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
          "Manufacturing companies, OEMs, component manufacturers, machinery manufacturers, fabrication companies, industrial suppliers and exporters",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Manufacturing Digital Marketing Services",
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
          name: "Manufacturing",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#manufacturing-faq`,
      name: "Manufacturing Digital Marketing FAQs",
      description:
        "Frequently asked questions about manufacturing SEO, industrial lead generation, B2B Google Ads, quotation enquiries, international buyers and marketing automation.",
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

export default function Manufacturing() {
  return (
    <main>
      <script
        id="manufacturing-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <ManufacturingHero />
      <ManufacturingBuyerSearch />
      <ManufacturingWebsite />
      <ManufacturingServices />
      <ManufacturingRFQ />
      <ManufacturingWhoWeHelp />
      <ManufacturingFinalCTA />
      <Footer />
    </main>
  );
}
