import React from 'react'
import Marquee from 'react-fast-marquee'
import RCCard from './UECard'
import RCData from './UEData'
import { useEffect, useState } from 'react'

const RecentCarousel = () => {
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div className='mt-10'>
                <div className='flex flex-col  sm:flex-row gap-6 mb-20 h-[40vh]' style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1)),url("/images/arduino.jpg")', backgroundSize:'cover'}}>
                    <div className='font-anton text-8xl text-white'>UPCOMING</div>
                    <div className='font-anton text-8xl'
                        style={{
                            WebkitTextStroke: '2px black',
                            color: 'transparent',
                            textStroke: '2px black'
                        }}
                    >EVENTS</div>
                </div>

                <div className=''>
                    <Marquee pauseOnHover>
                        <div className={`flex ${isLoaded ? 'blur-0' : 'blur-md'}`}>
                            {RCData.map((item) => (
                                <RCCard key={item.id} image={item.image} />
                            ))}
                        </div>

                    </Marquee>

                </div>
            </div>
        </>
    )
}

export default RecentCarousel