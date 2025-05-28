import React from "react";

const SliderItme = ({ Username, age, image, text, id }) => {
  return (
    <div className="bg-[#457b9d] rounded-lg py-8 flex flex-col items-center gap-2.5 text-[#a8dadc] shadow-2xl shadow-[#1b263b] min-w-[100%]">
      <p className="text-sm text-gray-300">Index: {id}</p>
      <img
        src={image}
        alt=""
        className="w-[200px] h-[200px] rounded-md hover:scale-110 transition-all duration-150 cursor-pointer object-cover"
      />
      <h3 className="text-xl capitalize">{Username}</h3>
      <h6 className="text-md capitalize">{age} years</h6>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default SliderItme;
