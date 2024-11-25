import React from 'react'
import Logo from './logo'
import Navbar from './Navbar'

function Header() {
  return (
    
    <header className='bg-transparent top-0 z-[20] mx-auto flex w-full items-center justify-between border-b-4 p-5 border-white-500 flex-wrap'>
      <Logo />
      <Navbar />
        
    </header> 
  )
}

export default Header
