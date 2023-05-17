import React from 'react'

import { FooterGallery } from './sections/footer-gallery'
import { Gallery } from './sections/gallery'
import { Hero } from './sections/hero'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <FooterGallery />
    </>
  )
}

export default HomePage
