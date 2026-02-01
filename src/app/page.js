"use client";
import HeroCanvas from "./components/modern/HeroCanvas";
import Navbar from "./components/modern/Navbar";
import HeroSection from "./components/modern/HeroSection";
import ModernSection from "./components/modern/ModernSection";
import dynamic from "next/dynamic";
const Experience = dynamic(() => import("./components/modern/Experience"), {
  ssr: false,
  loading: () => <div className="h-24 flex items-center justify-center">Loading experience...</div>,
});
const SkillsGlobe = dynamic(() => import("./components/modern/SkillsGlobe"), {
  ssr: false,
  loading: () => <div className="h-64 md:h-96 flex items-center justify-center">Loading skills...</div>,
});
const Projects = dynamic(() => import("./components/modern/Projects"), {
  ssr: false,
  loading: () => <div className="h-24 flex items-center justify-center">Loading projects...</div>,
});
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  return (
    <main id="main-content" className="relative min-h-screen text-foreground selection:bg-primary/30">
      <HeroCanvas />
      <Navbar />
      
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glow rounded-full z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-glow rounded-full z-[-1]" />

      <HeroSection />

      <ModernSection id="about" title="About Me">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <p className="text-lg leading-relaxed text-foreground/70">
            I&apos;m a passionate <span className="text-white font-semibold">Full-Stack Developer</span> based in Pakistan,
            currently pursuing a Bachelor&apos;s in <span className="text-primary italic">Computer Science</span>.
            I love building scalable web applications and exploring the latest technologies.
            My focus is on creating clean, efficient code and delivering exceptional user experiences.
          </p>
          <div className="glass-morphism p-8 rounded-2xl border-l-4 border-primary">
             <p className="italic text-foreground/80">
               Committed to writing clean, maintainable code and contributing to open-source projects to develop scalable and high-performance solutions.
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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
            {/* Left: Contact Info Cards */}
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt />
                  </div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-foreground/60 text-sm">Gujrat, Punjab , Pakistan</p>
                </div>

                <div className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <p className="text-foreground/60 text-sm truncate w-full">mirzazan3334@gmail.com</p>
                </div>

                <div className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl mb-4 group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <h4 className="text-white font-bold mb-2">Phone</h4>
                  <p className="text-foreground/60 text-sm">+92-322-6409363</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="h-full">
              <form id="contact-form" className="glass-morphism p-6 rounded-2xl border border-white/5 h-full flex flex-col" onSubmit={async (e) => {
                e.preventDefault();
                const f = e.target;
                const data = {
                  name: f.name.value.trim(),
                  email: f.email.value.trim(),
                  message: f.message.value.trim(),
                  company: f.company?.value || ""
                };
                setSubmitting(true);
                setSuccess(null);
                try {
                  const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                  const json = await res.json();
                  if (res.ok && json.ok) {
                    setSuccess(true);
                    f.reset();
                  } else {
                    setSuccess(false);
                  }
                } catch (err) {
                  setSuccess(false);
                } finally {
                  setSubmitting(false);
                }
              }}>
                <input type="text" name="company" className="hidden" autoComplete="off" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-slate-900/40 border border-white/5" />
                  <input name="email" type="email" required placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-slate-900/40 border border-white/5" />
                </div>
                <div className="flex-1 mt-2">
                  <textarea name="message" rows="6" required placeholder="How can I help?" className="w-full h-full px-4 py-3 rounded-lg bg-slate-900/40 border border-white/5 resize-none" />
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow cta-gradient">
                    <span className="cta-label">Send Message</span>
                  </button>
                  <span className="text-sm text-foreground/70">{submitting ? 'Sending...' : success === true ? 'Message sent — thanks!' : success === false ? 'Failed to send.' : ''}</span>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Build Something Together</h3>
            <p className="text-foreground/70 mb-10 text-lg">
              I&apos;m currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <a 
              href="mailto:mirzazan3334@gmail.com" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all group"
            >
              Say Hello <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <div className="flex justify-center gap-8 mt-16 text-2xl text-foreground/50">
              <a href="https://github.com/mzain4321" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/zain-imran-792545320" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </ModernSection>

      <footer className="py-10 text-center text-foreground/50 font-mono text-sm border-t border-white/5">
        <p>Built by Zain Imran &copy; 2026</p>
      </footer>
    </main>
  );
}
