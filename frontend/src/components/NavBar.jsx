import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full bg-#020617 py-2 px-6 items-center text-white cursor-pointer'>
        <div>ROBOTICS</div>
        <div className='flex gap-5 '>
             <div className=' p-1 flex justify-center rounded-lg   hover:bg-white  hover:text-black '>About</div>
             <div className=' p-1 flex justify-center rounded-lg hover:bg-white  hover:text-black'>Events</div>
             <div className=' p-1 flex justify-center rounded-lg hover:bg-white  hover:text-black'>News</div>
             <div className=' p-1 flex justify-center rounded-lg hover:bg-white  hover:text-black'>Projects</div>
             <div className=' p-1 flex justify-center rounded-lg hover:bg-white  hover:text-black'>Team</div>
             <div className=' p-1 flex justify-center rounded-lg hover:bg-white  hover:text-black'>Team</div>

        </div>
        <div className='p-2 bg-white text-black rounded-lg'>Get Started</div>
    </div>
  )
}

export default NavBar;