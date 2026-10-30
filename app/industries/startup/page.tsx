import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import StartupHero from "@/components/Industries/Startup/StartupHero";
import StartupGrowthStages from "@/components/Industries/Startup/StartupGrowthStages";
import StartupCustomerSearch from "@/components/Industries/Startup/StartupCustomerSearch";
import StartupServices from "@/components/Industries/Startup/StartupServices";
import StartupTraction from "@/components/Industries/Startup/StartupTraction";
import StartupWhoWeHelp from "@/components/Industries/Startup/StartupWhoWeHelp";
import StartupFinalCTA from "@/components/Industries/Startup/StartupFinalCTA";
import StartupContactFields from "@/components/Industries/Startup/StartupContactFields";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/startup";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/startups.webp`;
const PAGE_TITLE = "Startup Digital Marketing Agency in India | Sharp Rays";
const PAGE_DESCRIPTION = "Digital marketing for startups in India. Build visibility, attract qualified customers and grow with SEO, Google & Meta Ads, website development, content and AI automation.";
const INDUSTRY_NAME = "Startups";

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
      alt: "Sharp Rays startup digital marketing and growth services",
      type: "image/webp",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays startup digital marketing and growth services" }],
  },
};


const services = [
  {
    "name": "Startup SEO & Organic Search",
    "path": "search-engine-optimization"
  },
  {
    "name": "Google Ads & Performance Marketing",
    "path": "performance-marketing"
  },
  {
    "name": "Social Media Marketing for Startups",
    "path": "social-media-marketing"
  },
  {
    "name": "Startup Website Development",
    "path": "website-development"
  },
  {
    "name": "Startup Content Marketing",
    "path": "content-marketing"
  },
  {
    "name": "AI Automation for Startups",
    "path": "ai-automation"
  },
  {
    "name": "AI Video & Creative",
    "path": "video-and-creative"
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
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      name: "Sharp Rays startup digital marketing and growth services",
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
      audience: { "@type": "BusinessAudience", audienceType: "Early-stage startups, SaaS firms, D2C companies and growing businesses" },
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

  ],
};

export default function Startup() {
  return (
    <main>
      <script
        id="startup-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <StartupHero />
      <StartupGrowthStages />
      <StartupCustomerSearch />
      <StartupServices />
      <StartupTraction />
      <StartupWhoWeHelp />
      <StartupFinalCTA />
      <StartupContactFields />
      <Footer />
    </main>
  );
}
