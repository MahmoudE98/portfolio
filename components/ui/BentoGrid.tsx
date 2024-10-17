"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import React, { useEffect, useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-7 md:grid-rows-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleArray= [],
  description,
  descriptionArray = [],
  id,
  img,
  imgArray = [],
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleArray?: string[] | React.ReactNode[];
  description?: string | React.ReactNode;
  descriptionArray?: string[] | React.ReactNode[];
  id?: number;
  img?: string;
  imgArray?: string[] | React.ReactNode[];
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [fadeState, setFadeState] = useState("fade-enter");
  const [currIndex, setCurrIndex] = useState(0);
  const leftLists = ["ReactJS", "JavaScript", "HTML", "CSS"];
  const rightLists = ["C++", "Java", "Python"];
  const handleClick = () => {
    setFadeState("fade-enter");
    setTimeout(() => {
      setCurrIndex((prev) => (prev + 1) % titleArray.length);
      setFadeState("fade-enter-active");
    }, 500);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText('mesmail9043@gmail.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "radial-gradient(circle, rgba(9,12,82,1) 0%, rgba(10,14,52,1) 100%)",
      }}
    >
      <div className={`${id === 4 && 'flex justify-center'}  h-full  `}>
        <div className= "absolute w-full h-full overflow-hidden">
        {img && (
            <img
            src={img}
            alt={img}
            className={cn(imgClassName,  `${id === 1 ? "md:pl-[400px] lg:px-0 lg:pt-64  object-contain " : "object-cover object-center"}`
            )}/>
          )}
        </div>
        {id === 4 && (
          <BackgroundGradientAnimation>
            <div className="flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>

        )}
        
        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col py-10 lg:px-10'
        )}>
           <div className={cn(`${id === 2 ? 'text-neutral-100' :  'text-[#C1C2D3]'}`, `${id === 1 ? 'lg-text-base' : 'lg:text-lg' }`, "font-sans font-normal text-sm md:text-base z-10")} >
           {id === 1 ? descriptionArray[currIndex] : description}
          </div>
          <div
            className={`${id=== 1 && 'flex flex-row gap-1'} font-sans text-xl md:text-2xl lg:text-3xl max-w-96 font-bold z-10 my-2 `}
          >
            
            <div>{id === 1 ? titleArray[currIndex] : title}</div>
            {id === 1 &&(
              <div className="pt-1" onClick={handleClick}>
                <BsArrowRight/>
              </div>
            )}
          </div>
        {id === 4 && (
            <div className="mt-3 ">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYmid slice'
                    }
                }}/>
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline/>}
                position="left"
                className="bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
        )}
       {id === 3 && (
        <div className="flex gap-4 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        {/* tech stack lists */}
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-4">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="md:py-4 md:px-3 py-2 px-3 text-xs md:text-sm lg:text-base opacity-50 rounded-xl 
              md:opacity-100 text-center bg-[rgb(25,29,89)]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:gap-5 lg:gap-4 ">
          <span className="md:py-5 md:px-3 py-4 px-3 rounded-xl text-center bg-[rgb(25,29,89)]"></span>
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="md:py-4 md:px-3 py-2 px-3 text-xs md:text-sm lg:text-base opacity-50 rounded-xl
              md:opacity-100 text-center bg-[rgb(25,29,89)]"
            >
              {item}
            </span>
          ))}
        </div>
        </div>
       )}
      </div>
      </div>
    </div>
  );
};
