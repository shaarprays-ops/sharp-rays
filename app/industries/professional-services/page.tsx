import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ProfessionalServicesEnquiries from "@/components/Industries/ProfessionalServices/ProfessionalServicesEnquiries";
import ProfessionalServicesFAQ from "@/components/Industries/ProfessionalServices/ProfessionalServicesFAQ";
import ProfessionalServicesFinalCTA from "@/components/Industries/ProfessionalServices/ProfessionalServicesFinalCTA";
import ProfessionalServicesHero from "@/components/Industries/ProfessionalServices/ProfessionalServicesHero";
import ProfessionalServicesIndustries from "@/components/Industries/ProfessionalServices/ProfessionalServicesIndustries";
import ProfessionalServicesSearch from "@/components/Industries/ProfessionalServices/ProfessionalServicesSearch";
import ProfessionalServicesServices from "@/components/Industries/ProfessionalServices/ProfessionalServicesServices";
import ProfessionalServicesTrust from "@/components/Industries/ProfessionalServices/ProfessionalServicesTrust";



export default function ProfessionalServices() {
  return (
    <main>
    <Navbar />
    <ProfessionalServicesHero />
    <ProfessionalServicesSearch />
    <ProfessionalServicesTrust />
    <ProfessionalServicesServices />
    <ProfessionalServicesEnquiries />
    <ProfessionalServicesIndustries />
    <ProfessionalServicesFAQ />
    <ProfessionalServicesFinalCTA />
    <Footer />

      {/* Next sections will be added here */}
    </main>
  );
}