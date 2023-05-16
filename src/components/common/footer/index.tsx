'use client'
import Link from 'next/link'

import { Container } from '~/components/layout/container'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <Container as="footer" className={s.footer}>
      <div className={s.lastPart}>
        <div className={s.social}>
          Social Media
          <p>
            <Link href="https://twitter.com/basementstudio">Twitter</Link> —{' '}
            <Link href="https://www.instagram.com/basementdotstudio/">
              Instagram
            </Link>{' '}
            — <Link href="https://github.com/basementstudio">Github</Link> —{' '}
            <Link href="https://www.twitch.tv/basementdotstudio">Twitch</Link>
          </p>
        </div>
        <p className={s.email}>
          <span>Get in touch</span>
          <Link target="_self" href="mailto:hello@basement.studio">
            hello@basement.studio
          </Link>
        </p>
        <p className={s.rights}>
          © basement.studio LLC {new Date().getFullYear()}
          <br />
          all rights reserved
        </p>
      </div>
    </Container>
  )
}
