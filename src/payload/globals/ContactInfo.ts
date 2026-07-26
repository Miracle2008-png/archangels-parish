import type { GlobalConfig } from 'payload'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'address',
      type: 'group',
      label: 'Physical Address',
      fields: [
        { name: 'street', type: 'text', defaultValue: '1 Mission Street' },
        { name: 'area', type: 'text', defaultValue: 'Satellite Town' },
        { name: 'city', type: 'text', defaultValue: 'Lagos' },
        { name: 'state', type: 'text', defaultValue: 'Lagos State' },
        { name: 'country', type: 'text', defaultValue: 'Nigeria' },
      ],
    },
    {
      name: 'phones',
      type: 'array',
      label: 'Phone Numbers',
      fields: [
        { name: 'label', type: 'text', label: 'Label', admin: { description: 'e.g. "Parish Office", "Emergency"' } },
        { name: 'number', type: 'text', required: true },
      ],
      defaultValue: [{ label: 'Parish Office', number: '0806 569 0094' }],
    },
    {
      name: 'whatsapp',
      type: 'text',
      label: 'WhatsApp Number',
      defaultValue: '+234 806 569 0094',
    },
    {
      name: 'email',
      type: 'email',
      defaultValue: 'archangels_sat@yahoo.com',
    },
    {
      name: 'officeHours',
      type: 'array',
      label: 'Office Hours',
      fields: [
        { name: 'days', type: 'text', required: true, label: 'Days', admin: { description: 'e.g. "Monday – Friday"' } },
        { name: 'hours', type: 'text', required: true, label: 'Hours', admin: { description: 'e.g. "8:00 AM – 4:00 PM"' } },
      ],
      defaultValue: [
        { days: 'Monday – Friday', hours: '[PLACEHOLDER]' },
        { days: 'Saturday', hours: '[PLACEHOLDER]' },
        { days: 'Sunday', hours: 'Closed (worship day)' },
      ],
    },
    {
      name: 'emergencyContact',
      type: 'group',
      label: 'Emergency / Priest on Call',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Priest on Call' },
        { name: 'number', type: 'text', label: 'Phone Number' },
        { name: 'note', type: 'text', label: 'Note', defaultValue: 'For anointing of the sick and emergencies only.' },
      ],
    },
  ],
}
