import { Code, Monitor, Briefcase, LineChart, Users, Handshake, Speaker } from "lucide-react";
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
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-primary mb-6">
            <span className="text-sm font-medium">My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've spent years refining my skills across multiple domains. Here's a breakdown of my technical and non-technical expertise and what I can bring to your project.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="Front-end Development" 
              description="Building responsive websites and web applications using modern HTML, CSS, and JavaScript frameworks."
              icon={<Code className="h-8 w-8" />}
              iconBgColor="bg-blue-100 dark:bg-blue-900"
              iconColor="text-primary"
              skills={skills.frontend}
            />
            
            <SkillCard 
              title="UI/UX Design" 
              description="Creating intuitive user interfaces and experiences that are both beautiful and functional."
              icon={<Monitor className="h-8 w-8" />}
              iconBgColor="bg-green-100 dark:bg-green-900"
              iconColor="text-secondary"
              skills={skills.design}
            />
            
            <SkillCard 
              title="Frameworks & Tools" 
              description="Leveraging modern frameworks and development tools to build robust applications."
              icon={<Briefcase className="h-8 w-8" />}
              iconBgColor="bg-purple-100 dark:bg-purple-900"
              iconColor="text-accent"
              skills={skills.frameworks}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Business & Management Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              title="Marketing" 
              description="Developing and executing marketing strategies to drive brand awareness and customer acquisition."
              icon={<LineChart className="h-8 w-8" />}
              iconBgColor="bg-red-100 dark:bg-red-900"
              iconColor="text-red-600 dark:text-red-400"
              skills={skills.marketing}
            />
            
            <SkillCard 
              title="Business Development" 
              description="Identifying growth opportunities and developing strategies to expand market presence."
              icon={<Users className="h-8 w-8" />}
              iconBgColor="bg-amber-100 dark:bg-amber-900"
              iconColor="text-amber-600 dark:text-amber-400"
              skills={skills.business}
            />
            
            <SkillCard 
              title="Partnership Management" 
              description="Building and nurturing strategic relationships with key partners and stakeholders."
              icon={<Handshake className="h-8 w-8" />}
              iconBgColor="bg-cyan-100 dark:bg-cyan-900"
              iconColor="text-cyan-600 dark:text-cyan-400"
              skills={skills.partnership}
            />
            
            <SkillCard 
              title="KOL Management" 
              description="Working with key opinion leaders to amplify brand messaging and reach target audiences."
              icon={<Speaker className="h-8 w-8" />}
              iconBgColor="bg-indigo-100 dark:bg-indigo-900"
              iconColor="text-indigo-600 dark:text-indigo-400"
              skills={skills.kol}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
