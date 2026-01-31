"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 px-4 py-3 md:px-6 md:py-4",
        scrolled ? "glass-morphism py-3 !border-none !bg-slate-900/90 !backdrop-blur-3xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          ZAIN.
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                data-cursor="silent"
                className="group relative block overflow-hidden text-sm font-medium"
              >
                <span className="block text-foreground/80 transition-transform duration-300 group-hover:-translate-y-full py-2 px-1">
                  {link.name}
                </span>
                <span className="absolute inset-0 block text-primary font-bold transition-transform duration-300 translate-y-full group-hover:translate-y-0 py-2 px-1">
                  {link.name}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50 relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-foreground block transition-transform origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-0.5 bg-foreground block transition-opacity"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-foreground block transition-transform origin-center"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center pt-20"
            >
               <ul className="flex flex-col gap-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      data-cursor="silent"
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
