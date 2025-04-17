# GitHub Pages Deployment Guide

Follow these steps to deploy your portfolio website to GitHub Pages:

## 1. Create a GitHub Repository
- Go to [GitHub](https://github.com) and sign in to your account
- Click on the "+" icon in the top-right corner and select "New repository"
- Name your repository (e.g., "portfolio-website")
- Choose if you want it public or private
- Click "Create repository"

## 2. Configure Git
```bash
# Set your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Connect your local repository to GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

## 3. Push Your Code to GitHub
```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

## 4. Deploy Static Files to GitHub Pages

After pushing your code to GitHub:

1. Go to your repository on GitHub
2. Go to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. Choose a workflow template for "Static HTML"
5. Customize the workflow file as needed to build your project
6. Commit the workflow file

## 5. Custom Build for GitHub Pages

For a React application deployed to GitHub Pages at a non-root URL, you'll need to:

1. Create a `.github/workflows/static.yml` workflow file with appropriate build commands
2. Configure your application to handle the repository name in URLs

## Example GitHub Actions Workflow File

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire built files from dist/public
          path: './dist/public'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Important Notes

1. **Base Path**: When your site is deployed to a subdirectory like `username.github.io/repository-name`, links in your application need to account for this base path.

2. **Routing**: For single-page applications with client-side routing, you may need a 404.html redirect pattern to support direct URL access.

3. **Assets**: Make sure all your assets use relative paths or paths that include the repository name.

Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME` once deployment is complete.