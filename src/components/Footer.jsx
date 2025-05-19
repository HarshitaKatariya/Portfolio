import React from 'react';
import Icons from './Icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Logo and Icons Section */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo Section */}
          <motion.div 
            className="flex items-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-5xl sm:text-6xl font-semibold text-red-600 mr-2"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              @H
            </motion.p>
            <motion.p 
              className="text-5xl sm:text-6xl font-semibold text-white"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              K
            </motion.p>
          </motion.div>

          {/* Icons Section */}
          <motion.div 
            className="flex space-x-6 mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Icons />
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p>&copy; {new Date().getFullYear()} Harshita Katariya. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;