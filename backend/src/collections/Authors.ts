import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'text',
    },
    {
      name: 'profilePicture',
      label: 'Profile picture',
      relationTo: 'media',
      type: 'upload',
      required: true,
      // defaultValue: 'backend/media/defualt-user-icon.png',
    },
  ],
}
