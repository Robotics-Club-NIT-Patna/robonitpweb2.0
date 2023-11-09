import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full bg-rose-600 py-2 px-6'>
      <Link to="/"><div>Logo</div></Link>
      <div className='flex gap-5'>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
      </div>
    </div>
  )
}

export default NavBar;