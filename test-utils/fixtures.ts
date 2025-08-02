import { test as base } from '@playwright/test';

export const test = base.extend({
  user: async ({ page }, use) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'Password123');
    await page.click('button[type="submit"]');
    await use({ email: 'testuser@example.com', password: 'Password123' });
  }
});