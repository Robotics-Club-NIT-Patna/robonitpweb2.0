import React from 'react'
import '../../App.css'
const CaseStudies = () => {
  return (
    <div className='mt-20 ml-2 mr-2'>

         <div className='ml-8 mr-8'>
              <h1 className='font-anton text-8xl'
                 style={{
                  WebkitTextStroke:'1px white',
                  color:'black',
                  textStroke:'1px white'
                 }}>
                     RECENT
              </h1>
              <h1 className='font-anton text-8xl text-white'>CASE STUDIES</h1>
         </div>

         <div className='images flex flex-col gap-10 mt-10 ml-5 mr-5 sm:flex-row sm:gap-4 '>
                <div className='flex justify-center items-center bg-slate-500      sm:h-96 sm:w-80 lg:w-96 overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='sm:h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>
                <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg'  alt=''/></div>

         </div>

      
         
    </div>
  )
}

export default CaseStudies