const PARISH_NAME = 'Archangels Catholic Church'
const PARISH_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://archangelscatholicchurch.org'

export function organizationSchema() {
  return {
    '@type': 'Organization',
    name: PARISH_NAME,
    url: PARISH_URL,
    logo: `${PARISH_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-806-569-0094',
      contactType: 'customer service',
      email: 'archangels_sat@yahoo.com',
      availableLanguage: ['English'],
    },
  }
}

export function localBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    name: PARISH_NAME,
    url: PARISH_URL,
    telephone: '+234-806-569-0094',
    email: 'archangels_sat@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Mission Street',
      addressLocality: 'Satellite Town',
      addressRegion: 'Lagos',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.4281,
      longitude: 3.3958,
    },
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    name: PARISH_NAME,
    url: PARISH_URL,
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: PARISH_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${PARISH_URL}${item.href}`,
      })),
    ],
  }
}

export function eventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  url: string
}) {
  return {
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1 Mission Street',
        addressLocality: 'Satellite Town',
        addressRegion: 'Lagos',
        addressCountry: 'NG',
      },
    },
    organizer: { '@type': 'Organization', name: PARISH_NAME, url: PARISH_URL },
    url: `${PARISH_URL}${event.url}`,
  }
}

export function jsonLd(schema: object) {
  return {
    __html: JSON.stringify({ '@context': 'https://schema.org', ...schema }),
  }
}
