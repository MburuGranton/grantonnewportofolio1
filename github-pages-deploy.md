# Deploying Your Portfolio to GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages, making it accessible online for free.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "portfolio")
4. Make it public
5. Click "Create repository"

## Step 2: Initialize Git in Your Project

If you haven't already set up Git in your project:

```bash
git init
git add .
git commit -m "Initial commit"
```

## Step 3: Connect Your Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY_NAME` with your repository name.

## Step 4: Update the Deployment Script

Make sure to update the `deploy-gh-pages.js` file with your GitHub username and repository name:

```javascript
// Change these values to your own GitHub information
const GITHUB_USERNAME = 'YOUR_USERNAME'; // Replace with your GitHub username
const REPO_NAME = 'YOUR_REPOSITORY_NAME'; // Replace with your repository name
```

## Step 5: Run the Deployment Script

```bash
./deploy.sh
```

This will:
1. Build your project
2. Deploy it to the `gh-pages` branch of your repository

## Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be published at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`.

## Updating Your Site

Whenever you make changes to your site:

1. Commit your changes to your main branch:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. Run the deployment script again:
   ```bash
   ./deploy.sh
   ```

Your updated site will be deployed to GitHub Pages.

## Troubleshooting

- **First deployment not showing up?** It can take up to 10 minutes for your site to appear after the first deployment.
- **Seeing a 404 error?** Make sure your repository is public and that GitHub Pages is enabled in your repository settings.
- **Styles or assets missing?** Ensure all paths in your code are relative and don't start with a forward slash.