import React, { useEffect } from 'react'
import Buttons from '../Buttons'
import '../../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const RoboDesign = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

    return (
        <>
            <div  className='flex flex-col md:flex-row sm:justify-center sm:items-center mt-10 ml-5 mr-5 gap-10 '>
                <div className='div1 flex flex-col w-full md:w-2/4 gap-5'>
                    <div data-aos='fade-up' className='font-anton text-5xl sm:text-7xl  md:text-8xl  text-white'>
                        <h1>DESIGN</h1>
                        <h1>CREATE &</h1>
                        <h1>CONNECT.</h1>
                    </div>
                    <div data-aos='fade-up' className='w-96'>
                        <p className='text-xl md:text-2xl'>
                            Discover the magic of our custom design app,
                            the powerhouse behind the on-site
                            customization adventure. Dive into a
                            PERSONAL touch, an IMMERSIVE journey, and
                            forge a lasting CONNECTION between your
                            brand and your audience.
                        </p>
                    </div>
                    <div data-aos='fade-up' className=' h-20 flex items-center ml-5'>
                        <Buttons buttonText="See Software" scale={'125'} />
                    </div>
                </div>

                <div data-aos='fade-up' className=' flex justify-center w-full md:w-auto'>
                    <div className=' flex justify-center  items-center border border-white md:w-64 rounded-3xl overflow-hidden'>
                        <img src='./images/arduino.jpg' className='object-cover h-96' alt='' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default RoboDesign