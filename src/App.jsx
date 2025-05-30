import React from "react";
import "./globals.css";
import BirthdaysConatiner from "./birthdays/BirthdaysConatiner";
import SliderContainer from "./slider/SliderContainer";
import AccordinesContainer from "./accordines/AccordinesContainer";
const App = () => {
  return (
    <>
      <div className="py-10 ">
        <AccordinesContainer />

        <br />
        <SliderContainer />
        <BirthdaysConatiner />
      </div>
    </>
  );
};

export default App;
 