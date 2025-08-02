import { test, expect } from '@playwright/test';

test('homepage has feedback thread list', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const threadList = await page.locator('.thread-list');
  await expect(threadList).toBeVisible();
});
