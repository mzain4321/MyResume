"use client";

import { motion } from "framer-motion";

export default function ModernSection({ children, id, title, className }) {
  return (
    <section id={id} className={`py-12 md:py-[min(10vh,6rem)] px-6 relative ${className || ""}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
              {title}
            </h2>
            <div className="h-[1px] w-full bg-primary/30"></div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
