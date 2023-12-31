import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import MarqueeOne from '../components/HomePageComponents/MarqueeOne'
import Roboexperience from '../components/HomePageComponents/RoboExperience'
import Experience from '../components/HomePageComponents/Experience'
import Carousel from '../components/HomePageComponents/Carousel'
const HomePage = ({isOpen}) => {
    return (
        <>
          <Hero/>
          <MarqueeOne/>
          <Roboexperience/>
          <Experience/>
          <Carousel/>

        </>
    )
}

export default HomePage