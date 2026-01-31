"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Staggered springs for the trailing ghost effect
  const trailConfig1 = { damping: 25, stiffness: 300, mass: 0.5 };
  const trailConfig2 = { damping: 20, stiffness: 200, mass: 0.6 };
  const trailConfig3 = { damping: 15, stiffness: 150, mass: 0.7 };

  const trailX1 = useSpring(mouseX, trailConfig1);
  const trailY1 = useSpring(mouseY, trailConfig1);
  
  const trailX2 = useSpring(mouseX, trailConfig2);
  const trailY2 = useSpring(mouseY, trailConfig2);

  const trailX3 = useSpring(mouseX, trailConfig3);
  const trailY3 = useSpring(mouseY, trailConfig3);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Ghost Trail Dots */}
      {[
        { x: trailX3, y: trailY3, scale: 0.5, opacity: 0.1 },
        { x: trailX2, y: trailY2, scale: 0.65, opacity: 0.2 },
        { x: trailX1, y: trailY1, scale: 0.8, opacity: 0.4 },
      ].map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full"
          style={{
            x: trail.x,
            y: trail.y,
            scale: trail.scale,
            opacity: trail.opacity,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}

      {/* Rotating Cyber Ring / Crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/30 rounded-full"
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 180 : 0,
          borderColor: isHovered ? "rgba(59, 130, 246, 0.6)" : "rgba(59, 130, 246, 0.2)",
        }}
        transition={{ duration: 0.5, ease: "circOut" }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Decorative Tech Notches */}
        <div className="absolute top-0 left-1/2 -ms-[1px] w-[2px] h-[6px] bg-primary/50" />
        <div className="absolute bottom-0 left-1/2 -ms-[1px] w-[2px] h-[6px] bg-primary/50" />
        <div className="absolute left-0 top-1/2 -mt-[1px] h-[2px] w-[6px] bg-primary/50" />
        <div className="absolute right-0 top-1/2 -mt-[1px] h-[2px] w-[6px] bg-primary/50" />
      </motion.div>

      {/* Inner Precision Core */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#3b82f6]"
        animate={{
          scale: isHovered ? 2.5 : 1,
        }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
