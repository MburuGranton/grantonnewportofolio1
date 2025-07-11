# Portfolio Website Project

## Overview
A modern, responsive personal portfolio website showcasing Granton Mburu's professional journey, skills, and creative projects. Built with React.js, Tailwind CSS, and integrated with Contentful CMS for dynamic content management.

## Stack
- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **CMS**: Contentful for blog content management
- **Deployment**: Optimized for Vercel, GitHub Pages, and Replit
- **Theme**: Dark/light mode toggle
- **Architecture**: Component-based with TypeScript

## Recent Changes
- **January 2025**: Optimized application for Vercel deployment
  - Created `vercel.json` configuration
  - Added serverless API functions in `/api` directory
  - Created Vercel deployment guide (`vercel-deploy.md`)
  - Converted contact form to serverless function
  - Added build optimization scripts

- **Previous**: Integrated Contentful CMS
  - Connected to user's Contentful space
  - Added environment variables for secure API access
  - Created fallback to static content when Contentful unavailable
  - Added loading states and error handling

## Project Architecture
- `client/` - React frontend application
- `server/` - Express.js backend (for local development)
- `api/` - Serverless functions for Vercel deployment
- `shared/` - Shared TypeScript schemas
- `dist/` - Built application output

## Deployment Options
1. **Vercel** (Recommended)
   - Optimized configuration with serverless functions
   - Automatic HTTPS and global CDN
   - Continuous deployment from Git

2. **GitHub Pages**
   - Static site deployment
   - Custom deployment scripts provided

3. **Replit**
   - Development environment with live preview
   - Direct deployment option available

## User Preferences
- Prefers clear, step-by-step instructions
- Uses Windows PowerShell for local development
- Wants multiple deployment options available
- Values performance and modern web practices