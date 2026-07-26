import type { CollectionConfig } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: {
    useAsTitle: 'name',
    group: 'Parish Info',
    defaultColumns: ['name', 'role', 'department'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true, label: 'Job Title / Role' },
    {
      name: 'department',
      type: 'select',
      options: [
        { label: 'Parish Office', value: 'office' },
        { label: 'Finance', value: 'finance' },
        { label: 'Maintenance', value: 'maintenance' },
        { label: 'Pastoral', value: 'pastoral' },
        { label: 'Catechesis', value: 'catechesis' },
      ],
      defaultValue: 'office',
    },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'bio', type: 'textarea', label: 'Short Bio' },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
  ],
}
