import React from 'react'
import Buttons from '../Buttons'

const PelletsGame = ({buttonText}) => {
  return (
    <>
        <div className='flex justify-center mt-20 ml-5 mr-5 gap-10'>
                <div className='div1 flex flex-col w-2/4 gap-5'>
                    <div className='font-anton text-6xl text-white'>
                        <h1>CUSTOMIZATION</h1>
                        <h1>EXPERIENCES</h1>
                    </div>
                    <div>
                        <p>
                           Discover the magic of our custom design app, 
                           the powerhouse behind the on-site 
                           customization adventure. Dive into a 
                           PERSONAL touch, an IMMERSIVE journey, and 
                           forge a lasting CONNECTION between your 
                           brand and your audience.
                        </p>
                    </div>
                    <div>
                         <Buttons buttonText="Learn More"/>
                    </div>  
                </div>

                <div className=' flex justify-center  items-center border border-white w-64 rounded-3xl overflow-hidden'>
                     <h1>pelletgame</h1>
                </div>

            </div>
    </>
  )
}

export default PelletsGame