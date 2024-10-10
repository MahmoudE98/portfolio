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
    description
}: {
    className?: string;
    id?: number;
    title?: string | React.ReactNode;
    titleClassName?: string;
    img?: string;
    imgClassName?: string;
    description?: string | React.ReactNode

}) => {
  return (
    <div className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ", className
    )}
    style={{background: "radial-gradient(circle, rgba(30,140,168,1) 0%, rgba(24,42,171,1) 100%)"}}>
        <div className=''>
            <div>

            </div>
        </div>
    </div>
  );
}

