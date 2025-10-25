import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Import collections
import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Chinchillas } from './payload/collections/Chinchillas'
import { Blog } from './payload/collections/Blog'
import { Applications } from './payload/collections/Applications'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    disable: false,
    livePreview: {
      breakpoints: [],
    },
  },
  collections: [Users, Media, Chinchillas, Blog, Applications],
  editor: slateEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          enabled: true,
          token: process.env.BLOB_READ_WRITE_TOKEN,
          collections: {
            media: true,
          },
        }),
      ]
    : [],
})
