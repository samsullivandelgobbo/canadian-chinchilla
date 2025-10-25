import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => {
      // Only admins can create new users
      return req.user?.role === 'admin'
    },
    update: ({ req }) => {
      // Users can update their own profile, admins can update anyone
      if (req.user?.role === 'admin') return true
      return {
        id: {
          equals: req.user?.id,
        },
      }
    },
    delete: ({ req }) => {
      // Only admins can delete users
      return req.user?.role === 'admin'
    },
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'volunteer',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Volunteer', value: 'volunteer' },
        { label: 'Viewer', value: 'viewer' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
    },
  ],
}
