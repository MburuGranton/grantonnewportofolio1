import { Calendar, Clock, ArrowUpRight, Eye } from "lucide-react";
import { Link } from "wouter";
import { formatViews } from "@/hooks/use-blog-views";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  views?: number;
}

const ArticleCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
  category,
  slug,
  views = 0
}: ArticleCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden group h-full flex flex-col transition-colors hover:border-primary/30 animate-on-scroll">
      <div className="relative overflow-hidden h-44">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-md border border-border">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center text-xs text-muted-foreground mb-3 gap-y-1">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="mx-2 hidden sm:block">•</div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1 ml-2 sm:ml-0" />
            <span>{readTime}</span>
          </div>
          <div className="mx-2 hidden sm:block">•</div>
          <div className="flex items-center">
            <Eye className="h-3.5 w-3.5 mr-1 ml-2 sm:ml-0" />
            <span>{formatViews(views)}</span>
          </div>
        </div>
        
        <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="mt-auto">
          <Link href={`/blog/${slug}`}>
            <div className="inline-flex items-center text-primary text-sm font-medium hover:underline cursor-pointer">
              Read More 
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;