import logo from "../../assets/images/logo.svg";
import mail_icon from "../../assets/icons/mail-icon.svg";
import phone_icon from "../../assets/icons/phone-icon.svg";
import location_icon from "../../assets/icons/location-icon.svg";
import email from "../../assets/icons/footer-email-icon.svg";
import linkedin from "../../assets/icons/footer-linkedin-icon.svg";
import instagram from "../../assets/icons/footer-instagram-icon.svg";
import facebook from "../../assets/icons/footer-facebook-icon.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white-200">
      <div
        className="py-10 px-4 w-11/12 mx-auto"
        style={{ maxWidth: "1440px", margin: "auto" }}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 pt-6 pb-7 gap-8 ">
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <Link to="/">
              <img className=" w-48 md:w-auto" src={logo} alt="" />
            </Link>
            <p className=" text-center font-medium text-lg lg:text-start md:w-3/5 md:mx-auto lg:mx-0 lg:w-[384px] ">
              Lorem ipsum dolor sit amet, consectetur adiping elit. Dis sed a in
              feugiat pele. A mattis tortor a, netus amet dolor. feugiat
              pelleque. A mattis tortor a, netus amet dol.
            </p>

            <div className="flex gap-6 cursor-pointer">
              <img src={email} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-col lg:ps-20 gap-5 items-center ">
              <h2 className="font-medium text-2xl">Quick Links</h2>
              <ul className="flex list-disc text-lg flex-col gap-7 justify-center items-start">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <Link to="">Carts</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col xl:ml-24 gap-3 lg:gap-5 items-center lg:items-start  ">
              <div className="lg:flex hidden flex-col justify-center gap-5">
                <h2 className="font-medium text-2xl">Contact Us</h2>

                <div className="flex  items-center gap-2">
                  <img
                    src={location_icon}
                    alt=""
                    className="w-[25px] h-[32px]"
                  />

                  <div>
                    <h2 className=" text-black-500   text-[22px]">
                      Our Location
                    </h2>
                    <p className=" text-gray-300 font-medium  text-base">
                      1, Olupayi Rd, Behind Kurotola Petrol Station, Bembo Road,
                      Apata, Ibadan
                    </p>
                  </div>
                </div>
                <div className="flex  items-center gap-2">
                  <span className="h-full">
                    <img src={mail_icon} alt="" className="h-full" />
                  </span>
                  <div>
                    <h2 className=" text-black-500  text-[22px]">
                      Email Address
                    </h2>
                    <p className=" text-gray-300 font-medium  text-base">
                      foltunlad24@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <img src={phone_icon} alt="" />
                  </span>
                  <div>
                    <h2 className=" text-black-500 text-[22px]">
                      Phone Number
                    </h2>
                    <p className=" text-gray-300 font-medium  text-base">
                      (+234) 09047715613
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-gray-300 h-[2px]" />
        <p className="text-center text-gray-300 mt-3 text-sm">
          CopyRight &copy; {new Date().getFullYear()}{" "}
          <span className="text-black-500 text-base">Foltunlad</span>, All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
