import Image from 'next/image'
import React, { CSSProperties } from 'react'

import { Container } from '~/components/layout/container'

import s from './gallery.module.scss'

export interface GalleryImage {
  url: string
  stlye: CSSProperties
}

export const Gallery = () => {
  const images: GalleryImage[] = [
    {
      url: '/images/basement-team-1.jpg',
      stlye: {
        gridArea: '1 / 1 / 1 / 13'
      }
    },
    {
      url: '/images/basement-team-2.jpg',
      stlye: {
        gridArea: '2/ 1 / 2 / 9'
      }
    },
    {
      url: '/images/basement-team-3.jpg',
      stlye: {
        gridArea: '2/ 9 / 2 / 13'
      }
    }
  ]
  return (
    <Container className={s.container}>
      {images.map((image, index) => (
        <div key={index} className={s.imageContainer} style={image.stlye}>
          <Image src={image.url} className={s.image} alt="basement-team" fill />
        </div>
      ))}
    </Container>
  )
}
