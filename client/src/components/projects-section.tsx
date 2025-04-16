import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data";
import { useTheme } from "@/context/theme-context";

const ProjectsSection = () => {
  const { theme } = useTheme();
  
  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary mb-6">
            <span className="text-sm font-medium">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Here's a selection of my recent work. Each project presented unique challenges that helped me grow as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            asChild 
            variant="outline" 
            className={`
              ${theme === 'dark' 
                ? 'border-gray-700 hover:border-primary text-gray-300 hover:text-primary' 
                : 'border-gray-300 hover:border-primary text-gray-700 hover:text-primary'
              } inline-flex items-center
            `}
          >
            <a href="#">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
