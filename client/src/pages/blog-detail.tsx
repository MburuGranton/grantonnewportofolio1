import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { checkInView } from "@/lib/animation";
import { useArticle } from "@/hooks/use-contentful";
import ContentfulRichText from "@/components/contentful-rich-text";

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const [, navigate] = useLocation();
  const { slug } = params;
  
  // Fetch article from Contentful
  const { data: article, isLoading, error } = useArticle(slug);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  useEffect(() => {
    // If article doesn't exist and we're not loading, redirect to 404
    if (!article && !isLoading && !error) {
      navigate("/not-found");
      return;
    }
    
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
  }, [article, isLoading, error, navigate]);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20 overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/#blog">
              <div className="inline-flex items-center text-primary hover:underline mb-8 cursor-pointer">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </div>
            </Link>
            
            <div className="mb-8">
              <Skeleton className="h-6 w-24 mb-6" />
              <Skeleton className="h-12 w-full mb-6" />
              <div className="flex items-center">
                <Skeleton className="h-4 w-24 mr-4" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            
            <Skeleton className="h-80 w-full mb-10 rounded-xl" />
            
            <div>
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-8" />
              
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-5/6 mb-8" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20 overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center p-12 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Unable to load article</h2>
              <p className="mb-6">There was an error loading this article. Please try again later.</p>
              <Button asChild>
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!article) return null;
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 overflow-x-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link href="/#blog">
            <div className="inline-flex items-center text-primary hover:underline mb-8 cursor-pointer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </div>
          </Link>
          
          {/* Article Header */}
          <div className="mb-8 animate-on-scroll">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-accent dark:text-purple-400 mb-6">
              <span className="text-sm font-medium">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{article.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          {/* Article Featured Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-10 animate-on-scroll">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none animate-on-scroll">
            <p className="lead mb-6 text-xl">
              {article.excerpt}
            </p>
            
            {/* If article has Contentful content, render it */}
            {article.content ? (
              // Import the ContentfulRichText component dynamically to avoid SSR issues
              <ContentfulRichText content={article.content} />
            ) : (
              // Fallback content for articles that don't have Contentful rich text
              <>
                <p>
                  The digital landscape is constantly evolving, and staying ahead of the curve is essential for professionals in the tech industry. In this article, we'll explore the key trends that are shaping the future of our field and how you can position yourself for success.
                </p>
                
                <h2>Understanding the Changing Landscape</h2>
                <p>
                  Technology is advancing at an unprecedented rate, transforming industries and creating new opportunities for innovation. As we look toward the future, it's clear that the ability to adapt and evolve will be crucial for continued success.
                </p>
                <p>
                  Recent developments in artificial intelligence, blockchain, and quantum computing are opening up new possibilities for solving complex problems and creating more efficient systems. These technologies are not just theoretical concepts but are being implemented in real-world applications across various sectors.
                </p>
                
                <h2>Key Insights for Professionals</h2>
                <p>
                  To stay competitive in this rapidly changing environment, professionals need to:
                </p>
                <ul>
                  <li>Embrace continuous learning and skill development</li>
                  <li>Stay informed about emerging technologies and their potential applications</li>
                  <li>Build a network of peers and mentors who can provide guidance and support</li>
                  <li>Develop a mindset of adaptability and resilience</li>
                </ul>
                
                <h2>Looking Ahead</h2>
                <p>
                  The future holds both challenges and opportunities for professionals in our field. By staying informed, developing new skills, and maintaining a forward-thinking perspective, you can position yourself for long-term success.
                </p>
                <p>
                  As we navigate these changes together, it's important to remember that the most valuable asset is not specific technical knowledge but the ability to learn, adapt, and grow in response to new developments.
                </p>
              </>
            )}
            
            <div className="not-prose border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="text-lg font-bold">GM</span>
                  </div>
                  <div>
                    <p className="font-bold">Granton Mburu</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Web3 Creative Builder / Community Strategist</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;