import DigitalPRClient from "@/components/DigitalPRAndMediaRelations/DigitalPRClient";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import type { Metadata } from "next";


const url = "https://www.sharprays.com/services/digital-pr-media-relations";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),
  title: "Digital PR Agency in India & Media Relations | Sharp Rays",
  description: "Digital PR agency in India for media outreach, press releases, brand reputation and founder PR. Build credibility with Sharp Rays.",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_IN", url, siteName: "Sharp Rays",
    title: "Digital PR Agency in India & Media Relations | Sharp Rays",
    description: "Digital PR, media outreach, press releases and founder visibility services for growing brands.",
    images: [{ url: "/og/digital-pr-media-relations.webp", width: 1200, height: 630, alt: "Sharp Rays Digital PR and Media Relations" }],
  },
  twitter: {
    card: "summary_large_image", title: "Digital PR & Media Relations | Sharp Rays",
    description: "Build a stronger brand presence with media outreach, press releases and strategic digital PR.",
    images: ["/og/digital-pr-media-relations.webp"],
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Digital PR & Media Relations Agency in India", description: metadata.description, isPartOf: { "@id": "https://www.sharprays.com/#website" }, about: { "@id": `${url}#service` } },
    { "@type": "Service", "@id": `${url}#service`, name: "Digital PR & Media Relations", serviceType: "Digital public relations, media relations, press release support and founder PR", provider: { "@id": "https://www.sharprays.com/#organization" }, areaServed: { "@type": "Country", name: "India" }, url, description: "Digital PR strategy, editorial outreach planning, press releases, founder visibility and reputation communication for businesses in India." },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sharprays.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sharprays.com/services" },
      { "@type": "ListItem", position: 3, name: "Digital PR & Media Relations", item: url },
    ] },
  ],
};

export default function DigitalPRPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    <Navbar/>
    <DigitalPRClient />
    <Footer />
  </>;
}
