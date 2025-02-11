import React from 'react';
import Headers from '../../Components/Heading/Headers';
import Button from '../../Components/Buttons/Button';

const OfferingsSection = () => {
  return (
    <div className="">
      <div className="">
      <Headers headtext="Explore More About Us"></Headers>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1-on-1 Lessons */}
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg border border-secondary  text-center">
            <img src="https://i.ibb.co.com/4j8vRbx/istockphoto-1034426836-2048x2048.jpg" alt="1-on-1 Lessons" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-semibold ">1-on-1 Lessons</h3>
            <p className="">Find teachers from all over the world sharing their languages, dialects, and cultures.</p>
            <Button btntext="Find my teacher"></Button>
          </div>
          
          {/* Group Classes */}
          <div className="flex flex-col border border-secondary items-center p-6 rounded-lg shadow-lg text-center">
            <img src="https://i.ibb.co.com/j55kPm1/skeptical-diverse-hr-managers-interviewing-female-applicant-bad-first-impression.jpg" alt="Group Classes" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-semibold ">Group Classes</h3>
            <p className="">Fun and engaging online group classes designed and led by expert teachers.</p>
            <Button btntext="View all classes"></Button>
          </div>
          
          {/* Practice for Free */}
          <div className="flex flex-col border border-secondary items-center p-6 rounded-lg shadow-lg text-center ">
            <img src="https://i.ibb.co.com/GTFTTJ5/pexels-olly-3756679.jpg" alt="Practice for Free" className="w-full rounded mb-4 object-contain"/>
            <h3 className="text-xl font-semibold ">Practice for Free</h3>
            <p className="">Meet and share experiences with millions of language learners from more than 190 countries.</p>
            <Button btntext="Explore the community"></Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
