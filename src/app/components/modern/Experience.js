"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Software House (Cybersilo)",
    role: "Web Developer",
    date: "Ongoing",
    desc: "Developing web applications using React and Laravel, collaborating with technical teams.",
  },
  {
    company: "TrustBridge AI",
    role: "Web App Developer",
    date: "July 2025 - Ongoing",
    desc: "Building a platform for entrepreneur-investor collaboration using React and Node.js.",
  },
  {
    company: "Freelance Work",
    role: "Full-Stack Developer",
    date: "March 2025",
    desc: "Built Gujrat Fans e-commerce platform using Next.js, optimized for Vercel deployment.",
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <h3 className="text-xl font-bold text-white mb-1">
            {exp.role} <span className="text-primary">@ {exp.company}</span>
          </h3>
          <p className="text-secondary font-mono text-sm mb-4">{exp.date}</p>
          <p className="text-foreground/70 leading-relaxed">
            {exp.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
