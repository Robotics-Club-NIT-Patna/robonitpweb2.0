import React from 'react'
import '../../App.css'


const CaseStudies = () => {

  
  return (
    <div className='mt-20 ml-2 mr-2'>

      <div className='ml-8 mr-8'>
        <h1 className='font-anton text-8xl'
          style={{
            WebkitTextStroke: '1px white',
            color: 'black',
            textStroke: '1px white'
          }}>
          RECENT
        </h1>
        <h1 className='font-anton text-8xl text-white'>CASE STUDIES</h1>
      </div>

      {/* <div className='images flex flex-col gap-10 mt-10 ml-5 mr-5 sm:flex-row sm:gap-4'>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'>
          <img className='h-96 object-cover' src='./images/arduino.jpg' alt='' />
        </div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>
        <div className='sm:h-96 sm:w-80 lg:w-96  overflow-hidden rounded-2xl sm:hover:flex-shrink-0 sm:transition-all custom-long-duration cursor-pointer'><img className='h-96 object-cover' src='./images/arduino.jpg' alt='' /></div>



      </div> */}

      <div className='images flex flex-col items-center gap-10 mt-10 ml-5 mr-5 md:flex-row md:gap-4 '>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        <div className=' flex flex-col justify-center  items-center w-full sm:h-[30rem]  md:w-96  lg:w-96  overflow-hidden sm:hover:flex-shrink-0 transition-all custom-long-duration rounded-2xl group'>
          <div className='flex items-center justify-center w-full sm:h-[29rem] lg:w-[6rem] xl:w-[9rem]  overflow-hidden rounded-2xl  sm:transition-width ease-in-out custom-long-duration sm:group-hover:w-full'>
            <img className='sm:h-[30rem] w-full object-cover sm:group-hover:w-full transition-width custom-long-duration ease-in-out ' src='./images/arduino.jpg' alt='' />
          </div>
          <div className='flex justify-center  items-center gap-[14rem] sm:gap-80 md:gap-0 h-20 w-full  md:group-hover:w-full transition-width ease-in-out custom-long-duration'>
            <div className='text-white font-anton text-xl md:opacity-0  delay-500 transform md:group-hover:translate-x-[-240px]  group-hover:opacity-100 ease-in-out custom-long-duration'>EVENT</div>
            <div className='font-anton text-gray-500 md:opacity-0 group-hover:opacity-100 ease-in-out custom-long-duration group-hover:-mr-60'>event date</div>
          </div>
        </div>

        
        

        



      </div>


    </div>
  )
}

export default CaseStudies