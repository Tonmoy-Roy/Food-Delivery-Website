import Footer from "./Component/Layout/Footer";
import Navbar from "./Component/Layout/Navbar";
import ExclusiveDeals from "./Component/Sections/ExclusiveDeals";
import FoodCategories from "./Component/Sections/FoodCategories";
import HeroSection from "./Component/Sections/HeroSection";
import OrderingApp from "./Component/Sections/OrderingApp";
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
      <Footer></Footer>
    </>
  );
}
