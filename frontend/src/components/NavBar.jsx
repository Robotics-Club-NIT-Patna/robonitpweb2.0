import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
   <div className=' flex gap-24 p-5'>
         <Link to="/"><div className='p-2 items-center cursor-pointer '>ROBOTICS</div></Link>
         <div className='flex gap-4 ml-auto '>
              <Link to='/about'>
                    <div  className=' hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>About</div> 
              </Link>
              <Link to="/teams">
                    <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2  items-center'>Teams</div> 
              </Link>
              <Link to="/gallery">
                    <div className='hover:bg-white hover:text-black rounded-md cursor-pointer p-2  items-center'>Gallery</div> 
              </Link>
              <Link to="/stories">
                    <div className='hover:bg-white hover:text-black rounded-md cursor-pointer  p-2  items-center'>Stories</div> 
              </Link>
              <Link to="/experiences">
                    <div className='hover:bg-white hover:text-black rounded-md  cursor-pointer p-2 items-center'>Experiences</div> 
              </Link>
              <Link to="/getstarted">
                     <div className='p-2 justify-center items-center bg-white rounded-md text-black cursor-pointer'>Get Started</div>
             </Link>
         </div>
         
   </div>
   </>
  )
}

export default NavBar;