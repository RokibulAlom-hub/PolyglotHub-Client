import React from 'react';

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="w-full max-w-6xl py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-indigo-600">50,000+</h3>
            <p className="text-lg text-gray-700">Experienced Tutors</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-indigo-600">300,000+</h3>
            <p className="text-lg text-gray-700">5-Star Reviews</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-indigo-600">120+</h3>
            <p className="text-lg text-gray-700">Languages</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-indigo-600">1,000,000+</h3>
            <p className="text-lg text-gray-700">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
