# Managing Your Portfolio Blog with Contentful

This guide will walk you through setting up Contentful as a Content Management System (CMS) for your portfolio blog, allowing you to add and update articles remotely without touching code.

## Step 1: Create a Contentful Account

1. Go to [Contentful](https://www.contentful.com/) and sign up for a free account
2. After signing up, create a new space for your portfolio blog

## Step 2: Create a Content Model

In Contentful, you'll need to create a content model that matches the structure expected by your website:

1. In your Contentful space, go to "Content model" and click "Add content type"
2. Name it "Blog Post" with API identifier `blogPost`
3. Add the following fields:

| Field Name | Field ID | Field Type | Required |
|------------|----------|------------|----------|
| Title | title | Short text | Yes |
| Slug | slug | Short text | Yes |
| Excerpt | excerpt | Long text | Yes |
| Featured Image | featuredImage | Media | Yes |
| Publish Date | publishDate | Date & time | Yes |
| Read Time | readTime | Short text | Yes |
| Category | category | Short text | Yes |
| Content | content | Rich text | Yes |

4. Save the content type

## Step 3: Add Sample Content

1. Go to "Content" and click "Add entry"
2. Choose the "Blog Post" content type
3. Fill in all the required fields:
   - **Title**: Your article title
   - **Slug**: URL-friendly version of the title (e.g., "my-first-article")
   - **Excerpt**: A brief summary of the article
   - **Featured Image**: Upload an image
   - **Publish Date**: Select the publication date
   - **Read Time**: Estimated reading time (e.g., "5 min read")
   - **Category**: Article category (e.g., "Web Development")
   - **Content**: The full article content using the rich text editor
4. Click "Publish" to make the article live

## Step 4: Get API Keys

1. Go to "Settings" > "API keys"
2. Create a new API key or use the default one
3. Note down the "Space ID" and "Content Delivery API - access token"

## Step 5: Add API Keys to Your Portfolio

You need to add your Contentful API keys to your environment:

```bash
# Add these environment variables to your hosting environment (e.g., GitHub, Netlify, Vercel)
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

For local development, you can create a `.env` file (add it to `.gitignore`) with these values.

## Step 6: Test Your Integration

1. Deploy your site or run it locally
2. Navigate to the blog section
3. Verify that your Contentful articles appear

## Managing Articles

### Adding a New Article

1. Log in to Contentful
2. Go to "Content" and click "Add entry"
3. Choose "Blog Post" content type
4. Fill in the details and publish
5. Your new article will appear on your site automatically

### Editing an Article

1. Log in to Contentful
2. Find the article you want to edit
3. Make your changes
4. Click "Publish"
5. Changes will be reflected on your site immediately

### Deleting an Article

1. Log in to Contentful
2. Find the article you want to delete
3. Click the three dots (⋮) and select "Delete"
4. The article will be removed from your site

## Advanced Features

### Previewing Unpublished Content

You can set up a preview mode to see unpublished content:

1. Get your Preview API token from Contentful
2. Add it as `CONTENTFUL_PREVIEW_TOKEN` environment variable
3. Add `CONTENTFUL_PREVIEW=true` to see draft content

### Using Images in Rich Text

When adding images in the rich text editor:
1. Click the image icon
2. Upload or select an image
3. The image will be properly embedded in your article

## Troubleshooting

**Articles not showing up?**
- Check that your content matches the expected structure
- Verify your API keys are correct
- Ensure you've published (not just saved) your content

**Images not displaying?**
- Make sure images are published along with the article
- Check that the image URLs use HTTPS

Need more help? Refer to the [Contentful documentation](https://www.contentful.com/developers/docs/) for detailed guidance.