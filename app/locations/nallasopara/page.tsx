
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import NallasoparaclientPage from "@/components/Locations/Nallasopara/NallasoparaclientPage";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/nallasopara`;
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-nalasopara-og.webp`;

const pageTitle = "Digital Marketing Agency in Nallasopara | Sharp Rays";

const pageDescription =
  "Digital marketing for Nallasopara East and West retailers, clinics and coaching classes near Nallasopara station: SEO, websites and ads. Book a free audit.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "digital marketing agency in Nallasopara",
    "digital marketing company in Nallasopara",
    "digital marketing services in Nallasopara",
    "SEO services in Nallasopara",
    "website development in Nallasopara",
    "social media marketing in Nallasopara  ",
    "performance marketing in Nallasopara",
    "AI automation services in Nallasopara",
    "AI video services in Nallasopara",
    "digital marketing agency in Nallasopara East",
    "digital marketing agency in Nallasopara West",
    "digital marketing near Nallasopara station",
    "digital marketing agency near Tulinj Road",
    "digital marketing agency near Achole",
  ],

  authors: [{ name: "Sharp Rays", url: siteUrl }],
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
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency in Nallasopara - Sharp Rays",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        alt: "Digital Marketing Agency in Nallasopara - Sharp Rays",
      },
    ],
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
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Digital Marketing Services in Nallasopara",
      serviceType: [
        "Search Engine Optimisation",
        "Website Development and Management",
        "Social Media Marketing",
        "Performance Marketing",
        "Digital PR and Media Relations",
        "Content Marketing",
        "AI Video and Creative",
        "Professional Video Editing",
        "AI Automation",
      ],
      description:
        "Digital marketing services for businesses targeting Nallasopara East, Nallasopara West and surrounding areas, including SEO, website development, social media marketing, performance marketing, digital PR, content marketing, AI video and creative solutions, professional video editing and AI automation.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Nallasopara East, Maharashtra, India",
        },
        {
          "@type": "Place",
          name: "Nallasopara West, Maharashtra, India",
        },
        {
          "@type": "Place",
          name: "Nallasopara, Maharashtra, India",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "SEO Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Search Engine Optimisation (SEO)",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Website Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Development and Management",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Social Media Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Social Media Marketing",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Performance Marketing Services",
            itemListElement: [
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
            name: "Creative and Video Services",
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
                  name: "Professional Video Editing",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Automation Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Automation",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Additional Marketing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Digital PR and Media Relations",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Content Marketing",
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
          name: "Nallasopara",
          item: pageUrl,
        },
      ],
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function NallasoparaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      <Navbar />

      <main>
        <NallasoparaclientPage />
      </main>

      <Footer />
    </>
  );
}
