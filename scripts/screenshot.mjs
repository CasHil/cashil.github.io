import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  { name: '01_overview_light', path: '/', dark: false },
  { name: '02_overview_dark',  path: '/', dark: true  },
  { name: '03_work_light',     path: '/work-experience', dark: false },
  { name: '04_work_dark',      path: '/work-experience', dark: true  },
  { name: '05_education_light',path: '/education', dark: false },
  { name: '06_education_dark', path: '/education', dark: true  },
  { name: '07_about_light',    path: '/about', dark: false },
  { name: '08_about_dark',     path: '/about', dark: true  },
  { name: '09_cv_light',       path: '/cv', dark: false },
];

const BASE = 'http://localhost:5174';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  for (const route of ROUTES) {
    await page.goto(BASE + route.path, { waitUntil: 'networkidle' });

    if (route.dark) {
      await page.evaluate(() => document.documentElement.classList.add('dark'));
    } else {
      await page.evaluate(() => document.documentElement.classList.remove('dark'));
    }

    await page.waitForTimeout(800);

    const file = path.join(OUT, route.name + '.png');
    await page.screenshot({ path: file, fullPage: true });
    console.log('Saved:', file);
  }

  // Mobile viewport – overview both modes
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobile.newPage();
  await mPage.goto(BASE + '/', { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(800);
  await mPage.screenshot({ path: path.join(OUT, '10_overview_mobile_light.png'), fullPage: true });

  await mPage.evaluate(() => document.documentElement.classList.add('dark'));
  await mPage.waitForTimeout(400);
  await mPage.screenshot({ path: path.join(OUT, '11_overview_mobile_dark.png'), fullPage: true });
  console.log('Saved: mobile overviews');

  await browser.close();
  console.log('Done!');
})();
