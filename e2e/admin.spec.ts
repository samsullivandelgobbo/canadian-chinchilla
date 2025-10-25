import { test, expect } from '@playwright/test'

test.describe('Admin Panel', () => {
  test('should load admin login page', async ({ page }) => {
    await page.goto('/admin/login')

    await expect(page.getByRole('heading', { name: /login/i })).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('input[name="password"]')).toBeVisible()
  })

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/admin/login')

    await page.fill('input[name="email"]', 'admin@chinchillarescue.ca')
    await page.fill('input[name="password"]', 'admin123')
    await page.click('button[type="submit"]')

    // Should redirect to admin dashboard
    await expect(page).toHaveURL(/\/admin(?!\/login)/, { timeout: 10000 })

    // Should show collections
    await expect(page.getByText(/chinchillas/i)).toBeVisible()
    await expect(page.getByText(/applications/i)).toBeVisible()
  })

  test('should reject invalid credentials', async ({ page }) => {
    await page.goto('/admin/login')

    await page.fill('input[name="email"]', 'wrong@example.com')
    await page.fill('input[name="password"]', 'wrongpassword')
    await page.click('button[type="submit"]')

    // Should show error
    await expect(page.getByText(/invalid/i).or(page.getByText(/error/i))).toBeVisible({ timeout: 5000 })
  })
})
