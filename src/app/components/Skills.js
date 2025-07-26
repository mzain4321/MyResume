'use client';

import { useEffect } from "react";
import FontAwesome from "./FontAwesome";

export default function Skills() {
  useEffect(() => {
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll(".skill-progress");
      skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width || "0%";
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Languages & Frontend",
      icon: "code",
      skills: [
        { name: "HTML5", level: "90%" },
        { name: "CSS3", level: "85%" },
        { name: "JavaScript (ES6+)", level: "80%" },
        { name: "React.js", level: "75%" },
        { name: "Next.js", level: "70%" },
        { name: "Tailwind CSS", level: "75%" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "server",
      skills: [
        { name: "Node.js", level: "70%" },
        { name: "MongoDB", level: "65%" },
        { name: "RESTful APIs", level: "75%" },
        { name: "JWT Authentication", level: "70%" }
      ]
    },
    {
      title: "Tools & Deployment",
      icon: "tools",
      skills: [
        { name: "GitHub", level: "80%" },
        { name: "Postman", level: "75%" },
        { name: "Vercel", level: "70%" }
      ]
    }
  ];

  return (
    <section id="skills-section" className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-300 inline-block relative pb-2">
        Skills
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3 text-primary dark:text-primary-300">
              <FontAwesome icon={category.icon} className="text-primary" />
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="skill-progress h-2 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out" 
                      data-width={skill.level}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}