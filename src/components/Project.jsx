import React from 'react';
import Cards from './Cards';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <AnimatedSection 
      id="project"
      className="py-12"
      delay={0.1}
    >  
      {/* Header Section */}
      <motion.div 
        className="w-full flex justify-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold relative">
          <span className="relative z-10">Projects</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-red-700"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.span>
        </h1>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full justify-evenly px-5">
        <Cards />
      </div>
    </AnimatedSection>
  );
};

export default Project;