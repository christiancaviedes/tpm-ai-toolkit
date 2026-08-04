// Scrape a Zillow listing's data + hi-res photo URLs using the bundled Chromium.
// Usage: node scrape-zillow.js <listing-url> <out-dir>
// Writes: <out-dir>/listing.json (facts + photo URLs). Photo download happens separately.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const URL_ARG = process.argv[2];
const OUT_DIR = process.argv[3] || '.';
const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

(async () => {
  const browser = await chromium.launch({
    executablePath: fs.existsSync(EXEC) ? EXEC : undefined,
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--no-sandbox',
      '--disable-dev-shm-usage',
    ],
  });
  const ctx = await browser.newContext({
    userAgent: UA,
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    timezoneId: 'America/New_York',
  });
  await ctx.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
  });
  const page = await ctx.newPage();
  const resp = await page.goto(URL_ARG, { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('HTTP status:', resp && resp.status());
  await page.waitForTimeout(6000);

  const html = await page.content();
  fs.writeFileSync(path.join(OUT_DIR, 'page.html'), html);

  // Detect bot wall
  if (/px-captcha|perimeterx|Press & Hold|denied access|human verification/i.test(html)) {
    console.log('BOTWALL_DETECTED');
  }

  // 1) __NEXT_DATA__ blob
  let nextData = null;
  try {
    nextData = await page.evaluate(() => {
      const el = document.getElementById('__NEXT_DATA__');
      return el ? el.textContent : null;
    });
  } catch (e) {}
  if (nextData) fs.writeFileSync(path.join(OUT_DIR, 'next-data.json'), nextData);

  // 2) Regex sweep for photo CDN URLs anywhere in the document
  const urls = Array.from(new Set(
    (html.match(/https:\/\/photos\.zillowstatic\.com\/fp\/[A-Za-z0-9_-]+[^"'\\\s)]*/g) || [])
      .map(u => u.replace(/\\u002F/g, '/'))
  ));
  fs.writeFileSync(path.join(OUT_DIR, 'photo-urls-raw.json'), JSON.stringify(urls, null, 2));
  console.log('photo url candidates:', urls.length);

  // 3) Try to pull structured facts from embedded JSON (gdpClientCache inside __NEXT_DATA__)
  const facts = {};
  try {
    const nd = JSON.parse(nextData);
    const cacheStr = nd?.props?.pageProps?.componentProps?.gdpClientCache;
    if (cacheStr) {
      const cache = JSON.parse(cacheStr);
      const key = Object.keys(cache).find(k => /ForSale|Property|NotForSale/i.test(k)) || Object.keys(cache)[0];
      const prop = cache[key]?.property || {};
      Object.assign(facts, {
        address: prop.address,
        price: prop.price,
        homeStatus: prop.homeStatus,
        bedrooms: prop.bedrooms,
        bathrooms: prop.bathrooms,
        livingArea: prop.livingArea,
        yearBuilt: prop.yearBuilt,
        homeType: prop.homeType,
        description: prop.description,
        attributionInfo: prop.attributionInfo && {
          agentName: prop.attributionInfo.agentName,
          agentPhoneNumber: prop.attributionInfo.agentPhoneNumber,
          brokerName: prop.attributionInfo.brokerName,
        },
        photoCount: prop.photoCount,
        responsivePhotos: (prop.responsivePhotos || []).map(p => {
          const jpegs = p?.mixedSources?.jpeg || [];
          const best = jpegs.reduce((a, b) => ((b.width || 0) > (a.width || 0) ? b : a), jpegs[0] || {});
          return best.url;
        }).filter(Boolean),
      });
    }
  } catch (e) {
    console.log('facts parse fallback:', String(e).slice(0, 120));
  }
  fs.writeFileSync(path.join(OUT_DIR, 'listing.json'), JSON.stringify({ facts, rawPhotoUrls: urls }, null, 2));
  console.log('facts keys:', Object.keys(facts).join(',') || '(none)');
  console.log('hi-res photos from JSON:', (facts.responsivePhotos || []).length);

  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
