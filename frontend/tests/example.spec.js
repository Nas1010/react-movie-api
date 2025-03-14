// @ts-check
import { test } from '@playwright/test';

test('User can search for a movie, add it to favourites, and view it in favourites', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Movie App' }).click();
  await page.locator('div').filter({ hasText: /^♥The Gorge2025$/ }).locator('div').nth(1).click();
  await page.locator('div').filter({ hasText: /^The Gorge2025$/ }).getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Search for movies...' }).click();
  await page.getByRole('textbox', { name: 'Search for movies...' }).fill('moana');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div').filter({ hasText: /^♥Moana 22024$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Favourites' }).click();
});