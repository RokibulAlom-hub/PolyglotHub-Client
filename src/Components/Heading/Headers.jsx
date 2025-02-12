import React from "react";

const Headers = ({ headtext }) => {
  return (
    <h2 className="text-3xl mb-10 font-bold text-center text-accent dark:text-secondary">
      {headtext}
    </h2>
  );
};

export default Headers;
