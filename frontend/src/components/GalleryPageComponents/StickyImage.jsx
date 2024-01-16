import React from 'react'

const StickyImage = () => {
  return (
    <>
    <div className='flex flex-row mt-20'>
        <div className='w-full'>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover sticky top-0 -z-50' ></div>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover sticky top-0 -z-40' ></div>
          <div className='min-h-screen flex just-center items-center bg-bg1  bg-black bg-no-repeat bg-cover  -z-20' ></div>
        </div>
    </div>    
    </>
  )
}

export default StickyImage