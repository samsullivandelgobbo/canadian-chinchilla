import { test, expect } from '@playwright/test'

test.describe('Application Submission', () => {
  test('should submit adoption application', async ({ page }) => {
    await page.goto('/apply')

    // Fill out required fields
    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'john.doe@example.com')
    await page.fill('input[name="age"]', '30')
    await page.fill('input[name="city"]', 'Toronto')

    // Select province
    await page.click('button[role="combobox"]') // Opens select
    await page.click('text=Ontario')

    // Fill cage info
    await page.check('input[name="hasCage"]')
    await page.fill('input[name="cageType"]', 'Critter Nation Double')

    // Fill experience
    await page.check('input[name="hasExperience"]')
    await page.check('input[name="hasAirConditioning"]')

    // Fill why adopt
    await page.fill('textarea[name="whyAdopt"]', 'I love chinchillas and want to provide a great home')

    // Check required agreements
    await page.check('input[name="readCareGuide"]')
    await page.check('input[name="financialResponsibility"]')
    await page.check('input[name="timeCommitment"]')

    // Submit form
    await page.click('button[type="submit"]')

    // Should show success message
    await expect(page.getByText(/application.*submitted/i)).toBeVisible({ timeout: 10000 })
    await expect(page.getByText(/thank you/i)).toBeVisible()
  })

  test('should show validation errors for missing required fields', async ({ page }) => {
    await page.goto('/apply')

    // Try to submit without filling anything
    await page.click('button[type="submit"]')

    // Should show validation errors
    await expect(page.getByText(/required/i).first()).toBeVisible({ timeout: 5000 })
  })

  test('should validate email format', async ({ page }) => {
    await page.goto('/apply')

    await page.fill('input[name="email"]', 'invalid-email')
    await page.fill('input[name="firstName"]', 'Test') // Fill another field to trigger validation

    // Trigger validation by clicking outside
    await page.click('body')

    // Should show email validation error
    await expect(page.getByText(/invalid.*email/i)).toBeVisible({ timeout: 3000 })
  })
})
