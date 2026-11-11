import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import VasaiPerformanceMarketingPageClient from "@/components/Locations/VasaiRoad/VasaiPerformanceMarketingPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing in Vasai | Sharp Rays",
  description:
    "Performance marketing in Vasai for businesses seeking targeted leads and sales. Google Ads, Meta Ads and campaign optimisation. Discuss your goals with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/performance-marketing",
  },
};

export default function Page() {
  return (
    <>
    <Navbar />
     <VasaiPerformanceMarketingPageClient />
     <Footer/>
    </>
  
  );
}
