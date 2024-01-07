import React from 'react'
import Marquee from 'react-marquee-slider'

const CardMarquee = () => {

    return (
        <>
            <div className='flex justify-center items-center mt-20 relative'>

                <div className='relative transform -rotate-12 z-10'>
                    <img className='h-96' src='https://familyindustrieslive.com/wp-content/uploads/2023/03/Frame-21-04-2023-01-26-46.jpg' alt='' />
                    <div className='h-20 absolute top-1/2 w-full bg-yellow-200' >
                        <Marquee className=''>
                            <div className='text-black'>Design</div>
                            <div className='text-black'>Design</div>
                            <div className='text-black'>Design</div>
                        </Marquee>

                    </div>
                </div>


                <div className='relative transform rotate-12'>
                    <img className='h-96' src='https://familyindustrieslive.com/wp-content/uploads/2023/03/Frame-21-04-2023-01-26-46.jpg' alt='' />
                    <div className='h-20 absolute top-1/2 w-full bg-green-400 text-black'>design</div>
                </div>
            </div>

        </>
    )
}

export default CardMarquee