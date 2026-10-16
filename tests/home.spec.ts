import { test, expect, type Page } from '@playwright/test';

const PLAY_SERIES = ['PlaySysDesigner', 'PlayGrua', 'PlayKids', 'PlayPiano'];
const OWN_PRODUCTS = ['SkyPulse', ...PLAY_SERIES];
const SKILL_AREAS = 8;

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

test('play series games live in their own section reachable from the nav', async ({ page }) => {
  await page.goto('/');

  const playSection = page.locator('section#play');
  await expect(page.locator('.nav-menu a[href="#play"]')).toHaveCount(1);
  for (const name of PLAY_SERIES) {
    await expect(playSection.getByRole('heading', { name, exact: true })).toHaveCount(1);
  }
  await expect(playSection.locator('.feature')).toHaveCount(PLAY_SERIES.length);
});

test('skills are grouped by area with the core areas featured', async ({ page }) => {
  await page.goto('/');

  const tiles = page.locator('#skills .skill-tile');
  await expect(tiles).toHaveCount(SKILL_AREAS);
  await expect(page.locator('#skills .skill-tile--featured h3')).toHaveText(['Data Platform', 'Cloud Platforms']);
  for (const tile of await tiles.all()) {
    await expect(tile.locator('.skill').first()).toBeVisible();
  }
});

test('page has no horizontal overflow', async ({ page }) => {
  await page.goto('/');

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

  expect(overflow).toBeLessThanOrEqual(0);
});
