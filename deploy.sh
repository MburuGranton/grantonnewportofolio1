#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create or update a deployment branch
echo "Creating deployment branch..."
git checkout -b gh-pages

# Copy the build files to the deployment branch
echo "Copying build files..."
cp -r dist/* .

# Add all files to git
echo "Adding files to git..."
git add .

# Commit the changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
echo "Pushing to GitHub..."
git push -f origin gh-pages

# Go back to the main branch
echo "Returning to main branch..."
git checkout main

echo "Deployment complete! Your site should be available at: https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"