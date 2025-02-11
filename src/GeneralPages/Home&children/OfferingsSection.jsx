import React from 'react';
import Headers from '../../Components/Heading/Headers';

const OfferingsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
      <div className="w-full my-7 max-w-6xl p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <Headers headtext="Explore"></Headers>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1-on-1 Lessons */}
          <div className="flex flex-col items-center p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-sm text-center">
            <img src="https://i.ibb.co.com/4j8vRbx/istockphoto-1034426836-2048x2048.jpg" alt="1-on-1 Lessons" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">1-on-1 Lessons</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Find teachers from all over the world sharing their languages, dialects, and cultures.</p>
            <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">Find my teacher</button>
          </div>
          
          {/* Group Classes */}
          <div className="flex flex-col items-center p-6 bg-green-100 dark:bg-green-900 rounded-lg shadow-sm text-center">
            <img src="https://i.ibb.co.com/j55kPm1/skeptical-diverse-hr-managers-interviewing-female-applicant-bad-first-impression.jpg" alt="Group Classes" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Group Classes</h3>
            <p className="text-green-700 dark:text-green-300 mb-4">Fun and engaging online group classes designed and led by expert teachers.</p>
            <button className="px-4 py-2 font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700">View all classes</button>
          </div>
          
          {/* Practice for Free */}
          <div className="flex flex-col items-center p-6 bg-red-100 dark:bg-red-900 rounded-lg shadow-sm text-center">
            <img src="https://i.ibb.co.com/GTFTTJ5/pexels-olly-3756679.jpg" alt="Practice for Free" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">Practice for Free</h3>
            <p className="text-red-700 dark:text-red-300 mb-4">Meet and share experiences with millions of language learners from more than 190 countries.</p>
            <button className="px-4 py-2 font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700">Explore the community</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
