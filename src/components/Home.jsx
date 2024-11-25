import React from 'react';
import Icons from './Icons';
import Resume from '../images/GW_Resume.pdf'

function Home() {
  return (
    // Added flexbox to center content vertically and horizontally
    <div id='home' className="flex flex-col items-center"> {/* Highlighted */}
      <h1 className="text-8xl mt-10 py-5 text-center font-bold sm:mt-20">
        <span className="text-red-700">Harshita Katariya</span>
        <br />
        Full Stack Developer
      </h1>
      <div className="w-full">
        <Icons />
      </div>
      {/* Updated the button's parent div for proper centering */}
      <div className="w-full flex justify-center mt-5"> {/* Highlighted */}
        <a
          href={Resume} // Replace with the correct path to your resume file
          download="Harshita_Katariya_Resume.pdf" // Added 'download' attribute for file download functionality
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
