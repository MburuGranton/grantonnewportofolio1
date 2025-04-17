import { createClient, EntryFieldTypes } from 'contentful';

// Define article type according to Contentful content model
export interface ContentfulArticle {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  category: string;
  content: any; // This will be the rich text content
}

// Define content type for Contentful's API
interface BlogPostSkeleton {
  contentTypeId: 'blogPost',
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    publishDate: EntryFieldTypes.Date;
    readTime: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  }
}

// Check if Contentful credentials are available
const hasContentfulCredentials = !!(
  import.meta.env.VITE_CONTENTFUL_SPACE_ID && 
  import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
);

// Create a single client instance to use across the app if credentials are available
export const contentfulClient = hasContentfulCredentials 
  ? createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
      // Preview mode can be enabled for draft content
      host: import.meta.env.VITE_CONTENTFUL_PREVIEW === 'true' ? 'preview.contentful.com' : 'cdn.contentful.com',
    })
  : null;

// Function to check if Contentful is properly configured
export function isContentfulConfigured(): boolean {
  return !!(import.meta.env.VITE_CONTENTFUL_SPACE_ID && import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN);
}

// Function to get all articles
export async function getArticles(): Promise<ContentfulArticle[]> {
  // If Contentful isn't configured, use placeholder data
  if (!contentfulClient) {
    console.log('Contentful not configured, using placeholder data');
    // We'll return an empty array; the useArticles hook will handle falling back to static data
    return [];
  }
  
  try {
    // We've already checked that contentfulClient is not null
    const entries = await contentfulClient!.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishDate'], // Sort by newest first
    });

    // Transform the Contentful response into our ContentfulArticle format
    return entries.items.map(item => {
      const fields = item.fields as any;
      
      // Safely extract image URL
      let imageUrl = '';
      try {
        if (fields.featuredImage && fields.featuredImage.fields) {
          imageUrl = fields.featuredImage.fields.file.url || '';
          // Ensure HTTPS for images
          if (imageUrl && imageUrl.startsWith('//')) {
            imageUrl = `https:${imageUrl}`;
          }
        }
      } catch (e) {
        console.warn('Error extracting image URL:', e);
      }

      return {
        slug: fields.slug || '',
        title: fields.title || '',
        excerpt: fields.excerpt || '',
        imageUrl,
        date: fields.publishDate ? new Date(fields.publishDate).toLocaleDateString('en-US', {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        }) : '',
        readTime: fields.readTime || '',
        category: fields.category || '',
        content: fields.content || null,
      };
    });
  } catch (error) {
    console.error('Error fetching articles from Contentful:', error);
    return [];
  }
}

// Function to get a single article by slug
export async function getArticleBySlug(slug: string): Promise<ContentfulArticle | null> {
  // If Contentful isn't configured, return null
  if (!contentfulClient) {
    console.log('Contentful not configured, using placeholder data');
    return null;
  }
  
  try {
    // We've already checked that contentfulClient is not null
    const entries = await contentfulClient!.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (entries.items.length === 0) {
      return null;
    }

    const fields = entries.items[0].fields as any;
    
    // Safely extract image URL
    let imageUrl = '';
    try {
      if (fields.featuredImage && fields.featuredImage.fields) {
        imageUrl = fields.featuredImage.fields.file.url || '';
        // Ensure HTTPS for images
        if (imageUrl && imageUrl.startsWith('//')) {
          imageUrl = `https:${imageUrl}`;
        }
      }
    } catch (e) {
      console.warn('Error extracting image URL:', e);
    }
    
    return {
      slug: fields.slug || '',
      title: fields.title || '',
      excerpt: fields.excerpt || '',
      imageUrl,
      date: fields.publishDate ? new Date(fields.publishDate).toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }) : '',
      readTime: fields.readTime || '',
      category: fields.category || '',
      content: fields.content || null,
    };
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
}