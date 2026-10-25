import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import RestaurantCustomerJourney from "@/components/Industries/Restaurants/RestaurantCustomerJourney";
import RestaurantHero from "@/components/Industries/Restaurants/RestaurantHero";
import RestaurantRetention from "@/components/Industries/Restaurants/RestaurantRetention";
import RestaurantSearchOpportunities from "@/components/Industries/Restaurants/RestaurantSearchOpportunities";
import RestaurantServices from "@/components/Industries/Restaurants/RestaurantServices";



export default function RestaurantPage() {
  return (
    <main>
        <Navbar />
        <RestaurantHero />
        <RestaurantSearchOpportunities />
        <RestaurantCustomerJourney />
        <RestaurantServices />
        <RestaurantRetention />
      <Footer />

      {/* Next sections will be added here */}
    </main>
  );
}