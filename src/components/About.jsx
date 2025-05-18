
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
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:p-20 gap-8 lg:gap-10 bg-navyblue rounded-xl shadow-lg">
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
            Hi, I’m <span className="font-bold text-red-500">Harshita Katariya</span>, a passionate
            <span className="font-bold text-red-500"> Full-Stack Developer</span>
            building dynamic, user-centric web applications. I specialize in creating seamless, scalable, and
            high-performance digital solutions—blending intuitive UI design with robust backend logic.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-4">
            I thrive in fast-paced environments and love transforming ideas into meaningful tech products. Whether I’m
            designing sleek frontends, developing secure APIs, or deploying full-stack applications to the cloud, I enjoy
            working across the entire development lifecycle.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mb-4 font-semibold">💡 What I Bring to the Table</p>

          <ul className="list-disc list-inside text-base sm:text-lg mb-6 space-y-2">
            <li>
              <span className="font-semibold">Frontend:</span> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3,
              Tailwind CSS, Recoil, Redux, Axios, Zod
            </li>
            <li>
              <span className="font-semibold">Backend & Databases:</span> Node.js, Express.js, REST APIs, MongoDB, PostgreSQL,
              Authentication, Middleware, Scalable Architectures
            </li>
            <li>
              <span className="font-semibold">DevOps & Deployment:</span> Docker, Git, GitHub, GitHub Actions, AWS (EC2, S3,
              Lambda, RDS, DynamoDB), Vercel, Basic CI/CD & Infrastructure Management
            </li>
            <li>
              <span className="font-semibold">Developer Tools:</span> VS Code, Postman, Chrome DevTools
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mb-4 font-semibold">🧠 Beyond the Stack</p>

          <ul className="list-disc list-inside text-base sm:text-lg mb-6 space-y-2">
            <li>🛠️ Actively contributing to open-source projects like <span className="font-medium">p5.js, Music Blocks</span>, and <span className="font-medium">AOSSIE EduAid</span></li>
            <li>🌱 Continuously exploring new technologies in web development, cloud computing, and DevOps</li>
            <li>💬 Enjoy collaborating in communities, sharing ideas, and learning through real-world projects</li>
            <li>💡 Always excited to solve challenging problems and build meaningful tech products</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed">
            I'm driven by <span className="font-semibold">curiosity</span> and <span className="font-semibold">creativity</span>—on a mission to build software that’s not just functional but delightful to use.
            Let’s connect and <span className="font-bold">bring bold ideas to life together!</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
