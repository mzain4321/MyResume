"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  const handleDownload = async () => {
    const html2pdf = (await import("html2pdf.js")).default;
    const element = document.body;
    const opt = {
      margin: 10,
      filename: 'Zain_Imran_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: '#050b18'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-secondary font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Zain Imran <span className="text-primary text-glow">.</span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-8">
            Building digital experiences that <span className="text-accent underline decoration-primary decoration-2 underline-offset-4">matter</span>.
          </h3>
          <p className="text-lg text-foreground/70 max-w-lg mb-10 leading-relaxed">
            I'm a Full-Stack Web Developer specialized in Next.js, MongoDB, and creating seamless, high-performance web applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary/80 transition-all"
              >
                Get in touch
              </motion.button>
            </a>
            
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-foreground/20 text-foreground/80 rounded-full font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2 group cursor-pointer"
            >
              Download CV <FaChevronDown className="-rotate-90 group-hover:rotate-0 transition-transform" />
            </motion.button>

            <div className="flex items-center gap-4">
              <a href="https://github.com/mzain4321" className="text-2xl hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="mailto:mirzazan3334@gmail.com" className="text-2xl hover:text-primary transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/30 rotate-3 hover:rotate-0 transition-transform duration-500">
               <Image
                src="/mypic.jpg"
                alt="Zain Imran"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-2xl text-primary/50"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}
