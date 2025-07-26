export default function About() {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mb-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-300 inline-block relative pb-2">
        About Me
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      <div className="space-y-4">
        <p>
          Full-Stack Web Developer with practical experience in creating modern web applications using Next.js, MongoDB, and Vercel, enabling efficient server-side rendering and smooth deployment. Actively expanding skills by working on projects with the MERN stack (MongoDB, Express.js, React.js, Node.js) to deepen expertise in full-stack development.
        </p>
        <p>
          Knowledgeable in building RESTful APIs, working with MySQL databases, deploying applications using Vercel, and integrating SaaS tools. Committed to writing clean, maintainable code and contributing to open-source projects to develop scalable and high-performance solutions.
        </p>
      </div>
    </section>
  );
}