import Image from 'next/image'
import React, { CSSProperties } from 'react'

import { Container } from '~/components/layout/container'

import s from './gallery.module.scss'

export interface GalleryImage {
  url: string
  style: CSSProperties
}

export const Gallery = () => {
  const images: GalleryImage[] = [
    {
      url: '/images/basement-team-1.jpg',
      style: {
        gridArea: '1 / 1 / 1 / 13'
      }
    },
    {
      url: '/images/basement-team-2.jpg',
      style: {
        gridArea: '2 / 1 / 3 / 9'
      }
    },
    {
      url: '/images/basement-team-3.jpg',
      style: {
        gridArea: '2 / 9 / 3 / 13'
      }
    }
  ]
  return (
    <Container as="section" className={s.container}>
      {images.map((image, index) => (
        <div key={index} className={s.imageContainer} style={image.style}>
          <Image
            alt="basement-team"
            fill
            priority
            quality={100}
            src={image.url}
          />
        </div>
      ))}
    </Container>
  )
}
