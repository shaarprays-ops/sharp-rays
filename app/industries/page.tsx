
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import IndustriesPageClient from "@/components/Industries/IndustriePageClient";

import type { Metadata } from "next";


const site = "https://www.sharprays.com";
const url = `${site}/industries`;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Digital Marketing for Industries in India | Sharp Rays",
  description: "Explore industry-specific digital marketing for healthcare, ecommerce, education, manufacturing, real estate, restaurants and more with Sharp Rays.",
  alternates: { canonical: "/industries" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_IN", url, siteName: "Sharp Rays",
    title: "Digital Marketing for Industries in India | Sharp Rays",
    description: "Industry-focused SEO, ads, websites, content and growth strategies for ten different business sectors.",
    images: [{ url: "/og/industries.webp", width: 1200, height: 630, alt: "Sharp Rays industry-specific digital marketing solutions" }],
  },
  twitter: { card: "summary_large_image", title: "Digital Marketing for Industries in India | Sharp Rays", description: "Explore industry-specific marketing solutions for your business.", images: ["/og/industries.webp"] },
};

const industryLinks = [
  ["Beauty & Wellness", "/industries/beauty-wellness"],
  ["Ecommerce", "/industries/ecommerce"],
  ["Education", "/industries/education"],
  ["Healthcare", "/industries/healthcare"],
  ["Manufacturing", "/industries/manufacturing"],
  ["Restaurants", "/industries/restaurants"],
  ["Professional Services", "/industries/professional-services"],
  ["Startups", "/industries/startup"],
  ["Travel & Hospitality", "/industries/travel-hospitality"],
  ["Real Estate", "/industries/real-estate"],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage", "@id": `${url}#webpage`, url,
      name: "Digital Marketing for Industries in India | Sharp Rays",
      description: "Industry-focused digital marketing solutions for ten business sectors in India.",
      isPartOf: { "@id": `${site}/#website` },
      about: { "@id": `${site}/#organization` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      mainEntity: { "@id": `${url}#industry-list` },
    },
    {
      "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Industries", item: url },
      ],
    },
    {
      "@type": "ItemList", "@id": `${url}#industry-list`, name: "Industries Sharp Rays Serves",
      itemListElement: industryLinks.map(([name, path], i) => ({
        "@type": "ListItem", position: i + 1, name, url: `${site}${path}`,
      })),
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Navbar />
      <IndustriesPageClient />
      <Footer />
    </>
  );
}
      