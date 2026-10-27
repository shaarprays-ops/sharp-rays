import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import StartupContactFields from "@/components/Industries/Startup/StartupContactFields";
import StartupCustomerSearch from "@/components/Industries/Startup/StartupCustomerSearch";
import StartupFinalCTA from "@/components/Industries/Startup/StartupFinalCTA";
import StartupGrowthStages from "@/components/Industries/Startup/StartupGrowthStages";
import StartupHero from "@/components/Industries/Startup/StartupHero";
import StartupServices from "@/components/Industries/Startup/StartupServices";
import StartupTraction from "@/components/Industries/Startup/StartupTraction";
import StartupWhoWeHelp from "@/components/Industries/Startup/StartupWhoWeHelp";




export default function Startup() {
  return (
    <main>
    <Navbar />
    <StartupHero />
    <StartupGrowthStages />
    <StartupCustomerSearch />
    <StartupServices />
    <StartupTraction />
    <StartupWhoWeHelp />
    <StartupFinalCTA />
    <StartupContactFields />
    <Footer />

      {/* Next sections will be added here */}
    </main>
  );
}