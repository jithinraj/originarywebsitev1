#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common device dimensions for testing
const deviceSizes = [
  { name: 'iPhone SE', width: 375, height: 667, dpr: 2 },
  { name: 'iPhone 12/13/14', width: 390, height: 844, dpr: 3 },
  { name: 'iPhone 14 Pro Max', width: 430, height: 932, dpr: 3 },
  { name: 'Galaxy S21', width: 384, height: 854, dpr: 2.75 },
  { name: 'iPad', width: 768, height: 1024, dpr: 2 },
  { name: 'iPad Pro', width: 1024, height: 1366, dpr: 2 },
  { name: 'MacBook Pro 13"', width: 1280, height: 800, dpr: 2 },
  { name: 'MacBook Pro 14"', width: 1512, height: 982, dpr: 2 },
  { name: 'MacBook Pro 16"', width: 1728, height: 1117, dpr: 2 },
  { name: 'Windows Laptop (1366x768)', width: 1366, height: 768, dpr: 1 },
  { name: 'Windows Laptop (1440x900)', width: 1440, height: 900, dpr: 1 },
  { name: 'Windows Laptop (1536x864)', width: 1536, height: 864, dpr: 1.25 },
  { name: 'Windows Laptop (1920x1080)', width: 1920, height: 1080, dpr: 1 },
  { name: 'Windows Surface', width: 1368, height: 912, dpr: 1.5 },
  { name: 'Desktop 1080p', width: 1920, height: 1080, dpr: 1 },
  { name: 'Desktop 1440p', width: 2560, height: 1440, dpr: 1 },
  { name: 'Desktop 4K', width: 3840, height: 2160, dpr: 1 },
];

// Common Windows laptop resolutions that often have issues
const windowsProblematicSizes = [
  { name: 'Windows 1366x768 (Most Common)', width: 1366, height: 768, dpr: 1 },
  { name: 'Windows 1280x720', width: 1280, height: 720, dpr: 1 },
  { name: 'Windows 1440x900', width: 1440, height: 900, dpr: 1 },
  { name: 'Windows 1536x864 (125% scaling)', width: 1536, height: 864, dpr: 1.25 },
  { name: 'Windows 1600x900', width: 1600, height: 900, dpr: 1 },
];

function analyzeResponsiveBreakpoints() {
  console.log('🔍 RESPONSIVE DESIGN ANALYSIS');
  console.log('============================\n');

  console.log('📱 DEVICE COVERAGE:');
  deviceSizes.forEach(device => {
    const category = categorizeDevice(device);
    console.log(`${category.icon} ${device.name.padEnd(25)} ${device.width}x${device.height} (DPR: ${device.dpr})`);
  });

  console.log('\n🚨 WINDOWS LAPTOP FOCUS:');
  windowsProblematicSizes.forEach(device => {
    console.log(`💻 ${device.name.padEnd(30)} ${device.width}x${device.height} (DPR: ${device.dpr})`);
  });

  console.log('\n📊 BREAKPOINT COVERAGE:');
  analyzeBreakpoints();

  console.log('\n🎯 RECOMMENDATIONS:');
  generateRecommendations();
}

function categorizeDevice(device) {
  if (device.width < 480) return { icon: '📱', category: 'Mobile Small' };
  if (device.width < 768) return { icon: '📱', category: 'Mobile Large' };
  if (device.width < 1024) return { icon: '📟', category: 'Tablet' };
  if (device.width < 1440) return { icon: '💻', category: 'Laptop' };
  return { icon: '🖥️', category: 'Desktop' };
}

function analyzeBreakpoints() {
  const breakpoints = [
    { name: 'xs', min: 320, max: 479, description: 'Small phones' },
    { name: 'sm', min: 480, max: 639, description: 'Large phones' },
    { name: 'md', min: 640, max: 767, description: 'Small tablets' },
    { name: 'lg', min: 768, max: 1023, description: 'Tablets & small laptops' },
    { name: 'xl', min: 1024, max: 1279, description: 'Laptops' },
    { name: '2xl', min: 1280, max: Infinity, description: 'Large screens' },
  ];

  breakpoints.forEach(bp => {
    const devices = deviceSizes.filter(d => d.width >= bp.min && d.width <= bp.max);
    console.log(`${bp.name.padEnd(3)} (${bp.min}px+): ${bp.description} - ${devices.length} devices covered`);
  });
}

function generateRecommendations() {
  console.log('1. ✅ Use fluid typography with clamp() functions');
  console.log('2. ✅ Implement progressive grid layouts');
  console.log('3. ✅ Add Windows-specific font fallbacks');
  console.log('4. ✅ Use CSS Container Queries for component-level responsiveness');
  console.log('5. ✅ Test on 1366x768 resolution (most common Windows laptop)');
  console.log('6. ✅ Ensure touch targets are 44px minimum');
  console.log('7. ✅ Use relative units (rem, em, %) over fixed pixels');
  console.log('8. ✅ Test with browser zoom at 125% and 150%');
}

function generateTestHTML() {
  console.log('\n🧪 GENERATING RESPONSIVE TEST PAGE...');

  const testHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Test - Originary</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
        .device-info { position: fixed; top: 10px; right: 10px; background: #000; color: #fff; padding: 10px; border-radius: 5px; font-size: 12px; z-index: 1000; }
        .test-section { margin: 20px 0; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
        .grid-test { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .card { background: #f5f5f5; padding: 20px; border-radius: 8px; }
        @media (max-width: 767px) { .grid-test { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="device-info" id="deviceInfo"></div>

    <h1>Responsive Design Test</h1>

    <div class="test-section">
        <h2>Grid Layout Test</h2>
        <div class="grid-test">
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
        </div>
    </div>

    <div class="test-section">
        <h2>Typography Test</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Regular paragraph text that should wrap properly on all devices.</p>
    </div>

    <script>
        function updateDeviceInfo() {
            const info = document.getElementById('deviceInfo');
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            info.textContent = \`\${width}x\${height} (DPR: \${dpr})\`;
        }

        updateDeviceInfo();
        window.addEventListener('resize', updateDeviceInfo);
    </script>
</body>
</html>`;

  const testPath = path.join(__dirname, '..', 'public', 'responsive-test.html');
  fs.writeFileSync(testPath, testHTML);
  console.log(`✅ Test page created: ${testPath}`);
  console.log('📋 Access it at: http://localhost:3000/responsive-test.html');
}

// Run the analysis
if (require.main === module) {
  analyzeResponsiveBreakpoints();
  generateTestHTML();

  console.log('\n🎯 NEXT STEPS:');
  console.log('1. Open http://localhost:3000/responsive-test.html');
  console.log('2. Test on different devices and screen sizes');
  console.log('3. Use browser dev tools to simulate various devices');
  console.log('4. Pay special attention to 1366x768 Windows laptops');
  console.log('5. Test with browser zoom at 125% and 150%');
}

module.exports = { analyzeResponsiveBreakpoints, deviceSizes, windowsProblematicSizes };