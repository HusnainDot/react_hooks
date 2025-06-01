import React from "react";
import "./globals.css";
import BirthdaysConatiner from "./birthdays/BirthdaysConatiner";
import SliderContainer from "./slider/SliderContainer";
import AccordinesContainer from "./accordines/AccordinesContainer";
import SimpleSlider from "./simpleSlider/SimpleSlider";
import Apis from "./Apis/Apis";
const App = () => {
  return (
    <>
      <div className="py-10 flex flex-col gap-y-20 ">
        {/* <AccordinesContainer />
        <SliderContainer />
        <BirthdaysConatiner />
        <SimpleSlider /> */}
        <Apis/>
      </div>
    </>
  );
};

export default App;
