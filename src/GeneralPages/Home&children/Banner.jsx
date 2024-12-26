import React from 'react';
import bgimag from '../../assets/10251767.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="bg-orange-400 dark:bg-gray-700 dark:text-gray-100">
      <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto md:min-h-screen px-4">
        <motion.div
          className="text-left py-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            Learn faster with your best language tutor
          </motion.h1>
          <Link
            to="/login"
            className="bg-pink-400 rounded text-base-100 font-bold p-4"
          >
            Get Started
          </Link>
        </motion.div>
        <motion.div
          className=""
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bgimag} className="rounded-lg shadow-lg" alt="Banner" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
