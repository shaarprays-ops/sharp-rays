import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiSocialMediaMarketingPageClient from "@/components/Locations/VasaiRoad/VasaiSocialMediaMarketingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing in Vasai | Sharp Rays",
  description:
    "Social media marketing and Reels for Vasai businesses. Reels for Vasai West retail and Vasai Fort tourism; LinkedIn for Vasai East industry. Talk to us.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/social-media-marketing",
  },
};

export default function Page() {
  return (
  <>
  <Navbar />
  <VasaiSocialMediaMarketingPageClient />
    <Footer />
  </>
);
}
