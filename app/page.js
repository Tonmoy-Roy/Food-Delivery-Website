import Footer from "./Component/Layout/Footer";
import Navbar from "./Component/Layout/Navbar";
import ExclusiveDeals from "./Component/Sections/ExclusiveDeals";
import FoodCategories from "./Component/Sections/FoodCategories";
import HeroSection from "./Component/Sections/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ExclusiveDeals></ExclusiveDeals>
      <FoodCategories></FoodCategories>
      <Footer></Footer>
    </>
  );
}
