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
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll h-full flex flex-col">
      <div className={`${iconColor} ${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
      
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
