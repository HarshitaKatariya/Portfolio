import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavLinks() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { to: "#home", id: "home", label: "Home" },
    { to: "#projects", id: "project", label: "Projects" },
    { to: "#skill", id: "skill", label: "Skills" },
    { to: "#about", id: "about", label: "About" },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <NavLink 
            to={item.to}
            onClick={(e) => handleScroll(e, item.id)}
            className="hover:text-red-500 transition-colors relative group"
          >
            {item.label}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
            />
          </NavLink>
        </motion.div>
      ))}
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav 
        className='w-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className='hidden md:flex justify-between items-center'>
          <NavLinks />
        </div>
        <motion.div 
          className='md:hidden flex justify-end items-center'
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={toggleNavbar}
            className="text-white p-2 rounded-full hover:bg-red-700/20 transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </motion.div>
      </motion.nav>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className='flex flex-col w-full justify-center items-center py-10 space-y-4 basis-full bg-gray-900/90 backdrop-blur-md rounded-lg mt-2'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;