import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'publishedAt',
      label: 'Published At',
      type: 'date',
      hooks: {
        beforeChange: [
          ({ value, originalDoc }) => {
            if (!value) {
              return new Date().toISOString();
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'authors',
      required: true,
    },
  ],
}
