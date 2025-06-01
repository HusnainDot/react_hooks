import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Simplecards } from "./Simpledata";

const SimpleSlider = () => {
  const [number, setnumber] = useState(0);

  const handelSlide = (e) => {
    if (e.target.classList.contains("left")) {
      if (number <= 0) {
        setnumber(Simplecards.length - 1);
      } else {
        setnumber(number - 1);
      }
    } else {
      if (number == Simplecards.length - 1) {
        setnumber(0);
      } else {
        setnumber(number + 1);
      }
    }
  };
  return (
    <>
      <div className=" w-[100%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-xl bg-gray-200 p-5 py-10 shadow-2xl shadow-[#415a77] ">
        <h2 className="text-3xl  text-center mb-10">Simple Slider</h2>

        <div className="flex items-center gap-2 overflow-hidden relative">
          <div
            onClick={handelSlide}
            className="border-2 left rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white absolute left-[-6%] md:left-[0%]  translate-1/2"
          >
            <FaAngleLeft size={30} className="left" />
          </div>
          <div className="w-[100%] ">
            <div className="bg-[#457b9d] rounded-lg py-8 flex flex-col items-center gap-2.5 text-[#a8dadc] shadow-2xl shadow-[#1b263b] min-w-[100%]">
              <p className="text-sm text-gray-300">Index: {number}</p>
              <img
                src={Simplecards[number].image}
                alt=""
                className="w-[200px] h-[200px] rounded-md hover:scale-110 transition-all duration-150 cursor-pointer object-cover"
              />
              <h3 className="text-xl capitalize">
                {Simplecards[number].Username}
              </h3>
              <h6 className="text-md capitalize">
                {" "}
                years{Simplecards[number].age}
              </h6>
              <p className="text-center">{Simplecards[number].text}</p>
            </div>
          </div>
          <div
            onClick={handelSlide}
            className="border-2 right rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white
            absolute right-[8%] md:right-[5%] translate-1/2"
          >
            <FaAngleRight size={30} className="right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleSlider;
