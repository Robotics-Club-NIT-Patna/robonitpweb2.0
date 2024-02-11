import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'

const Project = () => {
    return (
        <>
            <div className='h-[80vh] flex items-center justify-center font-anton text-8xl text-white'>
                <div className='flex gap-6'>
                    <div>EXPLORE OUR </div>
                    <div
                        style={{
                            WebkitTextStroke: '1px white',
                            color: 'black',
                            textStroke: '1px white'
                        }}
                    >PROJECTS</div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-10'>
                {ProjectData.map((item)=>(
                    <ProjectCard />
                ))}
                
            </div>
        </>
    )
}

export default Project