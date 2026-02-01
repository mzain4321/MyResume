"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useState, useRef, useMemo, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { cn } from "@/app/lib/utils";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaGithub, FaDocker, FaStripe, FaDatabase, FaCode, FaServer, FaTools 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiJavascript, SiThreedotjs, 
  SiGreensock, SiRedux, SiTypescript, SiExpress, SiFastapi, 
  SiFlask, SiMongodb, SiMysql, SiSupabase, SiVercel, SiPostman, SiFramer 
} from "react-icons/si";

const iconMap = {
  "React": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind": <SiTailwindcss />,
  "JavaScript": <SiJavascript />,
  "HTML5": <FaHtml5 />,
  "CSS3": <FaCss3Alt />,
  "Three.js": <SiThreedotjs />,
  "GSAP": <SiGreensock />,
  "Redux": <SiRedux />,
  "TypeScript": <SiTypescript />,
  "Node.js": <FaNodeJs />,
  "Express": <SiExpress />,
  "Python": <FaPython />,
  "FastAPI": <SiFastapi />,
  "Flask": <SiFlask />,
  "MongoDB": <SiMongodb />,
  "MySQL": <SiMysql />,
  "Supabase": <SiSupabase />,
  "GitHub": <FaGithub />,
  "Vercel": <SiVercel />,
  "Postman": <SiPostman />,
  "Docker": <FaDocker />,
  "Stripe": <FaStripe />,
};

const allSkills = [
  // Frontend
  { name: "React", category: "Frontend", color: "#61dbfb" },
  { name: "Next.js", category: "Frontend", color: "#ffffff" },
  { name: "Tailwind", category: "Frontend", color: "#38b2ac" },
  { name: "JavaScript", category: "Frontend", color: "#f7df1e" },
  { name: "HTML5", category: "Frontend", color: "#e34f26" },
  { name: "CSS3", category: "Frontend", color: "#1572b6" },
  { name: "Three.js", category: "Frontend", color: "#ffffff" },
  { name: "GSAP", category: "Frontend", color: "#88ce02" },
  { name: "Redux", category: "Frontend", color: "#764abc" },
  { name: "TypeScript", category: "Frontend", color: "#3178c6" },
  // Backend
  { name: "Node.js", category: "Backend", color: "#68a063" },
  { name: "Express", category: "Backend", color: "#ffffff" },
  { name: "Python", category: "Backend", color: "#3776ab" },
  { name: "FastAPI", category: "Backend", color: "#05998b" },
  { name: "Flask", category: "Backend", color: "#ffffff" },
  // Databases
  { name: "MongoDB", category: "Databases", color: "#47a248" },
  { name: "MySQL", category: "Databases", color: "#4479a1" },
  { name: "Supabase", category: "Databases", color: "#3ecf8e" },
  // Tools
  { name: "GitHub", category: "Tools", color: "#ffffff" },
  { name: "Vercel", category: "Tools", color: "#ffffff" },
  { name: "Postman", category: "Tools", color: "#ef5b25" },
  { name: "Docker", category: "Tools", color: "#2496ed" },
  { name: "Stripe", category: "Tools", color: "#635bff" },
];

const skillSets = {
  FRONTEND: ["React", "Next.js", "Tailwind", "JavaScript", "HTML5", "CSS3", "Three.js", "GSAP", "Redux", "TypeScript"],
  BACKEND: ["Node.js", "Express", "Python", "FastAPI", "Flask"],
  DATABASES: ["MongoDB", "MySQL", "Supabase"],
  TOOLS: ["GitHub", "Vercel", "Postman", "Docker", "Stripe"],
};

const categoryInfo = {
  FRONTEND: {
    title: "Frontend",
    description: "Crafting responsive, interactive, and pixel-perfect user experiences.",
    icon: <FaCode />,
    skills: ["React", "Next.js", "Tailwind", "JavaScript", "HTML5", "CSS3", "Three.js", "GSAP", "Redux", "TypeScript"]
  },
  BACKEND: {
    title: "Backend",
    description: "Building robust, scalable server-side logic and high-performance APIs.",
    icon: <FaServer />,
    skills: ["Node.js", "Express", "Python", "FastAPI", "Flask"]
  },
  DATABASES: {
    title: "Databases",
    description: "Designing efficient schemas, optimizing queries, and ensuring data integrity.",
    icon: <FaDatabase />,
    skills: ["MongoDB", "MySQL", "Supabase"]
  },
  TOOLS: {
    title: "Tools",
    description: "Streamlining workflows with version control, containers, and deployment automation.",
    icon: <FaTools />,
    skills: ["GitHub", "Vercel", "Postman", "Docker", "Stripe"]
  }
};

