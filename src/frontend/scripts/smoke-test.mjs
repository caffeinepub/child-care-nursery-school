#!/usr/bin/env node

/**
 * Smoke Test for Child Care Nursery School Production Deployment
 * 
 * Verifies that all critical routes and assets load correctly in production.
 * 
 * Usage:
 *   node smoke-test.mjs <base-url>
 * 
 * Example:
 *   node smoke-test.mjs https://abc123-xyz789.ic0.app
 */

const BASE_URL = process.argv[2];

if (!BASE_URL) {
  console.error('❌ Error: Base URL is required');
  console.error('Usage: node smoke-test.mjs <base-url>');
  console.error('Example: node smoke-test.mjs https://abc123-xyz789.ic0.app');
  process.exit(1);
}

// Remove trailing slash
const baseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

console.log('🧪 Starting smoke test for Child Care Nursery School');
console.log(`📍 Base URL: ${baseUrl}\n`);

const tests = [
  {
    name: 'Homepage',
    url: '/',
    expectedText: 'Child Care Nursery School',
  },
  {
    name: 'Learn More Page',
    url: '/learn-more',
    expectedText: 'Learn More',
  },
  {
    name: 'Special Event Page',
    url: '/special-event',
    expectedText: 'Annual Fete',
  },
  {
    name: 'School Logo Asset',
    url: '/assets/generated/school-logo.dim_512x512.png',
    isAsset: true,
  },
];

let passed = 0;
let failed = 0;

async function runTest(test) {
  const url = `${baseUrl}${test.url}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`❌ ${test.name}: HTTP ${response.status}`);
      console.error(`   URL: ${url}`);
      failed++;
      return;
    }
    
    if (test.isAsset) {
      // For assets, just check status code
      console.log(`✅ ${test.name}: OK (${response.status})`);
      passed++;
      return;
    }
    
    // For HTML pages, check content
    const text = await response.text();
    
    if (test.expectedText && !text.includes(test.expectedText)) {
      console.error(`❌ ${test.name}: Expected text not found`);
      console.error(`   Expected: "${test.expectedText}"`);
      console.error(`   URL: ${url}`);
      failed++;
      return;
    }
    
    console.log(`✅ ${test.name}: OK (${response.status})`);
    passed++;
    
  } catch (error) {
    console.error(`❌ ${test.name}: ${error.message}`);
    console.error(`   URL: ${url}`);
    failed++;
  }
}

async function runAllTests() {
  for (const test of tests) {
    await runTest(test);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(50));
  
  if (failed > 0) {
    console.error('\n❌ Smoke test failed. Please review the errors above.');
    process.exit(1);
  } else {
    console.log('\n✅ All smoke tests passed! Deployment looks good.');
    process.exit(0);
  }
}

runAllTests();
