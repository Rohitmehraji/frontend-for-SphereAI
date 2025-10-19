from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    pages_to_capture = [
        {"url": "http://localhost:3000/signup", "name": "signup-page"},
        {"url": "http://localhost:3000/dashboard", "name": "dashboard-page"},
        {"url": "http://localhost:3000/tools/billing", "name": "billing-page"},
        {"url": "http://localhost:3000/tools/ai-business-hub", "name": "ai-business-hub-page"},
        {"url": "http://localhost:3000/tools/financial-suite", "name": "financial-suite-page"},
        {"url": "http://localhost:3000/tools/sales-marketing", "name": "sales-marketing-page"},
        {"url": "http://localhost:3000/tools/customer-support", "name": "customer-support-page"},
        {"url": "http://localhost:3000/tools/productivity-workflow", "name": "productivity-workflow-page"},
        {"url": "http://localhost:3000/tools/talent-hr", "name": "talent-hr-page"},
    ]

    for page_info in pages_to_capture:
        page.goto(page_info["url"])
        page.screenshot(path=f"jules-scratch/verification/{page_info['name']}.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
