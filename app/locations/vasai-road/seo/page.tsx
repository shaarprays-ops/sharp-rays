import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiSEOPageClient from "@/components/Locations/VasaiRoad/VasaiSeoPageClient.tsx/page";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "SEO Services in Vasai | Local SEO & Maps | Sharp Rays",
  description:
    "SEO services in Vasai for better Google visibility. Explore local SEO, Google Maps optimization, technical SEO and product SEO with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/vasai-road/seo",
  },
};

export default function Page() {
  return(
    <> 
 < Navbar />
  <VasaiSEOPageClient />
    <Footer />
  </>
  );

}