import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://archangelscatholicchurch.org'
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
