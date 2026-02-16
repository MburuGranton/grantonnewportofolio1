import ProjectCard from "@/components/project-card";
import { projects } from "@/data";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">03 — Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">
              Selected projects
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            From partnership deals and buildathons to full-stack web apps — a mix of what I've shipped.
          </p>
        </motion.div>
        
        {/* Bento-style grid — first project featured large */}
        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} featured={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
