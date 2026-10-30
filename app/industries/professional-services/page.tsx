
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ProfessionalServicesEnquiries from "@/components/Industries/ProfessionalServices/ProfessionalServicesEnquiries";
import ProfessionalServicesFAQ from "@/components/Industries/ProfessionalServices/ProfessionalServicesFAQ";
import ProfessionalServicesFinalCTA from "@/components/Industries/ProfessionalServices/ProfessionalServicesFinalCTA";
import ProfessionalServicesHero from "@/components/Industries/ProfessionalServices/ProfessionalServicesHero";
import ProfessionalServicesIndustries from "@/components/Industries/ProfessionalServices/ProfessionalServicesIndustries";
import ProfessionalServicesSearch from "@/components/Industries/ProfessionalServices/ProfessionalServicesSearch";
import ProfessionalServicesServices from "@/components/Industries/ProfessionalServices/ProfessionalServicesServices";
import ProfessionalServicesTrust from "@/components/Industries/ProfessionalServices/ProfessionalServicesTrust";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/professional-services";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/professional-services.webp`;

const PAGE_TITLE =
  "Professional Services Digital Marketing Agency | Sharp Rays";

const PAGE_DESCRIPTION =
  "Digital marketing for consulting firms, advisors and professional service providers. Build search visibility, demonstrate expertise and attract qualified client enquiries.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "professional services digital marketing",
    "professional services marketing agency",
    "digital marketing for professional services",
    "consulting firm digital marketing",
    "professional services SEO",
    "SEO for consulting firms",
    "business consulting marketing",
    "digital marketing for business advisors",
    "B2B professional services marketing",
    "professional services lead generation",
    "LinkedIn marketing for consulting firms",
    "professional services website development",
    "professional services content marketing",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays professional services digital marketing", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays professional services digital marketing" }],
  },
};

const faqItems = [
  {
    question: "What is digital marketing for professional services?",
    answer:
      "Digital marketing for professional services helps consulting firms, business advisors and specialist service providers improve online visibility, communicate expertise and attract relevant client enquiries. It can include professional services SEO, website development, expert-led content, LinkedIn marketing and advertising where permitted.",
  },
  {
    question:
      "How can professional service firms attract more qualified client enquiries?",
    answer:
      "Firms can attract more relevant enquiries by targeting service-specific searches, clearly explaining their expertise, creating useful content and providing well-structured enquiry forms. The focus should be on connecting with clients whose requirements match the firm's professional services.",
  },
  {
    question: "How does SEO work for professional services?",
    answer:
      "Professional services SEO improves visibility for searches related to a firm's services, specialisations, industries and locations. It includes service-page optimisation, technical SEO, internal linking, local search improvements and useful professional content.",
  },
  {
    question: "How can a consulting firm rank higher on Google?",
    answer:
      "Consulting firms can improve their organic search visibility by creating dedicated service pages, publishing relevant industry insights, improving website structure and addressing technical SEO issues. Search performance depends on content relevance, competition and website quality, so specific rankings cannot be guaranteed.",
  },
  {
    question: "Is LinkedIn marketing effective for consulting firms?",
    answer:
      "LinkedIn can help consulting and advisory firms demonstrate expertise, share business insights and reach professional audiences. A suitable strategy may include educational posts, industry analysis, firm updates and expert-led content that builds familiarity and credibility.",
  },
  {
    question: "Should professional service firms use Google Ads?",
    answer:
      "Google Ads can support relevant client enquiries for professional services where advertising is permitted. Campaigns should focus on appropriate search intent, clear service information and suitable landing pages. Regulated professions may have additional advertising restrictions that must be reviewed first.",
  },
  {
    question: "What should a professional services website include?",
    answer:
      "A professional services website should clearly present the firm's services, specialisations, team information, accurate credentials, contact details and useful educational resources. It should also provide simple navigation and appropriate enquiry options so prospective clients can evaluate the firm confidently.",
  },
  {
    question:
      "How can content marketing help consulting and advisory firms?",
    answer:
      "Content marketing helps professional firms answer common client questions, explain complex services and demonstrate relevant knowledge. Useful guides, industry insights, service explainers and professionally reviewed articles can support search visibility and build confidence before an initial consultation.",
  },
  {
    question: "Can AI automation help professional service providers?",
    answer:
      "AI automation can support routine tasks such as enquiry acknowledgements, consultation scheduling, lead routing and administrative follow-ups. Sensitive information should be handled with appropriate safeguards, and professional advice and decisions should remain under qualified human supervision.",
  },
  {
    question: "How long does professional services SEO take to show results?",
    answer:
      "SEO results depend on website condition, competition, service specialisation, target locations and existing search visibility. Improvements can develop gradually, and performance should be assessed through relevant search visibility, organic traffic and qualified enquiries rather than guaranteed ranking timelines.",
  },
  {
    question:
      "How much does digital marketing for professional service firms cost?",
    answer:
      "Costs depend on the firm's industry, target markets, competition, website requirements and selected services. A consulting firm focused on SEO and expert-led content may require a different budget from a multi-location professional services business using websites, advertising and enquiry automation.",
  },
] as const;

const services = [
  {
    name: "Professional Services SEO",
    url: `${SITE_URL}/services/search-engine-optimization`,
  },
  {
    name: "Professional Website Development",
    url: `${SITE_URL}/services/website-development`,
  },
  {
    name: "Expert-Led Content Marketing",
    url: `${SITE_URL}/services/content-marketing`,
  },
  {
    name: "LinkedIn & Social Media Marketing",
    url: `${SITE_URL}/services/social-media-marketing`,
  },
  {
    name: "Google Ads & Performance Marketing",
    url: `${SITE_URL}/services/performance-marketing`,
  },
  {
    name: "AI Automation & Client Enquiry Management",
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
      name: "Sharp Rays professional services digital marketing",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Professional Services Digital Marketing",
      serviceType: "Digital Marketing for Professional Service Firms",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing services for consulting firms, business advisors and professional service providers through SEO, professional website development, expert-led content, LinkedIn marketing, eligible Google Ads and client enquiry automation.",
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
          "Consulting firms, business advisors, advisory companies and specialist professional service providers",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Professional Services Digital Marketing Services",
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
          name: "Professional Services",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#professional-services-faq`,
      name: "Professional Services Digital Marketing FAQs",
      description:
        "Frequently asked questions about professional services SEO, consulting firm marketing, Google Ads, expert-led content, websites, qualified client enquiries and automation.",
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

export default function ProfessionalServices() {
  return (
    <main>
      <script
        id="professional-services-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <ProfessionalServicesHero />
      <ProfessionalServicesSearch />
      <ProfessionalServicesTrust />
      <ProfessionalServicesServices />
      <ProfessionalServicesEnquiries />
      <ProfessionalServicesIndustries />
      <ProfessionalServicesFAQ />
      <ProfessionalServicesFinalCTA />
      <Footer />
    </main>
  );
}
