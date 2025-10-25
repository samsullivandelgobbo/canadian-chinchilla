import { getPayload } from 'payload'
import config from '@payload-config'
import type { Blog, Media, User } from '@/payload-types'

export interface BlogPostWithDetails extends Blog {
  featuredImageUrl?: string
  authorName?: string
}

export async function getPublishedBlogPosts(
  limit: number = 50
): Promise<BlogPostWithDetails[]> {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'blog',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit,
    sort: '-publishedDate',
  })

  return result.docs.map((post) => transformBlogPost(post))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostWithDetails | null> {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'blog',
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit: 1,
  })

  const post = result.docs[0]
  return post ? transformBlogPost(post) : null
}

export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPostWithDetails[]> {
  return getPublishedBlogPosts(limit)
}

function transformBlogPost(post: Blog): BlogPostWithDetails {
  const featuredImage = post.featuredImage as Media | null
  const author = post.author as User | null

  return {
    ...post,
    featuredImageUrl: featuredImage?.url || undefined,
    authorName: author?.name || author?.email || 'Anonymous',
  }
}

export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
