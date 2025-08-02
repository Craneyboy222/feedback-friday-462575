import { test, expect } from '@playwright/test';

test.describe('End-to-End Database Tests', () => {
  test('User registration flow', async ({ page }) => {
    await page.goto('/register');
    await page.fill('#username', 'e2eUser');
    await page.fill('#email', 'e2e@example.com');
    await page.fill('#password', 'password');
    await page.click('button[type="submit"]');

    const welcomeMessage = await page.textContent('.welcome-message');
    expect(welcomeMessage).toContain('Welcome, e2eUser');
  });

  test('Feedback submission flow', async ({ page }) => {
    await page.goto('/feedback');
    await page.fill('#companyName', 'E2E Test Company');
    await page.fill('#url', 'http://e2etest.com');
    await page.fill('#purpose', 'End-to-end testing');
    await page.fill('#technologies', 'Playwright, Node.js');
    await page.click('button[type="submit"]');

    const feedbackMessage = await page.textContent('.feedback-success');
    expect(feedbackMessage).toBe('Feedback submitted successfully');
  });
});