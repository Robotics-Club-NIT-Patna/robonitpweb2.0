import React from 'react'
import Marquee from 'react-marquee-slider'
import { ArrowBigRight } from 'lucide-react'
import AAP from '../../App.css'

const MarqueeTwo = () => {
  return (
    <>
      <div className='flex-col justify-center items-center m-10 bg-gray-900'>
        <div className='flex flex-col justify-center gap-4 p-20'>
          <div className='flex flex-row items-center gap-3 font-anton text-8xl text-white'>
            <div><h3>ROBOTICS</h3></div>
            <div className='flex-grow'>
              <div className='marquee_container bg-green-400  w-full h-20  rounded-3xl overflow-hidden'>
                <div className='w-full'>
                <Marquee direction=''>
                  <div className='text-6xl '>hbdb</div>
                  <div className=' text-6xl'>hbdb</div>
                </Marquee>
                </div>
              </div>
            </div>
            <div>CLUB</div>
          </div>
          <div className='flex flex-row items-center gap-3 font-anton text-8xl text-white w-full'>
            <div>IDEAS</div>
            <div>TO REALITY</div>
            <div className='relative flex-grow'>
              <div className='  h-20 w-full rounded-3xl bg-yellow-200 ' >
                <Marquee direction=''>

                  <div className='text-black top-2/4'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>
                  <div className='text-black top-2/4 ml-10'><ArrowBigRight /></div>

                </Marquee>

              </div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-3 font-anton text-8xl text-white'>
            <div
                style={{
                  WebkitTextStroke: '1px white',
                  color: 'black',
                  textStroke: '1px white'
                }}
            >SINCE</div>
            <div
              style={{
                WebkitTextStroke: '1px white',
                color: 'black',
                textStroke: '1px white'
              }}
            >2018</div>

            <div className='flex-grow'>
              <div className='bg-green-400 w-full h-20 relative rounded-3xl overflow-hidden'>
                <Marquee direction=''>
                  <div className='text-6xl '>hbdb</div>
                  <div className=' text-6xl'>hbdb</div>
                </Marquee>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarqueeTwo