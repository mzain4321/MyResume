"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TrustBridge AI",
    description: "A collaborative platform for entrepreneurs and investors. Built with React and Node.js.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    link: "#",
  },
  {
    title: "Gujrat Fans",
    description: "E-commerce platform for an industrial organization, optimized for performance and SEO.",
    tech: ["Next.js", "Vercel", "Tailwind"],
    github: "#",
    link: "https://gujrat-fans.vercel.app/",
  },
  {
    title: "Event Management",
    description: "Full-stack event booking and management system with admin dashboard.",
    tech: ["Next.js", "MongoDB", "Express"],
    github: "#",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          whileHover={{ y: -10 }}
          className="glass-morphism p-6 rounded-2xl group flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="text-4xl text-primary opacity-80 group-hover:opacity-100 transition-opacity">
              <FaExternalLinkAlt className="text-2xl" />
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="hover:text-primary transition-colors text-xl">
                <FaGithub />
              </a>
              <a href={project.link} className="hover:text-primary transition-colors text-xl">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm mb-6 flex-grow">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t) => (
              <li key={t} className="text-xs font-mono text-secondary">
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
