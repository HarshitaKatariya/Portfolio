import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    
    <header className='bg-transparent top-0 z-[20] mx-auto flex w-full items-center justify-between border-b-4 p-5 border-white-500 flex-wrap'>
      <div className='logo h-20 w-20   text-slate-100 flex ' >
        <p className='justify-center pt-5 text-red-700 text-3xl'>@H</p>
        <p className='justify-center pt-5 text-white text-3xl'>K</p>  
      </div>

      <Navbar />
    </header> 
  )
}

export default Header
