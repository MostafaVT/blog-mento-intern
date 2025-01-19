import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Authors } from './collections/Authors'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'http://localhost:3000',
  cors: [
    'http://localhost:4000', 
  ],
  csrf: [
    'http://localhost:4000', 
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Authors],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  
})
