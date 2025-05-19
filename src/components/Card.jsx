import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  img,
  imgAlt,
  title,
  description,
  githubLink,
  liveLink,
  techStack,
  index
}) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.1,
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col justify-between border rounded-xl border-gray-700 shadow-lg overflow-hidden bg-gray-900/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500"
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={img} 
          alt={imgAlt}
          className="w-full h-52 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
        />
      </motion.div>

      <div className="p-6"> 
        <motion.h1 
          className="text-red-700 font-bold text-3xl mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <p className="text-base mb-6 text-gray-300">{description}</p>
      </div>

      <div className="border-t border-b border-gray-700 py-3 px-6 flex flex-wrap gap-2 bg-gray-900/50">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="text-white bg-gray-800 text-sm px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-between items-center p-6 bg-gray-900/30">
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Source Code
        </motion.a>
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Demo
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Card;