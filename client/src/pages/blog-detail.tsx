import { useEffect, useRef } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2, Eye } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useArticle } from "@/hooks/use-contentful";
import { useBlogViews, useIncrementViews, formatViews } from "@/hooks/use-blog-views";
import ContentfulRichText from "@/components/contentful-rich-text";
import { motion } from "framer-motion";

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const [, navigate] = useLocation();
  const { slug } = params;
  const hasIncrementedViews = useRef(false);
  
  const { data: article, isLoading, error } = useArticle(slug);
  const { data: viewsData } = useBlogViews(slug);
  const incrementViews = useIncrementViews();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  useEffect(() => {
    if (article && !hasIncrementedViews.current) {
      hasIncrementedViews.current = true;
      incrementViews.mutate(slug);
    }
  }, [article, slug, incrementViews]);
  
  useEffect(() => {
    if (!article && !isLoading && !error) {
      navigate("/not-found");
    }
  }, [article, isLoading, error, navigate]);
  
  const shell = (children: React.ReactNode) => (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar minimal />
      <main className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
  
  if (isLoading) {
    return shell(
      <>
        <Link href="/blog">
          <span className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 cursor-pointer gap-2">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </span>
        </Link>
        <Skeleton className="h-5 w-20 mb-5 rounded-full" />
        <Skeleton className="h-10 w-full mb-3" />
        <Skeleton className="h-10 w-2/3 mb-6" />
        <div className="flex gap-4 mb-10">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-72 w-full mb-10 rounded-2xl" />
        <div className="space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </>
    );
  }
  
  if (error) {
    return shell(
      <div className="text-center p-12 bg-destructive/10 rounded-2xl">
        <h2 className="text-xl font-bold text-destructive mb-3">Unable to load article</h2>
        <p className="text-muted-foreground text-sm mb-6">There was an error loading this article. Please try again later.</p>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  if (!article) return null;
  
  return shell(
    <>
      {/* Back */}
      <Link href="/blog">
        <motion.span
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 cursor-pointer gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </motion.span>
      </Link>
      
      {/* Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
          {article.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center text-muted-foreground text-sm gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            {formatViews(viewsData?.views || 0)} views
          </span>
        </div>
      </motion.div>
      
      {/* Featured Image */}
      <motion.div
        className="rounded-2xl overflow-hidden mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-auto object-cover" 
        />
      </motion.div>
      
      {/* Content */}
      <motion.div
        className="prose prose-base sm:prose-lg dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:leading-tight prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="lead mb-6 text-base sm:text-lg md:text-xl leading-relaxed !text-foreground/80">
          {article.excerpt}
        </p>
        
        {article.content ? (
          <ContentfulRichText content={article.content} />
        ) : (
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
        
        {/* Author / Share */}
        <div className="not-prose border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                GM
              </div>
              <div>
                <p className="text-sm font-semibold">Granton Mburu</p>
                <p className="text-xs text-muted-foreground">Web3 Builder &middot; Community Strategist</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full text-xs"
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
              <Share2 className="h-3.5 w-3.5 mr-1.5" />
              Share
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogDetail;