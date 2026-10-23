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





export default function Healthcare() {
  return (
    <main>
        <Navbar />
        <HealthcareHero />
        <HealthcareGrowthProblems />
        <HealthcareServices />
        <HealthcareSearchOpportunities />
        <HealthcarePatientJourney />
        <HealthcareWhoWeHelp />
        <HealthcareMetrics />
        <HealthcareMarketingMix  />
        <HealthcareFinalCTA />
        <HealthcareFAQ />
        <Footer/>
      {/* Next sections will be added here */}
    </main>
  );
}