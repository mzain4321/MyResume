import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}