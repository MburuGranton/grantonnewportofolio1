import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Simple offset background */}
              <div className="absolute -left-4 -bottom-4 w-full h-full bg-primary/10 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Granton working" 
                className="relative rounded-2xl w-full shadow-elevated"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
              I am passionate about connecting innovation with people.
            </h2>
            <p className="text-muted-foreground mb-5 text-lg leading-relaxed">
              Over the past few years, I have led high-impact initiatives with brands like Tether, Lisk, and Base - empowering thousands of young developers and blockchain enthusiasts across East Africa.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              My work sits at the intersection of strategy, partnerships, and community building - turning ambitious ideas into measurable results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="text-3xl font-bold text-primary mb-1">4+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="text-3xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-5 rounded-lg font-medium">
              <a href="#contact" className="flex items-center gap-2">
                Lets talk
                <FiArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
