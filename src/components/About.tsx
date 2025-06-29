import React from 'react';
import { GraduationCap, Code, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate front-end developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Front-end web developer with a strong foundation in HTML, CSS, JavaScript, ReactJS, and Next.js. 
              I'm passionate about creating user-friendly and visually appealing web applications that provide 
              exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm skilled in working with various tools and frameworks to build dynamic websites, and I'm 
              continuously improving my coding skills to contribute effectively to project success. My goal 
              is to create innovative solutions that make a positive impact.
            </p>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 dark:text-white">Computer Science</h5>
                <p className="text-gray-600 dark:text-gray-400">Faculty of Computers and Information, Tanta University</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">2021 - 2025</p>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 text-center">
                <Code className="text-blue-600 dark:text-blue-400 mx-auto mb-3" size={32} />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">6+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 text-center">
                <Target className="text-purple-600 dark:text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100%</h4>
                <p className="text-gray-600 dark:text-gray-400">Commitment</p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Strengths</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Responsive Web Design
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  React.js & Next.js Development
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  API Integration
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Performance Optimization
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Continuous Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;