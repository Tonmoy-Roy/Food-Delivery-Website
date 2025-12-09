import Footer from "./Component/Layout/Footer";
import Navbar from "./Component/Layout/Navbar";
import CountNumbers from "./Component/Sections/CountNumbers";
import ExclusiveDeals from "./Component/Sections/ExclusiveDeals";
import FoodCategories from "./Component/Sections/FoodCategories";
import HeroSection from "./Component/Sections/HeroSection";
import KnowMore from "./Component/Sections/KnowMore";
import OrderingApp from "./Component/Sections/OrderingApp";
import PartnerRide from "./Component/Sections/PartnerRide";
import PopularRestaurants from "./Component/Sections/PopularRestaurants";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
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
