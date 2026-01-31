
"use client";

import HeroCanvas from "./components/modern/HeroCanvas";
import Navbar from "./components/modern/Navbar";
import HeroSection from "./components/modern/HeroSection";
import ModernSection from "./components/modern/ModernSection";
import Experience from "./components/modern/Experience";
import SkillsGlobe from "./components/modern/SkillsGlobe";
import Projects from "./components/modern/Projects";
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen text-foreground selection:bg-primary/30">
      <HeroCanvas />
      <Navbar />
      
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glow rounded-full z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-glow rounded-full z-[-1]" />

      <HeroSection />

      <ModernSection id="about" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-lg leading-relaxed text-foreground/70">
            I'm a passionate <span className="text-white font-semibold">Full-Stack Developer</span> based in Pakistan, 
            currently pursuing a Bachelor's in <span className="text-primary italic">Computer Science</span>. 
            I love building scalable web applications and exploring the latest technologies.
            My focus is on creating clean, efficient code and delivering exceptional user experiences.
          </p>
          <div className="glass-morphism p-8 rounded-2xl border-l-4 border-primary">
             <p className="italic text-foreground/80">
               "Committed to writing clean, maintainable code and contributing to open-source projects to develop scalable and high-performance solutions."
             </p>
          </div>
        </div>
      </ModernSection>

      <ModernSection id="experience" title="Where I've Worked">
        <Experience />
      </ModernSection>

      <ModernSection id="projects" title="Featured Projects">
        <Projects />
      </ModernSection>

      <ModernSection id="skills" title="Technical Arsenal" className="overflow-visible">
        <SkillsGlobe />
      </ModernSection>

      <ModernSection id="contact" title="Get In Touch">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Together</h3>
          <p className="text-foreground/70 mb-10 text-lg">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:mirzazan3334@gmail.com" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all group"
          >
            Say Hello <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <div className="flex justify-center gap-8 mt-16 text-2xl text-foreground/50">
            <a href="https://github.com/mzain4321" className="hover:text-primary transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </ModernSection>

      <footer className="py-10 text-center text-foreground/50 font-mono text-sm border-t border-white/5">
        <p>Built by Zain Imran &copy; 2026</p>
      </footer>
    </main>
  );
}
