import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import { checkInView } from "@/lib/animation";
import { useArticles } from "@/hooks/use-contentful";
import { Skeleton } from "@/components/ui/skeleton"; 

const Blog = () => {
  // Fetch articles from Contentful
  const { data: articles = [], isLoading, error } = useArticles();
  
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
      <Navbar minimal />
      
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
          
          {/* Error State */}
          {error && (
            <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg mb-8">
              <p className="text-red-600 dark:text-red-400">
                Unable to load articles. Please try again later.
              </p>
            </div>
          )}
          
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6">
                      <Skeleton className="h-6 w-2/3 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                      <div className="mt-4 flex justify-between items-center">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Articles Grid */}
          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
              {filteredArticles.length > 0 ? (
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
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center p-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    No articles found in this category. Try selecting a different category.
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