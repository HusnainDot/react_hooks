import React, { useState } from "react";
import SingalBcard from "./SingalBcard";
import { bdaysdata } from "./birthdaysData";

const BirthdaysConatiner = () => {
  const [cards, setcards] = useState(bdaysdata);

  const removeAllCards = () => {
    if (cards.length == 0) {
      setcards(bdaysdata);
    } else {
      setcards([]);
    }
  };


    const remove = (idremove) => {
        const updatecards = cards.filter((item) => item.id !== idremove);
        setcards(updatecards);

  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-[5%] rounded-md bg-gray-200 p-5 shadow-xl shadow-[#415a77]">
      <h1 className="text-center text-3xl text-[#415a77] capitalize">
        {cards.length} Birthdays Wishes
      </h1>

      <div className="my-5 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cards.map((i) => {
          return <SingalBcard {...i} onRemove={remove} />;
        })}
      </div>

      <button
        onClick={removeAllCards}
        className={`w-[50%] text-3xl text-center block mx-auto rounded-md py-3 active:scale-95 transition-all duration-150 cursor-pointer ${
          cards.length === 0
            ? "bg-[#184e777b] text-[#4d5152]"
            : "bg-[#457b9d] text-[#a8dadc]"
        }`}
      >
        {cards.length === 0 ? "Refresh All" : "Remove All"}
      </button>
    </div>
  );
};

export default BirthdaysConatiner;
