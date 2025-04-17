import { SiCoinbase } from "react-icons/si";
import { Box } from "lucide-react";

interface BrandLogoProps {
  name: string;
  icon: string;
}

const BrandLogo = ({ name, icon }: BrandLogoProps) => {
  const getIcon = () => {
    switch (icon) {
      case "base":
        return <SiCoinbase className="h-8 w-auto" />;
      case "cube":
        return <Box className="h-8 w-auto" />;
      default:
        return <div className="h-8 flex items-center font-bold text-primary">{name}</div>;
    }
  };

  return (
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      {getIcon()}
    </div>
  );
};

export default BrandLogo;
