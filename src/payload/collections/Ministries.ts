import type { CollectionConfig } from 'payload'

export const Ministries: CollectionConfig = {
  slug: 'ministries',
  admin: {
    useAsTitle: 'name',
    group: 'Parish Info',
    defaultColumns: ['name', 'category', 'leader'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'acronym',
      type: 'text',
      label: 'Acronym',
      admin: { description: 'e.g. "CYON", "CMO", "CWO"' },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Youth', value: 'youth' },
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Prayer', value: 'prayer' },
        { label: 'Music', value: 'music' },
        { label: 'Service', value: 'service' },
        { label: 'Formation', value: 'formation' },
        { label: 'Children', value: 'children' },
        { label: 'Charismatic', value: 'charismatic' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Short Description',
      admin: { description: 'Shown in ministry cards. Keep under 120 characters.' },
    },
    { name: 'fullDescription', type: 'richText', label: 'Full Description' },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Ministry Photo',
    },
    {
      name: 'leader',
      type: 'group',
      label: 'Ministry Leader',
      fields: [
        { name: 'name', type: 'text', label: 'Leader Name' },
        { name: 'title', type: 'text', label: 'Title', admin: { description: 'e.g. "President", "Coordinator"' } },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'email' },
        { name: 'photo', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'meetingSchedule',
      type: 'group',
      label: 'Meeting Schedule',
      fields: [
        { name: 'day', type: 'text', label: 'Meeting Day(s)', admin: { description: 'e.g. "Every 1st Sunday"' } },
        { name: 'time', type: 'text', label: 'Time' },
        { name: 'location', type: 'text', label: 'Location', defaultValue: 'Parish Hall' },
        { name: 'notes', type: 'text', label: 'Additional Notes' },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Ministry Gallery',
      fields: [
        { name: 'photo', type: 'upload', relationTo: 'media' },
        { name: 'caption', type: 'text' },
      ],
    },
    {
      name: 'joinInfo',
      type: 'group',
      label: 'How to Join',
      fields: [
        { name: 'openToAll', type: 'checkbox', label: 'Open to All Parishioners', defaultValue: true },
        { name: 'requirements', type: 'textarea', label: 'Requirements / Eligibility' },
        { name: 'contactForJoining', type: 'text', label: 'Contact to Join' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on Homepage',
      defaultValue: false,
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
