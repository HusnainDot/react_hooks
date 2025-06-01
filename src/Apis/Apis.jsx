import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const Apis = () => {
  const apis = "https://api.github.com/users/mojombo/subscriptions";

  const [userdata, setUserData] = useState([]);

  let users = async () => {
    let response = await fetch(apis);
    let data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    users();
  }, []);

  users();
  return (
    <>
      <div className="container bg-gray-300 rounded-2xl shadow-2xl shadow-teal-950 mx-auto  w-[90%]">
        <h1 className="text-center  text-4xl py-3 text-teal-900">
          Dummy Api's
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-10 gap-2.5 lg:grid-cols-4 p-8">
          {userdata?.map((obj, i) => {
              return <SingleUser key={i} {...obj} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Apis;
