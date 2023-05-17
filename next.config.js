/**
 * @type {import('next').NextConfig}
 */
const NextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {}
}

module.exports = NextConfig
