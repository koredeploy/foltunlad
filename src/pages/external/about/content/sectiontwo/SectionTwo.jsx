import React from "react";
import './SectionTwo.scss'

const SectionTwo = () => {
  return (
    <div className="section-bg bg-[#EDFDF6DB] py-20">
      <div className=" w-11/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-lg lg:text-2xl">Why Shop From Foltunlad?</h1>
        <p className="big-text w-full lg:w-2/5 mx-auto text-center">
          Lorem ipsum dolor sit amet, consetur adipiscing elit. Dignissim lvinar
          placerat nulla ipsum pretium itur enim tortolom in ut viverra nibh
          duis quis.{" "}
        </p>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 pt-16 w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-16 text-white-100 bg-gradient-to-r from-green-200 to-green-100 px-4 py-1 rounded-2xl ">
              <h1>01.</h1>
            </div>
            <h1>Varieties of Options</h1>
            <p className="text-base text-center  w-full  lg:w-4/6 lg:mx-auto">
              Lorem ipsum dolor sit amet dolor sit amet
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-16 text-white-100 bg-gradient-to-r from-green-200 to-green-100 px-4 py-1 rounded-2xl ">
              <h1>02.</h1>
            </div>
            <h1>Varieties of Options</h1>
            <p className="text-base text-center  w-full  lg:w-4/6 lg:mx-auto">
              Lorem ipsum dolor sit amet dolor sit amet
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-16 text-white-100 bg-gradient-to-r from-green-200 to-green-100 px-4 py-1 rounded-2xl ">
              <h1>03.</h1>
            </div>
            <h1>Varieties of Options</h1>
            <p className="text-base text-center  w-full  lg:w-4/6 lg:mx-auto">
              Lorem ipsum dolor sit amet dolor sit amet
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-16 text-white-100 bg-gradient-to-r from-green-200 to-green-100 px-4 py-1 rounded-2xl ">
              <h1>04.</h1>
            </div>
            <h1>Varieties of Options</h1>
            <p className="text-base text-center  w-full  lg:w-4/6 lg:mx-auto">
              Lorem ipsum dolor sit amet dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
