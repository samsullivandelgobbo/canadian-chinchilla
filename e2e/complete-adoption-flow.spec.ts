import { test, expect } from '@playwright/test'

test.describe('Complete Adoption Flow', () => {
  test('full user journey: browse -> view details -> apply -> submit', async ({ page }) => {
    // Step 1: Land on homepage
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /every chinchilla/i })).toBeVisible()

    // Step 2: Click adopt CTA
    await page.getByRole('link', { name: /adopt.*chinchilla/i }).first().click()
    await expect(page).toHaveURL(/\/adopt/)

    // Step 3: View available chinchillas
    await page.waitForLoadState('networkidle')
    const chinchillaCards = page.locator('a[href^="/adopt/"]')
    const count = await chinchillaCards.count()

    if (count === 0) {
      console.log('No chinchillas available for adoption flow test')
      test.skip()
      return
    }

    // Step 4: Click on first chinchilla
    const firstChinchilla = chinchillaCards.first()
    const chinchillaName = await firstChinchilla.textContent()
    await firstChinchilla.click()

    // Step 5: View chinchilla details
    await expect(page).toHaveURL(/\/adopt\/[^\/]+/)
    await expect(page.locator('h1')).toBeVisible()

    // Step 6: Click apply button
    const applyButton = page.getByRole('link', { name: /apply.*adopt/i })
    await applyButton.click()

    // Step 7: Fill out application
    await expect(page).toHaveURL(/\/apply/)

    await page.fill('input[name="firstName"]', 'Jane')
    await page.fill('input[name="lastName"]', 'Smith')
    await page.fill('input[name="email"]', `test-${Date.now()}@example.com`)
    await page.fill('input[name="phone"]', '416-555-0123')
    await page.fill('input[name="age"]', '28')
    await page.fill('input[name="city"]', 'Toronto')

    // Select province
    await page.click('button[role="combobox"]')
    await page.waitForTimeout(500)
    await page.click('text=Ontario')

    // Cage information
    await page.check('input[name="hasCage"]')
    await page.fill('input[name="cageType"]', 'Critter Nation')
    await page.check('input[name="hasAirConditioning"]')

    // Experience
    await page.check('input[name="hasExperience"]')

    // Why adopt
    await page.fill(
      'textarea[name="whyAdopt"]',
      'I have always loved chinchillas and want to provide a loving forever home.'
    )

    // Required checkboxes
    await page.check('input[name="readCareGuide"]')
    await page.check('input[name="financialResponsibility"]')
    await page.check('input[name="timeCommitment"]')

    // Step 8: Submit application
    await page.click('button[type="submit"]')

    // Step 9: Verify success
    await expect(page.getByText(/application.*submitted/i)).toBeVisible({ timeout: 15000 })
    await expect(page.getByText(/thank you/i)).toBeVisible()
  })

  test('should handle application with minimal info', async ({ page }) => {
    await page.goto('/apply')

    // Fill only required fields
    await page.fill('input[name="firstName"]', 'Min')
    await page.fill('input[name="lastName"]', 'Info')
    await page.fill('input[name="email"]', `minimal-${Date.now()}@example.com`)
    await page.fill('input[name="age"]', '25')
    await page.fill('input[name="city"]', 'Ottawa')

    // Select province
    await page.click('button[role="combobox"]')
    await page.waitForTimeout(500)
    await page.click('text=Ontario')

    // Minimal cage info
    await page.check('input[name="hasCage"]')

    // Why adopt
    await page.fill('textarea[name="whyAdopt"]', 'Want to adopt a chinchilla.')

    // Required agreements
    await page.check('input[name="readCareGuide"]')
    await page.check('input[name="financialResponsibility"]')
    await page.check('input[name="timeCommitment"]')

    // Submit
    await page.click('button[type="submit"]')

    // Should still succeed
    await expect(page.getByText(/application.*submitted/i)).toBeVisible({ timeout: 15000 })
  })
})
