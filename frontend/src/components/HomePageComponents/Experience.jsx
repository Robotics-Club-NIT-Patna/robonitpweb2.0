import React from 'react'
import ExperienceCard from './ExperienceCard'
import cardData from '../../../src/cardData'

const Experience = () => {
    
  return(
      <>
         <div className='m-10'>
             <h1 className='text-9xl font-anton' 
                 style={{
                         WebkitTextStroke:'1px white',
                         color:'black',
                         textStroke:'1px white'
                 }}>THE</h1>
             <h1 className='text-9xl font-anton text-#fcffff'>EXPERIENCE</h1>
         </div>

         {/* ExperienceCard */}

         <div className='flex gap-10 mt-16 mb-10 overflow-x-scroll overflow-y-hidden '>
            {cardData.map((item)=>(
              <ExperienceCard key={item.id} title={item.title} rotation={item.rotation} imageUrl={item.imageUrl}/>
            ))}
              
         </div>
      </>
  )
}

export default Experience