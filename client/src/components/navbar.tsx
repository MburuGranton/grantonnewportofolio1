import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

interface NavbarProps {
  minimal?: boolean;
}

const Navbar = ({ minimal = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check dark mode on mount and when it changes
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    
    // Initialize
    checkDarkMode();
    
    // Listen for changes to the HTML class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-200 
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm' 
        : 'bg-transparent border-b border-transparent'
      }
    `}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {minimal ? (
            <div className="text-xl font-bold flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>Granton Mburu</span>
              <span className="text-primary ml-1">/&gt;</span>
            </div>
          ) : (
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>Granton Mburu</span>
              <span className="text-primary ml-1">/&gt;</span>
            </Link>
          )}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!minimal && (
              <>
                <a href="/#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
                <a href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                <a href="/#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                <Button className="bg-primary hover:bg-primary/90 text-white px-5 rounded-lg">Resume</Button>
              </>
            )}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            {!minimal && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && !minimal && (
          <div className="md:hidden py-4 bg-card border border-border rounded-xl mt-4 px-4 shadow-sm">
            <div className="flex flex-col space-y-4">
              <a href="/#home" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">Home</a>
              <a href="/#about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">About</a>
              <a href="/#skills" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">Skills</a>
              <a href="/#projects" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">Projects</a>
              <a href="/#blog" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">Blog</a>
              <a href="/#contact" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors py-2">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-lg">Resume</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
