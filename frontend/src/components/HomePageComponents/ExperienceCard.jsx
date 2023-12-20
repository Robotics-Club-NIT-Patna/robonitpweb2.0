import React from 'react'
const ExperienceCard = ({title, imageUrl, rotation}) => {
  return (
    <div>
        <div className={`flex-col justify-center items-center w-80 h-96 ml-5  ${rotation}`}>
          <div className={`h-4/5 overflow-hidden flex justify-center items-center  ${rotation}`}>
               <img className='h-4/5 ' src={imageUrl} alt=""/>
          </div> 
          <div className={`flex justify-center transform ${rotation} text-6xl`}>
               <h3 className='-mt-16 font-anton'>{title}</h3>
          </div>
        </div>  
    </div>
  )
}

export default ExperienceCard