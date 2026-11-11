import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiWebsiteDevelopmentPageClient from "@/components/Locations/VasaiRoad/VasaiWebDevelopmentPageClient.tsx/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development in Vasai | Sharp Rays",
  description:
    "Website development in Vasai for businesses, manufacturers and shops. Get modern, SEO-friendly websites, product catalogues and WhatsApp-ready enquiries with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/website-development",
  },
};

export default function Page() {
  return (
    <>
  <Navbar />
  <VasaiWebsiteDevelopmentPageClient />
  <Footer />
</>
    );
}
