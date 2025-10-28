
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = browser.new_page()

    try:
        # Log in
        page.goto("http://localhost:3000/login")
        page.fill('input[type="email"]', 'test@sphere.ai')
        page.fill('input[type="password"]', 'password')
        page.click('button:text("Sign In")')

        # Wait for dashboard and verify
        page.wait_for_url("http://localhost:3000/dashboard")
        dashboard_heading = page.locator('h1:text("Founder\'s Dashboard")')
        expect(dashboard_heading).to_be_visible()

        # Wait for charts to be visible to ensure data has loaded
        page.wait_for_selector('text=Revenue Growth')
        page.wait_for_selector('text=User Growth')

        page.screenshot(path="jules-scratch/verification/dashboard-live.png")
        print("Successfully verified login and dashboard.")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
