import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { checkInView } from "@/lib/animation";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const [, navigate] = useLocation();
  const { slug } = params;
  
  // Find the project by slug
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  
  useEffect(() => {
    // If project doesn't exist, redirect to 404
    if (!project) {
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
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans overflow-x-hidden min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 overflow-x-hidden">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link href="/#projects">
            <div className="inline-flex items-center text-primary hover:underline mb-8 cursor-pointer">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </div>
          </Link>
          
          {/* Project Header */}
          <div className="mb-12 animate-on-scroll">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className={`${tech.bgColor} dark:bg-opacity-20 ${tech.color} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.subtitle}</p>
          </div>
          
          {/* Project Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-16 animate-on-scroll">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-on-scroll">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This is an expanded description of the project, detailing the challenges faced and solutions implemented. The client needed a robust platform that could handle their complex business requirements while maintaining excellent user experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                The solution leverages modern web technologies to provide a scalable, performant application that exceeds the client's expectations and sets them up for future growth.
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-8 space-y-2">
                <li>Responsive design that works seamlessly across all devices</li>
                <li>Intuitive user interface with thoughtful animations and transitions</li>
                <li>Robust data handling with efficient state management</li>
                <li>Integration with third-party services for enhanced functionality</li>
                <li>Comprehensive testing to ensure reliability and performance</li>
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Timeline</p>
                    <p className="font-medium">4 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Technologies</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-primary dark:text-blue-400 font-medium">
                          {tech.name}{index < project.technologies.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary-700 text-white flex items-center justify-center" 
                  asChild
                >
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Live Project
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center" 
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </a>
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

export default ProjectDetail;