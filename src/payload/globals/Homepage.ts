import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Archangels Catholic Church' },
        { name: 'subheading', type: 'text', defaultValue: 'Satellite Town, Lagos · Archdiocese of Lagos' },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Hero Background Image' },
        {
          name: 'quickLinks',
          type: 'array',
          label: 'Hero Quick Links',
          maxRows: 4,
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'icon', type: 'text', label: 'Lucide Icon Name' },
          ],
          defaultValue: [
            { label: 'Mass Times', href: '/mass-times', icon: 'Clock' },
            { label: 'Confession', href: '/mass-times#confession', icon: 'Heart' },
            { label: 'Contact Us', href: '/contact', icon: 'Phone' },
            { label: 'Give Online', href: '#give', icon: 'HandHeart' },
          ],
        },
      ],
    },
    {
      name: 'welcomeSection',
      type: 'group',
      label: 'Welcome from Priest',
      fields: [
        { name: 'enabled', type: 'checkbox', defaultValue: true },
        { name: 'heading', type: 'text', defaultValue: 'Welcome to Our Parish' },
        { name: 'message', type: 'richText' },
        { name: 'priest', type: 'relationship', relationTo: 'priests', label: 'Priest (select for photo + name)' },
      ],
    },
    {
      name: 'featuredMinistriesHeading',
      type: 'text',
      defaultValue: 'Our Ministries',
      label: 'Featured Ministries Section Heading',
    },
    {
      name: 'dailyScripture',
      type: 'group',
      label: 'Daily Scripture Section',
      fields: [
        { name: 'enabled', type: 'checkbox', defaultValue: true },
        { name: 'manualVerse', type: 'textarea', label: 'Manual Scripture Verse (optional override)' },
        { name: 'manualReference', type: 'text', label: 'Reference', admin: { description: 'e.g. "John 3:16"' } },
      ],
    },
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Bottom Call to Action',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Join our parish family' },
        { name: 'body', type: 'textarea', defaultValue: 'Whether you are new to the area, returning to the faith, or simply looking for a spiritual home — you are welcome here.' },
        { name: 'primaryLabel', type: 'text', defaultValue: 'Contact the Parish' },
        { name: 'primaryHref', type: 'text', defaultValue: '/contact' },
        { name: 'secondaryLabel', type: 'text', defaultValue: 'Mass Times' },
        { name: 'secondaryHref', type: 'text', defaultValue: '/mass-times' },
      ],
    },
  ],
}