// Categories for mobile view
const categories = {
  FRONTEND: "FRONTEND",
  BACKEND: "BACKEND",
  DATABASES: "DATABASES",
  TOOLS: "TOOLS"
};

function CategoryCard({ category, skills, position }) {
  const info = categoryInfo[category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? 20 : -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: position === 'top' ? 20 : -20, scale: 0.95 }}
      className={`hidden md:block absolute ${position === 'top' ? 'bottom-full mb-6' : 'top-full mt-6'} left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl w-[320px] z-[100] border border-primary/20 shadow-2xl`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-20">
         <div className="w-24 h-24 bg-primary/40 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="flex items-center gap-3 mb-3">
         <div className="text-2xl text-primary p-2 bg-primary/10 rounded-lg border border-primary/20">
           {info.icon}
         </div>
         <h3 className="text-xl font-bold text-white tracking-wide">{info.title}</h3>
      </div>
      
      <p className="text-sm text-gray-400 mb-6 leading-relaxed font-medium">
        {info.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
           <div key={skill} className="flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/5 border border-primary/20 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors cursor-default">
             <span>{iconMap[skill]}</span>
             {skill}
           </div>
        ))}
      </div>
    </motion.div>
  );
}

function CategoryButton({ label, icon, isActive, onMouseEnter, onMouseLeave, children }) {
  return (
    <div 
      className="relative pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        <div className={`flex items-center gap-4 bg-primary/10 border px-6 md:px-8 py-3 md:py-4 rounded-full cursor-pointer hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 shadow-xl group/btn
            ${isActive ? 'border-primary bg-primary/20 scale-105' : 'border-primary/30'}
        `}>
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40 group-hover/btn:rotate-12 transition-transform">
                <span className="text-primary text-sm">{icon}</span>
            </div>
            <span className="text-white font-bold tracking-[0.2em] text-[10px] md:text-xs">{label}</span>
        </div>
        <AnimatePresence>
            {isActive && children}
        </AnimatePresence>
    </div>
  );
}

function SkillsWeb({ activeCategory, position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef();
  
  const skillsWithPositions = useMemo(() => {
    return allSkills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / allSkills.length);
      const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
      const radius = 2.0; 
      return {
        ...skill,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ],
      };
    });
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const indices = [];
    
    skillsWithPositions.forEach((s) => positions.push(...s.position));
    
    // Validate positions array before creating geometry
    if (positions.length === 0 || positions.some(p => isNaN(p))) {
      return geometry; // Return empty geometry if invalid
    }
    
    for (let i = 0; i < skillsWithPositions.length; i++) {
        for (let j = i + 1; j < skillsWithPositions.length; j++) {
            const dist = new THREE.Vector3(...skillsWithPositions[i].position).distanceTo(new THREE.Vector3(...skillsWithPositions[j].position));
            if (dist < 2.5) {
                indices.push(i, j);
            }
        }
    }
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    return geometry;
  }, [skillsWithPositions]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const speed = activeCategory ? 0.05 : 0.15;
      groupRef.current.rotation.y += delta * speed;
      groupRef.current.rotation.x += delta * speed * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} wireframe />
      </Sphere>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.3} />
      </lineSegments>
      {skillsWithPositions.map((skill, i) => {
        const isActive = activeCategory && skill.category.toUpperCase() === activeCategory.toUpperCase();
        return (
          <group key={i} position={skill.position}>
            {/* Text labels restored for debugging */}
            <Html distanceFactor={10} zIndexRange={[2000, 1000]}>
              <div
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold text-white bg-black/70 backdrop-blur-md border transition-all duration-500 whitespace-nowrap shadow-lg cursor-default flex items-center gap-2
                  ${isActive ? "border-primary shadow-[0_0_20px_rgba(59,130,246,0.8)] z-50 text-base" : "border-white/10 opacity-80"}
                `}
                style={{ 
                  textShadow: `0 0 8px ${skill.color}`,
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                }}
              >
                <span className="text-lg">{iconMap[skill.name]}</span>
                {skill.name}
              </div>
            </Html>
            <Sphere args={[0.05, 16, 16]}>
              <meshStandardMaterial 
                color={skill.color} 
                emissive={skill.color}
                emissiveIntensity={isActive ? 4 : 1.5}
                transparent 
                opacity={activeCategory && !isActive ? 0.1 : 1}
              />
            </Sphere>
          </group>
        );
      })}
    </group>
  );
}

