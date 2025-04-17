import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import { articles } from "@/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import { checkInView } from "@/lib/animation";

const Blog = () => {
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
  
  useEffect(() => {
    // Set up animation on scroll
    const checkAnimations = () => {
      checkInView();
    };
    
    // Initial check
    checkAnimations();
    // Check on scroll
    window.addEventListener("scroll", checkAnimations);
    
    return () => {
      window.removeEventListener("scroll", checkAnimations);
    };
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 overflow-x-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-accent dark:text-purple-400 mb-6">
              <span className="text-sm font-medium">Articles</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and industry analyses to help you stay informed about the latest trends and best practices.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;