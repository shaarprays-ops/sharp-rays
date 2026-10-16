import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import BeautyCustomerJourney from "@/components/Industries/BeautyWellness/BeautyCustomerJourney";
import BeautyFinalCTA from "@/components/Industries/BeautyWellness/BeautyFinalCTA";
import BeautyGrowthProblems from "@/components/Industries/BeautyWellness/BeautyGrowthProblems";
import BeautyGrowthStack from "@/components/Industries/BeautyWellness/BeautyGrowthStack";
import BeautyMarketingIntro from "@/components/Industries/BeautyWellness/BeautyMarketingIntro";
import BeautySearchVisibility from "@/components/Industries/BeautyWellness/BeautySearchVisibility";
import BeautyServicesSystem from "@/components/Industries/BeautyWellness/BeautyServicesSystem";
import BeautyWellnessHero from "@/components/Industries/BeautyWellness/BeautyWellnessHero";
import BeautyWhoWeHelp from "@/components/Industries/BeautyWellness/BeautyWhoWeHelp";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Digital Marketing for Salons & Beauty Businesses | Sharp Rays",
  description:
    "Digital marketing for salons, spas and wellness businesses with SEO, Google Ads, social media, landing pages and automation focused on bookings and repeat customers.",

  keywords: [
    "digital marketing for salons",
    "beauty salon marketing",
    "spa marketing agency",
    "beauty and wellness marketing",
    "salon digital marketing",
    "spa digital marketing",
    "salon SEO",
    "salon Google Ads",
  ],

  alternates: {
    canonical: "/industries/beauty-wellness",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sharprays.com/industries/beauty-wellness",
    siteName: "Sharp Rays",
    title: "Digital Marketing for Salons & Beauty Businesses | Sharp Rays",
    description:
      "SEO, Google Ads, social media, landing pages and automation for salons, spas and wellness businesses focused on qualified bookings and repeat customers.",
  },
};

export default function BeautyWellnessPage() {
  return (
    <main>
        <Navbar />
      <BeautyWellnessHero />
      <BeautyGrowthProblems />
      <BeautyMarketingIntro/>
      <BeautyServicesSystem />
      <BeautyCustomerJourney />
      <BeautySearchVisibility />
      <BeautyWhoWeHelp />
      <BeautyGrowthStack />
      <BeautyFinalCTA />
      <Footer />

      {/* Next sections will be added here */}
    </main>
  );
}