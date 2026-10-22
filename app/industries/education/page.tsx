import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import EducationAdmissionJourney from "@/components/Industries/Education/EducationAdmissionJourney";
import EducationFAQ from "@/components/Industries/Education/EducationFAQ";
import EducationFinalCTA from "@/components/Industries/Education/EducationFinalCTA";
import EducationGrowthMetrics from "@/components/Industries/Education/EducationGrowthMetrics";
import EducationGrowthProblems from "@/components/Industries/Education/EducationGrowthProblems";
import EducationGrowthStack from "@/components/Industries/Education/EducationGrowthStack";
import EducationHero from "@/components/Industries/Education/EducationHero";
import EducationSearchOpportunities from "@/components/Industries/Education/EducationSearchOpportunities";
import EducationServices from "@/components/Industries/Education/EducationServices";
import EducationWhoWeHelp from "@/components/Industries/Education/EducationWhoWeHelp";





export default function Education() {
  return (
    <main>
        <Navbar />
        <EducationHero />
        <EducationGrowthProblems />
        <EducationServices />
        <EducationSearchOpportunities />
        <EducationAdmissionJourney />
        <EducationWhoWeHelp />
        <EducationGrowthMetrics />
        <EducationGrowthStack />
        <EducationFinalCTA />
        <EducationFAQ />
        <Footer/>
      {/* Next sections will be added here */}
    </main>
  );
}