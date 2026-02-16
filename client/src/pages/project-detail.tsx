import { useEffect } from "react";
import { useLocation, Link } from "wouter";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  const [, navigate] = useLocation();
  const { slug } = params;
  
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate("/not-found");
    }
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Navbar />
      
      <main className="pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Back */}
          <Link href="/#projects">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight leading-[1.1]">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>
          
          {/* Image */}
          <motion.div
            className="rounded-2xl overflow-hidden mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold tracking-tight">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {(project as any).overview && (
                <p className="text-muted-foreground leading-relaxed">
                  {(project as any).overview}
                </p>
              )}
              
              <h2 className="text-xl font-bold tracking-tight pt-2">Key Features</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {(project as any).keyFeatures ? (
                  (project as any).keyFeatures.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))
                ) : (
                  <>
                    <li>Responsive design that works seamlessly across all devices</li>
                    <li>Intuitive user interface with thoughtful animations and transitions</li>
                    <li>Robust data handling with efficient state management</li>
                    <li>Integration with third-party services for enhanced functionality</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Details</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Category</p>
                    <p className="text-sm font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                    <p className="text-sm font-medium">{(project as any).timeline || '4 weeks'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Technologies</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs text-primary font-medium">
                          {tech.name}{index < project.technologies.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                {project.projectUrl && (
                  <Button 
                    className="w-full rounded-full" 
                    asChild
                  >
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 mr-2" />
                      Visit Live Project
                    </a>
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full" 
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;