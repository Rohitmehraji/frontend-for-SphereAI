
import { test, expect } from '@playwright/test';

test('Talent & HR Optimization page verification', async ({ page }) => {
  await page.goto('http://localhost:3000/tools/talent-hr');
  await expect(page.locator('h1')).toContainText('Talent & HR Optimization');
  await page.screenshot({ path: 'jules-scratch/verification/talent-hr-enhanced.png' });
});
