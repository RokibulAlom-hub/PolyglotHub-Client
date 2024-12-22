import React from 'react';
import bgimag from '../../assets/pexels-tima-miroshnichenko-5427999.jpg';

const Banner = () => {
  return (
    <div 
      className="flex flex-col md:flex-row items-center  md:min-h-screen bg-blue-400 px-8"
    >
      <div className="text-left flex-1 py-4">
        <h1 className=" text-3xl md:text-5xl font-bold text-white mb-6">Learn faster with your best language tutor</h1>
        <button className="md:px-6 py-3 font-medium text-black bg-white rounded-lg shadow-sm hover:bg-gray-200">
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img src={bgimag} alt="Video call" className="rounded-lg  shadow-lg max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Banner;
