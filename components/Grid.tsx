import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            titleArray={item.titleArray}
            description={item.description}
            descriptionArray={item.descriptionArray}
            className={item.className}
            img={item.img}
            imgArray={item.imgArray}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}

          />
        ))}
      </BentoGrid>
      </section>
  )
}

export default Grid