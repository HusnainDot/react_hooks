import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Question = ({ question, answer, id, count }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-full p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">
            <span>{count + 1}</span>: {question}
          </h3>
          <div
            onClick={() => setShow(!show)}
            className=" rounded-full p-1 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer border-[0.5px]"
          >
            <FaCaretDown
              size={20}
              className={`${show ? "rotate-90" : "rotate-0"} transition-all duration-300 `}
            />
          </div>
        </div>

        <div
          className={` overflow-hidden transition-all duration-300  ${
            show
              ? "h-0 p-0 mt-0 border-0"
              : "h-auto p-3 rounded-xl mt-3 border-[0.5px] "
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Question;
