import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import HealthcareFAQ from "@/components/Industries/Healthcare/HealthcareFAQ";
import HealthcareFinalCTA from "@/components/Industries/Healthcare/HealthcareFinalCTA";
import HealthcareGrowthProblems from "@/components/Industries/Healthcare/HealthcareGrowthProblems";
import HealthcareHero from "@/components/Industries/Healthcare/HealthcareHero";
import HealthcareMarketingMix from "@/components/Industries/Healthcare/HealthcareMarketingMix";
import HealthcareMetrics from "@/components/Industries/Healthcare/HealthcareMetrics";
import HealthcarePatientJourney from "@/components/Industries/Healthcare/HealthcarePatientJourney";
import HealthcareSearchOpportunities from "@/components/Industries/Healthcare/HealthcareSearchOpportunities";
import HealthcareServices from "@/components/Industries/Healthcare/HealthcareServices";
import HealthcareWhoWeHelp from "@/components/Industries/Healthcare/HealthcareWhoWeHelp";
import ManufacturingBuyerSearch from "@/components/Industries/Manufacturing/ManufacturingBuyerSearch";
import ManufacturingFinalCTA from "@/components/Industries/Manufacturing/ManufacturingFinalCTA";
import ManufacturingHero from "@/components/Industries/Manufacturing/ManufacturingHero";
import ManufacturingRFQ from "@/components/Industries/Manufacturing/ManufacturingRFQ";
import ManufacturingServices from "@/components/Industries/Manufacturing/ManufacturingServices";
import ManufacturingWebsite from "@/components/Industries/Manufacturing/ManufacturingWebsite";
import ManufacturingWhoWeHelp from "@/components/Industries/Manufacturing/ManufacturingWhoWeHelp";





export default function Manufacturing() {
  return (
    <main>
        <Navbar />
        <ManufacturingHero />
        <ManufacturingBuyerSearch />
        <ManufacturingWebsite />
        <ManufacturingServices />
        <ManufacturingRFQ />
        <ManufacturingWhoWeHelp />
        <ManufacturingFinalCTA />
        <Footer/>
      {/* Next sections will be added here */}
    </main>
  );
}