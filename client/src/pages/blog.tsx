import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import { checkInView } from "@/lib/animation";
import { useArticles } from "@/hooks/use-contentful";
import { useAllBlogViews } from "@/hooks/use-blog-views";
import { Skeleton } from "@/components/ui/skeleton"; 
import { motion } from "framer-motion";

const Blog = () => {
  const { data: articles = [], isLoading, error } = useArticles();
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
  
  useEffect(() => {
    checkInView();
    window.addEventListener("scroll", checkInView);
    return () => window.removeEventListener("scroll", checkInView);
  }, []);
  
  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar minimal />
      
      <main className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Blog</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 tracking-tight leading-[1.05]">
              Thoughts &<br />
              <span className="text-muted-foreground/30">insights</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-lg text-base leading-relaxed">
              Insights, tutorials, and industry analyses to help you stay informed about the latest trends and best practices.
            </p>
          </motion.div>
          
          {/* Filter */}
          <motion.div
            className="flex flex-wrap gap-1.5 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Error */}
          {error && (
            <div className="text-center p-8 bg-destructive/10 rounded-2xl mb-8">
              <p className="text-destructive text-sm">
                Unable to load articles. Please try again later.
              </p>
            </div>
          )}
          
          {/* Loading */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="h-full">
                  <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
                    <Skeleton className="h-40 w-full" />
                    <div className="p-5">
                      <Skeleton className="h-4 w-20 mb-3" />
                      <Skeleton className="h-5 w-2/3 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Articles */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
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
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 text-center p-12">
                  <p className="text-muted-foreground text-sm">
                    No articles found in this category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;