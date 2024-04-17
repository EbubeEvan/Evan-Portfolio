import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export const metadata = {
  title: "Evangeline Mmayie",
  description: "Portfolio Website",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4 max-[280px]:px-[0.7rem] !scroll-smooth">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </main>
  );
}
