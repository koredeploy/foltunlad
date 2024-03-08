import variety from "../../../../../assets/icons/Variety-Option.svg";
import household from "../../../../../assets/icons/household-needs.svg";
import customer from "../../../../../assets/icons/customer-support.svg";
import delivery from "../../../../../assets/icons/swift-delivery.svg";
import mallImg1 from "../../../../../assets/images/Rectangle 23.svg";
import mallImg2 from "../../../../../assets/images/Rectangle 20.svg";

const SectionOne = () => {
  return (
    <div className="bg-white-200">
      <div className="py-20 w-11/12 mx-auto responsive grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-2xl text-center lg:text-start pb-2  lg:large-text w-full lg:w-5/6 ">
            We Are Trusted And Always Available To All
          </h1>
          <p className="text-center lg:text-start w-full md:w-5/6 md:mx-auto lg:w-full">
            At our supermarket, we take pride in offering a wide range of
            products and services tailored to meet your every need. Whether
            you're seeking fresh produce, household essentials, or indulgent
            treats, we strive to provide a seamless and convenient shopping
            experience.
          </p>

          <div className="grid w-full md:w-[96%] md:mx-auto lg:w-full  grid-cols-2 gap-4 md:gap-10 py-10">
            <div className="flex flex-row gap-2 items-baseline">
              <span className="hidden w-9 h-9 lg:flex items-end">
                <img className="w-full" src={variety} alt="" />
              </span>
              <div>
                <h3 className="text-lg lg:text-xl md:text-center lg:text-start">
                  Varieties Option
                </h3>
                <p className="small-text md:w-5/6 md:mx-auto md:text-center lg:text-start lg:w-full">
                  Explore our extensive selection of products across various
                  categories, ensuring you find exactly what you're looking for.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-baseline">
              <span className="hidden w-9 h-9 lg:flex items-end">
                <img className="w-full" src={household} alt="" />
              </span>
              <div>
                <h3 className="text-lg lg:text-xl md:text-center lg:text-start">
                  Household Needs
                </h3>
                <p className="small-text md:w-5/6 md:mx-auto md:text-center lg:text-start lg:w-full">
                  eep your home well-stocked with our dedicated section for
                  household essentials, from cleaning supplies to organizational
                  tools.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-baseline pt-4">
              <span className=" hidden w-9 h-9 lg:flex items-end">
                <img className=" w-full" src={customer} alt="" />
              </span>
              <div>
                <h3 className="text-lg lg:text-xl md:text-center lg:text-start">
                  Customer Support
                </h3>
                <p className="small-text md:w-5/6 md:mx-auto md:text-center lg:text-start lg:w-full">
                  Our dedicated team is always ready to assist you with any
                  queries or concerns, ensuring a seamless and satisfying
                  shopping experience.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-baseline pt-4">
              <span className="hidden w-9 h-9 lg:flex items-end">
                <img className="w-full" src={delivery} alt="" />
              </span>
              <div>
                <h3 className="text-lg lg:text-xl md:text-center lg:text-start">
                  Swift Delivery
                </h3>
                <p className="small-text md:w-5/6 md:mx-auto md:text-center lg:text-start lg:w-full">
                  Enjoy the convenience of our swift and reliable delivery
                  service, ensuring your purchases reach you in a timely manner.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 lg:gap-7 md:gap-6 md:justify-evenly ">
          <div className="flex flex-col gap-4 md:gap-9 lg:gap-7 ">
            <div className="h-40 lg:h-48 bg-gradient-to-r from-green-200 to-green-100 p-3 lg:p-10 text-white-100 rounded-md flex flex-col items-center justify-center">
              <h1 className="text-center lg:text-start text-xl lg:text-2xl">
                Satisfied CLients
              </h1>
              <p className="text-center lg:text-start small-text pt-1 text-white-100">
                Our Customers
              </p>
              <h1 className="text-center text-3xl pt-2">500+</h1>
            </div>
            <div>
              <img loading="lazy" src={mallImg1} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-9 lg:gap-7">
            <div>
              <img loading="lazy" src={mallImg2} alt="" />
            </div>
            {/*  */}
            <div className="h-40 lg:h-48 bg-gradient-to-r from-orange-200 to-orange-100 p-3 lg:p-10 text-white-100 rounded-md flex flex-col items-center justify-center">
              <h1 className=" text-center lg:text-start text-xl lg:text-2xl">
                Customer Support
              </h1>
              <p className="text-center lg:text-start pt-1 text-white-100">
                Employees
              </p>
              <h1 className="text-center text-3xl pt-2">20+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
