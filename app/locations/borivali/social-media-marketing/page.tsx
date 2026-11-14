
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliSocialMediaMarketingPageClient from "@/components/Locations/Borivali/BorivaliSocialMediaMarketingPageClient ";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/social-media-marketing`;
const pageTitle = "Social Media Marketing in Borivali | Sharp Rays";
const pageDescription =
  "Social media marketing for Borivali businesses. Instagram strategy, Reels, creative posts, festive campaigns and consistent brand communication. Discuss your goals.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "social media marketing in Borivali",
    "social media agency in Borivali",
    "social media marketing company Borivali",
    "Instagram marketing Borivali",
    "Instagram Reels agency Borivali",
    "social media management Borivali",
    "Facebook marketing Borivali",
    "social media creatives Borivali",
    "festive social media campaigns Borivali",
    "social media marketing for jewellers Borivali",
    "social media marketing Borivali East",
    "social media marketing Borivali West",
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
      alt: "Social Media Marketing in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "Social Media Marketing in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["Which social media marketing services does Sharp Rays offer in Borivali?", "Sharp Rays offers social media strategy, account management, Instagram marketing, Reels and short-form video, social media creatives, content calendars, captions, festive campaign planning and performance reviews."],
  ["Do you provide Instagram marketing in Borivali?", "Yes. Instagram marketing can include profile content direction, Reels, Stories, carousels, creative posts, captions and content planning based on your business and audience."],
  ["Can you create Reels for Borivali jewellers and retail businesses?", "Yes. Reels can be planned around product showcases, collection highlights, new arrivals, product details, festive themes and brand storytelling."],
  ["Which platforms do you manage?", "Platform requirements can include Instagram, Facebook, LinkedIn and YouTube. The selection depends on your business objectives and target audience."],
  ["Can social media marketing help generate enquiries?", "Social media can support awareness, audience engagement and enquiry opportunities. Actual enquiries depend on factors such as audience relevance, content, offer, competition and the enquiry journey. Results are not guaranteed."],
  ["How much does social media marketing cost?", "The fee depends on the platforms, content volume, creative requirements, Reels production, campaign scope and management needs. Contact Sharp Rays to discuss a suitable scope. Website development prices are separate and are listed on the pricing page."],
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
      name: "Social Media Marketing Services in Borivali",
      serviceType: [
        "Social Media Strategy",
        "Social Media Account Management",
        "Instagram Marketing",
        "Reels and Short-Form Video",
        "Social Media Creatives",
        "Content Calendar and Captions",
        "Festive and Seasonal Campaigns",
        "Performance Review and Optimisation",
      ],
      description: pageDescription,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: {
        "@type": "Place",
        name: "Borivali, Mumbai, Maharashtra, India",
      },
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${siteUrl}/locations` },
        { "@type": "ListItem", position: 3, name: "Borivali", item: `${siteUrl}/locations/borivali` },
        { "@type": "ListItem", position: 4, name: "Social Media Marketing", item: pageUrl },
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

export default function BorivaliSocialMediaMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliSocialMediaMarketingPageClient /></main>
      <Footer />
    </>
  );
}
