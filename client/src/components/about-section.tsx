import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 animate-on-scroll">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-primary rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="John working on code" 
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 md:pl-16 animate-on-scroll">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary mb-6">
              <span className="text-sm font-medium">About Me</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A passionate Front-end Developer . 
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a front-end developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 5 years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-4xl font-bold text-primary">4+</h3>
                <p className="text-gray-600 dark:text-gray-300">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary">10+</h3>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center">
              <a href="#contact">
                Let's talk
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
