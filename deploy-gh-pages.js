// Simple script to deploy to GitHub Pages
import ghpages from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Building and deploying to GitHub Pages...');

// You need to replace these values with your own
const GITHUB_REPO = 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git';
const BRANCH = 'gh-pages';
const DIST_FOLDER = path.join(__dirname, '/dist/public');

// Options for gh-pages
const options = {
  repo: GITHUB_REPO,
  branch: BRANCH,
  dotfiles: true,
  message: 'Deploy to GitHub Pages [automated]',
  user: {
    name: 'GitHub Pages Deployment',
    email: 'your-email@example.com'
  }
};

// Deploy
ghpages.publish(DIST_FOLDER, options, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    return;
  }
  console.log('Deployment successful!');
  console.log(`View your website at: https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`);
});