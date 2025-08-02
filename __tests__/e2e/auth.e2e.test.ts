import { test, expect } from '@playwright/test';

test.describe('User Authentication', () => {
  test('should allow a user to register', async ({ page }) => {
    await page.goto('/register');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profile');
  });

  test('should allow a user to login', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/profile');
  });
});