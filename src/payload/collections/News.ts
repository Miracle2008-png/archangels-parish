import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'category', 'publishedDate', '_status'],
    listSearchableFields: ['title', 'excerpt'],
  },
  versions: {
    drafts: { autosave: true },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier. Auto-generated from title.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Summary',
      admin: {
        description: 'Short summary shown in listings and social previews. Keep under 160 characters.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Announcement', value: 'announcement' },
        { label: 'Parish News', value: 'parish-news' },
        { label: 'Weekly Bulletin', value: 'bulletin' },
        { label: 'Diocese News', value: 'diocese' },
        { label: 'Events', value: 'events' },
        { label: 'Sacraments', value: 'sacraments' },
      ],
      defaultValue: 'announcement',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Pin to Homepage',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Article Body',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Published Date',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMMM yyyy' },
      },
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
      defaultValue: 'Parish Office',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [{ name: 'tag', type: 'text' }],
    },
    // SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'Social Share Image' },
      ],
    },
  ],
}
