import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'applicantName',
    defaultColumns: ['applicantName', 'email', 'status', 'applicationDate'],
    listSearchableFields: ['applicantName', 'email', 'interestedChinchilla'],
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true, // Public can create applications
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'applicantName',
      type: 'text',
      required: true,
      label: 'Applicant Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'age',
      type: 'number',
      required: true,
      label: 'Age',
    },
    {
      name: 'cityProvince',
      type: 'text',
      required: true,
      label: 'City, Province',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'New',
      options: [
        { label: 'New', value: 'New' },
        { label: 'Reviewing', value: 'Reviewing' },
        { label: 'Approved', value: 'Approved' },
        { label: 'Rejected', value: 'Rejected' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'interestedChinchilla',
      type: 'text',
      label: 'Interested Chinchilla',
      admin: {
        description: 'Name of the chinchilla they are interested in, if any',
      },
    },
    {
      name: 'hasCage',
      type: 'checkbox',
      label: 'Has Suitable Cage',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'hasExperience',
      type: 'checkbox',
      label: 'Has Chinchilla Experience',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'applicationDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Application Date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'fullApplication',
      type: 'text',
      required: true,
      label: 'Full Application Details',
      admin: {
        description: 'Complete formatted application data',
      },
    },
    {
      name: 'reviewNotes',
      type: 'text',
      label: 'Review Notes',
      admin: {
        description: 'Internal notes for reviewing the application',
        condition: (data, siblingData, { user }) => !!user,
      },
    },
  ],
}
