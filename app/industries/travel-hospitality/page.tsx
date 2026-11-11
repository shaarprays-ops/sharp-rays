
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import TravelHospitalityChallenges from "@/components/Industries/TravelHospitality/TravelHospitalityChallenges";
import TravelHospitalityFinal from "@/components/Industries/TravelHospitality/TravelHospitalityFinal";
import TravelHospitalityHero from "@/components/Industries/TravelHospitality/TravelHospitalityHero";
import TravelHospitalityPerformance from "@/components/Industries/TravelHospitality/TravelHospitalityPerformance";
import TravelHospitalitySearch from "@/components/Industries/TravelHospitality/TravelHospitalitySearch";
import TravelHospitalityServices from "@/components/Industries/TravelHospitality/TravelHospitalityServices";
import TravelHospitalityWhoWeHelp from "@/components/Industries/TravelHospitality/TravelHospitalityWhoWeHelp";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/travel-hospitality";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/travel-hospitality-og.webp`;
const HERO_IMAGE = `${SITE_URL}/industries/travel-hospitality/resort.webp`;

const PAGE_TITLE = "Travel & Hospitality Digital Marketing Agency | Sharp Rays";
const PAGE_DESCRIPTION =
  "Digital marketing for hotels, resorts and travel businesses. Improve Google visibility, attract qualified travellers and generate more booking enquiries with Sharp Rays.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "travel and hospitality digital marketing agency",
    "hospitality digital marketing agency India",
    "hotel digital marketing agency",
    "resort digital marketing",
    "hospitality SEO",
    "hotel SEO services",
    "hotel Google Ads",
    "hotel direct booking marketing",
    "travel agency digital marketing",
    "travel company SEO",
    "homestay marketing",
    "tour package marketing",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays travel and hospitality digital marketing services", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays travel and hospitality digital marketing services" }],
  },
};

const faqItems = [
  {
    question:
      "How can hotels increase direct bookings without relying entirely on OTAs?",
    answer:
      "Hotels can improve direct booking opportunities through a clear official website, useful room information, easy booking navigation, relevant search visibility and appropriate booking campaigns. Compatible booking technology and returning-guest communication can also support direct reservations. OTAs can remain useful alongside official booking channels.",
  },
  {
    question:
      "How can a hotel or resort improve Google search visibility?",
    answer:
      "Hotels and resorts can improve their organic visibility through relevant destination and accommodation pages, technical SEO, useful property information, accurate business listings and Google Business Profile optimisation where eligible. Strong property content and appropriate internal linking can help travellers discover relevant accommodation options.",
  },
  {
    question:
      "What digital marketing services work best for hospitality businesses?",
    answer:
      "The right services depend on the business model. Hotels may benefit from hospitality SEO, booking-focused websites, Google Ads and guest communication, while travel agencies may prioritise destination content, tour package SEO, paid search and enquiry follow-ups.",
  },
  {
    question:
      "How can travel agencies generate qualified tour package enquiries?",
    answer:
      "Travel agencies can target relevant destination and package searches, create detailed itineraries, explain inclusions and important travel information, and offer clear enquiry options. Suitable campaigns and timely follow-ups can help attract travellers whose requirements match available packages.",
  },
  {
    question:
      "Are Google Ads or SEO better for hotel bookings?",
    answer:
      "SEO can build organic visibility over time, while Google Ads can reach travellers actively searching for suitable accommodation. The best approach depends on booking demand, competition, advertising budget, website quality and the hotel's ability to track confirmed reservations.",
  },
  {
    question:
      "How can hotels attract guests during off-peak seasons?",
    answer:
      "Hotels can promote relevant weekend stays, local experiences, seasonal packages and suitable events through destination content, social media and targeted campaigns. Returning-guest communication can also help maintain awareness, although results depend on actual travel demand, availability and pricing.",
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
      primaryImageOfPage: {
        "@id": `${PAGE_URL}#primaryimage`,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      hasPart: {
        "@id": `${PAGE_URL}#faq`,
      },
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#primaryimage`,
      url: HERO_IMAGE,
      contentUrl: HERO_IMAGE,
      caption:
        "Luxury resort with pool and tropical surroundings representing hospitality marketing.",
      inLanguage: "en-IN",
    },
    {
      "@type": "ImageObject",
      "@id": `${PAGE_URL}#socialimage`,
      url: OG_IMAGE,
      contentUrl: OG_IMAGE,
      name: "Sharp Rays travel and hospitality digital marketing services",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Travel & Hospitality Digital Marketing Services",
      serviceType: "Travel and Hospitality Digital Marketing",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing for hotels, resorts, homestays and travel businesses through hospitality SEO, Google Ads, social media marketing, booking-focused websites, content creation and enquiry automation.",
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
          "Hotels, resorts, homestays, travel companies and hospitality businesses",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Travel & Hospitality Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Hospitality & Travel SEO",
            url: `${SITE_URL}/services/search-engine-optimization`,
          },
          {
            "@type": "OfferCatalog",
            name: "Google Ads & Performance Marketing",
            url: `${SITE_URL}/services/performance-marketing`,
          },
          {
            "@type": "OfferCatalog",
            name: "Website Development & Booking Experience",
            url: `${SITE_URL}/services/website-development`,
          },
          {
            "@type": "OfferCatalog",
            name: "Social Media & Content Marketing",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Social Media Marketing",
                url: `${SITE_URL}/services/social-media-marketing`,
              },
              {
                "@type": "OfferCatalog",
                name: "Content Marketing",
                url: `${SITE_URL}/services/content-marketing`,
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Video, Creative & Professional Editing",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "AI Video & Creative",
                url: `${SITE_URL}/services/video-and-creative`,
              },
              {
                "@type": "OfferCatalog",
                name: "Professional Video Editing",
                url: `${SITE_URL}/services/professional-video-editing`,
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Automation & Guest Communication",
            url: `${SITE_URL}/services/ai-automation`,
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
          name: "Travel & Hospitality",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#hospitality-faqs`,
      name: "Travel & Hospitality Digital Marketing FAQs",
      description:
        "Frequently asked questions about hospitality SEO, hotel direct bookings, Google Ads, travel agency enquiries and seasonal hotel marketing.",
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

export default function TravelHospitality() {
  return (
    <main>
      <script
        id="travel-hospitality-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <TravelHospitalityHero />
      <TravelHospitalitySearch />
      <TravelHospitalityChallenges />
      <TravelHospitalityServices />
      <TravelHospitalityPerformance />
      <TravelHospitalityWhoWeHelp />
      <TravelHospitalityFinal />
      <Footer />
    </main>
  );
}
