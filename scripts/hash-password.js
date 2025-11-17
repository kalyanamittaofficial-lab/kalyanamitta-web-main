/**
 * Password Hash Generator Script
 * 
 * Usage: node scripts/hash-password.js your_password_here
 * 
 * This script generates a bcrypt hash for your admin password.
 * Use the output in your .env file as ADMIN_PASSWORD_HASH
 */

import bcrypt from 'bcryptjs';

const password = process.argv[2];

if (!password) {
  console.error('❌ Error: Please provide a password');
  console.log('Usage: node scripts/hash-password.js your_password_here');
  process.exit(1);
}

if (password.length < 8) {
  console.warn('⚠️  Warning: Password should be at least 8 characters long');
}

async function hashPassword() {
  console.log('🔐 Generating password hash...\n');
  
  const hash = await bcrypt.hash(password, 12);
  
  console.log('✅ Hash generated successfully!\n');
  console.log('Copy this value to your .env file:\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
  console.log('⚠️  Keep this hash secure and never share it publicly!');
}

hashPassword();
