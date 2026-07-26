import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'parishName',
      type: 'text',
      defaultValue: 'Archangels Catholic Church',
      required: true,
    },
    {
      name: 'diocese',
      type: 'text',
      defaultValue: 'Archdiocese of Lagos',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'A parish family rooted in faith, united in love.',
      admin: { description: 'Short tagline shown under the parish name in some contexts.' },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Parish Logo / Crest',
    },
    {
      name: 'announcementBanner',
      type: 'group',
      label: 'Top Announcement Banner',
      fields: [
        { name: 'enabled', type: 'checkbox', defaultValue: false },
        { name: 'message', type: 'text' },
        { name: 'link', type: 'text', label: 'Link (optional)' },
        { name: 'linkLabel', type: 'text', label: 'Link Label' },
      ],
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media',
      fields: [
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'youtube', type: 'text', label: 'YouTube URL' },
        { name: 'twitter', type: 'text', label: 'Twitter / X URL' },
      ],
    },
    {
      name: 'footerText',
      type: 'textarea',
      label: 'Footer About Text',
      defaultValue: 'Archangels Catholic Church is a vibrant parish in the Archdiocese of Lagos, serving the Satellite Town community.',
    },
    {
      name: 'googleMapsEmbedUrl',
      type: 'text',
      label: 'Google Maps Embed URL',
      admin: { description: 'Paste the full Google Maps embed URL for the Contact page.' },
    },
    {
      name: 'donationLink',
      type: 'text',
      label: 'Online Giving / Donation Link',
    },
  ],
}
