import React from 'react';
import { Code, Brain, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Passionate about creating innovative solutions using modern technologies'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Specialized in AI/ML with hands-on experience in deep learning projects'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication skills and experience in guiding IT professionals'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Focused on providing tailored solutions and staying current with trends'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Current Focus</h3>
            <p className="text-gray-700 max-w-2xl">
              I'm currently working on cutting-edge AI projects like gesture recognition systems, 
              while maintaining a strong GPA of 7.5/10.0 and actively contributing to social causes 
              through NSS volunteer work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;