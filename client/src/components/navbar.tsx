import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { useTheme } from "@/context/theme-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

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
    <header className={`fixed w-full z-50 border-b transition-colors duration-200 ${
      theme === 'dark' 
        ? `bg-gray-900/90 backdrop-blur-sm border-gray-800 ${isScrolled ? 'shadow-md shadow-black/10' : ''}` 
        : `bg-white/80 backdrop-blur-sm border-gray-100 ${isScrolled ? 'shadow-sm' : ''}`
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-primary mr-1">&lt;</span>
            <span>John Doe</span>
            <span className="text-primary ml-1">/&gt;</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Resume</Button>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2">About</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2">Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-white w-full">Resume</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
