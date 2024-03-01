import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import mail_icon from "../../assets/icons/mail-icon.svg"
import phone_icon from "../../assets/icons/phone-icon.svg"
import location_icon from "../../assets/icons/location-icon.svg"
import search_icon from "../../assets/icons/search-icon.svg"
import cart_icon from "../../assets/icons/cart-icon.svg"
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const {pathname} = useLocation()
  const [show, setShow] = useState(false)

  
  return (
    <div className="lg:h-[182px] lg:p-5 px-2 py-5 shadow-lg">
      <header className="lg:block flex items-center justify-between gap-3" style={{maxWidth: "1440px", margin: "auto"}}>
        <div className="flex justify-between items-center lg:mt-4">
          <div className="flex items-center">
            <div className="lg:hidden block z-50" onClick={() => setShow(!show)}>
            <Hamburger direction="right" size={32}/>
            </div>
            <span>
              <Link to="/">
              <img src={logo} alt="" className="md:w-auto w-40 " />
              </Link>
            </span>
          </div>

          <div className="lg:flex hidden items-center gap-5">
            <div className="flex  items-center gap-2">
              <span className="h-full"><img src={mail_icon} alt="" className="h-full" /></span>
              <div>
                <p className=" text-black-500 font-semibold text-[22px]">Email Address</p>
                <p className=" text-gray-300 font-semibold text-base">foltunlad24@gmail.com</p>
              </div>
            </div>
            <div className="flex  items-center gap-2">
            <span><img src={phone_icon} alt="" /></span>
              <div>
                <p className=" text-black-500 font-semibold text-[22px]">Phone Number</p>
                <p className=" text-gray-300 font-semibold text-base" >(+234) 09047715613</p>
              </div>
            </div>
            <div className="flex  items-center gap-2">
            <span><img src={location_icon} alt="" /></span>
              <div>
                <p className=" text-black-500 font-semibold text-[22px]">Our Location</p>
                <p className=" text-gray-300 font-semibold text-base">Olupayi Rd, Apata, Ibadan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 lg:translate-y-12 z-10 bg-white-100 justify-between lg:max-w-[1189px] lg:h-[83px] lg:mx-auto items-center lg:border-2 border-black-100 border-opacity-40 shadow-black-100 lg:shadow-md lg:p-5 lg:rounded-full">
          <div><span><img src={search_icon} alt="" className="md:w-auto w-[35px] cursor-pointer" /></span></div>
          <div className={`${show ? "block" : "lg:block hidden"} lg:relative absolute bg-white-200 lg:w-auto w-full lg:h-full h-screen top-0 left-0`}>
            <nav className="lg:block lg:p-2 p-7">
              <ul  className="flex lg:flex-row flex-col gap-12 text-xl items-center">
                <li><Link className={pathname === "/" && "text-green-100"}>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Product</Link></li>
                <li><Link>Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <span><img src={cart_icon} alt="" className="md:w-auto w-[35px] cursor-pointer" /></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
