import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiAIAutomationPageClient from "@/components/Locations/VasaiRoad/VasaiAiAutomationPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services in Vasai | Sharp Rays",
  description:
    "AI automation services in Vasai to simplify business workflows, reduce repetitive tasks and improve efficiency. Explore practical automation solutions with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/ai-automation",
  },
};

export default function Page() {
  return (
  <>
    <Navbar />
  <VasaiAIAutomationPageClient />
    <Footer />
    </>
  )
}
