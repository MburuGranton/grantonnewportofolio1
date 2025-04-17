// Simple script to deploy to GitHub Pages
import ghpages from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Building and deploying to GitHub Pages...');

// Change these values to your own GitHub information
const GITHUB_USERNAME = 'grantonmuru'; // Replace with your GitHub username
const REPO_NAME = 'portfolio'; // Replace with your repository name 
const BRANCH = 'gh-pages';

// We'll use the default GitHub URL format, no need to specify the full repo URL
const DIST_FOLDER = path.join(__dirname, 'dist');

// Options for gh-pages
const options = {
  branch: BRANCH,
  dotfiles: true,
  message: 'Deploy to GitHub Pages [automated]',
};

// Deploy
ghpages.publish(DIST_FOLDER, options, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('✅ Deployment successful!');
  console.log(`🌐 View your website at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}`);
  console.log('');
  console.log('⚠️ NOTE: First deployment may take a few minutes to become available.');
  console.log('   You can check the GitHub Pages settings in your repository settings.');
});