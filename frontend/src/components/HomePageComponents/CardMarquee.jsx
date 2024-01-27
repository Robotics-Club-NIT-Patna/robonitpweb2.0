import React from 'react'
import { useRef, useEffect } from 'react';
import Marquee from "react-marquee-slider"
import { Unplug } from 'lucide-react';
const CardMarquee = () => {


    return (
        <>
            <div className='flex justify-center items-center mt-20 relative -z-10'>

                <div className='relative transform -rotate-12 z-10 overflow-hidden w-44 sm:w-2/6 h-60 sm:h-full'>
                    <img className='h-48 sm:h-96 object-cover' src='https://familyindustrieslive.com/wp-content/uploads/2023/03/Frame-21-04-2023-01-26-46.jpg' alt='' />
                    <div className=' flex items-center justify-center h-12 sm:h-20 absolute top-20 sm:top-40 w-full bg-yellow-200 ' >
                        <div className=' w-full'>
                            <Marquee direction=''>
                                
                                    <div className='text-black'><Unplug /></div>
                                    <div className='text-black ml-10'><Unplug /></div>
                                    <div className='text-black ml-10'><Unplug /></div>
                                
                            </Marquee>
                        </div>


                    </div>
                </div>


                <div className='relative transform rotate-12 w-44 sm:w-2/6 overflow-hidden h-60 sm:h-full'>
                    <img className='h-48 sm:h-96 object-cover' src='https://familyindustrieslive.com/wp-content/uploads/2023/03/Frame-21-04-2023-01-26-46.jpg' alt='' />
                    <div className=' flex justify-center items-center h-12 sm:h-20 absolute top-20 sm:top-40 w-full bg-green-400 text-black'>
                        <div className='w-full'>
                            <Marquee>
                                <div className='text-black'><Unplug /></div>
                                <div className='text-black ml-10'><Unplug /></div>
                                <div className='text-black ml-10'><Unplug /></div>
                            </Marquee>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CardMarquee