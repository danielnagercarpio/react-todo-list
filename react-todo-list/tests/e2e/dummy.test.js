import { test, expect } from '@playwright/test';

test('homepage has React in title', async ({ page }) => {
    await page.goto('http://localhost:5174');
    await expect(page).toHaveTitle(/React/i);

})