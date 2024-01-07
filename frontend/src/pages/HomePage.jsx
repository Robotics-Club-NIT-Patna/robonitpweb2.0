import React from 'react'
import Hero from '../components/HomePageComponents/Hero'
import MarqueeOne from '../components/HomePageComponents/MarqueeOne'
import Roboexperience from '../components/HomePageComponents/RoboExperience'
import Experience from '../components/HomePageComponents/Experience'
import Carousel from '../components/HomePageComponents/Carousel'
import RoboDesign from '../components/HomePageComponents/RoboDesign'
import PelletsGame from '../components/HomePageComponents/PelletsGame'
import CaseStudies from '../components/HomePageComponents/CaseStudies'
import MarqueeTwo from '../components/HomePageComponents/MarqueeTwo'
import CardMarquee from '../components/HomePageComponents/CardMarquee'
const HomePage = ({isOpen}) => {
    return (
        <>
          <Hero/>
          <MarqueeOne/>
          <Roboexperience/>
          <Experience/>
          <Carousel/>
          <RoboDesign/>
          <PelletsGame/>
          <CaseStudies/>  
          <MarqueeTwo/>  
          <CardMarquee/>
        </>
    )
}

export default HomePage