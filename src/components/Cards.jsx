import React from 'react';
import Card from './Card';
import todo from '../images/todo.png';
import blog from '../images/blog.png';
import paytm from '../images/paytm1.png';
import { motion } from 'framer-motion';

const Cards = () => {
  const cards = [
    {
      img: todo,
      imgAlt: 'Todo-image',
      title: 'Task Management App',
      description: 'Task Manager helps manage your daily tasks. Built with React, Tailwind CSS, and local storage.',
      githubLink: 'https://github.com/HarshitaKatariya/Todo_LocalStorage',
      liveLink: 'https://todo-local-storage-weld.vercel.app/',
      techStack: ['React', 'JavaScript', 'TailwindCss', 'LocalStorage']
    },
    {
      img: blog,
      imgAlt: 'Blog-image',
      title: 'Blog Application',
      description: 'The Blog Application in which you can create blog posts and read other users blog',
      githubLink: 'https://github.com/HarshitaKatariya/Blog_app',
      liveLink: 'https://github.com/HarshitaKatariya/Blog_app',
      techStack: ['React', 'JavaScript', 'TailwindCss', 'Mongoodb', 'Appwrite', 'Node.js', 'Express', 'Git']
    },
    {
      img: paytm,
      imgAlt: 'paytm-image',
      title: 'Payment Application',
      description: 'The Payment Application in which you can create account and transfer money to others accounts.',
      githubLink: 'https://github.com/HarshitaKatariya/PayTM',
      liveLink: 'https://github.com/HarshitaKatariya/PayTM',
      techStack: ['React', 'JavaScript', 'TailwindCss', 'Mongoodb', 'Node.js', 'Express', 'Git']
    },
  ];

  // Container and card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="w-full flex justify-center py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 w-full max-w-screen-xl justify-items-center">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            imgAlt={card.imgAlt}
            title={card.title}
            description={card.description}
            githubLink={card.githubLink}
            liveLink={card.liveLink}
            techStack={card.techStack}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;