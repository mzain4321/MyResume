"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass-morphism py-3" : "bg-transparent"
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
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <button className="p-2">
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
