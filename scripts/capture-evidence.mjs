import { chromium } from 'playwright';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const urls = JSON.parse(fs.readFileSync('./scripts/evidence-urls.json', 'utf8'));
const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const evidenceDir = `evidence/${timestamp}`;

// Create evidence directory
fs.mkdirSync(evidenceDir, { recursive: true });

async function captureEvidence() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const evidence = [];

  for (const url of urls) {
    try {
      console.log(`Capturing: ${url}`);

      // Navigate to page
      await page.goto(url, { waitUntil: 'networkidle' });

      // Wait a bit for any dynamic content
      await page.waitForTimeout(2000);

      const urlSafe = url.replace(/[^a-zA-Z0-9]/g, '_');

      // Capture screenshot (PNG)
      const screenshotPath = `${evidenceDir}/${urlSafe}.png`;
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      // Capture page content (HTML)
      const content = await page.content();
      const htmlPath = `${evidenceDir}/${urlSafe}.html`;
      fs.writeFileSync(htmlPath, content);

      // Capture as PDF
      const pdfPath = `${evidenceDir}/${urlSafe}.pdf`;
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true
      });

      // Calculate hashes
      const screenshotHash = crypto.createHash('sha256').update(fs.readFileSync(screenshotPath)).digest('hex');
      const htmlHash = crypto.createHash('sha256').update(content).digest('hex');
      const pdfHash = crypto.createHash('sha256').update(fs.readFileSync(pdfPath)).digest('hex');

      evidence.push({
        url,
        timestamp: new Date().toISOString(),
        files: {
          screenshot: { path: screenshotPath, hash: screenshotHash },
          html: { path: htmlPath, hash: htmlHash },
          pdf: { path: pdfPath, hash: pdfHash }
        }
      });

    } catch (error) {
      console.error(`Error capturing ${url}:`, error.message);
    }
  }

  await browser.close();

  // Write evidence index
  const indexPath = `${evidenceDir}/index.json`;
  fs.writeFileSync(indexPath, JSON.stringify(evidence, null, 2));

  // Create CSV summary
  const csvLines = [
    'URL,Timestamp,Screenshot Hash,HTML Hash,PDF Hash'
  ];

  evidence.forEach(item => {
    csvLines.push([
      item.url,
      item.timestamp,
      item.files.screenshot.hash,
      item.files.html.hash,
      item.files.pdf.hash
    ].join(','));
  });

  fs.writeFileSync(`${evidenceDir}/index.csv`, csvLines.join('\\n'));

  console.log(`\\nEvidence captured in: ${evidenceDir}`);
  console.log(`Total pages captured: ${evidence.length}`);
  console.log(`Evidence index: ${indexPath}`);
}

captureEvidence().catch(console.error);