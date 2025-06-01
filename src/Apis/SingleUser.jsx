import React from "react";

const SingleUser = ({ name, owner}) => {
  return (
    <>
      <div className="rounded-md shadow-2xl shadow-cyan-900  p-3 ">
        <img src={owner.avatar_url} alt="" className="w-full rounded-full" />
              <h3 className="text-2xl text-blue-950 mt-2.5 capitalize"> {name}</h3>
              <p className="text-xl text-blue-950 py-2.5">ID: { owner.id}</p>
      </div>
    </>
  );
};

export default SingleUser;
