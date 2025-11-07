import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Cognito",
      period: "Jun 2025 – Aug 2025",
      responsibilities: [
        "Engineered scalable backend architecture using Supabase serverless functions, serving as the core logic and authentication system, delivering 80% of MVP features in 5 weeks.",
        "Engineered 8+ production features, including AI-driven personalization (using LLM APIs for user insights) and integrating Razorpay payments, while optimizing frontend flows for UX and reducing release errors.",
        "Partnered with product management in agile sprints, translating business needs into scalable engineering solutions."
      ]
    },
    {
      title: "Green Intern (Data Analytics)",
      company: "1M1B | AICTE and Salesforce",
      period: "Jan 2025 – Mar 2025",
      responsibilities: [
        "Modeled multi-year time-series data for energy/water/waste; created Tableau dashboards to analyze trends, seasonality, and anomalies.",
        "Partnered with stakeholders to convert quantitative insights into prioritized actions, demonstrating strong written/oral communication.",
        "Contributed to sustainability initiatives using AI and Data Analytics tools, with a focus on environmental awareness and green solutions."
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
