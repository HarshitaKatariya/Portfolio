import React from 'react';
import Icons from './Icons';
import Resume from '../images/resume2025(HK).pdf';
import { motion } from 'framer-motion';

function Home() {
  return (
    // Added full-screen height and flexbox to center content vertically and horizontally
    <motion.div 
      id="home" 
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Added overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      
      {/* Main content wrapper */}
      <div className="z-10 flex flex-col items-center">
        {/* Animated text */}
        <motion.h1 
          className="text-5xl sm:text-6xl text-center font-bold z-10 text-white sm:mt-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span 
            className="text-red-700 text-7xl block mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            Harshita Katariya
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        {/* Social Icons */}
        <motion.div 
          className="w-full z-10 mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Icons />
        </motion.div>

        {/* Updated button styling and positioning */}
        <motion.div 
          className="w-full flex justify-center mt-10 z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href={Resume}
            download="Harshita_Katariya_Resume.pdf"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30"
          >
            <svg
              className="fill-current w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;