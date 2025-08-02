import { test, expect } from '@playwright/test';

test.describe('User Profile Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[type="submit"]');
  });

  test('should display user profile', async ({ page }) => {
    await page.goto('/profile');
    await expect(page.locator('h1')).toContainText('testuser');
  });

  test('should update user profile', async ({ page }) => {
    await page.goto('/profile');
    await page.fill('input[name="profile_info"]', 'Updated profile info');
    await page.click('button[type="submit"]');
    await expect(page.locator('input[name="profile_info"]')).toHaveValue('Updated profile info');
  });
});