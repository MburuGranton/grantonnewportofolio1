import { ReactNode } from "react";
import { useTheme } from "@/context/theme-context";

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
  const { theme } = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll`}>
      <div className={`${iconColor} ${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{description}</p>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {skill.name}
              </span>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {skill.percentage}%
              </span>
            </div>
            <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
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
