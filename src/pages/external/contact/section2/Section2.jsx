import "./Section2.scss";
import location from "../../../../assets/icons/Group 7.png";
import phone from "../../../../assets/icons/Vector.png";
import email from "../../../../assets/icons/Vectorq.png";
import time from "../../../../assets/icons/carbon_time.png";
import mailing from "../../../../assets/icons/clarity_email-line.png";
import linkendin from "../../../../assets/icons/bxl_linkedin.png";
import insta from "../../../../assets/icons/bxl_instagram.png";
import facebook from "../../../../assets/icons/eva_facebook-outline.png";

const Section2 = () => {
  return (
    <div className="flex items-center gap-6 justify-center pt-10 pb-0 lg:py-16 backall ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl">Get In Touch</h1>
          <p className="text-base w-full lg:w-5/6">
            We value open communication and strive to provide exceptional
            customer service. Whether you have a question, a concern, or simply
            wish to share your feedback, our dedicated team is here to assist
            you.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-stretch gap-10 flex-col md:flex-row">
            <div className="flex items-stretch gap-4">
              <div>
                <img className="pt-2" src={location} alt="" />
              </div>
              <div>
                <h2 className="big-text">Location</h2>
                <p className="small-text text-gray-400">
                  1, Olupayi Rd, Behind Kurotola <br /> Petrol Station, Bembo
                  Road, <br /> Apata, Ibadan
                </p>
              </div>
            </div>
            <div className="flex items-stretch gap-4">
              <div>
                <img className="pt-2" src={phone} alt="" />
              </div>
              <div>
                <h2 className="big-text">Phone</h2>
                <p className="small-text text-gray-400">(+234) 09047715613</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch gap-10 ">
            <div className="flex items-stretch gap-4">
              <div>
                <img className="pt-2" src={email} alt="" />
              </div>
              <div>
                <h2 className="big-text">Email Address</h2>
                <p className="small-text text-gray-400">
                  foltunlad24@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-stretch gap-4 md:ps-8 lg:ps-0">
              <div>
                <img className="pt-2" src={time} alt="" />
              </div>
              <div>
                <h2 className="big-text">Opening Hours</h2>
                <p className="small-text text-gray-400">
                  Mon-Sun (8:00am - 10:00pm)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <hr className="border border-[#C1B4B4]" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-black-200 big-text">Social Media:</h3>
          </div>
          <div className="flex items-center gap-3">
            <img className="pt-1" src={mailing} alt="" />
            <img src={linkendin} alt="" />
            <img src={insta} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
