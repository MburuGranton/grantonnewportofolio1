import { Code, Monitor, Briefcase } from "lucide-react";
import SkillCard from "@/components/skill-card";
import { skills } from "@/data";
import { useEffect, useState } from "react";

const SkillsSection = () => {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary mb-6">
            <span className="text-sm font-medium">My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've spent years refining my skills in front-end development. Here's a breakdown of my technical expertise and what I can bring to your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            title="Front-end Development" 
            description="Building responsive websites and web applications using modern HTML, CSS, and JavaScript frameworks."
            icon={<Code className="h-8 w-8" />}
            iconBgColor="bg-blue-100"
            iconColor="text-primary"
            skills={skills.frontend}
            barColor="bg-primary"
          />
          
          <SkillCard 
            title="UI/UX Design" 
            description="Creating intuitive user interfaces and experiences that are both beautiful and functional."
            icon={<Monitor className="h-8 w-8" />}
            iconBgColor="bg-green-100"
            iconColor="text-secondary"
            skills={skills.design}
            barColor="bg-secondary"
          />
          
          <SkillCard 
            title="Frameworks & Tools" 
            description="Leveraging modern frameworks and development tools to build robust applications."
            icon={<Briefcase className="h-8 w-8" />}
            iconBgColor="bg-purple-100"
            iconColor="text-accent"
            skills={skills.frameworks}
            barColor="bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
