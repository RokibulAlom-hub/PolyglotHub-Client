import React from 'react';
import bgimag from '../../assets/pexels-tima-miroshnichenko-5427999.jpg';

const Banner = () => {
  return (
   <div className=' bg-blue-400 dark:bg-gray-700 dark:text-gray-100 '>
     <div 
      className="flex flex-col md:flex-row items-center w-11/12 mx-auto  md:min-h-screen px-4"
    >
      <div className="text-left flex-1 py-4">
        <h1 className=" text-3xl md:text-5xl font-bold text-white mb-6">Learn faster with your best language tutor</h1>
        <button className="btn md:btn-lg">
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img src={bgimag} className="rounded-lg  shadow-lg max-w-full h-auto" />
      </div>
    </div>
   </div>
  );
};

export default Banner;
