/**
 * Environment Setup Verification Script
 * 
 * This script checks if all required environment variables are properly configured
 * Run with: node scripts/verify-setup.js
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

config({ path: envPath });

console.log('🔍 Verifying Admin System Setup...\n');

const requiredVars = ['JWT_SECRET', 'ADMIN_USERNAME', 'ADMIN_PASSWORD_HASH'];
const errors = [];
const warnings = [];

// Check if .env file exists
try {
  const fs = await import('fs');
  const path = await import('path');
  const envPath = path.join(process.cwd(), '.env');
  
  if (!fs.existsSync(envPath)) {
    errors.push('❌ .env file not found. Copy .env.example to .env and configure it.');
  } else {
    console.log('✅ .env file found');
  }
} catch (error) {
  warnings.push('⚠️  Could not check .env file existence');
}

// Check environment variables
console.log('\n📋 Checking Environment Variables:\n');

requiredVars.forEach(varName => {
  const value = process.env[varName];
  
  if (!value) {
    errors.push(`❌ ${varName} is not set`);
  } else {
    console.log(`✅ ${varName} is set`);
    
    // Additional validation
    if (varName === 'JWT_SECRET' && value.length < 32) {
      warnings.push(`⚠️  JWT_SECRET should be at least 32 characters (current: ${value.length})`);
    }
    
    if (varName === 'ADMIN_PASSWORD_HASH' && !value.startsWith('$2a$') && !value.startsWith('$2b$') && !value.startsWith('$2y$')) {
      warnings.push('⚠️  ADMIN_PASSWORD_HASH should be a bcrypt hash (starts with $2a$, $2b$, or $2y$)');
    }
  }
});

// Check dependencies
console.log('\n📦 Checking Dependencies:\n');

try {
  await import('bcryptjs');
  console.log('✅ bcryptjs installed');
} catch {
  errors.push('❌ bcryptjs not installed. Run: npm install');
}

try {
  await import('jose');
  console.log('✅ jose installed');
} catch {
  errors.push('❌ jose not installed. Run: npm install');
}

try {
  await import('@astrojs/vercel/serverless');
  console.log('✅ @astrojs/vercel installed');
} catch {
  errors.push('❌ @astrojs/vercel not installed. Run: npm install');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('VERIFICATION SUMMARY');
console.log('='.repeat(60) + '\n');

if (errors.length === 0 && warnings.length === 0) {
  console.log('🎉 All checks passed! Your admin system is ready to use.\n');
  console.log('Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Visit: http://localhost:4321/admin/login');
  console.log('3. Login with your credentials\n');
} else {
  if (errors.length > 0) {
    console.log('🚨 ERRORS FOUND:\n');
    errors.forEach(err => console.log(err));
    console.log('');
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:\n');
    warnings.forEach(warn => console.log(warn));
    console.log('');
  }
  
  console.log('Please fix the issues above and run this script again.\n');
  process.exit(1);
}
