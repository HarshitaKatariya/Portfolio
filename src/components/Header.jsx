import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header 
      className='bg-transparent fixed top-0 z-[20] mx-auto flex w-full items-center justify-between border-b-2 p-5 border-red-700/30 backdrop-blur-sm bg-gray-900/30 flex-wrap'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8 
      }}
    >
      <motion.div 
        className='logo h-20 w-20 text-slate-100 flex'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <motion.p 
          className='justify-center pt-5 text-red-700 text-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          @H
        </motion.p>
        <motion.p 
          className='justify-center pt-5 text-white text-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          K
        </motion.p>  
      </motion.div>

      <Navbar />
    </motion.header> 
  )
}

export default Header