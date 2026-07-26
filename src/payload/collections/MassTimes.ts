import type { CollectionConfig } from 'payload'

export const MassTimes: CollectionConfig = {
  slug: 'mass-times',
  admin: {
    useAsTitle: 'label',
    group: 'Parish Info',
    defaultColumns: ['label', 'type', 'day', 'time'],
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Label',
      admin: { description: 'e.g. "Sunday First Mass" or "Weekday Morning Mass"' },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Sunday Mass', value: 'sunday' },
        { label: 'Weekday Mass', value: 'weekday' },
        { label: 'Holy Day Mass', value: 'holy-day' },
        { label: 'Confession', value: 'confession' },
        { label: 'Adoration', value: 'adoration' },
        { label: 'Rosary', value: 'rosary' },
        { label: 'Novena', value: 'novena' },
      ],
    },
    {
      name: 'day',
      type: 'select',
      required: true,
      options: [
        { label: 'Sunday', value: 'Sunday' },
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Monday–Friday', value: 'Monday–Friday' },
        { label: 'Monday–Saturday', value: 'Monday–Saturday' },
        { label: 'Varies', value: 'Varies' },
      ],
    },
    {
      name: 'time',
      type: 'text',
      required: true,
      label: 'Time',
      admin: { description: 'e.g. "7:00 AM" or "6:00 PM"' },
    },
    {
      name: 'language',
      type: 'select',
      options: [
        { label: 'English', value: 'English' },
        { label: 'Yoruba', value: 'Yoruba' },
        { label: 'Igbo', value: 'Igbo' },
        { label: 'Latin', value: 'Latin' },
        { label: 'Multilingual', value: 'Multilingual' },
      ],
      defaultValue: 'English',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      admin: { description: 'Leave blank if it is the main church.' },
    },
    {
      name: 'notes',
      type: 'text',
      label: 'Notes',
      admin: { description: 'e.g. "Children\'s Mass" or "followed by Benediction"' },
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sort Order',
      defaultValue: 0,
      admin: { description: 'Lower numbers appear first.' },
    },
  ],
}
