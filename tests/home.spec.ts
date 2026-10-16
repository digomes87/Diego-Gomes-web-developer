import { test, expect, type Page } from '@playwright/test';

const OWN_PRODUCTS = ['SkyPulse', 'PlaySysDesigner', 'PlayGrua', 'PlayKids'];

function collectLocalFailures(page: Page): string[] {
  const failures: string[] = [];
  page.on('response', (response) => {
    const isLocal = response.url().startsWith('http://127.0.0.1');
    if (isLocal && response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
  });
  return failures;
}

function collectScriptErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  return errors;
}

test('home page loads without broken local assets or script errors', async ({ page }) => {
  const failures = collectLocalFailures(page);
  const errors = collectScriptErrors(page);

  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.locator('h1')).toBeVisible();
  expect(failures).toEqual([]);
  expect(errors).toEqual([]);
});

test('own products are featured with live and source links', async ({ page }) => {
  await page.goto('/');

  for (const name of OWN_PRODUCTS) {
    const feature = page.locator('.feature', { has: page.getByRole('heading', { name, exact: true }) });
    await expect(feature).toHaveCount(1);
    await expect(feature.locator(`a[href="https://github.com/digomes87/${name}"]`)).toHaveCount(1);
    await expect(feature.locator(`a.feature-button-primary[href="https://digomes87.github.io/${name}/"]`)).toHaveCount(1);
  }
});

test('page has no horizontal overflow', async ({ page }) => {
  await page.goto('/');

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

  expect(overflow).toBeLessThanOrEqual(0);
});
