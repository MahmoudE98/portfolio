"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {

  const href="/";
  const handleButtonClick = () => {
    if (href) {
      window.location.href = href; // Navigate to the href link
    }
  };
  return (
    <div className='pt-36 pb-20'>
        <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="yellow"
        />
         <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="orange"
        />
        <Spotlight className="left-40 -top-4 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-[length:100px_100px]
      bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center
        justify-center dark:bg-black-100 bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className='flex justify-center relative md:my-20 my-10 z-10 items-center'>
        <div className='flex-col justify-center items-center max-w-[89vw] md:max-w-[85vw] lg:max-w-[80vw] text-center pt-10 lg:pt-0 '>
          <h2 className='uppercase tracking-widest text-xl 
           text-blue-100  mb-4 '>
            Hi, I'm Mahmoud Esmail
          </h2>
          <TextGenerateEffect className="text-4xl md:text-5xl lg:text-6xl " words=" Aspiring Software Developer & Tech Enthusiast" duration={.75} filter={true}/>
          <h2 className=' tracking-wide text-lg 
           text-blue-100  mt-4 '>
            Computer Science Student in New York
          </h2>
          <MagicButton title="Check out my Work" className="mt-4 rounded-2xl " icon={<FaLocationArrow/>} position="right" href={href} handleClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  )
}

export default Hero