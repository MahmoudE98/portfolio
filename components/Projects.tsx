import React from 'react'
import { ProjectCard, ProjectCardSlider } from './ui/ProjectCard'
import { projectItems } from '@/data'

const Projects = () => {
  return (
    <section id='projects'>
        <ProjectCardSlider className='py-20 w-full'>
            {projectItems.map((item, i) => (
                <ProjectCard
                id={item.id}
                key={i}
                className={item.className}
                title={item.title}
                titleClassName={item.titleClassName}
                img={item.className}
                imgClassName={item.imgClassName}
                description={item.description}
                />
            ))}
        </ProjectCardSlider>
    </section>
  )
}

export default Projects