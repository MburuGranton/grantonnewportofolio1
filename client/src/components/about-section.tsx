import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { brands } from "@/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        {/* Section header — left-aligned, not centered */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 — About</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — big statement */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
              Engineering{" "}
              <span className="text-accent-line">meets</span>
              {" "}ecosystem growth.
            </h2>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              Let's work together <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          
          {/* Right — details */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Mechanical Engineer by training who moved into Web3 operations. Since September 2024 I've been leading partnerships at NODO — executing deals with CV Labs, Tether, and Lisk while coordinating ecosystem collaborations across African blockchain communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Before that I led the BASE Buildathon in Kenya, ran a 3-month stablecoin education campaign with Tether, and organized university activations that brought 120+ attendees per event. My work bridges engineering thinking with on-the-ground community building.
            </p>
            
            {/* Stats — horizontal, not grid */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-border/50">
              <div>
                <p className="text-4xl font-bold tracking-tight">4+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tight">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tight">1000+</p>
                <p className="text-sm text-muted-foreground mt-1">Community Members</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brands marquee — replaces the old static grid */}
        <motion.div
          className="mt-24 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">Trusted by</p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-8 text-lg font-semibold text-muted-foreground/40 hover:text-foreground transition-colors whitespace-nowrap"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
