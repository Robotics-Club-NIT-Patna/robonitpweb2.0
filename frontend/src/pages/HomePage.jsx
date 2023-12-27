import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import MarqueeOne from '../components/HomePageComponents/MarqueeOne'
import Roboexperience from '../components/HomePageComponents/RoboExperience'
import Experience from '../components/HomePageComponents/Experience'
const HomePage = ({isOpen}) => {
    return (
        <>
          <Hero/>
          <MarqueeOne/>
          <Roboexperience/>
          <Experience/>
        </>
    )
}

export default HomePage