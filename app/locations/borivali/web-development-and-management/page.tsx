
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliWebDevelopmentManagement from "@/components/Locations/Borivali/BorivaliWebDevelopmentManagement";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/website-development`;
const pageTitle = "Website Development in Borivali | Sharp Rays";
const pageDescription =
  "Website design and development for Borivali businesses. Catalogue sites for Borivali jewellers and admission sites for coaching classes. Get a free quote.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "website development in Borivali",
    "website design company in Borivali",
    "website development agency in Borivali",
    "business website design Borivali",
    "ecommerce website development Borivali",
    "product catalogue website Borivali",
    "coaching class website Borivali",
    "website redesign Borivali",
    "responsive website development Borivali",
    "landing page development Borivali",
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
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Sharp Rays",
    locale: "en_IN",
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: "Website Development in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "Website Development in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["Does Sharp Rays provide website development in Borivali?", "Sharp Rays provides website design and development services for businesses targeting Borivali. These include business websites, product catalogue websites, service websites, landing pages, admission-focused websites and website improvements."],
  ["What type of website is suitable for a jewellery business in Borivali?", "A product catalogue website can help a jewellery business organise collections, display product images, present product details and provide enquiry options. A full ecommerce website may be considered when online purchasing functionality is required."],
  ["Can you build a website for coaching classes in Borivali?", "Yes. A coaching class website can include course and subject pages, programme details, faculty information, admission enquiry forms and contact information."],
  ["Will my website be SEO-friendly?", "Website development can include SEO foundations such as appropriate page structure, metadata, headings, internal links and technical considerations. Ongoing SEO activities are a separate service."],
  ["How much does website development cost at Sharp Rays?", "Website development starts at ₹14,999 for a Starter Website, ₹24,999 for a Business Website and ₹39,999 for an Advanced Website. Final pricing depends on the project scope, functionality, content and agreed deliverables."],
  ["Do you provide website maintenance and management?", "Website improvements and management can be discussed based on the website platform, required updates and ongoing support requirements."],
] as const;

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
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${pageUrl}/#service` },
      publisher: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Website Design and Development for Borivali Businesses",
      serviceType: [
        "Business Website Development",
        "Product Catalogue Websites",
        "Coaching Class and Admission Websites",
        "Service-Based Websites",
        "Landing Pages",
        "Website Redesign and Management",
      ],
      description: pageDescription,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Borivali, Mumbai, Maharashtra, India",
      },
      url: pageUrl,
      offers: [
        {
          "@type": "Offer",
          name: "Starter Website",
          price: "14999",
          priceCurrency: "INR",
          description: "Starting price for website development.",
        },
        {
          "@type": "Offer",
          name: "Business Website",
          price: "24999",
          priceCurrency: "INR",
          description: "Starting price for website development.",
        },
        {
          "@type": "Offer",
          name: "Advanced Website",
          price: "39999",
          priceCurrency: "INR",
          description: "Starting price for website development.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${siteUrl}/locations` },
        { "@type": "ListItem", position: 3, name: "Borivali", item: `${siteUrl}/locations/borivali` },
        { "@type": "ListItem", position: 4, name: "Website Development", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function BorivaliWebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliWebDevelopmentManagement /></main>
      <Footer />
    </>
  );
}
