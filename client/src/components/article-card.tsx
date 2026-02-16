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
    <Link href={`/blog/${slug}`}>
      <div className="bg-card border border-border rounded-2xl overflow-hidden group h-full flex flex-col transition-all hover:border-primary/20 hover:shadow-elevated cursor-pointer">
        <div className="relative overflow-hidden h-40">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          {/* Category + date */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {category}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {date}
            </span>
          </div>
          
          <h3 className="text-base font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
            <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {formatViews(views)}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;