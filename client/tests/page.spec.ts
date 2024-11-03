import { test, expect } from "@playwright/test";

test("should has heading element", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("heading")).toContainText("Hello World!");
});
