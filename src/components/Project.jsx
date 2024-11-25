import React from 'react';
import Cards from './Cards';

const Project = () => {
  return (
    <div id='project'>
      {/* Header Section */}
      <div className="w-full flex justify-center p-5 m-5">
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-red-700">
          Projects
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="w-full justify-evenly px-5">
        <Cards />
      </div>
    </div>
  );
};

export default Project;
