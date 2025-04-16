import { Link } from "wouter";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-900'} text-white py-12`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center">
              <span className="text-primary mr-1">&lt;</span>
              <span>John Doe</span>
              <span className="text-primary ml-1">/&gt;</span>
            </Link>
            <p className="text-gray-400 mt-2">Front-end Developer</p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <span className="text-gray-600 mx-3">|</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
