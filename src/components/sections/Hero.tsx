import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-gradient-bg min-h-screen flex items-center pt-16 pb-12 px-4 text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
              Hi, I'm {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Lakshya Garg
              </span>
            </h1>
            <h2
              className="text-xl md:text-2xl mb-6 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              Full-Stack Developer skilled in backend and frontend technologies
            </h2>
            <p
              className="mb-8 text-lg animate-fadeIn"
              style={{ animationDelay: '0.4s' }}
            >
              Experienced in building backend services and frontend applications using Node.js, Express, React, and PostgreSQL. Currently deepening knowledge in scalable architectures, cloud deployment, and AI-driven solutions.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fadeIn"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="/Lakshya-Garg-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-md hover:shadow-lg transition-all flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="modern-button px-6 py-3 bg-white text-indigo-800 rounded-md hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="modern-button px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-all"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex mt-8 space-x-4 animate-fadeIn"
              style={{ animationDelay: '0.8s' }}
            >
              <a
                href="https://github.com/lakshyagrg23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/lakshya-garg23/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="hero-floating-element relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-xl bg-gradient-to-br from-indigo-500 to-purple-600">
              {/* Placeholder for profile image - replace with actual image later */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                <img
                  src="../../MyProfilePic.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        <div
          className="mt-16 flex justify-center animate-fadeIn"
          style={{ animationDelay: '1s' }}
        >
          <div className="animate-bounce">
            <a href="#about" className="text-white/70 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
