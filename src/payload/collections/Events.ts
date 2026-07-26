import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'startDate', 'location', '_status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description',
      admin: {
        description: 'Shown in event cards and listings.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Image',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Start Date & Time',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date & Time',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      defaultValue: 'Archangels Catholic Church, Satellite Town',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Mass & Liturgy', value: 'liturgy' },
        { label: 'Parish Meeting', value: 'meeting' },
        { label: 'Youth', value: 'youth' },
        { label: 'Outreach', value: 'outreach' },
        { label: 'Formation', value: 'formation' },
        { label: 'Fundraising', value: 'fundraising' },
        { label: 'Social', value: 'social' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'other',
    },
    {
      name: 'registrationRequired',
      type: 'checkbox',
      label: 'Registration Required',
      defaultValue: false,
    },
    {
      name: 'registrationLink',
      type: 'text',
      label: 'Registration Link or Contact',
      admin: {
        condition: (data) => Boolean(data?.registrationRequired),
      },
    },
    {
      name: 'organizer',
      type: 'text',
      label: 'Organized By',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on Homepage',
      defaultValue: false,
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
