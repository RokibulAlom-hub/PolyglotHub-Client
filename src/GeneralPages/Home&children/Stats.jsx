import React from 'react';
import { FaChalkboardTeacher, FaStar, FaLanguage, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
      <div className="w-full border border-orange-50 rounded max-w-6xl py-8 px-4">
        <h2 className="text-3xl font-bold  text-blue-600 dark:text-pink-400 text-center mb-6">Our Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Experienced Tutors */}
          <motion.div 
            className="p-6 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md text-center border border-indigo-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-2" />
            <h3 className="text-2xl dark:text-gray-100 font-bold text-indigo-600">50,000+</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100">Experienced Tutors</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Our tutors come from diverse backgrounds and are experts in their respective languages.</p>
          </motion.div>

          {/* 5-Star Reviews */}
          <motion.div 
            className="p-6 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md text-center border border-indigo-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <FaStar className="text-4xl text-indigo-600 mb-2" />
            <h3 className="text-2xl dark:text-gray-100 font-bold text-indigo-600">300,000+</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100">5-Star Reviews</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Our platform has received thousands of positive reviews from satisfied learners.</p>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="p-6 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md text-center border border-indigo-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
          >
            <FaLanguage className="text-4xl text-indigo-600 mb-2" />
            <h3 className="text-2xl dark:text-gray-100 font-bold text-indigo-600">120+</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100">Languages</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">We offer tutoring in over 120 languages, from widely spoken to less commonly taught.</p>
          </motion.div>

          {/* Users */}
          <motion.div 
            className="p-6 bg-white dark:bg-gray-700 dark:text-gray-100 rounded-lg shadow-md text-center border border-indigo-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          >
            <FaUsers className="text-4xl text-indigo-600 mb-2" />
            <h3 className="text-2xl dark:text-gray-100 font-bold text-indigo-600">1,000,000+</h3>
            <p className="text-lg text-gray-700 dark:text-gray-100">Users</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Join a global community of learners and make meaningful connections across the world.</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Stats;
