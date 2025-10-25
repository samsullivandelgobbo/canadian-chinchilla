import { getPayload } from 'payload'
import config from '@payload-config'
import type { Chinchilla, Media } from '@/payload-types'

export type ChinchillaWithPhotos = Chinchilla & {
  photos: Array<{
    id: string
    url: string
    alt: string
  }>
}

// Transform Payload chinchilla to include photo URLs
async function transformChinchilla(chinchilla: Chinchilla): Promise<ChinchillaWithPhotos> {
  const photos: Array<{ id: string; url: string; alt: string }> = []

  if (chinchilla.photos && Array.isArray(chinchilla.photos)) {
    for (const photo of chinchilla.photos) {
      if (typeof photo === 'object' && photo !== null) {
        const media = photo as Media
        if (media.url) {
          photos.push({
            id: media.id,
            url: media.url,
            alt: media.alt || chinchilla.name || 'Chinchilla photo',
          })
        }
      }
    }
  }

  return {
    ...chinchilla,
    photos,
  }
}

// Get all chinchillas with status "Available"
export async function getAvailableChinchillas(): Promise<ChinchillaWithPhotos[]> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'chinchillas',
      where: {
        status: {
          equals: 'Available',
        },
      },
      depth: 2, // Include photos
      limit: 100,
      sort: '-dateAdded',
    })

    const transformedChinchillas = await Promise.all(
      result.docs.map((doc) => transformChinchilla(doc))
    )

    return transformedChinchillas
  } catch (error) {
    console.error('Error fetching available chinchillas:', error)
    return []
  }
}

// Get all chinchillas (any status)
export async function getAllChinchillas(): Promise<ChinchillaWithPhotos[]> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'chinchillas',
      depth: 2,
      limit: 100,
      sort: '-dateAdded',
    })

    const transformedChinchillas = await Promise.all(
      result.docs.map((doc) => transformChinchilla(doc))
    )

    return transformedChinchillas
  } catch (error) {
    console.error('Error fetching all chinchillas:', error)
    return []
  }
}

// Get a specific chinchilla by ID
export async function getChinchillaById(id: string): Promise<ChinchillaWithPhotos | null> {
  try {
    const payload = await getPayload({ config })

    const chinchilla = await payload.findByID({
      collection: 'chinchillas',
      id,
      depth: 2,
    })

    if (!chinchilla) return null

    return await transformChinchilla(chinchilla)
  } catch (error) {
    console.error('Error fetching chinchilla by ID:', error)
    return null
  }
}

// Get chinchilla by slug
export async function getChinchillaBySlug(slug: string): Promise<ChinchillaWithPhotos | null> {
  try {
    const payload = await getPayload({ config })

    const result = await payload.find({
      collection: 'chinchillas',
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 2,
      limit: 1,
    })

    if (result.docs.length === 0) return null

    return await transformChinchilla(result.docs[0])
  } catch (error) {
    console.error('Error fetching chinchilla by slug:', error)
    return null
  }
}

// Generate slug helper (for compatibility with existing code)
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
