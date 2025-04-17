#!/bin/bash

# Display heading
echo "========================================="
echo "  Deploying Portfolio to GitHub Pages"
echo "========================================="

# Step 1: Build the project
echo "🔨 Step 1: Building the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting deployment."
  exit 1
fi
echo "✅ Build successful!"

# Step 2: Run the deployment script
echo ""
echo "🚀 Step 2: Deploying to GitHub Pages..."
node deploy-gh-pages.js

# Step 3: Instructions
echo ""
echo "📋 Next Steps:"
echo "1. If this is your first deployment, go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Ensure the source is set to 'gh-pages' branch"
echo "4. Your site will be available at https://grantonmuru.github.io/portfolio"
echo ""
echo "Remember to update your GitHub username and repository name in deploy-gh-pages.js if needed."
echo "========================================="