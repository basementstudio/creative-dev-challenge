import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { Container } from '~/components/layout/container'

import AWWWAR_IMAGE from '../../../../public/assets/awwwards-trophy.png'
import s from './hero.module.scss'

export const Hero = () => {
  return (
    <Container as="section" className={s.container}>
      <h1>
        Basement
        <span>LAB</span>
      </h1>
      <Marquee className={s.marquee} autoFill aria-label="Marquee section">
        <p>
          A man can't have enough basement swag — A man can't have enough
          basement swag
        </p>
      </Marquee>
      <div className={s.awwward}>
        <Image
          alt="Awwwards trophy"
          height={360}
          priority
          quality={100}
          placeholder="blur"
          src={AWWWAR_IMAGE}
          width={250}
        />
      </div>
    </Container>
  )
}
