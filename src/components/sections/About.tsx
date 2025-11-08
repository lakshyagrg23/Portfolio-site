import React from 'react';

const About = () => {
  return (
    <section id="about" className="modern-section py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="modern-card p-8 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Hey! I’m Lakshya — a Pre-Final Year Computer Science Undergrad at IIIT Naya Raipur who’s passionate about building things that work and scale. Whether it’s designing full-stack applications or experimenting with AI, I love working at the intersection of development and innovation.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Lately, I’ve been diving deep into backend engineering, learning about deployment strategies, and exploring how cloud services can support real-world applications. I’m also fascinated by agentic AI — and have been exploring how tools like LangChain, LangGraph and LangSmith can power intelligent workflows in full-stack projects.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I’m a curious problem-solver who enjoys understanding how things work under the hood — from databases to DevOps — and using that knowledge to build smarter, more efficient solutions.
            </p>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">What I Do</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="modern-card primary p-6 transition-transform hover:scale-105">
                <div className="text-indigo-600 dark:text-indigo-400 mb-3 skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">Full-Stack & Scalable Backend Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I design and engineer end-to-end applications and robust, scalable backend services using Node.js, ExpressJS, and TypeScript, backed by PostgreSQL/Supabase. I specialize in building high-performance APIs and cross-platform frontends using ReactJS and React Native/Expo for both web and mobile deployment.
                </p>
              </div>
              
              <div className="modern-card secondary p-6 transition-transform hover:scale-105">
                <div className="text-blue-600 dark:text-blue-400 mb-3 skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">AI-Driven Product Development & Workflow Automation</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I integrate generative AI (LLMs) and custom models to create intelligent, high-value product features. This includes building agentic workflows with tools like LangChain, implementing AI-driven personalization in products, and performing advanced data analysis to automate tasks and inform decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
