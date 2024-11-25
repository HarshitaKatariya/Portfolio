import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faJs, 
  faSass, 
  faDocker, 
  faAws, 
  faCss3Alt, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faServer } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faReact, name: 'React', color: 'text-blue-500' },
  { icon: faNodeJs, name: 'Node.js', color: 'text-green-500' },
  { icon: faJs, name: 'JavaScript', color: 'text-yellow-500' },
  { icon: faSass, name: 'Sass', color: 'text-pink-500' },
  { icon: faDocker, name: 'Docker', color: 'text-blue-600' },
  { icon: faAws, name: 'AWS', color: 'text-orange-500' },
  { icon: faCss3Alt, name: 'Tailwind CSS', color: 'text-teal-500' },
  { icon: faCode, name: 'TypeScript', color: 'text-blue-700' },
  { icon: faDatabase, name: 'MongoDB', color: 'text-green-600' },
  { icon: faServer, name: 'Express.js', color: 'text-gray-700' },
  { icon: faGithub, name: 'Next.js', color: 'text-black' },
];

const Skill = () => {
  return (
    
    <div className="overflow-hidden w-full bg-transparent p-20" id='skill'>
        <div className='w-full justify-center flex p-5 m-5 underline underline-offset-8 decoration-red-700'>
            <h1>Skills</h1>
        </div>
      <div className="flex items-center space-x-5 m-5 animate-scroll">
        {skills.concat(skills).map((skill, index) => ( // Duplicate skills array for seamless scrolling
          <div
            key={index}
            className="border border-red-600 rounded-xl inline-flex items-center justify-center m-2 p-4 shadow-lg"
          >
            <FontAwesomeIcon icon={skill.icon} className={`${skill.color} text-4xl mr-2`} />
            <span className="text-red-500 font-semibold text-2xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
