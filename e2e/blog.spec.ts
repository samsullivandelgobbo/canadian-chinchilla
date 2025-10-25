import { test, expect } from '@playwright/test'

test.describe('Blog', () => {
  test('should display blog listing', async ({ page }) => {
    await page.goto('/blog')

    await expect(page.getByRole('heading', { name: /blog/i })).toBeVisible()

    // Should show blog posts or "no posts" message
    const noPosts = page.getByText(/no blog posts yet/i)
    const blogPosts = page.locator('a[href^="/blog/"]')

    const noPostsVisible = await noPosts.isVisible().catch(() => false)
    const postsCount = await blogPosts.count()

    expect(noPostsVisible || postsCount > 0).toBe(true)
  })

  test('should navigate to blog post detail', async ({ page }) => {
    await page.goto('/blog')

    // Check if there are any blog posts
    const blogPosts = page.locator('a[href^="/blog/"]')
    const count = await blogPosts.count()

    if (count > 0) {
      // Click first blog post
      await blogPosts.first().click()

      // Should navigate to post detail
      await expect(page).toHaveURL(/\/blog\/[^\/]+/)

      // Should show post title
      await expect(page.locator('h1')).toBeVisible()

      // Should show back to blog link
      await expect(page.getByRole('link', { name: /back to blog/i })).toBeVisible()
    } else {
      test.skip()
    }
  })
})
