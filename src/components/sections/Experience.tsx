import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Green Intern",
      company: "1M1B Green Internship Program in partnership with AICTE and Salesforce",
      period: "Jan 2025 – Mar 2025",
      responsibilities: [
        "Contributed to sustainability initiatives using AI and Data Analytics tools, with a focus on environmental awareness and green solutions.",
        "Developed data visualization skills with Tableau, earning badges on Salesforce Trailblaze for data analysis and Tableau.",
        "Gained hands-on experience with AI tools and prompt engineering, and participated in workshops on the role of technology in building a sustainable future.",
        "Supported projects aligned with the UN's Sustainable Development Goals (SDGs)."
      ]
    }
  ];

  return (
    <section id="experience" className="modern-section py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">Experience</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          My professional journey and hands-on experience in the industry.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="modern-card secondary mb-10 p-6 transition-transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {exp.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 mb-4">
                {exp.company}
              </h4>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
