import { ReactNode, useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  skills: Skill[];
  barColor: string;
}

const SkillCard = ({ 
  title, 
  description, 
  icon, 
  iconBgColor, 
  iconColor,
  skills,
  barColor
}: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll">
      <div className={`${iconColor} ${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`${barColor} h-2 rounded-full`} 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
