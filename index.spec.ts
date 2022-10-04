import { test, expect } from "@playwright/test";

test("index", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h1")).toContainText("Welcome to");
});
