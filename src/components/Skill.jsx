import React from 'react';
import { motion } from 'framer-motion';
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
import AnimatedSection from './AnimatedSection';

const skills = [
  { icon: faReact, name: 'React', color: 'text-blue-500', level: 90 },
  { icon: faNodeJs, name: 'Node.js', color: 'text-green-500', level: 85 },
  { icon: faJs, name: 'JavaScript', color: 'text-yellow-500', level: 92 },
  { icon: faSass, name: 'Sass', color: 'text-pink-500', level: 75 },
  { icon: faDocker, name: 'Docker', color: 'text-blue-600', level: 70 },
  { icon: faAws, name: 'AWS', color: 'text-orange-500', level: 65 },
  { icon: faCss3Alt, name: 'Tailwind CSS', color: 'text-teal-500', level: 88 },
  { icon: faCode, name: 'TypeScript', color: 'text-blue-700', level: 80 },
  { icon: faDatabase, name: 'MongoDB', color: 'text-green-600', level: 85 },
  { icon: faServer, name: 'Express.js', color: 'text-gray-700', level: 82 },
  { icon: faGithub, name: 'Next.js', color: 'text-black', level: 78 },
];

const Skill = () => {
  // Animation variants for skills container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for skill items
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  return (
    <AnimatedSection 
      id="skill" 
      className="overflow-hidden w-full bg-transparent py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div 
        className="w-full flex justify-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold relative">
          <span className="relative z-10">Skills</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-red-700"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.span>
        </h1>
      </motion.div>

      {/* Skill Marquee and Progress Bars */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Animated Skills Section */}
        <motion.div
          className="mb-8 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="p-6 backdrop-blur-sm bg-gray-900/30 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Technical Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
                  variants={skillVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(255, 0, 0, 0.1), 0 4px 6px -2px rgba(255, 0, 0, 0.05)" 
                  }}
                >
                  <FontAwesomeIcon icon={skill.icon} className={`${skill.color} text-4xl mb-3`} />
                  <span className="text-white font-medium text-lg mb-2">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skill Levels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-6 backdrop-blur-sm bg-gray-900/30 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Proficiency Levels</h3>
          <div className="space-y-6">
            {skills.slice(0, 6).map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`${skill.color} font-medium`}>{skill.name}</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full bg-gradient-to-r from-red-700 to-${skill.color.split('-')[1]}-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Skill Tags Carousel */}
      <motion.div 
        className="mt-12 overflow-hidden relative py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex items-center space-x-8 animate-scroll whitespace-nowrap">
          {skills.concat(skills).map((skill, index) => ( 
            <motion.div
              key={index}
              className="border border-red-600 rounded-xl inline-flex items-center justify-center px-4 py-3 shadow-lg bg-gray-900/50"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 12px rgba(220, 38, 38, 0.6)"
              }}
            >
              <FontAwesomeIcon icon={skill.icon} className={`${skill.color} text-3xl mr-2`} />
              <span className="text-red-500 font-semibold text-xl">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Skill;