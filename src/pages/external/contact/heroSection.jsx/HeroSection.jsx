import "./HeroSection.scss";
import icon from "../../../../assets/icons/bi_caret-down-fill.png";
const HeroSection = () => {
  return (
    <div className="about-bg flex items-center justify-center ">
      <div className="py-10 lg:py-16 xl:py-20 text-center flex flex-col items-center">
        <h1 className="text-white-200 large-text pt-24 ">Contact Us</h1>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
