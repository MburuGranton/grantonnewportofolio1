import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";

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
  const { theme } = useTheme();
  
  return (
    <div className="animate-on-scroll project-card group">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
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
        
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>{description}</p>
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
          <div className="flex justify-between items-center">
            <a href={projectUrl} className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center text-sm">
              <span>View Project</span>
              <FiExternalLink className="h-4 w-4 ml-1" />
            </a>
            <a 
              href={githubUrl} 
              className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
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
