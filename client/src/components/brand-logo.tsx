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
        return <SiCoinbase className="h-8 w-auto" title={name} />;
      case "cube":
        // For logos that aren't available as icons, use the name as text
        return (
          <div className="flex items-center gap-2">
            <Box className="h-6 w-auto mr-1" />
            <span className="text-base font-semibold">{name}</span>
          </div>
        );
      default:
        return <div className="h-8 flex items-center font-bold text-primary">{name}</div>;
    }
  };

  return (
    <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:text-primary">
      {getIcon()}
    </div>
  );
};

export default BrandLogo;
