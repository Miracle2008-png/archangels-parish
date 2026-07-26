import type { CollectionConfig } from 'payload'

export const Sacraments: CollectionConfig = {
  slug: 'sacraments',
  admin: {
    useAsTitle: 'name',
    group: 'Parish Info',
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Sacrament Name' },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'icon',
      type: 'select',
      label: 'Icon (Lucide name)',
      options: [
        { label: 'Droplets (Baptism)', value: 'Droplets' },
        { label: 'Heart (First Communion)', value: 'Heart' },
        { label: 'Flame (Confirmation)', value: 'Flame' },
        { label: 'Rings (Marriage)', value: 'Rings' },
        { label: 'BookOpen (RCIA)', value: 'BookOpen' },
        { label: 'Cross (Funeral/Anointing)', value: 'Cross' },
      ],
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      label: 'Brief Summary',
      admin: { description: 'Shown in the sacraments overview grid. Keep under 150 characters.' },
    },
    { name: 'introduction', type: 'richText', label: 'Introduction / Description' },
    {
      name: 'requirements',
      type: 'array',
      label: 'Requirements / Documents Needed',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'process',
      type: 'array',
      label: 'Process Steps',
      fields: [
        { name: 'step', type: 'number', label: 'Step Number' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'contactPerson',
      type: 'group',
      label: 'Who to Contact',
      fields: [
        { name: 'name', type: 'text' },
        { name: 'role', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'email' },
      ],
    },
    {
      name: 'faq',
      type: 'array',
      label: 'Frequently Asked Questions',
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'richText', required: true },
      ],
    },
    {
      name: 'downloads',
      type: 'array',
      label: 'Downloadable Forms / Documents',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'file', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
