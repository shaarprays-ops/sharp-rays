import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VasaiRoadClientPage from "@/components/Locations/VasaiRoad/VasaiRaodClientPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Digital Marketing Agency in Vasai | Sharp Rays",
  description:
    "Looking for a digital marketing agency in Vasai? Sharp Rays offers SEO, website development, social media marketing and digital solutions for growing businesses.",
  alternates: {
    canonical: "https://sharprays.com/locations/vasai-road",
  },
};

export default function VasaiRoadPage() {
  return (
     <>
       <Navbar />
         <VasaiRoadClientPage />
       <Footer />
     </>
   );
  
}