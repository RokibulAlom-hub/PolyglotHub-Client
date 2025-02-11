import React from "react";
import bgimag from "../../assets/world.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white dark:bg-gray-700 dark:text-gray-100 ">
      <div
        style={{ backgroundImage: `url(${bgimag})` }}
        className="min-h-screen relative bg-cover flex justify-center  bg-center px-4"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className=" relative z-10 py-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center uppercase  md:text-5xl font-bold">
            Learn faster with your <br />
            best language tutor
          </h1>
          <div className="mt-8">
            <Link className="px-6 py-3 bg-accent text-white font-semibold rounded-lg  ">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
