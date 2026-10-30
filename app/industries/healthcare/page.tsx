
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import HealthcareFAQ from "@/components/Industries/Healthcare/HealthcareFAQ";
import HealthcareFinalCTA from "@/components/Industries/Healthcare/HealthcareFinalCTA";
import HealthcareGrowthProblems from "@/components/Industries/Healthcare/HealthcareGrowthProblems";
import HealthcareHero from "@/components/Industries/Healthcare/HealthcareHero";
import HealthcareMarketingMix from "@/components/Industries/Healthcare/HealthcareMarketingMix";
import HealthcareMetrics from "@/components/Industries/Healthcare/HealthcareMetrics";
import HealthcarePatientJourney from "@/components/Industries/Healthcare/HealthcarePatientJourney";
import HealthcareSearchOpportunities from "@/components/Industries/Healthcare/HealthcareSearchOpportunities";
import HealthcareServices from "@/components/Industries/Healthcare/HealthcareServices";
import HealthcareWhoWeHelp from "@/components/Industries/Healthcare/HealthcareWhoWeHelp";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/healthcare";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/healthcare-og.webp`;

const PAGE_TITLE = "Healthcare Digital Marketing Agency in India | Sharp Rays";
const PAGE_DESCRIPTION =
  "Digital marketing for hospitals, clinics and doctors. Improve Google visibility, attract relevant patient enquiries and support appointments with SEO, ads and websites.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "healthcare digital marketing agency",
    "healthcare marketing agency India",
    "hospital digital marketing",
    "digital marketing for doctors",
    "clinic digital marketing",
    "medical digital marketing agency",
    "healthcare SEO services",
    "SEO for hospitals",
    "SEO for doctors",
    "local SEO for clinics",
    "hospital website development",
    "healthcare Google Ads",
    "patient enquiry marketing",
    "healthcare content marketing",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays healthcare digital marketing services", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays healthcare digital marketing services" }],
  },
};

const faqItems = [
  {
    question: "How can hospitals and clinics improve their Google rankings?",
    answer:
      "Hospitals and clinics can strengthen search visibility through useful specialty and service pages, accurate Google Business Profiles, clear doctor information, technical SEO, relevant internal linking and trustworthy medical content. Improvements depend on competition, location and website quality, so rankings cannot be guaranteed.",
  },
  {
    question: "What is healthcare SEO, and how does it help medical practices?",
    answer:
      "Healthcare SEO is the process of improving a medical website's visibility for relevant search queries. It includes technical SEO, local search optimisation, specialty pages, doctor profiles and accurate, medically reviewed content that helps people find appropriate healthcare information.",
  },
  {
    question: "How can doctors and clinics appear on Google Maps?",
    answer:
      "Eligible practices can improve their Google Maps presence by verifying their Google Business Profile, choosing appropriate categories, maintaining accurate hours and contact information, and keeping location details up to date. Strong local relevance and a properly maintained website can also support discoverability.",
  },
  {
    question: "Are Google Ads effective for hospitals and clinics?",
    answer:
      "Google Ads can help eligible healthcare providers reach people searching for relevant services and locations. However, healthcare advertising is subject to platform policies and applicable medical advertising regulations. Campaigns should be reviewed for eligibility, accuracy and appropriate targeting before launch.",
  },
  {
    question: "How can a healthcare website generate more appointment enquiries?",
    answer:
      "A helpful healthcare website should make it easy to find doctor qualifications, available services, consultation hours, locations, contact details and appointment request options. Mobile-friendly navigation and straightforward forms can reduce unnecessary barriers to communication.",
  },
  {
    question:
      "Is social media marketing useful for doctors and healthcare organisations?",
    answer:
      "Social media can help healthcare organisations communicate factual health information, facility updates and educational resources. Content should follow applicable professional standards, avoid misleading promotional claims and receive appropriate medical review.",
  },
  {
    question:
      "How can WhatsApp and AI automation help clinics manage appointments?",
    answer:
      "Consent-based automation can help acknowledge routine enquiries, share approved administrative information, send appointment confirmations and provide reminders. Patient medical information must be handled with suitable privacy and security protections.",
  },
  {
    question:
      "What digital marketing services are most useful for healthcare providers?",
    answer:
      "The right combination depends on the organisation's specialties, locations and goals. Healthcare SEO, local search, professional websites, trustworthy content, eligible search advertising and efficient administrative communication are common priorities.",
  },
  {
    question: "How long does healthcare SEO take to show results?",
    answer:
      "Healthcare SEO is an ongoing process. Timelines depend on existing website performance, competition, technical issues, content quality and local search conditions. Progress should be assessed through visibility, relevant traffic and appropriate enquiry metrics rather than fixed ranking promises.",
  },
  {
    question: "How much does healthcare digital marketing cost?",
    answer:
      "Costs vary based on practice size, number of locations, medical specialties, website requirements, content review needs, advertising eligibility and marketing scope. A suitable plan should match the provider's priorities, resources and compliance requirements.",
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
      name: "Sharp Rays healthcare digital marketing services",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Healthcare Digital Marketing Services",
      serviceType: "Digital Marketing for Healthcare Providers",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing services for hospitals, clinics, doctors, diagnostic centres and healthcare organisations, including healthcare SEO, Google Ads where eligible, website development, content marketing, social media and administrative automation.",
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
          "Hospitals, multispeciality centres, private clinics, doctors, medical specialists, diagnostic laboratories and healthcare businesses",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Healthcare Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare SEO & Local Search",
              url: `${SITE_URL}/services/search-engine-optimization`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads & Healthcare Performance Marketing",
              description:
                "Advertising services for eligible healthcare providers, subject to applicable platform policies and regulations.",
              url: `${SITE_URL}/services/performance-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare Website Development",
              url: `${SITE_URL}/services/website-development`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare Content Marketing",
              url: `${SITE_URL}/services/content-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare Social Media Marketing",
              url: `${SITE_URL}/services/social-media-marketing`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Video & Creative",
              url: `${SITE_URL}/services/video-and-creative`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Healthcare Enquiry & Administrative Automation",
              url: `${SITE_URL}/services/ai-automation`,
            },
          },
        ],
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
          name: "Healthcare",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#healthcare-faq`,
      name: "Healthcare Digital Marketing FAQs",
      description:
        "Frequently asked questions about healthcare SEO, medical websites, Google Ads, patient enquiries, appointment communication and responsible healthcare marketing.",
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

export default function Healthcare() {
  return (
    <main>
      <script
        id="healthcare-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <HealthcareHero />
      <HealthcareGrowthProblems />
      <HealthcareServices />
      <HealthcareSearchOpportunities />
      <HealthcarePatientJourney />
      <HealthcareWhoWeHelp />
      <HealthcareMetrics />
      <HealthcareMarketingMix />
      <HealthcareFinalCTA />
      <HealthcareFAQ />
      <Footer />
    </main>
  );
}
