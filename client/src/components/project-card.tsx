import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "wouter";
import { useEffect, useState } from "react";

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
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  category
}: ProjectCardProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Monitor the theme changes by checking the HTML class
  useEffect(() => {
    const updateTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setTheme(isDarkMode ? "dark" : "light");
    };
    
    // Set initial theme
    updateTheme();
    
    // Watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateTheme();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="animate-on-scroll group h-full">
      <div className="bg-card rounded-xl overflow-hidden h-full flex flex-col border border-border hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl}
            alt={title} 
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-background/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-md border border-border">{category}</span>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-md"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
            <Link href={`/project/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <div className="text-primary font-medium flex items-center text-sm cursor-pointer hover:underline">
                <span>View Project</span>
                <FiExternalLink className="h-4 w-4 ml-1.5" />
              </div>
            </Link>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-colors"
            >
              <FiGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
