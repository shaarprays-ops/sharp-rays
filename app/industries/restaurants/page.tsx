
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import RestaurantBusinesses from "@/components/Industries/Restaurants/RestaurantBusinesses";
import RestaurantCustomerJourney from "@/components/Industries/Restaurants/RestaurantCustomerJourney";
import RestaurantFinalCTA from "@/components/Industries/Restaurants/RestaurantFinalCTA";
import RestaurantHero from "@/components/Industries/Restaurants/RestaurantHero";
import RestaurantRetention from "@/components/Industries/Restaurants/RestaurantRetention";
import RestaurantSearchOpportunities from "@/components/Industries/Restaurants/RestaurantSearchOpportunities";
import RestaurantServices from "@/components/Industries/Restaurants/RestaurantServices";

const SITE_URL = "https://www.sharprays.com";
const PAGE_PATH = "/industries/restaurants";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/restaurants-og.webp`;

const PAGE_TITLE =
  "Restaurant Digital Marketing Agency in India | Sharp Rays";

const PAGE_DESCRIPTION =
  "Digital marketing for restaurants, cafés and cloud kitchens. Improve Google Maps visibility, attract local diners and support reservations and orders with Sharp Rays.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "restaurant digital marketing agency",
    "restaurant marketing agency India",
    "digital marketing for restaurants",
    "restaurant SEO services",
    "local SEO for restaurants",
    "Google Maps SEO for restaurants",
    "restaurant Google Business Profile optimisation",
    "restaurant social media marketing",
    "Instagram marketing for restaurants",
    "Google Ads for restaurants",
    "restaurant website development",
    "restaurant online ordering marketing",
    "restaurant reservation marketing",
    "cloud kitchen digital marketing",
    "cafe digital marketing",
    "restaurant customer retention marketing",
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sharp Rays restaurant digital marketing services", type: "image/webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Sharp Rays restaurant digital marketing services" }],
  },
};

const faqItems = [
  {
    question: "How can restaurants attract more customers online?",
    answer:
      "Restaurants can improve their online visibility through Google Business Profile optimisation, local SEO, engaging food content, social media marketing and relevant advertising. Clear menus, accurate locations, opening hours and easy booking or ordering options also help customers take action.",
  },
  {
    question: "What is restaurant SEO?",
    answer:
      "Restaurant SEO is the process of improving a restaurant's visibility for relevant searches on Google and other search platforms. It can include local SEO, Google Maps optimisation, restaurant website improvements, menu information, location pages and content related to cuisine and dining experiences.",
  },
  {
    question: "How can my restaurant rank higher on Google Maps?",
    answer:
      "Keep your Google Business Profile accurate and complete, choose relevant business categories, update opening hours, provide useful menu information, add authentic restaurant photos and encourage genuine customer reviews. Local rankings depend on relevance, distance and prominence, so exact positions cannot be guaranteed.",
  },
  {
    question: "Is Instagram marketing useful for restaurants?",
    answer:
      "Yes. Instagram can help potential customers discover dishes, dining experiences, menus and restaurant offers through photos, Reels and other content. Connecting that interest to directions, reservations, menus or ordering makes social media more useful for the business.",
  },
  {
    question: "Are Google Ads effective for restaurants?",
    answer:
      "Google Ads can be effective for reaching people searching for restaurants, cuisines, nearby dining options or food services. Results depend on location targeting, competition, campaign relevance, budget and the ease of taking the intended next step.",
  },
  {
    question: "How can a restaurant get more table reservations?",
    answer:
      "Restaurants can support reservations by providing clear booking options, accurate business information, useful dining and menu details, relevant local search visibility and campaigns aimed at customers planning a dining experience.",
  },
  {
    question: "How can cloud kitchens increase online food orders?",
    answer:
      "Cloud kitchens can improve order opportunities through menu visibility, delivery-area targeting, relevant food searches, social media advertising, smooth ordering experiences and retention strategies that encourage customers to reorder.",
  },
  {
    question: "How can restaurants increase repeat customers?",
    answer:
      "Repeat business can be supported through good customer experiences, genuine feedback, loyalty programmes, relevant menu updates, suitable offers and consent-based WhatsApp or email communication. A convenient ordering or reservation process can also encourage customers to return.",
  },
  {
    question: "What digital marketing services does a restaurant need?",
    answer:
      "The right services depend on its business model and growth goals. A neighbourhood restaurant may prioritise Google Maps and local SEO, while a cloud kitchen may focus on ordering visibility and retention. Fine-dining restaurants may benefit from reservation-focused campaigns and premium content.",
  },
  {
    question: "How much does restaurant digital marketing cost in India?",
    answer:
      "Restaurant digital marketing costs depend on the number of outlets, target locations, competition, required services, content production and advertising budget. A local café may need Google Maps optimisation and social media marketing, while a restaurant chain may require multi-location SEO, advertising and customer retention systems.",
  },
] as const;

const services = [
  {
    name: "Restaurant SEO & Google Maps Optimisation",
    url: `${SITE_URL}/services/search-engine-optimization`,
  },
  {
    name: "Restaurant Social Media Marketing",
    url: `${SITE_URL}/services/social-media-marketing`,
  },
  {
    name: "Google Ads & Restaurant Performance Marketing",
    url: `${SITE_URL}/services/performance-marketing`,
  },
  {
    name: "Restaurant Website Development",
    url: `${SITE_URL}/services/website-development`,
  },
  {
    name: "Restaurant Content Marketing",
    url: `${SITE_URL}/services/content-marketing`,
  },
  {
    name: "Restaurant AI Video & Creative",
    url: `${SITE_URL}/services/video-and-creative`,
  },
  {
    name: "Customer Retention & AI Automation",
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
      name: "Sharp Rays restaurant digital marketing services",
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Restaurant Digital Marketing Services",
      serviceType: "Digital Marketing for Restaurants",
      url: PAGE_URL,
      description:
        "Sharp Rays provides digital marketing services for restaurants, cafes, fine-dining establishments, cloud kitchens and quick service restaurants. Services include local SEO, Google Maps optimisation, social media marketing, paid advertising, websites, content marketing and customer retention automation.",
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
          "Restaurants, cafes, fine-dining establishments, cloud kitchens, quick service restaurants and multi-location restaurant businesses",
      },
      mainEntityOfPage: {
        "@id": `${PAGE_URL}#webpage`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${PAGE_URL}#services`,
        name: "Restaurant Digital Marketing Services",
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
          name: "Restaurants",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      url: `${PAGE_URL}#restaurant-faqs`,
      name: "Restaurant Digital Marketing FAQs",
      description:
        "Frequently asked questions about restaurant SEO, Google Maps visibility, social media marketing, restaurant advertising, table reservations, online ordering and customer retention.",
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

export default function RestaurantPage() {
  return (
    <main>
      <script
        id="restaurant-industry-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <RestaurantHero />
      <RestaurantSearchOpportunities />
      <RestaurantCustomerJourney />
      <RestaurantServices />
      <RestaurantRetention />
      <RestaurantBusinesses />
      <RestaurantFinalCTA />
      <Footer />
    </main>
  );
}
