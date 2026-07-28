import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the recommended jobs on initial load", async ({ page }) => {
  await expect(page).toHaveTitle(/Dear Jobs/);
  await expect(page.locator(".job")).toHaveCount(56);
  await expect(page.locator("#resultCount")).toHaveText("56 matches");
  await expect(page.getByRole("heading", { name: "Senior SDET" })).toBeVisible();
  const firstJob = page.locator(".job").first();
  await expect(firstJob.locator(".description")).toContainText(
    "Northstar Financial is seeking a Senior SDET",
  );
  await expect(firstJob.locator(".recruiter")).toContainText("Avery Johnson");
  await expect(
    firstJob.getByRole("link", { name: /Email Avery Johnson/ }),
  ).toHaveAttribute(
    "href",
    "mailto:avery.johnson@northstarfinancial.example",
  );
});

test("provides working links for every job card", async ({ page }) => {
  await expect(page.locator(".job .job-link")).toHaveCount(56);
  await expect(page.locator(".job .company-link")).toHaveCount(56);
  await expect(page.locator(".job .apply-link")).toHaveCount(56);
  await expect(page.locator(".job .recruiter a[href^='mailto:']")).toHaveCount(56);

  await page.locator(".job .job-link").first().click();
  await expect(page.locator("#detail-view")).toHaveClass(/active/);
  await expect(
    page.getByRole("heading", { name: "Senior SDET", level: 1 }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Company careers" }).click();
  await expect(
    page.getByRole("heading", { name: "Northstar Financial", level: 1 }),
  ).toBeVisible();

  await page.getByRole("link", { name: "View Senior SDET" }).click();
  await page.getByRole("link", { name: "Apply now" }).click();
  await expect(
    page.getByRole("heading", { name: "Apply for Senior SDET", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Start application email" }),
  ).toHaveAttribute("href", /mailto:avery\.johnson@northstarfinancial\.example/);

  await page.getByRole("link", { name: "Back to jobs" }).click();
  await expect(page.locator("#jobs-view")).toHaveClass(/active/);
});

test("shows complete detail statements for all 56 jobs", async ({ page }) => {
  test.setTimeout(60_000);
  await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

  for (let index = 0; index < 56; index += 1) {
    await page.locator(".job .job-link").nth(index).click();

    await expect(
      page.getByRole("heading", { name: "Key responsibilities" }),
    ).toBeVisible();
    await expect(
      page
        .locator(".detail-section")
        .filter({ hasText: "Key responsibilities" })
        .locator("li"),
    ).toHaveCount(3);
    await expect(
      page
        .locator(".detail-section")
        .filter({ hasText: "Required qualifications" })
        .locator("li"),
    ).toHaveCount(3);
    await expect(
      page
        .locator(".detail-section")
        .filter({ hasText: "Preferred experience" })
        .locator("li"),
    ).toHaveCount(3);

    await page.getByRole("link", { name: "Back to jobs" }).click();
  }
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

test("suggests and selects available job locations", async ({ page }) => {
  const location = page.getByRole("combobox", { name: "Location" });

  await location.fill("New");
  await expect(location).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("listbox", { name: "Available cities" }),
  ).toBeVisible();
  await expect(page.getByRole("option")).toHaveCount(3);

  await page.getByRole("option", { name: /New York, NY/ }).click();
  await expect(location).toHaveValue("New York, NY");
  await expect(location).toHaveAttribute("aria-expanded", "false");

  await page.getByRole("button", { name: "Search Jobs" }).click();
  await expect(page.locator(".job")).toHaveCount(2);
  await expect(page.locator("#resultCount")).toHaveText("2 matches");

  await page.getByRole("button", { name: "Clear filters" }).click();
  await location.fill("San");
  await location.press("ArrowDown");
  await location.press("Enter");
  await expect(location).toHaveValue(/^San /);
  await expect(location).toHaveAttribute("aria-expanded", "false");
});

test("applies and toggles a quick filter", async ({ page }) => {
  const remoteFilter = page.getByRole("button", { name: "Remote", exact: true });

  await remoteFilter.click();
  await expect(remoteFilter).toHaveClass(/active/);
  await expect(page.locator(".job")).toHaveCount(12);
  await expect(page.locator("#resultCount")).toHaveText("12 matches");

  await remoteFilter.click();
  await expect(remoteFilter).not.toHaveClass(/active/);
  await expect(page.locator(".job")).toHaveCount(56);
});

test("separates work authorization from H-1B transfer eligibility", async ({
  page,
}) => {
  const seniorSdet = page.locator(".job").filter({ hasText: "Senior SDET" });
  await expect(seniorSdet.locator(".eligibility")).toContainText(
    "H-1B transfer available",
  );

  const projectManager = page
    .locator(".job")
    .filter({ hasText: "Technical Project Manager" });
  await expect(projectManager.locator(".eligibility")).toContainText(
    "No H-1B sponsorship",
  );

  await page.getByRole("button", { name: "H-1B", exact: true }).click();
  await expect(page.locator(".job")).not.toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Senior SDET" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Full Stack Developer" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Technical Project Manager" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "ERP Program Manager" }),
  ).toHaveCount(0);

  await page.getByRole("button", { name: "US Citizen", exact: true }).click();
  await expect(page.locator(".job")).toHaveCount(56);
  await page.getByRole("button", { name: "Green Card", exact: true }).click();
  await expect(page.locator(".job")).toHaveCount(56);
  await page.getByRole("button", { name: "EAD", exact: true }).click();
  await expect(page.locator(".job")).toHaveCount(56);
});

test("clears search values and active filters", async ({ page }) => {
  await page.getByLabel("Role or skills").fill("Java");
  await page.getByRole("button", { name: "Hybrid", exact: true }).click();
  await page.getByRole("button", { name: "Search Jobs" }).click();
  await expect(page.locator(".job")).toHaveCount(6);

  await page.getByRole("button", { name: "Clear filters" }).click();

  await expect(page.getByLabel("Role or skills")).toHaveValue("");
  await expect(page.locator(".chip.active")).toHaveCount(0);
  await expect(page.locator(".job")).toHaveCount(56);
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
