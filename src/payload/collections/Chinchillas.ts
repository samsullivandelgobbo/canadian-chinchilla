import type { CollectionConfig } from 'payload'

export const Chinchillas: CollectionConfig = {
  slug: 'chinchillas',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'age', 'gender', 'status', 'dateAdded'],
    listSearchableFields: ['name', 'color', 'description'],
  },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
      admin: {
        description: 'The chinchilla\'s name',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'Auto-generated from name, used in URLs',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === 'create' || operation === 'update') {
              if (data?.name) {
                return data.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
              }
            }
            return data?.slug
          },
        ],
      },
    },
    {
      name: 'age',
      type: 'number',
      required: true,
      label: 'Age (years)',
      admin: {
        step: 1,
        description: 'Age in years',
      },
    },
    {
      name: 'gender',
      type: 'select',
      required: true,
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'color',
      type: 'text',
      required: true,
      label: 'Color/Pattern',
      admin: {
        description: 'e.g., Standard Grey, Beige, Ebony, Violet',
      },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: 'Description',
      admin: {
        description: 'A friendly description of the chinchilla\'s personality and characteristics',
      },
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Photos',
      admin: {
        description: 'Upload photos of the chinchilla. First photo will be used as the main image.',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'Available',
      options: [
        { label: 'Available', value: 'Available' },
        { label: 'On Hold', value: 'On Hold' },
        { label: 'Adopted', value: 'Adopted' },
        { label: 'Not Ready', value: 'Not Ready' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Current adoption status',
      },
    },
    {
      name: 'friendlyWithOthers',
      type: 'checkbox',
      label: 'Friendly with Other Chinchillas',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'dateAdded',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Date Added to Rescue',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'notes',
      type: 'text',
      label: 'Internal Notes',
      admin: {
        description: 'Private notes for volunteers (not shown on public site)',
      },
    },
  ],
}
