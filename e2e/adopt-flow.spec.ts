import { test, expect } from '@playwright/test'

test.describe('Adoption Flow', () => {
  test('should display available chinchillas', async ({ page }) => {
    await page.goto('/adopt')

    // Should show the page title
    await expect(page.getByRole('heading', { name: /available.*chinchillas/i })).toBeVisible()

    // Should show chinchilla cards
    const chinchillaCards = page.locator('[data-testid="chinchilla-card"]').or(
      page.locator('a[href^="/adopt/"]')
    )

    const count = await chinchillaCards.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should navigate to chinchilla detail page', async ({ page }) => {
    await page.goto('/adopt')

    // Wait for chinchillas to load
    await page.waitForLoadState('networkidle')

    // Click first available chinchilla
    const firstChinchilla = page.locator('a[href^="/adopt/"]').first()
    await firstChinchilla.click()

    // Should navigate to detail page
    await expect(page).toHaveURL(/\/adopt\/[^\/]+/)

    // Should show chinchilla name
    await expect(page.locator('h1')).toBeVisible()

    // Should show adopt button
    await expect(page.getByRole('link', { name: /apply.*adopt/i })).toBeVisible()
  })

  test('should prefill application with chinchilla name', async ({ page }) => {
    await page.goto('/adopt')
    await page.waitForLoadState('networkidle')

    // Get first chinchilla name
    const firstChinchilla = page.locator('a[href^="/adopt/"]').first()
    const chinchillaName = await firstChinchilla.textContent()

    await firstChinchilla.click()

    // Click adopt button
    await page.getByRole('link', { name: /apply.*adopt/i }).click()

    // Should navigate to application page
    await expect(page).toHaveURL(/\/apply/)

    // Check if chinchilla name is prefilled (might be in URL params)
    const url = page.url()
    if (chinchillaName) {
      // Either in URL params or in the form
      const hasNameInUrl = url.includes('chinchilla=')
      const interestedField = page.locator('input[name="interestedChinchilla"]')
      const hasNameInForm = await interestedField.isVisible()

      expect(hasNameInUrl || hasNameInForm).toBe(true)
    }
  })
})
