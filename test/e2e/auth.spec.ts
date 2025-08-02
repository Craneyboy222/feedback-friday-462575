import { test, expect } from '@playwright/test';

test('user can register and login', async ({ page }) => {
  await page.goto('http://localhost:3000/register');
  await page.fill('input[name=\