import React from 'react'
import Card from './Card'
import todo from '../images/todo.png'
import blog from '../images/blog.png'
import paytm from '../images/paytm1.png'

const Cards = () => {
  const cards = [
    {
        img:todo,
        imgAlt:'Todo-image',
        title:'Task Management App',
        description:'Task Manager helps manage your daily tasks. Built with React, Tailwind CSS, and local storage.',
        githubLink:'https://github.com/HarshitaKatariya/Todo_LocalStorage',
        liveLink:'https://todo-local-storage-weld.vercel.app/',
        techStack:['React','JavaScript','TailwindCss','LocalStorage']
      },
      {
        img:blog,
        imgAlt:'Blog-image',
        title:'Blog Application',
        description:'The Blog Application in which you can create blog posts and read other users blog',
        githubLink:'https://github.com/HarshitaKatariya/Blog_app',
        liveLink:'https://github.com/HarshitaKatariya/Blog_app',
        techStack:['React','JavaScript','TailwindCss','Mongoodb','Appwrite', 'Node.js','Express','Git']
      },
      {
        img:paytm,
        imgAlt:'paytm-image',
        title:'Payment Application',
        description:'The Payment Application in which you can create account and transfer money to others accounts.',
        githubLink:'https://github.com/HarshitaKatariya/PayTM',
        liveLink:'https://github.com/HarshitaKatariya/PayTM',
        techStack:['React','JavaScript','TailwindCss','Mongoodb', 'Node.js','Express','Git']
      },
  ];
  return (
    <div className=" w-full flex justify-center ">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">


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

    />
  ))}
</div>
</div>
    
  )
}

export default Cards

