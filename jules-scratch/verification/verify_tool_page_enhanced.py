from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000/tools/business-intelligence")
    page.screenshot(path="jules-scratch/verification/tool-page-enhanced.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
