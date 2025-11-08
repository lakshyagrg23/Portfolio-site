import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Web & Mobile Development',
      skills: ['HTML', 'CSS', 'ReactJS', 'React Native', 'NodeJS', 'ExpressJS', 'Next.js'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      title: 'AI & Machine Learning',
      skills: ['LangChain', 'LangGraph', 'LangSmith', 'OpenAI', 'TensorFlow', 'scikit-learn', 'CNNs', 'LLMs', 'FAISS', 'ChromaDB'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'accent'
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Prisma'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'primary'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, RDS, Amplify)', 'GCP (Cloud Run, Cloud SQL)', 'OCI', 'Docker', 'NGINX', 'Git', 'GitHub'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      title: 'Data & Analytics',
      skills: ['Tableau', 'Excel', 'Jupyter', 'Model Evaluation', 'EDA', 'Feature Engineering', 'NumPy', 'Pandas'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'accent'
    }
  ];

  return (
    <section id="skills" className="modern-section py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">Skills</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          I've developed expertise in various technologies and tools throughout my journey as a developer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-card modern-card ${category.color} p-6`}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 skill-icon">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="tech-tag px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
