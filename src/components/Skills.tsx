import React from 'react';
import { Code, Database, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'MySQL', level: 75 }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'Keras', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'NLP', level: 70 }
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Database,
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'Flask', level: 85 }
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'OpenCV', level: 80 }
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;