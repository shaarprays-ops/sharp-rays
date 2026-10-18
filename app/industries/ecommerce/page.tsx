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
import EcommerceCustomerJourney from "@/components/Industries/Ecommerce/EcommerceCustomerJourney";
import EcommerceFAQ from "@/components/Industries/Ecommerce/EcommerceFAQ";
import EcommerceFinalCTA from "@/components/Industries/Ecommerce/EcommerceFinalCTA";
import EcommerceGrowthMetrics from "@/components/Industries/Ecommerce/EcommerceGrowthMetrics";
import EcommerceGrowthProblems from "@/components/Industries/Ecommerce/EcommerceGrowthProblems";
import EcommerceGrowthServices from "@/components/Industries/Ecommerce/EcommerceGrowthServices";
import EcommerceGrowthStack from "@/components/Industries/Ecommerce/EcommerceGrowthStack";
import EcommerceHero from "@/components/Industries/Ecommerce/EcommerceHero";
import EcommerceSearchIntent from "@/components/Industries/Ecommerce/EcommerceSearchIntent";
import EcommerceWhoWeHelp from "@/components/Industries/Ecommerce/EcommerceWhoWeHelp";
import type { Metadata } from "next";




export default function Ecommerce() {
  return (
    <main>
        <Navbar />
        <EcommerceHero />
        <EcommerceGrowthProblems />
        <EcommerceGrowthServices />
        <EcommerceCustomerJourney />
        <EcommerceSearchIntent />
        <EcommerceWhoWeHelp />
        <EcommerceGrowthMetrics />
        <EcommerceGrowthStack />
        <EcommerceFinalCTA />
        <EcommerceFAQ />
        <Footer/>
      {/* Next sections will be added here */}
    </main>
  );
}