import React from 'react'
import { useEffect } from 'react'
import Buttons from '../Buttons'
import Aos from 'aos'
import 'aos/dist/aos.css'

const PelletsGame = ({ buttonText }) => {

  useEffect(()=>{
    Aos.init({duration: 1000})
},[])

  return (
    <>
      <div data-aos='fade-up' className='flex flex-col sm:flex-row justify-center mt-20 ml-5 mr-5 gap-10'>
        <div className='div1 flex flex-col w-2/4 gap-5'>
          <div className='font-anton text-5xl sm:text-6xl text-white'>
            <h1>CUSTOMIZATION</h1>
            <h1>EXPERIENCES</h1>
          </div>
          <div className='w-96'>
            <p>
              Discover the magic of our custom design app,
              the powerhouse behind the on-site
              customization adventure. Dive into a
              PERSONAL touch, an IMMERSIVE journey, and
              forge a lasting CONNECTION between your
              brand and your audience.
            </p>
          </div>
          <div className=''>
            <Buttons buttonText="Learn More" />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className=' flex justify-center  items-center border border-white w-64 rounded-3xl overflow-hidden'>
            <h1>pelletgame</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default PelletsGame