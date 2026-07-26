import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    group: 'Content',
  },
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'card', width: 800, height: 600, position: 'centre' },
      { name: 'hero', width: 1920, height: 1080, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      admin: {
        description: 'Describe the image for screen readers and SEO.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
  ],
}
