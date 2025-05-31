import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderItme from "./SliderItme";
import { cards } from "./data";

const SliderContainer = () => {
  const newSlides = [cards[cards.length - 1], ...cards, cards[0]];
  const [currentSlide, setCurrSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true); // ✅ fixed camelCase

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrSlide((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  const nextSlide = () => {
    if (currentSlide < newSlides.length - 1) {
      setCurrSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    if (currentSlide === newSlides.length - 1) {
      // At fake first slide, jump to real first
      setIsTransitioning(false);
      setCurrSlide(1);
      setTimeout(() => setIsTransitioning(true), 20);
    } else if (currentSlide === 0) {
      // At fake last slide, jump to real last
      setIsTransitioning(false);
      setCurrSlide(newSlides.length - 2);
      setTimeout(() => setIsTransitioning(true), 20);
    }
  };

  return (
    <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-xl bg-gray-200 p-5 py-10 shadow-2xl shadow-[#415a77] flex items-center gap-2 overflow-hidden relative">
      {/* Left Button */}
      <div
        onClick={prevSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white absolute left-[0%] translate-1/2"
      >
        <FaAngleLeft size={30} />
      </div>

      {/* Slide Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center "
          style={{
            transform: `translateX(-${currentSlide * 100}%)`, // 🔧 Use 100% if each slide takes full width
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {newSlides.map((obj, i) => (
            <SliderItme {...obj} key={i} />
          ))}
        </div>
      </div>

      {/* Right Button */}
      <div
        onClick={nextSlide}
        className="border-2 rounded-full p-2 flex items-center justify-center active:scale-95 cursor-pointer z-10 bg-white absolute right-[5%] translate-1/2"
      >
        <FaAngleRight size={30} />
      </div>
    </div>
  );
};

export default SliderContainer;
