import FontAwesome from "./FontAwesome";

export default function Education() {
  const educations = [
    {
      date: "2022 - Ongoing",
      title: "Bachelor of Science: Computer Science",
      company: "ARID AGRICULTURE UNIVERSITY",
      description: "Gaining advanced knowledge in this field while developing projects and gaining practical experience through academic and industry collaborations."
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-primary-300 inline-block relative pb-2">
        Education
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
      </h2>
      
      <div className="relative pl-8">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
        
        {educations.map((edu, index) => (
          <div key={index} className="relative pb-8 last:pb-0">
            <div className="absolute -left-9 top-1 w-4 h-4 rounded-full border-2 border-secondary bg-primary"></div>
            <div className="font-semibold text-secondary mb-1">{edu.date}</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{edu.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
              <FontAwesome icon="university" className="text-sm" />
              <span>{edu.company}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}