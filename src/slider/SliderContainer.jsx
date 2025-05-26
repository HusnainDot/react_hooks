import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderItme from "./SliderItme";
import { cards } from "./data";
const SliderContainer = () => {
  let [slideIndex, setSlideIndex] = useState(0);

  let preSlide = () => {
    alert("preslide");
  };
  let nextSlide = () => {
    alert(`nex ${index}`);
  };
  return (
    <>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-md bg-gray-200 p-5 shadow-xl shadow-[#415a77] flex items-center gap-2 ">
        <div
          onClick={preSlide}
          className="pre border-2 rounded-full  flex items-center justify-center active:scale-95 cursor-pointer"
        >
          <FaAngleLeft size={30} />
        </div>

        {/* slider items */}
        <div className="w-[90%] rounded-md flex gap-5 overflow-hidden">
          {cards.map((item, index) => {
            return <SliderItme {...item}  />;
          })}
        </div>
        <div
          onClick={nextSlide}
          className="pre border-2 rounded-full  flex items-center justify-center active:scale-95 cursor-pointer"
        >
          <FaAngleRight size={30} />
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
