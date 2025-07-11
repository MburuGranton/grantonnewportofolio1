# Deploying Your Portfolio to Vercel

This guide will help you deploy your React portfolio to Vercel with full-stack support.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Project

Your project is now optimized for Vercel deployment with:
- ✅ `vercel.json` configuration file
- ✅ Serverless API functions in `/api` directory
- ✅ Optimized build process

## Step 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Environment Variables**:
   - In your Vercel dashboard, go to Settings > Environment Variables
   - Add these variables:
     - `VITE_CONTENTFUL_SPACE_ID` = your Contentful space ID
     - `VITE_CONTENTFUL_ACCESS_TOKEN` = your Contentful access token

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site automatically

## Step 3: Deploy via Vercel CLI (Alternative)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**:
   ```bash
   vercel env add VITE_CONTENTFUL_SPACE_ID
   vercel env add VITE_CONTENTFUL_ACCESS_TOKEN
   ```

## Step 4: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Features Optimized for Vercel

✅ **Static Site Generation**: Your portfolio is built as a static site for optimal performance
✅ **Serverless Functions**: Contact form API endpoint deployed as serverless function
✅ **Automatic HTTPS**: SSL certificates handled automatically
✅ **Global CDN**: Your site is distributed globally for fast loading
✅ **Continuous Deployment**: Automatic deployments on Git push

## Troubleshooting

### Blank Screen Issue
If you see a blank screen after deployment:

1. **Check Vercel Build Logs**:
   - Go to your Vercel dashboard
   - Click on your project
   - Check the "Functions" and "Deployments" tabs for errors

2. **Verify Build Output**:
   - Make sure `dist/public/index.html` exists after build
   - Check that the build command completed successfully

3. **Fix Common Issues**:
   - Ensure `outputDirectory` in `vercel.json` points to `dist/public`
   - Remove any conflicting routing configurations
   - Make sure environment variables are set correctly

### Other Issues
- **Build fails**: Check that all dependencies are in `package.json`
- **Environment variables not working**: Ensure they're added in Vercel dashboard
- **API routes not working**: Check that functions are in the `/api` directory
- **Contentful content not loading**: Verify environment variables are set correctly

## Post-Deployment

After successful deployment:
- Your site will be available at `https://your-project-name.vercel.app`
- You can set up a custom domain in the Vercel dashboard
- Updates to your GitHub repository will trigger automatic redeployments