import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'albumTitle',
    group: 'Content',
    defaultColumns: ['albumTitle', 'date', 'featured'],
  },
  fields: [
    {
      name: 'albumTitle',
      type: 'text',
      required: true,
      label: 'Album Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Album Description',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMMM yyyy' },
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover Image',
      required: true,
    },
    {
      name: 'photos',
      type: 'array',
      label: 'Photos',
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'videos',
      type: 'array',
      label: 'Videos',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'YouTube', value: 'youtube' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Uploaded File', value: 'upload' },
          ],
        },
        { name: 'url', type: 'text', label: 'Video URL' },
        { name: 'thumbnail', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Mass & Liturgy', value: 'liturgy' },
        { label: 'Events', value: 'events' },
        { label: 'Parish Life', value: 'parish-life' },
        { label: 'Sacraments', value: 'sacraments' },
        { label: 'Ministries', value: 'ministries' },
        { label: 'Community Outreach', value: 'outreach' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Homepage',
      defaultValue: false,
    },
  ],
}
