import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BrandLogo from "@/components/brand-logo";
import { brands } from "@/data";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Monitor theme changes
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
    <section id="home" className="pt-28 pb-20 hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 animate-on-scroll">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary mb-6">
              <span className="text-sm font-medium">Front-end Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-primary">Granton Mburu</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, and visually appealing for the web.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center">
                <a href="#projects">
                  View my work
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-gray-300 dark:border-gray-700 hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-6 py-3"
              >
                <a href="#contact">
                  Contact me
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Find me on:</span>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end animate-on-scroll">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple-200/20 rounded-full"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1tX32B-yJZcpjuKcksD7pkLjbPb2OiPV8" 
                  alt="Granton Mburu" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to a reliable placeholder if Google Drive image fails
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 border-t border-gray-100 dark:border-gray-800 pt-12 animate-on-scroll">
          <h2 className="text-xl font-semibold mb-8 text-center">Worked with brands like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {brands.map((brand, index) => (
              <BrandLogo key={index} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
