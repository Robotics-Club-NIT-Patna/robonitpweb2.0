import React from 'react'
import Buttons from '../Buttons'
import '../../App.css'
const RoboDesign = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center mt-10 ml-5 mr-5 gap-10'>
                <div className='div1 flex flex-col  w-2/4 gap-5'>
                    <div className='font-anton text-5xl sm:text-6xl text-white'>
                        <h1>DESIGN</h1>
                        <h1>CREATE &</h1>
                        <h1>CONNECT.</h1>
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
                    <div>
                        <Buttons buttonText="See Software" />
                    </div>
                </div>

                <div className=' flex justify-center'>
                    <div className=' flex justify-center  items-center border border-white w-64 rounded-3xl overflow-hidden'>
                        <img src='./images/arduino.jpg' className='object-cover h-96' alt='' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default RoboDesign