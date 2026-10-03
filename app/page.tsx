import type { Metadata } from "next";

import BeforeYouAskSection from "@/components/Home/BeforeYouAskSection";
import BigIdeaSection from "@/components/Home/BigIdeaSection";
import DifferenceSection from "@/components/Home/DifferenceSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HookSection from "@/components/Home/HookSection";
import HumanSection from "@/components/Home/HumanSection";
import Navbar from "@/components/Home/Navbar";
import SelectedWorkSection from "@/components/Home/SelectedWorkSection";
import SharpRaysComparisonSection from "@/components/Home/SharpRaysComparisonSection";
import WhatCouldWeDoSection from "@/components/Home/WhatCouldWeDoSection";
import YourMethodSection from "@/components/Home/YourMethodSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),

  title: "Digital Marketing Agency in India | SEO, Ads & AI | Sharp Rays",

  description:
    "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

  keywords: [
    "digital marketing agency in India",
    "digital growth agency India",
    "digital marketing agency for startups",
    "digital marketing agency for small businesses",
    "digital marketing agency for D2C brands",
    "AI digital marketing agency",
    "SEO agency India",
    "performance marketing agency India",
    "website development agency India",
    "AI automation agency India",
    "AI video agency India",
  ],

  alternates: {
    canonical: "https://www.sharprays.com/",
  },

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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sharprays.com/",
    siteName: "Sharp Rays",

    title: "Digital Marketing Agency in India | SEO, Ads & AI",

    description:
      "Sharp Rays helps startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

    images: [
      {
        url: "/og/home.webp",
        width: 1200,
        height: 630,
        alt: "Sharp Rays - Digital Marketing, AI Video and Automation Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Agency in India | SEO, Ads & AI",

    description:
      "Sharp Rays helps startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

    images: ["/og/home.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sharprays.com/#organization",

  name: "Sharp Rays",

  url: "https://www.sharprays.com/",

  logo: {
    "@type": "ImageObject",
    url: "https://www.sharprays.com/logo/sharp-rays-logo.png",
  },

  description:
    "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, paid advertising, website development, AI video and automation.",

  sameAs: [
    // Add your real social profile URLs here
    // "https://www.linkedin.com/company/sharp-rays/",
    // "https://www.instagram.com/sharprays/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.sharprays.com/#website",

  url: "https://www.sharprays.com/",

  name: "Sharp Rays",

  publisher: {
    "@id": "https://www.sharprays.com/#organization",
  },

  inLanguage: "en-IN",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.sharprays.com/#webpage",

  url: "https://www.sharprays.com/",

  name: "Digital Marketing Agency in India | SEO, Ads & AI | Sharp Rays",

  description:
    "Sharp Rays is a digital marketing agency in India helping startups, small businesses and D2C brands grow through SEO, paid ads, websites, AI video and automation.",

  isPartOf: {
    "@id": "https://www.sharprays.com/#website",
  },

  about: {
    "@id": "https://www.sharprays.com/#organization",
  },

  inLanguage: "en-IN",
};

export default function Home() {
  return (
    <>
      {/* ================================
          STRUCTURED DATA
      ================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* ================================
          PAGE
      ================================= */}

      <main className="min-h-screen bg-[#051935]">
        <Navbar />

        <Hero />

        <HookSection />

        <BigIdeaSection />

        <WhatCouldWeDoSection />

        <DifferenceSection />

        <SelectedWorkSection />

        <YourMethodSection />

        <HumanSection />

        <SharpRaysComparisonSection />

        <BeforeYouAskSection />

        <FinalCTASection />

        <Footer />
      </main>
    </>
  );
}