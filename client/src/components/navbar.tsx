import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

interface NavbarProps {
  minimal?: boolean;
}

const navLinks = [
  { label: "About", href: "/#about", num: "01" },
  { label: "Skills", href: "/#skills", num: "02" },
  { label: "Work", href: "/#projects", num: "03" },
  { label: "Blog", href: "/#blog", num: "04" },
  { label: "Contact", href: "/#contact", num: "05" },
];

const Navbar = ({ minimal = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo — distinctive monogram, not <Name/> */}
          {minimal ? (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GM</span>
              </div>
              <span className="font-semibold text-sm tracking-tight">Granton Mburu</span>
            </div>
          ) : (
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GM</span>
              </div>
              <span className="font-semibold text-sm tracking-tight hidden sm:block">Granton Mburu</span>
            </Link>
          )}
          
          {/* Desktop Navigation — numbered links */}
          <div className="hidden md:flex items-center gap-1">
            {!minimal && (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="text-primary/60 text-[10px] font-mono mr-1">{link.num}.</span>
                    {link.label}
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                ))}
                <div className="ml-3 h-5 w-px bg-border" />
                <Button className="ml-3 bg-primary hover:bg-primary/90 text-white text-xs px-4 py-2 rounded-full h-8 font-medium">
                  Resume
                </Button>
              </>
            )}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            {!minimal && (
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            )}
          </div>
        </nav>
        
        {/* Mobile Navigation — clean slide-down */}
        {isOpen && !minimal && (
          <div className="md:hidden py-6 mt-2 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span className="text-primary/60 text-xs font-mono w-6">{link.num}.</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border/50">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-10 text-sm font-medium">
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
