import { FiGithub, FiTwitter, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Community Strategist", "Partnerships Lead", "Web3 Builder", "Growth Architect"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-end pb-16 pt-24">
      <div className="container mx-auto px-6">
        {/* Main content — editorial layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          {/* Left column — big text */}
          <div className="lg:col-span-7 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-6">Available for collaborations</p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tighter mb-6">
                Granton
                <br />
                <span className="text-muted-foreground/30">Mburu</span>
              </h1>

              {/* Rotating role */}
              <div className="h-8 mb-8 overflow-hidden">
                <motion.p
                  key={roleIndex}
                  className="text-lg text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </div>
              
              <p className="text-base text-muted-foreground max-w-md leading-relaxed mb-10">
                I craft partnerships, lead communities, and bring bold ideas to life across Africa's Web3 and tech ecosystem.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View my work
                <FiArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-hover">
                Let&apos;s talk
              </a>
            </motion.div>
          </div>
          
          {/* Right column — photo with unique treatment */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Photo with clip-path personality */}
              <div className="relative overflow-hidden rounded-3xl" style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%, 0 8%)" }}>
                <img 
                  src="https://drive.google.com/thumbnail?id=1rlGB4t-HO1ca8YBa2lUEon9-w03nleuU&sz=w1000" 
                  alt="Granton Mburu" 
                  className="w-full aspect-[4/5] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80";
                  }}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>

              {/* Floating stat — positioned organically */}
              <div className="absolute -bottom-3 -left-3 bg-card border border-border px-5 py-3 rounded-2xl shadow-elevated">
                <p className="text-2xl font-bold text-primary leading-none">4+</p>
                <p className="text-[11px] text-muted-foreground mt-1">years building</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar — socials + scroll hint */}
        <motion.div
          className="flex items-center justify-between mt-16 pt-6 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <a href="https://github.com/MburuGranton" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href="https://x.com/GrantonMburu" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/granton-nyange-6a00401a1/" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <FiLinkedin className="w-4 h-4" />
            </a>
          </div>
          <a href="#about" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <span>Scroll to explore</span>
            <FiArrowDown className="w-3 h-3 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