export default function SkillsGlobe() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Observe visibility of the container to pause rendering when off-screen
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    const current = containerRef.current;
    if (current) obs.observe(current);

    // Track page/tab visibility
    const handleVisibility = () => setIsTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (current) obs.unobserve(current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-[500px] md:h-[650px] mt-10 md:mt-32 overflow-visible rounded-3xl group px-4 pb-10 md:pb-20">
      {/* Background Effect - Only for Desktop */}
      <div className="hidden md:block absolute inset-x-0 inset-y-[-50px] bg-black/40 z-0 rounded-[3rem] pointer-events-none" />
      
      {!isMobile ? (
        <Canvas 
          frameloop={isVisible && isTabVisible ? "always" : "demand"}
          camera={{ position: [-0.5, 0, 8], fov: 45 }} 
          dpr={[1, 1.5]} 
          style={{ overflow: 'visible', height: '100%', pointerEvents: 'auto' }}
        >
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <SkillsWeb 
              activeCategory={activeCategory} 
              position={[-1.5, 0, 0]} 
              scale={1}
            />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={!activeCategory} autoRotateSpeed={0.5} />
        </Canvas>
      ) : (
        <div className="flex flex-col gap-10 w-full py-8">
          {Object.keys(categoryInfo).map((catKey) => {
            const cat = categoryInfo[catKey];
            const skills = allSkills.filter(s => s.category.toUpperCase() === catKey);
            
            return (
              <div key={catKey} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40">
                    <span className="text-primary text-sm">{cat.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wider">{cat.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-md shadow-lg"
                    >
                      <span className="text-xl" style={{ color: skill.color }}>{iconMap[skill.name]}</span>
                      <span className="text-sm font-semibold text-foreground/90">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="hidden md:flex absolute inset-0 pointer-events-none p-8 flex-col justify-between">
        <div className="flex justify-between items-start">
             <CategoryButton 
               label="BACKEND" 
               icon="⚙️" 
               isActive={activeCategory === "Backend"}
               onMouseEnter={() => setActiveCategory("Backend")}
               onMouseLeave={() => setActiveCategory(null)}
             >
                <CategoryCard category="BACKEND" skills={skillSets.BACKEND} position="bottom" />
             </CategoryButton>

             <CategoryButton 
               label="TOOLS" 
               icon="🛠️" 
               isActive={activeCategory === "Tools"}
               onMouseEnter={() => setActiveCategory("Tools")}
               onMouseLeave={() => setActiveCategory(null)}
             >
                <CategoryCard category="TOOLS" skills={skillSets.TOOLS} position="bottom" />
             </CategoryButton>
        </div>

        <div className="flex justify-between items-end pb-4">
            <CategoryButton 
               label="DATABASES" 
               icon="🗄️" 
               isActive={activeCategory === "Databases"}
               onMouseEnter={() => setActiveCategory("Databases")}
               onMouseLeave={() => setActiveCategory(null)}
             >
                <CategoryCard category="DATABASES" skills={skillSets.DATABASES} position="top" />
             </CategoryButton>

            <CategoryButton 
               label="FRONTEND" 
               icon="🔲" 
               isActive={activeCategory === "Frontend"}
               onMouseEnter={() => setActiveCategory("Frontend")}
               onMouseLeave={() => setActiveCategory(null)}
             >
                <CategoryCard category="FRONTEND" skills={skillSets.FRONTEND} position="top" />
             </CategoryButton>
        </div>
      </div>
    </div>
  );
}
