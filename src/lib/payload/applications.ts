import { getPayload } from 'payload'
import config from '@payload-config'

export interface CreateApplicationData {
  applicantName: string
  email: string
  phone?: string
  age: number
  cityProvince: string
  interestedChinchilla?: string
  hasCage: boolean
  hasExperience: boolean
  fullApplication: string
}

// Create a new application
export async function createApplication(data: CreateApplicationData): Promise<string | null> {
  try {
    const payload = await getPayload({ config })

    const application = await payload.create({
      collection: 'applications',
      data: {
        ...data,
        status: 'New',
        applicationDate: new Date().toISOString(),
      },
    })

    return application.id
  } catch (error) {
    console.error('Error creating application:', error)
    return null
  }
}
