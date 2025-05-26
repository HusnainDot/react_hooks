import React from "react";

const SingalBcard = ({ id, Username, age, image, onRemove }) => {
  return (
    <div className="bg-[#457b9d] rounded-md py-3 flex flex-col items-center gap-2.5 text-[#a8dadc] shadow-2xl shadow-[#1b263b]">
      <img
        src={image}
        alt={Username}
        className="w-[60px] h-[60px] rounded-full hover:scale-110 transition-all duration-150 cursor-pointer object-cover"
      />
      <h3 className="text-xl capitalize">{Username}</h3>
      <p className="text-md capitalize">{age} years</p>
      <button
        onClick={() => onRemove(id)}
        className="text-center text-2xl w-[50%] mx-auto py-1 rounded-md bg-[#1b263b3d] active:scale-95 transition-all duration-150 cursor-pointer  hover:bg-[#1b263b] hover:shadow-[0_0_30px_10px_rgba(251,191,36,0.5)] "
      >
        Remove
      </button>
    </div>
  );
};

export default SingalBcard;
