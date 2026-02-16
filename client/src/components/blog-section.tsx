import ArticleCard from "@/components/article-card";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useArticles } from "@/hooks/use-contentful";
import { useAllBlogViews } from "@/hooks/use-blog-views";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const BlogSection = () => {
  const { data: articles = [], isLoading } = useArticles();
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
    <section id="blog" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header with filter inline */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">04 — Blog</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">
              Thoughts & insights
            </h2>
          </div>
          
          {/* Minimal filter — inline with header */}
          <div className="flex flex-wrap gap-1.5">
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
          </div>
        </motion.div>
        
        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            [1, 2, 3].map((item) => (
              <div key={item} className="h-full">
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
                  <Skeleton className="h-44 w-full" />
                  <div className="p-5">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-5 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
          )}
        </div>
        
        {/* View all link */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/blog">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all cursor-pointer">
              View all articles <FiArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;