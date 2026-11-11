

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ServicesPageClient from "@/components/Services/ServicesPageClient";
import type { Metadata } from "next";


const url = "https://www.sharprays.com/services";
const title = "Digital Marketing Services in India | Sharp Rays";
const description = "Explore Sharp Rays digital marketing services in India: SEO, social media, paid ads, websites, content, video, AI automation and digital PR.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),
  title,
  description,
  alternates: { canonical: "/services" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_IN", url, siteName: "Sharp Rays", title, description, images: [{ url: "/og/services.webp", width: 1200, height: 630, alt: "Sharp Rays Digital Marketing Services" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og/services.webp"] },
};

const directory = [
  ["Social Media Marketing", "/services/social-media-marketing"],
  ["Search Engine Optimisation (SEO)", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "/services/performance-marketing"],
  ["Website Development & Management", "/services/website-development"],
  ["Content Marketing", "/services/content-marketing"],
  ["AI Video & Creative", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "/services/video-editing"],
  ["AI Automation", "/services/ai-automation"],
  ["Digital PR & Media Relations", "/services/digital-pr-media-relations"],
] as const;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": "https://www.sharprays.com/#website" }, about: { "@id": "https://www.sharprays.com/#organization" }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#catalog` } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sharprays.com/" }, { "@type": "ListItem", position: 2, name: "Services", item: url } ] },
    { "@type": "OfferCatalog", "@id": `${url}#catalog`, name: "Sharp Rays Digital Marketing Services", itemListElement: directory.map(([name,path]) => ({ "@type": "OfferCatalog", name, url: `https://www.sharprays.com${path}` })) },
    { "@type": "ItemList", "@id": `${url}#directory`, name: "Digital marketing service pages", itemListElement: directory.map(([name,path],i) => ({ "@type": "ListItem", position: i+1, name, url: `https://www.sharprays.com${path}` })) },
  ],
};

export default function ServicesPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g,"\\u003c") }}/>
  <Navbar />
  <ServicesPageClient />
  <Footer />
  </>;
}
