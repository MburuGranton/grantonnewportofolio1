import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const ArticleCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  readTime,
  category,
  slug
}: ArticleCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-xl animate-on-scroll">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-black/25 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white dark:bg-gray-800 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <div className="mx-2">•</div>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto">
          <Link href={`/blog/${slug}`}>
            <div className="inline-flex items-center text-primary dark:text-blue-400 font-medium hover:underline cursor-pointer">
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