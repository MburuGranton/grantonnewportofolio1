import { Link } from "wouter";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-[10px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GM</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Granton Mburu
            </span>
          </Link>
          
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/MburuGranton" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href="https://x.com/GrantonMburu" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/granton-nyange-6a00401a1/" className="text-muted-foreground hover:text-foreground transition-colors">
              <FiLinkedin className="w-4 h-4" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Granton Mburu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
