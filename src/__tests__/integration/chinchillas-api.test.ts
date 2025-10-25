import { describe, it, expect } from 'vitest'

describe('Chinchillas API', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3005'

  it('should fetch all chinchillas', async () => {
    const response = await fetch(`${BASE_URL}/api/chinchillas`)
    expect(response.ok).toBe(true)

    const data = await response.json()
    expect(data).toHaveProperty('docs')
    expect(Array.isArray(data.docs)).toBe(true)
  })

  it('should return chinchillas with required fields', async () => {
    const response = await fetch(`${BASE_URL}/api/chinchillas`)
    const data = await response.json()

    if (data.docs.length > 0) {
      const chinchilla = data.docs[0]
      expect(chinchilla).toHaveProperty('name')
      expect(chinchilla).toHaveProperty('age')
      expect(chinchilla).toHaveProperty('gender')
      expect(chinchilla).toHaveProperty('status')
      expect(chinchilla).toHaveProperty('slug')
    }
  })

  it('should filter available chinchillas', async () => {
    const response = await fetch(
      `${BASE_URL}/api/chinchillas?where[status][equals]=Available`
    )
    expect(response.ok).toBe(true)

    const data = await response.json()
    if (data.docs.length > 0) {
      data.docs.forEach((chin: any) => {
        expect(chin.status).toBe('Available')
      })
    }
  })

  it('should fetch single chinchilla by ID', async () => {
    // First get all chinchillas to get an ID
    const listResponse = await fetch(`${BASE_URL}/api/chinchillas?limit=1`)
    const listData = await listResponse.json()

    if (listData.docs.length > 0) {
      const id = listData.docs[0].id

      // Fetch single chinchilla
      const response = await fetch(`${BASE_URL}/api/chinchillas/${id}`)
      expect(response.ok).toBe(true)

      const chinchilla = await response.json()
      expect(chinchilla.id).toBe(id)
    }
  })
})
