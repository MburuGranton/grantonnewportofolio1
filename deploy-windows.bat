@echo off
echo =========================================
echo   Deploying Portfolio to GitHub Pages
echo =========================================

echo 🔨 Step 1: Building the project...
call npx vite build
if %ERRORLEVEL% NEQ 0 (
  echo ❌ Build failed. Aborting deployment.
  exit /b 1
)
echo ✅ Build successful!

echo.
echo 🚀 Step 2: Deploying to GitHub Pages...
node deploy-gh-pages.js

echo.
echo 📋 Next Steps:
echo 1. If this is your first deployment, go to your GitHub repository
echo 2. Navigate to Settings ^> Pages
echo 3. Ensure the source is set to 'gh-pages' branch
echo 4. Your site will be available at https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME
echo.
echo Remember to update your GitHub username and repository name in deploy-gh-pages.js if needed.
echo =========================================