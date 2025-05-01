import { test, expect } from '@playwright/test';

test('SimpleApi E2E test', async ({ page }) => {
  // Navigate to the SimpleApi page
  await page.goto('http://localhost:3000/simple-api');

  // Verify the page title
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByRole('heading', { name: 'Simple API Demo' })).toBeVisible();

  // Enter a post ID and click fetch
  await page.getByPlaceholder('Enter post ID (1-100)').fill('1');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Fetch Post' }).click();

  // Wait for and verify the loading state
  await expect(page.locator('text=Loading...')).toBeVisible();

  // Wait for and verify the post data
  await expect(page.locator('text=sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeVisible();
  await expect(page.locator('text=quia et suscipit')).toBeVisible();
}); 