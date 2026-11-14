
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BorivaliAiVideoCreative from "@/components/Locations/Borivali/BorivaliAiVideoCreative";
import type { Metadata } from "next";

const siteUrl = "https://www.sharprays.com";
const pageUrl = `${siteUrl}/locations/borivali/ai-video-and-creative`;
const pageTitle = "AI Video & Creative Services in Borivali | Sharp Rays";
const pageDescription =
  "AI video and creative services in Borivali for product visuals, brand storytelling, promotional videos, campaign creatives and short-form social content.";
const ogImage = `${siteUrl}/og/digital-marketing-agency-in-borivali-og.webp`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI video agency in Borivali",
    "AI video services in Borivali",
    "AI video production Borivali",
    "AI creative agency Borivali",
    "AI video creation Borivali",
    "AI promotional videos Borivali",
    "AI product videos Borivali",
    "AI video ads Borivali",
    "AI Reels creation Borivali",
    "brand storytelling videos Borivali",
    "AI-assisted creative production Borivali",
    "video creative agency Borivali",
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
      alt: "AI Video and Creative Services in Borivali - Sharp Rays",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImage, alt: "AI Video and Creative Services in Borivali - Sharp Rays" }],
  },
};

const faqs = [
  ["What are AI video and creative services?", "AI video and creative services use suitable AI-assisted tools and production techniques to develop visual concepts, videos and creative assets for brand communication."],
  ["What AI video services does Sharp Rays offer?", "Sharp Rays explores AI-assisted video creation, product visuals, brand storytelling, campaign creatives, short-form video concepts, visual experiments and creative direction."],
  ["Can AI videos be created for Borivali jewellers and retail businesses?", "Yes. Potential concepts include product showcases, collection highlights, new-arrival visuals and festive campaign videos. Final creative direction depends on the product and brand requirements."],
  ["Can you create Instagram Reels using AI?", "AI-assisted production can be used to explore short-form video concepts for Instagram Reels and other suitable platforms. The production approach depends on the content brief."],
  ["Is AI video the same as professional video editing?", "No. AI video and creative focuses on AI-assisted concept development and visual production. Professional video editing focuses on editing and refining existing or supplied footage. Both services can complement each other."],
  ["How much do AI video and creative services cost?", "Pricing depends on the concept, duration, number of outputs, production complexity, editing and delivery requirements. Contact Sharp Rays to discuss your brief."],
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
      name: "AI Video and Creative Services in Borivali",
      serviceType: [
        "AI-Assisted Video Creation",
        "Product Visuals and Video Concepts",
        "AI-Assisted Brand Storytelling",
        "Campaign Video Creatives",
        "Short-Form Video Concepts",
        "AI-Assisted Visual Experiments",
        "Creative Direction and Storyboarding",
        "AI and Human-Led Creative Workflows",
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
        { "@type": "ListItem", position: 4, name: "AI Video & Creative", item: pageUrl },
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

export default function BorivaliAivideoCreative() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd }} />
      <Navbar />
      <main><BorivaliAiVideoCreative /></main>
      <Footer />
    </>
  );
}
