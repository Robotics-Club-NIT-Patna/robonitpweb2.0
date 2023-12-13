import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='flex'>
              <div className=''>
                   <div className='relative h-64 w-7/12 overflow-hidden flex justify-center items-center '>
                         <img className='h-70 -z-20' src='https://i.pinimg.com/originals/3b/aa/c0/3baac05f19c1d4f2f3ba69a534cb629c.gif' alt=''/>
                         <div className='h-70 p-6 absolute -z-20 flex-col justify-center items-center mix-blend-multiply bg-black '>
                              <h1 className='font-anton text-9xl '>ROBOTICS</h1>
                              <h1 className='font-anton text-9xl '>REDEFINED</h1>
                         </div>
                        
                   </div>
                   <div>
                         <h2>Our on-site merch customization experiences transform your event attendees into artists, creators, and product designers.</h2>
                   </div>
                   <div></div>
              </div>
              <div></div>
        </div>
    </>
  )
}

export default Hero