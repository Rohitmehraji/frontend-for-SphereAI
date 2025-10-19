
import { test, expect } from '@playwright/test';

test('Community & Learning Hub page verification', async ({ page }) => {
  await page.goto('http://localhost:3000/tools/community-learning');
  await expect(page.locator('h1')).toContainText('Community & Learning Hub');
  await page.screenshot({ path: 'jules-scratch/verification/community-learning-enhanced.png' });
});
