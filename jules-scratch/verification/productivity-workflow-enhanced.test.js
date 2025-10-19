
import { test, expect } from '@playwright/test';

test.describe('Enhanced Productivity & Workflow Page', () => {
  test('should render the enhanced productivity page and capture a screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000/tools/productivity-workflow');

    // Wait for the main heading to be visible
    await expect(page.locator('h1')).toHaveText('Productivity & Workflow Orchestration');

    // Wait for the "Generate Document" button to be visible
    await expect(page.locator('button:has-text("Generate Document")')).toBeVisible();

    // Give animations time to complete for a stable screenshot
    await page.waitForTimeout(1500);

    await page.screenshot({
      path: 'jules-scratch/verification/productivity-workflow-enhanced.png',
      fullPage: true
    });
  });
});
