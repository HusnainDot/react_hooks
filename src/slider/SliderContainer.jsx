import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderItme from "./SliderItme";
import { cards } from "./data";

const SliderContainer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const preSlide = () => {
    const newIndex = (slideIndex - 1 + cards.length) % cards.length;
    setSlideIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (slideIndex + 1) % cards.length;
    setSlideIndex(newIndex);
  };

  return (
    <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-md bg-gray-200 p-5 shadow-xl shadow-[#415a77] flex items-center gap-2 overflow-hidden">
      {/* Left Button */}
      <div
        onClick={preSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white"
      >
        <FaAngleLeft size={30} />
      </div>

      {/* Slide container with transform animation */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {cards.map((obj, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <SliderItme {...obj} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <div
        onClick={nextSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white"
      >
        <FaAngleRight size={30} />
      </div>
    </div>
  );
};

export default SliderContainer;
