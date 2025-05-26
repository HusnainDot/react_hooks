import React from "react";
import "./globals.css";
import BirthdaysConatiner from "./birthdays/BirthdaysConatiner";
import SliderContainer from "./slider/SliderContainer";
const App = () => {
  return (
    <>
      <div className="py-10">
        <SliderContainer />
        {/* <BirthdaysConatiner /> */}
      </div>
    </>
  );
};

export default App;
