import { ReactNode, useEffect, useState } from "react";

interface Skill {
  name: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  skills: Skill[];
}

const SkillCard = ({ 
  title, 
  description, 
  icon, 
  iconBgColor, 
  iconColor,
  skills
}: SkillCardProps) => {
  return (
    <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll h-full flex flex-col">
      <div className={`${iconColor} ${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">{description}</p>
      
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-muted rounded-lg py-2 px-3 text-center">
            <span className="text-xs font-medium text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
