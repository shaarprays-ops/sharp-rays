import type { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import EducationHero from "@/components/Industries/Education/EducationHero";
import EducationGrowthProblems from "@/components/Industries/Education/EducationGrowthProblems";
import EducationServices from "@/components/Industries/Education/EducationServices";
import EducationSearchOpportunities from "@/components/Industries/Education/EducationSearchOpportunities";
import EducationAdmissionJourney from "@/components/Industries/Education/EducationAdmissionJourney";
import EducationWhoWeHelp from "@/components/Industries/Education/EducationWhoWeHelp";
import EducationGrowthMetrics from "@/components/Industries/Education/EducationGrowthMetrics";
import EducationGrowthStack from "@/components/Industries/Education/EducationGrowthStack";
import EducationFinalCTA from "@/components/Industries/Education/EducationFinalCTA";
import EducationFAQ from "@/components/Industries/Education/EducationFAQ";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/education";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/education-og.webp`;
const PAGE_TITLE = "Education Digital Marketing Agency in India | Sharp Rays";
const PAGE_DESCRIPTION = "Digital marketing for schools, colleges, coaching institutes and EdTech brands. Improve search visibility, attract student enquiries and support admissions with Sharp Rays.";
const INDUSTRY_NAME = "Education";

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
      alt: "Sharp Rays education and student admission marketing services",
      type: "image/webp",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays education and student admission marketing services" }],
  },
};


const services = [
  {
    "name": "Education SEO & Local Search",
    "path": "search-engine-optimization"
  },
  {
    "name": "Google Ads & Performance Marketing",
    "path": "performance-marketing"
  },
  {
    "name": "Website Development & Admission Landing Pages",
    "path": "website-development"
  },
  {
    "name": "Social Media Marketing for Education",
    "path": "social-media-marketing"
  },
  {
    "name": "Education Content Marketing",
    "path": "content-marketing"
  },
  {
    "name": "Admission Enquiry Automation",
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
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      name: "Sharp Rays education and student admission marketing services",
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
      audience: { "@type": "BusinessAudience", audienceType: "Schools, colleges, coaching centres, training institutions and EdTech businesses" },
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

export default function Education() {
  return (
    <main>
      <script
        id="education-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <EducationHero />
      <EducationGrowthProblems />
      <EducationServices />
      <EducationSearchOpportunities />
      <EducationAdmissionJourney />
      <EducationWhoWeHelp />
      <EducationGrowthMetrics />
      <EducationGrowthStack />
      <EducationFinalCTA />
      <EducationFAQ />
      <Footer />
    </main>
  );
}
