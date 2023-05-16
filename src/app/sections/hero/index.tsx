import clsx from 'clsx'
import React from 'react'
import Marquee from 'react-fast-marquee'

import { Container } from '~/components/layout/container'

import s from './hero.module.scss'

export const Hero = () => {
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
