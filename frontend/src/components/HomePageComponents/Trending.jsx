import React from 'react'
import TrendingCard from './TrendingCard'
const Trending = () => {
    return (
        <>
            <div className='m-10'>
                <div className='heading'>
                    <div className='font-anton text-6xl  sm:text-9xl text-white'>WHAT'S</div>
                    <div
                        className='font-anton text-6xl  sm:text-9xl'
                        style={{
                            WebkitTextStroke: '1px white',
                            color: 'black',
                            textStroke: '1px white'
                        }}
                    >
                        TRENDING
                    </div>
                </div>

                <div className='flex justify-center gap-10 mt-10'>
                    <TrendingCard />
                    <TrendingCard />
                    <TrendingCard />

                </div>

            </div>
        </>
    )
}

export default Trending