import GoogleMapComponent from "./googleMap/GoogleMapComponent";
import HeroSection from "./heroSection/HeroSection";
import Section2 from "./section2/Section2";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="pt-[5.5rem] md:pt-[6.5rem] lg:pt-[8.5rem]">
      <HeroSection />
      <div className="globalcom-container">
        {" "}
        {/* New container for the globalcom content */}
        <div className="w-11/12  lg:w-5/6 globalcom flex items-center justify-between gap-14 lg:flex-row flex-col-reverse responsive">
          {" "}
          {/* Apply background color here */}
          <GoogleMapComponent className="map " />
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
