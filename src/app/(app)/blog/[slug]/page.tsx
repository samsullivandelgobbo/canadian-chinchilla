import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Blog, Media, User } from '@/payload-types'

export const revalidate = 300

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getBlogPost(slug: string) {
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

  return result.docs[0] || null
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const featuredImage = post.featuredImage as Media | null

  return {
    title: `${post.title} | Canadian Chinchilla Rescue`,
    description: post.excerpt || `Read ${post.title} on the Canadian Chinchilla Rescue blog`,
    openGraph: {
      images: featuredImage?.url ? [featuredImage.url] : [],
    },
  }
}

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderRichText(content: any): string {
  if (!content) return ''

  // Simple Slate rich text rendering
  if (Array.isArray(content)) {
    return content
      .map((node) => {
        if (node.type === 'h1') {
          return `<h1 class="text-3xl font-display font-bold mt-8 mb-4">${renderChildren(node.children)}</h1>`
        }
        if (node.type === 'h2') {
          return `<h2 class="text-2xl font-display font-bold mt-6 mb-3">${renderChildren(node.children)}</h2>`
        }
        if (node.type === 'h3') {
          return `<h3 class="text-xl font-display font-semibold mt-4 mb-2">${renderChildren(node.children)}</h3>`
        }
        if (node.type === 'blockquote') {
          return `<blockquote class="border-l-4 border-primary pl-4 italic my-4">${renderChildren(node.children)}</blockquote>`
        }
        if (node.type === 'ul') {
          return `<ul class="list-disc pl-6 my-4 space-y-2">${renderListItems(node.children)}</ul>`
        }
        if (node.type === 'ol') {
          return `<ol class="list-decimal pl-6 my-4 space-y-2">${renderListItems(node.children)}</ol>`
        }
        if (node.type === 'li') {
          return `<li class="pl-1">${renderChildren(node.children)}</li>`
        }
        // Default paragraph
        return `<p class="mb-4 leading-relaxed">${renderChildren(node.children || [])}</p>`
      })
      .join('')
  }

  return ''
}

function renderChildren(children: any[]): string {
  if (!Array.isArray(children)) return ''

  return children
    .map((child) => {
      // Text node
      if (child.text !== undefined) {
        let text = child.text
        if (child.bold) text = `<strong>${text}</strong>`
        if (child.italic) text = `<em>${text}</em>`
        if (child.underline) text = `<u>${text}</u>`
        if (child.code) text = `<code class="bg-muted px-1 py-0.5 rounded text-sm">${text}</code>`
        return text
      }
      // Nested block elements
      if (child.type === 'ul') {
        return `<ul class="list-disc pl-6 mt-2 space-y-1">${renderListItems(child.children)}</ul>`
      }
      if (child.type === 'ol') {
        return `<ol class="list-decimal pl-6 mt-2 space-y-1">${renderListItems(child.children)}</ol>`
      }
      if (child.type === 'lic' || child.type === 'list-item-content') {
        return renderChildren(child.children)
      }
      // Recurse into children if present
      if (child.children) {
        return renderChildren(child.children)
      }
      return ''
    })
    .join('')
}

function renderListItems(children: any[]): string {
  if (!Array.isArray(children)) return ''

  return children
    .map((child) => {
      // Handle list item nodes (various Slate naming conventions)
      if (child.type === 'li' || child.type === 'list-item') {
        const content = renderChildren(child.children || [])
        return `<li class="pl-1">${content}</li>`
      }
      // If it's text directly in the list, wrap it
      if (child.text !== undefined) {
        let text = child.text
        if (child.bold) text = `<strong>${text}</strong>`
        if (child.italic) text = `<em>${text}</em>`
        if (child.underline) text = `<u>${text}</u>`
        return `<li class="pl-1">${text}</li>`
      }
      // Handle nested lists
      if (child.type === 'ul') {
        return `<ul class="list-disc pl-6 mt-2 space-y-1">${renderListItems(child.children)}</ul>`
      }
      if (child.type === 'ol') {
        return `<ol class="list-decimal pl-6 mt-2 space-y-1">${renderListItems(child.children)}</ol>`
      }
      // Fallback: try to render children if present
      if (child.children) {
        return `<li class="pl-1">${renderChildren(child.children)}</li>`
      }
      return ''
    })
    .join('')
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.featuredImage as Media | null
  const author = post.author as User | null

  return (
    <div className="min-h-screen">
      <article className="px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <span className="inline-block transition-transform duration-150 group-hover:-translate-x-1">
              ←
            </span>
            <span className="ml-2">Back to Blog</span>
          </Link>

          {/* Featured Image */}
          {featuredImage?.url && (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
              <Image
                src={featuredImage.url}
                alt={featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Header */}
          <header className="space-y-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              {author && (
                <span>
                  By{' '}
                  <span className="text-foreground font-semibold">
                    {author.name || author.email}
                  </span>
                </span>
              )}
              <span>•</span>
              <time dateTime={post.publishedDate || ''}>
                {formatDate(post.publishedDate)}
              </time>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tagObj, idx) => {
                  const tag = typeof tagObj === 'object' ? tagObj.tag : tagObj
                  return (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm"
            dangerouslySetInnerHTML={{ __html: renderRichText(post.content) }}
          />
        </div>
      </article>
    </div>
  )
}
