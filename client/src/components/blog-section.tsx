import { Filter } from "lucide-react";
import ArticleCard from "@/components/article-card";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useArticles } from "@/hooks/use-contentful";
import { useAllBlogViews } from "@/hooks/use-blog-views";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSection = () => {
  // Fetch articles from Contentful (falls back to static data if not configured)
  const { data: articles = [], isLoading } = useArticles();
  
  // Fetch all blog views
  const { data: allViews = {} } = useAllBlogViews();
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = articles.length > 0 
    ? ["All", ...Array.from(new Set(articles.map(article => article.category)))]
    : ["All"];
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory, articles]);

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="inline-block text-sm font-medium text-primary mb-3">My Articles</span>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Latest from the Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and industry analyses to help you stay informed about the latest trends and best practices.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <div className="inline-flex items-center mb-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4 mr-1" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeleton
            [1, 2, 3].map((item) => (
              <div key={item} className="h-full">
                <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-5">
                    <Skeleton className="h-5 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredArticles.map((article, index) => (
              <div key={index} className="h-full">
                <ArticleCard
                  title={article.title}
                  excerpt={article.excerpt}
                  imageUrl={article.imageUrl}
                  date={article.date}
                  readTime={article.readTime}
                  category={article.category}
                  slug={article.slug}
                  views={allViews[article.slug] || 0}
                />
              </div>
            ))
          )}
        </div>
        
        {/* Show All Button */}
        <div className="text-center mt-10">
          <Link href="/blog">
            <div
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
            >
              View All Articles
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;