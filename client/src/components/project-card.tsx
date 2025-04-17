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
    <div className="animate-on-scroll project-card group h-full">
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 bg-white h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl}
            alt={title} 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 transition-opacity duration-300 p-6 group-hover:opacity-100">
            <div>
              <h4 className="text-white font-bold text-lg">{title}</h4>
              <p className="text-gray-200 text-sm">{subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`px-2 py-1 text-xs rounded-full ${tech.bgColor} ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-auto">
            <Link href={`/project/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
              <div className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center text-sm cursor-pointer">
                <span>View Project</span>
                <FiExternalLink className="h-4 w-4 ml-1" />
              </div>
            </Link>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
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
