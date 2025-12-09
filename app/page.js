import Footer from "./Component/Layout/Footer";
import Navbar from "./Component/Layout/Navbar";
import ExclusiveDeals from "./Component/Sections/ExclusiveDeals";
import HeroSection from "./Component/Sections/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ExclusiveDeals></ExclusiveDeals>
      <Footer></Footer>
    </>
  );
}
