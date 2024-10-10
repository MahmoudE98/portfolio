"use client";
import React from "react";
import { cn } from "@/lib/utils";
const MagicButton = ({
    title, icon, position, handleClick, otherClasses, className, href
}: {
    title:string; icon:React.ReactNode; position:string; handleClick?: () => void; otherClasses?:string; className?:string; href?:string;
}) => {
    const handleButtonClick = () => {
        if (handleClick) {
          handleClick();
        }
        if (href) {
          window.location.href = href; // Navigate to the href link
        }
      };
  return (
    
        // Button code
        <button 
        onClick={handleButtonClick}
        className={cn("inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2", className
        )}>
           {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </button>  
  )
}

export default MagicButton