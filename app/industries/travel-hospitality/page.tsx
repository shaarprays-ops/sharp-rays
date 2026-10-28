import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import TravelHospitalityChallenges from "@/components/Industries/TravelHospitality/TravelHospitalityChallenges";
import TravelHospitalityHero from "@/components/Industries/TravelHospitality/TravelHospitalityHero";
import TravelHospitalityPerformance from "@/components/Industries/TravelHospitality/TravelHospitalityPerformance";
import TravelHospitalitySearch from "@/components/Industries/TravelHospitality/TravelHospitalitySearch";
import TravelHospitalityServices from "@/components/Industries/TravelHospitality/TravelHospitalityServices";




export default function TravelHospitality() {
  return (
    <main>
    <Navbar />
    <TravelHospitalityHero />
    <TravelHospitalitySearch />
    <TravelHospitalityChallenges />
    <TravelHospitalityServices />
    <TravelHospitalityPerformance />
    <Footer />

      {/* Next sections will be added here */}
    </main>
  );
}