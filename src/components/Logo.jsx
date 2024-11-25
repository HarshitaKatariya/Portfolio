import React from 'react';
import logo from '../images/logo2.png'

function Logo() {
  return (
    <div className='logo h-20 w-20   text-slate-100 flex ' >
      <img src={logo} alt="Logo" /> {/* Use the imported logo variable */}
      <p className='justify-center pt-5 text-red-700 text-3xl'>@H</p>
      <p className='justify-center pt-5 text-white text-3xl'>K</p>  
    </div>
  );
}

export default Logo;
