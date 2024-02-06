import React from 'react'
import ImageSlider from '../components/GalleryPageComponents/ImageSlider'
import StickyImage from '../components/GalleryPageComponents/StickyImage'
import CardMarquee from '../components/HomePageComponents/CardMarquee'

const GalleryPage = () => {
  return (
    <>
      <div className='mt-10'>
        <CardMarquee />
      </div>

      <StickyImage />
      <ImageSlider />
    </>
  )
}

export default GalleryPage