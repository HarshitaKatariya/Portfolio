import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';



function NavLinks() {
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default link behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };
  return (
    <>
      <NavLink 
        to="#home"
        onClick={(e) => handleScroll(e,"home")}
        className="hover:text-blue-500 transition-colors">Home</NavLink>
      <NavLink 
        to="#projects"
        onClick={(e) => handleScroll(e,"project")} 
        className="hover:text-blue-500 transition-colors">Projects</NavLink>
      {/* <NavLink className="hover:text-blue-500 transition-colors" to="#skill ">Skills</NavLink> */}
      <NavLink
        to="#skill"
        onClick={(e) => handleScroll(e, "skill")}
        className="hover:text-blue-500 transition-colors"
      >Skills</NavLink>
      {/* <a href="#skill" className='hover:text-blue-500 transition-colors'>Skill</a> */}
      <NavLink 
      to="#about"
      onClick={(e) => handleScroll(e,"about")} 
      className="hover:text-blue-500 transition-colors" 
      >About</NavLink>
    </>
  );
}

function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
          <nav className='w-1/2 '>
      <div className='hidden md:flex justify-between items-center'>
        <NavLinks />
      </div>
      <div className='md:hidden flex justify-end items-center'>
        <button onClick={toggleNavbar}>
          {isOpen? <X /> : <Menu />}
        </button>
      </div>
    </nav>
    {isOpen && (
      <div className='flex flex-col w-full justify-center items-center py-10 basis-full'>
        <NavLinks />
      </div>
    )}
    </>
  );
}


export default Navbar;
