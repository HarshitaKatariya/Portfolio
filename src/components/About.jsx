import React from 'react';
import HK from '../images/HK3.jpg';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <AnimatedSection 
      id="about" 
      className="p-5 py-16 bg-navyblue text-gray-200"
    >
      {/* Section Title */}
      <motion.div 
        className="w-full flex justify-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold relative">
          <span className="relative z-10">About Me</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-red-700"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="flex flex-col lg:flex-row items-center lg:items-center lg:p-20 gap-8 lg:gap-10 bg-navyblue rounded-xl shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Profile Image */}
        <motion.div 
          className="relative w-40 pt-4 pb-4 sm:w-60 lg:w-80 mx-auto lg:mx-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-2 animate-pulse-slow" />
          <motion.div 
            className="relative rounded-full p-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src={HK}
              alt="HK"
              className="w-full h-auto rounded-full shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* About Me Text */}
        <motion.div 
          className="max-w-3xl text-center lg:text-left p-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.p 
            className="text-base sm:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="font-bold text-red-500">Harshita Katariya</span>, a passionate
            <span className="font-bold text-red-500"> Full-Stack Developer</span>
            building dynamic, user-centric web applications. I specialize in creating seamless, scalable, and
            high-performance digital solutions—blending intuitive UI design with robust backend logic.
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I thrive in fast-paced environments and love transforming ideas into meaningful tech products. Whether I'm
            designing sleek frontends, developing secure APIs, or deploying full-stack applications to the cloud, I enjoy
            working across the entire development lifecycle.
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg leading-relaxed mb-4 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            💡 What I Bring to the Table
          </motion.p>

          <motion.ul 
            className="list-disc list-inside text-base sm:text-lg mb-6 space-y-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              <span key="1">
                <span className="font-semibold">Frontend:</span> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
                Tailwind CSS, Recoil, Redux, Axios, Zod
              </span>,
              <span key="2">
                <span className="font-semibold">Backend & Databases:</span> Node.js, Express.js, REST APIs, MongoDB, PostgreSQL,
                Authentication, Middleware, Scalable Architectures
              </span>,
              <span key="3">
                <span className="font-semibold">DevOps & Deployment:</span> Docker, Git, GitHub, GitHub Actions, AWS (EC2, S3,
                Lambda, RDS, DynamoDB), Vercel, Basic CI/CD & Infrastructure Management
              </span>,
              <span key="4">
                <span className="font-semibold">Developer Tools:</span> VS Code, Postman, Chrome DevTools
              </span>
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p 
            className="text-base sm:text-lg leading-relaxed mb-4 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            🧠 Beyond the Stack
          </motion.p>

          <motion.ul 
            className="list-disc list-inside text-base sm:text-lg mb-6 space-y-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              <span key="1">🛠️ Actively contributing to open-source projects like <span className="font-medium">p5.js, Music Blocks</span>, and <span className="font-medium">AOSSIE EduAid</span></span>,
              <span key="2">🌱 Continuously exploring new technologies in web development, cloud computing, and DevOps</span>,
              <span key="3">💬 Enjoy collaborating in communities, sharing ideas, and learning through real-world projects</span>,
              <span key="4">💡 Always excited to solve challenging problems and build meaningful tech products</span>
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 }
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p 
            className="text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I'm driven by <span className="font-semibold">curiosity</span> and <span className="font-semibold">creativity</span>—on a mission to build software that's not just functional but delightful to use.
            Let's connect and <span className="font-bold">bring bold ideas to life together!</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default About;