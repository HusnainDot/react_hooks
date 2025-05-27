import React from "react";
import Question from "./Question";
import { cards } from "./data";

const AccordinesContainer = () => {
  return (
    <>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-[5%] rounded-md bg-gray-200 p-5 shadow-xl shadow-[#415a77] flex flex-col items-center gap-2 ">
        <h2 className="text-center text-3xl ">Accordion</h2>
        {cards.map((obj, i) => {
          return <Question {...obj} />;
        })}
      </div>
    </>
  );
};

export default AccordinesContainer;
