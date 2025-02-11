import React from "react";

const Headers = ({ headtext }) => {
  return (
    <h2 className="text-3xl mb-10 font-bold text-center text-accent dark:text-pink-400">
      {headtext}
    </h2>
  );
};

export default Headers;
