import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-primary mr-1">&lt;</span>
            <span>John Doe</span>
            <span className="text-primary ml-1">/&gt;</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary-dark text-white">Resume</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">About</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary transition-colors py-2">Contact</a>
              <Button className="bg-primary hover:bg-primary-dark text-white w-full">Resume</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
