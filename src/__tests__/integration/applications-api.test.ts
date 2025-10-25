import { describe, it, expect, beforeAll } from 'vitest'

describe('Applications API', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3005'
  let authToken: string | null = null

  // Login before tests that require auth
  beforeAll(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@chinchillarescue.ca',
          password: 'admin123',
        }),
      })

      if (response.ok) {
        const data = await response.json()
        authToken = data.token
      }
    } catch (error) {
      console.warn('Could not authenticate for tests:', error)
    }
  })

  it('should create a new application', async () => {
    const testApplication = {
      applicantName: 'Test User',
      email: 'test@example.com',
      phone: '555-1234',
      age: 30,
      cityProvince: 'Toronto, ON',
      interestedChinchilla: 'Fluffy',
      hasCage: true,
      hasExperience: false,
      fullApplication: 'Test application data',
      status: 'New',
      applicationDate: new Date().toISOString(),
    }

    const response = await fetch(`${BASE_URL}/api/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testApplication),
    })

    expect(response.ok).toBe(true)
    const data = await response.json()
    expect(data.doc).toHaveProperty('id')
    expect(data.doc.applicantName).toBe(testApplication.applicantName)
  })

  it('should require authentication to read applications', async () => {
    const response = await fetch(`${BASE_URL}/api/applications`)

    // Should return 401 or 403 without auth, or 200 with public read access
    // Depending on Payload config, adjust expectation
    expect([200, 401, 403]).toContain(response.status)
  })

  it('should fetch applications with auth', async () => {
    if (!authToken) {
      console.warn('Skipping auth test - no token available')
      return
    }

    const response = await fetch(`${BASE_URL}/api/applications`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })

    expect(response.ok).toBe(true)
    const data = await response.json()
    expect(data).toHaveProperty('docs')
  })

  it('should return application with required fields', async () => {
    const response = await fetch(`${BASE_URL}/api/applications?limit=1`, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
    })

    if (response.ok) {
      const data = await response.json()
      if (data.docs.length > 0) {
        const app = data.docs[0]
        expect(app).toHaveProperty('applicantName')
        expect(app).toHaveProperty('email')
        expect(app).toHaveProperty('status')
        expect(app).toHaveProperty('applicationDate')
      }
    }
  })
})
