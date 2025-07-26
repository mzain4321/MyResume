import Link from "next/link";
import FontAwesome from "./FontAwesome";

export default function Projects() {
  const projects = [
    {
      title: "Gujrat Fans E-commerce",
      icon: "shopping-cart",
      description: "Single-page e-commerce platform for Gujrat Fans built with Next.js, showcasing products and company information.",
      tags: ["Next.js", "Vercel", "Responsive Design"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Event Management System",
      icon: "calendar-check",
      description: "Platform for creating and managing local events with features like listings, booking, and admin control panel.",
      tags: ["Next.js", "MongoDB", "Full-stack"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Gujrat Fans Mobile App",
      icon: "mobile-alt",
      description: "Mobile application for Gujrat Fans with product listings, inquiry forms, and user-friendly interface (In Progress).",
      tags: ["Android Studio", "Java", "Mobile"],
      demoLink: "#",
      codeLink: null
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-300 inline-block relative pb-2">
        Projects
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="h-44 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
              <FontAwesome icon={project.icon} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href={project.demoLink} 
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  <FontAwesome icon="external-link-alt" className="text-sm" />
                  {project.codeLink ? "Live Demo" : "Coming Soon"}
                </Link>
                
                {project.codeLink && (
                  <Link 
                    href={project.codeLink} 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    target="_blank"
                  >
                    <FontAwesome icon={['fab', 'github']} className="text-sm" />
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}