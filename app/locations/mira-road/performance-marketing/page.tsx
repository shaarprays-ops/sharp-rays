
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MiraRoadPerformanceMarketingClientPage from "@/components/Locations/MiraRoad/PerformanceMarketing/MiraRoadPerformanceMarketingClientPage";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/mira-road/performance-marketing`;

const pageTitle = "Performance Marketing Agency in Mira Road | Sharp Rays";

const pageDescription =
  "Performance marketing in Mira Road for businesses seeking targeted leads and sales. Sharp Rays plans Google Ads, Meta Ads and paid campaigns with audience targeting and ongoing optimisation.";

const ogImage =
  `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "performance marketing agency in Mira Road",
    "performance marketing services in Mira Road",
    "performance marketing company in Mira Road",
    "Google Ads agency in Mira Road",
    "Google Ads management in Mira Road",
    "Meta Ads agency in Mira Road",
    "Facebook Ads management in Mira Road",
    "Instagram Ads agency in Mira Road",
    "paid advertising agency in Mira Road",
    "paid media services in Mira Road",
    "lead generation agency in Mira Road",
    "PPC services in Mira Road",
    "remarketing services in Mira Road",
    "digital advertising agency in Mira Road",
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
        alt: "Performance Marketing Services in Mira Road - Sharp Rays",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Performance Marketing Services in Mira Road",
      serviceType: [
        "Google Ads Management",
        "Meta Ads Management",
        "Lead Generation Campaigns",
        "Search Advertising",
        "Social Media Advertising",
        "Remarketing and Retargeting",
        "Landing Page Optimisation",
        "Campaign Analytics and Reporting",
      ],
      description:
        "Sharp Rays provides performance marketing services for businesses targeting Mira Road, including Google Ads, Meta Ads, paid search advertising, social media advertising, lead generation campaigns, remarketing, landing page recommendations, conversion tracking and campaign performance analysis.",
      url: pageUrl,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Mira Road, Maharashtra, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mira Road",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Businesses, startups, retailers, service providers, real estate companies, manufacturers and B2B companies",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Performance Marketing Pricing Options",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Performance Marketing - Plan 1",
            description:
              "Entry-level performance marketing pricing option. Refer to the published pricing page for complete package inclusions, deliverables and applicable terms.",
            price: "14999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Performance Marketing - Plan 1",
            },
          },
          {
            "@type": "Offer",
            name: "Performance Marketing - Plan 2",
            description:
              "Performance marketing pricing option for a broader campaign scope. Refer to the published pricing page for complete package inclusions, deliverables and applicable terms.",
            price: "24999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Performance Marketing - Plan 2",
            },
          },
          {
            "@type": "Offer",
            name: "Performance Marketing - Plan 3",
            description:
              "Higher-tier performance marketing pricing option. Refer to the published pricing page for complete package inclusions, deliverables and applicable terms.",
            price: "39999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Performance Marketing - Plan 3",
            },
          },
        ],
      },
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
          name: "Performance Marketing",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is performance marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Performance marketing is a form of digital advertising where campaigns are planned around measurable actions such as leads, enquiries, purchases, calls or website visits. It can include Google Ads, Meta Ads, paid social campaigns, remarketing and conversion tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide performance marketing services in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sharp Rays offers performance marketing services for businesses targeting customers in Mira Road and nearby areas. Campaigns can include Google Ads, Facebook Ads, Instagram Ads, lead generation and paid advertising strategy.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms do you use for performance marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on your audience and business objectives, campaigns can be planned across Google Ads, Facebook Ads, Instagram Ads and YouTube Ads. The right platform mix depends on where your potential customers spend time and how they search for your products or services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide Google Ads management in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Google Ads management can include keyword research, search campaign planning, ad copy, audience and location targeting, conversion tracking and campaign optimisation.",
          },
        },
        {
          "@type": "Question",
          name: "Can you run Facebook and Instagram Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Facebook and Instagram advertising can help businesses promote their services, products, offers and brand through audience-focused campaigns, lead generation ads, creative campaigns and remarketing.",
          },
        },
        {
          "@type": "Question",
          name: "Can performance marketing help generate business enquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Performance marketing campaigns can be designed to encourage enquiries, calls, form submissions and other relevant actions. Actual lead volume and quality depend on factors such as the offer, audience, advertising budget, competition and landing page experience.",
          },
        },
        {
          "@type": "Question",
          name: "Is performance marketing suitable for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Small businesses can use paid advertising when campaigns are planned around realistic objectives, suitable audiences and an appropriate budget. Starting with a focused campaign can help businesses understand their advertising opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Can real estate businesses in Mira Road use performance marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Real estate businesses can use paid campaigns to promote projects, properties and relevant offers to potential buyers. Campaigns should use accurate property information, appropriate targeting and a clear enquiry journey.",
          },
        },
        {
          "@type": "Question",
          name: "Can manufacturers and B2B companies use paid advertising?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Search advertising and suitable lead-generation campaigns can help manufacturers and B2B companies reach potential buyers searching for specific products, industrial services or suppliers.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a website to run performance marketing campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A website or dedicated landing page is often useful because it gives visitors more information about your offer and provides a clear way to enquire. The best destination depends on the campaign objective and advertising platform.",
          },
        },
        {
          "@type": "Question",
          name: "Is advertising spend included in your management charges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Advertising platform spend and campaign management charges are separate cost components unless a particular package explicitly states otherwise. The advertising budget and management scope should be confirmed before the campaign begins.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see performance marketing results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Campaigns can begin collecting data after launch, but meaningful evaluation requires sufficient information about audience response and conversions. The timeline depends on campaign budget, competition, targeting, offer and conversion volume.",
          },
        },
        {
          "@type": "Question",
          name: "Do you guarantee leads or sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No responsible advertising agency can guarantee a fixed number of leads or sales. Campaign outcomes depend on several factors, including market demand, competition, budget, creative quality, audience targeting and the business offering.",
          },
        },
        {
          "@type": "Question",
          name: "How much does performance marketing cost in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sharp Rays has published performance marketing pricing options of ₹14,999, ₹24,999 and ₹39,999. Visit the pricing page to review the current package details. Advertising platform spend should be clarified separately.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get started with Sharp Rays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Sharp Rays with your business details, website and advertising objectives. We can understand your requirements and discuss a suitable performance marketing approach for your business.",
          },
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadPerformanceMarketingPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadPerformanceMarketingClientPage />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </main>

      <Footer />
    </>
  );
}
