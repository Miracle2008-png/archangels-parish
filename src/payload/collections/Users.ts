import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Administration',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Super Admin', value: 'superAdmin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
      required: true,
    },
  ],
}
