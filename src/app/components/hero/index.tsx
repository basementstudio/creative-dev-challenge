import clsx from 'clsx'
import Image from 'next/image'
import React, { useRef } from 'react'
import Marquee from 'react-fast-marquee'

import { Container } from '~/components/layout/container'

import s from './hero.module.scss'

// [TODO] review semantic structure because h1 and h2 tags are tecnically both part of the h1.

export const Hero = () => {
  // Get the modal state from the global store

  return (
    <div className={s.wrapper}>
      <Container as="section" className={s.container}>
        <h1 id="h-line" className={clsx(s.text, s['hero-first-line'])}>
          Basement
          <span className={s.textSpan}>LAB</span>
        </h1>
      </Container>
      <Marquee className={s.marquee} autoFill aria-label="Marquee section">
        <p className={s.marqueeText}>
          A man can't have enough basement swag — A man can't have enough
          basement swag
        </p>
      </Marquee>
    </div>
  )
}
