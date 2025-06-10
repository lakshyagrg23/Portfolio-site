import React from 'react';

const Education = () => {
  return (
    <section id="education" className="modern-section py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Education</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Academic background and relevant coursework
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="modern-card primary p-8 transition-transform hover:scale-105">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                B. Tech. (Computer Science Engineering)
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                Aug 2023 – 2027
              </span>
            </div>
            
            <h4 className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
              International Institute of Information Technology, Naya Raipur
            </h4>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-indigo-600 dark:text-indigo-400">CGPA:</strong> 9.17
              </p>
            </div>
            
            <div className="mt-6">
              <h5 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
                Relevant Coursework:
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures and Algorithms',
                  'Operating Systems',
                  'Computer Networks',
                  'Database Management Systems',
                  'Software Engineering',
                  'Object Oriented Programming',
                  'Computer Architecture',
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Discrete Mathematics',
                  'Linear Algebra and Matrix Analysis',
                  'Probability and Statistics'
                ].map((course, index) => (
                  <span 
                    key={index} 
                    className="tech-tag px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
