import React from 'react'

import { Container } from '~/components/layout/container'

import s from './caps.module.scss'

export const FallingCaps = () => {
  return (
    <Container className={s.container}>
      <p className={s.paragraph}>
        <span>We want to help make</span> the internet{' '}
        <span className={s.highlight}>everything it can be.</span>
      </p>
    </Container>
  )
}
