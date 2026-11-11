import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiAIVideoCreativePageClient from "@/components/Locations/VasaiRoad/VasaiAiVideoAndCreativePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Production in Vasai | Sharp Rays",
  description:
    "AI video production and creative services in Vasai for brands, retailers and businesses. Create engaging marketing videos and visual content with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/ai-video-and-creative",
  },
};

export default function Page() {
  return (
  <>
  <Navbar />
  <VasaiAIVideoCreativePageClient />
    <Footer />
  </>
);

}
