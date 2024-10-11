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
        <div>
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
        "relative overflow-hidden rounded-3xl mt-10 justify-between flex flex-col md:flex-row ", className
    )}
    style={{background: "radial-gradient(circle, rgba(30,140,168,1) 0%, rgba(24,42,171,1) 100%)"}}>
        <div className="flex flex-col md:w-1/2">
            <div className={cn("flex flex-col pr-4", titleClassName)}>
                <div className='sm:text-2xl text-xl'>
                    {title}
                </div>
                <div>
                    {description}
                </div>
            </div>
            {spareImg && (
                <div className='relative flex justify-center items-center overflow-hidden '>
                    <img
                        className=" w-[50%] object-cover object-center border rounded-3xl hidden md:block"
                        alt={spareImg}
                        src={spareImg}
                    />
                </div>
            )}
        </div>

        {/* Right side with main image */}
        <div className="md:w-1/2 flex justify-center items-center overflow-hidden relative">
            {img && (
                <img
                    className={cn("object-center object-cover w-full h-full border-slate-950 border-2 rounded-3xl", imgClassName)}
                    alt={img}
                    src={img}
                />
            )}
        </div>
    </div>
  );
}

