const { test, expect } = require('@playwright/test');

test('renders the sales & marketing automation page', async ({ page }) => {
  await page.goto('http://localhost:3000/tools/sales-marketing');
  await expect(page.locator('h1')).toHaveText('Sales & Marketing Automation');
  await page.screenshot({ path: 'jules-scratch/verification/sales-marketing-enhanced.png' });
});
