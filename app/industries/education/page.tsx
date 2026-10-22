import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import EducationAdmissionJourney from "@/components/Industries/Education/EducationAdmissionJourney";
import EducationGrowthProblems from "@/components/Industries/Education/EducationGrowthProblems";
import EducationHero from "@/components/Industries/Education/EducationHero";
import EducationSearchOpportunities from "@/components/Industries/Education/EducationSearchOpportunities";
import EducationServices from "@/components/Industries/Education/EducationServices";





export default function Education() {
  return (
    <main>
        <Navbar />
        <EducationHero />
        <EducationGrowthProblems />
        <EducationServices />
        <EducationSearchOpportunities />
        <EducationAdmissionJourney />
        <Footer/>
      {/* Next sections will be added here */}
    </main>
  );
}