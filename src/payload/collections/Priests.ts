import type { CollectionConfig } from 'payload'

export const Priests: CollectionConfig = {
  slug: 'priests',
  admin: {
    useAsTitle: 'name',
    group: 'Parish Info',
    defaultColumns: ['name', 'title', 'role'],
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Full Name' },
    {
      name: 'title',
      type: 'select',
      required: true,
      options: [
        { label: 'Parish Priest', value: 'Parish Priest' },
        { label: 'Assistant Priest', value: 'Assistant Priest' },
        { label: 'Deacon', value: 'Deacon' },
        { label: 'Seminarian', value: 'Seminarian' },
      ],
    },
    { name: 'photo', type: 'upload', relationTo: 'media', label: 'Photo' },
    {
      name: 'shortBio',
      type: 'textarea',
      label: 'Short Bio',
      admin: { description: '2–3 sentences. Shown on the About page.' },
    },
    { name: 'fullBio', type: 'richText', label: 'Full Biography' },
    { name: 'email', type: 'email', label: 'Email Address' },
    { name: 'phone', type: 'text', label: 'Phone' },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: { description: '1 = Parish Priest (appears first)' },
    },
    { name: 'welcomeMessage', type: 'richText', label: 'Welcome Message (for homepage)' },
  ],
}
