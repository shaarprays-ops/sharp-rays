import type { Metadata } from "next";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import PricingHero from "@/components/Pricing/PricingHero";
import HowPricingWorks from "@/components/Pricing/HowPricingWorks";
import PricingServiceSection from "@/components/Pricing/PricingServiceSection";
import ContentMarketingPricing from "@/components/Pricing/ContentMarketingPricing";
import ComparePackages from "@/components/Pricing/ComparePackages";
import PricingInfoSections from "@/components/Pricing/PricingInfoSections";
import PricingFAQ from "@/components/Pricing/PricingFAQ";
import PricingQuoteForm from "@/components/Pricing/PricingQuoteForm";
import { pricingFaqs, pricingServices } from "@/components/Pricing/pricingData";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Digital Marketing Price List & Packages India | Sharp Rays",

  description:
    "See the Sharp Rays digital marketing price list: website, SEO, social media, ads, AI automation and video packages in India. Clear scope, honest pricing.",

  keywords: [
    "digital marketing price list",
    "digital marketing packages in india",
    "digital marketing pricing",
    "website price in india",
    "seo price in india",
    "social media marketing price in india",
    "google ads management packages",
    "ai automation pricing",
    "video editing packages",
    "content marketing plans",
  ],

  alternates: {
    canonical: "/pricing",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sharprays.com/pricing",
    siteName: "Sharp Rays",
    title: "Digital Marketing Price List & Packages India | Sharp Rays",
    description:
      "See the Sharp Rays digital marketing price list: website, SEO, social media, ads, AI automation and video packages in India. Clear scope, honest pricing.",
    images: [
      {
        url: "/og/Pricing Packages.webp",
        width: 1200,
        height: 630,
        alt: "Sharp Rays Digital Marketing Pricing and Packages in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Price List & Packages India | Sharp Rays",
    description:
      "See the Sharp Rays digital marketing price list: website, SEO, social media, ads, AI automation and video packages in India. Clear scope, honest pricing.",
    images: ["/og/Pricing Packages.webp"],
  },
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.sharprays.com/pricing#faq",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.sharprays.com/pricing#webpage",
    url: "https://www.sharprays.com/pricing",
    name: "Digital Marketing Price List & Packages in India",
    description:
      "See the Sharp Rays digital marketing price list: website, SEO, social media, ads, AI automation and video packages in India. Clear scope, honest pricing.",
    isPartOf: {
      "@id": "https://www.sharprays.com/#website",
    },
    about: {
      "@id": "https://www.sharprays.com/#organization",
    },
  };

  return (
    <>
      <Navbar />

      <main>
        <PricingHero />

        <HowPricingWorks />

        {pricingServices.map((service, index) => (
          <PricingServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}

        <ContentMarketingPricing />

        <ComparePackages />

        <PricingInfoSections />

        <PricingFAQ />

        <PricingQuoteForm />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}