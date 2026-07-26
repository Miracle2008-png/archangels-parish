import { buildConfig } from 'payload'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from '@/payload/collections/Users'
import { News } from '@/payload/collections/News'
import { Events } from '@/payload/collections/Events'
import { Gallery } from '@/payload/collections/Gallery'
import { MassTimes } from '@/payload/collections/MassTimes'
import { Priests } from '@/payload/collections/Priests'
import { Ministries } from '@/payload/collections/Ministries'
import { Sacraments } from '@/payload/collections/Sacraments'
import { Staff } from '@/payload/collections/Staff'
import { Downloads } from '@/payload/collections/Downloads'
import { Media } from '@/payload/collections/Media'

// Globals
import { SiteSettings } from '@/payload/globals/SiteSettings'
import { ContactInfo } from '@/payload/globals/ContactInfo'
import { Homepage } from '@/payload/globals/Homepage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Archangels Catholic Church',
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },

  editor: lexicalEditor({}),

  collections: [
    Users,
    Media,
    News,
    Events,
    Gallery,
    MassTimes,
    Priests,
    Ministries,
    Sacraments,
    Staff,
    Downloads,
  ],

  globals: [
    SiteSettings,
    ContactInfo,
    Homepage,
  ],

  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL || '',
    },
  }),

  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
        downloads: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID || '',
    }),
  ],

  secret: process.env.PAYLOAD_SECRET ?? 'archangels-parish-dev-secret-change-in-production',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },

  cors: ['http://localhost:3000', process.env.NEXT_PUBLIC_SERVER_URL ?? ''].filter(Boolean),
})
