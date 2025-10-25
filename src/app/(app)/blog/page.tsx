import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import type { Blog, Media } from '@/payload-types'

export const revalidate = 300 // Revalidate every 5 minutes

async function getBlogPosts() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'blog',
    where: {
      status: {
        equals: 'published',
      },
    },
    depth: 2,
    limit: 50,
    sort: '-publishedDate',
  })

  return result.docs
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

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Chinchilla Care <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Tips, stories, and updates from Canadian Chinchilla Rescue
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {posts.map((post) => {
                const featuredImage = post.featuredImage as Media | null

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <div className="space-y-5">
                      {/* Featured Image */}
                      {featuredImage?.url ? (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                          <Image
                            src={featuredImage.url}
                            alt={featuredImage.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20" />
                      )}

                      {/* Content */}
                      <div className="space-y-3">
                        <div className="text-sm text-muted-foreground">
                          {formatDate(post.publishedDate)}
                        </div>
                        <h2
                          className="text-xl md:text-2xl font-semibold leading-tight tracking-tight group-hover:text-primary transition-colors duration-150"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all duration-150">
                          Read article
                          <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
