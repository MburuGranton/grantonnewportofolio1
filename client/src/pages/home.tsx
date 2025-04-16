import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { checkInView } from "@/lib/animation";

const Home = () => {
  useEffect(() => {
    // Set up animation on scroll
    const checkAnimations = () => {
      checkInView();
    };

    // Initial check
    checkAnimations();
    // Check on scroll
    window.addEventListener("scroll", checkAnimations);

    return () => {
      window.removeEventListener("scroll", checkAnimations);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
