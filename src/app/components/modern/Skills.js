"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, 
  FaGithub, FaRocket, FaWind, FaServer, FaTools, FaPython
} from "react-icons/fa";
import { 
  SiFastapi, SiFlask, SiSupabase, SiExpress, SiPython, SiMysql 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: FaRocket },
      { name: "Tailwind CSS", icon: FaWind },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "RESTful APIs", icon: FaServer },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: FaTools },
      { name: "Vercel", icon: FaRocket },
    ],
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {skillCategories.map((cat, i) => (
        <div key={cat.title}>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-primary font-mono text-sm">0{i+1}.</span>
            {cat.title}
          </h3>
          <div className="flex flex-wrap gap-4">
            {cat.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                className="flex items-center gap-2 px-4 py-2 glass-morphism rounded-lg text-sm transition-colors cursor-default"
              >
                <skill.icon className="text-xl text-primary" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
