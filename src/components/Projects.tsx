import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Quiz Application',
      description: 'An interactive Quiz Application that features a variety of questions and provides immediate feedback on test results. Built with vanilla JavaScript to demonstrate core programming skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      date: 'Sep 22, 2023',
      liveDemo: 'https://moamenhussein.github.io/Quiz_App_With_HTML_CSS_JS/',
      github: 'https://github.com/moamenhussein/Quiz_App_With_HTML_CSS_JS',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Weather App',
      description: 'A comprehensive weather application that retrieves real-time weather information including city name, current temperature, and forecasts using external APIs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      date: 'Oct 15, 2023',
      liveDemo: 'https://moamenhussein.github.io/Weather-App-With-API/',
      github: 'https://github.com/moamenhussein/Weather-App-With-API',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Quraan Kareem',
      description: 'A comprehensive Quran website featuring prayer times, complete Quran text, interpretations, Hadiths, daily supplications, and Tasbeeh with multiple API integrations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      date: 'Nov 10, 2023',
      liveDemo: 'https://moamenhussein.github.io/Quraan-Kareem/',
      github: 'https://github.com/moamenhussein/Quraan-Kareem',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Hospital Management System',
      description: 'A state-of-the-art hospital management system with multiple pages including About, Team, FAQs, Booking, and authentication features built with React and Bootstrap.',
      technologies: ['React.js', 'Bootstrap', 'Routing'],
      date: 'Apr 30, 2024',
      liveDemo: 'https://hospital-website-umber.vercel.app/',
      github: 'https://github.com/moamenhussein/Hospital-Website',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce site using APIs to fetch and display products with detailed information, cart management, and smooth user experience powered by Redux Toolkit.',
      technologies: ['React.js', 'Redux Toolkit', 'API'],
      date: 'Jun 14, 2024',
      liveDemo: 'https://e-commerce-7cte.vercel.app/',
      github: 'https://github.com/moamenhussein/E-Commerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Market Wave Company',
      description: 'A corporate website showcasing company services, team profiles, and past projects with a focus on professional presentation and user experience.',
      technologies: ['React.js', 'Bootstrap', 'Routing'],
      date: 'Jul 14, 2024',
      liveDemo: 'https://market-wave-company.vercel.app/',
      github: 'https://github.com/moamenhussein/Market-Wave-Company',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveDemo}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/moamenhussein"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;