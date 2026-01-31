import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface ViewsResponse {
  slug: string;
  views: number;
}

// Hook to fetch views for a single blog post
export function useBlogViews(slug: string) {
  return useQuery({
    queryKey: ['views', slug],
    queryFn: async () => {
      const res = await fetch(`/api/views/${slug}`);
      if (!res.ok) {
        return { slug, views: 0 };
      }
      return res.json() as Promise<ViewsResponse>;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook to fetch all blog views
export function useAllBlogViews() {
  return useQuery({
    queryKey: ['views'],
    queryFn: async () => {
      const res = await fetch('/api/views');
      if (!res.ok) {
        return {};
      }
      return res.json() as Promise<Record<string, number>>;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Hook to increment views for a blog post
export function useIncrementViews() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (slug: string) => {
      const res = await apiRequest('POST', `/api/views/${slug}`);
      return res.json() as Promise<ViewsResponse>;
    },
    onSuccess: (data) => {
      // Update the individual views cache
      queryClient.setQueryData(['views', data.slug], data);
      // Invalidate all views to refresh the list
      queryClient.invalidateQueries({ queryKey: ['views'] });
    },
  });
}

// Helper function to format view count
export function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}
