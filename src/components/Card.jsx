import React from 'react';

const Card = ({
  img,
  imgAlt,
  title,
  description,
  githubLink,
  liveLink,
  techStack,
}) => {
  return (
    <div className=" flex flex-col justify-between border rounded-xl border-gray-700 shadow-lg overflow-hidden">

      <img
        src={img} 
        alt={imgAlt}
        className="w-full h-52 object-cover rounded-t-xl"
      />
      <div className="p-4"> {/* Increased padding for better spacing */}
        <h1 className="text-red-700 font-bold text-3xl mb-2 ">{title}</h1>
        <p className="text-base mb-4 ">{description}</p>
      </div>
      <div className="border-t-2 border-b-2 py-2 px-4 flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="text-white bg-gray-800 text-sm px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between items-center p-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          View Source Code
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

export default Card;
