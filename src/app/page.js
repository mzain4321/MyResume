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
import { motion } from "framer-motion";

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

      <ModernSection id="contact" title="Get In Touch" className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column: Contact Info & CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let&apos;s Build <span className="text-primary italic">Something Great</span> Together
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  I&apos;m currently looking for new opportunities and my inbox is always open. 
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <FaMapMarkerAlt />, label: "Location", value: "Gujrat, Punjab, Pakistan" },
                  { icon: <FaEnvelope />, label: "Email", value: "mirzazan3334@gmail.com", href: "mailto:mirzazan3334@gmail.com" },
                  { icon: <FaPhone />, label: "Phone", value: "+92-322-6409363", href: "tel:+923226409363" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-morphism p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 font-mono uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-medium hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-sm text-foreground/50 mb-4 font-mono">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, link: "https://github.com/mzain4321", label: "GitHub" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zain-imran-792545320", label: "LinkedIn" },
                    { icon: <FaTwitter />, link: "#", label: "Twitter" }
                  ].map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-morphism border border-white/5 flex items-center justify-center text-xl text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-morphism p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
              >
                {/* Decorative background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                
                <form 
                  id="contact-form" 
                  className="space-y-6 relative z-10" 
                  onSubmit={async (e) => {
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
                  }}
                >
                  <input type="text" name="company" className="hidden" autoComplete="off" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest pl-1">Name</label>
                      <input 
                        name="name" 
                        required 
                        placeholder="Zain Imran" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 text-white" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest pl-1">Email</label>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="hello@example.com" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 text-white" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-foreground/50 uppercase tracking-widest pl-1">Message</label>
                    <textarea 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder="Let&apos;s talk about your project..." 
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/10 text-white resize-none" 
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                    <motion.button 
                      type="submit" 
                      disabled={submitting}
                      className="w-full sm:w-auto px-10 py-4 rounded-xl font-bold cta-gradient flex items-center justify-center gap-3 overflow-hidden group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">
                        {submitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <motion.div
                        animate={submitting ? { 
                          x: [0, 50, -50, 0], 
                          y: [0, -50, -50, 0],
                          opacity: [1, 0, 0, 1]
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="relative z-10"
                      >
                        <FaPaperPlane className={`text-lg transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 ${submitting ? '' : ''}`} />
                      </motion.div>
                    </motion.button>
                    
                    {success !== null && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-sm font-medium ${success ? 'text-blue-400' : 'text-red-400'}`}
                      >
                        {success ? 'Message sent successfully!' : 'Something went wrong. Please try again.'}
                      </motion.span>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ModernSection>

      <footer className="py-10 text-center text-foreground/50 font-mono text-sm border-t border-white/5">
        <p>Built by Zain Imran &copy; 2026</p>
      </footer>
    </main>
  );
}
