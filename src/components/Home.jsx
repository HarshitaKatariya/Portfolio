
import React from 'react';
import Icons from './Icons';
import Resume from '../images/GW_Resume.pdf';

function Home() {
  return (
    // Added full-screen height and flexbox to center content vertically and horizontally
    <div 
      id="home" 
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative" // Highlighted
      //style={{ backgroundImage: `url{background}` }} // Add your background image
    >
      {/* Added overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* Highlighted */}
      
      {/* Adjusted text size and added z-index */}
      <h1 className="text-5xl sm:text-6xl text-center font-bold z-10 text-white sm:mt-20"> {/* Highlighted */}
        <span className="text-red-700 text-7xl">Harshita Katariya</span>
        <br />
        Full Stack Developer
      </h1>

      {/* Social Icons */}
      <div className="w-full z-10 mt-5">
        <Icons />
      </div>

      {/* Updated button styling and positioning */}
      <div className="w-full flex justify-center mt-5 z-10"> {/* Highlighted */}
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
