import { Filter } from "lucide-react";
import ArticleCard from "@/components/article-card";
import { articles } from "@/data";
import { useState, useEffect } from "react";
import { Link } from "wouter";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(articles.map(article => article.category)))];
  const [filteredArticles, setFilteredArticles] = useState(articles);
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-accent dark:text-purple-400 mb-6">
            <span className="text-sm font-medium">My Articles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from the Blog</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and industry analyses to help you stay informed about the latest trends and best practices.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="inline-flex items-center mb-2 text-sm">
            <Filter className="h-4 w-4 mr-1" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div key={index} className="h-full">
              <ArticleCard
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                slug={article.slug}
              />
            </div>
          ))}
        </div>
        
        {/* Show All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <div
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300 cursor-pointer"
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