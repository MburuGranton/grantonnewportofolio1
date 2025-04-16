import { SiAirbnb, SiSlack, SiSpotify, SiShopify } from "react-icons/si";

interface BrandLogoProps {
  name: string;
  icon: string;
}

const BrandLogo = ({ name, icon }: BrandLogoProps) => {
  const getIcon = () => {
    switch (icon) {
      case "airbnb":
        return <SiAirbnb className="h-8 w-auto" />;
      case "slack":
        return <SiSlack className="h-8 w-auto" />;
      case "spotify":
        return <SiSpotify className="h-8 w-auto" />;
      case "shopify":
        return <SiShopify className="h-8 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <div className="grayscale hover:grayscale-0 transition-all duration-300">
      {getIcon()}
    </div>
  );
};

export default BrandLogo;
