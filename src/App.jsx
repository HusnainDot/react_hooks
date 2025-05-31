import React from "react";
import "./globals.css";
import BirthdaysConatiner from "./birthdays/BirthdaysConatiner";
import SliderContainer from "./slider/SliderContainer";
import AccordinesContainer from "./accordines/AccordinesContainer";
import SimpleSlider from "./simpleSlider/SimpleSlider";
const App = () => {
  return (
    <>
      <div className="py-10 ">
        <AccordinesContainer />
        <br />
        <SliderContainer />
        <br />
        <BirthdaysConatiner />
        <br />
        <SimpleSlider />
      </div>
    </>
  );
};

export default App;
