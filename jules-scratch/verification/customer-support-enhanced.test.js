
import { test, expect } from '@playwright/test';

test.describe('Enhanced Customer Support Page', () => {
  test('should render the enhanced customer support page and capture a screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000/tools/customer-support');

    // Wait for the main heading to be visible
    await expect(page.locator('h1')).toHaveText('Customer Support Automation');

    // Wait for a specific element within the animated container to be ready
    await expect(page.locator('input[placeholder="Type your message..."]')).toBeVisible();

    // Give animations time to complete for a stable screenshot
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: 'jules-scratch/verification/customer-support-enhanced.png',
      fullPage: true
    });
  });
});
