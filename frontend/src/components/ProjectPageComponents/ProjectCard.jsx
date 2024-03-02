import React from 'react'

const ProjectCard = () => {
  return (
    <>
    <div className='flex flex-col'>

       <div className=' relative w-fit h-auto rounded-2xl overflow-hidden'>
        
          <img src="/images/arduino.jpg" alt="" />
        

          <button className='bg-gray-400 w-20 h-fit rounded-2xl shadow-[-2px_2px_0px_rgb(156,163,175),-3px_5px_0px_rgb(0,0,0)] absolute top-3 left-5 border-black border-2'>Click me!
          </button>
          <button className='bg-gray-400 w-20 h-fit rounded-2xl shadow-[-2px_2px_0px_rgb(156,163,175),-3px_5px_0px_rgb(0,0,0)] absolute bottom-5 right-1/4 border-black border-2'>Click me!!</button>
          <button className='bg-gray-400 w-20 h-fit rounded-2xl shadow-[-2px_2px_0px_rgb(156,163,175),-3px_5px_0px_rgb(0,0,0)]  absolute bottom-5 left-5  border-black border-2'>Click me!!</button>
          
       
      
       </div>
       

        <div className='font-extrabold'>COUNTRY THUNDER 2023</div>
        <div>Arizona</div>
       
    </div>
       
    </>
  )
}

export default ProjectCard
