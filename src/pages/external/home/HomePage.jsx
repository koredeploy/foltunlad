import { useContext } from "react";
import Testimonial from "../../../layout/sharedLayout/testimonial/Testimonial";
import NewsLetter from "../../../layout/sharedLayout/newsletter/NewsLetter";
import HeroSection from "./content/hero/HeroSection";
import LatestProducts from "./content/sectionone/LatestProducts";
import ProductContext from "../../../context/ProductContext";
import SectionTwo from "./content/sectiontwo/SectionTwo";
import Provisions from "./content/sectionthree/Provisions";
import CosmeticsAndToiletries from "./content/sectionfour/CosmeticsAndToiletries";
import WineAndDrinks from "./sectionfive/WineAndDrinks";
import Fragrance from "./content/sectionsix/Fragrance";
const HomePage = () => {
  const {
    latestProduct,
    provisions,
    fragrance,
    wineAndDrinks,
    cosmeticsAndToiletries,
  } = useContext(ProductContext);

  // console.log(cosmeticsAndToiletries);
  

  return (
    <div className="bg-white-200">
      <HeroSection />
      <LatestProducts
        latestProduct={latestProduct}
      />
      <SectionTwo/>
      <Provisions provisions={provisions}/>
      <CosmeticsAndToiletries products={cosmeticsAndToiletries}/>
      <WineAndDrinks products={wineAndDrinks}/>
      <Fragrance products={fragrance}/>
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default HomePage;


// provisions={provisions}
// wineAndDrinks={wineAndDrinks}
// costmeticsAndToiletries={costmeticsAndToiletries}
// fragrance={fragrance}
