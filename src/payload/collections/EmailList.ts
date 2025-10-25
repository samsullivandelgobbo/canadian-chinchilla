import type { CollectionConfig } from 'payload'

export const EmailList: CollectionConfig = {
  slug: 'email-list',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'subscribed', 'subscribedAt'],
    listSearchableFields: ['email'],
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true, // Public can subscribe
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      label: 'Email Address',
    },
    {
      name: 'subscribed',
      type: 'checkbox',
      required: true,
      defaultValue: true,
      label: 'Subscribed',
      admin: {
        position: 'sidebar',
        description: 'Whether the user is currently subscribed',
      },
    },
    {
      name: 'subscribedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Subscribed At',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'unsubscribedAt',
      type: 'date',
      label: 'Unsubscribed At',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Footer', value: 'footer' },
        { label: 'Homepage', value: 'homepage' },
        { label: 'Application', value: 'application' },
        { label: 'Other', value: 'other' },
      ],
      label: 'Subscription Source',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
