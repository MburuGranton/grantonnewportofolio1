import { Code, Monitor, Briefcase, LineChart, Users, Handshake, Link2 } from "lucide-react";
import { skills } from "@/data";
import { motion } from "framer-motion";

const technicalSkills = [
  { title: "Front-end Development", description: "Building responsive web apps with modern frameworks.", icon: Code, skills: skills.frontend, accent: "bg-blue-500" },
  { title: "UI/UX Design", description: "Creating intuitive, beautiful interfaces.", icon: Monitor, skills: skills.design, accent: "bg-emerald-500" },
  { title: "Frameworks & Tools", description: "Leveraging modern dev tools for robust apps.", icon: Briefcase, skills: skills.frameworks, accent: "bg-violet-500" },
];

const businessSkills = [
  { title: "Operations", icon: LineChart, skills: skills.operations, accent: "bg-rose-500" },
  { title: "Partnerships", icon: Handshake, skills: skills.partnerships, accent: "bg-amber-500" },
  { title: "Community Building", icon: Users, skills: skills.community, accent: "bg-cyan-500" },
  { title: "Web3 & Blockchain", icon: Link2, skills: skills.web3, accent: "bg-indigo-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 — Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight">
            What I bring to the table
          </h2>
        </motion.div>
        
        {/* Technical skills — horizontal cards with accent bar */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-border/80 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Accent bar top */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${skill.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <Icon className="w-5 h-5 text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{skill.description}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {skill.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Business skills — compact horizontal list style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-6 tracking-wide">Business & Strategy</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {businessSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all"
                >
                  <div className={`w-8 h-8 rounded-lg ${skill.accent}/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium mb-1">{skill.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {skill.skills.map(s => s.name).join(" · ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
