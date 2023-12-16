import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import MarqueeOne from '../components/HomePageComponents/MarqueeOne'
const HomePage = ({isOpen}) => {
    return (
        <>
          <Hero/>
          <MarqueeOne/>
        </>
    )
}

export default HomePage