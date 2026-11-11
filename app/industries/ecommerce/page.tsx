import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import EcommerceHero from "@/components/Industries/Ecommerce/EcommerceHero";
import EcommerceGrowthProblems from "@/components/Industries/Ecommerce/EcommerceGrowthProblems";
import EcommerceGrowthServices from "@/components/Industries/Ecommerce/EcommerceGrowthServices";
import EcommerceCustomerJourney from "@/components/Industries/Ecommerce/EcommerceCustomerJourney";
import EcommerceSearchIntent from "@/components/Industries/Ecommerce/EcommerceSearchIntent";
import EcommerceWhoWeHelp from "@/components/Industries/Ecommerce/EcommerceWhoWeHelp";
import EcommerceGrowthMetrics from "@/components/Industries/Ecommerce/EcommerceGrowthMetrics";
import EcommerceGrowthStack from "@/components/Industries/Ecommerce/EcommerceGrowthStack";
import EcommerceFinalCTA from "@/components/Industries/Ecommerce/EcommerceFinalCTA";
import EcommerceFAQ from "@/components/Industries/Ecommerce/EcommerceFAQ";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/ecommerce";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/ecommerce-og.webp`;
const PAGE_TITLE = "Ecommerce Digital Marketing Agency in India | Sharp Rays";
const PAGE_DESCRIPTION = "Ecommerce digital marketing services for online stores and D2C brands. Grow qualified traffic and sales with ecommerce SEO, Google Shopping Ads, Meta Ads and automation.";
const INDUSTRY_NAME = "Ecommerce";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Sharp Rays",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "Sharp Rays ecommerce and D2C digital marketing services",
      type: "image/webp",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays ecommerce and D2C digital marketing services" }],
  },
};

const faqItems = [
  {
    "question": "How can an ecommerce website get more sales?",
    "answer": "Increasing ecommerce sales usually requires improving the complete journey: attracting higher-intent traffic, strengthening product and category pages, improving conversion, running efficient paid campaigns and creating systems that encourage repeat purchases."
  },
  {
    "question": "How can ecommerce product pages rank higher on Google?",
    "answer": "Product pages can improve their search visibility through useful and unique product content, strong internal linking, clear page structure, relevant structured data, optimised images and technically accessible pages."
  },
  {
    "question": "Are Google Shopping Ads effective for ecommerce?",
    "answer": "They can be highly effective when product feeds, campaign structure, pricing, landing pages and margins are aligned. The objective should be profitable sales rather than simply generating more clicks."
  },
  {
    "question": "Are Meta Ads better than Google Ads for ecommerce?",
    "answer": "They serve different purposes. Google is especially useful for capturing existing search demand, while Meta can help create product discovery and demand. Many ecommerce brands benefit from using both strategically."
  },
  {
    "question": "How can I reduce ecommerce customer acquisition cost?",
    "answer": "Reducing CAC can involve improving targeting, creatives, product offers, landing pages, conversion rates, remarketing and retention. Better organic visibility can also reduce dependence on paid acquisition over time."
  },
  {
    "question": "How can SEO help an ecommerce store?",
    "answer": "Ecommerce SEO helps product, category and informational pages appear when customers search for products, comparisons and buying information. This can create a more sustainable source of qualified traffic over time."
  },
  {
    "question": "How can I improve repeat purchases?",
    "answer": "Repeat purchases can be improved through better post-purchase communication, remarketing, email and WhatsApp campaigns, replenishment reminders, loyalty offers and relevant follow-up based on previous purchases."
  },
  {
    "question": "What should ecommerce product pages include?",
    "answer": "Strong product pages typically include clear product information, benefits, pricing, images, specifications, delivery information, reviews, trust signals and a simple purchase path."
  },
  {
    "question": "How can I improve ecommerce conversion rate?",
    "answer": "Focus on page speed, mobile usability, product clarity, pricing and offers, trust signals, reviews, navigation and checkout friction. Conversion improvements usually come from fixing several smaller issues rather than one major change."
  },
  {
    "question": "Should an ecommerce brand focus on SEO or paid ads first?",
    "answer": "It depends on the brand's current visibility, margins, demand and growth stage. Paid advertising can create faster traffic and testing opportunities, while SEO builds longer-term organic visibility. In many cases, the strongest strategy uses both."
  }
] as const;

const services = [
  {
    "name": "Ecommerce SEO",
    "path": "search-engine-optimization"
  },
  {
    "name": "Google Shopping & Search Ads",
    "path": "performance-marketing"
  },
  {
    "name": "Meta Ads & Paid Social",
    "path": "performance-marketing"
  },
  {
    "name": "Ecommerce Website Development",
    "path": "website-development"
  },
  {
    "name": "Ecommerce Content Marketing",
    "path": "content-marketing"
  },
  {
    "name": "Ecommerce Social Media Marketing",
    "path": "social-media-marketing"
  },
  {
    "name": "Customer Retention & Automation",
    "path": "ai-automation"
  }
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
      isPartOf: { "@id": `${SITE_URL}/#website` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${PAGE_URL}#service` },
      image: { "@id": `${PAGE_URL}#socialimage` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      hasPart: { "@id": `${PAGE_URL}#faq` },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      name: "Sharp Rays ecommerce and D2C digital marketing services",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: `${INDUSTRY_NAME} Digital Marketing Services`,
      serviceType: `${INDUSTRY_NAME} Digital Marketing`,
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      audience: { "@type": "BusinessAudience", audienceType: "Online stores, D2C brands and ecommerce businesses" },
      mainEntityOfPage: { "@id": `${PAGE_URL}#webpage` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: `${INDUSTRY_NAME} Marketing Services`,
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: `${SITE_URL}/services/${service.path}`,
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: INDUSTRY_NAME, item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      name: `${INDUSTRY_NAME} Digital Marketing FAQs`,
      url: PAGE_URL,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${PAGE_URL}#webpage` },
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Ecommerce() {
  return (
    <main>
      <script
        id="ecommerce-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <EcommerceHero />
      <EcommerceGrowthProblems />
      <EcommerceGrowthServices />
      <EcommerceCustomerJourney />
      <EcommerceSearchIntent />
      <EcommerceWhoWeHelp />
      <EcommerceGrowthMetrics />
      <EcommerceGrowthStack />
      <EcommerceFinalCTA />
      <EcommerceFAQ />
      <Footer />
    </main>
  );
}
