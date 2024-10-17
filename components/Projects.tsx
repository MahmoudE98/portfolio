"use client"
import { cn } from '@/lib/utils';
import React from 'react'
import { ProjectCard, ProjectCardSlider } from './ui/ProjectCard'
import { projectItems } from '@/data'
import { useState } from 'react'

const Projects = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const handleForward = () => {
    setCurrIndex((prev) => (prev + 1) % projectItems.length); // Loop forward
  };

  const handleBack = () => {
    setCurrIndex((prev) => (prev - 1 + projectItems.length) % projectItems.length); // Loop backward
  };
  return (
    <section id='projects' className='py-20 w-full relative flex justify-center items-center'>
      <div className='relative flex justify-center items-center'>
        <button className= "absolute h-[calc(100%-40px)] left-0 transform p-8 cursor-pointer hover:bg-black border border-transparent rounded-l-3xl overflow-hidden hover:bg-opacity-30 z-10 top-10 transition-colors duration-500 ease-in-out" onClick={handleBack}>
        <i className='relative border-solid border-t-0 border-r-8 border-b-8 border-l-0 inline-block p-3 hover:animate-squish transform rotate-[135deg] border-[#09e18c]'></i>
        </button>
        <button className="absolute h-[calc(100%-40px)] right-0 transform p-8 cursor-pointer hover:bg-black border border-transparent rounded-r-3xl overflow-hidden hover:bg-opacity-40 z-10 top-10 transition-colors duration-500 ease-in-out" onClick={handleForward}>
        <i className='relative border-solid border-t-0 border-r-8 border-b-8 border-l-0 inline-block p-3 hover:animate-squish transform -rotate-45 border-[#09e18c]'></i>
        </button>
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currIndex * 100}%)` }}
          >
             {projectItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <ProjectCard
                  id={item.id}
                  className={item.className}
                  title={item.title}
                  titleClassName={item.titleClassName}
                  img={item.img}
                  imgClassName={item.imgClassName}
                  description={item.description}
                  spareImg={item.spareImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Projects