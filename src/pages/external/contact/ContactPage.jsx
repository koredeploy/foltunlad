import GoogleMapComponent from "./googleMap/GoogleMapComponent";
import HeroSection from "./heroSection.jsx/HeroSection";
import Section2 from "./section2/Section2";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="globalcom-container">
        {" "}
        {/* New container for the globalcom content */}
        <div className="globalcom flex items-center gap-4 lg:flex-row flex-col-reverse">
          {" "}
          {/* Apply background color here */}
          <GoogleMapComponent className="map" />
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
