import { test, expect } from '@playwright/test';

test.describe('Example site', () => {
  test('homepage has title and can search', async ({ page }) => {
    await page.goto('https://example.com'); // replace with real site for your tests
    await expect(page).toHaveTitle(/Example Domain/);
    // example of interaction
    // await page.click('text=More information');
    // add assertions as needed
  });
});