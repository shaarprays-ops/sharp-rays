
import type { Metadata } from "next";

import LocationClient from "@/components/Locations/LocationClient";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

export const metadata: Metadata = {
  title: "Locations: Vasai-Virar, Mumbai & Nearby Areas | Sharp Rays",
  description:
    "Sharp Rays is a digital marketing agency based in Naigaon, Vasai-Virar. Explore our location pages across Mumbai and nearby areas.",
  alternates: {
    canonical: "https://sharprays.com/locations",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <LocationClient />;
      <Footer />
    </>
  );
}
