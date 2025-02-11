import React from "react";

const Headers = ({ headtext }) => {
  return (
    <h2 className="text-3xl font-bold text-center text-black dark:text-pink-400">
      {headtext}
    </h2>
  );
};

export default Headers;
