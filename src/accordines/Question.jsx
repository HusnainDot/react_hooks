import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Question = ({ question, answer, id }) => {
  return (
    <>
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl">
            <span>{id}</span>: {question}
          </h3>
          <div className="border-1 rounded-full p-1 flex items-center justify-center active:scale-95 cursor-pointer">
            <FaCaretDown size={20} />
          </div>
        </div>

        <div className=" mt-3   rounded-lg border-[0.5px] p-3">
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Question;
