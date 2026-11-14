
import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import MiraRoadPageClient from "@/components/Locations/MiraRoad/MiraRoadPageClient";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/mira-road`;

const pageTitle = "Digital Marketing Agency in Mira Road | Sharp Rays";

const pageDescription =
  "Digital marketing for businesses in Mira Road, including Shanti Nagar, Beverly Park and Poonam Sagar. Explore SEO, website development, social media marketing and more.";

const ogImage = `/og/mira-road.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "digital marketing agency in Mira Road",
    "digital marketing company in Mira Road",
    "digital marketing services in Mira Road",
    "digital marketing agency near Mira Road station",
    "SEO services in Mira Road",
    "website development in Mira Road",
    "social media marketing in Mira Road",
    "performance marketing in Mira Road",
    "AI automation services in Mira Road",
    "AI video and creative services in Mira Road",
    "digital marketing agency in Mira Road East",
    "SEO agency in Mira Road",
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
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Sharp Rays - Digital Marketing Agency in Mira Road",
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
      name: "Digital Marketing Services in Mira Road",
      serviceType: [
        "Search Engine Optimization",
        "Website Development",
        "Social Media Marketing",
        "Performance Marketing",
        "AI Video and Creative Services",
        "AI Automation",
        "Digital PR and Media Relations",
        "Content Marketing",
        "Professional Video Editing",
      ],
      description:
        "Sharp Rays offers digital marketing and creative services for businesses in Mira Road, Maharashtra, helping them improve online visibility, website experiences and brand communication.",
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
        "@type": "Audience",
        audienceType:
          "Local businesses, startups, retailers and professional service providers",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Organic Growth",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Search Engine Optimization",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Website and Technology",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Development",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Social and Paid Growth",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Social Media Marketing",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Performance Marketing",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Creative and Automation",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Video and Creative",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Automation",
                },
              },
            ],
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
          name: "Do you provide digital marketing services in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sharp Rays offers digital services for businesses looking to improve their online presence in Mira Road. These include SEO, website development, social media marketing, performance marketing, AI video and creative services, and AI automation.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help businesses near Mira Road station?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can enquire about digital marketing requirements for businesses serving customers near Mira Road station. The suitable approach depends on your business, target audience and service requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with businesses in Mira Road East?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses serving Mira Road East, including areas such as Shanti Nagar, Beverly Park and Poonam Sagar, can discuss their digital requirements with Sharp Rays.",
          },
        },
        {
          "@type": "Question",
          name: "Which digital marketing service should my business start with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The right starting point depends on your current digital presence. A business with an outdated website may need website improvements, while another may benefit from SEO, social media or a combination of services.",
          },
        },
        {
          "@type": "Question",
          name: "Can you develop a website for a small business in Mira Road?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Website projects can be planned around the business's services, audience, content, functionality and enquiry requirements. The scope is discussed before the project begins.",
          },
        },
        {
          "@type": "Question",
          name: "Can I choose SEO or social media marketing separately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can enquire about an individual service or discuss a combination of services. The recommended scope depends on your business priorities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide paid advertising services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Performance marketing can include campaign planning, audience targeting, creative direction, landing-page alignment and campaign optimisation. Advertising spend is separate from service fees.",
          },
        },
        {
          "@type": "Question",
          name: "How much do digital marketing services cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on the selected service, deliverables, complexity and ongoing requirements. You can explore the Sharp Rays pricing page or contact the team to discuss your project.",
          },
        },
        {
          "@type": "Question",
          name: "Can digital marketing guarantee Google rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No agency can responsibly guarantee specific organic search rankings. SEO work focuses on improving technical foundations, relevance, content quality and the overall search experience.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started with Sharp Rays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Share your business details, website if available, location and goals through the contact page. Sharp Rays can then understand your requirements and discuss suitable next steps.",
          },
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function MiraRoadPage() {
  return (
    <>
      <Navbar />

      <main>
        <MiraRoadPageClient />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </main>

      <Footer />
    </>
  );
}
