const { test, expect } = require('@playwright/test');

test('renders the automated financial suite page', async ({ page }) => {
  await page.goto('http://localhost:3000/tools/financial-suite');
  await expect(page.locator('h1')).toHaveText('Automated Financial Suite');
  await page.screenshot({ path: 'jules-scratch/verification/automated-financial-suite-enhanced.png' });
});
