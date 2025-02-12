import React from 'react';
import { FaChalkboardTeacher, FaStar, FaLanguage, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Headers from '../../Components/Heading/Headers';

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="w-full rounded">
        <Headers headtext="The Proven Practial Method"></Headers>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-accent">
          
          {/* Experienced Tutors */}
          <motion.div 
            className="p-6 bg-white  rounded-lg shadow-md text-center border border-accent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaChalkboardTeacher className="text-4xl mb-2" />
            <h3 className="text-2xl  font-bold">50,000+</h3>
            <p className="text-lg font-semibold text-gray-700 ">Experienced Tutors</p>
            <p className="text-sm text-gray-500 ">Our tutors come from diverse backgrounds and are experts in their respective languages.</p>
          </motion.div>

          {/* 5-Star Reviews */}
          <motion.div 
            className="p-6 bg-white 0 rounded-lg shadow-md text-center border border-accent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <FaStar className="text-4xl mb-2" />
            <h3 className="text-2xl font-bold">300,000+</h3>
            <p className="text-lg font-semibold text-gray-700 ">5-Star Reviews</p>
            <p className="text-sm text-gray-500 ">Our platform has received thousands of positive reviews from satisfied learners.</p>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="p-6 bg-white  rounded-lg shadow-md text-center border border-accent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            <FaLanguage className="text-4xl mb-2" />
            <h3 className="text-2xl  font-bold">120+</h3>
            <p className="text-lg font-semibold text-gray-700 ">Languages</p>
            <p className="text-sm text-gray-500 ">We offer tutoring in over 120 languages, from widely spoken to less commonly taught.</p>
          </motion.div>

          {/* Users */}
          <motion.div 
            className="p-6 bg-white  rounded-lg shadow-md text-center border border-accent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            <FaUsers className="text-4xl mb-2" />
            <h3 className="text-2xl  font-bold">1,000,000+</h3>
            <p className="text-lg font-semibold text-gray-700 ">Users</p>
            <p className="text-sm text-gray-500">Join a global community of learners and make meaningful connections across the world.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
