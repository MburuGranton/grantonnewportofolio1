import { FiGithub, FiTwitter, FiLinkedin, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BrandLogo from "@/components/brand-logo";
import { brands } from "@/data";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left content - takes 7 columns for asymmetry */}
          <div className="md:col-span-7">
            <motion.p 
              className="text-sm font-medium text-primary mb-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Open to new collaborations
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I am{" "}
              <span className="text-primary">Granton Mburu</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I craft partnerships, lead communities, and bring bold ideas to life across Africa Web3 and tech ecosystem.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-5 rounded-lg font-medium">
                <a href="#projects" className="flex items-center gap-2">
                  View my work
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="px-6 py-5 rounded-lg font-medium border-2">
                <a href="#contact">Lets talk</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right - Profile image with simple, elegant framing */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Simple accent shape - not animated */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-primary/10 rounded-2xl max-w-sm mx-auto"></div>
              
              {/* Main image */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-elevated max-w-sm mx-auto">
                <img 
                  src="https://drive.google.com/thumbnail?id=1tX32B-yJZcpjuKcksD7pkLjbPb2OiPV8" 
                  alt="Granton Mburu" 
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80";
                  }}
                />
              </div>
              
              {/* Experience badge - simple and clean */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-white text-lg">4+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Brands section - cleaner, less flashy */}
        <motion.div 
          className="mt-24 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center text-muted-foreground mb-8 text-sm">
            Trusted by innovative brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <BrandLogo {...brand} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
