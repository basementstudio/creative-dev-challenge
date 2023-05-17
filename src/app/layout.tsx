import '~/css/global.scss'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Footer } from '~/components/common/footer'
import { Header } from '~/components/common/header'

import { AppHooks } from './app-hooks'

const basementGrotesque = localFont({
  src: '../fonts/BasementGrotesque-Black_v1.202.woff2',
  display: 'swap',
  variable: '--font-body'
})

const basementGrotesqueExpanded = localFont({
  src: '../fonts/BasementGrotesque-BlackExpanded.woff2',
  display: 'swap',
  variable: '--font-expanded'
})

const basementGrotesqueDisplay = localFont({
  src: '../fonts/BasementGrotesqueDisplay-UltraBlackExtraExpanded.otf',
  display: 'swap',
  variable: '--font-display'
})

const neueMontreal = localFont({
  src: '../fonts/PPNeueMontreal-Regular.woff2',
  display: 'swap',
  variable: '--font-text'
})

export const metadata: Metadata = {
  title: {
    default: 'next-typescript | basement.studio',
    template: '%s | basement.studio'
  },
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'next-typescript | basement.studio',
    creator: '@basementstudio',
    siteId: '@basementstudio'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        style={{ opacity: 0 }}
        className={clsx(
          basementGrotesque.variable,
          neueMontreal.variable,
          basementGrotesqueDisplay.variable,
          basementGrotesqueExpanded.variable
        )}
      >
        <Header />
        {children}
        <Footer />
        <AppHooks />
      </body>
    </html>
  )
}

export default RootLayout
