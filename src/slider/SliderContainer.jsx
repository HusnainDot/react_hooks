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
    <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-md bg-gray-200 p-5 shadow-xl shadow-[#415a77] flex items-center gap-2">
      <div
        onClick={preSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer"
      >
        <FaAngleLeft size={30} />
      </div>

      {/* only show current item */}
      <div className="w-[90%] rounded-md flex gap-5 overflow-hidden transition-all duration-300">
        <SliderItme {...cards[slideIndex]} index={slideIndex} />
      </div>

      <div
        onClick={nextSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer"
      >
        <FaAngleRight size={30} />
      </div>
    </div>
  );
};

export default SliderContainer;
