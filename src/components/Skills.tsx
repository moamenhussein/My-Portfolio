import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      title: 'Styling',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Sass (SCSS)', level: 85 },
        { name: 'React Bootstrap', level: 80 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Chrome DevTools', level: 80 },
        { name: 'API Integration', level: 85 },
      ],
    },
  ];

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Very Good' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Languages
          </h3>
          <div className="space-y-4">
            {languages.map((language, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {language.name}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Experience Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">UI</span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">UI Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creating responsive and interactive user interfaces
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 dark:text-purple-400 font-bold">SPA</span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">SPA Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building single-page applications with React
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 dark:text-green-400 font-bold">SSR</span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Next.js Apps</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                High-performance apps with SSR and Static Generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;