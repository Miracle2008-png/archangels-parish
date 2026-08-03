import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // A stray package-lock.json in the user's home directory otherwise gets
  // picked as the workspace root, which makes Turbopack resolve globals.css
  // (and other files) against the wrong project entirely.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default withPayload(nextConfig)
