import { test, expect } from '@playwright/test';
test('Homepage loads with feedback threads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const threads = await page.$$('.feedback-thread');
  expect(threads.length).toBeGreaterThan(0);
});