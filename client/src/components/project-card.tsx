import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "wouter";

interface Technology {
  name: string;
  color: string;
  bgColor: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  category: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  category,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div className={`group h-full ${featured ? '' : ''}`}>
      <div className={`bg-card rounded-2xl overflow-hidden h-full flex ${featured ? 'flex-col' : 'flex-col'} border border-border hover:border-primary/20 transition-all duration-300`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
          <img 
            src={imageUrl}
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category — pill style */}
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground">
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className={`p-5 ${featured ? 'md:p-6' : ''} flex flex-col flex-grow`}>
          <h3 className={`font-semibold ${featured ? 'text-xl' : 'text-base'} mb-2 group-hover:text-primary transition-colors leading-tight`}>
            {title}
          </h3>
          <p className={`text-muted-foreground ${featured ? 'text-sm' : 'text-xs'} mb-4 flex-grow leading-relaxed line-clamp-3`}>
            {description}
          </p>
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
              >
                {tech.name}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-auto">
            <Link href={`/project/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <div className="text-primary text-sm font-medium flex items-center gap-1.5 cursor-pointer hover:gap-2.5 transition-all">
                <span>View details</span>
                <FiExternalLink className="h-3.5 w-3.5" />
              </div>
            </Link>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
