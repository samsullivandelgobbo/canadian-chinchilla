import { test, expect } from '@playwright/test'

test.describe('Site Navigation', () => {
  test('should navigate through main pages', async ({ page }) => {
    await page.goto('/')

    // Check home page loads
    await expect(page.getByRole('heading', { name: /every chinchilla deserves/i })).toBeVisible()

    // Navigate to About
    await page.getByRole('link', { name: /about/i }).click()
    await expect(page).toHaveURL(/\/about/)
    await expect(page.locator('h1')).toBeVisible()

    // Navigate to Adopt
    await page.getByRole('link', { name: /adopt/i }).click()
    await expect(page).toHaveURL(/\/adopt/)
    await expect(page.getByRole('heading', { name: /available/i })).toBeVisible()

    // Navigate to Care
    await page.getByRole('link', { name: /care/i }).first().click()
    await expect(page).toHaveURL(/\/care/)

    // Navigate to Contact
    await page.getByRole('link', { name: /contact/i }).click()
    await expect(page).toHaveURL(/\/contact/)
  })

  test('should show mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // Mobile viewport
    await page.goto('/')

    // Mobile menu button should be visible
    const menuButton = page.locator('button[aria-label*="menu"]').or(
      page.locator('button').filter({ hasText: /menu/i })
    )

    if (await menuButton.isVisible()) {
      await menuButton.click()

      // Menu items should be visible
      await expect(page.getByRole('link', { name: /adopt/i })).toBeVisible()
    }
  })

  test('should have working footer links', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Check footer exists
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check social links or important footer links exist
    const footerLinks = footer.locator('a')
    const count = await footerLinks.count()
    expect(count).toBeGreaterThan(0)
  })
})
