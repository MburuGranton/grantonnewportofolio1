import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { checkInView } from "@/lib/animation";

const Home = () => {
  useEffect(() => {
    checkInView();
    window.addEventListener("scroll", checkInView);
    return () => window.removeEventListener("scroll", checkInView);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
