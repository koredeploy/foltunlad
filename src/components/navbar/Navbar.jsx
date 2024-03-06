import { useState, useContext } from "react";
import logo from "../../assets/images/logo.svg";
import mail_icon from "../../assets/icons/mail-icon.svg"
import phone_icon from "../../assets/icons/phone-icon.svg"
import location_icon from "../../assets/icons/location-icon.svg"
import search_icon from "../../assets/icons/search-icon.svg"
import cart_icon from "../../assets/icons/cart-icon.svg"
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'
import Search from "../search/Search";
import ProductContext from "../../context/ProductContext";
import CartDialog from "../modal/CartModal";
const Navbar = () => {
  const {pathname} = useLocation()
  const [show, setShow] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const {setOpen} = useContext(ProductContext);

  // console.log(open);
  const handleHamburger = () => {
    setShow(false)
    setIsOpen(false)
  }

  
  return (
    <div className="fixed bg-white-100 top-0 right-0 left-0 z-50">
    <div className="navbar-container lg:p-5 px-2 py-5 lg:pt-5 shadow-lg lg:h-[145px]">
      <header className="lg:block flex items-center justify-between gap-3 w-11/12 mx-auto" style={{maxWidth: "1440px", margin: "auto"}}>
        <div className="flex justify-between items-center lg:mt-2">
          <div className="flex items-center">
            <div className="lg:hidden block z-50" onClick={() => setShow(!show)}>
            <Hamburger direction="right" size={32} toggled={isOpen} toggle={setIsOpen}/>
            </div>
            <span>
              <Link to="/">
              <img src={logo} alt="" className="md:w-auto w-40 " />
              </Link>
            </span>
          </div>

          <div className="lg:flex hidden items-center gap-7">
            <div className="flex  items-center gap-2">
              <span className="h-full"><img src={mail_icon} alt="" className="h-full" /></span>
              <div>
                <p className=" text-black-500 font-semibold text-[22px]">Email Address</p>
                <p className=" text-gray-300 font-medium small-text">foltunlad24@gmail.com</p>
              </div>
            </div>
            <div className="flex  items-center gap-2">
            <span><img src={phone_icon} alt="" /></span>
              <div>
                <p className=" text-black-100 font-semibold text-[22px]">Phone Number</p>
                <p className=" text-gray-300 font-medium small-text" >(+234) 09047715613</p>
              </div>
            </div>
            <div className="flex  items-center gap-2">
            <span><img src={location_icon} alt="" /></span>
              <div>
                <p className=" text-black-500 font-semibold text-[22px]">Our Location</p>
                <p className=" text-gray-300 font-medium small-text">Olupayi Rd, Apata, Ibadan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 lg:relative  lg:translate-y-4 z-10 bg-white-100 justify-between lg:max-w-[1189px] lg:h-[83px] lg:mx-auto items-center lg:shadow-2xl lg:p-5 lg:rounded-full">
          <div><span onClick={() => setIsSearch(!isSearch)}><img src={search_icon} alt="" className="md:w-auto w-[35px] cursor-pointer" /></span></div>
          <div className={`${show ? "block" : "lg:block hidden"} lg:relative absolute bg-white-200 lg:w-auto w-full lg:h-full lg:z-20 z-50  h-screen top-0 left-0`}>
            <nav className="lg:block lg:p-2 p-7" onClick={handleHamburger}>
              <ul  className="flex lg:flex-row flex-col gap-12 text-xl items-center">
                <li><Link to="/" className={pathname === "/" ? "text-green-100" : null}>Home</Link></li>
                <li><Link to="/about" className={pathname === "/about" ? "text-green-100" : null}>About</Link></li>
                <li><Link to="/products" className={pathname.includes("/products") ? "text-green-100" : null}>Product</Link></li>
                <li><Link to="/contact" className={pathname === "/contact" ? "text-green-100" : null}>Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <span onClick={()=>{
              setOpen(true)
            }}><img  src={cart_icon} alt="" className="md:w-auto w-[35px] cursor-pointer" /></span>
          </div>
          {isSearch && <Search setIsSearch={setIsSearch}/>}
        </div>
      </header>
    </div>
    <CartDialog />
    </div>
  );
};

export default Navbar;
