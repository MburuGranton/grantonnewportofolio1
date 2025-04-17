import { useQuery } from '@tanstack/react-query';
import { getArticles, getArticleBySlug } from '@/lib/contentful';
import { articles as staticArticles } from '@/data';

// Hook to fetch all articles from Contentful
export function useArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const articles = await getArticles();
      
      // If no articles are returned from Contentful, use static data
      if (articles.length === 0) {
        return staticArticles;
      }
      
      return articles;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook to fetch a single article by slug
export function useArticle(slug: string) {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const article = await getArticleBySlug(slug);
      
      // If no article is found in Contentful, try to find it in static data
      if (!article) {
        const staticArticle = staticArticles.find(a => a.slug === slug);
        return staticArticle || null;
      }
      
      return article;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}