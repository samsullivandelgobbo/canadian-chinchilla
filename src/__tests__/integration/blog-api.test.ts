import { describe, it, expect } from 'vitest'

describe('Blog API', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3005'

  it('should fetch blog posts', async () => {
    const response = await fetch(`${BASE_URL}/api/blog`)
    expect(response.ok).toBe(true)

    const data = await response.json()
    expect(data).toHaveProperty('docs')
    expect(Array.isArray(data.docs)).toBe(true)
  })

  it('should only return published posts for public access', async () => {
    const response = await fetch(
      `${BASE_URL}/api/blog?where[status][equals]=published`
    )
    expect(response.ok).toBe(true)

    const data = await response.json()
    if (data.docs.length > 0) {
      data.docs.forEach((post: any) => {
        expect(post.status).toBe('published')
      })
    }
  })

  it('should return blog posts with required fields', async () => {
    const response = await fetch(`${BASE_URL}/api/blog?limit=1`)
    const data = await response.json()

    if (data.docs.length > 0) {
      const post = data.docs[0]
      expect(post).toHaveProperty('title')
      expect(post).toHaveProperty('slug')
      expect(post).toHaveProperty('status')
      expect(post).toHaveProperty('content')
    }
  })

  it('should sort by published date descending', async () => {
    const response = await fetch(`${BASE_URL}/api/blog?sort=-publishedDate&limit=2`)
    const data = await response.json()

    if (data.docs.length >= 2) {
      const date1 = new Date(data.docs[0].publishedDate)
      const date2 = new Date(data.docs[1].publishedDate)
      expect(date1.getTime()).toBeGreaterThanOrEqual(date2.getTime())
    }
  })
})
