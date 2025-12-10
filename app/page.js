import Footer from "./Component/Layout/Footer";
import CountNumbers from "./Component/Sections/HomePage/CountNumbers";
import ExclusiveDeals from "./Component/Sections/HomePage/ExclusiveDeals";
import FoodCategories from "./Component/Sections/HomePage/FoodCategories";
import HeroSection from "./Component/Sections/HomePage/HeroSection";
import KnowMore from "./Component/Sections/HomePage/KnowMore";
import OrderingApp from "./Component/Sections/HomePage/OrderingApp";
import PartnerRide from "./Component/Sections/HomePage/PartnerRide";
import PopularRestaurants from "./Component/Sections/HomePage/PopularRestaurants";
import RestaurantHero from "./Component/Sections/RestaurantHero/RestaurantHero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExclusiveDeals></ExclusiveDeals>
      <FoodCategories></FoodCategories>
      <PopularRestaurants></PopularRestaurants>
      <OrderingApp></OrderingApp>
      <PartnerRide></PartnerRide>
      <KnowMore></KnowMore>
      <CountNumbers></CountNumbers>
      <Footer></Footer>
    </>
  );
}
