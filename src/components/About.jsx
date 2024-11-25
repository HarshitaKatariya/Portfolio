
import React from 'react';
import HK from '../images/HK3.jpg';

const About = () => {
  return (
    <div id="about" className="p-5 bg-navyblue text-gray-200">
      {/* Section Title */}
      <div className="w-full flex justify-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold underline underline-offset-8 decoration-red-700">
          About Me
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:p-20 gap-8 lg:gap-10 bg-navyblue rounded-xl shadow-lg">
        {/* Profile Image */}
        <div className="relative w-40 pt-4 pb-4 sm:w-60 lg:w-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-2">
          <img
            src={HK}
            alt="HK"
            className="w-full h-auto rounded-full shadow-2xl filter grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* About Me Text */}
        <div className="max-w-3xl text-center lg:text-left p-4">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            Hi, I'm <span className="font-bold text-red-500">Harshita Katariya</span>, a passionate 
            <span className="font-bold text-red-500"> Full-Stack Developer</span> with 2 years of experience 
            building dynamic, user-centric web applications. My journey in development has been fueled 
            by a love for creating seamless digital experiences that combine modern design with reliable 
            functionality.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            I specialize in:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg mb-6 space-y-2">
            <li>
              <span className="font-semibold">Frontend Technologies:</span> JavaScript (ES6+), TypeScript, React.js, HTML5, CSS3, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold">Backend Technologies:</span> Node.js, Express.js, MongoDB, REST APIs
            </li>
            <li>
              <span className="font-semibold">Version Control & Tools:</span> Git, GitHub, VS Code, Postman
            </li>
            <li>
              <span className="font-semibold">Others:</span> Recoil, Redux, Axios, Zod, and basic DevOps practices
            </li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            With a focus on clean, efficient, and scalable code, I enjoy working across the stack, from designing 
            intuitive interfaces to developing secure backend architectures. I'm also passionate about learning and 
            integrating the latest technologies to deliver innovative solutions.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Outside of coding, I actively contribute to open-source projects and love brainstorming ideas for exciting 
            projects. I aim to continuously enhance my skills and make a meaningful impact in the tech world. Let’s 
            connect and bring ideas to life together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
  