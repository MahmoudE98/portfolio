import { cn } from '@/lib/utils';
import React from 'react'

export const ProjectCardSlider = ({
    children,
    className
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        
        <div className={className}>
            {children}
        </div>
    );
}

export const ProjectCard = ({
    className,
    id,
    title,
    titleClassName,
    img,
    imgClassName,
    description,
    spareImg,
}: {
    className?: string;
    id?: number;
    title?: string | React.ReactNode;
    titleClassName?: string;
    img?: string;
    imgClassName?: string;
    description?: string | React.ReactNode
    spareImg?: string;

}) => {
  return (
    <div className={cn(
        "relative overflow-hidden rounded-3xl mt-10 justify-between flex flex-col lg:flex-row", className
    )}
    style={{background: "radial-gradient(circle, rgba(30,140,168,1) 0%, rgba(24,42,171,1) 100%)"}}>
        <div className="flex flex-col lg:w-1/2 gap-10">
            <div className={cn("flex flex-col", titleClassName)}>
                <div className='sm:text-2xl mt-4 text-xl font-bold'>
                    {title}
                </div>
                <div>
                    {description}
                </div>
            </div>
            {spareImg && (
                <div className='relative flex justify-center items-center overflow-hidden'>
                    <img
                        className="object-center border rounded-3xl hidden lg:block border-transparent"
                        alt={spareImg}
                        src={spareImg} 
                        width={300}
                        height={200}
                    />
                </div>
            )}
        </div>

        {/* Right side with main image */}
        <div className="lg:w-1/2 flex justify-center items-center overflow-hidden relative">
            {img && (
                <img
                    className={cn("object-contain rounded-3xl min-w-[90%] ", imgClassName)}
                    alt={img}
                    src={img}
                />
            )}
        </div>
    </div>
  );
}

