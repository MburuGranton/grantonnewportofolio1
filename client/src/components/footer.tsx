import { Link } from "wouter";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useEffect, useState } from "react";

const Footer = () => {
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
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>Granton Mburu</span>
              <span className="text-primary ml-1">/&gt;</span>
            </Link>
            <p className="text-background/60 mt-2 text-sm">Web3 Creative Builder / Community Strategist</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© {new Date().getFullYear()} Granton Mburu. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <span className="text-background/30 mx-3">|</span>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
