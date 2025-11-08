import React from 'react';
import '../../assets/projectAnimations.css';

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string;
  timeframe: string;
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
  imagePlaceholder: string;
}

const Project = ({ 
  title, 
  description, 
  technologies, 
  timeframe,
  githubLink,
  demoLink,
  imageUrl,
  imagePlaceholder
}: ProjectProps) => {
  return (
    <div className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      {/* Project image - top */}
      <div className="project-image-container relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-48 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={imagePlaceholder} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="text-center p-4">
            <p className="text-gray-500 dark:text-gray-400 mb-2">{imagePlaceholder}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Image will be placed here</p>
          </div>
        )}
      </div>
      
      {/* Content - bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
            {title}
          </h3>
        </div>
        
        <span className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium">
          {timeframe}
        </span>
        
        <div className="mb-4 flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-1">
            {technologies.split(', ').map((tech, index) => (
              <span 
                key={index} 
                className="tech-tag px-2 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-auto pt-2">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-sm font-medium"
            >
              Live Demo
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MailWise: AI-Powered Email Management Platform",
      description: [
        "Conceived and led development of an AI-powered web platform that automates Gmail categorization and analysis with Gemini AI + OAuth, cutting manual sorting time by ~60%.",
        "Designed React.js frontend with UX-focused previews and AI-assisted drafting, enhancing efficiency by ~40%.",
        "Designed and deployed a secure, scalable, and reliable cloud infrastructure on AWS (EC2, RDS, Amplify). Optimized backend components (Node.js/PostgreSQL) to achieve >3× speedup in data processing."
      ],
      technologies: "ReactJS, NodeJS, ExpressJS, PostgreSQL, Gmail API, Google Gemini AI, AWS (EC2, RDS, Amplify)",
      timeframe: "Jan 2025 – Present",
      githubLink: "https://github.com/lakshyagrg23/MailWise-v5",
      demoLink: "https://main.d2n81lupyovp57.amplifyapp.com/",
      imageUrl: "/mailwise.png", 
      imagePlaceholder: "MailWise Dashboard"
    },
    {
      title: "MindCare: AI-Powered Mental Wellness Platform",
      description: [
        "Engineered an AI-driven mental wellness assistant for youth, integrating Gemini AI, crisis detection, and gamified tracking, expected to improve engagement by ~30%.",
        "Built an immersive chat system with a React.js + VRM avatar frontend and a Node.js/Express + PostgreSQL backend for reliable, low-latency performance.",
        "Leveraged GCP (Cloud Run, Cloud SQL) for secure data management, and ensuring scalability and performance."
      ],
      technologies: "ReactJS, NodeJS, ExpressJS, PostgreSQL, Google Cloud (Gemini AI, Cloud Run, Cloud SQL), TTS",
      timeframe: "Sep 2025 – Present",
      githubLink: "https://github.com/sunjinwoo1298/MentalHealth",
      demoLink: "https://mental-health-frontend-571352463117.asia-south1.run.app/",
      imageUrl: "/mindcare.png", 
      imagePlaceholder: "MindCare AI Assistant"
    },
    {
      title: "CribConcierge: AI-Powered Real Estate Platform",
      description: [
        "Built an immersive platform with 360° VR property tours and voice-controlled navigation coupled with an AI assistant.",
        "Engineered AI agent workflows using LangChain and Gemini for context-aware recommendations & market analytics.",
        "Engineered a Flask backend, and integrated voice recognition & text-to-speech for enhanced accessibility."
      ],
      technologies: "ReactJS, A-Frame (VR), Flask, MongoDB, LangChain, FAISS, Google Gemini API",
      timeframe: "Jul 2025 – Present",
      githubLink: "https://github.com/lakshyagrg23/CribConcierge",
      demoLink: "https://crib-concierge.vercel.app/",
      imageUrl: "/cribconcierge.png", 
      imagePlaceholder: "CribConcierge VR Property Tour"
    },
    {
      title: "CrowdScope: AI-Driven Market Insights Platform",
      description: [
        "Built a solution that analyzes community discussions (Reddit) to extract real-time market/consumer insights using Gemini AI and Python — reducing manual research by ~70%.",
        "Developed scalable backend with Node.js/Python for optimized data retrieval/analysis.",
        "Delivered business-oriented reports through an intuitive React UI, useful for market analysis and client decision-making."
      ],
      technologies: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, Python, Gemini AI, Reddit PRAW API",
      timeframe: "Feb 2025 – Apr 2025",
      githubLink: "https://github.com/lakshyagrg23/CrowdScope",
      demoLink: "https://crowd-scope.vercel.app/",
      imageUrl: "/crowdscope.png", 
      imagePlaceholder: "CrowdScope Analytics Dashboard"
    },
    {
      title: "Deepfake Detection System Using CNN and FFT",
      description: [
        "Developed a deepfake detection system using Convolutional Neural Networks (CNN) and Fast Fourier Transform (FFT) for enhanced accuracy of 85% in image and video classification.",
        "Implemented a dual-input model combining spatial image features with frequency-domain representations, improving precision from 75% to 85% and achieving high accuracy in distinguishing real and fake media.",

      ],
      technologies: "Python, TensorFlow, CNN, FFT, ReactJS",
      timeframe: "Aug 2024 – Dec 2024",
      githubLink: "https://github.com/lakshyagrg23/DeepfakeDetection",
      demoLink: "https://qft-deepfake-demo.vercel.app",
      imageUrl: "/deepfake.png", 
      imagePlaceholder: "Deepfake Detection System"
    },
    {
      title: "Plinko Lab - Provably Fair Gaming",
      description: [
        "Engineered a Provably Fair commit-reveal protocol using SHA-256 hashing and a deterministic xorshift32 PRNG to guarantee 100% reproducible game outcomes.",
        "Developed the full stack using Next.js 14, TypeScript, and Prisma, implementing the three-step round lifecycle (commit, start, reveal) via API routes for secure data management."
      ],
      technologies: "Next.js 14, TypeScript, Prisma, SHA-256, PRNG",
      timeframe: "Nov 2025 - Present",
      githubLink: "https://github.com/lakshyagrg23/Plinko-Lab",
      demoLink: "https://plinko-9tcjrl6fw-l5grg23-gmailcoms-projects.vercel.app/",
      imageUrl: "/plinko.png", 
      imagePlaceholder: "Plinko Lab Gaming Interface"
    }
  ];

  return (
    <section id="projects" className="modern-section py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Projects</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills in full stack development, AI integration, and problem-solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              timeframe={project.timeframe}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
              imagePlaceholder={project.imagePlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
