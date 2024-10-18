import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/HeroSec";
import Review from "./component/Review";
import TopSelling from "./component/TopSelling";
import TrandingPlants from "./component/TrandingPlants";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <TrandingPlants />
    <TopSelling />
    <Review />
    <Footer />
    </>
  );
}
