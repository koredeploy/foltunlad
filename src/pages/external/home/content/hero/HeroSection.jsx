import "./HeroSection.scss";
import { Link } from "react-router-dom";
import heroImg from "../../../../../assets/images/image-1.webp";
import wholesaleIcon from "../../../../../assets/icons/wholesales-icon.svg";
import retailIcon from "../../../../../assets/icons/retail-icon.svg";
import householdIcon from "../../../../../assets/icons/household-needs-icon.svg";
import pefImg from "../../../../../assets/images/perfume-img.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section pt-6">
        <div className="w-11/12 mx-auto grid  grid-cols-1 lg:grid-cols-2 justify-center items-center responsive py-14">
          <div className="text-white-100 flex flex-col justify-center items-center lg:items-start gap-5 xl:gap-8 w-full xl:w-5/6">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl text-white-100 text-center lg:text-start">
              Grocery Varieties{" "}
              <span className=" text-center lg:text-start fw-normal  text-3xl lg:text-4xl xl:text-5xl">
                Made Available Just
              </span>{" "}
              For You.
            </h1>
            <p className="text-white-100 fw-light  text-center lg:text-start">
              Discover a shopping experience like no other at our supermarket,
              where we strive to provide you with a one-stop shopping experience
              like no other. From essential household items to indulgent treats,
              our expansive selection caters to every need and craving.
            </p>
            <Link to="/products">
              <button className="px-4 py-3 w-48 rounded-full bg-green-100 text-white-100">
                Explore Products
              </button>
            </Link>
          </div>
          <div className="pb-16 ">
            <img
              className="hidden lg:block w-full items-end"
              src={heroImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto -translate-y-24  lg:-translate-y-32 z-10 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 xl:gap-8 responsive">
        <div className="bg-white-200 flex flex-col lg:gap-3 items-center justify-center text-center gap-1 px-3  lg:p-4 rounded-lg shadow-md h-[190px] lg:h-[260px]">
          <img src={wholesaleIcon} alt="" />
          <h1>Retail</h1>
          <p className=" tiny-text lg:text-base">
            Explore our extensive retail section, offering a wide range of
            high-quality products for all your household needs, from fresh
            produce to personal care items.
          </p>
        </div>
        <div className="bg-white-200 flex flex-col lg:gap-3 items-center justify-center text-center gap-1 px-3  lg:p-4 rounded-lg shadow-md h-[190px] lg:h-[260px]">
          <img src={retailIcon} alt="" />
          <h1>Wholesale</h1>
          <p className=" tiny-text lg:text-base">
            Cater to your business needs with our comprehensive wholesale
            program, providing bulk ordering options and customized solutions
            for restaurants, hotels, and more.
          </p>
        </div>
        <div className="bg-white-200 flex flex-col lg:gap-3 items-center justify-center text-center gap-1 px-3  lg:p-4 rounded-lg shadow-md h-[190px] lg:h-[260px]">
          <img src={householdIcon} alt="" />
          <h1>Household Needs</h1>
          <p className="tiny-text lg:text-base">
            Keep your home well-stocked with our dedicated section for household
            essentials, including cleaning supplies, paper products, and
            organizational tools.
          </p>
        </div>
        <div className="bg-green-100 flex flex-col gap-[0.35rem] lg:gap-3 items-start pt-3 text-start px-2 lg:px-4 lg:pt-7 rounded-lg shadow-md h-[190px] lg:h-[260px]">
          <div className="bg-red-200 rounded-3xl px-2 py-2">
            <p className="text-white-100 font-thin tiny-text ">35% Off Promo</p>
          </div>

          <h1 className="text-white-100  text-[13px]  lg:text-[14px] lg:text-base ">
            OudTouch Frank Olivier
          </h1>
          <p className="text-white-100 tiny-text lg:text-base font-thin">
            Indulge in the finest fragrances from our carefully curated
            collection, featuring captivating scents to elevate any occasion.
          </p>
          <a className="text-white-100  text-[14px]  md:text-base lg:text-xl cursor-pointer">
            Learn More
          </a>
          <img
            src={pefImg}
            alt=""
            className="w-1/4 lg:w-[14%] lg:translate-x-5 z-20 absolute translate-y-36 md:translate-y-24 lg:translate-y-40 -right-1 lg:-right-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
