import type { CollectionConfig } from 'payload'

export const Downloads: CollectionConfig = {
  slug: 'downloads',
  admin: {
    useAsTitle: 'label',
    group: 'Content',
    defaultColumns: ['label', 'category', 'createdAt'],
  },
  fields: [
    { name: 'label', type: 'text', required: true, label: 'File Name / Label' },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Mass Timetable', value: 'timetable' },
        { label: 'Weekly Bulletin', value: 'bulletin' },
        { label: 'Sacrament Form', value: 'form' },
        { label: 'Pastoral Letter', value: 'letter' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'other',
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'published',
      type: 'date',
      label: 'Published Date',
    },
    {
      name: 'visible',
      type: 'checkbox',
      label: 'Visible on Website',
      defaultValue: true,
    },
  ],
}
