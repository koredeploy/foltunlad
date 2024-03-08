import "./HeroSection.scss";
import icon from "../../../../assets/icons/bi_caret-down-fill.png";
const HeroSection = () => {
  return (
    <div className="contact-bg flex items-center justify-center py-14 lg:py-24  ">
      <div className="py-16 lg:py-16 xl:py-20 text-center flex flex-col items-center  ">
        <h1 className="text-white-200 large-text ">Contact Us</h1>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
