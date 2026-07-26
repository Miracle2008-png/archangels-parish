import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://archangelscatholicchurch.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/mass-times`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/sacraments`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/sacraments/baptism`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/sacraments/first-communion`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/sacraments/confirmation`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/sacraments/marriage`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/sacraments/rcia`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/sacraments/funeral`, priority: 0.7, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/ministries`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/cyon`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/cmo`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/cwo`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/legion-of-mary`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/choir`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/altar-servers`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/catechism`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/charismatic-renewal`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/ministries/st-vincent-de-paul`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/news`, priority: 0.8, changeFrequency: 'daily' as const },
    { url: `${BASE_URL}/events`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/gallery`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
