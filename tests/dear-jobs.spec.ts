import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the recommended jobs on initial load", async ({ page }) => {
  await expect(page).toHaveTitle(/Dear Jobs/);
  await expect(page.locator(".job")).toHaveCount(6);
  await expect(page.locator("#resultCount")).toHaveText("6 matches");
  await expect(page.getByRole("heading", { name: "Senior SDET" })).toBeVisible();
});

test("searches by role and location", async ({ page }) => {
  await page.getByLabel("Role or skills").fill("Playwright");
  await page.getByLabel("Location").fill("Jersey City");
  await page.getByRole("button", { name: "Search Jobs" }).click();

  await expect(page.locator(".job")).toHaveCount(1);
  await expect(page.locator("#resultCount")).toHaveText("1 matches");
  await expect(page.getByRole("heading", { name: "Senior SDET" })).toBeVisible();
  await expect(page.getByRole("status")).toHaveText("Search results updated");
});

test("applies and toggles a quick filter", async ({ page }) => {
  const remoteFilter = page.getByRole("button", { name: "Remote", exact: true });

  await remoteFilter.click();
  await expect(remoteFilter).toHaveClass(/active/);
  await expect(page.locator(".job")).toHaveCount(2);
  await expect(page.locator("#resultCount")).toHaveText("2 matches");

  await remoteFilter.click();
  await expect(remoteFilter).not.toHaveClass(/active/);
  await expect(page.locator(".job")).toHaveCount(6);
});

test("clears search values and active filters", async ({ page }) => {
  await page.getByLabel("Role or skills").fill("Java");
  await page.getByRole("button", { name: "Hybrid", exact: true }).click();
  await page.getByRole("button", { name: "Search Jobs" }).click();
  await expect(page.locator(".job")).toHaveCount(1);

  await page.getByRole("button", { name: "Clear filters" }).click();

  await expect(page.getByLabel("Role or skills")).toHaveValue("");
  await expect(page.locator(".chip.active")).toHaveCount(0);
  await expect(page.locator(".job")).toHaveCount(6);
});

test("saves a job and shows only saved jobs", async ({ page }) => {
  await page.getByRole("button", { name: "Save Senior SDET" }).click();

  await expect(page.locator("#savedCount")).toHaveText("1");
  await expect(page.getByRole("status")).toHaveText("Job saved");

  await page.getByRole("button", { name: /Saved 1/ }).click();

  await expect(page.locator(".job")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "Senior SDET" })).toBeVisible();
  await expect(page.getByRole("status")).toHaveText("1 saved jobs shown");
});

test("opens the application tracker", async ({ page }) => {
  await page.getByRole("link", { name: "My Applications" }).click();

  await expect(
    page.getByRole("heading", { name: "Keep every opportunity moving" }),
  ).toBeVisible();
  await expect(page.locator("#jobs-view")).not.toHaveClass(/active/);
  await expect(page.locator("#tracker-view")).toHaveClass(/active/);

  await page.getByRole("button", { name: "Add application" }).click();
  await expect(page.getByRole("status")).toHaveText(
    "Demo application added to Interested",
  );
});
