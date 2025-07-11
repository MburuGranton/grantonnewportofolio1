#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔨 Building for Vercel deployment...');

// Build the Vite client
console.log('📦 Building client...');
execSync('npx vite build', { stdio: 'inherit' });

// Copy server files to api directory for Vercel serverless functions
console.log('📁 Preparing serverless functions...');
const serverDir = 'server';
const apiDir = 'api';

// Ensure api directory exists
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Copy and adapt server files
if (fs.existsSync(path.join(serverDir, 'routes.ts'))) {
  const routesContent = fs.readFileSync(path.join(serverDir, 'routes.ts'), 'utf8');
  
  // Extract contact route and convert to Vercel API format
  const contactHandler = `import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Log the contact form submission
  console.log('Contact form submission:', {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  });

  return res.status(200).json({
    message: 'Thank you for your message! I will get back to you soon.',
    success: true
  });
}`;

  fs.writeFileSync(path.join(apiDir, 'contact.ts'), contactHandler);
}

console.log('✅ Build complete! Ready for Vercel deployment.');
console.log('');
console.log('📋 Next steps:');
console.log('1. Install Vercel CLI: npm i -g vercel');
console.log('2. Deploy: vercel --prod');
console.log('3. Add environment variables in Vercel dashboard:');
console.log('   - VITE_CONTENTFUL_SPACE_ID');
console.log('   - VITE_CONTENTFUL_ACCESS_TOKEN');