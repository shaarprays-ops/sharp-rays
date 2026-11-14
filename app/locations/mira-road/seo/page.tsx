
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MiraRoadSEOPageClient from "@/components/Locations/MiraRoad/SEO/MiraRoadSEOPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/mira-road/seo`;

const pageTitle = "SEO Services in Mira Road | Local SEO & Maps | Sharp Rays";

const pageDescription =
  "SEO services in Mira Road for better organic and local search visibility. Explore technical SEO, Google Business Profile optimisation, keyword research and local SEO with Sharp Rays.";

const ogImage = `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "SEO services in Mira Road",
    "SEO agency in Mira Road",
    "SEO company in Mira Road",
    "SEO consultant in Mira Road",
    "local SEO services in Mira Road",
    "Google Maps SEO in Mira Road",
    "Google Business Profile optimisation Mira Road",
    "technical SEO services in Mira Road",
    "on-page SEO in Mira Road",
    "keyword research services Mira Road",
    "website optimisation in Mira Road",
    "SEO agency near Mira Road station",
    "local SEO Shanti Nagar",
    "SEO services Beverly Park",
    "SEO services Poonam Sagar",
    "SEO agency Mira Road East",
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
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Sharp Rays",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SEO Services in Mira Road - Sharp Rays",
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
      name: "SEO Services in Mira Road",
      serviceType: [
        "Search Engine Optimization",
        "Local SEO",
        "Keyword Research",
        "Technical SEO",
        "On-Page SEO",
        "Content and Authority Strategy",
        "SEO Reporting",
        "Google Business Profile Optimisation",
      ],
      description:
        "Sharp Rays provides SEO services for businesses in Mira Road, including local SEO, keyword research, technical SEO, on-page optimisation, content strategy, Google Business Profile optimisation guidance and neighbourhood-focused search strategies.",
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
          "Small businesses, startups, retailers, healthcare providers, educational institutions, real estate businesses, restaurants and professional service providers",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SEO Service Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter SEO Package",
            description:
              "An entry-level SEO package for businesses beginning their SEO journey. Includes an SEO strategy discussion and scope based on business needs and website and search priorities.",
            price: "14999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Starter SEO Services",
            },
          },
          {
            "@type": "Offer",
            name: "Growth SEO Package",
            description:
              "An SEO package for businesses looking to build stronger organic visibility. Includes an SEO strategy discussion and scope based on business needs and website and search priorities.",
            price: "24999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Growth SEO Services",
            },
          },
          {
            "@type": "Offer",
            name: "Advanced SEO Package",
            description:
              "A broader SEO strategy package for businesses requiring a wider scope of search optimisation. Includes an SEO strategy discussion and scope based on business needs and website and search priorities.",
            price: "39999",
            priceCurrency: "INR",
            itemOffered: {
              "@type": "Service",
              name: "Advanced SEO Services",
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
          name: "SEO Services",
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
          name: "What are SEO services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO services improve a website's visibility in unpaid search results. They can include keyword research, technical SEO, on-page optimisation, content improvements, local SEO and performance monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide SEO services in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Sharp Rays offers SEO services for businesses targeting customers across Mira Road and nearby areas. The strategy can include local keyword research, website optimisation, Google Business Profile guidance and relevant content improvements.",
          },
        },
        {
          "@type": "Question",
          name: "Can SEO help my business appear on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local SEO can help improve the information and relevance signals associated with your Google Business Profile and website. Google Maps visibility depends on factors such as relevance, distance and prominence, so no agency can guarantee a particular position.",
          },
        },
        {
          "@type": "Question",
          name: "How long does SEO take to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is a gradual process. The timeline depends on your website's current condition, competition, industry, search demand and the work required. Meaningful progress is generally evaluated over several months rather than a few days.",
          },
        },
        {
          "@type": "Question",
          name: "Can local SEO help businesses in Shanti Nagar and Beverly Park?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local SEO can be useful for businesses serving customers around Shanti Nagar, Beverly Park, Poonam Sagar and Mira Road East. It helps align business information and website content with relevant local searches.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in your SEO service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the agreed scope, SEO work may include keyword research, technical checks, on-page optimisation, local SEO, content recommendations, internal linking and performance reporting.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. SEO strategies can be planned for small businesses as well as growing companies. The priorities and scope should reflect the business goals, website condition and available budget.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a website for local SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Google Business Profile can support local discovery, but a well-structured website gives your business more room to explain services, answer customer questions and build relevant search landing pages.",
          },
        },
        {
          "@type": "Question",
          name: "Can you optimise an existing website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. An existing website can be audited for technical issues, content quality, page structure, keyword targeting, internal links and local search opportunities before improvements are prioritised.",
          },
        },
        {
          "@type": "Question",
          name: "Do you guarantee first-page Google rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No responsible SEO provider can guarantee a specific Google ranking. Search results change and depend on multiple factors outside an agency's control. SEO should focus on improving relevance, website quality and measurable organic performance.",
          },
        },
        {
          "@type": "Question",
          name: "How much do SEO services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the scope, competition, website condition and amount of ongoing work required. Sharp Rays has service packages starting at ₹14,999. Visit the pricing page for the available package details.",
          },
        },
        {
          "@type": "Question",
          name: "Can SEO help real estate businesses in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO can help Mira Road real estate businesses create useful pages for projects, property types, locations and buyer questions. The content should be accurate, specific and genuinely useful to people researching property in the area.",
          },
        },
        {
          "@type": "Question",
          name: "How do we get started with Sharp Rays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by contacting Sharp Rays with your website and business details. We can understand your goals and discuss an appropriate SEO audit and strategy.",
          },
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadSEOPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadSEOPageClient />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </main>

      <Footer />
    </>
  );
}
